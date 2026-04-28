# serverless

Manage Elastic Serverless projects and resources

## `elastic cloud serverless es`

Elastic Serverless elasticsearch commands

| Command | Description |
|---------|-------------|
| `projects` | Manage elasticsearch projects |

### `elastic cloud serverless es projects`

Manage elasticsearch projects

| Command | Description |
|---------|-------------|
| `list` | Get Elasticsearch projects |
| `create` | Create an Elasticsearch project |
| `get` | Get an Elasticsearch project |
| `delete` | Delete an Elasticsearch project |
| `patch` | Update an Elasticsearch project |
| `reset-credentials` | Reset the project credentials |
| `resume` | Resume Elasticsearch project |
| `get-roles` | Get roles for an Elasticsearch project |
| `get-status` | Get the status of an Elasticsearch project |

#### `elastic cloud serverless es projects list`

Get Elasticsearch projects

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--traffic-filter <string>` | Filters the returned list of projects. Only projects associated with the provided traffic_filter will be returned. |  |  |
| `--linked <string>` | Contains a project ID. If specified, the result will be filtered to only those origin projects that are linked to the specified project ID in a cross-project search configuration. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless es projects create`

Create an Elasticsearch project

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |
| `--wait` | Wait for the project to reach "initialized" phase before returning |  |  |

#### `elastic cloud serverless es projects get`

Get an Elasticsearch project

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless es projects delete`

Delete an Elasticsearch project

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless es projects patch`

Update an Elasticsearch project

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-patch.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless es projects reset-credentials`

Reset the project credentials

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-reset-credentials.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless es projects resume`

Resume Elasticsearch project

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-resume.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless es projects get-roles`

Get roles for an Elasticsearch project

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-get-roles.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless es projects get-status`

Get the status of an Elasticsearch project

[JSON Schema](./schemas/elastic-cloud-serverless-es-projects-get-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud serverless observability`

Elastic Serverless observability commands

| Command | Description |
|---------|-------------|
| `projects` | Manage observability projects |

### `elastic cloud serverless observability projects`

Manage observability projects

| Command | Description |
|---------|-------------|
| `list` | Get Observability projects |
| `create` | Create an observability project |
| `get` | Get an Observability project |
| `delete` | Delete an Observability project |
| `patch` | Update an Observability project |
| `reset-credentials` | Reset the project credentials |
| `resume` | Resume Observability project |
| `get-roles` | Get roles for an Observability project |
| `get-status` | Get the status of an Observability project |

#### `elastic cloud serverless observability projects list`

Get Observability projects

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--traffic-filter <string>` | traffic filters associated with this project |  |  |
| `--linked <string>` | Contains a project ID. If specified, the result will be filtered to only those origin projects that are linked to the specified project ID in a cross-project search configuration. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless observability projects create`

Create an observability project

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |
| `--wait` | Wait for the project to reach "initialized" phase before returning |  |  |

#### `elastic cloud serverless observability projects get`

Get an Observability project

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless observability projects delete`

Delete an Observability project

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless observability projects patch`

Update an Observability project

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-patch.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless observability projects reset-credentials`

Reset the project credentials

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-reset-credentials.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless observability projects resume`

Resume Observability project

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-resume.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless observability projects get-roles`

Get roles for an Observability project

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-get-roles.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless observability projects get-status`

Get the status of an Observability project

[JSON Schema](./schemas/elastic-cloud-serverless-observability-projects-get-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud serverless security`

Elastic Serverless security commands

| Command | Description |
|---------|-------------|
| `projects` | Manage security projects |

### `elastic cloud serverless security projects`

Manage security projects

| Command | Description |
|---------|-------------|
| `list` | Get Security projects |
| `create` | Create a security project |
| `get` | Get a Security project |
| `delete` | Delete a Security project |
| `patch` | Update a Security project |
| `reset-credentials` | Reset the project credentials |
| `resume` | Resume Security project |
| `get-roles` | Get roles for a Security project |
| `get-status` | Get the status of a Security project |

#### `elastic cloud serverless security projects list`

Get Security projects

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--traffic-filter <string>` | traffic filters associated with this project |  |  |
| `--linked <string>` | Contains a project ID. If specified, the result will be filtered to only those origin projects that are linked to the specified project ID in a cross-project search configuration. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless security projects create`

Create a security project

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |
| `--wait` | Wait for the project to reach "initialized" phase before returning |  |  |

#### `elastic cloud serverless security projects get`

Get a Security project

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless security projects delete`

Delete a Security project

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless security projects patch`

Update a Security project

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-patch.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless security projects reset-credentials`

Reset the project credentials

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-reset-credentials.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless security projects resume`

Resume Security project

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-resume.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless security projects get-roles`

Get roles for a Security project

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-get-roles.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

#### `elastic cloud serverless security projects get-status`

Get the status of a Security project

[JSON Schema](./schemas/elastic-cloud-serverless-security-projects-get-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud serverless linked-candidate-projects`

Serverless linked-candidate-projects commands

| Command | Description |
|---------|-------------|
| `get-elasticsearch-project-link-candidates` | Get Elasticsearch project link candidates |
| `get-observability-project-link-candidates` | Get Observability project link candidates |
| `get-security-project-link-candidates` | Get Security project link candidates |

### `elastic cloud serverless linked-candidate-projects get-elasticsearch-project-link-candidates`

Get Elasticsearch project link candidates

[JSON Schema](./schemas/elastic-cloud-serverless-linked-candidate-projects-get-elasticsearch-project-link-candidates.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--types <string>` | One or more types of projects to return as link candidates. |  |  |
| `--csp <string>` | The Cloud Service Provider to filter the link candidate projects by. |  |  |
| `--region <string>` | The region to filter the link candidate projects by. |  |  |
| `--name <string>` | The project name to filter the link candidates by. |  |  |
| `--alias <string>` | The project alias to filter the link candidates by. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless linked-candidate-projects get-observability-project-link-candidates`

Get Observability project link candidates

[JSON Schema](./schemas/elastic-cloud-serverless-linked-candidate-projects-get-observability-project-link-candidates.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--types <string>` | One or more types of projects to return as link candidates. |  |  |
| `--csp <string>` | The Cloud Service Provider to filter the link candidate projects by. |  |  |
| `--region <string>` | The region to filter the link candidate projects by. |  |  |
| `--name <string>` | The project name to filter the link candidates by. |  |  |
| `--alias <string>` | The project alias to filter the link candidates by. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless linked-candidate-projects get-security-project-link-candidates`

Get Security project link candidates

[JSON Schema](./schemas/elastic-cloud-serverless-linked-candidate-projects-get-security-project-link-candidates.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--types <string>` | One or more types of projects to return as link candidates. |  |  |
| `--csp <string>` | The Cloud Service Provider to filter the link candidate projects by. |  |  |
| `--region <string>` | The region to filter the link candidate projects by. |  |  |
| `--name <string>` | The project name to filter the link candidates by. |  |  |
| `--alias <string>` | The project alias to filter the link candidates by. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud serverless linked-projects`

Serverless linked-projects commands

| Command | Description |
|---------|-------------|
| `get-elasticsearch-project-can-delete` | Get Elasticsearch project delete status |
| `get-observability-project-can-delete` | Get Observability project delete status |
| `get-security-project-can-delete` | Get Security project delete status |

### `elastic cloud serverless linked-projects get-elasticsearch-project-can-delete`

Get Elasticsearch project delete status

[JSON Schema](./schemas/elastic-cloud-serverless-linked-projects-get-elasticsearch-project-can-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless linked-projects get-observability-project-can-delete`

Get Observability project delete status

[JSON Schema](./schemas/elastic-cloud-serverless-linked-projects-get-observability-project-can-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless linked-projects get-security-project-can-delete`

Get Security project delete status

[JSON Schema](./schemas/elastic-cloud-serverless-linked-projects-get-security-project-can-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the project (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud serverless regions`

Serverless regions commands

| Command | Description |
|---------|-------------|
| `list-regions` | Get regions |
| `get-region` | Get a region |

### `elastic cloud serverless regions list-regions`

Get regions

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless regions get-region`

Get a region

[JSON Schema](./schemas/elastic-cloud-serverless-regions-get-region.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | ID of the region (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud serverless traffic-filters`

Serverless traffic-filters commands

| Command | Description |
|---------|-------------|
| `list-traffic-filters` | List traffic filters |
| `create-traffic-filter` | Create a traffic filter |
| `get-traffic-filter-metadata` | List PrivateLink region metadata |
| `get-traffic-filter` | Retrieves the traffic filter by ID. |
| `delete-traffic-filter` | Delete a traffic filter |
| `patch-traffic-filter` | Updates a traffic filter |

### `elastic cloud serverless traffic-filters list-traffic-filters`

List traffic filters

[JSON Schema](./schemas/elastic-cloud-serverless-traffic-filters-list-traffic-filters.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--include-by-default [value]` | Retrieves a list of resources that have include_by_default set or not set |  |  |
| `--region <string>` | If provided limits the traffic filters to that region only. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless traffic-filters create-traffic-filter`

Create a traffic filter

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless traffic-filters get-traffic-filter-metadata`

List PrivateLink region metadata

[JSON Schema](./schemas/elastic-cloud-serverless-traffic-filters-get-traffic-filter-metadata.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--region <string>` | Filter metadata to a specific region (e.g. aws-eu-west-1, azure-australiaeast). |  |  |
| `--csp <string>` | Filter metadata to a specific cloud service provider (aws, azure, gcp). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless traffic-filters get-traffic-filter`

Retrieves the traffic filter by ID.

[JSON Schema](./schemas/elastic-cloud-serverless-traffic-filters-get-traffic-filter.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The traffic filter ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless traffic-filters delete-traffic-filter`

Delete a traffic filter

[JSON Schema](./schemas/elastic-cloud-serverless-traffic-filters-delete-traffic-filter.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The traffic filter ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud serverless traffic-filters patch-traffic-filter`

Updates a traffic filter

[JSON Schema](./schemas/elastic-cloud-serverless-traffic-filters-patch-traffic-filter.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The traffic filter ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---
