---
id: leverage-sourceinfo-for-provenance-debugging
title: "Use sourceInfo provenance in debug/introspection views"
status: inbox
priority: low
created: 2026-03-23
updated: 2026-03-23
tags:
  - work-item
  - kanban
  - upstream
  - dx
owner: 
---

# Use sourceInfo provenance in debug/introspection views

## Summary

Pi 0.62.0 adds structured `sourceInfo` (path, scope, source, origin, baseDir) to all resources, commands, tools, skills, and prompt templates. This replaces the ad-hoc `extensionPath`, `location`, and `source` fields.

PiClaw could surface this provenance in:

- The `/info` command output (already partially done via `extensionPath`)
- Web UI command palette / autocomplete hints
- A debug panel showing loaded extensions, their commands, and where they come from
- SDK introspection endpoints

## Scope

- After the 0.62.0 migration ticket is done, audit all places we show command/tool origin
- Add `sourceInfo.scope` (user/project/temporary) and `sourceInfo.source` to relevant UI surfaces
- Consider a "provenance" debug panel or tooltip in the web UI

## Updates

### 2026-03-23
- Identified as opportunity from pi 0.62.0 changelog

## Notes

- Depends on: `upgrade-pi-0-62-sourceinfo-migration`
- `SourceInfo` shape: `{ path, source, scope, origin, baseDir? }`
- `scope`: "user" | "project" | "temporary"
- `origin`: "package" | "top-level"

## Links
- Pi 0.62.0 changelog: "Unified source provenance via sourceInfo"
