# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into small behavior-based seams without changing UX semantics or payload shapes. The next bounded extraction focuses on extension status panel state/action handling: autoresearch status refreshes, status-panel SSE updates, and panel action execution.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted extension-status seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web shell tests and emits structured `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist` as correctness backpressure.

## Files in Scope
- `runtime/web/src/app.ts` — main authenticated web shell still owning extension panel refresh/action wiring
- `runtime/web/src/ui/app-extension-status.ts` — new typed helper/service seam for status panel payload/state/action helpers
- `runtime/test/web/app-extension-status.test.ts` — focused coverage for the extracted seam
- existing focused web shell tests under `runtime/test/web/` — regression coverage for adjacent extracted seams

## Off Limits
- backend/runtime channel code
- auth/login flows
- branch/window/pane payload shape changes
- broad UI rewrites or component tree changes
- unrelated web-shell extraction work outside the targeted seam

## Constraints
- Preserve current extension status panel payload shapes and action semantics
- Preserve autoresearch stop/dismiss/copy-tmux behavior and pending-action clearing rules
- Keep new helper modules in TypeScript (`.ts`) when extracting from `app.ts`
- Keep slices small and mergeable
- Validate each passing tranche with focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`
- No new dependencies

## What's Been Tried
- Existing extracted seams now cover shell-state, branch actions, window actions, browser event watchers, and typed chat-pane-state snapshot/restore helpers.
- The last successful slice moved per-chat pane state default/snapshot/restore logic into `runtime/web/src/ui/app-chat-pane-state.ts` with focused tests.
- Extracted the extension-status seam into typed `runtime/web/src/ui/app-extension-status.ts`, centralizing status-panel payload parsing, autoresearch panel refresh updates, pending-action key/set helpers, and autoresearch stop/dismiss/copy-tmux action execution.
- Added focused coverage in `runtime/test/web/app-extension-status.test.ts` for status-panel extraction, map/set updates, pending-action clearing rules, and supported panel actions.
- `app.ts` now keeps only the UI wiring around refreshes/SSE dispatch/toasts while delegating the duplicated extension-status data-shaping and action logic.
- Follow-on seams should keep the same pattern: move another clustered behavior into a typed helper/service without broad hook rewrites.
