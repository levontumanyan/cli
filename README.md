# ectl

`ectl` is a developer/operator-oriented CLI for interacting with Elastic products, with first-class support for Elastic Cloud.

The initial scope focuses on querying data using ES|QL.

## Install / Build

From the repo root:

```bash
go build -o ectl .
```

## Configuration

`ectl` stores its config in the OS-appropriate per-user config directory (via Go's `os.UserConfigDir()`):

- **Linux**: `$XDG_CONFIG_HOME/ectl/config.yaml` (fallback `~/.config/ectl/config.yaml`)
- **macOS**: `~/Library/Application Support/ectl/config.yaml`
- **Windows**: `%AppData%\\ectl\\config.yaml`

On first run, `ectl` will create this file if it does not exist, including a commented-out example configuration.

### Manual migration from older locations

If you previously used `~/.ectl/config.yaml` (or an older `~/.elk/config.yaml`), copy it into the new location above.

## Quickstart

### 1) Create a context

```bash
./ectl config set-context prod \
  --cloud-id 'my-deploy:...' \
  --api-key '...'
```

Or use a direct Elasticsearch URL (self-managed or custom endpoint):

```bash
./ectl config set-context local \
  --elasticsearch-url 'https://localhost:9200' \
  --api-key '...'
```

### 2) Select the active context

```bash
./ectl config use-context prod
./ectl config get-contexts
```

### 3) Run an ES|QL query

```bash
./ectl esql 'FROM logs-* | LIMIT 5'
```

Output formats:

```bash
./ectl esql -f table 'FROM logs-* | LIMIT 5'
./ectl esql -f json  'FROM logs-* | LIMIT 1'
./ectl esql -f csv   'FROM logs-* | LIMIT 10'
./ectl esql -f yaml  'FROM logs-* | LIMIT 5'
```

By default, columns where every value is null are omitted. To include them:

```bash
./ectl esql --null 'FROM logs-* | LIMIT 5'
```

### 4) List resources

```bash
./ectl get indices
./ectl get data-streams
./ectl get remote-clusters
./ectl get all
```

Filter by name or glob pattern:

```bash
./ectl get indices 'logs-*'
./ectl get data-streams 'metrics-*'
```

Short aliases work too (`idx`, `ds`, `rc`):

```bash
./ectl get ds
./ectl get rc
```

## Docs

- [`docs/config.md`](docs/config.md)
- [`docs/esql.md`](docs/esql.md)
- [`docs/get.md`](docs/get.md)

