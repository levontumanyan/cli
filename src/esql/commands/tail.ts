/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from 'commander'
import { runQuery } from '../esql-client.ts'
import { formatOutput, warnIfPartial, printStats } from '../formatter.ts'
import { applyParams, loadSavedQueries } from '../saved-queries.ts'
import { isFromQuery, injectWhere, injectSort } from '../inject.ts'
import type { EsqlResponse } from '../esql-client.ts'

function parseDuration (s: string): number {
  const m = /^(\d+(?:\.\d+)?)(ms|s|m|h|d)$/.exec(s)
  if (!m) throw new Error(`Invalid duration "${s}" — use e.g. 5m, 1h`)
  const n = parseFloat(m[1]!)
  switch (m[2]) {
    case 'ms': return n
    case 's': return n * 1000
    case 'm': return n * 60_000
    case 'h': return n * 3_600_000
    case 'd': return n * 86_400_000
    default: return n * 1000
  }
}

export function buildTailQuery (baseQuery: string, tsField: string, lastSeen: string): string {
  const whereExpr = `${tsField} > "${lastSeen}"`
  const q = injectWhere(baseQuery, whereExpr)
  return injectSort(q, `${tsField} ASC`)
}

export function tsColumnIndex (resp: EsqlResponse, tsField: string): number {
  return resp.columns.findIndex(c => c.name === tsField)
}

export function extractMaxTimestamp (resp: EsqlResponse, tsIdx: number): string | null {
  for (let i = resp.values.length - 1; i >= 0; i--) {
    const row = resp.values[i]
    if (!row) continue
    const v = row[tsIdx]
    if (typeof v === 'string' && v !== '') return v
  }
  return null
}

export function createTailCommand (): Command {
  const cmd = new Command('tail')
  cmd.description('Follow a query, printing only new rows on each poll')
  cmd.argument('[query]', 'ES|QL query (must use FROM; or use --saved)')
  cmd.option('--every <duration>', 'poll interval', '2s')
  cmd.option('--since <time>', 'initial lookback window (e.g. 5m, 1h)', '5m')
  cmd.option('--ts-field <field>', 'timestamp field for delta tracking', '@timestamp')
  cmd.option('-f, --format <fmt>', 'output format: table, json, ndjson, csv, tsv', 'tsv')
  cmd.option('--no-header', 'suppress column headers on first poll')
  cmd.option('--delimiter <char>', 'custom field delimiter')
  cmd.option('--columns <list>', 'comma-separated list of columns to include')
  cmd.option('--timeout <duration>', 'per-query timeout')
  cmd.option('--param <kv>', 'key=value for {{placeholder}} substitution (repeatable)', (v, a: string[]) => [...a, v], [] as string[])
  cmd.option('--saved <name>', 'run a saved query by name')
  cmd.option('--stats', 'print query performance stats each poll')
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

    if (!isFromQuery(baseQuery)) {
      process.stderr.write('Error: tail only supports FROM-based queries\n')
      process.exitCode = 1; return
    }

    const everyMs = (() => { try { return parseDuration(options.every as string) } catch (e) { process.stderr.write(`Error: ${(e as Error).message}\n`); process.exitCode = 1; return null } })()
    if (everyMs === null) return

    const sinceRaw = options.since as string
    let lastSeen: string
    try {
      lastSeen = new Date(Date.now() - parseDuration(sinceRaw)).toISOString()
    } catch {
      lastSeen = new Date(Date.now() - 5 * 60_000).toISOString()
    }

    const tsField = options.tsField as string ?? '@timestamp'
    const format = options.format as string
    const delimiter = options.delimiter as string | undefined
    const noHeader = !(options.header as boolean ?? true)
    const columnsRaw = options.columns as string | undefined
    const columns = columnsRaw ? columnsRaw.split(',').map(c => c.trim()).filter(Boolean) : undefined
    const showStats = !!(options.stats)

    let firstPoll = true
    let stopped = false

    const doPoll = async (): Promise<boolean> => {
      const q = buildTailQuery(baseQuery, tsField, lastSeen)
      try {
        const resp = await runQuery(q)
        warnIfPartial(resp)

        const tsIdx = tsColumnIndex(resp, tsField)
        if (tsIdx < 0) {
          process.stderr.write(`Error: tail requires "${tsField}" in the output — add it to your KEEP clause or pass --ts-field\n`)
          return true // fatal
        }

        if (resp.values.length > 0) {
          formatOutput(resp, {
            format, noHeader: noHeader || !firstPoll, delimiter, columns
          }, process.stdout)
          const maxTs = extractMaxTimestamp(resp, tsIdx)
          if (maxTs) lastSeen = maxTs
        } else if (firstPoll) {
          if (!noHeader) {
            formatOutput({ ...resp, values: [] }, { format, noHeader: false, delimiter, columns }, process.stdout)
          }
          process.stderr.write(`(no rows in the last ${sinceRaw}; polling every ${options.every as string} for new data)\n`)
        }

        if (showStats) printStats(resp, resp.values.length)
        firstPoll = false
      } catch (err) {
        process.stderr.write(`Error: ${err instanceof Error ? err.message : String(err)}\n`)
      }
      return false
    }

    const fatal = await doPoll()
    if (fatal) return

    const stop = (): void => {
      stopped = true
      clearInterval(intervalId)
      process.stderr.write('\nStopped.\n')
    }
    process.on('SIGINT', stop)
    process.on('SIGTERM', stop)

    const intervalId = setInterval(async () => {
      if (stopped) return
      await doPoll()
    }, everyMs)

    await new Promise<void>(resolve => {
      process.once('SIGINT', resolve)
      process.once('SIGTERM', resolve)
    })
    clearInterval(intervalId)
  })

  return cmd
}
