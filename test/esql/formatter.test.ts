/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { Writable } from 'node:stream'
import { formatOutput } from '../../src/esql/formatter.ts'
import type { EsqlResponse } from '../../src/esql/esql-client.ts'

function capture (): { writer: Writable; get: () => string } {
  const chunks: string[] = []
  const writer = new Writable({
    write (chunk: Buffer | string, _enc, cb) { chunks.push(chunk.toString()); cb() },
  })
  return { writer, get: () => chunks.join('') }
}

const resp: EsqlResponse = {
  columns: [{ name: 'x', type: 'integer' }, { name: 'y', type: 'keyword' }],
  values: [[1, 'hello'], [2, 'world']],
  took: 5,
}

describe('formatOutput', () => {
  it('renders json', () => {
    const { writer, get } = capture()
    formatOutput(resp, { format: 'json' }, writer)
    const parsed = JSON.parse(get()) as unknown[]
    assert.deepEqual(parsed, [{ x: 1, y: 'hello' }, { x: 2, y: 'world' }])
  })

  it('renders json as empty array when no rows', () => {
    const { writer, get } = capture()
    const empty: EsqlResponse = { columns: [{ name: 'x', type: 'integer' }], values: [], took: 1 }
    formatOutput(empty, { format: 'json' }, writer)
    assert.deepEqual(JSON.parse(get()), [])
  })

  it('preserves null values in json', () => {
    const { writer, get } = capture()
    const nullResp: EsqlResponse = {
      columns: [{ name: 'x', type: 'integer' }, { name: 'y', type: 'keyword' }],
      values: [[null, 'hello'], [1, null]],
      took: 1,
    }
    formatOutput(nullResp, { format: 'json' }, writer)
    const parsed = JSON.parse(get()) as unknown[]
    assert.deepEqual(parsed, [{ x: null, y: 'hello' }, { x: 1, y: null }])
  })

  it('renders multivalue arrays in json', () => {
    const { writer, get } = capture()
    const mvResp: EsqlResponse = {
      columns: [{ name: 'tags', type: 'keyword' }],
      values: [[['a', 'b']]],
      took: 1,
    }
    formatOutput(mvResp, { format: 'json' }, writer)
    const parsed = JSON.parse(get()) as unknown[]
    assert.deepEqual(parsed, [{ tags: ['a', 'b'] }])
  })

  it('renders ndjson', () => {
    const { writer, get } = capture()
    formatOutput(resp, { format: 'ndjson' }, writer)
    const lines = get().trim().split('\n').map(l => JSON.parse(l))
    assert.deepEqual(lines, [{ x: 1, y: 'hello' }, { x: 2, y: 'world' }])
  })

  it('renders csv with header', () => {
    const { writer, get } = capture()
    formatOutput(resp, { format: 'csv' }, writer)
    const lines = get().trim().split('\n')
    assert.equal(lines[0], 'x,y')
    assert.equal(lines[1], '1,hello')
    assert.equal(lines[2], '2,world')
  })

  it('renders csv without header when noHeader is true', () => {
    const { writer, get } = capture()
    formatOutput(resp, { format: 'csv', noHeader: true }, writer)
    const lines = get().trim().split('\n')
    assert.equal(lines[0], '1,hello')
  })

  it('renders tsv', () => {
    const { writer, get } = capture()
    formatOutput(resp, { format: 'tsv' }, writer)
    const lines = get().trim().split('\n')
    assert.equal(lines[0], 'x\ty')
    assert.equal(lines[1], '1\thello')
  })

  it('filters columns', () => {
    const { writer, get } = capture()
    formatOutput(resp, { format: 'json', columns: ['y'] }, writer)
    const parsed = JSON.parse(get()) as unknown[]
    assert.deepEqual(parsed, [{ y: 'hello' }, { y: 'world' }])
  })

  it('column filter: nonexistent column names return all columns', () => {
    const { writer, get } = capture()
    formatOutput(resp, { format: 'json', columns: ['nonexistent'] }, writer)
    const parsed = JSON.parse(get()) as unknown[]
    assert.deepEqual(parsed, [{ x: 1, y: 'hello' }, { x: 2, y: 'world' }])
  })

  it('column filter: preserves response order, not filter order', () => {
    const { writer, get } = capture()
    // Filter specifies y before x, but response has x before y
    formatOutput(resp, { format: 'json', columns: ['y', 'x'] }, writer)
    const parsed = JSON.parse(get()) as Array<Record<string, unknown>>
    // Keys should be in response order (x, y)
    assert.deepEqual(Object.keys(parsed[0]!), ['x', 'y'])
    assert.deepEqual(parsed, [{ x: 1, y: 'hello' }, { x: 2, y: 'world' }])
  })

  it('escapes csv values with commas', () => {
    const csvResp: EsqlResponse = {
      columns: [{ name: 'msg', type: 'keyword' }],
      values: [['a,b'], ['no comma']],
      took: 1,
    }
    const { writer, get } = capture()
    formatOutput(csvResp, { format: 'csv', noHeader: true }, writer)
    const lines = get().trim().split('\n')
    assert.equal(lines[0], '"a,b"')
    assert.equal(lines[1], 'no comma')
  })

  it('throws on unknown format', () => {
    const { writer } = capture()
    assert.throws(() => formatOutput(resp, { format: 'xml' }, writer), /unknown format/)
  })
})
