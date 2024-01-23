/* eslint-env mocha */

import assert from "assert";
import { describe, expect, it } from "vitest";
import { lastDayOfDecade } from "./index.js";

describe("lastDayOfDecade", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a decade", () => {
    const date = /* 1364/7/28 */ new Date(1985, 9 /* Oct */, 20);
    const result = lastDayOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1368/10/10 */ new Date(1989, 11 /* Dec */, 31),
    );
  });

  it("accepts a timestamp", () => {
    const date = /* 1353/10/29 */ new Date(1975, 0 /* Jan */, 19).getTime();
    const result = lastDayOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1358/10/10 */ new Date(1979, 11 /* Dec */, 31),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1392/2/3 */ new Date(2013, 3 /* Apr */, 23);
    lastDayOfDecade(date);
    assert.deepStrictEqual(
      date,
      /* 1392/2/3 */ new Date(2013, 3 /* Apr */, 23),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = lastDayOfDecade(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("properly works with negative numbers", () => {
    expect(lastDayOfDecade(/* 1379/10/12 */ new Date(2001, 0, 1))).toEqual(
      /* 1388/10/10 */ new Date(2009, 11, 31),
    );
    expect(lastDayOfDecade(/* -2631/10/10 */ new Date(-2009, 0, 1))).toEqual(
      /* -2622/10/9 */ new Date(-2001, 11, 31),
    );
  });
});
