import { describe, expect, it } from "vitest";
import { startOfWeek } from "./index.js";

describe("startOfWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a week", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date);
    expect(result).toEqual(/* 1393/6/8 */ new Date(2014, 7 /* Aug */, 30));
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date, { weekStartsOn: 1 });
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date, {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/6/11 */ new Date(
      2014,
      8 /* Sep */,
      2,
      11,
      55,
      0,
    ).getTime();
    const result = startOfWeek(date);
    expect(result).toEqual(/* 1393/6/8 */ new Date(2014, 7 /* Aug */, 30));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfWeek(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  describe("edge cases", () => {
    describe("when the given day is before the start of a week", () => {
      it("it returns the start of a week", () => {
        const date = /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6);
        const result = startOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(/* 1393/7/9 */ new Date(2014, 9 /* Oct */, 1));
      });
    });

    describe("when the given day is the start of a week", () => {
      it("it returns the start of a week", () => {
        const date = /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8);
        const result = startOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(/* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8));
      });
    });

    describe("when the given day is after the start of a week", () => {
      it("it returns the start of a week", () => {
        const date = /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10);
        const result = startOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(/* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8));
      });
    });

    it("handles the week at the start of a year", () => {
      const date = /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1);
      const result = startOfWeek(date);
      expect(result).toEqual(/* 1392/10/7 */ new Date(2013, 11 /* Dec */, 28));
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
