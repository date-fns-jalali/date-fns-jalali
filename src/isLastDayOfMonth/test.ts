import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isLastDayOfMonth } from "./index.js";

describe("isLastDayOfMonth", () => {
  it("returns true if the given date is in the last day of month", () => {
    const result = isLastDayOfMonth(
      /* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given date is not in the last day of month", () => {
    const result = isLastDayOfMonth(
      /* 1393/8/8 */ new Date(2014, 9 /* Oct */, 30),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/8/30 */ new Date(2014, 10 /* Oct */, 21).getTime();
    const result = isLastDayOfMonth(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isLastDayOfMonth(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isLastDayOfMonth(/* 1403/7/29 */ "2024-10-20T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isLastDayOfMonth(/* 1403/7/29 */ "2024-10-20T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isLastDayOfMonth(/* 1403/6/31 */ "2024-09-21T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isLastDayOfMonth(/* 1403/6/31 */ "2024-09-21T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isLastDayOfMonth(arg, { in: options?.in });
      }
    });
  });
});
