import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, DateArg, Interval } from "../types.js";
import { isWithinInterval } from "./index.js";

describe("isWithinInterval", () => {
  it("returns true if the given date in within the given interval", () => {
    const result = isWithinInterval(
      /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31),
      {
        start: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        end: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      },
    );
    expect(result).toBe(true);
  });

  it("returns true if the given date has same time as the left boundary of the interval", () => {
    const result = isWithinInterval(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      {
        start: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        end: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      },
    );
    expect(result).toBe(true);
  });

  it("returns true if the given date has same time as the right boundary of the interval", () => {
    const result = isWithinInterval(
      /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      {
        start: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        end: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      },
    );
    expect(result).toBe(true);
  });

  it("returns true if the given date and the both boundaries are the same", () => {
    const result = isWithinInterval(
      /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      {
        start: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
        end: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      },
    );
    expect(result).toBe(true);
  });

  it("returns false if the given date is outside of the interval", () => {
    const result = isWithinInterval(
      /* 1392/11/22 */ new Date(2014, 1 /* Feb */, 11),
      {
        start: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        end: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
      },
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isWithinInterval(
      /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31).getTime(),
      {
        start: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
        end: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31).getTime(),
      },
    );
    expect(result).toBe(true);
  });

  it("normalizes the interval if the start date is after the end date", () => {
    const result = isWithinInterval(
      /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31),
      {
        start: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
        end: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      },
    );
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isWithinInterval(new Date(NaN), {
      start: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      end: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
    });
    expect(!result).toBe(true);
  });

  it("returns false if the start date is `Invalid Date`", () => {
    const result = isWithinInterval(
      /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31),
      {
        start: new Date(NaN),
        end: /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      },
    );
    expect(!result).toBe(true);
  });

  it("returns false if the end date is `Invalid Date`", () => {
    const result = isWithinInterval(
      /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31),
      {
        start: /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
        end: new Date(NaN),
      },
    );
    expect(!result).toBe(true);
  });

  it("properly sorts the dates", () => {
    const result = isWithinInterval(
      /* 1402/9/28 */ new Date(2023, 11 /* Dec */, 19),
      {
        start: /* 1380/6/10 */ new Date(2001, 8 /* Sep */, 1),
        end: /* 1402/9/29 */ new Date(2023, 11 /* Dec */, 20),
      },
    );
    expect(result).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const interval = {
        start: /* 1403/1/22 */ "2024-04-10T00:00:00+08:00",
        end: /* 1403/1/22 */ "2024-04-10T23:59:59+08:00",
      };
      expect(
        isWithinInterval(/* 1403/1/21 */ "2024-04-09T16:00:00Z", interval, {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(true);
      expect(
        isWithinInterval(/* 1403/1/21 */ "2024-04-09T15:00:00Z", interval, {
          in: tz("Asia/Singapore"),
        }),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: DateArg<DateType>,
        arg2: Interval<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        isWithinInterval(arg1, arg2, { in: options?.in });
      }
    });
  });
});
