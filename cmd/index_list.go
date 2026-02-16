package cmd

import (
	"fmt"
	"strings"

	"github.com/spf13/cobra"
)

var indexListKind string

var indexListCmd = &cobra.Command{
	Use:          "list",
	Aliases:      []string{"ls"},
	Short:        "List indices or data streams",
	Deprecated:   "use `ectl get <resource>` (e.g. `ectl get indices` or `ectl get data-streams`)",
	SilenceUsage: true,
	RunE: func(cmd *cobra.Command, args []string) error {
		kind, err := normalizeIndexListKind(indexListKind)
		if err != nil {
			return err
		}
		// Support passing name/pattern args, e.g. `ectl index list -k indices logs-*`.
		return runGet(cmd.OutOrStdout(), kind, args, rootFormat)
	},
}

func init() {
	indexCmd.AddCommand(indexListCmd)
	indexListCmd.Flags().StringVarP(&indexListKind, "kind", "k", "all", "What to list: all|indices|data-streams")
}

func normalizeIndexListKind(s string) (string, error) {
	s = strings.ToLower(strings.TrimSpace(s))
	switch s {
	case "", "all":
		return "all", nil
	case "indices", "index", "idx":
		return "indices", nil
	case "data-streams", "datastreams", "data_streams", "ds":
		return "data-streams", nil
	default:
		return "", fmt.Errorf("invalid --kind %q (expected all|indices|data-streams)", s)
	}
}
