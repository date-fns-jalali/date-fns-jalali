import { expect, assert, describe, it } from "vitest";
import { setYear } from "./index.js";

describe("setYear", () => {
  it("sets the year", () => {
    const result = setYear(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      1392,
    );
    expect(result).toEqual(/* 1392/6/10 */ new Date(2013, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const result = setYear(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      1395,
    );
    expect(result).toEqual(/* 1395/6/10 */ new Date(2016, 7 /* Aug */, 31));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    setYear(date, 2011);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setYear(new Date(NaN), 2013);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setYear(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
