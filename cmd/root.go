package cmd

import (
	"fmt"
	"os"

	"github.com/elastic/cli/internal/config"
	"github.com/spf13/cobra"
)

var (
	rootContext string
	rootFormat  string
	rootOutput  string
)

var rootCmd = &cobra.Command{
	Use:   "elastic",
	Short: "elastic is a CLI for interacting with Elastic products",
	Long:  "elastic is a developer/operator CLI for interacting with Elastic products, with first-class support for Elastic Cloud.",
	// We print errors ourselves in Execute(); avoid Cobra printing them twice.
	SilenceErrors: true,
	PersistentPreRunE: func(cmd *cobra.Command, args []string) error {
		// Support an alias flag name: --output behaves like --format.
		if rootOutput != "" && rootFormat == "table" {
			rootFormat = rootOutput
		}

		// Avoid creating files for help/completion plumbing.
		switch cmd.Name() {
		case "help", "completion", "__complete":
			return nil
		}

		path, err := config.DefaultPath()
		if err != nil {
			return err
		}
		_, err = config.EnsureInitialized(path)
		return err
	},
}

func Execute() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Fprintln(os.Stderr, "Error:", err)
		os.Exit(1)
	}
}

func init() {
	rootCmd.PersistentFlags().StringVarP(&rootContext, "context", "c", "", "Context name to use (overrides current-context)")
	rootCmd.PersistentFlags().StringVarP(&rootFormat, "format", "f", "table", "Output format: table|json|csv|yaml")
	rootCmd.PersistentFlags().StringVar(&rootOutput, "output", "", "Alias of --format (table|json|csv|yaml)")
}
