import { describe, expect, it } from "vitest";
import { previousMonday } from "./index.js";

describe("previousMonday", () => {
  it("returns the previous Monday given various dates after the same", () => {
    expect(
      previousMonday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
    ).toEqual(/* 1400/3/10 */ new Date(2021, 4 /* May */, 31));

    expect(
      previousMonday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
    ).toEqual(/* 1400/3/10 */ new Date(2021, 4 /* May */, 31));

    expect(
      previousMonday(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7)),
    ).toEqual(/* 1400/3/10 */ new Date(2021, 4 /* May */, 31));

    expect(
      previousMonday(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14)),
    ).toEqual(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7));

    expect(
      previousMonday(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)),
    ).toEqual(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14));

    expect(
      previousMonday(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)),
    ).toEqual(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousMonday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
