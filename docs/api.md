# api

The `ectl api` command makes raw HTTP requests to either Elasticsearch (`es`) or Kibana (`kb`) using the active context for authentication and base URL resolution.

## Usage

```bash
ectl api <service> <path> [key=value...] [-q key=value...] [-H 'k:v'] [-X METHOD] [-d BODY]
```

## Examples

GET an Elasticsearch endpoint:

```bash
ectl api es /_cluster/health
```

GET with query parameters (either style works):

```bash
ectl api es /_cat/indices format=json
ectl api es /_cat/indices -q format=json
```

Pretty-print JSON responses:

```bash
ectl api es /_cluster/health -f json
```

Call a Kibana API:

```bash
ectl api kb /api/status -f json
```

POST with a JSON body:

```bash
ectl api es /_security/user -X POST -d '{"username":"alice"}' -H 'Content-Type: application/json' -f json
```

