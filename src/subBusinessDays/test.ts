import { describe, expect, it } from "vitest";
import { subBusinessDays } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";

describe("subBusinessDays", () => {
  it("subtract the given number of business days", () => {
    const result = subBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      12,
    );
    expect(result).toEqual(/* 1393/5/27 */ new Date(2014, 7 /* Aug */, 18));
  });

  it("handles negative amount", () => {
    const result = subBusinessDays(
      /* 1393/5/27 */ new Date(2014, 7 /* Aug */, 18),
      -12,
    );
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("can handle a large number of business days", () => {
    const result = subBusinessDays(
      /* 14378/10/12 */ new Date(15000, 0 /* Jan */, 1),
      (3387885 * 6) / 5,
    );
    expect(result).toEqual(/* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1));
  });

  it("accepts a timestamp", () => {
    const result = subBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      12,
    );
    expect(result).toEqual(/* 1393/5/27 */ new Date(2014, 7 /* Aug */, 18));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    subBusinessDays(date, 11);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subBusinessDays(new Date(NaN), 10);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = subBusinessDays(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = subBusinessDays(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        subBusinessDays(/* 1403/5/30 */ "2024-08-20T15:00:00Z", 3, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/5/27 */ "2024-08-17T23:00:00.000+08:00");
      expect(
        subBusinessDays(/* 1403/5/30 */ "2024-08-20T16:00:00Z", 3, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/5/28 */ "2024-08-18T00:00:00.000+08:00");
      expect(
        subBusinessDays(new Date(/* 1403/5/31 */ "2024-08-21T03:00:00Z"), 3, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/5/27 */ "2024-08-17T23:00:00.000-04:00");
      expect(
        subBusinessDays(new Date(/* 1403/5/31 */ "2024-08-21T04:00:00Z"), 3, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/5/28 */ "2024-08-18T00:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z");
      const result = subBusinessDays(date, 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
