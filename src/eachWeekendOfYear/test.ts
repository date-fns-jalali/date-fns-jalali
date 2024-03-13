/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { eachWeekendOfYear } from "./index.js";
import { isWeekend } from "../isWeekend/index.js";

describe("eachWeekendOfYear", () => {
  it("returns all weekends of the given year", () => {
    const result = eachWeekendOfYear(/* 1398/10/11 */ new Date(2020, 0, 1));
    assert(result.length === 104);
    assert(result.every(isWeekend));
    assert.deepStrictEqual(result[0], /* 1398/1/3 */ new Date(2019, 2, 23));
    assert.deepStrictEqual(result[103], /* 1398/12/25 */ new Date(2020, 2, 15));
  });

  it("returns an empty asrray when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfYear(new Date(NaN));
    assert.deepStrictEqual(result, []);
  });
});
