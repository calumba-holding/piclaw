# Autoresearch: audit silent catch blocks

## Objective
Sync the higher-level master quality-cleanup ticket now that the silent-catch audit ticket itself is review-ready. The implementation work is complete; this final pass is about preventing stale portfolio metadata.

Success means the master ticket that tracks blocking quality items reflects that `audit-silent-catch-blocks` is no longer `next`.

We are optimizing for durable closure while keeping the repo state coherent.

## Metrics
- **Primary**: `master_ticket_sync_gaps` (count, lower is better) — stale master-ticket references that still show the silent-catch audit as incomplete
- **Secondary**:
  - `repo_silent_catch_blocks` — repo-wide empty `catch {}` count (should stay 0)
  - `repo_silent_promise_catches` — repo-wide empty `.catch(() => {})` count (should stay 0)
  - `guard_check_present` — 1 when package/quality guard wiring still exists, else 0

## How to Run
`./autoresearch.sh` — emits structured `METRIC name=value` lines.

## Files in Scope
- `kanban/40-review/audit-silent-catch-blocks.md` — governing ticket, already review-ready
- `kanban/30-blocked/codebase-quality-cleanup-2026.md` — master ticket whose sub-ticket status needs syncing
- `.github/workflows/ci.yml`, `runtime/scripts/silent-swallow-metrics.ts`, `runtime/test/scripts/silent-swallow-metrics.test.ts`, `autoresearch.checks.sh`, `package.json` — guard infrastructure that must remain intact
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
- New target: sync the master `codebase-quality-cleanup-2026` tracker so it no longer reports the silent-catch audit as `next`.
- The master tracker row for `audit-silent-catch-blocks` now matches reality (`review`), so the portfolio view is no longer stale.
