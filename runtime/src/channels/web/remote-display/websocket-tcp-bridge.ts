import type { Socket } from "node:net";
import type { ServerWebSocket } from "bun";

export interface RemoteDisplayBridgeConnectionRecord<TSocketData = unknown, TTarget = unknown> {
  owner: TSocketData;
  target: TTarget;
  socket: Socket;
  bytesIn: number;
  bytesOut: number;
  createdAt: string;
  ws: ServerWebSocket<TSocketData> | null;
  handoffToken: string | null;
  handoffExpiresAt: string | null;
}

export interface RemoteDisplayBridgeOptions<TSocketData = unknown, TTarget = unknown> {
  createSocket: (target: TTarget, ws: ServerWebSocket<TSocketData>) => Socket;
  onConnect?: (ws: ServerWebSocket<TSocketData>, target: TTarget, record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>) => void;
  onError?: (ws: ServerWebSocket<TSocketData>, target: TTarget, error: Error, record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>) => void;
  onClose?: (ws: ServerWebSocket<TSocketData>, target: TTarget, record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>) => void;
  handleControlMessage?: (
    ws: ServerWebSocket<TSocketData>,
    message: string,
    record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>
  ) => boolean;
}

interface RemoteDisplayBridgeInternalRecord<TSocketData = unknown, TTarget = unknown>
  extends RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget> {
  handoffTimer: ReturnType<typeof setTimeout> | null;
}

/**
 * Generic browser-websocket <-> upstream TCP bridge for remote-display transports.
 *
 * Protocol-specific services (VNC today, RDP/SPICE/etc. later) should keep
 * auth/allowlist/session metadata in their own layer and delegate the raw
 * byte bridge to this class.
 */
export class WebSocketTcpBridge<TSocketData = unknown, TTarget = unknown> {
  private readonly connections = new Map<ServerWebSocket<TSocketData>, RemoteDisplayBridgeInternalRecord<TSocketData, TTarget>>();
  private readonly handoffs = new Map<string, RemoteDisplayBridgeInternalRecord<TSocketData, TTarget>>();
  private readonly records = new Set<RemoteDisplayBridgeInternalRecord<TSocketData, TTarget>>();
  private readonly options: RemoteDisplayBridgeOptions<TSocketData, TTarget>;

  constructor(options: RemoteDisplayBridgeOptions<TSocketData, TTarget>) {
    this.options = options;
  }

  attachClient(
    ws: ServerWebSocket<TSocketData>,
    target: TTarget,
    options: { handoffToken?: string | null } = {},
  ): RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget> {
    const handoffToken = String(options.handoffToken || "").trim();
    const existing = handoffToken ? this.handoffs.get(handoffToken) : null;
    if (existing) {
      this.bindClient(existing, ws);
      return existing;
    }

    const socket = this.options.createSocket(target, ws);
    const record: RemoteDisplayBridgeInternalRecord<TSocketData, TTarget> = {
      owner: ws.data,
      target,
      socket,
      bytesIn: 0,
      bytesOut: 0,
      createdAt: new Date().toISOString(),
      ws,
      handoffToken: null,
      handoffExpiresAt: null,
      handoffTimer: null,
    };
    this.records.add(record);
    this.connections.set(ws, record);
    this.attachSocketListeners(record);
    return record;
  }

  prepareHandoff(record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>, token: string, ttlMs: number): boolean {
    const internal = this.asInternalRecord(record);
    const normalizedToken = String(token || "").trim();
    if (!internal || !normalizedToken || !this.records.has(internal)) return false;

    this.clearHandoff(internal);
    internal.handoffToken = normalizedToken;
    internal.handoffExpiresAt = new Date(Date.now() + Math.max(1, ttlMs)).toISOString();
    this.handoffs.set(normalizedToken, internal);
    internal.handoffTimer = setTimeout(() => {
      if (internal.handoffToken !== normalizedToken) return;
      this.clearHandoff(internal);
      if (!internal.ws) {
        this.closeRecord(internal, true);
      }
    }, Math.max(1, ttlMs));
    return true;
  }

  getHandoffRecord(token: string | null | undefined): RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget> | undefined {
    const normalizedToken = String(token || "").trim();
    if (!normalizedToken) return undefined;
    return this.handoffs.get(normalizedToken);
  }

  findConnection(
    predicate: (record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>) => boolean,
  ): RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget> | undefined {
    for (const record of this.records) {
      if (predicate(record)) return record;
    }
    return undefined;
  }

  handleMessage(ws: ServerWebSocket<TSocketData>, message: string | Buffer | Uint8Array): void {
    const record = this.connections.get(ws);
    if (!record) return;

    if (typeof message === "string") {
      if (!message.trim()) return;
      const handled = this.options.handleControlMessage?.(ws, message, record) || false;
      if (handled) return;
      record.bytesOut += Buffer.byteLength(message);
      record.socket.write(message);
      return;
    }

    const chunk = Buffer.isBuffer(message) ? message : Buffer.from(message);
    record.bytesOut += chunk.byteLength;
    record.socket.write(chunk);
  }

  detachClient(ws: ServerWebSocket<TSocketData>): void {
    this.closeClient(ws);
  }

  shutdown(): void {
    for (const record of Array.from(this.records)) {
      this.closeRecord(record, true);
    }
  }

  getConnection(ws: ServerWebSocket<TSocketData>): RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget> | undefined {
    return this.connections.get(ws);
  }

  private attachSocketListeners(record: RemoteDisplayBridgeInternalRecord<TSocketData, TTarget>): void {
    const { socket, target } = record;

    socket.on("connect", () => {
      const activeWs = record.ws;
      if (!activeWs) return;
      this.options.onConnect?.(activeWs, target, record);
    });

    socket.on("data", (chunk) => {
      record.bytesIn += typeof chunk === "string" ? Buffer.byteLength(chunk) : chunk.byteLength;
      try { record.ws?.send(chunk); } catch { /* expected: browser websocket may disappear while the upstream socket is still draining. */ }
    });

    socket.on("error", (error) => {
      const normalized = error instanceof Error ? error : new Error(String(error || "Unknown upstream error"));
      const activeWs = record.ws;
      if (activeWs) {
        this.options.onError?.(activeWs, target, normalized, record);
        try { activeWs.close(1011, "Remote display upstream error"); } catch { /* expected: websocket may already be closed when surfacing upstream failures. */ }
      }
      this.closeRecord(record, true);
    });

    socket.on("close", () => {
      const activeWs = record.ws;
      if (activeWs) {
        this.options.onClose?.(activeWs, target, record);
        try { activeWs.close(1000, "Remote display upstream closed"); } catch { /* expected: websocket may already be closed when the upstream ends first. */ }
      }
      this.closeRecord(record, false);
    });
  }

  private bindClient(record: RemoteDisplayBridgeInternalRecord<TSocketData, TTarget>, ws: ServerWebSocket<TSocketData>): void {
    const previousWs = record.ws;
    if (previousWs && previousWs !== ws) {
      this.connections.delete(previousWs);
      try { previousWs.close(1000, "Remote display session moved to another window"); } catch { /* expected: old websocket may already be gone during handoff. */ }
    }
    record.owner = ws.data;
    record.ws = ws;
    this.connections.set(ws, record);
    this.clearHandoff(record);
    this.options.onConnect?.(ws, record.target, record);
  }

  private clearHandoff(record: RemoteDisplayBridgeInternalRecord<TSocketData, TTarget>): void {
    if (record.handoffToken) {
      this.handoffs.delete(record.handoffToken);
    }
    if (record.handoffTimer) {
      clearTimeout(record.handoffTimer);
      record.handoffTimer = null;
    }
    record.handoffToken = null;
    record.handoffExpiresAt = null;
  }

  private closeClient(ws: ServerWebSocket<TSocketData>, closeSocket = true): void {
    const record = this.connections.get(ws);
    if (!record) return;
    this.connections.delete(ws);
    if (record.ws === ws) {
      record.ws = null;
    }
    if (record.handoffToken) {
      if (closeSocket && !record.socket.destroyed) {
        // keep the socket alive while waiting for the replacement client
      }
      return;
    }
    this.closeRecord(record, closeSocket);
  }

  private closeRecord(record: RemoteDisplayBridgeInternalRecord<TSocketData, TTarget>, closeSocket = true): void {
    if (!this.records.has(record)) return;
    this.records.delete(record);
    if (record.ws) {
      this.connections.delete(record.ws);
      record.ws = null;
    }
    this.clearHandoff(record);
    if (closeSocket) {
      try { record.socket.destroy(); } catch { /* expected: upstream socket may already be fully torn down. */ }
    }
  }

  private asInternalRecord(
    record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>,
  ): RemoteDisplayBridgeInternalRecord<TSocketData, TTarget> | null {
    return record as RemoteDisplayBridgeInternalRecord<TSocketData, TTarget> | null;
  }
}
