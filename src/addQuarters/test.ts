import { expect, assert, describe, it } from "vitest";
import { addQuarters } from "./index.js";

describe("addQuarters", () => {
  it("adds the given number of quarters", () => {
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      1,
    );
    expect(result).toEqual(/* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      4,
    );
    expect(result).toEqual(/* 1394/6/10 */ new Date(2015, 8 /* Sep */, 1));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    addQuarters(date, 4);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("works well if the desired month has fewer days and the provided date is in the last day of a month", () => {
    const date = /* 1393/3/31 */ new Date(2014, 5 /* Jun */, 21);
    const result = addQuarters(date, 3);
    expect(result).toEqual(/* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(-1, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = addQuarters(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addQuarters(new Date(NaN), 1);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
