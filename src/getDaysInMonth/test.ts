import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getDaysInMonth } from "./index.js";

describe("getDaysInMonth", () => {
  it("returns the number of days in the month of the given date", () => {
    const result = getDaysInMonth(
      /* 1478/11/23 */ new Date(2100, 1 /* Feb */, 11),
    );
    expect(result).toBe(30);
  });

  it("works for the Esfand of a leap year", () => {
    const result = getDaysInMonth(
      /* 1399/12/20 */ new Date(2021, 2 /* Mar */, 10),
    );
    expect(result).toBe(30);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime();
    const result = getDaysInMonth(date);
    expect(result).toBe(31);
  });

  it.skip("handles dates before 100 AD", () => {
    const date = new Date(0);
    date.setFullYear(0, 1 /* Feb */, 15);
    date.setHours(0, 0, 0, 0);
    const result = getDaysInMonth(date);
    expect(result).toBe(29);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDaysInMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getDaysInMonth(/* 1402/7/1 */ "2023-09-23T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(31);
      expect(
        getDaysInMonth(/* 1402/7/1 */ "2023-09-23T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(30);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getDaysInMonth(arg, { in: options?.in });
      }
    });
  });
});
