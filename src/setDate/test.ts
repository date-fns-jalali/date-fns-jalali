import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setDate } from "./index.js";

describe("setDate", () => {
  it("sets the day of the month", () => {
    const result = setDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 30);
    expect(result).toEqual(/* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21));
  });

  it("accepts a timestamp", () => {
    const result = setDate(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      25,
    );
    expect(result).toEqual(/* 1393/6/25 */ new Date(2014, 8 /* Sep */, 16));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    setDate(date, 20);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDate(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setDate(Date.now(), 5);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setDate(new UTCDate(), 5);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setDate(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 15, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/15 */ "2024-04-03T15:00:00.000+08:00");
      expect(
        setDate(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 20, {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe(/* 1403/1/20 */ "2024-04-08T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z");
      const result = setDate(date, 15, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
