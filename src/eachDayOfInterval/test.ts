/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { eachDayOfInterval } from "./index.js";

describe("eachDayOfInterval", () => {
  it("returns an array with starts of days from the day of the start date to the day of the end date", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    });
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("accepts timestamps", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6).getTime(),
      end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12).getTime(),
    });
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("handles the dates that are not starts of days", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 6, 35),
      end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12, 22, 15),
    });
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
    ]);
  });

  it("returns one day if the both arguments are on the same day", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    });
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    ]);
  });

  it("returns one day if the both arguments are the same", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    });
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    ]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    assert.deepStrictEqual(result, [
      /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
      /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
      /* 1393/7/16 */ new Date(2014, 9 /* Oct */, 8),
      /* 1393/7/15 */ new Date(2014, 9 /* Oct */, 7),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    });
    assert.deepStrictEqual(result, []);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    });
    assert.deepStrictEqual(result, []);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachDayOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    assert.deepStrictEqual(result, []);
  });

  describe("options.step", () => {
    const interval = {
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
      end: /* 1393/7/21 */ new Date(2014, 9 /* Oct */, 13),
    };

    it("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
      const result = eachDayOfInterval(interval, { step: 3 });
      assert.deepStrictEqual(result, [
        /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
        /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9),
        /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns reversed array if `options.step` is negative", () => {
      const result = eachDayOfInterval(
        {
          start: /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
          end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
        },
        { step: -1 },
      );
      assert.deepStrictEqual(result, [
        /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
        /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
        /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
      ]);
    });

    it("reverses array twice if `options.step` is negative and the interval is negative too", () => {
      const result = eachDayOfInterval(
        {
          start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
          end: /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
        },
        { step: -1 },
      );
      assert.deepStrictEqual(result, [
        /* 1393/7/18 */ new Date(2014, 9 /* Oct */, 10),
        /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
        /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      ]);
    });

    it("returns empty array if `options.step` is less than 1", () => {
      const result = eachDayOfInterval(interval, { step: 0 });
      assert.deepStrictEqual(result, []);
    });

    it("returns empty array if `options.step` is NaN", () => {
      const result = eachDayOfInterval(interval, { step: NaN });
      assert.deepStrictEqual(result, []);
    });
  });
});
