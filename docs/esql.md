# ES|QL

The `elastic esql` command runs an ES|QL query against the selected Elasticsearch endpoint.

## Usage

```bash
elastic esql '<query>'
```

Examples:

```bash
elastic esql 'FROM logs-* | LIMIT 5'
elastic esql 'FROM logs-* | WHERE @timestamp > NOW() - 1 hour | LIMIT 10'
elastic esql 'FROM metrics-* | STATS avg_cpu = AVG(system.cpu.total.pct) BY host.name | SORT avg_cpu DESC | LIMIT 10'
```

## Selecting a context

Use the active context:

```bash
elastic config use-context prod
elastic esql 'FROM logs-* | LIMIT 5'
```

Override per invocation:

```bash
elastic esql -c staging 'FROM logs-* | LIMIT 5'
```

## Output formats

Use `--format` / `-f` (or `--output` as an alias):

- `table` (default): terminal table
- `json`: pretty-printed JSON response
- `csv`: CSV with a header row
- `yaml`: YAML list of records

Examples:

```bash
elastic esql -f table 'FROM logs-* | LIMIT 5'
elastic esql -f json  'FROM logs-* | LIMIT 1'
elastic esql -f csv   'FROM logs-* | LIMIT 10'
elastic esql -f yaml  'FROM logs-* | LIMIT 5'
```

## Null handling

By default, columns where every value is null are omitted from the output. To include them, pass `--null`:

```bash
elastic esql --null 'FROM logs-* | LIMIT 5'
```

