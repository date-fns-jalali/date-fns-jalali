import { describe, expect, it } from "vitest";
import { setFullYear } from "../_core/setFullYear";
import { addYears } from "./index.js";

describe("addYears", () => {
  it("adds the given number of years", () => {
    const result = addYears(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 5);
    expect(result).toEqual(/* 1398/6/10 */ new Date(2019, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addYears(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      12,
    );
    expect(result).toEqual(/* 1405/6/10 */ new Date(2026, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    addYears(date, 12);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("handles the leap years properly", () => {
    const result = addYears(
      /* 1394/12/10 */ new Date(2016, 1 /* Feb */, 29),
      1,
    );
    expect(result).toEqual(/* 1395/12/10 */ new Date(2017, 1 /* Feb */, 28));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    setFullYear(initialDate, 0, 1 /* Feb */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    setFullYear(expectedResult, 1, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = addYears(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addYears(new Date(NaN), 5);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addYears(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
