/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { isValid } from "./index.js";

describe("isValid", () => {
  it("returns true if the given date is valid", () => {
    const result = isValid(new Date());
    assert(result === true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isValid(new Date(""));
    assert(result === false);
  });

  it("accepts a timestamp", () => {
    assert(
      isValid(/* 1392/11/22 */ new Date(2014, 1 /* Feb */, 11).getTime()) ===
        true,
    );
    assert(isValid(NaN) === false);
  });

  it("treats null as an invalid date", () => {
    const result = isValid(null);
    assert(result === false);
  });
});
