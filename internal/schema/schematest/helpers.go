package schematest

// SimpleInput contains a required string Name and optional int Count.
type SimpleInput struct {
	Name  string `json:"name" jsonschema:"name of the resource"`
	Count int    `json:"count,omitempty" jsonschema:"number of items"`
}

// AllOptionalInput contains all optional fields.
type AllOptionalInput struct {
	Text   string `json:"text,omitempty" jsonschema:"optional text field"`
	Enabled bool  `json:"enabled,omitempty" jsonschema:"optional boolean flag"`
}

// NestedInput contains a nested struct field.
type NestedInput struct {
	ID       string   `json:"id" jsonschema:"resource id"`
	Settings Settings `json:"settings" jsonschema:"optional settings"`
}

// Settings is a nested struct within NestedInput.
type Settings struct {
	Timeout int `json:"timeout,omitempty" jsonschema:"timeout in seconds"`
}

// MultiTypeInput contains string, int, bool, and string-slice fields.
type MultiTypeInput struct {
	Name    string   `json:"name" jsonschema:"resource name"`
	Count   int      `json:"count,omitempty" jsonschema:"item count"`
	Active  bool     `json:"active,omitempty" jsonschema:"activation flag"`
	Tags    []string `json:"tags,omitempty" jsonschema:"resource tags"`
}
