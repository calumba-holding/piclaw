---
name: proxmox-management
description: Manage Proxmox VMs and USB passthrough using bundled helper scripts (status/inspect/start/stop/resume, USB discovery, USB mapping attach, and backup-restore moves).
distribution: public
---

# Proxmox Management

Use this skill for routine Proxmox VM operations and USB passthrough tasks.

## Scope

This skill is focused on:

- VM inspect/status/start/stop/resume (`qemu`)
- USB discovery on a node
- Cluster USB mapping create/update
- USB mapping attach to a VM slot (`usb0`..`usb4`)
- VM move via backup+restore when direct migration is blocked by storage-type constraints

## Setup

Set Proxmox API environment variables first.

> Keep examples sanitized in prompts/logs. Use placeholders in documentation and avoid sharing real secrets.

```bash
TOKEN_JSON="$(piclaw keychain get proxmox/piclaw-management-token)"
export PVE_BASE="https://proxmox.example.com:8006/api2/json"
export PVE_TOKEN_USER="$(printf '%s' "$TOKEN_JSON" | jq -r '.username')"
export PVE_TOKEN_SECRET="$(printf '%s' "$TOKEN_JSON" | jq -r '.secret')"
```

If `PVE_TOKEN_USER` / `PVE_TOKEN_SECRET` are omitted, scripts try keychain entry `proxmox/piclaw-management-token`.

## Scripts

This skill now uses the packaged helper at `runtime/scripts/proxmox.ts` for the
core VM lifecycle actions. The thin wrappers in this skill directory delegate to
that helper so node discovery, task polling, and keychain resolution stay
centralized.

Wrappers in this skill directory:

- `proxmox-vm-status.ts` (delegates to `vm inspect`)
- `proxmox-start-vm.ts`
- `proxmox-stop-vm.ts`
- `proxmox-resume-vm.ts`
- `proxmox-list-usb.ts`
- `proxmox-upsert-usb-mapping.ts`
- `proxmox-attach-usb-mapping-to-vm.ts`
- `proxmox-move-vm-via-backup-restore.ts`

Packaged helper commands:

- `bun run runtime/scripts/proxmox.ts vm status --vmid <id>`
- `bun run runtime/scripts/proxmox.ts vm inspect --vmid <id>`
- `bun run runtime/scripts/proxmox.ts vm start --vmid <id>`
- `bun run runtime/scripts/proxmox.ts vm stop --vmid <id>`
- `bun run runtime/scripts/proxmox.ts vm resume --vmid <id>`
- `bun run runtime/scripts/proxmox.ts vm restart --vmid <id>`
- `bun run runtime/scripts/proxmox.ts vm ip --vmid <id>`

## Common workflows

### 1) Check VM status/config

```bash
export PVE_VMID="<vmid>"
bun ./proxmox-vm-status.ts
```

### 2) Start/stop/resume VM

```bash
export PVE_VMID="<vmid>"
bun ./proxmox-start-vm.ts
# or
bun ./proxmox-stop-vm.ts
# or
bun ./proxmox-resume-vm.ts
```

### 3) Find Bluetooth USB dongles on a node

```bash
export PVE_NODE="<node>"
export PVE_USB_BLUETOOTH_ONLY=1
bun ./proxmox-list-usb.ts
```

Optional filters:

- `PVE_USB_VENDORID` (e.g. `0a12`)
- `PVE_USB_PRODID` (e.g. `0001`)
- `PVE_USB_CLASS` (e.g. `224` or `e0`)

### 4) Upsert USB mapping + attach to VM

Prefer mapping-based attach with API tokens.

```bash
# Create/update mapping
export PVE_MAPPING_ID="vm117-bt"
export PVE_MAPPING_MAP="node=<node>,id=<vendorid>:<prodid>"
bun ./proxmox-upsert-usb-mapping.ts

# Attach mapping to VM usb0
export PVE_NODE="<node>"
export PVE_VMID="<vmid>"
export PVE_USB_MAPPING_ID="vm117-bt"
export PVE_USB_SLOT="usb0"
bun ./proxmox-attach-usb-mapping-to-vm.ts
```

### 5) Move VM across nodes/storage via backup+restore

Use when direct migration fails due to incompatible storage types.

```bash
export PVE_SOURCE_NODE="<source-node>"
export PVE_VMID="<vmid>"
export PVE_TARGET_NODE="<target-node>"
export PVE_TARGET_STORAGE="<target-storage>"

# optional
export PVE_BACKUP_STORAGE="backup"
export PVE_BACKUP_MODE="stop"
export PVE_DELETE_SOURCE="0"   # set to 1 to remove source after backup

bun ./proxmox-move-vm-via-backup-restore.ts
```

## Notes and limitations

- With token auth, direct `usbX=host=VID:PID` may be rejected by Proxmox ACL checks.
- Mapping path (`usbX=mapping=<id>`) is the safe default for token-based automation.
- If guest-level confirmation is needed, use QEMU guest agent endpoints after attach.
- The packaged helper auto-discovers the VM node from cluster resources for VM lifecycle actions, so `PVE_NODE` is no longer required for the basic status/start/stop/resume wrappers.
