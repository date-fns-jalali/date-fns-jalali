import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { isFirstDayOfMonth } from "./index.js";
import type { ContextOptions, DateArg } from "../types.js";

describe("isFirstDayOfMonth", () => {
  it("returns true if the given date is the first day of a month", () => {
    const result = isFirstDayOfMonth(
      /* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given date is not the first day of a month", () => {
    const result = isFirstDayOfMonth(
      /* 1393/7/10 */ new Date(2014, 9 /* Oct */, 2),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/7/1 */ new Date(2014, 8 /* Oct */, 23).getTime();
    const result = isFirstDayOfMonth(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isFirstDayOfMonth(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isFirstDayOfMonth(/* 1403/6/31 */ "2024-09-21T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isFirstDayOfMonth(/* 1403/6/31 */ "2024-09-21T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isFirstDayOfMonth(/* 1403/6/1 */ "2024-08-22T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isFirstDayOfMonth(/* 1403/6/1 */ "2024-08-22T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isFirstDayOfMonth(arg, { in: options?.in });
      }
    });
  });
});
