package cmd

import (
	"os"

	"github.com/elastic/cli/internal/mcpproxy"
	"github.com/spf13/cobra"
)

var abMCPProxyCmd = &cobra.Command{
	Use:   "proxy",
	Short: "Run a stdio-to-remote MCP server proxy",
	Long: `Start a local MCP proxy that reads JSON-RPC messages from stdin and
forwards them to the remote Kibana MCP endpoint over Streamable HTTP,
writing responses back to stdout.

This lets MCP clients (Cursor, Claude Desktop, VS Code) connect to your
Elastic Agent Builder MCP server without requiring npx or mcp-remote.`,
	SilenceUsage: true,
	RunE: func(cmd *cobra.Command, args []string) error {
		kb, err := abKibanaClient()
		if err != nil {
			return err
		}

		mcpURL := buildMCPURL(kb, abSpace, abMCPNamespace)

		p := &mcpproxy.Proxy{
			URL:    mcpURL,
			APIKey: kb.APIKey(),
			Stdin:  os.Stdin,
			Stdout: os.Stdout,
			Stderr: os.Stderr,
		}

		return p.Run(cmd.Context())
	},
}

func init() {
	abMCPCmd.AddCommand(abMCPProxyCmd)
}
