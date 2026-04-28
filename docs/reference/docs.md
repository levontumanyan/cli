# docs

Search, read, and ask questions about Elastic documentation

## `elastic docs search`

Search Elastic documentation

**Arguments:**

- `<query>` — Search terms

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` | Page number |  | `1` |
| `--size <number>` | Results per page |  | `5` |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic docs ask`

Ask a question about Elastic documentation using AI (single answer)

**Arguments:**

- `<question>` — Question to ask

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic docs chat`

Ask a question about Elastic documentation using AI, with follow-up conversation

**Arguments:**

- `<question>` — Opening question

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic docs read`

Read an Elastic documentation page

**Arguments:**

- `<path>` — Docs path, full elastic.co URL, or search query

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--raw` | Output unrendered markdown instead of formatted output |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---
