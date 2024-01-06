/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { getQuarter } from "./index.js";

describe("getQuarter", () => {
  it("returns the quarter of the given date", () => {
    const result = getQuarter(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2));
    assert(result === 2);
  });

  it("accepts a timestamp", () => {
    const result = getQuarter(
      /* 1393/1/13 */ new Date(2014, 3 /* Apr */, 2).getTime(),
    );
    assert(result === 1);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getQuarter(new Date(NaN));
    assert(isNaN(result));
  });
});
