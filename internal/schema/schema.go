// Package schema provides JSON Schema generation, validation, and deserialization for CLI command inputs.
package schema

import (
	"errors"
	"fmt"
	"strings"

	"github.com/google/jsonschema-go/jsonschema"
)

// NoInput is a sentinel empty struct for commands that accept no JSON input.
type NoInput struct{}

// Reflect generates a JSON Schema for type T.
// It calls jsonschema.For on type T, sets AdditionalProperties to false (strict mode),
// and returns the schema.
func Reflect[T any]() *jsonschema.Schema {
	schema, err := jsonschema.For[T](nil)
	if err != nil {
		// If schema generation fails, return an empty object schema
		schema = &jsonschema.Schema{Type: "object"}
	}

	// Set strict mode: no additional properties allowed
	// In JSON Schema, false is represented as {Not: {}}
	schema.AdditionalProperties = &jsonschema.Schema{Not: &jsonschema.Schema{}}

	return schema
}

// ValidationError represents a single validation constraint violation.
type ValidationError struct {
	Field   string // JSON field path (e.g., "name", "settings.timeout")
	Message string // Human-readable violation description
	Value   any    // The rejected value (nil for missing-field errors)
}

// FormatErrors formats a slice of ValidationError into a single error.
// Returns nil for empty/nil input; otherwise returns an error with all violations listed.
func FormatErrors(errs []ValidationError) error {
	if len(errs) == 0 {
		return nil
	}

	var b strings.Builder
	b.WriteString("validation failed:\n")
	for _, err := range errs {
		fmt.Fprintf(&b, " - field %q: %s\n", err.Field, err.Message)
	}

	return errors.New(b.String())
}
