import type {
  CommentDisplayPart,
  CommentTag,
  ContainerReflection,
  DeclarationReflection,
  SignatureReflection,
} from "typedoc";

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
    fn.signatures?.reduce<string[]>((acc, signature) => {
      const foundTags = signature.comment?.blockTags.filter(
        (b) => b.tag === tag
      );
      if (!foundTags) return acc;
      return acc.concat(foundTags.map(joinReflectionTag));
    }, []) || []
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
    const foundTag = signature.comment?.blockTags.find((b) => b.tag === tag);
    if (!foundTag) continue;
    return joinReflectionTag(foundTag);
  }
}

/**
 * Find function summary in a signature.
 * @param signature - the function reflection
 * @returns the function summary string if found
 */
export function findSignatureSummary(
  signature: SignatureReflection
): string | undefined {
  return findSignatureTag(signature, "@summary");
}

/**
 * Find function description in a signature.
 * @param signature - the function reflection
 * @returns the function description string if found
 */
export function findSignatureDescription(
  signature: SignatureReflection
): string | undefined {
  return findSignatureTag(signature, "@description");
}

/**
 * Find function description in a signature.
 * @param signature - the function reflection
 * @returns the function description string if found
 */
export function findSignatureReturns(
  signature: SignatureReflection
): string | undefined {
  return findSignatureTag(signature, "@returns");
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
  return foundTags.map(joinReflectionTag);
}

/**
 * Find and join block tag content of the given type in a signature.
 * @param signature - the function reflection
 * @param tag - the tag to find
 * @returns joint tag content or undefined if not found
 */
export function findSignatureTag(
  signature: SignatureReflection,
  tag: `@${string}`
): string | undefined {
  const foundTag = signature.comment?.blockTags.find((b) => b.tag === tag);
  if (!foundTag) return;
  return joinReflectionTag(foundTag);
}

/**
 * Joins block tag content into a string.
 * @param tag - the tag, which content should be joined
 * @returns joined tag content as string
 */
export function joinReflectionTag(tag: CommentTag): string {
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
