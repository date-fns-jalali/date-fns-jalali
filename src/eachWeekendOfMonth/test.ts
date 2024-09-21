import { describe, expect, it } from "vitest";
import { eachWeekendOfMonth } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("eachWeekendOfMonth", () => {
  it("returns all weekends of the given month", () => {
    const result = eachWeekendOfMonth(/* 1400/11/20 */ new Date(2022, 1, 9));
    expect(result).toEqual([
      /* 1400/11/1 */ new Date(2022, 0, 21),
      /* 1400/11/8 */ new Date(2022, 0, 28),
      /* 1400/11/15 */ new Date(2022, 1, 4),
      /* 1400/11/22 */ new Date(2022, 1, 11),
      /* 1400/11/29 */ new Date(2022, 1, 18),
    ]);
  });

  it("returns an empty array when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfMonth(new Date(NaN));
    expect(result).toEqual([]);
  });

  it("resolves the date type by default", () => {
    const result = eachWeekendOfMonth(Date.now());
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, (typeof result)[0]>>(true);
  });

  it("resolves the context date type", () => {
    const result = eachWeekendOfMonth(new UTCDate());
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, (typeof result)[0]>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        eachWeekendOfMonth(/* 1403/1/13 */ "2024-04-01T07:00:00Z", {
          in: tz("Asia/Tokyo"),
        }).map((date) => date.toISOString()),
      ).toEqual([
        /* 1403/1/3 */ "2024-03-22T00:00:00.000+09:00",
        /* 1403/1/10 */ "2024-03-29T00:00:00.000+09:00",
        /* 1403/1/17 */ "2024-04-05T00:00:00.000+09:00",
        /* 1403/1/24 */ "2024-04-12T00:00:00.000+09:00",
        /* 1403/1/31 */ "2024-04-19T00:00:00.000+09:00",
      ]);
      expect(
        eachWeekendOfMonth(/* 1403/1/13 */ "2024-04-01T07:00:00Z", {
          in: tz("America/New_York"),
        }).map((date) => date.toISOString()),
      ).toEqual([
        /* 1403/1/3 */ "2024-03-22T00:00:00.000-04:00",
        /* 1403/1/10 */ "2024-03-29T00:00:00.000-04:00",
        /* 1403/1/17 */ "2024-04-05T00:00:00.000-04:00",
        /* 1403/1/24 */ "2024-04-12T00:00:00.000-04:00",
        /* 1403/1/31 */ "2024-04-19T00:00:00.000-04:00",
      ]);
    });

    it("resolves the context date type", () => {
      const result = eachWeekendOfMonth(
        new Date(/* 1403/1/13 */ "2024-04-01T00:00:00Z"),
        {
          in: tz("Asia/Tokyo"),
        },
      );
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, (typeof result)[0]>>(true);
    });
  });
});
