import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { lastDayOfMonth } from "./index.js";

describe("lastDayOfMonth", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a month", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfMonth(date);
    expect(result).toEqual(/* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30));
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/5/11 */ new Date(
      2014,
      7 /* Aug */,
      2,
      11,
      55,
      0,
    ).getTime();
    const result = lastDayOfMonth(date);
    expect(result).toEqual(/* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfMonth(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  describe("edge cases", () => {
    it("works for the February of a leap year", () => {
      const date = /* 1390/11/22 */ new Date(2012, 1 /* Feb */, 11, 11, 55, 0);
      const result = lastDayOfMonth(date);
      expect(result).toEqual(/* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29));
    });

    it("works for the February of a non-leap year", () => {
      const date = /* 1392/11/22 */ new Date(2014, 1 /* Feb */, 11, 11, 55, 0);
      const result = lastDayOfMonth(date);
      expect(result).toEqual(/* 1392/12/9 */ new Date(2014, 1 /* Feb */, 28));
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfMonth(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = lastDayOfMonth(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = lastDayOfMonth(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = /* 1402/5/27 */ "2023-08-18T15:00:00Z";
      const result = lastDayOfMonth(date, { in: tz("Asia/Singapore") });
      expect(result.toISOString()).toBe(
        /* 1402/6/9 */ "2023-08-31T00:00:00.000+08:00",
      );
    });

    it("resolves the context date type", () => {
      const result = lastDayOfMonth(Date.now(), { in: tz("Asia/Singapore") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
