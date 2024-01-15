/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { subYears } from "./index.js";

describe("subYears", () => {
  it("subtracts the given number of years", () => {
    const result = subYears(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 5);
    assert.deepStrictEqual(
      result,
      /* 1388/6/10 */ new Date(2009, 8 /* Sep */, 1),
    );
  });

  it("accepts a timestamp", () => {
    const result = subYears(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      12,
    );
    assert.deepStrictEqual(
      result,
      /* 1381/6/10 */ new Date(2002, 8 /* Sep */, 1),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    subYears(date, 12);
    assert.deepStrictEqual(
      date,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
    );
  });

  it("handles the leap years properly", () => {
    const result = subYears(
      /* 1394/12/10 */ new Date(2016, 1 /* Feb */, 29),
      1,
    );
    assert.deepStrictEqual(
      result,
      /* 1393/12/9 */ new Date(2015, 1 /* Feb */, 28),
    );
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 1 /* Feb */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(-1, 1 /* Feb */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = subYears(initialDate, 1);
    assert.deepStrictEqual(result, expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subYears(new Date(NaN), 5);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subYears(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
