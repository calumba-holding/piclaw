import { existsSync, statSync } from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { WORKSPACE_DIR } from "../../../core/config.js";
import { resolveWorkspacePath, toRelativePath } from "./paths.js";
function findNearestRepoRoot(absPath) {
    let current = absPath;
    try {
        if (statSync(current).isFile()) {
            current = path.dirname(current);
        }
    }
    catch {
        current = path.dirname(current);
    }
    const workspaceRoot = path.resolve(WORKSPACE_DIR);
    while (true) {
        if (existsSync(path.join(current, ".git"))) {
            return current;
        }
        if (current === workspaceRoot) {
            return null;
        }
        const parent = path.dirname(current);
        if (parent === current || !parent.startsWith(workspaceRoot)) {
            return null;
        }
        current = parent;
    }
}
export function getWorkspaceGitBranch(pathParam, execFileSyncImpl = execFileSync) {
    const targetPath = resolveWorkspacePath(pathParam);
    if (!targetPath)
        return null;
    const repoRoot = findNearestRepoRoot(targetPath);
    if (!repoRoot)
        return null;
    try {
        const branch = execFileSyncImpl("git", ["symbolic-ref", "--short", "HEAD"], { cwd: repoRoot, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
        if (!branch)
            return null;
        return {
            branch,
            repoPath: toRelativePath(repoRoot),
        };
    }
    catch {
        return null;
    }
}
