import { describe, expect, it } from "vitest";
import { previousTuesday } from "./index.js";

describe("previousTuesday", () => {
  it("returns the previous Tuesday given various dates after the same", () => {
    expect(
      previousTuesday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
    ).toEqual(/* 1400/3/11 */ new Date(2021, 5 /* Jun */, 1));

    expect(
      previousTuesday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
    ).toEqual(/* 1400/3/11 */ new Date(2021, 5 /* Jun */, 1));

    expect(
      previousTuesday(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)),
    ).toEqual(/* 1400/3/11 */ new Date(2021, 5 /* Jun */, 1));

    expect(
      previousTuesday(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)),
    ).toEqual(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8));

    expect(
      previousTuesday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
    ).toEqual(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15));

    expect(
      previousTuesday(/* 1400/3/28 */ new Date(2021, 5 /* Jun */, 18)),
    ).toEqual(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousTuesday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
