import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { getWeekYear } from "./index.js";

describe("getWeekYear", () => {
  it("returns the local week-numbering year of the given date", () => {
    const result = getWeekYear(
      /* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20),
    );
    expect(result).toBe(1384);
  });

  it("accepts a timestamp", () => {
    const result = getWeekYear(
      /* 1388/12/29 */ new Date(2010, 2 /* Mar */, 20).getTime(),
    );
    expect(result).toBe(1389);
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(7, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const result = getWeekYear(initialDate);
    expect(result).toBe(8);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getWeekYear(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = /* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20);
    const result = getWeekYear(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toBe(1383);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = /* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20);
    const result = getWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toBe(1383);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        getWeekYear(/* 1401/12/28 */ "2023-03-19T15:00:00Z", {
          in: tz("Asia/Singapore"),
          weekStartsOn: 1,
        }),
      ).toBe(1401);
      expect(
        getWeekYear(/* 1401/12/28 */ "2023-03-19T16:00:00Z", {
          in: tz("Asia/Singapore"),
          weekStartsOn: 1,
        }),
      ).toBe(1402);
      expect(
        getWeekYear(/* 1401/12/29 */ "2023-03-20T03:00:00Z", {
          in: tz("America/New_York"),
          weekStartsOn: 1,
        }),
      ).toBe(1401);
      expect(
        getWeekYear(/* 1401/12/29 */ "2023-03-20T04:00:00Z", {
          in: tz("America/New_York"),
          weekStartsOn: 1,
        }),
      ).toBe(1402);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg: DateArg<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        getWeekYear(arg, { in: options?.in });
      }
    });
  });
});
