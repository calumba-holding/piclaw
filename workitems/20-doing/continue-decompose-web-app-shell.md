---
id: continue-decompose-web-app-shell
title: Continue decomposing the web app shell after post-release regrowth
status: doing
priority: medium
created: 2026-03-29
updated: 2026-03-29
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web-ui
  - quality
owner: pi
blocked-by: []
---

# Continue decomposing the web app shell after post-release regrowth

## Summary

`runtime/web/src/app.ts` has grown back to roughly 3.9k lines and again mixes chat orchestration, branch/window management, SSE handling, queue reconciliation, pane lifecycle, and assorted UI shell state.

A previous extraction tranche (`decompose-web-app-shell-and-resume-lifecycle`) proved the seam-splitting approach works, but the shell has since regrown beyond the codebase-quality target.

## Acceptance Criteria

- [ ] At least one coherent domain seam is extracted from `runtime/web/src/app.ts` into a dedicated module/hook/service.
- [ ] `runtime/web/src/app.ts` is materially smaller after the slice.
- [ ] Existing app-shell behavior is preserved.
- [ ] Focused web tests and `bun run build:web` pass.

## Implementation Paths

### Path A — Shell-state helper extraction first (active)
Extract the location/bootstrap/session helper cluster from `runtime/web/src/app.ts` into a dedicated UI helper module, then continue with a second domain seam once the new module/tests are stable.

### Path B — Larger hook-first decomposition
Skip the helper tranche and immediately extract a bigger domain hook (queue reconciliation, pane lifecycle, or branch/window orchestration). Faster size reduction, but higher regression risk.

## Test Plan

- [ ] Add focused tests for the new app-shell helper module under `runtime/test/web/`
- [ ] Run focused web tests for the touched helper and prior app shell seam tests
- [ ] Run `bun run build:web`
- [ ] Run `bun run lint`
- [ ] Run `bun run typecheck`

## Definition of Done

- [ ] At least one extracted app-shell module/hook is landed on `main`
- [ ] `runtime/web/src/app.ts` is smaller than at pickup time
- [ ] Test/build evidence is recorded in `## Updates`
- [ ] Any larger follow-up seams are explicitly called out instead of being implied

## Notes

Likely next seams:
- branch/window management
- queue reconciliation and pending follow-up UX
- pane lifecycle and visibility state
- autoresearch/status-pane orchestration

## Updates

### 2026-03-29
- Merged back autoresearch branch `autoresearch/exp-mnbnq50s-6e3m` into `feature/continue-decompose-web-app-shell` and assessed the result on the feature branch.
- The merged autoresearch tranches added typed seams for:
  - `runtime/web/src/ui/app-chat-pane-state.ts`
  - `runtime/web/src/ui/app-extension-status.ts`
  - `runtime/web/src/ui/app-followup-queue.ts`
  - `runtime/web/src/ui/app-floating-widget.ts`
  - `runtime/web/src/ui/app-agent-previews.ts`
- Follow-up quality pass: converted the earlier manually extracted helper seams from `.js` to `.ts` so new shell extractions now stay typed by default:
  - `runtime/web/src/ui/app-shell-state.ts`
  - `runtime/web/src/ui/app-branch-actions.ts`
  - `runtime/web/src/ui/app-window-actions.ts`
  - `runtime/web/src/ui/app-browser-events.ts`
- Current size reduction in this branch after the merge-back plus TS conversion: `runtime/web/src/app.ts` `3917 → 3422` lines.
- Validation for the merged/typed branch state:
  - `cd runtime && bun test test/web/app-shell-state.test.ts test/web/app-branch-actions.test.ts test/web/app-window-actions.test.ts test/web/app-browser-events.test.ts test/web/app-chat-pane-state.test.ts test/web/app-extension-status.test.ts test/web/app-followup-queue.test.ts test/web/app-floating-widget.test.ts test/web/app-agent-previews.test.ts test/web/app-resume.test.ts`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Continued again by extracting document-level pane/shortcut browser event wiring into `runtime/web/src/ui/app-browser-events.js`.
- `runtime/web/src/app.ts` now delegates:
  - preview-card / pane custom event listeners
  - dock toggle shortcut registration
  - zen-mode shortcut registration
- Added focused coverage in `runtime/test/web/app-browser-events.test.ts`.
- Current size reduction in this branch: `runtime/web/src/app.ts` `3917 → 3620` lines.
- Validation for the expanded slice:
  - `cd runtime && bun test test/web/app-shell-state.test.ts test/web/app-branch-actions.test.ts test/web/app-window-actions.test.ts test/web/app-browser-events.test.ts test/web/app-resume.test.ts`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Continued the active shell-decomposition tranche by extracting window/popup orchestration into `runtime/web/src/ui/app-window-actions.js`.
- `runtime/web/src/app.ts` now delegates:
  - compose-driven branch creation
  - pane pop-out handoff
  - chat branch pop-out/bootstrap
- Added focused coverage in `runtime/test/web/app-window-actions.test.ts`.
- Current size reduction in this branch: `runtime/web/src/app.ts` `3917 → 3657` lines.
- Validation for the expanded slice:
  - `cd runtime && bun test test/web/app-shell-state.test.ts test/web/app-branch-actions.test.ts test/web/app-window-actions.test.ts test/web/app-resume.test.ts`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Lane change: `10-next` → `20-doing` by user request so this follow-up can start immediately alongside the CSS split ticket.
- Chosen implementation path: **Path A — Shell-state helper extraction first**.
- Began the first tranche on branch `feature/continue-decompose-web-app-shell` by extracting the location/bootstrap/session helper cluster into `runtime/web/src/ui/app-shell-state.js` and wiring `runtime/web/src/app.ts` to consume it.
- Added a second bounded seam in the same tranche: extracted branch rename/prune/restore/loader orchestration into `runtime/web/src/ui/app-branch-actions.js` and rewired `runtime/web/src/app.ts` to delegate those flows.
- Added focused coverage in:
  - `runtime/test/web/app-shell-state.test.ts`
  - `runtime/test/web/app-branch-actions.test.ts`
- Current size reduction in this in-progress tranche: `runtime/web/src/app.ts` `3917 → 3736` lines.
- Validation so far:
  - `cd runtime && bun test test/web/app-shell-state.test.ts test/web/app-branch-actions.test.ts test/web/app-resume.test.ts`
  - `bun run build:web`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-29
- Created as the explicit follow-up to the earlier done shell-decomposition ticket because `runtime/web/src/app.ts` has regrown to about 3,917 lines.
- This now represents one of the clearest remaining blockers to the umbrella goal that no source file exceed 800 lines.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/50-done/decompose-web-app-shell-and-resume-lifecycle.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
