import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { differenceInYears } from "./index.js";

describe("differenceInYears", () => {
  it("returns the number of full years between the given dates", () => {
    const result = differenceInYears(
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(1);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInYears(
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-1);
  });

  it("accepts timestamps", () => {
    const result = differenceInYears(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      /* 1389/4/11 */ new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(4);
  });

  describe("leap days", () => {
    it("supports past dates with right side after leap day", () => {
      const result = differenceInYears(
        /* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20, 0, 0),
        /* 1382/1/1 */ new Date(2003, 2 /* Mar */, 21, 0, 0),
      );
      expect(result).toBe(1);
    });

    it("supports past dates with right side before leap day", () => {
      const result = differenceInYears(
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
        /* 1380/12/9 */ new Date(2002, 1 /* Feb */, 28, 0, 0),
      );
      expect(result).toBe(2);
    });

    it("supports future dates", () => {
      const result = differenceInYears(
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
        /* 1384/12/10 */ new Date(2006, 2 /* Mar */, 1, 0, 0),
      );
      expect(result).toBe(-2);
    });

    it("supports equal dates of same year", () => {
      const result = differenceInYears(
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("supports equal dates of different years", () => {
      const result = differenceInYears(
        /* 1386/12/10 */ new Date(2008, 1 /* Feb */, 29, 0, 0),
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
      );
      expect(result).toBe(4);
    });
  });

  describe("edge cases", () => {
    it("the difference is less than a year, but the given dates are in different calendar years", () => {
      const result = differenceInYears(
        /* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1),
        /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      );
      expect(result).toBe(0);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInYears(
        /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
        /* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1),
      );
      expect(result).toBe(0);
    });

    it("the days and months of the given dates are the same", () => {
      const result = differenceInYears(
        /* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6),
        /* 1391/6/15 */ new Date(2012, 8 /* Sep */, 5),
      );
      expect(result).toBe(2);
    });

    it("the given dates are the same", () => {
      const result = differenceInYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInYears(
      new Date(NaN),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInYears(
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInYears(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1405/10/11 */ new TZDate(2027, 0, 1, "Asia/Singapore");
    const dateRight = /* 1402/10/11 */ new TZDate(
      2024,
      0,
      1,
      "America/New_York",
    );
    expect(differenceInYears(dateLeft, dateRight)).toBe(2);
    expect(differenceInYears(dateRight, dateLeft)).toBe(-2);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      differenceInYears(arg1, arg2);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        differenceInYears(
          /* 1403/10/12 */ "2025-01-01T00:00:00Z",
          /* 1402/10/11 */ "2024-01-01T00:00:00Z",
          {
            in: tz("America/New_York"),
          },
        ),
      ).toBe(1);
      expect(
        differenceInYears(
          /* 1403/10/12 */ "2025-01-01T00:00:00Z",
          /* 1402/10/11 */ "2024-01-01T00:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe(1);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        differenceInYears(arg1, arg2, { in: options?.in });
      }
    });
  });
});
