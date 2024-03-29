import { describe, expect, it } from "vitest";
import { getWeek } from "./index.js";

describe("getWeek", () => {
  it("returns the local week of year of the given date", () => {
    const result = getWeek(/* 1383/1/9 */ new Date(2004, 2 /* Mar */, 28));
    expect(result).toBe(2);
  });

  it("accepts a timestamp", () => {
    const result = getWeek(
      /* 1387/1/2 */ new Date(2008, 2 /* Mar */, 21).getTime(),
    );
    expect(result).toBe(1);
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const result = getWeek(initialDate);
    expect(result).toBe(1);
  });

  it("properly works with negative numbers", () => {
    expect(getWeek(/* 1383/1/9 */ new Date(2004, 2 /* Mar */, 28))).toBe(2);
    // Calendars repeat every 400 years
    expect(getWeek(/* -227/1/4 */ new Date(394, 2 /* Mar */, 25))).toBe(1);
    expect(getWeek(/* -2627/1/4 */ new Date(-2006, 2 /* Mar */, 25))).toBe(1);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeek(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = /* 1383/1/2 */ new Date(2004, 2 /* Mar */, 21);
    const result = getWeek(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toBe(52);
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
    expect(result).toBe(52);
  });
});
