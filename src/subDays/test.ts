import { describe, expect, it } from "vitest";
import { subDays } from "./index.js";

describe("subDays", () => {
  it("subtracts the given number of days", () => {
    const result = subDays(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 10);
    expect(result).toEqual(/* 1393/5/31 */ new Date(2014, 7 /* Aug */, 22));
  });

  it("accepts a timestamp", () => {
    const result = subDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      10,
    );
    expect(result).toEqual(/* 1393/5/31 */ new Date(2014, 7 /* Aug */, 22));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    subDays(date, 11);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subDays(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
