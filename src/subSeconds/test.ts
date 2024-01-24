import { expect, assert, describe, it } from "vitest";
import { subSeconds } from "./index.js";

describe("subSeconds", () => {
  it("subtracts the given number of seconds", () => {
    const result = subSeconds(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 45, 0),
      30,
    );
    expect(result).toEqual(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 44, 30),
    );
  });

  it("accepts a timestamp", () => {
    const result = subSeconds(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(),
      20,
    );
    expect(result).toEqual(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 44, 40),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 45, 0);
    subSeconds(date, 15);
    expect(date).toEqual(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 45, 0),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = subSeconds(new Date(NaN), 30);
    assert(result instanceof Date && isNaN(result.getTime()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = subSeconds(
      /* 1393/4/19 */ new Date(2014, 6 /* Jul */, 10, 12, 45, 0),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getTime()));
  });
});
