---
id: finish-config-injection-and-mutable-identity-cleanup
title: "Finish config injection and mutable identity cleanup"
status: doing
priority: medium
created: 2026-03-27
updated: 2026-03-27
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - quality
  - config
owner: pi
blocked-by: []
---

# Finish config injection and mutable identity cleanup

## Summary

`core/config.ts` has already been reduced from a wide flat export surface to grouped typed config objects for several low-risk slices, and the bare constant count is now down to 10. The remaining work is no longer about proving the extraction approach — it is about finishing the higher-friction consumer cleanup:

- replacing the remaining global config imports with parameter/getter-based consumption where practical,
- making service wiring more explicit,
- and cleaning up the mutable identity slice that still lives as flat globals.

This ticket is the focused follow-up split out from `extract-typed-config-objects.md` so the extraction milestone could close honestly.

## Scope

Primary targets:

- remaining consumers still depending on flat config globals from `runtime/src/core/config.ts`
- mutable identity settings (`ASSISTANT_NAME`, avatars, user identity fields, trigger-pattern-adjacent behavior)
- low-risk service wiring sites where typed config objects can be passed or resolved explicitly

## Acceptance Criteria

- [ ] Remaining high-value consumers use typed config objects/getters or injected config parameters instead of flat globals where practical.
- [x] Mutable identity settings are isolated behind a clearer typed/configured seam instead of remaining an ad hoc flat-global exception.
- [x] Existing behavior and env/CLI/config precedence are preserved.
- [x] Existing tests still pass.
- [x] Config coverage remains at or above the current bar.
- [x] Any risky/unwieldy final consumers are split into explicit follow-up tickets instead of hidden in notes.

## Test / Validation Plan

- [x] Run the canonical config extraction audit:
  - `./scripts/audit-extract-typed-config-objects.sh`
- [x] Re-run config coverage evidence:
  - `./scripts/audit-core-config-keychain-coverage.sh`
- [x] Run targeted tests for touched consumers.
- [x] Run `bun run lint`.
- [x] Run `bun run typecheck`.

## Definition of Done

- [x] The remaining non-global config cleanup has an explicit proof path.
- [x] The mutable identity slice is either cleaned up or split into a narrower follow-up.
- [x] Evidence is recorded in `## Updates`.
- [x] The ticket can honestly say the remaining config-object migration work is materially smaller and better bounded.

## Updates

### 2026-03-27
- Created by splitting the remaining scope out of `kanban/50-done/extract-typed-config-objects.md` after the extraction/object-grouping milestone landed on `main`.
- Starting point after the merged extraction pass:
  - bare constant exports in `runtime/src/core/config.ts`: 10
  - typed config objects recorded by the audit: 11
  - evidence: `artifacts/extract-typed-config-objects/summary.md`
- The remaining work is specifically the consumer injection/global-import cleanup plus the mutable identity seam, not the already-landed grouped config object slices.
- Effort assessment: still an **M-sized** follow-up. The dominant cost is no longer the path/layout constants; it is the mutable identity slice (`ASSISTANT_NAME`, avatars, user identity fields, trigger-pattern updates) and the small set of direct consumers that still depend on those globals.
- Recommended execution plan:
  1. introduce a typed mutable identity seam in `runtime/src/core/config.ts` (for example `IDENTITY_CONFIG` / `getIdentityConfig()`), while preserving the existing setter behaviour and trigger-pattern updates;
  2. rewire the remaining identity-heavy consumers first (`agent-pool.ts`, agent-control identity handlers, auth/user-facing handlers, `channels/whatsapp.ts`, `channels/pushover.ts`);
  3. only touch path/layout globals opportunistically when the change is trivial, rather than widening into a full runtime-wide DI campaign;
  4. validate with `./scripts/audit-extract-typed-config-objects.sh`, `./scripts/audit-core-config-keychain-coverage.sh`, targeted tests, `bun run lint`, and `bun run typecheck`.
- This should stay scoped to a narrow mergeable slice. If the mutable identity seam turns out to be larger than expected, split again rather than forcing all remaining globals through one pass.
- Narrow identity-cleanup slice landed on `main`:
  - added `IDENTITY_CONFIG` plus `getIdentityConfig()` in `runtime/src/core/config.ts`, while keeping the existing setter surface and trigger-pattern updates intact;
  - rewired the lower-risk identity-heavy consumers first: `runtime/src/agent-pool.ts`, `runtime/src/agent-control/handlers/{agent,user,totp}.ts`, `runtime/src/channels/web/webauthn-auth.ts`, `runtime/src/channels/whatsapp.ts`, and `runtime/src/channels/pushover.ts`;
  - extended `runtime/test/config/config.test.ts` and `runtime/test/config/config-coverage-import.test.ts` so the new mutable identity seam is covered directly alongside the legacy flat exports.
- Validation/evidence for this slice:
  - targeted tests: `bun test runtime/test/config/config.test.ts runtime/test/config/config-coverage-import.test.ts runtime/test/agent-control/agent-control-handlers.test.ts runtime/test/agent-control/user-handler.test.ts runtime/test/agent-control/passkey-totp-handler.test.ts runtime/test/channels/web/webauthn-auth.test.ts runtime/test/tools/tracked-bash.test.ts`
  - config extraction audit: `./scripts/audit-extract-typed-config-objects.sh` → `typed_config_objects: 12`, `bare_constant_exports: 10` (`artifacts/extract-typed-config-objects/summary.md`)
  - config/keychain coverage audit: `./scripts/audit-core-config-keychain-coverage.sh` → `config_pct=100`, `keychain_pct=100`, `uncovered_lines=0` (`artifacts/add-tests-core-config-and-keychain/coverage-summary.md`)
  - static validation: `bun run lint`, `bun run typecheck`
- Remaining broader web-surface consumers were split explicitly into `kanban/10-next/finish-web-live-identity-getter-adoption.md` instead of widening this slice into a larger web-channel refactor.

## Links

- `kanban/50-done/extract-typed-config-objects.md`
- `kanban/10-next/finish-web-live-identity-getter-adoption.md`
- `runtime/src/core/config.ts`
- `scripts/audit-extract-typed-config-objects.sh`
- `artifacts/extract-typed-config-objects/summary.md`
- `./scripts/audit-core-config-keychain-coverage.sh`
