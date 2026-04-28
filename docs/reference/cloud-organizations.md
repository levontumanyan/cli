# organizations

Cloud organizations commands

## `elastic cloud organizations list-organizations`

List organizations

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations get-organization-invitation`

Get organization invitation

[JSON Schema](./schemas/elastic-cloud-organizations-get-organization-invitation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--invitation-token <string>` | Organization invitation token (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations accept-organization-invitation`

Accept an organization invitation

[JSON Schema](./schemas/elastic-cloud-organizations-accept-organization-invitation.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--invitation-token <string>` | Organization invitation token (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations get-organization`

Fetch organization information

[JSON Schema](./schemas/elastic-cloud-organizations-get-organization.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations update-organization`

Update organization

[JSON Schema](./schemas/elastic-cloud-organizations-update-organization.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations domain-claim-get-domain-claims`

Get domain claims

[JSON Schema](./schemas/elastic-cloud-organizations-domain-claim-get-domain-claims.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations domain-claim-delete`

Delete domain claim

[JSON Schema](./schemas/elastic-cloud-organizations-domain-claim-delete.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations domain-claim-generate-verification-code`

Generate verification code

[JSON Schema](./schemas/elastic-cloud-organizations-domain-claim-generate-verification-code.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations domain-claim-verify-domain`

Verify domain claim

[JSON Schema](./schemas/elastic-cloud-organizations-domain-claim-verify-domain.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations get-organization-idp`

Get organization IdP

[JSON Schema](./schemas/elastic-cloud-organizations-get-organization-idp.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations setup-organization-idp`

Setup organization IdP

[JSON Schema](./schemas/elastic-cloud-organizations-setup-organization-idp.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations teardown-organization-idp`

Tear down organization IdP

[JSON Schema](./schemas/elastic-cloud-organizations-teardown-organization-idp.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations get-organization-idp-metadata`

Get organization service provider SAML2 metadata.xml for configuring the identity provider

[JSON Schema](./schemas/elastic-cloud-organizations-get-organization-idp-metadata.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations list-organization-invitations`

List organization invitations

[JSON Schema](./schemas/elastic-cloud-organizations-list-organization-invitations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations create-organization-invitations`

Create organization invitations

[JSON Schema](./schemas/elastic-cloud-organizations-create-organization-invitations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations delete-organization-invitations`

Delete organization invitations

[JSON Schema](./schemas/elastic-cloud-organizations-delete-organization-invitations.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--invitation-tokens <string>` | CSV list of Invitation tokens (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations list-organization-members`

List organization members

[JSON Schema](./schemas/elastic-cloud-organizations-list-organization-members.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations delete-organization-memberships`

Delete organization memberships

[JSON Schema](./schemas/elastic-cloud-organizations-delete-organization-memberships.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--user-ids <string>` | CSV list of User identifiers (required) |  |  |
| `--force [value]` | Whether or not to force the removal of Org memberships (effective only for Platform Admins) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations get-role-mappings`

Get role mappings

[JSON Schema](./schemas/elastic-cloud-organizations-get-role-mappings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations update-role-mappings`

Updates role mappings

[JSON Schema](./schemas/elastic-cloud-organizations-update-role-mappings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---

## `elastic cloud organizations delete-role-mappings`

Delete role mappings

[JSON Schema](./schemas/elastic-cloud-organizations-delete-role-mappings.json)

| Flag | Description | Required | Default |
|------|-------------|----------|---------|
| `--organization-id <string>` | Identifier for the Organization (required) |  |  |
| `--input-file <path>` | path to a JSON file to use as command input |  |  |
| `--dry-run` | validate all inputs and exit without performing any action |  |  |


---
