#!/usr/bin/env node

import { readFile } from "fs/promises";
import { pick } from "js-fns";
import path from "path";
import { stringify } from "typeroo/json";
import { batch } from "typesaurus";
import { packageName, submodules } from "./consts";
import { db } from "./db";
import { findCategory, findSummary, readFnsFromJSON } from "./json";
import { DateFnsDocs } from "./types";

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

    const pagesBatch = batch(db);
    const packageRef = db.packages.ref(db.packages.id(packageName));
    const createdAt = Date.now();

    Promise.all([
      packageRef.get().then((packageDoc) =>
        packageDoc
          ? packageRef.update(($) =>
              $.field("versions").set(
                $.arrayUnion([{ version, preRelease, submodules, createdAt }])
              )
            )
          : packageRef.set({
              name: packageName,
              versions: [{ version, preRelease, submodules, createdAt }],
            })
      ),

      db.versions.add({
        package: packageName,
        version,
        preRelease,
        pages: fnPages.map((page) =>
          pick(page, ["slug", "category", "title", "summary"])
        ),
        createdAt,
        categories: config.categories,
        submodules,
      }),

      Promise.all(
        pages.map((page) =>
          db.pages.id().then((pageId) => pagesBatch.pages.set(pageId, page))
        )
      ).then(pagesBatch),
    ]).then(() => {
      console.log("(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ Done!");
      process.exit(0);
    });
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
  const jsonPath = path.resolve(configDir, config.json);
  const fns = await readFnsFromJSON(jsonPath);

  return fns.map(({ ref, fn }) => {
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
      tsdoc: stringify(ref)!,
      submodules,
    };
    return page;
  });
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
