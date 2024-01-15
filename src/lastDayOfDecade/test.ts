/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { lastDayOfDecade } from "./index.js";

describe("lastDayOfDecade", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the last day of a decade", () => {
    const date = /* 1364/7/28 */ new Date(1985, 9 /* Oct */, 20);
    const result = lastDayOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1369/12/29 */ new Date(1991, 2 /* Mar */, 20),
    );
  });

  it("accepts a timestamp", () => {
    const date = /* 1353/10/29 */ new Date(1975, 0 /* Jan */, 19).getTime();
    const result = lastDayOfDecade(date);
    assert.deepStrictEqual(
      result,
      /* 1359/12/29 */ new Date(1981, 2 /* Mar */, 20),
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
});
