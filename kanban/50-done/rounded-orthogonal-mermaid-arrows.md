---
id: rounded-orthogonal-mermaid-arrows
title: Support rounded 90-degree arrow corners in Mermaid rendering
status: done
created: 2026-03-12
updated: 2026-03-17
completed: 2026-03-17
target_release: next
estimate: S
risk: low
priority: low
tags:
  - work-item
  - kanban
  - mermaid
  - rendering
  - ui
owner: pi
---

# Support rounded 90-degree arrow corners in Mermaid rendering

## Summary

Mermaid diagram edges now use globally rounded stroke joins/caps at render-time via a
menu-level CSS styling pass, which improves visual corner softness for flowchart-like
orthogonal connections without changing diagram source syntax or behavior.

This is implemented as a low-risk first pass (Path A) with a follow-up still open for
true rounded elbow geometry if needed.

## Problem Statement

Orthogonal connection corners in Mermaid-rendered flowcharts were visually sharp.
This work improves the global appearance with minimal-risk styling changes.

## Goals

- Improve edge corner appearance without per-diagram source changes.
- Apply styling globally across rendered Mermaid outputs in timeline and markdown panes.
- Keep changes low risk while preserving compatibility.
- Preserve an upgrade path to higher-fidelity rounded-elbow geometry.

## Acceptance Criteria

- [x] Rounded stroke joining/capping is applied consistently in Mermaid render outputs.
- [x] Behavior applies globally to Mermaid rendering in the web UI.
- [x] No broad functional regressions observed.
- [x] True geometric elbow rounding is documented as a follow-up when needed.

## Acceptance Notes

- Path A (renderer-level visual softening) was selected for this pass.
- Path B (true rounded-elbow geometry) remains the next incremental fidelity improvement.

## Investigation Notes

- Mermaid rendering is produced via vendored `beautiful-mermaid`.
- Since flowchart edge output uses shared edge primitives (`.edge`), a global
  post-style can be applied safely without touching diagram payloads.

## Updates

### 2026-03-17
- Added global Mermaid edge styling for rounded joints and rounded caps in:
  `piclaw/web/static/css/styles.css`.
- Kept global scope and low-risk footprint while improving visual smoothness.
- Closed this ticket as Path A first-pass polish.

## Links

- `kanban/50-done/fix-mermaid-vendor-build.md`
- `kanban/50-done/validate-mermaid-vendoring.md`
- `piclaw/web/static/css/styles.css`
- `piclaw/web/src/markdown.ts`
