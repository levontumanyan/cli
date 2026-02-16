package cmd

import (
	"fmt"
	"sort"

	"github.com/elastic/ectl/internal/config"

	"github.com/spf13/cobra"
)

var configGetContextsCmd = &cobra.Command{
	Use:   "get-contexts",
	Short: "List configured contexts",
	RunE: func(cmd *cobra.Command, args []string) error {
		path, err := config.DefaultPath()
		if err != nil {
			return err
		}
		cfg, err := config.Load(path)
		if err != nil {
			return err
		}

		names := make([]string, 0, len(cfg.Contexts))
		for k := range cfg.Contexts {
			names = append(names, k)
		}
		sort.Strings(names)

		out := cmd.OutOrStdout()
		for _, name := range names {
			marker := " "
			if name == cfg.CurrentContext {
				marker = "*"
			}
			fmt.Fprintf(out, "%s %s\n", marker, name)
		}
		return nil
	},
}

func init() {
	configCmd.AddCommand(configGetContextsCmd)
}
