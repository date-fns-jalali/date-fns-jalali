/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { nextMonday } from "./index.js";

describe("nextMonday", () => {
  it("returns the following Monday given various dates before the same", () => {
    assert.deepStrictEqual(
      nextMonday(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)),
      /* 1399/1/11 */ new Date(2020, 2 /* Mar */, 30),
    );

    assert.deepStrictEqual(
      nextMonday(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22)),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    assert.deepStrictEqual(
      nextMonday(/* 1399/1/23 */ new Date(2020, 3 /* Apr */, 11)),
      /* 1399/1/25 */ new Date(2020, 3 /* Apr */, 13),
    );

    assert.deepStrictEqual(
      nextMonday(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20)),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    assert.deepStrictEqual(
      nextMonday(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19)),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    assert.deepStrictEqual(
      nextMonday(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18)),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    assert.deepStrictEqual(
      nextMonday(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17)),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    assert(nextMonday(new Date(NaN)) instanceof Date);
  });
});
