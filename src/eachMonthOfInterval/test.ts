import { describe, expect, it } from "vitest";
import { eachMonthOfInterval } from "./index.js";

describe("eachMonthOfInterval", () => {
  it("returns an array with starts of months from the month of the start date to the month of the end date", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6).getTime(),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12).getTime(),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12, 22, 15),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("handles the dates that are not containing days", () => {
    const result = eachMonthOfInterval({
      start: /* 1392/12/10 */ new Date(2014, 2 /* Mar */),
      end: /* 1393/5/10 */ new Date(2014, 7 /* Aug */),
    });
    expect(result).toEqual([
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
    ]);
  });

  it("returns one month if the both arguments are on the same month", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9, 15),
    });
    expect(result).toEqual([/* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23)]);
  });

  it("returns one month if the both arguments are the same", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    });
    expect(result).toEqual([/* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23)]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
      end: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
    });
    expect(result).toEqual([
      /* 1393/5/1 */ new Date(2014, 6 /* Jul */, 23),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
      /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      /* 1393/2/1 */ new Date(2014, 3 /* Apr */, 21),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachMonthOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    expect(result).toEqual([]);
  });

  describe("options.step", () => {
    const interval = {
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachMonthOfInterval(interval, { step: 3 });
      expect(result).toEqual([
        /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
        /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachMonthOfInterval(interval, { step: -3 });
      expect(result).toEqual([
        /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
        /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachMonthOfInterval(
        { start: interval.end, end: interval.start },
        { step: -3 },
      );
      expect(result).toEqual([
        /* 1392/12/1 */ new Date(2014, 1 /* Feb */, 20),
        /* 1393/3/1 */ new Date(2014, 4 /* May */, 22),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachMonthOfInterval(interval, { step: 0 });
      expect(result).toEqual([]);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachMonthOfInterval(interval, { step: NaN });
      expect(result).toEqual([]);
    });
  });
});
