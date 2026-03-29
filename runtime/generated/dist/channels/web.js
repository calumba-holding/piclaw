/**
 * channels/web.ts – Web channel: HTTP server, SSE, and API endpoints.
 *
 * The WebChannel class is the central coordinator for the web UI. It:
 *   - Starts the HTTP(S) server (Bun.serve) with TLS and auth support.
 *   - Routes requests to handlers (posts, media, agent, workspace).
 *   - Manages SSE connections for real-time event streaming to browsers.
 *   - Bridges agent events (drafts, thoughts, status) to the UI.
 *   - Handles inbound messages and control commands from the web compose box.
 *
 * Consumers:
 *   - runtime.ts creates and starts the WebChannel.
 *   - The web UI (web/src/) connects via SSE and REST API.
 */
import { WebauthnChallengeTracker } from "./web/auth/webauthn-challenges.js";
import { TotpFailureTracker } from "./web/auth/totp-failure-tracker.js";
import { ResponseService } from "./web/http/response-service.js";
import { QueuedFollowupLifecycleService } from "./web/runtime/queued-followup-lifecycle-service.js";
import { createWebChannelHttpSurfaceService, } from "./web/core/web-channel-http-surface-service.js";
import { createWebChannelRuntimePublicSurfaceService, } from "./web/core/web-channel-runtime-public-surface-service.js";
import { createWebChannelLifecycleSpecialSurfaceService, } from "./web/core/web-channel-lifecycle-special-surface-service.js";
import { installWebChannelPrototype, } from "./web/core/web-channel-prototype.js";
import { TerminalSessionService } from "./web/terminal/terminal-session-service.js";
import { VncSessionService } from "./web/vnc/vnc-session-service.js";
import { initializeWebChannelConstructor } from "./web/core/web-channel-constructor-factory.js";
const DEFAULT_CHAT_JID = "web:default";
const DEFAULT_AGENT_ID = "default";
const STATE_KEY = "last_agent_timestamp_web";
/** Web channel: HTTP/SSE server, API endpoints, and agent event bridge. */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class WebChannel {
    queue;
    agentPool;
    remoteInterop;
    responses = new ResponseService();
    requestRouter;
    endpointContexts;
    pendingLinkPreviews = new Set();
    workspaceVisible = false;
    workspaceShowHidden = false;
    queuedFollowupLifecycle = new QueuedFollowupLifecycleService();
    interactionBroadcaster;
    lastCommandInteractionId = null;
    webauthnChallenges = new WebauthnChallengeTracker();
    totpFailureTracker = new TotpFailureTracker();
    authGateway;
    terminalService = new TerminalSessionService();
    vncService = new VncSessionService();
    sessionBroadcast;
    runtimeState;
    serverLifecycleGateway;
    terminalVncHttpService;
    adaptiveCardSidePromptService;
    peerMessageRelayService;
    httpSurfaceService;
    runtimePublicSurfaceService;
    lifecycleSpecialSurfaceService;
    messageProcessingStorageService;
    messageWriteService;
    runtimeFollowupFacade;
    endpointFacade;
    controlPlaneService;
    constructor(opts) {
        initializeWebChannelConstructor(this, opts, {
            defaultChatJid: DEFAULT_CHAT_JID,
            defaultAgentId: DEFAULT_AGENT_ID,
            stateKey: STATE_KEY,
        });
        this.httpSurfaceService = createWebChannelHttpSurfaceService(this);
        this.runtimePublicSurfaceService = createWebChannelRuntimePublicSurfaceService(this);
        this.lifecycleSpecialSurfaceService = createWebChannelLifecycleSpecialSurfaceService(this, { defaultChatJid: DEFAULT_CHAT_JID, defaultAgentId: DEFAULT_AGENT_ID });
    }
}
installWebChannelPrototype(WebChannel.prototype, {
    defaultChatJid: DEFAULT_CHAT_JID,
    defaultAgentId: DEFAULT_AGENT_ID,
});
