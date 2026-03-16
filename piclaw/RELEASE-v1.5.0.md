# PiClaw v1.5.0 — "Kitchen Sink"

**Release date:** 2026-03-16

> Because at some point you stop asking "should we ship this?" and start asking
> "is there anything we *haven't* bolted on?"

---

## ✨ New Features

### Self-hosted draw.io editor
You can now create and edit `.drawio` diagrams directly in PiClaw — no
third-party SaaS, no phone-home, no excuses. The entire draw.io runtime is
vendored locally and served through the extension route system. Export to SVG,
PNG, and XML works via the standard File → Export menu, with results saved
straight to your workspace.

New diagrams get a proper blank document instead of whatever existential void
the iframe felt like rendering. Opening a `.drawio` file in a tab uses a
single iframe rather than the previous "iframes all the way down" approach,
which frankly nobody asked for.

### ZetaOffice document viewer
Open `.docx`, `.xlsx`, `.pptx`, `.odt`, `.ods`, and `.odp` files directly
in the browser using the vendored ZetaOffice WASM viewer. No cloud round-trip,
no external CDN — the entire runtime is served locally through the extension
route system.

**Requires HTTPS.** ZetaOffice's WASM workers need `SharedArrayBuffer`, which
browsers only expose in secure contexts with the appropriate COOP/COEP headers.
If you're running piclaw without TLS (plain `http://localhost`), the viewer
will not load. Use `mkcert` for local dev certificates, or run behind a
TLS-terminating reverse proxy. The extension route sets the required
`Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy` headers
automatically on the `/office-viewer/*` route.

### Route-backed viewers for CSV, PDF, and images
Dedicated lightweight viewer routes for CSV, PDF, and image files — served
through the same extension route infrastructure as ZetaOffice and draw.io.
The editor bundle is now slimmer because these formats no longer need to ride
along inside it.

### Extension route system
A proper `extension-routes.ts` framework for serving vendored assets and
custom viewer endpoints. Security headers, path validation, and content-type
handling are centralised instead of scattered across ad-hoc handlers. ZetaOffice,
draw.io, the code editor, and the new viewers all use it.

### Model picker sorting
Models in the compose popup are now sorted alphabetically. Revolutionary, we know.

---

## 🔧 Fixes

### Queue stack race condition
After removing a queued follow-up and immediately submitting a new one, the new
item could vanish from the compose stack. Root cause: concurrent
`refreshQueueState()` calls racing, with a stale response overwriting
optimistically-added items. Fixed with a generation counter that discards
late arrivals. The sort of bug that makes you mass-rename variables to
`refreshQueueState_no_really_this_time`.

### Pending turns after reload
Three separate fixes for the "I submitted a message, reloaded, and it
disappeared into the void" family of issues:
1. **Monotonic timestamps** — cursor-based message drain could skip turns that
   landed in the same millisecond. Messages now get strictly increasing
   timestamps per chat.
2. **SSE reconnect queue refresh** — the reconnect handler refreshed the
   timeline and agent status but *forgot* to refresh the queue stack. Queued
   follow-ups were invisible until the next 60-second poll. Sixty seconds is
   an eternity when you're staring at an empty compose box.
3. **Generation counter** (see above) — prevents stale refresh responses from
   clobbering the state after reconnect.

### Mobile compose jumps
iOS Safari's enthusiastic viewport resizing when the keyboard appears no longer
causes the compose box to bounce around like it's trying to escape. The
`<internal>` tag stripping for Thought and Draft panels also landed here,
along with queue reference pills and `xhigh` thinking-level regression coverage.

### Draw.io blank document bootstrap
New `.drawio` files are initialised with a valid blank `mxGraphModel` document
instead of an empty string, which draw.io interpreted as an invitation to
display nothing at all.

### Draw.io export persistence
File → Export as SVG/PNG/XML now actually saves to the workspace via
`POST /drawio/save`. The wrapper's `workspace-export` postMessage is emitted
from the iframe context so the parent listener can actually receive it — a
detail that took longer to debug than anyone would like to admit.

---

## 🏗️ Infrastructure

- **pi-coding-agent upgraded to 0.58.3** — version pinning is now centralised
  to prevent the delightful experience of `make local-install` quietly
  downgrading your runtime.
- **Extension UI SSE bridge** — the full `extension_ui_*` event family is now
  wired into the web SSE client and bridged into browser events. Lightweight
  intent toasts for `notify` and `error` events. The "should this be a real
  product surface?" question is politely deferred to a follow-up ticket.
- **Editor bundle slimming** — CSV, PDF, and image viewing extracted to
  dedicated routes, reducing the main editor bundle size.
- **112 files changed, 84,736 insertions, 730 deletions.** Most of those
  insertions are draw.io locale files, but the number looks impressive in a
  changelog and we're not above that.

---

## 📋 Kanban movement

| Lane | Count |
|---|---|
| Done (this release) | 8 tickets closed |
| Review | 2 |
| Doing | 1 |
| Next | 8 |
| Inbox | 20 |

Notable closures:
- `extension-route-improvements`
- `drawio-editor-pane` (superseded)
- `single-terminal-pane-webterm-integration` (superseded)
- `extension-ui-sse-client-contract-gap`
- `model-popup-sorting`

---

## ⬆️ Upgrade notes

- Run `make local-install` or rebuild the Docker image.
- The draw.io vendor assets add ~80 MB to the package. If you're on a
  metered connection, perhaps make a cup of tea.
- **ZetaOffice requires HTTPS** — the WASM document viewer needs
  `SharedArrayBuffer`, which browsers gate behind secure contexts. Use
  `mkcert` for local certs, or run behind a TLS-terminating proxy. Plain
  `http://localhost` will not work for Office file previews. All other
  features (draw.io, CSV, PDF, image viewers, editor, chat) work fine
  without TLS.
- No database migrations. No breaking API changes. No new environment
  variables.
- If you previously had a vendored ZetaOffice install, it continues to work
  — the extension route system is backwards-compatible.

---

## What's next

- **Draw.io PDF export** — still routes through `EXPORT_URL`; local PDF save
  is a follow-up.
- **Compose drag-and-drop for non-media files** — moved to Next.
- **Adaptive Card submission rendering** — moved to Next.
- **Post-terminal endpoint security audit** — unblocked and moved to Next.
- **Parallel web chat windows** — still in progress, still ambitious.

---

*"Kitchen Sink" because this release contains a diagram editor, document
viewers, queue fixes, mobile fixes, model sorting, SSE bridging, extension
routes, and a partridge in a pear tree. The kitchen sink was already in
v1.3.0; this is the kitchen sink's kitchen sink.*
