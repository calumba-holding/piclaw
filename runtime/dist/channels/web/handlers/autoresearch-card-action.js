/**
 * handlers/autoresearch-card-action.ts – Card-action handler for autoresearch stop button.
 *
 * Imported dynamically from web.ts when the user clicks "Stop Experiment"
 * on an autoresearch status card. Delegates to the supervisor's stop logic.
 */
import { stopAutoresearchFromWeb } from "../../../extensions/autoresearch-supervisor.js";
/**
 * Stop the currently running autoresearch experiment (card-action path).
 * Returns a human-readable result message.
 */
export async function stopAutoresearchFromCard() {
    const result = await stopAutoresearchFromWeb({ generate_report: true });
    return result.content[0]?.type === "text"
        ? result.content[0].text
        : "Experiment stopped.";
}
