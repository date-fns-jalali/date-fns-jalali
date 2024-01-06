/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { isExists } from "./index.js";

describe("isValid", () => {
  it("returns true if the given date is valid", () => {
    const result = isExists(1399, 0, 31);
    assert(result === true);
  });

  it("returns false if the given date is invalid", () => {
    const result = isExists(1399, 10 /* Azar */, 31);
    assert(result === false);
  });
});
