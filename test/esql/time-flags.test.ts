/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { applyTimeFlagsToQuery, parseRelativeTime } from '../../src/esql/commands/query.ts'

const NOW = new Date('2026-04-22T10:00:00.000Z')

describe('parseRelativeTime', () => {
  it('parses seconds (30s)', () => {
    const d = parseRelativeTime('30s', NOW)
    assert.equal(d.toISOString(), '2026-04-22T09:59:30.000Z')
  })

  it('parses minutes (15m)', () => {
    const d = parseRelativeTime('15m', NOW)
    assert.equal(d.toISOString(), '2026-04-22T09:45:00.000Z')
  })

  it('parses hours (1h)', () => {
    const d = parseRelativeTime('1h', NOW)
    assert.equal(d.toISOString(), '2026-04-22T09:00:00.000Z')
  })

  it('parses days (2d)', () => {
    const d = parseRelativeTime('2d', NOW)
    assert.equal(d.toISOString(), '2026-04-20T10:00:00.000Z')
  })

  it('parses weeks (1w)', () => {
    const d = parseRelativeTime('1w', NOW)
    assert.equal(d.toISOString(), '2026-04-15T10:00:00.000Z')
  })

  it('parses absolute ISO date string', () => {
    const d = parseRelativeTime('2026-01-01T00:00:00.000Z', NOW)
    assert.equal(d.toISOString(), '2026-01-01T00:00:00.000Z')
  })

  it('throws for an invalid duration', () => {
    assert.throws(() => parseRelativeTime('not-a-duration', NOW), /Invalid time value/)
  })

  it('throws for a garbage string', () => {
    assert.throws(() => parseRelativeTime('xyz', NOW), /Invalid time value/)
  })
})

describe('applyTimeFlagsToQuery', () => {
  it('no flags — returns query unchanged', () => {
    const q = applyTimeFlagsToQuery('FROM logs', undefined, undefined, NOW)
    assert.equal(q, 'FROM logs')
  })

  it('--since 1h — injects WHERE before first pipe', () => {
    const q = applyTimeFlagsToQuery('FROM logs', '1h', undefined, NOW)
    assert.equal(q, 'FROM logs | WHERE @timestamp >= "2026-04-22T09:00:00.000Z"')
  })

  it('--since + --until — injects combined WHERE before LIMIT', () => {
    const q = applyTimeFlagsToQuery('FROM logs | LIMIT 10', '2h', '1h', NOW)
    assert.equal(
      q,
      'FROM logs | WHERE @timestamp >= "2026-04-22T08:00:00.000Z" AND @timestamp <= "2026-04-22T09:00:00.000Z" | LIMIT 10',
    )
  })

  it('custom ts-field — uses supplied field name', () => {
    const q = applyTimeFlagsToQuery('FROM logs', '1h', undefined, NOW, 'event.ingested')
    assert.match(q, /event\.ingested >= /)
    assert.doesNotMatch(q, /@timestamp/)
  })

  it('throws for invalid --since value', () => {
    assert.throws(() => applyTimeFlagsToQuery('FROM logs', 'bad', undefined, NOW), /Invalid time value/)
  })

  it('throws for invalid --until value', () => {
    assert.throws(() => applyTimeFlagsToQuery('FROM logs', undefined, 'bad', NOW), /Invalid time value/)
  })

  it('throws when --since is more recent than --until (reversed range)', () => {
    // since='1h' (1h ago) is more recent than until='2h' (2h ago) → empty range
    assert.throws(
      () => applyTimeFlagsToQuery('FROM logs', '1h', '2h', NOW),
      /must be earlier|reversed|empty/,
    )
  })

  it('throws for non-FROM query when time flags are set', () => {
    assert.throws(() => applyTimeFlagsToQuery('ROW x = 1', '1h', undefined, NOW), /only FROM-based/)
  })

  it('supports week durations', () => {
    const q = applyTimeFlagsToQuery('FROM logs', '1w', undefined, NOW)
    assert.match(q, /WHERE @timestamp >= "2026-04-15T10:00:00.000Z"/)
  })
})
