/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from 'commander'
import { loadSavedQueries, saveSavedQueries, looksLikeEsqlQuery } from '../saved-queries.ts'

export function createSaveCommand (): Command {
  const cmd = new Command('save')
  cmd.description('Save a named ES|QL query for later use')
  cmd.argument('<name>', 'name for the saved query')
  cmd.argument('<query>', 'ES|QL query string')
  cmd.allowExcessArguments(false)

  cmd.action((name: string, query: string) => {
    if (/[ |,()]/.test(name)) {
      if (!looksLikeEsqlQuery(name) && looksLikeEsqlQuery(query)) {
        process.stderr.write(`Error: arguments look swapped — try: elastic esql save ${query} '${name}'\n`)
      } else {
        process.stderr.write(`Error: query name "${name}" contains spaces or special characters — use a simple name like 'my-query'\n`)
      }
      process.exitCode = 1
      return
    }

    if (!looksLikeEsqlQuery(query)) {
      process.stderr.write(`Error: "${query}" doesn't look like an ES|QL query — should start with FROM, ROW, or SHOW\n`)
      process.exitCode = 1
      return
    }

    const file = loadSavedQueries()
    const existed = name in file.queries
    file.queries[name] = { query }
    saveSavedQueries(file)

    process.stderr.write(existed ? `Query '${name}' updated.\n` : `Query '${name}' saved.\n`)
  })

  return cmd
}
