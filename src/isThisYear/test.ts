import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { ContextOptions, DateArg } from "../types.js";
import { isThisYear } from "./index.js";

describe("isThisYear", () => {
  const { fakeNow } = fakeDate(/* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1));

  it("returns true if the given date and the current date have the same year", () => {
    const date = /* 1392/4/11 */ new Date(2013, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(true);
  });

  it("returns false if the given date and the current date have different years", () => {
    const date = /* 1394/4/11 */ new Date(2015, 6 /* Jul */, 2);
    expect(isThisYear(date)).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1392/4/11 */ new Date(2013, 6 /* Jul */, 2).getTime();
    expect(isThisYear(date)).toBe(true);
  });

  it("respects date extensions", () => {
    expect(
      isThisYear(new UTCDate(/* 1392/10/11 */ +new Date(2014, 0 /* Jan */, 1))),
    ).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      fakeNow(new Date(/* 1402/10/12 */ "2024-01-02T00:00:00Z"));
      expect(
        isThisYear(/* 1402/1/1 */ "2023-03-21T03:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(false);
      expect(
        isThisYear(/* 1402/1/1 */ "2023-03-21T04:00:00Z", {
          in: tz("America/New_York"),
        }),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isThisYear(arg, { in: options?.in });
      }
    });
  });
});
