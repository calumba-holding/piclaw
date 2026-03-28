/**
 * core/config-store.ts – Low-level JSON file read/write helpers.
 *
 * Provides the persistence primitives that core/config.ts uses to load and
 * save the application configuration file (typically `.piclaw/config.json`
 * inside the workspace). Also used by the keychain (secure/keychain.ts) and
 * any module that needs simple JSON-file persistence.
 */
import { mkdirSync, readFileSync, writeFileSync } from "fs";
import { dirname } from "path";
/**
 * Read and parse a JSON file, returning its contents as a plain object.
 * Returns an empty object if the file does not exist, is unreadable, or
 * contains invalid JSON — callers always get a safe default.
 *
 * @param filePath - Absolute path to the JSON file.
 */
export function readJsonConfig(filePath) {
    try {
        const raw = readFileSync(filePath, "utf-8");
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object")
            return parsed;
    }
    catch {
        // ignore – file missing or malformed
    }
    return {};
}
/**
 * Atomically write a JSON object to disk with pretty-printing.
 * Creates parent directories if they do not already exist.
 *
 * @param filePath - Absolute path to the target JSON file.
 * @param config   - The object to serialize and persist.
 */
export function writeJsonConfig(filePath, config) {
    mkdirSync(dirname(filePath), { recursive: true });
    const next = JSON.stringify(config, null, 2);
    writeFileSync(filePath, `${next}\n`, "utf-8");
}
