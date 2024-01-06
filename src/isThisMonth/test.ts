import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isThisMonth } from "./index.js";

describe("isThisMonth", () => {
  const { fakeNow } = fakeDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));

  it("returns true if the given date and the current date have the same month (and year)", () => {
    const date = /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15);
    expect(isThisMonth(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different months", () => {
    const date = /* 1392/6/9 */ new Date(2013, 7 /* Aug */, 31);
    expect(isThisMonth(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15).getTime();
    expect(isThisMonth(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisMonth(new UTCDate(/* 1393/6/10 */ +new Date(2014, 8 /* Sep */, 1))),
    ).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date(/* 1393/6/11 */ "2014-09-02T00:00:00Z"));
      expect(
        isThisMonth(/* 1393/6/1 */ "2014-08-23T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
      expect(
        isThisMonth(/* 1393/6/1 */ "2014-08-23T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisMonth(arg, { in: options?.in });
      }
    });
  });
});
