---
id: minimal-web-panel-host-spike
title: Prototype a minimal WebPanelExtension host before explorer extraction
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: next
tags:
  - work-item
  - kanban
  - architecture
  - web
  - extensions
  - panels
owner: pi
---

# Prototype a minimal WebPanelExtension host before explorer extraction

## Summary

Before attempting the large future-major task of extracting the workspace
explorer into a panel extension, build a minimal host/contract spike for web
panels in isolation.

This ticket is intentionally narrower than full explorer extraction. The goal is
to validate the lifecycle, placement model, and bridge shape with a trivial or
placeholder panel first.

## Why

The current explorer extraction ticket is valuable, but broad and high-risk.
A smaller precursor can answer the architecture question without immediately
untangling the existing explorer component.

## Acceptance Criteria

- [ ] Define the smallest useful `WebPanelExtension` / `PanelBridge` / `PanelInstance` contract slice.
- [ ] Add a minimal host slot or registration path for sidebar or bottombar panels.
- [ ] Mount a trivial sample panel through that contract.
- [ ] Confirm failure isolation/lifecycle expectations at the host boundary.
- [ ] Document whether the contract seems strong enough to support eventual explorer extraction.
- [ ] Create follow-up implementation tickets only after the spike findings are captured.

## Notes

- This is a precursor to explorer extraction, not a replacement for it.
- Avoid broad explorer refactors in this spike.
- Favor learning whether the host surface is viable at all.

## Links

- `workitems/00-inbox/workspace-explorer-panel-extension.md`
- `workitems/50-done/extension-system-refactor-for-editor-and-terminal.md`
