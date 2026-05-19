/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { CloudApiDefinition } from './types.ts'
import type { CloudRequestParams } from '../lib/cloud-client.ts'
import type { ParsedResult } from '../factory.ts'

/**
 * Builds a `CloudRequestParams` object from an API definition and parsed CLI input.
 *
 * All path params, query params, and body fields arrive in `parsed.input` as a
 * single flat object. The definition's param arrays act as a routing manifest
 * to classify each key back to its destination:
 *
 * - `pathParams` → interpolated into the URL path
 * - `queryParams` → added to the querystring (stringified for fetch)
 * - `body` shape keys → collected into the request body object
 */
export function buildCloudRequestParams(
  def: CloudApiDefinition,
  parsed: ParsedResult,
): CloudRequestParams {
  const input = (parsed.input ?? {}) as Record<string, unknown>

  const path = interpolatePath(def, input)
  const querystring = buildQuerystring(def, input)
  const body = collectBody(def, input)

  const params: CloudRequestParams = { method: def.method, path }
  if (Object.keys(querystring).length > 0) params.querystring = querystring
  if (body !== undefined) params.body = body
  return params
}

/**
 * Encodes a single path parameter value, percent-encoding special characters
 * like `/`, `?`, and `#` to prevent path traversal (#106).
 */
function encodePathParam(value: string): string {
  return encodeURIComponent(value)
}

function interpolatePath(
  def: CloudApiDefinition,
  input: Record<string, unknown>,
): string {
  let path = def.path

  for (const param of def.pathParams ?? []) {
    const value = input[param.name]
    if (value !== undefined) {
      path = path.replace(`{${param.name}}`, encodePathParam(String(value)))
    } else if (!param.required) {
      path = path.replace(new RegExp(`/?\\{${param.name}\\}/?`), '')
      path = path.replace(/\/$/, '') || '/'
    }
  }

  return path
}

function buildQuerystring(
  def: CloudApiDefinition,
  input: Record<string, unknown>,
): Record<string, string> {
  const qs: Record<string, string> = {}

  for (const qp of def.queryParams ?? []) {
    const inputKey = qp.cliFlag ?? qp.name
    const value = input[inputKey]
    if (value !== undefined) {
      qs[qp.name] = String(value)
    }
  }

  return qs
}

const BODY_METHODS: ReadonlySet<string> = new Set(['POST', 'PUT', 'PATCH'])

// Forwards every input key not consumed by path or query routing, so declared
// body fields and undeclared --input-file/stdin fields both flow through (#328, #86).
function collectBody(
  def: CloudApiDefinition,
  input: Record<string, unknown>,
): Record<string, unknown> | undefined {
  if (!BODY_METHODS.has(def.method)) return undefined

  const reserved = new Set([
    ...(def.pathParams ?? []).map((p) => p.name),
    ...(def.queryParams ?? []).map((q) => q.cliFlag ?? q.name),
  ])
  const body: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(input)) {
    if (!reserved.has(key) && value !== undefined) {
      body[key] = value
    }
  }
  return Object.keys(body).length > 0 ? body : undefined
}
