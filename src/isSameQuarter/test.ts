import { describe, expect, it } from "vitest";
import { isSameQuarter } from "./index.js";

describe("isSameQuarter", () => {
  it("returns true if the given dates have the same quarter (and year)", () => {
    const result = isSameQuarter(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1392/12/17 */ new Date(2014, 2 /* Mar */, 8),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given dates have different quarters", () => {
    const result = isSameQuarter(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1392/7/3 */ new Date(2013, 8 /* Sep */, 25),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isSameQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      /* 1393/6/3 */ new Date(2014, 7 /* Sep */, 25).getTime(),
    );
    expect(result).toBe(true);
  });

  it("returns false if the first date is `Invalid Date`", () => {
    const result = isSameQuarter(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
    );
    expect(result).toBe(false);
  });

  it("returns false if the second date is `Invalid Date`", () => {
    const result = isSameQuarter(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN),
    );
    expect(result).toBe(false);
  });

  it("returns false if the both dates are `Invalid Date`", () => {
    const result = isSameQuarter(new Date(NaN), new Date(NaN));
    expect(result).toBe(false);
  });
});
