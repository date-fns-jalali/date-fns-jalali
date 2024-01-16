/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { previousThursday } from "./index.js";

describe("previousThursday", () => {
  it("returns the previous Thursday given various dates after the same", () => {
    assert.deepStrictEqual(
      previousThursday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
      /* 1400/3/13 */ new Date(2021, 5 /* Jun */, 3),
    );

    assert.deepStrictEqual(
      previousThursday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
      /* 1400/3/13 */ new Date(2021, 5 /* Jun */, 3),
    );

    assert.deepStrictEqual(
      previousThursday(/* 1400/3/20 */ new Date(2021, 5 /* Jun */, 10)),
      /* 1400/3/13 */ new Date(2021, 5 /* Jun */, 3),
    );

    assert.deepStrictEqual(
      previousThursday(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14)),
      /* 1400/3/20 */ new Date(2021, 5 /* Jun */, 10),
    );

    assert.deepStrictEqual(
      previousThursday(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)),
      /* 1400/3/20 */ new Date(2021, 5 /* Jun */, 10),
    );

    assert.deepStrictEqual(
      previousThursday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
      /* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    assert(previousThursday(new Date(NaN)) instanceof Date);
  });
});
