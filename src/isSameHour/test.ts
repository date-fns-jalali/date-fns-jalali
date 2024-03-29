import { describe, expect, it } from "vitest";
import { isSameHour } from "./index.js";

describe("isSameHour", () => {
  it("returns true if the given dates have the same hour", () => {
    const result = isSameHour(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 0),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 30),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different hours", () => {
    const result = isSameHour(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 0),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 5, 0),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameHour(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameHour(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameHour(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameHour(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
