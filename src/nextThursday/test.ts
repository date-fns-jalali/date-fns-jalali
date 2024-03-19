import { describe, expect, it } from "vitest";
import { nextThursday } from "./index.js";

describe("nextThursday", () => {
  it("returns the following Thursday given various dates before the same", () => {
    expect(
      nextThursday(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23)),
    ).toEqual(/* 1399/3/8 */ new Date(2020, 4 /* May */, 28));

    expect(
      nextThursday(/* 1399/3/2 */ new Date(2020, 4 /* May */, 22)),
    ).toEqual(/* 1399/3/8 */ new Date(2020, 4 /* May */, 28));

    expect(
      nextThursday(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21)),
    ).toEqual(/* 1399/3/8 */ new Date(2020, 4 /* May */, 28));

    expect(
      nextThursday(/* 1399/2/31 */ new Date(2020, 4 /* May */, 20)),
    ).toEqual(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21));

    expect(
      nextThursday(/* 1399/2/30 */ new Date(2020, 4 /* May */, 19)),
    ).toEqual(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21));

    expect(
      nextThursday(/* 1399/2/29 */ new Date(2020, 4 /* May */, 18)),
    ).toEqual(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21));

    expect(
      nextThursday(/* 1399/2/28 */ new Date(2020, 4 /* May */, 17)),
    ).toEqual(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextThursday(new Date(NaN)) instanceof Date).toBe(true);
  });
});
