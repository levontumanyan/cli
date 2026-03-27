# Tasks: Command Input Schema Validation

**Input**: Design documents from `/specs/004-command-input-schema/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

**Tests**: Included — constitution §V mandates TDD (red/green cycle) for all changes.

**Organization**: Tasks grouped by user story for independent implementation and testing.

**Rebased on**: Latest code with `internal/errors` typed error package, `output.OutputError` interface, `output.ErrAlreadyRendered` sentinel, and redesigned `cmd/root.go` with `executeRoot()`/`classifyCobraError()`.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Exact file paths included in every task description

---

## Phase 1: Setup

**Purpose**: Add the new dependency and create the `internal/schema` package skeleton

- [ ] T001 Add `github.com/google/jsonschema-go` dependency via `go get github.com/google/jsonschema-go` and verify `go.mod` / `go.sum` update; run `just test` to confirm nothing breaks
- [ ] T002 [P] Create package skeleton file `internal/schema/schema.go` with package declaration and doc comment (`// Package schema provides JSON Schema generation, validation, and deserialization for CLI command inputs.`)
- [ ] T003 [P] Create package skeleton file `internal/schema/validate.go` with package declaration
- [ ] T004 [P] Create test helper package `internal/schema/schematest/helpers.go` with sample input structs for testing: `SimpleInput` (required string `Name` + optional int `Count`), `AllOptionalInput` (optional string + optional bool), `NestedInput` (struct with nested struct field), `MultiTypeInput` (string + int + bool + string-slice fields) — all with `json` and `jsonschema` tags

**Checkpoint**: `just test` passes, new dependency resolves, skeleton packages compile

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core types and functions that ALL user stories depend on

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Write tests for `NoInput` type in `internal/schema/schema_test.go`: verify it is an empty struct with zero fields; verify `Reflect[NoInput]()` produces a schema with type `"object"`, no required fields, and `additionalProperties` set to `false`
- [ ] T006 Implement `NoInput` struct type and `Reflect[T any]()` in `internal/schema/schema.go` — `Reflect` calls `jsonschema.Reflect` on a zero-value `*T`, sets `AdditionalProperties` to `false` (strict mode), and returns the schema
- [ ] T007 Write tests for `ValidationError` type and `FormatErrors()` in `internal/schema/schema_test.go`: single error formats as `validation failed:\n  - field "name": required but missing`; multiple errors list all violations; zero errors returns nil
- [ ] T008 Implement `ValidationError` struct (Field string, Message string, Value any) and `FormatErrors(errs []ValidationError) error` in `internal/schema/schema.go` — returns nil for empty slice, wraps joined messages for non-empty
- [ ] T009 Add `ValidationError` typed error to `internal/errors/errors.go`: create `SchemaValidationError` struct with `Violations []string` field, implementing `output.OutputError` with code `"validation_error"` and `Error()` returning the joined violations message — follow the existing pattern of `ConfigError`, `InputError`, etc.
- [ ] T010 Write tests for `SchemaValidationError` in `internal/errors/errors_test.go`: verify `ErrorCode()` returns `"validation_error"`, verify `Error()` includes all violation messages, verify it satisfies the `outputError` interface compile-time assertion (add to `TestAllTypesImplementOutputError`)
- [ ] T011 Write tests for `ValidateAndDecode[T]()` in `internal/schema/validate_test.go` using table-driven tests: valid JSON returns populated struct and nil error; nil/empty input with all-optional schema (`schematest.AllOptionalInput`) returns zero-value struct; nil/empty input with required fields (`schematest.SimpleInput`) returns error naming each required field; malformed JSON returns parse error; unknown field returns error naming the field; wrong type (string where int expected) returns error with expected vs actual; multiple violations (missing required + unknown field) all reported in single error
- [ ] T012 Implement `ValidateAndDecode[T any](data []byte) (T, error)` in `internal/schema/validate.go` — handle nil/empty → `{}` normalization; parse JSON into `map[string]any` for validation; validate required fields present; validate no unknown fields exist; validate field types match schema; collect all violations into `[]ValidationError`; if valid, unmarshal into `T` via `encoding/json` with `json.Decoder` + `DisallowUnknownFields()`; return `FormatErrors()` on failure

**Checkpoint**: `just test` passes, `internal/schema` package fully functional in isolation, `SchemaValidationError` integrates with existing error taxonomy

---

## Phase 3: User Story 1 — Invalid Input Is Caught Before Execution (Priority: P1) 🎯 MVP

**Goal**: Pre-flight validation catches all invalid input before the handler runs. No side effects on bad input.

**Independent Test**: Invoke any command with invalid JSON (missing required field, wrong type, extra field, malformed) and verify error is descriptive, handler was NOT called, and exit code is non-zero.

### Tests for US1

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T013 [US1] Write test in `internal/factory/factory_test.go`: given a command created with `New[schematest.SimpleInput]`, when input JSON is piped via stdin missing the required `name` field (e.g., `{"count":5}`), then RunE returns an error containing the field name `"name"` and the handler is NOT called (call count = 0)
- [ ] T014 [US1] Write test in `internal/factory/factory_test.go`: given a command created with `New[schematest.SimpleInput]`, when input JSON has a field with wrong type (e.g., `{"name":"ok","count":"not-a-number"}`), then RunE returns an error describing the type mismatch and handler is NOT called
- [ ] T015 [US1] Write test in `internal/factory/factory_test.go`: given a command created with `New[schematest.SimpleInput]`, when input is syntactically malformed JSON (e.g., `{bad`), then RunE returns a parse error and handler is NOT called
- [ ] T016 [US1] Write test in `internal/factory/factory_test.go`: given a command created with `New[schematest.SimpleInput]`, when input JSON contains an unknown field (e.g., `{"name":"ok","extra":"bad"}`), then RunE returns an error naming the unknown field `"extra"` and handler is NOT called
- [ ] T017 [US1] Write test in `internal/factory/factory_test.go`: given a command created with `New[schematest.SimpleInput]`, when valid JSON `{"name":"test"}` is provided, then validation passes and the handler IS called exactly once
- [ ] T018 [P] [US1] Write test in `internal/factory/factory_test.go`: given a command created with `New[schematest.SimpleInput]` and `--format=json`, when validation fails, then stdout contains a JSON error envelope with `"code":"validation_error"` and the error field lists the violations — confirming integration with the `output.Render` + `SchemaValidationError` pipeline

### Implementation for US1

- [ ] T019 [US1] Change the signature of `factory.New` to `factory.New[T any]` in `internal/factory/factory.go`: update `RunFunc` to `RunFunc[T any] func(ctx RunContext, input T) (any, error)`; in `RunE`, after reading body via `readBody(cmd)`, call `schema.ValidateAndDecode[T](body)`; on validation error, wrap in `apperrors.SchemaValidationError` and pass to `output.Render()`; on success, pass decoded `T` to handler alongside `RunContext`
- [ ] T020 [US1] Update ALL existing tests in `internal/factory/factory_test.go` to use the new generic `New[schema.NoInput]` signature — every test that constructs a command via `New(name, desc, func(ctx RunContext) ...)` must become `New[schema.NoInput](name, desc, func(ctx RunContext, _ schema.NoInput) ...)` — run `just test` and fix each compilation error systematically

**Checkpoint**: `just test` passes. Invalid input is rejected before handler runs. Valid input reaches the handler. JSON error envelopes carry `validation_error` code.

---

## Phase 4: User Story 2 — Command Handler Receives Typed Data, Not Raw JSON (Priority: P2)

**Goal**: Handlers receive a populated Go struct. Raw JSON (`string`, `[]byte`) cannot be passed to handlers. Compile-time enforcement via generics.

**Independent Test**: Create a command with a declared schema, pass valid JSON, assert inside the handler that the received argument is the correct Go struct type with fields populated.

### Tests for US2

- [ ] T021 [US2] Write test in `internal/factory/factory_test.go`: given a command `New[schematest.SimpleInput]`, when valid JSON `{"name":"test","count":5}` is piped via stdin, then the handler receives a `SimpleInput` struct with `Name=="test"` and `Count==5` — assert both field values inside the handler callback
- [ ] T022 [US2] Write test in `internal/factory/factory_test.go`: given a command `New[schema.NoInput]`, when no input is provided (nil body), then the handler receives a zero-value `NoInput` struct and no error occurs
- [ ] T023 [US2] Write test in `internal/factory/factory_test.go`: given a command `New[schematest.AllOptionalInput]`, when empty input `{}` is piped, then the handler receives a zero-value struct with all fields at their Go defaults

### Implementation for US2

- [ ] T024 [US2] Migrate the `version` command in `cmd/root.go` to use `factory.New[schema.NoInput]("version", "Print version info", func(ctx factory.RunContext, _ schema.NoInput) (any, error) { ... })` — add import for `github.com/elastic/cli/internal/schema`
- [ ] T025 [US2] Update tests in `cmd/root_test.go` — if any test constructs or references the `version` handler signature, update to match the new generic factory; run `just test` to verify all cmd tests pass
- [ ] T026 [US2] Remove the `Body []byte` field from the exported `RunContext` struct in `internal/factory/factory.go` — the raw body is read inside `RunE`, passed to `ValidateAndDecode[T]`, and only the decoded `T` is exposed to the handler; update any remaining test assertions that reference `ctx.Body`

**Checkpoint**: `just test` passes. Handler receives typed struct. Old non-generic `New` / `RunFunc` signature no longer compiles. `Body` field removed from public `RunContext`.

---

## Phase 5: User Story 4 — Callers Can Discover a Command's Expected Input (Priority: P2)

**Goal**: `--help --format=json` prints the command's JSON Schema to stdout and exits 0 with no other output.

**Independent Test**: Run any command with `--help --format=json`, assert stdout is only a valid JSON Schema object, stderr is empty, exit code is 0.

### Tests for US4

- [ ] T027 [US4] Write test in `internal/factory/factory_test.go`: given a command `New[schematest.SimpleInput]`, when executed with args `["--help"]` and root `--format=json`, then stdout contains only a valid JSON object with keys `type`, `properties`, `required`, and `additionalProperties`, and the command exits without error
- [ ] T028 [US4] Write test in `internal/factory/factory_test.go`: given a command `New[schema.NoInput]`, when executed with `--help --format=json`, then stdout contains a JSON schema with `"type":"object"` and empty or absent `properties`, and no `required` array
- [ ] T029 [US4] Write test in `internal/factory/factory_test.go`: given a command `New[schematest.SimpleInput]`, when executed with `--help` and `--format=text` (or no format flag), then normal Cobra help text is printed (not JSON schema) — assert stdout does NOT start with `{`

### Implementation for US4

- [ ] T030 [US4] In `factory.New[T]` in `internal/factory/factory.go`, call `schema.Reflect[T]()` at command construction time and store the resulting schema in a closure variable. Register a custom `SetHelpFunc` on the command that: (1) reads the `--format` persistent flag from `cmd.Root()`, (2) if `"json"`, marshals the stored schema to JSON via `encoding/json`, writes it to `cmd.OutOrStdout()`, and returns, (3) if `"text"` or unset, delegates to Cobra's default help by calling `cobra.Command.Usage()`
- [ ] T031 [US4] Write test in `internal/schema/schema_test.go`: verify that `Reflect[schematest.SimpleInput]()` marshalled to JSON includes field descriptions from `jsonschema:"description=..."` tags — assert the JSON output contains the description strings

**Checkpoint**: `just test` passes. `--help --format=json` outputs clean JSON Schema. `--help` (text) still works normally.

---

## Phase 6: User Story 3 — Error Messages Help Users Fix Their Input (Priority: P3)

**Goal**: Validation errors include field path, constraint violated, and rejected value. Multiple errors reported together.

**Independent Test**: Trigger each failure mode and assert error output includes field name, constraint description, and (where applicable) rejected value.

### Tests for US3

- [ ] T032 [US3] Write test in `internal/schema/validate_test.go`: when a required field is absent, the `ValidationError.Message` contains the field name and the word `"required"`
- [ ] T033 [US3] Write test in `internal/schema/validate_test.go`: when a field has the wrong type, the `ValidationError.Message` contains the field name, expected type (e.g., `"number"`), and the actual value received (e.g., `"hello"`)
- [ ] T034 [US3] Write test in `internal/schema/validate_test.go`: when multiple fields are invalid simultaneously (e.g., one missing required + one wrong type + one unknown), all violations appear in the list of `ValidationError` entries returned — assert `len(errors) >= 3`

### Implementation for US3

- [ ] T035 [US3] Refine `ValidateAndDecode[T]` in `internal/schema/validate.go` to populate the `Value` field of `ValidationError` for type-mismatch entries with the actual rejected value from the parsed JSON map
- [ ] T036 [US3] Refine `FormatErrors` in `internal/schema/schema.go` to include the expected type and received value in the formatted message for type-mismatch errors (e.g., `field "count": expected number, got string ("hello")`)

**Checkpoint**: `just test` passes. Error messages are actionable: every violation includes field path, constraint, and value.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final validation, cleanup, and documentation

- [ ] T037 [P] Verify all edge cases from spec.md in `internal/schema/validate_test.go`: empty `{}` with all-optional schema passes and returns zero-value struct; absent/nil input treated as `{}`; numeric-as-string (`"42"` for int field) is rejected as type mismatch — add tests if not already covered by T011
- [ ] T038 [P] Run `just lint` and fix any `go vet` warnings across all changed files (`internal/schema/`, `internal/factory/factory.go`, `internal/errors/errors.go`, `cmd/root.go`)
- [ ] T039 [P] Run `just test-race` to verify no data races in schema reflection or validation
- [ ] T040 [P] Add Go doc comments to all exported symbols in `internal/schema/` — `NoInput`, `Reflect`, `ValidateAndDecode`, `ValidationError`, `FormatErrors` — per constitution requirement for docstrings on exported symbols in core utilities
- [ ] T041 Verify end-to-end: build the binary via `just build`, run `./bin/elastic version` (no input, should succeed), run `echo '{}' | ./bin/elastic version` (no-input command with empty JSON, should succeed), run `./bin/elastic version --help --format=json` (should print NoInput schema as clean JSON)
- [ ] T042 Run quickstart.md validation — confirm the code examples in `specs/004-command-input-schema/quickstart.md` are consistent with the final implementation (struct tags, function signatures, expected output format)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 — BLOCKS all user stories
- **US1 (Phase 3, P1)**: Depends on Phase 2 — core validation wiring into factory
- **US2 (Phase 4, P2)**: Depends on Phase 3 — generic factory must be wired with validation before migration
- **US4 (Phase 5, P2)**: Depends on Phase 3 — needs generic `New[T]` to exist so schema can be stored at construction time
- **US3 (Phase 6, P3)**: Depends on Phase 2 only — refines error formatting independently, but benefits from US1 being done first
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **US1 (P1)**: Depends only on Foundational — no other story dependencies
- **US2 (P2)**: Depends on US1 (generic factory must exist before callers can migrate)
- **US4 (P2)**: Depends on US1 (needs generic `New[T]` to store schema at construction time)
- **US3 (P3)**: Can start after Foundational, but logically follows US1

### Within Each User Story

- Tests MUST be written and FAIL before implementation (constitution §V)
- Core logic before integration
- Story complete before moving to next priority

### Parallel Opportunities

- T002, T003, T004 (Phase 1 skeleton files) can all run in parallel
- T005/T007/T011 (Phase 2 test-writing) can be written in parallel (different files/functions)
- T009/T010 (Phase 2 `internal/errors` integration) can run in parallel with T005-T008
- US3 (Phase 6) error refinement is independent of US4 (Phase 5) — can run in parallel after US1
- T037, T038, T039, T040 (Phase 7 polish) can all run in parallel

---

## Parallel Example: Phase 2 (Foundational)

```text
# Write foundational tests in parallel (different files/functions):
T005: Tests for NoInput + Reflect in internal/schema/schema_test.go
T007: Tests for ValidationError + FormatErrors in internal/schema/schema_test.go
T009: SchemaValidationError type in internal/errors/errors.go
T011: Tests for ValidateAndDecode in internal/schema/validate_test.go

# Then implement sequentially (dependency order):
T006: NoInput + Reflect[T]() → T008: FormatErrors → T010: error tests → T012: ValidateAndDecode[T]()
```

## Parallel Example: US1 Tests

```text
# Write all US1 tests in parallel (same file, independent test functions):
T013: Missing required field test
T014: Wrong type test
T015: Malformed JSON test
T016: Unknown field test
T017: Valid input test
T018: JSON error envelope integration test
```

---

## Implementation Strategy

### MVP First (US1 Only)

1. Complete Phase 1: Setup (T001–T004)
2. Complete Phase 2: Foundational (T005–T012)
3. Complete Phase 3: US1 — Pre-flight validation (T013–T020)
4. **STOP and VALIDATE**: Invalid input is caught, valid input passes, handler is called, JSON error envelopes carry `validation_error` code
5. This alone delivers the core safety guarantee of the feature

### Incremental Delivery

1. Setup + Foundational → Schema package works in isolation
2. Add US1 → Pre-flight validation wired into factory (MVP!)
3. Add US2 → Typed handlers, migration complete, compile-time safety
4. Add US4 → `--help --format=json` discoverability
5. Add US3 → Polished error messages with rejected values
6. Each story adds value without breaking previous stories

---

## Summary

| Metric | Value |
|--------|-------|
| **Total tasks** | 42 |
| **Phase 1 (Setup)** | 4 tasks |
| **Phase 2 (Foundational)** | 8 tasks |
| **Phase 3 (US1 — P1)** | 8 tasks |
| **Phase 4 (US2 — P2)** | 6 tasks |
| **Phase 5 (US4 — P2)** | 5 tasks |
| **Phase 6 (US3 — P3)** | 5 tasks |
| **Phase 7 (Polish)** | 6 tasks |
| **Parallel opportunities** | 4 phases with parallelizable tasks |
| **MVP scope** | Phases 1–3 (US1: pre-flight validation), 20 tasks |
| **Independent stories** | US3 and US4 can run in parallel after US1 |

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Tests must fail before implementing (TDD — constitution §V)
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Integration with `internal/errors` typed error taxonomy: validation errors use `SchemaValidationError` → `output.OutputError` → JSON envelope with `"code":"validation_error"`
- `output.Render` now requires `OutputError` interface — all schema errors must flow through `apperrors.SchemaValidationError` to satisfy this contract
