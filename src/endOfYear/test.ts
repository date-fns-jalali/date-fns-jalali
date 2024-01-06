/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { endOfYear } from "./index.js";

describe("endOfYear", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a year", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfYear(date);
    assert.deepStrictEqual(
      result,
      /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999),
    );
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/6/11 */ new Date(
      2014,
      8 /* Sep */,
      2,
      11,
      55,
      0,
    ).getTime();
    const result = endOfYear(date);
    assert.deepStrictEqual(
      result,
      /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfYear(date);
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfYear(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
