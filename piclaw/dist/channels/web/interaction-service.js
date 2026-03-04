/**
 * web/interaction-service.ts – Builds InteractionRow payloads for SSE.
 *
 * Converts raw message/response data into the InteractionRow format
 * expected by the web UI timeline component.
 *
 * Consumers: web/agent-message-service.ts, web/posts-service.ts.
 */
/** Decorate an interaction payload with agent name and avatar. */
export function withAgentProfile(interaction, agentName, agentAvatar, userName, userAvatar, userAvatarBackground) {
    return {
        ...interaction,
        agent_name: agentName,
        agent_avatar: agentAvatar ?? null,
        user_name: userName ?? null,
        user_avatar: userAvatar ?? null,
        user_avatar_background: userAvatarBackground ?? null,
    };
}
/** Broadcast a completed agent interaction to SSE clients. */
export function broadcastAgentResponse(channel, interaction, agentName, agentAvatar, userName, userAvatar, userAvatarBackground) {
    channel.broadcastEvent("agent_response", withAgentProfile(interaction, agentName, agentAvatar, userName, userAvatar, userAvatarBackground));
}
/** Broadcast an updated interaction (edit, link preview) to SSE clients. */
export function broadcastInteractionUpdated(channel, interaction, agentName, agentAvatar, userName, userAvatar, userAvatarBackground) {
    channel.broadcastEvent("interaction_updated", withAgentProfile(interaction, agentName, agentAvatar, userName, userAvatar, userAvatarBackground));
}
