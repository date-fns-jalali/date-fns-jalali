import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import { isFuture } from "./index.js";

describe("isFuture", () => {
  fakeDate(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));

  it("returns true if the given date is in the future", () => {
    const result = isFuture(/* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31));
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the past", () => {
    const result = isFuture(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
    expect(result).toBe(false);
  });

  it("returns false if the given date is now", () => {
    const result = isFuture(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isFuture(
      /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31).getTime(),
    );
    expect(result).toBe(true);
  });
});
