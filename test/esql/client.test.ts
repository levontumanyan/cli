/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { Transport, errors } from '@elastic/transport'
import { runQuery, EsqlError } from '../../src/esql/esql-client.ts'
import { setResolvedConfig, _testResetConfig } from '../../src/config/store.ts'
import { getTransport, _testResetTransport, _testSetTransport } from '../../src/lib/transport.ts'
import type { ResolvedConfig } from '../../src/config/types.ts'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

type RequestParams = { method: string; path: string; body?: unknown }

/** Mock transport that calls `handler` for every request. */
function makeMockTransport (handler: (params: RequestParams) => Promise<unknown>): Transport {
  return { request: handler } as unknown as Transport
}

const GOOD_RESPONSE = {
  columns: [{ name: 'x', type: 'integer' }],
  values: [[1]],
  took: 3,
}

function makeConfig (url: string, auth?: ResolvedConfig['context']['elasticsearch']['auth']): ResolvedConfig {
  return { context: { elasticsearch: { url, auth } } } as ResolvedConfig
}

function makeResponseError (status: number, body: unknown): errors.ResponseError {
  return new errors.ResponseError({
    body,
    statusCode: status,
    headers: {},
    meta: { request: { params: {}, options: {}, id: 1 }, connection: null, attempts: 0, aborted: false },
    warnings: null,
  } as Parameters<typeof errors.ResponseError>[0])
}

function makeConnectionError (message: string, url: string): errors.ConnectionError {
  return new errors.ConnectionError(message, {
    body: null,
    statusCode: null,
    headers: {},
    meta: { connection: { url: new URL(url) }, request: { params: {}, options: {}, id: 1 }, attempts: 1, aborted: false },
    warnings: null,
  } as Parameters<typeof errors.ConnectionError>[1])
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe('runQuery — happy path', () => {
  let lastParams: RequestParams

  beforeEach(() => {
    _testSetTransport(makeMockTransport(async (params) => {
      lastParams = params as RequestParams
      return { ...GOOD_RESPONSE }
    }))
  })

  afterEach(() => _testResetTransport())

  it('POSTs to /_query and parses the response', async () => {
    const resp = await runQuery('ROW x = 1')
    assert.deepEqual(resp.columns, [{ name: 'x', type: 'integer' }])
    assert.deepEqual(resp.values, [[1]])
    assert.equal(resp.took, 3)
    assert.equal(lastParams.method, 'POST')
    assert.equal(lastParams.path, '/_query')
  })

  it('sends the query in the request body', async () => {
    await runQuery('ROW x = 1')
    const body = lastParams.body as Record<string, unknown>
    assert.equal(body.query, 'ROW x = 1')
  })

  it('omits the profile key from the request body by default', async () => {
    await runQuery('ROW x = 1')
    const body = lastParams.body as Record<string, unknown>
    assert.equal('profile' in body, false)
  })

  it('sends profile: true in the request body when requested', async () => {
    await runQuery('ROW x = 1', { profile: true })
    const body = lastParams.body as Record<string, unknown>
    assert.equal(body.profile, true)
  })

  it('preserves is_partial flag in the response', async () => {
    _testSetTransport(makeMockTransport(async () => ({ ...GOOD_RESPONSE, is_partial: true })))
    const resp = await runQuery('ROW x = 1')
    assert.equal(resp.is_partial, true)
  })

  it('returns profile.drivers when profile: true is requested', async () => {
    const profileResp = {
      ...GOOD_RESPONSE,
      profile: {
        drivers: [{ description: 'driver-1', took_nanos: 1_000_000, cpu_nanos: 500_000 }],
      },
    }
    _testSetTransport(makeMockTransport(async () => profileResp))
    const resp = await runQuery('ROW x = 1', { profile: true })
    assert.ok(Array.isArray(resp.profile?.drivers))
    assert.equal(resp.profile?.drivers[0]?.description, 'driver-1')
  })
})

describe('runQuery — auth headers', () => {
  afterEach(() => {
    _testResetTransport()
    _testResetConfig()
  })

  it('sets ApiKey Authorization header for api_key auth', () => {
    setResolvedConfig(makeConfig('http://localhost:9200', { api_key: 'test-key-abc' }))
    const t = getTransport()
    const auth = t.connectionPool.connections[0]?.headers?.authorization as string | undefined
    assert.ok(typeof auth === 'string' && auth.startsWith('ApiKey '), `expected ApiKey header, got: ${auth}`)
  })

  it('sets Basic Authorization header for username/password auth', () => {
    setResolvedConfig(makeConfig('http://localhost:9200', { username: 'elastic', password: 's3cret' }))
    const t = getTransport()
    const auth = t.connectionPool.connections[0]?.headers?.authorization as string | undefined
    assert.ok(typeof auth === 'string' && auth.startsWith('Basic '), `expected Basic header, got: ${auth}`)
    const decoded = Buffer.from(auth.slice('Basic '.length), 'base64').toString('utf-8')
    assert.equal(decoded, 'elastic:s3cret')
  })
})

describe('runQuery — error mapping', () => {
  afterEach(() => _testResetTransport())

  it('throws EsqlError with status on 400', async () => {
    _testSetTransport(makeMockTransport(async () => {
      throw makeResponseError(400, { error: { type: 'parsing_exception', reason: 'bad query syntax' }, status: 400 })
    }))
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
  })

  it('throws EsqlError with status on 401', async () => {
    _testSetTransport(makeMockTransport(async () => {
      throw makeResponseError(401, { error: { type: 'security_exception', reason: 'missing auth' }, status: 401 })
    }))
    await assert.rejects(
      () => runQuery('ROW x = 1'),
      (err: unknown) => {
        assert.ok(err instanceof EsqlError)
        assert.equal(err.status, 401)
        return true
      },
    )
  })

  it('throws EsqlError with isConnection=true when server drops the connection', async () => {
    _testSetTransport(makeMockTransport(async () => {
      throw makeConnectionError('connection refused', 'http://127.0.0.1:12345')
    }))
    await assert.rejects(
      () => runQuery('ROW x = 1'),
      (err: unknown) => {
        assert.ok(err instanceof EsqlError)
        assert.equal(err.isConnection, true)
        return true
      },
    )
  })

  it('includes the server URL in the connection error message', async () => {
    _testSetTransport(makeMockTransport(async () => {
      throw makeConnectionError('connection refused', 'http://127.0.0.1:12345')
    }))
    await assert.rejects(
      () => runQuery('ROW x = 1'),
      (err: unknown) => {
        assert.ok(err instanceof EsqlError)
        assert.ok(err.message.includes('127.0.0.1'), `expected URL in error: ${err.message}`)
        return true
      },
    )
  })
})
