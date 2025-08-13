import { readFile } from "fs/promises";
import type { DocNode } from "@deno/doc";

interface Docs {
  version: 1;
  nodes: DocNode[];
}

const json = await readFile("tmp/docs.json", "utf-8");
const docs: Docs = JSON.parse(json);

const declarations = docs.nodes.filter(
  (node) => node.declarationKind == "export",
);

declarations.forEach((declaration) => {
  console.log(`\n# ${declaration.name}\n`);
  const file = declaration.location.filename.split("date-fns/src/")[1];
  always(file);

  const module = file.replace("/index.ts", "");
  const modulePath = `./${module}`;

  console.log(`- file: ${file}`);
  console.log(`- module: ${module}`);

  switch (declaration.kind) {
    case "function":
    case "interface":
    case "typeAlias":
    case "variable":
    case "moduleDoc":
      console.log(`- kind: ${declaration.kind}`);
      break;

    case "reference":
      console.log(`- kind: re-export`);
      break;

    default:
      throw new Error(`Unknown declaration kind: ${declaration.kind}`);
  }
});

function always(condition: unknown): asserts condition {
  if (!condition) throw new Error("Assertion failed");
}
