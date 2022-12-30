import { readFile } from "fs/promises";
import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionKind,
} from "typedoc";
import { DateFnsDocs } from "./types";

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

/**
 * Find default function in a reflection container.
 * @param ref - the reflection to look for a function in
 * @returns the function reflection
 */
function findFn(ref: ContainerReflection): DeclarationReflection | undefined {
  return ref.children?.find(
    (ref) => ref.kind === ReflectionKind.Function && ref.name === "default"
  );
}

/**
 * Find function category in a reflection container.
 * @param ref - the reflection to look for a function category in
 * @param fn - the function reflection
 * @returns the function category string if found
 */
export function findCategory(
  ref: ContainerReflection,
  fn: DeclarationReflection
) {
  const group = ref.groups?.find((group) =>
    // TODO: Fix the type error if TypeDoc becomes more eloborate
    (group.children as unknown as number[]).includes(fn.id)
  );
  if (!group) return;

  const category = group.categories?.find((category) =>
    // TODO: Fix the type error if TypeDoc becomes more eloborate
    (category.children as unknown as number[]).includes(fn.id)
  );
  return category?.title;
}

/**
 * Find function summary in the reflection.
 * @param fn - the function reflection
 * @returns the function summary string if found
 */
export function findSummary(fn: DeclarationReflection) {
  if (!fn.signatures) return;
  for (const signature of fn.signatures) {
    const block = signature.comment?.blockTags.find(
      (b) => b.tag === "@summary"
    );
    if (!block) continue;
    return block.content.map((c) => c.text).join("");
  }
}
