package client

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"

	"ectl/internal/config"
)

type Client struct {
	baseURL string
	apiKey  string
	http    *http.Client
}

type ESQLColumn struct {
	Name string `json:"name"`
	Type string `json:"type"`
}

type ESQLResponse struct {
	ID        string       `json:"id,omitempty"`
	IsRunning bool         `json:"is_running,omitempty"`
	Took      int          `json:"took,omitempty"`
	IsPartial bool         `json:"is_partial,omitempty"`
	Columns   []ESQLColumn `json:"columns,omitempty"`
	Values    [][]any      `json:"values,omitempty"`
}

type ESQLQueryRequest struct {
	Query string `json:"query"`
}

func NewFromContext(ctx config.Context) (*Client, error) {
	baseURL := strings.TrimSpace(ctx.ElasticsearchURL)
	if baseURL == "" {
		if strings.TrimSpace(ctx.CloudID) == "" {
			return nil, errors.New("context must set either elasticsearch_url or cloud_id")
		}
		u, err := elasticsearchURLFromCloudID(ctx.CloudID)
		if err != nil {
			return nil, err
		}
		baseURL = u
	}

	u, err := url.Parse(baseURL)
	if err != nil {
		return nil, fmt.Errorf("invalid elasticsearch url: %w", err)
	}
	if u.Scheme == "" || u.Host == "" {
		return nil, fmt.Errorf("invalid elasticsearch url (must include scheme and host): %q", baseURL)
	}
	if strings.TrimSpace(ctx.APIKey) == "" {
		return nil, errors.New("context missing api_key")
	}

	return &Client{
		baseURL: strings.TrimRight(baseURL, "/"),
		apiKey:  strings.TrimSpace(ctx.APIKey),
		http: &http.Client{
			Timeout: 30 * time.Second,
		},
	}, nil
}

func (c *Client) ESQLQuery(ctx context.Context, query string) (ESQLResponse, []byte, error) {
	body, err := json.Marshal(ESQLQueryRequest{Query: query})
	if err != nil {
		return ESQLResponse{}, nil, fmt.Errorf("marshal request: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, http.MethodPost, c.baseURL+"/_query", bytes.NewReader(body))
	if err != nil {
		return ESQLResponse{}, nil, fmt.Errorf("create request: %w", err)
	}
	req.Header.Set("Authorization", "ApiKey "+c.apiKey)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Accept", "application/json")

	resp, err := c.http.Do(req)
	if err != nil {
		return ESQLResponse{}, nil, fmt.Errorf("request failed: %w", err)
	}
	defer resp.Body.Close()

	b, err := io.ReadAll(resp.Body)
	if err != nil {
		return ESQLResponse{}, nil, fmt.Errorf("read response: %w", err)
	}

	if resp.StatusCode >= 400 {
		msg := strings.TrimSpace(string(b))
		if msg == "" {
			msg = resp.Status
		}
		return ESQLResponse{}, b, fmt.Errorf("elasticsearch error (%s): %s", resp.Status, msg)
	}

	var out ESQLResponse
	if err := json.Unmarshal(b, &out); err != nil {
		return ESQLResponse{}, b, fmt.Errorf("parse response: %w", err)
	}
	return out, b, nil
}

func elasticsearchURLFromCloudID(cloudID string) (string, error) {
	cloudID = strings.TrimSpace(cloudID)
	if cloudID == "" {
		return "", errors.New("cloud_id is empty")
	}

	// cloud_id is "<label>:<base64(domain$es$kibana)>"
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
	if len(segments) < 2 {
		return "", fmt.Errorf("unexpected cloud_id payload: %q", decoded)
	}
	domain := segments[0]
	esID := segments[1]
	if domain == "" || esID == "" {
		return "", fmt.Errorf("unexpected cloud_id payload: %q", decoded)
	}

	// Elastic Cloud uses :443 for Elasticsearch via the Cloud ID URL.
	return fmt.Sprintf("https://%s.%s:443", esID, domain), nil
}

func decodeBase64String(s string) (string, error) {
	s = strings.TrimSpace(s)
	if s == "" {
		return "", errors.New("base64 payload empty")
	}

	// Try raw (no padding) first, then standard (with padding).
	if b, err := base64.RawStdEncoding.DecodeString(s); err == nil {
		return string(b), nil
	}
	b, err := base64.StdEncoding.DecodeString(s)
	if err != nil {
		return "", err
	}
	return string(b), nil
}
