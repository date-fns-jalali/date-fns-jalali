/* eslint-env mocha */

import assert from "node:assert";
import { describe, expect, it } from "vitest";
import { startOfDecade } from "./index.js";

describe("startOfDecade", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a year", () => {
    const date = /* 1332/1/24 */ new Date(1953, 3 /* Apr */, 13);
    const result = startOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1328/10/11 */ new Date(1950, 0 /* Jan */, 1),
    );
  });

  it("accepts a timestamp", () => {
    const date = /* 1363/7/22 */ new Date(1984, 9 /* Oct */, 14).getTime();
    const result = startOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1358/10/11 */ new Date(1980, 0 /* Jan */, 1),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1357/8/23 */ new Date(1978, 10 /* Nov */, 14);
    startOfDecade(date);
    assert.deepStrictEqual(
      date,
      /* 1357/8/23 */ new Date(1978, 10 /* Nov */, 14),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfDecade(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("properly works with negative numbers", () => {
    expect(startOfDecade(/* 1387/10/12 */ new Date(2009, 0, 1))).toEqual(
      /* 1378/10/11 */ new Date(2000, 0, 1),
    );
    expect(startOfDecade(/* -2623/10/10 */ new Date(-2001, 0, 1))).toEqual(
      /* -2632/10/10 */ new Date(-2010, 0, 1),
    );
  });
});
