import { describe, expect, it } from "vitest";
import { eachWeekendOfYear } from "./index.js";
import { isWeekend } from "../isWeekend/index.js";

describe("eachWeekendOfYear", () => {
  it("returns all weekends of the given year", () => {
    const result = eachWeekendOfYear(/* 1398/10/11 */ new Date(2020, 0, 1));
    expect(result.length).toBe(104);
    expect(result.every(isWeekend)).toBe(true);
    expect(result[0]).toEqual(/* 1398/1/3 */ new Date(2019, 2, 23));
    expect(result[103]).toEqual(/* 1398/12/25 */ new Date(2020, 2, 15));
  });

  it("returns an empty asrray when the expected year is an Invalid Date", () => {
    const result = eachWeekendOfYear(new Date(NaN));
    expect(result).toEqual([]);
  });
});
