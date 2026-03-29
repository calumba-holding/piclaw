/**
 * web/session-broadcast-service.ts – WebChannel SSE/session broadcast seam.
 *
 * Centralizes the web channel's realtime browser wiring: SSE request handling,
 * channel-wide event fanout, and agent-session binding into the UI bridge.
 * This keeps `channels/web.ts` focused on HTTP endpoint orchestration while
 * preserving the existing public surface (`sse`, `uiBridge`, `handleSse()`,
 * and `broadcastEvent()`).
 */
import { bindWebUiSessionBinder } from "../agent/agent-pool-binder.js";
import { SseHub } from "./sse-hub.js";
import { UiBridge } from "../theming/ui-bridge.js";
/**
 * Owns the SSE hub and extension UI bridge used by WebChannel.
 *
 * The service installs the agent-pool session binder exactly once so every new
 * web session gets the existing UI bridge behavior without `web.ts` needing to
 * wire the pieces together manually.
 */
export class WebSessionBroadcastService {
    sse;
    uiBridge;
    constructor(agentPool, opts = {}) {
        this.sse = opts.sse ?? new SseHub();
        this.uiBridge = opts.uiBridge ?? new UiBridge(this);
        const bindSessionBinder = opts.bindSessionBinder ?? bindWebUiSessionBinder;
        bindSessionBinder(agentPool, (session, chatJid) => this.uiBridge.bindSession(session, chatJid));
    }
    handleSse(req) {
        return this.sse.handleRequest(req);
    }
    broadcastEvent(eventType, data) {
        this.sse.broadcast(eventType, data);
    }
}
