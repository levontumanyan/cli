# Configuration

`ectl` reads and writes a single YAML config file containing contexts and the active context.

## Config file location

`ectl` uses the OS-appropriate per-user config directory (via Go's `os.UserConfigDir()`):

- **Linux**: `$XDG_CONFIG_HOME/ectl/config.yaml` (fallback `~/.config/ectl/config.yaml`)
- **macOS**: `~/Library/Application Support/ectl/config.yaml`
- **Windows**: `%AppData%\\ectl\\config.yaml`

On first run, `ectl` will create this file if it does not exist, including a commented-out example configuration.

## Schema

```yaml
current-context: prod
contexts:
  prod:
    cloud_id: "deployment-name:base64..."
    api_key: "encoded-api-key"
  local:
    elasticsearch_url: "https://localhost:9200"
    kibana_url: "https://localhost:5601"   # optional; required for Kibana-only APIs like SLOs
    api_key: "encoded-api-key"
```

## Fields

- **`current-context`**: Name of the default context to use when `--context` is not provided.
- **`contexts.<name>.cloud_id`**: Elastic Cloud ID for a deployment/project. Used to derive the Elasticsearch endpoint URL.
- **`contexts.<name>.elasticsearch_url`**: Direct Elasticsearch base URL. If set, it overrides `cloud_id` URL derivation.
- **`contexts.<name>.kibana_url`**: Optional Kibana base URL. If omitted, `ectl` derives it from `cloud_id` (preferred) or from an Elastic Cloud-style `elasticsearch_url` when possible.
- **`contexts.<name>.api_key`**: API key used for requests (sent as `Authorization: ApiKey ...`).

> **Future**: OAuth2 / UIAM-based authentication (client credentials, authorization code with PKCE, and OIDC token exchange) will be supported via an `auth` sub-object in the context. See [`docs/auth.md`](auth.md) for the full design.

## Commands

Create/update a context:

```bash
ectl config set-context prod --cloud-id '...' --api-key '...'
```

Select the active context:

```bash
ectl config use-context prod
```

List contexts:

```bash
ectl config get-contexts
```

