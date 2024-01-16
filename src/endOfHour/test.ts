/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { endOfHour } from "./index.js";

describe("endOfHour", () => {
  it("returns the date with the time set to the last millisecond before an hour ends", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    const result = endOfHour(date);
    assert.deepStrictEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 59, 59, 999),
    );
  });

  it("accepts a timestamp", () => {
    const result = endOfHour(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15).getTime(),
    );
    assert.deepStrictEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    endOfHour(date);
    assert.deepStrictEqual(date, /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfHour(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
