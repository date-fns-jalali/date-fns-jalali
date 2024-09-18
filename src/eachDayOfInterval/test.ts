import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { eachDayOfInterval } from "./index.js";

describe("eachDayOfInterval", () => {
  it("returns an array with starts of days from the day of the start date to the day of the end date", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    });
    expect(result).toEqual([
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6).getTime(),
      end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12).getTime(),
    });
    expect(result).toEqual([
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12, 22, 15),
    });
    expect(result).toEqual([
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("returns one day if the both arguments are on the same day", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    });
    expect(result).toEqual([/* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6)]);
  });

  it("returns one day if the both arguments are the same", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([/* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      end: /* 1393/7/21 */ new Date(2014, 9 /* Oct */, 13),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachDayOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
        /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
        /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachDayOfInterval(
        {
          start: /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
          end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
        /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
        /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachDayOfInterval(
        {
          start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
          end: /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
        },
        { step: -1 },
      );
      expect(result).toEqual([
        /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
        /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
        /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachDayOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachDayOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });

  it("resolves the date type by default", () => {
    const result = eachDayOfInterval({
      start: Date.now(),
      end: Date.now(),
    });
    expect(result[0]).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date[], typeof result>>(true);
  });

  it("resolves the start date object type", () => {
    const result = eachDayOfInterval({
      start: new TZDate(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(TZDate);
    assertType<assertType.Equal<TZDate[], typeof result>>(true);
  });

  it("resolves the end date object type if the start isn't object", () => {
    const result = eachDayOfInterval({
      start: Date.now(),
      end: new UTCDate(),
    });
    expect(result[0]).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate[], typeof result>>(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1402/10/10 */ new TZDate(
      2023,
      11,
      31,
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
      eachDayOfInterval({ start: dateLeft, end: dateRight }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([
      /* 1402/10/10 */ "2023-12-31T00:00:00.000+08:00",
      /* 1402/10/11 */ "2024-01-01T00:00:00.000+08:00",
    ]);
    expect(
      eachDayOfInterval({ start: dateRight, end: dateLeft }).map((d) =>
        d.toISOString(),
      ),
    ).toEqual([/* 1402/10/10 */ "2023-12-31T00:00:00.000-05:00"]);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      eachDayOfInterval({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: /* 1403/1/22 */ "2024-04-10T07:00:00Z",
        end: /* 1403/1/24 */ "2024-04-12T07:00:00Z",
      };
      expect(
        eachDayOfInterval(interval, { in: tz("America/Los_Angeles") }).map(
          (date) => date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/22 */ "2024-04-10T00:00:00.000-07:00",
        /* 1403/1/23 */ "2024-04-11T00:00:00.000-07:00",
        /* 1403/1/24 */ "2024-04-12T00:00:00.000-07:00",
      ]);
      expect(
        eachDayOfInterval(interval, { in: tz("Asia/Singapore") }).map((date) =>
          date.toISOString(),
        ),
      ).toEqual([
        /* 1403/1/22 */ "2024-04-10T00:00:00.000+08:00",
        /* 1403/1/23 */ "2024-04-11T00:00:00.000+08:00",
        /* 1403/1/24 */ "2024-04-12T00:00:00.000+08:00",
      ]);
    });

    it("resolves the context date type", () => {
      const interval = {
        start: new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z"),
        end: new Date(/* 1393/6/14 */ "2014-09-05T00:00:00Z"),
      };
      const result = eachDayOfInterval(interval, {
        in: tz("Asia/Tokyo"),
      });
      expect(result[0]).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate[], typeof result>>(true);
    });
  });
});
