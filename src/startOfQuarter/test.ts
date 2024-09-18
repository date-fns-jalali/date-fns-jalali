import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { startOfQuarter } from "./index.js";

describe("startOfQuarter", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a quarter", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfQuarter(date);
    expect(result).toEqual(/* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22));
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
    const result = startOfQuarter(date);
    expect(result).toEqual(/* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    startOfQuarter(date);
    expect(date).toEqual(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfQuarter(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfQuarter(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfQuarter(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = /* 1400/11/30 */ new Date(2022, 1 /* Feb */, 19);
      const context = { in: tz("America/New_York") };
      const result = startOfQuarter(date, context);
      expect(result.toISOString()).toEqual(
        /* 1400/10/1 */ "2021-12-22T00:00:00.000-05:00",
      );
    });

    it("resolves the context date type", () => {
      const date = /* 1400/11/30 */ new Date(2022, 1 /* Feb */, 19);
      const context = { in: tz("America/New_York") };
      const result = startOfQuarter(date, context);
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
