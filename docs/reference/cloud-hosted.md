# hosted

Manage Elastic Cloud Hosted deployments

## `elastic cloud hosted billing-costs-analysis`

Cloud hosted billing-costs-analysis commands

| Command | Description |
|---------|-------------|
| `get-costs-overview` | Get costs overview for the organization. Currently unavailable in self-hosted ECE. |
| `get-costs-charts` | Get charts for the organization. Currently unavailable in self-hosted ECE. |
| `get-costs-deployments` | Get deployments costs for the organization. Currently unavailable in self-hosted ECE. |
| `get-costs-charts-by-deployment` | Get charts by deployment. Currently unavailable in self-hosted ECE. |
| `get-costs-items-by-deployment` | Get itemized costs by deployments. Currently unavailable in self-hosted ECE. |
| `get-costs-items` | Get itemized costs for the organization. Currently unavailable in self-hosted ECE. |

### `elastic cloud hosted billing-costs-analysis get-costs-overview`

Get costs overview for the organization. Currently unavailable in self-hosted ECE.

[JSON Schema](./schemas/elastic-cloud-hosted-billing-costs-analysis-get-costs-overview.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the organization (required) |  |  |
| `--from <string>` | A datetime for the beginning of the desired range for which to fetch costs. Defaults to start of current month. |  |  |
| `--to <string>` | A datetime for the end of the desired range for which to fetch costs. Defaults to the current date. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted billing-costs-analysis get-costs-charts`

Get charts for the organization. Currently unavailable in self-hosted ECE.

[JSON Schema](./schemas/elastic-cloud-hosted-billing-costs-analysis-get-costs-charts.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the organization (required) |  |  |
| `--from <string>` | A datetime for the beginning of the desired range for which to fetch costs. Defaults to start of current month. |  |  |
| `--to <string>` | A datetime for the end of the desired range for which to fetch costs. Defaults to the current date. |  |  |
| `--bucketing-strategy <string>` | The desired bucketing strategy for the charts. Defaults to `daily`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted billing-costs-analysis get-costs-deployments`

Get deployments costs for the organization. Currently unavailable in self-hosted ECE.

[JSON Schema](./schemas/elastic-cloud-hosted-billing-costs-analysis-get-costs-deployments.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the organization (required) |  |  |
| `--from <string>` | A datetime for the beginning of the desired range for which to fetch activity. Defaults to start of current month. |  |  |
| `--to <string>` | A datetime for the end of the desired range for which to fetch activity. Defaults to the current date. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted billing-costs-analysis get-costs-charts-by-deployment`

Get charts by deployment. Currently unavailable in self-hosted ECE.

[JSON Schema](./schemas/elastic-cloud-hosted-billing-costs-analysis-get-costs-charts-by-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the organization (required) |  |  |
| `--deployment-id <string>` | Id of a Deployment (required) |  |  |
| `--from <string>` | A datetime for the beginning of the desired range for which to fetch costs. Defaults to start of current month. |  |  |
| `--to <string>` | A datetime for the end of the desired range for which to fetch costs. Defaults to the current date. |  |  |
| `--bucketing-strategy <string>` | The desired bucketing strategy for the charts. Defaults to `daily`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted billing-costs-analysis get-costs-items-by-deployment`

Get itemized costs by deployments. Currently unavailable in self-hosted ECE.

[JSON Schema](./schemas/elastic-cloud-hosted-billing-costs-analysis-get-costs-items-by-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the organization (required) |  |  |
| `--deployment-id <string>` | Id of a Deployment (required) |  |  |
| `--from <string>` | A datetime for the beginning of the desired range for which to fetch costs. Defaults to start of current month. |  |  |
| `--to <string>` | A datetime for the end of the desired range for which to fetch costs. Defaults to the current date. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted billing-costs-analysis get-costs-items`

Get itemized costs for the organization. Currently unavailable in self-hosted ECE.

[JSON Schema](./schemas/elastic-cloud-hosted-billing-costs-analysis-get-costs-items.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the organization (required) |  |  |
| `--from <string>` | A datetime for the beginning of the desired range for which to fetch costs. Defaults to start of current month. |  |  |
| `--to <string>` | A datetime for the end of the desired range for which to fetch costs. Defaults to the current date. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud hosted deployment-templates`

Cloud hosted deployment-templates commands

| Command | Description |
|---------|-------------|
| `get-deployment-templates-v2` | Get deployment templates |
| `get-deployment-template-v2` | Get deployment template |

### `elastic cloud hosted deployment-templates get-deployment-templates-v2`

Get deployment templates

[JSON Schema](./schemas/elastic-cloud-hosted-deployment-templates-get-deployment-templates-v2.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--metadata <string>` | An optional key/value pair in the form of (key:value) that will act as a filter and exclude any templates that do not have a matching metadata item associated. |  |  |
| `--show-instance-configurations [value]` | If true, will return details for each instance configuration referenced by the template. |  |  |
| `--show-max-zones [value]` | If true, will populate the max_zones field in the instance configurations. Only relevant if show_instance_configurations=true. |  |  |
| `--stack-version <string>` | If present, it will cause the returned deployment templates to be adapted to return only the elements allowed in that version. |  |  |
| `--hide-deprecated [value]` | If true, templates flagged as deprecated will NOT be returned. |  |  |
| `--region <string>` | Region of the deployment templates (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployment-templates get-deployment-template-v2`

Get deployment template

[JSON Schema](./schemas/elastic-cloud-hosted-deployment-templates-get-deployment-template-v2.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--template-id <string>` | The identifier for the deployment template. (required) |  |  |
| `--show-instance-configurations [value]` | If true, will return details for each instance configuration referenced by the template. |  |  |
| `--show-max-zones [value]` | If true, will populate the max_zones field in the instance configurations. Only relevant if show_instance_configurations=true. |  |  |
| `--stack-version <string>` | If present, it will cause the returned deployment template to be adapted to return only the elements allowed in that version. |  |  |
| `--region <string>` | Region of the deployment template (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud hosted deployments`

Cloud hosted deployments commands

| Command | Description |
|---------|-------------|
| `list-deployments` | List Deployments |
| `create-deployment` | Create Deployment |
| `search-deployments` | Search Deployments |
| `search-eligible-remote-clusters` | Get eligible remote clusters |
| `get-deployment` | Get Deployment |
| `update-deployment` | Update Deployment |
| `restore-deployment` | Restores a shutdown Deployment |
| `shutdown-deployment` | Shuts down Deployment |
| `get-deployment-apm-resource-info` | Get Deployment APM Resource Info |
| `deployment-apm-reset-secret-token` | Reset the secret token for an APM resource. |
| `get-deployment-appsearch-resource-info` | Get Deployment App Search Resource Info |
| `get-appsearch-read-only-mode` | Set AppSearch read-only status |
| `set-appsearch-read-only-mode` | Set AppSearch read-only status |
| `get-deployment-certificate-authority` | Get certificate authority |
| `get-deployment-es-resource-info` | Get Deployment Elasticsearch Resource Info |
| `enable-deployment-resource-ccr` | Migrate Elasticsearch and associated Kibana resources to enable CCR |
| `enable-deployment-resource-ilm` | Migrate Elasticsearch resource to use ILM |
| `enable-deployment-resource-slm` | Migrate Elasticsearch resource to use SLM |
| `reset-elasticsearch-user-password` | Reset 'elastic' user password |
| `restart-deployment-es-resource` | Restart Deployment Elasticsearch Resource |
| `shutdown-deployment-es-resource` | Shutdown Deployment Elasticsearch Resource |
| `get-deployment-es-resource-eligible-remote-clusters` | Get eligible remote clusters |
| `get-deployment-es-resource-keystore` | Get the items in the Elasticsearch resource keystore |
| `set-deployment-es-resource-keystore` | Add or remove items from the Elasticsearch resource keystore |
| `get-deployment-es-resource-remote-clusters` | Get certificate based remote clusters |
| `set-deployment-es-resource-remote-clusters` | Set certificate based remote clusters |
| `get-deployment-es-resource-snapshot-repository` | List the attached snapshot repositories |
| `create-deployment-es-resource-snapshot-repository` | Create a snapshot repository for Elasticsearch resource |
| `delete-deployment-es-resource-snapshot-repository` | Remove the attached snapshot repository |
| `update-deployment-es-resource-tier` | Update Elasticsearch tiers |
| `get-deployment-enterprise-search-resource-info` | Get Deployment Enterprise Search Resource Info |
| `get-deployment-integrations-server-resource-info` | Get Deployment Integrations Server Resource Info |
| `get-deployment-kib-resource-info` | Get Deployment Kibana Resource Info |
| `migrate-deployment-template` | Build request to migrate deployment to a different template |
| `get-deployment-tags` | Get the tags for a Deployment |
| `set-deployment-tags` | Set the tags for a Deployment |
| `get-deployment-upgrade-assistant-status` | Get Deployment upgrade assistant status |
| `restore-deployment-resource` | Restores a shutdown resource |
| `start-deployment-resource-instances-all` | Start all instances |
| `stop-deployment-resource-instances-all` | Stop all instances |
| `start-deployment-resource-instances-all-maintenance-mode` | Start maintenance mode (all instances) |
| `stop-deployment-resource-instances-all-maintenance-mode` | Stop maintenance mode (all instances) |
| `start-deployment-resource-instances` | Start instances |
| `stop-deployment-resource-instances` | Stop instances |
| `start-deployment-resource-maintenance-mode` | Start maintenance mode |
| `stop-deployment-resource-maintenance-mode` | Stop maintenance mode |
| `cancel-deployment-resource-pending-plan` | Cancel resource pending plan |
| `get-deployment-resource-user-settings` | Get the user settings of a Deployment resource |
| `update-deployment-resource-user-settings` | Update user settings for a deployment resource |
| `restart-deployment-stateless-resource` | Restart Deployment Stateless Resource |
| `shutdown-deployment-stateless-resource` | Shutdown Deployment Stateless Resource |

### `elastic cloud hosted deployments list-deployments`

List Deployments

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments create-deployment`

Create Deployment

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-create-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--request-id <string>` | An optional idempotency token - if two create requests share the same request_id token (min size 32 characters, max 128) then only one deployment will be created, the second request will return the info of that deployment (in the same format described below, but with blanks for auth-related fields) |  |  |
| `--validate-only [value]` | If true, will just validate the Deployment definition but will not perform the creation |  |  |
| `--template-id <string>` | An optional template id - if present, the referenced template will be used to fill in the resources field of the deployment creation request. If any resources are present in the request together with the template, the ones coming in the request will prevail and no merging with the template will be performed. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments search-deployments`

Search Deployments

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-search-deployments.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--minimal-metadata <string>` | Comma separated list of attributes to include in response for deployments found. Useful for reducing response size when retrieving many deployments. Use of this parameter moves the result to the minimal_metadata section of the response. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments search-eligible-remote-clusters`

Get eligible remote clusters

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-search-eligible-remote-clusters.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--cloud-version <string>` | The version of the Elasticsearch cluster cluster that will potentially be configured to have remote clusters. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment`

Get Deployment

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--show-security [value]` | Whether to include the Elasticsearch 2.x security information in the response - can be large per cluster and also include credentials |  |  |
| `--show-metadata [value]` | Whether to include the full cluster metadata in the response - can be large per cluster and also include credentials |  |  |
| `--show-plans [value]` | Whether to include the full current and pending plan information in the response - can be large per cluster |  |  |
| `--show-plan-logs [value]` | Whether to include with the current and pending plan information the attempt log - can be very large per cluster |  |  |
| `--show-plan-history [value]` | Whether to include the plan history with the current and pending plan information. The results can be very large per cluster.
 By default, if a given resource kind (e.g. Elasticsearch, Kibana, etc.) has more than 100 plans
 (which should be very rare, most likely caused by a bug) only 100 plans are returned for the given resource type:
 The first 10 plans, and the last 90 plans for that resource type.
 If ALL of the plans are desired, pass the `force_all_plan_history` parameter with a value of `true`.
 |  |  |
| `--show-plan-defaults [value]` | If showing plans, whether to show values that are left at their default value (less readable but more informative) |  |  |
| `--convert-legacy-plans [value]` | If showing plans, whether to leave pre-2.0.0 plans in their legacy format (the default), or whether to update them to 2.0.x+ format (if 'true') |  |  |
| `--show-system-alerts <number>` | Number of system alerts (such as forced restarts due to memory limits) to be included in the response - can be large per cluster. Negative numbers or 0 will not return field. |  |  |
| `--show-settings [value]` | Whether to show cluster settings in the response. |  |  |
| `--show-instance-metrics [value]` | Whether to show resources instance metrics in the response. |  |  |
| `--show-instance-configurations [value]` | If true, will return details for each instance configuration referenced by the deployment. |  |  |
| `--enrich-with-template [value]` | If showing plans, whether to enrich the plan by including the missing elements from the deployment template it is based on |  |  |
| `--force-all-plan-history [value]` | Force show the entire plan history no matter how long.
 As noted in the `show_plan_history` parameter description, by default, a maximum of 100 plans are shown per resource. 
 If `true`, this parameter overrides the default, and ALL plans are returned.
 Use with care as the plan history can be VERY large. Consider pairing with `show_plan_logs=false`.
  |  |  |
| `--clear-transient [value]` | If set (defaults to false) then removes the transient section from all child resources, making it safe to reapply via an update |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments update-deployment`

Update Deployment

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-update-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--hide-pruned-orphans [value]` | Whether or not to hide orphaned resources that were shut down (relevant if prune on the request is true) |  |  |
| `--skip-snapshot [value]` | Whether or not to skip snapshots before shutting down orphaned resources (relevant if prune on the request is true) |  |  |
| `--validate-only [value]` | If true, will just validate the Deployment definition but will not perform the update |  |  |
| `--cloud-version <string>` | If specified then checks for conflicts against the version stored in the persistent store (returned in 'x-cloud-resource-version' of the GET request) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments restore-deployment`

Restores a shutdown Deployment

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-restore-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--restore-snapshot [value]` | Whether or not to restore a snapshot for those resources that allow it. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments shutdown-deployment`

Shuts down Deployment

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-shutdown-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--hide [value]` | Whether or not to hide the deployment and its resources.Only applicable for Platform administrators. |  |  |
| `--skip-snapshot [value]` | Whether or not to skip snapshots before shutting down the resources |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-apm-resource-info`

Get Deployment APM Resource Info

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-apm-resource-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--show-metadata [value]` | Whether to include the full cluster metadata in the response - can be large per cluster and also include credentials. |  |  |
| `--show-plans [value]` | Whether to include the full current and pending plan information in the response - can be large per cluster. |  |  |
| `--show-plan-logs [value]` | Whether to include with the current and pending plan information the attempt log - can be very large per cluster. |  |  |
| `--show-plan-history [value]` | Whether to include with the current and pending plan information the plan history- can be very large per cluster. |  |  |
| `--show-plan-defaults [value]` | If showing plans, whether to show values that are left at their default value (less readable but more informative). |  |  |
| `--show-settings [value]` | Whether to show cluster settings in the response. |  |  |
| `--clear-transient [value]` | If set (defaults to false) then removes the transient section from all child resources, making it safe to reapply via an update |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments deployment-apm-reset-secret-token`

Reset the secret token for an APM resource.

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-deployment-apm-reset-secret-token.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-appsearch-resource-info`

Get Deployment App Search Resource Info

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-appsearch-resource-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--show-metadata [value]` | Whether to include the full cluster metadata in the response - can be large per cluster and also include credentials. |  |  |
| `--show-plans [value]` | Whether to include the full current and pending plan information in the response - can be large per cluster. |  |  |
| `--show-plan-logs [value]` | Whether to include with the current and pending plan information the attempt log - can be very large per cluster. |  |  |
| `--show-plan-history [value]` | Whether to include with the current and pending plan information the plan history- can be very large per cluster. |  |  |
| `--show-plan-defaults [value]` | If showing plans, whether to show values that are left at their default value (less readable but more informative). |  |  |
| `--show-settings [value]` | Whether to show cluster settings in the response. |  |  |
| `--clear-transient [value]` | If set (defaults to false) then removes the transient section from all child resources, making it safe to reapply via an update |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-appsearch-read-only-mode`

Set AppSearch read-only status

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-appsearch-read-only-mode.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments set-appsearch-read-only-mode`

Set AppSearch read-only status

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-set-appsearch-read-only-mode.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-certificate-authority`

Get certificate authority

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-certificate-authority.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-es-resource-info`

Get Deployment Elasticsearch Resource Info

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-es-resource-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--show-security [value]` | Whether to include the Elasticsearch 2.x security information in the response - can be large per cluster and also include credentials. |  |  |
| `--show-metadata [value]` | Whether to include the full cluster metadata in the response - can be large per cluster and also include credentials. |  |  |
| `--show-plans [value]` | Whether to include the full current and pending plan information in the response - can be large per cluster. |  |  |
| `--show-plan-logs [value]` | Whether to include with the current and pending plan information the attempt log - can be very large per cluster. |  |  |
| `--show-plan-history [value]` | Whether to include with the current and pending plan information the plan history- can be very large per cluster. |  |  |
| `--show-plan-defaults [value]` | If showing plans, whether to show values that are left at their default value (less readable but more informative). |  |  |
| `--convert-legacy-plans [value]` | If showing plans, whether to leave pre-2.0.0 plans in their legacy format (the default), or whether to update them to 2.0.x+ format (if 'true'). |  |  |
| `--show-system-alerts <number>` | Number of system alerts (such as forced restarts due to memory limits) to be included in the response - can be large per cluster. Negative numbers or 0 will not return field. |  |  |
| `--show-settings [value]` | Whether to show cluster settings in the response. |  |  |
| `--enrich-with-template [value]` | If showing plans, whether to enrich the plan by including the missing elements from the deployment template it is based on. |  |  |
| `--clear-transient [value]` | If set (defaults to false) then removes the transient section from all child resources, making it safe to reapply via an update |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments enable-deployment-resource-ccr`

Migrate Elasticsearch and associated Kibana resources to enable CCR

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-enable-deployment-resource-ccr.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--validate-only [value]` | When `true`, will not enable CCR but returns warnings if any elements may lose availability during CCR enablement |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments enable-deployment-resource-ilm`

Migrate Elasticsearch resource to use ILM

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-enable-deployment-resource-ilm.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--validate-only [value]` | When `true`, does not enable ILM but returns warnings if any applications may lose availability during ILM migration. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments enable-deployment-resource-slm`

Migrate Elasticsearch resource to use SLM

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-enable-deployment-resource-slm.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--validate-only [value]` | When `true`, does not enable SLM but returns warnings if any applications may lose availability during SLM migration. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments reset-elasticsearch-user-password`

Reset 'elastic' user password

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-reset-elasticsearch-user-password.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--check-completion [value]` | If true, will not reset elastic user password and instead will return a status code signaling whether or not the current credentials are ready to use (eg from creation or the last call to _reset_password) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments restart-deployment-es-resource`

Restart Deployment Elasticsearch Resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-restart-deployment-es-resource.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--restore-snapshot [value]` | When set to true and restoring from shutdown, then will restore the cluster from the last snapshot (if available). |  |  |
| `--skip-snapshot [value]` | If true, will not take a snapshot of the cluster before restarting. |  |  |
| `--cancel-pending [value]` | If true, cancels any pending plans before restarting. If false and there are pending plans, returns an error. |  |  |
| `--group-attribute <string>` | Indicates the property or properties used to divide the list of instances to restart in groups. Valid options are: '\_\_all\_\_' (restart all at once), '\_\_zone\_\_' by logical zone, '\_\_name\_\_' one instance at a time, or a comma-separated list of attributes of the instances |  |  |
| `--shard-init-wait-time <number>` | The time, in seconds, to wait for shards that show no progress of initializing, before rolling the next group (default: 10 minutes) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments shutdown-deployment-es-resource`

Shutdown Deployment Elasticsearch Resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-shutdown-deployment-es-resource.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--hide [value]` | Hide cluster on shutdown. Hidden clusters are not listed by default. Only applicable for Platform administrators. |  |  |
| `--skip-snapshot [value]` | If true, will skip taking a snapshot of the cluster before shutting the cluster down (if even possible). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-es-resource-eligible-remote-clusters`

Get eligible remote clusters

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-es-resource-eligible-remote-clusters.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-es-resource-keystore`

Get the items in the Elasticsearch resource keystore

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-es-resource-keystore.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments set-deployment-es-resource-keystore`

Add or remove items from the Elasticsearch resource keystore

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-set-deployment-es-resource-keystore.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--validate-only [value]` | When `true`, does nothing except return the entries' allowlist and reloadability statuses. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-es-resource-remote-clusters`

Get certificate based remote clusters

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-es-resource-remote-clusters.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments set-deployment-es-resource-remote-clusters`

Set certificate based remote clusters

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-set-deployment-es-resource-remote-clusters.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-es-resource-snapshot-repository`

List the attached snapshot repositories

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-es-resource-snapshot-repository.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments create-deployment-es-resource-snapshot-repository`

Create a snapshot repository for Elasticsearch resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-create-deployment-es-resource-snapshot-repository.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments delete-deployment-es-resource-snapshot-repository`

Remove the attached snapshot repository

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-delete-deployment-es-resource-snapshot-repository.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--repository-name <string>` | The name of the snapshot repository to remove (e.g. _clone_abcd1234) (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments update-deployment-es-resource-tier`

Update Elasticsearch tiers

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-update-deployment-es-resource-tier.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-enterprise-search-resource-info`

Get Deployment Enterprise Search Resource Info

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-enterprise-search-resource-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--show-metadata [value]` | Whether to include the full cluster metadata in the response - can be large per cluster and also include credentials. |  |  |
| `--show-plans [value]` | Whether to include the full current and pending plan information in the response - can be large per cluster. |  |  |
| `--show-plan-logs [value]` | Whether to include with the current and pending plan information the attempt log - can be very large per cluster. |  |  |
| `--show-plan-history [value]` | Whether to include with the current and pending plan information the plan history- can be very large per cluster. |  |  |
| `--show-plan-defaults [value]` | If showing plans, whether to show values that are left at their default value (less readable but more informative). |  |  |
| `--show-settings [value]` | Whether to show cluster settings in the response. |  |  |
| `--clear-transient [value]` | If set (defaults to false) then removes the transient section from all child resources, making it safe to reapply via an update |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-integrations-server-resource-info`

Get Deployment Integrations Server Resource Info

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-integrations-server-resource-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--show-metadata [value]` | Whether to include the full cluster metadata in the response - can be large per cluster and also include credentials. |  |  |
| `--show-plans [value]` | Whether to include the full current and pending plan information in the response - can be large per cluster. |  |  |
| `--show-plan-logs [value]` | Whether to include with the current and pending plan information the attempt log - can be very large per cluster. |  |  |
| `--show-plan-history [value]` | Whether to include with the current and pending plan information the plan history- can be very large per cluster. |  |  |
| `--show-plan-defaults [value]` | If showing plans, whether to show values that are left at their default value (less readable but more informative). |  |  |
| `--show-settings [value]` | Whether to show cluster settings in the response. |  |  |
| `--clear-transient [value]` | If set (defaults to false) then removes the transient section from all child resources, making it safe to reapply via an update |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-kib-resource-info`

Get Deployment Kibana Resource Info

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-kib-resource-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--show-metadata [value]` | Whether to include the full cluster metadata in the response - can be large per cluster and also include credentials. |  |  |
| `--show-plans [value]` | Whether to include the full current and pending plan information in the response - can be large per cluster. |  |  |
| `--show-plan-logs [value]` | Whether to include with the current and pending plan information the attempt log - can be very large per cluster. |  |  |
| `--show-plan-history [value]` | Whether to include with the current and pending plan information the plan history- can be very large per cluster. |  |  |
| `--show-plan-defaults [value]` | If showing plans, whether to show values that are left at their default value (less readable but more informative). |  |  |
| `--convert-legacy-plans [value]` | If showing plans, whether to leave pre-2.0.0 plans in their legacy format (the default), or whether to update them to 2.0.x+ format (if 'true'). |  |  |
| `--show-settings [value]` | Whether to show cluster settings in the response. |  |  |
| `--clear-transient [value]` | If set (defaults to false) then removes the transient section from all child resources, making it safe to reapply via an update |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments migrate-deployment-template`

Build request to migrate deployment to a different template

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-migrate-deployment-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--template-id <string>` | The ID of the deployment template to migrate to (required) |  |  |
| `--skip-instance-metrics-check [value]` | If true, will skip the instance metrics check for memory and disk usage calculations |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-tags`

Get the tags for a Deployment

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-tags.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments set-deployment-tags`

Set the tags for a Deployment

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-set-deployment-tags.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-upgrade-assistant-status`

Get Deployment upgrade assistant status

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-upgrade-assistant-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--target-version <string>` | If present, value is included in resource request to provide additional context (only supported for Kibana) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments restore-deployment-resource`

Restores a shutdown resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-restore-deployment-resource.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--resource-kind <string>` | The kind of resource (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--restore-snapshot [value]` | Whether or not to restore a snapshot for those resources that allow it. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments start-deployment-resource-instances-all`

Start all instances

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-start-deployment-resource-instances-all.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments stop-deployment-resource-instances-all`

Stop all instances

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-stop-deployment-resource-instances-all.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments start-deployment-resource-instances-all-maintenance-mode`

Start maintenance mode (all instances)

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-start-deployment-resource-instances-all-maintenance-mode.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments stop-deployment-resource-instances-all-maintenance-mode`

Stop maintenance mode (all instances)

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-stop-deployment-resource-instances-all-maintenance-mode.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments start-deployment-resource-instances`

Start instances

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-start-deployment-resource-instances.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--instance-ids <string>` | A comma-separated list of instance identifiers. (required) |  |  |
| `--ignore-missing [value]` | If true and the instance does not exist then quietly proceed to the next instance, otherwise treated as an error |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments stop-deployment-resource-instances`

Stop instances

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-stop-deployment-resource-instances.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--instance-ids <string>` | A comma-separated list of instance identifiers. (required) |  |  |
| `--ignore-missing [value]` | If true and the instance does not exist then quietly proceed to the next instance, otherwise treated as an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments start-deployment-resource-maintenance-mode`

Start maintenance mode

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-start-deployment-resource-maintenance-mode.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--instance-ids <string>` | A comma-separated list of instance identifiers. (required) |  |  |
| `--ignore-missing [value]` | If true and the instance does not exist then quietly proceed to the next instance, otherwise treated as an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments stop-deployment-resource-maintenance-mode`

Stop maintenance mode

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-stop-deployment-resource-maintenance-mode.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--resource-kind <string>` | The kind of resource (one of elasticsearch, kibana, apm, or integrations_server). (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--instance-ids <string>` | A comma-separated list of instance identifiers. (required) |  |  |
| `--ignore-missing [value]` | If true and the instance does not exist then quietly proceed to the next instance, otherwise treated as an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments cancel-deployment-resource-pending-plan`

Cancel resource pending plan

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-cancel-deployment-resource-pending-plan.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--resource-kind <string>` | The kind of resource (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--force-delete [value]` | When `true`, deletes the pending plan instead of attempting a graceful cancellation. The default is `false`. |  |  |
| `--ignore-missing [value]` | When `true`, returns successfully, even when plans are missing. The default is `false`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments get-deployment-resource-user-settings`

Get the user settings of a Deployment resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-get-deployment-resource-user-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--resource-kind <string>` | The kind of resource (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments update-deployment-resource-user-settings`

Update user settings for a deployment resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-update-deployment-resource-user-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment (required) |  |  |
| `--resource-kind <string>` | The kind of resource (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one) (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments restart-deployment-stateless-resource`

Restart Deployment Stateless Resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-restart-deployment-stateless-resource.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--stateless-resource-kind <string>` | The kind of stateless resource (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--cancel-pending [value]` | If true, cancels any pending plans before restarting. If false and there are pending plans, returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments shutdown-deployment-stateless-resource`

Shutdown Deployment Stateless Resource

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-shutdown-deployment-stateless-resource.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--deployment-id <string>` | Identifier for the Deployment. (required) |  |  |
| `--stateless-resource-kind <string>` | The kind of stateless resource (required) |  |  |
| `--ref-id <string>` | User-specified RefId for the Resource (or '_main' if there is only one). (required) |  |  |
| `--hide [value]` | Hide cluster on shutdown. Hidden clusters are not listed by default. Only applicable for Platform administrators. |  |  |
| `--skip-snapshot [value]` | If true, will skip taking a snapshot of the cluster before shutting the cluster down (if even possible) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud hosted deployments-traffic-filter`

Cloud hosted deployments-traffic-filter commands

| Command | Description |
|---------|-------------|
| `get-traffic-filter-deployment-ruleset-associations` | Get associated rulesets |
| `get-traffic-filter-claimed-link-ids` | List traffic filter claimed link id |
| `claim-traffic-filter-link-id` | Claim a link id |
| `unclaim-traffic-filter-link-id` | Unclaims a link id |
| `get-traffic-filter-rulesets` | List traffic filter rulesets |
| `create-traffic-filter-ruleset` | Create a ruleset |
| `get-traffic-filter-ruleset` | Retrieves the ruleset by ID. |
| `update-traffic-filter-ruleset` | Updates a ruleset |
| `delete-traffic-filter-ruleset` | Delete a ruleset |
| `get-traffic-filter-ruleset-deployment-associations` | Get associated deployments |
| `create-traffic-filter-ruleset-association` | Create ruleset association |
| `delete-traffic-filter-ruleset-association` | Delete ruleset association |

### `elastic cloud hosted deployments-traffic-filter get-traffic-filter-deployment-ruleset-associations`

Get associated rulesets

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-get-traffic-filter-deployment-ruleset-associations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--association-type <string>` | Association type (required) |  |  |
| `--associated-entity-id <string>` | Associated entity ID (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter get-traffic-filter-claimed-link-ids`

List traffic filter claimed link id

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-get-traffic-filter-claimed-link-ids.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--region <string>` | If provided limits the claimed id to that region only. |  |  |
| `--organization-id <string>` | Retrieves a list of resources that are associated to the specified organization ID. It only takes effect if the user is an admin. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter claim-traffic-filter-link-id`

Claim a link id

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter unclaim-traffic-filter-link-id`

Unclaims a link id

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter get-traffic-filter-rulesets`

List traffic filter rulesets

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-get-traffic-filter-rulesets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--include-associations [value]` | Retrieves a list of resources that are associated to the specified ruleset. |  |  |
| `--region <string>` | If provided limits the rulesets to that region only. |  |  |
| `--organization-id <string>` | Retrieves a list of resources that are associated to the specified organization ID. It only takes effect if the user is an admin. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter create-traffic-filter-ruleset`

Create a ruleset

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter get-traffic-filter-ruleset`

Retrieves the ruleset by ID.

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-get-traffic-filter-ruleset.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The mandatory ruleset ID. (required) |  |  |
| `--include-associations [value]` | Retrieves a list of resources that are associated to the specified ruleset. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter update-traffic-filter-ruleset`

Updates a ruleset

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-update-traffic-filter-ruleset.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The mandatory ruleset ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter delete-traffic-filter-ruleset`

Delete a ruleset

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-delete-traffic-filter-ruleset.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The mandatory ruleset ID. (required) |  |  |
| `--ignore-associations [value]` | When true, ignores the associations and deletes the ruleset. When false, recognizes the associations, which prevents the deletion of the rule set. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter get-traffic-filter-ruleset-deployment-associations`

Get associated deployments

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-get-traffic-filter-ruleset-deployment-associations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The mandatory ruleset ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter create-traffic-filter-ruleset-association`

Create ruleset association

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-create-traffic-filter-ruleset-association.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The mandatory ruleset ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted deployments-traffic-filter delete-traffic-filter-ruleset-association`

Delete ruleset association

[JSON Schema](./schemas/elastic-cloud-hosted-deployments-traffic-filter-delete-traffic-filter-ruleset-association.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The mandatory ruleset ID. (required) |  |  |
| `--association-type <string>` | Association type (required) |  |  |
| `--associated-entity-id <string>` | Associated entity ID (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud hosted extensions`

Cloud hosted extensions commands

| Command | Description |
|---------|-------------|
| `list-extensions` | List Extensions |
| `create-extension` | Create an extension |
| `get-extension` | Get Extension |
| `update-extension` | Update Extension |
| `upload-extension` | Uploads the Extension |
| `delete-extension` | Delete Extension |

### `elastic cloud hosted extensions list-extensions`

List Extensions

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted extensions create-extension`

Create an extension

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted extensions get-extension`

Get Extension

[JSON Schema](./schemas/elastic-cloud-hosted-extensions-get-extension.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--extension-id <string>` | Id of an extension (required) |  |  |
| `--include-deployments [value]` | Include deployments referencing this extension. Up to only 10000 deployments will be included. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted extensions update-extension`

Update Extension

[JSON Schema](./schemas/elastic-cloud-hosted-extensions-update-extension.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--extension-id <string>` | Id of an extension (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted extensions upload-extension`

Uploads the Extension

[JSON Schema](./schemas/elastic-cloud-hosted-extensions-upload-extension.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--extension-id <string>` | Id of an extension (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic cloud hosted extensions delete-extension`

Delete Extension

[JSON Schema](./schemas/elastic-cloud-hosted-extensions-delete-extension.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--extension-id <string>` | Id of an extension (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud hosted stack`

Cloud hosted stack commands

| Command | Description |
|---------|-------------|
| `get-version-stacks` | Get stack versions |

### `elastic cloud hosted stack get-version-stacks`

Get stack versions

[JSON Schema](./schemas/elastic-cloud-hosted-stack-get-version-stacks.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--show-deleted [value]` | Whether to show deleted stack versions or not |  |  |
| `--show-unusable [value]` | Whether to show versions that are unusable by the authenticated user |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud hosted trusted-environments`

Cloud hosted trusted-environments commands

| Command | Description |
|---------|-------------|
| `get-trusted-envs` | Get trusted environments |

### `elastic cloud hosted trusted-environments get-trusted-envs`

Get trusted environments

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---
