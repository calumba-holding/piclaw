---
name: situate-daily-notes
description: Situate yourself by generating a 1-page situation report and maintaining Obsidian-style daily summary notes.
distribution: private
---

# Skill: situate-daily-notes

Situate yourself by generating a 1-page situation report and maintaining Obsidian-style daily summary notes.

## When to use

- **On demand only** when the user asks you to "situate yourself" or "catch up"
- When you need to recall what's been discussed recently
- As a **required chained step** of `/workspace/.pi/skills/close-of-day/SKILL.md`

Do not run this automatically at session start.

## Quick start

```bash
bun run /workspace/scripts/situate.ts
```

This:
1. Prints a 1-page situation report (environment, preferences, notes, tasks, skills)
2. Aggregates activity across all relevant session trees for the target chat scope
   - for `web:*`, this means all web session trees (root chats plus branches)
   - message previews are labelled so parallel branches stay distinguishable
3. Generates daily note skeletons for any days that don't have one yet
4. Lists any notes that need summaries or partial updates

**After running, check for unsummarized notes and write them** (see below).

## Daily note format

Notes live in `notes/daily/YYYY-MM-DD.md` and start with YAML front matter:

```yaml
---
date: 2026-03-04
summarised_until: 2026-03-04T17:55:35.286Z
messages_total: 25
messages_user: 10
messages_assistant: 15
session_trees: 2
session_chats: 4
first_message: 2026-03-04T12:31:03.860Z
last_message: 2026-03-04T17:55:17.309Z
scope_mode: all-web-session-trees
scope_anchor: web:default
---
```

- `date` must match the file name.
- `summarised_until` is the timestamp of the last message covered by the summary.
- `session_trees` / `session_chats` show how many distinct trees/chats contributed to that day.
- For `web:*` scopes, `scope_mode: all-web-session-trees` means the note metadata was aggregated across all web roots and branches, not just one visible tab.

## Writing daily summaries

Daily notes are **summaries only** — the chat DB is the source of truth for full transcripts.

When `situate.ts` or `daily-notes.ts` reports notes needing summaries:

1. For each file listed, read it to see the date and stats.
2. Use the unified `messages` tool as the primary source for transcript gathering:
   - `search` to locate the day/range you need
   - `get` to pull exact rows with surrounding context
   - if needed, paginate with `limit`/`offset`
3. Only fall back to `extract-chat-history.ts` for large exports or if you explicitly need a full transcript artifact.
4. Read the conversation and write a **concise narrative summary** (1–3 paragraphs) covering:
   - What was worked on (group by theme, not chronologically)
   - Key outcomes and what got deployed/built/configured
   - Any unresolved blockers or open threads
   - When multiple session trees were active, keep materially different branches distinct instead of blending them into one thread
5. Replace `<!-- NEEDS_SUMMARY -->` in the note with the summary, and set `summarised_until` in the front matter to the last message timestamp.

### Partial updates

If `situate.ts` reports **Partial Summaries**, append a block like this:

```markdown
## Summary update (18:10 UTC)

<!-- NEEDS_SUMMARY_UPDATE -->
```

Then:
- Use `messages.search` for the post-watermark range
- Use `messages.get` for any exact rows that need more surrounding context
- Use the situation report's tree/chat labels to keep parallel branches separate while you summarise
- Write a short update summary for the new messages
- Update `summarised_until` in the front matter to the last message timestamp shown in the report

### Example summary style

> Set up Azure OpenAI end-to-end. Created `piclawendpoints` in Sweden Central, deployed six models across GlobalStandard and DataZoneStandard. Wired managed identity auth with token caching into piclaw. Added a `/image` command.
>
> Cleaned stale deployments from `pragma` and `dogma`. Set up dual backups (restic + Azure Backup vault). Built metrics charting and subscription diagram skills. Implemented TOTP on the web UI.

### Rules

- **Never overwrite** a note that already has a real summary.
- **Today's note** gets refreshed (metadata update) but its summary is preserved.
- Keep summaries **short and dense** — this is for quick context recovery, not documentation.

## Options

| Flag | Default | Description |
|---|---|---|
| `--days <n>` | `7` | How many days of history to include |
| `--out <path>` | `/workspace/exports/situation.md` | Situation report output path |

## Standalone daily notes generation

```bash
bun run /workspace/scripts/daily-notes.ts [--days <n>] [--force]
```

## Full chat transcript export

For a complete unabridged transcript with H1 headers per day:

```bash
bun run /workspace/scripts/extract-chat-history.ts --summary --out /workspace/exports/web-chat-full.md
```

For `web:*`, this export now includes all web session trees and annotates each message with its tree/chat label.

### Tone

Terse British English. No excitement, no emoji, no "big day" openers. State what was done.

### Related

- The `close-of-day` skill runs this situate flow (with `--update-notes`) as part of end-of-day maintenance.
- This is the preferred way to maintain daily note metadata before timeline cleanup.
