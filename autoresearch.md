# Autoresearch: audit silent catch blocks

## Objective
Add focused regression tests for the silent-swallow scanner so the new quality guard itself is verified, especially around comment false positives and `--check` failure behavior. The governing ticket is `kanban/10-next/audit-silent-catch-blocks.md`.

The repo-wide cleanup and quality-hook wiring are complete. The resumed loop is now focused on test assurance for `runtime/scripts/silent-swallow-metrics.ts`.

Success means the repo has a dedicated script test that verifies:
- comment/doc strings do not count as silent swallows,
- real empty catches/promise catches are detected, and
- `--check` mode fails when detections are present.

We are optimizing for durable audit coverage while keeping builds/tests passing.

## Metrics
- **Primary**: `silent_swallow_test_gaps` (count, lower is better) — missing focused regression tests or missing backpressure execution for the scanner test
- **Secondary**:
  - `repo_silent_catch_blocks` — repo-wide empty `catch {}` count (should stay 0)
  - `repo_silent_promise_catches` — repo-wide empty `.catch(() => {})` count (should stay 0)
  - `guard_check_present` — 1 when the scanner still has its package/quality guard wiring, else 0

## How to Run
`./autoresearch.sh` — emits structured `METRIC name=value` lines.

## Files in Scope
- `runtime/scripts/silent-swallow-metrics.ts` — reusable scanner/metrics script for empty swallow detection
- `runtime/test/scripts/silent-swallow-metrics.test.ts` — focused regression coverage for the scanner
- `autoresearch.checks.sh` — backpressure correctness hook; should run the new test or a targeted suite containing it
- `package.json` — existing guard wiring must stay intact
- `runtime/src/**`, `runtime/web/src/**`, `runtime/scripts/**`, `runtime/extensions/**`, `runtime/test/**`, `skel/scripts/**` — monitored repo code that must remain at zero silent swallows

## Off Limits
- `runtime/web/static/**`
- vendored/minified files
- generated artifacts unless required by the normal build
- unrelated refactors outside silent-catch auditing

## Constraints
- Keep behavior stable
- No new dependencies
- TypeScript must typecheck
- Relevant tests must pass after kept changes
- Prefer comments for expected/racy cleanup paths; prefer warnings for unexpected failures in backend/critical paths

## What's Been Tried
- Baseline established at `silent_catch_blocks=97`, `critical_silent_catches=33`, `silent_promise_catches=17`.
- Audited all empty `catch {}` blocks in `runtime/src` + `runtime/web/src` and removed the bare-empty form entirely.
- Backend/critical-path changes now log when hidden failures would matter: agent-pool branch/session sync, web theme init fallback, oversized upload cleanup, workspace menu actions, tab listener failures, and WhatsApp availability publishing.
- Intentional/racy cleanup paths now carry explicit `/* expected: ... */` justification comments instead of silent empties: PTY/procfs scans, websocket teardown, iframe/widget messaging, localStorage writes, pointer capture, resize observers, Ghostty/terminal teardown, and browser popup/mobile viewport quirks.
- Follow-up sweep also removed promise-style silent swallows such as `.catch(() => {})`, again preferring explicit justification comments for expected best-effort UI/background work.
- Core runtime/web scope is now at zero silent catches and zero silent promise swallows.
- Resume target: remaining repo-wide code outside the core runtime/web path still has a small tail of empty cleanup catches in scripts/extensions/tests/skel; finish that tail without regressing the cleaned core scope.
- Benchmark instrumentation was tightened to ignore comment-only false positives while still counting real empty catch blocks in code.
- Repo-wide code is now at zero silent catches and zero silent promise swallows.
- New target: convert the scanner into a durable regression guard by wiring it into package scripts, `quality`, and autoresearch checks.
- Added `runtime/scripts/silent-swallow-metrics.ts --check`, a `check:silent-swallows` package script, `quality` integration, and an autoresearch backpressure check so regressions now fail fast.
- New target: add focused tests for the scanner itself so comment handling and `--check` semantics stay reliable.
- Focused tests exposed and then fixed an underlying bug in the scanner: it originally ignored comments but still counted `catch {}` patterns inside strings/template text. The scanner now masks all non-code spans and the dedicated script test covers comment-only false positives, real detections, and `--check` failure behavior.
