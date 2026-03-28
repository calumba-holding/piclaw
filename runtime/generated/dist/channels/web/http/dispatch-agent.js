/**
 * web/http/dispatch-agent.ts – Agent route dispatch helpers.
 */
const EXACT_AGENT_ROUTES = [
    {
        method: "GET",
        path: "/agent/thought",
        handle: (channel, _req, url) => {
            const turnId = url.searchParams.get("turn_id");
            const panel = url.searchParams.get("panel");
            return channel.handleThought(panel, turnId);
        },
    },
    {
        method: "POST",
        path: "/agent/thought/visibility",
        handle: (channel, req) => channel.handleThoughtVisibility(req),
    },
    {
        method: "GET",
        path: "/agent/roster",
        handle: (channel) => channel.handleAgents(),
    },
    {
        method: "GET",
        path: "/agent/status",
        handle: (channel, req) => channel.handleAgentStatus(req),
    },
    {
        method: "GET",
        path: "/agent/context",
        handle: (channel, req) => channel.handleAgentContext(req),
    },
    {
        method: "GET",
        path: "/agent/autoresearch/status",
        handle: (channel, req) => channel.handleAutoresearchStatus(req),
    },
    {
        method: "POST",
        path: "/agent/autoresearch/stop",
        handle: (channel, req) => channel.handleAutoresearchStop(req),
    },
    {
        method: "POST",
        path: "/agent/autoresearch/dismiss",
        handle: (channel, req) => channel.handleAutoresearchDismiss(req),
    },
    {
        method: "GET",
        path: "/agent/queue-state",
        handle: (channel, req) => channel.handleAgentQueueState(req),
    },
    {
        method: "POST",
        path: "/agent/queue-remove",
        handle: (channel, req) => channel.handleAgentQueueRemove(req),
    },
    {
        method: "POST",
        path: "/agent/queue-steer",
        handle: (channel, req) => channel.handleAgentQueueSteer(req),
    },
    {
        method: "GET",
        path: "/agent/models",
        handle: (channel, req) => channel.handleAgentModels(req),
    },
    {
        method: "GET",
        path: "/agent/active-chats",
        handle: (channel, req) => channel.handleAgentActiveChats(req),
    },
    {
        method: "GET",
        path: "/agent/branches",
        handle: (channel, req) => channel.handleAgentBranches(req),
    },
    {
        method: "POST",
        path: "/agent/branch-fork",
        handle: (channel, req) => channel.handleAgentBranchFork(req),
    },
    {
        method: "POST",
        path: "/agent/branch-rename",
        handle: (channel, req) => channel.handleAgentBranchRename(req),
    },
    {
        method: "POST",
        path: "/agent/branch-prune",
        handle: (channel, req) => channel.handleAgentBranchPrune(req),
    },
    {
        method: "POST",
        path: "/agent/branch-restore",
        handle: (channel, req) => channel.handleAgentBranchRestore(req),
    },
    {
        method: "POST",
        path: "/agent/peer-message",
        handle: (channel, req) => channel.handleAgentPeerMessage(req),
    },
    {
        method: "POST",
        path: "/agent/respond",
        handle: (channel, req) => channel.handleAgentRespond(req),
    },
    {
        method: "POST",
        path: "/agent/card-action",
        handle: (channel, req) => channel.handleAdaptiveCardAction(req),
    },
    {
        method: "POST",
        path: "/agent/side-prompt",
        handle: (channel, req) => channel.handleAgentSidePrompt(req),
    },
    {
        method: "POST",
        path: "/agent/side-prompt/stream",
        handle: (channel, req) => channel.handleAgentSidePromptStream(req),
    },
    {
        method: "POST",
        path: "/agent/whitelist",
        handle: (channel) => channel.json({ error: "Not found" }, 404),
    },
];
/**
 * Dispatch known `/agent/...` routes and return null when the path should fall through.
 * @param channel Web channel contract exposing agent route handlers.
 * @param req Incoming HTTP request.
 * @param pathname Parsed request pathname used for exact route matching.
 * @param url Parsed request URL used by handlers that consume query params.
 * @returns The matched route response, or null when no `/agent` route applies.
 */
export async function handleAgentRoutes(channel, req, pathname, url) {
    if (req.method === "POST" && pathname.startsWith("/agent/") && pathname.endsWith("/message")) {
        return await channel.handleAgentMessage(req, pathname);
    }
    const route = EXACT_AGENT_ROUTES.find((candidate) => candidate.method === req.method && candidate.path === pathname);
    return route ? await route.handle(channel, req, url) : null;
}
