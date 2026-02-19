# api

Raw HTTP requests are exposed as product-specific subcommands:

- `elastic es raw ...` for Elasticsearch APIs
- `elastic kb raw ...` for Kibana APIs

## Usage

```bash
elastic es raw <path> [key=value...] [-q key=value...] [-H 'k:v'] [-X METHOD] [-d BODY]
elastic kb raw <path> [key=value...] [-q key=value...] [-H 'k:v'] [-X METHOD] [-d BODY]
```

## Examples

GET an Elasticsearch endpoint:

```bash
elastic es raw /_cluster/health
```

GET with query parameters (either style works):

```bash
elastic es raw /_cat/indices format=json
elastic es raw /_cat/indices -q format=json
```

Pretty-print JSON responses:

```bash
elastic es raw /_cluster/health -f json
```

Call a Kibana API:

```bash
elastic kb raw /api/status -f json
```

POST with a JSON body:

```bash
elastic es raw /_security/user -X POST -d '{"username":"alice"}' -H 'Content-Type: application/json' -f json
```

