/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { isLeapYear } from "./index.js";

describe("isLeapYear", () => {
  it("returns true if the given date is in the leap year", () => {
    const result = isLeapYear(/* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2));
    assert(result === true);
  });

  it("returns false if the given date is not in the leap year", () => {
    const result = isLeapYear(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2));
    assert(result === false);
  });

  it("works for the years divisible by 100 but not by 400", () => {
    const result = isLeapYear(/* 1479/4/11 */ new Date(2100, 6 /* Jul */, 2));
    assert(result === false);
  });

  it("works for the years divisible by 400", () => {
    const result = isLeapYear(/* 1379/4/12 */ new Date(2000, 6 /* Jul */, 2));
    assert(result === true);
  });

  it("accepts a timestamp", () => {
    const date = /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2).getTime();
    const result = isLeapYear(date);
    assert(result === true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isLeapYear(new Date(NaN));
    assert(result === false);
  });
});
