import { describe, expect, it } from "vitest";
import { subYears } from "./index.js";

describe("subYears", () => {
  it("subtracts the given number of years", () => {
    const result = subYears(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 5);
    expect(result).toEqual(/* 1388/6/10 */ new Date(2009, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = subYears(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      12,
    );
    expect(result).toEqual(/* 1381/6/10 */ new Date(2002, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    subYears(date, 12);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("handles the leap years properly", () => {
    const result = subYears(
      /* 1394/12/10 */ new Date(2016, 1 /* Feb */, 29),
      1,
    );
    expect(result).toEqual(/* 1393/12/10 */ new Date(2015, 2 /* Mar */, 1));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 1 /* Feb */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(-1, 1 /* Feb */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = subYears(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subYears(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subYears(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
