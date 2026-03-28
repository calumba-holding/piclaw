---
id: group-web-channel-flat-files
title: "Group channels/web/ 56 flat files into sub-directories"
status: next
priority: medium
created: 2026-03-23
updated: 2026-03-27
tags:
  - refactor
  - modularity
  - P2
  - quality-assessment
owner: pi
blocked-by:
  - split-webchannel-god-class
---

# Group channels/web/ 56 flat files into sub-directories

## Summary

`runtime/src/channels/web/` has 56 files (7,030 lines) sitting at the root level with no sub-grouping, plus 5 existing sub-directories. The flat layout makes it hard to reason about module boundaries.

## Current structure

```
runtime/src/channels/web/           56 files, 7,030 lines (flat)
runtime/src/channels/web/http/      21 files, 2,251 lines
runtime/src/channels/web/handlers/   5 files, 1,590 lines
runtime/src/channels/web/workspace/  9 files, 1,352 lines
runtime/src/channels/web/terminal/   1 file,    378 lines
runtime/src/channels/web/vnc/        1 file,    296 lines
```

## Proposed grouping

| New sub-dir | Files to move | Lines |
|---|---|---:|
| `auth/` | `auth-runtime.ts`, `auth-gateway.ts`, `totp-auth.ts`, `webauthn-auth.ts`, `webauthn-enrol-page.ts` | ~750 |
| `sse/` | `sse.ts`, `agent-events.ts` | ~650 |
| `messaging/` | `message-store.ts`, `message-write-flows.ts`, `agent-message-store.ts`, `agent-message-service.ts` | ~500 |
| `theming/` | `ui-theme-data.ts`, `ui-theme-commands.ts`, `ui-bridge.ts` | ~500 |
| `cards/` | `adaptive-card-actions.ts`, `interaction-service.ts` | ~300 |
| `media/` | `media-service.ts`, `avatar-service.ts`, `link-previews.ts` | ~800 |

## Acceptance criteria

- [ ] No more than 15 files at the `web/` root level
- [ ] All imports updated (no broken paths)
- [ ] All tests still pass
- [ ] Test file structure mirrors src structure

## Notes

- Should be done **after** the WebChannel split (blocked-by) to avoid merge conflicts
- Pure file moves + import rewrites — no logic changes

## Updates

### 2026-03-27
- Repo-status audit refreshed the current layout counts to match the repo as it stands now.
- Ticket remains valid and explicitly downstream of `split-webchannel-god-class`; the flat root has grown to 56 files rather than shrinking.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
