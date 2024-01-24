import { expect, assert, describe, it } from "vitest";
import { startOfHour } from "./index.js";

describe("startOfHour", () => {
  it("returns the date with the time set to the first millisecond of an hour", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55);
    const result = startOfHour(date);
    expect(result).toEqual(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55);
    startOfHour(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55),
    );
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/6/11 */ new Date(
      2014,
      8 /* Sep */,
      2,
      11,
      55,
    ).getTime();
    const result = startOfHour(date);
    expect(result).toEqual(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfHour(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
