# Piclaw-native autoresearch-lite design

## Goal

Design a **piclaw-native, web-first, resumable experiment runner** inspired by
`pi-autoresearch`, without porting its TUI-specific implementation model.

The target outcome is an experiment flow that helps PiClaw and project work with:

- iterative benchmark-driven changes
- append-only run history
- explicit keep/discard/revert semantics
- resumable session state across restart or context loss
- compact web-native status + dashboard UI

## Why not copy upstream directly

`pi-autoresearch` has several excellent ideas, but its implementation is tightly
bound to the terminal-first `pi` UI surface:

- `ctx.ui.setWidget(...)` for an always-visible widget above the editor
- keyboard shortcuts like `Ctrl+X` / `Ctrl+Shift+X`
- fullscreen dashboard overlays via TUI custom UI
- aggressive auto-resume through self-addressed messages when the agent stops

Piclaw is a **web-first** product with a different persistence and UI contract:

- timeline messages and Adaptive Cards are the preferred structured interaction surface
- SQLite is the source of truth for chat history and tasks
- larger mounted UI belongs in web-native panes or shell-owned overlays
- scheduled work and side work already have explicit backend/runtime models

So Piclaw should borrow the **experiment model**, not the TUI UX.

## Upstream ideas worth preserving

The following upstream ideas are worth adopting conceptually:

1. **Tool split**
   - `init_experiment`
   - `run_experiment`
   - `log_experiment`
2. **Project-local durable files**
   - `autoresearch.md`
   - `autoresearch.sh`
   - `autoresearch.checks.sh`
   - `autoresearch.jsonl`
   - `autoresearch.ideas.md`
3. **Append-only run log**
4. **`METRIC name=value` output contract**
5. **Explicit statuses**
   - `keep`
   - `discard`
   - `crash`
   - `checks_failed`
6. **Confidence / noise-floor scoring**
7. **Preserve session continuity via files, not memory alone**

## Product principles for piclaw

Any piclaw-native implementation should follow these principles:

1. **History-first**
   - The timeline should show that an experiment session exists, what state it is in, and how to resume it.
2. **Files are durable memory**
   - Workspace files remain the best restart/resume anchor for agent context.
3. **Web-native UI only**
   - No attempt to reproduce TUI widgets literally.
4. **Explicit operator control**
   - The user should be able to start, pause, resume, inspect, and stop.
5. **Safe keep/revert rules**
   - Code changes should not silently persist after losing or failing runs.
6. **Bounded v1**
   - Start with a narrow, inspectable loop instead of a forever-running autonomous system.

## Proposed v1: autoresearch-lite

### Scope

`autoresearch-lite` is a bounded, resumable experiment runner for the web UI.

It should support:

- creating an experiment session from chat
- writing the experiment brief and harness files into the workspace
- running a baseline and subsequent candidate experiments
- logging every run to an append-only JSONL file
- exposing a compact timeline-native control/status surface
- opening a richer dashboard in a web-native mounted surface
- resuming later from persisted files

### Intentionally out of scope for v1

- unbounded “never stop” autonomous looping by default
- cloning the upstream always-visible editor widget
- reproducing TUI shortcuts and fullscreen terminal overlays
- arbitrary background execution without explicit user-visible control
- generalized experiment orchestration across many repositories at once

## User experience

### Session setup

Primary entry point:

- `/skill:autoresearch-lite-create`

The setup flow gathers or infers:

- objective
- benchmark command
- primary metric and direction
- optional secondary metrics
- files in scope
- constraints / off-limits
- optional validation checks
- max iterations for the current segment

It then writes:

- `autoresearch.md`
- `autoresearch.sh`
- `autoresearch.checks.sh` (optional)
- `autoresearch.ideas.md` (optional / created lazily)

and posts a timeline message confirming the session exists.

### Timeline surface

The timeline should be the durable control and receipt surface.

Recommended v1 pattern:

- a normal agent message describing the current experiment state
- an Adaptive Card for controls / status

The card should show:

- experiment name
- status (`idle`, `running`, `paused`, `failed`, `completed`)
- current segment count / max iterations
- current best primary metric
- latest run result
- confidence score when available
- actions:
  - `Run baseline`
  - `Run next iteration`
  - `Pause`
  - `Resume`
  - `Open dashboard`
  - `Stop`

The timeline item remains the **canonical reopen point** even if richer UI is dismissed.

### Dashboard surface

For richer inspection, the timeline control should open a dedicated web-native dashboard.

Recommended v1 surface:

1. **The generative UI floating pane** (the timeline-launched floating pane / widget host)
2. **A dedicated tab pane only as a fallback** if the floating pane work is not yet available

This lets the experiment dashboard reuse the same shell-owned mounted surface being defined for richer timeline-launched UI, instead of inventing a second special dashboard host.

The dashboard reads from persisted experiment state and shows:

- summary metrics
- best run vs baseline
- secondary metrics
- full run table from `autoresearch.jsonl`
- current branch / workspace path
- current active segment
- recent output / failure excerpts
- backlog ideas from `autoresearch.ideas.md`

## Persistence model

### Workspace files

Workspace files should remain the agent-readable source of experiment context:

| File | Purpose |
|---|---|
| `autoresearch.md` | experiment brief, scope, constraints, what’s been tried |
| `autoresearch.sh` | benchmark harness |
| `autoresearch.checks.sh` | optional validation gate |
| `autoresearch.jsonl` | append-only run log |
| `autoresearch.ideas.md` | deferred ideas backlog |

This is intentionally close to upstream because it is simple and resilient.

### SQLite state

Piclaw should also keep minimal web/runtime state in SQLite where that improves product behavior.

Suggested v1 backend record shape:

- experiment id
- chat JID / branch association
- workspace path / working dir
- current state (`idle`, `running`, `paused`, `failed`, `completed`)
- latest summary fields for fast UI rendering
- pointer to the originating timeline message/card
- timestamps (`created_at`, `updated_at`, `last_run_at`)

Why both files and SQLite?

- **files** are best for agent restart continuity and human inspection
- **SQLite** is best for fast web UI state, task coordination, and timeline linkage

V1 can start file-first and add SQLite indexing if needed.

## Runtime model

### Recommended v1 execution model

Use a **bounded segment loop** instead of an unbounded infinite loop.

A segment is a user-visible batch like:

- baseline + 3 iterations
- or resume for 5 more iterations

This makes the web experience safer and easier to reason about.

### Why bounded segments are preferred in v1

- easier to pause/resume intentionally
- reduces runaway background agent work
- clearer timeline receipts
- avoids needing aggressive self-message auto-resume behavior
- fits better with explicit web control surfaces

### Resume behavior

On resume, the agent should:

1. read `autoresearch.md`
2. read the tail / summary of `autoresearch.jsonl`
3. inspect the current git state / branch
4. continue from the persisted files

That preserves the main good idea from upstream without requiring hidden magic.

### Later option: scheduler-backed continuation

A later version may use the scheduler for controlled continuation, but only with explicit user-visible state.

If Piclaw adopts scheduler-backed continuation later, it should:

- expose it clearly in the timeline/dashboard
- preserve branch/session isolation
- avoid surprising self-prompt loops hidden from the user

## Tool model

Piclaw should preserve the upstream tool split conceptually.

### `init_experiment`

Responsibilities:

- create or reinitialize an experiment segment
- set metric metadata
- write session header / config
- create initial timeline status message/card

### `run_experiment`

Responsibilities:

- run only the approved experiment harness
- capture wall-clock duration
- parse `METRIC name=value` lines
- capture tail output
- enforce timeout behavior
- optionally run checks after a passing benchmark

### `log_experiment`

Responsibilities:

- append to `autoresearch.jsonl`
- compute summary and confidence
- enforce keep/discard/revert policy
- update timeline/dashboard state
- emit a compact result receipt to the timeline

## Safety model

### Keep / discard / revert

Recommended rules:

- `keep`:
  - allowed only when benchmark passed
  - blocked if checks failed
  - may auto-commit if the session is explicitly configured for commit-on-keep
- `discard`:
  - revert working changes for the experiment scope
- `crash`:
  - log failure and revert changes
- `checks_failed`:
  - log benchmark success + validation failure, then revert changes

### Suggested v1 refinement over upstream

Make auto-commit policy explicit.

Possible modes:

- **safe mode (default):** no auto-commit, only stage summary and revert/keep via explicit agent action
- **commit-on-keep mode:** auto-commit successful winning runs

This gives users more control in the web product.

## Confidence scoring

The upstream MAD-based confidence idea should be adopted conceptually.

Display:

- best metric
- delta from baseline
- confidence score
- interpretation band:
  - high confidence
  - marginal
  - within noise

This is especially useful for:

- noisy benchmarks
- browser perf work
- build timing
- model training / tuning
- flaky-ish runtime measurements

## Proposed web UI surfaces

### Minimum viable surface

1. **Timeline message + Adaptive Card**
2. **Dashboard in the generative UI floating pane**

### Why not a dedicated always-visible widget first

Because piclaw’s documented UI contract today favors:

- timeline-native structured interactions
- pane-based mounted UI for richer views

An always-visible widget pinned above the editor is not currently the default product model.

## Proposed artifacts and schemas

### `autoresearch.jsonl` entry shape

```json
{
  "run": 7,
  "segment": 2,
  "status": "keep",
  "commit": "abc1234",
  "metric": 15200,
  "metric_name": "total_µs",
  "metric_unit": "µs",
  "direction": "lower",
  "metrics": {
    "compile_µs": 4200,
    "render_µs": 9800
  },
  "confidence": 2.1,
  "description": "cache parser metadata across repeated runs",
  "timestamp": "2026-03-19T21:00:00Z"
}
```

### Timeline control model

Prefer an Adaptive Card carrying:

- experiment id
- current state
- current summary
- user actions that submit back into the web channel

This keeps the control surface reconnect-safe and history-visible.

## Suggested implementation slices

### Slice 1 — durable experiment files + baseline loop

- create skill
- write files
- implement `init_experiment`, `run_experiment`, `log_experiment`
- append-only JSONL logging
- timeline receipts only

### Slice 2 — web-native status card

- Adaptive Card status/control surface
- resume / pause / stop affordances
- latest summary in chat history

### Slice 3 — dashboard surface

- render the dashboard in the generative UI floating pane
- run table + confidence + outputs
- timeline action opens/reopens the same dashboard surface from the canonical experiment message/card

### Slice 4 — controlled continuation

- bounded multi-iteration segments
- optional scheduler-backed resume
- stronger branch/session isolation

## Recommendation

Build **autoresearch-lite** as a **file-backed, web-native, bounded experiment runner**.

Copy from upstream:

- the experiment discipline
- the persistence files
- the structured metric contract
- the keep/revert/checks logic
- the confidence model

Do **not** copy from upstream:

- TUI widget mechanics
- shortcut-driven dashboard UX
- implicit infinite auto-resume behavior

## Related piclaw docs

- `docs/storage.md`
- `docs/runtime-flows.md`
- `docs/extension-ui-contract.md`
- `docs/web-pane-extensions.md`
- `workitems/20-doing/timeline-launched-floating-generative-widget-pane.md`
