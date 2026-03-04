/**
 * runtime/state.ts – Mutable runtime state for the message-polling loop.
 *
 * Tracks per-chat high-water-mark timestamps, the set of known chat JIDs,
 * and a dedup set for already-processed control commands. State is persisted
 * to the router_state DB table so it survives restarts.
 *
 * Consumers:
 *   - runtime.ts creates and owns a single RuntimeState instance.
 *   - runtime/message-loop.ts reads/writes timestamps and JID sets.
 */
import { existsSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { getRouterState, setRouterState } from "../db.js";
/** Persistent runtime state: per-chat timestamps, active chat JIDs. */
export class RuntimeState {
    dataDir;
    lastTimestamp = "";
    lastAgentTimestamp = {};
    chatJids = new Set();
    processedCommandIds = new Map();
    constructor(dataDir) {
        this.dataDir = dataDir;
    }
    loadChats() {
        const chatsFile = join(this.dataDir, "chats.json");
        if (existsSync(chatsFile)) {
            const data = JSON.parse(readFileSync(chatsFile, "utf-8"));
            this.chatJids = new Set(data.jids || []);
        }
    }
    saveChats() {
        const chatsFile = join(this.dataDir, "chats.json");
        writeFileSync(chatsFile, JSON.stringify({ jids: [...this.chatJids] }, null, 2));
    }
    loadTimestamps() {
        this.lastTimestamp = getRouterState("last_timestamp") || "";
        const agentTs = getRouterState("last_agent_timestamp");
        try {
            this.lastAgentTimestamp = agentTs ? JSON.parse(agentTs) : {};
        }
        catch {
            this.lastAgentTimestamp = {};
        }
    }
    saveTimestamps() {
        setRouterState("last_timestamp", this.lastTimestamp);
        setRouterState("last_agent_timestamp", JSON.stringify(this.lastAgentTimestamp));
    }
    markCommandProcessed(chatJid, messageId) {
        this.getProcessedCommandSet(chatJid).add(messageId);
    }
    wasCommandProcessed(chatJid, messageId) {
        return this.getProcessedCommandSet(chatJid).has(messageId);
    }
    getProcessedCommandSet(chatJid) {
        const existing = this.processedCommandIds.get(chatJid);
        if (existing)
            return existing;
        const set = new Set();
        this.processedCommandIds.set(chatJid, set);
        return set;
    }
}
