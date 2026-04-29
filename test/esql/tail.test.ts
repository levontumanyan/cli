/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildTailQuery, tsColumnIndex, extractMaxTimestamp } from '../../src/esql/commands/tail.ts'
import type { EsqlResponse } from '../../src/esql/esql-client.ts'

describe('buildTailQuery', () => {
  it('bare FROM — injects WHERE and SORT', () => {
    const q = buildTailQuery('FROM logs-*', '@timestamp', '2024-01-01T00:00:00.000Z')
    assert.match(q, /WHERE @timestamp > "2024-01-01T00:00:00.000Z"/)
    assert.match(q, /SORT @timestamp ASC/)
  })

  it('preserves existing SORT (does not duplicate)', () => {
    // If the base query already has a SORT, injectSort is idempotent
    const base = 'FROM logs-* | SORT @timestamp ASC | LIMIT 100'
    const q = buildTailQuery(base, '@timestamp', '2024-01-01T00:00:00.000Z')
    const sortCount = (q.match(/\bSORT\b/gi) ?? []).length
    assert.equal(sortCount, 1)
  })

  it('uses custom ts field in WHERE and SORT', () => {
    const q = buildTailQuery('FROM logs-*', 'event.created', '2024-01-01T00:00:00.000Z')
    assert.match(q, /WHERE event\.created > "2024-01-01T00:00:00.000Z"/)
    assert.match(q, /SORT event\.created ASC/)
  })

  it('WHERE comes before SORT in final query', () => {
    const q = buildTailQuery('FROM logs-*', '@timestamp', '2024-01-01T00:00:00.000Z')
    const wherePos = q.indexOf('WHERE')
    const sortPos = q.indexOf('SORT')
    assert.ok(wherePos < sortPos, `expected WHERE before SORT in: ${q}`)
  })
})

describe('tsColumnIndex', () => {
  const resp: EsqlResponse = {
    columns: [
      { name: '@timestamp', type: 'date' },
      { name: 'message', type: 'keyword' },
    ],
    values: [],
    took: 1,
  }

  it('finds the correct column index', () => {
    assert.equal(tsColumnIndex(resp, '@timestamp'), 0)
    assert.equal(tsColumnIndex(resp, 'message'), 1)
  })

  it('returns -1 for missing column', () => {
    assert.equal(tsColumnIndex(resp, 'missing'), -1)
  })
})

describe('extractMaxTimestamp', () => {
  const resp: EsqlResponse = {
    columns: [{ name: '@timestamp', type: 'date' }, { name: 'msg', type: 'keyword' }],
    values: [
      ['2024-01-01T00:00:00.000Z', 'a'],
      ['2024-01-02T00:00:00.000Z', 'b'],
      ['2024-01-03T00:00:00.000Z', 'c'],
    ],
    took: 1,
  }

  it('returns last non-null timestamp', () => {
    assert.equal(extractMaxTimestamp(resp, 0), '2024-01-03T00:00:00.000Z')
  })

  it('returns null for empty response', () => {
    const empty: EsqlResponse = { columns: [{ name: '@timestamp', type: 'date' }], values: [], took: 1 }
    assert.equal(extractMaxTimestamp(empty, 0), null)
  })

  it('skips null values scanning from the end', () => {
    const withNulls: EsqlResponse = {
      columns: [{ name: '@timestamp', type: 'date' }],
      values: [['2024-01-01T00:00:00.000Z'], ['2024-01-02T00:00:00.000Z'], [null]],
      took: 1,
    }
    // Last row has null, should return second row's value
    assert.equal(extractMaxTimestamp(withNulls, 0), '2024-01-02T00:00:00.000Z')
  })

  it('returns null when all values are null', () => {
    const allNull: EsqlResponse = {
      columns: [{ name: '@timestamp', type: 'date' }],
      values: [[null], [null]],
      took: 1,
    }
    assert.equal(extractMaxTimestamp(allNull, 0), null)
  })
})
