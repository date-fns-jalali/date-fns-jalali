/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { getWeeksInMonth } from "./index.js";

describe("getWeeksInMonth", () => {
  it("returns the number of calendar weeks the month in the given date spans", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
    );
    assert(result === 4);
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
      },
    );
    assert(result === 5);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        locale: {
          options: { weekStartsOn: 1 },
        },
      },
    );
    assert(result === 5);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
        locale: {
          options: { weekStartsOn: 0 },
        },
      },
    );
    assert(result === 5);
  });

  it("accepts timestamps", () => {
    const result = getWeeksInMonth(
      /* 1396/1/19 */ new Date(2017, 3 /* Apr */, 8, 18, 0).getTime(),
    );
    assert(result === 6);
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    getWeeksInMonth(date);
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
    );
  });

  it("returns NaN if the date is `Invalid Date`", () => {
    const result = getWeeksInMonth(new Date(NaN));
    assert(isNaN(result));
  });
});
