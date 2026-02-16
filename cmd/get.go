package cmd

import (
	"fmt"

	"github.com/spf13/cobra"
)

var getCmd = &cobra.Command{
	Use:   "get <resource> [name|pattern...]",
	Short: "List resources (kubectl-style)",
	Args: func(cmd *cobra.Command, args []string) error {
		if len(args) == 0 {
			_ = cmd.Help()
			return fmt.Errorf("resource type must be specified (try: indices | data-streams (ds) | remote-clusters (rc) | all)")
		}
		return nil
	},
	SilenceUsage: true,
	ValidArgs: []string{
		"indices", "index", "idx",
		"data-streams", "datastreams", "ds",
		"remote-clusters", "remoteclusters", "remote", "rc",
		"all",
	},
	RunE: func(cmd *cobra.Command, args []string) error {
		resource := args[0]
		patterns := []string{}
		if len(args) > 1 {
			patterns = args[1:]
		}
		return runGet(cmd.OutOrStdout(), resource, patterns, rootFormat)
	},
}

func init() {
	rootCmd.AddCommand(getCmd)
}
