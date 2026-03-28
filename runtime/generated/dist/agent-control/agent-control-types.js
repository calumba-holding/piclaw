/**
 * agent-control/agent-control-types.ts – Type definitions for the control command system.
 *
 * Defines the discriminated union AgentControlCommand (one variant per command
 * type like /model, /thinking, /abort, /tree, etc.) and the AgentControlResult
 * returned by command handlers.
 *
 * Consumers:
 *   - agent-control-parser.ts produces AgentControlCommand objects.
 *   - agent-control-handlers.ts consumes them and returns AgentControlResult.
 *   - agent-pool.ts, runtime/message-loop.ts, channels/web.ts use both types.
 */
export {};
