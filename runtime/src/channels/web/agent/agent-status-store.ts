/**
 * channels/web/agent-status-store.ts – in-memory + persisted web agent status state.
 */

interface AgentStatusStateStore {
  load(): void;
  save(): void;
  setAgentStatus(chatJid: string, status: Record<string, unknown> | null): void;
  getAgentStatuses(): Record<string, Record<string, unknown>>;
}

function isRestartRestorableStatus(status: Record<string, unknown> | null | undefined): boolean {
  if (!status || typeof status !== "object") return false;
  const intentKey = status.intent_key ?? status.intentKey;
  const startedAt = status.started_at ?? status.startedAt;
  return status.type === "intent" && intentKey === "compaction" && typeof startedAt === "string" && startedAt.length > 0;
}

/** In-memory + persisted lifecycle store for active web agent statuses. */
export class AgentStatusStore {
  private activeAgentStatuses = new Map<string, Record<string, unknown>>();

  constructor(private readonly state: AgentStatusStateStore) {}

  load(): void {
    this.state.load();

    // Most persisted statuses are cleared on every startup because the new
    // process may not actually still be running that exact tool/plan phase.
    //
    // Compaction intents are the exception: restart recovery can legitimately
    // land back in the middle of a long compaction/replay window, and keeping
    // the last compaction status (with its original started_at) gives the UI a
    // stable indicator + elapsed timer across reconnects and process restarts.
    const restored = this.state.getAgentStatuses();
    const nextStatuses = new Map<string, Record<string, unknown>>();
    let mutated = false;

    for (const [jid, status] of Object.entries(restored)) {
      if (isRestartRestorableStatus(status)) {
        nextStatuses.set(jid, status);
        continue;
      }
      this.state.setAgentStatus(jid, null);
      mutated = true;
    }

    if (mutated) {
      this.state.save();
    }

    this.activeAgentStatuses = nextStatuses;
  }

  update(chatJid: string, status: Record<string, unknown>): void {
    const type = status?.type;
    if (type === "done" || type === "error") {
      const removed = this.activeAgentStatuses.delete(chatJid);
      if (removed) {
        this.state.setAgentStatus(chatJid, null);
        this.state.save();
      }
      return;
    }

    this.activeAgentStatuses.set(chatJid, status);
    this.state.setAgentStatus(chatJid, status);
    this.state.save();
  }

  get(chatJid: string): Record<string, unknown> | null {
    return this.activeAgentStatuses.get(chatJid) ?? null;
  }
}
