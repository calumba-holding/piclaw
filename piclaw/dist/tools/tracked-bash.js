/**
 * tools/tracked-bash.ts – Process-tracked bash execution for the agent.
 *
 * Creates a BashOperations implementation that:
 *   1. Resolves the user's preferred shell (SHELL env, /bin/bash fallback).
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
/** Determine which shell binary and arguments to use for command execution. */
function resolveShellConfig() {
    if (process.platform === "win32") {
        return { shell: "bash.exe", args: ["-c"] };
    }
    if (process.env.SHELL && existsSync(process.env.SHELL)) {
        return { shell: process.env.SHELL, args: ["-c"] };
    }
    if (existsSync("/bin/bash")) {
        return { shell: "/bin/bash", args: ["-c"] };
    }
    return { shell: "bash", args: ["-c"] };
}
/** Create bash tool operations with child process tracking and keychain resolution. */
export function createTrackedBashOperations() {
    return {
        exec: (command, cwd, { onData, signal, timeout, env }) => {
            return new Promise((resolve, reject) => {
                (async () => {
                    const { shell, args } = resolveShellConfig();
                    if (!existsSync(cwd)) {
                        reject(new Error(`Working directory does not exist: ${cwd}\nCannot execute bash commands.`));
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
                    const child = spawn(shell, [...args, resolvedCommand], {
                        cwd,
                        detached: true,
                        env: resolvedEnv,
                        stdio: ["ignore", "pipe", "pipe"],
                    });
                    if (child.pid) {
                        registerProcess(child.pid);
                    }
                    let timedOut = false;
                    let aborted = false;
                    let timeoutHandle;
                    if (timeout !== undefined && timeout > 0) {
                        timeoutHandle = setTimeout(() => {
                            timedOut = true;
                            if (child.pid) {
                                killProcessTree(child.pid);
                            }
                        }, timeout * 1000);
                    }
                    const cleanup = () => {
                        if (timeoutHandle)
                            clearTimeout(timeoutHandle);
                        if (signal)
                            signal.removeEventListener("abort", onAbort);
                        if (child.pid)
                            unregisterProcess(child.pid);
                    };
                    const onAbort = () => {
                        aborted = true;
                        if (child.pid) {
                            killProcessTree(child.pid);
                        }
                    };
                    if (signal) {
                        if (signal.aborted) {
                            onAbort();
                        }
                        else {
                            signal.addEventListener("abort", onAbort, { once: true });
                        }
                    }
                    if (child.stdout) {
                        child.stdout.on("data", onData);
                    }
                    if (child.stderr) {
                        child.stderr.on("data", onData);
                    }
                    child.on("error", (err) => {
                        cleanup();
                        reject(err);
                    });
                    child.on("close", (code) => {
                        cleanup();
                        if (aborted || signal?.aborted) {
                            reject(new Error("aborted"));
                            return;
                        }
                        if (timedOut) {
                            reject(new Error(`timeout:${timeout}`));
                            return;
                        }
                        resolve({ exitCode: code });
                    });
                })();
            });
        },
    };
}
