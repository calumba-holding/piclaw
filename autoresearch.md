# Autoresearch: audit silent catch blocks

## Objective
Close the governing kanban ticket cleanly now that the audit, tests, quality hooks, and CI guard are all in place. The governing ticket started as `kanban/10-next/audit-silent-catch-blocks.md` and should now reflect completed/review-ready status with acceptance criteria checked off.

The implementation work is complete. The resumed loop is now focused on durable project hygiene: updating the ticket/lane/status/evidence so future agents do not rediscover or reopen this audit unnecessarily.

Success means the ticket has:
- completed acceptance checkboxes,
- an updated status/frontmatter consistent with its lane,
- recorded evidence that the guard exists in quality/autoresearch/CI.

We are optimizing for durable closure while keeping the repo state coherent.

## Metrics
- **Primary**: `ticket_closure_gaps` (count, lower is better) — outstanding ticket/lane/acceptance gaps for the silent-catch audit ticket
- **Secondary**:
  - `repo_silent_catch_blocks` — repo-wide empty `catch {}` count (should stay 0)
  - `repo_silent_promise_catches` — repo-wide empty `.catch(() => {})` count (should stay 0)
  - `guard_check_present` — 1 when package/quality guard wiring still exists, else 0

## How to Run
`./autoresearch.sh` — emits structured `METRIC name=value` lines.

## Files in Scope
- `kanban/10-next/audit-silent-catch-blocks.md` or its moved successor lane path — governing ticket to update/move
- `.github/workflows/ci.yml` — CI adoption point for the silent-swallow guard
- `runtime/scripts/silent-swallow-metrics.ts` — reusable scanner/metrics script for empty swallow detection
- `runtime/test/scripts/silent-swallow-metrics.test.ts` — focused regression coverage for the scanner
- `autoresearch.checks.sh` and `package.json` — existing local/backpressure guard wiring must stay intact
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
- New target: wire `check:silent-swallows` into CI so the audit guard is enforced outside local/autoresearch workflows too.
- `.github/workflows/ci.yml` now runs `bun run check:silent-swallows` before the web build, closing the last obvious enforcement gap.
- New target: update the governing kanban ticket so its lane/status/acceptance criteria reflect the completed audit and new regression guards.
- The governing ticket has been moved to `kanban/40-review/`, its status/frontmatter were updated, acceptance criteria were checked off, and evidence notes now mention the quality/autoresearch/CI guard layers.
