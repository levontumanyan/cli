/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from 'commander'
import type { OpaqueCommandHandle } from '../factory.ts'
import { createQueryCommand } from './commands/query.ts'
import { createCheckCommand } from './commands/check.ts'
import { createWatchCommand } from './commands/watch.ts'
import { createTailCommand } from './commands/tail.ts'
import { createSaveCommand } from './commands/save.ts'
import { createQueriesCommand } from './commands/queries.ts'
import { runRepl } from './repl.ts'

export function registerEsqlCommands (): OpaqueCommandHandle {
  const group = new Command('esql')
  group.description('Query Elasticsearch using ES|QL from the command line')
  group.allowExcessArguments(true)

  group.addCommand(createQueryCommand())
  group.addCommand(createWatchCommand())
  group.addCommand(createTailCommand())
  group.addCommand(createCheckCommand())
  group.addCommand(createSaveCommand())
  group.addCommand(createQueriesCommand())

  // When invoked with no sub-command and connected to a TTY: launch REPL
  group.action(async function (this: Command) {
    const args = this.args
    if (args.length > 0) {
      this.error(`unknown command: ${args[0]}`)
      return
    }
    if (process.stdin.isTTY && process.stdout.isTTY) {
      await runRepl()
    } else {
      this.help()
    }
  })

  return group as OpaqueCommandHandle
}
