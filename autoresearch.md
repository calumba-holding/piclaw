# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into small behavior-based seams without changing UX semantics or payload shapes. The next bounded extraction focuses on queued follow-up state handling: hidden placeholder filtering, queue payload normalization, optimistic queued-item removal, and response-driven queue refresh decisions.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted follow-up queue seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web shell tests and emits structured `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist` as correctness backpressure.

## Files in Scope
- `runtime/web/src/app.ts` — main authenticated web shell still owning follow-up queue logic
- `runtime/web/src/ui/app-followup-queue.ts` — new typed helper seam for queue filtering/normalization/removal helpers
- `runtime/test/web/app-followup-queue.test.ts` — focused coverage for the extracted seam
- `runtime/web/src/ui/queue-state.ts` — existing queue helper module adjacent to this seam
- existing focused web shell tests under `runtime/test/web/` — regression coverage for adjacent extracted seams

## Off Limits
- backend/runtime channel code
- auth/login flows
- branch/window/pane payload shape changes
- broad UI rewrites or component tree changes
- unrelated web-shell extraction work outside the targeted seam

## Constraints
- Preserve queue payload shapes and queued follow-up UX semantics
- Preserve placeholder hiding, optimistic removal, and queue refresh behavior
- Keep new helper modules in TypeScript (`.ts`) when extracting from `app.ts`
- Keep slices small and mergeable
- Validate each passing tranche with focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`
- No new dependencies

## What's Been Tried
- Existing extracted seams now cover shell-state, branch actions, window actions, browser event watchers, chat-pane-state helpers, and extension-status helpers.
- The last successful slice moved extension status panel payload parsing and action handling into `runtime/web/src/ui/app-extension-status.ts` with focused tests.
- Extracted the queued follow-up helper seam into typed `runtime/web/src/ui/app-followup-queue.ts`, centralizing placeholder post filtering, queue payload normalization, ordered row-id equality checks, optimistic queue-row removal, and response-driven queue refresh detection.
- Added focused coverage in `runtime/test/web/app-followup-queue.test.ts` for placeholder hiding, payload cloning/filtering, optimistic removal counts, and queue-refresh detection.
- `app.ts` now keeps only the async queue wiring while delegating the repeated queue data-shaping and local transition logic to typed helpers.
- Follow-on seams should keep the same pattern: move another clustered behavior into a typed helper/service without broad hook rewrites.
