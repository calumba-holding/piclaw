/**
 * Generic browser-websocket <-> upstream TCP bridge for remote-display transports.
 *
 * Protocol-specific services (VNC today, RDP/SPICE/etc. later) should keep
 * auth/allowlist/session metadata in their own layer and delegate the raw
 * byte bridge to this class.
 */
export class WebSocketTcpBridge {
    connections = new Map();
    handoffs = new Map();
    records = new Set();
    options;
    constructor(options) {
        this.options = options;
    }
    attachClient(ws, target, options = {}) {
        const handoffToken = String(options.handoffToken || "").trim();
        const existing = handoffToken ? this.handoffs.get(handoffToken) : null;
        if (existing) {
            this.bindClient(existing, ws);
            return existing;
        }
        const socket = this.options.createSocket(target, ws);
        const record = {
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
    prepareHandoff(record, token, ttlMs) {
        const internal = this.asInternalRecord(record);
        const normalizedToken = String(token || "").trim();
        if (!internal || !normalizedToken || !this.records.has(internal))
            return false;
        this.clearHandoff(internal);
        internal.handoffToken = normalizedToken;
        internal.handoffExpiresAt = new Date(Date.now() + Math.max(1, ttlMs)).toISOString();
        this.handoffs.set(normalizedToken, internal);
        internal.handoffTimer = setTimeout(() => {
            if (internal.handoffToken !== normalizedToken)
                return;
            this.clearHandoff(internal);
            if (!internal.ws) {
                this.closeRecord(internal, true);
            }
        }, Math.max(1, ttlMs));
        return true;
    }
    getHandoffRecord(token) {
        const normalizedToken = String(token || "").trim();
        if (!normalizedToken)
            return undefined;
        return this.handoffs.get(normalizedToken);
    }
    findConnection(predicate) {
        for (const record of this.records) {
            if (predicate(record))
                return record;
        }
        return undefined;
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
        for (const record of Array.from(this.records)) {
            this.closeRecord(record, true);
        }
    }
    getConnection(ws) {
        return this.connections.get(ws);
    }
    attachSocketListeners(record) {
        const { socket, target } = record;
        socket.on("connect", () => {
            const activeWs = record.ws;
            if (!activeWs)
                return;
            this.options.onConnect?.(activeWs, target, record);
        });
        socket.on("data", (chunk) => {
            record.bytesIn += typeof chunk === "string" ? Buffer.byteLength(chunk) : chunk.byteLength;
            try {
                record.ws?.send(chunk);
            }
            catch { /* expected: browser websocket may disappear while the upstream socket is still draining. */ }
        });
        socket.on("error", (error) => {
            const normalized = error instanceof Error ? error : new Error(String(error || "Unknown upstream error"));
            const activeWs = record.ws;
            if (activeWs) {
                this.options.onError?.(activeWs, target, normalized, record);
                try {
                    activeWs.close(1011, "Remote display upstream error");
                }
                catch { /* expected: websocket may already be closed when surfacing upstream failures. */ }
            }
            this.closeRecord(record, true);
        });
        socket.on("close", () => {
            const activeWs = record.ws;
            if (activeWs) {
                this.options.onClose?.(activeWs, target, record);
                try {
                    activeWs.close(1000, "Remote display upstream closed");
                }
                catch { /* expected: websocket may already be closed when the upstream ends first. */ }
            }
            this.closeRecord(record, false);
        });
    }
    bindClient(record, ws) {
        const previousWs = record.ws;
        if (previousWs && previousWs !== ws) {
            this.connections.delete(previousWs);
            try {
                previousWs.close(1000, "Remote display session moved to another window");
            }
            catch { /* expected: old websocket may already be gone during handoff. */ }
        }
        record.owner = ws.data;
        record.ws = ws;
        this.connections.set(ws, record);
        this.clearHandoff(record);
        this.options.onConnect?.(ws, record.target, record);
    }
    clearHandoff(record) {
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
    closeClient(ws, closeSocket = true) {
        const record = this.connections.get(ws);
        if (!record)
            return;
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
    closeRecord(record, closeSocket = true) {
        if (!this.records.has(record))
            return;
        this.records.delete(record);
        if (record.ws) {
            this.connections.delete(record.ws);
            record.ws = null;
        }
        this.clearHandoff(record);
        if (closeSocket) {
            try {
                record.socket.destroy();
            }
            catch { /* expected: upstream socket may already be fully torn down. */ }
        }
    }
    asInternalRecord(record) {
        return record;
    }
}
