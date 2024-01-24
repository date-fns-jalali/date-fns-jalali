import { expect, assert, describe, it } from "vitest";
import { isFriday } from "./index.js";

describe("isFriday", () => {
  it("returns true if the given date is Friday", () => {
    const result = isFriday(/* 1393/7/4 */ new Date(2014, 8 /* Sep */, 26));
    assert(result === true);
  });

  it("returns false if the given date is not Friday", () => {
    const result = isFriday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isFriday(
      /* 1392/11/25 */ new Date(2014, 1 /* Feb */, 14).getTime(),
    );
    assert(result === true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isFriday(new Date(NaN));
    assert(result === false);
  });
});
