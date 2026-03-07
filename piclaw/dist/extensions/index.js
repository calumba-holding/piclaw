import { fileAttachments } from "./file-attachments.js";
import { messageSearch } from "./message-search.js";
import { modelControl } from "./model-control.js";
import { internalTools } from "./internal-tools.js";
import { scheduledTasks } from "./scheduled-tasks.js";
import { workspaceSearch } from "./workspace-search.js";
/** Array of all built-in extension factories to register on session creation. */
export const builtinExtensionFactories = [
    fileAttachments,
    messageSearch,
    modelControl,
    internalTools,
    scheduledTasks,
    workspaceSearch,
];
