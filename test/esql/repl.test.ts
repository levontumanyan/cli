/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { needsContinuation, getCandidates, extractIndexName } from '../../src/esql/repl.ts'

describe('needsContinuation', () => {
  it('true when line ends with |', () => {
    assert.equal(needsContinuation('FROM logs |'), true)
  })

  it('true when line ends with \\', () => {
    assert.equal(needsContinuation('FROM logs \\'), true)
  })

  it('true when | has trailing whitespace', () => {
    assert.equal(needsContinuation('FROM logs |  '), true)
  })

  it('true when \\ has trailing whitespace', () => {
    assert.equal(needsContinuation('FROM logs \\  '), true)
  })

  it('true for bare |', () => {
    assert.equal(needsContinuation('|'), true)
  })

  it('false for a complete query', () => {
    assert.equal(needsContinuation('FROM logs | LIMIT 10'), false)
  })

  it('false for empty string', () => {
    assert.equal(needsContinuation(''), false)
  })

  it('false for query ending with normal text', () => {
    assert.equal(needsContinuation('FROM logs | STATS COUNT(*) BY host'), false)
  })
})

describe('getCandidates', () => {
  it('empty line — offers source commands (FROM, ROW, SHOW, TS)', () => {
    const candidates = getCandidates('')
    for (const kw of ['FROM', 'ROW', 'SHOW', 'TS']) {
      assert.ok(candidates.includes(kw), `expected ${kw} in candidates for empty line`)
    }
  })

  it('"F" — offers FROM', () => {
    const candidates = getCandidates('F')
    assert.ok(candidates.includes('FROM'), `expected FROM: ${candidates.join(', ')}`)
  })

  it('"T" — offers TS', () => {
    const candidates = getCandidates('T')
    assert.ok(candidates.includes('TS'), `expected TS: ${candidates.join(', ')}`)
  })

  it('"FROM logs | W" — offers WHERE after pipe', () => {
    const candidates = getCandidates('FROM logs | W')
    assert.ok(candidates.includes('WHERE'), `expected WHERE: ${candidates.join(', ')}`)
  })

  it('"FROM logs | " — offers processing commands after pipe', () => {
    const candidates = getCandidates('FROM logs | ')
    for (const kw of ['WHERE', 'STATS', 'SORT', 'LIMIT']) {
      assert.ok(candidates.includes(kw), `expected ${kw} after pipe`)
    }
  })

  it('"FROM logs | MV" — offers MV_EXPAND after pipe', () => {
    const candidates = getCandidates('FROM logs | MV')
    assert.ok(candidates.includes('MV_EXPAND'), `expected MV_EXPAND: ${candidates.join(', ')}`)
  })

  it('returns non-empty list even when prefix matches nothing (falls back to full pool)', () => {
    const candidates = getCandidates('FROM logs | ZZZNOMATCH')
    assert.ok(candidates.length > 0, 'should fall back to full processing pool')
  })
})

describe('extractIndexName', () => {
  it('extracts index pattern from simple FROM', () => {
    assert.equal(extractIndexName('FROM logs-*'), 'logs-*')
  })

  it('extracts index from FROM with pipe', () => {
    assert.equal(extractIndexName('FROM logs-* | WHERE x > 1'), 'logs-*')
  })

  it('handles lowercase from', () => {
    assert.equal(extractIndexName('from logs-*'), 'logs-*')
  })

  it('handles mixed case', () => {
    assert.equal(extractIndexName('From my_index'), 'my_index')
  })

  it('extracts from TS source command', () => {
    assert.equal(extractIndexName('TS metrics-*'), 'metrics-*')
  })

  it('extracts from TS with pipe', () => {
    assert.equal(extractIndexName('TS metrics-* | STATS AVG(RATE(x)) BY t = TBUCKET(1 minute)'), 'metrics-*')
  })

  it('handles lowercase ts', () => {
    assert.equal(extractIndexName('ts metrics-*'), 'metrics-*')
  })

  it('returns empty string for ROW query', () => {
    assert.equal(extractIndexName('ROW x = 1'), '')
  })

  it('returns empty string for bare FROM with no index', () => {
    assert.equal(extractIndexName('FROM '), '')
  })

  it('returns empty string for empty string', () => {
    assert.equal(extractIndexName(''), '')
  })

  it('FROM with METADATA — stops at METADATA keyword', () => {
    assert.equal(extractIndexName('FROM logs-* METADATA _id'), 'logs-*')
  })
})
