# `piclaw` — A `pi`-based general-purpose agent

![PiClaw](docs/icon-512.png)

PiClaw is a Docker-based sandbox for running the [Pi Coding Agent](https://github.com/badlogic/pi-mono) in an isolated Debian environment. It bundles `piclaw` — a web-first orchestrator built on the Pi SDK with persistent sessions, a streaming web UI, and scheduled tasks. WhatsApp is optional. Inspired by [agentbox](https://github.com/rcarmo/agentbox) and [nanoclaw](https://github.com/qwibitai/nanoclaw).

## Highlights

- **Debian Bookworm (slim)** base image
- **Bun** runtime + **Homebrew** package manager
- **Pi Coding Agent** installed globally (`pi` CLI)
- **`piclaw`** orchestrator (web UI, WhatsApp optional)
- **Streaming Web UI** with markdown, attachments, link previews, and SSE
- **Built-in code editor** (CodeMirror 6) with syntax highlighting for 12 languages
- **Persistent workspace & SQLite storage** (messages, media, tasks, token usage)
- **Token usage tracking + charts** (token-chart skill)
- **Built-in skills** for setup, debugging, Playwright, charts, and scheduling

## Quick Start

```bash
# Build the image
make build

# Start the container (supervisord launches piclaw automatically)
make up

# Tail the logs if you want to watch startup
docker logs -f piclaw
```

`supervisord` acts as PID 1 and keeps `piclaw` running (see [`supervisor/conf.d/piclaw.conf`](supervisor/conf.d/piclaw.conf)). On first boot, the default supervisor configuration is copied into `/workspace/.piclaw/supervisor/` so it persists on the workspace volume; edits there survive container rebuilds and restarts.

Optional services can use [`supervisor/conf.d/optional-service-template.conf`](supervisor/conf.d/optional-service-template.conf) — it guards missing binaries so a failed optional service does not affect `piclaw`.

Once piclaw is running, open the web UI at:

```
http://localhost:8080
```

To use `pi` interactively instead (no web UI):

```bash
cd /workspace
pi
```

### Provisioning `pi` and provider logins

PiClaw bundles both the Pi CLI and the web UI, so you can provision keys or run setup flows without leaving the container. There are two common approaches:

1. **`/shell` command (from the web UI):**
   - Type `/shell <command>` in the compose box to run a non-interactive command inside the container.
   - Examples: `/shell pi --version`, `/shell piclaw keychain set github/foo --secret ...`, `/shell ANTHROPIC_API_KEY=sk-ant-... pi -c "console.log('ready')"`.
   - Ideal for short tasks such as exporting API keys, writing configuration files, or seeding the encrypted keychain. Output streams back into the chat.

2. **`docker exec` (full TTY):**
   ```bash
   docker exec -u agent -it piclaw bash
   cd /workspace
   pi
   /login              # choose provider (Anthropic, OpenAI, Azure, etc.)
   ```
   - Use this when a provider requires an interactive login or multi-step CLI wizard.
   - Credentials live under `/home/agent/.pi/agent/` (persisted via the `/config` volume), so they survive container restarts.

You can also export API keys (`ANTHROPIC_API_KEY`, `OPENAI_API_KEY`, `AZURE_OPENAI_ENDPOINT`, etc.) in your `.env` or pass them via `/shell` before launching `pi`. For long-lived secrets, prefer the keychain (`piclaw keychain set ...`) so tools can safely reference them as `keychain:provider/name`.

WhatsApp pairing is optional; see [docs/whatsapp.md](docs/whatsapp.md).

## Web UI

![Screenshot showing thought](docs/screenshot-dark.png)

The built-in UI is single-user, mobile-friendly, and streams updates over SSE:

- **Real-time streaming** with token-by-token updates
- **Markdown rendering** with syntax highlighting, KaTeX, and Mermaid
- **Thought/Draft panels** during streaming
- **Live steering** and follow-ups while streaming
- **File attachments** with download links
- **Workspace explorer** (left sidebar SVG tree, previews, and downloads) — responsive, shown on desktop/tablet in landscape
- **Code editor** — built-in CodeMirror 6 editor with syntax highlighting for 12 languages, search/replace, and save
- **File reference pills** (click a file to add it to the next prompt)
- **Preview rules**: Markdown renders only for `.md`; other text is monospaced plaintext; images render inline
- **Link previews** via server-side OpenGraph fetch
- **Multi-turn threading** — when the agent produces multiple turns in a single response, subsequent turns are visually threaded under the first
- **Large message handling** — oversized messages are truncated with a download link for the full content
- **Dark/Light themes** (system preference)
- **Mobile-first layout** with webapp manifest

### Workspace explorer

![Screenshot showing explorer](docs/screenshot-explorer-light.jpg)

The workspace sidebar shows an SVG tree of `/workspace` (auto-refreshes every 60 seconds and only re-renders when the tree changes). Click a file to:

- Open a preview (images render inline; text is shown in monospaced plaintext; Markdown renders only for `.md` files).
- Add a **file reference pill** to the compose box for the next prompt.

When you send a message with pills, the UI prefixes your prompt with a `Files:` block so the agent sees the paths:

```
Files:
- notes/orangepi-6-plus.md
- scripts/run-stress-ng.sh

<your message>
```

Remove pills with the ✕ on each tag, or let them clear automatically after sending.

### Code editor

Click the **pencil icon** in the file preview header to open any text file (up to 256 KB) in the built-in code editor. The editor appears as a resizable center pane between the workspace sidebar and the chat.

**Features:**
- **Syntax highlighting** for 12 languages: JavaScript/TypeScript (JSX/TSX), Python, Go, JSON, CSS, HTML, YAML, SQL, XML/SVG, Markdown, and Shell (bash/zsh)
- **Search & replace** — `Cmd/Ctrl+F` to find, `Cmd/Ctrl+H` to replace
- **Save** — `Cmd/Ctrl+S` or click the Save button; dirty state is tracked
- **Line numbers** and active line highlight
- **Line wrapping** enabled by default
- **Resizable pane** — drag the splitter between editor and chat to adjust widths (persisted in localStorage)
- **Vendored CodeMirror 6** bundle (~245 KB gzip) — no external CDN dependencies

The editor uses the system monospace font stack and respects the current dark/light theme.

### Web server settings

| Variable | Default | Purpose |
|----------|---------|---------|
| `PICLAW_WEB_PORT` | `8080` | Web UI port |
| `PICLAW_WEB_HOST` | `0.0.0.0` | Bind address |
| `PICLAW_WEB_IDLE_TIMEOUT` | `0` (disabled) | Drop idle clients after this many seconds |
| `PICLAW_WEB_TLS_CERT` / `PICLAW_WEB_TLS_KEY` | _(empty)_ | Paths to TLS certificate and key; enables HTTPS. If omitted, falls back to `.piclaw/certs/sandbox.local.{crt,key}` when present. |
| `PICLAW_WEB_MAX_CONTENT_CHARS` | `262144` | Max message size in characters; oversized messages are truncated with metadata |

CLI overrides: `piclaw --port`, `--host`, `--idle-timeout`, `--tls-cert`, `--tls-key`.

### Web UI authentication (TOTP)

You can gate the entire web UI behind a 6-digit TOTP challenge. Static assets needed by iOS/Android webapps (manifest, icons, avatars, `/static/*`) remain public so homescreen shortcuts keep working.

| Variable | Default | Purpose |
|----------|---------|---------|
| `PICLAW_WEB_TOTP_SECRET` | _(empty)_ | Base32 TOTP secret. When set, `/login` requires a 6-digit code before issuing a `piclaw_session` cookie. Leave unset to keep the UI open. |
| `PICLAW_WEB_TOTP_WINDOW` | `1` | TOTP step skew (number of 30s windows to accept on either side). |
| `PICLAW_WEB_SESSION_TTL` | `604800` (7 days) | Session cookie lifetime in seconds. |
| `PICLAW_WEB_INTERNAL_SECRET` / `PICLAW_INTERNAL_SECRET` | _(empty)_ | Optional shared secret for unattended POST/PATCH calls to `/internal/post`; required when TOTP is enabled and you want automations to keep posting. |

Flow:

1. Set `PICLAW_WEB_TOTP_SECRET` to a base32 string (e.g., output of `oathtool --totp -b`).
2. Restart piclaw. Visiting the UI now redirects to `/login`.
3. Enter the 6-digit code from your authenticator app to receive an HTTP-only `piclaw_session` cookie.
4. Sessions expire automatically after `PICLAW_WEB_SESSION_TTL` seconds or when you delete the cookie.

Internal automation still works via `/internal/post` as long as the request includes the configured secret in the `x-piclaw-internal-secret` header or the `Authorization` header.

## Volumes & Persistence

Everything that should survive container recreation lives on two volumes:

| Mount | Container path | Contents |
|-------|---------------|----------|
| Home  | `/config`     | Agent home persistence (`.pi/`, `.gitconfig`, `.bashrc`) |
| Workspace | `/workspace` | Projects, `piclaw` state, and notes |

### Workspace layout

```
/workspace/
├── AGENTS.md                # Pi system prompt (seeded from skeleton on first boot)
├── .pi/skills/              # Project-level skills (seeded from skel/)
├── .piclaw/                 # `piclaw` state (auto-created, gitignored)
│   ├── store/messages.db    # SQLite database (messages, media, tasks, token usage)
│   ├── data/sessions/       # Pi session history (per chat JID)
│   ├── data/ipc/            # IPC files (messages, scheduled tasks)
│   └── data/chats.json      # Registered chat JIDs
├── notes/                   # Agent memory (created by `pi` as needed)
└── <your projects>/
```

### Data integrity

**Never delete** `/workspace/.piclaw/store/messages.db`. It contains all chat history, media, tasks, and token usage. Only repair/migrate it when needed.

### Using an external workspace

By default, `docker-compose.yml` bind-mounts `./workspace`. To use a different path or a named volume, set `WORKSPACE_PATH` in `.env`:

```bash
# Use a directory on an external drive
echo 'WORKSPACE_PATH=/mnt/data/piclaw-workspace' >> .env
make up
```

Or override directly:

```bash
WORKSPACE_PATH=/mnt/data/piclaw-workspace docker compose up -d
```

## Configuration

### Path overrides

| Variable | Default | Purpose |
|----------|---------|---------|
| `PICLAW_WORKSPACE` | `/workspace` | Working directory for `pi` + `piclaw` |
| `PICLAW_STORE` | `/workspace/.piclaw/store` | SQLite database location |
| `PICLAW_DATA` | `/workspace/.piclaw/data` | Sessions, IPC, chats.json |
| `SUPERVISOR_CONF` | `/workspace/.piclaw/supervisor/supervisord.conf` (when `/workspace` exists) | Supervisor config path (`/etc/supervisor/supervisord.conf` fallback) |

### Runtime and UI

| Variable | Default | Purpose |
|----------|---------|---------|
| `PICLAW_AUTOSTART` | `1` | Set to `0` to keep the supervisor service idle (run `pi`/`piclaw` manually) |
| `PICLAW_AGENT_TIMEOUT` | `1800000` | Max `pi` invocation time (ms) |
| `PICLAW_BACKGROUND_AGENT_TIMEOUT` | `0` | Max background invocation time (ms; `0` disables) |
| `PICLAW_ASSISTANT_NAME` | `PiClaw` | Display name in the web UI |
| `PICLAW_ASSISTANT_AVATAR` | _(empty)_ | Avatar URL for the web UI |
| `PICLAW_TOOL_OUTPUT_RETENTION_DAYS` | `30` | Days to retain stored tool outputs |
| `PICLAW_TOOL_OUTPUT_CLEANUP_INTERVAL_MS` | `43200000` | Cleanup interval (ms) |

Deprecated env names (still supported): `ASSISTANT_NAME`, `ASSISTANT_AVATAR`, `AGENT_TIMEOUT`, `AGENT_TIMEOUT_BACKGROUND`.

### Keychain secrets

Piclaw ships with an encrypted SQLite-backed keychain that can inject secrets into tool environment variables. The keychain is disabled unless you provide a master key.

| Variable | Default | Purpose |
|----------|---------|---------|
| `PICLAW_KEYCHAIN_KEY` | _(empty)_ | Master key for encrypting/decrypting keychain entries |
| `PICLAW_KEYCHAIN_KEY_FILE` | _(empty)_ | Read master key from a file (trimmed) |

Entries live in `messages.db` (table `keychain_entries`) encrypted with AES-256-GCM + PBKDF2 (per-entry salt and nonce). The database runs with `PRAGMA secure_delete=ON`.

Add an entry via the CLI:

```bash
PICLAW_KEYCHAIN_KEY="your-master-key" \
  piclaw keychain set github/foo/bar \
    --type token \
    --secret "ghp_xxx" \
    --username "octo"
```

(You can still use the low-level API if needed; see `docs/keychain.md`.)

Use entries in tool env maps by prefixing with `keychain:`. The default value is the secret; append `:username` to read the stored username.

```json
{
  "env": {
    "GITHUB_TOKEN": "keychain:github/foo/bar",
    "GITHUB_USER": "keychain:github/foo/bar:username"
  }
}
```

See `docs/keychain.md` for details.

### WhatsApp pairing

If QR pairing fails (headless/server environments), provide a phone number to request a pairing code:

```bash
WHATSAPP_PHONE=1234567890
```

You can also store it in `/workspace/.piclaw/config.json`:

```json
{ "whatsappPhone": "1234567890" }
```

### Assistant name and avatar

Set via environment variables (see above) or in `.piclaw/config.json`:

```json
{
  "assistant": {
    "assistantName": "PiClaw",
    "assistantAvatar": "https://example.com/avatar.png"
  }
}
```

### Pushover notifications

`piclaw` can send push notifications for scheduled tasks and IPC messages. Set the following environment variables or add them to `.piclaw/config.json` under the `pushover` key:

```bash
PUSHOVER_APP_TOKEN=your-app-token
PUSHOVER_USER_KEY=your-user-key
PUSHOVER_DEVICE=myphone          # optional
PUSHOVER_PRIORITY=0              # optional
PUSHOVER_SOUND=pushover          # optional
```

## Tools and skills

`pi` ships with the standard tools (read, bash, edit, write) plus `piclaw` extensions for message search, model control, and file attachments. Skills live under `.pi/skills/` (seeded from a skeleton on first boot). They cover setup, diagnostics, Playwright automation, hot-reload, scheduling, messaging, and chart generation. Each skill bundles its script alongside a `SKILL.md` so it travels with the workspace.

See [docs/tools-and-skills.md](docs/tools-and-skills.md) for details.

## Further reading

- [Architecture](docs/architecture.md) — codebase layout and design decisions
- [Storage model](docs/storage.md) — SQLite schema and data lifecycle
- [Runtime flows](docs/runtime-flows.md) — message processing and agent lifecycle
- [Tools and skills](docs/tools-and-skills.md) — built-in tools and skill catalogue
- [Keychain](docs/keychain.md) — encrypted secret storage
- [WhatsApp](docs/whatsapp.md) — optional WhatsApp integration

## Development

### Building

```bash
make build-piclaw    # Full build: vendor bundle + web assets + TypeScript
make vendor          # Rebuild CodeMirror vendor bundle only
make lint            # ESLint (flat config)
make test            # Run all tests
make test-coverage   # Tests with coverage report
make local-install   # Pack, install globally, and restart piclaw
```

### Testing

Tests use the Bun runner. For SQLite safety, tests default to sequential mode:

```bash
cd piclaw
bun test                              # run all tests
bun test --max-concurrency=1          # sequential (recommended)
bun test test/extensions-model-control.test.ts  # single file
```

## Container Runtime

PiClaw is a standard OCI image and works with any compliant container runtime:

- **Docker** / Docker Desktop — primary development target
- **Apple Containers** (macOS 26+) — works natively
- **Podman**, **nerdctl**, etc. — standard `docker compose` equivalents work

Multi-arch images (amd64 + arm64) are published to GHCR on every tag push.

## CI / Release Pipeline

Pushing a version tag triggers `.github/workflows/publish.yml`:

1. Native multi-arch builds (amd64 + arm64)
2. Manifest merge into `latest` + versioned tag
3. Artifact cleanup (keeps 5 most recent releases/tags/workflows/images)

```bash
make bump-patch   # bump patch version, commit, and create git tag
make bump-minor   # bump minor version, commit, and create git tag
make push         # push commits + tag → triggers CI
```

## Credits

- [rcarmo/agentbox](https://github.com/rcarmo/agentbox)
- [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)
- [badlogic/pi-mono](https://github.com/badlogic/pi-mono)

## License

MIT
