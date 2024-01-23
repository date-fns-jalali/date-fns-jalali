/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { subWeeks } from "./index.js";

describe("subWeeks", () => {
  it("subtracts the given number of weeks", () => {
    const result = subWeeks(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 4);
    assert.deepStrictEqual(
      result,
      /* 1393/5/13 */ new Date(2014, 7 /* Aug */, 4),
    );
  });

  it("accepts a timestamp", () => {
    const result = subWeeks(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      1,
    );
    assert.deepStrictEqual(
      result,
      /* 1393/6/3 */ new Date(2014, 7 /* Aug */, 25),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    subWeeks(date, 2);
    assert.deepStrictEqual(
      date,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subWeeks(new Date(NaN), 4);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subWeeks(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
