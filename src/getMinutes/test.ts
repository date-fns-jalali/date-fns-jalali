import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getMinutes } from "./index.js";

describe("getMinutes", () => {
  it("returns the minutes of the given date", () => {
    const result = getMinutes(
      /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 11, 45, 5),
    );
    expect(result).toBe(45);
  });

  it("accepts a timestamp", () => {
    const result = getMinutes(
      /* 1393/1/13 */ new Date(2014, 3 /* Apr */, 2, 23, 30).getTime(),
    );
    expect(result).toBe(30);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getMinutes(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getMinutes(/* 1403/1/22 */ "2024-04-10T07:45:00Z", {
          in: tz("Asia/Kolkata"),
        }),
      ).toBe(15);
      expect(
        getMinutes(/* 1403/1/22 */ "2024-04-10T07:45:00Z", {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(45);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getMinutes(arg, { in: options?.in });
      }
    });
  });
});
