import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getDaysInYear } from "./index.js";

describe("getDaysInYear", () => {
  it("returns the number of days in the year of the given date", () => {
    const result = getDaysInYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
    );
    expect(result).toBe(365);
  });

  it("works for a leap year", () => {
    const result = getDaysInYear(
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2),
    );
    expect(result).toBe(366);
  });

  it("works for the years divisible by 100 but not by 400", () => {
    const result = getDaysInYear(
      /* 1479/4/11 */ new Date(2100, 6 /* Jul */, 2),
    );
    expect(result).toBe(365);
  });

  it("works for the years divisible by 400", () => {
    const result = getDaysInYear(
      /* 1379/4/12 */ new Date(2000, 6 /* Jul */, 2),
    );
    expect(result).toBe(366);
  });

  it("accepts a timestamp", () => {
    const date = /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2).getTime();
    const result = getDaysInYear(date);
    expect(result).toBe(366);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDaysInYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getDaysInYear(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }),
      ).toBe(366);
      expect(
        getDaysInYear(/* 1402/1/21 */ "2023-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }),
      ).toBe(365);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getDaysInYear(arg, { in: options?.in });
      }
    });
  });
});
