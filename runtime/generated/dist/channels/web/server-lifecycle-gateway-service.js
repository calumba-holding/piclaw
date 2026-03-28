import { initTheme } from "@mariozechner/pi-coding-agent";
import { purgeExpiredLinkPreviewImageCache } from "../../db.js";
import { createLogger } from "../../utils/logger.js";
import { startWorkspaceWatcher } from "./handlers/workspace.js";
import { checkCsrfOrigin } from "./http/security.js";
const log = createLogger("web");
const LINK_PREVIEW_CACHE_PURGE_INTERVAL_MS = 12 * 60 * 60 * 1000;
const MAX_BIND_ATTEMPTS = 5;
const BIND_RETRY_MS = 1500;
export function createWebServerLifecycleGateway(channel, configs) {
    return new WebServerLifecycleGatewayService({
        ...configs,
        json: (payload, status = 200) => channel.json(payload, status),
        loadState: () => channel.loadState(),
        initTheme: () => initTheme(),
        handleRequest: (req) => channel.handleRequest(req),
        startWorkspaceWatcher: () => startWorkspaceWatcher(channel),
        purgeExpiredLinkPreviewImageCache: (nowIso, limit) => purgeExpiredLinkPreviewImageCache(nowIso, limit),
        authGateway: channel.authGateway,
        terminalService: channel.terminalService,
        vncService: channel.vncService,
        uiBridge: channel.uiBridge,
        sse: channel.sse,
    });
}
export class WebServerLifecycleGatewayService {
    deps;
    server = null;
    workspaceWatcher = null;
    linkPreviewCachePurgeTimer = null;
    constructor(deps) {
        this.deps = deps;
    }
    async start() {
        this.deps.loadState();
        try {
            this.deps.initTheme();
        }
        catch (err) {
            this.logger.warn("Failed to initialize theme cache", {
                operation: "start.init_theme",
                err,
            });
        }
        const tls = await this.loadTlsOptions();
        let lastBindError = null;
        for (let attempt = 1; attempt <= MAX_BIND_ATTEMPTS; attempt++) {
            try {
                this.server = this.serve({
                    hostname: this.deps.webServerConfig.host,
                    port: this.deps.webServerConfig.port,
                    reusePort: true,
                    idleTimeout: this.deps.webServerConfig.idleTimeout,
                    maxRequestBodySize: 512 * 1024 * 1024,
                    fetch: (req, server) => this.handleFetch(req, server),
                    websocket: {
                        open: (ws) => {
                            if (ws.data?.kind === "vnc") {
                                this.deps.vncService.attachClient(ws);
                                return;
                            }
                            this.deps.terminalService.attachClient(ws);
                        },
                        message: (ws, message) => {
                            if (ws.data?.kind === "vnc") {
                                this.deps.vncService.handleMessage(ws, message);
                                return;
                            }
                            this.deps.terminalService.handleMessage(ws, message);
                        },
                        close: (ws) => {
                            if (ws.data?.kind === "vnc") {
                                this.deps.vncService.detachClient(ws);
                                return;
                            }
                            this.deps.terminalService.detachClient(ws);
                        },
                    },
                    ...(tls ? { tls } : {}),
                });
                lastBindError = null;
                break;
            }
            catch (err) {
                lastBindError = err;
                if (err?.code === "EADDRINUSE" && attempt < MAX_BIND_ATTEMPTS) {
                    this.logger.warn("Port busy; retrying web bind", {
                        operation: "start.bind_retry",
                        port: this.deps.webServerConfig.port,
                        attempt,
                        maxAttempts: MAX_BIND_ATTEMPTS,
                        retryMs: BIND_RETRY_MS,
                    });
                    await this.sleep(BIND_RETRY_MS);
                    continue;
                }
                throw err;
            }
        }
        if (lastBindError)
            throw lastBindError;
        this.workspaceWatcher = this.deps.startWorkspaceWatcher();
        const purgeNow = () => {
            const result = this.deps.purgeExpiredLinkPreviewImageCache(new Date().toISOString(), 256);
            if (result.purgedEntries > 0) {
                this.logger.info("Purged expired link-preview cache entries", {
                    operation: "start.purge_link_preview_cache",
                    purgedEntries: result.purgedEntries,
                    purgedMedia: result.purgedMedia,
                });
            }
        };
        purgeNow();
        this.linkPreviewCachePurgeTimer = this.setInterval(purgeNow, LINK_PREVIEW_CACHE_PURGE_INTERVAL_MS);
        const scheme = tls ? "https" : "http";
        this.logger.info("Web UI listening", {
            operation: "start.listen",
            scheme,
            host: this.deps.webServerConfig.host,
            port: this.deps.webServerConfig.port,
        });
    }
    async stop() {
        this.deps.sse.closeAll();
        this.deps.uiBridge.stop();
        this.deps.terminalService.shutdown();
        this.deps.vncService.shutdown();
        if (this.linkPreviewCachePurgeTimer) {
            this.clearInterval(this.linkPreviewCachePurgeTimer);
            this.linkPreviewCachePurgeTimer = null;
        }
        this.server?.stop(true);
        this.server = null;
        if (this.workspaceWatcher) {
            await this.workspaceWatcher.close();
            this.workspaceWatcher = null;
        }
    }
    async handleFetch(req, server) {
        const pathname = new URL(req.url).pathname;
        if (pathname === "/terminal/ws") {
            return this.handleTerminalWebSocketUpgrade(req, server);
        }
        if (pathname === "/vnc/ws") {
            return this.handleVncWebSocketUpgrade(req, server);
        }
        return this.deps.handleRequest(req);
    }
    handleTerminalWebSocketUpgrade(req, server) {
        if (!this.deps.webRuntimeConfig.terminalEnabled) {
            return this.deps.json({ error: "Web terminal is disabled." }, 404);
        }
        const authEnabled = this.deps.authGateway.isAuthEnabled();
        if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
            return this.deps.json({ error: "Unauthorized" }, 401);
        }
        if (!checkCsrfOrigin(req)) {
            return this.deps.json({ error: "Origin not allowed" }, 403);
        }
        const owner = this.deps.terminalService.resolveOwnerFromRequest(req, !authEnabled);
        if (!owner) {
            return this.deps.json({ error: "Unauthorized" }, 401);
        }
        if (!server?.upgrade(req, { data: owner })) {
            return this.deps.json({ error: "WebSocket upgrade failed" }, 400);
        }
        return undefined;
    }
    handleVncWebSocketUpgrade(req, server) {
        const url = new URL(req.url);
        const targetId = url.searchParams.get("target")?.trim() || "";
        const handoffToken = url.searchParams.get("handoff")?.trim() || "";
        if (!targetId) {
            return this.deps.json({ error: "Missing VNC target." }, 400);
        }
        const authEnabled = this.deps.authGateway.isAuthEnabled();
        if (authEnabled && !this.deps.authGateway.isAuthenticated(req)) {
            return this.deps.json({ error: "Unauthorized" }, 401);
        }
        if (!checkCsrfOrigin(req)) {
            return this.deps.json({ error: "Origin not allowed" }, 403);
        }
        const owner = this.deps.vncService.resolveOwnerFromRequest(req, targetId, !authEnabled);
        if (!owner) {
            return this.deps.json({ error: "Unauthorized or unknown/disallowed VNC target" }, 401);
        }
        owner.handoffToken = handoffToken || null;
        if (!server?.upgrade(req, { data: owner })) {
            return this.deps.json({ error: "WebSocket upgrade failed" }, 400);
        }
        return undefined;
    }
    async loadTlsOptions() {
        if (!this.deps.webServerConfig.tlsCert || !this.deps.webServerConfig.tlsKey)
            return null;
        try {
            const [cert, key] = await Promise.all([
                this.readTextFile(this.deps.webServerConfig.tlsCert),
                this.readTextFile(this.deps.webServerConfig.tlsKey),
            ]);
            return { cert, key };
        }
        catch (error) {
            this.logger.error("Failed to load TLS cert/key", {
                operation: "load_tls_options",
                err: error,
            });
            return null;
        }
    }
    get logger() {
        return this.deps.log ?? log;
    }
    get serve() {
        return this.deps.serve ?? Bun.serve;
    }
    async readTextFile(path) {
        if (this.deps.readTextFile) {
            return this.deps.readTextFile(path);
        }
        return Bun.file(path).text();
    }
    async sleep(ms) {
        await (this.deps.sleep ? this.deps.sleep(ms) : Bun.sleep(ms));
    }
    setInterval(handler, timeout) {
        return (this.deps.setInterval ?? globalThis.setInterval)(handler, timeout);
    }
    clearInterval(timer) {
        (this.deps.clearInterval ?? globalThis.clearInterval)(timer);
    }
}
