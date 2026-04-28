#!/usr/bin/env npx tsx
/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Generates CLI reference documentation by force-loading the full command
 * tree and walking it with {@link extractCommandTree}.
 *
 * Usage:
 *   npx tsx scripts/generate-docs.ts            # write to docs/reference/
 *   npx tsx scripts/generate-docs.ts --check     # verify all commands have descriptions (exit 1 if not)
 *   npx tsx scripts/generate-docs.ts --stdout     # print to stdout instead of writing files
 */

import { Command } from 'commander'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { defineCommand, defineGroup } from '../src/factory.ts'
import { registerEsCommands } from '../src/es/register.ts'
import { registerCloudCommands } from '../src/cloud/register.ts'
import { registerDocsCommands } from '../src/docs/register.ts'
import { registerKbCommands } from '../src/kb/register.ts'
import { extractCommandTree, extractJsonSchemas, formatMarkdown, type CommandNode } from '../src/lib/doc-generator.ts'

const pkg = JSON.parse(readFileSync(join(import.meta.dirname ?? '.', '..', 'package.json'), 'utf-8'))
const VERSION: string = pkg.version

function buildFullProgram (): Command {
  const program = new Command()
  program
    .name('elastic')
    .description('Interface with the Elastic Stack and Elastic Cloud from the command line.')
    .option('--config-file <path>', 'path to a config file (default: ~/.elasticrc.yml)')
    .option('--use-context <name>', 'override the active context from the config file')
    .option('--json', 'output as JSON')
    .option('--output-fields <list>', 'comma-separated list of fields to include in output (dot-notation supported)')
    .option('--output-template <string>', 'Mustache-like template for custom text output (e.g. "{{id}}: {{name}}")')

  const versionCmd = defineCommand({
    name: 'version',
    description: 'Print the elastic CLI version',
    handler: () => ({ version: VERSION })
  })
  program.addCommand(versionCmd)

  const esGroup = registerEsCommands()
  esGroup.alias('elasticsearch')
  const kbGroup = registerKbCommands()
  kbGroup.alias('kibana')

  program.addCommand(defineGroup(
    { name: 'stack', description: 'Interact with Elastic Stack components (Elasticsearch, Kibana, Fleet)' },
    esGroup,
    kbGroup
  ))

  program.addCommand(registerCloudCommands())
  program.addCommand(registerDocsCommands())

  return program
}

function collectMissingDescriptions (node: CommandNode, results: string[] = []): string[] {
  if (!node.description && node.name !== 'elastic') {
    results.push(node.fullPath)
  }
  for (const child of node.children) {
    collectMissingDescriptions(child, results)
  }
  return results
}

function generateGroupDoc (node: CommandNode, schemaPathMap?: Map<string, string>): string {
  const lines: string[] = []
  lines.push(`# ${node.name}`)
  lines.push('')
  if (node.description) {
    lines.push(node.description)
    lines.push('')
  }
  if (node.aliases.length > 0) {
    const aliasList = node.aliases.map(a => `\`${a}\``).join(', ')
    lines.push(`Aliases: ${aliasList}`)
    lines.push('')
  }

  for (const child of node.children) {
    lines.push(formatMarkdown(child, 2, schemaPathMap))
    lines.push('')
    lines.push('---')
    lines.push('')
  }

  return lines.join('\n')
}

// --- main ---

const args = process.argv.slice(2)
const checkMode = args.includes('--check')
const stdoutMode = args.includes('--stdout')

const program = buildFullProgram()
const tree = extractCommandTree(program)

if (checkMode) {
  const missing = collectMissingDescriptions(tree)
  if (missing.length > 0) {
    process.stderr.write(`Commands missing descriptions:\n`)
    for (const path of missing) {
      process.stderr.write(`  - ${path}\n`)
    }
    process.exit(1)
  }
  process.stdout.write(`All ${countCommands(tree)} commands have descriptions.\n`)
  process.exit(0)
}

function countCommands (node: CommandNode): number {
  let count = node.children.length === 0 ? 1 : 0
  for (const child of node.children) {
    count += countCommands(child)
  }
  return count
}

if (stdoutMode) {
  process.stdout.write(formatMarkdown(tree))
  process.exit(0)
}

const outDir = join(import.meta.dirname ?? '.', '..', 'docs', 'reference')
mkdirSync(outDir, { recursive: true })

// --- JSON Schemas ---
const schemasDir = join(outDir, 'schemas')
mkdirSync(schemasDir, { recursive: true })

const rawSchemas = extractJsonSchemas(program)

/** Converts a full command path like "elastic stack es search" to a filename "elastic-stack-es-search.json". */
function schemaFilename (fullPath: string): string {
  return fullPath.replace(/\s+/g, '-') + '.json'
}

/** Returns true when the schema defines at least one named property. */
function hasDefinedProperties (schema: unknown): boolean {
  if (schema == null || typeof schema !== 'object') return false
  const props = (schema as Record<string, unknown>)['properties']
  return props != null && typeof props === 'object' && Object.keys(props).length > 0
}

const schemaPathMap = new Map<string, string>()

for (const [fullPath, schema] of rawSchemas) {
  if (!hasDefinedProperties(schema)) continue
  const filename = schemaFilename(fullPath)
  writeFileSync(join(schemasDir, filename), JSON.stringify(schema, null, 2) + '\n')
  schemaPathMap.set(fullPath, `./schemas/${filename}`)
}

// Global options page
const globalDoc = [
  '# Global Options',
  '',
  'These options are available on every command.',
  '',
  '| Flag | Description |',
  '|------|-------------|',
  ...tree.options.map(o => `| \`${o.flags}\` | ${o.description} |`),
  '',
].join('\n')

writeFileSync(join(outDir, 'global-options.md'), globalDoc)

// Per top-level group page — split large groups (like `stack`) into per-child files
const indexEntries: { name: string; description: string; filename: string }[] = []

for (const group of tree.children) {
  if (group.children.length > 1 && group.children.some(c => c.children.length > 20)) {
    for (const child of group.children) {
      const filename = `${group.name}-${child.name}.md`
      writeFileSync(join(outDir, filename), generateGroupDoc(child, schemaPathMap))
      indexEntries.push({ name: `${group.name} ${child.name}`, description: child.description, filename })
    }
  } else {
    const filename = `${group.name}.md`
    writeFileSync(join(outDir, filename), generateGroupDoc(group, schemaPathMap))
    indexEntries.push({ name: group.name, description: group.description, filename })
  }
}

// Index page
const indexDoc = [
  '# Elastic CLI Reference',
  '',
  tree.description,
  '',
  '## Command Groups',
  '',
  '| Group | Description |',
  '|-------|-------------|',
  ...indexEntries.map(e => `| [\`${e.name}\`](./${e.filename}) | ${e.description} |`),
  '',
  `See also: [Global Options](./global-options.md)`,
  '',
].join('\n')

writeFileSync(join(outDir, 'index.md'), indexDoc)

const total = countCommands(tree)
process.stdout.write(`Generated docs for ${total} commands → ${outDir}\n`)
process.stdout.write(`Generated ${schemaPathMap.size} JSON schemas → ${schemasDir}\n`)
