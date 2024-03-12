/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { previousMonday } from "./index.js";

describe("previousMonday", () => {
  it("returns the previous Monday given various dates after the same", () => {
    assert.deepStrictEqual(
      previousMonday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
      /* 1400/3/10 */ new Date(2021, 4 /* May */, 31),
    );

    assert.deepStrictEqual(
      previousMonday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
      /* 1400/3/10 */ new Date(2021, 4 /* May */, 31),
    );

    assert.deepStrictEqual(
      previousMonday(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7)),
      /* 1400/3/10 */ new Date(2021, 4 /* May */, 31),
    );

    assert.deepStrictEqual(
      previousMonday(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14)),
      /* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7),
    );

    assert.deepStrictEqual(
      previousMonday(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)),
      /* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14),
    );

    assert.deepStrictEqual(
      previousMonday(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)),
      /* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    assert(previousMonday(new Date(NaN)) instanceof Date);
  });
});
