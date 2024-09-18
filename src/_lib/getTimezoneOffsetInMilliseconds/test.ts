import { describe, expect, it } from "vitest";
import { getTimezoneOffsetInMilliseconds } from "./index.js";

describe("getTimezoneOffsetInMilliseconds", () => {
  it("works for a modern date", () => {
    const date = /* 1396/10/11 */ new Date(
      2018,
      0 /* Jan */,
      1,
      12,
      34,
      56,
      789,
    );
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date);
    const expectedResult = /* 1396/10/11 */ Date.UTC(
      2018,
      0,
      /* Jan */ 1,
      12,
      34,
      56,
      789,
    );
    expect(result).toBe(expectedResult);
  });

  it("works for a date before standardized timezones", () => {
    const date = /* 1178/10/11 */ new Date(
      1800,
      0 /* Jan */,
      1,
      12,
      34,
      56,
      789,
    );
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date);
    const expectedResult = /* 1178/10/11 */ Date.UTC(
      1800,
      0,
      /* Jan */ 1,
      12,
      34,
      56,
      789,
    );
    expect(result).toBe(expectedResult);
  });

  it("works for a date BC", () => {
    const date = /* -1122/10/10 */ new Date(
      -500,
      0 /* Jan */,
      1,
      12,
      34,
      56,
      789,
    );
    const result = date.getTime() - getTimezoneOffsetInMilliseconds(date);
    const expectedResult = /* -1122/10/10 */ Date.UTC(
      -500,
      0,
      /* Jan */ 1,
      12,
      34,
      56,
      789,
    );
    expect(result).toBe(expectedResult);
  });
});
