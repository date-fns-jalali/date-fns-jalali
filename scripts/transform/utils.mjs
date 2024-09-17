import { toJalali } from "../../src/_lib/jalali/index";
export function isUTCDate(node) {
  return (
    node.type === "CallExpression" &&
    node.callee.type === "MemberExpression" &&
    node.callee.object.type === "Identifier" &&
    node.callee.object.name === "Date" &&
    node.callee.property.type === "Identifier" &&
    node.callee.property.name === "UTC"
  );
}

export function generateDateCommentText(node) {
  let allIsNumber = true;
  let args = node.arguments.map((arg) => {
    if (arg.type === "NumericLiteral") {
      return arg.value;
    }
    if (
      arg.type === "UnaryExpression" &&
      arg.operator === "-" &&
      arg.argument.type === "NumericLiteral"
    ) {
      return -arg.argument.value;
    }
    allIsNumber = false;
    return null;
  });
  if (!allIsNumber) {
    return null;
  }
  const [y, m, d = 1] = args;
  const jd = toJalali(y, m + 1, d);
  const ja = [jd.jy, jd.jm, jd.jd];
  return ja.join("/");
}

export function addImports(ast, imports) {
  let body = ast.get().node.program.body;
  const importDeclarations = body.filter(
    (node) => node.type === "ImportDeclaration",
  );
  const lastImportDeclaration =
    importDeclarations[importDeclarations.length - 1];
  const lastImportDeclarationIndex = body.indexOf(lastImportDeclaration);
  body.splice(lastImportDeclarationIndex + 1, 0, ...imports);
}

export function addCommentToPath(text, path, j) {
  let node = path.node;
  let parent = path.parent;
  if (
    parent.value.type === "UnaryExpression" &&
    parent.value.operator === "+"
  ) {
    node = parent.value;
  }
  const comments = (node.comments = node.comments || []);
  const comment = j.commentBlock(` ${text} G2J`, true, false);
  comments.push(comment);
}

export function findCommentInPath(path) {
  let node = path.node;
  let parent = path.parent;
  if (
    parent.value.type === "UnaryExpression" &&
    parent.value.operator === "+"
  ) {
    node = parent.value;
  }
  if (node.comments && node.comments[node.comments.length - 1]) {
    return node.comments[node.comments.length - 1].value;
  }
  return null;
}

/**
 *
 * @param imports {Array<{variable: string, filePath: string}>}
 *
 * @returns {Array}
 */
export function uniqueImports(imports) {
  const uniqueImports = [];
  imports.forEach((importItem) => {
    const isExist = uniqueImports.find(
      (item) =>
        item.variable === importItem.variable &&
        item.filePath === importItem.filePath,
    );
    if (!isExist) {
      uniqueImports.push(importItem);
    }
  });
  return uniqueImports;
}
