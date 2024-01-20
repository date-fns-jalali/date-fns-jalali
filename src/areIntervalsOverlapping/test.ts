/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
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
      assert(!isOverlapping);
    });

    it("returns false for a valid non overlapping interval after another interval", () => {
      const laterIntervalStart = /* 1395/9/14 */ new Date(2016, 11, 4);
      const laterIntervalEnd = /* 1395/9/19 */ new Date(2016, 11, 9);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: laterIntervalStart, end: laterIntervalEnd },
      );
      assert(!isOverlapping);
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
      assert(!isOverlapping);
    });

    it("returns false for an interval differing by a few hours", () => {
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

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: oneDayOverlappingIntervalStart,
          end: oneDayOverlappingIntervalEnd,
        },
      );
      assert(!isOverlapping);
    });

    it("returns false for an interval with the same startDateTime as the initial time intervals's endDateTime", () => {
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
      assert(!isOverlapping);
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
      assert(!isOverlapping);
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
      assert(isOverlapping);
    });

    it("returns true for an interval overlapping at the end", () => {
      const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
      const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd },
      );
      assert(isOverlapping);
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
      assert(isOverlapping);
    });

    it("returns true for an interval including another interval", () => {
      const includingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5);
      const includingIntervalEnd = /* 1395/9/25 */ new Date(2016, 11, 15);

      const isOverlapping = areIntervalsOverlapping(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includingIntervalStart, end: includingIntervalEnd },
      );
      assert(isOverlapping);
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
    assert(isOverlapping);
  });

  it("sort timestamp", () => {
    const result = areIntervalsOverlapping(
      { start: "1970-01-01T02:00:00.000Z", end: "1970-01-01T03:00:00.000Z" },
      { start: "1969-12-31T23:30:00.000Z", end: "1970-01-01T02:30:00.000Z" },
    );
    assert(result);
  });

  it("returns result for the normalized intervals if the start date of the initial time interval is after the end date", () => {
    const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14);
    const includedIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

    const isOverlapping = areIntervalsOverlapping(
      { start: initialIntervalEnd, end: initialIntervalStart },
      { start: includedIntervalStart, end: includedIntervalEnd },
    );
    assert(isOverlapping);
  });

  it("returns result for the normalized intervals if the start date of the compared time interval is after the end date", () => {
    const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14);
    const includedIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14);

    const isOverlapping = areIntervalsOverlapping(
      { start: initialIntervalStart, end: initialIntervalEnd },
      { start: includedIntervalEnd, end: includedIntervalStart },
    );
    assert(isOverlapping);
  });

  describe("when the inclusive option is true", () => {
    it("returns true for an interval with the same startDateTime as the initial time interval's endDateTime", () => {
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
        { inclusive: true },
      );
      assert(isOverlapping);
    });

    it("returns true for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
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
        { inclusive: true },
      );
      assert(isOverlapping);
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
      assert(!result);
    });

    it("returns false if the end date of the initial time interval is `Invalid Date`", () => {
      const result = areIntervalsOverlapping(
        { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: new Date(NaN) },
        {
          start: /* 1395/8/15 */ new Date(2016, 10, 5),
          end: /* 1395/8/25 */ new Date(2016, 10, 15),
        },
      );
      assert(!result);
    });

    it("returns false if the start date of the compared time interval is `Invalid Date`", () => {
      const result = areIntervalsOverlapping(
        {
          start: /* 1395/8/13 */ new Date(2016, 10, 3),
          end: /* 1395/8/17 */ new Date(2016, 10, 7),
        },
        { start: new Date(NaN), end: /* 1395/8/15 */ new Date(2016, 10, 5) },
      );
      assert(!result);
    });

    it("returns false if the end date of the compared time interval is `Invalid Date`", () => {
      const result = areIntervalsOverlapping(
        {
          start: /* 1395/8/13 */ new Date(2016, 10, 3),
          end: /* 1395/8/17 */ new Date(2016, 10, 7),
        },
        { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: new Date(NaN) },
      );
      assert(!result);
    });
  });
});
