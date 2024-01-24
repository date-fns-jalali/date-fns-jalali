/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { setWeek } from "./index.js";

describe("setWeek", () => {
  it("sets the local week", () => {
    const result = setWeek(/* 1384/2/27 */ new Date(2005, 4 /* May */, 17), 1);
    assert.deepStrictEqual(
      result,
      /* 1384/1/2 */ new Date(2005, 2 /* Mar */, 22),
    );
  });

  it("accepts a timestamp", () => {
    const result = setWeek(
      /* 1388/9/11 */ new Date(2009, 11 /* Dec */, 2).getTime(),
      1,
    );
    assert.deepStrictEqual(
      result,
      /* 1388/1/5 */ new Date(2009, 2 /* Mar */, 25),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2);
    setWeek(date, 52);
    assert.deepStrictEqual(
      date,
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
    );
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(4, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(4, 11 /* Dec */, 19);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setWeek(initialDate, 52);
    assert.deepStrictEqual(result, expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setWeek(new Date(NaN), 53);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setWeek(/* 1383/5/17 */ new Date(2004, 7 /* Aug */, 7), NaN);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = /* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2);
    const result = setWeek(date, 1, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    assert.deepStrictEqual(
      result,
      /* 1383/1/9 */ new Date(2004, 2 /* Mar */, 28),
    );
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = /* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2);
    const result = setWeek(date, 1, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    assert.deepStrictEqual(
      result,
      /* 1383/1/9 */ new Date(2004, 2 /* Mar */, 28),
    );
  });
});
