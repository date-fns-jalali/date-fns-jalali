import { describe, expect, it } from "vitest";
import { isLastDayOfMonth } from "./index.js";

describe("isLastDayOfMonth", () => {
  it("returns true if the given date is in the last day of month", () => {
    const result = isLastDayOfMonth(
      /* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21),
    );
    expect(result).toBe(true);
  });

  it("returns false if the given date is not in the last day of month", () => {
    const result = isLastDayOfMonth(
      /* 1393/8/8 */ new Date(2014, 9 /* Oct */, 30),
    );
    expect(result).toBe(false);
  });

  it("accepts a timestamp", () => {
    const date = /* 1393/8/30 */ new Date(2014, 10 /* Oct */, 21).getTime();
    const result = isLastDayOfMonth(date);
    expect(result).toBe(true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isLastDayOfMonth(new Date(NaN));
    expect(result).toBe(false);
  });
});
