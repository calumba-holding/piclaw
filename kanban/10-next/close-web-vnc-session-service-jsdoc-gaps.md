---
id: close-web-vnc-session-service-jsdoc-gaps
title: Close exported JSDoc gaps in web VNC session service
status: next
priority: medium
created: 2026-03-27
updated: 2026-03-27
target_release: next
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - docs
  - jsdoc
  - web
owner: pi
blocked-by: []
---

# Close exported JSDoc gaps in web VNC session service

## Summary

Follow-up from `kanban/50-done/audit-exported-jsdoc-coverage-and-comment-quality.md`.
The merged active-seam JSDoc pass covered web HTTP, handlers, and WebAuthn challenge helpers, but
`runtime/src/channels/web/vnc/vnc-session-service.ts` still exposes multiple exported interfaces,
functions, and a class with minimal or missing review-gate documentation.

## Scope

Primary follow-up scope:
- `runtime/src/channels/web/vnc/vnc-session-service.ts`

## Acceptance Criteria

- [ ] Exported interfaces/types in scope have type-level and property-level JSDoc.
- [ ] Exported functions in scope have purpose + `@param` / `@returns` docs where applicable.
- [ ] Exported classes in scope have class-level docs and public method docs.
- [ ] Runtime behavior remains unchanged (documentation-only unless typing cleanup is required).
- [ ] Validation evidence (`eslint` targeted + lint + typecheck) is recorded in ticket updates.

## Updates

### 2026-03-27
- Created after reviewing the merged autoresearch JSDoc branch and confirming that remaining adjacent exported-doc gaps now cluster in `runtime/src/channels/web/vnc/vnc-session-service.ts`.
- Evidence source:
  - export inventory commands over the active web seams
  - autoresearch branch retarget note for the VNC session service seam

## Links

- `kanban/50-done/audit-exported-jsdoc-coverage-and-comment-quality.md`
