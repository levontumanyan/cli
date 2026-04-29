/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'
import { parse, stringify } from 'yaml'

export interface SavedQuery {
  query: string
  cluster?: string
}

export interface SavedQueriesFile {
  queries: Record<string, SavedQuery>
}

function configPath (): string {
  return join(homedir(), '.elasticrc-esql.yml')
}

export function loadSavedQueries (): SavedQueriesFile {
  try {
    const raw = readFileSync(configPath(), 'utf-8')
    const parsed = parse(raw) as Record<string, unknown>
    if (parsed && typeof parsed.queries === 'object' && parsed.queries !== null) {
      return { queries: parsed.queries as Record<string, SavedQuery> }
    }
  } catch {
    // file doesn't exist yet
  }
  return { queries: {} }
}

export function saveSavedQueries (file: SavedQueriesFile): void {
  writeFileSync(configPath(), stringify(file), 'utf-8')
}

export function listQueryNames (): string[] {
  const file = loadSavedQueries()
  return Object.keys(file.queries).sort()
}

export function looksLikeEsqlQuery (q: string): boolean {
  const upper = q.trimStart().toUpperCase()
  return upper.startsWith('FROM ') || upper.startsWith('ROW ') || upper.startsWith('SHOW ') ||
    upper.startsWith('FROM\t') || upper.startsWith('ROW\t') || upper.startsWith('SHOW\t')
}

export function applyParams (query: string, params: string[]): string {
  if (params.length === 0) return query

  const parsed: Array<{ key: string; value: string }> = []
  for (const param of params) {
    const eq = param.indexOf('=')
    if (eq === -1) throw new Error(`param "${param}" has no "="`)
    const key = param.slice(0, eq).trim()
    if (!key) throw new Error(`param "${param}" has empty key`)
    parsed.push({ key, value: param.slice(eq + 1) })
  }

  for (const { key } of parsed) {
    if (!query.includes(`{{${key}}}`)) throw new Error(`param ${key} has no placeholder in query`)
  }

  let result = query
  for (const { key, value } of parsed) {
    result = result.replaceAll(`{{${key}}}`, value)
  }

  const unresolved = /\{\{([^}]+)\}\}/.exec(result)
  if (unresolved) throw new Error(`query has unresolved placeholder {{${unresolved[1]}}}`)

  return result
}
