---
id: audit-silent-catch-blocks
title: "Audit 188 silent catch {} blocks for error visibility"
status: review
priority: high
created: 2026-03-23
updated: 2026-03-26
tags:
  - quality
  - error-handling
  - P1
  - quality-assessment
owner: pi
blocked-by: []
---

# Audit 188 silent catch {} blocks for error visibility

## Summary

The codebase has 188 `catch {}` (silent) blocks vs 96 `catch(e)` (named) blocks — a 2:1 swallow ratio. This means most errors are completely invisible, making debugging and incident response harder than it needs to be.

## Scope

Audit every `catch {}` block across `src/`:

1. **Intentional swallows** (file-stat, JSON-parse, cleanup) → annotate with `/* expected: <reason> */`
2. **Unexpected swallows** → add `catch (err) { console.warn(...) }` or structured logging
3. **Hidden bugs** → fix the underlying issue

### Top offenders by file

| File | Silent catches |
|---|---:|
| `channels/web/workspace/file-service.ts` | 19 |
| `agent-pool.ts` | 15 |
| `channels/web.ts` | 12 |
| `channels/web/terminal/terminal-session-service.ts` | 11 |
| `channels/web/vnc/vnc-session-service.ts` | 8 |
| `channels/web/handlers/workspace.ts` | 8 |
| `db/connection.ts` | 7 |
| `channels/web/link-previews.ts` | 6 |

## Acceptance criteria

- [x] Every `catch {}` block either has an explanatory comment or logs the error
- [x] No new silent catches introduced without justification
- [x] Critical paths (DB, auth, agent runs) always log errors

## Notes

- Many silent catches in file-service are defensible (stat/readdir on missing files)
- Agent-pool and WebChannel catches are more concerning — they may hide real failures
- This pairs well with the pino logging adoption (P2 ticket)
- Outcome: repo-wide empty `catch {}` and empty `.catch(() => {})` patterns in first-party code were audited to zero, with explicit `/* expected: ... */` justifications for intentional swallows and warnings where silence was unsafe.
- Guarding: `runtime/scripts/silent-swallow-metrics.ts` now backs `check:silent-swallows`, is wired into `bun run quality`, autoresearch backpressure checks, focused script tests, and GitHub CI.
- Evidence: autoresearch branch `autoresearch/exp-mn74ptxb-o4lp`, commits `f77cef0`, `97f71f7`, `e3e6ed7`, `36d7526`, `782a462`, and `3780cb9`.

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
