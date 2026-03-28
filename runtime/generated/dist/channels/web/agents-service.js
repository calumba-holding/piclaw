/**
 * web/agents-service.ts – Serves agent profile information to the web UI.
 *
 * Builds the response payload for the current-agent roster endpoints,
 * including the agent's name, avatar URL, current model, and thinking level.
 *
 * Current path:
 *   - GET /agent/roster
 *
 * Consumers: web/handlers/agent.ts calls getAgentsResponse().
 */
/** Build the GET /agent/roster response payload with agent profile and model info. */
export async function getAgentsResponse(agentPool, options) {
    const model = await agentPool.getCurrentModelLabel(options.chatJid).catch(() => null);
    return {
        status: 200,
        body: {
            agents: [
                {
                    id: options.agentId,
                    name: options.agentName,
                    description: `${options.agentName} agent`,
                    status: "running",
                    actions: [],
                    avatar_url: options.agentAvatar || null,
                    model: model ?? null,
                },
            ],
            user: {
                name: options.userName || null,
                avatar_url: options.userAvatar || null,
                avatar_background: options.userAvatarBackground || null,
            },
        },
    };
}
