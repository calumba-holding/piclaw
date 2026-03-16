# Web SSE event inventory

_Last updated: 2026-03-16_

This document inventories the current Server-Sent Events used by the PiClaw web client, based on the current TypeScript server sources and the web client listener registrations.

## Conventions observed

### Naming
Current SSE naming is mostly flat but domain-prefixed:

- `agent_*` — live run state, queue state, model state
- `extension_ui_*` — extension/UI bridge prompts and status
- `workspace_*` — workspace watcher updates
- timeline-style events — `new_post`, `new_reply`, `interaction_updated`, `interaction_deleted`
- UI/theme singleton — `ui_theme`
- transport/system — `connected`

This is reasonably consistent already: underscore_case, mostly domain-prefixed, with timeline events using short noun phrases.

### Delivery scope
The transport currently distinguishes between:

- **chat-scoped events** — must carry `chat_jid`, or the server drops them
- **global events** — may be broadcast without `chat_jid`

Current practical global events:
- `connected`
- `workspace_update`

Everything else in active use is effectively chat-scoped.

## Server-emitted SSE events

| Event | Scope | Primary source(s) | Payload shape summary | Notes |
|---|---|---|---|---|
| `connected` | global or subscriber-scoped | `src/channels/web/sse.ts` | `{}` or `{ chat_jid }` | Transport-level handshake event when the SSE stream opens. |
| `new_post` | chat-scoped | `src/channels/web/posts-service.ts`, `src/channels/web/handlers/agent.ts` | `InteractionRow` | Broadcast for newly created timeline/root user posts. |
| `new_reply` | chat-scoped | `src/channels/web/posts-service.ts` | `InteractionRow` | Emitted via the same post-storage flow as `new_post`. |
| `interaction_updated` | chat-scoped | `src/channels/web/interaction-service.ts`, `src/channels/web/link-previews.ts` | `InteractionRow` (often profile-decorated) | Used for edits / link-preview enrichment / interaction refreshes. |
| `interaction_deleted` | chat-scoped | `src/channels/web.ts` | `{ chat_jid, ids: number[] }` | Broadcast after delete operations. |
| `agent_response` | chat-scoped | `src/channels/web/agent-events.ts`, `src/channels/web/interaction-service.ts`, `src/channels/web/handlers/agent.ts` | assistant interaction row or profile-decorated interaction payload | This name is overloaded slightly: both streamed live-response publication and completed interaction broadcasts use it. |
| `agent_status` | chat-scoped | `src/channels/web/agent-events.ts`, `src/channels/web/handlers/agent.ts` | `{ chat_jid, thread_id, agent_id, turn_id, type, ... }` plus profile fields | Used for intent/tool/error/compaction/retry status. This is the main live status channel. See subtype table below. |
| `agent_thought` | chat-scoped | `src/channels/web/agent-events.ts` | `{ chat_jid, thread_id, agent_id, turn_id, text, total_lines, ...profile }` | Preview/summary thought payload. |
| `agent_thought_delta` | chat-scoped | `src/channels/web/agent-events.ts` | `{ chat_jid, thread_id, agent_id, turn_id, delta, reset?, ...profile }` | Full-fidelity thought stream when enabled. |
| `agent_draft` | chat-scoped | `src/channels/web/agent-events.ts` | `{ chat_jid, thread_id, agent_id, turn_id, text, total_lines, kind, mode, ...profile }` | Preview/summary draft payload. |
| `agent_draft_delta` | chat-scoped | `src/channels/web/agent-events.ts` | `{ chat_jid, thread_id, agent_id, turn_id, delta, reset?, ...profile }` | Full-fidelity draft stream when enabled. |
| `agent_steer_queued` | chat-scoped | `src/channels/web/handlers/agent.ts`, `src/channels/web.ts` | `{ chat_jid, thread_id, source?, timestamp?, content? }` | Emitted when a steering action is queued instead of executed immediately. |
| `agent_followup_queued` | chat-scoped | `src/channels/web/handlers/agent.ts` | `{ chat_jid, thread_id, row_id, content, timestamp }` | Emitted when a follow-up is deferred/queued. |
| `agent_followup_consumed` | chat-scoped | `src/channels/web/handlers/agent.ts` | `{ chat_jid, thread_id, row_id }` plus related context | Used when queued follow-up work is consumed. |
| `agent_followup_removed` | chat-scoped | `src/channels/web.ts` | `{ chat_jid, row_id, thread_id }` | Used for queue removal / queue-to-steer conversion cleanup. |
| `model_changed` | chat-scoped | `src/channels/web/handlers/agent.ts` | `{ chat_jid, model, thinking_level, supports_thinking }` | Immediate compose/status indicator refresh after model/thinking commands. |
| `ui_theme` | chat-scoped | `src/channels/web/handlers/agent.ts`, `src/channels/web/ui-bridge.ts` | `{ chat_jid, theme, tint? }` | Used both for slash-command theme changes and extension-UI-driven theme changes. |
| `workspace_update` | global | `src/channels/web/handlers/workspace.ts` | `{ updates }` | Filesystem watcher event; intentionally remains global rather than chat-scoped. |
| `extension_ui_request` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ request_id, kind, chat_jid, ...payload }` | Main prompt/request event for extension UI interactions. |
| `extension_ui_timeout` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ request_id, kind, chat_jid }` | Emitted when an extension UI request times out. |
| `extension_ui_notify` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ chat_jid, message, type }` | Non-blocking notification from extension UI. |
| `extension_ui_status` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ chat_jid, key, text }` | Status-line style extension UI updates. |
| `extension_ui_working` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ chat_jid, message }` | Working/progress message from extension UI. |
| `extension_ui_widget` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ chat_jid, key, content, options }` | Structured widget content for extension UI. |
| `extension_ui_title` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ chat_jid, title }` | Extension UI title changes. |
| `extension_ui_editor_text` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ chat_jid, text }` | Extension-driven editor text injection/replacement. |
| `extension_ui_error` | chat-scoped | `src/channels/web/ui-bridge.ts` | `{ chat_jid, error }` | Error surfaced from extension UI bridge/bound session. |

## Client listeners currently registered

The web SSE client currently listens for:

- `connected`
- `new_post`
- `new_reply`
- `agent_response`
- `interaction_updated`
- `interaction_deleted`
- `agent_status`
- `agent_steer_queued`
- `agent_followup_queued`
- `agent_followup_consumed`
- `agent_followup_removed`
- `workspace_update`
- `agent_draft`
- `agent_draft_delta`
- `agent_thought`
- `agent_thought_delta`
- `model_changed`
- `ui_theme`

Source: `web/src/api.ts`

## `agent_status` subtype inventory

`agent_status` is the only major SSE event family whose payload meaning varies
substantially by subtype.

| `type` | Typical extra fields | Emitted from | Meaning |
|---|---|---|---|
| `tool_call` | `title` | `agent-events.ts` | A tool call started or was recognised from a tool-related session event. |
| `tool_status` | `title`, `status` | `agent-events.ts` | Tool execution progress/completion (`Working...`, `Done`, `Failed`). |
| `intent` | `title`, `detail?`, `intent_key?`, `started_at?` | `agent-events.ts`, web handlers | User-facing turn state such as retrying, compacting, auto-compaction cancellation, queued steering, etc. |
| `error` | `title` | `agent-events.ts`, web handlers | User-visible terminal or near-terminal error state. |

Common base fields remain:

- `chat_jid`
- `thread_id`
- `agent_id`
- `turn_id`
- profile decoration such as `agent_name`, `agent_avatar`, `user_name`, `user_avatar`, `user_avatar_background`

## Audit findings so far

### 1) Stale listener cleanup identified and resolved
The audit initially found stale client listeners for:

- `agent_request`
- `agent_request_timeout`

Current TypeScript server-source inventory did **not** find live `broadcastEvent("agent_request", ...)` or `broadcastEvent("agent_request_timeout", ...)` emitters in the active web-channel code, and the client-side SSE registrations for those names were therefore removed as dead contract drift.

The corresponding obsolete chat-scoped SSE names were also removed from `src/channels/web/sse.ts`.

### 2) `agent_response` is doing double duty
`agent_response` is used for more than one closely related publication path:

- streamed/live assistant response publication
- interaction-style response publication helpers

This is not necessarily wrong, but it is worth documenting because it makes the event name broader than a single narrow payload origin.

### 3) Timeline event family is acceptably coherent
The timeline-facing event family is currently fairly clean:

- `new_post`
- `new_reply`
- `interaction_updated`
- `interaction_deleted`

These names are short, readable, and map well onto actual timeline semantics.

### 4) Domain prefixing is mostly working
The current event space is not namespaced hierarchically, but it is still understandable because of consistent prefixes:

- `agent_*`
- `workspace_*`
- `extension_ui_*`

That means this audit probably does **not** need a disruptive event renaming pass unless stronger evidence of confusion appears.

### 5) `extension_ui_*` is now subscribed client-side, but still only lightly surfaced in the main app shell
The server emits a complete `extension_ui_*` SSE family from `src/channels/web/ui-bridge.ts`, and the browser SSE client now subscribes to those events as well.

The current main app shell exposes them as browser events (`piclaw-extension-ui` and subtype events such as `piclaw-extension-ui:notify`) and surfaces `extension_ui_notify` / `extension_ui_error` as intent toasts.

That closes the earlier transport dead-end, but it does **not** yet amount to a full first-class extension-UI product surface in the main web app.

## Suggested next checks

1. Decide whether `agent_response` should remain broad or be split/documented more explicitly.
   - ticket: `kanban/00-inbox/clarify-agent-response-sse-contract.md`
2. Decide whether the current lightweight browser-event bridge for `extension_ui_*` should grow into a richer first-class extension-UI surface.
   - ticket: `kanban/00-inbox/extension-ui-sse-client-contract-gap.md`
3. Compare this server inventory against any tests that assume a wider SSE contract than the server now emits.
