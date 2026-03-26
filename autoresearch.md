# Autoresearch: audit silent catch blocks

## Objective
Audit and eliminate silent `catch {}` blocks in `runtime/src` and `runtime/web/src` without changing user-visible behavior. The governing ticket is `kanban/10-next/audit-silent-catch-blocks.md`.

Success means every in-scope empty `catch {}` is either:
- replaced with explicit logging/structured handling when silence is unsafe, or
- annotated with an explicit `/* expected: ... */` justification when the swallow is intentional and safe.

We are optimizing for full audited coverage while keeping builds/tests passing.

## Metrics
- **Primary**: `silent_catch_blocks` (count, lower is better) — unresolved empty `catch {}` blocks remaining in `runtime/src` + `runtime/web/src`
- **Secondary**:
  - `critical_silent_catches` — unresolved empty catches in backend / critical-path files
  - `silent_promise_catches` — unresolved `.catch(() => {})` promise swallows
  - `files_with_silent_catches` — spread of remaining audit work

## How to Run
`./autoresearch.sh` — emits structured `METRIC name=value` lines.

## Files in Scope
- `runtime/src/agent-pool.ts` — branch/session lifecycle, side-session sync, eviction
- `runtime/src/channels/web.ts` — web channel startup and branch/autoresearch endpoints
- `runtime/src/channels/web/terminal/terminal-session-service.ts` — terminal PTY/session lifecycle
- `runtime/src/channels/web/vnc/vnc-session-service.ts` — VNC session bridge lifecycle
- `runtime/src/channels/web/remote-display/websocket-tcp-bridge.ts` — websocket↔TCP bridge
- `runtime/src/channels/web/workspace/file-service.ts` — uploads and filesystem mutation helpers
- `runtime/src/channels/web/workspace/watcher.ts` — recursive workspace watcher
- `runtime/src/tool-output.ts` — tool-output pruning cleanup
- `runtime/src/channels/web/handlers/workspace.ts` — workspace file serving/range handling
- `runtime/src/channels/whatsapp.ts` — presence update and delivery fallback
- `runtime/src/agent-pool/slash-command.ts` — slash-command timeout cleanup
- `runtime/web/src/app.ts` — branch launcher and background refreshes
- `runtime/web/src/panes/terminal-pane.ts` — browser terminal theme/dispose lifecycle
- `runtime/web/src/panes/vnc-pane.ts` — browser VNC lifecycle and pointer handling
- `runtime/web/src/panes/remote-display-*` — socket + WASM cleanup paths
- `runtime/web/src/components/*` and `runtime/web/src/ui/*` touched by empty catches — browser-only cleanup, window APIs, iframes, widget messaging, localStorage, listener isolation

## Off Limits
- `runtime/web/static/**`
- vendored/minified files
- generated artifacts unless required by the normal build
- unrelated refactors outside silent-catch auditing

## Constraints
- Keep behavior stable
- No new dependencies
- TypeScript must typecheck
- Relevant tests must pass after kept changes
- Prefer comments for expected/racy cleanup paths; prefer warnings for unexpected failures in backend/critical paths

## What's Been Tried
- Baseline established at `silent_catch_blocks=97`, `critical_silent_catches=33`, `silent_promise_catches=17`.
- Audited all empty `catch {}` blocks in `runtime/src` + `runtime/web/src` and removed the bare-empty form entirely.
- Backend/critical-path changes now log when hidden failures would matter: agent-pool branch/session sync, web theme init fallback, oversized upload cleanup, workspace menu actions, tab listener failures, and WhatsApp availability publishing.
- Intentional/racy cleanup paths now carry explicit `/* expected: ... */` justification comments instead of silent empties: PTY/procfs scans, websocket teardown, iframe/widget messaging, localStorage writes, pointer capture, resize observers, Ghostty/terminal teardown, and browser popup/mobile viewport quirks.
- Follow-up sweep also removed promise-style silent swallows such as `.catch(() => {})`, again preferring explicit justification comments for expected best-effort UI/background work.
