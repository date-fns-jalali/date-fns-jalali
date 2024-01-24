import { expect, assert, describe, it } from "vitest";
import { addBusinessDays } from "./index.js";

describe("addBusinessDays", () => {
  it("adds the given number of business days", () => {
    const result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      10,
    );
    expect(result).toEqual(/* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15));
  });

  it("handles negative amount", () => {
    const result = addBusinessDays(
      /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15),
      -10,
    );
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns the Monday when 1 day is added on the Friday", () => {
    assert.deepStrictEqual(
      addBusinessDays(/* 1398/10/20 */ new Date(2020, 0 /* Jan */, 10), 1), // Friday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("returns the Monday when 1 day is added on the Satuday", () => {
    assert.deepStrictEqual(
      addBusinessDays(/* 1398/10/21 */ new Date(2020, 0 /* Jan */, 11), 1), // Saturday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("returns the Monday when 1 day is added on the Sunday", () => {
    assert.deepStrictEqual(
      addBusinessDays(/* 1398/10/22 */ new Date(2020, 0 /* Jan */, 12), 1), // Sunday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13),
    );
  });

  it("can handle a large number of business days", () => {
    const result = addBusinessDays(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      3387885,
    );
    expect(result).toEqual(/* 14378/10/12 */ new Date(15000, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      10,
    );
    expect(result).toEqual(/* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    addBusinessDays(date, 11);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addBusinessDays(new Date(NaN), 10);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("starting from a weekend day should land on a weekday when reducing a divisible by 5", () => {
    const substractResult = addBusinessDays(
      /* 1398/5/27 */ new Date(2019, 7, 18),
      -5,
    );
    expect(substractResult).toEqual(/* 1398/5/21 */ new Date(2019, 7, 12));

    const subtractResultWeekend = addBusinessDays(
      /* 1398/5/26 */ new Date(2019, 7, 17),
      -5,
    );
    expect(subtractResultWeekend).toEqual(
      /* 1398/5/21 */ new Date(2019, 7, 12),
    );

    const addResult = addBusinessDays(/* 1398/5/27 */ new Date(2019, 7, 18), 5);
    expect(addResult).toEqual(/* 1398/6/1 */ new Date(2019, 7, 23));

    const addResultWeekend = addBusinessDays(
      /* 1398/5/26 */ new Date(2019, 7, 17),
      5,
    );
    expect(addResultWeekend).toEqual(/* 1398/6/1 */ new Date(2019, 7, 23));
  });
});
