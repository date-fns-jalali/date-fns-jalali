import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInMonths } from "./index.js";

describe("differenceInMonths", () => {
  it("returns the number of full months between the given dates", () => {
    const result = differenceInMonths(
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(12);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInMonths(
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-12);
  });

  it("accepts timestamps", () => {
    const result = differenceInMonths(
      /* 1393/5/11 */ new Date(2014, 7 /* Aug */, 2).getTime(),
      /* 1389/4/11 */ new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(49);
  });

  describe("edge cases", () => {
    it("it returns diff of 1 month between Feb 28 2021 and Jan 30 2021", () => {
      const result = differenceInMonths(
        /* 1399/12/10 */ new Date(2021, 1 /* Feb */, 28),
        /* 1399/11/11 */ new Date(2021, 0 /* Jan */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Feb 28 2021 and Jan 31 2021", () => {
      const result = differenceInMonths(
        /* 1399/12/10 */ new Date(2021, 1 /* Feb */, 28),
        /* 1399/11/12 */ new Date(2021, 0 /* Jan */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Nov, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        /* 1400/9/9 */ new Date(2021, 10 /* Nov */, 30),
        /* 1400/8/9 */ new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 1 month between Oct, 31 2021 and Sep, 30 2021", () => {
      const result = differenceInMonths(
        /* 1400/8/9 */ new Date(2021, 9 /* Oct */, 31),
        /* 1400/7/8 */ new Date(2021, 8 /* Sep */, 30),
      );
      expect(result).toBe(1);
    });

    it("it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021", () => {
      const result = differenceInMonths(
        /* 1400/8/9 */ new Date(2021, 9 /* Oct */, 31),
        /* 1400/2/10 */ new Date(2021, 3 /* Apr */, 30),
      );
      expect(result).toBe(6);
    });

    it("it returns diff of -1 month between Sep, 30 2021 and Oct, 31 2021", () => {
      const result = differenceInMonths(
        /* 1400/7/8 */ new Date(2021, 8 /* Sep */, 30),
        /* 1400/8/9 */ new Date(2021, 9 /* Oct */, 31),
      );
      expect(result).toBe(-1);
    });

    it("the difference is less than a month, but the given dates are in different calendar months", () => {
      const result = differenceInMonths(
        /* 1393/5/10 */ new Date(2014, 7 /* Aug */, 1),
        /* 1393/5/9 */ new Date(2014, 6 /* Jul */, 31),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInMonths(
        /* 1393/5/9 */ new Date(2014, 6 /* Jul */, 31),
        /* 1393/5/10 */ new Date(2014, 7 /* Aug */, 1),
      );
      expect(result).toBe(0);
    });

    it("the days of months of the given dates are the same", () => {
      const result = differenceInMonths(
        /* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6),
        /* 1393/5/15 */ new Date(2014, 7 /* Aug */, 6),
      );
      expect(result).toBe(1);
    });

    it("the given dates are the same", () => {
      const result = differenceInMonths(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInMonths(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInMonths(
      new Date(NaN),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInMonths(
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if both dates are `Invalid Date`", () => {
    const result = differenceInMonths(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1403/10/12 */ new TZDate(2025, 0, 1, "Asia/Singapore");
    const dateRight = /* 1402/10/11 */ new TZDate(
      2024,
      0,
      1,
      "America/New_York",
    );
    expect(differenceInMonths(dateLeft, dateRight)).toBe(11);
    expect(differenceInMonths(dateRight, dateLeft)).toBe(-11);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInMonths(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInMonths(
          /* 1402/12/11 */ "2024-03-01T00:00:00Z",
          /* 1402/10/11 */ "2024-01-01T05:00:00Z",
          {
            in: tz("America/New_York"),
          },
        ),
      ).toBe(1);
      expect(
        differenceInMonths(
          /* 1402/12/11 */ "2024-03-01T00:00:00Z",
          /* 1402/10/11 */ "2024-01-01T00:00:00Z",
          {
            in: tz("America/New_York"),
          },
        ),
      ).toBe(2);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ContextDate extends Date>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ContextDate>,
      ) {
        differenceInMonths(arg1, arg2, { in: options?.in });
      }
    });
  });
});
