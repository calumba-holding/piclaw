/**
 * Generic browser-websocket <-> upstream TCP bridge for remote-display transports.
 *
 * Protocol-specific services (VNC today, RDP/SPICE/etc. later) should keep
 * auth/allowlist/session metadata in their own layer and delegate the raw
 * byte bridge to this class.
 */
export class WebSocketTcpBridge {
    connections = new Map();
    options;
    constructor(options) {
        this.options = options;
    }
    attachClient(ws, target) {
        const socket = this.options.createSocket(target, ws);
        const record = {
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
            try {
                ws.send(chunk);
            }
            catch { /* expected: browser websocket may disappear while the upstream socket is still draining. */ }
        });
        socket.on("error", (error) => {
            const normalized = error instanceof Error ? error : new Error(String(error || "Unknown upstream error"));
            this.options.onError?.(ws, target, normalized, record);
            try {
                ws.close(1011, "Remote display upstream error");
            }
            catch { /* expected: websocket may already be closed when surfacing upstream failures. */ }
            this.closeClient(ws);
        });
        socket.on("close", () => {
            this.options.onClose?.(ws, target, record);
            try {
                ws.close(1000, "Remote display upstream closed");
            }
            catch { /* expected: websocket may already be closed when the upstream ends first. */ }
            this.closeClient(ws, false);
        });
    }
    handleMessage(ws, message) {
        const record = this.connections.get(ws);
        if (!record)
            return;
        if (typeof message === "string") {
            if (!message.trim())
                return;
            const handled = this.options.handleControlMessage?.(ws, message, record) || false;
            if (handled)
                return;
            record.bytesOut += Buffer.byteLength(message);
            record.socket.write(message);
            return;
        }
        const chunk = Buffer.isBuffer(message) ? message : Buffer.from(message);
        record.bytesOut += chunk.byteLength;
        record.socket.write(chunk);
    }
    detachClient(ws) {
        this.closeClient(ws);
    }
    shutdown() {
        for (const ws of Array.from(this.connections.keys())) {
            this.closeClient(ws);
        }
    }
    getConnection(ws) {
        return this.connections.get(ws);
    }
    closeClient(ws, closeSocket = true) {
        const record = this.connections.get(ws);
        if (!record)
            return;
        this.connections.delete(ws);
        if (closeSocket) {
            try {
                record.socket.destroy();
            }
            catch { /* expected: upstream socket may already be fully torn down. */ }
        }
    }
}
