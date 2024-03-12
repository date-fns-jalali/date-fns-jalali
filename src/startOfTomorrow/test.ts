/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import sinon from "sinon";
import { startOfTomorrow } from "./index.js";

describe("startOfTomorrow", () => {
  it("returns the start of tomorrow", () => {
    const clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime(),
    );

    const result = startOfTomorrow();
    assert.deepStrictEqual(
      result,
      /* 1393/7/4 */ new Date(2014, 8 /* Sep */, 26),
    );

    clock.restore();
  });

  it("handles dates before 100 AD", () => {
    const now = new Date(0);
    now.setFullYear(14, 8 /* Sep */, 25);
    now.setHours(0, 0, 0, 0);
    const clock = sinon.useFakeTimers(now.getTime());

    const expectedResult = new Date(0);
    expectedResult.setFullYear(14, 8 /* Sep */, 26);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfTomorrow();
    assert.deepStrictEqual(result, expectedResult);

    clock.restore();
  });
});
