# Feature spec: Command Input Schema Validation

**Feature Branch**: `004-command-input-schema`
**Created**: 2026-03-27
**Status**: Draft
**Input**: User description: "All commands must provide a JSON schema-like Go object that defines a valid JSON input. schema will be used to do mandatory pre-flight validation of all inputs before any further operations are run. If validation fails, an informative error message will be returned and the process will exit with a non-zero status. the JSON schema will also ensure that input JSON is properly deserialized into a Go-native data structure before that data is passed to the command's handler function. passing raw JSON to a handler as string or byte[] will no longer be allowed."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Invalid Input Is Caught Before Execution (Priority: P1)

A user invokes a command with malformed or invalid JSON input. Rather than the command partially executing and failing mid-flight, the CLI catches the problem immediately during a pre-flight validation step, prints a clear error message identifying what is wrong, and exits with a non-zero status. No side effects occur.

**Why this priority**: Pre-flight validation is the primary safety guarantee of this feature. It prevents wasted operations, unexpected side effects, and confusing failure modes. Everything else in this feature builds on this behaviour.

**Independent Test**: Can be fully tested by invoking any command with intentionally invalid JSON (missing required field, wrong type, extra disallowed field) and verifying that the error is descriptive, no operation was started, and the exit code is non-zero.

**Acceptance Scenarios**:

1. **given** a command that requires a JSON input object, **when** the user provides JSON that is missing a required field, **then** the CLI prints an error naming the missing field and exits with a non-zero status without executing the command.
2. **given** a command that requires a JSON input object, **when** the user provides JSON with a field value of the wrong type (e.g., a string where an integer is expected), **then** the CLI prints an error describing the type mismatch and exits with a non-zero status.
3. **given** a command that requires a JSON input object, **when** the user provides syntactically malformed JSON, **then** the CLI prints a parse error and exits with a non-zero status.
4. **given** a command that requires a JSON input object, **when** the user provides valid JSON that satisfies all schema constraints, **then** pre-flight validation passes and the command proceeds normally.

---

### User Story 2 - Command Handler Receives Typed Data, Not Raw JSON (Priority: P2)

A developer implementing a command handler no longer needs to manually parse or type-assert raw JSON bytes. The framework guarantees that, by the time the handler function is called, its input is already a populated Go struct matching the command's declared schema.

**Why this priority**: This directly enforces the correctness contract for command authors. It eliminates an entire class of bugs (nil panics, missing type assertions, silent data loss) and makes handlers simpler and safer to write.

**Independent Test**: Can be fully tested by implementing a new command with a declared schema, passing valid JSON, and asserting inside the handler that the received argument is the correct Go struct type with fields properly populated — no JSON parsing code required in the handler.

**Acceptance Scenarios**:

1. **given** a command with a declared input schema, **when** valid JSON is provided and passes validation, **then** the handler receives a Go struct with all fields populated from the JSON — not a raw string or byte slice.
2. **given** a command handler that previously accepted raw JSON bytes, **when** the feature is enforced, **then** compiling the command without a declared schema results in a build-time or startup-time error, not a silent runtime failure.

---

### User Story 3 - Error Messages Help Users Fix Their Input (Priority: P3)

When validation fails, the error message provides enough context for the user to understand exactly what was wrong and how to correct it — without consulting external documentation.

**Why this priority**: Good error messages reduce friction and support tickets. They are secondary to the validation behaviour itself but important for usability.

**Independent Test**: Can be fully tested by triggering each validation failure mode and asserting that the error output includes the field name (or path), the constraint violated, and, where applicable, the value that was rejected.

**Acceptance Scenarios**:

1. **given** a required field is absent, **then** the error names the missing field and states it is required.
2. **given** a field has the wrong type, **then** the error names the field, states the expected type, and shows the received value.
3. **given** multiple fields are invalid at once, **then** the error lists all violations, not just the first one found.

---
---

### User Story 4 - Callers Can Discover a Command's Expected Input (Priority: P2)

An agent or human caller wants to know what JSON input a command expects before invoking it. By combining `--help` with `--format=json`, the command prints its input schema as a valid JSON object to stdout and exits immediately — nothing else is written to stdout.

**Why this priority**: The CLI's agent-first design ethos requires that agents can introspect command contracts programmatically. Without discoverability, agents must guess or fail-then-read-error, which undermines the reliability guarantees this feature is trying to establish.

**Independent Test**: Can be fully tested by running any command with `--help --format=json` and asserting that stdout contains only a valid JSON object representing the schema, stderr is empty, and the exit code is zero.

**Acceptance Scenarios**:

1. **given** any registered command, **when** the caller invokes it with `--help --format=json`, **then** the command prints its input schema as a valid JSON object to stdout and exits with status zero.
2. **given** the `--help --format=json` invocation, **then** stdout contains **only** the JSON schema — no human-readable help text, banners, or other output is mixed in.
3. **given** the `--help --format=json` invocation, **then** the printed schema reflects the command's declared fields, their types, whether each is required or optional, and field descriptions.

---


### Edge Cases

- An empty JSON object `{}` or entirely absent input passes validation when every field in the schema is optional; the handler receives a zero-value struct. If any required field exists, absent/empty input is a validation error. *(Resolved.)*
- JSON input containing unknown/extra fields not declared in the schema is **rejected** — unknown fields are a validation error; the error message names the unknown field(s). *(Resolved: strict mode.)*
- Absent input or an empty string is treated the same as `{}` — valid if all fields are optional, an error otherwise. *(Resolved.)*
- How does the system behave when a schema itself is misconfigured by a command author (e.g., conflicting constraints)?
- What happens when a numeric field is provided as a JSON string (e.g., `"42"` vs `42`)?

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Every command MUST declare an input schema as a Go object that describes the structure and constraints of valid JSON input for that command.
- **FR-002**: The framework MUST perform input validation against the command's declared schema before invoking the command handler or executing any command logic.
- **FR-003**: If input validation fails, the system MUST return an informative error message that identifies the specific field(s) and constraint(s) violated.
- **FR-004**: If input validation fails, the process MUST exit with a non-zero status code.
- **FR-005**: The framework MUST deserialize validated JSON input into the Go-native data structure defined by the command's schema before passing it to the handler.
- **FR-006**: Command handler functions MUST receive their input as a typed Go struct, not as a raw JSON string, byte slice, or untyped map.
- **FR-007**: Passing raw JSON (as `string` or `[]byte`) directly to a command handler MUST NOT be permitted — this constraint MUST be enforceable at compile time or at application startup.
- **FR-008**: When multiple validation errors exist, the error output SHOULD report all violations, not only the first.
- **FR-009**: The schema definition MUST support exactly: required vs optional fields, primitive field types (string, number, boolean, object, array), and field-level descriptions. No additional constraint types (enums, patterns, ranges, conditional logic) are in scope.
- **FR-010**: Commands that do not declare an input schema MUST NOT be registerable, and attempting to do so MUST produce a clear error.
- **FR-011**: Input JSON containing fields not declared in the command's schema MUST be rejected; the validation error MUST name each unknown field.
- **FR-012**: When input is absent or empty and all schema fields are optional, validation MUST pass and the handler MUST receive a zero-value struct. When any required field exists and input is absent or empty, validation MUST fail with an error naming the missing required field(s).
- **FR-013**: All existing commands MUST be migrated to declare an input schema as part of this feature. The codebase MUST NOT contain any command lacking a schema declaration once this feature is complete; the build or startup check introduced by FR-010 enforces this.
- **FR-014**: When a command is invoked with both `--help` and `--format=json`, the command MUST print its input schema as a valid JSON object to stdout and exit with status zero. No other content MUST be written to stdout during this invocation.

### Key Entities

- **Input Schema**: A Go object (struct, interface, or descriptor type) that declares the expected shape, types, and constraints of a command's JSON input. Owned by the command definition.
- **Command Handler**: The function invoked after successful validation, which receives a typed Go struct populated from the validated input.
- **Validation Result**: The outcome of pre-flight validation — either a pass (allowing execution to continue) or a structured failure (list of violations, field paths, and messages).
- **Typed Input Struct**: The Go struct that the deserialized and validated JSON is mapped into before the handler is called.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 100% of registered commands have a declared input schema — it is impossible to register a command without one.
- **SC-002**: All validation failures are caught before any command logic executes, with zero instances of a command partially running on invalid input.
- **SC-003**: Validation error messages include the field path and violated constraint for every failure, enabling users to correct input without consulting documentation.
- **SC-004**: Command handler functions contain zero JSON parsing or type-assertion boilerplate — input arrives as a fully-populated Go struct.
- **SC-005**: The change is backward-compatible at the user level: valid inputs that worked before the feature continue to work after it is introduced.

## Assumptions

- Commands in this CLI already accept JSON as their primary input mechanism; this feature standardises and enforces validation on top of that existing pattern.
- The CLI framework already has a central command-registration mechanism that can be extended to require schema declarations.
- "JSON schema-like Go object" means a native Go type (e.g., a struct with field tags, or a schema descriptor struct), not an embedded raw JSON Schema string — the exact representation is a planning/implementation decision.
- Unknown/extra fields in input JSON are treated as validation errors (strict mode). Callers must provide exactly the fields declared in the schema — no more, no less. *(Confirmed.)*
- Error messages will be written to stderr; exit codes follow standard POSIX conventions (non-zero on any failure).
- A `--format=json` flag is being developed in a separate branch and will be available on this branch before implementation begins. Schema discoverability is implemented as the behaviour of `--help --format=json` combined.
- This feature is a hard cutover: all commands in the codebase are migrated to declare a schema in a single change. No opt-in period or deprecation window is provided. *(Confirmed.)*


## Clarifications

### Session 2026-03-27

- Q: When a caller provides a JSON field not declared in the schema, should validation reject the input or silently ignore it? → A: Reject (strict mode) — unknown fields are a validation error that names the offending field(s).
- Q: Beyond required/optional, primitive types, and descriptions, which additional constraint types should the schema support? → A: Baseline only — no enums, patterns, ranges, or conditional logic.
- Q: When a command's JSON input is entirely absent or empty, how should the framework respond? → A: Valid if all fields optional — absent/empty input passes when every schema field is optional, producing a zero-value struct; otherwise it is a validation error.
- Q: How should existing commands that currently lack a declared schema be handled when this feature is introduced? → A: Hard cutover — all existing commands are migrated as part of this feature; the build fails if any command lacks a schema.
- Q: Should the CLI expose a way for callers to retrieve a command's input schema before invoking it, and if so how? → A: Yes — when `--help` and `--format=json` are provided together, the command prints its JSON schema to stdout and nothing else. The `--format=json` flag is being delivered in a parallel branch and will be available before implementation begins.