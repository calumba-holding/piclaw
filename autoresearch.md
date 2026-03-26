# Autoresearch: add tests for core/config and secure/keychain

## Objective
Raise automated coverage for `runtime/src/core/config.ts` and `runtime/src/secure/keychain.ts` with isolated, deterministic tests that keep changes narrowly scoped to this ticket.

## Metrics
- **Primary**: `uncovered_lines` (lower is better) — combined uncovered line count across `src/core/config.ts` and `src/secure/keychain.ts`
- **Secondary**: `config_pct`, `keychain_pct` — targeted line coverage percentages for each file

## How to Run
- `./autoresearch.sh` — runs targeted coverage and writes `METRIC` lines
- `./scripts/audit-core-config-keychain-coverage.sh` — canonical repo entrypoint for the targeted audit/evidence pass

## Files in Scope
- `runtime/test/config/config.test.ts` — targeted coverage for module-init config resolution and runtime setters
- `runtime/test/keychain.test.ts` — targeted coverage for keychain CRUD, placeholder resolution, and failure modes
- `runtime/test/helpers.ts` — small reusable env/workspace isolation helpers if needed
- `runtime/test/config/*` — subprocess harness/helpers plus any dedicated config coverage tests
- `runtime/test/keychain-coverage-import.test.ts` — dedicated plain-import coverage test if needed to exercise module-init branches
- `scripts/audit-core-config-keychain-coverage.sh` — stable coverage/evidence command for this ticket
- `kanban/10-next/add-tests-core-config-and-keychain.md` — ticket evidence / acceptance updates
- `artifacts/add-tests-core-config-and-keychain/*` — generated coverage evidence

## Off Limits
- Production refactors unrelated to testing these two modules
- Broad runtime architectural changes
- Optional browser/manual suites

## Constraints
- Acceptance targets: `core/config.ts` coverage >= 50%, `secure/keychain.ts` coverage >= 60%
- Tests must use isolated temp state and avoid leaking `process.env` between cases
- Prefer targeted tests over source refactors
- Follow repair-first validation: targeted tests -> lint -> typecheck -> broader validation only if needed
- Keep evidence mergeable back to `main`

## What's Been Tried
- First attempt crashed because a new config setter test used the wrong `importFresh()` path relative to `runtime/test/helpers.ts`; keep module paths relative to the helper, not the caller.
- Switched `core/config.ts` coverage to deterministic subprocess-backed tests so env + argv resolution happen in isolated child processes with no parent `process.env` leakage.
- Added an in-process setter/persistence test for `setAssistantName()` / `setWebTotpSecret()` to cover mutable runtime branches that subprocess snapshots cannot exercise.
- Reworked `secure/keychain.ts` tests around isolated temp workspaces + in-memory DBs, covering CRUD, file-backed key material, provider overrides, placeholder/env resolution, and unsupported-KDF / missing-username failures.
- Added `./scripts/audit-core-config-keychain-coverage.sh` to generate repeatable coverage evidence under `artifacts/add-tests-core-config-and-keychain/`.
- A config-only follow-up improved the metric without perturbing keychain coverage: an in-process config init test now captures deprecated-env warnings, CLI argv parsing, string boolean/number coercions, and the branch that removes an empty `web` object when clearing the TOTP secret.
- Avoid adding more import-heavy keychain edge-case tests casually: one discarded attempt caused Bun LCOV to undercount keychain execution and dropped reported coverage below acceptance even though runtime behavior was fine.
- Best win so far: keep the runtime tests stable, but run extra plain-import coverage sweeps as standalone Bun test processes and merge their LCOV in `./scripts/audit-core-config-keychain-coverage.sh`. That preserves deterministic isolation for import-time config/keychain behavior and counts those branches correctly without depending on multi-file module-cache order.
