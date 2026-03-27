---
id: finish-web-live-identity-getter-adoption
title: "Finish web live-identity getter adoption"
status: next
priority: medium
created: 2026-03-27
updated: 2026-03-27
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - refactor
  - config
  - web
owner: pi
blocked-by:
  - finish-config-injection-and-mutable-identity-cleanup
---

# Finish web live-identity getter adoption

## Summary

`runtime/src/core/config.ts` now has a typed mutable `IDENTITY_CONFIG` seam plus
`getIdentityConfig()`, and the lower-risk identity-heavy consumers outside the
main web channel have been rewired. The remaining flat identity-global usage is
now concentrated in the broader web surfaces:

- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/handlers/agent.ts`
- any trivial bootstrap/banner call sites that still read flat identity exports

This follow-up keeps the rest of the cleanup mergeable by handling the larger
web-facing call sites separately.

## Scope

- replace remaining direct `ASSISTANT_NAME` / avatar / user identity imports in
  the main web channel surfaces with `getIdentityConfig()` or equivalent
  live-value wiring
- preserve existing API payload shapes and live update behavior
- keep the work narrowly scoped to identity reads, not unrelated web-channel
  decomposition

## Acceptance Criteria

- [ ] `runtime/src/channels/web.ts` no longer depends on flat identity globals
      where the getter/object seam is practical.
- [ ] `runtime/src/channels/web/handlers/agent.ts` no longer depends on flat
      identity globals where the getter/object seam is practical.
- [ ] Runtime payload shapes and existing user-visible behavior stay unchanged.
- [ ] Relevant web/agent targeted tests still pass.

## Validation

- [ ] targeted web/agent tests
- [ ] `./scripts/audit-extract-typed-config-objects.sh`
- [ ] `bun run lint`
- [ ] `bun run typecheck`

## Links

- `kanban/20-doing/finish-config-injection-and-mutable-identity-cleanup.md`
- `runtime/src/core/config.ts`
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/handlers/agent.ts`
