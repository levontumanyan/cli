# elastic

`elastic` is the CLI for Elastic.

## Install / Build

From the repo root:

```bash
go install ./cmd/elastic
```

## Configuration

`elastic` stores its config in the OS-appropriate per-user config directory (via Go's `os.UserConfigDir()`):

- **Linux**: `$XDG_CONFIG_HOME/elastic/config.yaml` (fallback `~/.config/elastic/config.yaml`)
- **macOS**: `~/Library/Application Support/elastic/config.yaml`
- **Windows**: `%AppData%\\elastic\\config.yaml`

On first run, `elastic` will create this file if it does not exist, including a commented-out example configuration.

### Manual migration from older locations

If you previously used `~/.elastic/config.yaml` (or an older `~/.elk/config.yaml`), copy it into the new location above.

## Quickstart

### 1) Create a context

```bash
./elastic config set-context prod \
  --cloud-id 'my-deploy:...' \
  --api-key '...'
```

Or use a direct Elasticsearch URL (self-managed or custom endpoint):

```bash
./elastic config set-context local \
  --elasticsearch-url 'https://localhost:9200' \
  --api-key '...'
```

### 2) Select the active context

```bash
./elastic config use-context prod
./elastic config get-contexts
```

### 3) Run an ES|QL query

```bash
./elastic esql 'FROM logs-* | LIMIT 5'
```

Output formats:

```bash
./elastic esql -f table 'FROM logs-* | LIMIT 5'
./elastic esql -f json  'FROM logs-* | LIMIT 1'
./elastic esql -f csv   'FROM logs-* | LIMIT 10'
./elastic esql -f yaml  'FROM logs-* | LIMIT 5'
```

By default, columns where every value is null are omitted. To include them:

```bash
./elastic esql --null 'FROM logs-* | LIMIT 5'
```

### 4) List resources

```bash
./elastic get indices
./elastic get data-streams
./elastic get remote-clusters
./elastic get slos
./elastic get all
```

Filter by name or glob pattern:

```bash
./elastic get indices 'logs-*'
./elastic get data-streams 'metrics-*'
```

Short aliases work too (`idx`, `ds`, `rc`):

```bash
./elastic get ds
./elastic get rc
```

## Docs

- [`docs/config.md`](docs/config.md)
- [`docs/auth.md`](docs/auth.md) — future OAuth2 / UIAM authentication
- [`docs/api.md`](docs/api.md)
- [`docs/esql.md`](docs/esql.md)
- [`docs/get.md`](docs/get.md)

