# get

The `elastic get` command lists Elasticsearch resources (kubelastic-style).

## Usage

```bash
elastic get <resource> [name|pattern...]
```

## Resources

| Resource | Aliases |
|---|---|
| `indices` | `index`, `idx` |
| `data-streams` | `datastreams`, `ds` |
| `remote-clusters` | `remoteclusters`, `remote`, `rc` |
| `slos` | `slo` |
| `slo-definitions` | `slo-definition`, `slo-defs`, `slo-def` |
| `all` | _(default when no resource given is an error)_ |

> Note: `elastic get slos` queries the Kibana API. If `kibana_url` is not set, `elastic` derives it from `cloud_id` (preferred) or from an Elastic Cloud-style `elasticsearch_url` when possible.

> Note: `elastic get slo-definitions` queries Kibana's Saved Objects API (`type=slo`) to show raw definitions.

## Examples

```bash
elastic get indices
elastic get data-streams
elastic get remote-clusters
elastic get slos
elastic get slo-definitions
elastic get all
```

Filter by name or glob pattern:

```bash
elastic get indices 'logs-*'
elastic get data-streams 'metrics-*'
elastic get rc 'cluster-*'
```

Multiple patterns are supported:

```bash
elastic get indices 'logs-*' 'metrics-*'
```

## Selecting a context

Use the active context:

```bash
elastic config use-context prod
elastic get indices
```

Override per invocation:

```bash
elastic get -c staging indices
```

## Output formats

Use `--format` / `-f` (or `--output` as an alias):

- `table` (default): terminal table
- `json`: pretty-printed JSON response
- `csv`: CSV with a header row (requires a specific resource, not `all`)
- `yaml`: YAML output

```bash
elastic get indices -f json
elastic get data-streams -f csv
elastic get all -f yaml
```

## Legacy command

The older `elastic index list` command still works but is deprecated. Use `elastic get` instead:

```bash
# deprecated
elastic index list -k indices

# recommended
elastic get indices
```
