#!/usr/bin/env bun

/**
 * Move a QEMU VM across nodes/storage via vzdump backup + restore.
 * Useful when direct migrate is blocked by storage-type constraints.
 *
 * Required env:
 * - PVE_SOURCE_NODE
 * - PVE_VMID
 * - PVE_TARGET_NODE
 * - PVE_TARGET_STORAGE
 *
 * Optional env:
 * - PVE_TARGET_VMID (default: same as PVE_VMID)
 * - PVE_TARGET_NAME (default: source VM name)
 * - PVE_BACKUP_STORAGE (default: backup)
 * - PVE_BACKUP_MODE (default: stop)
 * - PVE_DELETE_SOURCE (default: 0)
 * - PVE_BASE (default: https://proxmox.example.com:8006/api2/json)
 * - PVE_TOKEN_USER / PVE_TOKEN_SECRET (fallback keychain)
 */

type Token = { username: string; secret: string };
type ApiJson = { data?: any; message?: string };

function getToken(): Token {
  const u = process.env.PVE_TOKEN_USER;
  const s = process.env.PVE_TOKEN_SECRET;
  if (u && s) return { username: u, secret: s };

  const out = Bun.spawnSync(["piclaw", "keychain", "get", "proxmox/piclaw-management-token"]);
  if (out.exitCode !== 0) throw new Error(`token fetch failed: ${out.stderr.toString()}`);
  const parsed = JSON.parse(out.stdout.toString());
  if (!parsed?.username || !parsed?.secret) throw new Error("invalid keychain token payload");
  return { username: parsed.username, secret: parsed.secret };
}

async function api(base: string, token: Token, path: string, init?: RequestInit): Promise<ApiJson> {
  const r = await fetch(`${base}${path}`, {
    ...init,
    headers: {
      Authorization: `PVEAPIToken=${token.username}=${token.secret}`,
      ...(init?.headers || {}),
    },
    tls: { rejectUnauthorized: false },
  });

  const t = await r.text();
  let j: ApiJson = {};
  try {
    j = JSON.parse(t || "{}");
  } catch {
    j = { message: t };
  }

  if (!r.ok) throw new Error(`API ${r.status} ${path}: ${j.message || t}`);
  return j;
}

async function waitTask(base: string, token: Token, node: string, upid: string, timeoutSec = 3600) {
  const start = Date.now();
  const path = `/nodes/${encodeURIComponent(node)}/tasks/${encodeURIComponent(upid)}/status`;

  while (true) {
    const j = await api(base, token, path);
    const d = (j.data || {}) as { status?: string; exitstatus?: string };
    if (d.status === "stopped") return d;

    if ((Date.now() - start) / 1000 > timeoutSec) {
      throw new Error(`timed out waiting for task ${upid}`);
    }

    await Bun.sleep(5000);
  }
}

const sourceNode = (process.env.PVE_SOURCE_NODE || "").trim();
const vmid = Number(process.env.PVE_VMID || "0");
const targetNode = (process.env.PVE_TARGET_NODE || "").trim();
const targetStorage = (process.env.PVE_TARGET_STORAGE || "").trim();

if (!sourceNode || !vmid || !targetNode || !targetStorage) {
  console.error("Missing required env vars: PVE_SOURCE_NODE, PVE_VMID, PVE_TARGET_NODE, PVE_TARGET_STORAGE");
  process.exit(2);
}

const targetVmid = Number(process.env.PVE_TARGET_VMID || String(vmid));
const backupStorage = (process.env.PVE_BACKUP_STORAGE || "backup").trim();
const backupMode = (process.env.PVE_BACKUP_MODE || "stop").trim();
const deleteSource = process.env.PVE_DELETE_SOURCE === "1";

const base = process.env.PVE_BASE || "https://proxmox.example.com:8006/api2/json";
const token = getToken();

const sourceConfig = await api(base, token, `/nodes/${encodeURIComponent(sourceNode)}/qemu/${vmid}/config`);
const sourceName = String(sourceConfig.data?.name || `vm-${vmid}`);
const targetName = (process.env.PVE_TARGET_NAME || sourceName).trim();

const backupParams = new URLSearchParams({
  vmid: String(vmid),
  storage: backupStorage,
  mode: backupMode,
  compress: "zstd",
  remove: "0",
});

const backupTask = await api(base, token, `/nodes/${encodeURIComponent(sourceNode)}/vzdump`, {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: backupParams,
});

const backupUpid = String(backupTask.data || "");
if (!backupUpid.startsWith("UPID:")) throw new Error(`unexpected backup task response: ${JSON.stringify(backupTask)}`);

const backupResult = await waitTask(base, token, sourceNode, backupUpid, 7200);
if (backupResult.exitstatus !== "OK") throw new Error(`backup failed: ${backupResult.exitstatus || "unknown"}`);

const content = await api(
  base,
  token,
  `/nodes/${encodeURIComponent(sourceNode)}/storage/${encodeURIComponent(backupStorage)}/content?content=backup`,
);

const backups = ((content.data || []) as any[])
  .filter((x) => String(x.volid || "").includes(`vzdump-qemu-${vmid}-`))
  .sort((a, b) => Number(b.ctime || 0) - Number(a.ctime || 0));

if (!backups.length) throw new Error(`no backup artifact found for qemu/${vmid} in storage '${backupStorage}'`);
const archive = String(backups[0].volid);

let deleteResult: { status?: string; exitstatus?: string } | null = null;
if (deleteSource) {
  const del = await api(
    base,
    token,
    `/nodes/${encodeURIComponent(sourceNode)}/qemu/${vmid}?purge=1&destroy-unreferenced-disks=1`,
    { method: "DELETE" },
  );
  const delUpid = String(del.data || "");
  if (!delUpid.startsWith("UPID:")) throw new Error(`unexpected delete response: ${JSON.stringify(del)}`);
  deleteResult = await waitTask(base, token, sourceNode, delUpid, 3600);
  if (deleteResult.exitstatus !== "OK") throw new Error(`source delete failed: ${deleteResult.exitstatus || "unknown"}`);
}

const restoreParams = new URLSearchParams();
restoreParams.set("vmid", String(targetVmid));
restoreParams.set("archive", archive);
restoreParams.set("storage", targetStorage);
restoreParams.set("name", targetName);
restoreParams.set("unique", "1");

const restoreTask = await api(base, token, `/nodes/${encodeURIComponent(targetNode)}/qemu`, {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
  body: restoreParams,
});

const restoreUpid = String(restoreTask.data || "");
if (!restoreUpid.startsWith("UPID:")) throw new Error(`unexpected restore response: ${JSON.stringify(restoreTask)}`);

const restoreResult = await waitTask(base, token, targetNode, restoreUpid, 7200);
if (restoreResult.exitstatus !== "OK") throw new Error(`restore failed: ${restoreResult.exitstatus || "unknown"}`);

const targetConfig = await api(base, token, `/nodes/${encodeURIComponent(targetNode)}/qemu/${targetVmid}/config`);

console.log(
  JSON.stringify(
    {
      source: { node: sourceNode, vmid, name: sourceName },
      backup: { storage: backupStorage, upid: backupUpid, archive },
      deleted_source: deleteSource ? deleteResult : null,
      restored: { node: targetNode, vmid: targetVmid, name: targetName, upid: restoreUpid },
      target_config: targetConfig.data || {},
    },
    null,
    2,
  ),
);
