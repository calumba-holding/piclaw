---
id: adopt-pino-structured-logging
title: "Adopt pino structured logging (replace 127 console.* calls)"
status: next
priority: medium
created: 2026-03-23
updated: 2026-03-23
tags:
  - quality
  - observability
  - P2
  - quality-assessment
owner: pi
blocked-by: []
---

# Adopt pino structured logging (replace 127 console.* calls)

## Summary

The codebase has 127 raw `console.log/warn/error` calls scattered across 31 files. `pino` is already in `package.json` but only imported in 2 files (`auth-gateway.ts`, `whatsapp.ts`) and not consistently used.

## Scope

1. Create a per-module logger factory (`src/utils/logger.ts`) wrapping pino
2. Replace all 127 `console.*` calls with structured logger calls
3. Add log levels aligned to severity (debug/info/warn/error)
4. Ensure logs include module context (e.g. `{ module: "agent-pool" }`)

### Top files to migrate

| File | console.* calls |
|---|---:|
| `channels/web.ts` | ~11 |
| `agent-pool.ts` | ~8 |
| `channels/whatsapp.ts` | ~6 |
| `db/connection.ts` | ~5 |
| `ipc.ts` | ~5 |

## Acceptance criteria

- [ ] Zero `console.log/warn/error` calls remain in `src/`
- [ ] All log output goes through pino
- [ ] Log level is configurable via env var (`PICLAW_LOG_LEVEL`)
- [ ] Structured JSON output in production; pretty-print in development

## Notes

- Pairs well with the silent-catch audit — many catch blocks should log via the new logger
- pino is already a dependency; no new packages needed

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket, P2 follow-up)
