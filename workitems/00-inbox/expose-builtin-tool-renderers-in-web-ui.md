---
id: expose-builtin-tool-renderers-in-web-ui
title: "Explore custom renderCall/renderResult for built-in tools in web UI"
status: inbox
priority: low
created: 2026-03-23
updated: 2026-03-23
tags:
  - work-item
  - kanban
  - upstream
  - web-ui
owner: 
---

# Explore custom renderCall/renderResult for built-in tools in web UI

## Summary

Pi 0.62.0 makes built-in tools (read, write, edit, bash, grep, find, ls) extensible via `ToolDefinition`. Extension authors can now override `renderCall` and `renderResult` with custom components.

This opens the door for PiClaw's web UI to provide richer rendering of tool calls — e.g. syntax-highlighted file diffs for `edit`, collapsible directory trees for `ls`, or inline image previews for `read` on image files.

## Scope

- Evaluate which built-in tools would benefit most from custom web renderers
- Prototype one renderer (likely `edit` → show diff view) as proof of concept
- Determine if this should be an extension or a core PiClaw feature

## Updates

### 2026-03-23
- Identified as opportunity from pi 0.62.0 changelog

## Notes

- Requires pi ≥ 0.62.0
- `renderCall`/`renderResult` must return a `Component` if defined (no fallback)
- Low priority — current tool output rendering is functional

## Links
- Pi 0.62.0 changelog: "Built-in tools as extensible ToolDefinitions"
- Pi docs: extensions.md
