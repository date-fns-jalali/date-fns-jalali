#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import { pick } from "js-fns";
import { stringify } from "json-bond";
import path from "path";
import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionKind,
} from "typedoc";
import { Page } from "./db";

const version = process.env.VERSION;
const versionRegExp = /^v\d+\.\d+\.\d+(-(alpha|beta|rc)(\.\d+)?)?$/;
const preReleaseRegExp = /-(alpha|beta|rc)(\.\d+)?$/;

if (!version || !versionRegExp.test(version)) {
  console.error(`(•̀o•́)ง VERSION is invalid "${version}"`);
  process.exit(1);
}

const preRelease = preReleaseRegExp.test(version);

const jsonPath = path.resolve(process.cwd(), process.argv[2]);
const docsJSON = readFileSync(jsonPath, "utf8");
const docs = JSON.parse(docsJSON) as ContainerReflection;

// admin.initializeApp();

const packageName = "date-fns";

// const xxx = [];

const fnPages: Page[] =
  (docs.children
    ?.map((ref) => {
      const fn = findFn(ref);
      if (!fn) return;
      const name = ref.name;
      const category = findCategory(ref, fn) || "Common";
      const summary = findSummary(fn) || "";
      return {
        type: "tsdoc",
        package: packageName,
        version,
        slug: name,
        category,
        title: name,
        summary,
        name,
        tsdoc: stringify(ref),
      };
    })
    .filter((t) => !!t) as Page[] | undefined) || [];

writeFileSync(
  "tmp/package.json",
  JSON.stringify(
    {
      name: packageName,
      versions: [{ version, preRelease }],
    },
    null,
    2
  )
);

writeFileSync(
  "tmp/version.json",
  JSON.stringify(
    {
      package: packageName,
      version,
      preRelease,
      pages: fnPages.map((page) =>
        pick(page, ["slug", "category", "title", "summary"])
      ),
    },
    null,
    2
  )
);

writeFileSync("tmp/pages.json", JSON.stringify(fnPages, null, 2));

// const pagesBatch = batch()
// const packageRef = ref(db.packages, packageName)

// Promise.all([
//   get(packageRef).then((packageDoc) =>
//     packageDoc
//       ? update(packageRef, {
//           versions: value('arrayUnion', [{ version, preRelease }]),
//         })
//       : set(packageRef, {
//           name: packageName,
//           versions: [{ version, preRelease }],
//         })
//   ),

//   add(db.versions, {
//     package: packageName,
//     version,
//     preRelease,
//     pages: fnPages.map((page) =>
//       pick(page, ['slug', 'category', 'title', 'summary'])
//     ),
//   }),

//   Promise.all(
//     fnPages.map((page) =>
//       id().then((pageId) => pagesBatch.set(db.pages, pageId, page))
//     )
//   ).then(() => pagesBatch.commit()),
// ]).then(() => {
//   console.log('(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ Done!')
//   process.exit(0)
// })

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
function findCategory(ref: ContainerReflection, fn: DeclarationReflection) {
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
function findSummary(fn: DeclarationReflection) {
  if (!fn.signatures) return;
  for (const signature of fn.signatures) {
    const block = signature.comment?.blockTags.find(
      (b) => b.tag === "@summary"
    );
    if (!block) continue;
    return block.content.map((c) => c.text).join("");
  }
}
