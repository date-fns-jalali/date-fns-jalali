import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSameQuarter } from "./index.js";

describe("isSameQuarter", () => {
  it("returns true if the given dates have the same quarter (and year)", () => {
    const result = isSameQuarter(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1392/12/17 */ new Date(2014, 2 /* Mar */, 8),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different quarters", () => {
    const result = isSameQuarter(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1392/7/3 */ new Date(2013, 8 /* Sep */, 25),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      /* 1393/6/3 */ new Date(2014, 7 /* Sep */, 25).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameQuarter(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameQuarter(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameQuarter(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      isSameQuarter(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1403/4/1 */ new TZDate(2024, 5, 21, "Asia/Singapore");
    const dateRight = /* 1403/3/31 */ new TZDate(
      2024,
      5,
      20,
      "America/New_York",
    );
    expect(isSameQuarter(dateLeft, dateRight)).toBe(false);
    expect(isSameQuarter(dateRight, dateLeft)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameQuarter(
          /* 1403/9/30 */ "2024-12-20T15:00:00Z",
          /* 1403/9/30 */ "2024-12-20T00:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe(true);
      expect(
        isSameQuarter(
          /* 1403/9/30 */ "2024-12-20T16:00:00Z",
          /* 1403/9/30 */ "2024-12-20T00:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe(false);
      expect(
        isSameQuarter(
          /* 1403/7/1 */ "2024-09-22T04:00:00Z",
          /* 1403/7/2 */ "2024-09-23T00:00:00Z",
          {
            in: tz("America/New_York"),
          },
        ),
      ).toBe(true);
      expect(
        isSameQuarter(
          /* 1403/7/1 */ "2024-09-22T03:00:00Z",
          /* 1403/7/2 */ "2024-09-23T00:00:00Z",
          {
            in: tz("America/New_York"),
          },
        ),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<
        DateType extends Date,
        ContextDate extends Date = DateType,
      >(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ContextDate>,
      ) {
        isSameQuarter(arg1, arg2, { in: options?.in });
      }
      _test(
        /* 1392/11/22 */ "2014-02-11T00:00:00.000Z",
        /* 1393/2/28 */ "2014-05-18T00:00:00.000Z",
        {
          in: tz("Asia/Singapore"),
        },
      );
    });
  });
});
