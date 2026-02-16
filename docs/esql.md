# ES|QL

The `ectl esql` command runs an ES|QL query against the selected Elasticsearch endpoint.

## Usage

```bash
ectl esql '<query>'
```

Examples:

```bash
ectl esql 'FROM logs-* | LIMIT 5'
ectl esql 'FROM logs-* | WHERE @timestamp > NOW() - 1 hour | LIMIT 10'
ectl esql 'FROM metrics-* | STATS avg_cpu = AVG(system.cpu.total.pct) BY host.name | SORT avg_cpu DESC | LIMIT 10'
```

## Selecting a context

Use the active context:

```bash
ectl config use-context prod
ectl esql 'FROM logs-* | LIMIT 5'
```

Override per invocation:

```bash
ectl esql -c staging 'FROM logs-* | LIMIT 5'
```

## Output formats

Use `--format` / `-f` (or `--output` as an alias):

- `table` (default): terminal table
- `json`: pretty-printed JSON response
- `csv`: CSV with a header row
- `yaml`: YAML list of records

Examples:

```bash
ectl esql -f table 'FROM logs-* | LIMIT 5'
ectl esql -f json  'FROM logs-* | LIMIT 1'
ectl esql -f csv   'FROM logs-* | LIMIT 10'
ectl esql -f yaml  'FROM logs-* | LIMIT 5'
```

## Null handling

By default, columns where every value is null are omitted from the output. To include them, pass `--null`:

```bash
ectl esql --null 'FROM logs-* | LIMIT 5'
```

