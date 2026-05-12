/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { describe, it, before, after, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { mkdtemp, rm, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'
import {
  readExtensions,
  writeExtensions,
  findExtension,
  upsertExtension,
  removeExtension,
  _testSetRegistryPath,
} from '../../src/extension/store.ts'
import type { InstalledExtension } from '../../src/extension/store.ts'

const ext1: InstalledExtension = {
  name: 'local',
  source: 'github:elastic/elastic-local',
  path: '/home/user/.elastic/extensions/elastic-local',
  entrypoint: '/home/user/.elastic/extensions/elastic-local/elastic-local',
}

const ext2: InstalledExtension = {
  name: 'diag',
  source: 'github:elastic/esdiag',
  path: '/home/user/.elastic/extensions/elastic-diag',
  entrypoint: '/home/user/.elastic/extensions/elastic-diag/esdiag',
}

describe('extension store', () => {
  let tmpDir: string
  let registryFile: string

  before(async () => {
    tmpDir = await mkdtemp(join(tmpdir(), 'elastic-ext-store-'))
    registryFile = join(tmpDir, 'extensions.json')
    _testSetRegistryPath(registryFile)
  })

  after(async () => {
    _testSetRegistryPath(undefined)
    await rm(tmpDir, { recursive: true })
  })

  afterEach(async () => {
    // wipe registry between tests
    await writeExtensions([])
  })

  describe('readExtensions', () => {
    it('returns empty array when registry does not exist', async () => {
      _testSetRegistryPath(join(tmpDir, 'nonexistent', 'extensions.json'))
      const result = await readExtensions()
      assert.deepEqual(result, [])
      _testSetRegistryPath(registryFile)
    })

    it('returns the persisted extensions', async () => {
      await writeExtensions([ext1, ext2])
      const result = await readExtensions()
      assert.deepEqual(result, [ext1, ext2])
    })
  })

  describe('writeExtensions', () => {
    it('creates the parent directory if missing', async () => {
      const nested = join(tmpDir, 'subdir', 'extensions.json')
      _testSetRegistryPath(nested)
      await writeExtensions([ext1])
      const raw = await readFile(nested, 'utf-8')
      assert.deepEqual(JSON.parse(raw), [ext1])
      _testSetRegistryPath(registryFile)
    })

    it('writes valid JSON with a trailing newline', async () => {
      await writeExtensions([ext1])
      const raw = await readFile(registryFile, 'utf-8')
      assert.ok(raw.endsWith('\n'), 'expected trailing newline')
      assert.doesNotThrow(() => JSON.parse(raw))
    })

    it('overwrites existing content', async () => {
      await writeExtensions([ext1, ext2])
      await writeExtensions([ext2])
      const result = await readExtensions()
      assert.deepEqual(result, [ext2])
    })
  })

  describe('findExtension', () => {
    it('returns undefined when registry is empty', async () => {
      assert.equal(await findExtension('local'), undefined)
    })

    it('returns undefined when name is not found', async () => {
      await writeExtensions([ext1])
      assert.equal(await findExtension('diag'), undefined)
    })

    it('returns the matching extension', async () => {
      await writeExtensions([ext1, ext2])
      assert.deepEqual(await findExtension('local'), ext1)
      assert.deepEqual(await findExtension('diag'), ext2)
    })
  })

  describe('upsertExtension', () => {
    it('adds a new entry when name is not present', async () => {
      await upsertExtension(ext1)
      assert.deepEqual(await readExtensions(), [ext1])
    })

    it('replaces an existing entry with the same name', async () => {
      await upsertExtension(ext1)
      const updated: InstalledExtension = { ...ext1, source: 'github:elastic/elastic-local-v2' }
      await upsertExtension(updated)
      const result = await readExtensions()
      assert.equal(result.length, 1)
      assert.deepEqual(result[0], updated)
    })

    it('preserves other entries when upserting', async () => {
      await writeExtensions([ext1, ext2])
      const updated: InstalledExtension = { ...ext2, path: '/new/path' }
      await upsertExtension(updated)
      const result = await readExtensions()
      assert.equal(result.length, 2)
      assert.deepEqual(result.find((e) => e.name === 'diag'), updated)
      assert.deepEqual(result.find((e) => e.name === 'local'), ext1)
    })
  })

  describe('removeExtension', () => {
    it('no-ops when name is not found', async () => {
      await writeExtensions([ext1])
      await removeExtension('nonexistent')
      assert.deepEqual(await readExtensions(), [ext1])
    })

    it('removes the matching entry', async () => {
      await writeExtensions([ext1, ext2])
      await removeExtension('local')
      assert.deepEqual(await readExtensions(), [ext2])
    })

    it('leaves an empty registry when the last entry is removed', async () => {
      await writeExtensions([ext1])
      await removeExtension('local')
      assert.deepEqual(await readExtensions(), [])
    })
  })
})
