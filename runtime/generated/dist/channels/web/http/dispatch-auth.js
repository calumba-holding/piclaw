/**
 * web/http/dispatch-auth.ts – WebAuthn/TOTP auth route dispatch helpers.
 */
import { handleWebauthnEnrollPageEndpoint, handleWebauthnLoginFinishEndpoint, handleWebauthnLoginStartEndpoint, handleWebauthnRegisterFinishEndpoint, handleWebauthnRegisterStartEndpoint, redirectToLoginResponse, } from "../auth-endpoints.js";
/**
 * Dispatch WebAuthn auth routes and return null when no auth route matches.
 * @param channel Auth dispatcher contract exposing session checks and endpoint contexts.
 * @param req Incoming HTTP request.
 * @param flags Precomputed route flags for auth endpoint classification.
 * @returns Matched auth response, or null when the request is not handled here.
 */
export async function handleAuthRoutes(channel, req, flags) {
    if (flags.isWebauthnEnrollPage) {
        if (!channel.authGateway.isTotpSession(req)) {
            if (flags.isGetOrHead) {
                return redirectToLoginResponse();
            }
            return channel.json({ error: "TOTP session required" }, 401);
        }
        return await handleWebauthnEnrollPageEndpoint(channel.endpointContexts.auth());
    }
    if (flags.isWebauthnLoginStart) {
        return await handleWebauthnLoginStartEndpoint(req, channel.endpointContexts.auth());
    }
    if (flags.isWebauthnLoginFinish) {
        return await handleWebauthnLoginFinishEndpoint(req, channel.endpointContexts.auth());
    }
    if (flags.isWebauthnRegisterStart) {
        return await handleWebauthnRegisterStartEndpoint(req, channel.endpointContexts.auth());
    }
    if (flags.isWebauthnRegisterFinish) {
        return await handleWebauthnRegisterFinishEndpoint(req, channel.endpointContexts.auth());
    }
    return null;
}
