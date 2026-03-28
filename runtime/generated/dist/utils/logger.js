/**
 * utils/logger.ts – minimal structured logger for runtime/server modules.
 *
 * Emits newline-delimited JSON records directly to stdout/stderr so logs stay
 * machine-parsable even when console timestamp patching is enabled elsewhere.
 * Logging honours the global PICLAW_LOG_LEVEL / LOG_LEVEL threshold.
 */
import { getConfiguredLogLevel, shouldLog } from "./log-level.js";
function serializeError(error) {
    const serialized = {
        name: error.name,
        message: error.message,
    };
    if (error.stack)
        serialized.stack = error.stack;
    const withCode = error;
    if (withCode.code !== undefined)
        serialized.code = sanitizeValue(withCode.code);
    if (withCode.cause !== undefined)
        serialized.cause = sanitizeValue(withCode.cause);
    return serialized;
}
function sanitizeValue(value, seen = new WeakSet(), depth = 0) {
    if (value == null)
        return value;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean")
        return value;
    if (typeof value === "bigint")
        return value.toString();
    if (typeof value === "symbol")
        return value.toString();
    if (typeof value === "function")
        return `[function ${value.name || "anonymous"}]`;
    if (value instanceof Error)
        return serializeError(value);
    if (Array.isArray(value)) {
        if (depth >= 3)
            return `[array(${value.length})]`;
        return value.map((item) => sanitizeValue(item, seen, depth + 1));
    }
    if (typeof value === "object") {
        const obj = value;
        if (seen.has(obj))
            return "[circular]";
        if (depth >= 3) {
            const ctorName = obj.constructor?.name || "Object";
            return `[object ${ctorName}]`;
        }
        seen.add(obj);
        const out = {};
        for (const [key, entry] of Object.entries(obj)) {
            out[key] = sanitizeValue(entry, seen, depth + 1);
        }
        seen.delete(obj);
        return out;
    }
    return String(value);
}
function buildRecord(level, moduleName, bindings, message, fields) {
    const record = {
        ts: new Date().toISOString(),
        level,
        module: moduleName,
        message,
        ...sanitizeValue(bindings),
    };
    if (!fields)
        return record;
    for (const [key, value] of Object.entries(fields)) {
        if (key === "err") {
            if (value !== undefined)
                record.err = sanitizeValue(value);
            continue;
        }
        record[key] = sanitizeValue(value);
    }
    return record;
}
function writeRecord(level, moduleName, bindings, message, fields) {
    if (!shouldLog(level, getConfiguredLogLevel()))
        return;
    const record = buildRecord(level, moduleName, bindings, message, fields);
    const line = JSON.stringify(record);
    if (level === "warn" || level === "error") {
        process.stderr.write(line + "\n");
        return;
    }
    process.stdout.write(line + "\n");
}
export function createLogger(moduleName, bindings = {}) {
    const emit = (level, message, fields) => {
        writeRecord(level, moduleName, bindings, message, fields);
    };
    return {
        child(extraBindings) {
            return createLogger(moduleName, { ...bindings, ...extraBindings });
        },
        debug(message, fields) {
            emit("debug", message, fields);
        },
        info(message, fields) {
            emit("info", message, fields);
        },
        warn(message, fields) {
            emit("warn", message, fields);
        },
        error(message, fields) {
            emit("error", message, fields);
        },
    };
}
