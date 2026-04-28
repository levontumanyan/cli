# authentication

Cloud authentication commands

## `elastic cloud authentication get-api-keys`

Get all API keys

[JSON Schema](./schemas/elastic-cloud-authentication-get-api-keys.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--next-page <string>` | Pagination cursor to get the next page of records |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud authentication create-api-key`

Create API key

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud authentication delete-api-keys`

Delete API keys

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud authentication get-api-key`

Get API key

[JSON Schema](./schemas/elastic-cloud-authentication-get-api-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--api-key-id <string>` | The API Key ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud authentication delete-api-key`

Delete API key

[JSON Schema](./schemas/elastic-cloud-authentication-delete-api-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--api-key-id <string>` | The API Key ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---
