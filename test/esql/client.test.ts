/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import * as http from 'node:http'
import * as net from 'node:net'
import { Transport, WeightedConnectionPool, UndiciConnection } from '@elastic/transport'
import { runQuery, EsqlError } from '../../src/esql/esql-client.ts'
import { setResolvedConfig } from '../../src/config/store.ts'
import { _testResetTransport, _testSetTransport } from '../../src/lib/transport.ts'
import type { ResolvedConfig } from '../../src/config/types.ts'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

interface MockServerHandle {
  url: string
  lastRequest: () => { method: string; path: string; headers: http.IncomingHttpHeaders; body: unknown }
  close: () => Promise<void>
}

/** HTTP server that calls `handler` for every request and records the last request. */
function startMockServer (
  handler: (req: http.IncomingMessage, res: http.ServerResponse) => void,
): Promise<MockServerHandle> {
  return new Promise((resolve, reject) => {
    let lastReq: { method: string; path: string; headers: http.IncomingHttpHeaders; body: unknown } = {
      method: '', path: '', headers: {}, body: undefined,
    }
    const server = http.createServer((req, res) => {
      const chunks: Buffer[] = []
      req.on('data', (c: Buffer) => chunks.push(c))
      req.on('end', () => {
        const raw = Buffer.concat(chunks).toString('utf-8')
        let body: unknown
        try { body = JSON.parse(raw) } catch { body = raw }
        lastReq = { method: req.method ?? '', path: req.url ?? '', headers: req.headers, body }
        handler(req, res)
      })
    })
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address() as { port: number }
      resolve({
        url: `http://127.0.0.1:${addr.port}`,
        lastRequest: () => lastReq,
        close: () => new Promise<void>(r => server.close(() => r())),
      })
    })
    server.on('error', reject)
  })
}

/**
 * TCP server that accepts connections and immediately destroys them.
 * Produces a near-instant ECONNRESET on each attempt — avoids long timeout
 * waits even when the transport retries.
 */
function startRejectingServer (): Promise<{ url: string; close: () => Promise<void> }> {
  return new Promise((resolve, reject) => {
    const server = net.createServer(socket => { socket.destroy() })
    server.listen(0, '127.0.0.1', () => {
      const addr = server.address() as { port: number }
      resolve({
        url: `http://127.0.0.1:${addr.port}`,
        close: () => new Promise<void>(r => server.close(() => r())),
      })
    })
    server.on('error', reject)
  })
}

function jsonResponse (res: http.ServerResponse, status: number, body: unknown): void {
  const payload = JSON.stringify(body)
  res.writeHead(status, { 'content-type': 'application/json', 'content-length': Buffer.byteLength(payload) })
  res.end(payload)
}

const GOOD_RESPONSE = {
  columns: [{ name: 'x', type: 'integer' }],
  values: [[1]],
  took: 3,
}

function makeConfig (url: string, auth?: ResolvedConfig['context']['elasticsearch']['auth']): ResolvedConfig {
  return { context: { elasticsearch: { url, auth } } } as ResolvedConfig
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('runQuery — happy path', () => {
  let server: MockServerHandle

  beforeEach(async () => {
    server = await startMockServer((_req, res) => jsonResponse(res, 200, GOOD_RESPONSE))
    setResolvedConfig(makeConfig(server.url))
  })

  afterEach(async () => {
    _testResetTransport()
    await server.close()
  })

  it('POSTs to /_query and parses the response', async () => {
    const resp = await runQuery('ROW x = 1')
    assert.deepEqual(resp.columns, [{ name: 'x', type: 'integer' }])
    assert.deepEqual(resp.values, [[1]])
    assert.equal(resp.took, 3)
    const req = server.lastRequest()
    assert.equal(req.method, 'POST')
    assert.equal(req.path, '/_query')
  })

  it('sends the query in the request body', async () => {
    await runQuery('ROW x = 1')
    const body = server.lastRequest().body as Record<string, unknown>
    assert.equal(body.query, 'ROW x = 1')
  })

  it('omits the profile key from the request body by default', async () => {
    await runQuery('ROW x = 1')
    const body = server.lastRequest().body as Record<string, unknown>
    assert.equal('profile' in body, false)
  })

  it('sends profile: true in the request body when requested', async () => {
    await runQuery('ROW x = 1', { profile: true })
    const body = server.lastRequest().body as Record<string, unknown>
    assert.equal(body.profile, true)
  })

  it('preserves is_partial flag in the response', async () => {
    _testResetTransport()
    const partial = await startMockServer((_req, res) =>
      jsonResponse(res, 200, { ...GOOD_RESPONSE, is_partial: true }),
    )
    setResolvedConfig(makeConfig(partial.url))
    try {
      const resp = await runQuery('ROW x = 1')
      assert.equal(resp.is_partial, true)
    } finally {
      _testResetTransport()
      await partial.close()
    }
  })

  it('returns profile.drivers when profile: true is requested', async () => {
    _testResetTransport()
    const profileResp = {
      ...GOOD_RESPONSE,
      profile: {
        drivers: [{ description: 'driver-1', took_nanos: 1_000_000, cpu_nanos: 500_000 }],
      },
    }
    const profSrv = await startMockServer((_req, res) => jsonResponse(res, 200, profileResp))
    setResolvedConfig(makeConfig(profSrv.url))
    try {
      const resp = await runQuery('ROW x = 1', { profile: true })
      assert.ok(Array.isArray(resp.profile?.drivers))
      assert.equal(resp.profile?.drivers[0]?.description, 'driver-1')
    } finally {
      _testResetTransport()
      await profSrv.close()
    }
  })
})

describe('runQuery — auth headers', () => {
  afterEach(() => _testResetTransport())

  it('sends ApiKey Authorization header for api_key auth', async () => {
    const srv = await startMockServer((_req, res) => jsonResponse(res, 200, GOOD_RESPONSE))
    setResolvedConfig(makeConfig(srv.url, { api_key: 'test-key-abc' }))
    try {
      await runQuery('ROW x = 1')
      const auth = srv.lastRequest().headers.authorization
      assert.ok(typeof auth === 'string' && auth.startsWith('ApiKey '), `expected ApiKey header, got: ${auth}`)
    } finally {
      await srv.close()
    }
  })

  it('sends Basic Authorization header for username/password auth', async () => {
    const srv = await startMockServer((_req, res) => jsonResponse(res, 200, GOOD_RESPONSE))
    setResolvedConfig(makeConfig(srv.url, { username: 'elastic', password: 's3cret' }))
    try {
      await runQuery('ROW x = 1')
      const auth = srv.lastRequest().headers.authorization
      assert.ok(typeof auth === 'string' && auth.startsWith('Basic '), `expected Basic header, got: ${auth}`)
      const decoded = Buffer.from(auth.slice('Basic '.length), 'base64').toString('utf-8')
      assert.equal(decoded, 'elastic:s3cret')
    } finally {
      await srv.close()
    }
  })
})

describe('runQuery — error mapping', () => {
  afterEach(() => _testResetTransport())

  it('throws EsqlError with status on 400', async () => {
    const srv = await startMockServer((_req, res) =>
      jsonResponse(res, 400, {
        error: { type: 'parsing_exception', reason: 'bad query syntax' },
        status: 400,
      }),
    )
    setResolvedConfig(makeConfig(srv.url))
    try {
      await assert.rejects(
        () => runQuery('BAD'),
        (err: unknown) => {
          assert.ok(err instanceof EsqlError)
          assert.match(err.message, /parsing_exception/)
          assert.equal(err.status, 400)
          assert.equal(err.isConnection, false)
          return true
        },
      )
    } finally {
      await srv.close()
    }
  })

  it('throws EsqlError with status on 401', async () => {
    const srv = await startMockServer((_req, res) =>
      jsonResponse(res, 401, { error: { type: 'security_exception', reason: 'missing auth' }, status: 401 }),
    )
    setResolvedConfig(makeConfig(srv.url))
    try {
      await assert.rejects(
        () => runQuery('ROW x = 1'),
        (err: unknown) => {
          assert.ok(err instanceof EsqlError)
          assert.equal(err.status, 401)
          return true
        },
      )
    } finally {
      await srv.close()
    }
  })

  it('throws EsqlError with isConnection=true when server drops the connection', async () => {
    const srv = await startRejectingServer()
    // Use maxRetries: 0 so the test doesn't wait through backoff between retries
    const pool = new WeightedConnectionPool({ Connection: UndiciConnection })
    pool.addConnection(srv.url)
    _testSetTransport(new Transport({ connectionPool: pool, maxRetries: 0 }))
    try {
      await assert.rejects(
        () => runQuery('ROW x = 1'),
        (err: unknown) => {
          assert.ok(err instanceof EsqlError)
          assert.equal(err.isConnection, true)
          return true
        },
      )
    } finally {
      _testResetTransport()
      await srv.close()
    }
  })

  it('includes the server URL in the connection error message', async () => {
    const srv = await startRejectingServer()
    const pool = new WeightedConnectionPool({ Connection: UndiciConnection })
    pool.addConnection(srv.url)
    _testSetTransport(new Transport({ connectionPool: pool, maxRetries: 0 }))
    try {
      await assert.rejects(
        () => runQuery('ROW x = 1'),
        (err: unknown) => {
          assert.ok(err instanceof EsqlError)
          assert.ok(err.message.includes('127.0.0.1'), `expected URL in error: ${err.message}`)
          return true
        },
      )
    } finally {
      _testResetTransport()
      await srv.close()
    }
  })
})
