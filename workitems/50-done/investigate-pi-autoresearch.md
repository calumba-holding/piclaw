---
id: investigate-pi-autoresearch
title: Investigate pi-autoresearch for autonomous experiment-loop ideas
status: done
priority: medium
created: 2026-03-14
updated: 2026-03-19
completed: 2026-03-19
target_release: later
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - research
  - extensions
  - automation
  - benchmarking
  - autoresearch
owner: pi
---

# Investigate pi-autoresearch for autonomous experiment-loop ideas

## Summary

Review `pi-autoresearch` as a later research item for PiClaw and related Pi
workflows.

Conclusion:

- `pi-autoresearch` is **worth mining for ideas**.
- It is **not** something Piclaw should port directly.
- The best reusable parts are its **experiment model** and **persistence discipline**, not its TUI widget/dashboard implementation.

The strongest reusable ideas are:

- the `init_experiment` / `run_experiment` / `log_experiment` split
- append-only experiment logs
- `METRIC name=value` benchmark output
- optional post-run checks with a distinct `checks_failed` state
- explicit keep/discard/revert decisions
- restart continuity from workspace files
- confidence scoring against a noise floor

## Why

`pi-autoresearch` packages a coherent loop around:

- editing
- running a benchmark
- logging results
- auto-committing successful candidates
- reverting failed or losing changes
- resuming after restart from persisted state files

That is relevant to later Piclaw work for:

- performance tuning workflows
- controlled autonomous optimization experiments
- benchmarking vendor/build/runtime changes
- UI ideas for long-running research or tuning jobs

## What was investigated

- How the extension/tool split is structured.
- How the always-visible status widget is implemented.
- How the `/autoresearch` dashboard is rendered and updated.
- How session continuity works across restart/context resets.
- How append-only experiment logs are stored and consumed.
- How keep/revert decisions are enforced safely.
- Whether any of its ideas should inform Piclaw:
  - experiment dashboards
  - long-running optimization jobs
  - benchmark harness integration
  - resumable autonomous workflows

## Findings

### 1. Extension / skill split is very strong

The upstream project separates:

- **skill** — gathers goal/metric/scope and writes the session files
- **extension** — generic infrastructure for init/run/log, widget state, and runtime behavior

This split is directly worth reusing conceptually in Piclaw.

### 2. Persistence model is excellent

The upstream files are simple and durable:

- `autoresearch.md`
- `autoresearch.sh`
- `autoresearch.checks.sh`
- `autoresearch.jsonl`
- `autoresearch.ideas.md`

This gives restart continuity without depending only on transient model memory.
That fits Piclaw well.

### 3. Dashboard/widget implementation is TUI-specific

The upstream dashboard uses terminal UI primitives such as:

- `ctx.ui.setWidget(...)`
- shortcut handlers (`Ctrl+X`, `Ctrl+Shift+X`)
- fullscreen TUI overlay UI

That implementation is **not directly reusable** in Piclaw's web UI.

### 4. Keep/revert enforcement is real and useful

`log_experiment` in the upstream repo:

- appends every run to `autoresearch.jsonl`
- auto-commits on `keep`
- auto-reverts on `discard`, `crash`, and `checks_failed`
- blocks `keep` if validation checks failed

This is one of the most valuable ideas to preserve.

### 5. Confidence / noise-floor scoring is worth adopting

The upstream project computes confidence using MAD-based noise estimation.
That is a good fit for noisy benchmark workflows and should inform any future
Piclaw experiment runner.

## Reuse assessment

### Directly reusable conceptually

- tool split: `init_experiment` / `run_experiment` / `log_experiment`
- append-only JSONL logging
- durable session files in the workspace
- benchmark harness contract via `METRIC name=value`
- explicit experiment statuses
- optional validation checks
- confidence scoring

### Mostly inspirational, not directly reusable

- always-visible widget above the editor
- TUI shortcut-driven dashboard UX
- fullscreen terminal overlay implementation
- aggressive auto-resume by self-addressed follow-up messages

## Piclaw recommendation

Piclaw should **not** try to embed `pi-autoresearch` as-is.

Instead, it should consider a **piclaw-native autoresearch-lite flow** that:

- keeps the durable experiment files and append-only log model
- uses timeline messages + Adaptive Cards for history-visible control
- uses the **generative UI floating pane** as the richer dashboard surface
- prefers bounded, resumable experiment segments over hidden infinite loops

## Acceptance Criteria

- [x] Read the upstream repo/docs and summarize the architecture.
- [x] Identify which parts are directly reusable vs merely inspirational.
- [x] Document good ideas for PiClaw in a notes file and ticket update.
- [x] Decide whether a follow-up implementation ticket is warranted.

## Test / Research Plan

- [x] Review upstream README and package structure.
- [x] Inspect widget/dashboard implementation details.
- [x] Compare its persistence model with current PiClaw long-running task/session patterns.
- [x] Capture actionable ideas without committing to direct adoption.

## Updates

### 2026-03-19
- Reviewed upstream sources in `/workspace/tmp/pi-autoresearch`:
  - `README.md`
  - `extensions/pi-autoresearch/index.ts`
  - `skills/autoresearch-create/SKILL.md`
- Confirmed the strongest reusable idea is the **experiment model**, not the TUI UI.
- Confirmed the upstream dashboard and always-visible widget are terminal-specific and should not be ported directly into Piclaw web UI.
- Confirmed the persistence model is valuable and should inform a Piclaw-native design:
  - append-only `autoresearch.jsonl`
  - living experiment brief in `autoresearch.md`
  - benchmark harness via `autoresearch.sh`
  - optional correctness gate via `autoresearch.checks.sh`
- Decided a follow-up is warranted, but as a **Piclaw-native resumable experiment runner**, not an adoption ticket.
- Wrote design note: `docs/autoresearch-lite-design.md`.
- Created follow-up ticket: `workitems/00-inbox/piclaw-native-autoresearch-lite-experiment-runner.md`.
- User direction for the richer dashboard surface: use the **generative UI pane**.
- Lane change: `10-next` → `50-done`.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-14
- Ticket created after the Tao of Mac Pi ecosystem page was updated with a new
  `pi-autoresearch` entry.
- Initial relevance: autonomous benchmark loop, restart-resumable state,
  widget/dashboard UX, and append-only experiment logging.

## Links

- `https://github.com/davebcn87/pi-autoresearch`
- `https://taoofmac.com/space/ai/agentic/pi`
- `/workspace/tmp/pi-autoresearch/README.md`
- `/workspace/tmp/pi-autoresearch/extensions/pi-autoresearch/index.ts`
- `/workspace/tmp/pi-autoresearch/skills/autoresearch-create/SKILL.md`
- `docs/autoresearch-lite-design.md`
- `workitems/00-inbox/piclaw-native-autoresearch-lite-experiment-runner.md`
- `workitems/20-doing/timeline-launched-floating-generative-widget-pane.md`
