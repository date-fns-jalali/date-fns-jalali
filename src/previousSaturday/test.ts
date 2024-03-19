import { describe, expect, it } from "vitest";
import { previousSaturday } from "./index.js";

describe("previousSaturday", () => {
  it("returns the previous Saturday given various dates after the same", () => {
    expect(
      previousSaturday(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7)),
    ).toEqual(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5));

    expect(
      previousSaturday(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)),
    ).toEqual(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5));

    expect(
      previousSaturday(/* 1400/3/22 */ new Date(2021, 5 /* Jun */, 12)),
    ).toEqual(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5));

    expect(
      previousSaturday(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)),
    ).toEqual(/* 1400/3/22 */ new Date(2021, 5 /* Jun */, 12));

    expect(
      previousSaturday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
    ).toEqual(/* 1400/3/22 */ new Date(2021, 5 /* Jun */, 12));

    expect(
      previousSaturday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
    ).toEqual(/* 1400/3/29 */ new Date(2021, 5 /* Jun */, 19));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousSaturday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
