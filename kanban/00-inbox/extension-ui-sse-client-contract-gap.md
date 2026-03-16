---
id: extension-ui-sse-client-contract-gap
title: Audit and resolve extension UI SSE client contract gap
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: next
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - web
  - sse
  - extensions
  - ui
  - audit
owner: pi
---

# Audit and resolve extension UI SSE client contract gap

## Summary

The web server still emits a full `extension_ui_*` SSE family from
`piclaw/src/channels/web/ui-bridge.ts`, and server-side tests verify those
emissions.

However, the main web SSE client (`piclaw/web/src/api.ts`) does not currently
register listeners for those events, and the main app shell does not appear to
consume them.

This may be intentional latent groundwork for richer extension UI, but the API/
SSE audit has now surfaced it as an explicit contract gap that should be
resolved deliberately rather than left implicit.

## Why

Right now the contract is ambiguous:

- the server advertises/emits `extension_ui_*`
- the SSE transport treats them as real chat-scoped events
- tests cover their emission on the server side
- the main web client does not currently subscribe to them

That leaves three possibilities:

1. the client integration is missing,
2. the server-side emissions are dormant groundwork and should be documented as
   such, or
3. the contract should be narrowed and some emitted events removed.

## Acceptance Criteria

- [ ] Confirm whether the current web product surface is supposed to support `extension_ui_*`
- [x] Inventory all emitted `extension_ui_*` events and intended frontend behavior
- [x] Wire the events into the main web client at least as a browser-event bridge
- [ ] Decide whether that bridge is sufficient or whether a richer first-class extension-UI surface is required
- [ ] Remove any dead event names if they are not part of the intended product surface
- [x] Add/adjust tests to match the decided contract

## Relevant Areas

- `piclaw/piclaw/src/channels/web/ui-bridge.ts`
- `piclaw/piclaw/src/channels/web/sse.ts`
- `piclaw/piclaw/web/src/api.ts`
- `piclaw/piclaw/web/src/app.ts`
- `piclaw/piclaw/test/channels/web/ui-context.test.ts`
- `piclaw/piclaw/test/channels/web/web-sse-client.test.ts`
- `piclaw/piclaw/docs/web-sse-inventory.md`

## Updates

### 2026-03-16
- Created from the active API/SSE audit after confirming:
  - server emits `extension_ui_request`, `extension_ui_timeout`, `extension_ui_notify`, `extension_ui_status`, `extension_ui_working`, `extension_ui_widget`, `extension_ui_title`, `extension_ui_editor_text`, and `extension_ui_error`
  - the previous main web SSE client did not register listeners for those names
  - the main app shell did not previously consume them directly
- Follow-up slice landed in source:
  - `web/src/api.ts` now subscribes to the full `extension_ui_*` family
  - `web/src/app.ts` now bridges those events into browser events
  - `extension_ui_notify` and `extension_ui_error` now surface lightweight intent toasts
  - tests added in `test/web/extension-ui-events.test.ts` and `test/channels/web/web-sse-client.test.ts`
- Remaining question: whether the browser-event bridge is the intended long-term UI surface or merely the first compatibility step toward richer extension UI.

## Links

- `piclaw/kanban/20-doing/api-sse-naming-consistency-security-audit.md`
- `piclaw/piclaw/docs/web-sse-inventory.md`
