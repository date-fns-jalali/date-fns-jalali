import { addImports, uniqueImports } from "./utils";
import path from "node:path";

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

function useCoreMethod(method, ast, j, ctx) {
  let changed = false;
  const coreMethod = "core" + capitalize(method);
  ast
    .find(j.CallExpression, (node) => {
      return (
        node.callee.type === "MemberExpression" &&
        node.callee.property.name === method
      );
    })
    .forEach((path) => {
      changed = true;
      const args = path.value.arguments;
      const value = path.value.callee.object;
      j(path).replaceWith(
        j.callExpression(j.identifier(coreMethod), [value, ...args]),
      );
    });

  if (changed) {
    ctx.imports.push({
      method,
      variable: coreMethod,
      filePath: `src/_core/${method}/index`,
    });
  }
}

function useCoreMethods(ast, j, ctx) {
  const methods = [
    "getMonth",
    "setMonth",
    "getDate",
    "setDate",
    "getFullYear",
    "setFullYear",
    // utc
    "getUTCMonth",
    "setUTCMonth",
    "getUTCDate",
    "setUTCDate",
    "getUTCFullYear",
    "setUTCFullYear",
  ];
  methods.forEach((method) => {
    useCoreMethod(method, ast, j, ctx);
  });
}

function useNewDate(ast, j, ctx) {
  let changed = false;
  ast
    .find(j.NewExpression, (node) => {
      return node.callee.name === "Date";
    })
    .forEach((path) => {
      changed = true;
      const args = path.value.arguments;
      j(path).replaceWith(j.callExpression(j.identifier("coreNewDate"), args));
    });
  if (changed) {
    ctx.imports.push({
      method: "newDate",
      variable: "coreNewDate",
      filePath: `src/_core/newDate/index`,
    });
  }
}

function useDateUTC(ast, j, ctx) {
  let changed = false;
  ast
    .find(j.CallExpression, (node) => {
      return (
        node.callee.type === "MemberExpression" &&
        node.callee.object.name === "Date" &&
        node.callee.property.name === "UTC"
      );
    })
    .forEach((path) => {
      changed = true;
      const args = path.value.arguments;
      j(path).replaceWith(j.callExpression(j.identifier("coreDateUTC"), args));
    });
  if (changed) {
    ctx.imports.push({
      method: "dateUTC",
      variable: "coreDateUTC",
      filePath: `src/_core/dateUTC/index`,
    });
  }
}

function useCoreIsLeapYear(ast, j, ctx) {
  ast.find(j.ReturnStatement).forEach((path) => {
    j(path).replaceWith(
      j.returnStatement(
        j.callExpression(j.identifier("coreIsLeapYear"), [
          j.identifier("year"),
        ]),
      ),
    );
    ctx.imports.push({
      method: "isLeapYear",
      variable: "coreIsLeapYear",
      filePath: `src/_core/isLeapYear/index`,
    });
  });
}

export default function transformer(file, api) {
  if (
    !file.path.startsWith("src/parse/_lib/") &&
    (file.path.startsWith("src/_core/") ||
      file.path.includes("ISO") ||
      file.path.includes("RFC") ||
      file.path.includes("parseJSON") ||
      file.path.includes("getTimezoneOffsetInMilliseconds") ||
      !(file.path.endsWith("index.js") || file.path.endsWith("index.ts")) ||
      file.path.startsWith("src/locale/"))
  ) {
    console.log("ignore:", file.path);
    return;
  }

  const j = api.jscodeshift;
  let ast = j(file.source);

  const ctx = { imports: [] };

  if (file.path === "src/isLeapYear/index.ts") {
    useCoreIsLeapYear(ast, j, ctx);
  }

  useCoreMethods(ast, j, ctx);
  useNewDate(ast, j, ctx);
  useDateUTC(ast, j, ctx);

  const { statement } = j.template;

  const imports = uniqueImports(ctx.imports);
  addImports(
    ast,
    imports.map((i) => {
      const rPath = path.relative(file.path, i.filePath).substr(3);
      return statement([`import { ${i.method} as ${i.variable} } from "${rPath}";\n`]);
    }),
  );

  return ast.toSource();
}
