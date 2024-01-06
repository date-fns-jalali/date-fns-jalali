import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getDate } from "./index.js";

describe("getDate", () => {
  it("returns the day of the month of the given date", () => {
    const result = getDate(/* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(10);
  });

  it("accepts a timestamp", () => {
    const result = getDate(
      /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31).getTime(),
    );
    expect(result).toBe(10);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getDate(new Date(/* 1403/5/28 */ "2024-08-18T15:00:00Z"), {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(28);
      expect(
        getDate(new Date(/* 1403/5/28 */ "2024-08-18T16:00:00Z"), {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(29);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getDate(arg, { in: options?.in });
      }
    });
  });
});
