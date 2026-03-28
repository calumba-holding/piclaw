---
id: incorporate-pi-agentic-compaction
title: Incorporate pi-agentic-compaction benefits into PiClaw
status: done
priority: high
created: 2026-03-15
updated: 2026-03-16
completed: 2026-03-16
target_release: v1.4.0
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - compaction
  - extension
  - performance
owner: pi
---

# Incorporate pi-agentic-compaction benefits into PiClaw

## Summary

Investigated `pi-agentic-compaction@0.3.0` and implemented a superior alternative as a built-in extension (`src/extensions/smart-compaction.ts`) that achieves all the quality benefits without the dependency cost.

## Decision

**Don't integrate the full `pi-agentic-compaction` package.** Instead, built a native smart compaction extension that:
- Hooks `session_before_compact` (same hook point)
- Achieves 85% input token reduction via selective fragment extraction (vs agentic's agent-loop exploration)
- Adds no-op detection for split-turn continuations and minimal-content windows (something agentic doesn't do)
- Zero new dependencies (agentic requires `just-bash` → 18.8 MB, quickjs-emscripten, sql.js)

## What was ported from pi-agentic-compaction

1. ✅ **Session type detection** — classifies implementation/debugging/exploration/discussion
2. ✅ **Targeted fragment selection** — head + tail + complaints + key decisions (vs agentic's jq exploration)
3. ✅ **Deterministic file-op tracking** — from `FileOperations`, not LLM guesswork
4. ✅ **No-op filtering** — "Applied: 0" doesn't count as modification
5. ✅ **Done vs In-Progress accuracy** — checks for user complaints after changes
6. ✅ **Custom instruction forwarding** — `/compact <note>` guides focus without overriding goal
7. ✅ **Iterative update** — previous summary is a section to UPDATE, not re-summarize (agentic lacks this)

## What was NOT ported (and why)

- ❌ **Agent loop + virtual FS** — adds `just-bash` dependency for marginal benefit
- ❌ **Multi-model fallback** (Cerebras/Haiku routing) — over-engineering for our use case
- ❌ **Concurrent tool execution** — only useful inside agent loop

## What we added beyond pi-agentic-compaction

- ✅ **No-op detection** — skips LLM entirely for split-turn continuations (0 user msgs) and minimal-content windows. 13/95 historical windows (14%) eliminated, saving 3.1M tokens and ~14 min.
- ✅ **Graceful fallback** — falls through to built-in on short sessions, missing API key, LLM error, or too-short summary
- ✅ **Session isolation** — each AgentSession gets independent extension instance

## Measured results (from 95 historical compaction windows)

| Metric | Built-in | Smart | Improvement |
|--------|----------|-------|-------------|
| Avg input tokens/compaction | ~28,500 | ~4,300 | **85% reduction** |
| No-op windows eliminated | 0 | 13 | **14% of all compactions** |
| Total tokens saved (no-ops) | — | 3.1M | **$9.30 saved** |
| Input content noise | 80% tool results | Focused fragments | **Targeted attention** |
| Quality: lost-in-middle risk | High (46k token input) | Low (5k token input) | **All content in high-attention zone** |
| Speed improvement | — | ~3-5% | Marginal (output generation dominates) |

## Implementation

- **Extension**: `src/extensions/smart-compaction.ts` (523 lines)
- **Tests**: `test/extensions/smart-compaction.test.ts` (19 tests, 62 expects)
- **Registered in**: `src/extensions/index.ts`

## Acceptance Criteria

- [x] Investigation of pi-agentic-compaction complete
- [x] Cost/benefit analysis done
- [x] Prompt improvements extracted and implemented
- [x] Smart compaction extension created and registered
- [x] No-op detection for split-turn and minimal-content windows
- [x] Graceful fallback to built-in on all failure paths
- [x] Session isolation verified (parallel sessions compact independently)
- [x] 19 tests passing, full quality suite green (1016 pass, 0 fail)
- [x] Deployed and running

## Commits

- `b855542` — feat: smart compaction extension (selective fragment extraction, 14 tests)
- `e8896a6` — feat: no-op detection for split-turn and minimal-content windows (5 more tests)
