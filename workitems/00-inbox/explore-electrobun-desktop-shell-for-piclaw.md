---
id: explore-electrobun-desktop-shell-for-piclaw
title: Explore Electrobun as a desktop shell/runtime option for Piclaw
status: inbox
priority: medium
created: 2026-03-21
updated: 2026-03-21
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - desktop
  - packaging
  - runtime
  - electrobun
  - windows
  - macos
  - linux
owner: pi
---

# Explore Electrobun as a desktop shell/runtime option for Piclaw

## Summary

Evaluate whether [Electrobun](https://electrobun.dev/) is a viable way to ship or
prototype a Piclaw desktop experience.

This should stay at **exploration/design** level first. The goal is to determine
whether Electrobun is a good fit for Piclaw's current architecture, packaging,
and runtime assumptions after the `runtime/` layout refactor — not to commit to
rewriting the product around a desktop shell prematurely.

The evaluation should cover whether Electrobun could help with any of these:

- a lightweight desktop wrapper around the existing web UI,
- local host-native install flows (especially on Windows),
- bundled runtime/service startup for local usage,
- and access to native desktop affordances that are awkward in the browser-only model.

## Why

Piclaw currently centers on a browser-first web shell plus Docker/repo/package
install flows. A desktop wrapper may eventually be useful for:

- simplifying host-native local installs,
- improving windowing/tray/notification behavior,
- bundling local runtime concerns more cleanly,
- and reducing friction for users who want an app-like experience instead of a browser tab.

Electrobun is worth exploring as one possible fit because the project already
leans heavily on Bun, but its viability needs to be compared against Piclaw's
existing Supervisor/container assumptions, packaging strategy, auth model, and
web UI architecture.

## Acceptance Criteria

- [ ] Document what Electrobun actually provides that differs from the current web + package flows.
- [ ] Compare Electrobun against Piclaw's current architecture: runtime process model, web UI, packaging, auth, updates, and local persistence.
- [ ] Identify whether Electrobun would be best treated as:
  - a thin desktop wrapper over the existing web server,
  - a new packaged local app mode,
  - a platform-specific experiment,
  - or out of scope.
- [ ] Capture platform support constraints and likely support boundary for:
  - macOS
  - Windows
  - Linux
- [ ] Call out any conflicts with the current container/runtime layout and service-manager assumptions.
- [ ] If viable, outline the smallest proof-of-concept path and non-goals.
- [ ] If not viable, document why and close/defer follow-up work cleanly.

## Implementation Paths

### Path A — evaluation only (recommended)
1. Review Electrobun's packaging/runtime model.
2. Compare it with Piclaw's current web shell and packaged Bun entrypoints.
3. Document concrete fit/mismatch areas.
4. Create follow-up implementation tickets only if the fit looks strong.

**Pros:** low risk, preserves optionality, avoids premature platform work.

**Cons:** no immediate user-facing desktop artifact.

### Path B — thin local-shell prototype
1. Wrap the current Piclaw web UI/runtime in a minimal Electrobun shell.
2. Validate window lifecycle, local startup, asset loading, and persistence.
3. Treat the result as an experiment rather than a shipping path.

**Pros:** quickly answers practical feasibility questions.

**Cons:** risks spending implementation time before architecture fit is clear.

## Recommended Path

Start with **Path A**.

This should first answer whether Electrobun is a better fit than the current web
shell / Docker / package strategy for any meaningful slice of Piclaw. If the
answer is yes, split a narrow proof-of-concept ticket afterward.

## Test Plan

### Research / design validation
- [ ] Review Electrobun docs/examples relevant to desktop windows, asset loading, IPC, packaging, and updates.
- [ ] Map Piclaw runtime assumptions that would need adaptation (web port, supervisor-managed lifecycle, persisted workspace state, auth/session flows).
- [ ] Compare expected install/update paths with current documented repo/package/Docker flows.
- [ ] Record open questions and blockers for each target platform.

### Proof-of-concept validation (only if pursued)
- [ ] Confirm Piclaw can launch in an Electrobun host without breaking the current web UI contract.
- [ ] Confirm local persistence paths are explicit and safe.
- [ ] Confirm restart/update behavior is understandable and supportable.

## Definition of Done

- [ ] Evaluation written up with a clear recommendation.
- [ ] Fit/mismatch with current Piclaw architecture documented.
- [ ] Platform support boundary stated explicitly.
- [ ] If viable, a follow-up implementation ticket exists with bounded scope.
- [ ] Ticket history updated with evidence and links.
- [ ] Ticket moved to `50-done/` if the evaluation is completed.

## Updates

### 2026-03-21
- Added as an exploration ticket to evaluate Electrobun as a potential desktop shell/runtime option for Piclaw.
- Initial framing keeps this at evaluation level first rather than assuming implementation.
- Quality: ★★★☆☆ 5/10 (problem: 1, scope: 1, test: 1, deps: 1, risk: 1)

## Notes

- Keep this separate from broader Windows/local-install feasibility unless the evaluation clearly overlaps enough to merge later.
- Avoid assuming Electrobun should replace the browser-first web shell; it may only make sense as an optional packaging mode.
- Preserve current runtime identity assumptions when evaluating local desktop modes:
  - active host/device
  - service manager expectations
  - workspace/profile paths
  - persisted auth/session state

## Links

- `workitems/00-inbox/audit-windows-local-install-feasibility.md`
- `workitems/00-inbox/host-native-linux-sandboxed-install-mode.md`
- `docs/install-from-repo.md`
- https://electrobun.dev/
