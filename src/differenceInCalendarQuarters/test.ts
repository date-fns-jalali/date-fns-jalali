import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInCalendarQuarters } from "./index.js";

describe("differenceInCalendarQuarters", () => {
  it("returns the number of calendar quarters between the given dates", () => {
    const result = differenceInCalendarQuarters(
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(4);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarQuarters(
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-4);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarQuarters(
      /* 1393/7/10 */ new Date(2014, 9 /* Oct */, 2).getTime(),
      /* 1389/4/11 */ new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(17);
  });

  describe("edge cases", () => {
    it("the difference is less than a quarter, but the given dates are in different calendar quarters", () => {
      const result = differenceInCalendarQuarters(
        /* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23),
        /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarQuarters(
        /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22),
        /* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23),
      );
      expect(result).toBe(-1);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInCalendarQuarters(
        /* 1393/1/17 */ new Date(2014, 3 /* Apr */, 6),
        /* 1392/10/16 */ new Date(2014, 0 /* Jan */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInCalendarQuarters(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarQuarters(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarQuarters(
      new Date(NaN),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarQuarters(
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarQuarters(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInCalendarQuarters(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1403/4/1 */ new TZDate(2024, 5, 21, "Asia/Singapore");
    const dateRight = /* 1402/12/1 */ new TZDate(
      2024,
      1,
      20,
      "America/New_York",
    );
    expect(differenceInCalendarQuarters(dateLeft, dateRight)).toBe(2);
    expect(differenceInCalendarQuarters(dateRight, dateLeft)).toBe(-1);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInCalendarQuarters(
          /* 1403/1/13 */ "2024-04-01T03:00:00Z",
          /* 1402/10/11 */ "2024-01-01T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(1);
      expect(
        differenceInCalendarQuarters(
          /* 1403/4/1 */ "2024-06-21T04:00:00Z",
          /* 1403/1/1 */ "2024-03-20T00:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(2);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInCalendarQuarters(arg1, arg2, { in: options?.in });
      }
    });
  });
});
