import { expect, assert, describe, it } from "vitest";
import { previousSunday } from "./index.js";

describe("previousSunday", () => {
  it("returns the previous Sunday given various dates after the same", () => {
    assert.deepStrictEqual(
      previousSunday(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7)),
      /* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6),
    );

    assert.deepStrictEqual(
      previousSunday(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)),
      /* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6),
    );

    assert.deepStrictEqual(
      previousSunday(/* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13)),
      /* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6),
    );

    assert.deepStrictEqual(
      previousSunday(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)),
      /* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13),
    );

    assert.deepStrictEqual(
      previousSunday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
      /* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13),
    );

    assert.deepStrictEqual(
      previousSunday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
      /* 1400/3/30 */ new Date(2021, 5 /* Jun */, 20),
    );
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    assert(previousSunday(new Date(NaN)) instanceof Date);
  });
});
