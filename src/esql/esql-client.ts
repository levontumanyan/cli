/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { errors } from '@elastic/transport'
import { getTransport } from '../lib/transport.ts'

export interface EsqlColumn {
  name: string
  type: string
}

export interface EsqlResponse {
  columns: EsqlColumn[]
  values: unknown[][]
  took: number
  is_partial?: boolean
  profile?: {
    drivers: Array<{ description: string; took_nanos: number; cpu_nanos: number }>
  }
}

export interface QueryOptions {
  profile?: boolean
}

export class EsqlError extends Error {
  constructor (
    message: string,
    public readonly status?: number,
    public readonly isConnection = false
  ) {
    super(message)
    this.name = 'EsqlError'
  }
}

const TLS_HINTS = [/SSL routines/i, /wrong version number/i, /EPROTO/i, /ERR_SSL/i]

function appendTlsHint (msg: string): string {
  if (TLS_HINTS.some(re => re.test(msg))) {
    return msg + '\n\nHint: looks like a TLS error. If Elasticsearch is on plain HTTP, use http:// instead of https://.'
  }
  return msg
}

export async function runQuery (query: string, opts: QueryOptions = {}): Promise<EsqlResponse> {
  const transport = getTransport()
  try {
    const body = await transport.request<EsqlResponse>({
      method: 'POST',
      path: '/_query',
      body: {
        query,
        ...(opts.profile === true && { profile: true }),
      },
    })
    return body
  } catch (err) {
    if (err instanceof errors.ResponseError) {
      const esBody = err.body as Record<string, unknown> | null
      const esError = esBody?.error as Record<string, unknown> | null
      const type = typeof esError?.type === 'string' ? esError.type : null
      const reason = typeof esError?.reason === 'string' ? esError.reason : null
      const msg = type && reason ? `${type}: ${reason}` : (err.message || `HTTP ${err.statusCode}`)
      throw new EsqlError(msg, err.statusCode ?? undefined)
    }
    if (err instanceof errors.ConnectionError) {
      const msg = appendTlsHint(err.message || 'connection failed')
      const url = (err.meta as Record<string, unknown> | undefined)?.meta as Record<string, unknown> | undefined
      const urlStr = (url?.connection as Record<string, unknown> | undefined)?.url?.toString()
      throw new EsqlError(urlStr ? `${msg} (${urlStr})` : msg, undefined, true)
    }
    if (err instanceof errors.TimeoutError) {
      throw new EsqlError(err.message || 'request timed out')
    }
    throw err
  }
}
