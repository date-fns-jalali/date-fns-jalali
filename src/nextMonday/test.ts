import { describe, expect, it } from "vitest";
import { nextMonday } from "./index.js";

describe("nextMonday", () => {
  it("returns the following Monday given various dates before the same", () => {
    expect(nextMonday(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23))).toEqual(
      /* 1399/1/11 */ new Date(2020, 2 /* Mar */, 30),
    );

    expect(nextMonday(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22))).toEqual(
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    expect(nextMonday(/* 1399/1/23 */ new Date(2020, 3 /* Apr */, 11))).toEqual(
      /* 1399/1/25 */ new Date(2020, 3 /* Apr */, 13),
    );

    expect(nextMonday(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20))).toEqual(
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23),
    );

    expect(
      nextMonday(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19)),
    ).toEqual(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23));

    expect(
      nextMonday(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18)),
    ).toEqual(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23));

    expect(
      nextMonday(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17)),
    ).toEqual(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextMonday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
