import { expect, assert, describe, it } from "vitest";
import { setWeekYear } from "./index.js";

describe("setWeekYear", () => {
  it("sets the local week-numbering year, saving the week and the day of the week", () => {
    const result = setWeekYear(
      /* 1388/1/2 */ new Date(2009, 2 /* Mar */, 22),
      1382,
    );
    expect(result).toEqual(/* 1381/12/25 */ new Date(2003, 2 /* Mar */, 16));
  });

  it("accepts a timestamp", () => {
    const result = setWeekYear(
      /* 1387/12/29 */ new Date(2009, 2 /* Mar */, 19).getTime(),
      1380,
    );
    expect(result).toEqual(/* 1381/1/1 */ new Date(2002, 2 /* Mar */, 21));
  });

  it("does not mutate the original date", () => {
    const date = /* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29);
    setWeekYear(date, 2000);
    expect(date).toEqual(/* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29));
  });

  it.skip("sets local week-numbering years less than 100", () => {
    const initialDate = /* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(8, 11 /* Dec */, 29);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(7, 0 /* Jan */, 1);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setWeekYear(initialDate, 7);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setWeekYear(new Date(NaN), 2007);
    assert(result instanceof Date && isNaN(result.getDate()));
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setWeekYear(
      /* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29),
      NaN,
    );
    assert(result instanceof Date && isNaN(result.getDate()));
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = /* 1388/1/6 */ new Date(2009, 2 /* Mar */, 26);
    const result = setWeekYear(date, 1382, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toEqual(/* 1382/1/7 */ new Date(2003, 2 /* Mar */, 27));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = /* 1388/1/6 */ new Date(2009, 2 /* Mar */, 26);
    const result = setWeekYear(date, 1382, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toEqual(/* 1382/1/7 */ new Date(2003, 2 /* Mar */, 27));
  });
});
