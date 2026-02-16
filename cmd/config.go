package cmd

import "github.com/spf13/cobra"

var configCmd = &cobra.Command{
	Use:   "config",
	Short: "Manage ectl CLI configuration",
}

func init() {
	rootCmd.AddCommand(configCmd)
}
