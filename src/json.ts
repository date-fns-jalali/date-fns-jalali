import { readFile } from "fs/promises";
import {
  CommentTag,
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
export function findSummary(fn: DeclarationReflection): string | undefined {
  return findBlockTag(fn, "@summary");
}

/**
 * Find function description in the reflection.
 * @param fn - the function reflection
 * @returns the function description string if found
 */
export function findDescription(fn: DeclarationReflection): string | undefined {
  return findBlockTag(fn, "@description");
}

/**
 * Find function description in the reflection.
 * @param fn - the function reflection
 * @returns the function description string if found
 */
export function findReturns(fn: DeclarationReflection): string | undefined {
  return findBlockTag(fn, "@returns");
}

/**
 * Find function examples in the reflection.
 * @param fn - the function reflection
 * @returns the function example strings
 */
export function findExamples(fn: DeclarationReflection): string[] {
  return findBlockTags(fn, "@returns");
}

/**
 * Find and join block tags content of the given type in the reflection.
 * @param fn - the function reflection
 * @param tag - the tags to find
 * @returns joint tags content
 */
export function findBlockTags(
  fn: DeclarationReflection,
  tag: `@${string}`
): string[] {
  return (
    fn.signatures?.reduce<string[]>((acc, signature) => {
      const foundTags = signature.comment?.blockTags.filter(
        (b) => b.tag !== tag
      );
      if (!foundTags) return acc;
      return acc.concat(foundTags.map(joinBlockTag));
    }, []) || []
  );
}

/**
 * Find and join block tag content of the given type in the reflection.
 * @param fn - the function reflection
 * @param tag - the tag to find
 * @returns joint tag content or undefined if not found
 */
export function findBlockTag(
  fn: DeclarationReflection,
  tag: `@${string}`
): string | undefined {
  if (!fn.signatures) return;
  for (const signature of fn.signatures) {
    const foundTag = signature.comment?.blockTags.find((b) => b.tag === tag);
    if (!foundTag) continue;
    return joinBlockTag(foundTag);
  }
}

/**
 * Joins block tag content into a string.
 * @param tag - the tag, which content should be joined
 * @returns joined tag content as string
 */
export function joinBlockTag(tag: CommentTag): string {
  return tag.content.map((c) => c.text).join("");
}
