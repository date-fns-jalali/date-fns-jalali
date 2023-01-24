import type {
  CommentDisplayPart,
  CommentTag,
  ContainerReflection,
  DeclarationReflection,
  SignatureReflection,
} from "typedoc";

/**
 * Find reflection category in a reflection container.
 * @param ref - the reflection to look for a function category in
 * @param id - the reflection id
 * @returns the reflection category string if found
 */
export function findCategory(ref: ContainerReflection, id: number) {
  const group = ref.groups?.find((group) =>
    // TODO: Fix the type error if TypeDoc becomes more eloborate
    (group.children as unknown as number[]).includes(id)
  );
  if (!group) return;

  const category = group.categories?.find((category) =>
    // TODO: Fix the type error if TypeDoc becomes more eloborate
    (category.children as unknown as number[]).includes(id)
  );
  return category?.title;
}

/**
 * Find reflection summary.
 * @param ref - the reflection
 * @returns the reflection summary string if found
 */
export function findSummary(
  ref: DeclarationReflection | SignatureReflection
): string | undefined {
  return findTag(ref, "@summary");
}

/**
 * Find reflection description.
 * @param ref - the reflection
 * @returns the function description string if found
 */
export function findDescription(
  ref: DeclarationReflection | SignatureReflection
): string | undefined {
  return findTag(ref, "@description");
}

/**
 * Find and join block tag content of the given type in a reflection.
 * @param ref - the reflection
 * @param tag - the tag to find
 * @returns joint tag content or undefined if not found
 */
export function findTag(
  ref: DeclarationReflection | SignatureReflection,
  tag: `@${string}`
): string | undefined {
  const foundTag = ref.comment?.blockTags.find((b) => b.tag === tag);
  return foundTag && joinTag(foundTag);
}

/**
 * Find default function in a reflection container.
 * @param ref - the reflection to look for a function in
 * @returns the function reflection
 */
export function findFn(
  ref: ContainerReflection
): DeclarationReflection | undefined {
  return ref.children?.find(
    (ref) =>
      ref.kind === 64 /* ReflectionKind.Function */ && ref.name === "default"
  );
}

/**
 * Find function summary in a function.
 * @param fn - the function reflection
 * @returns the function summary string if found
 */
export function findFnSummary(fn: DeclarationReflection): string | undefined {
  return findFnTag(fn, "@summary");
}

/**
 * Find function description in a function.
 * @param fn - the function reflection
 * @returns the function description string if found
 */
export function findFnDescription(
  fn: DeclarationReflection
): string | undefined {
  return findFnTag(fn, "@description");
}

/**
 * Find function description in a function.
 * @param fn - the function reflection
 * @returns the function description string if found
 */
export function findFnReturns(fn: DeclarationReflection): string | undefined {
  return findFnTag(fn, "@returns");
}

/**
 * Find function examples in a function.
 * @param fn - the function reflection
 * @returns the function example strings
 */
export function findFnExamples(fn: DeclarationReflection): string[] {
  return findFnTags(fn, "@example");
}

/**
 * Find and join block tags content of the given type in a function.
 * @param fn - the function reflection
 * @param tag - the tags to find
 * @returns joint tags content
 */
export function findFnTags(
  fn: DeclarationReflection,
  tag: `@${string}`
): string[] {
  return (
    fn.signatures?.reduce<string[]>(
      (acc, signature) => acc.concat(findSignatureTags(signature, tag)),
      []
    ) || []
  );
}

/**
 * Find and join block tag content of the given type in a function.
 * @param fn - the function reflection
 * @param tag - the tag to find
 * @returns joint tag content or undefined if not found
 */
export function findFnTag(
  fn: DeclarationReflection,
  tag: `@${string}`
): string | undefined {
  if (!fn.signatures) return;
  for (const signature of fn.signatures) {
    const foundTag = findTag(signature, tag);
    if (!foundTag) continue;
    return foundTag;
  }
}

/**
 * Find function description in a signature.
 * @param signature - the function reflection
 * @returns the function description string if found
 */
export function findSignatureReturns(
  signature: SignatureReflection
): string | undefined {
  return findTag(signature, "@returns");
}

/**
 * Find function examples in a signature.
 * @param signature - the function reflection
 * @returns the function example strings
 */
export function findSignatureExamples(
  signature: SignatureReflection
): string[] {
  return findSignatureTags(signature, "@example");
}

/**
 * Find and join block tags content of the given type in a signature.
 * @param signature - the signature reflection
 * @param tag - the tags to find
 * @returns joint tags content
 */
export function findSignatureTags(
  signature: SignatureReflection,
  tag: `@${string}`
): string[] {
  const foundTags = signature.comment?.blockTags.filter((b) => b.tag === tag);
  if (!foundTags) return [];
  return foundTags.map(joinTag);
}

/**
 * Joins block tag content into a string.
 * @param tag - the tag, which content should be joined
 * @returns joined tag content as string
 */
export function joinTag(tag: CommentTag): string {
  return joinCommentParts(tag.content);
}

/**
 * Joins comment parts into a string.
 * @param parts - the parts, which should be joined
 * @returns joined parts as string
 */
export function joinCommentParts(parts: CommentDisplayPart[]): string {
  return parts.map((c) => c.text).join("");
}
