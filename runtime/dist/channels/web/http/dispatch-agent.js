/**
 * web/http/dispatch-agent.ts – Agent route dispatch helpers.
 */
/**
 * Handle /agent routes when the request matches; otherwise return null.
 */
export async function handleAgentRoutes(channel, req, pathname, url) {
    if (req.method === "GET" && pathname === "/agent/thought") {
        const turnId = url.searchParams.get("turn_id");
        const panel = url.searchParams.get("panel");
        return channel.handleThought(panel, turnId);
    }
    if (req.method === "POST" && pathname === "/agent/thought/visibility") {
        return await channel.handleThoughtVisibility(req);
    }
    if (req.method === "POST" && pathname.startsWith("/agent/") && pathname.endsWith("/message")) {
        return await channel.handleAgentMessage(req, pathname);
    }
    if (req.method === "GET" && pathname === "/agent/roster") {
        return await channel.handleAgents();
    }
    if (req.method === "GET" && pathname === "/agent/status") {
        return channel.handleAgentStatus(req);
    }
    if (req.method === "GET" && pathname === "/agent/context") {
        return await channel.handleAgentContext(req);
    }
    if (req.method === "GET" && pathname === "/agent/autoresearch/status") {
        return await channel.handleAutoresearchStatus(req);
    }
    if (req.method === "POST" && pathname === "/agent/autoresearch/stop") {
        return await channel.handleAutoresearchStop(req);
    }
    if (req.method === "POST" && pathname === "/agent/autoresearch/dismiss") {
        return await channel.handleAutoresearchDismiss(req);
    }
    if (req.method === "GET" && pathname === "/agent/queue-state") {
        return await channel.handleAgentQueueState(req);
    }
    if (req.method === "POST" && pathname === "/agent/queue-remove") {
        return await channel.handleAgentQueueRemove(req);
    }
    if (req.method === "POST" && pathname === "/agent/queue-steer") {
        return await channel.handleAgentQueueSteer(req);
    }
    if (req.method === "GET" && pathname === "/agent/models") {
        return await channel.handleAgentModels(req);
    }
    if (req.method === "GET" && pathname === "/agent/active-chats") {
        return await channel.handleAgentActiveChats(req);
    }
    if (req.method === "GET" && pathname === "/agent/branches") {
        return await channel.handleAgentBranches(req);
    }
    if (req.method === "POST" && pathname === "/agent/branch-fork") {
        return await channel.handleAgentBranchFork(req);
    }
    if (req.method === "POST" && pathname === "/agent/branch-rename") {
        return await channel.handleAgentBranchRename(req);
    }
    if (req.method === "POST" && pathname === "/agent/branch-prune") {
        return await channel.handleAgentBranchPrune(req);
    }
    if (req.method === "POST" && pathname === "/agent/branch-restore") {
        return await channel.handleAgentBranchRestore(req);
    }
    if (req.method === "POST" && pathname === "/agent/peer-message") {
        return await channel.handleAgentPeerMessage(req);
    }
    if (req.method === "POST" && pathname === "/agent/respond") {
        return await channel.handleAgentRespond(req);
    }
    if (req.method === "POST" && pathname === "/agent/card-action") {
        return await channel.handleAdaptiveCardAction(req);
    }
    if (req.method === "POST" && pathname === "/agent/side-prompt") {
        return await channel.handleAgentSidePrompt(req);
    }
    if (req.method === "POST" && pathname === "/agent/side-prompt/stream") {
        return await channel.handleAgentSidePromptStream(req);
    }
    // /agent/whitelist — deprecated no-op stub, removed for security hygiene.
    if (req.method === "POST" && pathname === "/agent/whitelist") {
        return channel.json({ error: "Not found" }, 404);
    }
    return null;
}
