/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from 'commander'
import Table from 'cli-table3'
import { loadSavedQueries, saveSavedQueries, applyParams } from '../saved-queries.ts'
import { runQuery } from '../esql-client.ts'
import { formatOutput, defaultFormat } from '../formatter.ts'
import { handleError } from './query.ts'

function createQueriesListCommand (): Command {
  const cmd = new Command('list')
  cmd.description('List all saved queries')
  cmd.action(() => {
    const file = loadSavedQueries()
    const names = Object.keys(file.queries).sort()

    if (names.length === 0) {
      process.stderr.write("No saved queries. Use 'elastic esql save <name> <query>' to save one.\n")
      return
    }

    const table = new Table({ head: ['name', 'query'], style: { head: [] } })
    for (const name of names) {
      const sq = file.queries[name]!
      const preview = sq.query.length > 80 ? sq.query.slice(0, 77) + '...' : sq.query
      table.push([name, preview])
    }
    process.stdout.write(table.toString() + '\n')
  })
  return cmd
}

function createQueriesRunCommand (): Command {
  const cmd = new Command('run')
  cmd.description('Run a saved query')
  cmd.argument('<name>', 'name of the saved query to run')
  cmd.option('-f, --format <fmt>', 'output format: table, json, ndjson, csv, tsv')
  cmd.option('--no-header', 'suppress column headers')
  cmd.option('--delimiter <char>', 'custom field delimiter')
  cmd.option('--columns <list>', 'comma-separated list of columns to include')
  cmd.option('-o, --output <file>', 'write results to file instead of stdout')
  cmd.option('--quiet', 'suppress incidental stderr')
  cmd.option('--param <kv>', 'key=value for {{placeholder}} substitution (repeatable)', (v, a: string[]) => [...a, v], [] as string[])
  cmd.allowExcessArguments(false)

  cmd.action(async (name: string, options: Record<string, unknown>) => {
    const file = loadSavedQueries()
    const sq = file.queries[name]
    if (!sq) {
      process.stderr.write(`Error: unknown query "${name}" — run: elastic esql queries list\n`)
      process.exitCode = 1; return
    }

    const params = options.param as string[]
    let query = sq.query
    if (params.length > 0) query = applyParams(query, params)

    const quiet = !!(options.quiet)
    if (sq.cluster && !quiet) {
      process.stderr.write(`Using cluster: ${sq.cluster}\n`)
    }

    const format = (options.format as string | undefined) ?? defaultFormat()
    const delimiter = options.delimiter as string | undefined
    const noHeader = !(options.header as boolean ?? true)
    const columnsRaw = options.columns as string | undefined
    const columns = columnsRaw ? columnsRaw.split(',').map(c => c.trim()).filter(Boolean) : undefined

    try {
      const resp = await runQuery(query)
      formatOutput(resp, { format, noHeader, delimiter, columns }, process.stdout)
      if (!quiet && process.stdout.isTTY) {
        process.stderr.write(`\n${resp.values.length} rows in set (${resp.took}ms)\n`)
      }
    } catch (err) {
      handleError(err)
    }
  })

  return cmd
}

function createQueriesRemoveCommand (): Command {
  const cmd = new Command('remove')
  cmd.description('Remove a saved query')
  cmd.argument('<name>', 'name of the query to remove')
  cmd.allowExcessArguments(false)

  cmd.action((name: string) => {
    const file = loadSavedQueries()
    if (!(name in file.queries)) {
      process.stderr.write(`Error: unknown query "${name}" — run: elastic esql queries list\n`)
      process.exitCode = 1; return
    }
    delete file.queries[name]
    saveSavedQueries(file)
    process.stderr.write(`Query '${name}' removed.\n`)
  })

  return cmd
}

export function createQueriesCommand (): Command {
  const cmd = new Command('queries')
  cmd.description('Manage saved ES|QL queries')
  cmd.addCommand(createQueriesListCommand())
  cmd.addCommand(createQueriesRunCommand())
  cmd.addCommand(createQueriesRemoveCommand())
  cmd.action(function (this: Command) {
    if (this.args.length > 0) {
      this.error(`unknown command: ${this.args[0]}`)
    } else {
      this.help()
    }
  })
  return cmd
}
