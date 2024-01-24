import { expect, assert, describe, it } from "vitest";
import { lastDayOfQuarter } from "./index.js";

describe("lastDayOfQuarter", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a quarter", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfQuarter(date);
    expect(result).toEqual(/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22));
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
    const result = lastDayOfQuarter(date);
    expect(result).toEqual(/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfQuarter(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfQuarter(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
