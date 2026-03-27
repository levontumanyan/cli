package schema

import (
	"encoding/json"
	"slices"
	"testing"

	"github.com/elastic/cli/internal/schema/schematest"
	"github.com/google/jsonschema-go/jsonschema"
)

// TestNoInputType verifies NoInput is an empty struct.
func TestNoInputType(t *testing.T) {
	var ni NoInput
	if ni != (NoInput{}) {
		t.Error("NoInput should be an empty struct")
	}
}

// TestReflectNoInput verifies Reflect[NoInput] produces correct schema.
func TestReflectNoInput(t *testing.T) {
	schema := Reflect[NoInput]()

	if schema.Type != "object" {
		t.Errorf("expected type 'object', got %q", schema.Type)
	}

	// Verify additionalProperties is false (represented as {Not: {}})
	if schema.AdditionalProperties == nil {
		t.Error("expected additionalProperties to be set")
	}
	if schema.AdditionalProperties.Not == nil {
		t.Error("expected additionalProperties to have Not set (representing false)")
	}

	if len(schema.Required) > 0 {
		t.Errorf("expected no required fields, got %v", schema.Required)
	}
}

// TestReflectSimpleInput verifies Reflect generates correct schema for struct with required/optional fields.
func TestReflectSimpleInput(t *testing.T) {
	schema := Reflect[schematest.SimpleInput]()

	if schema.Type != "object" {
		t.Errorf("expected type 'object', got %q", schema.Type)
	}

	// Verify additionalProperties is false
	if schema.AdditionalProperties == nil || schema.AdditionalProperties.Not == nil {
		t.Error("expected additionalProperties to be false")
	}

	if len(schema.Properties) == 0 {
		t.Error("expected Properties to be populated")
	}

	// Verify required fields
	if len(schema.Required) == 0 {
		t.Error("expected some required fields")
	}

	// Marshal to JSON to verify it's valid
	data, err := json.Marshal(schema)
	if err != nil {
		t.Errorf("failed to marshal schema to JSON: %v", err)
	}

	if len(data) == 0 {
		t.Error("expected non-empty JSON schema")
	}
}

// TestReflectAllOptional verifies schema for struct with all optional fields.
func TestReflectAllOptional(t *testing.T) {
	schema := Reflect[schematest.AllOptionalInput]()

	if schema.Type != "object" {
		t.Errorf("expected type 'object', got %q", schema.Type)
	}

	if len(schema.Required) > 0 {
		t.Errorf("expected no required fields for AllOptionalInput, got %v", schema.Required)
	}
}

// TestReflectMultiTypeInput verifies schema for struct with multiple field types.
func TestReflectMultiTypeInput(t *testing.T) {
	schema := Reflect[schematest.MultiTypeInput]()

	if schema.Type != "object" {
		t.Errorf("expected type 'object', got %q", schema.Type)
	}

	// Should have properties for each field
	if len(schema.Properties) < 4 {
		t.Errorf("expected at least 4 properties, got %d", len(schema.Properties))
	}

	// Should have required field for "name"
	if !slices.Contains(schema.Required, "name") {
		t.Error("expected 'name' to be in required fields")
	}
}

// TestReflectMarshalJSON verifies schema can be marshaled to JSON.
func TestReflectMarshalJSON(t *testing.T) {
	schema := Reflect[schematest.SimpleInput]()

	data, err := json.Marshal(schema)
	if err != nil {
		t.Fatalf("failed to marshal schema: %v", err)
	}

	// Verify it can be unmarshaled back
	var unmarshaled *jsonschema.Schema
	err = json.Unmarshal(data, &unmarshaled)
	if err != nil {
		t.Fatalf("failed to unmarshal schema: %v", err)
	}

	if unmarshaled.Type != "object" {
		t.Errorf("expected unmarshaled type 'object', got %q", unmarshaled.Type)
	}
}

// TestValidationError verifies ValidationError structure.
func TestValidationError(t *testing.T) {
	err := ValidationError{
		Field:   "name",
		Message: "required but missing",
	}

	if err.Field != "name" {
		t.Errorf("expected Field 'name', got %q", err.Field)
	}
	if err.Message != "required but missing" {
		t.Errorf("expected Message 'required but missing', got %q", err.Message)
	}
}

// TestFormatErrorsSingle verifies formatting a single error.
func TestFormatErrorsSingle(t *testing.T) {
	errs := []ValidationError{
		{Field: "name", Message: "required but missing", Value: nil},
	}

	formatted := FormatErrors(errs)
	if formatted == nil {
		t.Fatal("expected non-nil error for non-empty slice")
	}

	errStr := formatted.Error()
	if !contains(errStr, "name") {
		t.Errorf("expected field name 'name' in error message, got: %s", errStr)
	}
	if !contains(errStr, "required") {
		t.Errorf("expected 'required' in error message, got: %s", errStr)
	}
}

// TestFormatErrorsMultiple verifies formatting multiple errors.
func TestFormatErrorsMultiple(t *testing.T) {
	errs := []ValidationError{
		{Field: "name", Message: "required but missing", Value: nil},
		{Field: "count", Message: "expected number, got string", Value: "not-a-number"},
		{Field: "extra", Message: "unknown field", Value: nil},
	}

	formatted := FormatErrors(errs)
	if formatted == nil {
		t.Fatal("expected non-nil error for non-empty slice")
	}

	errStr := formatted.Error()
	for _, err := range errs {
		if !contains(errStr, err.Field) {
			t.Errorf("expected field '%s' in error message", err.Field)
		}
	}
}

// TestFormatErrorsEmpty verifies formatting an empty error slice returns nil.
func TestFormatErrorsEmpty(t *testing.T) {
	errs := []ValidationError{}

	formatted := FormatErrors(errs)
	if formatted != nil {
		t.Errorf("expected nil error for empty slice, got: %v", formatted)
	}
}

// TestFormatErrorsNil verifies formatting a nil error slice returns nil.
func TestFormatErrorsNil(t *testing.T) {
	var errs []ValidationError

	formatted := FormatErrors(errs)
	if formatted != nil {
		t.Errorf("expected nil error for nil slice, got: %v", formatted)
	}
}

// contains is a helper to check if a string contains a substring.
func contains(s, substr string) bool {
	for i := 0; i <= len(s)-len(substr); i++ {
		if s[i:i+len(substr)] == substr {
			return true
		}
	}
	return false
}
