# get

The `ectl get` command lists Elasticsearch resources (kubectl-style).

## Usage

```bash
ectl get <resource> [name|pattern...]
```

## Resources

| Resource | Aliases |
|---|---|
| `indices` | `index`, `idx` |
| `data-streams` | `datastreams`, `ds` |
| `remote-clusters` | `remoteclusters`, `remote`, `rc` |
| `all` | _(default when no resource given is an error)_ |

## Examples

```bash
ectl get indices
ectl get data-streams
ectl get remote-clusters
ectl get all
```

Filter by name or glob pattern:

```bash
ectl get indices 'logs-*'
ectl get data-streams 'metrics-*'
ectl get rc 'cluster-*'
```

Multiple patterns are supported:

```bash
ectl get indices 'logs-*' 'metrics-*'
```

## Selecting a context

Use the active context:

```bash
ectl config use-context prod
ectl get indices
```

Override per invocation:

```bash
ectl get -c staging indices
```

## Output formats

Use `--format` / `-f` (or `--output` as an alias):

- `table` (default): terminal table
- `json`: pretty-printed JSON response
- `csv`: CSV with a header row (requires a specific resource, not `all`)
- `yaml`: YAML output

```bash
ectl get indices -f json
ectl get data-streams -f csv
ectl get all -f yaml
```

## Legacy command

The older `ectl index list` command still works but is deprecated. Use `ectl get` instead:

```bash
# deprecated
ectl index list -k indices

# recommended
ectl get indices
```
