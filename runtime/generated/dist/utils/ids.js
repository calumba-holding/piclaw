/**
 * utils/ids.ts – ID and UUID generation helpers.
 *
 * Used throughout the codebase to create unique identifiers:
 *   - createId() generates timestamped IDs for messages, tasks, and IPC files.
 *   - createUuid() generates UUID-based IDs for tool output records.
 *   - randomIdSuffix() provides the random component.
 *
 * Consumers: ipc.ts, agent-pool.ts, tool-output.ts, task-scheduler.ts,
 *            channels/web/message-store.ts, and others.
 */
/** Generate a random alphanumeric suffix of the specified length. */
export function randomIdSuffix(length = 8) {
    const raw = Math.random().toString(36).slice(2);
    return raw.length >= length ? raw.slice(0, length) : raw.padEnd(length, "0");
}
/** Create a prefixed, timestamped ID: `<prefix>-<epoch>-<random>`. */
export function createId(prefix, length = 8) {
    return `${prefix}-${Date.now()}-${randomIdSuffix(length)}`;
}
/** Create a prefixed UUID: `<prefix>-<uuid>`. */
export function createUuid(prefix) {
    const uuid = crypto.randomUUID();
    return `${prefix}-${uuid}`;
}
