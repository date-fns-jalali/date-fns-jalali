import { describe, expect, it } from "vitest";
import { previousSunday } from "./index.js";

describe("previousSunday", () => {
  it("returns the previous Sunday given various dates after the same", () => {
    expect(
      previousSunday(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7)),
    ).toEqual(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6));

    expect(
      previousSunday(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)),
    ).toEqual(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6));

    expect(
      previousSunday(/* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13)),
    ).toEqual(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6));

    expect(
      previousSunday(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)),
    ).toEqual(/* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13));

    expect(
      previousSunday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
    ).toEqual(/* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13));

    expect(
      previousSunday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
    ).toEqual(/* 1400/3/30 */ new Date(2021, 5 /* Jun */, 20));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousSunday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
