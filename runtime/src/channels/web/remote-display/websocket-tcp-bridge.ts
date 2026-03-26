import type { Socket } from "node:net";
import type { ServerWebSocket } from "bun";

export interface RemoteDisplayBridgeConnectionRecord<TSocketData = unknown, TTarget = unknown> {
  owner: TSocketData;
  target: TTarget;
  socket: Socket;
  bytesIn: number;
  bytesOut: number;
  createdAt: string;
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

/**
 * Generic browser-websocket <-> upstream TCP bridge for remote-display transports.
 *
 * Protocol-specific services (VNC today, RDP/SPICE/etc. later) should keep
 * auth/allowlist/session metadata in their own layer and delegate the raw
 * byte bridge to this class.
 */
export class WebSocketTcpBridge<TSocketData = unknown, TTarget = unknown> {
  private readonly connections = new Map<ServerWebSocket<TSocketData>, RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget>>();
  private readonly options: RemoteDisplayBridgeOptions<TSocketData, TTarget>;

  constructor(options: RemoteDisplayBridgeOptions<TSocketData, TTarget>) {
    this.options = options;
  }

  attachClient(ws: ServerWebSocket<TSocketData>, target: TTarget): void {
    const socket = this.options.createSocket(target, ws);
    const record: RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget> = {
      owner: ws.data,
      target,
      socket,
      bytesIn: 0,
      bytesOut: 0,
      createdAt: new Date().toISOString(),
    };
    this.connections.set(ws, record);

    socket.on("connect", () => {
      this.options.onConnect?.(ws, target, record);
    });
    socket.on("data", (chunk) => {
      record.bytesIn += typeof chunk === "string" ? Buffer.byteLength(chunk) : chunk.byteLength;
      try { ws.send(chunk); } catch { /* expected: browser websocket may disappear while the upstream socket is still draining. */ }
    });
    socket.on("error", (error) => {
      const normalized = error instanceof Error ? error : new Error(String(error || "Unknown upstream error"));
      this.options.onError?.(ws, target, normalized, record);
      try { ws.close(1011, "Remote display upstream error"); } catch { /* expected: websocket may already be closed when surfacing upstream failures. */ }
      this.closeClient(ws);
    });
    socket.on("close", () => {
      this.options.onClose?.(ws, target, record);
      try { ws.close(1000, "Remote display upstream closed"); } catch { /* expected: websocket may already be closed when the upstream ends first. */ }
      this.closeClient(ws, false);
    });
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
    for (const ws of Array.from(this.connections.keys())) {
      this.closeClient(ws);
    }
  }

  getConnection(ws: ServerWebSocket<TSocketData>): RemoteDisplayBridgeConnectionRecord<TSocketData, TTarget> | undefined {
    return this.connections.get(ws);
  }

  private closeClient(ws: ServerWebSocket<TSocketData>, closeSocket = true): void {
    const record = this.connections.get(ws);
    if (!record) return;
    this.connections.delete(ws);
    if (closeSocket) {
      try { record.socket.destroy(); } catch { /* expected: upstream socket may already be fully torn down. */ }
    }
  }
}
