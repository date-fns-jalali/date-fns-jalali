import { describe, expect, it } from "vitest";
import { nextDay } from "./index.js";

describe("nextDay", () => {
  it("returns the following Monday given various dates before the same", () => {
    expect(nextDay(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20), 1)).toEqual(
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    expect(
      nextDay(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19), 1),
    ).toEqual(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23));

    expect(
      nextDay(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18), 1),
    ).toEqual(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23));

    expect(
      nextDay(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17), 1),
    ).toEqual(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23));

    expect(
      nextDay(/* 1398/12/26 */ new Date(2020, 2 /* Mar */, 16), 1),
    ).toEqual(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23));

    expect(nextDay(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22), 1)).toEqual(
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextDay(/* 1399/2/13 */ new Date(2020, 4 /* May */, 2), 1)).toEqual(
      /* 1399/2/15 */ new Date(2020, 4 /* May */, 4),
    );
  });

  it("returns the following Tuesday given the Saturday before it", () => {
    expect(nextDay(/* 1399/2/13 */ new Date(2020, 4 /* May */, 2), 2)).toEqual(
      /* 1399/2/16 */ new Date(2020, 4 /* May */, 5),
    );
  });

  it("returns the following Wednesday given the Saturday before it", () => {
    expect(nextDay(/* 1399/2/13 */ new Date(2020, 4 /* May */, 2), 3)).toEqual(
      /* 1399/2/17 */ new Date(2020, 4 /* May */, 6),
    );
  });

  it("returns the following Thursday given the Saturday before it", () => {
    expect(nextDay(/* 1399/2/13 */ new Date(2020, 4 /* May */, 2), 4)).toEqual(
      /* 1399/2/18 */ new Date(2020, 4 /* May */, 7),
    );
  });

  it("returns the following Friday given the Saturday before it", () => {
    expect(nextDay(/* 1399/2/13 */ new Date(2020, 4 /* May */, 2), 5)).toEqual(
      /* 1399/2/19 */ new Date(2020, 4 /* May */, 8),
    );
  });

  it("returns the following Saturday given the Saturday before it", () => {
    expect(nextDay(/* 1399/2/13 */ new Date(2020, 4 /* May */, 2), 6)).toEqual(
      /* 1399/2/20 */ new Date(2020, 4 /* May */, 9),
    );
  });

  it("returns next Sunday given the day is Sunday", () => {
    expect(nextDay(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22), 0)).toEqual(
      /* 1399/1/10 */ new Date(2020, 2 /* Mar */, 29),
    );
  });
});
