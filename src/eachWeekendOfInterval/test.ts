import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { subWeeks } from "../subWeeks/index.js";
import { eachWeekendOfInterval } from "./index.js";

describe("eachWeekendOfInterval", () => {
  it("returns all weekends within the interval", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/6/26 */ new Date(2018, 8 /* Sept */, 17),
      end: /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
    });
    expect(result).toEqual([
      /* 1397/6/31 */ new Date(2018, 8 /* Sept */, 22),
      /* 1397/7/1 */ new Date(2018, 8 /* Sept */, 23),
      /* 1397/7/7 */ new Date(2018, 8 /* Sept */, 29),
      /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
    ]);
  });

  it("returns all weekends within the interval when starting on a weekend", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/6/31 */ new Date(2018, 8 /* Sept */, 22),
      end: /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
    });
    expect(result).toEqual([
      /* 1397/6/31 */ new Date(2018, 8 /* Sept */, 22),
      /* 1397/7/1 */ new Date(2018, 8 /* Sept */, 23),
      /* 1397/7/7 */ new Date(2018, 8 /* Sept */, 29),
      /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
    ]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
      end: /* 1397/6/26 */ new Date(2018, 8 /* Sept */, 17),
    });
    expect(result).toEqual([
      /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
      /* 1397/7/7 */ new Date(2018, 8 /* Sept */, 29),
      /* 1397/7/1 */ new Date(2018, 8 /* Sept */, 23),
      /* 1397/6/31 */ new Date(2018, 8 /* Sept */, 22),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachWeekendOfInterval({
      start: new Date(NaN),
      end: /* 1398/10/10 */ new Date(2019, 11 /* Dec */, 31),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/10/11 */ new Date(2019, 0 /* Jan */, 1),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachWeekendOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("resolves the date type by default", () => {
    const interval = {
      start: +new Date(/* 1402/10/11 */ "2024-01-01T00:00:00Z"),
      end: +new Date(/* 1403/10/11 */ "2024-12-31T23:59:59Z"),
    };
    const result = eachWeekendOfInterval(interval);
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const interval = {
      start: /* 1403/2/29 */ new TZDate(2024, 4, 18, 0, "Asia/Singapore"),
      end: new UTCDate(2024, 4, 28, 0, 0),
    };
    const result = eachWeekendOfInterval(interval);
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachWeekendOfInterval({
      start: +subWeeks(Date.now(), 2),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1402/9/28 */ new TZDate(
      2023,
      11,
      19,
      23,
      "Asia/Singapore",
    );
    const dateRight = /* 1402/10/10 */ new TZDate(
      2023,
      11,
      31,
      12,
      "America/New_York",
    );
    expect(
      eachWeekendOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      /* 1402/10/2 */ "2023-12-23T00:00:00.000+08:00",
      /* 1402/10/3 */ "2023-12-24T00:00:00.000+08:00",
      /* 1402/10/9 */ "2023-12-30T00:00:00.000+08:00",
      /* 1402/10/10 */ "2023-12-31T00:00:00.000+08:00",
    ]);
    expect(
      eachWeekendOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      /* 1402/10/10 */ "2023-12-31T00:00:00.000-05:00",
      /* 1402/10/9 */ "2023-12-30T00:00:00.000-05:00",
      /* 1402/10/3 */ "2023-12-24T00:00:00.000-05:00",
      /* 1402/10/2 */ "2023-12-23T00:00:00.000-05:00",
    ]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachWeekendOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: /* 1403/1/13 */ "2024-04-01T00:00:00Z",
        end: /* 1403/2/11 */ "2024-04-30T23:59:59Z",
      };
      expect(
        eachWeekendOfInterval(interval, { in: tz("America/New_York") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/12 */ "2024-03-31T00:00:00.000-04:00",
        /* 1403/1/18 */ "2024-04-06T00:00:00.000-04:00",
        /* 1403/1/19 */ "2024-04-07T00:00:00.000-04:00",
        /* 1403/1/25 */ "2024-04-13T00:00:00.000-04:00",
        /* 1403/1/26 */ "2024-04-14T00:00:00.000-04:00",
        /* 1403/2/1 */ "2024-04-20T00:00:00.000-04:00",
        /* 1403/2/2 */ "2024-04-21T00:00:00.000-04:00",
        /* 1403/2/8 */ "2024-04-27T00:00:00.000-04:00",
        /* 1403/2/9 */ "2024-04-28T00:00:00.000-04:00",
      ]);
      expect(
        eachWeekendOfInterval(interval, { in: tz("Asia/Singapore") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/18 */ "2024-04-06T00:00:00.000+08:00",
        /* 1403/1/19 */ "2024-04-07T00:00:00.000+08:00",
        /* 1403/1/25 */ "2024-04-13T00:00:00.000+08:00",
        /* 1403/1/26 */ "2024-04-14T00:00:00.000+08:00",
        /* 1403/2/1 */ "2024-04-20T00:00:00.000+08:00",
        /* 1403/2/2 */ "2024-04-21T00:00:00.000+08:00",
        /* 1403/2/8 */ "2024-04-27T00:00:00.000+08:00",
        /* 1403/2/9 */ "2024-04-28T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date(/* 1403/6/11 */ "2024-09-01T00:00:00Z"),
        end: new Date(/* 1403/7/9 */ "2024-09-30T00:00:00Z"),
      };
      const result = eachWeekendOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
