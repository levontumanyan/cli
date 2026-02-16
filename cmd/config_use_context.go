package cmd

import (
	"errors"
	"fmt"
	"strings"

	"ectl/internal/config"

	"github.com/spf13/cobra"
)

var configUseContextCmd = &cobra.Command{
	Use:   "use-context <name>",
	Short: "Set the current context",
	Args:  cobra.ExactArgs(1),
	RunE: func(cmd *cobra.Command, args []string) error {
		name := strings.TrimSpace(args[0])
		if name == "" {
			return errors.New("context name is required")
		}

		path, err := config.DefaultPath()
		if err != nil {
			return err
		}
		cfg, err := config.Load(path)
		if err != nil {
			return err
		}

		if _, ok := cfg.Contexts[name]; !ok {
			return fmt.Errorf("context %q not found", name)
		}

		cfg.CurrentContext = name
		if err := config.Save(path, cfg); err != nil {
			return err
		}

		fmt.Fprintf(cmd.OutOrStdout(), "Switched to context %q\n", name)
		return nil
	},
}

func init() {
	configCmd.AddCommand(configUseContextCmd)
}
