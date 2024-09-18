import { toJalali } from "../../src/_lib/jalali/index";

export function isStringDate(node) {
  if (node.type === "StringLiteral") {
    // e.g. "2021-01-01" or "2021-01-01T..."
    if (node.value.length >= 10) {
      return true;
    }
    return true;
  }
  return false;
}

export function isNewDate(node) {
  if (node.callee.name !== "Date" && node.callee.name !== "TZDate") {
    return false;
  }
  if (node.arguments.length > 1) {
    return true;
  }
  return false;
}
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

function getArguments(node) {
  let allIsNumber = true;
  let args = node.arguments.slice(0, 3).map((arg) => {
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
  return args;
}

export function generateDateCommentText(node) {
  let args = getArguments(node);
  if (args === null) {
    return null;
  }
  const [y, m, d = 1] = args;
  const jd = toJalali(y, m + 1, d);
  const ja = [jd.jy, jd.jm, jd.jd];
  return ja.join("/");
}

export function generateStringDateCommentText(node) {
  let value = node.value.toString();
  // e.g. "2021-01-01" or "2021-01-01T..."
  if (value.length > 10) {
    if (!value.charAt(10) === "T") {
      return null;
    }
    value = value.slice(0, 10);
  }
  if (value.charAt(4) !== "-" || value.charAt(7) !== "-") {
    return null;
  }
  const [y, m, d] = value.split("-").map((v) => parseInt(v, 10));
  if (isNaN(y) || isNaN(m) || isNaN(d)) {
    return null;
  }
  const jd = toJalali(y, m, d);
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

export function addCommentToStringPath(text, path, j) {
  const comments = path.node.comments || [];
  const comment = j.commentBlock(` ${text} G2J`, true, false);
  comments.push(comment);
  path.node.comments = comments;
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
