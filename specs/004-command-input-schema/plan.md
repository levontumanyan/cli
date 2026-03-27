# Implementation Plan: Command Input Schema Validation

**Branch**: `004-command-input-schema` | **Date**: 2026-03-27 | **Spec**: [spec.md](./spec.md)
**Input**: Feature spec from `/specs/004-command-input-schema/spec.md`

## Summary

Every command must declare its expected JSON input as a Go struct. The framework uses `github.com/google/jsonschema-go` to generate a JSON Schema from the struct, validates all input against the schema before execution (pre-flight), deserializes valid input into the typed struct via `encoding/json`, and passes the populated struct — never raw JSON — to the handler. Schema generation uses generics (`factory.New[T]`) to enforce typed handlers at compile time. A new `internal/schema` package centralizes all validation, deserialization, and schema output logic to maximize reuse and minimize duplication across commands.

## Technical Context

**Language/Version**: Go 1.25.3
**Primary Dependencies**: Cobra (CLI framework), `github.com/google/jsonschema-go` (JSON Schema generation — new), `encoding/json` (stdlib, deserialization)
**Storage**: N/A (CLI tool, no persistent storage)
**Testing**: `go test ./...` (stdlib testing, table-driven tests, `justfile` targets)
**Target Platform**: Cross-platform (Linux, macOS, Windows)
**Project Type**: CLI application
**Performance Goals**: N/A (CLI startup latency; validation is negligible)
**Constraints**: Minimal dependencies (constitution §VI). No third-party JSON parsing or validation libraries beyond `jsonschema-go`.
**Scale/Scope**: Currently 1 command (`version`). Framework must scale to dozens of commands.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Config-Driven Commands | ✅ PASS | Input schema is declared in config (struct definition), not ad-hoc code. Help text sourced from schema `description` fields. |
| II. Agent-First I/O | ✅ PASS | `--help --format=json` returns JSON Schema (FR-014). JSON input via stdin/`--file` preserved. |
| III. Input Validation & Safety | ✅ PASS | Pre-flight validation is the core of this feature. All violations reported. |
| IV. Context-Based Configuration | ✅ PASS | No changes to context system. |
| V. Test-First Development | ✅ PASS | All implementation follows red/green TDD cycle. |
| VI. Minimal Dependencies | ⚠️ JUSTIFIED | Adding `github.com/google/jsonschema-go`. Justified: stdlib cannot generate JSON Schema from Go types. This is the minimum addition needed. No validation library added — custom lightweight validator uses the generated schema. |

**Post-Phase 1 re-check**: All gates remain green. The design uses one new dependency (justified above), generics for compile-time safety, and stdlib `encoding/json` for deserialization.

## Project Structure

### Documentation (this feature)

```text
specs/004-command-input-schema/
├── plan.md                              # This file
├── research.md                          # Phase 0 output
├── data-model.md                        # Phase 1 output
├── quickstart.md                        # Phase 1 output
├── contracts/
│   └── command-registration.md          # Phase 1 output
└── tasks.md                             # Phase 2 output (created by /speckit.tasks)
```

### Source Code (repository root)

```text
internal/
├── factory/
│   ├── factory.go          # Modified: New[T any](), RunFunc[T], schema integration
│   ├── factory_test.go     # Modified: tests updated for generic API
│   ├── config.go           # Unchanged
│   ├── path.go             # Unchanged
│   └── factorytest/
│       └── helpers.go      # Unchanged
├── output/
│   ├── output.go           # Unchanged
│   └── output_test.go      # Unchanged
└── schema/                 # NEW PACKAGE
    ├── schema.go           # Reflect[T](), NoInput, core types
    ├── validate.go         # ValidateAndDecode[T](), validation logic
    ├── errors.go           # ValidationError, FormatErrors()
    ├── schema_test.go      # Tests for schema generation
    ├── validate_test.go    # Tests for validation + deserialization
    ├── errors_test.go      # Tests for error formatting
    └── schematest/
        └── helpers.go      # Test fixtures (sample structs)

cmd/
├── root.go                 # Modified: version command uses New[schema.NoInput]
└── root_test.go            # Modified: tests updated for generic API
```

**Structure Decision**: Single-project layout (existing). New `internal/schema` package added alongside existing `internal/factory` and `internal/output`. This follows the established pattern of domain-specific packages under `internal/`.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| New dependency `jsonschema-go` | JSON Schema generation from Go types is not available in stdlib | Hand-rolling schema generation would be error-prone and would duplicate the well-tested reflection logic in `jsonschema-go` |
