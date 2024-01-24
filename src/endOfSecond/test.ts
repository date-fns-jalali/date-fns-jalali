import { expect, assert, describe, it } from "vitest";
import { endOfSecond } from "./index.js";

describe("endOfSecond", () => {
  it("returns the date with the time set to the last millisecond before a second ends", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 30);
    const result = endOfSecond(date);
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 30, 999),
    );
  });

  it("accepts a timestamp", () => {
    const result = endOfSecond(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 45).getTime(),
    );
    expect(result).toEqual(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 45, 999),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 15, 300);
    endOfSecond(date);
    expect(date).toEqual(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 15, 300),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = endOfSecond(new Date(NaN));
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
