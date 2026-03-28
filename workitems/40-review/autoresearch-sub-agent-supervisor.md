---
id: autoresearch-sub-agent-supervisor
title: Autoresearch sub-agent supervisor — run pi-autoresearch as a headless sub-agent from piclaw
status: review
priority: medium
created: 2026-03-24
updated: 2026-03-26
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - research
  - automation
  - web
  - adaptive-cards
  - tmux
  - sub-agent
owner: pi
---

# Autoresearch sub-agent supervisor

## Summary

Run the upstream `pi-autoresearch` extension as a headless sub-agent in a tmux
session, supervised by piclaw. Piclaw vendors the extension/skill files, launches
the sub-agent, tails `autoresearch.jsonl` for real-time web status, and provides
timeline Adaptive Card controls (stop/status). A model picker card is shown at
launch time. A markdown experiment report is generated on stop/completion.

## Refinement decisions (20-question flow, 2026-03-24)

| # | Question | Decision |
|---|----------|----------|
| 1 | Problem statement | Accept — run upstream as sub-agent instead of reimplementing |
| 2 | Primary user | Accept — operator launches from web chat, monitors timeline |
| 3 | Success criteria | Accept — launch, monitor, stop, survive restarts |
| 4 | MVP | Accept — tmux + JSONL tail + timeline card |
| 5 | Out of scope | Modified — model selection IS in scope via Adaptive Card |
| 6 | Files in scope | Accept — vendor dir, supervisor extension, JSONL watcher |
| 7 | Platform constraints | Modified — auto-init git repo if none exists |
| 8 | Error handling | Accept — crash detection, auth errors, JSONL corruption |
| 9 | Persistence | Modified — generate markdown experiment report at stop |
| 10 | Pattern alignment | Accept — follow terminal session + IPC patterns |
| 11 | First slice | Accept — vendor → tmux → JSONL tail → card → controls |
| 12 | V1 avoidances | Modified — model picker defaults to current, allows override |
| 13 | File naming | Accept — vendor/autoresearch/, .piclaw/autoresearch-sessions/ |
| 14 | Inputs/outputs | Accept — prompt + dir + model → JSONL + md + git + card + tmux |
| 15 | Existing behavior | Accept — fully additive, zero regressions |
| 16 | Performance | Accept — 2s poll, throttled SSE, no JSONL rotation for v1 |
| 17 | Security | Accept — same user, same auth, same shell access |
| 18 | Exports | Accept — workspace files are the export |
| 19 | Test plan | Accept — unit + integration + manual e2e |
| 20 | Done criteria | Accept — vendor + launch + monitor + stop + restart resilience |

## Acceptance Criteria

- [x] Vendored extension + skill files committed (no modifications to upstream)
- [x] Model picker Adaptive Card shown at launch (defaults to current model)
- [x] pi sub-agent launches in a named tmux session with autoresearch loaded
- [x] Git repo auto-initialized if none exists in target directory
- [x] autoresearch.jsonl tailed every 2s with results broadcast via SSE
- [x] Timeline Adaptive Card shows: run count, best metric, confidence, status
- [x] Stop button on card sends SIGINT to tmux session
- [x] Markdown experiment report generated on stop/completion
- [x] Running tmux session re-detected on piclaw restart (resume tailing)
- [ ] Manual end-to-end test passes

## Implementation Slices

### Slice 1 — Vendor upstream files
- Copy `extensions/pi-autoresearch/index.ts` and `skills/autoresearch-create/SKILL.md`
- Place under `runtime/vendor/autoresearch/`
- No modifications to upstream code

### Slice 2 — tmux launch/stop wrapper
- New module: `runtime/src/extensions/autoresearch-supervisor.ts`
- Launch: create tmux session, install extension+skill symlinks, run `pi --prompt`
- Stop: send SIGINT to tmux session
- Track active experiment (PID, session name, project dir, JSONL path)

### Slice 3 — JSONL tail watcher
- Poll autoresearch.jsonl every 2s
- Parse new lines (config headers + experiment results)
- Broadcast parsed results via SSE to connected web clients

### Slice 4 — Timeline Adaptive Card
- Post card on experiment launch showing live status
- Update card on each new JSONL entry (run count, best metric, confidence)
- Stop button action → kill tmux session

### Slice 5 — Model picker launch card
- Show available models from auth.json / model registry
- Default to current main chat model
- On submit → launch the sub-agent with selected model

### Slice 6 — Experiment report
- On stop/completion, parse full JSONL
- Generate markdown summary: objective, runs, best result, confidence, what was tried
- Attach as a file to the timeline

### Slice 7 — Git init safety
- Before launch, check if target dir has a .git
- If not, `git init` + `git add -A` + `git commit -m "Initial commit before autoresearch"`

## Test Plan

- [ ] Unit: JSONL parser, metric line parsing, tmux session name generation
- [ ] Integration: launch sub-agent, verify JSONL appears, verify card posted, verify stop
- [ ] Manual: run experiment against trivial benchmark, verify full loop via web UI

## Definition of Done

- [x] Vendored files committed
- [x] Launch + stop tools working
- [x] JSONL tail → SSE → timeline card working
- [x] Model picker at launch
- [x] Experiment report on stop
- [x] Git init safety net
- [x] Restart resilience (tmux re-detection)
- [ ] Manual e2e test passes

## Updates

### 2026-03-26
- Moved from `20-doing` → `40-review` after confirming the implementation is present in the runtime and web channel integration.
- Verified shipped implementation paths:
  - `runtime/src/extensions/autoresearch-supervisor.ts`
  - `runtime/src/channels/web/handlers/autoresearch-card-action.ts`
  - launch/stop integration in `runtime/src/channels/web.ts`
  - web status/action handling in `runtime/web/src/app.ts`
  - web API helpers in `runtime/web/src/api.ts`
- Confirmed the previously unchecked model-picker and stop-card criteria are implemented in code.
- Remaining gap before `50-done`: record a manual end-to-end validation pass.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-24
- Board review decision: keep this as the **primary near-term autoresearch implementation path**.
- Rationale:
  - it is already in active implementation,
  - it offers the fastest path to a usable Piclaw autoresearch MVP,
  - and it can validate demand/constraints before Piclaw commits to a larger native reimplementation.
- Related decision: deferred `piclaw-native-autoresearch-lite-experiment-runner` out of the ready queue into `00-inbox` as a later native-v2 option.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-24
- Created ticket from 20-question refinement flow (4 Adaptive Card batches).
- Moved directly to doing.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Links

- `https://github.com/davebcn87/pi-autoresearch`
- `/workspace/tmp/pi-autoresearch/`
- `runtime/src/extensions/autoresearch-supervisor.ts`
- `runtime/src/channels/web/handlers/autoresearch-card-action.ts`
- `runtime/src/channels/web.ts`
- `runtime/web/src/app.ts`
- `runtime/web/src/api.ts`
- `workitems/50-done/investigate-pi-autoresearch.md`
- `workitems/00-inbox/piclaw-native-autoresearch-lite-experiment-runner.md`
- `docs/autoresearch-lite-design.md`
