import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { startOfMinute } from "./index.js";

describe("startOfMinute", () => {
  it("returns the date with the time set to the first millisecond of a minute", () => {
    const date = /* 1393/9/10 */ new Date(
      2014,
      11 /* Dec */,
      1,
      22,
      15,
      45,
      400,
    );
    const result = startOfMinute(date);
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1, 22, 15),
    );
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/9/10 */ new Date(
      2014,
      11 /* Dec */,
      1,
      22,
      15,
    ).getTime();
    const result = startOfMinute(date);
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1, 22, 15),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/9/10 */ new Date(
      2014,
      11 /* Dec */,
      1,
      22,
      15,
      45,
      400,
    );
    startOfMinute(date);
    expect(date).toEqual(
      /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1, 22, 15, 45, 400),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfMinute(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = startOfMinute(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = startOfMinute(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        startOfMinute(/* 1403/1/22 */ "2024-04-10T07:12:34.567Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/22 */ "2024-04-10T15:12:00.000+08:00");
      expect(
        startOfMinute(/* 1403/1/22 */ "2024-04-10T07:12:34.567Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/1/22 */ "2024-04-10T03:12:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z");
      const result = startOfMinute(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
