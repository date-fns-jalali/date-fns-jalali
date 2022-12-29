#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import { pick } from "js-fns";
import { stringify } from "typeroo/json";
import path from "path";
import {
  ContainerReflection,
  DeclarationReflection,
  ReflectionKind,
} from "typedoc";
import { packageName, submodules } from "./consts";
import { DateFnsDocs } from "./types";
import { readFile, writeFile } from "fs/promises";

interface ConfigModule {
  config: DateFnsDocs.Config;
}

const configPath = path.resolve(process.cwd(), process.argv[2]);
const configDir = path.dirname(configPath);

import(configPath)
  .then(async ({ config }: ConfigModule) => {
    const { version, preRelease } = await getVersion(config);
    const [fnPages, markdownPages] = await Promise.all([
      getFnPages(config, version),
      getMarkdownPages(config, version),
    ]);
    const pages = [...fnPages, ...markdownPages];

    return Promise.all([
      writeFile(
        "tmp/package.json",
        JSON.stringify(
          {
            name: packageName,
            versions: [{ version, preRelease }],
          },
          null,
          2
        )
      ),

      writeFile(
        "tmp/version.json",
        JSON.stringify(
          {
            package: packageName,
            version,
            preRelease,
            pages: pages.map((page) =>
              pick(page, ["slug", "category", "title", "summary", "submodules"])
            ),
            groups: config.groups,
          },
          null,
          2
        )
      ),

      writeFileSync("tmp/pages.json", JSON.stringify(pages, null, 2)),
    ]);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const versionRegExp = /^\d+\.\d+\.\d+(-(alpha|beta|rc)(\.\d+)?)?$/;
const preReleaseRegExp = /-(alpha|beta|rc)(\.\d+)?$/;

async function getVersion(config: DateFnsDocs.Config) {
  const packagePath = path.resolve(configDir, config.package, "package.json");
  const packageStr = await readFile(packagePath, "utf8");
  const packageJSON = JSON.parse(packageStr);
  const version = packageJSON.version;

  if (!version || !versionRegExp.test(version))
    throw Error(`(•̀o•́)ง version is invalid "${version}"`);

  const preRelease = preReleaseRegExp.test(version);

  return { version: "v" + version, preRelease };
}

async function getFnPages(
  config: DateFnsDocs.Config,
  version: string
): Promise<DateFnsDocs.TSDocPage[]> {
  const docsJSON = readFileSync(path.resolve(configDir, config.json), "utf8");
  const docs = JSON.parse(docsJSON) as ContainerReflection;

  return (
    (docs.children
      ?.map((ref) => {
        const fn = findFn(ref);
        if (!fn) return;
        const name = ref.name;
        const category = findCategory(ref, fn) || "Common";
        const summary = findSummary(fn) || "";
        const page: DateFnsDocs.TSDocPage = {
          type: "tsdoc",
          package: packageName,
          version,
          slug: name,
          category,
          title: name,
          summary,
          name,
          tsdoc: stringify(ref),
          submodules,
        };
        return page;
      })
      .filter((t) => !!t) as DateFnsDocs.TSDocPage[] | undefined) || []
  );
}

async function getMarkdownPages(
  config: DateFnsDocs.Config,
  version: string
): Promise<DateFnsDocs.MarkdownPage[]> {
  return Promise.all(
    config.files.map(async (file) => {
      const markdown = await readFile(
        path.resolve(configDir, file.path),
        "utf8"
      );
      return {
        ...pick(file, ["slug", "category", "title", "summary"]),
        type: "markdown",
        version,
        markdown,
        package: packageName,
        submodules,
      };
    })
  );
}
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
