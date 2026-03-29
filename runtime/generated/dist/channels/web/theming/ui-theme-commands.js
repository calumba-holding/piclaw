/**
 * web/ui-theme-commands.ts – Local handling for /theme and /tint commands.
 *
 * Avoids routing UI theme changes through the agent/LLM pipeline.
 */
import { formatThemeList, labelForTheme, normalizeTheme } from "./ui-theme-data.js";
const CLEAR_VALUES = new Set(["off", "clear", "none", "reset", "default"]);
function normalizeHex(input) {
    const raw = input.trim();
    if (!raw)
        return null;
    const hex = raw.startsWith("#") ? raw.slice(1) : raw;
    if (!/^[0-9a-fA-F]{3}$/.test(hex) && !/^[0-9a-fA-F]{6}$/.test(hex))
        return null;
    const full = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
    return `#${full.toLowerCase()}`;
}
function normalizeTint(input) {
    const hex = normalizeHex(input);
    if (hex)
        return hex;
    const named = input.trim().toLowerCase();
    if (!named)
        return null;
    if (/^[a-z]+$/.test(named))
        return named;
    return null;
}
export function handleUiThemeCommand(rawText) {
    const trimmed = rawText.trim();
    if (!trimmed.startsWith("/"))
        return null;
    const [command, ...rest] = trimmed.split(/\s+/);
    const args = rest.join(" ").trim();
    const commandLower = command.toLowerCase();
    if (commandLower === "/theme") {
        if (!args) {
            return { status: "success", message: formatThemeList() };
        }
        const theme = normalizeTheme(args);
        if (!theme) {
            return {
                status: "error",
                message: `Unknown theme: ${args}. Omit the name to show available themes.`,
            };
        }
        return {
            status: "success",
            message: `Theme set to ${labelForTheme(theme)}.`,
            payload: { theme, tint: null },
        };
    }
    if (commandLower === "/tint") {
        if (!args) {
            return {
                status: "error",
                message: "Usage: /tint #hex (e.g. /tint #3b82f6), /tint orange, or /tint off",
            };
        }
        const normalized = args.toLowerCase();
        if (CLEAR_VALUES.has(normalized)) {
            return {
                status: "success",
                message: "Tint cleared (default light/dark restored).",
                payload: { theme: "default", tint: null },
            };
        }
        const tint = normalizeTint(args);
        if (!tint) {
            return {
                status: "error",
                message: `Invalid tint value: ${args}. Use a hex color (e.g. #3b82f6), a named color (e.g. orange), or /tint off.`,
            };
        }
        return {
            status: "success",
            message: `Tint set to ${tint}.`,
            payload: { theme: "default", tint },
        };
    }
    return null;
}
