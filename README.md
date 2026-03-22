# `piclaw` — a web-first sandbox for `pi`

![PiClaw](docs/icon-256.png)

PiClaw packages the [Pi Coding Agent](https://github.com/badlogic/pi-mono) into a self-hosted Debian sandbox with a streaming web UI, persistent sessions, scheduled tasks, workspace tooling, and optional WhatsApp support.

It is built for people who want a practical, stateful agent they can run locally or in a container without stitching together half a dozen separate services.

Inspired by [agentbox](https://github.com/rcarmo/agentbox) and [nanoclaw](https://github.com/qwibitai/nanoclaw).

## Why PiClaw

![Demo Animation](docs/demo.gif)

- **Streaming web UI** — real-time chat with Markdown, KaTeX, Mermaid, and Adaptive Cards
- **Persistent agent state** — SQLite-backed messages, media, tasks, token usage, and encrypted keychain
- **Workspace-native workflow** — browse files, preview documents, upload attachments, edit code, and reference files in prompts
- **Built-in tools** — editor, Office viewer, draw.io, CSV/TSV, PDF, image, and video viewers
- **Agent control features** — steering, queued follow-ups, threading, side prompts, and scheduled tasks
- **Optional auth and channels** — passkeys/TOTP for the web UI, plus optional WhatsApp integration

## Quick start

> [!IMPORTANT]
> The supported runtime path is the published image:
> **`ghcr.io/rcarmo/piclaw`**.
>
> Source builds are mainly for development. If something looks wrong in production, validate it against GHCR first.

### Run from GHCR

```bash
mkdir -p ./home ./workspace

docker run -d \
  --name piclaw \
  --restart unless-stopped \
  -p 8080:8080 \
  -e PICLAW_WEB_PORT=8080 \
  -v "$(pwd)/home:/config" \
  -v "$(pwd)/workspace:/workspace" \
  ghcr.io/rcarmo/piclaw:latest
```

Open `http://localhost:8080`.

To use `pi` interactively inside the container:

```bash
docker exec -u agent -it piclaw bash
cd /workspace && pi
```

### Install directly from the repo with Bun

> [!NOTE]
> This is the Docker-free install path.
>
> **Experimental for now**: Bun-first, Linux/macOS, and intended to avoid a manual build step, but not yet positioned as the main production install route or a generally supported deployment target.
>
> It also runs directly on Windows — and there is even a PowerShell skill — but Windows is **not officially supported**. It technically works, but you're on your own.
>
> One reason this path exists is to support people who want to run PiClaw on low-end ARM SBCs, lightweight VMs, or other sandboxed environments where Docker is not the best fit or is not available.
>
> The repository root is the install/package boundary. The nested `runtime/` directory is the implementation subtree used by the packaged CLI, web assets, extensions, and skills.

```bash
bun add -g github:rcarmo/piclaw
```

See [docs/install-from-repo.md](docs/install-from-repo.md) for scope and caveats.

### Build from source

> [!NOTE]
> Source builds are primarily for development and local testing.

### Packaged operator helper scripts

The repo now includes packaged Bun helper scripts under `runtime/scripts/` for
operator-style tasks. For example, the Proxmox helper can be invoked from the
repo with:

```bash
bun run proxmox -- vm status --vmid 117
bun run proxmox -- vm resume --vmid 117
bun run proxmox -- vm restart --vmid 117
```

These scripts are included in the packaged artifact because `runtime/scripts/`
is part of the published file set.

```bash
make build
make up
```

The compose stack passes `PUID` / `PGID` by default (`1000:1000`). To match the container `agent` user/group to your host user:

```bash
PUID=$(id -u) PGID=$(id -g) make up
```

The default compose container name is `pibox`:

```bash
docker exec -u agent -it pibox bash
cd /workspace && pi
```

## Configure models

Run `pi /login` inside the container or from the optional web terminal.

> [!IMPORTANT]
> You do **not** need to set provider API keys in piclaw environment variables.
> PiClaw reuses provider credentials configured in Pi Agent settings.

### Web terminal

> [!NOTE]
> The authenticated web terminal is **disabled by default**.

Enable it with either:

```bash
# Source / compose flow
PICLAW_WEB_TERMINAL_ENABLED=1 make up
```

or:

```bash
# GHCR docker run flow
docker run -d \
  --name piclaw \
  --restart unless-stopped \
  -p 8080:8080 \
  -e PUID="$(id -u)" \
  -e PGID="$(id -g)" \
  -e PICLAW_WEB_PORT=8080 \
  -e PICLAW_WEB_TERMINAL_ENABLED=1 \
  -v "$(pwd)/home:/config" \
  -v "$(pwd)/workspace:/workspace" \
  ghcr.io/rcarmo/piclaw:latest
```

Then:

1. Open the web UI.
2. Use the workspace header **hamburger menu**.
3. Choose **Open terminal in tab** or **Show terminal dock**.
4. Run `pi /login`.
5. Complete Pi Agent settings for your preferred provider/model.

> [!IMPORTANT]
> If `/model` shows no available models, finish `pi /login` first.

> [!NOTE]
> Provider login is currently **terminal-first**. Chat-level `/login` passthrough is still tracked in kanban.

## Web UI

PiClaw is single-user, mobile-friendly, and streams updates over SSE.

### Chat features

- Thought and draft panels during streaming
- Live steering and queued follow-ups
- Adaptive Cards with persisted submissions
- `/btw` side conversations
- File attachments and downloads
- Link previews
- Threaded follow-up turns
- Themes and tinting via `/theme` and `/tint`
- Mobile-friendly layout with webapp manifest

### Workspace explorer

The sidebar shows `/workspace` with auto-refresh.

- Preview files
- Add file-reference pills to prompts
- Upload files by drag-and-drop
- View folder sizes in the starburst explorer

### Editor

Open the built-in editor from a text-file preview.

- CodeMirror 6
- Search and replace
- Save with dirty-state tracking
- Line wrapping, numbers, active-line highlight
- Syntax highlighting for JS/TS, Python, Go, JSON, CSS, HTML, YAML, SQL, XML/SVG, Markdown, and Shell
- Lazy-loaded local bundle; no CDN dependency

### Viewers

- **Draw.io** — self-hosted editor with SVG/PNG/XML export back to workspace
- **Office documents** — `.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods`, `.odp`
- **CSV/TSV** — dedicated table viewer
- **PDF** — inline viewer
- **Images** — inline image viewer
- **Video** — dedicated tab-based viewer

## Volumes

| Mount | Container path | Contents |
|---|---|---|
| Home | `/config` | Agent home (`.pi/`, `.gitconfig`, `.bashrc`) |
| Workspace | `/workspace` | Projects, notes, and piclaw state |

> [!WARNING]
> Never delete `/workspace/.piclaw/store/messages.db`. It contains chat history, media, and task state.

## Configuration

Key environment variables:

| Variable | Default | Purpose |
|---|---|---|
| `PICLAW_WEB_PORT` | `8080` | Web UI port |
| `PICLAW_WEB_TERMINAL_ENABLED` | `0` | Enable the authenticated web terminal |
| `PICLAW_WEB_TOTP_SECRET` | _(empty)_ | Base32 TOTP secret; enables login gate |
| `PICLAW_WEB_PASSKEY_MODE` | `totp-fallback` | `totp-fallback`, `passkey-only`, or `totp-only` |
| `PICLAW_ASSISTANT_NAME` | `PiClaw` | Display name in the UI |
| `PICLAW_KEYCHAIN_KEY` | _(empty)_ | Master key for encrypted secret storage |

For the full list, see [docs/configuration.md](docs/configuration.md).

### Reverse proxies / tunnels

> [!IMPORTANT]
> If piclaw runs behind a reverse proxy or tunnel (Cloudflare Tunnel, Caddy, Nginx, etc.), enable proxy trust.

```bash
PICLAW_TRUST_PROXY=1
```

See [docs/reverse-proxy.md](docs/reverse-proxy.md) for forwarded-header requirements, examples, and troubleshooting.

## Development

Run build/package commands from the **repo root**:

```bash
make build-piclaw    # full build: vendor bundle + web assets + TypeScript
make vendor          # rebuild vendored assets
make lint            # ESLint
make test            # full test suite
make local-install   # pack, install globally, restart piclaw
```

The implementation lives under `runtime/`, so direct Bun test runs should target that subtree. Sequential mode is recommended for SQLite safety:

```bash
cd runtime && bun test --max-concurrency=1
```

## Release

Pushing a version tag triggers `.github/workflows/publish.yml` and publishes multi-arch GHCR images:

- `ghcr.io/rcarmo/piclaw:<tag>`
- `ghcr.io/rcarmo/piclaw:latest`

```bash
make bump-patch
make bump-minor
make push
```

## Container runtime

PiClaw works with any OCI-compliant runtime.

- **Preferred image source:** `ghcr.io/rcarmo/piclaw`
- **Primary target:** Docker / Docker Desktop
- Also works with Apple Containers, Podman, nerdctl, and similar runtimes

## Documentation

- [Configuration](docs/configuration.md)
- [Reverse proxy / Cloudflare Tunnel](docs/reverse-proxy.md)
- [Architecture](docs/architecture.md)
- [Extension UI contract](docs/extension-ui-contract.md)
- [Web pane extensions](docs/web-pane-extensions.md)
- [Storage model](docs/storage.md)
- [Runtime flows](docs/runtime-flows.md)
- [Tools and skills](docs/tools-and-skills.md)
- [Keychain](docs/keychain.md)
- [WhatsApp](docs/whatsapp.md)
- [Turn mechanism audit](docs/turn-mechanism-audit.md)
- [Cross-instance interop](docs/cross-instance-ipc.md)

## Credits

- [rcarmo/agentbox](https://github.com/rcarmo/agentbox)
- [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)
- [badlogic/pi-mono](https://github.com/badlogic/pi-mono)

## Licence

MIT
