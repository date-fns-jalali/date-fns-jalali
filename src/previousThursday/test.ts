import { describe, expect, it } from "vitest";
import { previousThursday } from "./index.js";

describe("previousThursday", () => {
  it("returns the previous Thursday given various dates after the same", () => {
    expect(
      previousThursday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
    ).toEqual(/* 1400/3/13 */ new Date(2021, 5 /* Jun */, 3));

    expect(
      previousThursday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
    ).toEqual(/* 1400/3/13 */ new Date(2021, 5 /* Jun */, 3));

    expect(
      previousThursday(/* 1400/3/20 */ new Date(2021, 5 /* Jun */, 10)),
    ).toEqual(/* 1400/3/13 */ new Date(2021, 5 /* Jun */, 3));

    expect(
      previousThursday(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14)),
    ).toEqual(/* 1400/3/20 */ new Date(2021, 5 /* Jun */, 10));

    expect(
      previousThursday(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)),
    ).toEqual(/* 1400/3/20 */ new Date(2021, 5 /* Jun */, 10));

    expect(
      previousThursday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
    ).toEqual(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousThursday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
