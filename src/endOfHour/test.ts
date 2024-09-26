import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { endOfHour } from "./index.js";

describe("endOfHour", () => {
  it("returns the date with the time set to the last millisecond before an hour ends", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    const result = endOfHour(date);
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 59, 59, 999),
    );
  });

  it("accepts a timestamp", () => {
    const result = endOfHour(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15).getTime(),
    );
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    endOfHour(date);
    expect(date).toEqual(/* 1393/9/10 */ new Date(2014, 11, 1, 22, 15));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfHour(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = endOfHour(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = endOfHour(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        endOfHour(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/22 */ "2024-04-10T15:59:59.999+08:00");
      expect(
        endOfHour(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe(/* 1403/1/22 */ "2024-04-10T00:59:59.999-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(/* 1403/1/22 */ "2024-04-10T07:00:00Z");
      const result = endOfHour(date, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
