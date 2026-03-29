# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into small behavior-based seams without changing UX semantics or payload shapes. The next bounded extraction focuses on floating widget runtime-state transitions during submit/refresh flows: pending/success/failure host updates, request-refresh acknowledgements, and dashboard refresh results.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted floating-widget runtime-state seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web shell tests and emits structured `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist` as correctness backpressure.

## Files in Scope
- `runtime/web/src/app.ts` — main authenticated web shell still owning floating widget runtime-state patching during submit/refresh flows
- `runtime/web/src/ui/app-floating-widget.ts` — typed helper seam for floating widget state transitions and runtime-state updaters
- `runtime/test/web/app-floating-widget.test.ts` — focused coverage for the extracted runtime-state helpers
- `runtime/web/src/ui/generated-widget.ts` — existing typed widget helpers adjacent to this seam
- existing focused web shell tests under `runtime/test/web/` — regression coverage for adjacent extracted seams

## Off Limits
- backend/runtime channel code
- auth/login flows
- branch/window/pane payload shape changes
- broad UI rewrites or component tree changes
- unrelated web-shell extraction work outside the targeted seam

## Constraints
- Preserve floating widget payload shapes and runtimeState payloads
- Preserve submit/refresh UX semantics, toast-trigger timing, and session-key guards
- Keep new helper modules in TypeScript (`.ts`) when extracting from `app.ts`
- Keep slices small and mergeable
- Validate each passing tranche with focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`
- No new dependencies

## What's Been Tried
- Existing extracted seams now cover shell-state, branch actions, window actions, browser event watchers, chat-pane-state helpers, extension-status helpers, follow-up queue helpers, and floating-widget helpers.
- The last successful slice moved floating-widget shell-state transitions into `runtime/web/src/ui/app-floating-widget.ts` with focused tests.
- Extracted the floating-widget runtime-state seam into additional typed helpers inside `runtime/web/src/ui/app-floating-widget.ts`, centralizing submit pending/success/failure host updates plus request-refresh/dashboard result patches.
- Expanded `runtime/test/web/app-floating-widget.test.ts` to cover session-key-guarded runtime-state patching for submit and refresh flows.
- `app.ts` now keeps the async widget submission and dashboard-build side effects while delegating the repetitive runtimeState shaping to typed helpers.
- Follow-on seams should keep the same pattern: move another clustered behavior into a typed helper/service without broad hook rewrites.
