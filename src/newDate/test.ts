/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { newDate } from "./index.js";

describe("newDate", function () {
  it("create a date", function () {
    const result = newDate(1393, 6 /* Mehr */, 8);
    assert.deepStrictEqual(
      result,
      /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30),
    );
  });
  it("create a date with time", function () {
    const result = newDate(1393, 6 /* Mehr */, 8, 20, 40);
    assert.deepStrictEqual(
      result,
      /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30, 20, 40),
    );
  });
});
