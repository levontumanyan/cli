package schema

import (
	"testing"

	"github.com/elastic/cli/internal/schema/schematest"
)

func TestValidateAndDecodeSimpleInput_Valid(t *testing.T) {
	input := []byte(`{"name":"test","count":5}`)
	result, err := ValidateAndDecode[schematest.SimpleInput](input)

	if err != nil {
		t.Fatalf("expected no error, got: %v", err)
	}
	if result.Name != "test" {
		t.Errorf("expected Name='test', got %q", result.Name)
	}
	if result.Count != 5 {
		t.Errorf("expected Count=5, got %d", result.Count)
	}
}

func TestValidateAndDecodeSimpleInput_MissingRequired(t *testing.T) {
	input := []byte(`{"count":5}`)
	_, err := ValidateAndDecode[schematest.SimpleInput](input)

	if err == nil {
		t.Fatal("expected error for missing required field 'name'")
	}

	errStr := err.Error()
	if !contains(errStr, "name") {
		t.Errorf("expected field name 'name' in error, got: %s", errStr)
	}
}

func TestValidateAndDecodeSimpleInput_WrongType(t *testing.T) {
	input := []byte(`{"name":"ok","count":"not-a-number"}`)
	_, err := ValidateAndDecode[schematest.SimpleInput](input)

	if err == nil {
		t.Fatal("expected error for wrong type")
	}

	errStr := err.Error()
	if !contains(errStr, "count") && !contains(errStr, "type") {
		t.Errorf("expected type mismatch error, got: %s", errStr)
	}
}

func TestValidateAndDecodeMalformedJSON(t *testing.T) {
	input := []byte(`{bad`)
	_, err := ValidateAndDecode[schematest.SimpleInput](input)

	if err == nil {
		t.Fatal("expected error for malformed JSON")
	}
}

func TestValidateAndDecodeUnknownField(t *testing.T) {
	input := []byte(`{"name":"ok","extra":"bad"}`)
	_, err := ValidateAndDecode[schematest.SimpleInput](input)

	if err == nil {
		t.Fatal("expected error for unknown field")
	}

	errStr := err.Error()
	if !contains(errStr, "extra") {
		t.Errorf("expected field 'extra' in error, got: %s", errStr)
	}
}

func TestValidateAndDecodeAllOptional_Empty(t *testing.T) {
	input := []byte(`{}`)
	result, err := ValidateAndDecode[schematest.AllOptionalInput](input)

	if err != nil {
		t.Fatalf("expected no error for empty input with all-optional schema, got: %v", err)
	}

	if result.Text != "" {
		t.Errorf("expected zero-value Text, got %q", result.Text)
	}
	if result.Enabled != false {
		t.Errorf("expected zero-value Enabled, got %v", result.Enabled)
	}
}

func TestValidateAndDecodeNilInput(t *testing.T) {
	// nil input should be treated as empty {}
	result, err := ValidateAndDecode[schematest.AllOptionalInput](nil)

	if err != nil {
		t.Fatalf("expected no error for nil input with all-optional schema, got: %v", err)
	}

	if result.Text != "" || result.Enabled != false {
		t.Errorf("expected zero-value struct, got %+v", result)
	}
}

func TestValidateAndDecodeNoInput(t *testing.T) {
	input := []byte(`{}`)
	result, err := ValidateAndDecode[NoInput](input)

	if err != nil {
		t.Fatalf("expected no error for NoInput, got: %v", err)
	}

	if result != (NoInput{}) {
		t.Error("expected zero-value NoInput struct")
	}
}

func TestValidateAndDecodeNoInputWithExtraField(t *testing.T) {
	// NoInput should reject any fields due to additionalProperties: false
	input := []byte(`{"extra":"field"}`)
	_, err := ValidateAndDecode[NoInput](input)

	if err == nil {
		t.Fatal("expected error for NoInput with extra field")
	}

	errStr := err.Error()
	if !contains(errStr, "extra") {
		t.Errorf("expected 'extra' field in error, got: %s", errStr)
	}
}

func TestValidateAndDecodeMultiTypeInput_AllFields(t *testing.T) {
	input := []byte(`{"name":"test","count":42,"active":true,"tags":["foo","bar"]}`)
	result, err := ValidateAndDecode[schematest.MultiTypeInput](input)

	if err != nil {
		t.Fatalf("expected no error, got: %v", err)
	}

	if result.Name != "test" {
		t.Errorf("expected Name='test', got %q", result.Name)
	}
	if result.Count != 42 {
		t.Errorf("expected Count=42, got %d", result.Count)
	}
	if result.Active != true {
		t.Errorf("expected Active=true, got %v", result.Active)
	}
	if len(result.Tags) != 2 {
		t.Errorf("expected 2 tags, got %d", len(result.Tags))
	}
}

func TestValidateAndDecodeMultipleViolations(t *testing.T) {
	// Missing "name" (required) + unknown "extra" field
	input := []byte(`{"extra":"field"}`)
	_, err := ValidateAndDecode[schematest.SimpleInput](input)

	if err == nil {
		t.Fatal("expected error for multiple violations")
	}

	errStr := err.Error()
	if !contains(errStr, "name") {
		t.Errorf("expected missing 'name' in error, got: %s", errStr)
	}
	if !contains(errStr, "extra") {
		t.Errorf("expected unknown 'extra' in error, got: %s", errStr)
	}
}
