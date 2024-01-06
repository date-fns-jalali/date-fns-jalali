import { expect, assert, describe, it } from "vitest";
import { getDecade } from "./index.js";

describe("getDecade", () => {
  it("returns the decade for a the given date", () => {
    const result = getDecade(/* 1350/8/17 */ new Date(1971, 10 /* Nov */, 8));
    assert(result === 1350);
  });

  it("accepts a timestamp", () => {
    const result = getDecade(
      /* 1348/4/29 */ new Date(1969, 6 /* Jul */, 20).getTime(),
    );
    assert(result === 1340);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDecade(new Date(NaN));
    assert(isNaN(result));
  });

  it("properly works with negative numbers", () => {
    expect(getDecade(/* 1387/10/12 */ new Date(2009, 0, 1))).toBe(1380);
    expect(getDecade(/* -2623/10/10 */ new Date(-2001, 0, 1))).toBe(-2630);
  });
});
