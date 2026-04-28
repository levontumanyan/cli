# kb

Interact with the Kibana API

Aliases: `kibana`

## `elastic stack kb agent-builder`

Kibana agent-builder API commands

| Command | Description |
|---------|-------------|
| `post-agent-builder-a2a-agentid` | Send A2A task |
| `get-agent-builder-a2a-agentid-json` | Get A2A agent card |
| `get-agent-builder-agents` | List agents |
| `post-agent-builder-agents` | Create an agent |
| `post-agent-builder-agents-agent-id-consumption` | Get agent consumption data |
| `delete-agent-builder-agents-id` | Delete an agent |
| `get-agent-builder-agents-id` | Get an agent by ID |
| `put-agent-builder-agents-id` | Update an agent |
| `get-agent-builder-conversations` | List conversations |
| `delete-agent-builder-conversations-conversation-id` | Delete conversation by ID |
| `get-agent-builder-conversations-conversation-id` | Get conversation by ID |
| `get-agent-builder-conversations-conversation-id-attachments` | List conversation attachments |
| `post-agent-builder-conversations-conversation-id-attachments` | Create conversation attachment |
| `delete-agent-builder-conversations-conversation-id-attachments-attachment-id` | Delete conversation attachment |
| `patch-agent-builder-conversations-conversation-id-attachments-attachment-id` | Rename attachment |
| `put-agent-builder-conversations-conversation-id-attachments-attachment-id` | Update conversation attachment |
| `post-agent-builder-conversations-conversation-id-attachments-attachment-id-restore` | Restore deleted attachment |
| `put-agent-builder-conversations-conversation-id-attachments-attachment-id-origin` | Update attachment origin |
| `get-agent-builder-conversations-conversation-id-attachments-stale` | Check attachment staleness |
| `post-agent-builder-converse` | Send chat message |
| `post-agent-builder-converse-async` | Send chat message (streaming) |
| `post-agent-builder-mcp` | MCP server |
| `get-agent-builder-plugins` | List plugins |
| `delete-agent-builder-plugins-pluginid` | Delete a plugin |
| `get-agent-builder-plugins-pluginid` | Get a plugin by id |
| `post-agent-builder-plugins-install` | Install a plugin |
| `get-agent-builder-skills` | List skills |
| `post-agent-builder-skills` | Create a skill |
| `delete-agent-builder-skills-skillid` | Delete a skill |
| `get-agent-builder-skills-skillid` | Get a skill by id |
| `put-agent-builder-skills-skillid` | Update a skill |
| `get-agent-builder-tools` | List tools |
| `post-agent-builder-tools` | Create a tool |
| `post-agent-builder-tools-execute` | Run a tool |
| `delete-agent-builder-tools-toolid` | Delete a tool |
| `get-agent-builder-tools-toolid` | Get a tool by id |
| `put-agent-builder-tools-toolid` | Update a tool |

### `elastic stack kb agent-builder post-agent-builder-a2a-agentid`

Send A2A task

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-a2a-agentid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The unique identifier of the agent to send the A2A task to. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-a2a-agentid-json`

Get A2A agent card

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-a2a-agentid-json.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The unique identifier of the agent to get A2A metadata for. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-agents`

List agents

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-agents`

Create an agent

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-agents.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--avatar-color <string>` | Optional hex color code for the agent avatar. |  |  |
| `--avatar-symbol <string>` | Optional symbol/initials for the agent avatar. |  |  |
| `--configuration <json>` | Configuration settings for the agent. (required) |  |  |
| `--description <string>` | Description of what the agent does. (required) |  |  |
| `--id <string>` | Unique identifier for the agent. (required) |  |  |
| `--labels <json>` | Optional labels for categorizing and organizing agents. |  |  |
| `--name <string>` | Display name for the agent. (required) |  |  |
| `--visibility <string>` | **Technical Preview; added in 9.4.0.** Optional visibility setting: `public` (any privileged user can read/write), `shared` (any privileged user can read, only owner can write), `private` (only owner can read/write). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-agents-agent-id-consumption`

Get agent consumption data

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-agents-agent-id-consumption.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The unique identifier of the agent. (required) |  |  |
| `--has-warnings [value]` | Filter to conversations with or without high-token warnings. |  |  |
| `--search <string>` | Free-text search filter on conversation title. |  |  |
| `--search-after <json>` | Cursor for pagination. Pass the search_after value from the previous response. |  |  |
| `--size <number>` | Number of results per page. |  |  |
| `--sort-field <string>` | Field to sort results by. |  |  |
| `--sort-order <string>` | Sort direction. |  |  |
| `--usernames <json>` | Filter results to conversations by these usernames. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder delete-agent-builder-agents-id`

Delete an agent

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-delete-agent-builder-agents-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier of the agent to delete. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-agents-id`

Get an agent by ID

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-agents-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier of the agent to retrieve. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder put-agent-builder-agents-id`

Update an agent

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-put-agent-builder-agents-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier of the agent to update. (required) |  |  |
| `--avatar-color <string>` | Updated hex color code for the agent avatar. |  |  |
| `--avatar-symbol <string>` | Updated symbol/initials for the agent avatar. |  |  |
| `--configuration <json>` | Updated configuration settings for the agent. |  |  |
| `--description <string>` | Updated description of what the agent does. |  |  |
| `--labels <json>` | Updated labels for categorizing and organizing agents. |  |  |
| `--name <string>` | Updated display name for the agent. |  |  |
| `--visibility <string>` | **Technical Preview; added in 9.4.0.** Updated visibility setting: `public` (any privileged user can read/write), `shared` (any privileged user can read, only owner can write), `private` (only owner can read/write). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-conversations`

List conversations

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-conversations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | Optional agent ID to filter conversations by a specific agent. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder delete-agent-builder-conversations-conversation-id`

Delete conversation by ID

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-delete-agent-builder-conversations-conversation-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation to delete. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-conversations-conversation-id`

Get conversation by ID

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-conversations-conversation-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation to retrieve. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-conversations-conversation-id-attachments`

List conversation attachments

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-conversations-conversation-id-attachments.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--include-deleted [value]` | Whether to include deleted attachments in the list. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-conversations-conversation-id-attachments`

Create conversation attachment

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-conversations-conversation-id-attachments.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--data <string>` | (required) |  |  |
| `--description <string>` | Human-readable description of the attachment. |  |  |
| `--hidden [value]` | Whether the attachment should be hidden from the user. |  |  |
| `--id <string>` | Optional custom ID for the attachment. |  |  |
| `--origin <string>` | Origin string (for example, saved object ID) for by-reference attachments. When provided without data, the content is resolved once at creation time. |  |  |
| `--type <string>` | The type of the attachment (e.g., text, esql, visualization). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder delete-agent-builder-conversations-conversation-id-attachments-attachment-id`

Delete conversation attachment

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-delete-agent-builder-conversations-conversation-id-attachments-attachment-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--attachment-id <string>` | The unique identifier of the attachment to delete. (required) |  |  |
| `--permanent [value]` | If true, permanently removes the attachment (only for unreferenced attachments). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder patch-agent-builder-conversations-conversation-id-attachments-attachment-id`

Rename attachment

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-patch-agent-builder-conversations-conversation-id-attachments-attachment-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--attachment-id <string>` | The unique identifier of the attachment to rename. (required) |  |  |
| `--description <string>` | The new description/name for the attachment. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder put-agent-builder-conversations-conversation-id-attachments-attachment-id`

Update conversation attachment

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-put-agent-builder-conversations-conversation-id-attachments-attachment-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--attachment-id <string>` | The unique identifier of the attachment to update. (required) |  |  |
| `--data <string>` | (required) |  |  |
| `--description <string>` | Optional new description for the attachment. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-conversations-conversation-id-attachments-attachment-id-restore`

Restore deleted attachment

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-conversations-conversation-id-attachments-attachment-id-restore.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--attachment-id <string>` | The unique identifier of the attachment to restore. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder put-agent-builder-conversations-conversation-id-attachments-attachment-id-origin`

Update attachment origin

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-put-agent-builder-conversations-conversation-id-attachments-attachment-id-origin.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--attachment-id <string>` | The unique identifier of the attachment to update. (required) |  |  |
| `--origin <string>` | The origin string (e.g., saved object ID for visualizations and dashboards). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-conversations-conversation-id-attachments-stale`

Check attachment staleness

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-conversations-conversation-id-attachments-stale.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--conversation-id <string>` | The unique identifier of the conversation. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-converse`

Send chat message

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-converse.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-mode <string>` | **Experimental; added in 9.4.0.** define how to execute the agent (local execution or via task_manager) |  |  |
| `--action <string>` | The action to perform. "regenerate" re-executes the last round with the original input. Requires conversation_id. |  |  |
| `--agent-id <string>` | The ID of the agent to chat with. Defaults to the default Elastic AI agent. |  |  |
| `--attachments <json>` | **Technical Preview; added in 9.3.0.** Optional attachments to send with the message. |  |  |
| `--browser-api-tools <json>` | Optional browser API tools to be registered as LLM tools with browser.* namespace. These tools execute on the client side. |  |  |
| `--capabilities <json>` | Controls agent capabilities during conversation. Currently supports visualization rendering for tabular tool results. |  |  |
| `--configuration-overrides <json>` | Runtime configuration overrides. These override the stored agent configuration for this execution only. |  |  |
| `--connector-id <string>` | Optional connector ID for the agent to use for external integrations. |  |  |
| `--conversation-id <string>` | Optional existing conversation ID to continue a previous conversation. |  |  |
| `--input <string>` | The user input message to send to the agent. |  |  |
| `--prompts <json>` | Can be used to respond to a confirmation prompt. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-converse-async`

Send chat message (streaming)

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-converse-async.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-mode <string>` | **Experimental; added in 9.4.0.** define how to execute the agent (local execution or via task_manager) |  |  |
| `--action <string>` | The action to perform. "regenerate" re-executes the last round with the original input. Requires conversation_id. |  |  |
| `--agent-id <string>` | The ID of the agent to chat with. Defaults to the default Elastic AI agent. |  |  |
| `--attachments <json>` | **Technical Preview; added in 9.3.0.** Optional attachments to send with the message. |  |  |
| `--browser-api-tools <json>` | Optional browser API tools to be registered as LLM tools with browser.* namespace. These tools execute on the client side. |  |  |
| `--capabilities <json>` | Controls agent capabilities during conversation. Currently supports visualization rendering for tabular tool results. |  |  |
| `--configuration-overrides <json>` | Runtime configuration overrides. These override the stored agent configuration for this execution only. |  |  |
| `--connector-id <string>` | Optional connector ID for the agent to use for external integrations. |  |  |
| `--conversation-id <string>` | Optional existing conversation ID to continue a previous conversation. |  |  |
| `--input <string>` | The user input message to send to the agent. |  |  |
| `--prompts <json>` | Can be used to respond to a confirmation prompt. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-mcp`

MCP server

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-mcp.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--namespace <string>` | Comma-separated list of namespaces to filter tools. Only tools matching the specified namespaces will be returned. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-plugins`

List plugins

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder delete-agent-builder-plugins-pluginid`

Delete a plugin

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-delete-agent-builder-plugins-pluginid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--plugin-id <string>` | The unique identifier of the plugin. (required) |  |  |
| `--force [value]` | If true, removes the plugin skills from agents that use them and then deletes the plugin. If false and any agent uses the plugin skills, the request returns 409 Conflict with the list of agents. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-plugins-pluginid`

Get a plugin by id

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-plugins-pluginid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--plugin-id <string>` | The unique identifier of the plugin. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-plugins-install`

Install a plugin

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-plugins-install.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--plugin-name <string>` | Optional name override for the plugin. Defaults to the manifest name. |  |  |
| `--url <string>` | URL to install the plugin from (GitHub URL or direct zip URL). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-skills`

List skills

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-skills.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--include-plugins [value]` | Set to true to include skills from plugins. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-skills`

Create a skill

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-skills.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--content <string>` | Skill instructions content (markdown). (required) |  |  |
| `--description <string>` | Description of what the skill does. (required) |  |  |
| `--id <string>` | Unique identifier for the skill. (required) |  |  |
| `--name <string>` | Human-readable name for the skill. (required) |  |  |
| `--referenced-content <json>` |  |  |  |
| `--tool-ids <json>` | Tool IDs from the tool registry that this skill references. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder delete-agent-builder-skills-skillid`

Delete a skill

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-delete-agent-builder-skills-skillid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--skill-id <string>` | The unique identifier of the skill. (required) |  |  |
| `--force [value]` | If true, removes the skill from agents that use it and then deletes it. If false and any agent uses the skill, the request returns 409 Conflict with the list of agents. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-skills-skillid`

Get a skill by id

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-skills-skillid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--skill-id <string>` | The unique identifier of the skill. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder put-agent-builder-skills-skillid`

Update a skill

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-put-agent-builder-skills-skillid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--skill-id <string>` | The unique identifier of the skill. (required) |  |  |
| `--content <string>` | Updated skill instructions content. |  |  |
| `--description <string>` | Updated description. |  |  |
| `--name <string>` | Updated name for the skill. |  |  |
| `--referenced-content <json>` |  |  |  |
| `--tool-ids <json>` | Updated tool IDs from the tool registry. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-tools`

List tools

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-tools`

Create a tool

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-tools.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--configuration <json>` | Tool-specific configuration parameters. See examples for details. (required) |  |  |
| `--description <string>` | Description of what the tool does. |  |  |
| `--id <string>` | Unique identifier for the tool. (required) |  |  |
| `--tags <json>` | Optional tags for categorizing and organizing tools. |  |  |
| `--type <string>` | The type of tool to create (e.g., esql, index_search). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder post-agent-builder-tools-execute`

Run a tool

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-post-agent-builder-tools-execute.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--connector-id <string>` | Optional connector ID for tools that require external integrations. |  |  |
| `--tool-id <string>` | The ID of the tool to execute. (required) |  |  |
| `--tool-params <json>` | Parameters to pass to the tool execution. See examples for details (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder delete-agent-builder-tools-toolid`

Delete a tool

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-delete-agent-builder-tools-toolid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--tool-id <string>` | The unique identifier of the tool to delete. (required) |  |  |
| `--force [value]` | If true, removes the tool from agents that use it and then deletes it. If false and any agent uses the tool, the request returns 409 Conflict with the list of agents. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder get-agent-builder-tools-toolid`

Get a tool by id

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-get-agent-builder-tools-toolid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--tool-id <string>` | The unique identifier of the tool to retrieve. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb agent-builder put-agent-builder-tools-toolid`

Update a tool

[JSON Schema](./schemas/elastic-stack-kb-agent-builder-put-agent-builder-tools-toolid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--tool-id <string>` | The unique identifier of the tool to update. (required) |  |  |
| `--configuration <json>` | Updated tool-specific configuration parameters. See examples for details. |  |  |
| `--description <string>` | Updated description of what the tool does. |  |  |
| `--tags <json>` | Updated tags for categorizing and organizing tools. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb alerting`

Kibana alerting API commands

| Command | Description |
|---------|-------------|
| `delete-alerting-rule-id` | Delete a rule |
| `get-alerting-rule-id` | Get rule details |
| `post-alerting-rule-id` | Create a rule |
| `put-alerting-rule-id` | Update a rule |
| `post-alerting-rule-id-disable` | Disable a rule |
| `post-alerting-rule-id-enable` | Enable a rule |
| `post-alerting-rule-id-mute-all` | Mute all alerts |
| `post-alerting-rule-id-unmute-all` | Unmute all alerts |
| `post-alerting-rule-id-update-api-key` | Update the API key for a rule |
| `post-alerting-rule-id-snooze-schedule` | Schedule a snooze for the rule |
| `post-alerting-rule-rule-id-alert-alert-id-mute` | Mute an alert |
| `post-alerting-rule-rule-id-alert-alert-id-unmute` | Unmute an alert |
| `delete-alerting-rule-ruleid-snooze-schedule-scheduleid` | Delete a snooze schedule for a rule |
| `get-alerting-rules-find` | Get information about rules |
| `post-alerting-rules-backfill-find` | Find backfills for rules |
| `post-alerting-rules-backfill-schedule` | Schedule a backfill for rules |
| `delete-alerting-rules-backfill-id` | Delete a backfill by ID |
| `get-alerting-rules-backfill-id` | Get a backfill by ID |

### `elastic stack kb alerting delete-alerting-rule-id`

Delete a rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-delete-alerting-rule-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting get-alerting-rule-id`

Get rule details

[JSON Schema](./schemas/elastic-stack-kb-alerting-get-alerting-rule-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-id`

Create a rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. If it is omitted, an ID is randomly generated. (required) |  |  |
| `--actions <json>` |  |  |  |
| `--alert-delay <json>` | Indicates that an alert occurs only when the specified number of consecutive runs met the rule conditions. |  |  |
| `--artifacts <json>` |  |  |  |
| `--consumer <string>` | The name of the application or feature that owns the rule. For example: `alerts`, `apm`, `discover`, `infrastructure`, `logs`, `metrics`, `ml`, `monitoring`, `securitySolution`, `siem`, `stackAlerts`, or `uptime`. (required) |  |  |
| `--enabled [value]` | Indicates whether you want to run the rule on an interval basis after it is created. |  |  |
| `--flapping <json>` | When flapping detection is turned on, alerts that switch quickly between active and recovered states are identified as “flapping” and notifications are reduced. |  |  |
| `--name <string>` | The name of the rule. While this name does not have to be unique, a distinctive name can help you identify a rule. (required) |  |  |
| `--notify-when <string>` | Indicates how often alerts generate actions. Valid values include: `onActionGroupChange`: Actions run when the alert status changes; `onActiveAlert`: Actions run when the alert becomes active and at each check interval while the rule conditions are met; `onThrottleInterval`: Actions run when the alert becomes active and at the interval specified in the throttle property while the rule conditions are met. NOTE: You cannot specify `notify_when` at both the rule and action level. The recommended method is to set it for each action. If you set it at the rule level then update the rule in Kibana, it is automatically changed to use action-specific values. |  |  |
| `--rule-type-id <string>` | The rule type identifier. (required) |  |  |
| `--schedule <json>` | The check interval, which specifies how frequently the rule conditions are checked. (required) |  |  |
| `--tags <json>` | The tags for the rule. |  |  |
| `--throttle <string>` | Use the `throttle` property in the action `frequency` object instead. The throttle interval, which defines how often an alert generates repeated actions. NOTE: You cannot specify the throttle interval at both the rule and action level. If you set it at the rule level then update the rule in Kibana, it is automatically changed to use action-specific values. |  |  |
| `--params <string>` | The parameters for the rule. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting put-alerting-rule-id`

Update a rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-put-alerting-rule-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--actions <json>` |  |  |  |
| `--alert-delay <json>` | Indicates that an alert occurs only when the specified number of consecutive runs met the rule conditions. |  |  |
| `--artifacts <json>` |  |  |  |
| `--flapping <json>` | When flapping detection is turned on, alerts that switch quickly between active and recovered states are identified as “flapping” and notifications are reduced. |  |  |
| `--name <string>` | The name of the rule. While this name does not have to be unique, a distinctive name can help you identify a rule. (required) |  |  |
| `--notify-when <string>` | Indicates how often alerts generate actions. Valid values include: `onActionGroupChange`: Actions run when the alert status changes; `onActiveAlert`: Actions run when the alert becomes active and at each check interval while the rule conditions are met; `onThrottleInterval`: Actions run when the alert becomes active and at the interval specified in the throttle property while the rule conditions are met. NOTE: You cannot specify `notify_when` at both the rule and action level. The recommended method is to set it for each action. If you set it at the rule level then update the rule in Kibana, it is automatically changed to use action-specific values. |  |  |
| `--params <json>` | The parameters for the rule. |  |  |
| `--schedule <json>` | (required) |  |  |
| `--tags <json>` |  |  |  |
| `--throttle <string>` | Use the `throttle` property in the action `frequency` object instead. The throttle interval, which defines how often an alert generates repeated actions. NOTE: You cannot specify the throttle interval at both the rule and action level. If you set it at the rule level then update the rule in Kibana, it is automatically changed to use action-specific values. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-id-disable`

Disable a rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-id-disable.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--untrack [value]` | Defines whether this rule's alerts should be untracked. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-id-enable`

Enable a rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-id-enable.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-id-mute-all`

Mute all alerts

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-id-mute-all.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-id-unmute-all`

Unmute all alerts

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-id-unmute-all.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-id-update-api-key`

Update the API key for a rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-id-update-api-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the rule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-id-snooze-schedule`

Schedule a snooze for the rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-id-snooze-schedule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Identifier of the rule. (required) |  |  |
| `--schedule <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-rule-id-alert-alert-id-mute`

Mute an alert

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-rule-id-alert-alert-id-mute.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--rule-id <string>` | The identifier for the rule. (required) |  |  |
| `--alert-id <string>` | The identifier for the alert. (required) |  |  |
| `--validate-alerts-existence [value]` | Whether to validate the existence of the alert. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rule-rule-id-alert-alert-id-unmute`

Unmute an alert

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rule-rule-id-alert-alert-id-unmute.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--rule-id <string>` | The identifier for the rule. (required) |  |  |
| `--alert-id <string>` | The identifier for the alert. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting delete-alerting-rule-ruleid-snooze-schedule-scheduleid`

Delete a snooze schedule for a rule

[JSON Schema](./schemas/elastic-stack-kb-alerting-delete-alerting-rule-ruleid-snooze-schedule-scheduleid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--rule-id <string>` | The identifier for the rule. (required) |  |  |
| `--schedule-id <string>` | The identifier for the snooze schedule. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting get-alerting-rules-find`

Get information about rules

[JSON Schema](./schemas/elastic-stack-kb-alerting-get-alerting-rules-find.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--per-page <number>` | The number of rules to return per page. |  |  |
| `--page <number>` | The page number to return. |  |  |
| `--search <string>` | An Elasticsearch simple_query_string query that filters the objects in the response. |  |  |
| `--default-search-operator <string>` | The default operator to use for the simple_query_string. |  |  |
| `--search-fields <string>` | The fields to perform the simple_query_string parsed query against. |  |  |
| `--sort-field <string>` | Determines which field is used to sort the results. The field must exist in the `attributes` key of the response. |  |  |
| `--sort-order <string>` | Determines the sort order. |  |  |
| `--has-reference <string>` | Filters the rules that have a relation with the reference objects with a specific type and identifier. |  |  |
| `--fields <string>` | The fields to return in the `attributes` key of the response. |  |  |
| `--filter <string>` | A KQL string that you filter with an attribute from your saved object. It should look like `savedObjectType.attributes.title: "myTitle"`. However, if you used a direct attribute of a saved object, such as `updatedAt`, you must define your filter, for example, `savedObjectType.updatedAt > 2018-12-22`. |  |  |
| `--filter-consumers <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rules-backfill-find`

Find backfills for rules

[JSON Schema](./schemas/elastic-stack-kb-alerting-post-alerting-rules-backfill-find.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--end <string>` | The end date for filtering backfills. |  |  |
| `--page <number>` | The page number to return. |  |  |
| `--per-page <number>` | The number of backfills to return per page. |  |  |
| `--rule-ids <string>` | A comma-separated list of rule identifiers. |  |  |
| `--initiator <string>` | The initiator of the backfill, either `user` for manual backfills or `system` for automatic gap fills. |  |  |
| `--start <string>` | The start date for filtering backfills. |  |  |
| `--sort-field <string>` | The field to sort backfills by. |  |  |
| `--sort-order <string>` | The sort order. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting post-alerting-rules-backfill-schedule`

Schedule a backfill for rules

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting delete-alerting-rules-backfill-id`

Delete a backfill by ID

[JSON Schema](./schemas/elastic-stack-kb-alerting-delete-alerting-rules-backfill-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the backfill. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb alerting get-alerting-rules-backfill-id`

Get a backfill by ID

[JSON Schema](./schemas/elastic-stack-kb-alerting-get-alerting-rules-backfill-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the backfill. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb apm-agent-configuration`

Kibana apm-agent-configuration API commands

| Command | Description |
|---------|-------------|
| `delete-agent-configuration` | Delete agent configuration |
| `get-agent-configurations` | Get a list of agent configurations |
| `create-update-agent-configuration` | Create or update agent configuration |
| `get-agent-name-for-service` | Get agent name for service |
| `get-environments-for-service` | Get environments for service |
| `search-single-configuration` | Lookup single agent configuration |
| `get-single-agent-configuration` | Get single agent configuration |

### `elastic stack kb apm-agent-configuration delete-agent-configuration`

Delete agent configuration

[JSON Schema](./schemas/elastic-stack-kb-apm-agent-configuration-delete-agent-configuration.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--service <json>` | Service (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-agent-configuration get-agent-configurations`

Get a list of agent configurations

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-agent-configuration create-update-agent-configuration`

Create or update agent configuration

[JSON Schema](./schemas/elastic-stack-kb-apm-agent-configuration-create-update-agent-configuration.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--overwrite [value]` | If the config exists ?overwrite=true is required |  |  |
| `--agent-name <string>` | The agent name is used by the UI to determine which settings to display. |  |  |
| `--service <json>` | Service (required) |  |  |
| `--settings <json>` | Agent configuration settings (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-agent-configuration get-agent-name-for-service`

Get agent name for service

[JSON Schema](./schemas/elastic-stack-kb-apm-agent-configuration-get-agent-name-for-service.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--service-name <string>` | The name of the service (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-agent-configuration get-environments-for-service`

Get environments for service

[JSON Schema](./schemas/elastic-stack-kb-apm-agent-configuration-get-environments-for-service.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--service-name <string>` | The name of the service |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-agent-configuration search-single-configuration`

Lookup single agent configuration

[JSON Schema](./schemas/elastic-stack-kb-apm-agent-configuration-search-single-configuration.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--etag <string>` | If etags match then `applied_by_agent` field will be set to `true` |  |  |
| `--mark-as-applied-by-agent [value]` | `markAsAppliedByAgent=true` means "force setting it to true regardless of etag". |  |  |
| `--service <json>` | Service (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-agent-configuration get-single-agent-configuration`

Get single agent configuration

[JSON Schema](./schemas/elastic-stack-kb-apm-agent-configuration-get-single-agent-configuration.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | Service name |  |  |
| `--environment <string>` | Service environment |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb apm-agent-keys`

Kibana apm-agent-keys API commands

| Command | Description |
|---------|-------------|
| `create-agent-key` | Create an APM agent key |

### `elastic stack kb apm-agent-keys create-agent-key`

Create an APM agent key

[JSON Schema](./schemas/elastic-stack-kb-apm-agent-keys-create-agent-key.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name of the APM agent key. (required) |  |  |
| `--privileges <json>` | The APM agent key privileges. It can take one or more of the following values: (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb apm-annotations`

Kibana apm-annotations API commands

| Command | Description |
|---------|-------------|
| `create-annotation` | Create a service annotation |
| `get-annotation` | Search for annotations |

### `elastic stack kb apm-annotations create-annotation`

Create a service annotation

[JSON Schema](./schemas/elastic-stack-kb-apm-annotations-create-annotation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--service-name <string>` | The name of the service (required) |  |  |
| `--@timestamp <string>` | The date and time of the annotation. It must be in ISO 8601 format. (required) |  |  |
| `--message <string>` | The message displayed in the annotation. It defaults to `service.version`. |  |  |
| `--service <json>` | The service that identifies the configuration to create or update. (required) |  |  |
| `--tags <json>` | Tags are used by the Applications UI to distinguish APM annotations from other annotations. Tags may have additional functionality in future releases. It defaults to `[apm]`. While you can add additional tags, you cannot remove the `apm` tag. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-annotations get-annotation`

Search for annotations

[JSON Schema](./schemas/elastic-stack-kb-apm-annotations-get-annotation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--service-name <string>` | The name of the service (required) |  |  |
| `--environment <string>` | The environment to filter annotations by |  |  |
| `--start <string>` | The start date for the search |  |  |
| `--end <string>` | The end date for the search |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb apm-server-schema`

Kibana apm-server-schema API commands

| Command | Description |
|---------|-------------|
| `save-apm-server-schema` | Save APM server schema |

### `elastic stack kb apm-server-schema save-apm-server-schema`

Save APM server schema

[JSON Schema](./schemas/elastic-stack-kb-apm-server-schema-save-apm-server-schema.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--schema <json>` | Schema object |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb apm-sourcemaps`

Kibana apm-sourcemaps API commands

| Command | Description |
|---------|-------------|
| `get-source-maps` | Get source maps |
| `upload-source-map` | Upload a source map |
| `delete-source-map` | Delete source map |

### `elastic stack kb apm-sourcemaps get-source-maps`

Get source maps

[JSON Schema](./schemas/elastic-stack-kb-apm-sourcemaps-get-source-maps.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` | Page number |  |  |
| `--per-page <number>` | Number of records per page |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-sourcemaps upload-source-map`

Upload a source map

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb apm-sourcemaps delete-source-map`

Delete source map

[JSON Schema](./schemas/elastic-stack-kb-apm-sourcemaps-delete-source-map.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Source map identifier (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb connectors`

Kibana connectors API commands

| Command | Description |
|---------|-------------|
| `get-actions-connector-types` | Get connector types |
| `get-actions-connector-oauth-callback` | Handle OAuth callback |
| `delete-actions-connector-id` | Delete a connector |
| `get-actions-connector-id` | Get connector information |
| `post-actions-connector-id` | Create a connector |
| `put-actions-connector-id` | Update a connector |
| `post-actions-connector-id-execute` | Run a connector |
| `get-actions-connectors` | Get all connectors |

### `elastic stack kb connectors get-actions-connector-types`

Get connector types

[JSON Schema](./schemas/elastic-stack-kb-connectors-get-actions-connector-types.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--feature-id <string>` | A filter to limit the retrieved connector types to those that support a specific feature (such as alerting or cases). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb connectors get-actions-connector-oauth-callback`

Handle OAuth callback

[JSON Schema](./schemas/elastic-stack-kb-connectors-get-actions-connector-oauth-callback.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--code <string>` | The authorization code returned by the OAuth provider. |  |  |
| `--state <string>` | The state parameter for CSRF protection. |  |  |
| `--error <string>` | Error code if the authorization failed. |  |  |
| `--error-description <string>` | Human-readable error description. |  |  |
| `--session-state <string>` | Session state from the OAuth provider (e.g., Microsoft). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb connectors delete-actions-connector-id`

Delete a connector

[JSON Schema](./schemas/elastic-stack-kb-connectors-delete-actions-connector-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An identifier for the connector. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb connectors get-actions-connector-id`

Get connector information

[JSON Schema](./schemas/elastic-stack-kb-connectors-get-actions-connector-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An identifier for the connector. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb connectors post-actions-connector-id`

Create a connector

[JSON Schema](./schemas/elastic-stack-kb-connectors-post-actions-connector-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An identifier for the connector. (required) |  |  |
| `--connector-type-id <string>` | The type of connector. (required) |  |  |
| `--name <string>` | The display name for the connector. (required) |  |  |
| `--kb-config <string>` | The connector configuration details. |  |  |
| `--secrets <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb connectors put-actions-connector-id`

Update a connector

[JSON Schema](./schemas/elastic-stack-kb-connectors-put-actions-connector-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An identifier for the connector. (required) |  |  |
| `--name <string>` | The display name for the connector. (required) |  |  |
| `--kb-config <string>` | The connector configuration details. |  |  |
| `--secrets <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb connectors post-actions-connector-id-execute`

Run a connector

[JSON Schema](./schemas/elastic-stack-kb-connectors-post-actions-connector-id-execute.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | An identifier for the connector. (required) |  |  |
| `--params <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb connectors get-actions-connectors`

Get all connectors

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb data-streams`

Kibana data-streams API commands

| Command | Description |
|---------|-------------|
| `get-fleet-data-streams` | Get data streams |
| `get-fleet-epm-data-streams` | Get data streams |

### `elastic stack kb data-streams get-fleet-data-streams`

Get data streams

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-streams get-fleet-epm-data-streams`

Get data streams

[JSON Schema](./schemas/elastic-stack-kb-data-streams-get-fleet-epm-data-streams.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--type <string>` |  |  |  |
| `--dataset-query <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--uncategorised-only [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb data-views`

Kibana data-views API commands

| Command | Description |
|---------|-------------|
| `get-all-data-views-default` | Get all data views |
| `create-data-view-defaultw` | Create a data view |
| `delete-data-view-default` | Delete a data view |
| `get-data-view-default` | Get a data view |
| `update-data-view-default` | Update a data view |
| `update-fields-metadata-default` | Update data view fields metadata |
| `create-runtime-field-default` | Create a runtime field |
| `create-update-runtime-field-default` | Create or update a runtime field |
| `delete-runtime-field-default` | Delete a runtime field from a data view |
| `get-runtime-field-default` | Get a runtime field |
| `update-runtime-field-default` | Update a runtime field |
| `get-default-data-view-default` | Get the default data view |
| `set-default-datail-view-default` | Set the default data view |
| `swap-data-views-default` | Swap saved object references |
| `preview-swap-data-views-default` | Preview a saved object reference swap |

### `elastic stack kb data-views get-all-data-views-default`

Get all data views

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views create-data-view-defaultw`

Create a data view

[JSON Schema](./schemas/elastic-stack-kb-data-views-create-data-view-defaultw.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--data-view <json>` | The data view object. (required) |  |  |
| `--override [value]` | Override an existing data view if a data view with the provided title already exists. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views delete-data-view-default`

Delete a data view

[JSON Schema](./schemas/elastic-stack-kb-data-views-delete-data-view-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views get-data-view-default`

Get a data view

[JSON Schema](./schemas/elastic-stack-kb-data-views-get-data-view-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views update-data-view-default`

Update a data view

[JSON Schema](./schemas/elastic-stack-kb-data-views-update-data-view-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--data-view <json>` | The data view properties you want to update. Only the specified properties are updated in the data view. Unspecified fields stay as they are persisted. (required) |  |  |
| `--refresh-fields [value]` | Reloads the data view fields after the data view is updated. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views update-fields-metadata-default`

Update data view fields metadata

[JSON Schema](./schemas/elastic-stack-kb-data-views-update-fields-metadata-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--fields <json>` | The field object. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views create-runtime-field-default`

Create a runtime field

[JSON Schema](./schemas/elastic-stack-kb-data-views-create-runtime-field-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--name <string>` | The name for a runtime field. (required) |  |  |
| `--runtime-field <json>` | The runtime field definition object. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views create-update-runtime-field-default`

Create or update a runtime field

[JSON Schema](./schemas/elastic-stack-kb-data-views-create-update-runtime-field-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The ID of the data view fields you want to update. (required) |  |  |
| `--name <string>` | The name for a runtime field. (required) |  |  |
| `--runtime-field <json>` | The runtime field definition object. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views delete-runtime-field-default`

Delete a runtime field from a data view

[JSON Schema](./schemas/elastic-stack-kb-data-views-delete-runtime-field-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--field-name <string>` | The fieldName parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views get-runtime-field-default`

Get a runtime field

[JSON Schema](./schemas/elastic-stack-kb-data-views-get-runtime-field-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--field-name <string>` | The fieldName parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views update-runtime-field-default`

Update a runtime field

[JSON Schema](./schemas/elastic-stack-kb-data-views-update-runtime-field-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--view-id <string>` | The viewId parameter (required) |  |  |
| `--field-name <string>` | The fieldName parameter (required) |  |  |
| `--runtime-field <json>` | The runtime field definition object. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views get-default-data-view-default`

Get the default data view

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views set-default-datail-view-default`

Set the default data view

[JSON Schema](./schemas/elastic-stack-kb-data-views-set-default-datail-view-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--data-view-id <string>` | The data view identifier. NOTE: The API does not validate whether it is a valid identifier. Use `null` to unset the default data view. (required) |  |  |
| `--force [value]` | Update an existing default data view identifier. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views swap-data-views-default`

Swap saved object references

[JSON Schema](./schemas/elastic-stack-kb-data-views-swap-data-views-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--delete [value]` | Deletes referenced saved object if all references are removed. |  |  |
| `--for-id <string>` | Limit the affected saved objects to one or more by identifier. |  |  |
| `--for-type <string>` | Limit the affected saved objects by type. |  |  |
| `--from-id <string>` | The saved object reference to change. (required) |  |  |
| `--from-type <string>` | Specify the type of the saved object reference to alter. The default value is `index-pattern` for data views. |  |  |
| `--to-id <string>` | New saved object reference value to replace the old value. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb data-views preview-swap-data-views-default`

Preview a saved object reference swap

[JSON Schema](./schemas/elastic-stack-kb-data-views-preview-swap-data-views-default.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--delete [value]` | Deletes referenced saved object if all references are removed. |  |  |
| `--for-id <string>` | Limit the affected saved objects to one or more by identifier. |  |  |
| `--for-type <string>` | Limit the affected saved objects by type. |  |  |
| `--from-id <string>` | The saved object reference to change. (required) |  |  |
| `--from-type <string>` | Specify the type of the saved object reference to alter. The default value is `index-pattern` for data views. |  |  |
| `--to-id <string>` | New saved object reference value to replace the old value. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb elastic-agent-actions`

Kibana elastic-agent-actions API commands

| Command | Description |
|---------|-------------|
| `post-fleet-agents-agentid-actions` | Create an agent action |
| `post-fleet-agents-agentid-reassign` | Reassign an agent |
| `post-fleet-agents-agentid-request-diagnostics` | Request agent diagnostics |
| `post-fleet-agents-agentid-rollback` | Rollback an agent |
| `post-fleet-agents-agentid-unenroll` | Unenroll an agent |
| `post-fleet-agents-agentid-upgrade` | Upgrade an agent |
| `get-fleet-agents-action-status` | Get an agent action status |
| `post-fleet-agents-actions-actionid-cancel` | Cancel an agent action |
| `post-fleet-agents-bulk-reassign` | Bulk reassign agents |
| `post-fleet-agents-bulk-request-diagnostics` | Bulk request diagnostics from agents |
| `post-fleet-agents-bulk-rollback` | Bulk rollback agents |
| `post-fleet-agents-bulk-unenroll` | Bulk unenroll agents |
| `post-fleet-agents-bulk-update-agent-tags` | Bulk update agent tags |
| `post-fleet-agents-bulk-upgrade` | Bulk upgrade agents |

### `elastic stack kb elastic-agent-actions post-fleet-agents-agentid-actions`

Create an agent action

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-agentid-actions.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--action <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-agentid-reassign`

Reassign an agent

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-agentid-reassign.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--policy-id <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-agentid-request-diagnostics`

Request agent diagnostics

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-agentid-request-diagnostics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--additional-metrics <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-agentid-rollback`

Rollback an agent

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-agentid-rollback.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agent ID to rollback (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-agentid-unenroll`

Unenroll an agent

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-agentid-unenroll.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--revoke [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-agentid-upgrade`

Upgrade an agent

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-agentid-upgrade.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--skip-rate-limit-check [value]` |  |  |  |
| `--source-uri <string>` |  |  |  |
| `--kb-version <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions get-fleet-agents-action-status`

Get an agent action status

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-get-fleet-agents-action-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--per-page <number>` |  |  |  |
| `--date <string>` |  |  |  |
| `--latest <number>` |  |  |  |
| `--error-size <number>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-actions-actionid-cancel`

Cancel an agent action

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-actions-actionid-cancel.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--action-id <string>` | The actionId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-bulk-reassign`

Bulk reassign agents

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-bulk-reassign.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--include-inactive [value]` |  |  |  |
| `--policy-id <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-bulk-request-diagnostics`

Bulk request diagnostics from agents

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-bulk-request-diagnostics.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--additional-metrics <json>` |  |  |  |
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-bulk-rollback`

Bulk rollback agents

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-bulk-rollback.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--include-inactive [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-bulk-unenroll`

Bulk unenroll agents

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-bulk-unenroll.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--force [value]` | Unenrolls hosted agents too |  |  |
| `--include-inactive [value]` | When passing agents by KQL query, unenrolls inactive agents too |  |  |
| `--revoke [value]` | Revokes API keys of agents |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-bulk-update-agent-tags`

Bulk update agent tags

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-bulk-update-agent-tags.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--include-inactive [value]` |  |  |  |
| `--tags-to-add <json>` |  |  |  |
| `--tags-to-remove <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-actions post-fleet-agents-bulk-upgrade`

Bulk upgrade agents

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-actions-post-fleet-agents-bulk-upgrade.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--force [value]` |  |  |  |
| `--include-inactive [value]` |  |  |  |
| `--rollout-duration-seconds <number>` |  |  |  |
| `--skip-rate-limit-check [value]` |  |  |  |
| `--source-uri <string>` |  |  |  |
| `--start-time <string>` |  |  |  |
| `--kb-version <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb elastic-agent-binary-download-sources`

Kibana elastic-agent-binary-download-sources API commands

| Command | Description |
|---------|-------------|
| `get-fleet-agent-download-sources` | Get agent binary download sources |
| `post-fleet-agent-download-sources` | Create an agent binary download source |
| `delete-fleet-agent-download-sources-sourceid` | Delete an agent binary download source |
| `get-fleet-agent-download-sources-sourceid` | Get an agent binary download source |
| `put-fleet-agent-download-sources-sourceid` | Update an agent binary download source |

### `elastic stack kb elastic-agent-binary-download-sources get-fleet-agent-download-sources`

Get agent binary download sources

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-binary-download-sources post-fleet-agent-download-sources`

Create an agent binary download source

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-binary-download-sources-post-fleet-agent-download-sources.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--auth <json>` |  |  |  |
| `--host <string>` | (required) |  |  |
| `--id <string>` |  |  |  |
| `--is-default [value]` |  |  |  |
| `--name <string>` | (required) |  |  |
| `--proxy-id <string>` | The ID of the proxy to use for this download source. See the proxies API for more information. |  |  |
| `--secrets <json>` |  |  |  |
| `--ssl <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-binary-download-sources delete-fleet-agent-download-sources-sourceid`

Delete an agent binary download source

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-binary-download-sources-delete-fleet-agent-download-sources-sourceid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--source-id <string>` | The sourceId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-binary-download-sources get-fleet-agent-download-sources-sourceid`

Get an agent binary download source

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-binary-download-sources-get-fleet-agent-download-sources-sourceid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--source-id <string>` | The sourceId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-binary-download-sources put-fleet-agent-download-sources-sourceid`

Update an agent binary download source

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-binary-download-sources-put-fleet-agent-download-sources-sourceid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--source-id <string>` | The sourceId parameter (required) |  |  |
| `--auth <json>` |  |  |  |
| `--host <string>` | (required) |  |  |
| `--id <string>` |  |  |  |
| `--is-default [value]` |  |  |  |
| `--name <string>` | (required) |  |  |
| `--proxy-id <string>` | The ID of the proxy to use for this download source. See the proxies API for more information. |  |  |
| `--secrets <json>` |  |  |  |
| `--ssl <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb elastic-agent-policies`

Kibana elastic-agent-policies API commands

| Command | Description |
|---------|-------------|
| `get-fleet-agent-policies` | Get agent policies |
| `post-fleet-agent-policies` | Create an agent policy |
| `post-fleet-agent-policies-bulk-get` | Bulk get agent policies |
| `get-fleet-agent-policies-agentpolicyid` | Get an agent policy |
| `put-fleet-agent-policies-agentpolicyid` | Update an agent policy |
| `get-fleet-agent-policies-agentpolicyid-auto-upgrade-agents-status` | Get auto upgrade agent status |
| `post-fleet-agent-policies-agentpolicyid-copy` | Copy an agent policy |
| `get-fleet-agent-policies-agentpolicyid-download` | Download an agent policy |
| `get-fleet-agent-policies-agentpolicyid-full` | Get a full agent policy |
| `get-fleet-agent-policies-agentpolicyid-outputs` | Get outputs for an agent policy |
| `post-fleet-agent-policies-delete` | Delete an agent policy |
| `post-fleet-agent-policies-outputs` | Get outputs for agent policies |
| `get-fleet-kubernetes` | Get a full K8s agent manifest |
| `get-fleet-kubernetes-download` | Download an agent manifest |

### `elastic stack kb elastic-agent-policies get-fleet-agent-policies`

Get agent policies

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-agent-policies.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--per-page <number>` |  |  |  |
| `--sort-field <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--show-upgradeable [value]` |  |  |  |
| `--kuery <string>` |  |  |  |
| `--no-agent-count [value]` | use withAgentCount instead |  |  |
| `--with-agent-count [value]` | get policies with agent count |  |  |
| `--full [value]` | get full policies with package policies populated |  |  |
| `--kb-format <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies post-fleet-agent-policies`

Create an agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-post-fleet-agent-policies.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--sys-monitoring [value]` |  |  |  |
| `--advanced-settings <json>` |  |  |  |
| `--agent-features <json>` |  |  |  |
| `--agentless <json>` |  |  |  |
| `--data-output-id <string>` |  |  |  |
| `--description <string>` |  |  |  |
| `--download-source-id <string>` |  |  |  |
| `--fleet-server-host-id <string>` |  |  |  |
| `--force [value]` |  |  |  |
| `--global-data-tags <json>` | User defined data tags that are added to all of the inputs. The values can be strings or numbers. |  |  |
| `--has-agent-version-conditions [value]` |  |  |  |
| `--has-fleet-server [value]` |  |  |  |
| `--id <string>` |  |  |  |
| `--inactivity-timeout <number>` |  |  |  |
| `--is-default [value]` |  |  |  |
| `--is-default-fleet-server [value]` |  |  |  |
| `--is-managed [value]` |  |  |  |
| `--is-protected [value]` |  |  |  |
| `--is-verifier [value]` | Indicates this is a short-lived verifier policy used for OTel permission verification. |  |  |
| `--keep-monitoring-alive [value]` | When set to true, monitoring will be enabled but logs/metrics collection will be disabled |  |  |
| `--monitoring-diagnostics <json>` |  |  |  |
| `--monitoring-enabled <json>` |  |  |  |
| `--monitoring-http <json>` |  |  |  |
| `--monitoring-output-id <string>` |  |  |  |
| `--monitoring-pprof-enabled [value]` |  |  |  |
| `--name <string>` | (required) |  |  |
| `--namespace <string>` | (required) |  |  |
| `--overrides <json>` | Override settings that are defined in the agent policy. Input settings cannot be overridden. The override option should be used only in unusual circumstances and not as a routine procedure. |  |  |
| `--required-versions <json>` |  |  |  |
| `--space-ids <json>` |  |  |  |
| `--supports-agentless [value]` | Indicates whether the agent policy supports agentless integrations. Deprecated in favor of the Fleet agentless policies API. |  |  |
| `--unenroll-timeout <number>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies post-fleet-agent-policies-bulk-get`

Bulk get agent policies

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-post-fleet-agent-policies-bulk-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kb-format <string>` |  |  |  |
| `--full [value]` | get full policies with package policies populated |  |  |
| `--ids <json>` | list of package policy ids (required) |  |  |
| `--ignore-missing [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies get-fleet-agent-policies-agentpolicyid`

Get an agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-agent-policies-agentpolicyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | The agentPolicyId parameter (required) |  |  |
| `--kb-format <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies put-fleet-agent-policies-agentpolicyid`

Update an agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-put-fleet-agent-policies-agentpolicyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | The agentPolicyId parameter (required) |  |  |
| `--kb-format <string>` |  |  |  |
| `--advanced-settings <json>` |  |  |  |
| `--agent-features <json>` |  |  |  |
| `--agentless <json>` |  |  |  |
| `--bump-revision [value]` |  |  |  |
| `--data-output-id <string>` |  |  |  |
| `--description <string>` |  |  |  |
| `--download-source-id <string>` |  |  |  |
| `--fleet-server-host-id <string>` |  |  |  |
| `--force [value]` |  |  |  |
| `--global-data-tags <json>` | User defined data tags that are added to all of the inputs. The values can be strings or numbers. |  |  |
| `--has-agent-version-conditions [value]` |  |  |  |
| `--has-fleet-server [value]` |  |  |  |
| `--id <string>` |  |  |  |
| `--inactivity-timeout <number>` |  |  |  |
| `--is-default [value]` |  |  |  |
| `--is-default-fleet-server [value]` |  |  |  |
| `--is-managed [value]` |  |  |  |
| `--is-protected [value]` |  |  |  |
| `--is-verifier [value]` | Indicates this is a short-lived verifier policy used for OTel permission verification. |  |  |
| `--keep-monitoring-alive [value]` | When set to true, monitoring will be enabled but logs/metrics collection will be disabled |  |  |
| `--monitoring-diagnostics <json>` |  |  |  |
| `--monitoring-enabled <json>` |  |  |  |
| `--monitoring-http <json>` |  |  |  |
| `--monitoring-output-id <string>` |  |  |  |
| `--monitoring-pprof-enabled [value]` |  |  |  |
| `--name <string>` | (required) |  |  |
| `--namespace <string>` | (required) |  |  |
| `--overrides <json>` | Override settings that are defined in the agent policy. Input settings cannot be overridden. The override option should be used only in unusual circumstances and not as a routine procedure. |  |  |
| `--required-versions <json>` |  |  |  |
| `--space-ids <json>` |  |  |  |
| `--supports-agentless [value]` | Indicates whether the agent policy supports agentless integrations. Deprecated in favor of the Fleet agentless policies API. |  |  |
| `--unenroll-timeout <number>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies get-fleet-agent-policies-agentpolicyid-auto-upgrade-agents-status`

Get auto upgrade agent status

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-agent-policies-agentpolicyid-auto-upgrade-agents-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | The agentPolicyId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies post-fleet-agent-policies-agentpolicyid-copy`

Copy an agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-post-fleet-agent-policies-agentpolicyid-copy.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | The agentPolicyId parameter (required) |  |  |
| `--kb-format <string>` |  |  |  |
| `--description <string>` |  |  |  |
| `--name <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies get-fleet-agent-policies-agentpolicyid-download`

Download an agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-agent-policies-agentpolicyid-download.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | The agentPolicyId parameter (required) |  |  |
| `--download [value]` | If true, returns the policy as a downloadable file |  |  |
| `--standalone [value]` | If true, returns the policy formatted for standalone agents |  |  |
| `--kubernetes [value]` | If true, returns the policy formatted for Kubernetes deployment |  |  |
| `--revision <number>` | If provided, returns the policy at the specified revision. Cannot be used with standalone or kubernetes flags. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies get-fleet-agent-policies-agentpolicyid-full`

Get a full agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-agent-policies-agentpolicyid-full.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | The agentPolicyId parameter (required) |  |  |
| `--download [value]` | If true, returns the policy as a downloadable file |  |  |
| `--standalone [value]` | If true, returns the policy formatted for standalone agents |  |  |
| `--kubernetes [value]` | If true, returns the policy formatted for Kubernetes deployment |  |  |
| `--revision <number>` | If provided, returns the policy at the specified revision. Cannot be used with standalone or kubernetes flags. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies get-fleet-agent-policies-agentpolicyid-outputs`

Get outputs for an agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-agent-policies-agentpolicyid-outputs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | The agentPolicyId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies post-fleet-agent-policies-delete`

Delete an agent policy

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-post-fleet-agent-policies-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-policy-id <string>` | (required) |  |  |
| `--force [value]` | bypass validation checks that can prevent agent policy deletion |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies post-fleet-agent-policies-outputs`

Get outputs for agent policies

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-post-fleet-agent-policies-outputs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ids <json>` | list of package policy ids (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies get-fleet-kubernetes`

Get a full K8s agent manifest

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-kubernetes.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--download [value]` |  |  |  |
| `--fleet-server <string>` |  |  |  |
| `--enrol-token <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agent-policies get-fleet-kubernetes-download`

Download an agent manifest

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-policies-get-fleet-kubernetes-download.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--download [value]` |  |  |  |
| `--fleet-server <string>` |  |  |  |
| `--enrol-token <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb elastic-agent-status`

Kibana elastic-agent-status API commands

| Command | Description |
|---------|-------------|
| `get-fleet-agent-status` | Get an agent status summary |

### `elastic stack kb elastic-agent-status get-fleet-agent-status`

Get an agent status summary

[JSON Schema](./schemas/elastic-stack-kb-elastic-agent-status-get-fleet-agent-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--policy-id <string>` |  |  |  |
| `--policy-ids <string>` |  |  |  |
| `--kuery <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb elastic-agents`

Kibana elastic-agents API commands

| Command | Description |
|---------|-------------|
| `get-fleet-agent-status-data` | Get incoming agent data |
| `get-fleet-agents` | Get agents |
| `post-fleet-agents` | Get agents by action ids |
| `delete-fleet-agents-agentid` | Delete an agent |
| `get-fleet-agents-agentid` | Get an agent |
| `put-fleet-agents-agentid` | Update an agent by ID |
| `post-fleet-agents-agentid-migrate` | Migrate a single agent |
| `post-fleet-agents-agentid-privilege-level-change` | Change agent privilege level |
| `get-fleet-agents-agentid-uploads` | Get agent uploads |
| `get-fleet-agents-available-versions` | Get available agent versions |
| `post-fleet-agents-bulk-migrate` | Migrate multiple agents |
| `post-fleet-agents-bulk-privilege-level-change` | Bulk change agent privilege level |
| `delete-fleet-agents-files-fileid` | Delete an uploaded file |
| `get-fleet-agents-files-fileid-filename` | Get an uploaded file |
| `get-fleet-agents-setup` | Get agent setup info |
| `post-fleet-agents-setup` | Initiate agent setup |
| `get-fleet-agents-tags` | Get agent tags |

### `elastic stack kb elastic-agents get-fleet-agent-status-data`

Get incoming agent data

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-get-fleet-agent-status-data.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents-ids <string>` | (required) |  |  |
| `--pkg-name <string>` |  |  |  |
| `--pkg-version <string>` |  |  |  |
| `--preview-data [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents get-fleet-agents`

Get agents

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-get-fleet-agents.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--per-page <number>` |  |  |  |
| `--kuery <string>` |  |  |  |
| `--show-agentless [value]` |  |  |  |
| `--show-inactive [value]` |  |  |  |
| `--with-metrics [value]` |  |  |  |
| `--show-upgradeable [value]` |  |  |  |
| `--get-status-summary [value]` |  |  |  |
| `--sort-field <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--search-after <string>` |  |  |  |
| `--open-pit [value]` |  |  |  |
| `--pit-id <string>` |  |  |  |
| `--pit-keep-alive <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents post-fleet-agents`

Get agents by action ids

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-post-fleet-agents.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--action-ids <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents delete-fleet-agents-agentid`

Delete an agent

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-delete-fleet-agents-agentid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents get-fleet-agents-agentid`

Get an agent

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-get-fleet-agents-agentid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--with-metrics [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents put-fleet-agents-agentid`

Update an agent by ID

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-put-fleet-agents-agentid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--tags <json>` |  |  |  |
| `--user-provided-metadata <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents post-fleet-agents-agentid-migrate`

Migrate a single agent

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-post-fleet-agents-agentid-migrate.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--enrollment-token <string>` | (required) |  |  |
| `--settings <json>` |  |  |  |
| `--uri <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents post-fleet-agents-agentid-privilege-level-change`

Change agent privilege level

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-post-fleet-agents-agentid-privilege-level-change.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agent ID to change privilege level for (required) |  |  |
| `--user-info <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents get-fleet-agents-agentid-uploads`

Get agent uploads

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-get-fleet-agents-agentid-uploads.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-id <string>` | The agentId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents get-fleet-agents-available-versions`

Get available agent versions

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents post-fleet-agents-bulk-migrate`

Migrate multiple agents

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-post-fleet-agents-bulk-migrate.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--enrollment-token <string>` | (required) |  |  |
| `--settings <json>` |  |  |  |
| `--uri <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents post-fleet-agents-bulk-privilege-level-change`

Bulk change agent privilege level

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-post-fleet-agents-bulk-privilege-level-change.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agents <string>` | (required) |  |  |
| `--batch-size <number>` |  |  |  |
| `--user-info <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents delete-fleet-agents-files-fileid`

Delete an uploaded file

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-delete-fleet-agents-files-fileid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--file-id <string>` | The fileId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents get-fleet-agents-files-fileid-filename`

Get an uploaded file

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-get-fleet-agents-files-fileid-filename.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--file-id <string>` | The fileId parameter (required) |  |  |
| `--file-name <string>` | The fileName parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents get-fleet-agents-setup`

Get agent setup info

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents post-fleet-agents-setup`

Initiate agent setup

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-agents get-fleet-agents-tags`

Get agent tags

[JSON Schema](./schemas/elastic-stack-kb-elastic-agents-get-fleet-agents-tags.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kuery <string>` |  |  |  |
| `--show-inactive [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb elastic-package-manager-epm`

Kibana elastic-package-manager-epm API commands

| Command | Description |
|---------|-------------|
| `post-fleet-epm-bulk-assets` | Bulk get assets |
| `get-fleet-epm-categories` | Get package categories |
| `post-fleet-epm-custom-integrations` | Create a custom integration |
| `put-fleet-epm-custom-integrations-pkgname` | Update a custom integration |
| `get-fleet-epm-packages` | Get packages |
| `post-fleet-epm-packages` | Install a package by upload |
| `post-fleet-epm-packages-bulk` | Bulk install packages |
| `post-fleet-epm-packages-bulk-rollback` | Bulk rollback packages |
| `get-fleet-epm-packages-bulk-rollback-taskid` | Get Bulk rollback packages details |
| `post-fleet-epm-packages-bulk-uninstall` | Bulk uninstall packages |
| `get-fleet-epm-packages-bulk-uninstall-taskid` | Get Bulk uninstall packages details |
| `post-fleet-epm-packages-bulk-upgrade` | Bulk upgrade packages |
| `get-fleet-epm-packages-bulk-upgrade-taskid` | Get Bulk upgrade packages details |
| `delete-fleet-epm-packages-pkgname` | Delete a package |
| `get-fleet-epm-packages-pkgname` | Get a package |
| `post-fleet-epm-packages-pkgname` | Install a package from the registry |
| `put-fleet-epm-packages-pkgname` | Update package settings |
| `delete-fleet-epm-packages-pkgname-pkgversion` | Delete a package |
| `get-fleet-epm-packages-pkgname-pkgversion` | Get a package |
| `post-fleet-epm-packages-pkgname-pkgversion` | Install a package from the registry |
| `put-fleet-epm-packages-pkgname-pkgversion` | Update package settings |
| `get-fleet-epm-packages-pkgname-pkgversion-filepath` | Get a package file |
| `delete-fleet-epm-packages-pkgname-pkgversion-datastream-assets` | Delete assets for an input package |
| `delete-fleet-epm-packages-pkgname-pkgversion-kibana-assets` | Delete Kibana assets for a package |
| `post-fleet-epm-packages-pkgname-pkgversion-kibana-assets` | Install Kibana assets for a package |
| `post-fleet-epm-packages-pkgname-pkgversion-rule-assets` | Install Kibana alert rule for a package |
| `post-fleet-epm-packages-pkgname-pkgversion-transforms-authorize` | Authorize transforms |
| `post-fleet-epm-packages-pkgname-review-upgrade` | Review a pending policy upgrade for a package with deprecations |
| `post-fleet-epm-packages-pkgname-rollback` | Rollback a package to previous version |
| `get-fleet-epm-packages-pkgname-stats` | Get package stats |
| `get-fleet-epm-packages-installed` | Get installed packages |
| `get-fleet-epm-packages-limited` | Get a limited package list |
| `get-fleet-epm-templates-pkgname-pkgversion-inputs` | Get an inputs template |
| `get-fleet-epm-verification-key-id` | Get a package signature verification key ID |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-bulk-assets`

Bulk get assets

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-bulk-assets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--asset-ids <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-categories`

Get package categories

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-categories.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--prerelease [value]` |  |  |  |
| `--include-policy-templates [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-custom-integrations`

Create a custom integration

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-custom-integrations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--datasets <json>` | (required) |  |  |
| `--force [value]` |  |  |  |
| `--integration-name <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm put-fleet-epm-custom-integrations-pkgname`

Update a custom integration

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-put-fleet-epm-custom-integrations-pkgname.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--categories <json>` |  |  |  |
| `--read-me-data <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages`

Get packages

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--category <string>` |  |  |  |
| `--prerelease [value]` |  |  |  |
| `--exclude-install-status [value]` |  |  |  |
| `--with-package-policies-count [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages`

Install a package by upload

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ignore-mapping-update-errors [value]` |  |  |  |
| `--skip-data-stream-rollover [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-bulk`

Bulk install packages

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-bulk.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--prerelease [value]` |  |  |  |
| `--force [value]` |  |  |  |
| `--packages <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-bulk-rollback`

Bulk rollback packages

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-bulk-rollback.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--packages <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-bulk-rollback-taskid`

Get Bulk rollback packages details

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-bulk-rollback-taskid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-id <string>` | Task ID of the bulk operation (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-bulk-uninstall`

Bulk uninstall packages

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-bulk-uninstall.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--force [value]` |  |  |  |
| `--packages <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-bulk-uninstall-taskid`

Get Bulk uninstall packages details

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-bulk-uninstall-taskid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-id <string>` | Task ID of the bulk operation (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-bulk-upgrade`

Bulk upgrade packages

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-bulk-upgrade.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--force [value]` |  |  |  |
| `--packages <json>` | (required) |  |  |
| `--prerelease [value]` |  |  |  |
| `--upgrade-package-policies [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-bulk-upgrade-taskid`

Get Bulk upgrade packages details

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-bulk-upgrade-taskid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-id <string>` | Task ID of the bulk operation (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm delete-fleet-epm-packages-pkgname`

Delete a package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-delete-fleet-epm-packages-pkgname.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-pkgname`

Get a package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-pkgname.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--ignore-unverified [value]` |  |  |  |
| `--prerelease [value]` |  |  |  |
| `--full [value]` |  |  |  |
| `--with-metadata [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-pkgname`

Install a package from the registry

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-pkgname.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--prerelease [value]` |  |  |  |
| `--ignore-mapping-update-errors [value]` |  |  |  |
| `--skip-data-stream-rollover [value]` |  |  |  |
| `--skip-dependency-check [value]` | Skip dependency validation when installing a package with dependencies |  |  |
| `--force [value]` |  |  |  |
| `--ignore-constraints [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm put-fleet-epm-packages-pkgname`

Update package settings

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-put-fleet-epm-packages-pkgname.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--keep-policies-up-to-date [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm delete-fleet-epm-packages-pkgname-pkgversion`

Delete a package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-delete-fleet-epm-packages-pkgname-pkgversion.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-pkgname-pkgversion`

Get a package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-pkgname-pkgversion.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--ignore-unverified [value]` |  |  |  |
| `--prerelease [value]` |  |  |  |
| `--full [value]` |  |  |  |
| `--with-metadata [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-pkgname-pkgversion`

Install a package from the registry

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-pkgname-pkgversion.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--prerelease [value]` |  |  |  |
| `--ignore-mapping-update-errors [value]` |  |  |  |
| `--skip-data-stream-rollover [value]` |  |  |  |
| `--skip-dependency-check [value]` | Skip dependency validation when installing a package with dependencies |  |  |
| `--force [value]` |  |  |  |
| `--ignore-constraints [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm put-fleet-epm-packages-pkgname-pkgversion`

Update package settings

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-put-fleet-epm-packages-pkgname-pkgversion.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--keep-policies-up-to-date [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-pkgname-pkgversion-filepath`

Get a package file

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-pkgname-pkgversion-filepath.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--file-path <string>` | The filePath parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm delete-fleet-epm-packages-pkgname-pkgversion-datastream-assets`

Delete assets for an input package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-delete-fleet-epm-packages-pkgname-pkgversion-datastream-assets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--package-policy-id <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm delete-fleet-epm-packages-pkgname-pkgversion-kibana-assets`

Delete Kibana assets for a package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-delete-fleet-epm-packages-pkgname-pkgversion-kibana-assets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-pkgname-pkgversion-kibana-assets`

Install Kibana assets for a package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-pkgname-pkgversion-kibana-assets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--space-ids <json>` | When provided install assets in the specified spaces instead of the current space. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-pkgname-pkgversion-rule-assets`

Install Kibana alert rule for a package

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-pkgname-pkgversion-rule-assets.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-pkgname-pkgversion-transforms-authorize`

Authorize transforms

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-pkgname-pkgversion-transforms-authorize.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--prerelease [value]` |  |  |  |
| `--transforms <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-pkgname-review-upgrade`

Review a pending policy upgrade for a package with deprecations

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-pkgname-review-upgrade.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | Package name to review upgrade for (required) |  |  |
| `--action <string>` | (required) |  |  |
| `--target-version <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm post-fleet-epm-packages-pkgname-rollback`

Rollback a package to previous version

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-post-fleet-epm-packages-pkgname-rollback.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | Package name to roll back (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-pkgname-stats`

Get package stats

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-pkgname-stats.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-installed`

Get installed packages

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-packages-installed.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--data-stream-type <string>` |  |  |  |
| `--show-only-active-data-streams [value]` |  |  |  |
| `--name-query <string>` |  |  |  |
| `--search-after <string>` |  |  |  |
| `--per-page <number>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-packages-limited`

Get a limited package list

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-templates-pkgname-pkgversion-inputs`

Get an inputs template

[JSON Schema](./schemas/elastic-stack-kb-elastic-package-manager-epm-get-fleet-epm-templates-pkgname-pkgversion-inputs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--pkg-name <string>` | The pkgName parameter (required) |  |  |
| `--pkg-version <string>` | The pkgVersion parameter (required) |  |  |
| `--kb-format <string>` |  |  |  |
| `--prerelease [value]` |  |  |  |
| `--ignore-unverified [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb elastic-package-manager-epm get-fleet-epm-verification-key-id`

Get a package signature verification key ID

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-agentless-policies`

Kibana fleet-agentless-policies API commands

| Command | Description |
|---------|-------------|
| `post-fleet-agentless-policies` | Create an agentless policy |
| `delete-fleet-agentless-policies-policyid` | Delete an agentless policy |

### `elastic stack kb fleet-agentless-policies post-fleet-agentless-policies`

Create an agentless policy

[JSON Schema](./schemas/elastic-stack-kb-fleet-agentless-policies-post-fleet-agentless-policies.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kb-format <string>` | The format of the response package policy. |  |  |
| `--additional-datastreams-permissions <json>` | Additional datastream permissions, that will be added to the agent policy. |  |  |
| `--cloud-connector <json>` |  |  |  |
| `--description <string>` | Policy description. |  |  |
| `--force [value]` | Force package policy creation even if the package is not verified, or if the agent policy is managed. |  |  |
| `--id <string>` | Policy unique identifier. |  |  |
| `--inputs <json>` | Package policy inputs. Refer to the integration documentation to know which inputs are available. |  |  |
| `--name <string>` | Unique name for the policy. (required) |  |  |
| `--namespace <string>` | Policy namespace. When not specified, it inherits the agent policy namespace. |  |  |
| `--package <json>` | (required) |  |  |
| `--policy-template <string>` | The policy template to use for the agentless package policy. If not provided, the default policy template will be used. |  |  |
| `--var-group-selections <json>` | Variable group selections. Maps var_group name to the selected option name within that group. |  |  |
| `--vars <json>` | Input/stream level variable. Refer to the integration documentation for more information. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-agentless-policies delete-fleet-agentless-policies-policyid`

Delete an agentless policy

[JSON Schema](./schemas/elastic-stack-kb-fleet-agentless-policies-delete-fleet-agentless-policies-policyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--policy-id <string>` | The ID of the policy to delete. (required) |  |  |
| `--force [value]` | Force delete the policy even if the policy is managed. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-cloud-connectors`

Kibana fleet-cloud-connectors API commands

| Command | Description |
|---------|-------------|
| `get-fleet-cloud-connectors` | Get cloud connectors |
| `post-fleet-cloud-connectors` | Create cloud connector |
| `delete-fleet-cloud-connectors-cloudconnectorid` | Delete cloud connector (supports force deletion) |
| `get-fleet-cloud-connectors-cloudconnectorid` | Get cloud connector |
| `put-fleet-cloud-connectors-cloudconnectorid` | Update cloud connector |
| `get-fleet-cloud-connectors-cloudconnectorid-usage` | Get cloud connector usage (package policies using the connector) |

### `elastic stack kb fleet-cloud-connectors get-fleet-cloud-connectors`

Get cloud connectors

[JSON Schema](./schemas/elastic-stack-kb-fleet-cloud-connectors-get-fleet-cloud-connectors.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <string>` | The page number for pagination. |  |  |
| `--per-page <string>` | The number of items per page. |  |  |
| `--kuery <string>` | KQL query to filter cloud connectors. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-cloud-connectors post-fleet-cloud-connectors`

Create cloud connector

[JSON Schema](./schemas/elastic-stack-kb-fleet-cloud-connectors-post-fleet-cloud-connectors.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--account-type <string>` | The account type: single-account (single account/subscription) or organization-account (organization-wide). |  |  |
| `--cloud-provider <string>` | The cloud provider type: aws, azure, or gcp. (required) |  |  |
| `--name <string>` | The name of the cloud connector. (required) |  |  |
| `--vars <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-cloud-connectors delete-fleet-cloud-connectors-cloudconnectorid`

Delete cloud connector (supports force deletion)

[JSON Schema](./schemas/elastic-stack-kb-fleet-cloud-connectors-delete-fleet-cloud-connectors-cloudconnectorid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--cloud-connector-id <string>` | The unique identifier of the cloud connector to delete. (required) |  |  |
| `--force [value]` | If true, forces deletion even if the cloud connector is in use. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-cloud-connectors get-fleet-cloud-connectors-cloudconnectorid`

Get cloud connector

[JSON Schema](./schemas/elastic-stack-kb-fleet-cloud-connectors-get-fleet-cloud-connectors-cloudconnectorid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--cloud-connector-id <string>` | The unique identifier of the cloud connector. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-cloud-connectors put-fleet-cloud-connectors-cloudconnectorid`

Update cloud connector

[JSON Schema](./schemas/elastic-stack-kb-fleet-cloud-connectors-put-fleet-cloud-connectors-cloudconnectorid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--cloud-connector-id <string>` | The unique identifier of the cloud connector to update. (required) |  |  |
| `--account-type <string>` | The account type: single-account (single account/subscription) or organization-account (organization-wide). |  |  |
| `--name <string>` | The name of the cloud connector. |  |  |
| `--vars <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-cloud-connectors get-fleet-cloud-connectors-cloudconnectorid-usage`

Get cloud connector usage (package policies using the connector)

[JSON Schema](./schemas/elastic-stack-kb-fleet-cloud-connectors-get-fleet-cloud-connectors-cloudconnectorid-usage.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--cloud-connector-id <string>` | The unique identifier of the cloud connector. (required) |  |  |
| `--page <number>` | The page number for pagination. |  |  |
| `--per-page <number>` | The number of items per page. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-enrollment-api-keys`

Kibana fleet-enrollment-api-keys API commands

| Command | Description |
|---------|-------------|
| `get-fleet-enrollment-api-keys` | Get enrollment API keys |
| `post-fleet-enrollment-api-keys` | Create an enrollment API key |
| `delete-fleet-enrollment-api-keys-keyid` | Revoke an enrollment API key |
| `get-fleet-enrollment-api-keys-keyid` | Get an enrollment API key |

### `elastic stack kb fleet-enrollment-api-keys get-fleet-enrollment-api-keys`

Get enrollment API keys

[JSON Schema](./schemas/elastic-stack-kb-fleet-enrollment-api-keys-get-fleet-enrollment-api-keys.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--per-page <number>` |  |  |  |
| `--kuery <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-enrollment-api-keys post-fleet-enrollment-api-keys`

Create an enrollment API key

[JSON Schema](./schemas/elastic-stack-kb-fleet-enrollment-api-keys-post-fleet-enrollment-api-keys.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--expiration <string>` |  |  |  |
| `--name <string>` |  |  |  |
| `--policy-id <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-enrollment-api-keys delete-fleet-enrollment-api-keys-keyid`

Revoke an enrollment API key

[JSON Schema](./schemas/elastic-stack-kb-fleet-enrollment-api-keys-delete-fleet-enrollment-api-keys-keyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--key-id <string>` | The keyId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-enrollment-api-keys get-fleet-enrollment-api-keys-keyid`

Get an enrollment API key

[JSON Schema](./schemas/elastic-stack-kb-fleet-enrollment-api-keys-get-fleet-enrollment-api-keys-keyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--key-id <string>` | The keyId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-internals`

Kibana fleet-internals API commands

| Command | Description |
|---------|-------------|
| `get-fleet-check-permissions` | Check permissions |
| `post-fleet-health-check` | Check Fleet Server health |
| `get-fleet-settings` | Get settings |
| `put-fleet-settings` | Update settings |
| `post-fleet-setup` | Initiate Fleet setup |

### `elastic stack kb fleet-internals get-fleet-check-permissions`

Check permissions

[JSON Schema](./schemas/elastic-stack-kb-fleet-internals-get-fleet-check-permissions.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fleet-server-setup [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-internals post-fleet-health-check`

Check Fleet Server health

[JSON Schema](./schemas/elastic-stack-kb-fleet-internals-post-fleet-health-check.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-internals get-fleet-settings`

Get settings

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-internals put-fleet-settings`

Update settings

[JSON Schema](./schemas/elastic-stack-kb-fleet-internals-put-fleet-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--additional-yaml-config <string>` |  |  |  |
| `--delete-unenrolled-agents <json>` |  |  |  |
| `--has-seen-add-data-notice [value]` |  |  |  |
| `--integration-knowledge-enabled [value]` |  |  |  |
| `--kibana-ca-sha256 <string>` |  |  |  |
| `--kibana-urls <json>` |  |  |  |
| `--prerelease-integrations-enabled [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-internals post-fleet-setup`

Initiate Fleet setup

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-outputs`

Kibana fleet-outputs API commands

| Command | Description |
|---------|-------------|
| `post-fleet-logstash-api-keys` | Generate a Logstash API key |
| `get-fleet-outputs` | Get outputs |
| `post-fleet-outputs` | Create output |
| `delete-fleet-outputs-outputid` | Delete output |
| `get-fleet-outputs-outputid` | Get output |
| `put-fleet-outputs-outputid` | Update output |
| `get-fleet-outputs-outputid-health` | Get the latest output health |

### `elastic stack kb fleet-outputs post-fleet-logstash-api-keys`

Generate a Logstash API key

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-outputs get-fleet-outputs`

Get outputs

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-outputs post-fleet-outputs`

Create output

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-outputs delete-fleet-outputs-outputid`

Delete output

[JSON Schema](./schemas/elastic-stack-kb-fleet-outputs-delete-fleet-outputs-outputid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--output-id <string>` | The outputId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-outputs get-fleet-outputs-outputid`

Get output

[JSON Schema](./schemas/elastic-stack-kb-fleet-outputs-get-fleet-outputs-outputid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--output-id <string>` | The outputId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-outputs put-fleet-outputs-outputid`

Update output

[JSON Schema](./schemas/elastic-stack-kb-fleet-outputs-put-fleet-outputs-outputid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--output-id <string>` | The outputId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-outputs get-fleet-outputs-outputid-health`

Get the latest output health

[JSON Schema](./schemas/elastic-stack-kb-fleet-outputs-get-fleet-outputs-outputid-health.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--output-id <string>` | The outputId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-package-policies`

Kibana fleet-package-policies API commands

| Command | Description |
|---------|-------------|
| `get-fleet-package-policies` | Get package policies |
| `post-fleet-package-policies` | Create a package policy |
| `post-fleet-package-policies-bulk-get` | Bulk get package policies |
| `delete-fleet-package-policies-packagepolicyid` | Delete a package policy |
| `get-fleet-package-policies-packagepolicyid` | Get a package policy |
| `put-fleet-package-policies-packagepolicyid` | Update a package policy |
| `post-fleet-package-policies-delete` | Bulk delete package policies |
| `post-fleet-package-policies-upgrade` | Upgrade a package policy |
| `post-fleet-package-policies-upgrade-dryrun` | Dry run a package policy upgrade |

### `elastic stack kb fleet-package-policies get-fleet-package-policies`

Get package policies

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-get-fleet-package-policies.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--per-page <number>` |  |  |  |
| `--sort-field <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--show-upgradeable [value]` |  |  |  |
| `--kuery <string>` |  |  |  |
| `--kb-format <string>` |  |  |  |
| `--with-agent-count [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies post-fleet-package-policies`

Create a package policy

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-post-fleet-package-policies.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kb-format <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies post-fleet-package-policies-bulk-get`

Bulk get package policies

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-post-fleet-package-policies-bulk-get.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kb-format <string>` |  |  |  |
| `--ids <json>` | list of package policy ids (required) |  |  |
| `--ignore-missing [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies delete-fleet-package-policies-packagepolicyid`

Delete a package policy

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-delete-fleet-package-policies-packagepolicyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--package-policy-id <string>` | The packagePolicyId parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies get-fleet-package-policies-packagepolicyid`

Get a package policy

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-get-fleet-package-policies-packagepolicyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--package-policy-id <string>` | The packagePolicyId parameter (required) |  |  |
| `--kb-format <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies put-fleet-package-policies-packagepolicyid`

Update a package policy

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-put-fleet-package-policies-packagepolicyid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--package-policy-id <string>` | The packagePolicyId parameter (required) |  |  |
| `--kb-format <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies post-fleet-package-policies-delete`

Bulk delete package policies

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-post-fleet-package-policies-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--force [value]` |  |  |  |
| `--package-policy-ids <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies post-fleet-package-policies-upgrade`

Upgrade a package policy

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-post-fleet-package-policies-upgrade.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--package-policy-ids <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-package-policies post-fleet-package-policies-upgrade-dryrun`

Dry run a package policy upgrade

[JSON Schema](./schemas/elastic-stack-kb-fleet-package-policies-post-fleet-package-policies-upgrade-dryrun.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--package-policy-ids <json>` | (required) |  |  |
| `--package-version <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-proxies`

Kibana fleet-proxies API commands

| Command | Description |
|---------|-------------|
| `get-fleet-proxies` | Get proxies |
| `post-fleet-proxies` | Create a proxy |
| `delete-fleet-proxies-itemid` | Delete a proxy |
| `get-fleet-proxies-itemid` | Get a proxy |
| `put-fleet-proxies-itemid` | Update a proxy |

### `elastic stack kb fleet-proxies get-fleet-proxies`

Get proxies

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-proxies post-fleet-proxies`

Create a proxy

[JSON Schema](./schemas/elastic-stack-kb-fleet-proxies-post-fleet-proxies.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--certificate <string>` |  |  |  |
| `--certificate-authorities <string>` |  |  |  |
| `--certificate-key <string>` |  |  |  |
| `--id <string>` |  |  |  |
| `--is-preconfigured [value]` |  |  |  |
| `--name <string>` | (required) |  |  |
| `--proxy-headers <json>` |  |  |  |
| `--url <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-proxies delete-fleet-proxies-itemid`

Delete a proxy

[JSON Schema](./schemas/elastic-stack-kb-fleet-proxies-delete-fleet-proxies-itemid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--item-id <string>` | The itemId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-proxies get-fleet-proxies-itemid`

Get a proxy

[JSON Schema](./schemas/elastic-stack-kb-fleet-proxies-get-fleet-proxies-itemid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--item-id <string>` | The itemId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-proxies put-fleet-proxies-itemid`

Update a proxy

[JSON Schema](./schemas/elastic-stack-kb-fleet-proxies-put-fleet-proxies-itemid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--item-id <string>` | The itemId parameter (required) |  |  |
| `--certificate <string>` | (required) |  |  |
| `--certificate-authorities <string>` | (required) |  |  |
| `--certificate-key <string>` | (required) |  |  |
| `--name <string>` |  |  |  |
| `--proxy-headers <json>` |  |  |  |
| `--url <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-server-hosts`

Kibana fleet-server-hosts API commands

| Command | Description |
|---------|-------------|
| `get-fleet-fleet-server-hosts` | Get Fleet Server hosts |
| `post-fleet-fleet-server-hosts` | Create a Fleet Server host |
| `delete-fleet-fleet-server-hosts-itemid` | Delete a Fleet Server host |
| `get-fleet-fleet-server-hosts-itemid` | Get a Fleet Server host |
| `put-fleet-fleet-server-hosts-itemid` | Update a Fleet Server host |

### `elastic stack kb fleet-server-hosts get-fleet-fleet-server-hosts`

Get Fleet Server hosts

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-server-hosts post-fleet-fleet-server-hosts`

Create a Fleet Server host

[JSON Schema](./schemas/elastic-stack-kb-fleet-server-hosts-post-fleet-fleet-server-hosts.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--host-urls <json>` | (required) |  |  |
| `--id <string>` |  |  |  |
| `--is-default [value]` |  |  |  |
| `--is-internal [value]` |  |  |  |
| `--is-preconfigured [value]` |  |  |  |
| `--name <string>` | (required) |  |  |
| `--proxy-id <string>` |  |  |  |
| `--secrets <json>` |  |  |  |
| `--ssl <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-server-hosts delete-fleet-fleet-server-hosts-itemid`

Delete a Fleet Server host

[JSON Schema](./schemas/elastic-stack-kb-fleet-server-hosts-delete-fleet-fleet-server-hosts-itemid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--item-id <string>` | The itemId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-server-hosts get-fleet-fleet-server-hosts-itemid`

Get a Fleet Server host

[JSON Schema](./schemas/elastic-stack-kb-fleet-server-hosts-get-fleet-fleet-server-hosts-itemid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--item-id <string>` | The itemId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-server-hosts put-fleet-fleet-server-hosts-itemid`

Update a Fleet Server host

[JSON Schema](./schemas/elastic-stack-kb-fleet-server-hosts-put-fleet-fleet-server-hosts-itemid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--item-id <string>` | The itemId parameter (required) |  |  |
| `--host-urls <json>` |  |  |  |
| `--is-default [value]` |  |  |  |
| `--is-internal [value]` |  |  |  |
| `--name <string>` |  |  |  |
| `--proxy-id <string>` | (required) |  |  |
| `--secrets <json>` |  |  |  |
| `--ssl <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb fleet-uninstall-tokens`

Kibana fleet-uninstall-tokens API commands

| Command | Description |
|---------|-------------|
| `get-fleet-uninstall-tokens` | Get metadata for latest uninstall tokens |
| `get-fleet-uninstall-tokens-uninstalltokenid` | Get a decrypted uninstall token |

### `elastic stack kb fleet-uninstall-tokens get-fleet-uninstall-tokens`

Get metadata for latest uninstall tokens

[JSON Schema](./schemas/elastic-stack-kb-fleet-uninstall-tokens-get-fleet-uninstall-tokens.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--policy-id <string>` | Partial match filtering for policy IDs |  |  |
| `--search <string>` |  |  |  |
| `--per-page <number>` | The number of items to return |  |  |
| `--page <number>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb fleet-uninstall-tokens get-fleet-uninstall-tokens-uninstalltokenid`

Get a decrypted uninstall token

[JSON Schema](./schemas/elastic-stack-kb-fleet-uninstall-tokens-get-fleet-uninstall-tokens-uninstalltokenid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--uninstall-token-id <string>` | The uninstallTokenId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb maintenance-window`

Kibana maintenance-window API commands

| Command | Description |
|---------|-------------|
| `post-maintenance-window` | Create a maintenance window. |
| `get-maintenance-window-find` | Search for a maintenance window. |
| `delete-maintenance-window-id` | Delete a maintenance window. |
| `get-maintenance-window-id` | Get maintenance window details. |
| `patch-maintenance-window-id` | Update a maintenance window. |
| `post-maintenance-window-id-archive` | Archive a maintenance window. |
| `post-maintenance-window-id-unarchive` | Unarchive a maintenance window. |

### `elastic stack kb maintenance-window post-maintenance-window`

Create a maintenance window.

[JSON Schema](./schemas/elastic-stack-kb-maintenance-window-post-maintenance-window.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--enabled [value]` | Whether the current maintenance window is enabled. Disabled maintenance windows do not suppress notifications. |  |  |
| `--schedule <json>` | (required) |  |  |
| `--scope <json>` |  |  |  |
| `--title <string>` | The name of the maintenance window. While this name does not have to be unique, a distinctive name can help you identify a specific maintenance window. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb maintenance-window get-maintenance-window-find`

Search for a maintenance window.

[JSON Schema](./schemas/elastic-stack-kb-maintenance-window-get-maintenance-window-find.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--title <string>` | The title of the maintenance window. |  |  |
| `--created-by <string>` | The user who created the maintenance window. |  |  |
| `--status <string>` | The status of the maintenance window. It can be "running", "upcoming", "finished", "archived", or "disabled". |  |  |
| `--page <number>` | The page number to return. |  |  |
| `--per-page <number>` | The number of maintenance windows to return per page. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb maintenance-window delete-maintenance-window-id`

Delete a maintenance window.

[JSON Schema](./schemas/elastic-stack-kb-maintenance-window-delete-maintenance-window-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the maintenance window to be deleted. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb maintenance-window get-maintenance-window-id`

Get maintenance window details.

[JSON Schema](./schemas/elastic-stack-kb-maintenance-window-get-maintenance-window-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the maintenance window. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb maintenance-window patch-maintenance-window-id`

Update a maintenance window.

[JSON Schema](./schemas/elastic-stack-kb-maintenance-window-patch-maintenance-window-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--enabled [value]` | Whether the current maintenance window is enabled. Disabled maintenance windows do not suppress notifications. |  |  |
| `--schedule <json>` |  |  |  |
| `--scope <json>` |  |  |  |
| `--title <string>` | The name of the maintenance window. While this name does not have to be unique, a distinctive name can help you identify a specific maintenance window. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb maintenance-window post-maintenance-window-id-archive`

Archive a maintenance window.

[JSON Schema](./schemas/elastic-stack-kb-maintenance-window-post-maintenance-window-id-archive.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the maintenance window to be archived. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb maintenance-window post-maintenance-window-id-unarchive`

Unarchive a maintenance window.

[JSON Schema](./schemas/elastic-stack-kb-maintenance-window-post-maintenance-window-id-unarchive.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The identifier for the maintenance window to be unarchived. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb message-signing-service`

Kibana message-signing-service API commands

| Command | Description |
|---------|-------------|
| `post-fleet-message-signing-service-rotate-key-pair` | Rotate a Fleet message signing key pair |

### `elastic stack kb message-signing-service post-fleet-message-signing-service-rotate-key-pair`

Rotate a Fleet message signing key pair

[JSON Schema](./schemas/elastic-stack-kb-message-signing-service-post-fleet-message-signing-service-rotate-key-pair.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--acknowledge [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb misc`

Kibana misc API commands

| Command | Description |
|---------|-------------|
| `get-actions-connector-oauth-callback-script` |  |
| `get-fleet-space-settings` | Get space settings |
| `put-fleet-space-settings` | Create space settings |
| `post-security-role-query` | Query roles |

### `elastic stack kb misc get-actions-connector-oauth-callback-script`

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb misc get-fleet-space-settings`

Get space settings

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb misc put-fleet-space-settings`

Create space settings

[JSON Schema](./schemas/elastic-stack-kb-misc-put-fleet-space-settings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--allowed-namespace-prefixes <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb misc post-security-role-query`

Query roles

[JSON Schema](./schemas/elastic-stack-kb-misc-post-security-role-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--filters <json>` |  |  |  |
| `--from <number>` |  |  |  |
| `--query <string>` |  |  |  |
| `--size <number>` |  |  |  |
| `--sort <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb ml`

Kibana ml API commands

| Command | Description |
|---------|-------------|
| `ml-sync` | Sync saved objects in the default space |
| `ml-update-jobs-spaces` | Update jobs spaces |
| `ml-update-trained-models-spaces` | Update trained models spaces |

### `elastic stack kb ml ml-sync`

Sync saved objects in the default space

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb ml ml-update-jobs-spaces`

Update jobs spaces

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb ml ml-update-trained-models-spaces`

Update trained models spaces

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb observabilityaiassistant`

Kibana observabilityaiassistant API commands

| Command | Description |
|---------|-------------|
| `observability-ai-assistant-chat-complete` | Generate a chat completion |

### `elastic stack kb observabilityaiassistant observability-ai-assistant-chat-complete`

Generate a chat completion

[JSON Schema](./schemas/elastic-stack-kb-observabilityaiassistant-observability-ai-assistant-chat-complete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--actions <json>` |  |  |  |
| `--connector-id <string>` | A unique identifier for the connector. (required) |  |  |
| `--conversation-id <string>` | A unique identifier for the conversation if you are continuing an existing conversation. |  |  |
| `--disable-functions [value]` | Flag indicating whether all function calls should be disabled for the conversation. If true, no calls to functions will be made. |  |  |
| `--instructions <json>` | An array of instruction objects, which can be either simple strings or detailed objects. |  |  |
| `--messages <json>` | An array of message objects containing the conversation history. (required) |  |  |
| `--persist [value]` | Indicates whether the conversation should be saved to storage. If true, the conversation will be saved and will be available in Kibana. |  |  |
| `--title <string>` | A title for the conversation. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb roles`

Kibana roles API commands

| Command | Description |
|---------|-------------|
| `get-security-role` | Get all roles |
| `delete-security-role-name` | Delete a role |
| `get-security-role-name` | Get a role |
| `put-security-role-name` | Create or update a role |
| `post-security-roles` | Create or update roles |

### `elastic stack kb roles get-security-role`

Get all roles

[JSON Schema](./schemas/elastic-stack-kb-roles-get-security-role.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--replace-deprecated-privileges [value]` | If `true` and the response contains any privileges that are associated with deprecated features, they are omitted in favor of details about the appropriate replacement feature privileges. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb roles delete-security-role-name`

Delete a role

[JSON Schema](./schemas/elastic-stack-kb-roles-delete-security-role-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb roles get-security-role-name`

Get a role

[JSON Schema](./schemas/elastic-stack-kb-roles-get-security-role-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The role name. (required) |  |  |
| `--replace-deprecated-privileges [value]` | If `true` and the response contains any privileges that are associated with deprecated features, they are omitted in favor of details about the appropriate replacement feature privileges. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb roles put-security-role-name`

Create or update a role

[JSON Schema](./schemas/elastic-stack-kb-roles-put-security-role-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The role name. (required) |  |  |
| `--create-only [value]` | When true, a role is not overwritten if it already exists. |  |  |
| `--description <string>` | A description for the role. |  |  |
| `--elasticsearch <json>` | (required) |  |  |
| `--kibana <json>` |  |  |  |
| `--metadata <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb roles post-security-roles`

Create or update roles

[JSON Schema](./schemas/elastic-stack-kb-roles-post-security-roles.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--roles <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb saved-objects`

Kibana saved-objects API commands

| Command | Description |
|---------|-------------|
| `post-saved-objects-export` | Export saved objects |
| `post-saved-objects-import` | Import saved objects |

### `elastic stack kb saved-objects post-saved-objects-export`

Export saved objects

[JSON Schema](./schemas/elastic-stack-kb-saved-objects-post-saved-objects-export.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--exclude-export-details [value]` | Do not add export details entry at the end of the stream. |  |  |
| `--has-reference <string>` |  |  |  |
| `--include-references-deep [value]` | Includes all of the referenced objects in the exported objects. |  |  |
| `--objects <json>` | A list of objects to export. NOTE: this optional parameter cannot be combined with the `types` option |  |  |
| `--search <string>` | Search for documents to export using the Elasticsearch Simple Query String syntax. |  |  |
| `--type <string>` | The saved object types to include in the export. Use `*` to export all the types. Valid options depend on enabled plugins, but may include `visualization`, `dashboard`, `search`, `index-pattern`, `tag`, `config`, `config-global`, `lens`, `map`, `event-annotation-group`, `query`, `url`, `action`, `alert`, `alerting_rule_template`, `apm-indices`, `cases-user-actions`, `cases`, `cases-comments`, `infrastructure-monitoring-log-view`, `ml-trained-model`, `osquery-saved-query`, `osquery-pack`, `osquery-pack-asset`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb saved-objects post-saved-objects-import`

Import saved objects

[JSON Schema](./schemas/elastic-stack-kb-saved-objects-post-saved-objects-import.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--overwrite [value]` | Overwrites saved objects when they already exist. When used, potential conflict errors are automatically resolved by overwriting the destination object. NOTE: This option cannot be used with the `createNewCopies` option. |  |  |
| `--create-new-copies [value]` | Creates copies of saved objects, regenerates each object ID, and resets the origin. When used, potential conflict errors are avoided. NOTE: This option cannot be used with the `overwrite` and `compatibilityMode` options. |  |  |
| `--compatibility-mode [value]` | Applies various adjustments to the saved objects that are being imported to maintain compatibility between different Kibana versions. Use this option only if you encounter issues with imported saved objects. NOTE: This option cannot be used with the `createNewCopies` option. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-ai-assistant-api`

Kibana security-ai-assistant-api API commands

| Command | Description |
|---------|-------------|
| `perform-anonymization-fields-bulk-action` | Apply a bulk action to anonymization fields |
| `find-anonymization-fields` | Get anonymization fields |
| `chat-complete` | Create a model response |
| `delete-all-conversations` | Delete conversations |
| `create-conversation` | Create a conversation |
| `find-conversations` | Get conversations |
| `delete-conversation` | Delete a conversation |
| `read-conversation` | Get a conversation |
| `update-conversation` | Update a conversation |
| `get-knowledge-base` | Read a KnowledgeBase |
| `post-knowledge-base` | Create a KnowledgeBase |
| `read-knowledge-base` | Read a KnowledgeBase for a resource |
| `create-knowledge-base` | Create a KnowledgeBase for a resource |
| `create-knowledge-base-entry` | Create a Knowledge Base Entry |
| `perform-knowledge-base-entry-bulk-action` | Applies a bulk action to multiple Knowledge Base Entries |
| `find-knowledge-base-entries` | Finds Knowledge Base Entries that match the given query. |
| `delete-knowledge-base-entry` | Deletes a single Knowledge Base Entry using the `id` field |
| `read-knowledge-base-entry` | Read a Knowledge Base Entry |
| `update-knowledge-base-entry` | Update a Knowledge Base Entry |
| `perform-prompts-bulk-action` | Apply a bulk action to prompts |
| `find-prompts` | Get prompts |

### `elastic stack kb security-ai-assistant-api perform-anonymization-fields-bulk-action`

Apply a bulk action to anonymization fields

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-perform-anonymization-fields-bulk-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--create <json>` | Array of anonymization fields to create. |  |  |
| `--delete <json>` | Object containing the query to filter anonymization fields and/or an array of anonymization field IDs to delete. |  |  |
| `--update <json>` | Array of anonymization fields to update. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api find-anonymization-fields`

Get anonymization fields

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-find-anonymization-fields.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fields <string>` | Fields to return |  |  |
| `--filter <string>` | Search query |  |  |
| `--sort-field <string>` | Field to sort by |  |  |
| `--sort-order <string>` | Sort order |  |  |
| `--page <number>` | Page number |  |  |
| `--per-page <number>` | AnonymizationFields per page |  |  |
| `--all-data [value]` | If true, additionally fetch all anonymization fields, otherwise fetch only the provided page |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api chat-complete`

Create a model response

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-chat-complete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--content-references-disabled [value]` | If true, the response will not include content references. |  |  |
| `--connector-id <string>` | Required connector identifier to route the request. (required) |  |  |
| `--conversation-id <string>` | A string that does not contain only whitespace characters. |  |  |
| `--is-stream [value]` | If true, the response will be streamed in chunks. |  |  |
| `--lang-smith-api-key <string>` | API key for LangSmith integration. |  |  |
| `--lang-smith-project <string>` | LangSmith project name for tracing. |  |  |
| `--messages <json>` | List of chat messages exchanged so far. (required) |  |  |
| `--model <string>` | Model ID or name to use for the response. |  |  |
| `--persist [value]` | Whether to persist the chat and response to storage. |  |  |
| `--prompt-id <string>` | Prompt template identifier. |  |  |
| `--response-language <string>` | ISO language code for the assistant's response. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api delete-all-conversations`

Delete conversations

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-delete-all-conversations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--excluded-ids <json>` | Optional list of conversation IDs to delete. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api create-conversation`

Create a conversation

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-create-conversation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--api-config <json>` |  |  |  |
| `--category <string>` | The conversation category. |  |  |
| `--exclude-from-last-conversation-storage [value]` | Exclude from last conversation storage. |  |  |
| `--id <string>` | The conversation id. |  |  |
| `--messages <json>` | The conversation messages. |  |  |
| `--replacements <json>` | Replacements object used to anonymize/deanonymize messages |  |  |
| `--title <string>` | The conversation title. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api find-conversations`

Get conversations

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-find-conversations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fields <string>` | A list of fields to include in the response. If omitted, all fields are returned. |  |  |
| `--filter <string>` | A search query to filter the conversations. Can match against titles, messages, or other conversation attributes. |  |  |
| `--sort-field <string>` | The field by which to sort the results. Valid fields are `created_at`, `title`, and `updated_at`. |  |  |
| `--sort-order <string>` | The order in which to sort the results. Can be either `asc` for ascending or `desc` for descending. |  |  |
| `--page <number>` | The page number of the results to retrieve. Default is 1. |  |  |
| `--per-page <number>` | The number of conversations to return per page. Default is 20. |  |  |
| `--is-owner [value]` | Whether to return conversations that the current user owns. If true, only conversations owned by the user are returned. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api delete-conversation`

Delete a conversation

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-delete-conversation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The conversation's `id` value. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api read-conversation`

Get a conversation

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-read-conversation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The conversation's `id` value, a unique identifier for the conversation. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api update-conversation`

Update a conversation

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-update-conversation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The conversation's `id` value. (required) |  |  |
| `--api-config <json>` |  |  |  |
| `--category <string>` | The conversation category. |  |  |
| `--exclude-from-last-conversation-storage [value]` | Exclude from last conversation storage. |  |  |
| `--body-id <string>` | A string that does not contain only whitespace characters. (required) |  |  |
| `--messages <json>` | The conversation messages. |  |  |
| `--replacements <json>` | Replacements object used to anonymize/deanonymize messages |  |  |
| `--title <string>` | The conversation title. |  |  |
| `--users <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api get-knowledge-base`

Read a KnowledgeBase

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api post-knowledge-base`

Create a KnowledgeBase

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-post-knowledge-base.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--model-id <string>` | ELSER modelId to use when setting up the Knowledge Base. If not provided, a default model will be used. |  |  |
| `--ignore-security-labs [value]` | Indicates whether we should or should not install Security Labs docs when setting up the Knowledge Base. Defaults to `false`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api read-knowledge-base`

Read a KnowledgeBase for a resource

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-read-knowledge-base.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--resource <string>` | The KnowledgeBase `resource` value. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api create-knowledge-base`

Create a KnowledgeBase for a resource

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-create-knowledge-base.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--resource <string>` | The KnowledgeBase `resource` value. (required) |  |  |
| `--model-id <string>` | ELSER modelId to use when setting up the Knowledge Base. If not provided, a default model will be used. |  |  |
| `--ignore-security-labs [value]` | Indicates whether we should or should not install Security Labs docs when setting up the Knowledge Base. Defaults to `false`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api create-knowledge-base-entry`

Create a Knowledge Base Entry

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api perform-knowledge-base-entry-bulk-action`

Applies a bulk action to multiple Knowledge Base Entries

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-perform-knowledge-base-entry-bulk-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--create <json>` | List of Knowledge Base Entries to create. |  |  |
| `--delete <json>` |  |  |  |
| `--update <json>` | List of Knowledge Base Entries to update. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api find-knowledge-base-entries`

Finds Knowledge Base Entries that match the given query.

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-find-knowledge-base-entries.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fields <string>` | A list of fields to include in the response. If not provided, all fields will be included. |  |  |
| `--filter <string>` | Search query to filter Knowledge Base Entries by specific criteria. |  |  |
| `--sort-field <string>` | Field to sort the Knowledge Base Entries by. |  |  |
| `--sort-order <string>` | Sort order for the results, either asc or desc. |  |  |
| `--page <number>` | Page number for paginated results. Defaults to 1. |  |  |
| `--per-page <number>` | Number of Knowledge Base Entries to return per page. Defaults to 20. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api delete-knowledge-base-entry`

Deletes a single Knowledge Base Entry using the `id` field

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-delete-knowledge-base-entry.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (`id`) of the Knowledge Base Entry to delete. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api read-knowledge-base-entry`

Read a Knowledge Base Entry

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-read-knowledge-base-entry.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (`id`) of the Knowledge Base Entry to retrieve. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api update-knowledge-base-entry`

Update a Knowledge Base Entry

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-update-knowledge-base-entry.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (`id`) of the Knowledge Base Entry to update. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api perform-prompts-bulk-action`

Apply a bulk action to prompts

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-perform-prompts-bulk-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--create <json>` | List of prompts to be created. |  |  |
| `--delete <json>` | Criteria for deleting prompts in bulk. |  |  |
| `--update <json>` | List of prompts to be updated. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-ai-assistant-api find-prompts`

Get prompts

[JSON Schema](./schemas/elastic-stack-kb-security-ai-assistant-api-find-prompts.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fields <string>` | List of specific fields to include in each returned prompt. |  |  |
| `--filter <string>` | Search query string to filter prompts by matching fields. |  |  |
| `--sort-field <string>` | Field to sort prompts by. |  |  |
| `--sort-order <string>` | Sort order, either asc or desc. |  |  |
| `--page <number>` | Page number for pagination. |  |  |
| `--per-page <number>` | Number of prompts per page. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-attack-discovery-api`

Kibana security-attack-discovery-api API commands

| Command | Description |
|---------|-------------|
| `post-attack-discovery-bulk` | Bulk update Attack discoveries |
| `attack-discovery-find` | Find Attack discoveries that match the search criteria |
| `post-attack-discovery-generate` | Generate attack discoveries from alerts |
| `get-attack-discovery-generations` | Get the latest attack discovery generations metadata for the current user |
| `get-attack-discovery-generation` | Get a single Attack discovery generation, including its discoveries and (optional) generation metadata |
| `post-attack-discovery-generations-dismiss` | Dismiss an attack discovery generation |
| `create-attack-discovery-schedules` | Create Attack discovery schedule |
| `find-attack-discovery-schedules` | Finds Attack discovery schedules that match the search criteria |
| `delete-attack-discovery-schedules` | Delete Attack discovery schedule |
| `get-attack-discovery-schedules` | Get Attack discovery schedule by ID |
| `update-attack-discovery-schedules` | Update Attack discovery schedule |
| `disable-attack-discovery-schedules` | Disable Attack discovery schedule |
| `enable-attack-discovery-schedules` | Enable Attack discovery schedule |

### `elastic stack kb security-attack-discovery-api post-attack-discovery-bulk`

Bulk update Attack discoveries

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-post-attack-discovery-bulk.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--update <json>` | Configuration object containing all parameters for the bulk update operation (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api attack-discovery-find`

Find Attack discoveries that match the search criteria

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-attack-discovery-find.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--alert-ids <string>` | Filter results to Attack discoveries that include any of the provided alert IDs |  |  |
| `--connector-names <string>` | Filter results to Attack discoveries created by any of the provided human readable connector names. Note that values must match the human readable `connector_name` property of an Attack discovery, e.g. "GPT-5 Chat", which are distinct from `connector_id` values used to generate Attack discoveries. |  |  |
| `--enable-field-rendering [value]` | Enables a markdown syntax used to render pivot fields, for example `{{ user.name james }}`. When disabled, the same example would be rendered as `james`. This is primarily used for Attack discovery views within Kibana. Defaults to `false`. |  |  |
| `--end <string>` | End of the time range for the search. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now", "now-24h"). |  |  |
| `--ids <string>` | Filter results to the Attack discoveries with the specified IDs |  |  |
| `--include-unique-alert-ids [value]` | If `true`, the response will include `unique_alert_ids` and `unique_alert_ids_count` aggregated across the matched Attack discoveries |  |  |
| `--page <number>` | Page number to return (used for pagination). Defaults to 1. |  |  |
| `--per-page <number>` | Number of Attack discoveries to return per page (used for pagination). Defaults to 10. |  |  |
| `--search <string>` | Free-text search query applied to relevant text fields of Attack discoveries (title, description, tags, etc.) |  |  |
| `--shared [value]` | Whether to filter by shared visibility. If omitted, both shared and privately visible Attack discoveries are returned. Use `true` to return only shared discoveries, `false` to return only those visible to the current user. |  |  |
| `--scheduled [value]` | Whether to filter by scheduled or ad-hoc attack discoveries. If omitted, both types of attack discoveries are returned. Use `true` to return only scheduled discoveries or `false` to return only ad-hoc discoveries. |  |  |
| `--sort-field <string>` | Field used to sort results. See `AttackDiscoveryFindSortField` for allowed values. |  |  |
| `--sort-order <string>` | Sort order direction `asc` for ascending or `desc` for descending. Defaults to `desc`. |  |  |
| `--start <string>` | Start of the time range for the search. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now-7d"). |  |  |
| `--status <string>` | Filter by alert workflow status. Provide one or more of the allowed workflow states. |  |  |
| `--with-replacements [value]` | When true, return the created Attack discoveries with text replacements applied to the detailsMarkdown, entitySummaryMarkdown, summaryMarkdown, and title fields. Defaults to `true`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api post-attack-discovery-generate`

Generate attack discoveries from alerts

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-post-attack-discovery-generate.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--alerts-index-pattern <string>` | The (space specific) index pattern that contains the alerts to use as (required) |  |  |
| `--anonymization-fields <json>` | The list of fields, and whether or not they are anonymized, allowed to be sent to LLMs. Consider using the output of the `/api/security_ai_assistant/anonymization_fields/_find` API (for a specific Kibana space) to provide this value. (required) |  |  |
| `--api-config <json>` | (required) |  |  |
| `--connector-name <string>` |  |  |  |
| `--end <string>` |  |  |  |
| `--filter <json>` | An Elasticsearch-style query DSL object used to filter alerts. For example: |  |  |
| `--model <string>` |  |  |  |
| `--replacements <json>` | Replacements object used to anonymize/deanonymize messages |  |  |
| `--size <number>` | (required) |  |  |
| `--start <string>` |  |  |  |
| `--sub-action <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api get-attack-discovery-generations`

Get the latest attack discovery generations metadata for the current user

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-get-attack-discovery-generations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--end <string>` | End of the time range for filtering generations. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now", "now-24h"). |  |  |
| `--size <number>` | The maximum number of generations to retrieve |  |  |
| `--start <string>` | Start of the time range for filtering generations. Accepts absolute timestamps (ISO 8601) or relative date math (e.g. "now-7d"). |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api get-attack-discovery-generation`

Get a single Attack discovery generation, including its discoveries and (optional) generation metadata

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-get-attack-discovery-generation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-uuid <string>` | The unique identifier for the Attack discovery generation execution. This UUID is returned at the start of an Attack discovery generation. (required) |  |  |
| `--enable-field-rendering [value]` | Enables a markdown syntax used to render pivot fields, for example `{{ user.name james }}`. When disabled, the same example would be rendered as `james`. This is primarily used for Attack discovery views within Kibana. Defaults to `false`. |  |  |
| `--with-replacements [value]` | When true, return the created Attack discoveries with text replacements applied to the detailsMarkdown, entitySummaryMarkdown, summaryMarkdown, and title fields. Defaults to `true`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api post-attack-discovery-generations-dismiss`

Dismiss an attack discovery generation

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-post-attack-discovery-generations-dismiss.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-uuid <string>` | The unique identifier for the Attack discovery generation execution. This UUID is returned when an attack discovery generation is created and can be found in generation responses. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api create-attack-discovery-schedules`

Create Attack discovery schedule

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-create-attack-discovery-schedules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--actions <json>` | The attack discovery schedule actions |  |  |
| `--enabled [value]` | Indicates whether the schedule is enabled |  |  |
| `--name <string>` | The name of the schedule (required) |  |  |
| `--params <json>` | An attack discovery schedule params (required) |  |  |
| `--schedule <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api find-attack-discovery-schedules`

Finds Attack discovery schedules that match the search criteria

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-find-attack-discovery-schedules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` | Page number to return (used for pagination). Defaults to 1. |  |  |
| `--per-page <number>` | Number of Attack discovery schedules to return per page (used for pagination). Defaults to 10. |  |  |
| `--sort-field <string>` | Field used to sort results. Common fields include 'name', 'created_at', 'updated_at', and 'enabled'. |  |  |
| `--sort-direction <string>` | Sort order direction. Use 'asc' for ascending or 'desc' for descending. Defaults to 'asc'. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api delete-attack-discovery-schedules`

Delete Attack discovery schedule

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-delete-attack-discovery-schedules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (UUID) of the Attack Discovery schedule to delete. This ID is returned when creating a schedule and can be found in schedule listings. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api get-attack-discovery-schedules`

Get Attack discovery schedule by ID

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-get-attack-discovery-schedules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (UUID) of the Attack Discovery schedule to retrieve. This ID is returned when creating a schedule and can be found in schedule listings. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api update-attack-discovery-schedules`

Update Attack discovery schedule

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-update-attack-discovery-schedules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (UUID) of the Attack Discovery schedule to update. This ID is returned when creating a schedule and can be found in schedule listings. (required) |  |  |
| `--actions <json>` | The attack discovery schedule actions (required) |  |  |
| `--name <string>` | The name of the schedule (required) |  |  |
| `--params <json>` | An attack discovery schedule params (required) |  |  |
| `--schedule <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api disable-attack-discovery-schedules`

Disable Attack discovery schedule

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-disable-attack-discovery-schedules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (UUID) of the Attack Discovery schedule to disable. This ID is returned when creating a schedule and can be found in schedule listings. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-attack-discovery-api enable-attack-discovery-schedules`

Enable Attack discovery schedule

[JSON Schema](./schemas/elastic-stack-kb-security-attack-discovery-api-enable-attack-discovery-schedules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The unique identifier (UUID) of the Attack Discovery schedule to enable. This ID is returned when creating a schedule and can be found in schedule listings. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-detections-api`

Kibana security-detections-api API commands

| Command | Description |
|---------|-------------|
| `read-privileges` | Returns user privileges for the Kibana space |
| `delete-rule` | Delete a detection rule |
| `read-rule` | Retrieve a detection rule |
| `patch-rule` | Patch a detection rule |
| `create-rule` | Create a detection rule |
| `update-rule` | Update a detection rule |
| `perform-rules-bulk-action` | Apply a bulk action to detection rules |
| `export-rules` | Export detection rules |
| `find-rules` | List all detection rules |
| `import-rules` | Import detection rules |
| `rule-preview` | Preview rule alerts generated on specified time range |
| `set-alert-assignees` | Assign and unassign users from detection alerts |
| `search-alerts` | Find and/or aggregate detection alerts |
| `set-alerts-status` | Set a detection alert status |
| `set-alert-tags` | Add and remove detection alert tags |
| `read-tags` | List all detection rule tags |

### `elastic stack kb security-detections-api read-privileges`

Returns user privileges for the Kibana space

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api delete-rule`

Delete a detection rule

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-delete-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The rule's `id` value. |  |  |
| `--rule-id <string>` | The rule's `rule_id` value. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api read-rule`

Retrieve a detection rule

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-read-rule.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The rule's `id` value. |  |  |
| `--rule-id <string>` | The rule's `rule_id` value. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api patch-rule`

Patch a detection rule

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api create-rule`

Create a detection rule

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api update-rule`

Update a detection rule

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api perform-rules-bulk-action`

Apply a bulk action to detection rules

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-perform-rules-bulk-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kb-dry-run [value]` | Enables dry run mode for the request call. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api export-rules`

Export detection rules

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-export-rules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--exclude-export-details [value]` | Determines whether a summary of the exported rules is returned. |  |  |
| `--file-name <string>` | File name for saving the exported rules. |  |  |
| `--objects <json>` | Array of objects with a rule's `rule_id` field. Do not use rule's `id` here. Exports all rules when unspecified. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api find-rules`

List all detection rules

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-find-rules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fields <string>` |  |  |  |
| `--filter <string>` | Search query |  |  |
| `--sort-field <string>` | Field to sort by |  |  |
| `--sort-order <string>` | Sort order |  |  |
| `--page <number>` | Page number |  |  |
| `--per-page <number>` | Rules per page |  |  |
| `--gaps-range-start <string>` | Gaps range start |  |  |
| `--gaps-range-end <string>` | Gaps range end |  |  |
| `--gap-fill-statuses <string>` | Gap fill statuses |  |  |
| `--gap-auto-fill-scheduler-id <string>` | Gap auto fill scheduler ID used to determine gap fill status for rules |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api import-rules`

Import detection rules

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-import-rules.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--overwrite [value]` | Determines whether existing rules with the same `rule_id` are overwritten. |  |  |
| `--overwrite-exceptions [value]` | Determines whether existing exception lists with the same `list_id` are overwritten. Both the exception list container and its items are overwritten. |  |  |
| `--overwrite-action-connectors [value]` | Determines whether existing actions with the same `kibana.alert.rule.actions.id` are overwritten. |  |  |
| `--as-new-list [value]` | Generates a new list ID for each imported exception list. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api rule-preview`

Preview rule alerts generated on specified time range

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-rule-preview.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--enable-logged-requests [value]` | Enables logging and returning in response ES queries, performed during rule execution |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api set-alert-assignees`

Assign and unassign users from detection alerts

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-set-alert-assignees.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--assignees <json>` | (required) |  |  |
| `--ids <json>` | A list of alerts `id`s. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api search-alerts`

Find and/or aggregate detection alerts

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-search-alerts.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--source <string>` |  |  |  |
| `--aggs <json>` |  |  |  |
| `--fields <json>` |  |  |  |
| `--query <json>` |  |  |  |
| `--runtime-mappings <json>` |  |  |  |
| `--size <number>` |  |  |  |
| `--sort <string>` |  |  |  |
| `--track-total-hits [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api set-alerts-status`

Set a detection alert status

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api set-alert-tags`

Add and remove detection alert tags

[JSON Schema](./schemas/elastic-stack-kb-security-detections-api-set-alert-tags.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ids <json>` | A list of alerts `id`s. (required) |  |  |
| `--tags <json>` | Object with list of tags to add and remove. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-detections-api read-tags`

List all detection rule tags

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-endpoint-exceptions-api`

Kibana security-endpoint-exceptions-api API commands

| Command | Description |
|---------|-------------|
| `create-endpoint-list` | Create an Elastic Endpoint rule exception list |
| `delete-endpoint-list-item` | Delete an Elastic Endpoint exception list item |
| `read-endpoint-list-item` | Get an Elastic Endpoint rule exception list item |
| `create-endpoint-list-item` | Create an Elastic Endpoint rule exception list item |
| `update-endpoint-list-item` | Update an Elastic Endpoint rule exception list item |
| `find-endpoint-list-items` | Get Elastic Endpoint exception list items |

### `elastic stack kb security-endpoint-exceptions-api create-endpoint-list`

Create an Elastic Endpoint rule exception list

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-exceptions-api delete-endpoint-list-item`

Delete an Elastic Endpoint exception list item

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-exceptions-api-delete-endpoint-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Either `id` or `item_id` must be specified |  |  |
| `--item-id <string>` | Either `id` or `item_id` must be specified |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-exceptions-api read-endpoint-list-item`

Get an Elastic Endpoint rule exception list item

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-exceptions-api-read-endpoint-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Either `id` or `item_id` must be specified |  |  |
| `--item-id <string>` | Either `id` or `item_id` must be specified |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-exceptions-api create-endpoint-list-item`

Create an Elastic Endpoint rule exception list item

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-exceptions-api-create-endpoint-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--comments <json>` | Array of comment fields: |  |  |
| `--description <string>` | Describes the exception list. (required) |  |  |
| `--entries <json>` | (required) |  |  |
| `--item-id <string>` | Human readable string identifier, e.g. `trusted-linux-processes` |  |  |
| `--meta <json>` |  |  |  |
| `--name <string>` | Exception list name. (required) |  |  |
| `--os-types <json>` |  |  |  |
| `--tags <json>` |  |  |  |
| `--type <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-exceptions-api update-endpoint-list-item`

Update an Elastic Endpoint rule exception list item

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-exceptions-api-update-endpoint-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--version <string>` |  |  |  |
| `--comments <json>` | Array of comment fields: |  |  |
| `--description <string>` | Describes the exception list. (required) |  |  |
| `--entries <json>` | (required) |  |  |
| `--id <string>` | Exception's identifier. |  |  |
| `--item-id <string>` | Human readable string identifier, e.g. `trusted-linux-processes` |  |  |
| `--meta <json>` |  |  |  |
| `--name <string>` | Exception list name. (required) |  |  |
| `--os-types <json>` |  |  |  |
| `--tags <json>` |  |  |  |
| `--type <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-exceptions-api find-endpoint-list-items`

Get Elastic Endpoint exception list items

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-exceptions-api-find-endpoint-list-items.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--filter <string>` | Filters the returned results according to the value of the specified field, |  |  |
| `--page <number>` | The page number to return |  |  |
| `--per-page <number>` | The number of exception list items to return per page |  |  |
| `--sort-field <string>` | Determines which field is used to sort the results |  |  |
| `--sort-order <string>` | Determines the sort order, which can be `desc` or `asc` |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-endpoint-management-api`

Kibana security-endpoint-management-api API commands

| Command | Description |
|---------|-------------|
| `endpoint-get-actions-list` | Get response actions |
| `endpoint-get-actions-status` | Get response actions status |
| `endpoint-get-actions-details` | Get action details |
| `endpoint-file-info` | Get file information |
| `endpoint-file-download` | Download a file |
| `cancel-action` | Cancel a response action |
| `endpoint-execute-action` | Run a command |
| `endpoint-get-file-action` | Get a file |
| `endpoint-isolate-action` | Isolate an endpoint |
| `endpoint-kill-process-action` | Terminate a process |
| `endpoint-generate-memory-dump` | Generate a memory dump from the host machine |
| `endpoint-get-processes-action` | Get running processes |
| `run-script-action` | Run a script |
| `endpoint-scan-action` | Scan a file or directory |
| `endpoint-get-actions-state` | Get actions state |
| `endpoint-suspend-process-action` | Suspend a process |
| `endpoint-unisolate-action` | Release an isolated endpoint |
| `endpoint-upload-action` | Upload a file |
| `get-endpoint-metadata-list` | Get a metadata list |
| `get-endpoint-metadata` | Get metadata |
| `get-policy-response` | Get a policy response |
| `get-protection-updates-note` | Get a protection updates note |
| `create-update-protection-updates-note` | Create or update a protection updates note |

### `elastic stack kb security-endpoint-management-api endpoint-get-actions-list`

Get response actions

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-get-actions-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--page-size <number>` |  |  |  |
| `--commands <string>` |  |  |  |
| `--agent-ids <string>` |  |  |  |
| `--user-ids <string>` |  |  |  |
| `--start-date <string>` |  |  |  |
| `--end-date <string>` |  |  |  |
| `--agent-types <string>` |  |  |  |
| `--with-outputs <string>` |  |  |  |
| `--types <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-get-actions-status`

Get response actions status

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-get-actions-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--query <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-get-actions-details`

Get action details

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-get-actions-details.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--action-id <string>` | The action_id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-file-info`

Get file information

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-file-info.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--action-id <string>` | The action_id parameter (required) |  |  |
| `--file-id <string>` | The file identifier is constructed in one of two ways: (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-file-download`

Download a file

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-file-download.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--action-id <string>` | The action_id parameter (required) |  |  |
| `--file-id <string>` | The file identifier is constructed in one of two ways: (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api cancel-action`

Cancel a response action

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-cancel-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-execute-action`

Run a command

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-execute-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-get-file-action`

Get a file

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-get-file-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-isolate-action`

Isolate an endpoint

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-isolate-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <json>` | Optional parameters object |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-kill-process-action`

Terminate a process

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-kill-process-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-generate-memory-dump`

Generate a memory dump from the host machine

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-generate-memory-dump.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-get-processes-action`

Get running processes

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-get-processes-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <json>` | Optional parameters object |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api run-script-action`

Run a script

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-run-script-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <string>` | One of the following set of parameters must be provided (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-scan-action`

Scan a file or directory

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-scan-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-get-actions-state`

Get actions state

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-suspend-process-action`

Suspend a process

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-suspend-process-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-unisolate-action`

Release an isolated endpoint

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-endpoint-unisolate-action.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-type <string>` | List of agent types to retrieve. Defaults to `endpoint`. |  |  |
| `--alert-ids <json>` | If this action is associated with any alerts, they can be specified here. The action will be logged in any cases associated with the specified alerts. Max of 50. |  |  |
| `--case-ids <json>` | The IDs of cases where the action taken will be logged. Max of 50. |  |  |
| `--comment <string>` | Optional comment |  |  |
| `--endpoint-ids <json>` | List of endpoint IDs (cannot contain empty strings). Max of 250. (required) |  |  |
| `--parameters <json>` | Optional parameters object |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api endpoint-upload-action`

Upload a file

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api get-endpoint-metadata-list`

Get a metadata list

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-get-endpoint-metadata-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--page-size <number>` |  |  |  |
| `--kuery <string>` |  |  |  |
| `--host-statuses <string>` | (required) |  |  |
| `--sort-field <string>` |  |  |  |
| `--sort-direction <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api get-endpoint-metadata`

Get metadata

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-get-endpoint-metadata.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api get-policy-response`

Get a policy response

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-get-policy-response.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--query <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api get-protection-updates-note`

Get a protection updates note

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-get-protection-updates-note.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--package-policy-id <string>` | The package_policy_id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-endpoint-management-api create-update-protection-updates-note`

Create or update a protection updates note

[JSON Schema](./schemas/elastic-stack-kb-security-endpoint-management-api-create-update-protection-updates-note.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--package-policy-id <string>` | The package_policy_id parameter (required) |  |  |
| `--note <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-entity-analytics-api`

Kibana security-entity-analytics-api API commands

| Command | Description |
|---------|-------------|
| `delete-asset-criticality-record` | Delete an asset criticality record |
| `get-asset-criticality-record` | Get an asset criticality record |
| `create-asset-criticality-record` | Upsert an asset criticality record |
| `bulk-upsert-asset-criticality-records` | Bulk upsert asset criticality records |
| `find-asset-criticality-records` | List asset criticality records |
| `delete-monitoring-engine` | Delete the Privilege Monitoring Engine |
| `disable-monitoring-engine` | Disable the Privilege Monitoring Engine |
| `init-monitoring-engine` | Initialize the Privilege Monitoring Engine |
| `schedule-monitoring-engine` | Schedule the Privilege Monitoring Engine |
| `priv-mon-health` | Health check on Privilege Monitoring |
| `priv-mon-privileges` | Run a privileges check on Privilege Monitoring |
| `create-priv-mon-user` | Create a new monitored user |
| `privmon-bulk-upload-users-c-s-v` | Upsert multiple monitored users via CSV upload |
| `delete-priv-mon-user` | Delete a monitored user |
| `update-priv-mon-user` | Update a monitored user |
| `list-priv-mon-users` | List all monitored users |
| `install-privileged-access-detection-package` | Installs the privileged access detection package for the Entity Analytics privileged user monitoring experience |
| `get-privileged-access-detection-package-status` | Gets the status of the privileged access detection package for the Entity Analytics privileged user monitoring experience |
| `create-watchlist` | Create a new watchlist |
| `get-watchlist` | Get a watchlist by ID |
| `update-watchlist` | Update an existing watchlist |
| `list-watchlists` | List all watchlists |
| `init-entity-store` | Initialize the Entity Store |
| `delete-entity-engines` | Delete Entity Engines |
| `list-entity-engines` | List the Entity Engines |
| `delete-entity-engine` | Delete the Entity Engine |
| `get-entity-engine` | Get an Entity Engine |
| `init-entity-engine` | Initialize an Entity Engine |
| `start-entity-engine` | Start an Entity Engine |
| `stop-entity-engine` | Stop an Entity Engine |
| `apply-entity-engine-dataview-indices` | Apply DataView indices to all installed engines |
| `delete-single-entity` | Delete an entity in Entity Store |
| `upsert-entity` | Upsert an entity in Entity Store |
| `upsert-entities-bulk` | Upsert many entities in Entity Store |
| `list-entities` | List Entity Store Entities |
| `get-entity-store-status` | Get the status of the Entity Store |
| `clean-up-risk-engine` | Cleanup the Risk Engine |
| `configure-risk-engine-saved-object` | Configure the Risk Engine Saved Object |
| `schedule-risk-engine-now` | Run the risk scoring engine |

### `elastic stack kb security-entity-analytics-api delete-asset-criticality-record`

Delete an asset criticality record

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-delete-asset-criticality-record.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id-value <string>` | The ID value of the asset. (required) |  |  |
| `--id-field <string>` | The field representing the ID. (required) |  |  |
| `--refresh <string>` | If 'wait_for' the request will wait for the index refresh. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api get-asset-criticality-record`

Get an asset criticality record

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-get-asset-criticality-record.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id-value <string>` | The ID value of the asset. (required) |  |  |
| `--id-field <string>` | The field representing the ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api create-asset-criticality-record`

Upsert an asset criticality record

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-create-asset-criticality-record.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--refresh <string>` | If 'wait_for' the request will wait for the index refresh. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api bulk-upsert-asset-criticality-records`

Bulk upsert asset criticality records

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-bulk-upsert-asset-criticality-records.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--records <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api find-asset-criticality-records`

List asset criticality records

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-find-asset-criticality-records.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--sort-field <string>` | The field to sort by. |  |  |
| `--sort-direction <string>` | The order to sort by. |  |  |
| `--page <number>` | The page number to return. |  |  |
| `--per-page <number>` | The number of records to return per page. |  |  |
| `--kuery <string>` | The kuery to filter by. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api delete-monitoring-engine`

Delete the Privilege Monitoring Engine

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-delete-monitoring-engine.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--data [value]` | Whether to delete all the privileged user data |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api disable-monitoring-engine`

Disable the Privilege Monitoring Engine

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api init-monitoring-engine`

Initialize the Privilege Monitoring Engine

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api schedule-monitoring-engine`

Schedule the Privilege Monitoring Engine

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api priv-mon-health`

Health check on Privilege Monitoring

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api priv-mon-privileges`

Run a privileges check on Privilege Monitoring

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api create-priv-mon-user`

Create a new monitored user

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-create-priv-mon-user.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-analytics-monitoring <json>` | Entity analytics monitoring configuration for the user |  |  |
| `--user <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api privmon-bulk-upload-users-c-s-v`

Upsert multiple monitored users via CSV upload

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api delete-priv-mon-user`

Delete a monitored user

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-delete-priv-mon-user.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api update-priv-mon-user`

Update a monitored user

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-update-priv-mon-user.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--entity-analytics-monitoring <json>` |  |  |  |
| `--body-id <string>` |  |  |  |
| `--labels <json>` |  |  |  |
| `--user <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api list-priv-mon-users`

List all monitored users

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-list-priv-mon-users.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kql <string>` | KQL query to filter the list of monitored users |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api install-privileged-access-detection-package`

Installs the privileged access detection package for the Entity Analytics privileged user monitoring experience

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api get-privileged-access-detection-package-status`

Gets the status of the privileged access detection package for the Entity Analytics privileged user monitoring experience

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api create-watchlist`

Create a new watchlist

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-create-watchlist.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--description <string>` | Description of the watchlist |  |  |
| `--entity-sources <json>` | Optional entity sources to create and link to the watchlist |  |  |
| `--managed [value]` | Indicates if the watchlist is managed by the system |  |  |
| `--name <string>` | Unique name for the watchlist (required) |  |  |
| `--risk-modifier <number>` | Risk score modifier associated with the watchlist (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api get-watchlist`

Get a watchlist by ID

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-get-watchlist.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Unique ID of the watchlist (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api update-watchlist`

Update an existing watchlist

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-update-watchlist.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The ID of the watchlist to update (required) |  |  |
| `--description <string>` | Description of the watchlist |  |  |
| `--managed [value]` | Indicates if the watchlist is managed by the system |  |  |
| `--name <string>` | Unique name of the watchlist (required) |  |  |
| `--risk-modifier <number>` | Risk score modifier associated with the watchlist (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api list-watchlists`

List all watchlists

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api init-entity-store`

Initialize the Entity Store

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-init-entity-store.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--delay <string>` | The delay before the transform will run. |  |  |
| `--docs-per-second <number>` | The number of documents per second to process. |  |  |
| `--enrich-policy-execution-interval <string>` | Interval in which enrich policy runs. For example, `"1h"` means the rule runs every hour. Must be less than or equal to half the duration of the lookback period, |  |  |
| `--entity-types <json>` |  |  |  |
| `--field-history-length <number>` | The number of historical values to keep for each field. |  |  |
| `--filter <string>` |  |  |  |
| `--frequency <string>` | The frequency at which the transform will run. |  |  |
| `--index-pattern <string>` |  |  |  |
| `--lookback-period <string>` | The amount of time the transform looks back to calculate the aggregations. |  |  |
| `--max-page-search-size <number>` | The initial page size to use for the composite aggregation of each checkpoint. |  |  |
| `--timeout <string>` | The timeout for initializing the aggregating transform. |  |  |
| `--timestamp-field <string>` | The field to use as the timestamp. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api delete-entity-engines`

Delete Entity Engines

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-delete-entity-engines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-types <string>` | The entity type of the engine ('user', 'host', 'service', 'generic'). |  |  |
| `--delete-data [value]` | Control flag to also delete the entity data. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api list-entity-engines`

List the Entity Engines

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api delete-entity-engine`

Delete the Entity Engine

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-delete-entity-engine.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-type <string>` | The entity type of the engine (either 'user' or 'host'). (required) |  |  |
| `--delete-data [value]` | Control flag to also delete the entity data. |  |  |
| `--data [value]` | Control flag to also delete the entity data. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api get-entity-engine`

Get an Entity Engine

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-get-entity-engine.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-type <string>` | The entity type of the engine (either 'user' or 'host'). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api init-entity-engine`

Initialize an Entity Engine

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-init-entity-engine.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-type <string>` | The entity type of the engine. (required) |  |  |
| `--delay <string>` | The delay before the transform will run. |  |  |
| `--docs-per-second <number>` | The number of documents per second to process. |  |  |
| `--enrich-policy-execution-interval <string>` | Interval in which enrich policy runs. For example, `"1h"` means the rule runs every hour. Must be less than or equal to half the duration of the lookback period, |  |  |
| `--field-history-length <number>` | The number of historical values to keep for each field. |  |  |
| `--filter <string>` |  |  |  |
| `--frequency <string>` | The frequency at which the transform will run. |  |  |
| `--index-pattern <string>` |  |  |  |
| `--lookback-period <string>` | The amount of time the transform looks back to calculate the aggregations. |  |  |
| `--max-page-search-size <number>` | The initial page size to use for the composite aggregation of each checkpoint. |  |  |
| `--timeout <string>` | The timeout for initializing the aggregating transform. |  |  |
| `--timestamp-field <string>` | The field to use as the timestamp for the entity type. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api start-entity-engine`

Start an Entity Engine

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-start-entity-engine.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-type <string>` | The entity type of the engine (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api stop-entity-engine`

Stop an Entity Engine

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-stop-entity-engine.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-type <string>` | The entity type of the engine (either 'user' or 'host'). (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api apply-entity-engine-dataview-indices`

Apply DataView indices to all installed engines

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api delete-single-entity`

Delete an entity in Entity Store

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-delete-single-entity.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-type <string>` | The entityType parameter (required) |  |  |
| `--id <string>` | Identifier of the entity to be deleted, commonly entity.id value. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api upsert-entity`

Upsert an entity in Entity Store

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-upsert-entity.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--entity-type <string>` | The entityType parameter (required) |  |  |
| `--force [value]` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api upsert-entities-bulk`

Upsert many entities in Entity Store

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-upsert-entities-bulk.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--force [value]` |  |  |  |
| `--entities <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api list-entities`

List Entity Store Entities

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-list-entities.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--sort-field <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--page <number>` |  |  |  |
| `--per-page <number>` |  |  |  |
| `--filter-query <string>` | An ES query to filter by. |  |  |
| `--entity-types <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api get-entity-store-status`

Get the status of the Entity Store

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-get-entity-store-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--include-components [value]` | If true returns a detailed status of the engine including all it's components |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api clean-up-risk-engine`

Cleanup the Risk Engine

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api configure-risk-engine-saved-object`

Configure the Risk Engine Saved Object

[JSON Schema](./schemas/elastic-stack-kb-security-entity-analytics-api-configure-risk-engine-saved-object.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--enable-reset-to-zero [value]` |  |  |  |
| `--exclude-alert-statuses <json>` |  |  |  |
| `--exclude-alert-tags <json>` |  |  |  |
| `--filters <json>` |  |  |  |
| `--range <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-entity-analytics-api schedule-risk-engine-now`

Run the risk scoring engine

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-exceptions-api`

Kibana security-exceptions-api API commands

| Command | Description |
|---------|-------------|
| `create-rule-exception-list-items` | Create rule exception items |
| `delete-exception-list` | Delete an exception list |
| `read-exception-list` | Get exception list details |
| `create-exception-list` | Create an exception list |
| `update-exception-list` | Update an exception list |
| `duplicate-exception-list` | Duplicate an exception list |
| `export-exception-list` | Export an exception list |
| `find-exception-lists` | Get exception lists |
| `import-exception-list` | Import an exception list |
| `delete-exception-list-item` | Delete an exception list item |
| `read-exception-list-item` | Get an exception list item |
| `create-exception-list-item` | Create an exception list item |
| `update-exception-list-item` | Update an exception list item |
| `find-exception-list-items` | Get exception list items |
| `read-exception-list-summary` | Get an exception list summary |
| `create-shared-exception-list` | Create a shared exception list |

### `elastic stack kb security-exceptions-api create-rule-exception-list-items`

Create rule exception items

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-create-rule-exception-list-items.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Detection rule's identifier (required) |  |  |
| `--items <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api delete-exception-list`

Delete an exception list

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-delete-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Exception list's identifier. Either `id` or `list_id` must be specified. |  |  |
| `--list-id <string>` | Human readable exception list string identifier, e.g. `trusted-linux-processes`. Either `id` or `list_id` must be specified. |  |  |
| `--namespace-type <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api read-exception-list`

Get exception list details

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-read-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Exception list's identifier. Either `id` or `list_id` must be specified. |  |  |
| `--list-id <string>` | Human readable exception list string identifier, e.g. `trusted-linux-processes`. Either `id` or `list_id` must be specified. |  |  |
| `--namespace-type <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api create-exception-list`

Create an exception list

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-create-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--description <string>` | Describes the exception list. (required) |  |  |
| `--list-id <string>` | The exception list's human-readable string identifier. |  |  |
| `--meta <json>` | Placeholder for metadata about the list container. |  |  |
| `--name <string>` | The name of the exception list. (required) |  |  |
| `--namespace-type <string>` | Determines whether the exception container is available in all Kibana spaces or just the space |  |  |
| `--os-types <json>` | Use this field to specify the operating system. Only enter one value. |  |  |
| `--tags <json>` | String array containing words and phrases to help categorize exception containers. |  |  |
| `--type <string>` | The type of exception list to be created. Different list types may denote where they can be utilized. (required) |  |  |
| `--kb-version <number>` | The document version, automatically increasd on updates. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api update-exception-list`

Update an exception list

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-update-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--version <string>` | The version id, normally returned by the API when the item was retrieved. Use it ensure updates are done against the latest version. |  |  |
| `--description <string>` | Describes the exception list. (required) |  |  |
| `--id <string>` | Exception list's identifier. |  |  |
| `--list-id <string>` | The exception list's human-readable string identifier. |  |  |
| `--meta <json>` | Placeholder for metadata about the list container. |  |  |
| `--name <string>` | The name of the exception list. (required) |  |  |
| `--namespace-type <string>` | Determines whether the exception container is available in all Kibana spaces or just the space |  |  |
| `--os-types <json>` | Use this field to specify the operating system. Only enter one value. |  |  |
| `--tags <json>` | String array containing words and phrases to help categorize exception containers. |  |  |
| `--type <string>` | The type of exception list to be created. Different list types may denote where they can be utilized. (required) |  |  |
| `--kb-version <number>` | The document version, automatically increasd on updates. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api duplicate-exception-list`

Duplicate an exception list

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-duplicate-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--list-id <string>` | (required) |  |  |
| `--namespace-type <string>` | (required) |  |  |
| `--include-expired-exceptions <string>` | Determines whether to include expired exceptions in the duplicated list. Expiration date defined by `expire_time`. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api export-exception-list`

Export an exception list

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-export-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | (required) |  |  |
| `--list-id <string>` | (required) |  |  |
| `--namespace-type <string>` | (required) |  |  |
| `--include-expired-exceptions <string>` | Determines whether to include expired exceptions in the exported list. Expiration date defined by `expire_time`. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api find-exception-lists`

Get exception lists

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-find-exception-lists.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--filter <string>` | Filters the returned results according to the value of the specified field. |  |  |
| `--namespace-type <string>` | Determines whether the returned containers are Kibana associated with a Kibana space |  |  |
| `--page <number>` | The page number to return |  |  |
| `--per-page <number>` | The number of exception lists to return per page |  |  |
| `--sort-field <string>` | Determines which field is used to sort the results. |  |  |
| `--sort-order <string>` | Determines the sort order, which can be `desc` or `asc`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api import-exception-list`

Import an exception list

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-import-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--overwrite [value]` | Determines whether existing exception lists with the same `list_id` are overwritten. |  |  |
| `--as-new-list [value]` | Determines whether the list being imported will have a new `list_id` generated. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api delete-exception-list-item`

Delete an exception list item

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-delete-exception-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Exception item's identifier. Either `id` or `item_id` must be specified |  |  |
| `--item-id <string>` | Human readable exception item string identifier, e.g. `trusted-linux-processes`. Either `id` or `item_id` must be specified |  |  |
| `--namespace-type <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api read-exception-list-item`

Get an exception list item

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-read-exception-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Exception list item's identifier. Either `id` or `item_id` must be specified. |  |  |
| `--item-id <string>` | Human readable exception item string identifier, e.g. `trusted-linux-processes`. Either `id` or `item_id` must be specified. |  |  |
| `--namespace-type <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api create-exception-list-item`

Create an exception list item

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api update-exception-list-item`

Update an exception list item

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api find-exception-list-items`

Get exception list items

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-find-exception-list-items.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--list-id <string>` | The `list_id`s of the items to fetch. (required) |  |  |
| `--filter <string>` | Filters the returned results according to the value of the specified field, |  |  |
| `--namespace-type <string>` | Determines whether the returned containers are Kibana associated with a Kibana space |  |  |
| `--search <string>` |  |  |  |
| `--page <number>` | The page number to return |  |  |
| `--per-page <number>` | The number of exception list items to return per page |  |  |
| `--sort-field <string>` | Determines which field is used to sort the results. |  |  |
| `--sort-order <string>` | Determines the sort order, which can be `desc` or `asc`. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api read-exception-list-summary`

Get an exception list summary

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-read-exception-list-summary.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Exception list's identifier generated upon creation. |  |  |
| `--list-id <string>` | Exception list's human readable identifier. |  |  |
| `--namespace-type <string>` |  |  |  |
| `--filter <string>` | Search filter clause |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-exceptions-api create-shared-exception-list`

Create a shared exception list

[JSON Schema](./schemas/elastic-stack-kb-security-exceptions-api-create-shared-exception-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--description <string>` | Describes the exception list. (required) |  |  |
| `--name <string>` | The name of the exception list. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-lists-api`

Kibana security-lists-api API commands

| Command | Description |
|---------|-------------|
| `delete-list` | Delete a value list |
| `read-list` | Get value list details |
| `patch-list` | Patch a value list |
| `create-list` | Create a value list |
| `update-list` | Update a value list |
| `find-lists` | Get value lists |
| `delete-list-index` | Delete value list data streams |
| `read-list-index` | Get status of value list data streams |
| `create-list-index` | Create list data streams |
| `delete-list-item` | Delete a value list item |
| `read-list-item` | Get a value list item |
| `patch-list-item` | Patch a value list item |
| `create-list-item` | Create a value list item |
| `update-list-item` | Update a value list item |
| `export-list-items` | Export value list items |
| `find-list-items` | Get value list items |
| `import-list-items` | Import value list items |
| `read-list-privileges` | Get value list privileges |

### `elastic stack kb security-lists-api delete-list`

Delete a value list

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-delete-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | (required) |  |  |
| `--delete-references [value]` | Determines whether exception items referencing this value list should be deleted. |  |  |
| `--ignore-references [value]` | Determines whether to delete value list without performing any additional checks of where this list may be utilized. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api read-list`

Get value list details

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-read-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api patch-list`

Patch a value list

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-patch-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--version <string>` | The version id, normally returned by the API when the document is retrieved. Use it ensure updates are done against the latest version. |  |  |
| `--description <string>` | Describes the value list. |  |  |
| `--id <string>` | Value list's identifier. (required) |  |  |
| `--meta <json>` | Placeholder for metadata about the value list. |  |  |
| `--name <string>` | Value list's name. |  |  |
| `--kb-version <number>` | The document version number. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api create-list`

Create a value list

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-create-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--description <string>` | Describes the value list. (required) |  |  |
| `--id <string>` | Value list's identifier. |  |  |
| `--meta <json>` | Placeholder for metadata about the value list. |  |  |
| `--name <string>` | Value list's name. (required) |  |  |
| `--type <string>` | Specifies the Elasticsearch data type of excludes the list container holds. Some common examples: (required) |  |  |
| `--kb-version <number>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api update-list`

Update a value list

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-update-list.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--version <string>` | The version id, normally returned by the API when the document is retrieved. Use it ensure updates are done against the latest version. |  |  |
| `--description <string>` | Describes the value list. (required) |  |  |
| `--id <string>` | Value list's identifier. (required) |  |  |
| `--meta <json>` | Placeholder for metadata about the value list. |  |  |
| `--name <string>` | Value list's name. (required) |  |  |
| `--kb-version <number>` | The document version number. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api find-lists`

Get value lists

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-find-lists.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` | The page number to return. |  |  |
| `--per-page <number>` | The number of value lists to return per page. |  |  |
| `--sort-field <string>` | Determines which field is used to sort the results. |  |  |
| `--sort-order <string>` | Determines the sort order, which can be `desc` or `asc` |  |  |
| `--cursor <string>` | Returns the lists that come after the last lists returned in the previous call (use the `cursor` value returned in the previous call). This parameter uses the `tie_breaker_id` field to ensure all lists are sorted and returned correctly. |  |  |
| `--filter <string>` | Filters the returned results according to the value of the specified field, |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api delete-list-index`

Delete value list data streams

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api read-list-index`

Get status of value list data streams

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api create-list-index`

Create list data streams

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api delete-list-item`

Delete a value list item

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-delete-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Value list item's identifier. Required if `list_id` and `value` are not specified. |  |  |
| `--list-id <string>` | Value list's identifier. Required if `id` is not specified. |  |  |
| `--value <string>` | The value used to evaluate exceptions. Required if `id` is not specified. |  |  |
| `--refresh <string>` | Determines when changes made by the request are made visible to search. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api read-list-item`

Get a value list item

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-read-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Value list item identifier. Required if `list_id` and `value` are not specified. |  |  |
| `--list-id <string>` | Value list item list's `id` identfier. Required if `id` is not specified. |  |  |
| `--value <string>` | The value used to evaluate exceptions. Required if `id` is not specified. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api patch-list-item`

Patch a value list item

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-patch-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--version <string>` | The version id, normally returned by the API when the document is retrieved. Use it ensure updates are done against the latest version. |  |  |
| `--id <string>` | Value list item's identifier. (required) |  |  |
| `--meta <json>` | Placeholder for metadata about the value list item. |  |  |
| `--refresh <string>` | Determines when changes made by the request are made visible to search. |  |  |
| `--value <string>` | The value used to evaluate exceptions. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api create-list-item`

Create a value list item

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-create-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Value list item's identifier. |  |  |
| `--list-id <string>` | Value list's identifier. (required) |  |  |
| `--meta <json>` | Placeholder for metadata about the value list item. |  |  |
| `--refresh <string>` | Determines when changes made by the request are made visible to search. |  |  |
| `--value <string>` | The value used to evaluate exceptions. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api update-list-item`

Update a value list item

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-update-list-item.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--version <string>` | The version id, normally returned by the API when the document is retrieved. Use it ensure updates are done against the latest version. |  |  |
| `--id <string>` | Value list item's identifier. (required) |  |  |
| `--meta <json>` | Placeholder for metadata about the value list item. |  |  |
| `--value <string>` | The value used to evaluate exceptions. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api export-list-items`

Export value list items

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-export-list-items.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--list-id <string>` | Value list's `id` to export. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api find-list-items`

Get value list items

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-find-list-items.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--list-id <string>` | (required) |  |  |
| `--page <number>` | The page number to return. |  |  |
| `--per-page <number>` | The number of list items to return per page. |  |  |
| `--sort-field <string>` | Determines which field is used to sort the results. |  |  |
| `--sort-order <string>` | Determines the sort order, which can be `desc` or `asc` |  |  |
| `--cursor <string>` |  |  |  |
| `--filter <string>` | Filters the returned results according to the value of the specified field, |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api import-list-items`

Import value list items

[JSON Schema](./schemas/elastic-stack-kb-security-lists-api-import-list-items.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--list-id <string>` | List's id. |  |  |
| `--type <string>` | Type of the importing list. |  |  |
| `--refresh <string>` | Determines when changes made by the request are made visible to search. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-lists-api read-list-privileges`

Get value list privileges

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-osquery-api`

Kibana security-osquery-api API commands

| Command | Description |
|---------|-------------|
| `osquery-find-live-queries` | Get live queries |
| `osquery-create-live-query` | Create a live query |
| `osquery-get-live-query-details` | Get live query details |
| `osquery-get-live-query-results` | Get live query results |
| `osquery-find-packs` | Get packs |
| `osquery-create-packs` | Create a pack |
| `osquery-delete-packs` | Delete a pack |
| `osquery-get-packs-details` | Get pack details |
| `osquery-update-packs` | Update a pack |
| `osquery-find-saved-queries` | Get saved queries |
| `osquery-create-saved-query` | Create a saved query |
| `osquery-delete-saved-query` | Delete a saved query |
| `osquery-get-saved-query-details` | Get saved query details |
| `osquery-update-saved-query` | Update a saved query |

### `elastic stack kb security-osquery-api osquery-find-live-queries`

Get live queries

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-find-live-queries.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kuery <string>` |  |  |  |
| `--page <number>` |  |  |  |
| `--page-size <number>` |  |  |  |
| `--sort <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-create-live-query`

Create a live query

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-create-live-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--agent-all [value]` | When `true`, the query runs on all agents. |  |  |
| `--agent-ids <json>` | A list of agent IDs to run the query on. |  |  |
| `--agent-platforms <json>` | A list of agent platforms to run the query on. |  |  |
| `--agent-policy-ids <json>` | A list of agent policy IDs to run the query on. |  |  |
| `--alert-ids <json>` | A list of alert IDs associated with the live query. |  |  |
| `--case-ids <json>` | A list of case IDs associated with the live query. |  |  |
| `--ecs-mapping <json>` | Map osquery results columns or static values to Elastic Common Schema (ECS) fields |  |  |
| `--event-ids <json>` | A list of event IDs associated with the live query. |  |  |
| `--metadata <json>` | Custom metadata object associated with the live query. |  |  |
| `--pack-id <string>` | The ID of the pack you want to run, retrieve, update, or delete. |  |  |
| `--queries <json>` | An array of queries to run. |  |  |
| `--query <string>` | The SQL query you want to run. |  |  |
| `--saved-query-id <string>` | The ID of a saved query. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-get-live-query-details`

Get live query details

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-get-live-query-details.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-get-live-query-results`

Get live query results

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-get-live-query-results.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--action-id <string>` | The actionId parameter (required) |  |  |
| `--kuery <string>` |  |  |  |
| `--page <number>` |  |  |  |
| `--page-size <number>` |  |  |  |
| `--sort <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-find-packs`

Get packs

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-find-packs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--page-size <number>` |  |  |  |
| `--sort <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-create-packs`

Create a pack

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-create-packs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--description <string>` | The pack description. |  |  |
| `--enabled [value]` | Enables the pack. |  |  |
| `--name <string>` | The pack name. |  |  |
| `--policy-ids <json>` | A list of agents policy IDs. |  |  |
| `--queries <json>` | An object of queries. |  |  |
| `--shards <json>` | An object with shard configuration for policies included in the pack. For each policy, set the shard configuration to a percentage (1–100) of target hosts. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-delete-packs`

Delete a pack

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-delete-packs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-get-packs-details`

Get pack details

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-get-packs-details.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-update-packs`

Update a pack

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-update-packs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--description <string>` | The pack description. |  |  |
| `--enabled [value]` | Enables the pack. |  |  |
| `--name <string>` | The pack name. |  |  |
| `--policy-ids <json>` | A list of agents policy IDs. |  |  |
| `--queries <json>` | An object of queries. |  |  |
| `--shards <json>` | An object with shard configuration for policies included in the pack. For each policy, set the shard configuration to a percentage (1–100) of target hosts. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-find-saved-queries`

Get saved queries

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-find-saved-queries.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--page <number>` |  |  |  |
| `--page-size <number>` |  |  |  |
| `--sort <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-create-saved-query`

Create a saved query

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-create-saved-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--description <string>` | The saved query description. |  |  |
| `--ecs-mapping <json>` | Map osquery results columns or static values to Elastic Common Schema (ECS) fields |  |  |
| `--id <string>` | The ID of a saved query. |  |  |
| `--interval <string>` | An interval, in seconds, on which to run the query. |  |  |
| `--platform <string>` | Restricts the query to a specified platform. The default is all platforms. To specify multiple platforms, use commas. For example, `linux,darwin`. |  |  |
| `--query <string>` | The SQL query you want to run. |  |  |
| `--removed [value]` | Indicates whether the query is removed. |  |  |
| `--snapshot [value]` | Indicates whether the query is a snapshot. |  |  |
| `--kb-version <string>` | Uses the Osquery versions greater than or equal to the specified version string. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-delete-saved-query`

Delete a saved query

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-delete-saved-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-get-saved-query-details`

Get saved query details

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-get-saved-query-details.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-osquery-api osquery-update-saved-query`

Update a saved query

[JSON Schema](./schemas/elastic-stack-kb-security-osquery-api-osquery-update-saved-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The id parameter (required) |  |  |
| `--description <string>` | The saved query description. |  |  |
| `--ecs-mapping <json>` | Map osquery results columns or static values to Elastic Common Schema (ECS) fields |  |  |
| `--body-id <string>` | The ID of a saved query. |  |  |
| `--interval <string>` | An interval, in seconds, on which to run the query. |  |  |
| `--platform <string>` | Restricts the query to a specified platform. The default is all platforms. To specify multiple platforms, use commas. For example, `linux,darwin`. |  |  |
| `--query <string>` | The SQL query you want to run. |  |  |
| `--removed [value]` | Indicates whether the query is removed. |  |  |
| `--snapshot [value]` | Indicates whether the query is a snapshot. |  |  |
| `--kb-version <string>` | Uses the Osquery versions greater than or equal to the specified version string. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb security-timeline-api`

Kibana security-timeline-api API commands

| Command | Description |
|---------|-------------|
| `delete-note` | Delete a note |
| `get-notes` | Get notes |
| `persist-note-route` | Add or update a note |
| `persist-pinned-event-route` | Pin/unpin an event |
| `delete-timelines` | Delete Timelines or Timeline templates |
| `get-timeline` | Get Timeline or Timeline template details |
| `patch-timeline` | Update a Timeline |
| `create-timelines` | Create a Timeline or Timeline template |
| `copy-timeline` | Copies timeline or timeline template |
| `get-draft-timelines` | Get draft Timeline or Timeline template details |
| `clean-draft-timelines` | Create a clean draft Timeline or Timeline template |
| `export-timelines` | Export Timelines |
| `persist-favorite-route` | Favorite a Timeline or Timeline template |
| `import-timelines` | Import Timelines |
| `install-prepacked-timelines` | Install prepackaged Timelines |
| `resolve-timeline` | Get an existing saved Timeline or Timeline template |
| `get-timelines` | Get Timelines or Timeline templates |

### `elastic stack kb security-timeline-api delete-note`

Delete a note

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api get-notes`

Get notes

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-get-notes.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--document-ids <string>` |  |  |  |
| `--saved-object-ids <string>` |  |  |  |
| `--page <string>` |  |  |  |
| `--per-page <string>` |  |  |  |
| `--search <string>` |  |  |  |
| `--sort-field <string>` |  |  |  |
| `--sort-order <string>` |  |  |  |
| `--filter <string>` |  |  |  |
| `--created-by-filter <string>` |  |  |  |
| `--associated-filter <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api persist-note-route`

Add or update a note

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-persist-note-route.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--note <string>` | (required) |  |  |
| `--note-id <string>` | The `savedObjectId` of the note |  |  |
| `--kb-version <string>` | The version of the note |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api persist-pinned-event-route`

Pin/unpin an event

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-persist-pinned-event-route.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--event-id <string>` | The `_id` of the associated event for this pinned event. (required) |  |  |
| `--pinned-event-id <string>` | The `savedObjectId` of the pinned event you want to unpin. |  |  |
| `--timeline-id <string>` | The `savedObjectId` of the timeline that you want this pinned event unpinned from. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api delete-timelines`

Delete Timelines or Timeline templates

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-delete-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--saved-object-ids <json>` | The list of IDs of the Timelines or Timeline templates to delete (required) |  |  |
| `--search-ids <json>` | Saved search IDs that should be deleted alongside the timelines |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api get-timeline`

Get Timeline or Timeline template details

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-get-timeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--template-timeline-id <string>` | The `savedObjectId` of the template timeline to retrieve |  |  |
| `--id <string>` | The `savedObjectId` of the Timeline to retrieve. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api patch-timeline`

Update a Timeline

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-patch-timeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--timeline <json>` | (required) |  |  |
| `--timeline-id <string>` | The `savedObjectId` of the Timeline or Timeline template that you’re updating. (required) |  |  |
| `--kb-version <string>` | The version of the Timeline or Timeline template that you’re updating. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api create-timelines`

Create a Timeline or Timeline template

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-create-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--status <string>` | The status of the Timeline. |  |  |
| `--template-timeline-id <string>` | A unique identifier for the Timeline template. |  |  |
| `--template-timeline-version <number>` | Timeline template version number. |  |  |
| `--timeline <json>` | (required) |  |  |
| `--timeline-id <string>` | A unique identifier for the Timeline. |  |  |
| `--timeline-type <string>` | The type of Timeline. |  |  |
| `--kb-version <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api copy-timeline`

Copies timeline or timeline template

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-copy-timeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--timeline <json>` | (required) |  |  |
| `--timeline-id-to-copy <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api get-draft-timelines`

Get draft Timeline or Timeline template details

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-get-draft-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--timeline-type <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api clean-draft-timelines`

Create a clean draft Timeline or Timeline template

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-clean-draft-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--timeline-type <string>` | The type of Timeline. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api export-timelines`

Export Timelines

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-export-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--file-name <string>` | The name of the file to export (required) |  |  |
| `--ids <json>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api persist-favorite-route`

Favorite a Timeline or Timeline template

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-persist-favorite-route.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--template-timeline-id <string>` | (required) |  |  |
| `--template-timeline-version <number>` | (required) |  |  |
| `--timeline-id <string>` | (required) |  |  |
| `--timeline-type <string>` | The type of Timeline. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api import-timelines`

Import Timelines

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-import-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--kb-file <string>` | (required) |  |  |
| `--is-immutable <string>` | Whether the Timeline should be immutable |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api install-prepacked-timelines`

Install prepackaged Timelines

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-install-prepacked-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--prepackaged-timelines <json>` | (required) |  |  |
| `--timelines-to-install <json>` | (required) |  |  |
| `--timelines-to-update <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api resolve-timeline`

Get an existing saved Timeline or Timeline template

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-resolve-timeline.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--template-timeline-id <string>` | The ID of the template timeline to resolve |  |  |
| `--id <string>` | The ID of the timeline to resolve |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb security-timeline-api get-timelines`

Get Timelines or Timeline templates

[JSON Schema](./schemas/elastic-stack-kb-security-timeline-api-get-timelines.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--only-user-favorite <string>` | If true, only timelines that are marked as favorites by the user are returned. |  |  |
| `--timeline-type <string>` |  |  |  |
| `--sort-field <string>` |  |  |  |
| `--sort-order <string>` | Whether to sort the results `ascending` or `descending` |  |  |
| `--page-size <string>` | How many results should returned at once |  |  |
| `--page-index <string>` | How many pages should be skipped |  |  |
| `--search <string>` | Allows to search for timelines by their title |  |  |
| `--status <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb slo`

Kibana slo API commands

| Command | Description |
|---------|-------------|
| `find-slos-op` | Get a paginated list of SLOs |
| `create-slo-op` | Create an SLO |
| `bulk-delete-op` | Bulk delete SLO definitions and their associated summary and rollup data. |
| `bulk-delete-status-op` | Retrieve the status of the bulk deletion |
| `delete-rollup-data-op` | Batch delete rollup and summary data |
| `delete-slo-instances-op` | Batch delete rollup and summary data |
| `delete-slo-op` | Delete an SLO |
| `get-slo-op` | Get an SLO |
| `update-slo-op` | Update an SLO |
| `reset-slo-op` | Reset an SLO |
| `disable-slo-op` | Disable an SLO |
| `enable-slo-op` | Enable an SLO |
| `get-definitions-op` | Get the SLO definitions |

### `elastic stack kb slo find-slos-op`

Get a paginated list of SLOs

[JSON Schema](./schemas/elastic-stack-kb-slo-find-slos-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--kql-query <string>` | A valid kql query to filter the SLO with |  |  |
| `--size <number>` | The page size to use for cursor-based pagination, must be greater or equal than 1 |  |  |
| `--search-after <string>` | The cursor to use for fetching the results from, when using a cursor-base pagination. |  |  |
| `--page <number>` | The page to use for pagination, must be greater or equal than 1 |  |  |
| `--per-page <number>` | Number of SLOs returned by page |  |  |
| `--sort-by <string>` | Sort by field |  |  |
| `--sort-direction <string>` | Sort order |  |  |
| `--hide-stale [value]` | Hide stale SLOs from the list as defined by stale SLO threshold in SLO settings |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo create-slo-op`

Create an SLO

[JSON Schema](./schemas/elastic-stack-kb-slo-create-slo-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--artifacts <json>` | Links to related assets for the SLO |  |  |
| `--budgeting-method <string>` | The budgeting method to use when computing the rollup data. (required) |  |  |
| `--description <string>` | A description for the SLO. (required) |  |  |
| `--group-by <string>` | optional group by field or fields to use to generate an SLO per distinct value |  |  |
| `--id <string>` | A optional and unique identifier for the SLO. Must be between 8 and 36 chars |  |  |
| `--indicator <string>` | (required) |  |  |
| `--name <string>` | A name for the SLO. (required) |  |  |
| `--objective <json>` | Defines properties for the SLO objective (required) |  |  |
| `--settings <json>` | Defines properties for SLO settings. |  |  |
| `--tags <json>` | List of tags |  |  |
| `--time-window <json>` | Defines properties for the SLO time window (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo bulk-delete-op`

Bulk delete SLO definitions and their associated summary and rollup data.

[JSON Schema](./schemas/elastic-stack-kb-slo-bulk-delete-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--list <json>` | An array of SLO Definition id (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo bulk-delete-status-op`

Retrieve the status of the bulk deletion

[JSON Schema](./schemas/elastic-stack-kb-slo-bulk-delete-status-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--task-id <string>` | The task id of the bulk delete operation (required) |  |  |
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo delete-rollup-data-op`

Batch delete rollup and summary data

[JSON Schema](./schemas/elastic-stack-kb-slo-delete-rollup-data-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--list <json>` | An array of slo ids (required) |  |  |
| `--purge-policy <json>` | Policy that dictates which SLI documents to purge based on age (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo delete-slo-instances-op`

Batch delete rollup and summary data

[JSON Schema](./schemas/elastic-stack-kb-slo-delete-slo-instances-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--list <json>` | An array of slo id and instance id (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo delete-slo-op`

Delete an SLO

[JSON Schema](./schemas/elastic-stack-kb-slo-delete-slo-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--slo-id <string>` | The sloId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo get-slo-op`

Get an SLO

[JSON Schema](./schemas/elastic-stack-kb-slo-get-slo-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--slo-id <string>` | The sloId parameter (required) |  |  |
| `--instance-id <string>` | the specific instanceId used by the summary calculation |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo update-slo-op`

Update an SLO

[JSON Schema](./schemas/elastic-stack-kb-slo-update-slo-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--slo-id <string>` | The sloId parameter (required) |  |  |
| `--artifacts <json>` | Links to related assets for the SLO |  |  |
| `--budgeting-method <string>` | The budgeting method to use when computing the rollup data. |  |  |
| `--description <string>` | A description for the SLO. |  |  |
| `--group-by <string>` | optional group by field or fields to use to generate an SLO per distinct value |  |  |
| `--indicator <string>` |  |  |  |
| `--name <string>` | A name for the SLO. |  |  |
| `--objective <json>` | Defines properties for the SLO objective |  |  |
| `--settings <json>` | Defines properties for SLO settings. |  |  |
| `--tags <json>` | List of tags |  |  |
| `--time-window <json>` | Defines properties for the SLO time window |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo reset-slo-op`

Reset an SLO

[JSON Schema](./schemas/elastic-stack-kb-slo-reset-slo-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--slo-id <string>` | The sloId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo disable-slo-op`

Disable an SLO

[JSON Schema](./schemas/elastic-stack-kb-slo-disable-slo-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--slo-id <string>` | The sloId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo enable-slo-op`

Enable an SLO

[JSON Schema](./schemas/elastic-stack-kb-slo-enable-slo-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--slo-id <string>` | The sloId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb slo get-definitions-op`

Get the SLO definitions

[JSON Schema](./schemas/elastic-stack-kb-slo-get-definitions-op.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--space-id <string>` | The spaceId parameter (required) |  |  |
| `--include-outdated-only [value]` | Indicates if the API returns only outdated SLO or all SLO definitions |  |  |
| `--include-health [value]` | Indicates if the API returns SLO health data with definitions |  |  |
| `--tags <string>` | Filters the SLOs by tag |  |  |
| `--search <string>` | Filters the SLOs by name |  |  |
| `--page <number>` | The page to use for pagination, must be greater or equal than 1 |  |  |
| `--per-page <number>` | Number of SLOs returned by page |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb spaces`

Kibana spaces API commands

| Command | Description |
|---------|-------------|
| `get-spaces-space` | Get all spaces |
| `post-spaces-space` | Create a space |
| `delete-spaces-space-id` | Delete a space |
| `get-spaces-space-id` | Get a space |
| `put-spaces-space-id` | Update a space |

### `elastic stack kb spaces get-spaces-space`

Get all spaces

[JSON Schema](./schemas/elastic-stack-kb-spaces-get-spaces-space.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--purpose <string>` | Specifies which authorization checks are applied to the API call. The default value is `any`. |  |  |
| `--include-authorized-purposes <string>` | When enabled, the API returns any spaces that the user is authorized to access in any capacity and each space will contain the purposes for which the user is authorized. This can be useful to determine which spaces a user can read but not take a specific action in. If the security plugin is not enabled, this parameter has no effect, since no authorization checks take place. This parameter cannot be used in with the `purpose` parameter. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb spaces post-spaces-space`

Create a space

[JSON Schema](./schemas/elastic-stack-kb-spaces-post-spaces-space.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--reserved [value]` |  |  |  |
| `--color <string>` | The hexadecimal color code used in the space avatar. By default, the color is automatically generated from the space name. |  |  |
| `--description <string>` | A description for the space. |  |  |
| `--disabled-features <json>` |  |  |  |
| `--id <string>` | The space ID that is part of the Kibana URL when inside the space. Space IDs are limited to lowercase alphanumeric, underscore, and hyphen characters (a-z, 0-9, _, and -). You are cannot change the ID with the update operation. (required) |  |  |
| `--image-url <string>` | The data-URL encoded image to display in the space avatar. If specified, initials will not be displayed and the color will be visible as the background color for transparent images. For best results, your image should be 64x64. Images will not be optimized by this API call, so care should be taken when using custom images. |  |  |
| `--initials <string>` | One or two characters that are shown in the space avatar. By default, the initials are automatically generated from the space name. |  |  |
| `--name <string>` | The display name for the space. (required) |  |  |
| `--project-routing <string>` | Cross-project search default routing configuration for this space. Controls whether searches are scoped to a single project or span multiple projects in serverless environments. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb spaces delete-spaces-space-id`

Delete a space

[JSON Schema](./schemas/elastic-stack-kb-spaces-delete-spaces-space-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The space identifier. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb spaces get-spaces-space-id`

Get a space

[JSON Schema](./schemas/elastic-stack-kb-spaces-get-spaces-space-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The space identifier. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb spaces put-spaces-space-id`

Update a space

[JSON Schema](./schemas/elastic-stack-kb-spaces-put-spaces-space-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | The space identifier. You are unable to change the ID with the update operation. (required) |  |  |
| `--reserved [value]` |  |  |  |
| `--color <string>` | The hexadecimal color code used in the space avatar. By default, the color is automatically generated from the space name. |  |  |
| `--description <string>` | A description for the space. |  |  |
| `--disabled-features <json>` |  |  |  |
| `--body-id <string>` | The space ID that is part of the Kibana URL when inside the space. Space IDs are limited to lowercase alphanumeric, underscore, and hyphen characters (a-z, 0-9, _, and -). You are cannot change the ID with the update operation. (required) |  |  |
| `--image-url <string>` | The data-URL encoded image to display in the space avatar. If specified, initials will not be displayed and the color will be visible as the background color for transparent images. For best results, your image should be 64x64. Images will not be optimized by this API call, so care should be taken when using custom images. |  |  |
| `--initials <string>` | One or two characters that are shown in the space avatar. By default, the initials are automatically generated from the space name. |  |  |
| `--name <string>` | The display name for the space. (required) |  |  |
| `--project-routing <string>` | Cross-project search default routing configuration for this space. Controls whether searches are scoped to a single project or span multiple projects in serverless environments. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb streams`

Kibana streams API commands

| Command | Description |
|---------|-------------|
| `get-streams` | Get stream list |
| `post-streams-disable` | Disable streams |
| `post-streams-enable` | Enable streams |
| `post-streams-resync` | Resync streams |
| `delete-streams-name` | Delete a stream |
| `get-streams-name` | Get a stream |
| `put-streams-name` | Create or update a stream |
| `post-streams-name-fork` | Fork a stream |
| `get-streams-name-ingest` | Get ingest stream settings |
| `put-streams-name-ingest` | Update ingest stream settings |
| `get-streams-name-query` | Get query stream settings |
| `put-streams-name-query` | Upsert query stream settings |
| `post-streams-name-content-export` | Export stream content |
| `post-streams-name-content-import` | Import content into a stream |
| `get-streams-name-queries` | Get stream queries |
| `post-streams-name-queries-bulk` | Bulk update queries |
| `delete-streams-name-queries-queryid` | Remove a query from a stream |
| `put-streams-name-queries-queryid` | Upsert a query to a stream |
| `get-streams-name-significant-events` | Read the significant events |
| `post-streams-name-significant-events-generate` | Generate significant events |
| `post-streams-name-significant-events-preview` | Preview significant events |
| `get-streams-streamname-attachments` | Get stream attachments |
| `post-streams-streamname-attachments-bulk` | Bulk update attachments |
| `delete-streams-streamname-attachments-attachmenttype-attachmentid` | Unlink an attachment from a stream |
| `put-streams-streamname-attachments-attachmenttype-attachmentid` | Link an attachment to a stream |

### `elastic stack kb streams get-streams`

Get stream list

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-disable`

Disable streams

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-enable`

Enable streams

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-resync`

Resync streams

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams delete-streams-name`

Delete a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-delete-streams-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams get-streams-name`

Get a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-get-streams-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams put-streams-name`

Create or update a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-put-streams-name.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-name-fork`

Fork a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-post-streams-name-fork.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--status <string>` |  |  |  |
| `--stream <json>` | (required) |  |  |
| `--where <string>` | The root condition object. It can be a simple filter or a combination of other conditions. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams get-streams-name-ingest`

Get ingest stream settings

[JSON Schema](./schemas/elastic-stack-kb-streams-get-streams-name-ingest.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams put-streams-name-ingest`

Update ingest stream settings

[JSON Schema](./schemas/elastic-stack-kb-streams-put-streams-name-ingest.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--ingest <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams get-streams-name-query`

Get query stream settings

[JSON Schema](./schemas/elastic-stack-kb-streams-get-streams-name-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams put-streams-name-query`

Upsert query stream settings

[JSON Schema](./schemas/elastic-stack-kb-streams-put-streams-name-query.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--field-descriptions <json>` |  |  |  |
| `--query <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-name-content-export`

Export stream content

[JSON Schema](./schemas/elastic-stack-kb-streams-post-streams-name-content-export.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--description <string>` | (required) |  |  |
| `--include <string>` | (required) |  |  |
| `--body-name <string>` | (required) |  |  |
| `--kb-version <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-name-content-import`

Import content into a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-post-streams-name-content-import.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams get-streams-name-queries`

Get stream queries

[JSON Schema](./schemas/elastic-stack-kb-streams-get-streams-name-queries.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-name-queries-bulk`

Bulk update queries

[JSON Schema](./schemas/elastic-stack-kb-streams-post-streams-name-queries-bulk.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--operations <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams delete-streams-name-queries-queryid`

Remove a query from a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-delete-streams-name-queries-queryid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--query-id <string>` | The queryId parameter (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams put-streams-name-queries-queryid`

Upsert a query to a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-put-streams-name-queries-queryid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--query-id <string>` | The queryId parameter (required) |  |  |
| `--description <string>` |  |  |  |
| `--esql <json>` | (required) |  |  |
| `--evidence <json>` |  |  |  |
| `--severity-score <number>` |  |  |  |
| `--title <string>` | A non-empty string. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams get-streams-name-significant-events`

Read the significant events

[JSON Schema](./schemas/elastic-stack-kb-streams-get-streams-name-significant-events.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--from <string>` | (required) |  |  |
| `--to <string>` | (required) |  |  |
| `--bucket-size <string>` | (required) |  |  |
| `--query <string>` | Query string to filter significant events on metadata fields |  |  |
| `--search-mode <string>` | Search mode: keyword (BM25), semantic (vector), or hybrid (RRF). Defaults to hybrid when inference is available. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-name-significant-events-generate`

Generate significant events

[JSON Schema](./schemas/elastic-stack-kb-streams-post-streams-name-significant-events-generate.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--connector-id <string>` | Optional connector ID. If not provided, the default AI connector from settings will be used. |  |  |
| `--from <string>` | (required) |  |  |
| `--to <string>` | (required) |  |  |
| `--sample-docs-size <number>` | Number of sample documents to use for generation from the current data of stream |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-name-significant-events-preview`

Preview significant events

[JSON Schema](./schemas/elastic-stack-kb-streams-post-streams-name-significant-events-preview.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--name <string>` | The name parameter (required) |  |  |
| `--from <string>` | (required) |  |  |
| `--to <string>` | (required) |  |  |
| `--bucket-size <string>` | (required) |  |  |
| `--query <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams get-streams-streamname-attachments`

Get stream attachments

[JSON Schema](./schemas/elastic-stack-kb-streams-get-streams-streamname-attachments.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--stream-name <string>` | The name of the stream (required) |  |  |
| `--query <string>` | Search query to filter attachments by title |  |  |
| `--attachment-types <string>` | Filter by attachment types (single value or array) |  |  |
| `--tags <string>` | Filter by tags (single value or array) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams post-streams-streamname-attachments-bulk`

Bulk update attachments

[JSON Schema](./schemas/elastic-stack-kb-streams-post-streams-streamname-attachments-bulk.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--stream-name <string>` | The name of the stream (required) |  |  |
| `--operations <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams delete-streams-streamname-attachments-attachmenttype-attachmentid`

Unlink an attachment from a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-delete-streams-streamname-attachments-attachmenttype-attachmentid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--stream-name <string>` | The name of the stream (required) |  |  |
| `--attachment-type <string>` | The type of the attachment (required) |  |  |
| `--attachment-id <string>` | The ID of the attachment (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb streams put-streams-streamname-attachments-attachmenttype-attachmentid`

Link an attachment to a stream

[JSON Schema](./schemas/elastic-stack-kb-streams-put-streams-streamname-attachments-attachmenttype-attachmentid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--stream-name <string>` | The name of the stream (required) |  |  |
| `--attachment-type <string>` | The type of the attachment (required) |  |  |
| `--attachment-id <string>` | The ID of the attachment (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb system`

Kibana system API commands

| Command | Description |
|---------|-------------|
| `get-status` | Get Kibana's current status |

### `elastic stack kb system get-status`

Get Kibana's current status

[JSON Schema](./schemas/elastic-stack-kb-system-get-status.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--v7format [value]` | Set to "true" to get the response in v7 format. |  |  |
| `--v8format [value]` | Set to "true" to get the response in v8 format. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb task-manager`

Kibana task-manager API commands

| Command | Description |
|---------|-------------|
| `task-manager-health` | Get the task manager health |

### `elastic stack kb task-manager task-manager-health`

Get the task manager health

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic stack kb workflows`

Kibana workflows API commands

| Command | Description |
|---------|-------------|
| `delete-workflows` | Bulk delete workflows |
| `get-workflows` | Get workflows |
| `post-workflows` | Bulk create workflows |
| `get-workflows-aggs` | Get workflow aggregations |
| `get-workflows-connectors` | Get available connectors |
| `get-workflows-executions-executionid` | Get a workflow execution |
| `post-workflows-executions-executionid-cancel` | Cancel a workflow execution |
| `get-workflows-executions-executionid-children` | Get child executions |
| `get-workflows-executions-executionid-logs` | Get execution logs |
| `post-workflows-executions-executionid-resume` | Resume a workflow execution |
| `get-workflows-executions-executionid-step-stepexecutionid` | Get a step execution |
| `post-workflows-export` | Export workflows |
| `post-workflows-mget` | Get workflows by IDs |
| `get-workflows-schema` | Get workflow JSON schema |
| `get-workflows-stats` | Get workflow statistics |
| `post-workflows-step-test` | Test a workflow step |
| `post-workflows-test` | Test a workflow |
| `post-workflows-workflow` | Create a workflow |
| `delete-workflows-workflow-id` | Delete a workflow |
| `get-workflows-workflow-id` | Get a workflow |
| `put-workflows-workflow-id` | Update a workflow |
| `post-workflows-workflow-id-clone` | Clone a workflow |
| `post-workflows-workflow-id-run` | Run a workflow |
| `get-workflows-workflow-workflowid-executions` | Get workflow executions |
| `get-workflows-workflow-workflowid-executions-steps` | Get workflow step executions |

### `elastic stack kb workflows delete-workflows`

Bulk delete workflows

[JSON Schema](./schemas/elastic-stack-kb-workflows-delete-workflows.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--force [value]` | When true, permanently deletes the workflows (hard delete) instead of soft-deleting them. The workflow IDs become available for reuse. |  |  |
| `--ids <json>` | Array of workflow IDs to delete. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows`

Get workflows

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--query <string>` | Free-text search query. |  |  |
| `--size <number>` | Number of results per page. |  |  |
| `--page <number>` | Page number. |  |  |
| `--enabled <string>` | Filter by enabled state. |  |  |
| `--created-by <string>` | Filter by creator. |  |  |
| `--tags <string>` | Filter by tags. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows`

Bulk create workflows

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--overwrite [value]` | Whether to overwrite existing workflows. |  |  |
| `--workflows <json>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-aggs`

Get workflow aggregations

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-aggs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--fields <string>` | Fields to aggregate on. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-connectors`

Get available connectors

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-executions-executionid`

Get a workflow execution

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-executions-executionid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-id <string>` | Workflow execution ID (required) |  |  |
| `--include-input [value]` | Include execution input data. |  |  |
| `--include-output [value]` | Include execution output data. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-executions-executionid-cancel`

Cancel a workflow execution

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-executions-executionid-cancel.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-id <string>` | Workflow execution ID (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-executions-executionid-children`

Get child executions

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-executions-executionid-children.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-id <string>` | Workflow execution ID (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-executions-executionid-logs`

Get execution logs

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-executions-executionid-logs.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-id <string>` | Workflow execution ID (required) |  |  |
| `--step-execution-id <string>` | Filter logs by a specific step execution ID. |  |  |
| `--size <number>` | Number of log entries per page. |  |  |
| `--page <number>` | Page number. |  |  |
| `--sort-field <string>` | Field to sort by. |  |  |
| `--sort-order <string>` | Sort order. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-executions-executionid-resume`

Resume a workflow execution

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-executions-executionid-resume.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-id <string>` | Workflow execution ID (required) |  |  |
| `--input <json>` | Input data to resume the execution with. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-executions-executionid-step-stepexecutionid`

Get a step execution

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-executions-executionid-step-stepexecutionid.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--execution-id <string>` | Workflow execution ID. (required) |  |  |
| `--step-execution-id <string>` | Step execution ID. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-export`

Export workflows

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-export.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ids <json>` | Array of workflow IDs to export. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-mget`

Get workflows by IDs

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-mget.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--ids <json>` | Array of workflow IDs to look up. (required) |  |  |
| `--source <json>` | Array of source fields to include. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-schema`

Get workflow JSON schema

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-schema.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--loose [value]` | When true, returns a permissive schema that allows additional properties. When false, returns a strict schema for full validation. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-stats`

Get workflow statistics

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-step-test`

Test a workflow step

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-step-test.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--context-override <json>` | Context overrides for the step execution. (required) |  |  |
| `--execution-context <json>` | Execution context for the step execution. |  |  |
| `--step-id <string>` | ID of the step to test. (required) |  |  |
| `--workflow-id <string>` | ID of the workflow containing the step. |  |  |
| `--workflow-yaml <string>` | YAML definition of the workflow containing the step. (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-test`

Test a workflow

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-test.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--inputs <json>` | Key-value inputs for the test execution. (required) |  |  |
| `--workflow-id <string>` | ID of an existing workflow to test. |  |  |
| `--workflow-yaml <string>` | YAML definition to test. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-workflow`

Create a workflow

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-workflow.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` |  |  |  |
| `--yaml <string>` | (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows delete-workflows-workflow-id`

Delete a workflow

[JSON Schema](./schemas/elastic-stack-kb-workflows-delete-workflows-workflow-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Workflow ID (required) |  |  |
| `--force [value]` | When true, permanently deletes the workflow (hard delete) instead of soft-deleting it. The workflow ID becomes available for reuse. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-workflow-id`

Get a workflow

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-workflow-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Workflow ID (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows put-workflows-workflow-id`

Update a workflow

[JSON Schema](./schemas/elastic-stack-kb-workflows-put-workflows-workflow-id.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Workflow ID (required) |  |  |
| `--description <string>` |  |  |  |
| `--enabled [value]` |  |  |  |
| `--name <string>` |  |  |  |
| `--tags <json>` |  |  |  |
| `--yaml <string>` |  |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-workflow-id-clone`

Clone a workflow

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-workflow-id-clone.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Workflow ID (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows post-workflows-workflow-id-run`

Run a workflow

[JSON Schema](./schemas/elastic-stack-kb-workflows-post-workflows-workflow-id-run.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--id <string>` | Workflow ID (required) |  |  |
| `--inputs <json>` | Key-value inputs for the workflow execution. (required) |  |  |
| `--metadata <json>` | Optional metadata for the execution. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-workflow-workflowid-executions`

Get workflow executions

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-workflow-workflowid-executions.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--workflow-id <string>` | Workflow ID (required) |  |  |
| `--statuses <string>` | Filter by execution status. |  |  |
| `--execution-types <string>` | Filter by execution type. |  |  |
| `--executed-by <string>` | Filter by the user who triggered the execution. |  |  |
| `--omit-step-runs [value]` | Whether to exclude step-level execution data. |  |  |
| `--page <number>` | Page number. |  |  |
| `--size <number>` | Number of results per page. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |

### `elastic stack kb workflows get-workflows-workflow-workflowid-executions-steps`

Get workflow step executions

[JSON Schema](./schemas/elastic-stack-kb-workflows-get-workflows-workflow-workflowid-executions-steps.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--workflow-id <string>` | Workflow ID (required) |  |  |
| `--step-id <string>` | Filter by step ID. |  |  |
| `--include-input [value]` | Include step input data. |  |  |
| `--include-output [value]` | Include step output data. |  |  |
| `--page <number>` | Page number for pagination. |  |  |
| `--size <number>` | Number of results per page. |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---
