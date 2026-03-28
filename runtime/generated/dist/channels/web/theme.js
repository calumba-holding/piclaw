/**
 * web/theme.ts – Fallback theme provider for the web UI.
 *
 * Returns a minimal theme object when no custom theme is loaded from
 * the workspace's .pi directory. Ensures the web UI always has a
 * valid theme to work with.
 *
 * Consumers: channels/web.ts uses createFallbackTheme() during init.
 */
/** Return a minimal fallback Theme when no custom theme is loaded. */
export function createFallbackTheme() {
    const passthrough = (text) => text;
    const identity = () => passthrough;
    return {
        name: "web",
        sourcePath: undefined,
        fg: (_color, text) => text,
        bg: (_color, text) => text,
        bold: passthrough,
        italic: passthrough,
        underline: passthrough,
        inverse: passthrough,
        strikethrough: passthrough,
        getFgAnsi: (_color) => "",
        getBgAnsi: (_color) => "",
        getColorMode: () => "truecolor",
        getThinkingBorderColor: () => identity(),
        getBashModeBorderColor: () => identity(),
    };
}
