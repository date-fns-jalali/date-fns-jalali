import { describe, expect, it } from "vitest";
import { setQuarter } from "./index.js";

describe("setQuarter", () => {
  it("sets the quarter of the year", () => {
    const result = setQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      1,
    );
    expect(result).toEqual(/* 1393/1/11 */ new Date(2014, 2 /* Mar */, 31));
  });

  it("sets the last day of the month if the original date was the last day of a longer month", () => {
    const result = setQuarter(
      /* 1393/5/31 */ new Date(2014, 7 /* Aug */, 22),
      3,
    );
    expect(result).toEqual(/* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21));
  });

  it("accepts a timestamp", () => {
    const result = setQuarter(
      /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1).getTime(),
      4,
    );
    expect(result).toEqual(/* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1);
    setQuarter(date, 2);
    expect(date).toEqual(/* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setQuarter(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setQuarter(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
