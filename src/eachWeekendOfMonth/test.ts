/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { eachWeekendOfMonth } from "./index.js";

describe("eachWeekendOfMonth", () => {
  it("returns all weekends of the given month", () => {
    const result = eachWeekendOfMonth(/* 1400/11/20 */ new Date(2022, 1, 9));
    assert.deepStrictEqual(result, [
      /* 1400/11/2 */ new Date(2022, 0, 22),
      /* 1400/11/3 */ new Date(2022, 0, 23),
      /* 1400/11/9 */ new Date(2022, 0, 29),
      /* 1400/11/10 */ new Date(2022, 0, 30),
      /* 1400/11/16 */ new Date(2022, 1, 5),
      /* 1400/11/17 */ new Date(2022, 1, 6),
      /* 1400/11/23 */ new Date(2022, 1, 12),
      /* 1400/11/24 */ new Date(2022, 1, 13),
      /* 1400/11/30 */ new Date(2022, 1, 19),
    ]);
  });

  it("returns an empty asrray when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfMonth(new Date(NaN));
    assert.deepStrictEqual(result, []);
  });
});
