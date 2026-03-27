# Research: Command Input Schema Validation

**Feature**: 004-command-input-schema
**Date**: 2026-03-27

## R-001: JSON Schema validation library — `github.com/google/jsonschema-go`

**Decision**: Use `github.com/google/jsonschema-go` (as directed by user input) for JSON Schema validation.

**Rationale**: The library generates JSON Schema from Go structs via reflection and struct tags. It reads `jsonschema` struct tags to produce a `*jsonschema.Schema` object and supports `json:"name"` tags for field naming. The library outputs a standard JSON Schema document that can be marshalled to JSON for `--help --format=json` output.

**How it works**:
- Call `jsonschema.Reflect(&MyStruct{})` to produce a `*jsonschema.Schema` from a Go struct.
- Struct tags control the schema: `jsonschema:"required"` marks fields required, `jsonschema:"description=..."` adds descriptions.
- The reflected schema can be marshalled to JSON for discoverability output.
- Validation against the schema must be paired with a separate validator or custom validation loop since `jsonschema-go` is a schema *generation* library, not a validation library.

**Alternatives considered**:
- `xeipuv/gojsonschema`: Full validation library but adds a separate dependency and doesn't generate schemas from Go types.
- Hand-rolled validation: Possible but duplicates effort and misses the JSON Schema output requirement for `--help --format=json`.
- Standard `encoding/json` strict mode: Handles unknown fields via `DisallowUnknownFields` but doesn't provide schema generation or constraint validation.

**Clarification resolved**: The `jsonschema-go` library handles schema *generation*. For validation against the generated schema, we will implement a lightweight validator in `internal/schema` that walks the generated schema and validates input JSON. This avoids adding a second third-party dependency.

## R-002: JSON deserialization approach

**Decision**: Use built-in `encoding/json` for all JSON marshalling/unmarshalling (as directed by user input).

**Rationale**: The Go standard library `encoding/json` handles struct deserialization via `json.Unmarshal`. Combined with `json.Decoder` and `DisallowUnknownFields()`, it rejects unknown fields at the deserialization level. This aligns with the constitution's "Minimal Dependencies" principle (§VI).

**Alternatives considered**:
- `json-iterator/go`: Faster but adds a dependency.
- `goccy/go-json`: Same concern.
- Manual parsing: Unnecessary when stdlib handles it well.

## R-003: Reusable schema infrastructure location

**Decision**: Create `internal/schema` package for all schema-related utilities (validation, reflection, error formatting).

**Rationale**: The spec requires reusable utilities in `./internal/`. A dedicated `internal/schema` package provides:
1. Schema generation from Go struct types (wrapping `jsonschema-go`)
2. Input validation against generated schemas
3. JSON deserialization into typed structs
4. Structured error collection and formatting
5. Schema-to-JSON output for `--help --format=json`

This keeps the `factory` package focused on command wiring while `schema` handles all input contract concerns.

**Alternatives considered**:
- Adding schema logic directly to `internal/factory`: Violates single-responsibility; factory already handles config, context, body reading.
- Multiple packages (`internal/validate`, `internal/deserialize`): Over-segmentation for a cohesive concern.

## R-004: Compile-time enforcement of typed handlers

**Decision**: Use Go generics to make `factory.New` a generic function parameterized on the input struct type.

**Rationale**: The spec requires that handlers receive typed structs (FR-006) and that passing raw JSON is forbidden at compile time (FR-007). A generic `New[T any]` function achieves this:
```go
func New[T any](name, description string, run func(ctx RunContext, input T) (any, error)) *cobra.Command
```
- `T` is the input struct type. The compiler enforces that handlers accept `T`, not `[]byte` or `string`.
- The framework reflects `T` to generate the JSON schema, validates input against it, deserializes into `T`, and passes the populated struct to the handler.
- Commands with no input use a sentinel type (e.g., `schema.NoInput` — an empty struct).

**Alternatives considered**:
- Interface-based approach (`InputSchema` interface on handlers): Runtime enforcement only, doesn't satisfy FR-007 compile-time constraint.
- Code generation: Heavy tooling overhead, harder to maintain.

## R-005: Handling commands with no input

**Decision**: Define a `schema.NoInput` empty struct type. Commands that take no JSON input use `New[schema.NoInput](...)`.

**Rationale**: FR-010 requires every command to declare a schema. An empty struct satisfies this universally — its generated schema is `{"type":"object","properties":{}}` with no required fields. Empty/absent input validates successfully against it (FR-012). This avoids special-casing "no input" commands.

## R-006: Validation error reporting

**Decision**: Collect all validation errors into a slice and format them as a multi-error message listing field path + violation for each.

**Rationale**: FR-008 requires reporting all violations, not just the first. The validator walks the schema, collects every violation into a `[]ValidationError` (each with field path, expected constraint, actual value), then joins them into a single error. When `--format=json`, the output package renders them in the structured error envelope.

## R-007: Schema discoverability via `--help --format=json`

**Decision**: Intercept `--help --format=json` in the factory's `RunE` to short-circuit into schema output mode.

**Rationale**: FR-014 requires that `--help --format=json` prints the JSON schema and exits. Since `--help` is handled by Cobra before `RunE`, we'll register a custom help function on each command that checks for `--format=json`. When detected, it marshals the reflected schema to JSON, writes it to stdout, and returns nil (exit 0). When `--format=text`, it falls through to Cobra's default help.
