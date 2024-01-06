import { describe, expect, it } from "vitest";
import { eachWeekOfInterval } from "./index.js";

describe("eachWeekOfInterval", () => {
  it("returns an array with starts of weeks from the week of the start date to the week of the end date", () => {
    const result = eachWeekOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      end: /* 1393/9/2 */ new Date(2014, 10 /* Nov */, 23),
    });
    expect(result).toEqual([
      /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/26 */ new Date(2014, 9 /* Oct */, 18),
      /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
      /* 1393/8/10 */ new Date(2014, 10 /* Nov */, 1),
      /* 1393/8/17 */ new Date(2014, 10 /* Nov */, 8),
      /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
      /* 1393/9/1 */ new Date(2014, 10 /* Nov */, 22),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachWeekOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6).getTime(),
      end: /* 1393/9/2 */ new Date(2014, 10 /* Nov */, 23).getTime(),
    });
    expect(result).toEqual([
      /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/26 */ new Date(2014, 9 /* Oct */, 18),
      /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
      /* 1393/8/10 */ new Date(2014, 10 /* Nov */, 1),
      /* 1393/8/17 */ new Date(2014, 10 /* Nov */, 8),
      /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
      /* 1393/9/1 */ new Date(2014, 10 /* Nov */, 22),
    ]);
  });

  it("handles the dates that are not starts/ends of days and weeks", () => {
    const result = eachWeekOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: /* 1393/9/4 */ new Date(2014, 10 /* Nov */, 25, 22, 16),
    });
    expect(result).toEqual([
      /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/26 */ new Date(2014, 9 /* Oct */, 18),
      /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
      /* 1393/8/10 */ new Date(2014, 10 /* Nov */, 1),
      /* 1393/8/17 */ new Date(2014, 10 /* Nov */, 8),
      /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
      /* 1393/9/1 */ new Date(2014, 10 /* Nov */, 22),
    ]);
  });

  it("considers the weekStartsOn option", () => {
    const result = eachWeekOfInterval(
      {
        start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 6, 35),
        end: /* 1393/9/4 */ new Date(2014, 10 /* Nov */, 25, 22, 15),
      },
      { weekStartsOn: 2 },
    );
    expect(result).toEqual([
      /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/22 */ new Date(2014, 9 /* Oct */, 14),
      /* 1393/7/29 */ new Date(2014, 9 /* Oct */, 21),
      /* 1393/8/6 */ new Date(2014, 9 /* Oct */, 28),
      /* 1393/8/13 */ new Date(2014, 10 /* Nov */, 4),
      /* 1393/8/20 */ new Date(2014, 10 /* Nov */, 11),
      /* 1393/8/27 */ new Date(2014, 10 /* Nov */, 18),
      /* 1393/9/4 */ new Date(2014, 10 /* Nov */, 25),
    ]);
  });

  it("returns one week if the both arguments are on the same week", () => {
    const result = eachWeekOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8, 15),
    });
    expect(result).toEqual([/* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4)]);
  });

  it("returns one day if the both arguments are the same", () => {
    const result = eachWeekOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([/* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachWeekOfInterval({
      start: /* 1393/9/2 */ new Date(2014, 10 /* Nov */, 23),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([
      /* 1393/9/1 */ new Date(2014, 10 /* Nov */, 22),
      /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
      /* 1393/8/17 */ new Date(2014, 10 /* Nov */, 8),
      /* 1393/8/10 */ new Date(2014, 10 /* Nov */, 1),
      /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
      /* 1393/7/26 */ new Date(2014, 9 /* Oct */, 18),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachWeekOfInterval({
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachWeekOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachWeekOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      end: /* 1393/9/2 */ new Date(2014, 10 /* Nov */, 23),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachWeekOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
        /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
        /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachWeekOfInterval(interval, { step: -3 });
      expect(result).toEqual([
        /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
        /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
        /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachWeekOfInterval(
        { start: interval.end, end: interval.start },
        { step: -3 },
      );
      expect(result).toEqual([
        /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
        /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
        /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachWeekOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachWeekOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
