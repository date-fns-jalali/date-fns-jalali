/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { setDayOfYear } from "./index.js";

describe("setDayOfYear", () => {
  it("sets the day of the year", () => {
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      2,
    );
    assert.deepStrictEqual(
      result,
      /* 1392/10/12 */ new Date(2014, 0 /* Jan */, 2),
    );
  });

  it("accepts a timestamp", () => {
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      60,
    );
    assert.deepStrictEqual(
      result,
      /* 1392/12/10 */ new Date(2014, 2 /* Mar */, 1),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2);
    setDayOfYear(date, 365);
    assert.deepStrictEqual(
      date,
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setDayOfYear(new Date(NaN), 2);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
