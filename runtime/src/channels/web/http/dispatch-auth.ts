/**
 * web/http/dispatch-auth.ts – WebAuthn/TOTP auth route dispatch helpers.
 */

import {
  handleWebauthnEnrollPageEndpoint,
  handleWebauthnLoginFinishEndpoint,
  handleWebauthnLoginStartEndpoint,
  handleWebauthnRegisterFinishEndpoint,
  handleWebauthnRegisterStartEndpoint,
  redirectToLoginResponse,
  type AuthEndpointsContext,
} from "../auth/auth-endpoints.js";
import type { RouteFlags } from "./route-flags.js";

/** Channel contract required by auth-route HTTP dispatcher. */
export interface AuthDispatchChannel {
  /** Auth gateway methods required to validate pre-enrolment TOTP session state. */
  authGateway: {
    /** Check whether the request currently has a valid temporary TOTP-authenticated session. */
    isTotpSession(req: Request): boolean;
  };
  /** Endpoint-context factory for shared auth endpoint dependencies. */
  endpointContexts: {
    /** Build auth endpoint context used by WebAuthn route handlers. */
    auth(): AuthEndpointsContext;
  };
  /** Build JSON responses for auth-route validation failures. */
  json(payload: unknown, status?: number): Response;
}

/**
 * Dispatch WebAuthn auth routes and return null when no auth route matches.
 * @param channel Auth dispatcher contract exposing session checks and endpoint contexts.
 * @param req Incoming HTTP request.
 * @param flags Precomputed route flags for auth endpoint classification.
 * @returns Matched auth response, or null when the request is not handled here.
 */
export async function handleAuthRoutes(
  channel: AuthDispatchChannel,
  req: Request,
  flags: RouteFlags
): Promise<Response | null> {
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
