import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import { isPast } from "./index.js";

describe("isPast", () => {
  fakeDate(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));

  it("returns true if the given date is in the past", () => {
    const result = isPast(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2));
    expect(result).toBe(true);
  });

  it("returns false if the given date is in the future", () => {
    const result = isPast(/* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31));
    expect(result).toBe(false);
  });

  it("returns false if the given date is now", () => {
    const result = isPast(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const result = isPast(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
    );
    expect(result).toBe(true);
  });
});
