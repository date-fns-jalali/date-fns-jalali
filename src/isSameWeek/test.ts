import { expect, assert, describe, it } from "vitest";
import { isSameWeek } from "./index.js";

describe("isSameWeek", () => {
  it("returns true if the given dates have the same week", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
    );
    assert(result === true);
  });

  it("returns false if the given dates have different weeks", () => {
    const result = isSameWeek(
      /* 1393/6/7 */ new Date(2014, 7 /* Aug */, 29),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
    );
    assert(result === false);
  });

  it("allows to specify which day is the first day of the week", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      { weekStartsOn: 1 },
    );
    assert(result === false);
  });

  it("allows to specify which day is the first day of the week in locale", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      {
        locale: {
          options: { weekStartsOn: 1 },
        },
      },
    );
    assert(result === false);
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      {
        weekStartsOn: 1,
        locale: {
          options: { weekStartsOn: 0 },
        },
      },
    );
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31).getTime(),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4).getTime(),
    );
    assert(result === true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameWeek(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    assert(result === false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameWeek(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    assert(result === false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameWeek(new Date(NaN), new Date(NaN));
    assert(result === false);
  });
});
