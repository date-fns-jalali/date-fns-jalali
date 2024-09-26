import { describe, expect, it } from "vitest";
import { eachWeekendOfYear } from "./index.js";
import { isWeekend } from "../isWeekend/index.js";
import { tz, TZDate } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("eachWeekendOfYear", () => {
  it("returns all weekends of the given year", () => {
    const result = eachWeekendOfYear(/* 1398/10/11 */ new Date(2020, 0, 1));
    expect(result.length).toBe(52);
    expect(result.every((date) => isWeekend(date))).toBe(true);
    expect(result[0]).toEqual(/* 1398/1/2 */ new Date(2019, 2, 22));
    expect(result[51]).toEqual(/* 1398/12/23 */ new Date(2020, 2, 13));
  });

  it("returns an empty array when the given date is `Invalid Date`", () => {
    const result = eachWeekendOfYear(new Date(NaN));
    expect(result).toEqual([]);
  });

  it("resolves the date type by default", () => {
    const result = eachWeekendOfYear(Date.now());
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, (typeof result)[0]>>(true);
  });

  it("resolves the context date type", () => {
    const result = eachWeekendOfYear(new UTCDate());
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, (typeof result)[0]>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        eachWeekendOfYear(/* 1403/1/13 */ "2024-04-01T07:00:00Z", {
          in: tz("Asia/Tokyo"),
        })
          .slice(0, 7)
          .map((date) => date.toISOString()),
      ).toEqual([
        /* 1403/1/3 */ "2024-03-22T00:00:00.000+09:00",
        /* 1403/1/10 */ "2024-03-29T00:00:00.000+09:00",
        /* 1403/1/17 */ "2024-04-05T00:00:00.000+09:00",
        /* 1403/1/24 */ "2024-04-12T00:00:00.000+09:00",
        /* 1403/1/31 */ "2024-04-19T00:00:00.000+09:00",
        /* 1403/2/7 */ "2024-04-26T00:00:00.000+09:00",
        /* 1403/2/14 */ "2024-05-03T00:00:00.000+09:00",
      ]);
      expect(
        eachWeekendOfYear(/* 1403/1/13 */ "2024-04-01T07:00:00Z", {
          in: tz("America/New_York"),
        })
          .slice(0, 7)
          .map((date) => date.toISOString()),
      ).toEqual([
        /* 1403/1/3 */ "2024-03-22T00:00:00.000-04:00",
        /* 1403/1/10 */ "2024-03-29T00:00:00.000-04:00",
        /* 1403/1/17 */ "2024-04-05T00:00:00.000-04:00",
        /* 1403/1/24 */ "2024-04-12T00:00:00.000-04:00",
        /* 1403/1/31 */ "2024-04-19T00:00:00.000-04:00",
        /* 1403/2/7 */ "2024-04-26T00:00:00.000-04:00",
        /* 1403/2/14 */ "2024-05-03T00:00:00.000-04:00",
      ]);
    });

    it("resolves the context date type", () => {
      const result = eachWeekendOfYear(
        new Date(/* 1402/10/11 */ "2024-01-01T00:00:00Z"),
        {
          in: tz("Asia/Tokyo"),
        },
      );
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
