package cmd

import (
	"encoding/json"
	"fmt"

	"github.com/elastic/cli/internal/client"
	"github.com/spf13/cobra"
)

var abMCPNamespace string

var abMCPCmd = &cobra.Command{
	Use:   "mcp",
	Short: "MCP server utilities",
}

var abMCPConfigCmd = &cobra.Command{
	Use:   "config",
	Short: "Print MCP client configuration JSON for tools like Cursor, Claude Desktop, and VS Code",
	Long: `Generate the MCP client configuration JSON that can be pasted into
Cursor, Claude Desktop, VS Code, or any other MCP-compatible client.

The output uses "elastic ab mcp proxy" as the stdio transport.`,
	SilenceUsage: true,
	RunE: func(cmd *cobra.Command, args []string) error {
		// Validate that the context is reachable (catches config errors early).
		if _, err := abKibanaClient(); err != nil {
			return err
		}

		proxyArgs := []string{"ab", "mcp", "proxy"}
		if rootContext != "" {
			proxyArgs = append(proxyArgs, "--context", rootContext)
		}
		if abSpace != "" {
			proxyArgs = append(proxyArgs, "--space", abSpace)
		}
		if abMCPNamespace != "" {
			proxyArgs = append(proxyArgs, "--namespace", abMCPNamespace)
		}

		cfg := map[string]any{
			"mcpServers": map[string]any{
				"elastic-agent-builder": map[string]any{
					"command": "elastic",
					"args":    proxyArgs,
				},
			},
		}

		b, err := json.MarshalIndent(cfg, "", "  ")
		if err != nil {
			return err
		}
		_, err = fmt.Fprintln(cmd.OutOrStdout(), string(b))
		return err
	},
}

func buildMCPURL(kb *client.KibanaClient, space, namespace string) string {
	u := kb.BaseURL()
	if space != "" {
		u += "/s/" + space
	}
	u += "/api/agent_builder/mcp"
	if namespace != "" {
		u += "?namespace=" + namespace
	}
	return u
}

func init() {
	agentBuilderCmd.AddCommand(abMCPCmd)
	abMCPCmd.AddCommand(abMCPConfigCmd)

	abMCPCmd.PersistentFlags().StringVar(&abMCPNamespace, "namespace", "", "Comma-separated list of namespaces to filter tools")
}
