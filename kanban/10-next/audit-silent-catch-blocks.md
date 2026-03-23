---
id: audit-silent-catch-blocks
title: "Audit 188 silent catch {} blocks for error visibility"
status: next
priority: high
created: 2026-03-23
updated: 2026-03-23
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

- [ ] Every `catch {}` block either has an explanatory comment or logs the error
- [ ] No new silent catches introduced without justification
- [ ] Critical paths (DB, auth, agent runs) always log errors

## Notes

- Many silent catches in file-service are defensible (stat/readdir on missing files)
- Agent-pool and WebChannel catches are more concerning — they may hide real failures
- This pairs well with the pino logging adoption (P2 ticket)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
