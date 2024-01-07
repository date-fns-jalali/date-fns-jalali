/* eslint-disable */

import {
  findCommentInPath,
  generateDateCommentText,
  generateStringDateCommentText,
  isNewDate,
  isStringDate,
  isUTCDate,
} from "./utils";
import { toGregorian } from "../../src/_lib/jalali/index";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setValue(j, node, args) {
  node.arguments[0] = j.template.expression([args[0] + ""]);
  node.arguments[1].value = args[1];
  if (node.arguments[1].comments && node.arguments[1].comments[0]) {
    node.arguments[1].comments[0].value = ` ${months[args[1]]} `;
  }
  if (node.arguments[2]) {
    node.arguments[2].value = args[2];
  }
}

function setStringValue(j, node, args) {
  let y = args[0].toString().padStart(4, "0");
  let m = (args[1] + 1).toString().padStart(2, "0");
  let d = args[2].toString().padStart(2, "0");
  let rest = node.value.slice(10);
  node.value = `${y}-${m}-${d}${rest}`;
}

function applyComments(ast, j) {
  return ast
    .find(j.NewExpression, (node) => {
      return isNewDate(node);
    })
    .forEach((path) => {
      const jText = generateDateCommentText(path.value);
      if (jText === null) {
        return;
      }

      const text = findCommentInPath(path);
      if (text === null) {
        return;
      }

      if (jText === text.trim()) {
        return;
      }
      const args = text
        .trim()
        .split("/")
        .map((n) => +n);
      const g = toGregorian(...args);
      const gArgs = [g.gy, g.gm - 1, g.gd];
      setValue(j, path.node, gArgs);
    });
}

function applyStringComments(ast, j, ctx) {
  if (ctx.isFormatOrParse) {
    return;
  }
  return ast
    .find(j.Literal, (node) => {
      return isStringDate(node);
    })
    .forEach((path) => {
      const jText = generateStringDateCommentText(path.value);
      if (jText === null) {
        return;
      }

      const text = findCommentInPath(path);
      if (text === null) {
        return;
      }

      if (jText === text.trim()) {
        return;
      }
      const args = text
        .trim()
        .split("/")
        .map((n) => +n);
      const g = toGregorian(...args);
      const gArgs = [g.gy, g.gm - 1, g.gd];
      setStringValue(j, path.node, gArgs);
    });
}

function applyUTCComment(ast, j) {
  return ast
    .find(j.CallExpression, (node) => {
      return isUTCDate(node);
    })
    .forEach((path) => {
      const jText = generateDateCommentText(path.value);
      if (jText === null) {
        return;
      }

      const text = findCommentInPath(path);
      if (text === null) {
        return;
      }

      if (jText === text.trim()) {
        return;
      }
      const args = text
        .trim()
        .split("/")
        .map((n) => +n);
      const g = toGregorian(...args);
      const gArgs = [g.gy, g.gm - 1, g.gd];
      setValue(j, path.node, gArgs);
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

  applyStringComments(ast, j, ctx);
  applyComments(ast, j, ctx);
  applyUTCComment(ast, j, ctx);

  return ast.toSource().replace(/G2J\*\/\s*/g, "*/ ");
}
