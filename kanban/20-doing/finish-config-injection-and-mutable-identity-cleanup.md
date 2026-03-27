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
- [ ] Mutable identity settings are isolated behind a clearer typed/configured seam instead of remaining an ad hoc flat-global exception.
- [ ] Existing behavior and env/CLI/config precedence are preserved.
- [ ] Existing tests still pass.
- [ ] Config coverage remains at or above the current bar.
- [ ] Any risky/unwieldy final consumers are split into explicit follow-up tickets instead of hidden in notes.

## Test / Validation Plan

- [ ] Run the canonical config extraction audit:
  - `./scripts/audit-extract-typed-config-objects.sh`
- [ ] Re-run config coverage evidence:
  - `./scripts/audit-core-config-keychain-coverage.sh`
- [ ] Run targeted tests for touched consumers.
- [ ] Run `bun run lint`.
- [ ] Run `bun run typecheck`.

## Definition of Done

- [ ] The remaining non-global config cleanup has an explicit proof path.
- [ ] The mutable identity slice is either cleaned up or split into a narrower follow-up.
- [ ] Evidence is recorded in `## Updates`.
- [ ] The ticket can honestly say the remaining config-object migration work is materially smaller and better bounded.

## Updates

### 2026-03-27
- Created by splitting the remaining scope out of `kanban/50-done/extract-typed-config-objects.md` after the extraction/object-grouping milestone landed on `main`.
- Starting point after the merged extraction pass:
  - bare constant exports in `runtime/src/core/config.ts`: 10
  - typed config objects recorded by the audit: 11
  - evidence: `artifacts/extract-typed-config-objects/summary.md`
- The remaining work is specifically the consumer injection/global-import cleanup plus the mutable identity seam, not the already-landed grouped config object slices.

## Links

- `kanban/50-done/extract-typed-config-objects.md`
- `runtime/src/core/config.ts`
- `scripts/audit-extract-typed-config-objects.sh`
- `artifacts/extract-typed-config-objects/summary.md`
- `./scripts/audit-core-config-keychain-coverage.sh`
