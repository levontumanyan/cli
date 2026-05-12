/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * On-disk registry of installed extensions.
 *
 * The registry is a JSON array persisted at `~/.elastic/extensions.json`.
 * Each entry records the extension name, the install source, the path to the
 * install directory, and the resolved entrypoint executable.
 *
 * All public functions are async and safe to call concurrently for reads;
 * writes are not locked (single-writer assumption: the CLI runs one command
 * at a time).
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'

/** A single installed extension entry in the registry. */
export interface InstalledExtension {
  /** Short name, e.g. `"local"` for an extension invoked as `elastic local`. */
  name: string
  /**
   * Install source string as provided by the user, e.g.:
   * - `"github:elastic/elastic-local"`
   * - `"npm:@elastic/start-local"`
   */
  source: string
  /** Absolute path to the extension's install directory. */
  path: string
  /** Absolute path to the executable that is spawned when the extension runs. */
  entrypoint: string
}

// ---------------------------------------------------------------------------
// Test seam
// ---------------------------------------------------------------------------

let _registryPath: string | undefined

/**
 * Override the registry file path. Pass `undefined` to restore the default.
 * Intended for test use only.
 * @internal
 */
export function _testSetRegistryPath (p: string | undefined): void {
  _registryPath = p
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function registryPath (): string {
  return _registryPath ?? join(homedir(), '.elastic', 'extensions.json')
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Reads and returns all installed extensions from the registry.
 * Returns an empty array if the registry file does not yet exist.
 */
export async function readExtensions (): Promise<InstalledExtension[]> {
  try {
    const raw = await readFile(registryPath(), 'utf-8')
    return JSON.parse(raw) as InstalledExtension[]
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') return []
    throw err
  }
}

/**
 * Persists the given extension list to the registry file.
 * Creates `~/.elastic/` if it does not exist.
 */
export async function writeExtensions (extensions: InstalledExtension[]): Promise<void> {
  const path = registryPath()
  await mkdir(dirname(path), { recursive: true })
  await writeFile(path, JSON.stringify(extensions, null, 2) + '\n', 'utf-8')
}

/**
 * Returns the registry entry for the given extension name, or `undefined`
 * if no extension with that name is installed.
 */
export async function findExtension (name: string): Promise<InstalledExtension | undefined> {
  const extensions = await readExtensions()
  return extensions.find((e) => e.name === name)
}

/**
 * Adds or replaces an entry in the registry (matched by name) and persists.
 */
export async function upsertExtension (entry: InstalledExtension): Promise<void> {
  const extensions = await readExtensions()
  const idx = extensions.findIndex((e) => e.name === entry.name)
  if (idx === -1) {
    extensions.push(entry)
  } else {
    extensions[idx] = entry
  }
  await writeExtensions(extensions)
}

/**
 * Removes the entry with the given name from the registry and persists.
 * No-ops if the name is not found.
 */
export async function removeExtension (name: string): Promise<void> {
  const extensions = await readExtensions()
  const filtered = extensions.filter((e) => e.name !== name)
  await writeExtensions(filtered)
}
