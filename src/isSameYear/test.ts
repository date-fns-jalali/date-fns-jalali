import { expect, assert, describe, it } from "vitest";
import { isSameYear } from "./index.js";

describe("isSameYear", () => {
  it("returns true if the given dates have the same year", () => {
    const result = isSameYear(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2),
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25),
    );
    assert(result === true);
  });

  it("returns false if the given dates have different years", () => {
    const result = isSameYear(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2),
      /* 1392/7/3 */ new Date(2013, 8 /* Sep */, 25),
    );
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isSameYear(
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2).getTime(),
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime(),
    );
    assert(result === true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameYear(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    assert(result === false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameYear(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    assert(result === false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameYear(new Date(NaN), new Date(NaN));
    assert(result === false);
  });
});
