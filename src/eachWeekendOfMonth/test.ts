import { describe, expect, it } from "vitest";
import { eachWeekendOfMonth } from "./index.js";

describe("eachWeekendOfMonth", () => {
  it("returns all weekends of the given month", () => {
    const result = eachWeekendOfMonth(/* 1400/12/1 */ new Date(2022, 1, 20));
    expect(result).toEqual([
      /* 1400/11/16 */ new Date(2022, 1, 5),
      /* 1400/11/17 */ new Date(2022, 1, 6),
      /* 1400/11/23 */ new Date(2022, 1, 12),
      /* 1400/11/24 */ new Date(2022, 1, 13),
      /* 1400/11/30 */ new Date(2022, 1, 19),
      /* 1400/12/1 */ new Date(2022, 1, 20),
      /* 1400/12/7 */ new Date(2022, 1, 26),
      /* 1400/12/8 */ new Date(2022, 1, 27),
    ]);
  });

  it("returns an empty asrray when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfMonth(new Date(NaN));
    expect(result).toEqual([]);
  });
});
