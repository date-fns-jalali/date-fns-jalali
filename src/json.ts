import { readFile } from "fs/promises";
import type { ContainerReflection } from "typedoc";
import type { DateFnsDocs } from "./types";
import { findFn } from "./utils";

/**
 * Reads and parses TypeDoc JSOn and extracts function reflections.
 * @param jsonPath - the path to the docs JSON
 * @returns parsed function reflections
 */
export async function readFnsFromJSON(
  jsonPath: string
): Promise<DateFnsDocs.FnReflection[]> {
  const docs = await readDocsJSON(jsonPath);
  return (
    docs.children?.reduce<DateFnsDocs.FnReflection[]>((acc, ref) => {
      const fn = findFn(ref);
      if (!fn) return acc;
      return acc.concat({ ref, fn });
    }, []) || []
  );
}

/**
 * Reads and parses TypeDoc container reflection from a JSON file.
 * @param jsonPath - the path to the docs JSON
 * @returns parsed container reflection
 */
export async function readDocsJSON(
  jsonPath: string
): Promise<ContainerReflection> {
  const docsJSON = await readFile(jsonPath, "utf8");
  return JSON.parse(docsJSON) as ContainerReflection;
}
