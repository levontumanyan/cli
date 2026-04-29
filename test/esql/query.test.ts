/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { splitQueries } from '../../src/esql/commands/query.ts'
import { applyParams } from '../../src/esql/saved-queries.ts'

describe('splitQueries', () => {
  it('returns single query as-is', () => {
    assert.deepEqual(splitQueries('FROM logs-* | LIMIT 10'), ['FROM logs-* | LIMIT 10'])
  })

  it('splits on semicolons', () => {
    const result = splitQueries('ROW x = 1; ROW y = 2')
    assert.deepEqual(result, ['ROW x = 1', 'ROW y = 2'])
  })

  it('trims whitespace from each query', () => {
    const result = splitQueries('  ROW x = 1  ;  ROW y = 2  ')
    assert.deepEqual(result, ['ROW x = 1', 'ROW y = 2'])
  })

  it('filters out empty segments', () => {
    const result = splitQueries('ROW x = 1;;ROW y = 2;')
    assert.deepEqual(result, ['ROW x = 1', 'ROW y = 2'])
  })

  it('returns empty array for blank input', () => {
    assert.deepEqual(splitQueries(''), [])
    assert.deepEqual(splitQueries('   '), [])
  })
})

describe('applyParams', () => {
  it('substitutes a single placeholder', () => {
    assert.equal(applyParams('FROM {{index}}-*', ['index=logs']), 'FROM logs-*')
  })

  it('substitutes multiple placeholders', () => {
    assert.equal(
      applyParams('FROM {{index}}-* | WHERE level == "{{level}}"', ['index=logs', 'level=error']),
      'FROM logs-* | WHERE level == "error"',
    )
  })

  it('no-op when params is empty array', () => {
    const q = 'FROM logs-*'
    assert.equal(applyParams(q, []), q)
  })

  it('throws when param has no "="', () => {
    assert.throws(
      () => applyParams('FROM {{index}}-*', ['noequalssign']),
      /has no "="/,
    )
  })

  it('throws when param has empty key', () => {
    assert.throws(
      () => applyParams('FROM {{index}}-*', ['=value']),
      /empty key/,
    )
  })

  it('throws when param placeholder not in query (unused param)', () => {
    assert.throws(
      () => applyParams('FROM logs-*', ['unused=value']),
      /has no placeholder/,
    )
  })

  it('throws when placeholder remains unresolved after all substitutions', () => {
    assert.throws(
      () => applyParams('FROM {{index}}-* | WHERE x == "{{missing}}"', ['index=logs']),
      /unresolved placeholder.*missing/,
    )
  })

  it('substitutes all occurrences of the same placeholder', () => {
    assert.equal(
      applyParams('FROM {{index}}-* | WHERE index == "{{index}}"', ['index=logs']),
      'FROM logs-* | WHERE index == "logs"',
    )
  })
})
