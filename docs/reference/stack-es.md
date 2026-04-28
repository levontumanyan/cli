# es

Interact with the Elasticsearch API

Aliases: `elasticsearch`

## `elastic stack es async-search`

Elasticsearch async-search API commands

| Command | Description |
|---------|-------------|
| `delete` | Delete an async search. |
| `get` | Get async search results. |
| `status` | Get the async search status. |
| `submit` | Run an async search. |

### `elastic stack es async-search delete`

Delete an async search.

[JSON Schema](./schemas/elastic-stack-es-async-search-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the async search. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es async-search get`

Get async search results.

[JSON Schema](./schemas/elastic-stack-es-async-search-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the async search. (required) |  |  |
| `--keep-alive <string>` | The length of time that the async search should be available in the cluster. When not specified, the `keep_alive` set with the corresponding submit async request will be used. Otherwise, it is possible to override the value and extend the validity of the request. When this period expires, the search, if still running, is cancelled. If the search is completed, its saved results are deleted. |  |  |
| `--typed-keys [value]` | Specify whether aggregation and suggester names should be prefixed by their respective types in the response |  |  |
| `--wait-for-completion-timeout <string>` | Specifies to wait for the search to be completed up until the provided timeout. Final results will be returned if available before the timeout expires, otherwise the currently available results will be returned once the timeout expires. By default no timeout is set meaning that the currently available results will be returned without any additional wait. |  |  |
| `--return-intermediate-results [value]` | Specifies whether the response should contain intermediate results if the query is still running when the wait_for_completion_timeout expires or if no wait_for_completion_timeout is specified. If true and the search is still running, the search response will include any hits and partial aggregations that are available. If false and the search is still running, the search response will not include any hits (but possibly include total hits) nor will include any partial aggregations. When not specified, the intermediate results are returned for running queries. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es async-search status`

Get the async search status.

[JSON Schema](./schemas/elastic-stack-es-async-search-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the async search. (required) |  |  |
| `--keep-alive <string>` | The length of time that the async search needs to be available. Ongoing async searches and any saved search results are deleted after this period. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es async-search submit`

Run an async search.

[JSON Schema](./schemas/elastic-stack-es-async-search-submit.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices |  |  |
| `--wait-for-completion-timeout <string>` | Blocks and waits until the search is completed up to a certain timeout. When the async search completes within the timeout, the response won’t include the ID as the results are not stored in the cluster. |  |  |
| `--keep-alive <string>` | Specifies how long the async search needs to be available. Ongoing async searches and any saved search results are deleted after this period. |  |  |
| `--keep-on-completion [value]` | If `true`, results are stored for later retrieval when the search completes within the `wait_for_completion_timeout`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--allow-partial-search-results [value]` | Indicate if an error should be returned if there is a partial search failure or timeout |  |  |
| `--analyzer <string>` | The analyzer to use for the query string |  |  |
| `--analyze-wildcard [value]` | Specify whether wildcard and prefix queries should be analyzed |  |  |
| `--batched-reduce-size <number>` | Affects how often partial results become available, which happens whenever shard results are reduced. A partial reduction is performed every time the coordinating node has received a certain number of new shard responses (5 by default). |  |  |
| `--ccs-minimize-roundtrips [value]` | The default value is the only supported value. |  |  |
| `--default-operator <value>` | The default operator for query string query (AND or OR) |  |  |
| `--df <string>` | The field to use as default where no field prefix is given in the query string |  |  |
| `--expand-wildcards <value>` | Whether to expand wildcard expression to concrete indices that are open, closed or both |  |  |
| `--ignore-throttled [value]` | Whether specified concrete, expanded or aliased indices should be ignored when throttled |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--lenient [value]` | Specify whether format-based query failures (such as providing text to a numeric field) should be ignored |  |  |
| `--max-concurrent-shard-requests <number>` | The number of concurrent shard requests per node this search executes concurrently. This value should be used to limit the impact of the search on the cluster in order to limit the number of concurrent shard requests |  |  |
| `--preference <string>` | Specify the node or shard the operation should be performed on |  |  |
| `--request-cache [value]` | Specify if request cache should be used for this request or not, defaults to true |  |  |
| `--routing <string>` | A comma-separated list of specific routing values |  |  |
| `--search-type <value>` | Search operation type |  |  |
| `--suggest-field <string>` | Specifies which field to use for suggestions. |  |  |
| `--suggest-mode <value>` | Specify suggest mode |  |  |
| `--suggest-size <number>` | How many suggestions to return in response |  |  |
| `--suggest-text <string>` | The source text for which the suggestions should be returned. |  |  |
| `--typed-keys [value]` | Specify whether aggregation and suggester names should be prefixed by their respective types in the response |  |  |
| `--rest-total-hits-as-int [value]` | Indicates whether hits.total should be rendered as an integer or an object in the rest search response |  |  |
| `--source-excludes <string>` | A list of fields to exclude from the returned _source field |  |  |
| `--source-includes <string>` | A list of fields to extract and return from the _source field |  |  |
| `--q <string>` | Query in the Lucene query string syntax |  |  |
| `--aggregations <json>` |  |  |  |
| `--aggs <json>` |  |  |  |
| `--collapse <json>` |  |  |  |
| `--explain [value]` | If true, returns detailed information about score computation as part of a hit. |  |  |
| `--ext <json>` | Configuration of search extensions defined by Elasticsearch plugins. |  |  |
| `--from <number>` | Starting document offset. By default, you cannot page through more than 10,000 hits using the from and size parameters. To page through more hits, use the search_after parameter. |  |  |
| `--highlight <json>` |  |  |  |
| `--track-total-hits [value]` | Number of hits matching the query to count accurately. If true, the exact number of hits is returned at the cost of some performance. If false, the response does not include the total number of hits matching the query. Defaults to 10,000 hits. |  |  |
| `--indices-boost <json>` | Boosts the _score of documents from specified indices. |  |  |
| `--docvalue-fields <json>` | Array of wildcard (*) patterns. The request returns doc values for field names matching these patterns in the hits.fields property of the response. |  |  |
| `--knn <json>` | Defines the approximate kNN search to run. |  |  |
| `--min-score <number>` | Minimum _score for matching documents. Documents with a lower _score are not included in search results and results collected by aggregations. |  |  |
| `--post-filter <json>` |  |  |  |
| `--profile [value]` |  |  |  |
| `--query <json>` | Defines the search definition using the Query DSL. |  |  |
| `--rescore <string>` |  |  |  |
| `--script-fields <json>` | Retrieve a script evaluation (based on different fields) for each hit. |  |  |
| `--search-after <json>` |  |  |  |
| `--size <number>` | The number of hits to return. By default, you cannot page through more than 10,000 hits using the from and size parameters. To page through more hits, use the search_after parameter. |  |  |
| `--slice <json>` |  |  |  |
| `--sort <string>` |  |  |  |
| `--source [value]` | Indicates which source fields are returned for matching documents. These fields are returned in the hits._source property of the search response. |  |  |
| `--fields <json>` | Array of wildcard (*) patterns. The request returns values for field names matching these patterns in the hits.fields property of the response. |  |  |
| `--suggest <json>` |  |  |  |
| `--terminate-after <number>` | Maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. Defaults to 0, which does not terminate query execution early. |  |  |
| `--timeout <string>` | Specifies the period of time to wait for a response from each shard. If no response is received before the timeout expires, the request fails and returns an error. Defaults to no timeout. |  |  |
| `--track-scores [value]` | If true, calculate and return document scores, even if the scores are not used for sorting. |  |  |
| `--version [value]` | If true, returns document version as part of a hit. |  |  |
| `--seq-no-primary-term [value]` | If true, returns sequence number and primary term of the last modification of each hit. See Optimistic concurrency control. |  |  |
| `--stored-fields <string>` | List of stored fields to return as part of a hit. If no fields are specified, no stored fields are included in the response. If this field is specified, the _source parameter defaults to false. You can pass _source: true to return both source fields and stored fields in the search response. |  |  |
| `--pit <json>` | Limits the search to a point in time (PIT). If you provide a PIT, you cannot specify an <index> in the request path. |  |  |
| `--runtime-mappings <json>` | Defines one or more runtime fields in the search request. These fields take precedence over mapped fields with the same name. |  |  |
| `--stats <json>` | Stats groups to associate with the search. Each group maintains a statistics aggregation for its associated searches. You can retrieve these stats using the indices stats API. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es cat`

Elasticsearch cat API commands

| Command | Description |
|---------|-------------|
| `aliases` | Get aliases. |
| `component-templates` | Get component templates. |
| `count` | Get a document count. |
| `help` | Get CAT help. |
| `indices` | Get index information. |
| `ml-data-frame-analytics` | Get data frame analytics jobs. |
| `ml-datafeeds` | Get datafeeds. |
| `ml-jobs` | Get anomaly detection jobs. |
| `ml-trained-models` | Get trained models. |
| `transforms` | Get transform information. |

### `elastic stack es cat aliases`

Get aliases.

[JSON Schema](./schemas/elastic-stack-es-cat-aliases.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | A comma-separated list of aliases to retrieve. Supports wildcards (`*`).  To retrieve all aliases, omit this parameter or use `*` or `_all`. |  |  |
| `--h <value>` | A comma-separated list of columns names to display. It supports simple wildcards. |  |  |
| `--s <string>` | List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`. |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. If the master node is not available before the timeout expires, the request fails and returns an error. To indicated that the request should never timeout, you can set it to `-1`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat component-templates`

Get component templates.

[JSON Schema](./schemas/elastic-stack-es-cat-component-templates.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the component template. It accepts wildcard expressions. If it is omitted, all component templates are returned. |  |  |
| `--h <value>` | A comma-separated list of columns names to display. It supports simple wildcards. |  |  |
| `--s <string>` | List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name. |  |  |
| `--local [value]` | If `true`, the request computes the list of selected nodes from the local cluster state. If `false` the list of selected nodes are computed from the cluster state of the master node. In both cases the coordinating node will send requests for further information to each selected node. |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat count`

Get a document count.

[JSON Schema](./schemas/elastic-stack-es-cat-count.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases used to limit the request. It supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--h <value>` | A comma-separated list of columns names to display. It supports simple wildcards. |  |  |
| `--s <string>` | List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat help`

Get CAT help.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat indices`

Get index information.

[JSON Schema](./schemas/elastic-stack-es-cat-indices.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. |  |  |
| `--health <value>` | The health status used to limit returned indices. By default, the response includes indices of any health status. |  |  |
| `--include-unloaded-segments [value]` | If true, the response includes information from segments that are not loaded into memory. |  |  |
| `--pri [value]` | If true, the response only includes information from primary shards. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. |  |  |
| `--h <value>` | A comma-separated list of columns names to display. It supports simple wildcards. |  |  |
| `--s <string>` | List of columns that determine how the table should be sorted. Sorting defaults to ascending and can be changed by setting `:asc` or `:desc` as a suffix to the column name. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat ml-data-frame-analytics`

Get data frame analytics jobs.

[JSON Schema](./schemas/elastic-stack-es-cat-ml-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the data frame analytics to fetch |  |  |
| `--allow-no-match [value]` | Whether to ignore if a wildcard expression matches no configs. (This includes `_all` string or when no configs have been specified.) |  |  |
| `--h <value>` | Comma-separated list of column names to display. |  |  |
| `--s <value>` | Comma-separated list of column names or column aliases used to sort the response. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat ml-datafeeds`

Get datafeeds.

[JSON Schema](./schemas/elastic-stack-es-cat-ml-datafeeds.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | A numerical character string that uniquely identifies the datafeed. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: * Contains wildcard expressions and there are no datafeeds that match. * Contains the `_all` string or no identifiers and there are no matches. * Contains wildcard expressions and there are only partial matches. If `true`, the API returns an empty datafeeds array when there are no matches and the subset of results when there are partial matches. If `false`, the API returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--h <value>` | Comma-separated list of column names to display. |  |  |
| `--s <value>` | Comma-separated list of column names or column aliases used to sort the response. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat ml-jobs`

Get anomaly detection jobs.

[JSON Schema](./schemas/elastic-stack-es-cat-ml-jobs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: * Contains wildcard expressions and there are no jobs that match. * Contains the `_all` string or no identifiers and there are no matches. * Contains wildcard expressions and there are only partial matches. If `true`, the API returns an empty jobs array when there are no matches and the subset of results when there are partial matches. If `false`, the API returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--h <value>` | Comma-separated list of column names to display. |  |  |
| `--s <value>` | Comma-separated list of column names or column aliases used to sort the response. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat ml-trained-models`

Get trained models.

[JSON Schema](./schemas/elastic-stack-es-cat-ml-trained-models.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | A unique identifier for the trained model. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: contains wildcard expressions and there are no models that match; contains the `_all` string or no identifiers and there are no matches; contains wildcard expressions and there are only partial matches. If `true`, the API returns an empty array when there are no matches and the subset of results when there are partial matches. If `false`, the API returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--h <value>` | A comma-separated list of column names to display. |  |  |
| `--s <value>` | A comma-separated list of column names or aliases used to sort the response. |  |  |
| `--from <number>` | Skips the specified number of transforms. |  |  |
| `--size <number>` | The maximum number of transforms to display. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cat transforms`

Get transform information.

[JSON Schema](./schemas/elastic-stack-es-cat-transforms.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | A transform identifier or a wildcard expression. If you do not specify one of these options, the API returns information for all transforms. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: contains wildcard expressions and there are no transforms that match; contains the `_all` string or no identifiers and there are no matches; contains wildcard expressions and there are only partial matches. If `true`, it returns an empty transforms array when there are no matches and the subset of results when there are partial matches. If `false`, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--from <number>` | Skips the specified number of transforms. |  |  |
| `--h <value>` | Comma-separated list of column names to display. |  |  |
| `--s <value>` | Comma-separated list of column names or column aliases used to sort the response. |  |  |
| `--size <number>` | The maximum number of transforms to obtain. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es cluster`

Elasticsearch cluster API commands

| Command | Description |
|---------|-------------|
| `delete-component-template` | Delete component templates. |
| `exists-component-template` | Check component templates. |
| `get-component-template` | Get component templates. |
| `info` | Get cluster info. |
| `put-component-template` | Create or update a component template. |

### `elastic stack es cluster delete-component-template`

Delete component templates.

[JSON Schema](./schemas/elastic-stack-es-cluster-delete-component-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list or wildcard expression of component template names used to limit the request. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cluster exists-component-template`

Check component templates.

[JSON Schema](./schemas/elastic-stack-es-cluster-exists-component-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of component template names used to limit the request. Wildcard (*) expressions are supported. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--local [value]` | If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cluster get-component-template`

Get component templates.

[JSON Schema](./schemas/elastic-stack-es-cluster-get-component-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of component template to retrieve. Wildcard (`*`) expressions are supported. |  |  |
| `--flat-settings [value]` | If `true`, returns settings in flat format. |  |  |
| `--settings-filter <string>` | Filter out results, for example to filter out sensitive information. Supports wildcards or full settings keys |  |  |
| `--include-defaults [value]` | Return all default configurations for the component template |  |  |
| `--local [value]` | If `true`, the request retrieves information from the local node only. If `false`, information is retrieved from the master node. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cluster info`

Get cluster info.

[JSON Schema](./schemas/elastic-stack-es-cluster-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--target <value>` | Limits the information returned to the specific target. Supports a comma-separated list, such as http,ingest. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es cluster put-component-template`

Create or update a component template.

[JSON Schema](./schemas/elastic-stack-es-cluster-put-component-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of the component template to create. Elasticsearch includes the following built-in component templates: `logs-mappings`; `logs-settings`; `metrics-mappings`; `metrics-settings`;`synthetics-mapping`; `synthetics-settings`. Elastic Agent uses these templates to configure backing indices for its data streams. If you use Elastic Agent and want to overwrite one of these templates, set the `version` for your replacement template higher than the current version. If you don’t use Elastic Agent and want to disable all built-in component and index templates, set `stack.templates.enabled` to `false` using the cluster update settings API. (required) |  |  |
| `--create [value]` | If `true`, this request cannot replace or update existing component templates. |  |  |
| `--cause <string>` | User defined reason for create the component template. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--template <json>` | The template to be applied which includes mappings, settings, or aliases configuration. (required) |  |  |
| `--version <number>` | Version number used to manage component templates externally. This number isn't automatically generated or incremented by Elasticsearch. To unset a version, replace the template without specifying a version. |  |  |
| `--meta <json>` | Optional user metadata about the component template. It may have any contents. This map is not automatically generated by Elasticsearch. This information is stored in the cluster state, so keeping it short is preferable. To unset `_meta`, replace the template without specifying this information. |  |  |
| `--deprecated [value]` | Marks this index template as deprecated. When creating or updating a non-deprecated index template that uses deprecated components, Elasticsearch will emit a deprecation warning. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es connector`

Elasticsearch connector API commands

| Command | Description |
|---------|-------------|
| `check-in` | Check in a connector. |
| `delete` | Delete a connector. |
| `get` | Get a connector. |
| `list` | Get all connectors. |
| `post` | Create a connector. |
| `put` | Create or update a connector. |
| `sync-job-cancel` | Cancel a connector sync job. |
| `sync-job-delete` | Delete a connector sync job. |
| `sync-job-get` | Get a connector sync job. |
| `sync-job-list` | Get all connector sync jobs. |
| `sync-job-post` | Create a connector sync job. |
| `update-active-filtering` | Activate the connector draft filter. |
| `update-api-key-id` | Update the connector API key ID. |
| `update-configuration` | Update the connector configuration. |
| `update-error` | Update the connector error field. |
| `update-filtering` | Update the connector filtering. |
| `update-filtering-validation` | Update the connector draft filtering validation. |
| `update-index-name` | Update the connector index name. |
| `update-name` | Update the connector name and description. |
| `update-native` | Update the connector is_native flag. |
| `update-pipeline` | Update the connector pipeline. |
| `update-scheduling` | Update the connector scheduling. |
| `update-service-type` | Update the connector service type. |
| `update-status` | Update the connector status. |

### `elastic stack es connector check-in`

Check in a connector.

[JSON Schema](./schemas/elastic-stack-es-connector-check-in.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be checked in (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector delete`

Delete a connector.

[JSON Schema](./schemas/elastic-stack-es-connector-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be deleted (required) |  |  |
| `--delete-sync-jobs [value]` | A flag indicating if associated sync jobs should be also removed. |  |  |
| `--hard [value]` | A flag indicating if the connector should be hard deleted. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector get`

Get a connector.

[JSON Schema](./schemas/elastic-stack-es-connector-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector (required) |  |  |
| `--include-deleted [value]` | A flag to indicate if the desired connector should be fetched, even if it was soft-deleted. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector list`

Get all connectors.

[JSON Schema](./schemas/elastic-stack-es-connector-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--from <number>` | Starting offset |  |  |
| `--size <number>` | Specifies a max number of results to get |  |  |
| `--index-name <string>` | A comma-separated list of connector index names to fetch connector documents for |  |  |
| `--connector-name <string>` | A comma-separated list of connector names to fetch connector documents for |  |  |
| `--service-type <string>` | A comma-separated list of connector service types to fetch connector documents for |  |  |
| `--include-deleted [value]` | A flag to indicate if the desired connector should be fetched, even if it was soft-deleted. |  |  |
| `--query <string>` | A wildcard query string that filters connectors with matching name, description or index name |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector post`

Create a connector.

[JSON Schema](./schemas/elastic-stack-es-connector-post.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--description <string>` |  |  |  |
| `--index-name <string>` |  |  |  |
| `--is-native [value]` |  |  |  |
| `--language <string>` |  |  |  |
| `--name <string>` |  |  |  |
| `--service-type <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector put`

Create or update a connector.

[JSON Schema](./schemas/elastic-stack-es-connector-put.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be created or updated. ID is auto-generated if not provided. |  |  |
| `--description <string>` |  |  |  |
| `--index-name <string>` |  |  |  |
| `--is-native [value]` |  |  |  |
| `--language <string>` |  |  |  |
| `--name <string>` |  |  |  |
| `--service-type <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector sync-job-cancel`

Cancel a connector sync job.

[JSON Schema](./schemas/elastic-stack-es-connector-sync-job-cancel.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-sync-job-id <string>` | The unique identifier of the connector sync job (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector sync-job-delete`

Delete a connector sync job.

[JSON Schema](./schemas/elastic-stack-es-connector-sync-job-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-sync-job-id <string>` | The unique identifier of the connector sync job to be deleted (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector sync-job-get`

Get a connector sync job.

[JSON Schema](./schemas/elastic-stack-es-connector-sync-job-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-sync-job-id <string>` | The unique identifier of the connector sync job (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector sync-job-list`

Get all connector sync jobs.

[JSON Schema](./schemas/elastic-stack-es-connector-sync-job-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--from <number>` | Starting offset |  |  |
| `--size <number>` | Specifies a max number of results to get |  |  |
| `--status <value>` | A sync job status to fetch connector sync jobs for |  |  |
| `--connector-id <string>` | A connector id to fetch connector sync jobs for |  |  |
| `--job-type <value>` | A comma-separated list of job types to fetch the sync jobs for |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector sync-job-post`

Create a connector sync job.

[JSON Schema](./schemas/elastic-stack-es-connector-sync-job-post.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id of the associated connector (required) |  |  |
| `--job-type <value>` |  |  |  |
| `--trigger-method <value>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-active-filtering`

Activate the connector draft filter.

[JSON Schema](./schemas/elastic-stack-es-connector-update-active-filtering.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-api-key-id`

Update the connector API key ID.

[JSON Schema](./schemas/elastic-stack-es-connector-update-api-key-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--api-key-id <string>` |  |  |  |
| `--api-key-secret-id <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-configuration`

Update the connector configuration.

[JSON Schema](./schemas/elastic-stack-es-connector-update-configuration.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--configuration <json>` |  |  |  |
| `--values <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-error`

Update the connector error field.

[JSON Schema](./schemas/elastic-stack-es-connector-update-error.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--error <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-filtering`

Update the connector filtering.

[JSON Schema](./schemas/elastic-stack-es-connector-update-filtering.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--filtering <json>` |  |  |  |
| `--rules <json>` |  |  |  |
| `--advanced-snippet <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-filtering-validation`

Update the connector draft filtering validation.

[JSON Schema](./schemas/elastic-stack-es-connector-update-filtering-validation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--validation <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-index-name`

Update the connector index name.

[JSON Schema](./schemas/elastic-stack-es-connector-update-index-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--index-name <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-name`

Update the connector name and description.

[JSON Schema](./schemas/elastic-stack-es-connector-update-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--name <string>` |  |  |  |
| `--description <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-native`

Update the connector is_native flag.

[JSON Schema](./schemas/elastic-stack-es-connector-update-native.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--is-native [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-pipeline`

Update the connector pipeline.

[JSON Schema](./schemas/elastic-stack-es-connector-update-pipeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--pipeline <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-scheduling`

Update the connector scheduling.

[JSON Schema](./schemas/elastic-stack-es-connector-update-scheduling.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--scheduling <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-service-type`

Update the connector service type.

[JSON Schema](./schemas/elastic-stack-es-connector-update-service-type.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--service-type <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es connector update-status`

Update the connector status.

[JSON Schema](./schemas/elastic-stack-es-connector-update-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | The unique identifier of the connector to be updated (required) |  |  |
| `--status <value>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es enrich`

Elasticsearch enrich API commands

| Command | Description |
|---------|-------------|
| `delete-policy` | Delete an enrich policy. |
| `execute-policy` | Run an enrich policy. |
| `get-policy` | Get an enrich policy. |
| `put-policy` | Create an enrich policy. |

### `elastic stack es enrich delete-policy`

Delete an enrich policy.

[JSON Schema](./schemas/elastic-stack-es-enrich-delete-policy.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Enrich policy to delete. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es enrich execute-policy`

Run an enrich policy.

[JSON Schema](./schemas/elastic-stack-es-enrich-execute-policy.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Enrich policy to execute. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. |  |  |
| `--wait-for-completion [value]` | If `true`, the request blocks other enrich policy execution requests until complete. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es enrich get-policy`

Get an enrich policy.

[JSON Schema](./schemas/elastic-stack-es-enrich-get-policy.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of enrich policy names used to limit the request. To return information for all enrich policies, omit this parameter. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es enrich put-policy`

Create an enrich policy.

[JSON Schema](./schemas/elastic-stack-es-enrich-put-policy.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of the enrich policy to create or update. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. |  |  |
| `--geo-match <json>` | Matches enrich data to incoming documents based on a `geo_shape` query. |  |  |
| `--match <json>` | Matches enrich data to incoming documents based on a `term` query. |  |  |
| `--range <json>` | Matches a number, date, or IP address in incoming documents to a range in the enrich index based on a `term` query. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es eql`

Elasticsearch eql API commands

| Command | Description |
|---------|-------------|
| `delete` | Delete an async EQL search. |
| `get` | Get async EQL search results. |
| `get-status` | Get the async EQL status. |
| `search` | Get EQL search results. |

### `elastic stack es eql delete`

Delete an async EQL search.

[JSON Schema](./schemas/elastic-stack-es-eql-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the search to delete. A search ID is provided in the EQL search API's response for an async search. A search ID is also provided if the request’s `keep_on_completion` parameter is `true`. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es eql get`

Get async EQL search results.

[JSON Schema](./schemas/elastic-stack-es-eql-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the search. (required) |  |  |
| `--keep-alive <string>` | Period for which the search and its results are stored on the cluster. Defaults to the keep_alive value set by the search’s EQL search API request. |  |  |
| `--wait-for-completion-timeout <string>` | Timeout duration to wait for the request to finish. Defaults to no timeout, meaning the request waits for complete search results. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es eql get-status`

Get the async EQL status.

[JSON Schema](./schemas/elastic-stack-es-eql-get-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the search. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es eql search`

Get EQL search results.

[JSON Schema](./schemas/elastic-stack-es-eql-search.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of index names to scope the operation (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Whether to expand wildcard expression to concrete indices that are open, closed or both. |  |  |
| `--ccs-minimize-roundtrips [value]` | Indicates whether network round-trips should be minimized as part of cross-cluster search requests execution |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--query <string>` | EQL query you wish to run. (required) |  |  |
| `--case-sensitive [value]` |  |  |  |
| `--event-category-field <string>` | Field containing the event classification, such as process, file, or network. |  |  |
| `--tiebreaker-field <string>` | Field used to sort hits with the same timestamp in ascending order |  |  |
| `--timestamp-field <string>` | Field containing event timestamp. |  |  |
| `--fetch-size <number>` | Maximum number of events to search at a time for sequence queries. |  |  |
| `--filter <json>` | Query, written in Query DSL, used to filter the events on which the EQL query runs. |  |  |
| `--keep-alive <string>` |  |  |  |
| `--keep-on-completion [value]` |  |  |  |
| `--wait-for-completion-timeout <string>` |  |  |  |
| `--allow-partial-search-results [value]` | Allow query execution also in case of shard failures. If true, the query will keep running and will return results based on the available shards. For sequences, the behavior can be further refined using allow_partial_sequence_results |  |  |
| `--allow-partial-sequence-results [value]` | This flag applies only to sequences and has effect only if allow_partial_search_results=true. If true, the sequence query will return results based on the available shards, ignoring the others. If false, the sequence query will return successfully, but will always have empty results. |  |  |
| `--size <number>` | For basic queries, the maximum number of matching events to return. Defaults to 10 |  |  |
| `--fields <json>` | Array of wildcard (*) patterns. The response returns values for field names matching these patterns in the fields property of each hit. |  |  |
| `--result-position <value>` |  |  |  |
| `--runtime-mappings <json>` |  |  |  |
| `--max-samples-per-key <number>` | By default, the response of a sample query contains up to `10` samples, with one sample per unique set of join keys. Use the `size` parameter to get a smaller or larger set of samples. To retrieve more than one sample per set of join keys, use the `max_samples_per_key` parameter. Pipes are not supported for sample queries. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es esql`

Elasticsearch esql API commands

| Command | Description |
|---------|-------------|
| `delete-view` | Delete an ES\|QL view. |
| `get-query` | Get a specific running ES\|QL query information. |
| `get-view` | Get an ES\|QL view. |
| `list-queries` | Get running ES\|QL queries information. |
| `put-view` | Create or update an ES\|QL view. |
| `query` | Run an ES\|QL query. |

### `elastic stack es esql delete-view`

Delete an ES|QL view.

[JSON Schema](./schemas/elastic-stack-es-esql-delete-view.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The view name to remove. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es esql get-query`

Get a specific running ES|QL query information.

[JSON Schema](./schemas/elastic-stack-es-esql-get-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The query ID (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es esql get-view`

Get an ES|QL view.

[JSON Schema](./schemas/elastic-stack-es-esql-get-view.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The comma-separated view names to retrieve. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es esql list-queries`

Get running ES|QL queries information.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es esql put-view`

Create or update an ES|QL view.

[JSON Schema](./schemas/elastic-stack-es-esql-put-view.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The view name to create or update. (required) |  |  |
| `--query <string>` | The ES\|QL query string from which to create a view. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es esql query`

Run an ES|QL query.

[JSON Schema](./schemas/elastic-stack-es-esql-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--format <value>` | A short version of the Accept header, e.g. json, yaml. `csv`, `tsv`, and `txt` formats will return results in a tabular format, excluding other metadata fields from the response. |  |  |
| `--delimiter <string>` | The character to use between values within a CSV row. Only valid for the CSV format. |  |  |
| `--drop-null-columns [value]` | Should columns that are entirely `null` be removed from the `columns` and `values` portion of the results? Defaults to `false`. If `true` then the response will include an extra section under the name `all_columns` which has the name of all columns. |  |  |
| `--allow-partial-results [value]` | If `true`, partial results will be returned if there are shard failures, but the query can continue to execute on other clusters and shards. If `false`, the query will fail if there are any failures. To override the default behavior, you can set the `esql.query.allow_partial_results` cluster setting to `false`. |  |  |
| `--columnar [value]` | By default, ES\|QL returns results as rows. For example, FROM returns each individual document as one row. For the JSON, YAML, CBOR and smile formats, ES\|QL can return the results in a columnar fashion where one row represents all the values of a certain column in the results. |  |  |
| `--filter <json>` | Specify a Query DSL query in the filter parameter to filter the set of documents that an ES\|QL query runs on. |  |  |
| `--time-zone <string>` | Sets the default timezone of the query. |  |  |
| `--locale <string>` | Returns results (especially dates) formatted per the conventions of the locale. |  |  |
| `--params <json>` | To avoid any attempts of hacking or code injection, extract the values in a separate list of parameters. Use question mark placeholders (?) in the query string for each of the parameters. |  |  |
| `--profile [value]` | If provided and `true` the response will include an extra `profile` object with information on how the query was executed. This information is for human debugging and its format can change at any time but it can give some insight into the performance of each part of the query. |  |  |
| `--query <string>` | The ES\|QL query API accepts an ES\|QL query string in the query parameter, runs it, and returns the results. (required) |  |  |
| `--tables <json>` | Tables to use with the LOOKUP operation. The top level key is the table name and the next level key is the column name. |  |  |
| `--include-ccs-metadata [value]` | When set to `true` and performing a cross-cluster/cross-project query, the response will include an extra `_clusters` object with information about the clusters that participated in the search along with info such as shards count. |  |  |
| `--include-execution-metadata [value]` | When set to `true`, the response will include an extra `_clusters` object with information about the clusters that participated in the search along with info such as shards count. This is similar to `include_ccs_metadata`, but it also returns metadata when the query is not CCS/CPS |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es indices`

Elasticsearch indices API commands

| Command | Description |
|---------|-------------|
| `add-block` | Add an index block. |
| `analyze` | Get tokens from text analysis. |
| `cancel-migrate-reindex` | Cancel a migration reindex operation. |
| `create` | Create an index. |
| `create-data-stream` | Create a data stream. |
| `create-from` | Create an index from a source index. |
| `delete` | Delete indices. |
| `delete-alias` | Delete an alias. |
| `delete-data-stream` | Delete data streams. |
| `delete-index-template` | Delete an index template. |
| `exists` | Check indices. |
| `exists-alias` | Check aliases. |
| `exists-index-template` | Check index templates. |
| `explain-data-lifecycle` | Get the status for a data stream lifecycle. |
| `get` | Get index information. |
| `get-alias` | Get aliases. |
| `get-data-lifecycle` | Get data stream lifecycles. |
| `get-data-stream` | Get data streams. |
| `get-data-stream-mappings` | Get data stream mappings. |
| `get-data-stream-options` | Get data stream options. |
| `get-data-stream-settings` | Get data stream settings. |
| `get-index-template` | Get index templates. |
| `get-mapping` | Get mapping definitions. |
| `get-migrate-reindex-status` | Get the migration reindexing status. |
| `get-settings` | Get index settings. |
| `migrate-to-data-stream` | Convert an index alias to a data stream. |
| `modify-data-stream` | Update data streams. |
| `put-alias` | Create or update an alias. |
| `put-data-lifecycle` | Update data stream lifecycles. |
| `put-data-stream-mappings` | Update data stream mappings. |
| `put-data-stream-options` | Update data stream options. |
| `put-data-stream-settings` | Update data stream settings. |
| `put-index-template` | Create or update an index template. |
| `put-mapping` | Update field mappings. |
| `put-settings` | Update index settings. |
| `refresh` | Refresh an index. |
| `remove-block` | Remove an index block. |
| `resolve-index` | Resolve indices. |
| `rollover` | Roll over to a new index. |
| `simulate-index-template` | Simulate an index. |
| `simulate-template` | Simulate an index template. |
| `update-aliases` | Create or update an alias. |
| `validate-query` | Validate a query. |

### `elastic stack es indices add-block`

Add an index block.

[JSON Schema](./schemas/elastic-stack-es-indices-add-block.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list or wildcard expression of index names used to limit the request. By default, you must explicitly name the indices you are adding blocks to. To allow the adding of blocks to indices with `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to `false`. You can update this setting in the `elasticsearch.yml` file or by using the cluster update settings API. (required) |  |  |
| `--block <value>` | The block type to add to the index. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--master-timeout <string>` | The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--timeout <string>` | The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices analyze`

Get tokens from text analysis.

[JSON Schema](./schemas/elastic-stack-es-indices-analyze.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Index used to derive the analyzer. If specified, the `analyzer` or field parameter overrides this value. If no index is specified or the index does not have a default analyzer, the analyze API uses the standard analyzer. |  |  |
| `--analyzer <string>` | The name of the analyzer that should be applied to the provided `text`. This could be a built-in analyzer, or an analyzer that’s been configured in the index. |  |  |
| `--attributes <json>` | Array of token attributes used to filter the output of the `explain` parameter. |  |  |
| `--char-filter <json>` | Array of character filters used to preprocess characters before the tokenizer. |  |  |
| `--explain [value]` | If `true`, the response includes token attributes and additional details. |  |  |
| `--field <string>` | Field used to derive the analyzer. To use this parameter, you must specify an index. If specified, the `analyzer` parameter overrides this value. |  |  |
| `--filter <json>` | Array of token filters used to apply after the tokenizer. |  |  |
| `--normalizer <string>` | Normalizer to use to convert text into a single token. |  |  |
| `--text <string>` | Text to analyze. If an array of strings is provided, it is analyzed as a multi-value field. |  |  |
| `--tokenizer <string>` | Tokenizer to use to convert text into tokens. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices cancel-migrate-reindex`

Cancel a migration reindex operation.

[JSON Schema](./schemas/elastic-stack-es-indices-cancel-migrate-reindex.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | The index or data stream name (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices create`

Create an index.

[JSON Schema](./schemas/elastic-stack-es-indices-create.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Name of the index you wish to create. Index names must meet the following criteria: * Lowercase only * Cannot include ``, `/`, `*`, `?`, `"`, `<`, `>`, `\|`, ` ` (space character), `,`, or `#` * Indices prior to 7.0 could contain a colon (`:`), but that has been deprecated and will not be supported in later versions * Cannot start with `-`, `_`, or `+` * Cannot be `.` or `..` * Cannot be longer than 255 bytes (note thtat it is bytes, so multi-byte characters will reach the limit faster) * Names starting with `.` are deprecated, except for hidden indices and internal indices managed by plugins (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). |  |  |
| `--aliases <json>` | Aliases for the index. |  |  |
| `--mappings <json>` | Mapping for fields in the index. If specified, this mapping can include: - Field names - Field data types - Mapping parameters |  |  |
| `--settings <json>` | Configuration options for the index. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices create-data-stream`

Create a data stream.

[JSON Schema](./schemas/elastic-stack-es-indices-create-data-stream.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of the data stream, which must meet the following criteria: Lowercase only; Cannot include ``, `/`, `*`, `?`, `"`, `<`, `>`, `\|`, `,`, `#`, `:`, or a space character; Cannot start with `-`, `_`, `+`, or `.ds-`; Cannot be `.` or `..`; Cannot be longer than 255 bytes. Multi-byte characters count towards this limit faster. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices create-from`

Create an index from a source index.

[JSON Schema](./schemas/elastic-stack-es-indices-create-from.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--source <string>` | The source index or data stream name (required) |  |  |
| `--dest <string>` | The destination index or data stream name (required) |  |  |
| `--create-from <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices delete`

Delete indices.

[JSON Schema](./schemas/elastic-stack-es-indices-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of indices to delete. You cannot specify index aliases. By default, this parameter does not support wildcards (`*`) or `_all`. To use wildcards or `_all`, set the `action.destructive_requires_name` cluster setting to `false`. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices delete-alias`

Delete an alias.

[JSON Schema](./schemas/elastic-stack-es-indices-delete-alias.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams or indices used to limit the request. Supports wildcards (`*`). (required) |  |  |
| `--name <string>` | Comma-separated list of aliases to remove. Supports wildcards (`*`). To remove all aliases, use `*` or `_all`. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices delete-data-stream`

Delete data streams.

[JSON Schema](./schemas/elastic-stack-es-indices-delete-data-stream.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of data streams to delete. Wildcard (`*`) expressions are supported. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--expand-wildcards <value>` | Type of data stream that wildcard patterns can match. Supports comma-separated values,such as `open,hidden`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices delete-index-template`

Delete an index template.

[JSON Schema](./schemas/elastic-stack-es-indices-delete-index-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of index template names used to limit the request. Wildcard (*) expressions are supported. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices exists`

Check indices.

[JSON Schema](./schemas/elastic-stack-es-indices-exists.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and aliases. Supports wildcards (`*`). (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--flat-settings [value]` | If `true`, returns settings in flat format. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--include-defaults [value]` | If `true`, return all default settings in the response. |  |  |
| `--local [value]` | If `true`, the request retrieves information from the local node only. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices exists-alias`

Check aliases.

[JSON Schema](./schemas/elastic-stack-es-indices-exists-alias.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of aliases to check. Supports wildcards (`*`). (required) |  |  |
| `--index <string>` | Comma-separated list of data streams or indices used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices exists-index-template`

Check index templates.

[JSON Schema](./schemas/elastic-stack-es-indices-exists-index-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of index template names used to limit the request. Wildcard (*) expressions are supported. (required) |  |  |
| `--local [value]` | If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node. |  |  |
| `--flat-settings [value]` | If true, returns settings in flat format. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices explain-data-lifecycle`

Get the status for a data stream lifecycle.

[JSON Schema](./schemas/elastic-stack-es-indices-explain-data-lifecycle.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of index names to explain (required) |  |  |
| `--include-defaults [value]` | Indicates if the API should return the default values the system uses for the index's lifecycle |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get`

Get index information.

[JSON Schema](./schemas/elastic-stack-es-indices-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard expressions (*) are supported. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard expressions can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as open,hidden. |  |  |
| `--flat-settings [value]` | If true, returns settings in flat format. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--include-defaults [value]` | If true, return all default settings in the response. |  |  |
| `--local [value]` | If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--features <value>` | Return only information on specified index features |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-alias`

Get aliases.

[JSON Schema](./schemas/elastic-stack-es-indices-get-alias.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of aliases to retrieve. Supports wildcards (`*`). To retrieve all aliases, omit this parameter or use `*` or `_all`. |  |  |
| `--index <string>` | Comma-separated list of data streams or indices used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-data-lifecycle`

Get data stream lifecycles.

[JSON Schema](./schemas/elastic-stack-es-indices-get-data-lifecycle.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of data streams to limit the request. Supports wildcards (`*`). To target all data streams, omit this parameter or use `*` or `_all`. (required) |  |  |
| `--expand-wildcards <value>` | Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--include-defaults [value]` | If `true`, return all default settings in the response. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-data-stream`

Get data streams.

[JSON Schema](./schemas/elastic-stack-es-indices-get-data-stream.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of data stream names used to limit the request. Wildcard (`*`) expressions are supported. If omitted, all data streams are returned. |  |  |
| `--expand-wildcards <value>` | Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--include-defaults [value]` | If true, returns all relevant default configurations for the index template. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--verbose [value]` | Whether the maximum timestamp for each data stream should be calculated and returned. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-data-stream-mappings`

Get data stream mappings.

[JSON Schema](./schemas/elastic-stack-es-indices-get-data-stream-mappings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | A comma-separated list of data streams or data stream patterns. Supports wildcards (`*`). (required) |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-data-stream-options`

Get data stream options.

[JSON Schema](./schemas/elastic-stack-es-indices-get-data-stream-options.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of data streams to limit the request. Supports wildcards (`*`). To target all data streams, omit this parameter or use `*` or `_all`. (required) |  |  |
| `--expand-wildcards <value>` | Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-data-stream-settings`

Get data stream settings.

[JSON Schema](./schemas/elastic-stack-es-indices-get-data-stream-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | A comma-separated list of data streams or data stream patterns. Supports wildcards (`*`). (required) |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-index-template`

Get index templates.

[JSON Schema](./schemas/elastic-stack-es-indices-get-index-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of index template to retrieve. Wildcard (*) expressions are supported. |  |  |
| `--local [value]` | If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node. |  |  |
| `--flat-settings [value]` | If true, returns settings in flat format. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--include-defaults [value]` | If true, returns all relevant default configurations for the index template. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-mapping`

Get mapping definitions.

[JSON Schema](./schemas/elastic-stack-es-indices-get-mapping.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--local [value]` | If `true`, the request retrieves information from the local node only. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-migrate-reindex-status`

Get the migration reindexing status.

[JSON Schema](./schemas/elastic-stack-es-indices-get-migrate-reindex-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | The index or data stream name. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices get-settings`

Get index settings.

[JSON Schema](./schemas/elastic-stack-es-indices-get-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--name <string>` | Comma-separated list or wildcard expression of settings to retrieve. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--flat-settings [value]` | If `true`, returns settings in flat format. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--include-defaults [value]` | If `true`, return all default settings in the response. |  |  |
| `--local [value]` | If `true`, the request retrieves information from the local node only. If `false`, information is retrieved from the master node. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices migrate-to-data-stream`

Convert an index alias to a data stream.

[JSON Schema](./schemas/elastic-stack-es-indices-migrate-to-data-stream.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of the index alias to convert to a data stream. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices modify-data-stream`

Update data streams.

[JSON Schema](./schemas/elastic-stack-es-indices-modify-data-stream.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--actions <json>` | Actions to perform. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices put-alias`

Create or update an alias.

[JSON Schema](./schemas/elastic-stack-es-indices-put-alias.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams or indices to add. Supports wildcards (`*`). Wildcard patterns that match both data streams and indices return an error. (required) |  |  |
| `--name <string>` | Alias to update. If the alias doesn’t exist, the request creates it. Index alias names support date math. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--filter <json>` | Query used to limit documents the alias can access. |  |  |
| `--index-routing <string>` | Value used to route indexing operations to a specific shard. If specified, this overwrites the `routing` value for indexing operations. Data stream aliases don’t support this parameter. |  |  |
| `--is-write-index [value]` | If `true`, sets the write index or data stream for the alias. If an alias points to multiple indices or data streams and `is_write_index` isn’t set, the alias rejects write requests. If an index alias points to one index and `is_write_index` isn’t set, the index automatically acts as the write index. Data stream aliases don’t automatically set a write data stream, even if the alias points to one data stream. |  |  |
| `--routing <string>` | Value used to route indexing and search operations to a specific shard. Data stream aliases don’t support this parameter. |  |  |
| `--search-routing <string>` | Value used to route search operations to a specific shard. If specified, this overwrites the `routing` value for search operations. Data stream aliases don’t support this parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices put-data-lifecycle`

Update data stream lifecycles.

[JSON Schema](./schemas/elastic-stack-es-indices-put-data-lifecycle.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of data streams used to limit the request. Supports wildcards (`*`). To target all data streams use `*` or `_all`. (required) |  |  |
| `--expand-wildcards <value>` | Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--data-retention <string>` | If defined, every document added to this data stream will be stored at least for this time frame. Any time after this duration the document could be deleted. When empty, every document in this data stream will be stored indefinitely. |  |  |
| `--downsampling <json>` | The downsampling configuration to execute for the managed backing index after rollover. |  |  |
| `--downsampling-method <value>` | The method used to downsample the data. There are two options `aggregate` and `last_value`. It requires `downsampling` to be defined. Defaults to `aggregate`. |  |  |
| `--enabled [value]` | If defined, it turns data stream lifecycle on/off (`true`/`false`) for this data stream. A data stream lifecycle that's disabled (enabled: `false`) will have no effect on the data stream. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices put-data-stream-mappings`

Update data stream mappings.

[JSON Schema](./schemas/elastic-stack-es-indices-put-data-stream-mappings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | A comma-separated list of data streams or data stream patterns. (required) |  |  |
| `--dry-run [value]` | If `true`, the request does not actually change the mappings on any data streams. Instead, it simulates changing the settings and reports back to the user what would have happened had these settings actually been applied. |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | The period to wait for a response. If no response is received before the  timeout expires, the request fails and returns an error. |  |  |
| `--mappings <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |

### `elastic stack es indices put-data-stream-options`

Update data stream options.

[JSON Schema](./schemas/elastic-stack-es-indices-put-data-stream-options.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated list of data streams used to limit the request. Supports wildcards (`*`). To target all data streams use `*` or `_all`. (required) |  |  |
| `--expand-wildcards <value>` | Type of data stream that wildcard patterns can match. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--failure-store <json>` | If defined, it will update the failure store configuration of every data stream resolved by the name expression. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices put-data-stream-settings`

Update data stream settings.

[JSON Schema](./schemas/elastic-stack-es-indices-put-data-stream-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | A comma-separated list of data streams or data stream patterns. (required) |  |  |
| `--dry-run [value]` | If `true`, the request does not actually change the settings on any data streams or indices. Instead, it simulates changing the settings and reports back to the user what would have happened had these settings actually been applied. |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | The period to wait for a response. If no response is received before the  timeout expires, the request fails and returns an error. |  |  |
| `--settings <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |

### `elastic stack es indices put-index-template`

Create or update an index template.

[JSON Schema](./schemas/elastic-stack-es-indices-put-index-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Index or template name (required) |  |  |
| `--create [value]` | If `true`, this request cannot replace or update existing index templates. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--cause <string>` | User defined reason for creating or updating the index template |  |  |
| `--index-patterns <string>` | Array of wildcard (`*`) expressions used to match the names of data streams and indices during creation. |  |  |
| `--composed-of <json>` | An ordered list of component template names. Component templates are merged in the order specified, meaning that the last component template specified has the highest precedence. |  |  |
| `--template <json>` | Template to be applied. It may optionally include an `aliases`, `mappings`, or `settings` configuration. |  |  |
| `--data-stream <json>` | If this object is included, the template is used to create data streams and their backing indices. Supports an empty object. Data streams require a matching index template with a `data_stream` object. |  |  |
| `--priority <number>` | Priority to determine index template precedence when a new data stream or index is created. The index template with the highest priority is chosen. If no priority is specified the template is treated as though it is of priority 0 (lowest priority). This number is not automatically generated by Elasticsearch. |  |  |
| `--version <number>` | Version number used to manage index templates externally. This number is not automatically generated by Elasticsearch. External systems can use these version numbers to simplify template management. To unset a version, replace the template without specifying one. |  |  |
| `--meta <json>` | Optional user metadata about the index template. It may have any contents. It is not automatically generated or used by Elasticsearch. This user-defined object is stored in the cluster state, so keeping it short is preferable To unset the metadata, replace the template without specifying it. |  |  |
| `--allow-auto-create [value]` | This setting overrides the value of the `action.auto_create_index` cluster setting. If set to `true` in a template, then indices can be automatically created using that template even if auto-creation of indices is disabled via `actions.auto_create_index`. If set to `false`, then indices or data streams matching the template must always be explicitly created, and may never be automatically created. |  |  |
| `--ignore-missing-component-templates <json>` | The configuration option ignore_missing_component_templates can be used when an index template references a component template that might not exist |  |  |
| `--deprecated [value]` | Marks this index template as deprecated. When creating or updating a non-deprecated index template that uses deprecated components, Elasticsearch will emit a deprecation warning. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices put-mapping`

Update field mappings.

[JSON Schema](./schemas/elastic-stack-es-indices-put-mapping.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of index names the mapping should be added to (supports wildcards). Use `_all` or omit to add the mapping on all indices. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--write-index-only [value]` | If `true`, the mappings are applied only to the current write index for the target. |  |  |
| `--date-detection [value]` | Controls whether dynamic date detection is enabled. |  |  |
| `--dynamic [value]` | Controls whether new fields are added dynamically. |  |  |
| `--dynamic-date-formats <json>` | If date detection is enabled then new string fields are checked against 'dynamic_date_formats' and if the value matches then a new date field is added instead of string. |  |  |
| `--dynamic-templates <json>` | Specify dynamic templates for the mapping. |  |  |
| `--field-names <json>` | Control whether field names are enabled for the index. |  |  |
| `--meta <json>` | A mapping type can have custom meta data associated with it. These are not used at all by Elasticsearch, but can be used to store application-specific metadata. |  |  |
| `--numeric-detection [value]` | Automatically map strings into numeric data types for all fields. |  |  |
| `--properties <json>` | Mapping for a field. For new fields, this mapping can include: - Field name - Field data type - Mapping parameters |  |  |
| `--routing <json>` | Enable making a routing value required on indexed documents. |  |  |
| `--source <json>` | Control whether the _source field is enabled on the index. |  |  |
| `--runtime <json>` | Mapping of runtime fields for the index. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices put-settings`

Update index settings.

[JSON Schema](./schemas/elastic-stack-es-indices-put-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--flat-settings [value]` | If `true`, returns settings in flat format. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--preserve-existing [value]` | If `true`, existing index settings remain unchanged. |  |  |
| `--reopen [value]` | Whether to close and reopen the index to apply non-dynamic settings. If set to `true` the indices to which the settings are being applied will be closed temporarily and then reopened in order to apply the changes. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the  timeout expires, the request fails and returns an error. |  |  |
| `--settings <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices refresh`

Refresh an index.

[JSON Schema](./schemas/elastic-stack-es-indices-refresh.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices remove-block`

Remove an index block.

[JSON Schema](./schemas/elastic-stack-es-indices-remove-block.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list or wildcard expression of index names used to limit the request. By default, you must explicitly name the indices you are removing blocks from. To allow the removal of blocks from indices with `_all`, `*`, or other wildcard expressions, change the `action.destructive_requires_name` setting to `false`. You can update this setting in the `elasticsearch.yml` file or by using the cluster update settings API. (required) |  |  |
| `--block <value>` | The block type to remove from the index. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--master-timeout <string>` | The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--timeout <string>` | The period to wait for a response from all relevant nodes in the cluster after updating the cluster metadata. If no response is received before the timeout expires, the cluster metadata update still applies but the response will indicate that it was not completely acknowledged. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices resolve-index`

Resolve indices.

[JSON Schema](./schemas/elastic-stack-es-indices-resolve-index.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Comma-separated name(s) or index pattern(s) of the indices, aliases, and data streams to resolve. Resources on remote clusters can be specified using the `<cluster>`:`<name>` syntax. (required) |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--mode <value>` | Filter indices by index mode - standard, lookup, time_series, etc. Comma-separated list of IndexMode. Empty means no filter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices rollover`

Roll over to a new index.

[JSON Schema](./schemas/elastic-stack-es-indices-rollover.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--alias <string>` | Name of the data stream or index alias to roll over. (required) |  |  |
| `--new-index <string>` | Name of the index to create. Supports date math. Data streams do not support this parameter. |  |  |
| `--dry-run [value]` | If `true`, checks whether the current index satisfies the specified conditions but does not perform a rollover. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. Set to all or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). |  |  |
| `--lazy [value]` | If set to true, the rollover action will only mark a data stream to signal that it needs to be rolled over at the next write. Only allowed on data streams. |  |  |
| `--aliases <json>` | Aliases for the target index. Data streams do not support this parameter. |  |  |
| `--conditions <json>` | Conditions for the rollover. If specified, Elasticsearch only performs the rollover if the current index satisfies these conditions. If this parameter is not specified, Elasticsearch performs the rollover unconditionally. If conditions are specified, at least one of them must be a `max_*` condition. The index will rollover if any `max_*` condition is satisfied and all `min_*` conditions are satisfied. |  |  |
| `--mappings <json>` | Mapping for fields in the index. If specified, this mapping can include field names, field data types, and mapping paramaters. |  |  |
| `--settings <json>` | Configuration options for the index. Data streams do not support this parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |

### `elastic stack es indices simulate-index-template`

Simulate an index.

[JSON Schema](./schemas/elastic-stack-es-indices-simulate-index-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of the index to simulate (required) |  |  |
| `--create [value]` | Whether the index template we optionally defined in the body should only be dry-run added if new or can also replace an existing one |  |  |
| `--cause <string>` | User defined reason for dry-run creating the new template for simulation purposes |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--include-defaults [value]` | If true, returns all relevant default configurations for the index template. |  |  |
| `--index-template <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices simulate-template`

Simulate an index template.

[JSON Schema](./schemas/elastic-stack-es-indices-simulate-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Name of the index template to simulate. To test a template configuration before you add it to the cluster, omit this parameter and specify the template configuration in the request body. |  |  |
| `--create [value]` | If true, the template passed in the body is only used if no existing templates match the same index patterns. If false, the simulation uses the template with the highest priority. Note that the template is not permanently added or updated in either case; it is only used for the simulation. |  |  |
| `--cause <string>` | User defined reason for dry-run creating the new template for simulation purposes |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--include-defaults [value]` | If true, returns all relevant default configurations for the index template. |  |  |
| `--allow-auto-create [value]` | This setting overrides the value of the `action.auto_create_index` cluster setting. If set to `true` in a template, then indices can be automatically created using that template even if auto-creation of indices is disabled via `actions.auto_create_index`. If set to `false`, then indices or data streams matching the template must always be explicitly created, and may never be automatically created. |  |  |
| `--index-patterns <string>` | Array of wildcard (`*`) expressions used to match the names of data streams and indices during creation. |  |  |
| `--composed-of <json>` | An ordered list of component template names. Component templates are merged in the order specified, meaning that the last component template specified has the highest precedence. |  |  |
| `--template <json>` | Template to be applied. It may optionally include an `aliases`, `mappings`, or `settings` configuration. |  |  |
| `--data-stream <json>` | If this object is included, the template is used to create data streams and their backing indices. Supports an empty object. Data streams require a matching index template with a `data_stream` object. |  |  |
| `--priority <number>` | Priority to determine index template precedence when a new data stream or index is created. The index template with the highest priority is chosen. If no priority is specified the template is treated as though it is of priority 0 (lowest priority). This number is not automatically generated by Elasticsearch. |  |  |
| `--version <number>` | Version number used to manage index templates externally. This number is not automatically generated by Elasticsearch. |  |  |
| `--meta <json>` | Optional user metadata about the index template. May have any contents. This map is not automatically generated by Elasticsearch. |  |  |
| `--ignore-missing-component-templates <json>` | The configuration option ignore_missing_component_templates can be used when an index template references a component template that might not exist |  |  |
| `--deprecated [value]` | Marks this index template as deprecated. When creating or updating a non-deprecated index template that uses deprecated components, Elasticsearch will emit a deprecation warning. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices update-aliases`

Create or update an alias.

[JSON Schema](./schemas/elastic-stack-es-indices-update-aliases.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--actions <json>` | Actions to perform. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es indices validate-query`

Validate a query.

[JSON Schema](./schemas/elastic-stack-es-indices-validate-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and aliases to search. Supports wildcards (`*`). To search all data streams or indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--all-shards [value]` | If `true`, the validation is executed on all shards instead of one random shard per index. |  |  |
| `--analyzer <string>` | Analyzer to use for the query string. This parameter can only be used when the `q` query string parameter is specified. |  |  |
| `--analyze-wildcard [value]` | If `true`, wildcard and prefix queries are analyzed. |  |  |
| `--default-operator <value>` | The default operator for query string query: `and` or `or`. |  |  |
| `--df <string>` | Field to use as default where no field prefix is given in the query string. This parameter can only be used when the `q` query string parameter is specified. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--explain [value]` | If `true`, the response returns detailed information if an error has occurred. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--lenient [value]` | If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. |  |  |
| `--rewrite [value]` | If `true`, returns a more detailed explanation showing the actual Lucene query that will be executed. |  |  |
| `--q <string>` | Query in the Lucene query string syntax. |  |  |
| `--query <json>` | Query in the Lucene query string syntax. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es inference`

Elasticsearch inference API commands

| Command | Description |
|---------|-------------|
| `chat-completion-unified` | Perform chat completion inference on the service. |
| `completion` | Perform completion inference on the service. |
| `delete` | Delete an inference endpoint. |
| `embedding` | Perform dense embedding inference on the service. |
| `get` | Get an inference endpoint. |
| `inference` | Perform inference on the service. |
| `put` | Create an inference endpoint. |
| `put-ai21` | Create a AI21 inference endpoint. |
| `put-alibabacloud` | Create an AlibabaCloud AI Search inference endpoint. |
| `put-amazonbedrock` | Create an Amazon Bedrock inference endpoint. |
| `put-amazonsagemaker` | Create an Amazon SageMaker inference endpoint. |
| `put-anthropic` | Create an Anthropic inference endpoint. |
| `put-azureaistudio` | Create an Azure AI studio inference endpoint. |
| `put-azureopenai` | Create an Azure OpenAI inference endpoint. |
| `put-cohere` | Create a Cohere inference endpoint. |
| `put-contextualai` | Create an Contextual AI inference endpoint. |
| `put-custom` | Create a custom inference endpoint. |
| `put-deepseek` | Create a DeepSeek inference endpoint. |
| `put-elasticsearch` | Create an Elasticsearch inference endpoint. |
| `put-elser` | Create an ELSER inference endpoint. |
| `put-fireworksai` | Create a Fireworks AI inference endpoint. |
| `put-googleaistudio` | Create an Google AI Studio inference endpoint. |
| `put-googlevertexai` | Create a Google Vertex AI inference endpoint. |
| `put-groq` | Create a Groq inference endpoint. |
| `put-hugging-face` | Create a Hugging Face inference endpoint. |
| `put-jinaai` | Create an JinaAI inference endpoint. |
| `put-llama` | Create a Llama inference endpoint. |
| `put-mistral` | Create a Mistral inference endpoint. |
| `put-nvidia` | Create an Nvidia inference endpoint. |
| `put-openai` | Create an OpenAI inference endpoint. |
| `put-openshift-ai` | Create an OpenShift AI inference endpoint. |
| `put-voyageai` | Create a VoyageAI inference endpoint. |
| `put-watsonx` | Create a Watsonx inference endpoint. |
| `rerank` | Perform reranking inference on the service. |
| `sparse-embedding` | Perform sparse embedding inference on the service. |
| `text-embedding` | Perform text embedding inference on the service. |

### `elastic stack es inference chat-completion-unified`

Perform chat completion inference on the service.

[JSON Schema](./schemas/elastic-stack-es-inference-chat-completion-unified.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--inference-id <string>` | The inference Id (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference request to complete. |  |  |
| `--chat-completion-request <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference completion`

Perform completion inference on the service.

[JSON Schema](./schemas/elastic-stack-es-inference-completion.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--inference-id <string>` | The inference Id (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference request to complete. |  |  |
| `--input <string>` | Inference input. Either a string or an array of strings. (required) |  |  |
| `--task-settings <json>` | Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference delete`

Delete an inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The task type |  |  |
| `--inference-id <string>` | The inference identifier. (required) |  |  |
| `--dry-run [value]` | When true, checks the semantic_text fields and inference processors that reference the endpoint and returns them in a list, but does not delete the endpoint. |  |  |
| `--force [value]` | When true, the inference endpoint is forcefully deleted even if it is still being used by ingest processors or semantic text fields. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |

### `elastic stack es inference embedding`

Perform dense embedding inference on the service.

[JSON Schema](./schemas/elastic-stack-es-inference-embedding.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--inference-id <string>` | The inference Id (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference request to complete. |  |  |
| `--embedding <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference get`

Get an inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The task type of the endpoint to return |  |  |
| `--inference-id <string>` | The inference Id of the endpoint to return. Using `_all` or `*` will return all endpoints with the specified `task_type` if one is specified, or all endpoints for all task types if no `task_type` is specified |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference inference`

Perform inference on the service.

[JSON Schema](./schemas/elastic-stack-es-inference-inference.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of inference task that the model performs. |  |  |
| `--inference-id <string>` | The unique identifier for the inference endpoint. (required) |  |  |
| `--timeout <string>` | The amount of time to wait for the inference request to complete. |  |  |
| `--query <string>` | The query input, which is required only for the `rerank` task. It is not required for other tasks. |  |  |
| `--input <string>` | The text on which you want to perform the inference task. It can be a single string or an array. > info > Inference endpoints for the `completion` task type currently only support a single string as input. (required) |  |  |
| `--input-type <string>` | Specifies the input data type for the embedding model. The `input_type` parameter only applies to Inference Endpoints with the `embedding` or `text_embedding` task type. Possible values include: * `SEARCH` * `INGEST` * `CLASSIFICATION` * `CLUSTERING` Not all services support all values. Unsupported values will trigger a validation exception. Accepted values depend on the configured inference service, refer to the relevant service-specific documentation for more info. > info > The `input_type` parameter specified on the root level of the request body will take precedence over the `input_type` parameter specified in `task_settings`. |  |  |
| `--task-settings <json>` | Task settings for the individual inference request. These settings are specific to the task type you specified and override the task settings specified when initializing the service. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put`

Create an inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The task type. Refer to the integration list in the API description for the available task types. |  |  |
| `--inference-id <string>` | The inference Id (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--inference-config <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-ai21`

Create a AI21 inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-ai21.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--ai21-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `ai21`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `ai21` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-alibabacloud`

Create an AlibabaCloud AI Search inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-alibabacloud.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--alibabacloud-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `sparse_embedding` or `text_embedding` task types. Not applicable to the `rerank` or `completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `alibabacloud-ai-search`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `alibabacloud-ai-search` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-amazonbedrock`

Create an Amazon Bedrock inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-amazonbedrock.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--amazonbedrock-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `chat_completion` and `completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `amazonbedrock`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `amazonbedrock` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-amazonsagemaker`

Create an Amazon SageMaker inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-amazonsagemaker.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--amazonsagemaker-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `sparse_embedding` or `text_embedding` task types. Not applicable to the `rerank`, `completion`, or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `amazon_sagemaker`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `amazon_sagemaker` service and `service_settings.api` you specified. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type and `service_settings.api` you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-anthropic`

Create an Anthropic inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-anthropic.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The task type. The only valid task type for the model to perform is `completion`. (required) |  |  |
| `--anthropic-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `anthropic`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `anthropic` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-azureaistudio`

Create an Azure AI studio inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-azureaistudio.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--azureaistudio-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank` or `completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `azureaistudio`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `azureaistudio` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-azureopenai`

Create an Azure OpenAI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-azureopenai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API. (required) |  |  |
| `--azureopenai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` and `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `azureopenai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `azureopenai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-cohere`

Create a Cohere inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-cohere.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--cohere-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank` or `completion` task type. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `cohere`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `cohere` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-contextualai`

Create an Contextual AI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-contextualai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--contextualai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `contextualai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `contextualai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-custom`

Create a custom inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-custom.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--custom-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `sparse_embedding` or `text_embedding` task types. Not applicable to the `rerank` or `completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `custom`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `custom` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-deepseek`

Create a DeepSeek inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-deepseek.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--deepseek-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `deepseek`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `deepseek` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-elasticsearch`

Create an Elasticsearch inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-elasticsearch.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--elasticsearch-inference-id <string>` | The unique identifier of the inference endpoint. The must not match the `model_id`. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `sparse_embedding` and `text_embedding` task types. Not applicable to the `rerank` task type. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `elasticsearch`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `elasticsearch` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-elser`

Create an ELSER inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-elser.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--elser-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Note that for ELSER endpoints, the max_chunk_size may not exceed `300`. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `elser`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `elser` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-fireworksai`

Create a Fireworks AI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-fireworksai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--fireworksai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `fireworksai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `fireworksai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. Applies only to the `completion` or `chat_completion` task types. Not applicable to the `text_embedding` task type. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-googleaistudio`

Create an Google AI Studio inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-googleaistudio.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--googleaistudio-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` task type. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `googleaistudio`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `googleaistudio` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-googlevertexai`

Create a Google Vertex AI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-googlevertexai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--googlevertexai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `googlevertexai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `googlevertexai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-groq`

Create a Groq inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-groq.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--groq-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `groq`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `groq` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-hugging-face`

Create a Hugging Face inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-hugging-face.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--huggingface-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `hugging_face`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `hugging_face` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-jinaai`

Create an JinaAI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-jinaai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--jinaai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `embedding` and text_embedding` task types. Not applicable to the `rerank` task type. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `jinaai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `jinaai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-llama`

Create a Llama inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-llama.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--llama-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `llama`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `llama` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-mistral`

Create a Mistral inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-mistral.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--mistral-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `mistral`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `mistral` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-nvidia`

Create an Nvidia inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-nvidia.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API. (required) |  |  |
| `--nvidia-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `nvidia`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `nvidia` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-openai`

Create an OpenAI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-openai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API. (required) |  |  |
| `--openai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `completion` or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `openai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `openai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-openshift-ai`

Create an OpenShift AI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-openshift-ai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. NOTE: The `chat_completion` task type only supports streaming and only through the _stream API. (required) |  |  |
| `--openshiftai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion`, or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `openshift_ai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `openshift_ai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. Applies only to the `rerank` task type. Not applicable to the `text_embedding`, `completion`, or `chat_completion` task types. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-voyageai`

Create a VoyageAI inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-voyageai.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--voyageai-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank` task type. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `voyageai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `voyageai` service. (required) |  |  |
| `--task-settings <json>` | Settings to configure the inference task. These settings are specific to the task type you specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference put-watsonx`

Create a Watsonx inference endpoint.

[JSON Schema](./schemas/elastic-stack-es-inference-put-watsonx.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-type <value>` | The type of the inference task that the model will perform. (required) |  |  |
| `--watsonx-inference-id <string>` | The unique identifier of the inference endpoint. (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference endpoint to be created. |  |  |
| `--chunking-settings <json>` | The chunking configuration object. Applies only to the `text_embedding` task type. Not applicable to the `rerank`, `completion` or `chat_completion` task types. |  |  |
| `--service <value>` | The type of service supported for the specified task type. In this case, `watsonxai`. (required) |  |  |
| `--service-settings <json>` | Settings used to install the inference model. These settings are specific to the `watsonxai` service. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference rerank`

Perform reranking inference on the service.

[JSON Schema](./schemas/elastic-stack-es-inference-rerank.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--inference-id <string>` | The unique identifier for the inference endpoint. (required) |  |  |
| `--timeout <string>` | The amount of time to wait for the inference request to complete. |  |  |
| `--query <string>` | Query input. (required) |  |  |
| `--input <json>` | The documents to rank. (required) |  |  |
| `--return-documents [value]` | Include the document text in the response. |  |  |
| `--top-n <number>` | Limit the response to the top N documents. |  |  |
| `--task-settings <json>` | Task settings for the individual inference request. These settings are specific to the task type you specified and override the task settings specified when initializing the service. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference sparse-embedding`

Perform sparse embedding inference on the service.

[JSON Schema](./schemas/elastic-stack-es-inference-sparse-embedding.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--inference-id <string>` | The inference Id (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference request to complete. |  |  |
| `--input <string>` | Inference input. Either a string or an array of strings. (required) |  |  |
| `--task-settings <json>` | Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es inference text-embedding`

Perform text embedding inference on the service.

[JSON Schema](./schemas/elastic-stack-es-inference-text-embedding.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--inference-id <string>` | The inference Id (required) |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the inference request to complete. |  |  |
| `--input <string>` | Inference input. Either a string or an array of strings. (required) |  |  |
| `--input-type <string>` | The input data type for the text embedding model. Possible values include: * `SEARCH` * `INGEST` * `CLASSIFICATION` * `CLUSTERING` Not all services support all values. Unsupported values will trigger a validation exception. Accepted values depend on the configured inference service, refer to the relevant service-specific documentation for more info. > info > The `input_type` parameter specified on the root level of the request body will take precedence over the `input_type` parameter specified in `task_settings`. |  |  |
| `--task-settings <json>` | Task settings for the individual inference request. These settings are specific to the <task_type> you specified and override the task settings specified when initializing the service. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es ingest`

Elasticsearch ingest API commands

| Command | Description |
|---------|-------------|
| `delete-pipeline` | Delete pipelines. |
| `get-pipeline` | Get pipelines. |
| `processor-grok` | Run a grok processor. |
| `put-pipeline` | Create or update a pipeline. |
| `simulate` | Simulate a pipeline. |

### `elastic stack es ingest delete-pipeline`

Delete pipelines.

[JSON Schema](./schemas/elastic-stack-es-ingest-delete-pipeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Pipeline ID or wildcard expression of pipeline IDs used to limit the request. To delete all ingest pipelines in a cluster, use a value of `*`. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ingest get-pipeline`

Get pipelines.

[JSON Schema](./schemas/elastic-stack-es-ingest-get-pipeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Comma-separated list of pipeline IDs to retrieve. Wildcard (`*`) expressions are supported. To get all ingest pipelines, omit this parameter or use `*`. |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--summary [value]` | Return pipelines without their definitions |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ingest processor-grok`

Run a grok processor.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ingest put-pipeline`

Create or update a pipeline.

[JSON Schema](./schemas/elastic-stack-es-ingest-put-pipeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | ID of the ingest pipeline to create or update. (required) |  |  |
| `--master-timeout <string>` | Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--if-version <number>` | Required version for optimistic concurrency control for pipeline updates |  |  |
| `--meta <json>` | Optional metadata about the ingest pipeline. May have any contents. This map is not automatically generated by Elasticsearch. |  |  |
| `--description <string>` | Description of the ingest pipeline. |  |  |
| `--on-failure <json>` | Processors to run immediately after a processor failure. Each processor supports a processor-level `on_failure` value. If a processor without an `on_failure` value fails, Elasticsearch uses this pipeline-level parameter as a fallback. The processors in this parameter run sequentially in the order specified. Elasticsearch will not attempt to run the pipeline's remaining processors. |  |  |
| `--processors <json>` | Processors used to perform transformations on documents before indexing. Processors run sequentially in the order specified. |  |  |
| `--version <number>` | Version number used by external systems to track ingest pipelines. This parameter is intended for external systems only. Elasticsearch does not use or validate pipeline version numbers. |  |  |
| `--deprecated [value]` | Marks this ingest pipeline as deprecated. When a deprecated ingest pipeline is referenced as the default or final pipeline when creating or updating a non-deprecated index template, Elasticsearch will emit a deprecation warning. |  |  |
| `--field-access-pattern <value>` | Controls how processors in this pipeline should read and write data on a document's source. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ingest simulate`

Simulate a pipeline.

[JSON Schema](./schemas/elastic-stack-es-ingest-simulate.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The pipeline to test. If you don't specify a `pipeline` in the request body, this parameter is required. |  |  |
| `--verbose [value]` | If `true`, the response includes output data for each processor in the executed pipeline. |  |  |
| `--docs <json>` | Sample documents to test in the pipeline. (required) |  |  |
| `--pipeline <json>` | The pipeline to test. If you don't specify the `pipeline` request path parameter, this parameter is required. If you specify both this and the request path parameter, the API only uses the request path parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es license`

Elasticsearch license API commands

| Command | Description |
|---------|-------------|
| `get` | Get license information. |

### `elastic stack es license get`

Get license information.

[JSON Schema](./schemas/elastic-stack-es-license-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--accept-enterprise [value]` | If `true`, this parameter returns enterprise for Enterprise license types. If `false`, this parameter returns platinum for both platinum and enterprise license types. This behavior is maintained for backwards compatibility. This parameter is deprecated and will always be set to true in 8.x. |  |  |
| `--local [value]` | Specifies whether to retrieve local information. From 9.2 onwards the default value is `true`, which means the information is retrieved from the responding node. In earlier versions the default is `false`, which means the information is retrieved from the elected master node. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es logstash`

Elasticsearch logstash API commands

| Command | Description |
|---------|-------------|
| `delete-pipeline` | Delete a Logstash pipeline. |
| `get-pipeline` | Get Logstash pipelines. |
| `put-pipeline` | Create or update a Logstash pipeline. |

### `elastic stack es logstash delete-pipeline`

Delete a Logstash pipeline.

[JSON Schema](./schemas/elastic-stack-es-logstash-delete-pipeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An identifier for the pipeline. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es logstash get-pipeline`

Get Logstash pipelines.

[JSON Schema](./schemas/elastic-stack-es-logstash-get-pipeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A comma-separated list of pipeline identifiers. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es logstash put-pipeline`

Create or update a Logstash pipeline.

[JSON Schema](./schemas/elastic-stack-es-logstash-put-pipeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An identifier for the pipeline. Pipeline IDs must begin with a letter or underscore and contain only letters, underscores, dashes, hyphens and numbers. (required) |  |  |
| `--pipeline <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es ml`

Elasticsearch ml API commands

| Command | Description |
|---------|-------------|
| `close-job` | Close anomaly detection jobs. |
| `delete-calendar` | Delete a calendar. |
| `delete-calendar-event` | Delete events from a calendar. |
| `delete-calendar-job` | Delete anomaly jobs from a calendar. |
| `delete-data-frame-analytics` | Delete a data frame analytics job. |
| `delete-datafeed` | Delete a datafeed. |
| `delete-filter` | Delete a filter. |
| `delete-job` | Delete an anomaly detection job. |
| `delete-trained-model` | Delete an unreferenced trained model. |
| `delete-trained-model-alias` | Delete a trained model alias. |
| `estimate-model-memory` | Estimate job model memory usage. |
| `evaluate-data-frame` | Evaluate data frame analytics. |
| `flush-job` | Force buffered data to be processed. |
| `get-calendar-events` | Get info about events in calendars. |
| `get-calendars` | Get calendar configuration info. |
| `get-data-frame-analytics` | Get data frame analytics job configuration info. |
| `get-data-frame-analytics-stats` | Get data frame analytics job stats. |
| `get-datafeed-stats` | Get datafeed stats. |
| `get-datafeeds` | Get datafeeds configuration info. |
| `get-filters` | Get filters. |
| `get-job-stats` | Get anomaly detection job stats. |
| `get-jobs` | Get anomaly detection jobs configuration info. |
| `get-overall-buckets` | Get overall bucket results. |
| `get-trained-models` | Get trained model configuration info. |
| `get-trained-models-stats` | Get trained models usage info. |
| `infer-trained-model` | Evaluate a trained model. |
| `open-job` | Open anomaly detection jobs. |
| `post-calendar-events` | Add scheduled events to the calendar. |
| `preview-data-frame-analytics` | Preview features used by data frame analytics. |
| `preview-datafeed` | Preview a datafeed. |
| `put-calendar` | Create a calendar. |
| `put-calendar-job` | Add anomaly detection job to calendar. |
| `put-data-frame-analytics` | Create a data frame analytics job. |
| `put-datafeed` | Create a datafeed. |
| `put-filter` | Create a filter. |
| `put-job` | Create an anomaly detection job. |
| `put-trained-model` | Create a trained model. |
| `put-trained-model-alias` | Create or update a trained model alias. |
| `put-trained-model-definition-part` | Create part of a trained model definition. |
| `put-trained-model-vocabulary` | Create a trained model vocabulary. |
| `reset-job` | Reset an anomaly detection job. |
| `start-data-frame-analytics` | Start a data frame analytics job. |
| `start-datafeed` | Start datafeeds. |
| `start-trained-model-deployment` | Start a trained model deployment. |
| `stop-data-frame-analytics` | Stop data frame analytics jobs. |
| `stop-datafeed` | Stop datafeeds. |
| `stop-trained-model-deployment` | Stop a trained model deployment. |
| `update-data-frame-analytics` | Update a data frame analytics job. |
| `update-datafeed` | Update a datafeed. |
| `update-filter` | Update a filter. |
| `update-job` | Update an anomaly detection job. |
| `update-trained-model-deployment` | Update a trained model deployment. |

### `elastic stack es ml close-job`

Close anomaly detection jobs.

[JSON Schema](./schemas/elastic-stack-es-ml-close-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. It can be a job identifier, a group name, or a wildcard expression. You can close multiple anomaly detection jobs in a single API request by using a group name, a comma-separated list of jobs, or a wildcard expression. You can close all jobs by using `_all` or by specifying `*` as the job identifier. (required) |  |  |
| `--allow-no-match [value]` | Refer to the description for the `allow_no_match` query parameter. |  |  |
| `--force [value]` | Refer to the descriptiion for the `force` query parameter. |  |  |
| `--timeout <string>` | Refer to the description for the `timeout` query parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-calendar`

Delete a calendar.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-calendar.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-calendar-event`

Delete events from a calendar.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-calendar-event.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. (required) |  |  |
| `--event-id <string>` | Identifier for the scheduled event. You can obtain this identifier by using the get calendar events API. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-calendar-job`

Delete anomaly jobs from a calendar.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-calendar-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. (required) |  |  |
| `--job-id <string>` | An identifier for the anomaly detection jobs. It can be a job identifier, a group name, or a comma-separated list of jobs or groups. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-data-frame-analytics`

Delete a data frame analytics job.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. (required) |  |  |
| `--force [value]` | If `true`, it deletes a job that is not stopped; this method is quicker than stopping and deleting the job. |  |  |
| `--timeout <string>` | The time to wait for the job to be deleted. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-datafeed`

Delete a datafeed.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-datafeed.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--force [value]` | Use to forcefully delete a started datafeed; this method is quicker than stopping and deleting the datafeed. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-filter`

Delete a filter.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-filter.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--filter-id <string>` | A string that uniquely identifies a filter. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-job`

Delete an anomaly detection job.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. (required) |  |  |
| `--force [value]` | Use to forcefully delete an opened job; this method is quicker than closing and deleting the job. |  |  |
| `--delete-user-annotations [value]` | Specifies whether annotations that have been added by the user should be deleted along with any auto-generated annotations when the job is reset. |  |  |
| `--wait-for-completion [value]` | Specifies whether the request should return immediately or wait until the job deletion completes. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-trained-model`

Delete an unreferenced trained model.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-trained-model.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. (required) |  |  |
| `--force [value]` | Forcefully deletes a trained model that is referenced by ingest pipelines or has a started deployment. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml delete-trained-model-alias`

Delete a trained model alias.

[JSON Schema](./schemas/elastic-stack-es-ml-delete-trained-model-alias.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-alias <string>` | The model alias to delete. (required) |  |  |
| `--model-id <string>` | The trained model ID to which the model alias refers. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml estimate-model-memory`

Estimate job model memory usage.

[JSON Schema](./schemas/elastic-stack-es-ml-estimate-model-memory.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--analysis-config <json>` | For a list of the properties that you can specify in the `analysis_config` component of the body of this API. |  |  |
| `--max-bucket-cardinality <json>` | Estimates of the highest cardinality in a single bucket that is observed for influencer fields over the time period that the job analyzes data. To produce a good answer, values must be provided for all influencer fields. Providing values for fields that are not listed as `influencers` has no effect on the estimation. |  |  |
| `--overall-cardinality <json>` | Estimates of the cardinality that is observed for fields over the whole time period that the job analyzes data. To produce a good answer, values must be provided for fields referenced in the `by_field_name`, `over_field_name` and `partition_field_name` of any detectors. Providing values for other fields has no effect on the estimation. It can be omitted from the request if no detectors have a `by_field_name`, `over_field_name` or `partition_field_name`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml evaluate-data-frame`

Evaluate data frame analytics.

[JSON Schema](./schemas/elastic-stack-es-ml-evaluate-data-frame.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--evaluation <json>` | Defines the type of evaluation you want to perform. (required) |  |  |
| `--index <string>` | Defines the `index` in which the evaluation will be performed. (required) |  |  |
| `--query <json>` | A query clause that retrieves a subset of data from the source index. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml flush-job`

Force buffered data to be processed.

[JSON Schema](./schemas/elastic-stack-es-ml-flush-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. (required) |  |  |
| `--advance-time <string>` | Refer to the description for the `advance_time` query parameter. |  |  |
| `--calc-interim [value]` | Refer to the description for the `calc_interim` query parameter. |  |  |
| `--end <string>` | Refer to the description for the `end` query parameter. |  |  |
| `--skip-time <string>` | Refer to the description for the `skip_time` query parameter. |  |  |
| `--start <string>` | Refer to the description for the `start` query parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-calendar-events`

Get info about events in calendars.

[JSON Schema](./schemas/elastic-stack-es-ml-get-calendar-events.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. You can get information for multiple calendars by using a comma-separated list of ids or a wildcard expression. You can get information for all calendars by using `_all` or `*` or by omitting the calendar identifier. (required) |  |  |
| `--end <string>` | Specifies to get events with timestamps earlier than this time. |  |  |
| `--from <number>` | Skips the specified number of events. |  |  |
| `--job-id <string>` | Specifies to get events for a specific anomaly detection job identifier or job group. It must be used with a calendar identifier of `_all` or `*`. |  |  |
| `--size <number>` | Specifies the maximum number of events to obtain. |  |  |
| `--start <string>` | Specifies to get events with timestamps after this time. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-calendars`

Get calendar configuration info.

[JSON Schema](./schemas/elastic-stack-es-ml-get-calendars.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. You can get information for multiple calendars by using a comma-separated list of ids or a wildcard expression. You can get information for all calendars by using `_all` or `*` or by omitting the calendar identifier. |  |  |
| `--from <number>` | Skips the specified number of calendars. This parameter is supported only when you omit the calendar identifier. |  |  |
| `--size <number>` | Specifies the maximum number of calendars to obtain. This parameter is supported only when you omit the calendar identifier. |  |  |
| `--page <json>` | This object is supported only when you omit the calendar identifier. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-data-frame-analytics`

Get data frame analytics job configuration info.

[JSON Schema](./schemas/elastic-stack-es-ml-get-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. If you do not specify this option, the API returns information for the first hundred data frame analytics jobs. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no data frame analytics jobs that match. 2. Contains the `_all` string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value returns an empty data_frame_analytics array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--from <number>` | Skips the specified number of data frame analytics jobs. |  |  |
| `--size <number>` | Specifies the maximum number of data frame analytics jobs to obtain. |  |  |
| `--exclude-generated [value]` | Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-data-frame-analytics-stats`

Get data frame analytics job stats.

[JSON Schema](./schemas/elastic-stack-es-ml-get-data-frame-analytics-stats.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. If you do not specify this option, the API returns information for the first hundred data frame analytics jobs. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no data frame analytics jobs that match. 2. Contains the `_all` string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value returns an empty data_frame_analytics array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--from <number>` | Skips the specified number of data frame analytics jobs. |  |  |
| `--size <number>` | Specifies the maximum number of data frame analytics jobs to obtain. |  |  |
| `--verbose [value]` | Defines whether the stats response should be verbose. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-datafeed-stats`

Get datafeed stats.

[JSON Schema](./schemas/elastic-stack-es-ml-get-datafeed-stats.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | Identifier for the datafeed. It can be a datafeed identifier or a wildcard expression. If you do not specify one of these options, the API returns information about all datafeeds. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no datafeeds that match. 2. Contains the `_all` string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value is `true`, which returns an empty `datafeeds` array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a `404` status code when there are no matches or only partial matches. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-datafeeds`

Get datafeeds configuration info.

[JSON Schema](./schemas/elastic-stack-es-ml-get-datafeeds.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | Identifier for the datafeed. It can be a datafeed identifier or a wildcard expression. If you do not specify one of these options, the API returns information about all datafeeds. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no datafeeds that match. 2. Contains the `_all` string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value is `true`, which returns an empty `datafeeds` array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a `404` status code when there are no matches or only partial matches. |  |  |
| `--exclude-generated [value]` | Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-filters`

Get filters.

[JSON Schema](./schemas/elastic-stack-es-ml-get-filters.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--filter-id <string>` | A string that uniquely identifies a filter. |  |  |
| `--from <number>` | Skips the specified number of filters. |  |  |
| `--size <number>` | Specifies the maximum number of filters to obtain. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-job-stats`

Get anomaly detection job stats.

[JSON Schema](./schemas/elastic-stack-es-ml-get-job-stats.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. It can be a job identifier, a group name, a comma-separated list of jobs, or a wildcard expression. If you do not specify one of these options, the API returns information for all anomaly detection jobs. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no jobs that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. If `true`, the API returns an empty `jobs` array when there are no matches and the subset of results when there are partial matches. If `false`, the API returns a `404` status code when there are no matches or only partial matches. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-jobs`

Get anomaly detection jobs configuration info.

[JSON Schema](./schemas/elastic-stack-es-ml-get-jobs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. It can be a job identifier, a group name, or a wildcard expression. If you do not specify one of these options, the API returns information for all anomaly detection jobs. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no jobs that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value is `true`, which returns an empty `jobs` array when there are no matches and the subset of results when there are partial matches. If this parameter is `false`, the request returns a `404` status code when there are no matches or only partial matches. |  |  |
| `--exclude-generated [value]` | Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-overall-buckets`

Get overall bucket results.

[JSON Schema](./schemas/elastic-stack-es-ml-get-overall-buckets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. It can be a job identifier, a group name, a comma-separated list of jobs or groups, or a wildcard expression. You can summarize the bucket results for all anomaly detection jobs by using `_all` or by specifying `*` as the `<job_id>`. (required) |  |  |
| `--allow-no-match [value]` | Refer to the description for the `allow_no_match` query parameter. |  |  |
| `--bucket-span <string>` | Refer to the description for the `bucket_span` query parameter. |  |  |
| `--end <string>` | Refer to the description for the `end` query parameter. |  |  |
| `--exclude-interim [value]` | Refer to the description for the `exclude_interim` query parameter. |  |  |
| `--overall-score <number>` | Refer to the description for the `overall_score` query parameter. |  |  |
| `--start <string>` | Refer to the description for the `start` query parameter. |  |  |
| `--top-n <number>` | Refer to the description for the `top_n` query parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-trained-models`

Get trained model configuration info.

[JSON Schema](./schemas/elastic-stack-es-ml-get-trained-models.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model or a model alias. You can get information for multiple trained models in a single API request by using a comma-separated list of model IDs or a wildcard expression. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: - Contains wildcard expressions and there are no models that match. - Contains the _all string or no identifiers and there are no matches. - Contains wildcard expressions and there are only partial matches. If true, it returns an empty array when there are no matches and the subset of results when there are partial matches. |  |  |
| `--decompress-definition [value]` | Specifies whether the included model definition should be returned as a JSON map (true) or in a custom compressed format (false). |  |  |
| `--exclude-generated [value]` | Indicates if certain fields should be removed from the configuration on retrieval. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster. |  |  |
| `--from <number>` | Skips the specified number of models. |  |  |
| `--include <value>` | A comma delimited string of optional fields to include in the response body. |  |  |
| `--size <number>` | Specifies the maximum number of models to obtain. |  |  |
| `--tags <string>` | A comma delimited string of tags. A trained model can have many tags, or none. When supplied, only trained models that contain all the supplied tags are returned. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml get-trained-models-stats`

Get trained models usage info.

[JSON Schema](./schemas/elastic-stack-es-ml-get-trained-models-stats.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model or a model alias. It can be a comma-separated list or a wildcard expression. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: - Contains wildcard expressions and there are no models that match. - Contains the _all string or no identifiers and there are no matches. - Contains wildcard expressions and there are only partial matches. If true, it returns an empty array when there are no matches and the subset of results when there are partial matches. |  |  |
| `--from <number>` | Skips the specified number of models. |  |  |
| `--size <number>` | Specifies the maximum number of models to obtain. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml infer-trained-model`

Evaluate a trained model.

[JSON Schema](./schemas/elastic-stack-es-ml-infer-trained-model.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. (required) |  |  |
| `--timeout <string>` | Controls the amount of time to wait for inference results. |  |  |
| `--docs <json>` | An array of objects to pass to the model for inference. The objects should contain a fields matching your configured trained model input. Typically, for NLP models, the field name is `text_field`. Currently, for NLP models, only a single value is allowed. (required) |  |  |
| `--inference-config <json>` | The inference configuration updates to apply on the API call |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml open-job`

Open anomaly detection jobs.

[JSON Schema](./schemas/elastic-stack-es-ml-open-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the anomaly detection job. (required) |  |  |
| `--timeout <string>` | Refer to the description for the `timeout` query parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml post-calendar-events`

Add scheduled events to the calendar.

[JSON Schema](./schemas/elastic-stack-es-ml-post-calendar-events.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. (required) |  |  |
| `--events <json>` | A list of one of more scheduled events. The event’s start and end times can be specified as integer milliseconds since the epoch or as a string in ISO 8601 format. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml preview-data-frame-analytics`

Preview features used by data frame analytics.

[JSON Schema](./schemas/elastic-stack-es-ml-preview-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. |  |  |
| `--config <json>` | A data frame analytics config as described in create data frame analytics jobs. Note that `id` and `dest` don’t need to be provided in the context of this API. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml preview-datafeed`

Preview a datafeed.

[JSON Schema](./schemas/elastic-stack-es-ml-preview-datafeed.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. NOTE: If you use this path parameter, you cannot provide datafeed or anomaly detection job configuration details in the request body. |  |  |
| `--start <string>` | The start time from where the datafeed preview should begin |  |  |
| `--end <string>` | The end time when the datafeed preview should stop |  |  |
| `--datafeed-config <json>` | The datafeed definition to preview. |  |  |
| `--job-config <json>` | The configuration details for the anomaly detection job that is associated with the datafeed. If the `datafeed_config` object does not include a `job_id` that references an existing anomaly detection job, you must supply this `job_config` object. If you include both a `job_id` and a `job_config`, the latter information is used. You cannot specify a `job_config` object unless you also supply a `datafeed_config` object. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-calendar`

Create a calendar.

[JSON Schema](./schemas/elastic-stack-es-ml-put-calendar.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. (required) |  |  |
| `--job-ids <json>` | An array of anomaly detection job identifiers. |  |  |
| `--description <string>` | A description of the calendar. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-calendar-job`

Add anomaly detection job to calendar.

[JSON Schema](./schemas/elastic-stack-es-ml-put-calendar-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--calendar-id <string>` | A string that uniquely identifies a calendar. (required) |  |  |
| `--job-id <string>` | An identifier for the anomaly detection jobs. It can be a job identifier, a group name, or a comma-separated list of jobs or groups. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-data-frame-analytics`

Create a data frame analytics job.

[JSON Schema](./schemas/elastic-stack-es-ml-put-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--allow-lazy-start [value]` | Specifies whether this job can start when there is insufficient machine learning node capacity for it to be immediately assigned to a node. If set to `false` and a machine learning node with capacity to run the job cannot be immediately found, the API returns an error. If set to `true`, the API does not return an error; the job waits in the `starting` state until sufficient machine learning node capacity is available. This behavior is also affected by the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting. |  |  |
| `--analysis <json>` | The analysis configuration, which contains the information necessary to perform one of the following types of analysis: classification, outlier detection, or regression. (required) |  |  |
| `--analyzed-fields <json>` | Specifies `includes` and/or `excludes` patterns to select which fields will be included in the analysis. The patterns specified in `excludes` are applied last, therefore `excludes` takes precedence. In other words, if the same field is specified in both `includes` and `excludes`, then the field will not be included in the analysis. If `analyzed_fields` is not set, only the relevant fields will be included. For example, all the numeric fields for outlier detection. The supported fields vary for each type of analysis. Outlier detection requires numeric or `boolean` data to analyze. The algorithms don’t support missing values therefore fields that have data types other than numeric or boolean are ignored. Documents where included fields contain missing values, null values, or an array are also ignored. Therefore the `dest` index may contain documents that don’t have an outlier score. Regression supports fields that are numeric, `boolean`, `text`, `keyword`, and `ip` data types. It is also tolerant of missing values. Fields that are supported are included in the analysis, other fields are ignored. Documents where included fields contain an array with two or more values are also ignored. Documents in the `dest` index that don’t contain a results field are not included in the regression analysis. Classification supports fields that are numeric, `boolean`, `text`, `keyword`, and `ip` data types. It is also tolerant of missing values. Fields that are supported are included in the analysis, other fields are ignored. Documents where included fields contain an array with two or more values are also ignored. Documents in the `dest` index that don’t contain a results field are not included in the classification analysis. Classification analysis can be improved by mapping ordinal variable values to a single number. For example, in case of age ranges, you can model the values as `0-14 = 0`, `15-24 = 1`, `25-34 = 2`, and so on. |  |  |
| `--description <string>` | A description of the job. |  |  |
| `--dest <json>` | The destination configuration. (required) |  |  |
| `--max-num-threads <number>` | The maximum number of threads to be used by the analysis. Using more threads may decrease the time necessary to complete the analysis at the cost of using more CPU. Note that the process may use additional threads for operational functionality other than the analysis itself. |  |  |
| `--meta <json>` |  |  |  |
| `--model-memory-limit <string>` | The approximate maximum amount of memory resources that are permitted for analytical processing. If your `elasticsearch.yml` file contains an `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to create data frame analytics jobs that have `model_memory_limit` values greater than that setting. |  |  |
| `--source <json>` | The configuration of how to source the analysis data. (required) |  |  |
| `--headers <json>` |  |  |  |
| `--version <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-datafeed`

Create a datafeed.

[JSON Schema](./schemas/elastic-stack-es-ml-put-datafeed.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values. |  |  |
| `--ignore-throttled [value]` | If true, concrete, expanded, or aliased indices are ignored when frozen. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--aggregations <json>` | If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data. |  |  |
| `--aggs <json>` | If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data. |  |  |
| `--chunking-config <json>` | Datafeeds might be required to search over long time periods, for several months or years. This search is split into time chunks in order to ensure the load on Elasticsearch is managed. Chunking configuration controls how the size of these time chunks are calculated; it is an advanced configuration option. |  |  |
| `--delayed-data-check-config <json>` | Specifies whether the datafeed checks for missing data and the size of the window. The datafeed can optionally search over indices that have already been read in an effort to determine whether any data has subsequently been added to the index. If missing data is found, it is a good indication that the `query_delay` is set too low and the data is being indexed after the datafeed has passed that moment in time. This check runs only on real-time datafeeds. |  |  |
| `--frequency <string>` | The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation. |  |  |
| `--indices <string>` | An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the master nodes and the machine learning nodes must have the `remote_cluster_client` role. |  |  |
| `--indexes <string>` | An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the master nodes and the machine learning nodes must have the `remote_cluster_client` role. |  |  |
| `--indices-options <json>` | Specifies index expansion options that are used during search |  |  |
| `--job-id <string>` | Identifier for the anomaly detection job. |  |  |
| `--max-empty-searches <number>` | If a real-time datafeed has never seen any data (including during any initial training period), it automatically stops and closes the associated job after this many real-time searches return no documents. In other words, it stops after `frequency` times `max_empty_searches` of real-time operation. If not set, a datafeed with no end time that sees no data remains started until it is explicitly stopped. By default, it is not set. |  |  |
| `--query <json>` | The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch. |  |  |
| `--query-delay <string>` | The number of seconds behind real time that data is queried. For example, if data from 10:04 a.m. might not be searchable in Elasticsearch until 10:06 a.m., set this property to 120 seconds. The default value is randomly selected between `60s` and `120s`. This randomness improves the query performance when there are multiple jobs running on the same node. |  |  |
| `--runtime-mappings <json>` | Specifies runtime fields for the datafeed search. |  |  |
| `--script-fields <json>` | Specifies scripts that evaluate custom expressions and returns script fields to the datafeed. The detector configuration objects in a job can contain functions that use these script fields. |  |  |
| `--scroll-size <number>` | The size parameter that is used in Elasticsearch searches when the datafeed does not use aggregations. The maximum value is the value of `index.max_result_window`, which is 10,000 by default. |  |  |
| `--headers <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-filter`

Create a filter.

[JSON Schema](./schemas/elastic-stack-es-ml-put-filter.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--filter-id <string>` | A string that uniquely identifies a filter. (required) |  |  |
| `--description <string>` | A description of the filter. |  |  |
| `--items <json>` | The items of the filter. A wildcard `*` can be used at the beginning or the end of an item. Up to 10000 items are allowed in each filter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-job`

Create an anomaly detection job.

[JSON Schema](./schemas/elastic-stack-es-ml-put-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | The identifier for the anomaly detection job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values. |  |  |
| `--ignore-throttled [value]` | If `true`, concrete, expanded or aliased indices are ignored when frozen. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--allow-lazy-open [value]` | Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node. By default, if a machine learning node with capacity to run the job cannot immediately be found, the open anomaly detection jobs API returns an error. However, this is also subject to the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting. If this option is set to true, the open anomaly detection jobs API does not return an error and the job waits in the opening state until sufficient machine learning node capacity is available. |  |  |
| `--analysis-config <json>` | Specifies how to analyze the data. After you create a job, you cannot change the analysis configuration; all the properties are informational. (required) |  |  |
| `--analysis-limits <json>` | Limits can be applied for the resources required to hold the mathematical models in memory. These limits are approximate and can be set per job. They do not control the memory used by other processes, for example the Elasticsearch Java processes. |  |  |
| `--background-persist-interval <string>` | Advanced configuration option. The time between each periodic persistence of the model. The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time. The smallest allowed value is 1 hour. For very large models (several GB), persistence could take 10-20 minutes, so do not set the `background_persist_interval` value too low. |  |  |
| `--custom-settings <json>` | Advanced configuration option. Contains custom meta data about the job. |  |  |
| `--daily-model-snapshot-retention-after-days <number>` | Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies a period of time (in days) after which only the first snapshot per day is retained. This period is relative to the timestamp of the most recent snapshot for this job. Valid values range from 0 to `model_snapshot_retention_days`. |  |  |
| `--data-description <json>` | Defines the format of the input data when you send data to the job by using the post data API. Note that when configure a datafeed, these properties are automatically set. When data is received via the post data API, it is not stored in Elasticsearch. Only the results for anomaly detection are retained. (required) |  |  |
| `--datafeed-config <json>` | Defines a datafeed for the anomaly detection job. If Elasticsearch security features are enabled, your datafeed remembers which roles the user who created it had at the time of creation and runs the query using those same roles. If you provide secondary authorization headers, those credentials are used instead. |  |  |
| `--description <string>` | A description of the job. |  |  |
| `--groups <json>` | A list of job groups. A job can belong to no groups or many. |  |  |
| `--model-plot-config <json>` | This advanced configuration option stores model information along with the results. It provides a more detailed view into anomaly detection. If you enable model plot it can add considerable overhead to the performance of the system; it is not feasible for jobs with many entities. Model plot provides a simplified and indicative view of the model and its bounds. It does not display complex features such as multivariate correlations or multimodal data. As such, anomalies may occasionally be reported which cannot be seen in the model plot. Model plot config can be configured when the job is created or updated later. It must be disabled if performance issues are experienced. |  |  |
| `--model-snapshot-retention-days <number>` | Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies the maximum period of time (in days) that snapshots are retained. This period is relative to the timestamp of the most recent snapshot for this job. By default, snapshots ten days older than the newest snapshot are deleted. |  |  |
| `--renormalization-window-days <number>` | Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen. The default value is the longer of 30 days or 100 bucket spans. |  |  |
| `--results-index-name <string>` | A text string that affects the name of the machine learning results index. By default, the job generates an index named `.ml-anomalies-shared`. |  |  |
| `--results-retention-days <number>` | Advanced configuration option. The period of time (in days) that results are retained. Age is calculated relative to the timestamp of the latest bucket result. If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch. The default value is null, which means all results are retained. Annotations generated by the system also count as results for retention purposes; they are deleted after the same number of days as results. Annotations added by users are retained forever. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-trained-model`

Create a trained model.

[JSON Schema](./schemas/elastic-stack-es-ml-put-trained-model.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. (required) |  |  |
| `--defer-definition-decompression [value]` | If set to `true` and a `compressed_definition` is provided, the request defers definition decompression and skips relevant validations. |  |  |
| `--wait-for-completion [value]` | Whether to wait for all child operations (e.g. model download) to complete. |  |  |
| `--compressed-definition <string>` | The compressed (GZipped and Base64 encoded) inference definition of the model. If compressed_definition is specified, then definition cannot be specified. |  |  |
| `--definition <json>` | The inference definition for the model. If definition is specified, then compressed_definition cannot be specified. |  |  |
| `--description <string>` | A human-readable description of the inference trained model. |  |  |
| `--inference-config <json>` | The default configuration for inference. This can be either a regression or classification configuration. It must match the underlying definition.trained_model's target_type. For pre-packaged models such as ELSER the config is not required. |  |  |
| `--input <json>` | The input field names for the model definition. |  |  |
| `--metadata <json>` | An object map that contains metadata about the model. |  |  |
| `--model-type <value>` | The model type. |  |  |
| `--model-size-bytes <number>` | The estimated memory usage in bytes to keep the trained model in memory. This property is supported only if defer_definition_decompression is true or the model definition is not supplied. |  |  |
| `--platform-architecture <string>` | The platform architecture (if applicable) of the trained mode. If the model only works on one platform, because it is heavily optimized for a particular processor architecture and OS combination, then this field specifies which. The format of the string must match the platform identifiers used by Elasticsearch, so one of, `linux-x86_64`, `linux-aarch64`, `darwin-x86_64`, `darwin-aarch64`, or `windows-x86_64`. For portable models (those that work independent of processor architecture or OS features), leave this field unset. |  |  |
| `--tags <json>` | An array of tags to organize the model. |  |  |
| `--prefix-strings <json>` | Optional prefix strings applied at inference |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-trained-model-alias`

Create or update a trained model alias.

[JSON Schema](./schemas/elastic-stack-es-ml-put-trained-model-alias.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-alias <string>` | The alias to create or update. This value cannot end in numbers. (required) |  |  |
| `--model-id <string>` | The identifier for the trained model that the alias refers to. (required) |  |  |
| `--reassign [value]` | Specifies whether the alias gets reassigned to the specified trained model if it is already assigned to a different model. If the alias is already assigned and this parameter is false, the API returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-trained-model-definition-part`

Create part of a trained model definition.

[JSON Schema](./schemas/elastic-stack-es-ml-put-trained-model-definition-part.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. (required) |  |  |
| `--part <number>` | The definition part number. When the definition is loaded for inference the definition parts are streamed in the order of their part number. The first part must be `0` and the final part must be `total_parts - 1`. (required) |  |  |
| `--definition <string>` | The definition part for the model. Must be a base64 encoded string. (required) |  |  |
| `--total-definition-length <number>` | The total uncompressed definition length in bytes. Not base64 encoded. (required) |  |  |
| `--total-parts <number>` | The total number of parts that will be uploaded. Must be greater than 0. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml put-trained-model-vocabulary`

Create a trained model vocabulary.

[JSON Schema](./schemas/elastic-stack-es-ml-put-trained-model-vocabulary.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. (required) |  |  |
| `--vocabulary <json>` | The model vocabulary, which must not be empty. (required) |  |  |
| `--merges <json>` | The optional model merges if required by the tokenizer. |  |  |
| `--scores <json>` | The optional vocabulary value scores if required by the tokenizer. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml reset-job`

Reset an anomaly detection job.

[JSON Schema](./schemas/elastic-stack-es-ml-reset-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | The ID of the job to reset. (required) |  |  |
| `--wait-for-completion [value]` | Should this request wait until the operation has completed before returning. |  |  |
| `--delete-user-annotations [value]` | Specifies whether annotations that have been added by the user should be deleted along with any auto-generated annotations when the job is reset. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml start-data-frame-analytics`

Start a data frame analytics job.

[JSON Schema](./schemas/elastic-stack-es-ml-start-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--timeout <string>` | Controls the amount of time to wait until the data frame analytics job starts. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml start-datafeed`

Start datafeeds.

[JSON Schema](./schemas/elastic-stack-es-ml-start-datafeed.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--end <string>` | Refer to the description for the `end` query parameter. |  |  |
| `--start <string>` | Refer to the description for the `start` query parameter. |  |  |
| `--timeout <string>` | Refer to the description for the `timeout` query parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml start-trained-model-deployment`

Start a trained model deployment.

[JSON Schema](./schemas/elastic-stack-es-ml-start-trained-model-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. Currently, only PyTorch models are supported. (required) |  |  |
| `--cache-size <number>` | The inference cache size (in memory outside the JVM heap) per node for the model. The default value is the same size as the `model_size_bytes`. To disable the cache, `0b` can be provided. |  |  |
| `--number-of-allocations <number>` | The number of model allocations on each node where the model is deployed. All allocations on a node share the same copy of the model in memory but use a separate set of threads to evaluate the model. Increasing this value generally increases the throughput. If this setting is greater than the number of hardware threads it will automatically be changed to a value less than the number of hardware threads. If adaptive_allocations is enabled, do not set this value, because it’s automatically set. |  |  |
| `--priority <value>` | The deployment priority |  |  |
| `--queue-capacity <number>` | Specifies the number of inference requests that are allowed in the queue. After the number of requests exceeds this value, new requests are rejected with a 429 error. |  |  |
| `--threads-per-allocation <number>` | Sets the number of threads used by each model allocation during inference. This generally increases the inference speed. The inference process is a compute-bound process; any number greater than the number of available hardware threads on the machine does not increase the inference speed. If this setting is greater than the number of hardware threads it will automatically be changed to a value less than the number of hardware threads. |  |  |
| `--timeout <string>` | Specifies the amount of time to wait for the model to deploy. |  |  |
| `--wait-for <value>` | Specifies the allocation status to wait for before returning. |  |  |
| `--adaptive-allocations <json>` | Adaptive allocations configuration. When enabled, the number of allocations is set based on the current load. If adaptive_allocations is enabled, do not set the number of allocations manually. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml stop-data-frame-analytics`

Stop data frame analytics jobs.

[JSON Schema](./schemas/elastic-stack-es-ml-stop-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no data frame analytics jobs that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. The default value is true, which returns an empty data_frame_analytics array when there are no matches and the subset of results when there are partial matches. If this parameter is false, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--force [value]` | If true, the data frame analytics job is stopped forcefully. |  |  |
| `--timeout <string>` | Controls the amount of time to wait until the data frame analytics job stops. Defaults to 20 seconds. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml stop-datafeed`

Stop datafeeds.

[JSON Schema](./schemas/elastic-stack-es-ml-stop-datafeed.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | Identifier for the datafeed. You can stop multiple datafeeds in a single API request by using a comma-separated list of datafeeds or a wildcard expression. You can close all datafeeds by using `_all` or by specifying `*` as the identifier. (required) |  |  |
| `--allow-no-match [value]` | Refer to the description for the `allow_no_match` query parameter. |  |  |
| `--force [value]` | Refer to the description for the `force` query parameter. |  |  |
| `--timeout <string>` | Refer to the description for the `timeout` query parameter. |  |  |
| `--close-job [value]` | Refer to the description for the `close_job` query parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml stop-trained-model-deployment`

Stop a trained model deployment.

[JSON Schema](./schemas/elastic-stack-es-ml-stop-trained-model-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. (required) |  |  |
| `--id <string>` | If provided, must be the same identifier as in the path. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: contains wildcard expressions and there are no deployments that match; contains the  `_all` string or no identifiers and there are no matches; or contains wildcard expressions and there are only partial matches. By default, it returns an empty array when there are no matches and the subset of results when there are partial matches. If `false`, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--force [value]` | Forcefully stops the deployment, even if it is used by ingest pipelines. You can't use these pipelines until you restart the model deployment. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml update-data-frame-analytics`

Update a data frame analytics job.

[JSON Schema](./schemas/elastic-stack-es-ml-update-data-frame-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier for the data frame analytics job. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--description <string>` | A description of the job. |  |  |
| `--model-memory-limit <string>` | The approximate maximum amount of memory resources that are permitted for analytical processing. If your `elasticsearch.yml` file contains an `xpack.ml.max_model_memory_limit` setting, an error occurs when you try to create data frame analytics jobs that have `model_memory_limit` values greater than that setting. |  |  |
| `--max-num-threads <number>` | The maximum number of threads to be used by the analysis. Using more threads may decrease the time necessary to complete the analysis at the cost of using more CPU. Note that the process may use additional threads for operational functionality other than the analysis itself. |  |  |
| `--allow-lazy-start [value]` | Specifies whether this job can start when there is insufficient machine learning node capacity for it to be immediately assigned to a node. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml update-datafeed`

Update a datafeed.

[JSON Schema](./schemas/elastic-stack-es-ml-update-datafeed.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datafeed-id <string>` | A numerical character string that uniquely identifies the datafeed. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It must start and end with alphanumeric characters. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values. |  |  |
| `--ignore-throttled [value]` | If `true`, concrete, expanded or aliased indices are ignored when frozen. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--aggregations <json>` | If set, the datafeed performs aggregation searches. Support for aggregations is limited and should be used only with low cardinality data. |  |  |
| `--chunking-config <json>` | Datafeeds might search over long time periods, for several months or years. This search is split into time chunks in order to ensure the load on Elasticsearch is managed. Chunking configuration controls how the size of these time chunks are calculated; it is an advanced configuration option. |  |  |
| `--delayed-data-check-config <json>` | Specifies whether the datafeed checks for missing data and the size of the window. The datafeed can optionally search over indices that have already been read in an effort to determine whether any data has subsequently been added to the index. If missing data is found, it is a good indication that the `query_delay` is set too low and the data is being indexed after the datafeed has passed that moment in time. This check runs only on real-time datafeeds. |  |  |
| `--frequency <string>` | The interval at which scheduled queries are made while the datafeed runs in real time. The default value is either the bucket span for short bucket spans, or, for longer bucket spans, a sensible fraction of the bucket span. When `frequency` is shorter than the bucket span, interim results for the last (partial) bucket are written then eventually overwritten by the full bucket results. If the datafeed uses aggregations, this value must be divisible by the interval of the date histogram aggregation. |  |  |
| `--indices <json>` | An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role. |  |  |
| `--indexes <json>` | An array of index names. Wildcards are supported. If any of the indices are in remote clusters, the machine learning nodes must have the `remote_cluster_client` role. |  |  |
| `--indices-options <json>` | Specifies index expansion options that are used during search. |  |  |
| `--job-id <string>` |  |  |  |
| `--max-empty-searches <number>` | If a real-time datafeed has never seen any data (including during any initial training period), it automatically stops and closes the associated job after this many real-time searches return no documents. In other words, it stops after `frequency` times `max_empty_searches` of real-time operation. If not set, a datafeed with no end time that sees no data remains started until it is explicitly stopped. By default, it is not set. |  |  |
| `--query <json>` | The Elasticsearch query domain-specific language (DSL). This value corresponds to the query object in an Elasticsearch search POST body. All the options that are supported by Elasticsearch can be used, as this object is passed verbatim to Elasticsearch. Note that if you change the query, the analyzed data is also changed. Therefore, the time required to learn might be long and the understandability of the results is unpredictable. If you want to make significant changes to the source data, it is recommended that you clone the job and datafeed and make the amendments in the clone. Let both run in parallel and close one when you are satisfied with the results of the job. |  |  |
| `--query-delay <string>` | The number of seconds behind real time that data is queried. For example, if data from 10:04 a.m. might not be searchable in Elasticsearch until 10:06 a.m., set this property to 120 seconds. The default value is randomly selected between `60s` and `120s`. This randomness improves the query performance when there are multiple jobs running on the same node. |  |  |
| `--runtime-mappings <json>` | Specifies runtime fields for the datafeed search. |  |  |
| `--script-fields <json>` | Specifies scripts that evaluate custom expressions and returns script fields to the datafeed. The detector configuration objects in a job can contain functions that use these script fields. |  |  |
| `--scroll-size <number>` | The size parameter that is used in Elasticsearch searches when the datafeed does not use aggregations. The maximum value is the value of `index.max_result_window`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml update-filter`

Update a filter.

[JSON Schema](./schemas/elastic-stack-es-ml-update-filter.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--filter-id <string>` | A string that uniquely identifies a filter. (required) |  |  |
| `--add-items <json>` | The items to add to the filter. |  |  |
| `--description <string>` | A description for the filter. |  |  |
| `--remove-items <json>` | The items to remove from the filter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml update-job`

Update an anomaly detection job.

[JSON Schema](./schemas/elastic-stack-es-ml-update-job.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--job-id <string>` | Identifier for the job. (required) |  |  |
| `--allow-lazy-open [value]` | Advanced configuration option. Specifies whether this job can open when there is insufficient machine learning node capacity for it to be immediately assigned to a node. If `false` and a machine learning node with capacity to run the job cannot immediately be found, the open anomaly detection jobs API returns an error. However, this is also subject to the cluster-wide `xpack.ml.max_lazy_ml_nodes` setting. If this option is set to `true`, the open anomaly detection jobs API does not return an error and the job waits in the opening state until sufficient machine learning node capacity is available. |  |  |
| `--analysis-limits <json>` |  |  |  |
| `--background-persist-interval <string>` | Advanced configuration option. The time between each periodic persistence of the model. The default value is a randomized value between 3 to 4 hours, which avoids all jobs persisting at exactly the same time. The smallest allowed value is 1 hour. For very large models (several GB), persistence could take 10-20 minutes, so do not set the value too low. If the job is open when you make the update, you must stop the datafeed, close the job, then reopen the job and restart the datafeed for the changes to take effect. |  |  |
| `--custom-settings <json>` | Advanced configuration option. Contains custom meta data about the job. For example, it can contain custom URL information as shown in Adding custom URLs to machine learning results. |  |  |
| `--categorization-filters <json>` |  |  |  |
| `--description <string>` | A description of the job. |  |  |
| `--model-plot-config <json>` |  |  |  |
| `--model-prune-window <string>` |  |  |  |
| `--daily-model-snapshot-retention-after-days <number>` | Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies a period of time (in days) after which only the first snapshot per day is retained. This period is relative to the timestamp of the most recent snapshot for this job. Valid values range from 0 to `model_snapshot_retention_days`. For jobs created before version 7.8.0, the default value matches `model_snapshot_retention_days`. |  |  |
| `--model-snapshot-retention-days <number>` | Advanced configuration option, which affects the automatic removal of old model snapshots for this job. It specifies the maximum period of time (in days) that snapshots are retained. This period is relative to the timestamp of the most recent snapshot for this job. |  |  |
| `--renormalization-window-days <number>` | Advanced configuration option. The period over which adjustments to the score are applied, as new data is seen. |  |  |
| `--results-retention-days <number>` | Advanced configuration option. The period of time (in days) that results are retained. Age is calculated relative to the timestamp of the latest bucket result. If this property has a non-null value, once per day at 00:30 (server time), results that are the specified number of days older than the latest bucket result are deleted from Elasticsearch. The default value is null, which means all results are retained. |  |  |
| `--groups <json>` | A list of job groups. A job can belong to no groups or many. |  |  |
| `--detectors <json>` | An array of detector update objects. |  |  |
| `--per-partition-categorization <json>` | Settings related to how categorization interacts with partition fields. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es ml update-trained-model-deployment`

Update a trained model deployment.

[JSON Schema](./schemas/elastic-stack-es-ml-update-trained-model-deployment.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | The unique identifier of the trained model. Currently, only PyTorch models are supported. (required) |  |  |
| `--number-of-allocations <number>` | The number of model allocations on each node where the model is deployed. All allocations on a node share the same copy of the model in memory but use a separate set of threads to evaluate the model. Increasing this value generally increases the throughput. If this setting is greater than the number of hardware threads it will automatically be changed to a value less than the number of hardware threads. If adaptive_allocations is enabled, do not set this value, because it’s automatically set. |  |  |
| `--adaptive-allocations <json>` | Adaptive allocations configuration. When enabled, the number of allocations is set based on the current load. If adaptive_allocations is enabled, do not set the number of allocations manually. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es project`

Elasticsearch project API commands

| Command | Description |
|---------|-------------|
| `create-many-routing` | Create or update project routing expressions. |
| `create-routing` | Create or update a project routing expression. |
| `delete-routing` | Delete a project routing expression. |
| `get-many-routing` | Get project routing expressions. |
| `get-routing` | Get a project routing expression. |
| `tags` | Get tags. |

### `elastic stack es project create-many-routing`

Create or update project routing expressions.

[JSON Schema](./schemas/elastic-stack-es-project-create-many-routing.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--expressions <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es project create-routing`

Create or update a project routing expression.

[JSON Schema](./schemas/elastic-stack-es-project-create-routing.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of project routing expression (required) |  |  |
| `--expressions <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es project delete-routing`

Delete a project routing expression.

[JSON Schema](./schemas/elastic-stack-es-project-delete-routing.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of project routing expression (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es project get-many-routing`

Get project routing expressions.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es project get-routing`

Get a project routing expression.

[JSON Schema](./schemas/elastic-stack-es-project-get-routing.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of project routing expression (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es project tags`

Get tags.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es query-rules`

Elasticsearch query-rules API commands

| Command | Description |
|---------|-------------|
| `delete-rule` | Delete a query rule. |
| `delete-ruleset` | Delete a query ruleset. |
| `get-rule` | Get a query rule. |
| `get-ruleset` | Get a query ruleset. |
| `list-rulesets` | Get all query rulesets. |
| `put-rule` | Create or update a query rule. |
| `put-ruleset` | Create or update a query ruleset. |
| `test` | Test a query ruleset. |

### `elastic stack es query-rules delete-rule`

Delete a query rule.

[JSON Schema](./schemas/elastic-stack-es-query-rules-delete-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The unique identifier of the query ruleset containing the rule to delete (required) |  |  |
| `--rule-id <string>` | The unique identifier of the query rule within the specified ruleset to delete (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es query-rules delete-ruleset`

Delete a query ruleset.

[JSON Schema](./schemas/elastic-stack-es-query-rules-delete-ruleset.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The unique identifier of the query ruleset to delete (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es query-rules get-rule`

Get a query rule.

[JSON Schema](./schemas/elastic-stack-es-query-rules-get-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The unique identifier of the query ruleset containing the rule to retrieve (required) |  |  |
| `--rule-id <string>` | The unique identifier of the query rule within the specified ruleset to retrieve (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es query-rules get-ruleset`

Get a query ruleset.

[JSON Schema](./schemas/elastic-stack-es-query-rules-get-ruleset.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The unique identifier of the query ruleset (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es query-rules list-rulesets`

Get all query rulesets.

[JSON Schema](./schemas/elastic-stack-es-query-rules-list-rulesets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--from <number>` | The offset from the first result to fetch. |  |  |
| `--size <number>` | The maximum number of results to retrieve. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es query-rules put-rule`

Create or update a query rule.

[JSON Schema](./schemas/elastic-stack-es-query-rules-put-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The unique identifier of the query ruleset containing the rule to be created or updated. (required) |  |  |
| `--rule-id <string>` | The unique identifier of the query rule within the specified ruleset to be created or updated. (required) |  |  |
| `--type <value>` | The type of rule. (required) |  |  |
| `--criteria <json>` | The criteria that must be met for the rule to be applied. If multiple criteria are specified for a rule, all criteria must be met for the rule to be applied. (required) |  |  |
| `--actions <json>` | The actions to take when the rule is matched. The format of this action depends on the rule type. (required) |  |  |
| `--priority <number>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es query-rules put-ruleset`

Create or update a query ruleset.

[JSON Schema](./schemas/elastic-stack-es-query-rules-put-ruleset.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The unique identifier of the query ruleset to be created or updated. (required) |  |  |
| `--rules <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es query-rules test`

Test a query ruleset.

[JSON Schema](./schemas/elastic-stack-es-query-rules-test.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ruleset-id <string>` | The unique identifier of the query ruleset to be created or updated (required) |  |  |
| `--match-criteria <json>` | The match criteria to apply to rules in the given query ruleset. Match criteria should match the keys defined in the `criteria.metadata` field of the rule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es search-application`

Elasticsearch search-application API commands

| Command | Description |
|---------|-------------|
| `delete` | Delete a search application. |
| `delete-behavioral-analytics` | Delete a behavioral analytics collection. |
| `get` | Get search application details. |
| `get-behavioral-analytics` | Get behavioral analytics collections. |
| `list` | Get search applications. |
| `put` | Create or update a search application. |
| `put-behavioral-analytics` | Create a behavioral analytics collection. |
| `search` | Run a search application search. |

### `elastic stack es search-application delete`

Delete a search application.

[JSON Schema](./schemas/elastic-stack-es-search-application-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the search application to delete. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es search-application delete-behavioral-analytics`

Delete a behavioral analytics collection.

[JSON Schema](./schemas/elastic-stack-es-search-application-delete-behavioral-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the analytics collection to be deleted (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es search-application get`

Get search application details.

[JSON Schema](./schemas/elastic-stack-es-search-application-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the search application (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es search-application get-behavioral-analytics`

Get behavioral analytics collections.

[JSON Schema](./schemas/elastic-stack-es-search-application-get-behavioral-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <json>` | A list of analytics collections to limit the returned information |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es search-application list`

Get search applications.

[JSON Schema](./schemas/elastic-stack-es-search-application-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--q <string>` | Query in the Lucene query string syntax. |  |  |
| `--from <number>` | Starting offset. |  |  |
| `--size <number>` | Specifies a max number of results to get. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es search-application put`

Create or update a search application.

[JSON Schema](./schemas/elastic-stack-es-search-application-put.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the search application to be created or updated. (required) |  |  |
| `--create [value]` | If `true`, this request cannot replace or update existing Search Applications. |  |  |
| `--search-application <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es search-application put-behavioral-analytics`

Create a behavioral analytics collection.

[JSON Schema](./schemas/elastic-stack-es-search-application-put-behavioral-analytics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the analytics collection to be created or updated. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es search-application search`

Run a search application search.

[JSON Schema](./schemas/elastic-stack-es-search-application-search.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the search application to be searched. (required) |  |  |
| `--typed-keys [value]` | Determines whether aggregation names are prefixed by their respective types in the response. |  |  |
| `--params <json>` | Query parameters specific to this request, which will override any defaults specified in the template. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es security`

Elasticsearch security API commands

| Command | Description |
|---------|-------------|
| `authenticate` | Authenticate a user. |
| `create-api-key` | Create an API key. |
| `delete-role` | Delete roles. |
| `get-api-key` | Get API key information. |
| `get-builtin-privileges` | Get builtin privileges. |
| `get-role` | Get roles. |
| `has-privileges` | Check user privileges. |
| `invalidate-api-key` | Invalidate API keys. |
| `put-role` | Create or update roles. |
| `query-api-keys` | Find API keys with a query. |
| `query-role` | Find roles with a query. |
| `update-api-key` | Update an API key. |

### `elastic stack es security authenticate`

Authenticate a user.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security create-api-key`

Create an API key.

[JSON Schema](./schemas/elastic-stack-es-security-create-api-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--refresh [value]` | If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes. |  |  |
| `--expiration <string>` | The expiration time for the API key. By default, API keys never expire. |  |  |
| `--name <string>` | A name for the API key. |  |  |
| `--role-descriptors <json>` | An array of role descriptors for this API key. When it is not specified or it is an empty array, the API key will have a point in time snapshot of permissions of the authenticated user. If you supply role descriptors, the resultant permissions are an intersection of API keys permissions and the authenticated user's permissions thereby limiting the access scope for API keys. The structure of role descriptor is the same as the request for the create role API. For more details, refer to the create or update roles API. NOTE: Due to the way in which this permission intersection is calculated, it is not possible to create an API key that is a child of another API key, unless the derived key is created without any privileges. In this case, you must explicitly specify a role descriptor with no privileges. The derived API key can be used for authentication; it will not have authority to call Elasticsearch APIs. |  |  |
| `--metadata <json>` | Arbitrary metadata that you want to associate with the API key. It supports nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security delete-role`

Delete roles.

[JSON Schema](./schemas/elastic-stack-es-security-delete-role.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the role. (required) |  |  |
| `--refresh [value]` | If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security get-api-key`

Get API key information.

[JSON Schema](./schemas/elastic-stack-es-security-get-api-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An API key id. This parameter cannot be used with any of `name`, `realm_name` or `username`. |  |  |
| `--name <string>` | An API key name. This parameter cannot be used with any of `id`, `realm_name` or `username`. It supports prefix search with wildcard. |  |  |
| `--owner [value]` | A boolean flag that can be used to query API keys owned by the currently authenticated user. The `realm_name` or `username` parameters cannot be specified when this parameter is set to `true` as they are assumed to be the currently authenticated ones. |  |  |
| `--realm-name <string>` | The name of an authentication realm. This parameter cannot be used with either `id` or `name` or when `owner` flag is set to `true`. |  |  |
| `--username <string>` | The username of a user. This parameter cannot be used with either `id` or `name` or when `owner` flag is set to `true`. |  |  |
| `--with-limited-by [value]` | Return the snapshot of the owner user's role descriptors associated with the API key. An API key's actual permission is the intersection of its assigned role descriptors and the owner user's role descriptors. |  |  |
| `--active-only [value]` | A boolean flag that can be used to query API keys that are currently active. An API key is considered active if it is neither invalidated, nor expired at query time. You can specify this together with other parameters such as `owner` or `name`. If `active_only` is false, the response will include both active and inactive (expired or invalidated) keys. |  |  |
| `--with-profile-uid [value]` | Determines whether to also retrieve the profile uid, for the API key owner principal, if it exists. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security get-builtin-privileges`

Get builtin privileges.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security get-role`

Get roles.

[JSON Schema](./schemas/elastic-stack-es-security-get-role.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the role. You can specify multiple roles as a comma-separated list. If you do not specify this parameter, the API returns information about all roles. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security has-privileges`

Check user privileges.

[JSON Schema](./schemas/elastic-stack-es-security-has-privileges.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--user <string>` | Username |  |  |
| `--application <json>` |  |  |  |
| `--cluster <json>` | A list of the cluster privileges that you want to check. |  |  |
| `--index <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security invalidate-api-key`

Invalidate API keys.

[JSON Schema](./schemas/elastic-stack-es-security-invalidate-api-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` |  |  |  |
| `--ids <json>` | A list of API key ids. This parameter cannot be used with any of `name`, `realm_name`, or `username`. |  |  |
| `--name <string>` | An API key name. This parameter cannot be used with any of `ids`, `realm_name` or `username`. |  |  |
| `--owner [value]` | Query API keys owned by the currently authenticated user. The `realm_name` or `username` parameters cannot be specified when this parameter is set to `true` as they are assumed to be the currently authenticated ones. NOTE: At least one of `ids`, `name`, `username`, and `realm_name` must be specified if `owner` is `false`. |  |  |
| `--realm-name <string>` | The name of an authentication realm. This parameter cannot be used with either `ids` or `name`, or when `owner` flag is set to `true`. |  |  |
| `--username <string>` | The username of a user. This parameter cannot be used with either `ids` or `name` or when `owner` flag is set to `true`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security put-role`

Create or update roles.

[JSON Schema](./schemas/elastic-stack-es-security-put-role.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the role that is being created or updated. On Elasticsearch Serverless, the role name must begin with a letter or digit and can only contain letters, digits and the characters '_', '-', and '.'. Each role must have a unique name, as this will serve as the identifier for that role. (required) |  |  |
| `--refresh [value]` | If `true` (the default) then refresh the affected shards to make this operation visible to search, if `wait_for` then wait for a refresh to make this operation visible to search, if `false` then do nothing with refreshes. |  |  |
| `--applications <json>` | A list of application privilege entries. |  |  |
| `--cluster <json>` | A list of cluster privileges. These privileges define the cluster-level actions for users with this role. |  |  |
| `--indices <json>` | A list of indices permissions entries. |  |  |
| `--metadata <json>` | Optional metadata. Within the metadata object, keys that begin with an underscore (`_`) are reserved for system use. |  |  |
| `--run-as <json>` | A list of users that the owners of this role can impersonate. *Note*: in Serverless, the run-as feature is disabled. For API compatibility, you can still specify an empty `run_as` field, but a non-empty list will be rejected. |  |  |
| `--description <string>` | Optional description of the role descriptor |  |  |
| `--transient-metadata <json>` | Indicates roles that might be incompatible with the current cluster license, specifically roles with document and field level security. When the cluster license doesn’t allow certain features for a given role, this parameter is updated dynamically to list the incompatible features. If `enabled` is `false`, the role is ignored, but is still listed in the response from the authenticate API. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security query-api-keys`

Find API keys with a query.

[JSON Schema](./schemas/elastic-stack-es-security-query-api-keys.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--with-limited-by [value]` | Return the snapshot of the owner user's role descriptors associated with the API key. An API key's actual permission is the intersection of its assigned role descriptors and the owner user's role descriptors (effectively limited by it). An API key cannot retrieve any API key’s limited-by role descriptors (including itself) unless it has `manage_api_key` or higher privileges. |  |  |
| `--with-profile-uid [value]` | Determines whether to also retrieve the profile UID for the API key owner principal. If it exists, the profile UID is returned under the `profile_uid` response field for each API key. |  |  |
| `--typed-keys [value]` | Determines whether aggregation names are prefixed by their respective types in the response. |  |  |
| `--aggregations <json>` | Any aggregations to run over the corpus of returned API keys. Aggregations and queries work together. Aggregations are computed only on the API keys that match the query. This supports only a subset of aggregation types, namely: `terms`, `range`, `date_range`, `missing`, `cardinality`, `value_count`, `composite`, `filter`, and `filters`. Additionally, aggregations only run over the same subset of fields that query works with. |  |  |
| `--aggs <json>` | Any aggregations to run over the corpus of returned API keys. Aggregations and queries work together. Aggregations are computed only on the API keys that match the query. This supports only a subset of aggregation types, namely: `terms`, `range`, `date_range`, `missing`, `cardinality`, `value_count`, `composite`, `filter`, and `filters`. Additionally, aggregations only run over the same subset of fields that query works with. |  |  |
| `--query <json>` | A query to filter which API keys to return. If the query parameter is missing, it is equivalent to a `match_all` query. The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`, `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`. You can query the following public information associated with an API key: `id`, `type`, `name`, `creation`, `expiration`, `invalidated`, `invalidation`, `username`, `realm`, and `metadata`. NOTE: The queryable string values associated with API keys are internally mapped as keywords. Consequently, if no `analyzer` parameter is specified for a `match` query, then the provided match query string is interpreted as a single keyword value. Such a match query is hence equivalent to a `term` query. |  |  |
| `--from <number>` | The starting document offset. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter. |  |  |
| `--sort <string>` | The sort definition. Other than `id`, all public fields of an API key are eligible for sorting. In addition, sort can also be applied to the `_doc` field to sort by index order. |  |  |
| `--size <number>` | The number of hits to return. It must not be negative. The `size` parameter can be set to `0`, in which case no API key matches are returned, only the aggregation results. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter. |  |  |
| `--search-after <json>` | The search after definition. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security query-role`

Find roles with a query.

[JSON Schema](./schemas/elastic-stack-es-security-query-role.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--query <json>` | A query to filter which roles to return. If the query parameter is missing, it is equivalent to a `match_all` query. The query supports a subset of query types, including `match_all`, `bool`, `term`, `terms`, `match`, `ids`, `prefix`, `wildcard`, `exists`, `range`, and `simple_query_string`. You can query the following information associated with roles: `name`, `description`, `metadata`, `applications.application`, `applications.privileges`, and `applications.resources`. |  |  |
| `--from <number>` | The starting document offset. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter. |  |  |
| `--sort <string>` | The sort definition. You can sort on `name`, `description`, `metadata`, `applications.application`, `applications.privileges`, and `applications.resources`. In addition, sort can also be applied to the `_doc` field to sort by index order. |  |  |
| `--size <number>` | The number of hits to return. It must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter. |  |  |
| `--search-after <json>` | The search after definition. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es security update-api-key`

Update an API key.

[JSON Schema](./schemas/elastic-stack-es-security-update-api-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the API key to update. (required) |  |  |
| `--role-descriptors <json>` | The role descriptors to assign to this API key. The API key's effective permissions are an intersection of its assigned privileges and the point in time snapshot of permissions of the owner user. You can assign new privileges by specifying them in this parameter. To remove assigned privileges, you can supply an empty `role_descriptors` parameter, that is to say, an empty object `{}`. If an API key has no assigned privileges, it inherits the owner user's full permissions. The snapshot of the owner's permissions is always updated, whether you supply the `role_descriptors` parameter or not. The structure of a role descriptor is the same as the request for the create API keys API. |  |  |
| `--metadata <json>` | Arbitrary metadata that you want to associate with the API key. It supports a nested data structure. Within the metadata object, keys beginning with `_` are reserved for system usage. When specified, this value fully replaces the metadata previously associated with the API key. |  |  |
| `--expiration <string>` | The expiration time for the API key. By default, API keys never expire. This property can be omitted to leave the expiration unchanged. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es sql`

Elasticsearch sql API commands

| Command | Description |
|---------|-------------|
| `clear-cursor` | Clear an SQL search cursor. |
| `delete-async` | Delete an async SQL search. |
| `get-async` | Get async SQL search results. |
| `get-async-status` | Get the async SQL search status. |
| `query` | Get SQL search results. |
| `translate` | Translate SQL into Elasticsearch queries. |

### `elastic stack es sql clear-cursor`

Clear an SQL search cursor.

[JSON Schema](./schemas/elastic-stack-es-sql-clear-cursor.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--cursor <string>` | Cursor to clear. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es sql delete-async`

Delete an async SQL search.

[JSON Schema](./schemas/elastic-stack-es-sql-delete-async.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the search. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es sql get-async`

Get async SQL search results.

[JSON Schema](./schemas/elastic-stack-es-sql-get-async.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the search. (required) |  |  |
| `--delimiter <string>` | The separator for CSV results. The API supports this parameter only for CSV responses. |  |  |
| `--format <string>` | The format for the response. You must specify a format using this parameter or the `Accept` HTTP header. If you specify both, the API uses this parameter. |  |  |
| `--keep-alive <string>` | The retention period for the search and its results. It defaults to the `keep_alive` period for the original SQL search. |  |  |
| `--wait-for-completion-timeout <string>` | The period to wait for complete results. It defaults to no timeout, meaning the request waits for complete search results. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es sql get-async-status`

Get the async SQL search status.

[JSON Schema](./schemas/elastic-stack-es-sql-get-async-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the search. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es sql query`

Get SQL search results.

[JSON Schema](./schemas/elastic-stack-es-sql-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--format <value>` | The format for the response. You can also specify a format using the `Accept` HTTP header. If you specify both this parameter and the `Accept` HTTP header, this parameter takes precedence. |  |  |
| `--allow-partial-search-results [value]` | If `true`, the response has partial results when there are shard request timeouts or shard failures. If `false`, the API returns an error with no partial results. |  |  |
| `--catalog <string>` | The default catalog (cluster) for queries. If unspecified, the queries execute on the data in the local cluster only. |  |  |
| `--columnar [value]` | If `true`, the results are in a columnar fashion: one row represents all the values of a certain column from the current page of results. The API supports this parameter only for CBOR, JSON, SMILE, and YAML responses. |  |  |
| `--cursor <string>` | The cursor used to retrieve a set of paginated results. If you specify a cursor, the API only uses the `columnar` and `time_zone` request body parameters. It ignores other request body parameters. |  |  |
| `--fetch-size <number>` | The maximum number of rows (or entries) to return in one response. |  |  |
| `--field-multi-value-leniency [value]` | If `false`, the API returns an exception when encountering multiple values for a field. If `true`, the API is lenient and returns the first value from the array with no guarantee of consistent results. |  |  |
| `--filter <json>` | The Elasticsearch query DSL for additional filtering. |  |  |
| `--index-using-frozen [value]` | If `true`, the search can run on frozen indices. |  |  |
| `--keep-alive <string>` | The retention period for an async or saved synchronous search. |  |  |
| `--keep-on-completion [value]` | If `true`, Elasticsearch stores synchronous searches if you also specify the `wait_for_completion_timeout` parameter. If `false`, Elasticsearch only stores async searches that don't finish before the `wait_for_completion_timeout`. |  |  |
| `--page-timeout <string>` | The minimum retention period for the scroll cursor. After this time period, a pagination request might fail because the scroll cursor is no longer available. Subsequent scroll requests prolong the lifetime of the scroll cursor by the duration of `page_timeout` in the scroll request. |  |  |
| `--params <json>` | The values for parameters in the query. |  |  |
| `--query <string>` | The SQL query to run. |  |  |
| `--request-timeout <string>` | The timeout before the request fails. |  |  |
| `--runtime-mappings <json>` | One or more runtime fields for the search request. These fields take precedence over mapped fields with the same name. |  |  |
| `--time-zone <string>` | The ISO-8601 time zone ID for the search. |  |  |
| `--wait-for-completion-timeout <string>` | The period to wait for complete results. It defaults to no timeout, meaning the request waits for complete search results. If the search doesn't finish within this period, the search becomes async. To save a synchronous search, you must specify this parameter and the `keep_on_completion` parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es sql translate`

Translate SQL into Elasticsearch queries.

[JSON Schema](./schemas/elastic-stack-es-sql-translate.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fetch-size <number>` | The maximum number of rows (or entries) to return in one response. |  |  |
| `--filter <json>` | The Elasticsearch query DSL for additional filtering. |  |  |
| `--query <string>` | The SQL query to run. (required) |  |  |
| `--time-zone <string>` | The ISO-8601 time zone ID for the search. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es synonyms`

Elasticsearch synonyms API commands

| Command | Description |
|---------|-------------|
| `delete-synonym` | Delete a synonym set. |
| `delete-synonym-rule` | Delete a synonym rule. |
| `get-synonym` | Get a synonym set. |
| `get-synonym-rule` | Get a synonym rule. |
| `get-synonyms-sets` | Get all synonym sets. |
| `put-synonym` | Create or update a synonym set. |
| `put-synonym-rule` | Create or update a synonym rule. |

### `elastic stack es synonyms delete-synonym`

Delete a synonym set.

[JSON Schema](./schemas/elastic-stack-es-synonyms-delete-synonym.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The synonyms set identifier to delete. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es synonyms delete-synonym-rule`

Delete a synonym rule.

[JSON Schema](./schemas/elastic-stack-es-synonyms-delete-synonym-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--set-id <string>` | The ID of the synonym set to update. (required) |  |  |
| `--rule-id <string>` | The ID of the synonym rule to delete. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es synonyms get-synonym`

Get a synonym set.

[JSON Schema](./schemas/elastic-stack-es-synonyms-get-synonym.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The synonyms set identifier to retrieve. (required) |  |  |
| `--from <number>` | The starting offset for query rules to retrieve. |  |  |
| `--size <number>` | The max number of query rules to retrieve. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es synonyms get-synonym-rule`

Get a synonym rule.

[JSON Schema](./schemas/elastic-stack-es-synonyms-get-synonym-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--set-id <string>` | The ID of the synonym set to retrieve the synonym rule from. (required) |  |  |
| `--rule-id <string>` | The ID of the synonym rule to retrieve. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es synonyms get-synonyms-sets`

Get all synonym sets.

[JSON Schema](./schemas/elastic-stack-es-synonyms-get-synonyms-sets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--from <number>` | The starting offset for synonyms sets to retrieve. |  |  |
| `--size <number>` | The maximum number of synonyms sets to retrieve. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es synonyms put-synonym`

Create or update a synonym set.

[JSON Schema](./schemas/elastic-stack-es-synonyms-put-synonym.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the synonyms set to be created or updated. (required) |  |  |
| `--synonyms-set <json>` | The synonym rules definitions for the synonyms set. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es synonyms put-synonym-rule`

Create or update a synonym rule.

[JSON Schema](./schemas/elastic-stack-es-synonyms-put-synonym-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--set-id <string>` | The ID of the synonym set. (required) |  |  |
| `--rule-id <string>` | The ID of the synonym rule to be updated or created. (required) |  |  |
| `--synonyms <string>` | The synonym rule information definition, which must be in Solr format. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es tasks`

Elasticsearch tasks API commands

| Command | Description |
|---------|-------------|
| `get` | Get task information. |

### `elastic stack es tasks get`

Get task information.

[JSON Schema](./schemas/elastic-stack-es-tasks-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-id <string>` | The task identifier. (required) |  |  |
| `--timeout <string>` | The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--wait-for-completion [value]` | If `true`, the request blocks until the task has completed. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es transform`

Elasticsearch transform API commands

| Command | Description |
|---------|-------------|
| `delete-transform` | Delete a transform. |
| `get-node-stats` | Get node stats. |
| `get-transform` | Get transforms. |
| `get-transform-stats` | Get transform stats. |
| `preview-transform` | Preview a transform. |
| `put-transform` | Create a transform. |
| `reset-transform` | Reset a transform. |
| `schedule-now-transform` | Schedule a transform to start now. |
| `start-transform` | Start a transform. |
| `stop-transform` | Stop transforms. |
| `update-transform` | Update a transform. |

### `elastic stack es transform delete-transform`

Delete a transform.

[JSON Schema](./schemas/elastic-stack-es-transform-delete-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. (required) |  |  |
| `--force [value]` | If this value is false, the transform must be stopped before it can be deleted. If true, the transform is deleted regardless of its current state. |  |  |
| `--delete-dest-index [value]` | If this value is true, the destination index is deleted together with the transform. If false, the destination index will not be deleted |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform get-node-stats`

Get node stats.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform get-transform`

Get transforms.

[JSON Schema](./schemas/elastic-stack-es-transform-get-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. It can be a transform identifier or a wildcard expression. You can get information for all transforms by using `_all`, by specifying `*` as the `<transform_id>`, or by omitting the `<transform_id>`. |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no transforms that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. If this parameter is false, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--from <number>` | Skips the specified number of transforms. |  |  |
| `--size <number>` | Specifies the maximum number of transforms to obtain. |  |  |
| `--exclude-generated [value]` | Excludes fields that were automatically added when creating the transform. This allows the configuration to be in an acceptable format to be retrieved and then added to another cluster. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform get-transform-stats`

Get transform stats.

[JSON Schema](./schemas/elastic-stack-es-transform-get-transform-stats.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. It can be a transform identifier or a wildcard expression. You can get information for all transforms by using `_all`, by specifying `*` as the `<transform_id>`, or by omitting the `<transform_id>`. (required) |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: 1. Contains wildcard expressions and there are no transforms that match. 2. Contains the _all string or no identifiers and there are no matches. 3. Contains wildcard expressions and there are only partial matches. If this parameter is false, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--from <number>` | Skips the specified number of transforms. |  |  |
| `--size <number>` | Specifies the maximum number of transforms to obtain. |  |  |
| `--timeout <string>` | Controls the time to wait for the stats |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform preview-transform`

Preview a transform.

[JSON Schema](./schemas/elastic-stack-es-transform-preview-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform to preview. If you specify this path parameter, you cannot provide transform configuration details in the request body. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--dest <json>` | The destination for the transform. |  |  |
| `--description <string>` | Free text description of the transform. |  |  |
| `--frequency <string>` | The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is 1s and the maximum is 1h. |  |  |
| `--pivot <json>` | The pivot method transforms the data by aggregating and grouping it. These objects define the group by fields and the aggregation to reduce the data. |  |  |
| `--source <json>` | The source of the data for the transform. |  |  |
| `--settings <json>` | Defines optional transform settings. |  |  |
| `--sync <json>` | Defines the properties transforms require to run continuously. |  |  |
| `--retention-policy <json>` | Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index. |  |  |
| `--latest <json>` | The latest method transforms the data by finding the latest document for each unique key. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform put-transform`

Create a transform.

[JSON Schema](./schemas/elastic-stack-es-transform-put-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It has a 64 character limit and must start and end with alphanumeric characters. (required) |  |  |
| `--defer-validation [value]` | When the transform is created, a series of validations occur to ensure its success. For example, there is a check for the existence of the source indices and a check that the destination index is not part of the source index pattern. You can use this parameter to skip the checks, for example when the source index does not exist until after the transform is created. The validations are always run when you start the transform, however, with the exception of privilege checks. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--dest <json>` | The destination for the transform. (required) |  |  |
| `--description <string>` | Free text description of the transform. |  |  |
| `--frequency <string>` | The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is `1s` and the maximum is `1h`. |  |  |
| `--latest <json>` | The latest method transforms the data by finding the latest document for each unique key. |  |  |
| `--meta <json>` | Defines optional transform metadata. |  |  |
| `--pivot <json>` | The pivot method transforms the data by aggregating and grouping it. These objects define the group by fields and the aggregation to reduce the data. |  |  |
| `--retention-policy <json>` | Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index. |  |  |
| `--settings <json>` | Defines optional transform settings. |  |  |
| `--source <json>` | The source of the data for the transform. (required) |  |  |
| `--sync <json>` | Defines the properties transforms require to run continuously. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform reset-transform`

Reset a transform.

[JSON Schema](./schemas/elastic-stack-es-transform-reset-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. This identifier can contain lowercase alphanumeric characters (a-z and 0-9), hyphens, and underscores. It has a 64 character limit and must start and end with alphanumeric characters. (required) |  |  |
| `--force [value]` | If this value is `true`, the transform is reset regardless of its current state. If it's `false`, the transform must be stopped before it can be reset. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform schedule-now-transform`

Schedule a transform to start now.

[JSON Schema](./schemas/elastic-stack-es-transform-schedule-now-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. (required) |  |  |
| `--timeout <string>` | Controls the time to wait for the scheduling to take place |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform start-transform`

Start a transform.

[JSON Schema](./schemas/elastic-stack-es-transform-start-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. (required) |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--from <string>` | Restricts the set of transformed entities to those changed after this time. Relative times like now-30d are supported. Only applicable for continuous transforms. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform stop-transform`

Stop transforms.

[JSON Schema](./schemas/elastic-stack-es-transform-stop-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. To stop multiple transforms, use a comma-separated list or a wildcard expression. To stop all transforms, use `_all` or `*` as the identifier. (required) |  |  |
| `--allow-no-match [value]` | Specifies what to do when the request: contains wildcard expressions and there are no transforms that match; contains the `_all` string or no identifiers and there are no matches; contains wildcard expressions and there are only partial matches. If it is true, the API returns a successful acknowledgement message when there are no matches. When there are only partial matches, the API stops the appropriate transforms. If it is false, the request returns a 404 status code when there are no matches or only partial matches. |  |  |
| `--force [value]` | If it is true, the API forcefully stops the transforms. |  |  |
| `--timeout <string>` | Period to wait for a response when `wait_for_completion` is `true`. If no response is received before the timeout expires, the request returns a timeout exception. However, the request continues processing and eventually moves the transform to a STOPPED state. |  |  |
| `--wait-for-checkpoint [value]` | If it is true, the transform does not completely stop until the current checkpoint is completed. If it is false, the transform stops as soon as possible. |  |  |
| `--wait-for-completion [value]` | If it is true, the API blocks until the indexer state completely stops. If it is false, the API returns immediately and the indexer is stopped asynchronously in the background. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es transform update-transform`

Update a transform.

[JSON Schema](./schemas/elastic-stack-es-transform-update-transform.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--transform-id <string>` | Identifier for the transform. (required) |  |  |
| `--defer-validation [value]` | When true, deferrable validations are not run. This behavior may be desired if the source index does not exist until after the transform is created. |  |  |
| `--timeout <string>` | Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. |  |  |
| `--dest <json>` | The destination for the transform. |  |  |
| `--description <string>` | Free text description of the transform. |  |  |
| `--frequency <string>` | The interval between checks for changes in the source indices when the transform is running continuously. Also determines the retry interval in the event of transient failures while the transform is searching or indexing. The minimum value is 1s and the maximum is 1h. |  |  |
| `--meta <json>` | Defines optional transform metadata. |  |  |
| `--source <json>` | The source of the data for the transform. |  |  |
| `--settings <json>` | Defines optional transform settings. |  |  |
| `--sync <json>` | Defines the properties transforms require to run continuously. |  |  |
| `--retention-policy <json>` | Defines a retention policy for the transform. Data that meets the defined criteria is deleted from the destination index. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es bulk`

Bulk index or delete documents.

[JSON Schema](./schemas/elastic-stack-es-bulk.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | The name of the data stream, index, or index alias to perform bulk actions on. |  |  |
| `--include-source-on-error [value]` | True or false if to include the document source in the error message in case of parsing errors. |  |  |
| `--list-executed-pipelines [value]` | If `true`, the response will include the ingest pipelines that were run for each index or create. |  |  |
| `--pipeline <string>` | The pipeline identifier to use to preprocess incoming documents. If the index has a default ingest pipeline specified, setting the value to `_none` turns off the default ingest pipeline for this request. If a final pipeline is configured, it will always run regardless of the value of this parameter. |  |  |
| `--refresh [value]` | If `true`, Elasticsearch refreshes the affected shards to make this operation visible to search. If `wait_for`, wait for a refresh to make this operation visible to search. If `false`, do nothing with refreshes. Valid values: `true`, `false`, `wait_for`. |  |  |
| `--routing <string>` | A custom value that is used to route operations to a specific shard. |  |  |
| `--source [value]` | Indicates whether to return the `_source` field (`true` or `false`) or contains a list of fields to return. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--timeout <string>` | The period each action waits for the following operations: automatic index creation, dynamic mapping updates, and waiting for active shards. The default is `1m` (one minute), which guarantees Elasticsearch waits for at least the timeout before failing. The actual wait time could be longer, particularly when multiple waits occur. |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). The default is `1`, which waits for each primary shard to be active. |  |  |
| `--require-alias [value]` | If `true`, the request's actions must target an index alias. |  |  |
| `--require-data-stream [value]` | If `true`, the request's actions must target a data stream (existing or to be created). |  |  |
| `--operations <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es clear-scroll`

Clear a scrolling search.

[JSON Schema](./schemas/elastic-stack-es-clear-scroll.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--scroll-id <string>` | The scroll IDs to clear. To clear all scroll IDs, use `_all`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es close-point-in-time`

Close a point in time.

[JSON Schema](./schemas/elastic-stack-es-close-point-in-time.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the point-in-time. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es count`

Count search results.

[JSON Schema](./schemas/elastic-stack-es-count.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). To search all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--analyzer <string>` | The analyzer to use for the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--analyze-wildcard [value]` | If `true`, wildcard and prefix queries are analyzed. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--default-operator <value>` | The default operator for query string query: `and` or `or`. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--df <string>` | The field to use as a default when no field prefix is given in the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-throttled [value]` | If `true`, concrete, expanded, or aliased indices are ignored when frozen. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--lenient [value]` | If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--min-score <number>` | The minimum `_score` value that documents must have to be included in the result. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. By default, it is random. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--terminate-after <number>` | The maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. IMPORTANT: Use with caution. Elasticsearch applies this parameter to each shard handling the request. When possible, let Elasticsearch perform early termination automatically. Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers. |  |  |
| `--q <string>` | The query in Lucene query string syntax. This parameter cannot be used with a request body. |  |  |
| `--query <json>` | Defines the search query using Query DSL. A request body query cannot be used with the `q` query string parameter. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es create`

Create a new document in the index.

[JSON Schema](./schemas/elastic-stack-es-create.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the document. To automatically generate a document ID, use the `POST /<target>/_doc/` request format. (required) |  |  |
| `--index <string>` | The name of the data stream or index to target. If the target doesn't exist and matches the name or wildcard (`*`) pattern of an index template with a `data_stream` definition, this request creates the data stream. If the target doesn't exist and doesn’t match a data stream template, this request creates the index. (required) |  |  |
| `--include-source-on-error [value]` | True or false if to include the document source in the error message in case of parsing errors. |  |  |
| `--pipeline <string>` | The ID of the pipeline to use to preprocess incoming documents. If the index has a default ingest pipeline specified, setting the value to `_none` turns off the default ingest pipeline for this request. If a final pipeline is configured, it will always run regardless of the value of this parameter. |  |  |
| `--refresh [value]` | If `true`, Elasticsearch refreshes the affected shards to make this operation visible to search. If `wait_for`, it waits for a refresh to make this operation visible to search. If `false`, it does nothing with refreshes. |  |  |
| `--require-alias [value]` | If `true`, the destination must be an index alias. |  |  |
| `--require-data-stream [value]` | If `true`, the request's actions must target a data stream (existing or to be created). |  |  |
| `--routing <string>` | A custom value that is used to route operations to a specific shard. |  |  |
| `--timeout <string>` | The period the request waits for the following operations: automatic index creation, dynamic mapping updates, waiting for active shards. Elasticsearch waits for at least the specified timeout period before failing. The actual wait time could be longer, particularly when multiple waits occur. This parameter is useful for situations where the primary shard assigned to perform the operation might not be available when the operation runs. Some reasons for this might be that the primary shard is currently recovering from a gateway or undergoing relocation. By default, the operation will wait on the primary shard to become available for at least 1 minute before failing and responding with an error. The actual wait time could be longer, particularly when multiple waits occur. |  |  |
| `--version <number>` | The explicit version number for concurrency control. It must be a non-negative long number. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. You can set it to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). The default value of `1` means it waits for each primary shard to be active. |  |  |
| `--document <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es delete`

Delete a document.

[JSON Schema](./schemas/elastic-stack-es-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the document. (required) |  |  |
| `--index <string>` | The name of the target index. (required) |  |  |
| `--if-primary-term <number>` | Only perform the operation if the document has this primary term. |  |  |
| `--if-seq-no <number>` | Only perform the operation if the document has this sequence number. |  |  |
| `--refresh [value]` | If `true`, Elasticsearch refreshes the affected shards to make this operation visible to search. If `wait_for`, it waits for a refresh to make this operation visible to search. If `false`, it does nothing with refreshes. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--timeout <string>` | The period to wait for active shards. This parameter is useful for situations where the primary shard assigned to perform the delete operation might not be available when the delete operation runs. Some reasons for this might be that the primary shard is currently recovering from a store or undergoing relocation. By default, the delete operation will wait on the primary shard to become available for up to 1 minute before failing and responding with an error. |  |  |
| `--version <number>` | An explicit version number for concurrency control. It must match the current version of the document for the request to succeed. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--wait-for-active-shards <number>` | The minimum number of shard copies that must be active before proceeding with the operation. You can set it to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). The default value of `1` means it waits for each primary shard to be active. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es delete-by-query`

Delete documents.

[JSON Schema](./schemas/elastic-stack-es-delete-by-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). To search all data streams or indices, omit this parameter or use `*` or `_all`. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--analyzer <string>` | Analyzer to use for the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--analyze-wildcard [value]` | If `true`, wildcard and prefix queries are analyzed. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--conflicts <value>` | What to do if delete by query hits version conflicts: `abort` or `proceed`. |  |  |
| `--default-operator <value>` | The default operator for query string query: `and` or `or`. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--df <string>` | The field to use as default where no field prefix is given in the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`. |  |  |
| `--from <number>` | Skips the specified number of documents. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--lenient [value]` | If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. It is random by default. |  |  |
| `--refresh [value]` | If `true`, Elasticsearch refreshes all shards involved in the delete by query after the request completes. This is different than the delete API's `refresh` parameter, which causes just the shard that received the delete request to be refreshed. Unlike the delete API, it does not support `wait_for`. |  |  |
| `--request-cache [value]` | If `true`, the request cache is used for this request. Defaults to the index-level setting. |  |  |
| `--requests-per-second <number>` | The throttle for this request in sub-requests per second. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--q <string>` | A query in the Lucene query string syntax. |  |  |
| `--scroll <string>` | The period to retain the search context for scrolling. |  |  |
| `--scroll-size <number>` | The size of the scroll request that powers the operation. |  |  |
| `--search-timeout <string>` | The explicit timeout for each search request. It defaults to no timeout. |  |  |
| `--search-type <value>` | The type of the search operation. Available options include `query_then_fetch` and `dfs_query_then_fetch`. |  |  |
| `--slices <number>` | The number of slices this task should be divided into. |  |  |
| `--stats <json>` | The specific `tag` of the request for logging and statistical purposes. |  |  |
| `--terminate-after <number>` | The maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. Use with caution. Elasticsearch applies this parameter to each shard handling the request. When possible, let Elasticsearch perform early termination automatically. Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers. |  |  |
| `--timeout <string>` | The period each deletion request waits for active shards. |  |  |
| `--version [value]` | If `true`, returns the document version as part of a hit. |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). The `timeout` value controls how long each write request waits for unavailable shards to become available. |  |  |
| `--wait-for-completion [value]` | If `true`, the request blocks until the operation is complete. If `false`, Elasticsearch performs some preflight checks, launches the request, and returns a task you can use to cancel or get the status of the task. Elasticsearch creates a record of this task as a document at `.tasks/task/{taskId}`. When you are done with a task, you should delete the task document so Elasticsearch can reclaim the space. |  |  |
| `--max-docs <number>` | The maximum number of documents to delete. |  |  |
| `--query <json>` | The documents to delete specified with Query DSL. |  |  |
| `--slice <json>` | Slice the request manually using the provided slice ID and total number of slices. |  |  |
| `--sort <string>` | A sort object that specifies the order of deleted documents. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es delete-script`

Delete a script or search template.

[JSON Schema](./schemas/elastic-stack-es-delete-script.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the stored script or search template. (required) |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--timeout <string>` | The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es exists`

Check a document.

[JSON Schema](./schemas/elastic-stack-es-exists.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique document identifier. (required) |  |  |
| `--index <string>` | A comma-separated list of data streams, indices, and aliases. It supports wildcards (`*`). (required) |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. By default, the operation is randomized between the shard replicas. If it is set to `_local`, the operation will prefer to be run on a local allocated shard when possible. If it is set to a custom value, the value is used to guarantee that the same shards will be used for the same custom value. This can help with "jumping values" when hitting different shards in different refresh states. A sample value can be something like the web session ID or the user name. |  |  |
| `--realtime [value]` | If `true`, the request is real-time as opposed to near-real-time. |  |  |
| `--refresh [value]` | If `true`, the request refreshes the relevant shards before retrieving the document. Setting it to `true` should be done after careful thought and verification that this does not cause a heavy load on the system (and slow down indexing). |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--source [value]` | Indicates whether to return the `_source` field (`true` or `false`) or lists the fields to return. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--stored-fields <string>` | A comma-separated list of stored fields to return as part of a hit. If no fields are specified, no stored fields are included in the response. If this field is specified, the `_source` parameter defaults to `false`. |  |  |
| `--version <number>` | Explicit version number for concurrency control. The specified version must match the current version of the document for the request to succeed. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es exists-source`

Check for a document source.

[JSON Schema](./schemas/elastic-stack-es-exists-source.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the document. (required) |  |  |
| `--index <string>` | A comma-separated list of data streams, indices, and aliases. It supports wildcards (`*`). (required) |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. By default, the operation is randomized between the shard replicas. |  |  |
| `--realtime [value]` | If `true`, the request is real-time as opposed to near-real-time. |  |  |
| `--refresh [value]` | If `true`, the request refreshes the relevant shards before retrieving the document. Setting it to `true` should be done after careful thought and verification that this does not cause a heavy load on the system (and slow down indexing). |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--source [value]` | Indicates whether to return the `_source` field (`true` or `false`) or lists the fields to return. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude in the response. |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. |  |  |
| `--version <number>` | The version number for concurrency control. It must match the current version of the document for the request to succeed. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es explain`

Explain a document match result.

[JSON Schema](./schemas/elastic-stack-es-explain.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The document identifier. (required) |  |  |
| `--index <string>` | Index names that are used to limit the request. Only a single index name can be provided to this parameter. (required) |  |  |
| `--analyzer <string>` | The analyzer to use for the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--analyze-wildcard [value]` | If `true`, wildcard and prefix queries are analyzed. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--default-operator <value>` | The default operator for query string query: `and` or `or`. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--df <string>` | The field to use as default where no field prefix is given in the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--lenient [value]` | If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. It is random by default. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--source [value]` | `True` or `false` to return the `_source` field or not or a list of fields to return. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--stored-fields <string>` | A comma-separated list of stored fields to return in the response. |  |  |
| `--q <string>` | The query in the Lucene query string syntax. |  |  |
| `--query <json>` | Defines the search definition using the Query DSL. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es field-caps`

Get the field capabilities.

[JSON Schema](./schemas/elastic-stack-es-field-caps.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--include-unmapped [value]` | If true, unmapped fields are included in the response. |  |  |
| `--filters <string>` | A comma-separated list of filters to apply to the response. |  |  |
| `--types <json>` | A comma-separated list of field types to include. Any fields that do not match one of these types will be excluded from the results. It defaults to empty, meaning that all field types are returned. |  |  |
| `--include-empty-fields [value]` | If false, empty fields are not included in the response. |  |  |
| `--fields <string>` | A list of fields to retrieve capabilities for. Wildcard (`*`) expressions are supported. |  |  |
| `--index-filter <json>` | Filter indices if the provided query rewrites to `match_none` on every shard. IMPORTANT: The filtering is done on a best-effort basis, it uses index statistics and mappings to rewrite queries to `match_none` instead of fully running the request. For instance a range query over a date field can rewrite to `match_none` if all documents within a shard (including deleted documents) are outside of the provided range. However, not all queries can rewrite to `match_none` so this API may return an index even if the provided filter matches no document. |  |  |
| `--runtime-mappings <json>` | Define ad-hoc runtime fields in the request similar to the way it is done in search requests. These fields exist only as part of the query and take precedence over fields defined with the same name in the index mappings. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es get`

Get a document by its ID.

[JSON Schema](./schemas/elastic-stack-es-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique document identifier. (required) |  |  |
| `--index <string>` | The name of the index that contains the document. (required) |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. By default, the operation is randomized between the shard replicas. If it is set to `_local`, the operation will prefer to be run on a local allocated shard when possible. If it is set to a custom value, the value is used to guarantee that the same shards will be used for the same custom value. This can help with "jumping values" when hitting different shards in different refresh states. A sample value can be something like the web session ID or the user name. |  |  |
| `--realtime [value]` | If `true`, the request is real-time as opposed to near-real-time. |  |  |
| `--refresh [value]` | If `true`, the request refreshes the relevant shards before retrieving the document. Setting it to `true` should be done after careful thought and verification that this does not cause a heavy load on the system (and slow down indexing). |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--source [value]` | Indicates whether to return the `_source` field (`true` or `false`) or lists the fields to return. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--source-exclude-vectors [value]` | Whether vectors should be excluded from _source |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--stored-fields <string>` | A comma-separated list of stored fields to return as part of a hit. If no fields are specified, no stored fields are included in the response. If this field is specified, the `_source` parameter defaults to `false`. Only leaf fields can be retrieved with the `stored_fields` option. Object fields can't be returned; if specified, the request fails. |  |  |
| `--version <number>` | The version number for concurrency control. It must match the current version of the document for the request to succeed. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es get-script`

Get a script or search template.

[JSON Schema](./schemas/elastic-stack-es-get-script.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the stored script or search template. (required) |  |  |
| `--master-timeout <string>` | The period to wait for the master node. If the master node is not available before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es get-source`

Get a document's source.

[JSON Schema](./schemas/elastic-stack-es-get-source.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique document identifier. (required) |  |  |
| `--index <string>` | The name of the index that contains the document. (required) |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. By default, the operation is randomized between the shard replicas. |  |  |
| `--realtime [value]` | If `true`, the request is real-time as opposed to near-real-time. |  |  |
| `--refresh [value]` | If `true`, the request refreshes the relevant shards before retrieving the document. Setting it to `true` should be done after careful thought and verification that this does not cause a heavy load on the system (and slow down indexing). |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--source [value]` | Indicates whether to return the `_source` field (`true` or `false`) or lists the fields to return. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude in the response. |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. |  |  |
| `--version <number>` | The version number for concurrency control. It must match the current version of the document for the request to succeed. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es index`

Create or update a document in an index.

[JSON Schema](./schemas/elastic-stack-es-index.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the document. To automatically generate a document ID, use the `POST /<target>/_doc/` request format and omit this parameter. |  |  |
| `--index <string>` | The name of the data stream or index to target. If the target doesn't exist and matches the name or wildcard (`*`) pattern of an index template with a `data_stream` definition, this request creates the data stream. If the target doesn't exist and doesn't match a data stream template, this request creates the index. You can check for existing targets with the resolve index API. (required) |  |  |
| `--if-primary-term <number>` | Only perform the operation if the document has this primary term. |  |  |
| `--if-seq-no <number>` | Only perform the operation if the document has this sequence number. |  |  |
| `--include-source-on-error [value]` | True or false if to include the document source in the error message in case of parsing errors. |  |  |
| `--op-type <value>` | Set to `create` to only index the document if it does not already exist (put if absent). If a document with the specified `_id` already exists, the indexing operation will fail. The behavior is the same as using the `<index>/_create` endpoint. If a document ID is specified, this paramater defaults to `index`. Otherwise, it defaults to `create`. If the request targets a data stream, an `op_type` of `create` is required. |  |  |
| `--pipeline <string>` | The ID of the pipeline to use to preprocess incoming documents. If the index has a default ingest pipeline specified, then setting the value to `_none` disables the default ingest pipeline for this request. If a final pipeline is configured it will always run, regardless of the value of this parameter. |  |  |
| `--refresh [value]` | If `true`, Elasticsearch refreshes the affected shards to make this operation visible to search. If `wait_for`, it waits for a refresh to make this operation visible to search. If `false`, it does nothing with refreshes. |  |  |
| `--routing <string>` | A custom value that is used to route operations to a specific shard. |  |  |
| `--timeout <string>` | The period the request waits for the following operations: automatic index creation, dynamic mapping updates, waiting for active shards. This parameter is useful for situations where the primary shard assigned to perform the operation might not be available when the operation runs. Some reasons for this might be that the primary shard is currently recovering from a gateway or undergoing relocation. By default, the operation will wait on the primary shard to become available for at least 1 minute before failing and responding with an error. The actual wait time could be longer, particularly when multiple waits occur. |  |  |
| `--version <number>` | An explicit version number for concurrency control. It must be a non-negative long number. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. You can set it to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). The default value of `1` means it waits for each primary shard to be active. |  |  |
| `--require-alias [value]` | If `true`, the destination must be an index alias. |  |  |
| `--require-data-stream [value]` | If `true`, the request's actions must target a data stream (existing or to be created). |  |  |
| `--document <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es info`

Get cluster info.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es mget`

Get multiple documents.

[JSON Schema](./schemas/elastic-stack-es-mget.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Name of the index to retrieve documents from when `ids` are specified, or when a document in the `docs` array does not specify an index. |  |  |
| `--preference <string>` | Specifies the node or shard the operation should be performed on. Random by default. |  |  |
| `--realtime [value]` | If `true`, the request is real-time as opposed to near-real-time. |  |  |
| `--refresh [value]` | If `true`, the request refreshes relevant shards before retrieving documents. |  |  |
| `--routing <string>` | Custom value used to route operations to a specific shard. |  |  |
| `--source [value]` | True or false to return the `_source` field or not, or a list of fields to return. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--stored-fields <string>` | If `true`, retrieves the document fields stored in the index rather than the document `_source`. |  |  |
| `--docs <json>` | The documents you want to retrieve. Required if no index is specified in the request URI. |  |  |
| `--ids <string>` | The IDs of the documents you want to retrieve. Allowed when the index is specified in the request URI. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es msearch`

Run multiple searches.

[JSON Schema](./schemas/elastic-stack-es-msearch.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | Comma-separated list of data streams, indices, and index aliases to search. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--ccs-minimize-roundtrips [value]` | If true, network roundtrips between the coordinating node and remote clusters are minimized for cross-cluster search requests. |  |  |
| `--expand-wildcards <value>` | Type of index that wildcard expressions can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. |  |  |
| `--ignore-throttled [value]` | If true, concrete, expanded or aliased indices are ignored when frozen. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--include-named-queries-score [value]` | Indicates whether hit.matched_queries should be rendered as a map that includes the name of the matched query associated with its score (true) or as an array containing the name of the matched queries (false) This functionality reruns each named query on every hit in a search response. Typically, this adds a small overhead to a request. However, using computationally expensive named queries on a large number of hits may add significant overhead. |  |  |
| `--max-concurrent-searches <number>` | Maximum number of concurrent searches the multi search API can execute. Defaults to `max(1, (# of data nodes * min(search thread pool size, 10)))`. |  |  |
| `--max-concurrent-shard-requests <number>` | Maximum number of concurrent shard requests that each sub-search request executes per node. |  |  |
| `--pre-filter-shard-size <number>` | Defines a threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method i.e., if date filters are mandatory to match but the shard bounds and the query are disjoint. |  |  |
| `--rest-total-hits-as-int [value]` | If true, hits.total are returned as an integer in the response. Defaults to false, which returns an object. |  |  |
| `--routing <string>` | Custom routing value used to route search operations to a specific shard. |  |  |
| `--search-type <value>` | Indicates whether global term and document frequencies should be used when scoring returned documents. |  |  |
| `--typed-keys [value]` | Specifies whether aggregation and suggester names should be prefixed by their respective types in the response. |  |  |
| `--searches <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es msearch-template`

Run multiple templated searches.

[JSON Schema](./schemas/elastic-stack-es-msearch-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). To search all data streams and indices, omit this parameter or use `*`. |  |  |
| `--ccs-minimize-roundtrips [value]` | If `true`, network round-trips are minimized for cross-cluster search requests. |  |  |
| `--max-concurrent-searches <number>` | The maximum number of concurrent searches the API can run. |  |  |
| `--search-type <value>` | The type of the search operation. |  |  |
| `--rest-total-hits-as-int [value]` | If `true`, the response returns `hits.total` as an integer. If `false`, it returns `hits.total` as an object. |  |  |
| `--typed-keys [value]` | If `true`, the response prefixes aggregation and suggester names with their respective types. |  |  |
| `--search-templates <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es mtermvectors`

Get multiple term vectors.

[JSON Schema](./schemas/elastic-stack-es-mtermvectors.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | The name of the index that contains the documents. |  |  |
| `--fields <string>` | A comma-separated list or wildcard expressions of fields to include in the statistics. It is used as the default list unless a specific field list is provided in the `completion_fields` or `fielddata_fields` parameters. |  |  |
| `--field-statistics [value]` | If `true`, the response includes the document count, sum of document frequencies, and sum of total term frequencies. |  |  |
| `--offsets [value]` | If `true`, the response includes term offsets. |  |  |
| `--payloads [value]` | If `true`, the response includes term payloads. |  |  |
| `--positions [value]` | If `true`, the response includes term positions. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. It is random by default. |  |  |
| `--realtime [value]` | If true, the request is real-time as opposed to near-real-time. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--term-statistics [value]` | If true, the response includes term frequency and document frequency. |  |  |
| `--version <number>` | If `true`, returns the document version as part of a hit. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--docs <json>` | An array of existing or artificial documents. |  |  |
| `--ids <json>` | A simplified syntax to specify documents by their ID if they're in the same index. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es open-point-in-time`

Open a point in time.

[JSON Schema](./schemas/elastic-stack-es-open-point-in-time.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of index names to open point in time; use `_all` or empty string to perform the operation on all indices (required) |  |  |
| `--keep-alive <string>` | Extend the length of time that the point in time persists. (required) |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. By default, it is random. |  |  |
| `--routing <string>` | A custom value that is used to route operations to a specific shard. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`. |  |  |
| `--allow-partial-search-results [value]` | Indicates whether the point in time tolerates unavailable shards or shard failures when initially creating the PIT. If `false`, creating a point in time request when a shard is missing or unavailable will throw an exception. If `true`, the point in time will contain all the shards that are available at the time of the request. |  |  |
| `--max-concurrent-shard-requests <number>` | Maximum number of concurrent shard requests that each sub-search request executes per node. |  |  |
| `--index-filter <json>` | Filter indices if the provided query rewrites to `match_none` on every shard. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es ping`

Ping the cluster.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es put-script`

Create or update a script or search template.

[JSON Schema](./schemas/elastic-stack-es-put-script.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the stored script or search template. It must be unique within the cluster. (required) |  |  |
| `--context <string>` | The context in which the script or search template should run. To prevent errors, the API immediately compiles the script or template in this context. |  |  |
| `--master-timeout <string>` | The period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--timeout <string>` | The period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error. It can also be set to `-1` to indicate that the request should never timeout. |  |  |
| `--script <json>` | The script or search template, its parameters, and its language. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es rank-eval`

Evaluate ranked search results.

[JSON Schema](./schemas/elastic-stack-es-rank-eval.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A  comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard (`*`) expressions are supported. To target all data streams and indices in a cluster, omit this parameter or use `_all` or `*`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--expand-wildcards <value>` | Whether to expand wildcard expression to concrete indices that are open, closed or both. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--search-type <value>` | Search operation type |  |  |
| `--requests <json>` | A set of typical search requests, together with their provided ratings. (required) |  |  |
| `--metric <json>` | Definition of the evaluation metric to calculate. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es reindex`

Reindex documents.

[JSON Schema](./schemas/elastic-stack-es-reindex.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--refresh [value]` | If `true`, the request refreshes affected shards to make this operation visible to search. |  |  |
| `--requests-per-second <number>` | The throttle for this request in sub-requests per second. By default, there is no throttle. |  |  |
| `--scroll <string>` | The period of time that a consistent view of the index should be maintained for scrolled search. |  |  |
| `--slices <number>` | The number of slices this task should be divided into. It defaults to one slice, which means the task isn't sliced into subtasks. Reindex supports sliced scroll to parallelize the reindexing process. This parallelization can improve efficiency and provide a convenient way to break the request down into smaller parts. NOTE: Reindexing from remote clusters does not support manual or automatic slicing. If set to `auto`, Elasticsearch chooses the number of slices to use. This setting will use one slice per shard, up to a certain limit. If there are multiple sources, it will choose the number of slices based on the index or backing index with the smallest number of shards. |  |  |
| `--timeout <string>` | The period each indexing waits for automatic index creation, dynamic mapping updates, and waiting for active shards. By default, Elasticsearch waits for at least one minute before failing. The actual wait time could be longer, particularly when multiple waits occur. |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. Set it to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). The default value is one, which means it waits for each primary shard to be active. |  |  |
| `--wait-for-completion [value]` | If `true`, the request blocks until the operation is complete. |  |  |
| `--require-alias [value]` | If `true`, the destination must be an index alias. |  |  |
| `--conflicts <value>` | Indicates whether to continue reindexing even when there are conflicts. |  |  |
| `--dest <json>` | The destination you are copying to. (required) |  |  |
| `--max-docs <number>` | The maximum number of documents to reindex. By default, all documents are reindexed. If it is a value less then or equal to `scroll_size`, a scroll will not be used to retrieve the results for the operation. If `conflicts` is set to `proceed`, the reindex operation could attempt to reindex more documents from the source than `max_docs` until it has successfully indexed `max_docs` documents into the target or it has gone through every document in the source query. |  |  |
| `--script <json>` | The script to run to update the document source or metadata when reindexing. |  |  |
| `--source <json>` | The source you are copying from. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es render-search-template`

Render a search template.

[JSON Schema](./schemas/elastic-stack-es-render-search-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the search template to render. If no `source` is specified, this or the `id` request body parameter is required. |  |  |
| `--file <string>` |  |  |  |
| `--params <json>` | Key-value pairs used to replace Mustache variables in the template. The key is the variable name. The value is the variable value. |  |  |
| `--source <string>` | An inline search template. It supports the same parameters as the search API's request body. These parameters also support Mustache variables. If no `id` or `<templated-id>` is specified, this parameter is required. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es scripts-painless-execute`

Run a script.

[JSON Schema](./schemas/elastic-stack-es-scripts-painless-execute.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--context <value>` | The context that the script should run in. NOTE: Result ordering in the field contexts is not guaranteed. |  |  |
| `--context-setup <json>` | Additional parameters for the `context`. NOTE: This parameter is required for all contexts except `painless_test`, which is the default if no value is provided for `context`. |  |  |
| `--script <json>` | The Painless script to run. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es scroll`

Run a scrolling search.

[JSON Schema](./schemas/elastic-stack-es-scroll.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--rest-total-hits-as-int [value]` | If true, the API response’s hit.total property is returned as an integer. If false, the API response’s hit.total property is returned as an object. |  |  |
| `--scroll <string>` | The period to retain the search context for scrolling. |  |  |
| `--scroll-id <string>` | The scroll ID of the search. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es search`

Run a search.

[JSON Schema](./schemas/elastic-stack-es-search.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). To search all data streams and indices, omit this parameter or use `*` or `_all`. |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--allow-partial-search-results [value]` | If `true` and there are shard request timeouts or shard failures, the request returns partial results. If `false`, it returns an error with no partial results. To override the default behavior, you can set the `search.default_allow_partial_results` cluster setting to `false`. |  |  |
| `--analyzer <string>` | The analyzer to use for the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--analyze-wildcard [value]` | If `true`, wildcard and prefix queries are analyzed. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--batched-reduce-size <number>` | The number of shard results that should be reduced at once on the coordinating node. If the potential number of shards in the request can be large, this value should be used as a protection mechanism to reduce the memory overhead per search request. |  |  |
| `--ccs-minimize-roundtrips [value]` | If `true`, network round-trips between the coordinating node and the remote clusters are minimized when running cross-cluster search (CCS) requests. |  |  |
| `--default-operator <value>` | The default operator for the query string query: `and` or `or`. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--df <string>` | The field to use as a default when no field prefix is given in the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values such as `open,hidden`. |  |  |
| `--ignore-throttled [value]` | If `true`, concrete, expanded or aliased indices will be ignored when frozen. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--include-named-queries-score [value]` | If `true`, the response includes the score contribution from any named queries. This functionality reruns each named query on every hit in a search response. Typically, this adds a small overhead to a request. However, using computationally expensive named queries on a large number of hits may add significant overhead. |  |  |
| `--lenient [value]` | If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--max-concurrent-shard-requests <number>` | The number of concurrent shard requests per node that the search runs concurrently. This value should be used to limit the impact of the search on the cluster in order to limit the number of concurrent shard requests. |  |  |
| `--preference <string>` | The nodes and shards used for the search. By default, Elasticsearch selects from eligible nodes and shards using adaptive replica selection, accounting for allocation awareness. Valid values are: * `_only_local` to run the search only on shards on the local node. * `_local` to, if possible, run the search on shards on the local node, or if not, select shards using the default method. * `_only_nodes:<node-id>,<node-id>` to run the search on only the specified nodes IDs. If suitable shards exist on more than one selected node, use shards on those nodes using the default method. If none of the specified nodes are available, select shards from any available node using the default method. * `_prefer_nodes:<node-id>,<node-id>` to if possible, run the search on the specified nodes IDs. If not, select shards using the default method. * `_shards:<shard>,<shard>` to run the search only on the specified shards. You can combine this value with other `preference` values. However, the `_shards` value must come first. For example: `_shards:2,3\|_local`. * `<custom-string>` (any string that does not start with `_`) to route searches with the same `<custom-string>` to the same shards in the same order. |  |  |
| `--pre-filter-shard-size <number>` | A threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method (if date filters are mandatory to match but the shard bounds and the query are disjoint). When unspecified, the pre-filter phase is executed if any of these conditions is met: * The request targets more than 128 shards. * The request targets one or more read-only index. * The primary sort of the query targets an indexed field. |  |  |
| `--request-cache [value]` | If `true`, the caching of search results is enabled for requests where `size` is `0`. It defaults to index level settings. |  |  |
| `--routing <string>` | A custom value that is used to route operations to a specific shard. |  |  |
| `--scroll <string>` | The period to retain the search context for scrolling. By default, this value cannot exceed `1d` (24 hours). You can change this limit by using the `search.max_keep_alive` cluster-level setting. |  |  |
| `--search-type <value>` | Indicates how distributed term frequencies are calculated for relevance scoring. |  |  |
| `--suggest-field <string>` | The field to use for suggestions. |  |  |
| `--suggest-mode <value>` | The suggest mode. This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified. |  |  |
| `--suggest-size <number>` | The number of suggestions to return. This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified. |  |  |
| `--suggest-text <string>` | The source text for which the suggestions should be returned. This parameter can be used only when the `suggest_field` and `suggest_text` query string parameters are specified. |  |  |
| `--typed-keys [value]` | If `true`, aggregation and suggester names are be prefixed by their respective types in the response. |  |  |
| `--rest-total-hits-as-int [value]` | Indicates whether `hits.total` should be rendered as an integer or an object in the rest search response. |  |  |
| `--source-excludes <string>` | A comma-separated list of source fields to exclude from the response. You can also use this parameter to exclude fields from the subset specified in `_source_includes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--source-exclude-vectors [value]` | Whether vectors should be excluded from _source |  |  |
| `--source-includes <string>` | A comma-separated list of source fields to include in the response. If this parameter is specified, only these source fields are returned. You can exclude fields from this subset using the `_source_excludes` query parameter. If the `_source` parameter is `false`, this parameter is ignored. |  |  |
| `--q <string>` | A query in the Lucene query string syntax. Query parameter searches do not support the full Elasticsearch Query DSL but are handy for testing. IMPORTANT: This parameter overrides the query parameter in the request body. If both parameters are specified, documents matching the query request body parameter are not returned. |  |  |
| `--aggregations <json>` | Defines the aggregations that are run as part of the search request. |  |  |
| `--aggs <json>` | Defines the aggregations that are run as part of the search request. |  |  |
| `--collapse <json>` | Collapses search results the values of the specified field. |  |  |
| `--explain [value]` | If `true`, the request returns detailed information about score computation as part of a hit. |  |  |
| `--ext <json>` | Configuration of search extensions defined by Elasticsearch plugins. |  |  |
| `--from <number>` | The starting document offset, which must be non-negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` parameter. |  |  |
| `--highlight <json>` | Specifies the highlighter to use for retrieving highlighted snippets from one or more fields in your search results. |  |  |
| `--track-total-hits [value]` | Number of hits matching the query to count accurately. If `true`, the exact number of hits is returned at the cost of some performance. If `false`, the  response does not include the total number of hits matching the query. |  |  |
| `--indices-boost <json>` | Boost the `_score` of documents from specified indices. The boost value is the factor by which scores are multiplied. A boost value greater than `1.0` increases the score. A boost value between `0` and `1.0` decreases the score. |  |  |
| `--docvalue-fields <json>` | An array of wildcard (`*`) field patterns. The request returns doc values for field names matching these patterns in the `hits.fields` property of the response. |  |  |
| `--knn <json>` | The approximate kNN search to run. |  |  |
| `--min-score <number>` | The minimum `_score` for matching documents. Documents with a lower `_score` are not included in search results and results collected by aggregations. |  |  |
| `--post-filter <json>` | Use the `post_filter` parameter to filter search results. The search hits are filtered after the aggregations are calculated. A post filter has no impact on the aggregation results. |  |  |
| `--profile [value]` | Set to `true` to return detailed timing information about the execution of individual components in a search request. NOTE: This is a debugging tool and adds significant overhead to search execution. |  |  |
| `--query <json>` | The search definition using the Query DSL. |  |  |
| `--rescore <string>` | Can be used to improve precision by reordering just the top (for example 100 - 500) documents returned by the `query` and `post_filter` phases. |  |  |
| `--retriever <json>` | A retriever is a specification to describe top documents returned from a search. A retriever replaces other elements of the search API that also return top documents such as `query` and `knn`. |  |  |
| `--script-fields <json>` | Retrieve a script evaluation (based on different fields) for each hit. |  |  |
| `--search-after <json>` | Used to retrieve the next page of hits using a set of sort values from the previous page. |  |  |
| `--size <number>` | The number of hits to return, which must not be negative. By default, you cannot page through more than 10,000 hits using the `from` and `size` parameters. To page through more hits, use the `search_after` property. |  |  |
| `--slice <json>` | Split a scrolled search into multiple slices that can be consumed independently. |  |  |
| `--sort <string>` | A comma-separated list of <field>:<direction> pairs. |  |  |
| `--source [value]` | The source fields that are returned for matching documents. These fields are returned in the `hits._source` property of the search response. If the `stored_fields` property is specified, the `_source` property defaults to `false`. Otherwise, it defaults to `true`. |  |  |
| `--fields <json>` | An array of wildcard (`*`) field patterns. The request returns values for field names matching these patterns in the `hits.fields` property of the response. |  |  |
| `--suggest <json>` | Defines a suggester that provides similar looking terms based on a provided text. |  |  |
| `--terminate-after <number>` | The maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. IMPORTANT: Use with caution. Elasticsearch applies this property to each shard handling the request. When possible, let Elasticsearch perform early termination automatically. Avoid specifying this property for requests that target data streams with backing indices across multiple data tiers. If set to `0` (default), the query does not terminate early. |  |  |
| `--timeout <string>` | The period of time to wait for a response from each shard. If no response is received before the timeout expires, the request fails and returns an error. Defaults to no timeout. |  |  |
| `--track-scores [value]` | If `true`, calculate and return document scores, even if the scores are not used for sorting. |  |  |
| `--version [value]` | If `true`, the request returns the document version as part of a hit. |  |  |
| `--seq-no-primary-term [value]` | If `true`, the request returns sequence number and primary term of the last modification of each hit. |  |  |
| `--stored-fields <string>` | A comma-separated list of stored fields to return as part of a hit. If no fields are specified, no stored fields are included in the response. If this field is specified, the `_source` property defaults to `false`. You can pass `_source: true` to return both source fields and stored fields in the search response. |  |  |
| `--pit <json>` | Limit the search to a point in time (PIT). If you provide a PIT, you cannot specify an `<index>` in the request path. |  |  |
| `--runtime-mappings <json>` | One or more runtime fields in the search request. These fields take precedence over mapped fields with the same name. |  |  |
| `--stats <json>` | The stats groups to associate with the search. Each group maintains a statistics aggregation for its associated searches. You can retrieve these stats using the indices stats API. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es search-mvt`

Search a vector tile.

[JSON Schema](./schemas/elastic-stack-es-search-mvt.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A list of indices, data streams, or aliases to search. It supports wildcards (`*`). To search all data streams and indices, omit this parameter or use `*` or `_all`. To search a remote cluster, use the `<cluster>:<target>` syntax. (required) |  |  |
| `--field <string>` | A field that contains the geospatial data to return. It must be a `geo_point` or `geo_shape` field. The field must have doc values enabled. It cannot be a nested field. NOTE: Vector tiles do not natively support geometry collections. For `geometrycollection` values in a `geo_shape` field, the API returns a hits layer feature for each element of the collection. This behavior may change in a future release. (required) |  |  |
| `--zoom <number>` | The zoom level of the vector tile to search. It accepts `0` to `29`. (required) |  |  |
| `--x <number>` | The X coordinate for the vector tile to search. (required) |  |  |
| `--y <number>` | The Y coordinate for the vector tile to search. (required) |  |  |
| `--aggs <json>` | Sub-aggregations for the geotile_grid. It supports the following aggregation types: - `avg` - `boxplot` - `cardinality` - `extended stats` - `max` - `median absolute deviation` - `min` - `percentile` - `percentile-rank` - `stats` - `sum` - `value count` The aggregation names can't start with `_mvt_`. The `_mvt_` prefix is reserved for internal aggregations. |  |  |
| `--buffer <number>` | The size, in pixels, of a clipping buffer outside the tile. This allows renderers to avoid outline artifacts from geometries that extend past the extent of the tile. |  |  |
| `--exact-bounds [value]` | If `false`, the meta layer's feature is the bounding box of the tile. If `true`, the meta layer's feature is a bounding box resulting from a `geo_bounds` aggregation. The aggregation runs on <field> values that intersect the `<zoom>/<x>/<y>` tile with `wrap_longitude` set to `false`. The resulting bounding box may be larger than the vector tile. |  |  |
| `--extent <number>` | The size, in pixels, of a side of the tile. Vector tiles are square with equal sides. |  |  |
| `--fields <string>` | The fields to return in the `hits` layer. It supports wildcards (`*`). This parameter does not support fields with array values. Fields with array values may return inconsistent results. |  |  |
| `--grid-agg <value>` | The aggregation used to create a grid for the `field`. |  |  |
| `--grid-precision <number>` | Additional zoom levels available through the aggs layer. For example, if `<zoom>` is `7` and `grid_precision` is `8`, you can zoom in up to level 15. Accepts 0-8. If 0, results don't include the aggs layer. |  |  |
| `--grid-type <value>` | Determines the geometry type for features in the aggs layer. In the aggs layer, each feature represents a `geotile_grid` cell. If `grid, each feature is a polygon of the cells bounding box. If `point`, each feature is a Point that is the centroid of the cell. |  |  |
| `--query <json>` | The query DSL used to filter documents for the search. |  |  |
| `--runtime-mappings <json>` | Defines one or more runtime fields in the search request. These fields take precedence over mapped fields with the same name. |  |  |
| `--size <number>` | The maximum number of features to return in the hits layer. Accepts 0-10000. If 0, results don't include the hits layer. |  |  |
| `--sort <string>` | Sort the features in the hits layer. By default, the API calculates a bounding box for each feature. It sorts features based on this box's diagonal length, from longest to shortest. |  |  |
| `--track-total-hits [value]` | The number of hits matching the query to count accurately. If `true`, the exact number of hits is returned at the cost of some performance. If `false`, the response does not include the total number of hits matching the query. |  |  |
| `--with-labels [value]` | If `true`, the hits and aggs layers will contain additional point features representing suggested label positions for the original features. * `Point` and `MultiPoint` features will have one of the points selected. * `Polygon` and `MultiPolygon` features will have a single point generated, either the centroid, if it is within the polygon, or another point within the polygon selected from the sorted triangle-tree. * `LineString` features will likewise provide a roughly central point selected from the triangle-tree. * The aggregation results will provide one central point for each aggregation bucket. All attributes from the original features will also be copied to the new label features. In addition, the new features will be distinguishable using the tag `_mvt_label_position`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es search-template`

Run a search with a search template.

[JSON Schema](./schemas/elastic-stack-es-search-template.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--ccs-minimize-roundtrips [value]` | Indicates whether network round-trips should be minimized as part of cross-cluster search requests execution. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. |  |  |
| `--ignore-throttled [value]` | If `true`, specified concrete, expanded, or aliased indices are not included in the response when throttled. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. It is random by default. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--scroll <string>` | Specifies how long a consistent view of the index should be maintained for scrolled search. |  |  |
| `--search-type <value>` | The type of the search operation. |  |  |
| `--rest-total-hits-as-int [value]` | If `true`, `hits.total` is rendered as an integer in the response. If `false`, it is rendered as an object. |  |  |
| `--typed-keys [value]` | If `true`, the response prefixes aggregation and suggester names with their respective types. |  |  |
| `--explain [value]` | If `true`, returns detailed information about score calculation as part of each hit. If you specify both this and the `explain` query parameter, the API uses only the query parameter. |  |  |
| `--id <string>` | The ID of the search template to use. If no `source` is specified, this parameter is required. |  |  |
| `--params <json>` | Key-value pairs used to replace Mustache variables in the template. The key is the variable name. The value is the variable value. |  |  |
| `--profile [value]` | If `true`, the query execution is profiled. |  |  |
| `--source <string>` | An inline search template. Supports the same parameters as the search API's request body. It also supports Mustache variables. If no `id` is specified, this parameter is required. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es terms-enum`

Get terms in an index.

[JSON Schema](./schemas/elastic-stack-es-terms-enum.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and index aliases to search. Wildcard (`*`) expressions are supported. To search all data streams or indices, omit this parameter or use `*`  or `_all`. (required) |  |  |
| `--field <string>` | The string to match at the start of indexed terms. If not provided, all terms in the field are considered. (required) |  |  |
| `--size <number>` | The number of matching terms to return. |  |  |
| `--timeout <string>` | The maximum length of time to spend collecting results. If the timeout is exceeded the `complete` flag set to `false` in the response and the results may be partial or empty. |  |  |
| `--case-insensitive [value]` | When `true`, the provided search string is matched against index terms without case sensitivity. |  |  |
| `--index-filter <json>` | Filter an index shard if the provided query rewrites to `match_none`. |  |  |
| `--string <string>` | The string to match at the start of indexed terms. If it is not provided, all terms in the field are considered. > info > The prefix string cannot be larger than the largest possible keyword value, which is Lucene's term byte-length limit of 32766. |  |  |
| `--search-after <string>` | The string after which terms in the index should be returned. It allows for a form of pagination if the last result from one request is passed as the `search_after` parameter for a subsequent request. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es termvectors`

Get term vector information.

[JSON Schema](./schemas/elastic-stack-es-termvectors.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | The name of the index that contains the document. (required) |  |  |
| `--id <string>` | A unique identifier for the document. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. It is random by default. |  |  |
| `--realtime [value]` | If true, the request is real-time as opposed to near-real-time. |  |  |
| `--doc <json>` | An artificial document (a document not present in the index) for which you want to retrieve term vectors. |  |  |
| `--filter <json>` | Filter terms based on their tf-idf scores. This could be useful in order find out a good characteristic vector of a document. This feature works in a similar manner to the second phase of the More Like This Query. |  |  |
| `--per-field-analyzer <json>` | Override the default per-field analyzer. This is useful in order to generate term vectors in any fashion, especially when using artificial documents. When providing an analyzer for a field that already stores term vectors, the term vectors will be regenerated. |  |  |
| `--fields <json>` | A list of fields to include in the statistics. It is used as the default list unless a specific field list is provided in the `completion_fields` or `fielddata_fields` parameters. |  |  |
| `--field-statistics [value]` | If `true`, the response includes: * The document count (how many documents contain this field). * The sum of document frequencies (the sum of document frequencies for all terms in this field). * The sum of total term frequencies (the sum of total term frequencies of each term in this field). |  |  |
| `--offsets [value]` | If `true`, the response includes term offsets. |  |  |
| `--payloads [value]` | If `true`, the response includes term payloads. |  |  |
| `--positions [value]` | If `true`, the response includes term positions. |  |  |
| `--term-statistics [value]` | If `true`, the response includes: * The total term frequency (how often a term occurs in all documents). * The document frequency (the number of documents containing the current term). By default these values are not returned since term statistics can have a serious performance impact. |  |  |
| `--routing <string>` | A custom value that is used to route operations to a specific shard. |  |  |
| `--version <number>` | If `true`, returns the document version as part of a hit. |  |  |
| `--version-type <value>` | The version type. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es update`

Update a document.

[JSON Schema](./schemas/elastic-stack-es-update.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | A unique identifier for the document to be updated. (required) |  |  |
| `--index <string>` | The name of the target index. By default, the index is created automatically if it doesn't exist. (required) |  |  |
| `--if-primary-term <number>` | Only perform the operation if the document has this primary term. |  |  |
| `--if-seq-no <number>` | Only perform the operation if the document has this sequence number. |  |  |
| `--include-source-on-error [value]` | True or false if to include the document source in the error message in case of parsing errors. |  |  |
| `--lang <string>` | The script language. |  |  |
| `--refresh [value]` | If 'true', Elasticsearch refreshes the affected shards to make this operation visible to search. If 'wait_for', it waits for a refresh to make this operation visible to search. If 'false', it does nothing with refreshes. |  |  |
| `--require-alias [value]` | If `true`, the destination must be an index alias. |  |  |
| `--retry-on-conflict <number>` | The number of times the operation should be retried when a conflict occurs. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--timeout <string>` | The period to wait for the following operations: dynamic mapping updates and waiting for active shards. Elasticsearch waits for at least the timeout period before failing. The actual wait time could be longer, particularly when multiple waits occur. |  |  |
| `--wait-for-active-shards <number>` | The number of copies of each shard that must be active before proceeding with the operation. Set to 'all' or any positive integer up to the total number of shards in the index (`number_of_replicas`+1). The default value of `1` means it waits for each primary shard to be active. |  |  |
| `--source-excludes <string>` | The source fields you want to exclude. |  |  |
| `--source-includes <string>` | The source fields you want to retrieve. |  |  |
| `--detect-noop [value]` | If `true`, the `result` in the response is set to `noop` (no operation) when there are no changes to the document. |  |  |
| `--doc <json>` | A partial update to an existing document. If both `doc` and `script` are specified, `doc` is ignored. |  |  |
| `--doc-as-upsert [value]` | If `true`, use the contents of 'doc' as the value of 'upsert'. NOTE: Using ingest pipelines with `doc_as_upsert` is not supported. |  |  |
| `--script <json>` | The script to run to update the document. |  |  |
| `--scripted-upsert [value]` | If `true`, run the script whether or not the document exists. |  |  |
| `--source [value]` | If `false`, turn off source retrieval. You can also specify a comma-separated list of the fields you want to retrieve. |  |  |
| `--upsert <json>` | If the document does not already exist, the contents of 'upsert' are inserted as a new document. If the document exists, the 'script' is run. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es update-by-query`

Update documents.

[JSON Schema](./schemas/elastic-stack-es-update-by-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--index <string>` | A comma-separated list of data streams, indices, and aliases to search. It supports wildcards (`*`). To search all data streams or indices, omit this parameter or use `*` or `_all`. (required) |  |  |
| `--allow-no-indices [value]` | A setting that does two separate checks on the index expression. If `false`, the request returns an error (1) if any wildcard expression (including `_all` and `*`) resolves to zero matching indices or (2) if the complete set of resolved indices, aliases or data streams is empty after all expressions are evaluated. If `true`, index expressions that resolve to no indices are allowed and the request returns an empty result. |  |  |
| `--analyzer <string>` | The analyzer to use for the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--analyze-wildcard [value]` | If `true`, wildcard and prefix queries are analyzed. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--default-operator <value>` | The default operator for query string query: `and` or `or`. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--df <string>` | The field to use as default where no field prefix is given in the query string. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--expand-wildcards <value>` | The type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. It supports comma-separated values, such as `open,hidden`. |  |  |
| `--from <number>` | Skips the specified number of documents. |  |  |
| `--ignore-unavailable [value]` | If `false`, the request returns an error if it targets a concrete (non-wildcarded) index, alias, or data stream that is missing, closed, or otherwise unavailable. If `true`, unavailable concrete targets are silently ignored. |  |  |
| `--lenient [value]` | If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored. This parameter can be used only when the `q` query string parameter is specified. |  |  |
| `--pipeline <string>` | The ID of the pipeline to use to preprocess incoming documents. If the index has a default ingest pipeline specified, then setting the value to `_none` disables the default ingest pipeline for this request. If a final pipeline is configured it will always run, regardless of the value of this parameter. |  |  |
| `--preference <string>` | The node or shard the operation should be performed on. It is random by default. |  |  |
| `--q <string>` | A query in the Lucene query string syntax. |  |  |
| `--refresh [value]` | If `true`, Elasticsearch refreshes affected shards to make the operation visible to search after the request completes. This is different than the update API's `refresh` parameter, which causes just the shard that received the request to be refreshed. |  |  |
| `--request-cache [value]` | If `true`, the request cache is used for this request. It defaults to the index-level setting. |  |  |
| `--requests-per-second <number>` | The throttle for this request in sub-requests per second. |  |  |
| `--routing <string>` | A custom value used to route operations to a specific shard. |  |  |
| `--scroll <string>` | The period to retain the search context for scrolling. |  |  |
| `--scroll-size <number>` | The size of the scroll request that powers the operation. |  |  |
| `--search-timeout <string>` | An explicit timeout for each search request. By default, there is no timeout. |  |  |
| `--search-type <value>` | The type of the search operation. Available options include `query_then_fetch` and `dfs_query_then_fetch`. |  |  |
| `--slices <number>` | The number of slices this task should be divided into. |  |  |
| `--sort <json>` | A comma-separated list of <field>:<direction> pairs. |  |  |
| `--stats <json>` | The specific `tag` of the request for logging and statistical purposes. |  |  |
| `--terminate-after <number>` | The maximum number of documents to collect for each shard. If a query reaches this limit, Elasticsearch terminates the query early. Elasticsearch collects documents before sorting. IMPORTANT: Use with caution. Elasticsearch applies this parameter to each shard handling the request. When possible, let Elasticsearch perform early termination automatically. Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers. |  |  |
| `--timeout <string>` | The period each update request waits for the following operations: dynamic mapping updates, waiting for active shards. By default, it is one minute. This guarantees Elasticsearch waits for at least the timeout before failing. The actual wait time could be longer, particularly when multiple waits occur. |  |  |
| `--version [value]` | If `true`, returns the document version as part of a hit. |  |  |
| `--version-type [value]` | Should the document increment the version number (internal) on hit or not (reindex) |  |  |
| `--wait-for-active-shards <number>` | The number of shard copies that must be active before proceeding with the operation. Set to `all` or any positive integer up to the total number of shards in the index (`number_of_replicas+1`). The `timeout` parameter controls how long each write request waits for unavailable shards to become available. Both work exactly the way they work in the bulk API. |  |  |
| `--wait-for-completion [value]` | If `true`, the request blocks until the operation is complete. If `false`, Elasticsearch performs some preflight checks, launches the request, and returns a task ID that you can use to cancel or get the status of the task. Elasticsearch creates a record of this task as a document at `.tasks/task/{taskId}`. |  |  |
| `--max-docs <number>` | The maximum number of documents to update. |  |  |
| `--query <json>` | The documents to update using the Query DSL. |  |  |
| `--script <json>` | The script to run to update the document source or metadata when updating. |  |  |
| `--slice <json>` | Slice the request manually using the provided slice ID and total number of slices. |  |  |
| `--conflicts <value>` | The preferred behavior when update by query hits version conflicts: `abort` or `proceed`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack es helpers`

High-level helper commands for common Elasticsearch workflows

| Command | Description |
|---------|-------------|
| `scroll-search` | Scroll through all search results, streaming documents as NDJSON to stdout, or returning a single JSON object when --json is set. |
| `bulk-ingest` | Bulk-ingest documents from file, directory, or stdin with automatic batching, concurrency, and retries. |
| `msearch` | Batch multiple search requests via _msearch with configurable batch size and concurrency. |

### `elastic stack es helpers scroll-search`

Scroll through all search results, streaming documents as NDJSON to stdout, or returning a single JSON object when --json is set.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `-i, --index <string>` | Target index | **required** |  |
| `-q, --query <string>` | Query DSL clause as JSON (wrapped under "query"), e.g. '{"match_all":{}}' |  |  |
| `--input-file <string>` | Path to a file containing the full search body JSON (may include query, sort, aggs, ...) |  |  |
| `--scroll <string>` | Scroll keep-alive duration |  | `1m` |
| `--size <number>` | Documents per scroll batch |  | `1000` |
| `--max-docs <number>` | Maximum total documents to fetch (default: unlimited) |  | `Infinity` |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es helpers bulk-ingest`

Bulk-ingest documents from file, directory, or stdin with automatic batching, concurrency, and retries.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `-i, --index <string>` | Target index | **required** |  |
| `--input-file <string>` | Path to data file (NDJSON or JSON array) |  |  |
| `--input-dir <string>` | Path to directory of data files to ingest |  |  |
| `--glob <string>` | Glob pattern for --input-dir file matching |  | `**/*.json` |
| `--no-recursive` | Do not recurse into subdirectories when using --input-dir |  |  |
| `--flush-bytes <number>` | Batch size threshold in bytes |  | `5242880` |
| `--concurrency <number>` | Number of parallel bulk requests |  | `5` |
| `--retries <number>` | Max retries per failed batch |  | `3` |
| `--retry-delay <number>` | Initial retry delay in ms (doubles each attempt) |  | `1000` |
| `--pipeline <string>` | Ingest pipeline name |  |  |
| `--routing <string>` | Custom routing value |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack es helpers msearch`

Batch multiple search requests via _msearch with configurable batch size and concurrency.

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `-i, --index <string>` | Default index for searches |  |  |
| `--input-file <string>` | Path to JSON file with search array |  |  |
| `--batch-size <number>` | Searches per _msearch request |  | `5` |
| `--concurrency <number>` | Parallel _msearch requests |  | `5` |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---
