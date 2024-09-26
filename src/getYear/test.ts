import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getYear } from "./index.js";

describe("getYear", () => {
  it("returns the year of the given date", () => {
    const result = getYear(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(1393);
  });

  it("accepts a timestamp", () => {
    const result = getYear(
      /* 1380/1/15 */ new Date(2001, 3 /* Apr */, 4).getTime(),
    );
    expect(result).toBe(1380);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getYear(/* 1402/12/29 */ "2024-03-19T15:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(1402);
      expect(
        getYear(/* 1402/12/29 */ "2024-03-19T16:00:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(1403);
      expect(
        getYear(/* 1403/1/1 */ "2024-03-20T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(1402);
      expect(
        getYear(/* 1403/1/1 */ "2024-03-20T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(1403);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getYear(arg, { in: options?.in });
      }
    });
  });
});
