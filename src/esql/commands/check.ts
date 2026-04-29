/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Command } from 'commander'
import { runQuery } from '../esql-client.ts'
import { applyParams } from '../saved-queries.ts'
import { handleError } from './query.ts'

const OPERATORS = ['<=', '>=', '!=', '==', '<', '>'] as const
type Operator = typeof OPERATORS[number]

export interface Assertion {
  column: string
  operator: Operator
  value: string
}

export function parseAssertion (expr: string): Assertion {
  for (const op of OPERATORS) {
    const idx = expr.indexOf(op)
    if (idx < 0) continue
    const column = expr.slice(0, idx).trim()
    const value = expr.slice(idx + op.length).trim()
    if (!column) throw new Error(`Missing column name in assertion: "${expr}"`)
    if (!value) throw new Error(`Missing value in assertion: "${expr}"`)
    return { column, operator: op, value }
  }
  throw new Error(`No valid operator in assertion: "${expr}" (supported: ${OPERATORS.join(', ')})`)
}

function toNumber (v: unknown): number | null {
  if (typeof v === 'number') return v
  if (typeof v === 'string') { const n = parseFloat(v); return isNaN(n) ? null : n }
  return null
}

export function evalAssertion (a: Assertion, actual: unknown): boolean {
  const actualNum = toNumber(actual)
  const expectedNum = toNumber(a.value)

  if (actualNum !== null && expectedNum !== null) {
    switch (a.operator) {
      case '<':  return actualNum < expectedNum
      case '<=': return actualNum <= expectedNum
      case '>':  return actualNum > expectedNum
      case '>=': return actualNum >= expectedNum
      case '==': return actualNum === expectedNum
      case '!=': return actualNum !== expectedNum
    }
  }

  const actualStr = String(actual ?? '')
  switch (a.operator) {
    case '<':  return actualStr < a.value
    case '<=': return actualStr <= a.value
    case '>':  return actualStr > a.value
    case '>=': return actualStr >= a.value
    case '==': return actualStr === a.value
    case '!=': return actualStr !== a.value
  }
}

export function createCheckCommand (): Command {
  const cmd = new Command('check')
  cmd.description('Run a query and assert conditions on the result')
  cmd.argument('<query>', 'ES|QL query to execute')
  cmd.option('--assert <expr>', 'assertion in "column op value" format (repeatable)', (v, a: string[]) => [...a, v], [] as string[])
  cmd.option('--quiet', 'suppress output; only set exit code')
  cmd.option('--timeout <duration>', 'per-query timeout (e.g. 60s, 5m)')
  cmd.option('--param <kv>', 'key=value for {{placeholder}} substitution (repeatable)', (v, a: string[]) => [...a, v], [] as string[])
  cmd.allowExcessArguments(false)

  cmd.action(async (queryArg: string, options: Record<string, unknown>) => {
    const assertExprs = options.assert as string[]
    if (!assertExprs || assertExprs.length === 0) {
      process.stderr.write('Error: at least one --assert expression is required\n')
      process.exitCode = 1
      return
    }

    let assertions: Assertion[]
    try {
      assertions = assertExprs.map(parseAssertion)
    } catch (err) {
      process.stderr.write(`Error: ${err instanceof Error ? err.message : String(err)}\n`)
      process.exitCode = 1
      return
    }

    const params = options.param as string[]
    let query = queryArg
    if (params.length > 0) { query = applyParams(query, params) }

    const quiet = !!(options.quiet)

    try {
      const resp = await runQuery(query)

      if (resp.values.length === 0) {
        process.stderr.write('Error: query returned no rows — cannot evaluate assertions\n')
        process.exitCode = 1
        return
      }

      const colIndex = new Map(resp.columns.map((c, i) => [c.name, i]))
      const row = resp.values[0]!
      let allPassed = true

      for (const a of assertions) {
        const idx = colIndex.get(a.column)
        if (idx === undefined) {
          const available = resp.columns.map(c => c.name).join(', ')
          process.stderr.write(`Error: column "${a.column}" not found (available: ${available})\n`)
          process.exitCode = 1
          return
        }

        const actual = row[idx]
        const passed = evalAssertion(a, actual)
        if (!quiet) {
          const status = passed ? 'PASS' : 'FAIL'
          process.stderr.write(`${status}: ${a.column} ${a.operator} ${a.value} (actual: ${actual})\n`)
        }
        if (!passed) allPassed = false
      }

      if (!allPassed) {
        process.exitCode = 1
      }
    } catch (err) {
      handleError(err)
    }
  })

  return cmd
}
