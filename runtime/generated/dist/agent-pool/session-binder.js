/**
 * agent-pool/session-binder.ts – Session binder lifecycle helper.
 */
/**
 * Manages the optional session binder callback and applies it to sessions.
 */
export class AgentSessionBinder {
    options;
    binder;
    constructor(options) {
        this.options = options;
    }
    setBinder(binder) {
        this.binder = binder;
        if (!binder)
            return;
        for (const [jid, entry] of this.options.pool) {
            try {
                void binder(entry.session, jid);
            }
            catch (err) {
                this.options.onError?.("Failed to bind session", {
                    operation: "set_session_binder.bind_existing_session",
                    chatJid: jid,
                    err,
                });
            }
        }
    }
    async bindSession(session, chatJid) {
        if (!this.binder)
            return;
        try {
            await this.binder(session, chatJid);
        }
        catch (err) {
            this.options.onError?.("Failed to bind session", {
                operation: "bind_session",
                chatJid,
                err,
            });
        }
    }
}
