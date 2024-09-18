import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getMonth } from "./index.js";

describe("getMonth", () => {
  it("returns the month of the given date", () => {
    const result = getMonth(/* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(11);
  });

  it("accepts a timestamp", () => {
    const result = getMonth(
      /* 1393/1/13 */ new Date(2014, 3 /* Apr */, 2).getTime(),
    );
    expect(result).toBe(0);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getMonth(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getMonth(/* 1403/6/31 */ "2024-09-21T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(5);
      expect(
        getMonth(/* 1403/6/31 */ "2024-09-21T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(6);
      expect(
        getMonth(/* 1403/7/1 */ "2024-09-22T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(5);
      expect(
        getMonth(/* 1403/7/1 */ "2024-09-22T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(6);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getMonth(arg, { in: options?.in });
      }
    });
  });
});
