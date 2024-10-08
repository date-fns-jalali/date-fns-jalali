import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSameYear } from "./index.js";

describe("isSameYear", () => {
  it("returns true if the given dates have the same year", () => {
    const result = isSameYear(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2),
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different years", () => {
    const result = isSameYear(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2),
      /* 1392/7/3 */ new Date(2013, 8 /* Sep */, 25),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameYear(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2).getTime(),
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameYear(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameYear(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameYear(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameYear(
          /* 1402/12/29 */ "2024-03-19T15:00:00Z",
          /* 1402/12/29 */ "2024-03-19T21:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe(false);
      expect(
        isSameYear(
          /* 1402/12/29 */ "2024-03-19T16:00:00Z",
          /* 1403/6/2 */ "2024-08-23T00:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSameYear(arg1, arg2, { in: options?.in });
      }
    });
  });
});
