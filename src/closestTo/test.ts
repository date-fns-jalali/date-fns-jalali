import { describe, expect, it } from "vitest";
import { closestTo } from "./index.js";

describe("closestTo", () => {
  it("returns the date from the given array closest to the given date", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2);
    const result = closestTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    ]);
    expect(result).toEqual(/* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31));
  });

  it("works if the closest date from the given array is before the given date", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500);
    const result = closestTo(date, [
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 10),
    ]);
    expect(result).toEqual(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
    );
  });

  it("accepts timestamps", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime();
    const result = closestTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31).getTime(),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2).getTime(),
    ]);
    expect(result).toEqual(/* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31));
  });

  it("returns undefined if the given array is empty", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime();
    const result = closestTo(date, []);
    expect(result).toEqual(undefined);
  });

  it("returns `Invalid Date` if the given date is `Invalid Date`", () => {
    const date = new Date(NaN);
    const result = closestTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    ]);

    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if any date in the given array is `Invalid Date`", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2);
    const result = closestTo(date, [
      /* 1394/6/9 */ new Date(2015, 7 /* Aug */, 31),
      new Date(NaN),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    ]);

    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
