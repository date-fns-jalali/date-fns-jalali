import { describe, expect, it } from "vitest";
import { getWeeksInMonth } from "./index.js";

describe("getWeeksInMonth", () => {
  it("returns the number of calendar weeks the month in the given date spans", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
    );
    expect(result).toBe(5);
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
      },
    );
    expect(result).toBe(5);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        locale: {
          options: { weekStartsOn: 1 },
        },
      },
    );
    expect(result).toBe(5);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
        locale: {
          options: { weekStartsOn: 0 },
        },
      },
    );
    expect(result).toBe(5);
  });

  it("accepts timestamps", () => {
    const result = getWeeksInMonth(
      /* 1396/2/19 */ new Date(2017, 4 /* May */, 9, 18, 0).getTime(),
    );
    expect(result).toBe(6);
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    getWeeksInMonth(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns NaN if the date is `Invalid Date`", () => {
    const result = getWeeksInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
