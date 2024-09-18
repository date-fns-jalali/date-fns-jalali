import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getQuarter } from "./index.js";

describe("getQuarter", () => {
  it("returns the quarter of the given date", () => {
    const result = getQuarter(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(2);
  });

  it("accepts a timestamp", () => {
    const result = getQuarter(
      /* 1393/1/13 */ new Date(2014, 3 /* Apr */, 2).getTime(),
    );
    expect(result).toBe(1);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getQuarter(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getQuarter(/* 1403/3/31 */ "2024-06-20T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(2);
      expect(
        getQuarter(/* 1403/3/31 */ "2024-06-20T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(1);
      expect(
        getQuarter(/* 1403/4/1 */ "2024-06-21T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(2);
      expect(
        getQuarter(/* 1403/4/1 */ "2024-06-21T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(1);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getQuarter(arg, { in: options?.in });
      }
    });
  });
});
