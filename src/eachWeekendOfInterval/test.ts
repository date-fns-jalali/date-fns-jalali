/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { eachWeekendOfInterval } from "./index.js";

describe("eachWeekendOfInterval", () => {
  it("returns all weekends within the interval", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/6/26 */ new Date(2018, 8 /* Sep */, 17),
      end: /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30),
    });
    assert.deepStrictEqual(result, [
      /* 1397/6/31 */ new Date(2018, 8 /* Sep */, 22),
      /* 1397/7/1 */ new Date(2018, 8 /* Sep */, 23),
      /* 1397/7/7 */ new Date(2018, 8 /* Sep */, 29),
      /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30),
    ]);
  });

  it("returns all weekends within the interval when starting on a weekend", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/6/31 */ new Date(2018, 8 /* Sep */, 22),
      end: /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30),
    });
    assert.deepStrictEqual(result, [
      /* 1397/6/31 */ new Date(2018, 8 /* Sep */, 22),
      /* 1397/7/1 */ new Date(2018, 8 /* Sep */, 23),
      /* 1397/7/7 */ new Date(2018, 8 /* Sep */, 29),
      /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30),
    ]);
  });

  it("returns reversed array if the start date is after the end date", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
      end: /* 1397/6/26 */ new Date(2018, 8 /* Sept */, 17),
    });
    assert.deepStrictEqual(result, [
      /* 1397/7/8 */ new Date(2018, 8 /* Sept */, 30),
      /* 1397/7/7 */ new Date(2018, 8 /* Sept */, 29),
      /* 1397/7/1 */ new Date(2018, 8 /* Sept */, 23),
      /* 1397/6/31 */ new Date(2018, 8 /* Sept */, 22),
    ]);
  });

  it("returns an empty array if the start date is `Invalid Date`", () => {
    const result = eachWeekendOfInterval({
      start: new Date(NaN),
      end: /* 1398/10/10 */ new Date(2019, 11 /* Dec */, 31),
    });
    assert.deepStrictEqual(result, []);
  });

  it("returns an empty array if the end date is `Invalid Date`", () => {
    const result = eachWeekendOfInterval({
      start: /* 1397/10/11 */ new Date(2019, 0 /* Jan */, 1),
      end: new Date(NaN),
    });
    assert.deepStrictEqual(result, []);
  });

  it("returns an empty array if both of the properties are `Invalid Date`", () => {
    const result = eachWeekendOfInterval({
      start: new Date(NaN),
      end: new Date(NaN),
    });
    assert.deepStrictEqual(result, []);
  });
});
