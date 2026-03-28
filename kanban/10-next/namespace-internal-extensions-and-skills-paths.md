---
id: namespace-internal-extensions-and-skills-paths
title: Namespace internal extensions and packaged skills paths more clearly
status: next
priority: medium
created: 2026-03-28
updated: 2026-03-28
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

- [ ] Built-in/internal/project-local extension and skill path categories are clearly defined
- [ ] The chosen namespacing/grouping is documented
- [ ] Loader/discovery/docs references are updated consistently
- [ ] Validation covers the affected extension/skill path surfaces

## Links

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `kanban/20-doing/plan-broad-filesystem-reorg-from-audit.md`
- `runtime/extensions/`
- `runtime/skills/`
- `skel/.pi/extensions/`
- `skel/.pi/skills/`
