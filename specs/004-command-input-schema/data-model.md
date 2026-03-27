# Data Model: Command Input Schema Validation

**Feature**: 004-command-input-schema
**Date**: 2026-03-27

## Entities

### 1. Input Struct (generic type parameter `T`)

Any user-defined Go struct that declares the shape of a command's JSON input. The struct uses standard `json` tags for field naming and `jsonschema` tags for schema metadata.

**Fields** (example):
| Field Tag | Purpose |
|-----------|---------|
| `json:"name"` | JSON field name for marshal/unmarshal |
| `jsonschema:"required"` | Marks field as required in schema |
| `jsonschema:"description=..."` | Field description for help/schema output |

**Relationships**: One per command. Reflected by `schema.Reflect[T]()` to produce a `Schema`. Deserialized from JSON input by `schema.Decode[T]()`.

**Validation rules**: Must be a struct type (enforced by `jsonschema-go` reflection). Fields must be exported. Nested structs are supported for `object`-typed fields.

### 2. Schema

Generated from `T` via `github.com/google/jsonschema-go`. Represents the JSON Schema document for a command's input.

**Key fields** (from `jsonschema-go`):
| Field | Type | Description |
|-------|------|-------------|
| `Type` | `string` | Always `"object"` for command input |
| `Properties` | `map[string]*Schema` | Per-field sub-schemas |
| `Required` | `[]string` | Names of required fields |
| `Description` | `string` | Top-level description |
| `AdditionalProperties` | `*bool` | Set to `false` (strict mode) |

**Relationships**: One-to-one with an input struct type `T`. Used by `Validate()` for pre-flight checks. Marshalled to JSON for `--help --format=json`.

### 3. ValidationError

A single constraint violation found during pre-flight validation.

**Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `Field` | `string` | JSON field path (e.g., `"name"`, `"settings.timeout"`) |
| `Message` | `string` | Human-readable violation description |
| `Value` | `any` | The rejected value (nil for missing-field errors) |

**Relationships**: Collected into `[]ValidationError` by `Validate()`. Formatted into a single `error` by `FormatErrors()`.

### 4. ValidationResult

The outcome of `schema.ValidateAndDecode[T]()`.

**Fields**:
| Field | Type | Description |
|-------|------|-------------|
| `Value` | `T` | The deserialized, validated Go struct |
| `Errors` | `[]ValidationError` | All violations (empty on success) |

**Relationships**: Returned to `factory.New[T]` for dispatch. On success, `Value` is passed to the handler. On failure, `Errors` are formatted and returned as the command error.

### 5. NoInput

A sentinel empty struct for commands that accept no JSON input.

```go
type NoInput struct{}
```

**Validation rules**: Always passes validation. Schema output is `{"type":"object","properties":{}}`.

### 6. RunContext (modified)

Existing entity in `internal/factory`. The `Body []byte` field is retained internally but no longer exposed to handlers — handlers receive a typed `T` instead.

**Changes**:
| Field | Change |
|-------|--------|
| `Body []byte` | Becomes internal to the factory; not passed to handler |

### 7. RunFunc[T] (new generic type)

Replaces the existing `RunFunc` type alias.

```go
type RunFunc[T any] func(ctx RunContext, input T) (any, error)
```

**Relationships**: Used by `factory.New[T]()`. Receives validated, deserialized input.

## State Transitions

### Input Processing Pipeline

```
Raw Input ([]byte from stdin/--file)
  │
  ├─ nil/empty ──→ Validate against schema
  │                  ├─ all optional ──→ zero-value T ──→ Handler
  │                  └─ has required ──→ ValidationError ──→ exit non-zero
  │
  └─ non-empty ──→ JSON parse
                     ├─ parse error ──→ error ──→ exit non-zero
                     └─ success ──→ Validate against schema
                                     ├─ valid ──→ Decode into T ──→ Handler
                                     └─ invalid ──→ []ValidationError ──→ exit non-zero
```

## Package Layout

```
internal/schema/
├── schema.go          # Reflect[T](), core types (ValidationError, NoInput)
├── validate.go        # ValidateAndDecode[T]() — validation + deserialization
├── validate_test.go   # Unit tests for validation logic
├── schema_test.go     # Unit tests for schema generation
└── schematest/
    └── helpers.go     # Test fixtures (sample structs, etc.)
```
