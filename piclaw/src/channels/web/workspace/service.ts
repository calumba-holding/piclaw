import { WorkspaceFileService } from "./file-service.js";
import { WorkspaceTreeCache } from "./tree-cache.js";
import { startWorkspaceWatcher } from "./watcher.js";

export { createWorkspaceUpdateThrottle } from "./watcher.js";
export type { WorkspaceUpdate } from "./watcher.js";

export class WorkspaceService {
  private treeCache = new WorkspaceTreeCache();
  private fileService = new WorkspaceFileService();

  getTree(pathParam: string | null, depthParam?: string | null, includeHidden = false) {
    return this.treeCache.getTree(pathParam, depthParam, includeHidden);
  }

  getFile(pathParam: string | null, maxParam?: string | null) {
    return this.fileService.getFile(pathParam, maxParam);
  }

  getRaw(pathParam: string | null) {
    return this.fileService.getRaw(pathParam);
  }

  attachFile(pathParam: string | null) {
    return this.fileService.attachFile(pathParam);
  }

  startWatcher(
    onUpdate: (updates: Array<{ path: string; root: unknown; truncated: boolean }>) => void,
    includeHidden: () => boolean
  ) {
    return startWorkspaceWatcher(onUpdate, includeHidden);
  }
}
