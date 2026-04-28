/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Walks a Commander command tree and extracts structured metadata for
 * documentation generation. Produces {@link CommandNode} trees that can
 * be rendered to Markdown (or any other format) without depending on
 * Commander at rendering time.
 */

import type { Command, Option, Argument } from 'commander'

/** Extracted metadata for a single CLI option/flag. */
export interface OptionNode {
  long: string
  short: string | undefined
  description: string
  mandatory: boolean
  defaultValue: unknown
  flags: string
}

/** Extracted metadata for a positional argument. */
export interface ArgNode {
  name: string
  description: string
  required: boolean
}

/** Recursive tree node representing a command or group. */
export interface CommandNode {
  name: string
  description: string
  fullPath: string
  aliases: string[]
  options: OptionNode[]
  args: ArgNode[]
  children: CommandNode[]
}

/**
 * Recursively extracts metadata from a Commander {@link Command} and its
 * subcommands into a plain {@link CommandNode} tree.
 *
 * Hidden commands (Commander's internal `_hidden` flag) are excluded.
 *
 * @param cmd - the Commander command to extract from
 * @param parentPath - prefix for building the full command path (used in recursion)
 */
export function extractCommandTree (cmd: Command, parentPath = ''): CommandNode {
  const name = cmd.name()
  const fullPath = parentPath ? `${parentPath} ${name}` : name

  const options: OptionNode[] = (cmd.options as Option[]).map(opt => ({
    long: opt.long ?? '',
    short: opt.short,
    description: opt.description,
    mandatory: opt.mandatory,
    defaultValue: opt.defaultValue,
    flags: opt.flags,
  }))

  const args: ArgNode[] = (cmd.registeredArguments as Argument[]).map(arg => ({
    name: arg.name(),
    description: arg.description,
    required: arg.required,
  }))

  const children: CommandNode[] = []
  for (const sub of cmd.commands as Command[]) {
    if ((sub as unknown as { _hidden?: boolean })._hidden === true) continue
    children.push(extractCommandTree(sub, fullPath))
  }

  const aliases: string[] = (cmd.aliases?.() as string[] | undefined) ?? []

  return { name, description: cmd.description(), fullPath, aliases, options, args, children }
}

/**
 * Walks a Commander command tree and extracts JSON Schema from every leaf
 * command that has a schema-backed help formatter (via `configureHelpWithSchema`).
 *
 * Returns a `Map` keyed by the full command path (e.g. `"elastic stack es search"`)
 * whose values are the parsed JSON Schema objects.
 *
 * @param program - the root Commander program (must have `--json` defined as an option)
 */
export function extractJsonSchemas (program: Command): Map<string, unknown> {
  const schemas = new Map<string, unknown>()

  function walk (cmd: Command, parentPath: string): void {
    const name = cmd.name()
    const fullPath = parentPath ? `${parentPath} ${name}` : name
    const subs = cmd.commands as Command[]

    if (subs.length === 0) {
      const helper = cmd.createHelp()
      // Commander stores configureHelp() overrides in _helpConfiguration (private API,
      // but no public alternative exists for invoking formatHelp outside of --help parsing)
      const helpConfig = (cmd as unknown as { _helpConfiguration?: { formatHelp?: (cmd: Command, helper: unknown) => string } })._helpConfiguration
      if (helpConfig?.formatHelp != null) {
        const origJson = program.getOptionValue('json')
        program.setOptionValue('json', true)
        try {
          const output = helpConfig.formatHelp(cmd, helper)
          if (output.trim().length > 0) {
            const parsed: unknown = JSON.parse(output)
            schemas.set(fullPath, parsed)
          }
        } catch {
          // Not JSON or no schema — skip
        } finally {
          program.setOptionValue('json', origJson)
        }
      }
      return
    }

    for (const sub of subs) {
      if ((sub as unknown as { _hidden?: boolean })._hidden === true) continue
      walk(sub, fullPath)
    }
  }

  walk(program, '')
  return schemas
}

/** Escapes pipe characters so they don't break Markdown table cells. */
function escapeCell (text: string): string {
  return text.replace(/\|/g, '\\|')
}

/**
 * Renders a {@link CommandNode} tree as a Markdown reference document.
 *
 * - Groups render as a heading + child list (TOC) followed by each child's full section.
 * - Leaf commands render as a heading + description + usage + options table + arguments.
 *
 * @param schemaPathMap - optional map from fullPath to relative schema file path;
 *   when present, leaf commands with a matching entry get a "JSON Schema" link.
 */
export function formatMarkdown (node: CommandNode, depth = 1, schemaPathMap?: Map<string, string>): string {
  const lines: string[] = []
  const heading = '#'.repeat(Math.min(depth, 6))

  lines.push(`${heading} \`${node.fullPath}\``)
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

  const schemaLink = schemaPathMap?.get(node.fullPath)
  if (schemaLink != null) {
    lines.push(`[JSON Schema](${schemaLink})`)
    lines.push('')
  }

  if (node.children.length > 0) {
    lines.push('| Command | Description |')
    lines.push('|---------|-------------|')
    for (const child of node.children) {
      lines.push(`| \`${child.name}\` | ${escapeCell(child.description)} |`)
    }
    lines.push('')

    for (const child of node.children) {
      lines.push(formatMarkdown(child, depth + 1, schemaPathMap))
    }
  } else {
    if (node.args.length > 0) {
      lines.push('**Arguments:**')
      lines.push('')
      for (const arg of node.args) {
        const bracket = arg.required ? `<${arg.name}>` : `[${arg.name}]`
        lines.push(`- \`${bracket}\` — ${arg.description}`)
      }
      lines.push('')
    }

    if (node.options.length > 0) {
      lines.push('| Flag | Description | Required | Default |')
      lines.push('|------|-------------|----------|---------|')
      for (const opt of node.options) {
        const flag = opt.flags
        const req = opt.mandatory ? '**required**' : ''
        const def = opt.defaultValue !== undefined ? `\`${String(opt.defaultValue)}\`` : ''
        lines.push(`| \`${flag}\` | ${escapeCell(opt.description)} | ${req} | ${def} |`)
      }
      lines.push('')
    }
  }

  return lines.join('\n')
}
