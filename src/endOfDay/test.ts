import { expect, assert, describe, it } from "vitest";
import { endOfDay } from "./index.js";

describe("endOfDay", () => {
  it("returns the date with the time set to 23:59:59.999", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfDay(date);
    assert.deepStrictEqual(
      result,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999),
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
    const result = endOfDay(date);
    assert.deepStrictEqual(
      result,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 23, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfDay(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfDay(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
