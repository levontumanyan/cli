/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from 'commander'
import { readFileSync, createWriteStream } from 'node:fs'
import { runQuery, EsqlError } from '../esql-client.ts'
import { formatOutput, printStats, defaultFormat, warnIfPartial } from '../formatter.ts'
import { applyParams } from '../saved-queries.ts'
import { injectWhere } from '../inject.ts'

export function splitQueries (input: string): string[] {
  return input.split(';').map(q => q.trim()).filter(q => q !== '')
}

function parseDuration (s: string): number | null {
  const m = /^(\d+(?:\.\d+)?)(ms|s|m|h|d|w)$/.exec(s)
  if (!m) return null
  const n = parseFloat(m[1]!)
  switch (m[2]) {
    case 'ms': return n
    case 's':  return n * 1_000
    case 'm':  return n * 60_000
    case 'h':  return n * 3_600_000
    case 'd':  return n * 86_400_000
    case 'w':  return n * 7 * 86_400_000
    default:   return null
  }
}

export function parseRelativeTime (s: string, now: Date): Date {
  const ms = parseDuration(s)
  if (ms !== null) return new Date(now.getTime() - ms)
  const d = new Date(s)
  if (!isNaN(d.getTime())) return d
  throw new Error(`Invalid time value: "${s}" — use a duration (e.g. 1h, 30m, 2d, 1w) or ISO date`)
}

export function applyTimeFlagsToQuery (
  query: string,
  since: string | undefined,
  until: string | undefined,
  now: Date,
  tsField = '@timestamp',
): string {
  const sinceDate = since != null ? parseRelativeTime(since, now) : undefined
  const untilDate = until != null ? parseRelativeTime(until, now) : undefined
  if (sinceDate != null && untilDate != null && sinceDate >= untilDate) {
    throw new Error('--since must be earlier than --until (time range is empty or reversed)')
  }
  const parts: string[] = []
  if (sinceDate != null) parts.push(`${tsField} >= "${sinceDate.toISOString()}"`)
  if (untilDate != null) parts.push(`${tsField} <= "${untilDate.toISOString()}"`)
  if (parts.length === 0) return query
  return injectWhere(query, parts.join(' AND '))
}

export function createQueryCommand (): Command {
  const cmd = new Command('query')
  cmd.description('Execute an ES|QL query')
  cmd.argument('[query]', 'ES|QL query string, or "-" to read from stdin')
  cmd.option('-f, --format <fmt>', 'output format: table, json, ndjson, csv, tsv (default: table for TTY, tsv for pipes)')
  cmd.option('--no-header', 'suppress column headers')
  cmd.option('--delimiter <char>', 'custom field delimiter (implies tsv)')
  cmd.option('--columns <list>', 'comma-separated list of columns to include')
  cmd.option('-o, --output <file>', 'write results to file instead of stdout')
  cmd.option('--stats', 'print query performance stats to stderr')
  cmd.option('--stats-only', 'print stats only, suppress row output (implies --stats)')
  cmd.option('--profile', 'include per-driver profile breakdown (implies --stats)')
  cmd.option('-x, --expanded', 'force vertical record-per-line layout')
  cmd.option('--show-null-cols', 'keep columns that are null in every row in table mode')
  cmd.option('--timeout <duration>', 'per-query timeout (e.g. 60s, 5m)')
  cmd.option('--file <path>', 'read query from file (queries separated by ;)')
  cmd.option('--param <kv>', 'key=value for {{placeholder}} substitution (repeatable)', (v, a: string[]) => [...a, v], [] as string[])
  cmd.option('--since <time>', 'inject WHERE @timestamp >= <time> (e.g. 1h, 30m, 2025-01-01)')
  cmd.option('--until <time>', 'inject WHERE @timestamp <= <time>')
  cmd.option('--quiet', 'suppress incidental stderr (row counts, timing)')
  cmd.allowExcessArguments(false)

  cmd.action(async (queryArg: string | undefined, options: Record<string, unknown>) => {
    const fileOpt = options.file as string | undefined
    let queries: string[]

    if (fileOpt) {
      try {
        queries = splitQueries(readFileSync(fileOpt, 'utf-8'))
      } catch (err) {
        process.stderr.write(`Error reading file: ${err instanceof Error ? err.message : String(err)}\n`)
        process.exitCode = 1
        return
      }
    } else if (!queryArg) {
      if (process.stdin.isTTY) {
        cmd.help()
        return
      }
      const chunks: Buffer[] = []
      for await (const chunk of process.stdin) { chunks.push(chunk as Buffer) }
      queries = splitQueries(Buffer.concat(chunks).toString('utf-8'))
    } else if (queryArg === '-') {
      const chunks: Buffer[] = []
      for await (const chunk of process.stdin) { chunks.push(chunk as Buffer) }
      queries = splitQueries(Buffer.concat(chunks).toString('utf-8'))
    } else {
      queries = [queryArg]
    }

    const params = options.param as string[]
    const since = options.since as string | undefined
    const until = options.until as string | undefined
    const format = options.format as string | undefined
    const delimiter = options.delimiter as string | undefined
    const columnsRaw = options.columns as string | undefined
    const columns = columnsRaw ? columnsRaw.split(',').map(c => c.trim()).filter(Boolean) : undefined
    const noHeader = !(options.header as boolean ?? true)
    const outputFile = options.output as string | undefined
    const doStats = !!(options.stats || options.statsOnly || options.profile)
    const statsOnly = !!(options.statsOnly)
    const profile = !!(options.profile)
    const expanded = !!(options.expanded)
    const showNullCols = !!(options.showNullCols)
    const quiet = !!(options.quiet)

    const resolvedFormat = format ?? (delimiter ? 'tsv' : defaultFormat())

    const writer = outputFile ? createWriteStream(outputFile) : process.stdout

    const now = new Date()
    for (let i = 0; i < queries.length; i++) {
      let q = queries[i]!
      if (params.length > 0) { q = applyParams(q, params) }
      if (since || until) {
        try { q = applyTimeFlagsToQuery(q, since, until, now) }
        catch (err) { process.stderr.write(`Error: ${err instanceof Error ? err.message : String(err)}\n`); process.exitCode = 1; return }
      }

      try {
        const resp = await runQuery(q, { profile })
        warnIfPartial(resp)
        if (doStats) { printStats(resp, resp.values.length) }
        if (!statsOnly) {
          formatOutput(resp, {
            format: resolvedFormat, noHeader, delimiter, columns, expanded, showNullCols
          }, writer)
          if (!quiet && process.stdout.isTTY && !outputFile) {
            process.stderr.write(`\n${resp.values.length} rows in set (${resp.took}ms)\n`)
          }
        }
      } catch (err) {
        if (queries.length > 1) {
          process.stderr.write(`Error in query ${i + 1}: ${err instanceof Error ? err.message : String(err)}\n`)
          continue
        }
        handleError(err)
        return
      }

      if (queries.length > 1 && i < queries.length - 1 && !quiet && process.stdout.isTTY) {
        process.stderr.write('\n')
      }
    }

    if (outputFile) {
      if (!quiet) process.stderr.write(`Results written to ${outputFile}\n`)
      if (writer !== process.stdout) (writer as ReturnType<typeof createWriteStream>).end()
    }
  })

  return cmd
}

export function handleError (err: unknown): void {
  if (err instanceof EsqlError) {
    process.stderr.write(`Error: ${err.message}\n`)
    if (err.isConnection) {
      process.stderr.write('Hint: check your Elasticsearch connection in the active config context.\n')
    }
  } else if (err instanceof Error && err.message.startsWith('missing_config:')) {
    process.stderr.write(`Error: ${err.message.slice('missing_config: '.length)}\n`)
    process.stderr.write('Run: elastic config context show\n')
  } else {
    process.stderr.write(`Error: ${err instanceof Error ? err.message : String(err)}\n`)
  }
  process.exitCode = 1
}
