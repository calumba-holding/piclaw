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
import { createLogger } from "../utils/logger.js";

const log = createLogger("runtime.state");

/** Persistent runtime state: per-chat timestamps, active chat JIDs. */
export class RuntimeState {
  lastTimestamp = "";
  lastAgentTimestamp: Record<string, string> = {};
  chatJids: Set<string> = new Set();

  private processedCommandIds = new Map<string, Set<string>>();

  constructor(private dataDir: string) {}

  loadChats(): void {
    const chatsFile = join(this.dataDir, "chats.json");
    if (!existsSync(chatsFile)) return;
    try {
      const data = JSON.parse(readFileSync(chatsFile, "utf-8"));
      this.chatJids = new Set(data.jids || []);
    } catch (err) {
      log.warn("Failed to parse persisted chat list; starting with an empty set", {
        operation: "load_chats",
        chatsFile,
        err,
      });
      this.chatJids = new Set();
    }
  }

  saveChats(): void {
    const chatsFile = join(this.dataDir, "chats.json");
    writeFileSync(chatsFile, JSON.stringify({ jids: [...this.chatJids] }, null, 2));
  }

  loadTimestamps(): void {
    this.lastTimestamp = getRouterState("last_timestamp") || "";
    const agentTs = getRouterState("last_agent_timestamp");
    try {
      this.lastAgentTimestamp = agentTs ? JSON.parse(agentTs) : {};
    } catch (err) {
      log.warn("Failed to parse persisted agent timestamps; resetting state", {
        operation: "load_timestamps",
        err,
      });
      this.lastAgentTimestamp = {};
    }
  }

  saveTimestamps(): void {
    setRouterState("last_timestamp", this.lastTimestamp);
    setRouterState("last_agent_timestamp", JSON.stringify(this.lastAgentTimestamp));
  }

  markCommandProcessed(chatJid: string, messageId: string): void {
    this.getProcessedCommandSet(chatJid).add(messageId);
  }

  wasCommandProcessed(chatJid: string, messageId: string): boolean {
    return this.getProcessedCommandSet(chatJid).has(messageId);
  }

  private getProcessedCommandSet(chatJid: string): Set<string> {
    const existing = this.processedCommandIds.get(chatJid);
    if (existing) return existing;
    const set = new Set<string>();
    this.processedCommandIds.set(chatJid, set);
    return set;
  }
}
