import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSaturday } from "./index.js";

describe("isSaturday", () => {
  it("returns true if the given date is Saturday", () => {
    const result = isSaturday(/* 1393/7/5 */ new Date(2014, 8 /* Sep */, 27));
    expect(result).toBe(true);
  });

  it("returns false if the given date is not Saturday", () => {
    const result = isSaturday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSaturday(
      /* 1392/11/26 */ new Date(2014, 1 /* Feb */, 15).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isSaturday(new Date(NaN));
    expect(result).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSaturday(/* 1403/5/26 */ "2024-08-16T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
      expect(
        isSaturday(/* 1403/5/26 */ "2024-08-16T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isSaturday(/* 1403/5/27 */ "2024-08-17T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isSaturday(/* 1403/5/27 */ "2024-08-17T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isSaturday(arg, { in: options?.in });
      }
    });
  });
});
