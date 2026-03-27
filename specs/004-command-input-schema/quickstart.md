# Quickstart: Command Input Schema Validation

**Feature**: 004-command-input-schema

## Overview

This feature adds JSON Schema-based input validation to every CLI command. Commands declare their expected input as a Go struct, and the framework automatically validates, deserializes, and passes typed data to handlers. Raw JSON is never exposed to handler functions.

## Key Concepts

1. **Input structs** — Go structs with `json` and `jsonschema` tags define what a command accepts.
2. **Generic factory** — `factory.New[T]()` wires up validation and deserialization automatically.
3. **Pre-flight validation** — All input is checked against the schema before the handler runs.
4. **Schema discoverability** — `--help --format=json` prints the JSON schema for any command.

## Example: Defining a command with input

```go
package cmd

import "github.com/elastic/cli/internal/schema"
import "github.com/elastic/cli/internal/factory"

// CreateInput defines the JSON input for the "create" command.
type CreateInput struct {
    Name  string `json:"name"  jsonschema:"required,description=Name of the resource"`
    Count int    `json:"count" jsonschema:"description=Number of items (default 1)"`
}

var createCmd = factory.New[CreateInput]("create", "Create a resource",
    func(ctx factory.RunContext, input CreateInput) (any, error) {
        // input is already validated and populated — no JSON parsing needed
        return fmt.Sprintf("Created %s with count %d", input.Name, input.Count), nil
    },
)
```

## Example: Command with no input

```go
var versionCmd = factory.New[schema.NoInput]("version", "Print version info",
    func(ctx factory.RunContext, _ schema.NoInput) (any, error) {
        return "elastic version dev", nil
    },
)
```

## Validation behavior

| Input scenario | Result |
|----------------|--------|
| Valid JSON matching schema | Handler receives populated struct |
| Missing required field | Error naming the field, exit non-zero |
| Wrong field type | Error with expected vs actual type, exit non-zero |
| Unknown extra field | Error naming the unknown field, exit non-zero |
| Malformed JSON | Parse error, exit non-zero |
| Empty/absent input, all optional | Handler receives zero-value struct |
| Empty/absent input, has required | Error naming required fields, exit non-zero |

## Schema discoverability

```bash
# Print the JSON schema for any command
elastic create --help --format=json
```

Output:
```json
{
  "type": "object",
  "properties": {
    "name": {"type": "string", "description": "Name of the resource"},
    "count": {"type": "integer", "description": "Number of items (default 1)"}
  },
  "required": ["name"],
  "additionalProperties": false
}
```

## Migration checklist

1. Add `github.com/google/jsonschema-go` dependency.
2. Create `internal/schema` package with `Reflect`, `ValidateAndDecode`, `NoInput`, and error types.
3. Change `factory.New` to `factory.New[T]`.
4. Change `RunFunc` to `RunFunc[T any]`.
5. Migrate all existing commands to use `factory.New[schema.NoInput](...)` or a real input struct.
6. Add `--help --format=json` schema output to the factory's help function.
7. Remove `Body []byte` from `RunContext` public API (keep internal for reading).
