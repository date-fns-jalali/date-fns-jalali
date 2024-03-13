/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { clamp } from "./index.js";

describe("clamp", () => {
  it("accepts timestamps", () => {
    const start = /* 1378/11/12 */ new Date(2000, 1, 1).getTime();
    const date = /* 1378/11/13 */ new Date(2000, 1, 2).getTime();
    const end = /* 1378/11/14 */ new Date(2000, 1, 3).getTime();
    const result = clamp(date, { start, end });
    assert.deepStrictEqual(result, /* 1378/11/13 */ new Date(2000, 1, 2));
  });

  it("returns the start date when the date is less than start", () => {
    const start = /* 1379/11/13 */ new Date(2001, 1, 1);
    const date = /* 1378/11/12 */ new Date(2000, 1, 1);
    const end = /* 1398/11/12 */ new Date(2020, 1, 1);
    const result = clamp(date, { start, end });
    assert.deepStrictEqual(result, /* 1379/11/13 */ new Date(2001, 1, 1));
  });

  it("returns the end date when the date is greater than the end date", () => {
    const start = /* 1378/11/12 */ new Date(2000, 1, 1);
    const date = /* 1381/11/12 */ new Date(2003, 1, 1);
    const end = /* 1379/11/13 */ new Date(2001, 1, 1);
    const result = clamp(date, { start, end });
    assert.deepStrictEqual(result, /* 1379/11/13 */ new Date(2001, 1, 1));
  });

  it("returns the date when the date is within the bound of start and end", () => {
    const start = /* 1378/11/12 */ new Date(2000, 1, 1);
    const date = /* 1379/11/13 */ new Date(2001, 1, 1);
    const end = /* 1381/11/12 */ new Date(2003, 1, 1);
    const result = clamp(date, { start, end });
    assert.deepStrictEqual(result, /* 1379/11/13 */ new Date(2001, 1, 1));
  });
});
