import { tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { ContextOptions, Interval } from "../types.js";
import { areIntervalsOverlapping } from "./index.js";

describe("areIntervalsOverlapping", () => {
  const initialIntervalStart = /* 1395/8/20 */ new Date(2016, 10, 10, 13, 0, 0);
  const initialIntervalEnd = /* 1395/9/13 */ new Date(2016, 11, 3, 15, 0, 0);

  describe("when the time intervals don't overlap", () => {
    it("returns false for a valid non overlapping interval before another interval", () => {
      const earlierIntervalStart = /* 1395/8/4 */ new Date(2016, 9, 25);
      const earlierIntervalEnd = /* 1395/8/19 */ new Date(2016, 10, 9);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: earlierIntervalStart, end: earlierIntervalEnd },
      );
      expect(isOverlapping).toBe(false);
    });

    it("returns false for a valid non overlapping interval after another interval", () => {
      const laterIntervalStart = /* 1395/9/14 */ new Date(2016, 11, 4);
      const laterIntervalEnd = /* 1395/9/19 */ new Date(2016, 11, 9);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: laterIntervalStart, end: laterIntervalEnd },
      );
      expect(isOverlapping).toBe(false);
    });

    it("returns false for a non overlapping same-day interval", () => {
      const sameDayIntervalStart = /* 1395/9/14 */ new Date(
        2016,
        11,
        4,
        9,
        0,
        0,
      );
      const sameDayIntervalEnd = /* 1395/9/14 */ new Date(
        2016,
        11,
        4,
        18,
        0,
        0,
      );

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: sameDayIntervalStart, end: sameDayIntervalEnd },
      );
      expect(isOverlapping).toBe(false);
    });

    it("returns false for an interval with the same startDateTime as the initial time interval's endDateTime", () => {
      const oneDayOverlapIntervalStart = /* 1395/9/13 */ new Date(
        2016,
        11,
        3,
        15,
        0,
        0,
      );
      const oneDayOverlapIntervalEnd = /* 1395/9/24 */ new Date(
        2016,
        11,
        14,
        13,
        0,
        0,
      );

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd },
      );
      expect(isOverlapping).toBe(false);
    });

    it("returns false for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
      const oneDayOverlapIntervalStart = /* 1395/8/13 */ new Date(
        2016,
        10,
        3,
        15,
        0,
        0,
      );
      const oneDayOverlapIntervalEnd = /* 1395/8/20 */ new Date(
        2016,
        10,
        10,
        13,
        0,
        0,
      );

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd },
      );
      expect(isOverlapping).toBe(false);
    });
  });

  describe("when the time intervals overlap", () => {
    it("returns true for an interval included within another interval", () => {
      const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14);
      const includedIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includedIntervalStart, end: includedIntervalEnd },
      );
      expect(isOverlapping).toBe(true);
    });

    it("returns true for an interval overlapping at the end", () => {
      const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
      const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd },
      );
      expect(isOverlapping).toBe(true);
    });

    it("returns true for an interval overlapping at the beginning", () => {
      const startOverlappingIntervalStart = /* 1395/8/30 */ new Date(
        2016,
        10,
        20,
      );
      const startOverlappingIntervalEnd = /* 1395/9/24 */ new Date(
        2016,
        11,
        14,
      );

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: startOverlappingIntervalStart,
          end: startOverlappingIntervalEnd,
        },
      );
      expect(isOverlapping).toBe(true);
    });

    it("returns true for an interval including another interval", () => {
      const includingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
      const includingIntervalEnd = /* 1395/9/25 */ new Date(2016, 11, 15);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includingIntervalStart, end: includingIntervalEnd },
      );
      expect(isOverlapping).toBe(true);
    });
  });

  it("accepts timestamp", () => {
    const initialIntervalStart = /* 1395/8/20 */ new Date(
      2016,
      10,
      10,
      13,
      0,
      0,
    ).getTime();
    const initialIntervalEnd = /* 1395/9/13 */ new Date(
      2016,
      11,
      3,
      15,
      0,
      0,
    ).getTime();

    const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(
      2016,
      10,
      5,
    ).getTime();
    const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(
      2016,
      10,
      14,
    ).getTime();

    const isOverlapping = areIntervalsOverlapping(
      { start: initialIntervalStart, end: initialIntervalEnd },
      { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd },
    );
    expect(isOverlapping).toBe(true);
  });

  it("sort timestamp", () => {
    const result = areIntervalsOverlapping(
      {
        start: /* 1348/10/11 */ "1970-01-01T02:00:00.000Z",
        end: /* 1348/10/11 */ "1970-01-01T03:00:00.000Z",
      },
      {
        start: /* 1348/10/10 */ "1969-12-31T23:30:00.000Z",
        end: /* 1348/10/11 */ "1970-01-01T02:30:00.000Z",
      },
    );
    expect(result).toBe(true);
  });

  it("returns result for the normalized intervals if the start date of the initial time interval is after the end date", () => {
    const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14);
    const includedIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

    const isOverlapping = areIntervalsOverlapping(
      { start: initialIntervalEnd, end: initialIntervalStart },
      { start: includedIntervalStart, end: includedIntervalEnd },
    );
    expect(isOverlapping).toBe(true);
  });

  it("returns result for the normalized intervals if the start date of the compared time interval is after the end date", () => {
    const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14);
    const includedIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

    const isOverlapping = areIntervalsOverlapping(
      { start: initialIntervalStart, end: initialIntervalEnd },
      { start: includedIntervalEnd, end: includedIntervalStart },
    );
    expect(isOverlapping).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        areIntervalsOverlapping(
          {
            start: /* 1403/1/22 */ "2024-04-10T07:00:00Z",
            end: /* 1403/1/26 */ "2024-04-14T07:00:00Z",
          },
          {
            start: /* 1403/1/26 */ "2024-04-14T07:00:00Z",
            end: /* 1403/1/28 */ "2024-04-16T07:00:00Z",
          },
          {
            in: tz("America/Los_Angeles"),
            inclusive: true,
          },
        ),
      ).toBe(true);
      expect(
        areIntervalsOverlapping(
          {
            start: /* 1403/1/22 */ "2024-04-10T07:00:00Z",
            end: /* 1403/1/22 */ "2024-04-10T15:00:00Z",
          },
          {
            start: /* 1403/1/22 */ "2024-04-10T16:00:00Z",
            end: /* 1403/1/23 */ "2024-04-11T07:00:00Z",
          },
          {
            in: tz("America/Los_Angeles"),
          },
        ),
      ).toBe(false);
    });

    it("doesn't enforce argument and context to be of the same type", () => {
      function _test<DateType extends Date, ResultDate extends Date = DateType>(
        arg1: Interval<DateType>,
        arg2: Interval<DateType>,
        options?: ContextOptions<ResultDate>,
      ) {
        areIntervalsOverlapping(arg1, arg2, { in: options?.in });
      }
    });
  });

  describe("one of the dates is `Invalid Date`", () => {
    it("returns false if the start date of the initial time interval is `Invalid Date`", () => {
      const result = areIntervalsOverlapping(
        { start: new Date(NaN), end: /* 1395/8/13 */ new Date(2016, 10, 3) },
        {
          start: /* 1395/8/15 */ new Date(2016, 10, 5),
          end: /* 1395/8/25 */ new Date(2016, 10, 15),
        },
      );
      expect(result).toBe(false);
    });

    it("returns false if the end date of the initial time interval is `Invalid Date`", () => {
      const result = areIntervalsOverlapping(
        { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: new Date(NaN) },
        {
          start: /* 1395/8/15 */ new Date(2016, 10, 5),
          end: /* 1395/8/25 */ new Date(2016, 10, 15),
        },
      );
      expect(result).toBe(false);
    });

    it("returns false if the start date of the compared time interval is `Invalid Date`", () => {
      const result = areIntervalsOverlapping(
        {
          start: /* 1395/8/13 */ new Date(2016, 10, 3),
          end: /* 1395/8/17 */ new Date(2016, 10, 7),
        },
        { start: new Date(NaN), end: /* 1395/8/15 */ new Date(2016, 10, 5) },
      );
      expect(result).toBe(false);
    });

    it("returns false if the end date of the compared time interval is `Invalid Date`", () => {
      const result = areIntervalsOverlapping(
        {
          start: /* 1395/8/13 */ new Date(2016, 10, 3),
          end: /* 1395/8/17 */ new Date(2016, 10, 7),
        },
        { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: new Date(NaN) },
      );
      expect(result).toBe(false);
    });
  });
});
