/* eslint-disable */

import {
  addCommentToPath,
  addCommentToStringPath,
  generateDateCommentText,
  generateStringDateCommentText,
  isNewDate,
  isStringDate,
  isUTCDate,
} from "./utils";

function addComments(ast, j) {
  return ast
    .find(j.NewExpression, (node) => {
      return isNewDate(node);
    })
    .forEach((path) => {
      const text = generateDateCommentText(path.value);
      if (text === null) {
        return;
      }
      addCommentToPath(text, path, j);
    });
}

function addUTCComment(ast, j) {
  ast
    .find(j.CallExpression, (node) => {
      return isUTCDate(node);
    })
    .forEach((path) => {
      const text = generateDateCommentText(path.node);
      if (text === null) {
        return;
      }
      addCommentToPath(text, path, j);
    });
}

function addStringComments(ast, j, ctx) {
  if (ctx.isFormatOrParse) {
    return;
  }
  return ast
    .find(j.Literal, (node) => {
      return isStringDate(node);
    })
    .forEach((path) => {
      const text = generateStringDateCommentText(path.value);
      if (text === null) {
        return;
      }
      addCommentToStringPath(text, path, j);
    });
}

export default function transformer(file, api) {
  if (
    file.path.startsWith("src/_core/") ||
    file.path.includes("ISO") ||
    file.path.includes("RFC") ||
    !(file.path.endsWith("test.js") || file.path.endsWith("test.ts")) ||
    file.path.startsWith("src/locale/")
  ) {
    console.log("ignore:", file.path);
    return;
  }

  const j = api.jscodeshift;
  let ast = j(file.source);

  const ctx = {};

  if (
    file.path === "src/format/test.ts" ||
    file.path === "src/lightFormat/test.ts" ||
    file.path === "src/parse/test.ts"
  ) {
    ctx.isFormatOrParse = true;
  }
  addStringComments(ast, j, ctx);

  addComments(ast, j, ctx);
  addUTCComment(ast, j, ctx);

  return ast.toSource().replace(/G2J\*\/\s*/g, "*/ ");
}
