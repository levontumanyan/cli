package cmd

import "github.com/spf13/cobra"

var esCmd = &cobra.Command{
	Use:   "es",
	Short: "Elasticsearch operations",
}

var kbCmd = &cobra.Command{
	Use:   "kb",
	Short: "Kibana operations",
}

func init() {
	rootCmd.AddCommand(esCmd)
	rootCmd.AddCommand(kbCmd)
}
