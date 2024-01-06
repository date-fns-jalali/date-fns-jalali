import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachMonthOfInterval } from "./index.js";

describe("eachMonthOfInterval", () => {
  it("returns an array with starts of months from the month of the start date to the month of the end date", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6).getTime(),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12).getTime(),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12, 22, 15),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("handles the dates that are not containing days", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/10 */ new Date(2014, 2 /* Mar */),
      end: /* 1393/5/10 */ new Date(2014, 7 /* Aug */),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("returns one month if the both arguments are on the same month", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9, 15),
    });
    expect(result).toEqual([/* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23)]);
  });

  it("returns one month if the both arguments are the same", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([/* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
      end: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
    });
    expect(result).toEqual([
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachMonthOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
        /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachMonthOfInterval(interval, { step: -3 });
      expect(result).toEqual([
        /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
        /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachMonthOfInterval(
        { start: interval.end, end: interval.start },
        { step: -3 },
      );
      expect(result).toEqual([
        /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
        /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachMonthOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachMonthOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });

  it("resolves the date type by default", () => {
    const result = eachMonthOfInterval({
      start: Date.now(),
      end: Date.now(),
    });
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const result = eachMonthOfInterval({
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachMonthOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1402/10/1 */ new TZDate(
      2023,
      11,
      22,
      12,
      "Asia/Singapore",
    );
    const dateRight = /* 1403/3/31 */ new TZDate(
      2024,
      5,
      20,
      12,
      "America/New_York",
    );
    expect(
      eachMonthOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      /* 1402/10/1 */ "2023-12-22T00:00:00.000+08:00",
      /* 1402/11/1 */ "2024-01-21T00:00:00.000+08:00",
      /* 1402/12/1 */ "2024-02-20T00:00:00.000+08:00",
      /* 1403/1/1 */ "2024-03-20T00:00:00.000+08:00",
      /* 1403/2/1 */ "2024-04-20T00:00:00.000+08:00",
      /* 1403/3/1 */ "2024-05-21T00:00:00.000+08:00",
      /* 1403/4/1 */ "2024-06-21T00:00:00.000+08:00",
    ]);
    expect(
      eachMonthOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      /* 1403/3/1 */ "2024-05-21T00:00:00.000-04:00",
      /* 1403/2/1 */ "2024-04-20T00:00:00.000-04:00",
      /* 1403/1/1 */ "2024-03-20T00:00:00.000-04:00",
      /* 1402/12/1 */ "2024-02-20T00:00:00.000-05:00",
      /* 1402/11/1 */ "2024-01-21T00:00:00.000-05:00",
      /* 1402/10/1 */ "2023-12-22T00:00:00.000-05:00",
      /* 1402/9/1 */ "2023-11-22T00:00:00.000-05:00",
    ]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachMonthOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: /* 1403/1/22 */ "2024-04-10T07:00:00Z",
        end: /* 1403/5/22 */ "2024-08-12T07:00:00Z",
      };
      expect(
        eachMonthOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/1 */ "2024-03-20T00:00:00.000-07:00",
        /* 1403/2/1 */ "2024-04-20T00:00:00.000-07:00",
        /* 1403/3/1 */ "2024-05-21T00:00:00.000-07:00",
        /* 1403/4/1 */ "2024-06-21T00:00:00.000-07:00",
        /* 1403/5/1 */ "2024-07-22T00:00:00.000-07:00",
      ]);
      expect(
        eachMonthOfInterval(interval, { in: tz("Asia/Singapore") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/1 */ "2024-03-20T00:00:00.000+08:00",
        /* 1403/2/1 */ "2024-04-20T00:00:00.000+08:00",
        /* 1403/3/1 */ "2024-05-21T00:00:00.000+08:00",
        /* 1403/4/1 */ "2024-06-21T00:00:00.000+08:00",
        /* 1403/5/1 */ "2024-07-22T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z"),
        end: new Date(/* 1393/6/14 */ "2014-09-05T00:00:00Z"),
      };
      const result = eachMonthOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
