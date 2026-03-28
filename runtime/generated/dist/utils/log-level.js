import { readEnvFile } from "../core/env.js";
const DEFAULT_LOG_LEVEL = "info";
const LOG_LEVEL_ORDER = {
    debug: 10,
    info: 20,
    warn: 30,
    error: 40,
};
const envConfig = readEnvFile(["PICLAW_LOG_LEVEL", "LOG_LEVEL"]);
export function parseLogLevel(value, fallback = DEFAULT_LOG_LEVEL) {
    if (typeof value !== "string")
        return fallback;
    const normalized = value.trim().toLowerCase();
    if (normalized === "debug" || normalized === "info" || normalized === "warn" || normalized === "error") {
        return normalized;
    }
    return fallback;
}
export function getConfiguredLogLevel(fallback = DEFAULT_LOG_LEVEL) {
    return parseLogLevel(process.env.PICLAW_LOG_LEVEL ?? envConfig.PICLAW_LOG_LEVEL ?? process.env.LOG_LEVEL ?? envConfig.LOG_LEVEL, fallback);
}
export function shouldLog(level, configuredLevel) {
    return LOG_LEVEL_ORDER[level] >= LOG_LEVEL_ORDER[configuredLevel];
}
