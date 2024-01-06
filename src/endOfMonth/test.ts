import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfMonth } from "./index.js";

describe("endOfMonth", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a month", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfMonth(date);
    expect(result).toEqual(
      /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22, 23, 59, 59, 999),
    );
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
    const result = endOfMonth(date);
    expect(result).toEqual(
      /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22, 23, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfMonth(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  describe("edge cases", () => {
    it("works for last month in year", () => {
      const date = /* 1393/12/10 */ new Date(2015, 2 /* Mar */, 1, 0, 0, 0);
      const result = endOfMonth(date);
      expect(result).toEqual(
        /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999),
      );
    });

    it("works for last day of month", () => {
      const date = /* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21);
      const result = endOfMonth(date);
      expect(result).toEqual(
        /* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21, 23, 59, 59, 999),
      );
    });
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfMonth(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfMonth(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfMonth(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfMonth(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/31 */ "2024-04-19T23:59:59.999+08:00");
      expect(
        endOfMonth(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe(/* 1403/1/31 */ "2024-04-19T23:59:59.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z");
      const result = endOfMonth(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
