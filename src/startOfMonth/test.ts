/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { startOfMonth } from "./index.js";

describe("startOfMonth", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a month", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfMonth(date);
    assert.deepStrictEqual(
      result,
      /* 1393/6/1 */ new Date(2014, 7 /* Aug */, 23),
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
    const result = startOfMonth(date);
    assert.deepStrictEqual(
      result,
      /* 1393/6/1 */ new Date(2014, 7 /* Aug */, 23),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfMonth(date);
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfMonth(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
