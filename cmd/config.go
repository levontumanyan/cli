package cmd

import "github.com/spf13/cobra"

var configCmd = &cobra.Command{
	Use:     "config",
	Short:   "Manage elastic CLI configuration",
	Aliases: []string{"cfg"},
}

func init() {
	rootCmd.AddCommand(configCmd)
}
