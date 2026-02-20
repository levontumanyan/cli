package client

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net"
	"net/http"
	"net/url"
	"strings"
	"time"

	"github.com/elastic/cli/internal/config"
)

// KibanaClient is a minimal client for Kibana's HTTP APIs.
type KibanaClient struct {
	baseURL string
	apiKey  string
	http    *http.Client
}

func (c *KibanaClient) BaseURL() string { return c.baseURL }
func (c *KibanaClient) APIKey() string  { return c.apiKey }

func NewKibanaFromContext(ctx config.Context) (*KibanaClient, error) {
	baseURL := strings.TrimSpace(ctx.KibanaURL)
	if baseURL == "" {
		// Prefer Cloud ID if present since it explicitly contains the Kibana ID.
		if strings.TrimSpace(ctx.CloudID) != "" {
			u, err := kibanaURLFromCloudID(ctx.CloudID)
			if err != nil {
				return nil, err
			}
			baseURL = u
		} else if strings.TrimSpace(ctx.ElasticsearchURL) != "" {
			u, err := kibanaURLFromElasticsearchURL(ctx.ElasticsearchURL)
			if err != nil {
				return nil, err
			}
			baseURL = u
		}
	}
	if baseURL == "" {
		return nil, errors.New("context must set kibana_url or provide cloud_id / elasticsearch_url that can be used to derive it")
	}

	u, err := url.Parse(baseURL)
	if err != nil {
		return nil, fmt.Errorf("invalid kibana url: %w", err)
	}
	if u.Scheme == "" || u.Host == "" {
		return nil, fmt.Errorf("invalid kibana url (must include scheme and host): %q", baseURL)
	}
	if strings.TrimSpace(ctx.APIKey) == "" {
		return nil, errors.New("context missing api_key")
	}

	return &KibanaClient{
		baseURL: strings.TrimRight(baseURL, "/"),
		apiKey:  strings.TrimSpace(ctx.APIKey),
		http: &http.Client{
			Timeout: 30 * time.Second,
		},
	}, nil
}

// ListSLOs lists SLO definitions via the Kibana Observability SLO API.
//
// It returns the raw SLO objects as a slice of maps so callers can render JSON/YAML
// without losing fields across Kibana versions.
func (c *KibanaClient) ListSLOs(ctx context.Context) ([]map[string]any, error) {
	const maxPages = 200
	requestedPerPage := 500

	all := make([]map[string]any, 0)
	total := -1
	seen := map[string]struct{}{}

	for page := 1; page <= maxPages; page++ {
		q := url.Values{}
		q.Set("page", fmt.Sprint(page))
		q.Set("perPage", fmt.Sprint(requestedPerPage))

		b, err := c.get(ctx, "/api/observability/slos", q)
		if err != nil {
			return nil, err
		}

		var payload map[string]any
		if err := json.Unmarshal(b, &payload); err != nil {
			return nil, fmt.Errorf("parse kibana slos response: %w", err)
		}

		if total < 0 {
			if t, ok := payload["total"]; ok {
				switch v := t.(type) {
				case float64:
					total = int(v)
				case int:
					total = v
				}
			}
		}

		resultsAny, ok := payload["results"]
		if !ok {
			// Older/alternate shapes sometimes use "items".
			resultsAny, ok = payload["items"]
		}
		if !ok {
			return nil, fmt.Errorf("unexpected kibana slos response: missing results")
		}

		resultsSlice, ok := resultsAny.([]any)
		if !ok {
			return nil, fmt.Errorf("unexpected kibana slos response: results is not an array")
		}

		if len(resultsSlice) == 0 {
			break
		}

		newThisPage := 0
		for _, item := range resultsSlice {
			m, ok := item.(map[string]any)
			if !ok {
				continue
			}

			// De-dupe and guard against APIs that ignore page params.
			key := ""
			if s, ok := m["id"].(string); ok {
				key = s
			}
			if key == "" {
				// encoding/json orders map keys deterministically.
				if bb, err := json.Marshal(m); err == nil {
					key = string(bb)
				}
			}
			if key != "" {
				if _, ok := seen[key]; ok {
					continue
				}
				seen[key] = struct{}{}
			}

			all = append(all, m)
			newThisPage++
		}

		if newThisPage == 0 {
			// Either Kibana is repeating the same page, or we're seeing only dupes.
			break
		}

		if total >= 0 && len(all) >= total {
			break
		}
	}

	return all, nil
}

// ListSLODefinitions lists raw SLO definition saved objects from Kibana.
//
// This is useful when you want the underlying definition shape (attributes) rather than
// the SLO list API which may include computed summary fields depending on Kibana version.
func (c *KibanaClient) ListSLODefinitions(ctx context.Context) ([]map[string]any, error) {
	const maxPages = 200
	requestedPerPage := 10000

	all := make([]map[string]any, 0)
	total := -1
	seen := map[string]struct{}{}

	for page := 1; page <= maxPages; page++ {
		q := url.Values{}
		q.Set("type", "slo")
		q.Set("page", fmt.Sprint(page))
		q.Set("per_page", fmt.Sprint(requestedPerPage))

		b, err := c.get(ctx, "/api/saved_objects/_find", q)
		if err != nil {
			return nil, err
		}

		var payload map[string]any
		if err := json.Unmarshal(b, &payload); err != nil {
			return nil, fmt.Errorf("parse kibana saved objects response: %w", err)
		}

		if total < 0 {
			if t, ok := payload["total"]; ok {
				switch v := t.(type) {
				case float64:
					total = int(v)
				case int:
					total = v
				}
			}
		}

		itemsAny, ok := payload["saved_objects"]
		if !ok {
			return nil, fmt.Errorf("unexpected kibana saved objects response: missing saved_objects")
		}
		items, ok := itemsAny.([]any)
		if !ok {
			return nil, fmt.Errorf("unexpected kibana saved objects response: saved_objects is not an array")
		}
		if len(items) == 0 {
			break
		}

		newThisPage := 0
		for _, item := range items {
			m, ok := item.(map[string]any)
			if !ok {
				continue
			}

			key := ""
			if s, ok := m["id"].(string); ok {
				key = s
			}
			if key != "" {
				if _, ok := seen[key]; ok {
					continue
				}
				seen[key] = struct{}{}
			}

			all = append(all, m)
			newThisPage++
		}

		if newThisPage == 0 {
			break
		}
		if total >= 0 && len(all) >= total {
			break
		}
	}

	return all, nil
}

// TaskManagerHealth gets the Kibana task manager health status.
//
// It returns a raw map to avoid binding to a specific Kibana version's schema.
func (c *KibanaClient) TaskManagerHealth(ctx context.Context) (map[string]any, error) {
	b, err := c.get(ctx, "/api/task_manager/_health", nil)
	if err != nil {
		return nil, err
	}

	var out map[string]any
	if err := json.Unmarshal(b, &out); err != nil {
		return nil, fmt.Errorf("parse kibana task manager health response: %w", err)
	}
	if out == nil {
		out = map[string]any{}
	}
	return out, nil
}

func (c *KibanaClient) get(ctx context.Context, p string, q url.Values) ([]byte, error) {
	u := c.baseURL + p
	if len(q) > 0 {
		u += "?" + q.Encode()
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodGet, u, nil)
	if err != nil {
		return nil, fmt.Errorf("create request: %w", err)
	}
	req.Header.Set("Authorization", "ApiKey "+c.apiKey)
	req.Header.Set("Accept", "application/json")
	// Not required for GET, but harmless and helps with some Kibana setups.
	req.Header.Set("kbn-xsrf", "elastic")

	resp, err := c.http.Do(req)
	if err != nil {
		return nil, fmt.Errorf("request failed: %w", err)
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("read response: %w", err)
	}
	if resp.StatusCode >= 400 {
		msg := strings.TrimSpace(string(b))
		if msg == "" {
			msg = resp.Status
		}
		return nil, fmt.Errorf("kibana error (%s): %s", resp.Status, msg)
	}
	return b, nil
}

func kibanaURLFromCloudID(cloudID string) (string, error) {
	cloudID = strings.TrimSpace(cloudID)
	if cloudID == "" {
		return "", errors.New("cloud_id is empty")
	}

	parts := strings.SplitN(cloudID, ":", 2)
	payload := cloudID
	if len(parts) == 2 {
		payload = parts[1]
	}

	decoded, err := decodeBase64String(payload)
	if err != nil {
		return "", fmt.Errorf("decode cloud_id: %w", err)
	}

	segments := strings.Split(decoded, "$")
	if len(segments) < 3 {
		return "", fmt.Errorf("unexpected cloud_id payload: %q", decoded)
	}
	domain := segments[0]
	kbID := segments[2]
	if domain == "" || kbID == "" {
		return "", fmt.Errorf("unexpected cloud_id payload: %q", decoded)
	}
	return fmt.Sprintf("https://%s.%s:443", kbID, domain), nil
}

func kibanaURLFromElasticsearchURL(esURL string) (string, error) {
	esURL = strings.TrimSpace(esURL)
	if esURL == "" {
		return "", errors.New("elasticsearch url is empty")
	}

	u, err := url.Parse(esURL)
	if err != nil {
		return "", fmt.Errorf("invalid elasticsearch url: %w", err)
	}
	if u.Scheme == "" || u.Host == "" {
		return "", fmt.Errorf("invalid elasticsearch url (must include scheme and host): %q", esURL)
	}

	host := u.Hostname()
	port := u.Port()

	if !strings.Contains(host, ".es.") {
		return "", fmt.Errorf("cannot derive kibana url from elasticsearch host %q (expected Elastic Cloud host containing .es.); set kibana_url explicitly", host)
	}

	kbHost := strings.Replace(host, ".es.", ".kb.", 1)
	if port != "" {
		u.Host = net.JoinHostPort(kbHost, port)
	} else {
		u.Host = kbHost
	}

	return u.String(), nil
}
