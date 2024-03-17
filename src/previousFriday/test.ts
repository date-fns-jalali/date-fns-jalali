import { describe, expect, it } from "vitest";
import { previousFriday } from "./index.js";

describe("previousFriday", () => {
  it("returns the previous Friday given various dates after the same", () => {
    expect(
      previousFriday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
    ).toEqual(/* 1400/3/14 */ new Date(2021, 5 /* Jun */, 4));

    expect(
      previousFriday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
    ).toEqual(/* 1400/3/14 */ new Date(2021, 5 /* Jun */, 4));

    expect(
      previousFriday(/* 1400/3/21 */ new Date(2021, 5 /* Jun */, 11)),
    ).toEqual(/* 1400/3/14 */ new Date(2021, 5 /* Jun */, 4));

    expect(
      previousFriday(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14)),
    ).toEqual(/* 1400/3/21 */ new Date(2021, 5 /* Jun */, 11));

    expect(
      previousFriday(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)),
    ).toEqual(/* 1400/3/21 */ new Date(2021, 5 /* Jun */, 11));

    expect(
      previousFriday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
    ).toEqual(/* 1400/3/28 */ new Date(2021, 5 /* Jun */, 18));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousFriday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
