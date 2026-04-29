/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { Writable } from 'node:stream'
import { printStats, warnIfPartial, formatNanos } from '../../src/esql/formatter.ts'
import type { EsqlResponse } from '../../src/esql/esql-client.ts'

function capture (): { writer: Writable; get: () => string } {
  const chunks: string[] = []
  const writer = new Writable({
    write (chunk: Buffer | string, _enc, cb) { chunks.push(chunk.toString()); cb() },
  })
  return { writer, get: () => chunks.join('') }
}

const baseResp: EsqlResponse = {
  columns: [{ name: 'x', type: 'integer' }],
  values: [[1]],
  took: 42,
}

describe('formatNanos', () => {
  it('formats sub-microsecond as ns', () => {
    assert.equal(formatNanos(500), '500ns')
  })

  it('formats microseconds', () => {
    assert.equal(formatNanos(1_500), '1.5µs')
  })

  it('formats milliseconds', () => {
    assert.equal(formatNanos(1_500_000), '1.5ms')
  })

  it('formats seconds', () => {
    assert.equal(formatNanos(1_500_000_000), '1.50s')
  })

  it('formats whole nanoseconds without decimal', () => {
    assert.equal(formatNanos(1), '1ns')
  })
})

describe('printStats', () => {
  it('writes row count and took time', () => {
    const { writer, get } = capture()
    printStats(baseResp, 10, writer)
    assert.ok(get().includes('10'), 'should contain row count')
    assert.ok(get().includes('42ms'), 'should contain took time')
  })

  it('includes partial warning when is_partial is true', () => {
    const { writer, get } = capture()
    printStats({ ...baseResp, is_partial: true }, 5, writer)
    assert.ok(get().includes('partial'), 'should warn about partial results')
  })

  it('does not include partial warning when is_partial is false', () => {
    const { writer, get } = capture()
    printStats({ ...baseResp, is_partial: false }, 5, writer)
    assert.ok(!get().includes('partial'), 'should not warn for non-partial results')
  })

  it('shows profile section when drivers are present', () => {
    const { writer, get } = capture()
    const resp: EsqlResponse = {
      ...baseResp,
      profile: {
        drivers: [{ description: 'data', took_nanos: 50_000_000, cpu_nanos: 40_000_000 }],
      },
    }
    printStats(resp, 1, writer)
    assert.ok(get().includes('Profile'), 'should include profile section header')
    assert.ok(get().includes('data'), 'should include driver description')
  })

  it('aggregates drivers with the same description (x2)', () => {
    const { writer, get } = capture()
    const resp: EsqlResponse = {
      ...baseResp,
      profile: {
        drivers: [
          { description: 'data', took_nanos: 50_000_000, cpu_nanos: 40_000_000 },
          { description: 'data', took_nanos: 30_000_000, cpu_nanos: 25_000_000 },
          { description: 'final', took_nanos: 10_000_000, cpu_nanos: 5_000_000 },
        ],
      },
    }
    printStats(resp, 100, writer)
    const out = get()
    assert.ok(out.includes('x2'), `expected "x2" for aggregated driver: ${out}`)
    assert.ok(out.includes('data'), 'should include "data" description')
    assert.ok(out.includes('final'), 'should include "final" description')
  })

  it('sorts drivers by total time descending', () => {
    const { writer, get } = capture()
    const resp: EsqlResponse = {
      ...baseResp,
      profile: {
        drivers: [
          { description: 'fast', took_nanos: 1_000_000, cpu_nanos: 500_000 },
          { description: 'slow', took_nanos: 100_000_000, cpu_nanos: 80_000_000 },
        ],
      },
    }
    printStats(resp, 1, writer)
    const out = get()
    assert.ok(out.indexOf('slow') < out.indexOf('fast'), `expected "slow" before "fast": ${out}`)
  })
})

describe('warnIfPartial', () => {
  it('is silent for non-partial response', () => {
    const { writer, get } = capture()
    warnIfPartial(baseResp, writer)
    assert.equal(get(), '')
  })

  it('writes a warning for partial response', () => {
    const { writer, get } = capture()
    warnIfPartial({ ...baseResp, is_partial: true }, writer)
    assert.ok(get().includes('partial'), `expected "partial" in warning: ${get()}`)
  })
})
