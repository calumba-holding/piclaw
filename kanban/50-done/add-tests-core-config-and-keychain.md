---
id: add-tests-core-config-and-keychain
title: "Add tests for core/config and secure/keychain (0-3% coverage)"
status: done
priority: high
created: 2026-03-23
updated: 2026-03-26
tags:
  - tests
  - coverage
  - P1
  - quality-assessment
owner: pi
blocked-by: []
---

# Add tests for core/config and secure/keychain (0-3% coverage)

## Summary

Two critical modules have near-zero test coverage:

| Module | Src Lines | Test Lines | Coverage |
|---|---:|---:|---|
| `core/` (config.ts) | 768 | 25 | 3% |
| `secure/` (keychain.ts) | 304 | 0 | 0% |

`core/config.ts` exports 45 constants and is imported by 38 files — it's the most-depended-on module in the codebase. `secure/keychain.ts` handles encrypted secret storage.

## Scope

### core/config.ts
- Test env var parsing (port, timeout, boolean flags)
- Test fallback chains (CLI → env → config file → default)
- Test edge cases (missing env, invalid values, NaN ports)

### secure/keychain.ts
- Test CRUD operations (list, get, set, delete)
- Test encryption/decryption round-trip
- Test missing master key behavior
- Test entry type handling (token, password, basic, secret)

## Acceptance criteria

- [x] `core/` test ratio ≥ 50%
- [x] `secure/` test ratio ≥ 60%
- [x] Tests use isolated temp databases, not the live store
- [x] No mocking of `process.env` that leaks between tests

## Updates

- Added deterministic subprocess-backed config tests in `runtime/test/config/config.test.ts` plus `runtime/test/config/config-subprocess.ts` so module-init env/argv parsing runs in isolated child processes instead of sharing parent `process.env` state.
- Added dedicated isolated import coverage tests in `runtime/test/config/config-coverage-import.test.ts` and `runtime/test/keychain-coverage-import.test.ts`, then updated `./scripts/audit-core-config-keychain-coverage.sh` to run deterministic coverage sweeps separately, merge LCOV, and normalize out blank / structural-only / template-literal-content lines that Bun reports as uncovered even though they are not independently executable statements.
- Reworked `runtime/test/keychain.test.ts` around isolated temp workspaces and in-memory databases, covering CRUD, file-backed key material, provider overrides, placeholder/env resolution, and failure cases.
- Added `withTempWorkspaceEnv()` in `runtime/test/helpers.ts` for small reusable env + workspace isolation.
- Added canonical evidence command `./scripts/audit-core-config-keychain-coverage.sh`.
- Evidence: `artifacts/add-tests-core-config-and-keychain/coverage-summary.md`
  - normalized executable-line coverage: `src/core/config.ts` 100%, `src/secure/keychain.ts` 100%
  - raw merged LCOV before normalization: `src/core/config.ts` 97.99%, `src/secure/keychain.ts` 98.91%
  - excluded raw LCOV rows are documented in `artifacts/add-tests-core-config-and-keychain/coverage-exclusions.json`
- Validation:
  - `PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/config/config-coverage-import.test.ts`
  - `PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/keychain-coverage-import.test.ts`
  - `PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/config/config.test.ts test/keychain.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `./scripts/audit-core-config-keychain-coverage.sh`

## Notes

- Config testing may require process-level isolation (env vars are global)
- Keychain tests should use an in-memory SQLite database
- Also consider adding tests for `utils/` (currently 20% — QR engine at 586 lines is untested)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
