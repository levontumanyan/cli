/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import readline from 'node:readline'
import { existsSync, readFileSync, appendFileSync } from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'
import { runQuery, EsqlError } from './esql-client.ts'
import { formatOutput, defaultFormat } from './formatter.ts'

const HISTORY_FILE = join(homedir(), '.elastic-esql-history')
const MAX_HISTORY = 200

/** Source commands valid at the start of a query. */
const SOURCE_COMMANDS = ['FROM', 'ROW', 'SHOW', 'TS']

/** Processing commands valid after a pipe. */
const PROCESSING_COMMANDS = [
  'WHERE', 'STATS', 'BY', 'SORT', 'LIMIT', 'KEEP', 'DROP',
  'EVAL', 'RENAME', 'AS', 'ENRICH', 'ON', 'WITH', 'DISSECT', 'GROK', 'MV_EXPAND',
]

/** All recognized keywords for completion (no duplicates). */
const KEYWORDS: string[] = [...new Set([
  ...SOURCE_COMMANDS,
  ...PROCESSING_COMMANDS,
  'COUNT', 'COUNT_DISTINCT', 'AVG', 'SUM', 'MIN', 'MAX', 'MEDIAN', 'PERCENTILE',
  'ASC', 'DESC', 'NULLS', 'FIRST', 'LAST', 'LIKE', 'RLIKE', 'IN', 'NOT', 'AND', 'OR',
  'IS NULL', 'IS NOT NULL',
])]

/** Returns true if the user's current line is incomplete and expects more input. */
export function needsContinuation (line: string): boolean {
  const t = line.trimEnd()
  return t.endsWith('|') || t.endsWith('\\')
}

/** Extracts the index name / pattern from a FROM or TS source command. */
export function extractIndexName (query: string): string {
  const m = /^\s*(?:FROM|TS)\s+([^\s|,]+)/i.exec(query)
  return m ? m[1]! : ''
}

/** Returns keyword completion candidates for the given line prefix. */
export function getCandidates (line: string): string[] {
  const upper = line.trimStart().toUpperCase()
  // After a pipe: offer processing commands
  const lastPipe = line.lastIndexOf('|')
  const prefix = lastPipe >= 0 ? line.slice(lastPipe + 1).trimStart().toUpperCase() : upper
  const pool = lastPipe >= 0 ? PROCESSING_COMMANDS : (upper === '' ? SOURCE_COMMANDS : KEYWORDS)
  const hits = pool.filter(kw => kw.startsWith(prefix))
  return hits.length > 0 ? hits : pool
}

function completer (line: string): [string[], string] {
  const candidates = getCandidates(line)
  return [candidates.map(kw => kw + ' '), line]
}

function loadHistory (): string[] {
  if (!existsSync(HISTORY_FILE)) return []
  try {
    return readFileSync(HISTORY_FILE, 'utf-8')
      .split('\n')
      .filter(l => l.trim() !== '')
      .slice(-MAX_HISTORY)
  } catch {
    return []
  }
}

function saveHistory (line: string): void {
  try { appendFileSync(HISTORY_FILE, line + '\n', 'utf-8') } catch { /* ignore */ }
}

export async function runRepl (): Promise<void> {
  process.stderr.write('ES|QL interactive shell. Type a query and press Enter. Ctrl-C or Ctrl-D to exit.\n\n')

  const history = loadHistory()

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stderr,
    completer,
    terminal: true,
    history,
    historySize: MAX_HISTORY,
  })

  let buffer = ''

  const prompt = (): void => {
    rl.setPrompt(buffer === '' ? 'esql> ' : '   -> ')
    rl.prompt()
  }

  prompt()

  for await (const line of rl) {
    const trimmed = line.trim()

    if (trimmed === '' && buffer === '') {
      prompt()
      continue
    }

    if (trimmed === '\\q' || trimmed === 'quit' || trimmed === 'exit') {
      process.stderr.write('Bye.\n')
      rl.close()
      return
    }

    // Accumulate multi-line queries: if line ends with `|` or `\` it's incomplete
    if (needsContinuation(trimmed)) {
      buffer += (buffer === '' ? '' : ' ') + trimmed
      prompt()
      continue
    }

    const query = buffer === '' ? trimmed : `${buffer} ${trimmed}`
    buffer = ''

    if (query === '') { prompt(); continue }

    saveHistory(query)

    try {
      const resp = await runQuery(query)
      formatOutput(resp, { format: defaultFormat() }, process.stdout)
      process.stderr.write(`${resp.values.length} rows in set (${resp.took}ms)\n`)
    } catch (err) {
      if (err instanceof EsqlError) {
        process.stderr.write(`Error: ${err.message}\n`)
        if (err.isConnection) {
          process.stderr.write('Check your connection config: elastic config context show\n')
        }
      } else {
        process.stderr.write(`Error: ${err instanceof Error ? err.message : String(err)}\n`)
      }
    }

    prompt()
  }
}
