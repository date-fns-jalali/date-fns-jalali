import { describe, expect, it } from "vitest";
import { getDate } from "./index.js";

describe("getDate", () => {
  it("returns the day of the month of the given date", () => {
    const result = getDate(/* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29));
    expect(result).toBe(10);
  });

  it("accepts a timestamp", () => {
    const result = getDate(
      /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31).getTime(),
    );
    expect(result).toBe(10);
  });

  it("returns NaN if the given date is invalid", () => {
    const result = getDate(new Date(NaN));
    expect(isNaN(result)).toBe(true);
  });
});
