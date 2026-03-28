/**
 * channels/web/webauthn-challenges.ts – transient WebAuthn challenge tracking and helpers.
 */
import { getRequestOriginParts } from "./http/client.js";
const DEFAULT_CHALLENGE_TTL_MS = 10 * 60 * 1000;
/** Tracks pending login/registration WebAuthn challenges with TTL-based pruning. */
export class WebauthnChallengeTracker {
    ttlMs;
    pendingRegistrations = new Map();
    pendingLogins = new Map();
    constructor(ttlMs = DEFAULT_CHALLENGE_TTL_MS) {
        this.ttlMs = ttlMs;
    }
    prune(now = Date.now()) {
        const cutoff = now - this.ttlMs;
        for (const [token, entry] of this.pendingRegistrations.entries()) {
            if (entry.createdAt < cutoff)
                this.pendingRegistrations.delete(token);
        }
        for (const [token, entry] of this.pendingLogins.entries()) {
            if (entry.createdAt < cutoff)
                this.pendingLogins.delete(token);
        }
    }
    /**
     * Track a pending WebAuthn login challenge.
     * @param token Challenge token key used for lookup.
     * @param value Challenge payload excluding creation timestamp.
     * @param now Optional timestamp override for deterministic tests.
     * @returns Nothing.
     */
    trackLogin(token, value, now = Date.now()) {
        this.prune(now);
        this.pendingLogins.set(token, { ...value, createdAt: now });
    }
    /**
     * Consume and remove a pending WebAuthn login challenge.
     * @param token Challenge token key used for lookup.
     * @param now Optional timestamp override for deterministic tests.
     * @returns The pending challenge when found, otherwise null.
     */
    consumeLogin(token, now = Date.now()) {
        this.prune(now);
        const entry = this.pendingLogins.get(token);
        if (!entry)
            return null;
        this.pendingLogins.delete(token);
        return entry;
    }
    /**
     * Track a pending WebAuthn registration challenge.
     * @param token Challenge token key used for lookup.
     * @param value Challenge payload excluding creation timestamp.
     * @param now Optional timestamp override for deterministic tests.
     * @returns Nothing.
     */
    trackRegistration(token, value, now = Date.now()) {
        this.prune(now);
        this.pendingRegistrations.set(token, { ...value, createdAt: now });
    }
    /**
     * Consume and remove a pending WebAuthn registration challenge.
     * @param token Challenge token key used for lookup.
     * @param now Optional timestamp override for deterministic tests.
     * @returns The pending challenge when found, otherwise null.
     */
    consumeRegistration(token, now = Date.now()) {
        this.prune(now);
        const entry = this.pendingRegistrations.get(token);
        if (!entry)
            return null;
        this.pendingRegistrations.delete(token);
        return entry;
    }
}
/**
 * Resolve RP id and origin tuple for WebAuthn ceremony options.
 * @param req Incoming HTTP request providing host/origin context.
 * @returns RP id + origin tuple used by WebAuthn option builders.
 */
export function resolveWebauthnRpInfo(req) {
    const url = new URL(req.url);
    const originHeader = req.headers.get("origin");
    if (originHeader && originHeader !== "null") {
        try {
            const originUrl = new URL(originHeader);
            return { rpId: originUrl.hostname, origin: originUrl.origin };
        }
        catch {
            // Ignore invalid Origin header and fall back to request host/proto.
        }
    }
    const { proto, host } = getRequestOriginParts(req);
    const rpId = host ? host.split(":")[0] : url.hostname;
    const origin = `${proto}://${host || url.host}`;
    return { rpId, origin };
}
/**
 * Encode binary bytes as base64url for WebAuthn JSON payloads.
 * @param value Raw bytes to encode.
 * @returns Base64url-encoded string.
 */
export function bufferToBase64Url(value) {
    return Buffer.from(value).toString("base64url");
}
/**
 * Decode a base64url string into binary bytes for WebAuthn verification.
 * @param value Base64url-encoded input string.
 * @returns Decoded byte buffer.
 */
export function base64UrlToBuffer(value) {
    return Buffer.from(value, "base64url");
}
