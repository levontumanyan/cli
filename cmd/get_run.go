package cmd

import (
	"context"
	"fmt"
	"io"
	"path"
	"sort"
	"strings"

	"github.com/elastic/ectl/internal/client"
	"github.com/elastic/ectl/internal/config"
	"github.com/elastic/ectl/internal/output"
)

// runGet is shared logic for both `ectl get` and legacy `ectl index list`.
func runGet(out io.Writer, resource string, patterns []string, format string) error {
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

	kind, err := normalizeGetResource(resource)
	if err != nil {
		return err
	}

	fmtFormat := output.NormalizeFormat(format)
	if fmtFormat == output.FormatCSV && kind == "all" {
		return fmt.Errorf("format %q requires a specific resource (indices or data-streams), or use -f table", fmtFormat)
	}

	ctx := context.Background()

	if kind == "remote-clusters" {
		info, _, err := cl.RemoteInfo(ctx)
		if err != nil {
			return err
		}
		names := make([]string, 0, len(info))
		for name := range info {
			if matchesAny(name, patterns) {
				names = append(names, name)
			}
		}
		sort.Strings(names)

		// For JSON/YAML, return a stable, filtered map.
		if fmtFormat == output.FormatJSON || fmtFormat == output.FormatYAML {
			filtered := map[string]client.RemoteClusterInfo{}
			for _, name := range names {
				filtered[name] = info[name]
			}
			return output.RenderRows(out, fmtFormat, nil, nil, filtered)
		}

		return output.RenderRows(out, fmtFormat, remoteClustersHeaders(), remoteClustersRows(info, names), nil)
	}

	pattern := "*"
	if len(patterns) > 0 {
		trimmed := make([]string, 0, len(patterns))
		for _, p := range patterns {
			p = strings.TrimSpace(p)
			if p != "" {
				trimmed = append(trimmed, p)
			}
		}
		if len(trimmed) > 0 {
			// Elasticsearch supports comma-separated names/patterns.
			pattern = strings.Join(trimmed, ",")
		}
	}

	resolved, _, err := cl.ResolveIndex(ctx, pattern)
	if err != nil {
		return err
	}

	switch kind {
	case "indices":
		return output.RenderRows(out, fmtFormat, indicesHeaders(), indicesRows(resolved.Indices), resolved.Indices)
	case "data-streams":
		return output.RenderRows(out, fmtFormat, dataStreamsHeaders(), dataStreamsRows(resolved.DataStreams), resolved.DataStreams)
	case "all":
		if fmtFormat == output.FormatJSON || fmtFormat == output.FormatYAML {
			return output.RenderRows(out, fmtFormat, nil, nil, resolved)
		}
		fmt.Fprintln(out, "Indices")
		if err := output.RenderRows(out, fmtFormat, indicesHeaders(), indicesRows(resolved.Indices), nil); err != nil {
			return err
		}
		fmt.Fprintln(out)
		fmt.Fprintln(out, "Data streams")
		return output.RenderRows(out, fmtFormat, dataStreamsHeaders(), dataStreamsRows(resolved.DataStreams), nil)
	default:
		return fmt.Errorf("unexpected resource: %s", kind)
	}
}

func normalizeGetResource(s string) (string, error) {
	s = strings.ToLower(strings.TrimSpace(s))
	switch s {
	case "", "all":
		return "all", nil
	case "indices", "index", "idx":
		return "indices", nil
	case "data-streams", "datastreams", "data_streams", "ds", "data-stream":
		return "data-streams", nil
	case "remote-clusters", "remoteclusters", "remote", "rc":
		return "remote-clusters", nil
	default:
		return "", fmt.Errorf("unknown resource %q (try: indices | data-streams | remote-clusters | all)", s)
	}
}

func matchesAny(name string, patterns []string) bool {
	// No patterns means "all".
	if len(patterns) == 0 {
		return true
	}
	for _, p := range patterns {
		p = strings.TrimSpace(p)
		if p == "" {
			continue
		}
		// Exact match fast path.
		if name == p {
			return true
		}
		// Support kubectl-like globbing with * and ?.
		if ok, _ := path.Match(p, name); ok {
			return true
		}
	}
	return false
}
