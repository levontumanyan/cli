/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { parseAssertion, evalAssertion } from '../../src/esql/commands/check.ts'

describe('parseAssertion', () => {
  it('parses simple integer comparison', () => {
    const a = parseAssertion('x < 80')
    assert.deepEqual(a, { column: 'x', operator: '<', value: '80' })
  })

  it('parses >= operator', () => {
    const a = parseAssertion('count >= 3')
    assert.deepEqual(a, { column: 'count', operator: '>=', value: '3' })
  })

  it('parses == with decimal value', () => {
    const a = parseAssertion('ratio == 1.5')
    assert.deepEqual(a, { column: 'ratio', operator: '==', value: '1.5' })
  })

  it('parses != operator', () => {
    const a = parseAssertion('status != 0')
    assert.deepEqual(a, { column: 'status', operator: '!=', value: '0' })
  })

  it('parses <= operator', () => {
    const a = parseAssertion('latency <= 200')
    assert.deepEqual(a, { column: 'latency', operator: '<=', value: '200' })
  })

  it('parses string value', () => {
    const a = parseAssertion('env == production')
    assert.deepEqual(a, { column: 'env', operator: '==', value: 'production' })
  })

  it('trims whitespace around column and value', () => {
    const a = parseAssertion('  x  >=  10  ')
    assert.deepEqual(a, { column: 'x', operator: '>=', value: '10' })
  })

  it('throws when no operator found', () => {
    assert.throws(() => parseAssertion('x 80'), /No valid operator/)
  })

  it('throws when column name is missing', () => {
    assert.throws(() => parseAssertion('< 80'), /Missing column name/)
  })

  it('throws when value is missing', () => {
    assert.throws(() => parseAssertion('x <'), /Missing value/)
  })
})

describe('evalAssertion', () => {
  it('evaluates numeric < (pass)', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '<', value: '80' }, 60), true)
  })

  it('evaluates numeric < (fail)', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '<', value: '80' }, 90), false)
  })

  it('evaluates >= with integer actual', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '>=', value: '3' }, 3), true)
    assert.equal(evalAssertion({ column: 'x', operator: '>=', value: '3' }, 2), false)
  })

  it('evaluates == with integer', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '==', value: '1' }, 1), true)
  })

  it('evaluates != with zero', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '!=', value: '0' }, 0), false)
  })

  it('evaluates <= boundary', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '<=', value: '5' }, 5), true)
  })

  it('evaluates > boundary (fail)', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '>', value: '5' }, 5), false)
  })

  it('evaluates float64 actual', () => {
    assert.equal(evalAssertion({ column: 'x', operator: '>', value: '1.5' }, 2.0), true)
    assert.equal(evalAssertion({ column: 'x', operator: '>', value: '1.5' }, 1.0), false)
  })

  it('evaluates string-parsed actual (numeric string)', () => {
    // actual is a string "42", value is "50"
    assert.equal(evalAssertion({ column: 'x', operator: '<', value: '50' }, '42'), true)
  })

  it('falls back to string comparison when neither side is numeric', () => {
    assert.equal(evalAssertion({ column: 'env', operator: '==', value: 'production' }, 'production'), true)
    assert.equal(evalAssertion({ column: 'env', operator: '==', value: 'production' }, 'staging'), false)
    assert.equal(evalAssertion({ column: 'env', operator: '!=', value: 'production' }, 'staging'), true)
  })
})
