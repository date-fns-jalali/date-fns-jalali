/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { sub } from "./index.js";

describe("sub", () => {
  it("subtracts the duration from the given date", () => {
    const result = sub(
      /* 1396/3/25 */ new Date(2017, 5 /* June */, 15, 15, 29, 20),
      {
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      },
    );
    assert.deepStrictEqual(
      result,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 10, 19, 50),
    );
  });

  it("supports an undefined value in the duration object", () => {
    const result = sub(
      /* 1396/3/25 */ new Date(2017, 5 /* June */, 15, 15, 29, 20),
      {
        years: undefined,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      },
    );
    assert.deepStrictEqual(
      result,
      /* 1395/6/11 */ new Date(2016, 8 /* Sep */, 1, 10, 19, 50),
    );
  });

  it("returns same date object when passed empty duration values", () => {
    const result = sub(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 10).getTime(),
      {
        years: undefined,
        months: undefined,
        weeks: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,
      },
    );
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 10),
    );
  });

  it("returns same date object when passed empty duration", () => {
    const result = sub(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 10).getTime(),
      {},
    );
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 10),
    );
  });

  it("accepts a timestamp", () => {
    const result = sub(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 14).getTime(),
      {
        hours: 4,
      },
    );
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 10),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 10);
    sub(date, { hours: 4 });
    assert.deepStrictEqual(
      date,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 10),
    );
  });

  it("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
    const date = /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31);
    const result = sub(date, { months: 3 });
    assert.deepStrictEqual(
      result,
      /* 1393/7/10 */ new Date(2014, 9 /* Sep */, 2),
    );
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(1, 2 /* Mar */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(1, 1 /* Feb */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = sub(initialDate, { months: 1 });
    assert.deepStrictEqual(result, expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = sub(new Date(NaN), { hours: 5 });
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
