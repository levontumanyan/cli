package cmd

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var (
	rootContext string
	rootFormat  string
	rootOutput  string
)

var rootCmd = &cobra.Command{
	Use:   "ectl",
	Short: "ectl is the CLI for Elastic",
	Long:  "ectl is the CLI for Elastic.",
	PersistentPreRun: func(cmd *cobra.Command, args []string) {
		// Support an alias flag name: --output behaves like --format.
		if rootOutput != "" && rootFormat == "table" {
			rootFormat = rootOutput
		}
	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func init() {
	rootCmd.PersistentFlags().StringVarP(&rootContext, "context", "c", "", "Context name to use (overrides current-context)")
	rootCmd.PersistentFlags().StringVarP(&rootFormat, "format", "f", "table", "Output format: table|json|csv")
	rootCmd.PersistentFlags().StringVar(&rootOutput, "output", "", "Alias of --format (table|json|csv)")
}
