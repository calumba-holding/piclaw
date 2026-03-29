---
id: continue-decompose-web-app-shell
title: Continue decomposing the web app shell after post-release regrowth
status: next
priority: medium
created: 2026-03-29
updated: 2026-03-29
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

## Notes

Likely next seams:
- branch/window management
- queue reconciliation and pending follow-up UX
- pane lifecycle and visibility state
- autoresearch/status-pane orchestration

## Updates

### 2026-03-29
- Created as the explicit follow-up to the earlier done shell-decomposition ticket because `runtime/web/src/app.ts` has regrown to about 3,917 lines.
- This now represents one of the clearest remaining blockers to the umbrella goal that no source file exceed 800 lines.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/50-done/decompose-web-app-shell-and-resume-lifecycle.md`
- `runtime/web/src/app.ts`
- `workitems/20-doing/codebase-quality-cleanup-2026.md`
