import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { addMonths } from "../addMonths/index.js";
import type { ContextOptions, Interval } from "../types.js";
import { intervalToDuration } from "./index.js";

describe("intervalToDuration", () => {
  it("returns correct duration for arbitrary dates", () => {
    const start = /* 1307/10/25 */ new Date(1929, 0, 15, 12, 0, 0);
    const end = /* 1347/1/15 */ new Date(1968, 3, 4, 19, 5, 0);
    const result = intervalToDuration({ start, end });

    expect(result).toEqual({
      years: 39,
      months: 2,
      days: 20,
      hours: 7,
      minutes: 5,
    });
  });

  it("returns correct duration (1 of everything)", () => {
    const start = /* 1398/2/11 */ new Date(2019, 4, 1, 12, 0, 0);
    const end = /* 1399/3/12 */ new Date(2020, 5, 1, 13, 1, 1);
    const result = intervalToDuration({ start, end });

    expect(result).toEqual({
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    });
  });

  it("returns duration of 0 when the dates are the same", () => {
    const start = /* 1398/12/11 */ new Date(2020, 2, 1, 12, 0, 0);
    const end = /* 1398/12/11 */ new Date(2020, 2, 1, 12, 0, 0);
    const result = intervalToDuration({ start, end });

    expect(result).toEqual({});
  });

  it("returns a negative duration if interval's start date is greater than its end date", () => {
    const interval = {
      start: /* 1399/3/1 */ new Date(2020, 4, 21),
      end: /* 1399/2/1 */ new Date(2020, 3, 20),
    };
    const result = intervalToDuration(interval);

    expect(result).toEqual({ months: -1 });
  });

  it("returns an empty object if interval's start date invalid", () => {
    const interval = {
      start: new Date(NaN),
      end: /* 1398/10/11 */ new Date(2020, 0, 1),
    };
    const result = intervalToDuration(interval);

    expect(result).toEqual({});
  });

  it("returns an empty object  if interval's end date invalid", () => {
    const interval = {
      start: /* 1398/10/11 */ new Date(2020, 0, 1),
      end: new Date(NaN),
    };
    const result = intervalToDuration(interval);

    expect(result).toEqual({});
  });

  describe("edge cases", () => {
    it("returns correct duration for dates in the end of Feb - issue 2255", () => {
      expect(
        intervalToDuration({
          start: /* 1390/12/9 */ new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
      ).toEqual({
        days: 1,
        hours: 1,
      });

      expect(
        intervalToDuration({
          start: /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 9, 0, 0),
          end: /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
      ).toEqual({
        hours: 1,
      });

      expect(
        intervalToDuration({
          start: /* 1390/12/9 */ new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: /* 1390/12/9 */ new Date(2012, 1 /* Feb */, 28, 10, 0, 0),
        }),
      ).toEqual({
        hours: 1,
      });

      // Issue 2261
      expect(
        intervalToDuration({
          start: /* 1399/12/10 */ new Date(2021, 1 /* Feb */, 28, 7, 23, 7),
          end: /* 1399/12/10 */ new Date(2021, 1 /* Feb */, 28, 7, 38, 18),
        }),
      ).toEqual({
        minutes: 15,
        seconds: 11,
      });
    });

    it("returns correct duration for end of month start dates - issue 2611", () => {
      const start = /* 1400/6/31 */ new Date(2021, 8, 22);
      const end = addMonths(start, 1);

      expect(end).toEqual(/* 1400/7/30 */ new Date(2021, 9, 22));

      const duration = intervalToDuration({ start, end });
      const expectedDuration = {
        months: 1,
      };

      expect(duration).toEqual(expectedDuration);
    });

    it("returns correct duration for Feb 29 on leap year + 1 month - issue 1778", () => {
      const duration = intervalToDuration({
        start: /* 1398/12/10 */ new Date(2020, 1, 29),
        end: /* 1399/1/10 */ new Date(2020, 2, 29),
      });
      const expectedDuration = {
        months: 1,
      };

      expect(duration).toEqual(expectedDuration);
    });

    it.skip("returns correct duration for Feb 28 to Apr 30 interval - issue 2910", () => {
      const duration = intervalToDuration({
        start: /* 1400/12/9 */ new Date(2022, 1, 28),
        end: /* 1401/2/10 */ new Date(2022, 3, 30),
      });
      const expectedDuration = {
        months: 2,
        days: 2,
      };

      expect(duration).toEqual(expectedDuration);
    });

    describe("issue 2470", () => {
      it.skip("returns correct duration for Feb 28 to Aug 31 interval", () => {
        const duration = intervalToDuration({
          start: /* 1399/12/10 */ new Date(2021, 1, 28),
          end: /* 1400/6/9 */ new Date(2021, 7, 31),
        });
        const expectedDuration = {
          months: 6,
          days: 3,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it.skip("returns correct duration for Feb 28 to Aug 30 interval", () => {
        const duration = intervalToDuration({
          start: /* 1399/12/10 */ new Date(2021, 1, 28),
          end: /* 1400/6/8 */ new Date(2021, 7, 30),
        });
        const expectedDuration = {
          months: 6,
          days: 2,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it.skip("returns correct duration for Feb 28 to Aug 29 interval", () => {
        const duration = intervalToDuration({
          start: /* 1399/12/10 */ new Date(2021, 1, 28),
          end: /* 1400/6/7 */ new Date(2021, 7, 29),
        });
        const expectedDuration = {
          months: 6,
          days: 1,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it.skip("returns correct duration for Feb 28 to Aug 28 interval", () => {
        const duration = intervalToDuration({
          start: /* 1399/12/10 */ new Date(2021, 1, 28),
          end: /* 1400/6/6 */ new Date(2021, 7, 28),
        });
        const expectedDuration = {
          months: 6,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it.skip("returns correct duration for Feb 28 to Aug 27 interval", () => {
        // Feb 28 to July 28 is 5 months, July 28 to Aug 27 is 30 days

        const duration = intervalToDuration({
          start: /* 1399/12/10 */ new Date(2021, 1, 28),
          end: /* 1400/6/5 */ new Date(2021, 7, 27),
        });
        const expectedDuration = {
          months: 5,
          days: 30,
        };

        expect(duration).toEqual(expectedDuration);
      });

      it.skip("returns correct duration for Apr 30 to May 31 interval", () => {
        const duration = intervalToDuration({
          start: /* 1400/2/10 */ new Date(2021, 3, 30),
          end: /* 1400/3/10 */ new Date(2021, 4, 31),
        });
        const expectedDuration = {
          months: 1,
          days: 1,
        };

        expect(duration).toEqual(expectedDuration);
      });
    });
  });

  it("normalizes the dates", () => {
    const laterDate = /* 1405/6/11 */ new TZDate(2026, 8, 2, "Asia/Singapore");
    const earlierDate = /* 1402/6/11 */ new TZDate(
      2023,
      8,
      2,
      "America/New_York",
    );
    expect(intervalToDuration({ start: laterDate, end: earlierDate })).toEqual({
      days: -30,
      hours: -12,
      months: -11,
      years: -2,
    });
    expect(intervalToDuration({ start: earlierDate, end: laterDate })).toEqual({
      days: 30,
      hours: 12,
      months: 11,
      years: 2,
    });
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      intervalToDuration({ start, end });
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        intervalToDuration(
          {
            start: new Date(/* 1402/6/12 */ "2023-09-03T00:00:00Z"),
            end: new Date(/* 1403/6/12 */ "2024-09-02T15:00:00Z"),
          },
          { in: tz("Asia/Singapore") },
        ),
      ).toEqual({
        years: 1,
        hours: 15,
      });
      expect(
        intervalToDuration(
          {
            start: new Date(/* 1402/6/12 */ "2023-09-03T00:00:00Z"),
            end: new Date(/* 1403/6/12 */ "2024-09-02T15:00:00Z"),
          },
          { in: tz("America/New_York") },
        ),
      ).toEqual({
        years: 1,
        hours: 15,
      });
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: Interval<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        intervalToDuration(arg, { in: options?.in });
      }
    });
  });
});
