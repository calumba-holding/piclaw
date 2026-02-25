import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import { AuthStorage, createAgentSession, DefaultResourceLoader, getAgentDir, ModelRegistry, SessionManager, SettingsManager, } from "@mariozechner/pi-coding-agent";
import { applyControlCommand } from "./agent-control.js";
import { AGENT_TIMEOUT, SESSIONS_DIR, WORKSPACE_DIR } from "./config.js";
import { detectChannel } from "./router.js";
/** How long (ms) an idle session stays cached before being disposed. */
const IDLE_TTL = 10 * 60 * 1000; // 10 minutes
const CLEANUP_INTERVAL = 60 * 1000; // check every minute
/**
 * Manages a pool of persistent AgentSession instances keyed by chat JID.
 *
 * First invocation for a JID pays the warm-up cost (resource discovery,
 * model initialisation). Subsequent calls reuse the live session – no
 * process-spawn overhead, conversation context already loaded.
 */
export class AgentPool {
    pool = new Map();
    cleanupTimer = null;
    // Shared across all sessions (expensive to create, safe to reuse)
    authStorage;
    modelRegistry;
    settingsManager = SettingsManager.create(WORKSPACE_DIR, getAgentDir());
    logsDir = join(WORKSPACE_DIR, "logs");
    createSession;
    constructor(options = {}) {
        this.createSession = options.createSession;
        this.authStorage = AuthStorage.create();
        this.modelRegistry = options.modelRegistry ?? new ModelRegistry(this.authStorage);
        mkdirSync(SESSIONS_DIR, { recursive: true });
        mkdirSync(this.logsDir, { recursive: true });
        this.cleanupTimer = setInterval(() => this.evictIdle(), CLEANUP_INTERVAL);
    }
    /** Run a prompt against the persistent session for `chatJid`. */
    async runAgent(prompt, chatJid, options = {}) {
        const startTime = Date.now();
        try {
            const session = await this.getOrCreate(chatJid);
            console.log(`[agent-pool] Prompting session ${chatJid} (${prompt.length} chars)`);
            // Collect the assistant's final text from streaming events
            let result = "";
            const onEvent = options.onEvent;
            const unsub = session.subscribe((event) => {
                if (onEvent) {
                    try {
                        onEvent(event);
                    }
                    catch (err) {
                        console.warn("[agent-pool] Event handler error:", err);
                    }
                }
                if (event.type === "message_update" &&
                    event.assistantMessageEvent.type === "text_delta") {
                    result += event.assistantMessageEvent.delta;
                }
            });
            // Timeout handling
            let timedOut = false;
            const timeoutId = setTimeout(async () => {
                timedOut = true;
                console.error(`[agent-pool] Timeout after ${AGENT_TIMEOUT}ms for ${chatJid}`);
                await session.abort();
            }, AGENT_TIMEOUT);
            // Set chat context for IPC skills (skills read this env var)
            process.env.PICLAW_CHAT_JID = chatJid;
            process.env.PICLAW_CHANNEL = detectChannel(chatJid);
            try {
                await session.prompt(prompt);
            }
            finally {
                clearTimeout(timeoutId);
                unsub();
            }
            const duration = Date.now() - startTime;
            this.writeLog(chatJid, duration, timedOut, result, null);
            if (timedOut) {
                return { status: "error", result: null, error: `Timed out after ${AGENT_TIMEOUT}ms` };
            }
            console.log(`[agent-pool] Done in ${duration}ms (${result.length} chars, session ${chatJid})`);
            return { status: "success", result: result.trim() || null };
        }
        catch (err) {
            const duration = Date.now() - startTime;
            const errorMsg = err instanceof Error ? err.message : String(err);
            this.writeLog(chatJid, duration, false, null, errorMsg);
            console.error(`[agent-pool] Error for ${chatJid}:`, errorMsg);
            return { status: "error", result: null, error: errorMsg };
        }
    }
    async applyControlCommand(chatJid, command) {
        const session = await this.getOrCreate(chatJid);
        return applyControlCommand(session, this.modelRegistry, command);
    }
    /** Gracefully shut down all sessions. */
    async shutdown() {
        if (this.cleanupTimer) {
            clearInterval(this.cleanupTimer);
            this.cleanupTimer = null;
        }
        for (const [jid, entry] of this.pool) {
            try {
                entry.session.dispose();
                console.log(`[agent-pool] Disposed session ${jid}`);
            }
            catch (err) {
                console.error(`[agent-pool] Error disposing ${jid}:`, err);
            }
        }
        this.pool.clear();
    }
    // ── internal ────────────────────────────────────────────
    async getOrCreate(chatJid) {
        const existing = this.pool.get(chatJid);
        if (existing) {
            existing.lastUsed = Date.now();
            return existing.session;
        }
        console.log(`[agent-pool] Creating new session for ${chatJid}`);
        // Each chat gets its own session directory so history is per-conversation
        const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
        mkdirSync(chatSessionDir, { recursive: true });
        if (this.createSession) {
            const session = await this.createSession(chatJid, chatSessionDir);
            this.pool.set(chatJid, { session, lastUsed: Date.now() });
            console.log(`[agent-pool] Session ready for ${chatJid} (pool size: ${this.pool.size})`);
            return session;
        }
        // Use DefaultResourceLoader for full discovery (skills, extensions, context)
        const resourceLoader = new DefaultResourceLoader({
            cwd: WORKSPACE_DIR,
            agentDir: getAgentDir(),
            settingsManager: this.settingsManager,
        });
        await resourceLoader.reload();
        const { session } = await createAgentSession({
            cwd: WORKSPACE_DIR,
            agentDir: getAgentDir(),
            authStorage: this.authStorage,
            modelRegistry: this.modelRegistry,
            settingsManager: this.settingsManager,
            resourceLoader,
            sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, chatSessionDir),
        });
        this.pool.set(chatJid, { session, lastUsed: Date.now() });
        console.log(`[agent-pool] Session ready for ${chatJid} (pool size: ${this.pool.size})`);
        return session;
    }
    evictIdle() {
        const now = Date.now();
        for (const [jid, entry] of this.pool) {
            if (now - entry.lastUsed > IDLE_TTL) {
                console.log(`[agent-pool] Evicting idle session ${jid}`);
                try {
                    entry.session.dispose();
                }
                catch { }
                this.pool.delete(jid);
            }
        }
    }
    writeLog(chatJid, duration, timedOut, result, error) {
        try {
            const ts = new Date().toISOString().replace(/[:.]/g, "-");
            const content = [
                `Chat: ${chatJid}`,
                `Duration: ${duration}ms`,
                `TimedOut: ${timedOut}`,
                error ? `Error: ${error}` : null,
                "",
                "=== result ===",
                result?.slice(0, 50000) ?? "(none)",
            ]
                .filter((l) => l !== null)
                .join("\n");
            writeFileSync(join(this.logsDir, `agent-${ts}.log`), content);
        }
        catch { }
    }
}
/** Turn a JID into a safe directory name. */
function sanitiseJid(jid) {
    return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
