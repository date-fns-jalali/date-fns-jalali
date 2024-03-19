import { describe, expect, it } from "vitest";
import { nextTuesday } from "./index.js";

describe("nextTuesday", () => {
  it("returns the following Tuesday given various dates before the same", () => {
    expect(nextTuesday(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23))).toEqual(
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24),
    );

    expect(nextTuesday(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22))).toEqual(
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24),
    );

    expect(
      nextTuesday(/* 1399/1/23 */ new Date(2020, 3 /* Apr */, 11)),
    ).toEqual(/* 1399/1/26 */ new Date(2020, 3 /* Apr */, 14));

    expect(nextTuesday(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20))).toEqual(
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24),
    );

    expect(
      nextTuesday(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19)),
    ).toEqual(/* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24));

    expect(
      nextTuesday(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18)),
    ).toEqual(/* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24));

    expect(
      nextTuesday(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17)),
    ).toEqual(/* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24));
  });
  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextTuesday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
