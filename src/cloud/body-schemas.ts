/*
 * Copyright Elasticsearch B.V. and contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { z } from 'zod'

// Body Zod schemas for codegen-defined cloud APIs whose generated definition in
// src/cloud/apis/*.ts omits the `body` field. Without these, the factory has no
// fields to register as CLI flags. Keyed by the codegen command `name`.
const projectCreateBody = z.object({
  name: z.string()
    .describe('Display name of the project')
    .meta({ found_in: 'body' }),
  region_id: z.string()
    .describe('Region where the project is created (e.g. aws-us-east-1)')
    .meta({ found_in: 'body' }),
})

export const cloudBodySchemas: ReadonlyMap<string, z.ZodObject<z.ZodRawShape>> = new Map([
  ['create-elasticsearch-project', projectCreateBody],
  ['create-observability-project', projectCreateBody],
  ['create-security-project',      projectCreateBody],
])
