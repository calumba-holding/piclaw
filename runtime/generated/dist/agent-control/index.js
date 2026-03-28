/**
 * agent-control/index.ts – Public barrel export for the agent-control module.
 *
 * Re-exports the parser, handler dispatcher, and types so consumers can
 * import everything from a single path:
 *   import { parseControlCommand, applyControlCommand, ... } from "./agent-control/index.js";
 */
export { parseControlCommand } from "./agent-control-parser.js";
export { applyControlCommand } from "./agent-control-handlers.js";
