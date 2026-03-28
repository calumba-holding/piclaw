/**
 * web/http/request-guards.ts – Auth/CSRF/rate-limit pre-dispatch guards.
 */
import { handleAuthVerifyEndpoint, redirectToLoginResponse, serveLoginPageResponse, } from "../auth-endpoints.js";
import { getClientKey } from "./client.js";
import { isRateLimited } from "./rate-limit.js";
import { AUTH_RATE_LIMIT, AUTH_RATE_WINDOW_MS, DATA_RATE_WINDOW_MS, ENROLL_RATE_LIMIT, ENROLL_RATE_WINDOW_MS, getDataRateLimitRule, } from "./rate-limit-rules.js";
import { shouldSkipAuthCheck } from "./route-flags.js";
import { checkCsrfOrigin, rateLimitResponse } from "./security.js";
import { createLogger } from "../../../utils/logger.js";
const log = createLogger("web.request-guards");
/**
 * Apply auth, CSRF, and rate-limit guard checks before route dispatch.
 * @param channel Request-guard channel contract for auth state and JSON responses.
 * @param req Incoming HTTP request.
 * @param pathname Parsed request pathname used for guard routing decisions.
 * @param flags Precomputed route flags for auth/public/mutating endpoint detection.
 * @returns A blocking response when a guard fails, or null when dispatch may continue.
 */
export async function enforceRequestGuards(channel, req, pathname, flags) {
    const authEnabled = channel.authGateway.isAuthEnabled();
    const internalSecretEnabled = channel.authGateway.isInternalSecretEnabled();
    const hasInternalAccess = internalSecretEnabled && channel.authGateway.verifyInternalSecret(req);
    if (flags.isInternalPost || flags.isInternalPatch) {
        if (internalSecretEnabled && !hasInternalAccess) {
            log.warn("Internal secret required", {
                clientKey: getClientKey(req),
                method: req.method,
                path: pathname,
            });
            return channel.json({ error: "Unauthorized" }, 401);
        }
    }
    if (!authEnabled && flags.isAuthVerify) {
        return channel.json({ error: "Auth disabled" }, 404);
    }
    if (flags.isAuthVerify) {
        if (isRateLimited(req, "auth/verify", AUTH_RATE_WINDOW_MS, AUTH_RATE_LIMIT)) {
            log.warn("Auth verify rate limit exceeded", {
                clientKey: getClientKey(req),
                endpoint: "/auth/verify",
            });
            return channel.json({ error: "Too many login attempts. Try again later." }, 429);
        }
    }
    if (flags.isWebauthnLoginStart || flags.isWebauthnLoginFinish) {
        if (isRateLimited(req, "webauthn/login", AUTH_RATE_WINDOW_MS, AUTH_RATE_LIMIT)) {
            log.warn("WebAuthn login rate limit exceeded", {
                clientKey: getClientKey(req),
                endpoint: "webauthn/login",
            });
            return channel.json({ error: "Too many login attempts. Try again later." }, 429);
        }
    }
    if (flags.isWebauthnEnrollPage || flags.isWebauthnRegisterStart || flags.isWebauthnRegisterFinish) {
        if (isRateLimited(req, "webauthn/enrol", ENROLL_RATE_WINDOW_MS, ENROLL_RATE_LIMIT)) {
            log.warn("WebAuthn enrol rate limit exceeded", {
                clientKey: getClientKey(req),
                endpoint: "webauthn/enrol",
            });
            return channel.json({ error: "Too many enrol attempts. Try again later." }, 429);
        }
    }
    const skipAuthCheck = shouldSkipAuthCheck(flags, hasInternalAccess);
    if (authEnabled) {
        if (flags.isAuthVerify) {
            return await handleAuthVerifyEndpoint(req, channel.endpointContexts.auth());
        }
        if (flags.isLoginPage) {
            return await serveLoginPageResponse(channel.endpointContexts.auth());
        }
        if (!skipAuthCheck && !channel.authGateway.isAuthenticated(req)) {
            log.warn("Unauthorized request", {
                clientKey: getClientKey(req),
                method: req.method,
                path: pathname,
            });
            if (flags.isIndex) {
                return await serveLoginPageResponse(channel.endpointContexts.auth());
            }
            if (flags.isGetOrHead) {
                return redirectToLoginResponse();
            }
            return channel.json({ error: "Unauthorized" }, 401);
        }
    }
    else if (flags.isLoginPage) {
        return channel.json({ error: "Not found" }, 404);
    }
    if (flags.isMutating && !hasInternalAccess && !flags.isAuthEndpoint) {
        if (!checkCsrfOrigin(req)) {
            log.warn("CSRF origin check failed", {
                clientKey: getClientKey(req),
                origin: req.headers.get("origin"),
            });
            return channel.json({ error: "Origin not allowed" }, 403);
        }
    }
    if (flags.isMutating && !hasInternalAccess) {
        const dataRule = getDataRateLimitRule(req.method, pathname);
        if (dataRule && isRateLimited(req, dataRule.bucket, DATA_RATE_WINDOW_MS, dataRule.limit)) {
            return rateLimitResponse(dataRule.message);
        }
    }
    return null;
}
