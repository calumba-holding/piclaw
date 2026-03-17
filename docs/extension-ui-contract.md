# Extension UI contract

This document defines the current **supported extension UI surfaces** in Piclaw's web app.

The short version:

1. **Pane extensions** are the first-class host for substantial tool/file UI.
2. **Adaptive Cards and normal timeline messages** are the preferred structured conversation UI.
3. **`extension_ui_*` events** are a low-level browser-event bridge for lightweight web-session integrations, not a full plugin UI framework.

## The three supported surfaces

| UI need | Preferred surface | Why |
|---|---|---|
| File editors, viewers, dashboards, tool panes, persistent chrome-adjacent UI | **Web pane extension** | First-class host model with tabs/dock lifecycle |
| Structured chat decisions, approvals, forms, receipts | **Adaptive Cards / timeline messages** | Persisted, agent-owned, reconnect-safe, visible in history |
| Lightweight web-only signals for an already-open browser session | **`extension_ui_*` bridge** | Minimal compatibility path for browser event consumers |

## First-class host: pane extensions

Piclaw already ships a first-class content host for substantial extension UI:

- `WebPaneExtension`
- `PaneRegistry`
- tab placement
- dock placement
- built-in pane implementations (editor, terminal, draw.io, office/pdf/image/csv viewers, workspace preview)

If an extension needs a real surface with mounting, focus, resize, disposal, and routing, it should use a pane extension.

See [web-pane-extensions.md](web-pane-extensions.md) for the pane contract.

## Structured conversation UI: Adaptive Cards and timeline messages

If the interaction should be visible in conversation history, survive reconnects, or be attributable to the agent/user, prefer timeline-native UI:

- normal messages
- attachments
- Adaptive Cards
- persisted Adaptive Card submission receipts

This is the preferred path for:

- approvals/choices that belong in the chat history
- read-only receipts or structured results
- workflows that should still make sense after reload/reconnect

## Low-level bridge: `extension_ui_*`

The web runtime forwards `extension_ui_*` SSE events into browser events for the current chat.

Browser events are dispatched as:

- `piclaw-extension-ui`
- `piclaw-extension-ui:<suffix>`

Examples:

- `extension_ui_notify` → `piclaw-extension-ui:notify`
- `extension_ui_status` → `piclaw-extension-ui:status`
- `extension_ui_editor_text` → `piclaw-extension-ui:editor-text`

### Important non-goal

This bridge is **not** currently a general-purpose extension-host framework.

Piclaw does **not** promise that every `extension_ui_*` event automatically gets a first-class built-in shell renderer. In most cases, the shell simply:

1. delivers the event to the current chat's browser session, and
2. re-dispatches it as a browser event.

Extension authors should treat the bridge as a **transport + lightweight affordance layer**, not as a promise of rich shell UI.

## Event classification

| Event | Contract class | Shell-visible effect | Guidance |
|---|---|---|---|
| `extension_ui_request` | Supported public bridge event | No built-in generic renderer today | Use only when your browser-side integration is prepared to render/respond |
| `extension_ui_timeout` | Supported public bridge event | No shell UI guarantee | Treat as lifecycle signal for request UIs |
| `extension_ui_status` | Supported public bridge event | No built-in shell panel today | Suitable for lightweight status syncing to extension-owned browser UI |
| `extension_ui_working` | Supported public bridge event | No built-in shell panel today | Same as above; use for transient progress text |
| `extension_ui_widget` | Supported public bridge event | No built-in shell slot today | Suitable only for extension-owned browser listeners/widgets |
| `extension_ui_title` | Supported public bridge event | No shell title integration today | Use only for extension-owned browser UI |
| `extension_ui_editor_text` | Supported public bridge event | No shell-owned editor contract yet | Do not assume a generic editor/compose insertion target exists |
| `extension_ui_notify` | Supported bridge event **plus** shell-owned affordance | Yes — toast/intent surface | Good for lightweight notifications; browser event is still emitted too |
| `extension_ui_error` | Supported bridge event **plus** shell-owned affordance | Yes — error toast/intent surface | Use for user-visible extension failures; browser event is still emitted too |

## What extensions should prefer

| Scenario | Recommended surface |
|---|---|
| Open a custom viewer/editor/tool | Pane extension |
| Need a long-lived panel or dock | Pane extension |
| Need a structured yes/no/choice form in chat history | Adaptive Card |
| Need a compact success/failure/result message in history | Normal timeline message or Adaptive Card receipt |
| Need a transient browser-only notification | `extension_ui_notify` |
| Need browser-only status updates for custom JS UI | `extension_ui_status` / `extension_ui_working` |
| Need a bespoke browser-side request/response UI | `extension_ui_request` with your own browser listener |

## Current non-goals / unsupported assumptions

Extension authors should **not** assume Piclaw currently provides:

- a generic plugin modal framework
- arbitrary shell slot mounting outside the pane host
- guaranteed compose/editor insertion semantics from `extension_ui_editor_text`
- a stable built-in renderer for `extension_ui_widget`
- a durable/persisted history model for arbitrary `extension_ui_*` events

If the interaction needs those properties, prefer a pane extension or timeline-native UI instead.

## Practical guidance

Use this decision order:

1. **Should this live in history?**
   - Yes → timeline message / Adaptive Card.
2. **Does this need a persistent mounted UI surface?**
   - Yes → pane extension.
3. **Is this just a lightweight signal to an already-open browser session?**
   - Yes → `extension_ui_*` bridge.

## Related files

- `piclaw/src/channels/web/ui-bridge.ts`
- `piclaw/src/channels/web/sse.ts`
- `piclaw/web/src/ui/extension-ui-events.ts`
- `piclaw/web/src/app.ts`
- `docs/web-pane-extensions.md`
