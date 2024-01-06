/* eslint-env mocha */

import assert from "assert";
import { describe, expect, it } from "vitest";
import { getWeek } from "./index.js";

describe("getWeek", () => {
  it("returns the local week of year of the given date", () => {
    const result = getWeek(/* 1383/1/9 */ new Date(2004, 2 /* Mar */, 28));
    assert(result === 2);
  });

  it("accepts a timestamp", () => {
    const result = getWeek(
      /* 1387/1/2 */ new Date(2008, 2 /* Mar */, 21).getTime(),
    );
    assert(result === 1);
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const result = getWeek(initialDate);
    assert(result === 1);
  });

  it("properly works with negative numbers", () => {
    expect(getWeek(/* 1383/10/15 */ new Date(2005, 0 /* Jan */, 4))).toBe(2);
    // Calendars repeat every 400 years
    expect(getWeek(/* -227/10/13 */ new Date(395, 0 /* Jan */, 4))).toBe(1);
    expect(getWeek(/* -2627/10/13 */ new Date(-2005, 0 /* Jan */, 4))).toBe(1);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeek(new Date(NaN));
    assert(isNaN(result));
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = /* 1383/1/2 */ new Date(2004, 2 /* Mar */, 21);
    const result = getWeek(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    assert(result === 52);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = /* 1383/1/2 */ new Date(2004, 2 /* Mar */, 21);
    const result = getWeek(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    assert(result === 52);
  });
});
