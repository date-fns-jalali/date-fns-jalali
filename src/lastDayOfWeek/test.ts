import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { lastDayOfWeek } from "./index.js";

describe("lastDayOfWeek", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a week", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date);
    expect(result).toEqual(/* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5));
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date, { weekStartsOn: 1 });
    expect(result).toEqual(/* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7));
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date, {
      locale: {
        options: { weekStartsOn: 1 },
      },
    });
    expect(result).toEqual(/* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7));
  });

  it("options.weekStartsOn overwrites the first day of the week specified in locale", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date, {
      weekStartsOn: 1,
      locale: {
        options: { weekStartsOn: 0 },
      },
    });
    expect(result).toEqual(/* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7));
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
    const result = lastDayOfWeek(date);
    expect(result).toEqual(/* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfWeek(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  describe("edge cases", () => {
    describe("when the given day is before the start of a week", () => {
      it("it returns the last day of a week", () => {
        const date = /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6);
        const result = lastDayOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(/* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7));
      });
    });

    describe("when the given day is the start of a week", () => {
      it("it returns the last day of a week", () => {
        const date = /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8);
        const result = lastDayOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(/* 1393/7/22 */ new Date(2014, 9 /* Oct */, 14));
      });
    });

    describe("when the given day is after the start of a week", () => {
      it("it returns the last day of a week", () => {
        const date = /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10);
        const result = lastDayOfWeek(date, { weekStartsOn: 3 });
        expect(result).toEqual(/* 1393/7/22 */ new Date(2014, 9 /* Oct */, 14));
      });
    });

    it("handles the week at the end of a year", () => {
      const date = /* 1393/10/8 */ new Date(2014, 11 /* Dec */, 29);
      const result = lastDayOfWeek(date, { weekStartsOn: 5 });
      expect(result).toEqual(/* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1));
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfWeek(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = lastDayOfWeek(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = lastDayOfWeek(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        lastDayOfWeek(/* 1403/6/11 */ "2024-09-01T15:00:00Z", {
          weekStartsOn: 1,
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/6/11 */ "2024-09-01T00:00:00.000+08:00");
      expect(
        lastDayOfWeek(/* 1403/6/11 */ "2024-09-01T16:00:00Z", {
          weekStartsOn: 1,
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/6/18 */ "2024-09-08T00:00:00.000+08:00");
      expect(
        lastDayOfWeek(/* 1403/6/12 */ "2024-09-02T03:00:00Z", {
          weekStartsOn: 1,
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/6/11 */ "2024-09-01T00:00:00.000-04:00");
      expect(
        lastDayOfWeek(/* 1403/6/12 */ "2024-09-02T04:00:00Z", {
          weekStartsOn: 1,
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/6/18 */ "2024-09-08T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = lastDayOfWeek(/* 1393/6/10 */ "2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
