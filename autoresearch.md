# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into small behavior-based seams without changing UX semantics or payload shapes. The next bounded extraction focuses on the per-chat pane state snapshot/restore flow that preserves branch/window/pane behavior while moving new helper code into a typed TypeScript module by default.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted chat-pane-state seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web shell tests and emits structured `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist` as correctness backpressure.

## Files in Scope
- `runtime/web/src/app.ts` — main authenticated web shell still owning chat pane snapshot/restore behavior
- `runtime/web/src/ui/app-chat-pane-state.ts` — new typed helper/service seam for per-chat pane state capture/restore
- `runtime/test/web/app-chat-pane-state.test.ts` — focused coverage for the extracted seam
- existing focused web shell tests under `runtime/test/web/` — regression coverage for adjacent extracted seams

## Off Limits
- backend/runtime channel code
- auth/login flows
- branch/window/pane payload shape changes
- broad UI rewrites or component tree changes
- unrelated web-shell extraction work outside the targeted seam

## Constraints
- Preserve current branch/window/pane UX semantics
- Preserve existing payload shapes and queue/agent state snapshots
- Keep new helper modules in TypeScript (`.ts`) when extracting from `app.ts`
- Keep slices small and mergeable
- Validate each passing tranche with focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`
- No new dependencies

## What's Been Tried
- Existing extracted seams already cover shell-state, branch actions, window actions, and browser event watchers.
- `app.ts` still owned a bounded per-chat pane state seam via `createEmptyChatPaneState()`, `snapshotCurrentChatPaneState()`, and `restoreChatPaneState()` plus chat-switch restore effects.
- Extracted that pane-state flow into typed `runtime/web/src/ui/app-chat-pane-state.ts`, moving the snapshot/default/restore data-shaping logic out of `app.ts` while keeping the chat-switch effects and setter wiring in place.
- Added focused coverage in `runtime/test/web/app-chat-pane-state.test.ts` for default snapshot shape, snapshot cloning, restore application, and empty-state fallback.
- Focused web shell tests plus `build:web`, `lint`, `typecheck`, and `check:stale-dist` all pass after installing workspace deps with a writable local Bun cache (`bun install --cache-dir .bun-cache --backend=copyfile`).
- Follow-on seam candidates should keep the same pattern: extract a behavior cluster into a typed helper/service module without broad hook rewrites.
