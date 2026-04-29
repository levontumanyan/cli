/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import Table from 'cli-table3'
import type { EsqlColumn, EsqlResponse } from './esql-client.ts'

export interface FormatOptions {
  format?: string | undefined
  noHeader?: boolean | undefined
  delimiter?: string | undefined
  columns?: string[] | undefined
  expanded?: boolean | undefined
  showNullCols?: boolean | undefined
}

export function defaultFormat (): string {
  return process.stdout.isTTY ? 'table' : 'tsv'
}

function resolveActive (resp: EsqlResponse, filterCols?: string[]): { cols: EsqlColumn[]; indices: number[] } {
  if (!filterCols || filterCols.length === 0) {
    return { cols: resp.columns, indices: resp.columns.map((_, i) => i) }
  }
  const colMap = new Map(resp.columns.map((c, i) => [c.name, i]))
  const matched: Array<{ col: EsqlColumn; origIdx: number }> = []
  for (const name of filterCols) {
    const idx = colMap.get(name)
    if (idx !== undefined) matched.push({ col: resp.columns[idx]!, origIdx: idx })
  }
  // If none matched, return all columns (same as no filter)
  if (matched.length === 0) {
    return { cols: resp.columns, indices: resp.columns.map((_, i) => i) }
  }
  // Preserve response column order, not filter order
  matched.sort((a, b) => a.origIdx - b.origIdx)
  return { cols: matched.map(m => m.col), indices: matched.map(m => m.origIdx) }
}

export function formatOutput (resp: EsqlResponse, opts: FormatOptions, writer: NodeJS.WritableStream): void {
  const fmt = opts.format ?? defaultFormat()
  let { cols, indices } = resolveActive(resp, opts.columns)

  // In table mode, hide columns that are null in every row unless --show-null-cols
  if ((fmt === 'table' || opts.expanded) && opts.showNullCols !== true) {
    const keep = cols.map((_, ci) => resp.values.some(row => row[indices[ci]!] != null))
    cols = cols.filter((_, i) => keep[i])
    indices = indices.filter((_, i) => keep[i])
  }

  const colNames = cols.map(c => c.name)

  if (fmt === 'json') {
    const objs = resp.values.map(row => {
      const obj: Record<string, unknown> = {}
      for (let i = 0; i < colNames.length; i++) { obj[colNames[i]!] = row[indices[i]!] }
      return obj
    })
    writer.write(JSON.stringify(objs, null, 2) + '\n')
    return
  }

  if (fmt === 'ndjson') {
    for (const row of resp.values) {
      const obj: Record<string, unknown> = {}
      for (let i = 0; i < colNames.length; i++) { obj[colNames[i]!] = row[indices[i]!] }
      writer.write(JSON.stringify(obj) + '\n')
    }
    return
  }

  const isDelimited = fmt === 'csv' || fmt === 'tsv' || (opts.delimiter != null && opts.delimiter !== '')
  if (isDelimited) {
    const delim = fmt === 'csv' ? ',' : (opts.delimiter ?? '\t')
    if (!opts.noHeader) { writer.write(colNames.join(delim) + '\n') }
    for (const row of resp.values) {
      const cells = indices.map(idx => {
        const v = row[idx]
        const s = v == null ? '' : String(v)
        if (fmt === 'csv' && (s.includes(',') || s.includes('"') || s.includes('\n'))) {
          return `"${s.replace(/"/g, '""')}"`
        }
        return s
      })
      writer.write(cells.join(delim) + '\n')
    }
    return
  }

  if (opts.expanded === true) {
    for (const row of resp.values) {
      const tbl = new Table({ style: { head: [] } })
      for (let i = 0; i < colNames.length; i++) {
        tbl.push({ [colNames[i]!]: String(row[indices[i]!] ?? '') })
      }
      writer.write(tbl.toString() + '\n')
    }
    return
  }

  if (fmt !== 'table') {
    throw new Error(`unknown format: ${fmt}`)
  }

  // default: table
  const table = new Table({
    head: opts.noHeader ? [] : colNames,
    style: { head: [] },
  })
  for (const row of resp.values) {
    table.push(indices.map(idx => String(row[idx] ?? '')))
  }
  writer.write(table.toString() + '\n')
}

/** Convert nanoseconds to a human-readable string (ns / µs / ms / s). */
export function formatNanos (nanos: number): string {
  if (nanos < 1_000) return `${nanos}ns`
  if (nanos < 1_000_000) return `${(nanos / 1_000).toFixed(1)}µs`
  if (nanos < 1_000_000_000) return `${(nanos / 1_000_000).toFixed(1)}ms`
  return `${(nanos / 1_000_000_000).toFixed(2)}s`
}

interface DriverGroup {
  description: string
  count: number
  totalNanos: number
}

function groupDrivers (
  drivers: NonNullable<EsqlResponse['profile']>['drivers'],
): DriverGroup[] {
  const map = new Map<string, DriverGroup>()
  for (const d of drivers) {
    const g = map.get(d.description)
    if (g) { g.count++; g.totalNanos += d.took_nanos }
    else map.set(d.description, { description: d.description, count: 1, totalNanos: d.took_nanos })
  }
  return [...map.values()].sort((a, b) => b.totalNanos - a.totalNanos)
}

export function printStats (
  resp: EsqlResponse,
  rowCount: number,
  writer: NodeJS.WritableStream = process.stderr,
): void {
  if (resp.is_partial === true) {
    writer.write('Warning: results are partial — some shards may have failed\n')
  }
  writer.write(`${rowCount} rows in set (${resp.took}ms)\n`)
  if (resp.profile?.drivers && resp.profile.drivers.length > 0) {
    writer.write('Profile (aggregated by task):\n')
    for (const g of groupDrivers(resp.profile.drivers)) {
      const label = g.count > 1 ? `${g.description} x${g.count}` : g.description
      writer.write(`  ${label}: ${formatNanos(g.totalNanos)}\n`)
    }
  }
}

export function warnIfPartial (
  resp: EsqlResponse,
  writer: NodeJS.WritableStream = process.stderr,
): void {
  if (resp.is_partial === true) {
    writer.write('Warning: results are partial — some shards may have failed\n')
  }
}
