import { describe, expect, it } from "vitest";
import { endOfYear } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";

describe("endOfYear", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last day of a year", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfYear(date);
    expect(result).toEqual(
      /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999),
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
    const result = endOfYear(date);
    expect(result).toEqual(
      /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfYear(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfYear(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfYear(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const result = endOfYear(/* 1402/10/10 */ "2023-12-31T15:00:00Z", {
        in: tz("Asia/Singapore"),
      }).toISOString();
      expect(result).toBe(/* 1402/12/29 */ "2024-03-19T23:59:59.999+08:00");

      const resultLA = endOfYear(/* 1402/10/10 */ "2023-12-31T15:00:00Z", {
        in: tz("America/Los_Angeles"),
      }).toISOString();
      expect(resultLA).toBe(/* 1402/12/29 */ "2024-03-19T23:59:59.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(/* 1409/10/10 */ "2030-12-31T00:00:00Z");
      const result = endOfYear(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
