package factory

import (
	"bytes"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"os"
	"strings"
	"testing"

	"github.com/elastic/cli/internal/factory/factorytest"
	"github.com/elastic/cli/internal/output"
	"github.com/elastic/cli/internal/schema"
	"github.com/elastic/cli/internal/schema/schematest"
	"github.com/spf13/cobra"
)

// executeCmd runs the named subcommand under a fresh root command and returns
// the RunE error (if any). The root registers --context as a PersistentFlag,
// matching real-app wiring. Extra args follow the subcommand name.
func executeCmd(t *testing.T, sub *cobra.Command, args ...string) error {
	t.Helper()
	var contextFlag string
	root := &cobra.Command{Use: "root", SilenceErrors: true, SilenceUsage: true}
	root.PersistentFlags().StringVar(&contextFlag, "context", "", "")
	root.AddCommand(sub)
	root.SetArgs(append([]string{sub.Use}, args...))
	return root.Execute()
}

// ---- New() command fields ---------------------------------------------------

func TestNew_Use(t *testing.T) {
	cmd := New[schema.NoInput]("my-cmd", "short desc", func(ctx RunContext, _ schema.NoInput) (any, error) { return nil, nil })
	if cmd.Use != "my-cmd" {
		t.Errorf("Use: got %q, want %q", cmd.Use, "my-cmd")
	}
}

func TestNew_Short(t *testing.T) {
	cmd := New[schema.NoInput]("my-cmd", "short desc", func(ctx RunContext, _ schema.NoInput) (any, error) { return nil, nil })
	if cmd.Short != "short desc" {
		t.Errorf("Short: got %q, want %q", cmd.Short, "short desc")
	}
}

// ---- handler call count -----------------------------------------------------

func TestNew_HandlerCalledOnce(t *testing.T) {
	yaml := `
current_context: test
contexts:
  test:
    elasticsearch:
      url: http://localhost:9200
`
	configPath := factorytest.TempConfigFile(t, []byte(yaml))
	t.Setenv("ELASTIC_CONFIG", configPath)

	callCount := 0
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		callCount++
		return nil, nil
	})

	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if callCount != 1 {
		t.Errorf("handler called %d times, want 1", callCount)
	}
}

// ---- RunContext.Config -------------------------------------------------------

func TestNew_RunContextConfig(t *testing.T) {
	yaml := `
current_context: prod
contexts:
  prod:
    elasticsearch:
      url: https://my-cluster.es.io
      username: elastic
      password: s3cr3t
`
	configPath := factorytest.TempConfigFile(t, []byte(yaml))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		received = ctx
		return nil, nil
	})

	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if received.Config.CurrentContext != "prod" {
		t.Errorf("Config.CurrentContext: got %q, want %q", received.Config.CurrentContext, "prod")
	}
	es := received.Config.Contexts["prod"].Elasticsearch
	if es.URL != "https://my-cluster.es.io" {
		t.Errorf("URL: got %q, want %q", es.URL, "https://my-cluster.es.io")
	}
	if es.Username != "elastic" {
		t.Errorf("Username: got %q, want %q", es.Username, "elastic")
	}
}

// ---- RunContext.ConfigPath ---------------------------------------------------

func TestNew_RunContextConfigPath(t *testing.T) {
	configPath := factorytest.TempConfigFile(t, []byte("current_context: dev\n"))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		received = ctx
		return nil, nil
	})

	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if received.ConfigPath != configPath {
		t.Errorf("ConfigPath: got %q, want %q", received.ConfigPath, configPath)
	}
}

// ---- handler error propagation ----------------------------------------------

func TestNew_HandlerErrorPropagates(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	want := errors.New("handler failure")
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) { return nil, want })

	err := executeCmd(t, cmd)
	if err == nil {
		t.Fatal("expected error, got nil")
	}
	if !errors.Is(err, want) {
		t.Errorf("got error %v, want %v", err, want)
	}
}

// ---- two commands share the same config from one file -----------------------

func TestNew_TwoCommandsSameConfig(t *testing.T) {
	yaml := `
current_context: shared
contexts:
  shared:
    elasticsearch:
      url: http://shared.es.io
`
	configPath := factorytest.TempConfigFile(t, []byte(yaml))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var ctx1, ctx2 RunContext
	cmd1 := New[schema.NoInput]("cmd-one", "first", func(ctx RunContext, _ schema.NoInput) (any, error) { ctx1 = ctx; return nil, nil })
	cmd2 := New[schema.NoInput]("cmd-two", "second", func(ctx RunContext, _ schema.NoInput) (any, error) { ctx2 = ctx; return nil, nil })

	if err := executeCmd(t, cmd1); err != nil {
		t.Fatalf("cmd1: %v", err)
	}
	if err := executeCmd(t, cmd2); err != nil {
		t.Fatalf("cmd2: %v", err)
	}

	if ctx1.Config.CurrentContext != ctx2.Config.CurrentContext {
		t.Errorf("CurrentContext mismatch: cmd1=%q cmd2=%q",
			ctx1.Config.CurrentContext, ctx2.Config.CurrentContext)
	}
	if ctx1.ConfigPath != ctx2.ConfigPath {
		t.Errorf("ConfigPath mismatch: cmd1=%q cmd2=%q", ctx1.ConfigPath, ctx2.ConfigPath)
	}
	url1 := ctx1.Config.Contexts["shared"].Elasticsearch.URL
	url2 := ctx2.Config.Contexts["shared"].Elasticsearch.URL
	if url1 != url2 {
		t.Errorf("URL mismatch: cmd1=%q cmd2=%q", url1, url2)
	}
}

// ---- no config file: defaults used, ConfigPath empty -----------------------

func TestNew_NoConfigFile_XDGEmpty(t *testing.T) {
	// No elastic/config.yml inside the XDG dir → Load sees IsNotExist → defaults.
	tmpDir := t.TempDir()
	t.Setenv("ELASTIC_CONFIG", "")
	t.Setenv("XDG_CONFIG_HOME", tmpDir)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		received = ctx
		return nil, nil
	})

	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	want := defaultConfig()
	if received.Config.CurrentContext != want.CurrentContext {
		t.Errorf("CurrentContext: got %q, want %q",
			received.Config.CurrentContext, want.CurrentContext)
	}
	if received.Config.Contexts == nil {
		t.Error("Contexts is nil, want non-nil empty map")
	}
	if received.ConfigPath != "" {
		t.Errorf("ConfigPath: got %q, want empty string", received.ConfigPath)
	}
}

func TestNew_NoConfigFile_HomeEmpty(t *testing.T) {
	// No .config/elastic/config.yml under HOME → same graceful fallback.
	tmpDir := t.TempDir()
	t.Setenv("ELASTIC_CONFIG", "")
	t.Setenv("XDG_CONFIG_HOME", "")
	t.Setenv("HOME", tmpDir)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		received = ctx
		return nil, nil
	})

	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	want := defaultConfig()
	if received.Config.CurrentContext != want.CurrentContext {
		t.Errorf("CurrentContext: got %q, want %q",
			received.Config.CurrentContext, want.CurrentContext)
	}
	if received.Config.Contexts == nil {
		t.Error("Contexts is nil, want non-nil empty map")
	}
	if received.ConfigPath != "" {
		t.Errorf("ConfigPath: got %q, want empty string", received.ConfigPath)
	}
}

// ---- config file values flow into RunContext.Config ------------------------

func TestNew_ConfigValues_APIKey(t *testing.T) {
	yaml := `
current_context: dev
contexts:
  dev:
    elasticsearch:
      url: http://localhost:9200
      api_key: test123
`
	configPath := factorytest.TempConfigFile(t, []byte(yaml))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		received = ctx
		return nil, nil
	})
	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if received.Config.CurrentContext != "dev" {
		t.Errorf("CurrentContext: got %q, want %q", received.Config.CurrentContext, "dev")
	}
	es := received.Config.Contexts["dev"].Elasticsearch
	if es.URL != "http://localhost:9200" {
		t.Errorf("URL: got %q, want %q", es.URL, "http://localhost:9200")
	}
	if es.APIKey != "test123" {
		t.Errorf("APIKey: got %q, want %q", es.APIKey, "test123")
	}
}

func TestNew_ConfigValues_PartialContext_DefaultsForMissingFields(t *testing.T) {
	yaml := `
current_context: minimal
contexts:
  minimal:
    elasticsearch:
      url: http://localhost:9200
`
	configPath := factorytest.TempConfigFile(t, []byte(yaml))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		received = ctx
		return nil, nil
	})
	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	es := received.Config.Contexts["minimal"].Elasticsearch
	if es.Username != "" {
		t.Errorf("Username: got %q, want empty string", es.Username)
	}
	if es.Password != "" {
		t.Errorf("Password: got %q, want empty string", es.Password)
	}
	if es.APIKey != "" {
		t.Errorf("APIKey: got %q, want empty string", es.APIKey)
	}
}

func TestNew_ConfigValues_MultipleContexts(t *testing.T) {
	yaml := `
current_context: prod
contexts:
  prod:
    elasticsearch:
      url: https://prod.es.io
      username: admin
      password: secret
  dev:
    elasticsearch:
      url: http://localhost:9200
      api_key: devkey==
`
	configPath := factorytest.TempConfigFile(t, []byte(yaml))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		received = ctx
		return nil, nil
	})
	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}

	if len(received.Config.Contexts) != 2 {
		t.Fatalf("Contexts length: got %d, want 2", len(received.Config.Contexts))
	}
	prod := received.Config.Contexts["prod"].Elasticsearch
	if prod.URL != "https://prod.es.io" {
		t.Errorf("prod URL: got %q, want %q", prod.URL, "https://prod.es.io")
	}
	if prod.Username != "admin" {
		t.Errorf("prod Username: got %q, want %q", prod.Username, "admin")
	}
	dev := received.Config.Contexts["dev"].Elasticsearch
	if dev.APIKey != "devkey==" {
		t.Errorf("dev APIKey: got %q, want %q", dev.APIKey, "devkey==")
	}
}

// ---- --context flag resolution ---------------------------------------------

// twoContextConfig is the shared YAML fixture for context-resolution tests:
// current_context=prod, two contexts: prod and dev.
const twoContextConfig = `
current_context: prod
contexts:
  prod:
    elasticsearch:
      url: https://prod.es.io
  dev:
    elasticsearch:
      url: http://localhost:9200
`

func TestNew_Context_FlagOverridesCurrentContext(t *testing.T) {
	configPath := factorytest.TempConfigFile(t, []byte(twoContextConfig))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) { received = ctx; return nil, nil })
	if err := executeCmd(t, cmd, "--context=dev"); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if received.ActiveContext != "dev" {
		t.Errorf("ActiveContext: got %q, want %q", received.ActiveContext, "dev")
	}
}

func TestNew_Context_DefaultsToCurrentContext(t *testing.T) {
	configPath := factorytest.TempConfigFile(t, []byte(twoContextConfig))
	t.Setenv("ELASTIC_CONFIG", configPath)

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) { received = ctx; return nil, nil })
	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if received.ActiveContext != "prod" {
		t.Errorf("ActiveContext: got %q, want %q", received.ActiveContext, "prod")
	}
}

func TestNew_Context_UnknownName_ErrorListsAvailable(t *testing.T) {
	configPath := factorytest.TempConfigFile(t, []byte(twoContextConfig))
	t.Setenv("ELASTIC_CONFIG", configPath)

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) { return nil, nil })
	err := executeCmd(t, cmd, "--context=missing")
	if err == nil {
		t.Fatal("expected error for unknown context, got nil")
	}
	if !strings.Contains(err.Error(), "not found") {
		t.Errorf("error %q should contain 'not found'", err.Error())
	}
	if !strings.Contains(err.Error(), "prod") {
		t.Errorf("error %q should contain 'prod'", err.Error())
	}
	if !strings.Contains(err.Error(), "dev") {
		t.Errorf("error %q should contain 'dev'", err.Error())
	}
}

func TestNew_Context_NoConfigFile_NoFlag_EmptyActiveContext(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", "")
	t.Setenv("XDG_CONFIG_HOME", t.TempDir())

	var received RunContext
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) { received = ctx; return nil, nil })
	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if received.ActiveContext != "" {
		t.Errorf("ActiveContext: got %q, want empty string", received.ActiveContext)
	}
}

func TestNew_Context_NoConfigFile_WithFlag_Errors(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", "")
	t.Setenv("XDG_CONFIG_HOME", t.TempDir())

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) { return nil, nil })
	err := executeCmd(t, cmd, "--context=anything")
	if err == nil {
		t.Fatal("expected error when --context set but no contexts configured, got nil")
	}
	if !strings.Contains(err.Error(), "not found") {
		t.Errorf("error %q should contain 'not found'", err.Error())
	}
}

// ---- RunContext.Body -----------------------------------------------

// TestNew_Body_NilWhenNoInputConfigured verifies that a NoInput command
// succeeds with no stdin and no --file flag.
func TestNew_Body_NilWhenNoInputConfigured(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(_ RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !handlerCalled {
		t.Error("handler should have been called")
	}
}

// ---- RunContext.Body via stdin ------------------------------------

// executecmdWithStdin runs the named subcommand with r wired as the command's
// stdin via cmd.SetIn, which New() reads via cmd.InOrStdin().
func executeCmdWithStdin(t *testing.T, sub *cobra.Command, r io.Reader, args ...string) error {
	t.Helper()
	sub.SetIn(r)
	return executeCmd(t, sub, args...)
}

// TestNew_Body_PopulatedFromStdin verifies that when a non-empty reader is
// injected as stdin, the command reads it and calls the handler.
func TestNew_Body_PopulatedFromStdin(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	if err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{}`))); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !handlerCalled {
		t.Error("expected handler to be called")
	}
}

// TestNew_Body_NilWhenStdinEmpty verifies that an injected reader with zero
// bytes results in the handler being called with a zero-value input.
func TestNew_Body_NilWhenStdinEmpty(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	if err := executeCmdWithStdin(t, cmd, bytes.NewReader(nil)); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !handlerCalled {
		t.Error("expected handler to be called with empty stdin")
	}
}

// ---- RunContext.Body via --file ------------------------------------

// TestNew_Body_PopulatedFromFile verifies that --file reads the file and
// calls the handler.
func TestNew_Body_PopulatedFromFile(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	filePath := factorytest.TempDataFile(t, []byte(`{}`))
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	if err := executeCmd(t, cmd, "--file", filePath); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !handlerCalled {
		t.Error("expected handler to be called")
	}
}

// TestNew_Body_ErrorWhenFileNotFound verifies that a non-existent --file path
// returns an error and does not invoke the handler.
func TestNew_Body_ErrorWhenFileNotFound(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	err := executeCmd(t, cmd, "--file", "/nonexistent/path/payload.json")
	if err == nil {
		t.Fatal("expected error for missing file, got nil")
	}
	if handlerCalled {
		t.Error("handler must not be called when --file path does not exist")
	}
}

// TestNew_Body_ErrorWhenFileUnreadable verifies that an unreadable --file
// returns an error and does not invoke the handler.
func TestNew_Body_ErrorWhenFileUnreadable(t *testing.T) {
	if os.Getuid() == 0 {
		t.Skip("permission check meaningless as root")
	}
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	filePath := factorytest.TempConfigFileUnreadable(t, []byte(`{}`))

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	err := executeCmd(t, cmd, "--file", filePath)
	if err == nil {
		t.Fatal("expected error for unreadable file, got nil")
	}
	if handlerCalled {
		t.Error("handler must not be called when --file is unreadable")
	}
}

// TestNew_Body_NilWhenFileEmpty verifies that a zero-byte --file succeeds
// without error and the handler is called.
func TestNew_Body_NilWhenFileEmpty(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	filePath := factorytest.TempDataFile(t, []byte{})

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(_ RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	if err := executeCmd(t, cmd, "--file", filePath); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !handlerCalled {
		t.Error("handler should have been called")
	}
}

// ---- Conflict: both stdin and --file provided ----------------------

// TestNew_Body_ErrorWhenBothStdinAndFile verifies that providing data via both
// piped stdin and --file is rejected before the handler is invoked.
func TestNew_Body_ErrorWhenBothStdinAndFile(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	filePath := factorytest.TempDataFile(t, []byte(`{"source":"file"}`))
	stdinData := bytes.NewReader([]byte(`{"source":"stdin"}`))

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, stdinData, "--file", filePath)
	if err == nil {
		t.Fatal("expected error when both stdin and --file provide data, got nil")
	}
	if !strings.Contains(err.Error(), "only one") {
		t.Errorf("error %q should mention 'only one' input source", err.Error())
	}
	if handlerCalled {
		t.Error("handler must not be called when input source is ambiguous")
	}
}

// ---- JSON output format -----------------------------------------------

// executeCmdCapture runs the subcommand under a fresh root with --format
// registered as a persistent flag, captures stdout, and returns it along with
// any error. Extra args follow the subcommand name.
func executeCmdCapture(t *testing.T, sub *cobra.Command, args ...string) (string, error) {
	t.Helper()
	var contextFlag, formatFlag string
	root := &cobra.Command{Use: "root", SilenceErrors: true, SilenceUsage: true}
	root.PersistentFlags().StringVar(&contextFlag, "context", "", "")
	root.PersistentFlags().StringVar(&formatFlag, "format", "text", "")
	root.AddCommand(sub)
	root.SetArgs(append([]string{sub.Use}, args...))
	var buf bytes.Buffer
	root.SetOut(&buf)
	sub.SetOut(&buf)
	err := root.Execute()
	return buf.String(), err
}

// --format=json produces valid JSON envelope with "data" field matching handler return.
func TestNew_FormatJSON_ProducesEnvelopeWithData(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return "elastic version dev", nil
	})

	out, err := executeCmdCapture(t, cmd, "--format=json")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !strings.Contains(out, `"data"`) {
		t.Errorf("output missing 'data' key: %q", out)
	}
	if !strings.Contains(out, "elastic version dev") {
		t.Errorf("output missing data value: %q", out)
	}
	if !strings.Contains(out, `"error":null`) {
		t.Errorf("output missing null error: %q", out)
	}
}

// --format=json stdout output is valid JSON with no preamble or trailing text.
func TestNew_FormatJSON_OutputIsValidJSON(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return "hello", nil
	})

	out, err := executeCmdCapture(t, cmd, "--format=json")
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	trimmed := strings.TrimSpace(out)
	if !jsonValid([]byte(trimmed)) {
		t.Errorf("output is not valid JSON: %q", out)
	}
}

// jsonValid reports whether b is a single valid JSON value with no trailing content.
// jsonValid reports whether b is a single valid JSON value with no trailing
// content (whitespace excepted). dec.More() is not used because it peeks the
// next byte and returns false for trailing } or ], silently accepting malformed
// input. Instead, a second Decode is attempted: io.EOF means nothing follows.
func jsonValid(b []byte) bool {
	if len(b) == 0 {
		return false
	}
	dec := json.NewDecoder(bytes.NewReader(b))
	var v any
	if err := dec.Decode(&v); err != nil {
		return false
	}
	var extra any
	return errors.Is(dec.Decode(&extra), io.EOF)
}

func TestJsonValid(t *testing.T) {
	tests := []struct {
		input string
		want  bool
	}{
		{`{"data":"ok","error":null,"warnings":[]}`, true},
		{`"just a string"`, true},
		{`42`, true},
		{`{}`, true},
		{``, false},
		{`not json`, false},
		// trailing non-whitespace must be rejected
		{`{} trailing`, false},
		{`{"a":1} {"b":2}`, false},
		// trailing } or ] fools dec.More() (it peeks and treats them as
		// container-end markers, returning false); second-decode catches them
		{`{"a":1}}`, false},
		{`[1,2]]`, false},
		{`{"a":1} ]`, false},
		// whitespace-only trailing is acceptable
		{`{"a":1}   `, true},
	}
	for _, tt := range tests {
		got := jsonValid([]byte(tt.input))
		if got != tt.want {
			t.Errorf("jsonValid(%q) = %v; want %v", tt.input, got, tt.want)
		}
	}
}

// no --format flag produces unchanged plain-text output (backward compatibility).
func TestNew_NoFormat_ProducesTextOutput(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return "plain output", nil
	})

	out, err := executeCmdCapture(t, cmd)
	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if strings.TrimSpace(out) != "plain output" {
		t.Errorf("text output: got %q, want %q", strings.TrimSpace(out), "plain output")
	}
}

// --format=text produces identical output to no flag.
func TestNew_FormatText_IdenticalToNoFlag(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	makeCmd := func() *cobra.Command {
		return New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
			return "plain output", nil
		})
	}

	outNoFlag, err := executeCmdCapture(t, makeCmd())
	if err != nil {
		t.Fatalf("no-flag: unexpected error: %v", err)
	}
	outText, err := executeCmdCapture(t, makeCmd(), "--format=text")
	if err != nil {
		t.Fatalf("--format=text: unexpected error: %v", err)
	}
	if outNoFlag != outText {
		t.Errorf("--format=text output differs from no-flag output:\n  no-flag: %q\n  text:    %q", outNoFlag, outText)
	}
}

// ---- Error output in JSON mode ----------------------------------------

// executeCmdCaptureWithStderr runs the subcommand under a fresh root with
// --format and --context registered, captures both stdout and stderr, and
// returns them along with any error.
func executeCmdCaptureWithStderr(t *testing.T, sub *cobra.Command, args ...string) (stdout, stderr string, err error) {
	t.Helper()
	var contextFlag, formatFlag string
	root := &cobra.Command{Use: "root", SilenceErrors: true, SilenceUsage: true}
	root.PersistentFlags().StringVar(&contextFlag, "context", "", "")
	root.PersistentFlags().StringVar(&formatFlag, "format", "text", "")
	root.AddCommand(sub)
	root.SetArgs(append([]string{sub.Use}, args...))
	var outBuf, errBuf bytes.Buffer
	root.SetOut(&outBuf)
	root.SetErr(&errBuf)
	sub.SetOut(&outBuf)
	sub.SetErr(&errBuf)
	err = root.Execute()
	return outBuf.String(), errBuf.String(), err
}

// handler returning error with --format=json produces JSON envelope with
// error field and null data on stdout.
func TestNew_FormatJSON_HandlerError_ProducesErrorEnvelope(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return nil, errors.New("something went wrong")
	})

	stdout, _, err := executeCmdCaptureWithStderr(t, cmd, "--format=json")
	if !errors.Is(err, output.ErrAlreadyRendered) {
		t.Fatalf("expected ErrAlreadyRendered, got: %v", err)
	}
	var env map[string]any
	if jsonErr := json.Unmarshal([]byte(strings.TrimSpace(stdout)), &env); jsonErr != nil {
		t.Fatalf("output is not valid JSON: %v\n%s", jsonErr, stdout)
	}
	if env["data"] != nil {
		t.Errorf("data: got %v, want null", env["data"])
	}
	errObj, ok := env["error"].(map[string]any)
	if !ok {
		t.Fatalf("error field is not an object: %v", env["error"])
	}
	if errObj["code"] != "command_failed" {
		t.Errorf("error.code: got %v, want %q", errObj["code"], "command_failed")
	}
	if !strings.Contains(fmt.Sprintf("%v", errObj["message"]), "something went wrong") {
		t.Errorf("error.message: got %v, want to contain 'something went wrong'", errObj["message"])
	}
}

// handler returning error with --format=json writes nothing to stderr.
func TestNew_FormatJSON_HandlerError_NoStderr(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return nil, errors.New("oops")
	})

	_, stderr, err := executeCmdCaptureWithStderr(t, cmd, "--format=json")
	if !errors.Is(err, output.ErrAlreadyRendered) {
		t.Fatalf("expected ErrAlreadyRendered, got: %v", err)
	}
	if stderr != "" {
		t.Errorf("stderr: got %q, want empty", stderr)
	}
}

// handler returning error without --format=json propagates error to caller
// (which writes "Error: <msg>" to stderr in the real Execute() path).
func TestNew_TextMode_HandlerError_PropagatesError(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	want := errors.New("handler failure text mode")
	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return nil, want
	})

	err := executeCmd(t, cmd)
	if err == nil {
		t.Fatal("expected error, got nil")
	}
	if !errors.Is(err, want) {
		t.Errorf("got %v, want %v", err, want)
	}
}

// config error (unreadable file) with --format=json produces JSON envelope
// with "code": "config_error".
func TestNew_FormatJSON_ConfigError_ProducesConfigErrorCode(t *testing.T) {
	if os.Getuid() == 0 {
		t.Skip("permission check meaningless as root")
	}
	configPath := factorytest.TempConfigFileUnreadable(t, []byte("current_context: prod\n"))
	t.Setenv("ELASTIC_CONFIG", configPath)

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return "ok", nil
	})

	stdout, _, err := executeCmdCaptureWithStderr(t, cmd, "--format=json")
	if !errors.Is(err, output.ErrAlreadyRendered) {
		t.Fatalf("expected ErrAlreadyRendered, got: %v", err)
	}
	var env map[string]any
	if jsonErr := json.Unmarshal([]byte(strings.TrimSpace(stdout)), &env); jsonErr != nil {
		t.Fatalf("output is not valid JSON: %v\n%s", jsonErr, stdout)
	}
	errObj, ok := env["error"].(map[string]any)
	if !ok {
		t.Fatalf("error field is not an object: %v", env["error"])
	}
	if errObj["code"] != "config_error" {
		t.Errorf("error.code: got %v, want %q", errObj["code"], "config_error")
	}
}

// --context=bogus with --format=json produces JSON envelope with
// "code": "context_not_found".
func TestNew_FormatJSON_ContextNotFound_ProducesContextNotFoundCode(t *testing.T) {
	yaml := `
current_context: prod
contexts:
  prod:
    elasticsearch:
      url: https://prod.es.io
`
	configPath := factorytest.TempConfigFile(t, []byte(yaml))
	t.Setenv("ELASTIC_CONFIG", configPath)

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return "ok", nil
	})

	stdout, _, err := executeCmdCaptureWithStderr(t, cmd, "--format=json", "--context=bogus")
	if !errors.Is(err, output.ErrAlreadyRendered) {
		t.Fatalf("expected ErrAlreadyRendered, got: %v", err)
	}
	var env map[string]any
	if jsonErr := json.Unmarshal([]byte(strings.TrimSpace(stdout)), &env); jsonErr != nil {
		t.Fatalf("output is not valid JSON: %v\n%s", jsonErr, stdout)
	}
	errObj, ok := env["error"].(map[string]any)
	if !ok {
		t.Fatalf("error field is not an object: %v", env["error"])
	}
	if errObj["code"] != "context_not_found" {
		t.Errorf("error.code: got %v, want %q", errObj["code"], "context_not_found")
	}
}

// --format=xml produces JSON envelope with "code": "invalid_argument".
func TestNew_FormatXML_ProducesInvalidArgumentCode(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return "ok", nil
	})

	stdout, _, err := executeCmdCaptureWithStderr(t, cmd, "--format=xml")
	if !errors.Is(err, output.ErrAlreadyRendered) {
		t.Fatalf("expected ErrAlreadyRendered, got: %v", err)
	}
	var env map[string]any
	if jsonErr := json.Unmarshal([]byte(strings.TrimSpace(stdout)), &env); jsonErr != nil {
		t.Fatalf("output is not valid JSON: %v\n%s", jsonErr, stdout)
	}
	errObj, ok := env["error"].(map[string]any)
	if !ok {
		t.Fatalf("error field is not an object: %v", env["error"])
	}
	if errObj["code"] != "invalid_argument" {
		t.Errorf("error.code: got %v, want %q", errObj["code"], "invalid_argument")
	}
	if !strings.Contains(fmt.Sprintf("%v", errObj["message"]), "text") {
		t.Errorf("error.message: got %v, want to mention supported values", errObj["message"])
	}
}

// command with --format=json returning nil data produces
// {"data":null,"error":null,"warnings":[]}.
func TestNew_FormatJSON_NilData_ProducesValidEnvelope(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte(`
current_context: test
contexts:
  test:
    elasticsearch:
      url: http://localhost:9200
`)))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return nil, nil
	})

	stdout, _, err := executeCmdCaptureWithStderr(t, cmd, "--format=json")
	if err != nil {
		t.Fatalf("unexpected RunE error: %v", err)
	}
	var env map[string]any
	if jsonErr := json.Unmarshal([]byte(strings.TrimSpace(stdout)), &env); jsonErr != nil {
		t.Fatalf("output is not valid JSON: %v\n%s", jsonErr, stdout)
	}
	if env["data"] != nil {
		t.Errorf("data: got %v, want nil/null", env["data"])
	}
	if env["error"] != nil {
		t.Errorf("error: got %v, want nil/null", env["error"])
	}
	warnings, ok := env["warnings"]
	if !ok {
		t.Fatal("warnings key missing from envelope")
	}
	warningSlice, ok := warnings.([]any)
	if !ok {
		t.Fatalf("warnings: got %T, want []", warnings)
	}
	if len(warningSlice) != 0 {
		t.Errorf("warnings: got %v, want []", warningSlice)
	}
}

// command returning a map as data with no error produces a correct
// JSON envelope (FR-007 — no-output commands still emit valid envelopes).
func TestNew_FormatJSON_MapData_ProducesCorrectEnvelope(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte(`
current_context: test
contexts:
  test:
    elasticsearch:
      url: http://localhost:9200
`)))

	cmd := New[schema.NoInput]("sub", "desc", func(ctx RunContext, _ schema.NoInput) (any, error) {
		return map[string]string{"status": "ok"}, nil
	})

	stdout, _, err := executeCmdCaptureWithStderr(t, cmd, "--format=json")
	if err != nil {
		t.Fatalf("unexpected RunE error: %v", err)
	}

	var env map[string]any
	if jsonErr := json.Unmarshal([]byte(strings.TrimSpace(stdout)), &env); jsonErr != nil {
		t.Fatalf("output is not valid JSON: %v\n%s", jsonErr, stdout)
	}
	if env["error"] != nil {
		t.Errorf("error: got %v, want nil", env["error"])
	}
	data, ok := env["data"].(map[string]any)
	if !ok {
		t.Fatalf("data: got %T (%v), want map", env["data"], env["data"])
	}
	if data["status"] != "ok" {
		t.Errorf("data.status: got %v, want %q", data["status"], "ok")
	}
	warnings, ok := env["warnings"].([]any)
	if !ok {
		t.Fatalf("warnings should be [] not null; got %v", env["warnings"])
	}
	if len(warnings) != 0 {
		t.Errorf("warnings: got %v, want []", warnings)
	}
}

// ---- Schema validation -------------------------------------------

// TestNew_Validation_MissingRequiredField verifies that a missing required field
// is caught before the handler runs and the handler is never called.
func TestNew_Validation_MissingRequiredField(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schematest.SimpleInput]("sub", "desc", func(_ RunContext, _ schematest.SimpleInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{"count":5}`)))

	if handlerCalled {
		t.Error("handler must not be called when required field is missing")
	}
	if err == nil {
		t.Fatal("expected error for missing required field, got nil")
	}
	if !strings.Contains(err.Error(), "name") {
		t.Errorf("error should mention missing field %q, got: %s", "name", err.Error())
	}
}

// TestNew_Validation_WrongType verifies that a type mismatch is caught before
// the handler runs.
func TestNew_Validation_WrongType(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schematest.SimpleInput]("sub", "desc", func(_ RunContext, _ schematest.SimpleInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{"name":"ok","count":"not-a-number"}`)))

	if handlerCalled {
		t.Error("handler must not be called when a field has the wrong type")
	}
	if err == nil {
		t.Fatal("expected error for type mismatch, got nil")
	}
}

// TestNew_Validation_MalformedJSON verifies that syntactically invalid JSON is
// rejected before the handler runs.
func TestNew_Validation_MalformedJSON(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schematest.SimpleInput]("sub", "desc", func(_ RunContext, _ schematest.SimpleInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{bad`)))

	if handlerCalled {
		t.Error("handler must not be called when JSON is malformed")
	}
	if err == nil {
		t.Fatal("expected error for malformed JSON, got nil")
	}
}

// TestNew_Validation_UnknownField verifies that an unknown field is rejected
// before the handler runs and the field name appears in the error.
func TestNew_Validation_UnknownField(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schematest.SimpleInput]("sub", "desc", func(_ RunContext, _ schematest.SimpleInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{"name":"ok","extra":"bad"}`)))

	if handlerCalled {
		t.Error("handler must not be called when an unknown field is present")
	}
	if err == nil {
		t.Fatal("expected error for unknown field, got nil")
	}
	if !strings.Contains(err.Error(), "extra") {
		t.Errorf("error should mention unknown field %q, got: %s", "extra", err.Error())
	}
}

// TestNew_Validation_ValidInput verifies that valid input passes validation and
// the handler is called exactly once.
func TestNew_Validation_ValidInput(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	callCount := 0
	cmd := New[schematest.SimpleInput]("sub", "desc", func(_ RunContext, _ schematest.SimpleInput) (any, error) {
		callCount++
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{"name":"test"}`)))

	if err != nil {
		t.Fatalf("expected no error for valid input, got: %v", err)
	}
	if callCount != 1 {
		t.Errorf("handler call count: got %d, want 1", callCount)
	}
}

// TestNew_Validation_JSONErrorEnvelope verifies that a validation failure in
// JSON mode produces an envelope with code "validation_error" on stdout and
// that the missing field name appears in the error message.
func TestNew_Validation_JSONErrorEnvelope(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	cmd := New[schematest.SimpleInput]("sub", "desc", func(_ RunContext, _ schematest.SimpleInput) (any, error) {
		return nil, nil
	})
	cmd.SetIn(bytes.NewReader([]byte(`{"count":5}`)))

	stdout, err := executeCmdCapture(t, cmd, "--format=json")

	if err == nil {
		t.Fatal("expected error from executeCmdCapture, got nil")
	}

	var env output.Envelope
	if jsonErr := json.Unmarshal([]byte(stdout), &env); jsonErr != nil {
		t.Fatalf("stdout should be a valid JSON envelope, got %q: %v", stdout, jsonErr)
	}
	if env.Error == nil {
		t.Fatal("envelope error field should be set")
	}
	if env.Error.Code != "validation_error" {
		t.Errorf("error code: got %q, want %q", env.Error.Code, "validation_error")
	}
	if !strings.Contains(env.Error.Message, "name") {
		t.Errorf("error message should mention missing field %q, got: %s", "name", env.Error.Message)
	}
}

// TestNew_TypedInput_FieldsPopulated verifies the handler receives a fully
// populated struct when valid JSON is piped.
func TestNew_TypedInput_FieldsPopulated(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	var received schematest.SimpleInput
	cmd := New[schematest.SimpleInput]("sub", "desc", func(_ RunContext, input schematest.SimpleInput) (any, error) {
		received = input
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{"name":"test","count":5}`)))

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if received.Name != "test" {
		t.Errorf("Name: got %q, want %q", received.Name, "test")
	}
	if received.Count != 5 {
		t.Errorf("Count: got %d, want %d", received.Count, 5)
	}
}

// TestNew_TypedInput_NoInputNilBody verifies a NoInput command succeeds with no
// stdin and the handler is called.
func TestNew_TypedInput_NoInputNilBody(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	handlerCalled := false
	cmd := New[schema.NoInput]("sub", "desc", func(_ RunContext, _ schema.NoInput) (any, error) {
		handlerCalled = true
		return nil, nil
	})

	// No stdin — TTY is not wired so readBody returns nil; ValidateAndDecode
	// normalises nil to {} which is valid for NoInput.
	if err := executeCmd(t, cmd); err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if !handlerCalled {
		t.Error("handler should have been called")
	}
}

// TestNew_TypedInput_AllOptionalEmptyBody verifies a command typed with an
// all-optional schema receives a zero-value struct when {} is piped.
func TestNew_TypedInput_AllOptionalEmptyBody(t *testing.T) {
	t.Setenv("ELASTIC_CONFIG", factorytest.TempConfigFile(t, []byte("")))

	var received schematest.AllOptionalInput
	cmd := New[schematest.AllOptionalInput]("sub", "desc", func(_ RunContext, input schematest.AllOptionalInput) (any, error) {
		received = input
		return nil, nil
	})

	err := executeCmdWithStdin(t, cmd, bytes.NewReader([]byte(`{}`)))

	if err != nil {
		t.Fatalf("unexpected error: %v", err)
	}
	if received != (schematest.AllOptionalInput{}) {
		t.Errorf("expected zero-value struct, got %+v", received)
	}
}
