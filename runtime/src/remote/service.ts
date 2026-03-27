/**
 * remote/service.ts – Remote interop request router and stateful limiter composition.
 */

import type { AgentPool } from "../agent-pool.js";
import { getRemoteInteropConfig, type RemoteInteropConfig } from "../core/config.js";
import {
  DEFAULT_NONCE_CACHE_SIZE,
  DEFAULT_NONCE_TTL_MS,
  EXECUTE_LIMIT,
  EXECUTE_WINDOW_MS,
  PAIR_CONFIRM_LIMIT,
  PAIR_CONFIRM_WINDOW_MS,
  PAIR_REQUEST_LIMIT,
  PAIR_REQUEST_WINDOW_MS,
  PING_LIMIT,
  PING_WINDOW_MS,
  PROPOSAL_LIMIT,
  PROPOSAL_WINDOW_MS,
  REVOKE_LIMIT,
  REVOKE_WINDOW_MS,
} from "./limits.js";
import { RemoteNonceCache } from "./nonce-cache.js";
import { SlidingWindowLimiter, jsonResponse } from "./http-utils.js";
import { RemoteExecuteConcurrency } from "./execute-concurrency.js";
import { handlePairConfirm, handlePairRequest, type RemotePairingHandlersContext } from "./service-pairing.js";
import {
  handleExecute,
  handlePing,
  handleProposal,
  handleRevoke,
  type RemoteOperationHandlersContext,
} from "./service-operations.js";

function isRemoteInteropEnabled(config: Readonly<RemoteInteropConfig>): boolean {
  if (config.enabled) return true;
  const raw = (process.env.PICLAW_REMOTE_INTEROP_ENABLED || "").trim().toLowerCase();
  return raw === "1" || raw === "true" || raw === "yes" || raw === "on";
}

function getRemoteInteropDecisionModel(config: Readonly<RemoteInteropConfig>): string {
  const raw = (process.env.PICLAW_REMOTE_INTEROP_DECISION_MODEL || "").trim();
  if (raw) return raw;
  return config.decisionModel || "";
}

/**
 * RemoteInteropService validates and serves `/api/remote/*` endpoint requests.
 *
 * This service owns nonce replay protection, per-endpoint sliding-window
 * limiters, and execute concurrency accounting while delegating endpoint logic
 * to dedicated handler modules.
 */
export class RemoteInteropService {
  private readonly nonceCache = new RemoteNonceCache(DEFAULT_NONCE_TTL_MS, DEFAULT_NONCE_CACHE_SIZE);
  private readonly pairLimiter = new SlidingWindowLimiter(PAIR_REQUEST_LIMIT, PAIR_REQUEST_WINDOW_MS);
  private readonly pairConfirmLimiter = new SlidingWindowLimiter(PAIR_CONFIRM_LIMIT, PAIR_CONFIRM_WINDOW_MS);
  private readonly proposalLimiter = new SlidingWindowLimiter(PROPOSAL_LIMIT, PROPOSAL_WINDOW_MS);
  private readonly pingLimiter = new SlidingWindowLimiter(PING_LIMIT, PING_WINDOW_MS);
  private readonly executeLimiter = new SlidingWindowLimiter(EXECUTE_LIMIT, EXECUTE_WINDOW_MS);
  private readonly revokeLimiter = new SlidingWindowLimiter(REVOKE_LIMIT, REVOKE_WINDOW_MS);
  private readonly executeConcurrency = new RemoteExecuteConcurrency(4, 1);

  constructor(
    private readonly agentPool?: AgentPool,
    private readonly remoteConfig: Readonly<RemoteInteropConfig> = getRemoteInteropConfig(),
  ) {}

  private pairingContext(): RemotePairingHandlersContext {
    return {
      pairLimiter: this.pairLimiter,
      pairConfirmLimiter: this.pairConfirmLimiter,
      nonceCache: this.nonceCache,
    };
  }

  private operationContext(): RemoteOperationHandlersContext {
    return {
      nonceCache: this.nonceCache,
      pingLimiter: this.pingLimiter,
      proposalLimiter: this.proposalLimiter,
      executeLimiter: this.executeLimiter,
      revokeLimiter: this.revokeLimiter,
      executeConcurrency: this.executeConcurrency,
      agentPool: this.agentPool,
      remoteConfig: this.remoteConfig,
      getDecisionModel: () => getRemoteInteropDecisionModel(this.remoteConfig),
    };
  }

  /** Route an incoming `/api/remote/*` request to the appropriate handler. */
  async handleRequest(req: Request): Promise<Response> {
    if (!isRemoteInteropEnabled(this.remoteConfig)) {
      return jsonResponse({ error: "Not found" }, 404);
    }

    const url = new URL(req.url);
    const pathname = url.pathname;

    if (req.method === "POST" && pathname === "/api/remote/pair-request") {
      return handlePairRequest(req, this.pairingContext());
    }

    if (req.method === "POST" && pathname === "/api/remote/pair-confirm") {
      return handlePairConfirm(req, this.pairingContext());
    }

    if (req.method === "POST" && pathname === "/api/remote/revoke") {
      return handleRevoke(req, this.operationContext());
    }

    if (req.method === "GET" && pathname === "/api/remote/ping") {
      return handlePing(req, this.operationContext());
    }

    if (req.method === "POST" && pathname === "/api/remote/proposal") {
      return handleProposal(req, this.operationContext());
    }

    if (req.method === "POST" && pathname === "/api/remote/execute") {
      return handleExecute(req, this.operationContext());
    }

    return jsonResponse({ error: "Not found" }, 404);
  }
}
