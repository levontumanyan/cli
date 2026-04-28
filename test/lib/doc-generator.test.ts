/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { Command } from 'commander'
import { extractCommandTree, extractJsonSchemas, formatMarkdown, type CommandNode } from '../../src/lib/doc-generator.ts'

// ---------------------------------------------------------------------------
// extractCommandTree
// ---------------------------------------------------------------------------

describe('extractCommandTree', () => {
  it('extracts a leaf command with name and description', () => {
    const cmd = new Command('ping')
    cmd.description('Ping the cluster')
    const node = extractCommandTree(cmd)
    assert.equal(node.name, 'ping')
    assert.equal(node.description, 'Ping the cluster')
    assert.equal(node.children.length, 0)
  })

  it('extracts options with type, required, and default', () => {
    const cmd = new Command('search')
    cmd.description('Search an index')
    cmd.option('--index <string>', 'target index')
    cmd.requiredOption('--query <string>', 'the search query')
    cmd.option('--size <number>', 'number of results', '10')
    cmd.option('-v, --verbose', 'verbose output')

    const node = extractCommandTree(cmd)
    assert.equal(node.options.length, 4)

    const idx = node.options.find(o => o.long === '--index')!
    assert.equal(idx.description, 'target index')
    assert.equal(idx.mandatory, false)

    const query = node.options.find(o => o.long === '--query')!
    assert.equal(query.mandatory, true)

    const verbose = node.options.find(o => o.long === '--verbose')!
    assert.equal(verbose.short, '-v')
  })

  it('extracts positional arguments', () => {
    const cmd = new Command('sanitize')
    cmd.description('Sanitize a value')
    cmd.argument('<value>', 'the value to sanitize')

    const node = extractCommandTree(cmd)
    assert.equal(node.args.length, 1)
    assert.equal(node.args[0]!.name, 'value')
    assert.equal(node.args[0]!.required, true)
    assert.equal(node.args[0]!.description, 'the value to sanitize')
  })

  it('extracts optional positional arguments', () => {
    const cmd = new Command('read')
    cmd.description('Read a doc')
    cmd.argument('[slug]', 'optional doc slug')

    const node = extractCommandTree(cmd)
    assert.equal(node.args[0]!.required, false)
  })

  it('walks groups recursively', () => {
    const root = new Command('elastic')
    root.description('Root CLI')

    const group = new Command('stack')
    group.description('Stack commands')

    const leaf = new Command('ping')
    leaf.description('Ping ES')

    group.addCommand(leaf)
    root.addCommand(group)

    const tree = extractCommandTree(root)
    assert.equal(tree.name, 'elastic')
    assert.equal(tree.children.length, 1)
    assert.equal(tree.children[0]!.name, 'stack')
    assert.equal(tree.children[0]!.children.length, 1)
    assert.equal(tree.children[0]!.children[0]!.name, 'ping')
  })

  it('builds the full command path', () => {
    const root = new Command('elastic')
    const group = new Command('stack')
    const leaf = new Command('ping')
    leaf.description('Ping')

    group.addCommand(leaf)
    root.addCommand(group)

    const tree = extractCommandTree(root)
    const ping = tree.children[0]!.children[0]!
    assert.equal(ping.fullPath, 'elastic stack ping')
  })

  it('skips hidden commands', () => {
    const root = new Command('elastic')

    const visible = new Command('version')
    visible.description('Print version')
    root.addCommand(visible)

    const hidden = new Command('secret')
    hidden.description('Secret command')
    // Commander uses _hidden internally
    ;(hidden as unknown as { _hidden: boolean })._hidden = true
    root.addCommand(hidden)

    const tree = extractCommandTree(root)
    assert.equal(tree.children.length, 1)
    assert.equal(tree.children[0]!.name, 'version')
  })

  it('captures default values on options', () => {
    const cmd = new Command('list')
    cmd.description('List items')
    cmd.option('--page <number>', 'page number', '1')

    const node = extractCommandTree(cmd)
    const page = node.options.find(o => o.long === '--page')!
    assert.equal(page.defaultValue, '1')
  })

  it('captures aliases', () => {
    const cmd = new Command('es')
    cmd.description('Elasticsearch')
    cmd.alias('elasticsearch')

    const node = extractCommandTree(cmd)
    assert.deepEqual(node.aliases, ['elasticsearch'])
  })

  it('returns empty aliases array when none set', () => {
    const cmd = new Command('ping')
    cmd.description('Ping')

    const node = extractCommandTree(cmd)
    assert.deepEqual(node.aliases, [])
  })
})

// ---------------------------------------------------------------------------
// formatMarkdown
// ---------------------------------------------------------------------------

describe('formatMarkdown', () => {
  it('renders a leaf command with heading and description', () => {
    const node: CommandNode = {
      name: 'ping',
      description: 'Ping the cluster',
      fullPath: 'elastic stack es ping',
      aliases: [],
      options: [],
      args: [],
      children: [],
    }
    const md = formatMarkdown(node)
    assert.ok(md.includes('# `elastic stack es ping`'))
    assert.ok(md.includes('Ping the cluster'))
  })

  it('renders options as a table', () => {
    const node: CommandNode = {
      name: 'search',
      description: 'Search an index',
      fullPath: 'elastic stack es search',
      aliases: [],
      options: [
        { long: '--index', short: undefined, description: 'target index', mandatory: false, defaultValue: undefined, flags: '--index <string>' },
        { long: '--verbose', short: '-v', description: 'verbose output', mandatory: false, defaultValue: undefined, flags: '-v, --verbose' },
      ],
      args: [],
      children: [],
    }
    const md = formatMarkdown(node)
    assert.ok(md.includes('| Flag'))
    assert.ok(md.includes('--index'))
    assert.ok(md.includes('-v, --verbose'))
  })

  it('renders positional arguments', () => {
    const node: CommandNode = {
      name: 'sanitize',
      description: 'Sanitize a value',
      fullPath: 'elastic sanitize index-name',
      aliases: [],
      options: [],
      args: [{ name: 'value', description: 'the value to sanitize', required: true }],
      children: [],
    }
    const md = formatMarkdown(node)
    assert.ok(md.includes('<value>'))
    assert.ok(md.includes('the value to sanitize'))
  })

  it('renders a group with children as a TOC', () => {
    const node: CommandNode = {
      name: 'es',
      description: 'Elasticsearch commands',
      fullPath: 'elastic stack es',
      aliases: [],
      options: [],
      args: [],
      children: [
        { name: 'ping', description: 'Ping the cluster', fullPath: 'elastic stack es ping', aliases: [], options: [], args: [], children: [] },
        { name: 'search', description: 'Search', fullPath: 'elastic stack es search', aliases: [], options: [], args: [], children: [] },
      ],
    }
    const md = formatMarkdown(node)
    assert.ok(md.includes('ping'))
    assert.ok(md.includes('search'))
  })

  it('marks required options', () => {
    const node: CommandNode = {
      name: 'create',
      description: 'Create a resource',
      fullPath: 'elastic create',
      aliases: [],
      options: [
        { long: '--name', short: undefined, description: 'resource name', mandatory: true, defaultValue: undefined, flags: '--name <string>' },
      ],
      args: [],
      children: [],
    }
    const md = formatMarkdown(node)
    assert.ok(md.includes('**required**') || md.includes('Required'))
  })

  it('renders aliases when present', () => {
    const node: CommandNode = {
      name: 'es',
      description: 'Elasticsearch commands',
      fullPath: 'elastic stack es',
      aliases: ['elasticsearch'],
      options: [],
      args: [],
      children: [],
    }
    const md = formatMarkdown(node)
    assert.ok(md.includes('Aliases: `elasticsearch`'))
  })

  it('shows default values in the options table', () => {
    const node: CommandNode = {
      name: 'list',
      description: 'List items',
      fullPath: 'elastic list',
      aliases: [],
      options: [
        { long: '--page', short: undefined, description: 'page number', mandatory: false, defaultValue: '1', flags: '--page <number>' },
      ],
      args: [],
      children: [],
    }
    const md = formatMarkdown(node)
    assert.ok(md.includes('1'))
  })

  it('renders a schema link when schemaPathMap has an entry for the command', () => {
    const node: CommandNode = {
      name: 'search',
      description: 'Search an index',
      fullPath: 'elastic stack es search',
      aliases: [],
      options: [],
      args: [],
      children: [],
    }
    const schemas = new Map([['elastic stack es search', './schemas/elastic-stack-es-search.json']])
    const md = formatMarkdown(node, 1, schemas)
    assert.ok(md.includes('[JSON Schema](./schemas/elastic-stack-es-search.json)'))
  })

  it('does not render a schema link when no schema exists for the command', () => {
    const node: CommandNode = {
      name: 'ping',
      description: 'Ping the cluster',
      fullPath: 'elastic stack es ping',
      aliases: [],
      options: [],
      args: [],
      children: [],
    }
    const schemas = new Map<string, string>()
    const md = formatMarkdown(node, 1, schemas)
    assert.ok(!md.includes('JSON Schema'))
  })

  it('propagates schemaPathMap to children in recursive rendering', () => {
    const node: CommandNode = {
      name: 'es',
      description: 'Elasticsearch commands',
      fullPath: 'elastic stack es',
      aliases: [],
      options: [],
      args: [],
      children: [
        { name: 'search', description: 'Search', fullPath: 'elastic stack es search', aliases: [], options: [], args: [], children: [] },
      ],
    }
    const schemas = new Map([['elastic stack es search', './schemas/elastic-stack-es-search.json']])
    const md = formatMarkdown(node, 1, schemas)
    assert.ok(md.includes('[JSON Schema](./schemas/elastic-stack-es-search.json)'))
  })
})

// ---------------------------------------------------------------------------
// extractJsonSchemas
// ---------------------------------------------------------------------------

describe('extractJsonSchemas', () => {
  it('returns an empty map for a program with no schema-backed commands', () => {
    const root = new Command('elastic')
    root.option('--json', 'output as JSON')
    const leaf = new Command('ping')
    leaf.description('Ping')
    leaf.action(() => {})
    root.addCommand(leaf)

    const schemas = extractJsonSchemas(root)
    assert.equal(schemas.size, 0)
  })

  it('extracts JSON schema from a command built with defineCommand and an input schema', async () => {
    const { defineCommand } = await import('../../src/factory.ts')
    const { z } = await import('zod')

    const cmd = defineCommand({
      name: 'search',
      description: 'Search an index',
      input: z.object({ index: z.string() }),
      handler: () => ({}),
    })

    const root = new Command('elastic')
    root.option('--json', 'output as JSON')
    root.addCommand(cmd as unknown as Command)

    const schemas = extractJsonSchemas(root)
    assert.equal(schemas.size, 1)
    const schema = schemas.get('elastic search')
    assert.ok(schema != null)
    assert.equal(typeof schema, 'object')
    assert.equal((schema as Record<string, unknown>)['type'], 'object')
    const props = (schema as Record<string, unknown>)['properties'] as Record<string, unknown>
    assert.ok('index' in props)
  })

  it('skips commands without an input schema (no output for them)', async () => {
    const { defineCommand } = await import('../../src/factory.ts')

    const cmd = defineCommand({
      name: 'ping',
      description: 'Ping',
      handler: () => ({}),
    })

    const root = new Command('elastic')
    root.option('--json', 'output as JSON')
    root.addCommand(cmd as unknown as Command)

    const schemas = extractJsonSchemas(root)
    assert.ok(!schemas.has('elastic ping'))
  })

  it('walks nested groups to find leaf commands', async () => {
    const { defineCommand, defineGroup } = await import('../../src/factory.ts')
    const { z } = await import('zod')

    const leaf = defineCommand({
      name: 'health',
      description: 'Check health',
      input: z.object({ timeout: z.string().optional() }),
      handler: () => ({}),
    })

    const group = defineGroup({ name: 'cluster', description: 'Cluster cmds' }, leaf)
    const root = new Command('elastic')
    root.option('--json', 'output as JSON')
    root.addCommand(group as unknown as Command)

    const schemas = extractJsonSchemas(root)
    assert.ok(schemas.has('elastic cluster health'))
  })
})
