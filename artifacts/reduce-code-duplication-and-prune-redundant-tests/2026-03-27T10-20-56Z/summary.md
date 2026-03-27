# Reduce code duplication and prune redundant test coverage — Path A evidence

Date: 2026-03-27
Ticket: `kanban/50-done/reduce-code-duplication-and-prune-redundant-tests.md`

## Scope used
- Path A only: small, high-confidence cleanup.
- No architecture splits (`split-webchannel-god-class`, `split-agentpool-god-class`) touched.

## Low-risk duplication targets identified
1. Repeated `ExtensionAPI` test-double boilerplate across extension test suites.
2. Thin registration-only extension tool tests that overlap with behavior tests.
3. Repeated workspace/env + DB setup glue across extension tests (left for follow-up).
4. Repeated WebChannel test bootstrap fixture + DB reset setup (left for follow-up ticket due wider blast radius).

## Concrete duplication seam consolidated
- Added shared helper: `runtime/test/extensions/fake-extension-api.ts`.
- Updated suites to use it:
  - `runtime/test/extensions/extensions-keychain-tools.test.ts`
  - `runtime/test/extensions/extensions-internal-tools.test.ts`
  - `runtime/test/extensions/extensions-workspace-search.test.ts`

This removes repeated mock method scaffolding while preserving each suite’s behavior assertions.

## Redundant test coverage pruned
- Removed `registers keychain tool` from `extensions-keychain-tools.test.ts`.

Equivalent/stronger remaining coverage:
- The remaining keychain behavior tests (`list`, `get`, `set`, `delete`, and validation paths) all obtain and execute the registered `keychain` tool. If registration breaks, these tests fail earlier and with stronger functional signal than a name-only registration smoke check.

## Validation (on `main`)
1. Targeted affected suites:
   - `cd runtime && PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/extensions/extensions-keychain-tools.test.ts test/extensions/extensions-internal-tools.test.ts test/extensions/extensions-workspace-search.test.ts`
   - Result: 15 passed, 0 failed.
2. Lint:
   - `bun run lint`
   - Result: pass.
3. Typecheck:
   - `bun run typecheck`
   - Result: pass.

## Follow-up tickets split (larger/riskier candidates)
- `kanban/10-next/consolidate-web-channel-test-bootstrap-fixtures.md`
