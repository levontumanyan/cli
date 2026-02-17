package cmd

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"

	"github.com/elastic/ectl/internal/client"
	"github.com/elastic/ectl/internal/config"

	"go.yaml.in/yaml/v3"

	"github.com/spf13/cobra"
)

var (
	apiMethod  string
	apiData    string
	apiHeaders []string
	apiQuery   []string
)

var apiCmd = &cobra.Command{
	Use:          "api <service> <path> [key=value...]",
	Short:        "Make a raw HTTP request to Elasticsearch or Kibana",
	Args:         cobra.MinimumNArgs(2),
	SilenceUsage: true,
	RunE: func(cmd *cobra.Command, args []string) error {
		service := strings.ToLower(strings.TrimSpace(args[0]))
		p := strings.TrimSpace(args[1])
		if service == "" {
			return errors.New("service is required (es or kb)")
		}
		if p == "" {
			return errors.New("path is required")
		}

		pathOnly, qFromPath, err := splitPathAndQuery(p)
		if err != nil {
			return err
		}

		q := url.Values{}
		mergeQuery(q, qFromPath)
		for _, kv := range apiQuery {
			if err := addQueryKV(q, kv); err != nil {
				return err
			}
		}
		for _, kv := range args[2:] {
			if err := addQueryKV(q, kv); err != nil {
				return err
			}
		}

		h := http.Header{}
		for _, hv := range apiHeaders {
			k, v, err := splitHeaderKV(hv)
			if err != nil {
				return err
			}
			h.Add(k, v)
		}
		if apiData != "" && h.Get("Content-Type") == "" {
			h.Set("Content-Type", "application/json")
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

		method := strings.TrimSpace(apiMethod)
		if method == "" {
			method = http.MethodGet
		}
		body := []byte(apiData)

		var resp client.RawResponse
		switch service {
		case "es", "elasticsearch":
			es, err := client.NewFromContext(ctxCfg)
			if err != nil {
				return err
			}
			resp, err = es.DoRaw(context.Background(), method, pathOnly, q, body, h)
			if err != nil {
				return err
			}
		case "kb", "kibana":
			kb, err := client.NewKibanaFromContext(ctxCfg)
			if err != nil {
				return err
			}
			resp, err = kb.DoRaw(context.Background(), method, pathOnly, q, body, h)
			if err != nil {
				return err
			}
		default:
			return fmt.Errorf("unknown service %q (try: es | kb)", service)
		}

		// Output: raw body by default. If the user selected json/yaml, attempt to parse JSON.
		format := strings.ToLower(strings.TrimSpace(rootFormat))
		switch format {
		case "json":
			if err := prettyPrintJSON(cmd.OutOrStdout(), resp.Body); err == nil {
				break
			}
			_, _ = cmd.OutOrStdout().Write(append(resp.Body, '\n'))
		case "yaml":
			if err := printYAMLFromJSON(cmd.OutOrStdout(), resp.Body); err == nil {
				break
			}
			_, _ = cmd.OutOrStdout().Write(append(resp.Body, '\n'))
		default:
			_, _ = cmd.OutOrStdout().Write(append(resp.Body, '\n'))
		}

		if resp.StatusCode >= 400 {
			return fmt.Errorf("http error: %d", resp.StatusCode)
		}
		return nil
	},
}

func init() {
	rootCmd.AddCommand(apiCmd)
	apiCmd.Flags().StringVarP(&apiMethod, "method", "X", "GET", "HTTP method")
	apiCmd.Flags().StringVarP(&apiData, "data", "d", "", "Request body (string). If set, Content-Type defaults to application/json unless overridden with -H.")
	apiCmd.Flags().StringArrayVarP(&apiHeaders, "header", "H", nil, "Header to add (repeatable), e.g. -H 'k:v'")
	apiCmd.Flags().StringArrayVarP(&apiQuery, "query", "q", nil, "Query param to add (repeatable), e.g. -q 'k=v'")
}

func splitPathAndQuery(p string) (string, url.Values, error) {
	p = strings.TrimSpace(p)
	if p == "" {
		return "", nil, errors.New("path is empty")
	}
	// Allow users to pass either a pure path, or a path+query like "/_search?q=...".
	if strings.HasPrefix(p, "http://") || strings.HasPrefix(p, "https://") {
		u, err := url.Parse(p)
		if err != nil {
			return "", nil, fmt.Errorf("invalid url: %w", err)
		}
		return u.Path, u.Query(), nil
	}
	if !strings.Contains(p, "?") {
		return p, nil, nil
	}
	u, err := url.Parse(p)
	if err != nil {
		return "", nil, fmt.Errorf("invalid path/query: %w", err)
	}
	return u.Path, u.Query(), nil
}

func mergeQuery(dst url.Values, src url.Values) {
	if len(src) == 0 {
		return
	}
	for k, vv := range src {
		for _, v := range vv {
			dst.Add(k, v)
		}
	}
}

func addQueryKV(q url.Values, kv string) error {
	kv = strings.TrimSpace(kv)
	if kv == "" {
		return nil
	}
	k, v, ok := strings.Cut(kv, "=")
	if !ok {
		return fmt.Errorf("invalid query param %q (expected key=value)", kv)
	}
	k = strings.TrimSpace(k)
	v = strings.TrimSpace(v)
	if k == "" {
		return fmt.Errorf("invalid query param %q (empty key)", kv)
	}
	q.Add(k, v)
	return nil
}

func splitHeaderKV(hv string) (string, string, error) {
	hv = strings.TrimSpace(hv)
	if hv == "" {
		return "", "", errors.New("header is empty")
	}
	k, v, ok := strings.Cut(hv, ":")
	if !ok {
		return "", "", fmt.Errorf("invalid header %q (expected k:v)", hv)
	}
	k = http.CanonicalHeaderKey(strings.TrimSpace(k))
	v = strings.TrimSpace(v)
	if k == "" {
		return "", "", fmt.Errorf("invalid header %q (empty key)", hv)
	}
	return k, v, nil
}

func prettyPrintJSON(w io.Writer, b []byte) error {
	var v any
	if err := json.Unmarshal(b, &v); err != nil {
		return err
	}
	out, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return err
	}
	_, err = w.Write(append(out, '\n'))
	return err
}

func printYAMLFromJSON(w io.Writer, b []byte) error {
	var v any
	if err := json.Unmarshal(b, &v); err != nil {
		return err
	}
	return yaml.NewEncoder(w).Encode(v)
}
