import { describe, expect, it } from "vitest";
import { startOfWeekYear } from "./index.js";

describe("startOfWeekYear", () => {
  it("returns the date with the time set to 00:00:00 and the date set to the first day of a week year", () => {
    const result = startOfWeekYear(
      /* 1384/4/11 */ new Date(2005, 6 /* Jul */, 2),
    );
    expect(result).toEqual(
      /* 1383/12/29 */ new Date(2005, 2 /* Mar */, 19, 0, 0, 0, 0),
    );
  });

  it("accepts a timestamp", () => {
    const result = startOfWeekYear(
      /* 1383/10/12 */ new Date(2005, 0 /* Jan */, 1, 6, 0).getTime(),
    );
    expect(result).toEqual(
      /* 1383/1/1 */ new Date(2004, 2 /* Mar */, 20, 0, 0, 0, 0),
    );
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2);
    startOfWeekYear(date);
    expect(date).toEqual(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(9, 0 /* Jan */, 1);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(8, 11 /* Dec */, 28);
    expectedResult.setHours(0, 0, 0, 0);
    const result = startOfWeekYear(initialDate);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = startOfWeekYear(new Date(NaN));
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = /* 1384/4/11 */ new Date(2005, 6 /* Jul */, 2);
    const result = startOfWeekYear(date, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toEqual(
      /* 1384/1/1 */ new Date(2005, 2 /* Mar */, 21, 0, 0, 0, 0),
    );
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = /* 1384/4/11 */ new Date(2005, 6 /* Jul */, 2);
    const result = startOfWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toEqual(
      /* 1384/1/1 */ new Date(2005, 2 /* Mar */, 21, 0, 0, 0, 0),
    );
  });
});
