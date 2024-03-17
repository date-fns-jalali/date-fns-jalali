import { describe, expect, it } from "vitest";
import { previousDay } from "./index.js";

describe("previousDay", () => {
  it("returns the previous Monday given various dates after the same", () => {
    expect(
      previousDay(/* 1400/3/28 */ new Date(2021, 5 /* Jun */, 18), 1),
    ).toEqual(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14));

    expect(
      previousDay(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17), 1),
    ).toEqual(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14));

    expect(
      previousDay(/* 1400/3/24 */ new Date(2021, 5 /* Jun */, 14), 1),
    ).toEqual(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7));

    expect(
      previousDay(/* 1400/3/19 */ new Date(2021, 5 /* Jun */, 9), 1),
    ).toEqual(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7));

    expect(
      previousDay(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8), 1),
    ).toEqual(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7));

    expect(
      previousDay(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7), 1),
    ).toEqual(/* 1400/3/10 */ new Date(2021, 4 /* May */, 31));
  });

  it("returns the previous Tuesday given the Saturday after it", () => {
    expect(
      previousDay(/* 1400/4/5 */ new Date(2021, 5 /* Jun */, 26), 2),
    ).toEqual(/* 1400/4/1 */ new Date(2021, 5 /* Jun */, 22));
  });

  it("returns the previous Wednesday given the Saturday after it", () => {
    expect(
      previousDay(/* 1400/4/5 */ new Date(2021, 5 /* Jun */, 26), 3),
    ).toEqual(/* 1400/4/2 */ new Date(2021, 5 /* Jun */, 23));
  });

  it("returns the previous Thursday given the Saturday after it", () => {
    expect(
      previousDay(/* 1400/4/5 */ new Date(2021, 5 /* Jun */, 26), 4),
    ).toEqual(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24));
  });

  it("returns the previous Friday given the Saturday after it", () => {
    expect(
      previousDay(/* 1400/4/5 */ new Date(2021, 5 /* Jun */, 26), 5),
    ).toEqual(/* 1400/4/4 */ new Date(2021, 5 /* Jun */, 25));
  });

  it("returns the previous Saturday given the Saturday after it", () => {
    expect(
      previousDay(/* 1400/4/5 */ new Date(2021, 5 /* Jun */, 26), 6),
    ).toEqual(/* 1400/3/29 */ new Date(2021, 5 /* Jun */, 19));
  });

  it("returns the previous Sunday given the day is Sunday", () => {
    expect(
      previousDay(/* 1400/4/6 */ new Date(2021, 5 /* Jun */, 27), 0),
    ).toEqual(/* 1400/3/30 */ new Date(2021, 5 /* Jun */, 20));
  });
});
