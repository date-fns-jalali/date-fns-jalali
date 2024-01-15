/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { isThursday } from "./index.js";

describe("isThursday", () => {
  it("returns true if the given date is Thursday", () => {
    const result = isThursday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25));
    assert(result === true);
  });

  it("returns false if the given date is not Thursday", () => {
    const result = isThursday(/* 1393/7/2 */ new Date(2014, 8 /* Sep */, 24));
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    const result = isThursday(
      /* 1392/11/24 */ new Date(2014, 1 /* Feb */, 13).getTime(),
    );
    assert(result === true);
  });

  it("returns false if the given date is `Invalid Date`", () => {
    const result = isThursday(new Date(NaN));
    assert(result === false);
  });
});
