// Package schema provides JSON Schema generation, validation, and deserialization for CLI command inputs.
package schema

import (
	"encoding/json"
	"fmt"
)

// ValidateAndDecode validates raw JSON input against the schema for type T,
// then deserializes valid input into a T instance.
// Returns the decoded value on success, or an error with all violations on failure.
func ValidateAndDecode[T any](data []byte) (T, error) {
	var result T

	// Normalize nil/empty input to empty object
	if len(data) == 0 {
		data = []byte(`{}`)
	}

	// Parse JSON into map[string]any for validation
	var inputMap map[string]any
	if err := json.Unmarshal(data, &inputMap); err != nil {
		return result, fmt.Errorf("invalid JSON: %w", err)
	}

	// Generate schema for T
	schema := Reflect[T]()

	// Validate required fields
	var violations []ValidationError
	for _, req := range schema.Required {
		if _, ok := inputMap[req]; !ok {
			violations = append(violations, ValidationError{
				Field:   req,
				Message: "required but missing",
				Value:   nil,
			})
		}
	}

	// Validate no unknown fields (due to additionalProperties: false)
	for key := range inputMap {
		// Check if field is in schema properties
		if len(schema.Properties) == 0 {
			// If schema has no properties, all input fields are unknown
			violations = append(violations, ValidationError{
				Field:   key,
				Message: "unknown field",
				Value:   nil,
			})
		} else if _, ok := schema.Properties[key]; !ok {
			// If field is not in properties, it's unknown
			violations = append(violations, ValidationError{
				Field:   key,
				Message: "unknown field",
				Value:   nil,
			})
		}
	}

	// If there are violations, return error
	if len(violations) > 0 {
		return result, FormatErrors(violations)
	}

	// Unmarshal into T
	if err := json.Unmarshal(data, &result); err != nil {
		return result, fmt.Errorf("decode error: %w", err)
	}

	return result, nil
}
