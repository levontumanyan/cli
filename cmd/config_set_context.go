package cmd

import (
	"errors"
	"fmt"
	"strings"

	"github.com/elastic/ectl/internal/config"

	"github.com/spf13/cobra"
)

var (
	setContextCloudID          string
	setContextAPIKey           string
	setContextElasticsearchURL string
)

var configSetContextCmd = &cobra.Command{
	Use:   "set-context <name>",
	Short: "Create or update a context",
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

		ctx := cfg.Contexts[name]
		if setContextCloudID != "" {
			ctx.CloudID = strings.TrimSpace(setContextCloudID)
		}
		if setContextAPIKey != "" {
			ctx.APIKey = strings.TrimSpace(setContextAPIKey)
		}
		if setContextElasticsearchURL != "" {
			ctx.ElasticsearchURL = strings.TrimSpace(setContextElasticsearchURL)
		}

		if ctx.APIKey == "" {
			return errors.New("--api-key is required (or set previously for this context)")
		}
		if ctx.ElasticsearchURL == "" && ctx.CloudID == "" {
			return errors.New("either --elasticsearch-url or --cloud-id is required (or set previously for this context)")
		}

		cfg.Contexts[name] = ctx
		if cfg.CurrentContext == "" {
			cfg.CurrentContext = name
		}

		if err := config.Save(path, cfg); err != nil {
			return err
		}

		fmt.Fprintf(cmd.OutOrStdout(), "Context %q saved\n", name)
		return nil
	},
}

func init() {
	configCmd.AddCommand(configSetContextCmd)

	configSetContextCmd.Flags().StringVar(&setContextCloudID, "cloud-id", "", "Elastic Cloud ID for the deployment/project")
	configSetContextCmd.Flags().StringVar(&setContextAPIKey, "api-key", "", "Elastic API key (stored in config file)")
	configSetContextCmd.Flags().StringVar(&setContextElasticsearchURL, "elasticsearch-url", "", "Direct Elasticsearch URL (overrides cloud-id-derived URL)")
}
