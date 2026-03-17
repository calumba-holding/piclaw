# Changelog

This project did not previously maintain a formal changelog. This file starts
with the **next patch release after `v1.5.2`** and focuses on user-visible and
operator-visible changes.

## Unreleased (since `v1.5.2`)

### Added

- **Agent-owned Adaptive Card posting** via the internal `send_adaptive_card` tool, so cards can be posted through the correct agent/timeline path instead of relying on ad hoc message insertion.
- **Richer Adaptive Card validation flows** around agent-owned cards, including test coverage for terminal states and submission failure handling.
- **Expandable Adaptive Card submission receipts** in the web timeline, so compact receipts can reveal additional submitted fields on demand while still suppressing hidden `__*` metadata.
- **Dedicated preview-to-tab affordances across specialized viewers**, with explicit promotion actions for draw.io, Office, CSV/TSV, PDF, and image previews in the workspace explorer.
- **Skel promotion of useful built-in workflows**, including `timeline-cleanup`, `export-timeline-pdf`, `close-of-day`, and required support scripts for fresh seeded installs.

### Changed

- **Adaptive Card timeline behavior** now keeps finished cards readable and trustworthy: completed/cancelled/failed cards re-render with submitted values hydrated back into the original payload and locked read-only.
- **Workspace previews** now route specialized file types more consistently into their dedicated tab experiences instead of leaving CSV preview behavior as an outlier.
- **Agent-authored posts** created through the unified messages path now broadcast as `agent_response`, keeping ownership and live timeline behavior aligned with normal agent output.
- **Workspace header actions menu** keeps the primary menu affordance on the far left of the header for edge-target access in fullscreen layouts.

### Operator / runtime

- **Runtime `PUID` / `PGID` remapping** lets container launches match the runtime `agent` user/group to host IDs without recursively chowning the entire `/workspace` bind mount.
- **Blank-config startup hardening** reduces first-boot/profile-sync failures when persistent `~/.pi` links need reconciliation.

### Documentation

- Added a formal **extension UI contract** document covering when to use pane extensions, timeline-native UI, or the lower-level `extension_ui_*` bridge.
- Expanded pane-extension documentation with explicit preview-affordance guidance for specialized viewers.
- Refreshed architecture and tools docs to reflect the current Adaptive Card, pane-extension, and web-extension UI model.
