package cmd

import (
	"encoding/json"
	"fmt"
	"io"
	"os"
	"strings"

	"github.com/elastic/cli/internal/client"
	"github.com/elastic/cli/internal/config"
	"github.com/elastic/cli/internal/output"
	"github.com/spf13/cobra"
)

var abSpace string

var agentBuilderCmd = &cobra.Command{
	Use:     "agent-builder",
	Short:   "Elastic Agent Builder operations",
	Aliases: []string{"ab"},
}

func init() {
	rootCmd.AddCommand(agentBuilderCmd)
	agentBuilderCmd.PersistentFlags().StringVar(&abSpace, "space", "", "Kibana space (omit for default space)")
}

// abKibanaClient resolves the active context and returns a KibanaClient.
func abKibanaClient() (*client.KibanaClient, error) {
	path, err := config.DefaultPath()
	if err != nil {
		return nil, err
	}
	cfg, err := config.Load(path)
	if err != nil {
		return nil, err
	}

	ctxName := strings.TrimSpace(rootContext)
	if ctxName == "" {
		ctxName = cfg.CurrentContext
	}
	if ctxName == "" {
		return nil, fmt.Errorf("no context selected; run `elastic config context set <name> ...` and `elastic config context use <name>`")
	}

	ctxCfg, ok := cfg.Contexts[ctxName]
	if !ok {
		return nil, fmt.Errorf("context %q not found; run `elastic config context list`", ctxName)
	}

	return client.NewKibanaFromContext(ctxCfg)
}

// abReadData reads the --data/-d value. If it starts with "@", the rest is
// treated as a file path whose contents are read.
func abReadData(data string) ([]byte, error) {
	data = strings.TrimSpace(data)
	if data == "" {
		return nil, fmt.Errorf("--data/-d is required")
	}
	if strings.HasPrefix(data, "@") {
		b, err := os.ReadFile(strings.TrimPrefix(data, "@"))
		if err != nil {
			return nil, fmt.Errorf("read data file: %w", err)
		}
		return b, nil
	}
	return []byte(data), nil
}

// abOutputJSON renders raw JSON bytes respecting the global --format flag.
func abOutputJSON(w io.Writer, raw []byte) error {
	format := output.NormalizeFormat(rootFormat)
	switch format {
	case output.FormatYAML:
		return printYAMLFromJSON(w, raw)
	default:
		return prettyPrintJSON(w, raw)
	}
}

// abOutputList renders a list response as table/json/yaml/csv.
func abOutputList(w io.Writer, raw []byte, headers []string, rowsFn func([]map[string]any) [][]any) error {
	format := output.NormalizeFormat(rootFormat)

	var items []map[string]any
	if err := json.Unmarshal(raw, &items); err != nil {
		// Some list endpoints wrap results in an object; try common keys.
		var wrapper map[string]json.RawMessage
		if err2 := json.Unmarshal(raw, &wrapper); err2 == nil {
			for _, key := range []string{"agents", "tools", "conversations", "items", "results", "data"} {
				if v, ok := wrapper[key]; ok {
					if err3 := json.Unmarshal(v, &items); err3 == nil {
						break
					}
				}
			}
		}
		if items == nil {
			// Fall back to rendering the raw JSON.
			return abOutputJSON(w, raw)
		}
	}

	if format == output.FormatJSON || format == output.FormatYAML {
		return output.RenderRows(w, format, nil, nil, items)
	}

	return output.RenderRows(w, format, headers, rowsFn(items), items)
}
