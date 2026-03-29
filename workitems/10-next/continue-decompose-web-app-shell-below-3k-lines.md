---
id: continue-decompose-web-app-shell-below-3k-lines
title: Continue decomposing the web app shell below 3k lines
status: next
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

# Continue decomposing the web app shell below 3k lines

## Summary

`runtime/web/src/app.ts` has now been reduced from roughly 3.9k lines to about 3.3k lines, but it still mixes authenticated shell orchestration, event routing, profile/bootstrap state, floating-widget flows, queue/action handlers, and remaining UI lifecycle glue.

The prior continuation ticket is complete and landed on `main`, so this follow-up should keep the same behavior-preserving, seam-first approach while driving the file below the next concrete threshold.

## Acceptance Criteria

- [ ] Extract at least one additional coherent seam from `runtime/web/src/app.ts` into a dedicated typed helper/module.
- [ ] Reduce `runtime/web/src/app.ts` below 3000 lines.
- [ ] Preserve existing web shell behavior and payload shapes.
- [ ] Add focused tests for the new seam(s).
- [ ] Pass focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`.

## Implementation Paths

### Path A — Profile/bootstrap/status orchestration
Extract more of the remaining authenticated shell bootstrap and profile/status reconciliation paths so `app.ts` keeps only orchestration glue.

### Path B — Widget/follow-up/action clusters
Continue peeling floating-widget, follow-up action, and adjacent event-handling branches into bounded typed helpers for larger line-count reduction per slice.

## Test Plan

- [ ] Add focused tests under `runtime/test/web/` for each newly extracted helper.
- [ ] Run focused web tests covering the new helper plus the existing app-shell seam suite.
- [ ] Run `bun run build:web`.
- [ ] Run `bun run lint`.
- [ ] Run `bun run typecheck`.
- [ ] Run `bun run check:stale-dist`.

## Definition of Done

- [ ] New seam(s) are landed on `main`.
- [ ] `runtime/web/src/app.ts` is below 3000 lines.
- [ ] Validation evidence is recorded in `## Updates`.
- [ ] Remaining post-tranche seams are explicitly listed.

## Updates

### 2026-03-29
- Created as the direct follow-up after `workitems/50-done/continue-decompose-web-app-shell.md` landed multiple seam extractions on `main` and reduced `runtime/web/src/app.ts` to about 3300 lines.
- Chosen next threshold: get `runtime/web/src/app.ts` below 3000 lines without changing web UX semantics or payload contracts.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Notes

Likely next seams:
- authenticated bootstrap/profile refresh orchestration
- floating-widget follow-up event handling still partially owned by `app.ts`
- remaining shell lifecycle glue around load/refresh flows

## Links

- `workitems/50-done/continue-decompose-web-app-shell.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/split-web-styles-monolith.md`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
