/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { subHours } from "./index.js";

describe("subHours", () => {
  it("subtracts the given numbers of hours", () => {
    const result = subHours(
      /* 1393/4/20 */ new Date(2014, 6 /* Jul */, 11, 1, 0),
      2,
    );
    assert.deepStrictEqual(
      result,
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 23, 0),
    );
  });

  it("accepts a timestamp", () => {
    const result = subHours(
      /* 1393/4/21 */ new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(),
      26,
    );
    assert.deepStrictEqual(
      result,
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 23, 0),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 23, 0);
    subHours(date, 10);
    assert.deepStrictEqual(
      date,
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 23, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subHours(new Date(NaN), 2);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subHours(
      /* 1393/4/20 */ new Date(2014, 6 /* Jul */, 11, 1, 0),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
