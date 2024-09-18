import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg } from "../types.js";
import { isSameWeek } from "./index.js";

describe("isSameWeek", () => {
  it("returns true if the given dates have the same week", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different weeks", () => {
    const result = isSameWeek(
      /* 1393/6/8 */ new Date(2014, 7 /* Aug */, 30),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
    );
    expect(result).toBe(false);
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      { weekStartsOn: 1 },
    );
    expect(result).toBe(false);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      {
        locale: {
          options: { weekStartsOn: 1 },
        },
      },
    );
    expect(result).toBe(false);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      {
        weekStartsOn: 1,
        locale: {
          options: { weekStartsOn: 0 },
        },
      },
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31).getTime(),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameWeek(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameWeek(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameWeek(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      isSameWeek(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1403/6/12 */ new TZDate(
      2024,
      8,
      2,
      0,
      "America/New_York",
    );
    const dateRight = /* 1403/6/19 */ new TZDate(
      2024,
      8,
      9,
      4,
      "Europe/London",
    );
    expect(isSameWeek(dateLeft, dateRight, { weekStartsOn: 1 })).toBe(true);
    expect(isSameWeek(dateRight, dateLeft, { weekStartsOn: 1 })).toBe(false);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        isSameWeek(
          /* 1403/6/3 */ "2024-08-24T15:00:00Z",
          /* 1403/6/3 */ "2024-08-24T18:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe(false);
      expect(
        isSameWeek(
          /* 1403/6/3 */ "2024-08-24T16:00:00Z",
          /* 1403/6/3 */ "2024-08-24T18:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe(true);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<
        DateType extends Date,
        ContextDate extends Date = DateType,
      >(
        arg1: DateArg<DateType>,
        arg2: DateArg<DateType>,
        options?: ContextOptions<ContextDate>,
      ) {
        isSameWeek(arg1, arg2, { in: options?.in });
      }
    });
  });
});
