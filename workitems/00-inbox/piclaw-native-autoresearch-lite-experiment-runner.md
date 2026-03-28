---
id: piclaw-native-autoresearch-lite-experiment-runner
title: Build a piclaw-native autoresearch-lite experiment runner
status: inbox
priority: medium
created: 2026-03-19
updated: 2026-03-24
target_release: later
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - research
  - benchmarking
  - automation
  - web
  - adaptive-cards
  - generative-ui
owner: pi
---

# Build a piclaw-native autoresearch-lite experiment runner

## Summary

Build a Piclaw-native, web-first experiment runner inspired by `pi-autoresearch`
but aligned with Piclaw's product model.

This ticket is currently a **deferred future direction**, not the primary near-term
implementation path. The active path is `autoresearch-sub-agent-supervisor`, which
should validate demand and expose concrete gaps before Piclaw commits to a native
reimplementation.

The runner should:

- preserve durable experiment files in the workspace,
- log runs append-only,
- enforce explicit keep/discard/revert semantics,
- provide timeline-visible status and controls,
- and use the **generative UI floating pane** as the richer dashboard surface.

This should be framed as **autoresearch-lite** for v1:

- bounded, resumable experiment segments,
- explicit pause/resume/stop controls,
- and no hidden “run forever” behavior by default.

## Acceptance Criteria

- [ ] A setup flow exists that creates the core experiment files:
  - `autoresearch.md`
  - `autoresearch.sh`
  - `autoresearch.jsonl`
  - optional `autoresearch.checks.sh`
  - optional `autoresearch.ideas.md`
- [ ] Piclaw has a clear tool contract for:
  - `init_experiment`
  - `run_experiment`
  - `log_experiment`
- [ ] `run_experiment` supports structured `METRIC name=value` parsing.
- [ ] `log_experiment` supports explicit statuses:
  - `keep`
  - `discard`
  - `crash`
  - `checks_failed`
- [ ] V1 preserves append-only run history and resumability from persisted files.
- [ ] Timeline-native status/control UI exists using normal messages and/or Adaptive Cards.
- [ ] The experiment dashboard opens in the **generative UI floating pane** from the canonical timeline experiment entry.
- [ ] User can pause, resume, stop, and reopen the dashboard without losing experiment state.
- [ ] V1 explicitly chooses and documents its keep/revert policy and commit behavior.

## Implementation Paths

### Path A — file-backed experiment loop + timeline controls + generative pane dashboard (recommended)
1. Implement the experiment files and tool contract first.
2. Add compact timeline status/control UI.
3. Render the richer dashboard in the generative UI floating pane.
4. Start with bounded segments and explicit resume rather than hidden background looping.

**Pros:**
- matches Piclaw's web-first product model
- preserves the best upstream ideas
- reuses the floating generative UI surface already being designed
- keeps the first implementation bounded and inspectable

**Cons:**
- depends on the floating generative pane work for the best dashboard UX
- introduces a new experiment-domain workflow with several moving pieces

### Path B — timeline-only v1, dashboard later
1. Implement files + tools + timeline receipts only.
2. Defer the richer dashboard until after the generative pane host lands.

**Pros:**
- smaller first slice
- unblocks the core experiment model quickly

**Cons:**
- weaker monitoring UX
- likely causes rework once the richer dashboard is introduced

## Recommended Path

Path A — build the experiment model and use the **generative UI floating pane**
for the richer dashboard surface.

This gives Piclaw a web-native interpretation of the upstream idea without
copying the TUI widget mechanics.

## Test Plan

- [ ] Add focused tests for experiment session setup and file creation.
- [ ] Add tests for `METRIC name=value` parsing and metric validation.
- [ ] Add tests for keep/discard/crash/checks_failed state handling.
- [ ] Add tests for append-only JSONL logging and resume behavior.
- [ ] Add web tests for timeline control visibility and actions.
- [ ] Add web tests for opening/reopening the dashboard in the generative UI floating pane.
- [ ] Validate that pause/resume/stop actions are reflected safely in the timeline.
- [ ] Run `bun run build:web` from `/workspace/piclaw/piclaw` if implementation proceeds.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw` if implementation proceeds.

## Definition of Done

- [ ] Core experiment files and tool contract exist.
- [ ] Experiment runs are durably logged append-only.
- [ ] Resume behavior from persisted files is documented and working.
- [ ] Timeline-native status/control surface exists.
- [ ] Dashboard opens in the generative UI floating pane.
- [ ] Keep/revert/commit policy is explicit and enforced.
- [ ] Deferred scope is split into follow-up tickets if needed.
- [ ] Update history records implementation and validation evidence.

## Updates

### 2026-03-24
- Board review decision: defer this as a **future native-v2 path** rather than keep it in the active ready queue.
- Lane change: `10-next` → `00-inbox`.
- Rationale:
  - `workitems/20-doing/autoresearch-sub-agent-supervisor.md` is the primary near-term implementation path,
  - `workitems/20-doing/timeline-launched-floating-generative-widget-pane.md` is still the foundation for the preferred dashboard host,
  - and running a native reimplementation in parallel would create avoidable strategy/WIP duplication.
- Keep this ticket as the place to capture a later native rewrite if the supervisor MVP proves valuable but constrained.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

### 2026-03-19
- Created as the concrete follow-up to `investigate-pi-autoresearch`.
- Seeded from the new design note at `docs/autoresearch-lite-design.md`.
- User direction captured: use the **generative UI pane** for the dashboard rather than inventing a second dashboard host.
- Explicitly depends on the floating generative pane work for the preferred dashboard UX.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Notes

- Prefer bounded, resumable segments over implicit forever-loops in v1.
- Keep durable files in the workspace even if later SQLite indexing is added for faster web state.
- The canonical experiment control point should remain a timeline message/card.
- The richer dashboard should be reopenable from that timeline entry at any time.
- Do **not** run this in parallel with `autoresearch-sub-agent-supervisor` unless the board explicitly decides to pursue two competing autoresearch paths at once.

## Links

- `workitems/50-done/investigate-pi-autoresearch.md`
- `docs/autoresearch-lite-design.md`
- `workitems/20-doing/timeline-launched-floating-generative-widget-pane.md`
- `workitems/20-doing/autoresearch-sub-agent-supervisor.md`
- `/workspace/tmp/pi-autoresearch/README.md`
- `/workspace/tmp/pi-autoresearch/extensions/pi-autoresearch/index.ts`
