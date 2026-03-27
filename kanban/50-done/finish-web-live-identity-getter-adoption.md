---
id: finish-web-live-identity-getter-adoption
title: "Finish web live-identity getter adoption"
status: done
priority: medium
created: 2026-03-27
updated: 2026-03-27
completed: 2026-03-27
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

- [x] `runtime/src/channels/web.ts` no longer depends on flat identity globals
      where the getter/object seam is practical.
- [x] `runtime/src/channels/web/handlers/agent.ts` no longer depends on flat
      identity globals where the getter/object seam is practical.
- [x] Runtime payload shapes and existing user-visible behavior stay unchanged.
- [x] Relevant web/agent targeted tests still pass.

## Validation

- [x] targeted web/agent tests
- [x] `./scripts/audit-extract-typed-config-objects.sh`
- [x] `bun run lint`
- [x] `bun run typecheck`

## Updates

### 2026-03-27
- Lane change: `10-next` → `50-done` during board hygiene pass after confirming the ticket itself was already fully marked complete with validation evidence recorded.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-03-27
- Rewired the remaining high-value web identity reads to the mutable getter seam:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/handlers/agent.ts`
  - `runtime/src/runtime/bootstrap.ts` (trivial bootstrap/banner follow-up)
- Preserved existing payload shapes by only swapping identity reads, not endpoint contracts or event schemas.
- Validation:
  - targeted tests: `bun test runtime/test/channels/web/manifest.test.ts runtime/test/channels/web/identity-endpoints.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/channels/web/agent-message-handler.test.ts runtime/test/channels/web/webauthn-auth.test.ts runtime/test/config/config.test.ts runtime/test/config/config-coverage-import.test.ts`
  - extraction audit: `./scripts/audit-extract-typed-config-objects.sh` → `typed_config_objects: 12`, `bare_constant_exports: 10`
  - static checks: `bun run lint`, `bun run typecheck`
  - full validation: `bun run quality`
- After this slice, the remaining flat identity exports are compatibility surfaces in `runtime/src/core/config.ts` plus env-key names / alias handling, rather than live consumer dependencies.

## Links

- `kanban/20-doing/finish-config-injection-and-mutable-identity-cleanup.md`
- `runtime/src/core/config.ts`
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/handlers/agent.ts`
