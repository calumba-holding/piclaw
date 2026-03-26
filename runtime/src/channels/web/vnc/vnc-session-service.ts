import { createConnection, type Socket } from "node:net";
import type { ServerWebSocket } from "bun";

import { DEFAULT_WEB_USER_ID, getWebSession } from "../../../db.js";
import { WebSocketTcpBridge } from "../remote-display/websocket-tcp-bridge.js";
import { getSessionTokenFromRequest } from "../session-auth.js";

export interface VncTargetRecord {
  id: string;
  label: string;
  host: string;
  port: number;
  readOnly?: boolean;
}

export interface VncSessionOwner {
  kind: "vnc";
  token: string;
  userId: string;
  targetRef: string;
}

export type VncSocketData = VncSessionOwner;

export interface VncSessionServiceOptions {
  targets?: VncTargetRecord[];
  allowDirectTargets?: boolean;
  connectTimeoutMs?: number;
  createSocket?: (target: VncTargetRecord) => Socket;
}

const FALLBACK_VNC_OWNER = {
  token: "web-vnc-local-default",
  userId: DEFAULT_WEB_USER_ID,
};

function sanitizeId(value: string): string {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "target";
}

function toPort(value: unknown): number | null {
  const port = typeof value === "number" ? value : parseInt(String(value || ""), 10);
  if (!Number.isFinite(port) || port <= 0 || port > 65535) return null;
  return port;
}

function isTruthyFlag(value: unknown): boolean {
  const text = String(value || "").trim().toLowerCase();
  return text === "1" || text === "true" || text === "yes" || text === "on";
}

function parseTargetRecord(input: unknown, fallbackId?: string): VncTargetRecord | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) return null;
  const record = input as Record<string, unknown>;
  const id = sanitizeId(String(record.id || fallbackId || ""));
  const label = String(record.label || id || "VNC target").trim() || id;
  const host = String(record.host || "").trim();
  const port = toPort(record.port);
  if (!id || !host || port === null) return null;
  return {
    id,
    label,
    host,
    port,
    readOnly: Boolean(record.readOnly ?? record.read_only ?? false),
  };
}

function sanitizeDirectHost(host: string): string | null {
  const value = String(host || "").trim();
  if (!value || value.length > 255) return null;
  if (/[\s/?#\\]/.test(value)) return null;
  if (/^[a-z0-9._-]+$/i.test(value)) return value;
  if (/^[a-f0-9:]+$/i.test(value)) return value;
  return null;
}

/** Parse a direct-connect VNC reference like 192.168.1.10:5901 or [fd00::1]:5901. */
export function parseDirectVncTargetReference(input: string | null | undefined): VncTargetRecord | null {
  const text = String(input || "").trim();
  if (!text) return null;

  const ipv6Match = /^\[([^\]]+)\]:(\d+)$/.exec(text);
  const parsed = ipv6Match
    ? {
        host: sanitizeDirectHost(ipv6Match[1]) || "",
        displayHost: `[${ipv6Match[1]}]`,
        portText: ipv6Match[2],
      }
    : (() => {
        const firstColon = text.indexOf(":");
        const lastColon = text.lastIndexOf(":");
        if (firstColon <= 0 || firstColon !== lastColon) return null;
        const host = sanitizeDirectHost(text.slice(0, lastColon)) || "";
        return {
          host,
          displayHost: host,
          portText: text.slice(lastColon + 1),
        };
      })();

  if (!parsed) return null;

  const { host, displayHost, portText } = parsed;
  const port = toPort(portText);
  if (!host || !displayHost || port === null) return null;
  const endpoint = `${displayHost}:${port}`;
  return {
    id: endpoint,
    label: endpoint,
    host,
    port,
    readOnly: false,
  };
}

/** Parse allowlisted VNC targets from JSON env/config text. */
export function parseVncTargets(raw?: string | null): VncTargetRecord[] {
  const text = String(raw || "").trim();
  if (!text) return [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return [];
  }

  const targets: VncTargetRecord[] = [];
  if (Array.isArray(parsed)) {
    for (const item of parsed) {
      const target = parseTargetRecord(item);
      if (target) targets.push(target);
    }
    return targets;
  }

  if (parsed && typeof parsed === "object") {
    for (const [id, value] of Object.entries(parsed as Record<string, unknown>)) {
      const target = parseTargetRecord(value, id);
      if (target) targets.push(target);
    }
  }
  return targets;
}

function defaultCreateSocket(target: VncTargetRecord): Socket {
  return createConnection({ host: target.host, port: target.port });
}

/** Manages allowlisted/direct VNC target metadata and per-websocket TCP bridge sessions. */
export class VncSessionService {
  private readonly targets = new Map<string, VncTargetRecord>();
  private readonly allowDirectTargets: boolean;
  private readonly createSocket: (target: VncTargetRecord) => Socket;
  private readonly connectTimeoutMs: number;
  private readonly bridge: WebSocketTcpBridge<VncSocketData, VncTargetRecord>;

  constructor(options: VncSessionServiceOptions = {}) {
    const configured = options.targets || parseVncTargets(process.env.PICLAW_WEB_VNC_TARGETS || process.env.PICLAW_VNC_TARGETS || "");
    for (const target of configured) {
      this.targets.set(target.id, target);
    }
    this.allowDirectTargets = typeof options.allowDirectTargets === "boolean"
      ? options.allowDirectTargets
      : isTruthyFlag(process.env.PICLAW_WEB_VNC_ALLOW_DIRECT || process.env.PICLAW_VNC_ALLOW_DIRECT);
    this.createSocket = options.createSocket || defaultCreateSocket;
    this.connectTimeoutMs = Number.isFinite(options.connectTimeoutMs)
      ? Math.max(1, Number(options.connectTimeoutMs))
      : 10_000;
    this.bridge = new WebSocketTcpBridge<VncSocketData, VncTargetRecord>({
      createSocket: (target) => this.createSocketWithHandshakeTimeout(target),
      onConnect: (ws, target) => {
        try { ws.send(JSON.stringify({ type: "vnc.connected", target: { id: target.id, label: target.label } })); } catch { /* expected: browser websocket may close before connect ack is delivered. */ }
      },
      onError: (ws, _target, error) => {
        try { ws.send(JSON.stringify({ type: "vnc.error", error: error.message || String(error) })); } catch { /* expected: browser websocket may already be closed while surfacing upstream errors. */ }
      },
      handleControlMessage: (ws, message) => {
        try {
          const payload = JSON.parse(message) as { type?: string };
          if (payload?.type === "ping") {
            try { ws.send(JSON.stringify({ type: "pong" })); } catch { /* expected: ping/pong races with socket teardown. */ }
            return true;
          }
        } catch {
          /* expected: non-JSON string frames are forwarded to the upstream socket. */
        }
        return false;
      },
    });
  }

  private createSocketWithHandshakeTimeout(target: VncTargetRecord): Socket {
    const socket = this.createSocket(target);
    let cleared = false;
    const clear = () => {
      if (cleared) return;
      cleared = true;
      clearTimeout(timer);
    };
    const timer = setTimeout(() => {
      try { socket.destroy(new Error(`Timed out connecting to VNC target ${target.label || target.id}.`)); } catch { /* expected: socket may already be closed when the timeout fires. */ }
    }, this.connectTimeoutMs);
    socket.once("data", clear);
    socket.once("error", clear);
    socket.once("close", clear);
    return socket;
  }

  isDirectConnectEnabled(): boolean {
    return this.allowDirectTargets;
  }

  getTargets(): Array<Pick<VncTargetRecord, "id" | "label" | "readOnly">> {
    return Array.from(this.targets.values()).map((target) => ({
      id: target.id,
      label: target.label,
      readOnly: Boolean(target.readOnly),
    }));
  }

  getTarget(targetId: string): VncTargetRecord | null {
    const normalized = sanitizeId(targetId);
    return this.targets.get(normalized) || null;
  }

  resolveTargetReference(targetRef: string): VncTargetRecord | null {
    const allowlisted = this.getTarget(targetRef);
    if (allowlisted) return allowlisted;
    if (!this.allowDirectTargets) return null;
    return parseDirectVncTargetReference(targetRef);
  }

  resolveOwnerFromRequest(req: Request, targetRef: string, allowUnauthenticated = false): VncSessionOwner | null {
    const target = this.resolveTargetReference(targetRef);
    if (!target) return null;

    const token = getSessionTokenFromRequest(req);
    if (token) {
      const session = getWebSession(token);
      if (session) {
        return { kind: "vnc", token, userId: session.user_id, targetRef: target.id };
      }
    }

    if (!allowUnauthenticated) return null;
    return { kind: "vnc", token: FALLBACK_VNC_OWNER.token, userId: FALLBACK_VNC_OWNER.userId, targetRef: target.id };
  }

  getSessionInfo(targetRef?: string | null) {
    const target = targetRef ? this.resolveTargetReference(targetRef) : null;
    const isDirectTarget = Boolean(target && !this.targets.has(target.id));
    return {
      enabled: this.targets.size > 0 || this.allowDirectTargets,
      transport: "websocket",
      ws_path: "/vnc/ws",
      renderer: "placeholder",
      host_policy: this.allowDirectTargets ? "allowlist+direct-opt-in" : "allowlist",
      direct_connect_enabled: this.allowDirectTargets,
      targets: this.getTargets(),
      ...(target ? {
        target: {
          id: target.id,
          label: target.label,
          read_only: Boolean(target.readOnly),
          direct_connect: isDirectTarget,
        },
      } : {}),
    };
  }

  attachClient(ws: ServerWebSocket<VncSocketData>): void {
    const target = this.resolveTargetReference(ws.data.targetRef);
    if (!target) {
      try { ws.close(1008, "Unknown VNC target."); } catch { /* expected: websocket may already be gone while rejecting an unknown target. */ }
      return;
    }
    this.bridge.attachClient(ws, target);
  }

  handleMessage(ws: ServerWebSocket<VncSocketData>, message: string | Buffer | Uint8Array): void {
    this.bridge.handleMessage(ws, message);
  }

  detachClient(ws: ServerWebSocket<VncSocketData>): void {
    this.bridge.detachClient(ws);
  }

  shutdown(): void {
    this.bridge.shutdown();
  }
}
