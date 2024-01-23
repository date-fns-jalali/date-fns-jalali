/* eslint-env mocha */

import assert from "assert";
import { describe, expect, it } from "vitest";
import { getOverlappingDaysInIntervals } from "./index.js";

describe("getOverlappingDaysInIntervals", () => {
  const initialIntervalStart = /* 1395/8/20 */ new Date(2016, 10, 10, 13, 0, 0);
  const initialIntervalEnd = /* 1395/9/13 */ new Date(2016, 11, 3, 15, 0, 0);

  describe("when the time intervals don't overlap", () => {
    it("returns 0 for a valid non overlapping interval before another interval", () => {
      const earlierIntervalStart = /* 1395/8/4 */ new Date(2016, 9, 25);
      const earlierIntervalEnd = /* 1395/8/19 */ new Date(2016, 10, 9);

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: earlierIntervalStart, end: earlierIntervalEnd },
      );
      assert(numOverlappingDays === 0);
    });

    it("returns 0 for a valid non overlapping interval after another interval", () => {
      const laterIntervalStart = /* 1395/9/14 */ new Date(2016, 11, 4);
      const laterIntervalEnd = /* 1395/9/19 */ new Date(2016, 11, 9);

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: laterIntervalStart, end: laterIntervalEnd },
      );
      assert(numOverlappingDays === 0);
    });

    it("returns 0 for a non overlapping same-day interval", () => {
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

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: sameDayIntervalStart, end: sameDayIntervalEnd },
      );
      assert(numOverlappingDays === 0);
    });

    it("returns 0 for an interval differing by a few hours", () => {
      const oneDayOverlappingIntervalStart = /* 1395/9/13 */ new Date(
        2016,
        11,
        3,
        18,
        0,
        0,
      );
      const oneDayOverlappingIntervalEnd = /* 1395/9/24 */ new Date(
        2016,
        11,
        14,
        13,
        0,
        0,
      );

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: oneDayOverlappingIntervalStart,
          end: oneDayOverlappingIntervalEnd,
        },
      );
      assert(numOverlappingDays === 0);
    });

    it("returns 0 for an interval with the same startDateTime as the initial time intervals's endDateTime", () => {
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

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd },
      );
      assert(numOverlappingDays === 0);
    });

    it("returns 0 for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
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

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd },
      );
      assert(numOverlappingDays === 0);
    });
  });

  describe("when the time intervals overlap", () => {
    it("rounds up the result to include each started overlapping day", () => {
      const includedIntervalStart = /* 1395/8/24 */ new Date(
        2016,
        10,
        14,
        9,
        0,
        0,
      );
      const includedIntervalEnd = /* 1395/8/25 */ new Date(
        2016,
        10,
        15,
        18,
        0,
        0,
      );

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includedIntervalStart, end: includedIntervalEnd },
      );
      assert(numOverlappingDays === 2);
    });

    it("returns the correct value for an interval included within another interval", () => {
      const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14);
      const includedIntervalEnd = /* 1395/8/25 */ new Date(2016, 10, 15);

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includedIntervalStart, end: includedIntervalEnd },
      );
      assert(numOverlappingDays === 1);
    });

    it("returns the correct value for an interval overlapping at the end", () => {
      const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
      const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd },
      );
      assert(numOverlappingDays === 4);
    });

    it("returns the correct value for an interval overlapping at the beginning", () => {
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

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: startOverlappingIntervalStart,
          end: startOverlappingIntervalEnd,
        },
      );
      assert(numOverlappingDays === 14);
    });

    it("returns the correct value for an interval including another interval", () => {
      const includingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
      const includingIntervalEnd = /* 1395/9/25 */ new Date(2016, 11, 15);

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includingIntervalStart, end: includingIntervalEnd },
      );
      assert(numOverlappingDays === 24);
    });
  });

  it("accepts a timestamp", () => {
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

    const numOverlappingDays = getOverlappingDaysInIntervals(
      { start: initialIntervalStart, end: initialIntervalEnd },
      { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd },
    );
    assert(numOverlappingDays === 4);
  });

  it("normalizes the left interval if its start date is after the end date", () => {
    const initialIntervalStart = /* 1395/8/20 */ new Date(
      2016,
      10,
      10,
      13,
      0,
      0,
    );
    const initialIntervalEnd = /* 1395/9/13 */ new Date(2016, 11, 3, 15, 0, 0);

    const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
    const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

    const numOverlappingDays = getOverlappingDaysInIntervals(
      { start: initialIntervalEnd, end: initialIntervalStart },
      { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd },
    );
    assert(numOverlappingDays === 4);
  });

  it("normalizes the right interval if its start date is after the end date", () => {
    const initialIntervalStart = /* 1395/8/20 */ new Date(
      2016,
      10,
      10,
      13,
      0,
      0,
    );
    const initialIntervalEnd = /* 1395/9/13 */ new Date(2016, 11, 3, 15, 0, 0);

    const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
    const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

    const numOverlappingDays = getOverlappingDaysInIntervals(
      { start: initialIntervalStart, end: initialIntervalEnd },
      { start: endOverlappingIntervalEnd, end: endOverlappingIntervalStart },
    );
    assert(numOverlappingDays === 4);
  });

  describe("one of the dates is `Invalid Date`", () => {
    it("returns 0 if the start date of the initial time interval is `Invalid Date`", () => {
      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: new Date(NaN), end: /* 1395/8/13 */ new Date(2016, 10, 3) },
        {
          start: /* 1395/8/15 */ new Date(2016, 10, 5),
          end: /* 1395/8/25 */ new Date(2016, 10, 15),
        },
      );
      assert(numOverlappingDays === 0);
    });

    it("throws an exception if the end date of the initial time interval is `Invalid Date`", () => {
      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: new Date(NaN) },
        {
          start: /* 1395/8/15 */ new Date(2016, 10, 5),
          end: /* 1395/8/25 */ new Date(2016, 10, 15),
        },
      );
      assert(numOverlappingDays === 0);
    });

    it("returns 0 if the start date of the compared time interval is `Invalid Date`", () => {
      const numOverlappingDays = getOverlappingDaysInIntervals(
        {
          start: /* 1395/8/13 */ new Date(2016, 10, 3),
          end: /* 1395/8/17 */ new Date(2016, 10, 7),
        },
        { start: new Date(NaN), end: /* 1395/8/15 */ new Date(2016, 10, 5) },
      );
      assert(numOverlappingDays === 0);
    });

    it("returns 0 if the end date of the compared time interval is `Invalid Date`", () => {
      const numOverlappingDays = getOverlappingDaysInIntervals(
        {
          start: /* 1395/8/13 */ new Date(2016, 10, 3),
          end: /* 1395/8/17 */ new Date(2016, 10, 7),
        },
        { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: new Date(NaN) },
      );
      assert(numOverlappingDays === 0);
    });
  });

  it("properly sorts the dates", () => {
    const result = getOverlappingDaysInIntervals(
      {
        start: /* 1380/6/10 */ new Date(2001, 8 /* Sep */, 1),
        end: /* 1402/9/29 */ new Date(2023, 11 /* Dec */, 20),
      },
      {
        start: /* 1402/9/30 */ new Date(2023, 11 /* Dec */, 21),
        end: /* 1380/6/18 */ new Date(2001, 8 /* Sep */, 9),
      },
    );
    expect(result).toBe(8137);
  });
});
