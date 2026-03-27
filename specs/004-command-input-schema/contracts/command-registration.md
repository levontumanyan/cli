# Contract: Command Registration API

**Feature**: 004-command-input-schema
**Date**: 2026-03-27

## `factory.New[T any]` — Generic command constructor

### Signature

```go
func New[T any](name, description string, run func(ctx RunContext, input T) (any, error)) *cobra.Command
```

### Behavior

1. Reflects `T` to produce a JSON Schema at command construction time.
2. On invocation (`RunE`):
   a. Resolves config, context, and body (existing behavior).
   b. Calls `schema.ValidateAndDecode[T](body)`.
   c. If validation fails → returns formatted error (all violations).
   d. If validation passes → calls `run(ctx, decodedInput)`.
3. Registers a custom help function: when `--format=json` is active, `--help` outputs the JSON schema to stdout and exits 0.

### Input type `T` constraints

- Must be a Go struct (panics at registration time otherwise).
- Fields use `json:"name"` tags for JSON mapping.
- Fields use `jsonschema:"required"` to mark required fields.
- Fields use `jsonschema:"description=..."` for descriptions.
- Supported field types: `string`, `int`/`float64` (number), `bool`, nested structs (object), slices (array).

### Migration contract

All existing calls to `factory.New(...)` must migrate to `factory.New[schema.NoInput](...)` (or a real input struct). The old non-generic signature is removed.

---

## `schema.ValidateAndDecode[T any]` — Validation + deserialization

### Signature

```go
func ValidateAndDecode[T any](data []byte) (T, error)
```

### Behavior

1. If `data` is nil or empty, treats as `{}`.
2. Parses JSON into `map[string]any` for schema validation.
3. Validates against the reflected schema of `T`:
   - Checks required fields present.
   - Checks field types match schema.
   - Checks no unknown fields exist.
4. If validation passes, unmarshals `data` into `T` using `encoding/json` with `DisallowUnknownFields`.
5. Returns `(zero T, error)` on failure with all violations listed.
6. Returns `(populated T, nil)` on success.

### Error format

```
validation failed:
  - field "name": required but missing
  - field "count": expected number, got string
  - field "extra": unknown field
```

---

## `schema.Reflect[T any]` — Schema generation

### Signature

```go
func Reflect[T any]() *jsonschema.Schema
```

### Behavior

1. Calls `jsonschema.Reflect(&T{})` from `github.com/google/jsonschema-go`.
2. Sets `AdditionalProperties = false` (strict mode / unknown field rejection).
3. Returns the generated schema.
4. Result is JSON-marshalable for `--help --format=json` output.

---

## `--help --format=json` output contract

### Request

```bash
elastic <command> --help --format=json
```

### Response (stdout)

A valid JSON object representing the command's input schema. Example:

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "Name of the resource"
    },
    "count": {
      "type": "integer",
      "description": "Number of items"
    }
  },
  "required": ["name"],
  "additionalProperties": false
}
```

### Guarantees

- Exit code: 0
- stdout: Only the JSON schema, no other text
- stderr: Empty
