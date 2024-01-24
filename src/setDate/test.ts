import { expect, assert, describe, it } from "vitest";
import { setDate } from "./index.js";

describe("setDate", () => {
  it("sets the day of the month", () => {
    const result = setDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 30);
    expect(result).toEqual(/* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30));
  });

  it("accepts a timestamp", () => {
    const result = setDate(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      25,
    );
    expect(result).toEqual(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    setDate(date, 20);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDate(new Date(NaN), 30);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
