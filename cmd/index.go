package cmd

import "github.com/spf13/cobra"

var indexCmd = &cobra.Command{
	Use:        "index",
	Short:      "Interact with indices and data streams",
	Deprecated: "use `ectl get ...` (e.g. `ectl get indices`)",
	Hidden:     true,
}

func init() {
	rootCmd.AddCommand(indexCmd)
}
