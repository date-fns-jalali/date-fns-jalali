import { describe, expect, it } from "vitest";
import { setMonth } from "./index.js";

describe("setMonth", () => {
  it("sets the month", () => {
    const result = setMonth(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 1);
    expect(result).toEqual(/* 1393/2/10 */ new Date(2014, 3 /* Apr */, 30));
  });

  it("sets the last day of the month if the original date was the last day of a longer month", () => {
    const result = setMonth(/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22), 9);
    expect(result).toEqual(/* 1393/10/30 */ new Date(2015, 0 /* Jan */, 20));
  });

  it("accepts a timestamp", () => {
    const result = setMonth(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      11,
    );
    expect(result).toEqual(/* 1393/12/10 */ new Date(2015, 2 /* Mar */, 1));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    setMonth(date, 5);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setMonth(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setMonth(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setMonth(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
