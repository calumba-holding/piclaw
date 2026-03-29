# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into small behavior-based seams without changing UX semantics or payload shapes. The next bounded extraction focuses on floating generated widget shell-state handling: open/close behavior, live-widget merge updates, and session-key-aware close/reset logic.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted floating-widget seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web shell tests and emits structured `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist` as correctness backpressure.

## Files in Scope
- `runtime/web/src/app.ts` — main authenticated web shell still owning floating widget state transitions
- `runtime/web/src/ui/app-floating-widget.ts` — new typed helper seam for floating widget open/close/live-update logic
- `runtime/test/web/app-floating-widget.test.ts` — focused coverage for the extracted seam
- `runtime/web/src/ui/generated-widget.ts` — existing typed widget helpers adjacent to this seam
- existing focused web shell tests under `runtime/test/web/` — regression coverage for adjacent extracted seams

## Off Limits
- backend/runtime channel code
- auth/login flows
- branch/window/pane payload shape changes
- broad UI rewrites or component tree changes
- unrelated web-shell extraction work outside the targeted seam

## Constraints
- Preserve floating widget payload shapes and session-key semantics
- Preserve live widget dismissal behavior, merge updates, and generated_widget_close behavior
- Keep new helper modules in TypeScript (`.ts`) when extracting from `app.ts`
- Keep slices small and mergeable
- Validate each passing tranche with focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`
- No new dependencies

## What's Been Tried
- Existing extracted seams now cover shell-state, branch actions, window actions, browser event watchers, chat-pane-state helpers, extension-status helpers, follow-up queue helpers, and floating-widget helpers.
- The last successful slice moved queued follow-up placeholder filtering, queue normalization, optimistic removal, and queue-refresh detection into `runtime/web/src/ui/app-followup-queue.ts` with focused tests.
- Extracted the floating-widget shell-state seam into typed `runtime/web/src/ui/app-floating-widget.ts`, centralizing open/close state transitions, live widget merge updates, and generated_widget_close session matching around the existing generated-widget helpers.
- Added focused coverage in `runtime/test/web/app-floating-widget.test.ts` for open/close behavior, dismissed-session handling, same-session live merges, and close-event session matching.
- `app.ts` now keeps the async widget submission/refresh wiring while delegating the core floating-widget state transitions to typed helpers.
- Follow-on seams should keep the same pattern: move another clustered behavior into a typed helper/service without broad hook rewrites.
