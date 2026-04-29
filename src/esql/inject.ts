/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

export function isFromQuery (query: string): boolean {
  return /^\s*FROM\s/i.test(query)
}

/**
 * Walk `query` skipping ES|QL string literals (triple-quoted, double-quoted)
 * and comments (`//`, `/* * /`). Calls `test` on each top-level character.
 * Returns the index where `test` first returns true, or -1.
 */
function scanTopLevel (query: string, test: (ch: string, i: number) => boolean): number {
  let i = 0
  while (i < query.length) {
    // Triple-quoted string """...""" — must be checked before double-quoted
    if (query.startsWith('"""', i)) {
      i += 3
      while (i < query.length && !query.startsWith('"""', i)) i++
      i += 3
      continue
    }
    // Double-quoted string "..."
    if (query[i] === '"') {
      i++
      while (i < query.length && query[i] !== '"') {
        if (query[i] === '\\') i++
        i++
      }
      i++ // skip closing "
      continue
    }
    // Line comment //...
    if (query.startsWith('//', i)) {
      while (i < query.length && query[i] !== '\n') i++
      continue
    }
    // Block comment /*...*/
    if (query.startsWith('/*', i)) {
      i += 2
      while (i < query.length && !query.startsWith('*/', i)) i++
      i += 2
      continue
    }
    if (test(query[i]!, i)) return i
    i++
  }
  return -1
}

/**
 * Find the index of the first top-level `|`. If `commandRe` is given, only
 * matches a `|` whose next non-whitespace word matches the regex.
 */
function findTopLevelPipe (query: string, commandRe?: RegExp): number {
  return scanTopLevel(query, (ch, i) => {
    if (ch !== '|') return false
    if (!commandRe) return true
    const rest = query.slice(i + 1).trimStart()
    const m = /^([A-Za-z_]+)/.exec(rest)
    return !!(m && commandRe.test(m[1]!))
  })
}

/**
 * Inject `| WHERE <expr>` immediately before the first top-level pipe in a
 * FROM query (i.e. before any existing processing steps). Empty `expr` is
 * a no-op. Throws for non-FROM queries.
 */
export function injectWhere (query: string, expr: string): string {
  if (!expr) return query
  if (!isFromQuery(query)) throw new Error('injectWhere: only FROM-based queries are supported')
  const pipeIdx = findTopLevelPipe(query)
  if (pipeIdx === -1) {
    return `${query.trimEnd()} | WHERE ${expr}`
  }
  const before = query.slice(0, pipeIdx).trimEnd()
  const after = query.slice(pipeIdx) // includes the leading |
  return `${before} | WHERE ${expr} ${after}`
}

/**
 * Inject `| SORT <orderExpr>` before `| LIMIT` (or at end if no LIMIT).
 * Idempotent: if a top-level SORT already exists, returns the query unchanged.
 * Empty `orderExpr` is a no-op.
 */
export function injectSort (query: string, orderExpr: string): string {
  if (!orderExpr) return query
  if (findTopLevelPipe(query, /^SORT$/i) !== -1) return query // already has SORT
  const limitIdx = findTopLevelPipe(query, /^LIMIT$/i)
  if (limitIdx === -1) {
    return `${query.trimEnd()} | SORT ${orderExpr}`
  }
  const before = query.slice(0, limitIdx).trimEnd()
  const after = query.slice(limitIdx) // includes the leading |
  return `${before} | SORT ${orderExpr} ${after}`
}

/** Returns true if the query contains a top-level STATS command. */
export function hasAggregation (query: string): boolean {
  return findTopLevelPipe(query, /^STATS$/i) !== -1
}
