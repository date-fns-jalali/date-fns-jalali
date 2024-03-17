import { describe, expect, it } from "vitest";
import { previousWednesday } from "./index.js";

describe("previousWednesday", () => {
  it("returns the previous Wednesday given various dates after the same", () => {
    expect(
      previousWednesday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
    ).toEqual(/* 1400/3/12 */ new Date(2021, 5 /* Jun */, 2));

    expect(
      previousWednesday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
    ).toEqual(/* 1400/3/12 */ new Date(2021, 5 /* Jun */, 2));

    expect(
      previousWednesday(/* 1400/3/19 */ new Date(2021, 5 /* Jun */, 9)),
    ).toEqual(/* 1400/3/12 */ new Date(2021, 5 /* Jun */, 2));

    expect(
      previousWednesday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
    ).toEqual(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16));

    expect(
      previousWednesday(/* 1400/3/28 */ new Date(2021, 5 /* Jun */, 18)),
    ).toEqual(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16));

    expect(
      previousWednesday(/* 1400/4/4 */ new Date(2021, 5 /* Jun */, 25)),
    ).toEqual(/* 1400/4/2 */ new Date(2021, 5 /* Jun */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousWednesday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
