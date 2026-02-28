import { mkdirSync, existsSync } from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { createAgentSession, DefaultResourceLoader, getAgentDir, SessionManager, } from "@mariozechner/pi-coding-agent";
import { SESSIONS_DIR, WORKSPACE_DIR } from "../config.js";
export function ensureSessionDir(chatJid) {
    const chatSessionDir = join(SESSIONS_DIR, sanitiseJid(chatJid));
    mkdirSync(chatSessionDir, { recursive: true });
    return chatSessionDir;
}
function resolveBuiltInExtensions() {
    const currentDir = dirname(fileURLToPath(import.meta.url));
    const rootDir = resolve(currentDir, "..", "..");
    const extensionPath = join(rootDir, "extensions", "model-control.ts");
    return existsSync(extensionPath) ? [extensionPath] : [];
}
export async function createDefaultSession(chatJid, options) {
    const chatSessionDir = ensureSessionDir(chatJid);
    const resourceLoader = new DefaultResourceLoader({
        cwd: WORKSPACE_DIR,
        agentDir: getAgentDir(),
        settingsManager: options.settingsManager,
        additionalExtensionPaths: resolveBuiltInExtensions(),
    });
    await resourceLoader.reload();
    const { session } = await createAgentSession({
        cwd: WORKSPACE_DIR,
        agentDir: getAgentDir(),
        authStorage: options.authStorage,
        modelRegistry: options.modelRegistry,
        settingsManager: options.settingsManager,
        resourceLoader,
        sessionManager: SessionManager.continueRecent(WORKSPACE_DIR, chatSessionDir),
        tools: options.tools,
        customTools: options.customTools,
    });
    return session;
}
export function sanitiseJid(jid) {
    return jid.replace(/[^a-zA-Z0-9._-]/g, "_");
}
