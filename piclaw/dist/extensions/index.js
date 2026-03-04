import { fileAttachments } from "./file-attachments.js";
import { messageSearch } from "./message-search.js";
import { modelControl } from "./model-control.js";
import { scheduledTasks } from "./scheduled-tasks.js";
import { workspaceSearch } from "./workspace-search.js";
/** Array of all built-in extension factories to register on session creation. */
export const builtinExtensionFactories = [
    fileAttachments,
    messageSearch,
    modelControl,
    scheduledTasks,
    workspaceSearch,
];
