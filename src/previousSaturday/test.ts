/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { previousSaturday } from "./index.js";

describe("previousSaturday", () => {
  it("returns the previous Saturday given various dates after the same", () => {
    assert.deepStrictEqual(
      previousSaturday(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7)),
      /* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5),
    );

    assert.deepStrictEqual(
      previousSaturday(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)),
      /* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5),
    );

    assert.deepStrictEqual(
      previousSaturday(/* 1400/3/22 */ new Date(2021, 5 /* Jun */, 12)),
      /* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5),
    );

    assert.deepStrictEqual(
      previousSaturday(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)),
      /* 1400/3/22 */ new Date(2021, 5 /* Jun */, 12),
    );

    assert.deepStrictEqual(
      previousSaturday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
      /* 1400/3/22 */ new Date(2021, 5 /* Jun */, 12),
    );

    assert.deepStrictEqual(
      previousSaturday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
      /* 1400/3/29 */ new Date(2021, 5 /* Jun */, 19),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    assert(previousSaturday(new Date(NaN)) instanceof Date);
  });
});
