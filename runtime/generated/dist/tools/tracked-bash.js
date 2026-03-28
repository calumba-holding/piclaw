/**
 * tools/tracked-bash.ts – Process-tracked shell execution for the agent.
 *
 * Creates a BashOperations implementation that:
 *   1. Resolves the host's preferred shell (POSIX shell on Unix, PowerShell/cmd on Windows).
 *   2. Resolves keychain placeholders in the command string and environment.
 *   3. Spawns the command in a detached process group for clean kill support.
 *   4. Registers/unregisters the child PID with the process tracker so
 *      agent-pool.ts can force-kill lingering processes on abort/shutdown.
 *   5. Handles timeout and abort-signal cancellation.
 *
 * Consumers:
 *   - tools/context-tools.ts passes createTrackedBashOperations() into the
 *     pi-coding-agent's createBashTool() factory.
 */
import { spawn } from "child_process";
import { existsSync } from "fs";
import { resolveKeychainEnv, resolveKeychainPlaceholders } from "../secure/keychain.js";
import { killProcessTree, registerProcess, unregisterProcess } from "../utils/process-tracker.js";
const POWERSHELL_ARGS = ["-NoProfile", "-Command"];
const POSIX_ARGS = ["-c"];
const CMD_ARGS = ["/c"];
function pushUniqueShell(candidates, candidate) {
    if (!candidate.shell.trim())
        return;
    if (candidates.some((entry) => entry.shell.toLowerCase() === candidate.shell.toLowerCase()))
        return;
    candidates.push(candidate);
}
/** Determine which shell binaries and arguments to try for command execution. */
export function resolveShellCandidates(options = {}) {
    const platform = options.platform ?? process.platform;
    const env = options.env ?? process.env;
    const pathExists = options.pathExists ?? existsSync;
    const candidates = [];
    if (platform === "win32") {
        if (env.SHELL && pathExists(env.SHELL)) {
            pushUniqueShell(candidates, { shell: env.SHELL, args: POSIX_ARGS, family: "posix" });
        }
        const pwshPaths = [
            "C:\\Program Files\\PowerShell\\7\\pwsh.exe",
            "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
        ];
        for (const shellPath of pwshPaths) {
            if (pathExists(shellPath)) {
                pushUniqueShell(candidates, { shell: shellPath, args: POWERSHELL_ARGS, family: "powershell" });
            }
        }
        pushUniqueShell(candidates, { shell: "pwsh.exe", args: POWERSHELL_ARGS, family: "powershell" });
        pushUniqueShell(candidates, { shell: "powershell.exe", args: POWERSHELL_ARGS, family: "powershell" });
        if (env.ComSpec && env.ComSpec.trim()) {
            pushUniqueShell(candidates, { shell: env.ComSpec.trim(), args: CMD_ARGS, family: "cmd" });
        }
        pushUniqueShell(candidates, { shell: "cmd.exe", args: CMD_ARGS, family: "cmd" });
        return candidates;
    }
    if (env.SHELL && pathExists(env.SHELL)) {
        pushUniqueShell(candidates, { shell: env.SHELL, args: POSIX_ARGS, family: "posix" });
    }
    if (pathExists("/bin/bash")) {
        pushUniqueShell(candidates, { shell: "/bin/bash", args: POSIX_ARGS, family: "posix" });
    }
    pushUniqueShell(candidates, { shell: "bash", args: POSIX_ARGS, family: "posix" });
    return candidates;
}
/** Create host-shell tool operations with child process tracking and keychain resolution. */
export function createTrackedBashOperations() {
    return {
        exec: (command, cwd, { onData, signal, timeout, env }) => {
            return new Promise((resolve, reject) => {
                (async () => {
                    const shellCandidates = resolveShellCandidates();
                    if (!existsSync(cwd)) {
                        reject(new Error(`Working directory does not exist: ${cwd}\nCannot execute shell commands.`));
                        return;
                    }
                    let resolvedEnv;
                    let resolvedCommand;
                    try {
                        resolvedEnv = env ? await resolveKeychainEnv(env) : { ...process.env };
                        resolvedCommand = await resolveKeychainPlaceholders(command);
                    }
                    catch (error) {
                        reject(error);
                        return;
                    }
                    let timedOut = false;
                    let aborted = false;
                    let child = null;
                    let settled = false;
                    let attemptedShells = [];
                    let timeoutHandle;
                    const onAbort = () => {
                        aborted = true;
                        if (child?.pid) {
                            killProcessTree(child.pid);
                        }
                    };
                    const cleanup = () => {
                        if (timeoutHandle)
                            clearTimeout(timeoutHandle);
                        if (signal)
                            signal.removeEventListener("abort", onAbort);
                        if (child?.pid)
                            unregisterProcess(child.pid);
                    };
                    if (timeout !== undefined && timeout > 0) {
                        timeoutHandle = setTimeout(() => {
                            timedOut = true;
                            if (child?.pid) {
                                killProcessTree(child.pid);
                            }
                        }, timeout * 1000);
                    }
                    if (signal) {
                        if (signal.aborted) {
                            onAbort();
                        }
                        else {
                            signal.addEventListener("abort", onAbort, { once: true });
                        }
                    }
                    const settleError = (err) => {
                        if (settled)
                            return;
                        settled = true;
                        cleanup();
                        reject(err);
                    };
                    const settleSuccess = (exitCode) => {
                        if (settled)
                            return;
                        settled = true;
                        cleanup();
                        resolve({ exitCode });
                    };
                    const trySpawn = (candidateIndex) => {
                        if (settled)
                            return;
                        const candidate = shellCandidates[candidateIndex];
                        if (!candidate) {
                            const attempted = attemptedShells.length > 0 ? attemptedShells.join(", ") : "(none)";
                            settleError(new Error(`No supported shell found. Tried: ${attempted}`));
                            return;
                        }
                        attemptedShells.push(candidate.shell);
                        const spawned = spawn(candidate.shell, [...candidate.args, resolvedCommand], {
                            cwd,
                            detached: true,
                            env: resolvedEnv,
                            stdio: ["ignore", "pipe", "pipe"],
                        });
                        child = spawned;
                        if (spawned.pid) {
                            registerProcess(spawned.pid);
                        }
                        if (spawned.stdout) {
                            spawned.stdout.on("data", onData);
                        }
                        if (spawned.stderr) {
                            spawned.stderr.on("data", onData);
                        }
                        let shellUnavailable = false;
                        spawned.on("error", (err) => {
                            if (spawned.pid)
                                unregisterProcess(spawned.pid);
                            const errWithCode = err;
                            if (!settled && errWithCode.code === "ENOENT") {
                                shellUnavailable = true;
                                trySpawn(candidateIndex + 1);
                                return;
                            }
                            settleError(err);
                        });
                        spawned.on("close", (code) => {
                            if (spawned.pid)
                                unregisterProcess(spawned.pid);
                            if (shellUnavailable)
                                return;
                            if (aborted || signal?.aborted) {
                                settleError(new Error("aborted"));
                                return;
                            }
                            if (timedOut) {
                                settleError(new Error(`timeout:${timeout}`));
                                return;
                            }
                            settleSuccess(code);
                        });
                    };
                    trySpawn(0);
                })();
            });
        },
    };
}
