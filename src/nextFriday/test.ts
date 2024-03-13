/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { nextFriday } from "./index.js";

describe("nextFriday", () => {
  it("returns the following Friday given various dates before the same", () => {
    assert.deepStrictEqual(
      nextFriday(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23)),
      /* 1399/3/9 */ new Date(2020, 4 /* May */, 29),
    );

    assert.deepStrictEqual(
      nextFriday(/* 1399/3/2 */ new Date(2020, 4 /* May */, 22)),
      /* 1399/3/9 */ new Date(2020, 4 /* May */, 29),
    );

    assert.deepStrictEqual(
      nextFriday(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21)),
      /* 1399/3/2 */ new Date(2020, 4 /* May */, 22),
    );

    assert.deepStrictEqual(
      nextFriday(/* 1399/2/31 */ new Date(2020, 4 /* May */, 20)),
      /* 1399/3/2 */ new Date(2020, 4 /* May */, 22),
    );

    assert.deepStrictEqual(
      nextFriday(/* 1399/2/30 */ new Date(2020, 4 /* May */, 19)),
      /* 1399/3/2 */ new Date(2020, 4 /* May */, 22),
    );

    assert.deepStrictEqual(
      nextFriday(/* 1399/2/29 */ new Date(2020, 4 /* May */, 18)),
      /* 1399/3/2 */ new Date(2020, 4 /* May */, 22),
    );

    assert.deepStrictEqual(
      nextFriday(/* 1399/2/28 */ new Date(2020, 4 /* May */, 17)),
      /* 1399/3/2 */ new Date(2020, 4 /* May */, 22),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    assert(nextFriday(new Date(NaN)) instanceof Date);
  });
});
