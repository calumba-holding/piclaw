---
id: continue-decompose-web-app-shell-below-2500-lines
title: Continue decomposing the web app shell below 2500 lines
status: doing
priority: medium
created: 2026-03-29
updated: 2026-03-29
estimate: XL
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

# Continue decomposing the web app shell below 2500 lines

## Summary

`runtime/web/src/app.ts` has now been reduced to about 2997 lines, but it still owns a large amount of authenticated shell orchestration, load/refresh flow control, status/bootstrap glue, and remaining widget/pane coordination. The next tranche should aim for a meaningfully larger reduction than the threshold-crossing pass and peel off bigger behavior clusters without changing UX semantics or payload contracts.

## Acceptance Criteria

- [ ] Extract multiple additional coherent typed seams from `runtime/web/src/app.ts`.
- [ ] Reduce `runtime/web/src/app.ts` below 2500 lines.
- [ ] Preserve existing web shell behavior and payload shapes.
- [ ] Add focused tests for each new seam.
- [ ] Pass focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`.

## Implementation Paths

### Path A — Bootstrap/load orchestration decomposition
Target the remaining authenticated bootstrap, loadAgents/loadBranches, profile/status refresh, and connection/reload orchestration so `app.ts` becomes a thinner shell coordinator.

### Path B — Larger UI orchestration seams
Extract broader remaining widget/pane/action clusters, especially areas that still mix follow-up, floating-widget, status-pane, and branch/pane lifecycle decisions inline.

## Test Plan

- [ ] Add focused tests under `runtime/test/web/` for each newly extracted helper.
- [ ] Run focused web tests covering the new helper plus the current app-shell seam suite.
- [ ] Run `bun run build:web`.
- [ ] Run `bun run lint`.
- [ ] Run `bun run typecheck`.
- [ ] Run `bun run check:stale-dist`.

## Definition of Done

- [ ] New seam(s) are landed on `main`.
- [ ] `runtime/web/src/app.ts` is below 2500 lines.
- [ ] Validation evidence is recorded in `## Updates`.
- [ ] Remaining post-tranche seams are explicitly listed.

## Updates

### 2026-03-29
- Created immediately after `workitems/50-done/continue-decompose-web-app-shell-below-3k-lines.md` succeeded, because the shell is now under 3000 lines but still large enough to justify another dedicated tranche.
- New target: push `runtime/web/src/app.ts` from about `2997` lines to below `2500` lines with a more impactful reduction than the prior pass.
- Starting point already includes the latest typed seams:
  - `app-auth-bootstrap.ts`
  - `app-floating-widget-followup.ts`
  - `app-connection-lifecycle.ts`
  - `app-agent-panel-toggle.ts`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

Likely next seams:
- remaining authenticated bootstrap/load orchestration
- remaining branch/pane lifecycle glue
- any residual floating-widget/status-pane routing still embedded in `app.ts`

## Links

- `workitems/50-done/continue-decompose-web-app-shell-below-3k-lines.md`
- `workitems/50-done/continue-decompose-web-app-shell.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/split-web-styles-monolith.md`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
