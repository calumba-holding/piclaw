---
id: api-sse-naming-consistency-security-audit
title: Audit API endpoints and SSE events for naming, consistency, formats, and security
status: done
priority: medium
created: 2026-03-14
updated: 2026-03-16
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - api
  - sse
  - naming
  - security
  - audit
owner: pi
---

# Audit API endpoints and SSE events for naming, consistency, formats, and security

## Summary

Perform a structured audit of all HTTP API endpoints and SSE event types
exposed by PiClaw's web channel. The audit should cover naming conventions,
payload consistency, response format standardization, and security posture.

This is the API-surface counterpart to the internal-tools naming audit that was
just completed. The internal tools are now verb-first and consistent; the HTTP
endpoints and SSE events should receive the same treatment.

## Why

The web channel has grown organically across many features (agent, workspace,
media, auth, shell, terminal, theme). As a result:

- endpoint path naming may not follow a single consistent convention
- SSE event names may mix different naming styles
- response payload shapes may vary across similar operations
- some endpoints may lack proper auth checks, rate limiting, or input
  validation
- error response formats may be inconsistent across dispatch modules
- the security review scope has expanded with terminal, shell, and workspace
  file write endpoints

A single structured pass would surface these issues and produce concrete
fixes or follow-up tickets.

## Scope

### In scope

#### 1) API endpoint naming
- Inventory all HTTP routes across dispatch modules:
  - `dispatch-agent.ts`
  - `dispatch-auth.ts`
  - `dispatch-content.ts`
  - `dispatch-media.ts`
  - `dispatch-shell.ts`
  - `dispatch-workspace.ts`
  - static/terminal routes
- Check for consistent path conventions:
  - noun vs verb in paths
  - plural vs singular resources
  - kebab-case vs camelCase vs snake_case
  - nesting depth consistency
- Check HTTP method usage (GET for reads, POST for mutations, etc.)

#### 2) SSE event naming
- Inventory all SSE event types emitted to clients
- Check for consistent naming convention across:
  - agent status events
  - timeline/post events
  - workspace events
  - theme events
  - queue/steering events
- Check whether event payloads follow a standard shape or vary per event

#### 3) Response format consistency
- Check whether success responses use a consistent envelope (or not)
- Check whether error responses use a consistent shape
- Check content-type headers
- Check whether JSON responses are consistently structured

#### 4) Security posture
- Verify auth checks on all mutation endpoints
- Verify auth checks on sensitive read endpoints (keychain, workspace files,
  terminal, shell)
- Check rate limiting coverage
- Check input validation / request guard coverage
- Check CSP, CORS, and origin validation for all endpoint families
- Flag any endpoints that should be auth-gated but are not
- Review terminal and shell endpoints specifically for escalation risk

### Out of scope
- Rewriting the entire HTTP layer
- Changing the SSE transport mechanism
- Adding OpenAPI/Swagger spec generation (could be a follow-up)
- Full penetration testing

## Acceptance Criteria

- [x] Full inventory of HTTP endpoints with method, path, auth requirement, and
      dispatch module
- [x] Full inventory of SSE event types with payload shape summary
- [x] Naming inconsistencies identified and categorized
- [x] Response format inconsistencies identified
- [x] Security gaps identified (missing auth, missing rate limit, missing
      validation)
- [x] Concrete renames or fixes implemented for the clearest issues
- [x] Follow-up tickets created for larger structural changes if needed
- [x] No regressions — existing tests pass after any changes

## Investigation Questions

- Is there a dominant path naming convention already, or is it truly mixed?
- Are SSE events namespaced by domain (agent/workspace/theme) or flat?
- Do error responses currently follow any common shape?
- Which endpoints were added most recently and may have skipped review?
- Are terminal and shell endpoints adequately isolated from the rest of the
  API surface?
- Is the rate-limit rule set complete for all write/mutation endpoints?

## Proposed Work Plan

1. **Inventory pass** — enumerate all routes and SSE events with metadata
2. **Naming analysis** — identify convention(s) and inconsistencies
3. **Security scan** — check auth/rate-limit/validation coverage per endpoint
4. **Fix pass** — implement concrete renames, add missing guards
5. **Follow-up tickets** — capture anything too large for this ticket

## Test Plan

- [x] Existing endpoint tests continue to pass after any renames
- [x] Add/extend tests for any newly identified security gaps
- [x] Run `cd /workspace/piclaw/piclaw && bun run quality`

## Definition of Done

- [x] Endpoint and SSE inventory documented
- [x] Naming convention defined and major inconsistencies resolved
- [x] Security gaps identified and either fixed or tracked
- [x] Response format inconsistencies documented and either fixed or tracked
- [x] `bun run quality` passes

## Relevant Areas

- `piclaw/piclaw/src/channels/web/http/dispatch-agent.ts`
- `piclaw/piclaw/src/channels/web/http/dispatch-auth.ts`
- `piclaw/piclaw/src/channels/web/http/dispatch-content.ts`
- `piclaw/piclaw/src/channels/web/http/dispatch-media.ts`
- `piclaw/piclaw/src/channels/web/http/dispatch-shell.ts`
- `piclaw/piclaw/src/channels/web/http/dispatch-workspace.ts`
- `piclaw/piclaw/src/channels/web/http/security.ts`
- `piclaw/piclaw/src/channels/web/http/rate-limit-rules.ts`
- `piclaw/piclaw/src/channels/web/http/request-guards.ts`
- `piclaw/piclaw/src/channels/web/http/static.ts`
- `piclaw/piclaw/src/channels/web/agent-events.ts`
- `piclaw/piclaw/src/channels/web/web-channel-contracts.ts`
- `piclaw/piclaw/src/channels/web/terminal/terminal-session-service.ts`

## Updates

### 2026-03-16
- Continued the concrete hardening pass instead of leaving the audit at inventory-only status.
- Found a second explicit rate-limit coverage gap: authenticated mutating routes `PATCH /post/:id`, `POST /workspace/attach`, and `POST /workspace/visibility` were subject to auth/CSRF but still had no dedicated data-bucket classification.
- Added explicit route-to-bucket mappings in `piclaw/src/channels/web/http/rate-limit-rules.ts`:
  - `data/post_update`
  - `data/workspace_attach`
  - `data/workspace_ui`
- Extended route-classification coverage in `piclaw/test/channels/web/http-route-classification.test.ts` for those endpoints.
- Validation evidence:
  - `bun test --max-concurrency=1 test/channels/web/http-route-classification.test.ts test/channels/web/security-hardening.test.ts test/channels/web/http-dispatch-workspace.test.ts test/channels/web/ui-endpoints.test.ts`
  - `bun run quality` → passed
- Added a concrete SSE inventory artefact at `piclaw/piclaw/docs/web-sse-inventory.md`, covering:
  - currently emitted server events
  - current client listener registrations
  - scope classification (chat-scoped vs global)
  - first naming/payload observations
- Used that inventory to land another concrete contract cleanup:
  - removed stale client SSE listeners for `agent_request` and `agent_request_timeout`
  - removed those obsolete names from the chat-scoped SSE contract set in `src/channels/web/sse.ts`
  - added regression coverage in `test/channels/web/web-sse-client.test.ts`
- Added a full HTTP route inventory artefact at `piclaw/piclaw/docs/web-api-endpoint-inventory.md`, covering:
  - main web-router route families
  - auth / CSRF / rate-limit posture per endpoint family
  - remote-interop as a separate pre-router security domain
  - current response-style and naming observations
- That endpoint inventory surfaced/documented the next likely structural follow-ups:
  - response envelopes are lightweight but not formally standardised
  - `extension_ui_*` SSE is a likely end-to-end contract gap to audit next
- Landed another compatibility-preserving naming cleanup from that inventory:
  - added preferred `POST /post/reply`
  - kept legacy `POST /reply` working
  - switched the web client to use `/post/reply`
  - extended rate-limit and dispatch coverage in tests
  - added browser-side API helper regression coverage in `test/web/api-routing.test.ts`
- Landed one compatibility-preserving naming cleanup from that inventory:
  - added preferred `GET /agent/roster`
  - kept legacy `GET /agents` working
  - switched the web client to use `/agent/roster`
  - added regression coverage in `test/channels/web/http-dispatch-agent.test.ts`
- Added test-backed route-inventory coverage in `piclaw/test/channels/web/http-route-classification.test.ts` so every currently known mutating web route is explicitly classified as one of:
  - data-rate-limited
  - auth-rate-limited
  - enrol-rate-limited
  - internal-secret-only
  - deprecated no-op exception
- Focused validation passed:
  - `bun test --max-concurrency=1 test/channels/web/http-route-classification.test.ts test/channels/web/security-hardening.test.ts test/channels/web/http-dispatch-workspace.test.ts test/channels/web/ui-endpoints.test.ts`
- Deepened the SSE artefact by documenting `agent_status` subtypes (`tool_call`, `tool_status`, `intent`, `error`) in `piclaw/piclaw/docs/web-sse-inventory.md`.
- Confirmed and documented another concrete contract gap:
  - server emits a full `extension_ui_*` SSE family
  - the main web SSE client did not previously register listeners for that family
- Captured that as an explicit follow-up ticket:
  - `piclaw/workitems/00-inbox/extension-ui-sse-client-contract-gap.md`
- Then landed a first concrete resolution slice:
  - `web/src/api.ts` now subscribes to the full `extension_ui_*` SSE family
  - `web/src/app.ts` bridges those events into browser events for downstream UI consumers
  - `extension_ui_notify` and `extension_ui_error` now surface lightweight intent toasts
  - tests added in `test/web/extension-ui-events.test.ts`
- Landed the first concrete response-format consistency slice:
  - added shared `okJson(...)` and `errorJson(...)` helpers in `src/channels/web/http/http-utils.ts`
  - exposed matching `ok(...)` / `error(...)` helpers from `ResponseService`
  - switched `src/channels/web/ui-endpoints.ts` and `src/channels/web/handlers/workspace.ts` to use the shared helpers for lightweight success/error envelopes
  - extended regression coverage in `test/channels/web/web-utils.test.ts` and `test/channels/web/web-response-service.test.ts`
- Extended the response-format consistency slice into older post mutation helpers:
  - `PATCH /post/:id`
  - `POST /internal/post`
- Those endpoints now return compatibility-preserving envelopes of the form:
  - `{ status: "ok", ok: true, id }`
  so older callers still see `ok: true` while the newer lightweight status convention is also present.
- Updated regression coverage in `test/channels/web/post-mutations.test.ts` and documented the compatibility category in `docs/web-api-endpoint-inventory.md`.
- Extended the response-shape policy into more authenticated agent mutation endpoints:
  - queue remove / queue steer
  - branch fork / rename / prune
  - peer relay
- Those success responses now include `status: "ok"` while preserving their pre-existing rich payload fields.
- Updated regression coverage in `test/channels/web/web-channel.test.ts` and documented the emerging response-shape policy in `docs/web-api-endpoint-inventory.md`.
- Final consolidation pass split the remaining structural questions into explicit follow-up tickets:
  - `piclaw/workitems/50-done/decide-legacy-web-api-compatibility-route-retirement.md`
  - `piclaw/workitems/50-done/formalize-web-api-response-envelope-policy.md`
  - `piclaw/workitems/50-done/clarify-agent-response-sse-contract.md`
  - `piclaw/workitems/00-inbox/extension-ui-sse-client-contract-gap.md`
- With those remaining structural questions extracted, the main audit umbrella is now considered complete enough to move to review.
- Review focus was:
  - inventory artefacts are accurate enough
  - the landed naming/response/security slices are coherent together
  - the remaining work has been cleanly split into separate follow-up tickets instead of being left implicit
- Review conclusion:
  - accepted as complete for the audit umbrella
  - remaining work is explicitly split into follow-up tickets rather than kept open here
  - ticket is ready to move to done

### 2026-03-15
- Lane change: `00-inbox` → `20-doing` to start the API/SSE audit as the next unblocked follow-on after the post-release audit and shell lifecycle refactor were committed.
- Initial route inventory pass confirmed that the dominant API naming style is resource-ish path families (`/agent/*`, `/workspace/*`, `/media/*`, `/auth/*`) with kebab-case sub-actions for non-CRUD mutations (`branch-fork`, `queue-steer`, `side-prompt`).
- Initial SSE audit pass confirmed event names are flat but strongly domain-prefixed (`agent_*`, `workspace_*`, `extension_ui_*`, `ui_theme`, timeline events like `new_post` / `new_reply`).
- Found a concrete security/rate-limit coverage gap: mutating `POST /agent/thought/visibility`, `POST /agent/respond`, `POST /agent/card-action`, `POST /agent/side-prompt`, and `POST /agent/side-prompt/stream` existed in dispatch but were not covered by explicit data buckets in `src/channels/web/http/rate-limit-rules.ts`.
- Implemented explicit buckets:
  - `data/agent_ui` for thought visibility, agent responses, and adaptive-card actions
  - `data/agent_side_prompt` for side-prompt start/stream requests
- Added route-classification regression coverage in `piclaw/test/channels/web/http-route-classification.test.ts`.
- Validation evidence:
  - `bun test --max-concurrency=1 test/channels/web/http-route-classification.test.ts test/channels/web/security-hardening.test.ts` → passed
  - `bun run quality` → passed
- Next step remains the fuller inventory/documentation pass for endpoint and SSE payload naming consistency.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 1, test: 2, deps: 2, risk: 1)

### 2026-03-14
- Created from user request to audit API endpoints and SSE events for naming,
  consistency, formats, and security.
- Scoped as a structured audit with concrete fixes, not just a report.

## Links

- `piclaw/workitems/50-done/internal-tools-naming-consistency-audit.md`
- `piclaw/workitems/10-next/audit-proxy-sensitive-web-flows.md`
