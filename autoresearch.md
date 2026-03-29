# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into small behavior-based seams without changing UX semantics or payload shapes. The next bounded extraction focuses on agent draft/thought preview shaping: delta buffer application, inferred line counts, collapsed/expanded preview payloads, and plan text replacement/append behavior.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted agent-preview seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web shell tests and emits structured `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist` as correctness backpressure.

## Files in Scope
- `runtime/web/src/app.ts` — main authenticated web shell still owning draft/thought preview shaping logic
- `runtime/web/src/ui/app-agent-previews.ts` — new typed helper seam for preview shaping helpers
- `runtime/test/web/app-agent-previews.test.ts` — focused coverage for the extracted seam
- existing focused web shell tests under `runtime/test/web/` — regression coverage for adjacent extracted seams

## Off Limits
- backend/runtime channel code
- auth/login flows
- branch/window/pane payload shape changes
- broad UI rewrites or component tree changes
- unrelated web-shell extraction work outside the targeted seam

## Constraints
- Preserve draft/thought preview payload shapes and plan text behavior
- Preserve inferred line-count behavior and delta-buffer semantics
- Keep new helper modules in TypeScript (`.ts`) when extracting from `app.ts`
- Keep slices small and mergeable
- Validate each passing tranche with focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`
- No new dependencies

## What's Been Tried
- Existing extracted seams now cover shell-state, branch actions, window actions, browser event watchers, chat-pane-state helpers, extension-status helpers, follow-up queue helpers, floating-widget helpers, and agent-preview helpers.
- The last successful slice moved floating-widget runtime-state patching into typed helpers inside `runtime/web/src/ui/app-floating-widget.ts` with expanded focused tests.
- Extracted the draft/thought preview shaping seam into typed `runtime/web/src/ui/app-agent-previews.ts`, centralizing delta-buffer updates, inferred line counts, collapsed/expanded preview payloads, and plan append/replace resolution.
- Added focused coverage in `runtime/test/web/app-agent-previews.test.ts` for inferred totals, preview payload shaping, plan text behavior, and draft/thought delta semantics.
- `app.ts` now keeps only the SSE/control-flow wiring for draft/thought events while delegating preview-state shaping to typed helpers.
- Follow-on seams should keep the same pattern: move another clustered behavior into a typed helper/service without broad hook rewrites.
