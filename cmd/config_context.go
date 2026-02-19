package cmd

import "github.com/spf13/cobra"

var configContextCmd = &cobra.Command{
	Use:     "context",
	Short:   "Manage named connection contexts",
	Aliases: []string{"ctx"},
}

func init() {
	configCmd.AddCommand(configContextCmd)
}
