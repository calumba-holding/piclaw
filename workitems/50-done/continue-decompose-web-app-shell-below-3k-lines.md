---
id: continue-decompose-web-app-shell-below-3k-lines
title: Continue decomposing the web app shell below 3k lines
status: done
priority: medium
created: 2026-03-29
updated: 2026-03-29
completed: 2026-03-29
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

- [x] Extract at least one additional coherent seam from `runtime/web/src/app.ts` into a dedicated typed helper/module.
- [x] Reduce `runtime/web/src/app.ts` below 3000 lines.
- [x] Preserve existing web shell behavior and payload shapes.
- [x] Add focused tests for the new seam(s).
- [x] Pass focused web tests, `bun run build:web`, `bun run lint`, `bun run typecheck`, and `bun run check:stale-dist`.

## Implementation Paths

### Path A — Profile/bootstrap/status orchestration
Extract more of the remaining authenticated shell bootstrap and profile/status reconciliation paths so `app.ts` keeps only orchestration glue.

### Path B — Widget/follow-up/action clusters
Continue peeling floating-widget, follow-up action, and adjacent event-handling branches into bounded typed helpers for larger line-count reduction per slice.

## Test Plan

- [x] Add focused tests under `runtime/test/web/` for each newly extracted helper.
- [x] Run focused web tests covering the new helper plus the existing app-shell seam suite.
- [x] Run `bun run build:web`.
- [x] Run `bun run lint`.
- [x] Run `bun run typecheck`.
- [x] Run `bun run check:stale-dist`.

## Definition of Done

- [x] New seam(s) are landed on `main`.
- [x] `runtime/web/src/app.ts` is below 3000 lines.
- [x] Validation evidence is recorded in `## Updates`.
- [x] Remaining post-tranche seams are explicitly listed.

## Updates

### 2026-03-29
- Lane change: `10-next` → `50-done` after a focused follow-up tranche reduced `runtime/web/src/app.ts` below the ticket threshold and passed the full focused validation gate.
- Completion evidence:
  - extracted typed helpers: `app-auth-bootstrap.ts`, `app-floating-widget-followup.ts`, `app-connection-lifecycle.ts`, `app-agent-panel-toggle.ts`
  - `runtime/web/src/app.ts` reduced from about `3300` lines to `2997` lines
  - focused web validation: `112 pass, 0 fail`
  - `bun run build:web`, `bun run lint`, `bun run typecheck`, `bun run check:stale-dist` all passed
- Immediate larger-scope follow-up opened at `workitems/20-doing/continue-decompose-web-app-shell-below-2500-lines.md` to pursue a more impactful reduction instead of continuing to stretch this ticket.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Created as the direct follow-up after `workitems/50-done/continue-decompose-web-app-shell.md` landed multiple seam extractions on `main` and reduced `runtime/web/src/app.ts` to about 3300 lines.
- Chosen next threshold: get `runtime/web/src/app.ts` below 3000 lines without changing web UX semantics or payload contracts.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Landed next tranche seams:
  - `runtime/web/src/ui/app-auth-bootstrap.ts` (agent/profile/model/bootstrap refresh orchestration)
  - `runtime/web/src/ui/app-floating-widget-followup.ts` (floating-widget + follow-up action cluster)
  - `runtime/web/src/ui/app-connection-lifecycle.ts` (authenticated connection/reload lifecycle glue)
  - `runtime/web/src/ui/app-agent-panel-toggle.ts` (thought/draft panel expansion lifecycle)
- `runtime/web/src/app.ts` now measures 2997 lines.
- Focused web coverage added: `app-auth-bootstrap`, `app-floating-widget-followup`, `app-connection-lifecycle`, `app-agent-panel-toggle`.
- Validation passed: focused web tests above, `bun run build:web`, `bun run lint`, `bun run typecheck`, `bun run check:stale-dist` (`[stale-dist] ok`).

## Implementation Paths Considered (historical)

- Path A paid off first: bootstrap/profile extraction created a relatively safe path to cross the sub-3000 threshold.
- Path B also proved useful in the same tranche once confidence grew; floating-widget/follow-up and connection lifecycle logic yielded most of the line-count reduction.

## Notes

Likely next seams:
- authenticated bootstrap/profile refresh orchestration
- floating-widget follow-up event handling still partially owned by `app.ts`
- remaining shell lifecycle glue around load/refresh flows

## Links

- `workitems/50-done/continue-decompose-web-app-shell.md`
- `workitems/20-doing/continue-decompose-web-app-shell-below-2500-lines.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/split-web-styles-monolith.md`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
