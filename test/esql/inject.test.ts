/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { isFromQuery, injectWhere, injectSort, hasAggregation } from '../../src/esql/inject.ts'

describe('isFromQuery', () => {
  it('returns true for FROM queries', () => {
    assert.equal(isFromQuery('FROM logs-* | LIMIT 10'), true)
    assert.equal(isFromQuery('  from logs-*'), true)
  })

  it('returns false for non-FROM queries', () => {
    assert.equal(isFromQuery('ROW x = 1'), false)
    assert.equal(isFromQuery('SHOW INFO'), false)
    assert.equal(isFromQuery(''), false)
  })
})

describe('injectWhere', () => {
  it('bare FROM — appends WHERE', () => {
    const q = injectWhere('FROM logs-*', '@timestamp > "2024-01-01"')
    assert.equal(q, 'FROM logs-* | WHERE @timestamp > "2024-01-01"')
  })

  it('inserts WHERE before first pipe (KEEP)', () => {
    const q = injectWhere('FROM logs-* | KEEP @timestamp, message', '@timestamp > "2024-01-01"')
    assert.equal(q, 'FROM logs-* | WHERE @timestamp > "2024-01-01" | KEEP @timestamp, message')
  })

  it('inserts WHERE before LIMIT', () => {
    const q = injectWhere('FROM logs-* | LIMIT 10', '@timestamp > "2024-01-01"')
    assert.match(q, /WHERE .+ \| LIMIT/)
  })

  it('inserts WHERE before SORT', () => {
    const q = injectWhere('FROM logs-* | SORT @timestamp DESC', '@timestamp > "2024-01-01"')
    assert.match(q, /WHERE .+ \| SORT/)
  })

  it('inserts before existing WHERE (Go: FROM with existing WHERE)', () => {
    const q = injectWhere(
      'FROM logs-* | WHERE log.level == "error"',
      '@timestamp >= "2026-01-01T00:00:00Z"',
    )
    assert.equal(q, 'FROM logs-* | WHERE @timestamp >= "2026-01-01T00:00:00Z" | WHERE log.level == "error"')
  })

  it('empty expr is no-op', () => {
    const orig = 'FROM logs-* | LIMIT 10'
    assert.equal(injectWhere(orig, ''), orig)
  })

  it('throws for ROW queries', () => {
    assert.throws(() => injectWhere('ROW x = 1', 'x > 0'), /only FROM-based/)
  })

  it('throws for SHOW queries', () => {
    assert.throws(() => injectWhere('SHOW INFO', 'x > 0'), /only FROM-based/)
  })

  it('pipe inside double-quoted string is not top-level', () => {
    // The | inside "a|b" must not be treated as the first top-level pipe
    const q = injectWhere('FROM logs-* | WHERE field == "a|b"', 'extra == true')
    assert.match(q, /WHERE extra == true \| WHERE field == "a\|b"/)
  })

  it('pipe inside triple-quoted string is not top-level', () => {
    const q = injectWhere('FROM logs-* | WHERE field == """a|b"""', 'extra == true')
    assert.match(q, /WHERE extra == true \| WHERE field == """a\|b"""/)
  })

  it('pipe inside // line comment is not top-level', () => {
    // FROM logs-* // some | comment
    // | LIMIT 10
    const query = 'FROM logs-* // comment | not-a-pipe\n| LIMIT 10'
    const q = injectWhere(query, 'x > 0')
    // The first real | is the one before LIMIT (the // comment's | doesn't count)
    assert.match(q, /WHERE x > 0 \| LIMIT/)
  })

  it('pipe inside /* */ block comment is not top-level', () => {
    const query = 'FROM logs-* /* | not a pipe */ | LIMIT 10'
    const q = injectWhere(query, 'x > 0')
    assert.match(q, /WHERE x > 0 \| LIMIT/)
  })
})

describe('injectSort', () => {
  it('appends SORT at end when no LIMIT', () => {
    const q = injectSort('FROM logs-* | KEEP @timestamp', '@timestamp ASC')
    assert.equal(q, 'FROM logs-* | KEEP @timestamp | SORT @timestamp ASC')
  })

  it('inserts SORT before LIMIT', () => {
    const q = injectSort('FROM logs-* | LIMIT 10', '@timestamp ASC')
    assert.match(q, /SORT @timestamp ASC \| LIMIT/)
  })

  it('preserves existing SORT (idempotent)', () => {
    const orig = 'FROM logs-* | SORT @timestamp ASC | LIMIT 100'
    assert.equal(injectSort(orig, '@timestamp ASC'), orig)
  })

  it('empty orderExpr is no-op', () => {
    const orig = 'FROM logs-* | LIMIT 10'
    assert.equal(injectSort(orig, ''), orig)
  })
})

describe('hasAggregation', () => {
  it('returns true for query with STATS', () => {
    assert.equal(hasAggregation('FROM logs-* | STATS COUNT(*) BY service.name'), true)
  })

  it('returns true for lowercase stats', () => {
    assert.equal(hasAggregation('FROM logs-* | stats count(*)'), true)
  })

  it('returns false for plain FROM/KEEP query', () => {
    assert.equal(hasAggregation('FROM logs-* | KEEP @timestamp'), false)
  })

  it('returns false when STATS only in a string literal', () => {
    assert.equal(hasAggregation('FROM logs-* | WHERE msg == "STATS something"'), false)
  })
})
