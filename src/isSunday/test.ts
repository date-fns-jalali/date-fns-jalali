import { expect, assert, describe, it } from "vitest";
import { isSunday } from "./index.js";

describe("isSunday", () => {
  it("returns true if the given date is Sunday", () => {
    const result = isSunday(/* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21));
    assert(result === true);
  });

  it("returns false if the given date is not Sunday", () => {
    const result = isSunday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isSunday(
      /* 1392/11/20 */ new Date(2014, 1 /* Feb */, 9).getTime(),
    );
    assert(result === true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isSunday(new Date(NaN));
    assert(result === false);
  });
});
