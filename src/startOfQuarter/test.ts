import { expect, assert, describe, it } from "vitest";
import { startOfQuarter } from "./index.js";

describe("startOfQuarter", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a quarter", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfQuarter(date);
    expect(result).toEqual(/* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22));
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
    const result = startOfQuarter(date);
    expect(result).toEqual(/* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfQuarter(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfQuarter(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
