/**
 * handlers/autoresearch-card-action.ts – Card-action handler for autoresearch stop button.
 *
 * Imported dynamically from web.ts when the user clicks "Stop Experiment"
 * on an autoresearch status card. Delegates to the supervisor's stop logic.
 */
import { spawnSync } from "node:child_process";
/**
 * Stop the currently running autoresearch experiment (card-action path).
 * Returns a human-readable result message.
 */
export async function stopAutoresearchFromCard() {
    // Find the running tmux session
    const result = spawnSync("tmux", ["list-sessions", "-F", "#{session_name}"], { encoding: "utf8" });
    if (result.status !== 0)
        return "No tmux sessions found.";
    const sessions = result.stdout.trim().split("\n").filter((s) => s.startsWith("autoresearch-"));
    if (sessions.length === 0)
        return "No autoresearch session is running.";
    const tmuxSession = sessions[0];
    // Send Ctrl+C then kill
    spawnSync("tmux", ["send-keys", "-t", tmuxSession, "C-c", ""], { stdio: "ignore" });
    await new Promise((r) => setTimeout(r, 2000));
    spawnSync("tmux", ["kill-session", "-t", tmuxSession], { stdio: "ignore" });
    return `Experiment stopped (tmux session: ${tmuxSession}).`;
}
