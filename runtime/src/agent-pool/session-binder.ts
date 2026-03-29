/**
 * agent-pool/session-binder.ts – Session binder lifecycle helper.
 */

import type { AgentSession } from "@mariozechner/pi-coding-agent";

import type { PoolEntry } from "./session-manager.js";

/** Dependencies required to bind existing/new sessions into AgentPool. */
export interface AgentSessionBinderOptions {
  pool: Map<string, PoolEntry>;
  onError?: (message: string, details: Record<string, unknown>) => void;
}

/**
 * Manages the optional session binder callback and applies it to sessions.
 */
export class AgentSessionBinder {
  private binder?: (session: AgentSession, chatJid: string) => Promise<void> | void;

  constructor(private readonly options: AgentSessionBinderOptions) {}

  setBinder(binder?: (session: AgentSession, chatJid: string) => Promise<void> | void): void {
    this.binder = binder;
    if (!binder) return;
    for (const [jid, entry] of this.options.pool) {
      try {
        void binder(entry.session, jid);
      } catch (err) {
        this.options.onError?.("Failed to bind session", {
          operation: "set_session_binder.bind_existing_session",
          chatJid: jid,
          err,
        });
      }
    }
  }

  async bindSession(session: AgentSession, chatJid: string): Promise<void> {
    if (!this.binder) return;
    try {
      await this.binder(session, chatJid);
    } catch (err) {
      this.options.onError?.("Failed to bind session", {
        operation: "bind_session",
        chatJid,
        err,
      });
    }
  }
}
