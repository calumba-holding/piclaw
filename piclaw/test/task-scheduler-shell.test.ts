/**
 * test/task-scheduler-shell.test.ts – Scheduled shell task execution.
 */
import { beforeEach, afterEach, expect, test } from "bun:test";
import "./helpers.js";
import { initDatabase, getDb, createTask, getTaskById } from "../src/db.js";
import { runScheduledTask } from "../src/task-scheduler.js";

const sentMessages: Array<{ jid: string; text: string }> = [];

afterEach(() => {
  sentMessages.length = 0;
  try { getDb().close(); } catch {}
});

beforeEach(() => {
  initDatabase();
});

test("runScheduledTask executes shell command and sends output", async () => {
  const taskId = `task-shell-${Date.now()}`;
  createTask({
    id: taskId,
    chat_jid: "web:default",
    prompt: "echo hi",
    model: null,
    task_kind: "shell",
    command: "echo hi",
    cwd: ".",
    timeout_sec: 10,
    schedule_type: "once",
    schedule_value: new Date().toISOString(),
    next_run: new Date().toISOString(),
    status: "active",
    created_at: new Date().toISOString(),
  });

  const task = getTaskById(taskId);
  expect(task?.task_kind).toBe("shell");

  await runScheduledTask(task!, {
    queue: {} as any,
    agentPool: {} as any,
    sendMessage: async (jid, text) => { sentMessages.push({ jid, text }); },
  });

  expect(sentMessages.length).toBe(1);
  expect(sentMessages[0].text).toContain("```");
  expect(sentMessages[0].text).toContain("hi");
});
