import { describe, expect, it } from "vitest";
import { differenceInCalendarYears } from "./index.js";

describe("differenceInCalendarYears", () => {
  it("returns the number of calendar years between the given dates", () => {
    const result = differenceInCalendarYears(
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
    );
    expect(result).toBe(1);
  });

  it("returns a negative number if the time value of the first date is smaller", () => {
    const result = differenceInCalendarYears(
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
    );
    expect(result).toBe(-1);
  });

  it("accepts timestamps", () => {
    const result = differenceInCalendarYears(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      /* 1389/4/11 */ new Date(2010, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(4);
  });

  describe("edge cases", () => {
    it("the difference is less than a year, but the given dates are in different calendar years", () => {
      const result = differenceInCalendarYears(
        /* 1394/1/1 */ new Date(2015, 2 /* Mar */, 21),
        /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20),
      );
      expect(result).toBe(1);
    });

    it("the same for the swapped dates", () => {
      const result = differenceInCalendarYears(
        /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20),
        /* 1394/1/1 */ new Date(2015, 2 /* Mar */, 21),
      );
      expect(result).toBe(-1);
    });

    it("the days and months of the given dates are the same", () => {
      const result = differenceInCalendarYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5),
        /* 1391/6/15 */ new Date(2012, 8 /* Sep */, 5),
      );
      expect(result).toBe(2);
    });

    it("the given dates are the same", () => {
      const result = differenceInCalendarYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );
      expect(result).toBe(0);
    });

    it("does not return -0 when the given dates are the same", () => {
      function isNegativeZero(x: number): boolean {
        return x === 0 && 1 / x < 0;
      }

      const result = differenceInCalendarYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
      );

      const resultIsNegative = isNegativeZero(result);
      expect(resultIsNegative).toBe(false);
    });
  });

  it("returns NaN if the first date is `Invalid Date`", () => {
    const result = differenceInCalendarYears(
      new Date(NaN),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the second date is `Invalid Date`", () => {
    const result = differenceInCalendarYears(
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
      new Date(NaN),
    );
    expect(isNaN(result)).toBe(true);
  });

  it("returns NaN if the both dates are `Invalid Date`", () => {
    const result = differenceInCalendarYears(new Date(NaN), new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
