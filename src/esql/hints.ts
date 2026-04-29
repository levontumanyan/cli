/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { EsqlError } from './esql-client.ts'

/**
 * Given a parsed query-error reason string, return a short suggestion string
 * (e.g. "Did you mean WHERE?" or "Unknown function: AVGG") or empty string
 * when no pattern matches.
 */
export function parsingSuggestion (reason: string): string {
  // "mismatched input 'FOO' expecting {'BAR', 'BAZ', ...}" — suggest first expected token
  const expectMatch = /expecting \{[^']*'([A-Z_]+)'/.exec(reason)
  if (expectMatch) return `Did you mean ${expectMatch[1]!}?`

  // "Unknown function [NAME]" or "Unknown column [NAME]"
  const unknownMatch = /Unknown (?:function|column) \[([^\]]+)\]/i.exec(reason)
  if (unknownMatch) return `Unknown identifier: ${unknownMatch[1]!}`

  return ''
}

/**
 * Return a human-readable hint for an EsqlError, or empty string when no
 * specific hint applies (e.g. for unexpected error types).
 */
export function errorHint (err: EsqlError | null | undefined): string {
  if (err == null) return ''

  if (err.isConnection) {
    const msg = err.message
    if (/connection refused/i.test(msg)) {
      return 'Connection refused — is Elasticsearch running and reachable?'
    }
    if (/tls|certificate|ssl/i.test(msg)) {
      return 'TLS/certificate error — if Elasticsearch is on plain HTTP, use http:// in your config'
    }
    if (/timed out|deadline exceeded/i.test(msg)) {
      return 'Request timed out — check that Elasticsearch is responding'
    }
    return ''
  }

  switch (err.status) {
    case 401:
      return '401 Authentication failed — check your credentials (elastic config context show)'
    case 403:
      return '403 Forbidden — your API key or user may be missing required index or cluster privileges'
    case 404: {
      if (/index_not_found/i.test(err.message)) {
        return 'Index not found — check your index pattern or alias'
      }
      return '404 Not found — check your index pattern or resource name'
    }
    case 400: {
      const suggestion = parsingSuggestion(err.message)
      return suggestion !== ''
        ? suggestion
        : 'ES|QL query syntax error — check your query and refer to the ES|QL documentation'
    }
    case 503:
      return '503 Elasticsearch unavailable — check cluster health and node availability'
    case 429:
      return '429 Too many requests — reduce query frequency or increase cluster resources'
    default:
      return ''
  }
}
