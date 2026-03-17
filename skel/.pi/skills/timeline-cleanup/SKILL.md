---
name: timeline-cleanup
description: Delete low-value messages from the web timeline by keyword patterns. Protects messages with user-uploaded images. Optionally vacuums the DB afterward.
distribution: private
---

# Timeline Cleanup

Delete messages from the web chat timeline that match keyword patterns, then optionally vacuum the database to reclaim space.

## How It Works

1. Query the messages DB (from `PICLAW_STORE/messages.db`) for rows matching the given patterns
2. Exclude messages that have media attachments — unless `--include-media` is passed
3. Delete matching messages via the `/post/{id}?cascade=true` HTTP API
4. Optionally vacuum the database (requires a brief piclaw restart)

## Usage

Run cleanup by importing the helper or using the CLI.

Defaults include a throttled delete loop (1100ms delay) with retries on
HTTP 429 responses to avoid server-side rate limits.

### Import

```typescript
import { cleanupTimeline } from "/workspace/.pi/skills/timeline-cleanup/cleanup.ts";

const result = await cleanupTimeline({
  patterns: ["reload", "compaction"],
  // dryRun: true,           // Preview only
  // includeMedia: false,    // Skip messages with attachments (default)
  // vacuum: false,          // Vacuum DB after (causes restart)
  // beforeRowid: 99999,     // Only match messages before this rowid
  // chatJid: "web:default", // Target chat
  // maxLength: 300,         // Only match messages shorter than this
  // senderFilter: "web-agent", // Only match this sender
  // throttleMs: 1100,       // Delay between deletes (avoid rate limits)
  // retryOn429: true,       // Retry if rate limited
  // maxRetries: 2,          // Max retries for rate limits
});
```

### CLI

```bash
bun run /workspace/.pi/skills/timeline-cleanup/cleanup.ts \
  --patterns "reload,compaction,compacting" \
  --before 5000 \
  --dry-run
```

## Built-in Pattern Groups

The `cleanupAll()` function runs all standard pattern groups in sequence. Use it for a full housekeeping pass:

```typescript
import { cleanupAll } from "/workspace/.pi/skills/timeline-cleanup/cleanup.ts";
const results = await cleanupAll({ beforeRowid: 5000, dryRun: true });
```

### Pattern groups

| Group | Patterns | Sender | Max length |
|---|---|---|---|
| **Reloads** | `reload`, `supervisorctl restart`, `restart-piclaw`, `local-install`, `bun pm pack` | any | 500 |
| **Compaction** | `compaction`, `compacting`, `auto-compact` | any | 500 |
| **Greetings (user)** | exact: `hey`, `hello`, `hi`, `Hello?`, `hey there`, etc. | user | 30 |
| **Agent intros** | `Hey! ...`, `Hello! ...`, `good to see you`, `ready to help` | agent | 300 |
| **Slash commands** | lines starting with `/` | any | 50 |
| **Slash responses** | `Unknown command:`, `Current model:`, `Switched...model`, `Switching...model`, `Model switched`, `Cycle model`, `Cycle thinking`, `Thinking level`, `Thinking set`, `Supports thinking` | agent | 300 |
| **One-word acks** | exact: `yes`, `ok`, `go`, `done`, `well?`, `so?`, etc. | any | 30 |
| **Transition filler** | `let me check`, `let me look`, `now let me`, etc. | agent | 200 |
| **Version bumps** | `bumped version`, `tagged v0.`, `bump patch` | any | 300 |
| **Build/lint/test** | `make lint`, `make test`, `bun run build`, `pass...0 fail` | any | 300 |
| **Git operations** | `git add`, `git commit -m`, `git push`, `git status` | any | 200 |
| **Package installs** | `bun install`, `bun add`, `bun update`, `packages installed` | any | 300 |

## Vacuum

Vacuuming requires exclusive DB access. The cleanup function can:
1. Copy the DB to `/tmp`
2. Vacuum the copy
3. Stop piclaw, swap the file, start piclaw

This causes a brief (~5s) interruption. Only use when significant space can be reclaimed.

## Environment

- `PICLAW_STORE` — message DB parent directory (default: `/workspace/.piclaw/store`)
- `PICLAW_WEB_PORT` — web server port (default: 8080)
- `PICLAW_INTERNAL_SECRET` / `PICLAW_WEB_INTERNAL_SECRET` — internal API auth

## Related

- `close-of-day` invokes the same cleanup strategy as an end-of-day sweep.
- New end-of-day flow uses the unified `messages` tool actions (`search`, `delete`) for cleanup semantics where available.

