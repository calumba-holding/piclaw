---
id: namespace-internal-extensions-and-skills-paths
title: Namespace internal extensions and packaged skills paths more clearly
status: done
priority: medium
created: 2026-03-28
updated: 2026-03-28
completed: 2026-03-28
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - repo-layout
  - extensions
  - skills
  - namespacing
owner: pi
blocked-by:
  - plan-broad-filesystem-reorg-from-audit
---

# Namespace internal extensions and packaged skills paths more clearly

## Summary

Create clearer path namespacing for built-in/internal extension and packaged
skill surfaces so the tree distinguishes more cleanly between:

- built-in packaged runtime assets
- experimental/internal runtime assets
- scaffolded project-local `.pi` assets
- user/workspace-local assets

## Why

The current tree makes it too easy to blur together:

- `runtime/extensions/`
- `runtime/skills/`
- `skel/.pi/extensions/`
- `skel/.pi/skills/`
- workspace/user `.pi/` runtime conventions

The broad filesystem reorg should not just rename directories at the top level;
it should also improve internal namespacing where ownership and packaging status
matter.

## Scope

- inventory current extension/skill path categories
- propose/land clearer grouping under `runtime/extensions/` and `runtime/skills/`
- confirm how scaffolded `skel/.pi/` paths should mirror or differ from runtime paths
- update loader/discovery/docs references as needed

## Non-goals

- no unrelated behavior refactors in extension/skill implementations
- no broad feature rewrites
- no forced public naming break unless justified and documented

## Acceptance Criteria

- [x] Built-in/internal/project-local extension and skill path categories are clearly defined
- [x] The chosen namespacing/grouping is documented
- [x] Loader/discovery/docs references are updated consistently
- [x] Validation covers the affected extension/skill path surfaces

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- This pass records review acceptance of the Stage 4 namespacing outcome already described on the ticket.

### 2026-03-28
- Stage 4 execution inputs were prepared in:
  - `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
  - `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`
  - `workitems/50-done/execute-stage4-extension-and-skill-namespacing.md`
- The current recommendation is to scope Stage 4 to packaged runtime namespacing first and treat `.pi/...` convention paths as compatibility-sensitive unless loader/discovery evidence proves a rename is necessary.
- Stage 4 then landed as a packaged-runtime namespacing batch:
  - `runtime/extensions/` grouped into `browser/`, `platform/windows/`, `viewers/`, `integrations/`, and `experimental/`
  - `runtime/skills/` grouped into `builtin/`, `operator/`, and `integrations/`
  - `.pi/extensions/`, `.pi/skills/`, and `.pi/agent/extensions/` intentionally preserved as stable convention paths

## Links

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `workitems/50-done/execute-stage4-extension-and-skill-namespacing.md`
- `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-steplist-2026-03-28.md`
- `docs/stage4-extension-skill-namespacing-autoresearch-prompt-2026-03-28.md`
- `runtime/extensions/`
- `runtime/skills/`
- `skel/.pi/extensions/`
- `skel/.pi/skills/`
