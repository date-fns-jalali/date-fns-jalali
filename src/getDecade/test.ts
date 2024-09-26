import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getDecade } from "./index.js";

describe("getDecade", () => {
  it("returns the decade for a the given date", () => {
    const result = getDecade(/* 1350/8/17 */ new Date(1971, 10 /* Nov */, 8));
    expect(result).toBe(1970);
  });

  it("accepts a timestamp", () => {
    const result = getDecade(
      /* 1348/4/29 */ new Date(1969, 6 /* Jul */, 20).getTime(),
    );
    expect(result).toBe(1960);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDecade(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("properly works with negative numbers", () => {
    expect(getDecade(/* 1387/10/12 */ new Date(2009, 0, 1))).toBe(2000);
    expect(getDecade(/* -2623/10/10 */ new Date(-2001, 0, 1))).toBe(-2010);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const result = getDecade(/* 1350/8/17 */ "1971-11-08T07:00:00Z", {
        in: tz("America/New_York"),
      });
      expect(result).toBe(1970);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getDecade(arg, { in: options?.in });
      }
    });
  });
});
