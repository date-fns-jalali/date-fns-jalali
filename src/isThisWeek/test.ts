import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isThisWeek } from "./index.js";

describe("isThisWeek", () => {
  const { fakeNow } = fakeDate(/* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21));

  it("returns true if the given date and the current date have the same week", () => {
    const date = /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21);
    expect(isThisWeek(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different weeks", () => {
    const date = /* 1393/7/7 */ new Date(2014, 8 /* Sep */, 29);
    expect(isThisWeek(date)).toBe(false);
  });

  it("allows to specify which day is the first day of the week", () => {
    const date = /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22);
    expect(isThisWeek(date, { weekStartsOn: 1 })).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21).getTime();
    expect(isThisWeek(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisWeek(new UTCDate(/* 1393/6/30 */ +new Date(2014, 8 /* Sep */, 21))),
    ).toBe(true);
  });

  describe("context", () => {
    it("allows specifying the context", () => {
      fakeNow(new Date(/* 1403/5/30 */ "2024-08-20T00:00:00Z"));
      expect(
        isThisWeek(/* 1403/5/27 */ "2024-08-17T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isThisWeek(/* 1403/5/27 */ "2024-08-17T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisWeek(arg, { in: options?.in });
      }
    });
  });
});
