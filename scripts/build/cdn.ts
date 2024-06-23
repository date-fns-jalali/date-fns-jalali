/**
 * The script builds the CDN version of the library.
 */

import { $ } from "bun";
import { writeFile, readFile } from "fs/promises";
import { dirname, join, relative } from "path";
import { listLocales, type LocaleFile } from "../_lib/listLocales";
import { availableParallelism } from "node:os";
import { promiseQueue } from "../test/_lib/queue";

if (!process.env.PACKAGE_OUTPUT_PATH)
  throw new Error("PACKAGE_OUTPUT_PATH is not set");

const out = relative(process.cwd(), process.env.PACKAGE_OUTPUT_PATH);

const indexPath = join(out, "cdn.js");
const fpIndexPath = join(out, "fp", "cdn.js");
const localesIndexPath = join(out, "locale", "cdn.js");

Promise.all([
  listLocales().then((locales) =>
    Promise.all(
      locales.map(async (locale) => {
        const localePath = join(out, "locale", locale.code, "cdn.js");
        await $`mkdir -p ${dirname(localePath)}`;
        await writeFile(localePath, localeTemplate(locale));
        return localePath;
      }),
    ),
  ),

  writeFile(indexPath, indexTemplate()).then(() => indexPath),

  writeFile(fpIndexPath, fpIndexTemplate()).then(() => fpIndexPath),

  writeFile(localesIndexPath, localesIndexTemplate()).then(
    () => localesIndexPath,
  ),
])
  .then(([localePaths, ...indexPaths]) => localePaths.concat(indexPaths))
  .then(async (paths) => {
    const buildOptions = {
      entrypoints: paths,
      outdir: ".",
      sourcemap: "external" as const,
      root: ".",
    };

    // First bundle code
    await Bun.build(buildOptions);

    // Make it compatible with older browser
    await promiseQueue(
      paths.map((path) => async () => {
        // Wrap into IIFE, to avoid polluting global scope
        const content = await readFile(path, "utf-8");
        await writeFile(path, `(() => { ${content} })();`);
        // Use Babel to transpile
        await $`env BABEL_ENV=cdn npx babel ${path} --out-file ${path} --source-maps`;
      }),
      availableParallelism(),
    );

    // Now generate min versions
    await Bun.build({
      ...buildOptions,
      minify: true,
      naming: "/[dir]/[name].min.[ext]",
    });
  });

function indexTemplate() {
  return `import * as dateFnsJalali from "./index.mjs";
window.dateFnsJalali = {
  ...window.dateFnsJalali,
  ...dateFnsJalali
};`;
}

function fpIndexTemplate() {
  return `import * as fp from "../fp.mjs";
window.dateFnsJalali = {
  ...window.dateFnsJalali,
  fp
};`;
}

function localesIndexTemplate() {
  return `import * as locales from "../locale.mjs";
window.dateFnsJalali = {
  ...window.dateFnsJalali,
  locale: {
    ...window.dateFnsJalali?.locale,
    ...locales
  }
};`;
}

function localeTemplate({ name, code }: LocaleFile) {
  return `import { ${name} } from "../${code}.mjs";
window.dateFnsJalali = {
  ...window.dateFnsJalali,
  locale: {
    ...window.dateFnsJalali?.locale,
    ${name}
  }
};`;
}
