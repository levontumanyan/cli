/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from 'commander'
import { runQuery } from '../esql-client.ts'
import { formatOutput, printStats, warnIfPartial } from '../formatter.ts'
import { applyParams, loadSavedQueries } from '../saved-queries.ts'
import { injectWhere } from '../inject.ts'
import { handleError } from './query.ts'

function parseDuration (s: string): number {
  const m = /^(\d+(?:\.\d+)?)(ms|s|m|h)$/.exec(s)
  if (!m) throw new Error(`Invalid duration "${s}" — use e.g. 2s, 30s, 1m`)
  const n = parseFloat(m[1]!)
  switch (m[2]) {
    case 'ms': return n
    case 's': return n * 1000
    case 'm': return n * 60_000
    case 'h': return n * 3_600_000
    default: return n * 1000
  }
}

function parseRelativeTime (s: string, now: Date): Date {
  const ms = (() => {
    const m = /^(\d+(?:\.\d+)?)(ms|s|m|h|d)$/.exec(s)
    if (!m) return null
    const n = parseFloat(m[1]!)
    switch (m[2]) {
      case 'ms': return n
      case 's': return n * 1000
      case 'm': return n * 60_000
      case 'h': return n * 3_600_000
      case 'd': return n * 86_400_000
      default: return null
    }
  })()
  if (ms !== null) return new Date(now.getTime() - ms)
  const d = new Date(s)
  if (!isNaN(d.getTime())) return d
  throw new Error(`Invalid time value: "${s}"`)
}

function buildTimedQuery (query: string, since: string | undefined, until: string | undefined, now: Date): string {
  const parts: string[] = []
  if (since) parts.push(`@timestamp >= "${parseRelativeTime(since, now).toISOString()}"`)
  if (until) parts.push(`@timestamp <= "${parseRelativeTime(until, now).toISOString()}"`)
  if (parts.length === 0) return query
  try { return injectWhere(query, parts.join(' AND ')) }
  catch { return query }
}

export function createWatchCommand (): Command {
  const cmd = new Command('watch')
  cmd.description('Re-run a query on an interval, refreshing the terminal each time')
  cmd.argument('[query]', 'ES|QL query to run (or use --saved)')
  cmd.option('--every <duration>', 'refresh interval (e.g. 2s, 1m)', '5s')
  cmd.option('-f, --format <fmt>', 'output format: table, json, csv, tsv', 'table')
  cmd.option('--no-header', 'suppress column headers')
  cmd.option('--delimiter <char>', 'custom field delimiter (implies tsv)')
  cmd.option('--columns <list>', 'comma-separated list of columns to include')
  cmd.option('--timeout <duration>', 'per-query timeout')
  cmd.option('--param <kv>', 'key=value for {{placeholder}} substitution (repeatable)', (v, a: string[]) => [...a, v], [] as string[])
  cmd.option('--saved <name>', 'run a saved query by name')
  cmd.option('--stats', 'print query performance stats each refresh')
  cmd.option('--stats-only', 'stats only; skip row output (implies --stats)')
  cmd.option('--profile', 'include per-driver profile breakdown (implies --stats)')
  cmd.option('--show-null-cols', 'keep all-null columns in table mode')
  cmd.option('-x, --expanded', 'force vertical record-per-line layout')
  cmd.option('--since <time>', 'inject WHERE @timestamp >= <time> — re-evaluated each tick')
  cmd.option('--until <time>', 'inject WHERE @timestamp <= <time>')
  cmd.allowExcessArguments(false)

  cmd.action(async (queryArg: string | undefined, options: Record<string, unknown>) => {
    const savedName = options.saved as string | undefined
    let baseQuery: string

    if (savedName) {
      const file = loadSavedQueries()
      const sq = file.queries[savedName]
      if (!sq) {
        process.stderr.write(`Error: unknown query "${savedName}" — run: elastic esql queries list\n`)
        process.exitCode = 1; return
      }
      baseQuery = sq.query
    } else if (queryArg) {
      baseQuery = queryArg
    } else {
      process.stderr.write('Error: provide a query argument or use --saved <name>\n')
      process.exitCode = 1; return
    }

    const params = options.param as string[]
    if (params.length > 0) baseQuery = applyParams(baseQuery, params)

    const everyMs = (() => { try { return parseDuration(options.every as string) } catch (e) { process.stderr.write(`Error: ${(e as Error).message}\n`); process.exitCode = 1; return null } })()
    if (everyMs === null) return

    const format = options.format as string
    const delimiter = options.delimiter as string | undefined
    const resolvedFormat = delimiter ? 'tsv' : format
    const noHeader = !(options.header as boolean ?? true)
    const columnsRaw = options.columns as string | undefined
    const columns = columnsRaw ? columnsRaw.split(',').map(c => c.trim()).filter(Boolean) : undefined
    const doStats = !!(options.stats || options.statsOnly || options.profile)
    const statsOnly = !!(options.statsOnly)
    const profile = !!(options.profile)
    const showNullCols = !!(options.showNullCols)
    const expanded = !!(options.expanded)
    const since = options.since as string | undefined
    const until = options.until as string | undefined

    const runOnce = async (): Promise<void> => {
      process.stdout.write('\x1b[2J\x1b[H')
      const now = new Date()
      process.stderr.write(`Every ${options.every as string} — ${now.toLocaleTimeString()}\n\n`)
      const q = buildTimedQuery(baseQuery, since, until, now)
      try {
        const resp = await runQuery(q, { profile })
        warnIfPartial(resp)
        if (doStats) printStats(resp, resp.values.length)
        if (!statsOnly) {
          formatOutput(resp, { format: resolvedFormat, noHeader, delimiter, columns, showNullCols, expanded }, process.stdout)
          process.stderr.write(`\n${resp.values.length} rows (${resp.took}ms)\n`)
        }
      } catch (err) {
        process.stderr.write(`Error: ${err instanceof Error ? err.message : String(err)}\n`)
      }
    }

    await runOnce()

    const stop = (): void => { clearInterval(intervalId); process.stderr.write('\nStopped.\n') }
    process.on('SIGINT', stop)
    process.on('SIGTERM', stop)

    const intervalId = setInterval(runOnce, everyMs)
    // Keep the process alive until explicitly stopped
    intervalId.unref?.()
    await new Promise<void>(resolve => {
      process.once('SIGINT', resolve)
      process.once('SIGTERM', resolve)
    })
    clearInterval(intervalId)
    handleError // reference to suppress unused import warning
  })

  return cmd
}
