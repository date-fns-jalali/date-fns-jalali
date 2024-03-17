import { describe, expect, it } from "vitest";
import { subMinutes } from "./index.js";

describe("subMinutes", () => {
  it("subtracts the given number of minutes", () => {
    const result = subMinutes(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 0),
      30,
    );
    expect(result).toEqual(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 11, 30),
    );
  });

  it("accepts a timestamp", () => {
    const result = subMinutes(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(),
      20,
    );
    expect(result).toEqual(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 11, 40),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 0);
    subMinutes(date, 25);
    expect(date).toEqual(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subMinutes(new Date(NaN), 30);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subMinutes(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 0),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });
});
