import { createConnection } from "node:net";
import { DEFAULT_WEB_USER_ID, getWebSession } from "../../../db.js";
import { WebSocketTcpBridge } from "../remote-display/websocket-tcp-bridge.js";
import { getSessionTokenFromRequest } from "../auth/session-auth.js";
const FALLBACK_VNC_OWNER = {
    token: "web-vnc-local-default",
    userId: DEFAULT_WEB_USER_ID,
};
const DEFAULT_VNC_HANDOFF_TTL_MS = 15_000;
function sanitizeId(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "") || "target";
}
function toPort(value) {
    const port = typeof value === "number" ? value : parseInt(String(value || ""), 10);
    if (!Number.isFinite(port) || port <= 0 || port > 65535)
        return null;
    return port;
}
function isTruthyFlag(value) {
    const text = String(value || "").trim().toLowerCase();
    return text === "1" || text === "true" || text === "yes" || text === "on";
}
function parseTargetRecord(input, fallbackId) {
    if (!input || typeof input !== "object" || Array.isArray(input))
        return null;
    const record = input;
    const id = sanitizeId(String(record.id || fallbackId || ""));
    const label = String(record.label || id || "VNC target").trim() || id;
    const host = String(record.host || "").trim();
    const port = toPort(record.port);
    if (!id || !host || port === null)
        return null;
    return {
        id,
        label,
        host,
        port,
        readOnly: Boolean(record.readOnly ?? record.read_only ?? false),
    };
}
function sanitizeDirectHost(host) {
    const value = String(host || "").trim();
    if (!value || value.length > 255)
        return null;
    if (/[\s/?#\\]/.test(value))
        return null;
    if (/^[a-z0-9._-]+$/i.test(value))
        return value;
    if (/^[a-f0-9:]+$/i.test(value))
        return value;
    return null;
}
/**
 * Parse a direct-connect VNC reference like `192.168.1.10:5901` or `[fd00::1]:5901`.
 * @param input Raw target reference supplied by the caller.
 * @returns A normalized direct-connect target record when the reference is valid, otherwise null.
 */
export function parseDirectVncTargetReference(input) {
    const text = String(input || "").trim();
    if (!text)
        return null;
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
            if (firstColon <= 0 || firstColon !== lastColon)
                return null;
            const host = sanitizeDirectHost(text.slice(0, lastColon)) || "";
            return {
                host,
                displayHost: host,
                portText: text.slice(lastColon + 1),
            };
        })();
    if (!parsed)
        return null;
    const { host, displayHost, portText } = parsed;
    const port = toPort(portText);
    if (!host || !displayHost || port === null)
        return null;
    const endpoint = `${displayHost}:${port}`;
    return {
        id: endpoint,
        label: endpoint,
        host,
        port,
        readOnly: false,
    };
}
/**
 * Parse allowlisted VNC targets from JSON env/config text.
 * @param raw JSON text containing an object or array of VNC target definitions.
 * @returns Normalized allowlisted targets, or an empty array when parsing fails.
 */
export function parseVncTargets(raw) {
    const text = String(raw || "").trim();
    if (!text)
        return [];
    let parsed;
    try {
        parsed = JSON.parse(text);
    }
    catch {
        return [];
    }
    const targets = [];
    if (Array.isArray(parsed)) {
        for (const item of parsed) {
            const target = parseTargetRecord(item);
            if (target)
                targets.push(target);
        }
        return targets;
    }
    if (parsed && typeof parsed === "object") {
        for (const [id, value] of Object.entries(parsed)) {
            const target = parseTargetRecord(value, id);
            if (target)
                targets.push(target);
        }
    }
    return targets;
}
function defaultCreateSocket(target) {
    return createConnection({ host: target.host, port: target.port });
}
function createHandoffToken() {
    try {
        return crypto.randomUUID();
    }
    catch {
        return `vnc-handoff-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
    }
}
/** Manages allowlisted/direct VNC target metadata and per-websocket TCP bridge sessions. */
export class VncSessionService {
    targets = new Map();
    allowDirectTargets;
    createSocket;
    connectTimeoutMs;
    handoffTtlMs;
    bridge;
    /**
     * Create a VNC websocket/session bridge service.
     * @param options Optional target, timeout, and socket-factory overrides.
     */
    constructor(options = {}) {
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
        this.handoffTtlMs = Number.isFinite(options.handoffTtlMs)
            ? Math.max(1, Number(options.handoffTtlMs))
            : DEFAULT_VNC_HANDOFF_TTL_MS;
        this.bridge = new WebSocketTcpBridge({
            createSocket: (target) => this.createSocketWithHandshakeTimeout(target),
            onConnect: (ws, target) => {
                try {
                    ws.send(JSON.stringify({ type: "vnc.connected", target: { id: target.id, label: target.label } }));
                }
                catch { /* expected: browser websocket may close before connect ack is delivered. */ }
            },
            onError: (ws, _target, error) => {
                try {
                    ws.send(JSON.stringify({ type: "vnc.error", error: error.message || String(error) }));
                }
                catch { /* expected: browser websocket may already be closed while surfacing upstream errors. */ }
            },
            handleControlMessage: (ws, message) => {
                try {
                    const payload = JSON.parse(message);
                    if (payload?.type === "ping") {
                        try {
                            ws.send(JSON.stringify({ type: "pong" }));
                        }
                        catch { /* expected: ping/pong races with socket teardown. */ }
                        return true;
                    }
                }
                catch {
                    /* expected: non-JSON string frames are forwarded to the upstream socket. */
                }
                return false;
            },
        });
    }
    createSocketWithHandshakeTimeout(target) {
        const socket = this.createSocket(target);
        let cleared = false;
        const clear = () => {
            if (cleared)
                return;
            cleared = true;
            clearTimeout(timer);
        };
        const timer = setTimeout(() => {
            try {
                socket.destroy(new Error(`Timed out connecting to VNC target ${target.label || target.id}.`));
            }
            catch { /* expected: socket may already be closed when the timeout fires. */ }
        }, this.connectTimeoutMs);
        socket.once("data", clear);
        socket.once("error", clear);
        socket.once("close", clear);
        return socket;
    }
    /**
     * Report whether direct host:port VNC targets are enabled.
     * @returns True when direct-connect targets are permitted.
     */
    isDirectConnectEnabled() {
        return this.allowDirectTargets;
    }
    /**
     * List sanitized allowlisted targets safe for UI exposure.
     * @returns Allowlisted targets without host/port details.
     */
    getTargets() {
        return Array.from(this.targets.values()).map((target) => ({
            id: target.id,
            label: target.label,
            readOnly: Boolean(target.readOnly),
        }));
    }
    /**
     * Resolve an allowlisted VNC target by id.
     * @param targetId Caller-supplied target identifier.
     * @returns The matching allowlisted target, or null when not found.
     */
    getTarget(targetId) {
        const normalized = sanitizeId(targetId);
        return this.targets.get(normalized) || null;
    }
    /**
     * Resolve either an allowlisted target id or an optional direct-connect reference.
     * @param targetRef Target id or direct host:port reference.
     * @returns The normalized target record when allowed and valid, otherwise null.
     */
    resolveTargetReference(targetRef) {
        const allowlisted = this.getTarget(targetRef);
        if (allowlisted)
            return allowlisted;
        if (!this.allowDirectTargets)
            return null;
        return parseDirectVncTargetReference(targetRef);
    }
    /**
     * Resolve websocket owner metadata for a request targeting a VNC endpoint.
     * @param req Incoming HTTP request carrying session cookies or query auth.
     * @param targetRef Target id or direct-connect reference being requested.
     * @param allowUnauthenticated Whether fallback local-owner access is allowed.
     * @returns Owner metadata for the request when authorized, otherwise null.
     */
    resolveOwnerFromRequest(req, targetRef, allowUnauthenticated = false) {
        const target = this.resolveTargetReference(targetRef);
        if (!target)
            return null;
        const token = getSessionTokenFromRequest(req);
        if (token) {
            const session = getWebSession(token);
            if (session) {
                return { kind: "vnc", token, userId: session.user_id, targetRef: target.id, handoffToken: null };
            }
        }
        if (!allowUnauthenticated)
            return null;
        return { kind: "vnc", token: FALLBACK_VNC_OWNER.token, userId: FALLBACK_VNC_OWNER.userId, targetRef: target.id, handoffToken: null };
    }
    matchesOwner(left, right) {
        if (!left || !right)
            return false;
        return left.kind === "vnc"
            && right.kind === "vnc"
            && left.token === right.token
            && left.userId === right.userId
            && left.targetRef === right.targetRef;
    }
    /**
     * Create a websocket handoff token for an existing VNC connection owned by the request.
     * @param req Incoming HTTP request carrying session cookies or query auth.
     * @param targetRef Target id or direct-connect reference being handed off.
     * @param allowUnauthenticated Whether fallback local-owner access is allowed.
     * @returns A handoff token payload when a matching live connection exists, otherwise null.
     */
    createHandoffFromRequest(req, targetRef, allowUnauthenticated = false) {
        const owner = this.resolveOwnerFromRequest(req, targetRef, allowUnauthenticated);
        if (!owner)
            return null;
        const record = this.bridge.findConnection((entry) => this.matchesOwner(entry.owner, owner));
        if (!record)
            return null;
        const token = createHandoffToken();
        const prepared = this.bridge.prepareHandoff(record, token, this.handoffTtlMs);
        if (!prepared)
            return null;
        return {
            token,
            expires_at: new Date(Date.now() + this.handoffTtlMs).toISOString(),
        };
    }
    /**
     * Build the UI-facing VNC session metadata payload.
     * @param targetRef Optional target id/reference to resolve and describe in the response.
     * @returns Transport metadata, allowlist exposure, and optional target details for the UI.
     */
    getSessionInfo(targetRef) {
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
    /**
     * Attach a websocket client to a VNC bridge connection or handoff session.
     * @param ws Connected websocket carrying VNC owner metadata in `ws.data`.
     * @returns Nothing.
     */
    attachClient(ws) {
        const target = this.resolveTargetReference(ws.data.targetRef);
        if (!target) {
            try {
                ws.close(1008, "Unknown VNC target.");
            }
            catch { /* expected: websocket may already be gone while rejecting an unknown target. */ }
            return;
        }
        const handoffToken = String(ws.data.handoffToken || "").trim();
        if (handoffToken) {
            const handoffRecord = this.bridge.getHandoffRecord(handoffToken);
            const handoffOwner = handoffRecord?.owner;
            const sameOwner = this.matchesOwner(handoffOwner, ws.data);
            const sameTarget = Boolean(handoffRecord && handoffRecord.target?.id === target.id);
            if (!handoffRecord || !sameOwner || !sameTarget) {
                try {
                    ws.close(1008, "Invalid or expired VNC handoff.");
                }
                catch { /* expected: websocket may already be gone while rejecting an invalid handoff. */ }
                return;
            }
            this.bridge.attachClient(ws, target, { handoffToken });
            return;
        }
        this.bridge.attachClient(ws, target);
    }
    /**
     * Forward an inbound websocket frame to the VNC bridge.
     * @param ws Connected websocket carrying VNC owner metadata.
     * @param message Raw websocket frame payload.
     * @returns Nothing.
     */
    handleMessage(ws, message) {
        this.bridge.handleMessage(ws, message);
    }
    /**
     * Detach a websocket client from the VNC bridge.
     * @param ws Connected websocket to remove.
     * @returns Nothing.
     */
    detachClient(ws) {
        this.bridge.detachClient(ws);
    }
    /**
     * Shut down all active VNC bridge sessions managed by this service.
     * @returns Nothing.
     */
    shutdown() {
        this.bridge.shutdown();
    }
}
