import { statSync, readFileSync } from "fs";
import path from "path";
import chokidar from "chokidar";
import { WORKSPACE_DIR } from "../../../config.js";
import { createMedia } from "../../../db.js";
import { MAX_ATTACH_BYTES, MAX_PREVIEW_BYTES } from "../workspace/constants.js";
import { contentTypeForPath, detectBinary, formatMtime, isImageFile, isTextFile } from "../workspace/file-utils.js";
import { resolveWorkspacePath, shouldIgnorePath, toRelativePath } from "../workspace/paths.js";
import { buildTree, compressPaths } from "../workspace/tree.js";
export function handleWorkspaceTree(_channel, req) {
    const url = new URL(req.url);
    const targetPath = resolveWorkspacePath(url.searchParams.get("path"));
    if (!targetPath)
        return new Response(JSON.stringify({ error: "Invalid path" }), { status: 400 });
    const depthRaw = parseInt(url.searchParams.get("depth") || "2", 10);
    const depth = Number.isFinite(depthRaw) ? Math.min(Math.max(depthRaw, 1), 8) : 2;
    try {
        const state = { count: 0, truncated: false };
        const tree = buildTree(targetPath, depth, state);
        return new Response(JSON.stringify({ root: tree, truncated: state.truncated }), {
            headers: { "Content-Type": "application/json" },
        });
    }
    catch {
        return new Response(JSON.stringify({ error: "Failed to read workspace" }), { status: 500 });
    }
}
export function handleWorkspaceFile(_channel, req) {
    const url = new URL(req.url);
    const targetPath = resolveWorkspacePath(url.searchParams.get("path"));
    if (!targetPath)
        return new Response(JSON.stringify({ error: "Invalid path" }), { status: 400 });
    try {
        const stats = statSync(targetPath);
        if (stats.isDirectory()) {
            return new Response(JSON.stringify({ error: "Path is a directory" }), { status: 400 });
        }
        const relPath = toRelativePath(targetPath);
        const contentType = contentTypeForPath(targetPath);
        const isImage = isImageFile(targetPath);
        if (isImage) {
            const rawUrl = `/workspace/raw?path=${encodeURIComponent(relPath)}`;
            return new Response(JSON.stringify({
                path: relPath,
                name: path.basename(targetPath),
                kind: "image",
                content_type: contentType,
                size: stats.size,
                mtime: formatMtime(stats),
                url: rawUrl,
            }), { headers: { "Content-Type": "application/json" } });
        }
        const maxParam = parseInt(url.searchParams.get("max") || "", 10);
        const maxBytes = Number.isFinite(maxParam) ? Math.min(Math.max(maxParam, 1024), MAX_PREVIEW_BYTES) : 20000;
        const buffer = readFileSync(targetPath, { encoding: null });
        const slice = buffer.subarray(0, maxBytes);
        const truncated = buffer.length > maxBytes;
        if (!isTextFile(targetPath) && detectBinary(slice)) {
            return new Response(JSON.stringify({
                path: relPath,
                name: path.basename(targetPath),
                kind: "binary",
                content_type: contentType,
                size: stats.size,
                mtime: formatMtime(stats),
                truncated,
            }), { headers: { "Content-Type": "application/json" } });
        }
        let text = slice.toString("utf-8");
        if (path.extname(targetPath).toLowerCase() === ".json") {
            try {
                text = JSON.stringify(JSON.parse(text), null, 2);
            }
            catch {
                // keep raw
            }
        }
        return new Response(JSON.stringify({
            path: relPath,
            name: path.basename(targetPath),
            kind: "text",
            content_type: contentType,
            size: stats.size,
            mtime: formatMtime(stats),
            text,
            truncated,
        }), { headers: { "Content-Type": "application/json" } });
    }
    catch {
        return new Response(JSON.stringify({ error: "Failed to read file" }), { status: 500 });
    }
}
export function handleWorkspaceRaw(_channel, req) {
    const url = new URL(req.url);
    const targetPath = resolveWorkspacePath(url.searchParams.get("path"));
    if (!targetPath)
        return new Response("Invalid path", { status: 400 });
    try {
        const stats = statSync(targetPath);
        if (stats.isDirectory())
            return new Response("Path is a directory", { status: 400 });
        const contentType = contentTypeForPath(targetPath);
        const file = Bun.file(targetPath);
        return new Response(file, { headers: { "Content-Type": contentType } });
    }
    catch {
        return new Response("Not found", { status: 404 });
    }
}
export async function handleWorkspaceAttach(_channel, req) {
    let data;
    try {
        data = await req.json();
    }
    catch {
        return new Response(JSON.stringify({ error: "Invalid JSON" }), { status: 400 });
    }
    const targetPath = resolveWorkspacePath(data.path || null);
    if (!targetPath)
        return new Response(JSON.stringify({ error: "Invalid path" }), { status: 400 });
    try {
        const stats = statSync(targetPath);
        if (stats.isDirectory())
            return new Response(JSON.stringify({ error: "Path is a directory" }), { status: 400 });
        if (stats.size > MAX_ATTACH_BYTES) {
            return new Response(JSON.stringify({ error: "File too large to attach" }), { status: 400 });
        }
        const dataBuf = readFileSync(targetPath);
        const filename = path.basename(targetPath);
        const contentType = contentTypeForPath(targetPath);
        const mediaId = createMedia(filename, contentType, new Uint8Array(dataBuf), null, {
            size: stats.size,
            kind: "file",
            source_path: targetPath,
        });
        return new Response(JSON.stringify({
            media_id: mediaId,
            filename,
            size: stats.size,
        }), { headers: { "Content-Type": "application/json" } });
    }
    catch {
        return new Response(JSON.stringify({ error: "Failed to attach file" }), { status: 500 });
    }
}
export function startWorkspaceWatcher(channel) {
    const pending = new Set();
    let flushTimer = null;
    const queuePath = (absPath) => {
        if (shouldIgnorePath(absPath))
            return;
        const rel = toRelativePath(absPath);
        const target = rel === "." ? "." : toRelativePath(path.dirname(absPath));
        pending.add(target);
        if (flushTimer)
            return;
        flushTimer = setTimeout(() => {
            flushTimer = null;
            const targets = compressPaths(Array.from(pending));
            pending.clear();
            if (!targets.length)
                return;
            const updates = [];
            for (const relPath of targets) {
                const abs = resolveWorkspacePath(relPath);
                if (!abs)
                    continue;
                try {
                    const state = { count: 0, truncated: false };
                    const depth = relPath === "." ? 4 : 3;
                    const root = buildTree(abs, depth, state);
                    updates.push({ path: relPath, root, truncated: state.truncated });
                }
                catch {
                    // ignore
                }
            }
            if (updates.length)
                channel.broadcastEvent("workspace_update", { updates });
        }, 300);
    };
    const watcher = chokidar.watch(WORKSPACE_DIR, {
        ignoreInitial: true,
        depth: 8,
        awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 50 },
        ignored: (p) => shouldIgnorePath(p),
    });
    watcher.on("add", queuePath);
    watcher.on("addDir", queuePath);
    watcher.on("unlink", queuePath);
    watcher.on("unlinkDir", queuePath);
    watcher.on("change", queuePath);
    return {
        close: async () => {
            try {
                await watcher.close();
            }
            catch { }
        },
    };
}
