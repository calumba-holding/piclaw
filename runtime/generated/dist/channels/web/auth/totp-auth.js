/**
 * channels/web/totp-auth.ts – TOTP verification endpoint orchestration.
 */
import { getWebRuntimeConfig } from "../../../core/config.js";
import { createWebSession, DEFAULT_WEB_USER_ID } from "../../../db.js";
import { okJson } from "../http/http-utils.js";
import { randomSessionToken, verifyTotp } from "./auth.js";
function getTotpWindowSteps() {
    const rawWindow = getWebRuntimeConfig().totpWindow;
    return Number.isFinite(rawWindow) ? Math.max(0, rawWindow) : 1;
}
function getSessionTtlSeconds() {
    const rawTtl = getWebRuntimeConfig().sessionTtl;
    return Math.max(60, rawTtl || 0);
}
/** Verify a submitted TOTP code, enforce lockout policy, and issue a web session. */
export async function handleAuthVerifyRequest(req, ctx) {
    if (!ctx.isAuthEnabled() || !ctx.isTotpEnabled())
        return ctx.json({ error: "Auth disabled" }, 404);
    let body;
    try {
        body = await req.json();
    }
    catch {
        return ctx.json({ error: "Invalid JSON" }, 400);
    }
    const code = (body.code || "").trim();
    if (!code)
        return ctx.json({ error: "Missing code" }, 400);
    const now = Date.now();
    const clientKey = ctx.getClientKey(req);
    if (ctx.failureTracker.isLocked(clientKey, now)) {
        ctx.logAuthEvent(req, "TOTP lockout active");
        return ctx.json({ error: "Too many failed attempts. Try again later." }, 429);
    }
    if (!verifyTotp(getWebRuntimeConfig().totpSecret, code, getTotpWindowSteps())) {
        const failure = ctx.failureTracker.recordFailure(clientKey, now);
        if (failure.locked) {
            ctx.logAuthEvent(req, `TOTP lockout triggered (${failure.failures} failures)`);
            return ctx.json({ error: "Too many failed attempts. Try again later." }, 429);
        }
        ctx.logAuthEvent(req, `TOTP failed (${failure.failures}/${ctx.failureTracker.getFailureLimit()})`);
        return ctx.json({ error: "Invalid code" }, 401);
    }
    ctx.failureTracker.clear(clientKey);
    const token = randomSessionToken();
    createWebSession(token, DEFAULT_WEB_USER_ID, getSessionTtlSeconds(), "totp");
    return okJson({ ok: true }, 200, {
        "Set-Cookie": ctx.buildSessionCookie(token, req),
    });
}
