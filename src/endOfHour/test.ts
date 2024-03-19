import { describe, expect, it } from "vitest";
import { endOfHour } from "./index.js";

describe("endOfHour", () => {
  it("returns the date with the time set to the last millisecond before an hour ends", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    const result = endOfHour(date);
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 59, 59, 999),
    );
  });

  it("accepts a timestamp", () => {
    const result = endOfHour(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15).getTime(),
    );
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 59, 59, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15);
    endOfHour(date);
    expect(date).toEqual(/* 1393/9/10 */ new Date(2014, 11, 1, 22, 15));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfHour(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
