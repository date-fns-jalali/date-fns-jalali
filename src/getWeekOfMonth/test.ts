import { describe, expect, it } from "vitest";
import { getWeekOfMonth } from "./index.js";

describe("getWeekOfMonth", () => {
  it("returns the week of the month of the given date", () => {
    const result = getWeekOfMonth(
      /* 1396/8/24 */ new Date(2017, 10 /* Nov */, 15),
    );
    expect(result).toBe(4);
  });

  describe("edge cases", () => {
    describe("when the given day is the first of a month", () => {
      it("returns the week of the month of the given date", () => {
        const result = getWeekOfMonth(
          /* 1396/8/1 */ new Date(2017, 9 /* Oct */, 23),
        );
        expect(result).toBe(1);
      });
    });

    describe("when the given day is the last of a month #1", () => {
      it("returns the week of the month of the given date", () => {
        const result = getWeekOfMonth(
          /* 1396/10/30 */ new Date(2018, 0 /* Jan */, 20),
        );
        expect(result).toBe(6);
      });
    });

    describe("when the given day is the last of a month #2", () => {
      it("returns the week of the month of the given date", () => {
        const result = getWeekOfMonth(
          /* 1396/6/31 */ new Date(2017, 8 /* Sep */, 22),
        );
        expect(result).toBe(5);
      });
    });
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = getWeekOfMonth(
      /* 1396/7/1 */ new Date(2017, 8 /* Sep */, 23),
      {
        weekStartsOn: 1,
      },
    );
    expect(result).toBe(1);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = getWeekOfMonth(
      /* 1396/7/30 */ new Date(2017, 9 /* Oct */, 22),
      {
        locale: {
          options: { weekStartsOn: 6 },
        },
      },
    );
    expect(result).toBe(5);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = getWeekOfMonth(
      /* 1396/7/30 */ new Date(2017, 9 /* Oct */, 22),
      {
        weekStartsOn: 6,
        locale: {
          options: { weekStartsOn: 0 },
        },
      },
    );
    expect(result).toBe(5);
  });

  it("accepts a timestamp", () => {
    const result = getWeekOfMonth(
      /* 1396/8/1 */ new Date(2017, 9 /* Oct */, 23).getTime(),
    );
    expect(result).toBe(1);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeekOfMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("returns the week of the month of the given date, when the given date is sunday", () => {
    const result = getWeekOfMonth(
      /* 1396/7/2 */ new Date(2017, 8 /* Sep */, 24),
      {
        weekStartsOn: 1,
      },
    );
    expect(result).toBe(1);
  });
});
