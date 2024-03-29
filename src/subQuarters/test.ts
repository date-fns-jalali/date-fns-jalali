import { describe, expect, it } from "vitest";
import { subQuarters } from "./index.js";

describe("subQuarters", () => {
  it("subtracts the given number of quarters", () => {
    const result = subQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      3,
    );
    expect(result).toEqual(/* 1392/9/10 */ new Date(2013, 11 /* Dec */, 1));
  });

  it("accepts a timestamp", () => {
    const result = subQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      4,
    );
    expect(result).toEqual(/* 1392/6/10 */ new Date(2013, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    subQuarters(date, 3);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
    const date = /* 1393/1/31 */ new Date(2014, 3 /* Apr */, 20);
    const result = subQuarters(date, 1);
    expect(result).toEqual(/* 1392/10/30 */ new Date(2014, 0 /* Jan */, 20));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = subQuarters(initialDate, 3);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subQuarters(new Date(NaN), 3);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
