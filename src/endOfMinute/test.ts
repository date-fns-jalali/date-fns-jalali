/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { endOfMinute } from "./index.js";

describe("endOfMinute", () => {
  it("returns the date with the time set to the last millisecond before a minute ends", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    const result = endOfMinute(date);
    assert.deepStrictEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 59, 999),
    );
  });

  it("accepts a timestamp", () => {
    const result = endOfMinute(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15).getTime(),
    );
    assert.deepStrictEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    endOfMinute(date);
    assert.deepStrictEqual(date, /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfMinute(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
