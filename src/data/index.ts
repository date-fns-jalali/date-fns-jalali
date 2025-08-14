import type { DocNode } from "@deno/doc";
import { relative } from "path";
import { fileURLToPath } from "url";

export function isExportNode(node: DocNode): boolean {
  return node.declarationKind == "export";
}

export function repoPath(root: string, node: DocNode): string {
  const file = fileURLToPath(node.location.filename);
  return relative(root, file);
}
