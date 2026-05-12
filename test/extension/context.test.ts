/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { buildContextEnv } from '../../src/extension/context.ts'
import type { ResolvedConfig } from '../../src/config/types.ts'

describe('buildContextEnv', () => {
  it('returns empty object when no services are configured', () => {
    const config: ResolvedConfig = { context: {} }
    assert.deepEqual(buildContextEnv(config), {})
  })

  it('sets ELASTIC_ES_URL and ELASTIC_ES_API_KEY for api_key auth', () => {
    const config: ResolvedConfig = {
      context: {
        elasticsearch: { url: 'https://es.example.com:9200', auth: { api_key: 'abc123' } },
      },
    }
    const env = buildContextEnv(config)
    assert.equal(env['ELASTIC_ES_URL'], 'https://es.example.com:9200')
    assert.equal(env['ELASTIC_ES_API_KEY'], 'abc123')
    assert.equal('ELASTIC_ES_USERNAME' in env, false)
    assert.equal('ELASTIC_ES_PASSWORD' in env, false)
  })

  it('sets ELASTIC_ES_USERNAME and ELASTIC_ES_PASSWORD for basic auth', () => {
    const config: ResolvedConfig = {
      context: {
        elasticsearch: { url: 'http://localhost:9200', auth: { username: 'elastic', password: 'changeme' } },
      },
    }
    const env = buildContextEnv(config)
    assert.equal(env['ELASTIC_ES_URL'], 'http://localhost:9200')
    assert.equal(env['ELASTIC_ES_USERNAME'], 'elastic')
    assert.equal(env['ELASTIC_ES_PASSWORD'], 'changeme')
    assert.equal('ELASTIC_ES_API_KEY' in env, false)
  })

  it('sets ELASTIC_ES_URL only when auth is absent', () => {
    const config: ResolvedConfig = {
      context: {
        elasticsearch: { url: 'http://localhost:9200' },
      },
    }
    const env = buildContextEnv(config)
    assert.equal(env['ELASTIC_ES_URL'], 'http://localhost:9200')
    assert.equal('ELASTIC_ES_API_KEY' in env, false)
    assert.equal('ELASTIC_ES_USERNAME' in env, false)
  })

  it('sets Kibana env vars', () => {
    const config: ResolvedConfig = {
      context: {
        kibana: { url: 'https://kb.example.com:5601', auth: { api_key: 'kb-key' } },
      },
    }
    const env = buildContextEnv(config)
    assert.equal(env['ELASTIC_KIBANA_URL'], 'https://kb.example.com:5601')
    assert.equal(env['ELASTIC_KIBANA_API_KEY'], 'kb-key')
    assert.equal('ELASTIC_ES_URL' in env, false)
  })

  it('sets Kibana basic auth env vars', () => {
    const config: ResolvedConfig = {
      context: {
        kibana: { url: 'http://localhost:5601', auth: { username: 'kibana_system', password: 's3cr3t' } },
      },
    }
    const env = buildContextEnv(config)
    assert.equal(env['ELASTIC_KIBANA_USERNAME'], 'kibana_system')
    assert.equal(env['ELASTIC_KIBANA_PASSWORD'], 's3cr3t')
    assert.equal('ELASTIC_KIBANA_API_KEY' in env, false)
  })

  it('sets Cloud env vars', () => {
    const config: ResolvedConfig = {
      context: {
        cloud: { url: 'https://cloud.elastic.co', auth: { api_key: 'cloud-key' } },
      },
    }
    const env = buildContextEnv(config)
    assert.equal(env['ELASTIC_CLOUD_URL'], 'https://cloud.elastic.co')
    assert.equal(env['ELASTIC_CLOUD_API_KEY'], 'cloud-key')
  })

  it('sets env vars for all three services simultaneously', () => {
    const config: ResolvedConfig = {
      context: {
        elasticsearch: { url: 'https://es:9200', auth: { api_key: 'es-key' } },
        kibana: { url: 'https://kb:5601', auth: { api_key: 'kb-key' } },
        cloud: { url: 'https://cloud.elastic.co', auth: { api_key: 'cloud-key' } },
      },
    }
    const env = buildContextEnv(config)
    assert.equal(env['ELASTIC_ES_URL'], 'https://es:9200')
    assert.equal(env['ELASTIC_ES_API_KEY'], 'es-key')
    assert.equal(env['ELASTIC_KIBANA_URL'], 'https://kb:5601')
    assert.equal(env['ELASTIC_KIBANA_API_KEY'], 'kb-key')
    assert.equal(env['ELASTIC_CLOUD_URL'], 'https://cloud.elastic.co')
    assert.equal(env['ELASTIC_CLOUD_API_KEY'], 'cloud-key')
  })

  it('does not include undefined values in the returned object', () => {
    const config: ResolvedConfig = {
      context: {
        elasticsearch: { url: 'https://es:9200', auth: { api_key: 'key' } },
      },
    }
    const env = buildContextEnv(config)
    for (const val of Object.values(env)) {
      assert.notEqual(val, undefined)
    }
  })
})
