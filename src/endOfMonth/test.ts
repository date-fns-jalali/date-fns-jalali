/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { endOfMonth } from "./index.js";

describe("endOfMonth", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a month", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfMonth(date);
    assert.deepStrictEqual(
      result,
      /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999),
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
    const result = endOfMonth(date);
    assert.deepStrictEqual(
      result,
      /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfMonth(date);
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  describe("edge cases", () => {
    it("works for last month in year", () => {
      const date = /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1, 0, 0, 0);
      const result = endOfMonth(date);
      assert.deepStrictEqual(
        result,
        /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999),
      );
    });

    it("works for last day of month", () => {
      const date = /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31);
      const result = endOfMonth(date);
      assert.deepStrictEqual(
        result,
        /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31, 23, 59, 59, 999),
      );
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfMonth(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
