/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { endOfDecade } from "./index.js";

describe("endOfDecade", () => {
  it("returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade", () => {
    const date = /* 1396/1/21 */ new Date(2017, 3 /* Apr */, 10, 0, 0, 0);
    const result = endOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1399/12/30 */ new Date(2021, 2 /* Mar */, 20, 23, 59, 59, 999),
    );
  });

  it("accepts a timestamp", () => {
    const date = /* 1386/7/18 */ new Date(
      2007,
      9 /* Oct */,
      10,
      0,
      0,
      0,
    ).getTime();
    const result = endOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1389/12/29 */ new Date(2011, 2 /* Mar */, 20, 23, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1416/10/30 */ new Date(2038, 0 /* Jan */, 19, 3, 14, 8);
    endOfDecade(date);
    assert.deepStrictEqual(
      date,
      /* 1416/10/30 */ new Date(2038, 0 /* Jan */, 19, 3, 14, 8),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfDecade(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
