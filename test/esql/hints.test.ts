/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { errorHint, parsingSuggestion } from '../../src/esql/hints.ts'
import { EsqlError } from '../../src/esql/esql-client.ts'

describe('parsingSuggestion', () => {
  it('extracts first expected token from mismatched input message', () => {
    const reason = "mismatched input 'WHER' expecting {'WHERE', 'EVAL', 'STATS'}"
    const s = parsingSuggestion(reason)
    assert.ok(s.includes('WHERE'), `expected "WHERE" in suggestion, got: ${s}`)
  })

  it('echoes unknown function name', () => {
    const reason = 'Unknown function [AVGG]'
    const s = parsingSuggestion(reason)
    assert.ok(s.includes('AVGG'), `expected "AVGG" in suggestion, got: ${s}`)
  })

  it('echoes unknown column name', () => {
    const reason = 'Unknown column [hostt]'
    const s = parsingSuggestion(reason)
    assert.ok(s.includes('hostt'), `expected "hostt" in suggestion, got: ${s}`)
  })

  it('returns empty string for unrecognised error text', () => {
    assert.equal(parsingSuggestion('some unrelated error reason'), '')
  })
})

describe('errorHint', () => {
  it('returns empty string for null', () => {
    assert.equal(errorHint(null), '')
  })

  it('returns empty string for undefined', () => {
    assert.equal(errorHint(undefined), '')
  })

  it('401 — includes status and authentication guidance', () => {
    const hint = errorHint(new EsqlError('security_exception: missing credentials', 401))
    assert.ok(hint.includes('401'), `hint missing "401": ${hint}`)
    assert.ok(/auth/i.test(hint), `hint missing auth guidance: ${hint}`)
  })

  it('403 — includes status and privileges guidance', () => {
    const hint = errorHint(new EsqlError('security_exception: forbidden', 403))
    assert.ok(hint.includes('403'), `hint missing "403": ${hint}`)
    assert.ok(/privileges/i.test(hint), `hint missing privileges: ${hint}`)
  })

  it('404 index_not_found_exception — says "Index not found"', () => {
    const hint = errorHint(new EsqlError('index_not_found_exception: no such index [missing]', 404))
    assert.ok(/index not found/i.test(hint), `expected "Index not found" in: ${hint}`)
  })

  it('404 generic — includes status code', () => {
    const hint = errorHint(new EsqlError('resource_not_found: something missing', 404))
    assert.ok(hint.includes('404'), `hint missing "404": ${hint}`)
  })

  it('400 parsing_exception — mentions ES|QL syntax', () => {
    const hint = errorHint(new EsqlError('parsing_exception: Unknown command [FORM]', 400))
    assert.ok(/syntax|ES\|QL/i.test(hint), `hint missing syntax guidance: ${hint}`)
  })

  it('503 — includes status code', () => {
    const hint = errorHint(new EsqlError('service_unavailable', 503))
    assert.ok(hint.includes('503'), `hint missing "503": ${hint}`)
  })

  it('429 — includes status code', () => {
    const hint = errorHint(new EsqlError('too_many_requests', 429))
    assert.ok(hint.includes('429'), `hint missing "429": ${hint}`)
  })

  it('connection refused — says "Connection refused"', () => {
    const err = new EsqlError('dial tcp 127.0.0.1:9200: connection refused', undefined, true)
    const hint = errorHint(err)
    assert.ok(/connection refused/i.test(hint), `expected "Connection refused" in: ${hint}`)
  })

  it('TLS error — mentions TLS or certificate', () => {
    const err = new EsqlError('tls: failed to verify certificate: x509', undefined, true)
    const hint = errorHint(err)
    assert.ok(/tls|certificate/i.test(hint), `expected TLS/certificate in: ${hint}`)
  })

  it('timeout error — mentions "timed out"', () => {
    const err = new EsqlError('context deadline exceeded', undefined, true)
    const hint = errorHint(err)
    assert.ok(/timed out/i.test(hint), `expected "timed out" in: ${hint}`)
  })

  it('unknown status — returns empty string', () => {
    const hint = errorHint(new EsqlError('some error', 418))
    assert.equal(hint, '')
  })
})
