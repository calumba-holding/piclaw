---
name: token-chart
description: Generate a 7-day token usage chart (all chats) and post it to the web UI timeline.
distribution: public
---

# Token chart

Generate a 7-day token usage chart (all chats) and post it to the web UI timeline as a message.

## Steps

1. Run the standard chart script (default mode):
   ```bash
   bun /workspace/.pi/skills/token-chart/token-chart.ts
   ```

2. Run the **alternative provider+model mode** (stacked by provider + model):
   ```bash
   bun /workspace/.pi/skills/token-chart/token-chart.ts --mode provider-model
   ```

3. Post safely to the web chat (JSON-encoded, no Pushover nudge):
   ```bash
   bun /workspace/.pi/skills/token-chart/token-chart.ts --ipc
   ```

4. If you explicitly want a Pushover nudge as well:
   ```bash
   bun /workspace/.pi/skills/token-chart/token-chart.ts --ipc --nudge
   ```

## Notes

- The chart is rendered as an embedded SVG via markdown image syntax.
- Numbers are formatted using K/M in labels and summaries.
- Uses the `token_usage` table in `${PICLAW_STORE}/messages.db` by default; pass `--source sessions` (or `--sessions-dir`) to read session JSONL files.
- `--mode provider-model` is an alternative mode that groups by provider + model and renders a stacked series chart.
- Use this on demand (not scheduled yet).
