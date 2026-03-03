import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, unlinkSync } from "fs";
import { join } from "path";
import { CronExpressionParser } from "cron-parser";
import { DATA_DIR, IPC_POLL_INTERVAL, TIMEZONE } from "./core/config.js";
import { createTask, deleteTask, getTaskById, updateTask } from "./db.js";
import { createUuid } from "./utils/ids.js";
let running = false;
export function startIpcWatcher(deps) {
    if (running)
        return;
    running = true;
    const ipcDir = join(DATA_DIR, "ipc");
    const tasksDir = join(ipcDir, "tasks");
    const messagesDir = join(ipcDir, "messages");
    mkdirSync(tasksDir, { recursive: true });
    mkdirSync(messagesDir, { recursive: true });
    const poll = async () => {
        // Process outbound messages
        try {
            if (existsSync(messagesDir)) {
                for (const file of readdirSync(messagesDir).filter((f) => f.endsWith(".json"))) {
                    const fp = join(messagesDir, file);
                    try {
                        const data = JSON.parse(readFileSync(fp, "utf-8"));
                        if (data.type === "message" && data.chatJid && data.text) {
                            await deps.sendMessage(data.chatJid, data.text);
                            if (data.noNudge !== true) {
                                await deps.sendNudge?.(data.text);
                            }
                        }
                        unlinkSync(fp);
                    }
                    catch (e) {
                        console.error(`[ipc] Error processing message ${file}:`, e);
                        try {
                            renameSync(fp, join(ipcDir, `error-${file}`));
                        }
                        catch { }
                    }
                }
            }
        }
        catch (e) {
            console.error("[ipc] Error reading messages dir:", e);
        }
        // Process task commands
        try {
            if (existsSync(tasksDir)) {
                for (const file of readdirSync(tasksDir).filter((f) => f.endsWith(".json"))) {
                    const fp = join(tasksDir, file);
                    try {
                        const data = JSON.parse(readFileSync(fp, "utf-8"));
                        await processTaskCommand(data, deps);
                        unlinkSync(fp);
                    }
                    catch (e) {
                        console.error(`[ipc] Error processing task ${file}:`, e);
                        try {
                            renameSync(fp, join(ipcDir, `error-${file}`));
                        }
                        catch { }
                    }
                }
            }
        }
        catch (e) {
            console.error("[ipc] Error reading tasks dir:", e);
        }
        setTimeout(poll, IPC_POLL_INTERVAL);
    };
    poll();
    console.log("[ipc] Watcher started");
}
async function processTaskCommand(data, deps) {
    switch (data.type) {
        case "schedule_task": {
            if (!data.prompt || !data.schedule_type || !data.schedule_value || !data.chatJid)
                return;
            let nextRun = null;
            if (data.schedule_type === "cron") {
                try {
                    nextRun = CronExpressionParser.parse(data.schedule_value, { tz: TIMEZONE }).next().toISOString();
                }
                catch {
                    return;
                }
            }
            else if (data.schedule_type === "interval") {
                const ms = parseInt(data.schedule_value, 10);
                if (isNaN(ms) || ms <= 0)
                    return;
                nextRun = new Date(Date.now() + ms).toISOString();
            }
            else if (data.schedule_type === "once") {
                const d = new Date(data.schedule_value);
                if (isNaN(d.getTime()))
                    return;
                nextRun = d.toISOString();
            }
            const requested = typeof data.model === "string" && data.model.trim() ? data.model.trim() : null;
            let model = null;
            if (requested) {
                if (!deps.resolveModel) {
                    await deps.sendMessage(data.chatJid, `Cannot schedule task: model validation unavailable for "${requested}".`);
                    return;
                }
                const resolved = deps.resolveModel(requested);
                if (!resolved.model) {
                    await deps.sendMessage(data.chatJid, `Cannot schedule task: ${resolved.error || "Invalid model."}`);
                    return;
                }
                model = resolved.model;
            }
            createTask({
                id: createUuid("task"),
                chat_jid: data.chatJid,
                prompt: data.prompt,
                model,
                schedule_type: data.schedule_type,
                schedule_value: data.schedule_value,
                next_run: nextRun,
                status: "active",
                created_at: new Date().toISOString(),
            });
            break;
        }
        case "pause_task": {
            const t = data.taskId && getTaskById(data.taskId);
            if (t)
                updateTask(data.taskId, { status: "paused" });
            break;
        }
        case "resume_task": {
            const t = data.taskId && getTaskById(data.taskId);
            if (t)
                updateTask(data.taskId, { status: "active" });
            break;
        }
        case "cancel_task": {
            const t = data.taskId && getTaskById(data.taskId);
            if (t)
                deleteTask(data.taskId);
            break;
        }
        case "update_task": {
            if (!data.taskId)
                return;
            const t = getTaskById(data.taskId);
            if (!t)
                return;
            const updates = {};
            if (typeof data.prompt === "string")
                updates.prompt = data.prompt;
            if (typeof data.schedule_type === "string")
                updates.schedule_type = data.schedule_type;
            if (typeof data.schedule_value === "string")
                updates.schedule_value = data.schedule_value;
            if (typeof data.model === "string") {
                if (data.model === "") {
                    updates.model = null;
                }
                else if (deps.resolveModel) {
                    const resolved = deps.resolveModel(data.model.trim());
                    if (!resolved.model) {
                        if (data.chatJid)
                            await deps.sendMessage(data.chatJid, `Cannot update task: ${resolved.error || "Invalid model."}`);
                        return;
                    }
                    updates.model = resolved.model;
                }
                else {
                    updates.model = data.model.trim();
                }
            }
            if (updates.schedule_type || updates.schedule_value) {
                const sType = updates.schedule_type || t.schedule_type;
                const sValue = updates.schedule_value || t.schedule_value;
                try {
                    if (sType === "cron") {
                        updates.next_run = CronExpressionParser.parse(sValue, { tz: TIMEZONE }).next().toISOString();
                    }
                    else if (sType === "interval") {
                        updates.next_run = new Date(Date.now() + parseInt(sValue, 10)).toISOString();
                    }
                    else if (sType === "once") {
                        updates.next_run = new Date(sValue).toISOString();
                    }
                }
                catch { /* keep existing next_run */ }
            }
            if (Object.keys(updates).length > 0)
                updateTask(data.taskId, updates);
            break;
        }
        case "cleanup_tasks": {
            const db = (await import("./db/connection.js")).getDb();
            const completed = db.prepare("SELECT id FROM scheduled_tasks WHERE status = 'completed'").all();
            for (const { id } of completed) {
                db.prepare("DELETE FROM task_run_logs WHERE task_id = ?").run(id);
            }
            const result = db.prepare("DELETE FROM scheduled_tasks WHERE status = 'completed'").run();
            const count = result.changes ?? 0;
            if (data.chatJid)
                await deps.sendMessage(data.chatJid, `Cleaned up ${count} completed task(s).`);
            break;
        }
        case "resume_chat": {
            if (deps.resumeChat) {
                await deps.resumeChat(data);
            }
            break;
        }
        case "resume_pending": {
            if (deps.resumePending) {
                await deps.resumePending(data);
            }
            break;
        }
    }
}
