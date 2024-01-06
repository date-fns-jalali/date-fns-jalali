import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachQuarterOfInterval } from "./index.js";

describe("eachQuarterOfInterval", () => {
  it("returns an array with starts of quarters from the quarter of the start date to the quarter of the end date", () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
    });
    expect(result).toEqual([
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6).getTime(),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12).getTime(),
    });
    expect(result).toEqual([
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12, 22, 15),
    });
    expect(result).toEqual([
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ]);
  });

  it("handles the dates that are not containing days", () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/10 */ new Date(2014, 2 /* Mar */),
      end: /* 1393/5/10 */ new Date(2014, 7 /* Oct */),
    });
    expect(result).toEqual([
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ]);
  });

  it("returns one quarter if the both arguments are on the same quarter", () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/10/16 */ new Date(2014, 0 /* Jan */, 6, 14),
      end: /* 1392/12/18 */ new Date(2014, 2 /* Feb */, 9, 15),
    });
    expect(result).toEqual([/* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22)]);
  });

  it("returns one quarter if the both arguments are the same", () => {
    const result = eachQuarterOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([/* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachQuarterOfInterval({
      start: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
      end: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
    });
    expect(result).toEqual([
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachQuarterOfInterval({
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachQuarterOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachQuarterOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("resolves the date type by default", () => {
    const result = eachQuarterOfInterval({
      start: Date.now(),
      end: Date.now(),
    });
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const result = eachQuarterOfInterval({
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachQuarterOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1403/1/1 */ new TZDate(2024, 2, 20, "Asia/Singapore");
    const dateRight = /* 1403/3/31 */ new TZDate(
      2024,
      5,
      20,
      23,
      "America/New_York",
    );
    expect(
      eachQuarterOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      /* 1403/1/1 */ "2024-03-20T00:00:00.000+08:00",
      /* 1403/4/1 */ "2024-06-21T00:00:00.000+08:00",
    ]);
    expect(
      eachQuarterOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      /* 1403/1/1 */ "2024-03-20T00:00:00.000-04:00",
      /* 1402/10/1 */ "2023-12-22T00:00:00.000-05:00",
    ]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachQuarterOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: /* 1403/1/10 */ "2024-03-29T07:00:00Z",
        end: /* 1403/10/10 */ "2024-12-30T07:00:00Z",
      };
      expect(
        eachQuarterOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/1 */ "2024-03-20T00:00:00.000-07:00",
        /* 1403/4/1 */ "2024-06-21T00:00:00.000-07:00",
        /* 1403/7/1 */ "2024-09-22T00:00:00.000-07:00",
        /* 1403/10/1 */ "2024-12-21T00:00:00.000-08:00",
      ]);
      expect(
        eachQuarterOfInterval(interval, { in: tz("Asia/Singapore") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/1 */ "2024-03-20T00:00:00.000+08:00",
        /* 1403/4/1 */ "2024-06-21T00:00:00.000+08:00",
        /* 1403/7/1 */ "2024-09-22T00:00:00.000+08:00",
        /* 1403/10/1 */ "2024-12-21T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date(/* 1392/10/11 */ "2014-01-01T00:00:00Z"),
        end: new Date(/* 1393/10/10 */ "2014-12-31T23:59:59Z"),
      };
      const result = eachQuarterOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });

  describe("options.step", () => {
    const interval = {
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachQuarterOfInterval(interval, { step: 2 });
      expect(result).toEqual([
        /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
        /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachQuarterOfInterval(interval, { step: -2 });
      expect(result).toEqual([
        /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
        /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachQuarterOfInterval(
        { start: interval.end, end: interval.start },
        { step: -2 },
      );
      expect(result).toEqual([
        /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
        /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachQuarterOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachQuarterOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
