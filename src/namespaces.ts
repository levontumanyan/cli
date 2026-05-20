/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Command } from 'commander'
import { defineGroup } from './factory.ts'
import type { OpaqueCommandHandle } from './factory.ts'

export interface LoadOptions {
  /**
   * When true, load all sub-commands eagerly (no lazy stubs).
   * Used by `cli-schema` to ensure every leaf has `_commandConfig` attached.
   * Callers that only need CLI startup should use the default (false).
   */
  eager?: boolean
  /** CLI version string; forwarded to namespaces that embed version in their output. */
  version?: string
  /** Root Commander program; forwarded to namespaces that introspect global options. */
  rootProgram?: Command
}

/**
 * Declarative entry for a top-level CLI namespace.
 *
 * This is the single source of truth for namespace registration.
 * Both `cli.ts` (lazy stub/eager load) and `cli-schema` (always eager) consume
 * this list. Adding a new top-level namespace requires only adding an entry here.
 */
export interface NamespaceEntry {
  name: string
  description: string
  /**
   * When true, the preAction config-load hook and early config load are skipped
   * for commands in this namespace. Use for namespaces that don't need a config
   * file (e.g. sanitize, cli-schema) or that author the config themselves (config).
   */
  skipConfig?: boolean
  /** Fully load the namespace and return a registered command group handle. */
  load: (opts?: LoadOptions) => Promise<OpaqueCommandHandle>
}

export const NAMESPACES: NamespaceEntry[] = [
  {
    name: 'stack',
    description: 'Interact with Elastic Stack components (Elasticsearch, Kibana, Fleet)',
    load: async (opts) => {
      const eager = opts?.eager === true
      const [esModule, kbModule] = await Promise.all([
        import('./es/register.ts'),
        import('./kb/register.ts'),
      ])
      const esGroup = eager
        ? await esModule.registerEsCommandsEager()
        : await esModule.registerEsCommandsLazy()
      esGroup.alias('elasticsearch')
      let kbGroup: OpaqueCommandHandle
      if (eager) {
        const { loadAllKbApis } = await import('./kb/apis.ts')
        kbGroup = kbModule.registerKbCommands(await loadAllKbApis())
      } else {
        kbGroup = await kbModule.registerKbCommandsLazy()
      }
      kbGroup.alias('kibana')
      return defineGroup(
        { name: 'stack', description: 'Interact with Elastic Stack components (Elasticsearch, Kibana, Fleet)' },
        esGroup,
        kbGroup,
      )
    },
  },
  {
    name: 'cloud',
    description: 'Manage Elastic Cloud (hosted deployments and serverless projects)',
    load: async () => {
      const { registerCloudCommands } = await import('./cloud/register.ts')
      return registerCloudCommands()
    },
  },
  {
    name: 'docs',
    description: 'Search, read, and ask questions about Elastic documentation',
    skipConfig: true,
    load: async () => {
      const { registerDocsCommands } = await import('./docs/register.ts')
      return registerDocsCommands()
    },
  },
  {
    name: 'config',
    description: 'Author and maintain the elastic config file',
    skipConfig: true,
    load: async () => {
      const { registerConfigCommands } = await import('./config/commands.ts')
      return registerConfigCommands()
    },
  },
  {
    name: 'sanitize',
    description: 'Sanitize values for safe use in Elasticsearch',
    skipConfig: true,
    load: async () => {
      const { registerSanitizeCommands } = await import('./sanitize/register.ts')
      return registerSanitizeCommands()
    },
  },
  {
    name: 'cli-schema',
    description: 'Emit the CLI structure as argh-schema JSON',
    skipConfig: true,
    load: async (opts) => {
      const { registerCliSchemaCommand } = await import('./cli-schema.ts')
      // Exclude cli-schema itself from the eager namespace load to avoid self-reference.
      const namespacesForSchema = NAMESPACES.filter(ns => ns.name !== 'cli-schema')
      return registerCliSchemaCommand(opts?.version ?? '', opts?.rootProgram, namespacesForSchema)
    },
  },
]
