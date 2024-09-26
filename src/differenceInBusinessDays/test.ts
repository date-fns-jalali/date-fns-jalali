import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInBusinessDays } from "./index.js";

describe("differenceInBusinessDays", () => {
  it("returns the number of business days between the given dates, excluding weekends", () => {
    const result = differenceInBusinessDays(
      /* 1393/4/27 */ new Date(2014, 6 /* Jul */, 18),
      /* 1392/10/20 */ new Date(2014, 0 /* Jan */, 10),
    );
    expect(result).toBe(135);
  });

  it("can handle long ranges", () => {
    const result = differenceInBusinessDays(
      /* 14378/10/12 */ new Date(15000, 0 /* Jan */, 1),
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
    );
    expect(result).toBe(3387885);
  });

  it("the same except given first date falls on a weekend", () => {
    const result = differenceInBusinessDays(
      /* 1398/4/29 */ new Date(2019, 6 /* Jul */, 20),
      /* 1398/4/27 */ new Date(2019, 6 /* Jul */, 18),
    );
    expect(result).toBe(2);
  });

  it("the same except given second date falls on a weekend", () => {
    const result = differenceInBusinessDays(
      /* 1398/5/1 */ new Date(2019, 6 /* Jul */, 23),
      /* 1398/4/29 */ new Date(2019, 6 /* Jul */, 20),
    );
    expect(result).toBe(1);
  });

  it("the same except both given dates fall on a weekend", () => {
    const result = differenceInBusinessDays(
      /* 1398/5/6 */ new Date(2019, 6 /* Jul */, 28),
      /* 1398/4/29 */ new Date(2019, 6 /* Jul */, 20),
    );
    expect(result).toBe(5);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInBusinessDays(
      /* 1392/10/20 */ new Date(2014, 0 /* Jan */, 10),
      /* 1393/4/29 */ new Date(2014, 6 /* Jul */, 20),
    );
    expect(result).toBe(-135);
  });

  it("accepts timestamps", () => {
    const result = differenceInBusinessDays(
      /* 1393/4/27 */ new Date(2014, 6, 18).getTime(),
      /* 1392/10/20 */ new Date(2014, 0, 10).getTime(),
    );
    expect(result).toBe(135);
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1403/10/12 */ new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = /* 1402/10/11 */ new TZDate(
      2024,
      0,
      1,
      "America/New_York",
    );
    expect(differenceInBusinessDays(dateLeft, dateRight)).toBe(262);
    expect(differenceInBusinessDays(dateRight, dateLeft)).toBe(-261);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInBusinessDays(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInBusinessDays(
          /* 1403/1/22 */ "2024-04-10T02:00:00Z",
          /* 1403/1/19 */ "2024-04-07T02:00:00Z",
          { in: tz("America/New_York") },
        ),
      ).toBe(1);
      expect(
        differenceInBusinessDays(
          /* 1403/1/22 */ "2024-04-10T02:00:00Z",
          /* 1403/1/19 */ "2024-04-07T02:00:00Z",
          { in: tz("Asia/Singapore") },
        ),
      ).toBe(2);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ContextDate extends Date>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ContextDate>,
      ) {
        differenceInBusinessDays(arg1, arg2, { in: options?.in });
      }
    });
  });

  describe("edge cases", () => {
    it("the difference is less than a day, but the given dates are in different calendar days", () => {
      const result = differenceInBusinessDays(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 23, 59),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInBusinessDays(
        /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 23, 59),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(-1);
    });

    it("the time values of the given dates are the same", () => {
      const result = differenceInBusinessDays(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 0, 0),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInBusinessDays(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number) {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInBusinessDays(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });

    it("returns NaN if the first date is `Invalid Date`", () => {
      const result = differenceInBusinessDays(
        new Date(NaN),
        /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
      );
      expect(isNaN(result)).toBe(true);
    });

    it("returns NaN if the second date is `Invalid Date`", () => {
      const result = differenceInBusinessDays(
        /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
        new Date(NaN),
      );
      expect(isNaN(result)).toBe(true);
    });

    it("returns NaN if the both dates are `Invalid Date`", () => {
      const result = differenceInBusinessDays(new Date(NaN), new Date(NaN));
      expect(isNaN(result)).toBe(true);
    });
  });
});
