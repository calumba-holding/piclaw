---
id: group-web-channel-flat-files
title: "Group channels/web/ 54 flat files into sub-directories"
status: next
priority: medium
created: 2026-03-23
updated: 2026-03-23
tags:
  - refactor
  - modularity
  - P2
  - quality-assessment
owner: pi
blocked-by:
  - split-webchannel-god-class
---

# Group channels/web/ 54 flat files into sub-directories

## Summary

`src/channels/web/` has 54 files (6,653 lines) sitting at the root level with no sub-grouping, plus 5 existing sub-directories. The flat layout makes it hard to reason about module boundaries.

## Current structure

```
src/channels/web/          54 files, 6,653 lines (flat)
src/channels/web/http/      7 files, 2,165 lines
src/channels/web/handlers/  5 files, 1,492 lines
src/channels/web/workspace/ 6 files, 1,297 lines
src/channels/web/terminal/  3 files,   367 lines
src/channels/web/vnc/       3 files,   292 lines
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

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
