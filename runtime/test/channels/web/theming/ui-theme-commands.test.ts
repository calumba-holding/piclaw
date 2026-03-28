import { describe, expect, test } from "bun:test";
import { handleUiThemeCommand } from "../../../../src/channels/web/theming/ui-theme-commands.js";

describe("/theme command formatting", () => {
    test("without arguments, returns a themed preview table with swatches", () => {
        const result = handleUiThemeCommand("/theme");
        expect(result?.status).toBe("success");
        expect(result?.message).toContain("Available themes:");
        expect(result?.message).toContain("| Theme | Mode | Swatches |");
        expect(result?.message).toContain("data:image/svg+xml;base64,");
        expect(result?.message).toContain("/theme <name>");
    });

    test("/theme list is no longer a list alias", () => {
        const result = handleUiThemeCommand("/theme list");
        expect(result?.status).toBe("error");
        expect(result?.message).toContain("Unknown theme");
    });

    test("unknown themes still return guidance message", () => {
        const result = handleUiThemeCommand("/theme nosuch");
        expect(result?.status).toBe("error");
        expect(result?.message).toContain("Unknown theme");
    });
});
