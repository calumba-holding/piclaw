# Cross-Instance IPC (Experimental)

> **Status**: Design phase — not yet implemented.

This document describes a planned mechanism for piclaw instances to communicate
with each other, enabling user-to-agent and agent-to-agent interactions across
separate containers or hosts.

## Overview

Each piclaw instance can **pair** with other instances using a consent-based
protocol. Once paired, instances authenticate requests with Ed25519 signatures
— no shared secrets are exchanged or stored.

```
Instance A ("pibox")            Instance B ("buildbox")
     │                                │
     │── pair-request ──────────────► │
     │                   user reviews │
     │                   /pair accept │
     │◄── pair-confirm ──────────────│
     │                                │
     │   (both store peer pubkey)     │
     │                                │
     │── signed /ask ───────────────► │
     │            verify → run agent  │
     │◄── result ────────────────────│
```

## Identity

On first boot (or on demand), each instance generates an **Ed25519 keypair**
and a stable instance ID:

| Field | Example |
|-------|---------|
| `instance_id` | `pi_abc123def456` |
| `instance_name` | `"pibox"` (from config) |
| `public_key` | Base64-encoded Ed25519 public key |
| `fingerprint` | `SHA256:A7:3F:...` (for visual verification) |

The keypair is stored in `.piclaw/identity/` or the keychain. The fingerprint
gives users a short string to compare out-of-band when pairing.

## Pairing Protocol

Pairing follows a consent-based flow inspired by SSH and Bluetooth:

### 1. Initiate (Instance A)

The user or agent on Instance A runs:

```
/pair https://buildbox.tailnet:8080
```

This sends a `POST /api/remote/pair-request` to Instance B containing A's
identity (id, name, URL, public key).

### 2. Review (Instance B)

Instance B receives the request and notifies its user via the timeline:

```
📬 "pibox" (SHA256:A7:3F:...) wants to pair.
   /pair accept pibox
   /pair deny pibox
```

The request sits in `pending_inbound` state until the user acts.

### 3. Accept or Deny (Instance B)

- **`/pair accept pibox`** — Stores A's public key, generates a signed
  confirmation, sends it back to A. Both sides are now paired.
- **`/pair deny pibox`** — Rejects the request. A can retry later.
- **`/pair block pibox`** — Permanently denies. Future requests from this
  instance ID are silently dropped.

### 4. Confirm (Instance A)

A receives the signed confirmation, verifies it, and stores B's public key.
Both instances now have each other's identity and can exchange authenticated
requests.

## Peer States

```
unknown ──► pending_inbound   ──► paired
         │  pending_outbound  ──► paired
         │                    ──► denied
         │                    ──► blocked
paired   ──► revoked (by either side)
```

Peers are stored in the `instance_peers` SQLite table:

| Column | Type | Description |
|--------|------|-------------|
| `instance_id` | TEXT PK | Stable peer identifier |
| `name` | TEXT | Human-friendly name |
| `url` | TEXT | Base URL of the peer |
| `public_key` | TEXT | Base64 Ed25519 public key |
| `fingerprint` | TEXT | `SHA256:xxxx` short form |
| `status` | TEXT | `paired`, `pending_inbound`, `pending_outbound`, `denied`, `blocked`, `revoked` |
| `permissions` | TEXT | `full`, `restricted`, `read-only`, `custom` |
| `paired_at` | TEXT | ISO timestamp |
| `last_seen` | TEXT | Last successful request |

## Request Authentication

After pairing, all requests are authenticated by signing — no bearer tokens
or shared secrets.

Each request includes:

| Header | Content |
|--------|---------|
| `X-Instance-Id` | Sender's instance ID |
| `X-Timestamp` | ISO timestamp of the request |
| `X-Signature` | `base64(sign(private_key, method + "\n" + path + "\n" + timestamp + "\n" + sha256(body)))` |

The receiver:

1. Looks up `X-Instance-Id` in the peers table.
2. Verifies `status = paired`.
3. Verifies the Ed25519 signature against the stored public key.
4. Checks the timestamp is within ±60 seconds (replay protection).
5. Applies permission checks.
6. Processes the request.

## API Endpoints

All remote endpoints are under `/api/remote/` and are **disabled by default**.
They are only active when at least one peer is configured or a pairing has
been initiated.

| Endpoint | Auth | Purpose |
|----------|------|---------|
| `POST /api/remote/pair-request` | Self-identifying (carries pubkey) | Initiate pairing |
| `POST /api/remote/pair-confirm` | Signed | Complete pairing |
| `POST /api/remote/ask` | Signed | Send prompt, receive response |
| `GET /api/remote/ping` | Signed | Health check + instance metadata |
| `POST /api/remote/revoke` | Signed | Notify peer of unpairing |

### `POST /api/remote/ask`

Send a prompt to the remote agent and wait for the response.

**Request:**
```json
{
  "prompt": "check disk usage on /workspace",
  "timeout": 60
}
```

**Response:**
```json
{
  "result": "/ is 42% full, /workspace is 18% full.",
  "instance": "buildbox",
  "duration_ms": 1200,
  "tools_used": ["bash"],
  "remote": true
}
```

The remote agent runs the prompt in a **fresh session context** — no bleed
from the remote user's conversation history.

## Permissions

Each peer is assigned a permission level that controls what the remote agent
can do when processing their requests.

| Level | Description |
|-------|-------------|
| `full` | All tools enabled (bash, write, read, etc.) |
| `restricted` | Prompt-only — no bash, write, or file mutation tools |
| `read-only` | Can only call `/ping` — no prompt execution |
| `custom` | Per-peer tool allowlist (future) |

**Default on accept: `restricted`** — the user must explicitly upgrade to
`full` if desired.

```
/pair permissions buildbox full
/pair permissions buildbox restricted
```

## User Commands

| Command | Description |
|---------|-------------|
| `/pair <url>` | Initiate pairing with a remote instance |
| `/pair accept <name\|id>` | Accept a pending pairing request |
| `/pair deny <name\|id>` | Deny a request (can retry later) |
| `/pair block <name\|id>` | Permanently deny (silent drop) |
| `/pair revoke <name\|id>` | Unpair an existing peer |
| `/pair list` | Show all peers and their status |
| `/pair permissions <name> <level>` | Set permission level |
| `/ask <instance> <prompt>` | Send a prompt to a paired instance |

## Agent Tool

The `remote_agent` tool is available to the agent during turns:

```
remote_agent({
  instance: "buildbox",
  prompt: "check disk space",
  timeout: 60
})
```

This enables agent-to-agent delegation — one agent can ask another to perform
a task and incorporate the result into its own response.

## Security Properties

- **No pre-shared secrets** — Ed25519 keypairs generated locally, public keys
  exchanged during pairing.
- **Consent required** — No instance processes requests from unknown peers.
  The user must explicitly accept each pairing.
- **Revocable** — Either side can unpair at any time via `/pair revoke`.
- **Replay-resistant** — Timestamped signed requests with a ±60s window.
- **Least privilege** — Default `restricted` permissions; user escalates
  explicitly.
- **Blockable** — Persistent deny for unwanted peers.
- **Auditable** — All remote requests are logged with peer ID, prompt,
  tools used, duration, and result summary.
- **Opt-in** — Remote endpoints are disabled entirely when no peers exist.

## Implementation Plan

| Phase | Scope |
|-------|-------|
| 1. Identity | Generate/store Ed25519 keypair, expose fingerprint |
| 2. Pairing | Pair request/confirm handlers, `/pair` commands, peers table |
| 3. Signed requests | Request signing and verification middleware |
| 4. Remote ask | `/api/remote/ask` handler — runs agent, returns result |
| 5. Agent tool | `remote_agent` tool and `/ask` command |
| 6. Permissions | Restricted mode, tool filtering for remote turns |

## Diagram

See [`cross-instance-ipc-design.svg`](cross-instance-ipc-design.svg) for the
full architecture and sequence diagram.

## Future Considerations

- **Async requests** — `POST /api/remote/ask-async` returning a ticket ID,
  with `GET /api/remote/ticket/:id` for polling. Useful for long-running tasks.
- **Streaming** — SSE-based streaming of remote agent output.
- **Broadcast** — Send a query to all paired instances simultaneously.
- **Key rotation** — Mechanism to rotate keypairs and notify peers.
- **Discovery** — mDNS or Tailscale-based automatic peer discovery (opt-in).
- **Custom permissions** — Per-peer tool allowlists for fine-grained control.
