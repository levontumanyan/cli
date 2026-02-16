package cmd

import (
	"context"
	"errors"
	"fmt"
	"strings"

	"ectl/internal/client"
	"ectl/internal/config"
	"ectl/internal/output"

	"github.com/spf13/cobra"
)

var esqlCmd = &cobra.Command{
	Use:          "esql <query>",
	Short:        "Run an ES|QL query",
	Args:         cobra.ExactArgs(1),
	SilenceUsage: true,
	RunE: func(cmd *cobra.Command, args []string) error {
		query := strings.TrimSpace(args[0])
		if query == "" {
			return errors.New("query is required")
		}

		path, err := config.DefaultPath()
		if err != nil {
			return err
		}
		cfg, err := config.Load(path)
		if err != nil {
			return err
		}

		ctxName := strings.TrimSpace(rootContext)
		if ctxName == "" {
			ctxName = cfg.CurrentContext
		}
		if ctxName == "" {
			return fmt.Errorf("no context selected; run `ectl config set-context <name> ...` and `ectl config use-context <name>`")
		}

		ctxCfg, ok := cfg.Contexts[ctxName]
		if !ok {
			return fmt.Errorf("context %q not found; run `ectl config get-contexts`", ctxName)
		}

		cl, err := client.NewFromContext(ctxCfg)
		if err != nil {
			return err
		}

		resp, raw, err := cl.ESQLQuery(context.Background(), query)
		if err != nil {
			return err
		}

		fmtFormat := output.NormalizeFormat(rootFormat)
		return output.Render(cmd.OutOrStdout(), fmtFormat, resp, raw)
	},
}

func init() {
	rootCmd.AddCommand(esqlCmd)
}
