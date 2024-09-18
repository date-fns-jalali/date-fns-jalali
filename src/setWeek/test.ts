import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setWeek } from "./index.js";

describe("setWeek", () => {
  it("sets the local week", () => {
    const result = setWeek(/* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2), 1);
    expect(result).toEqual(/* 1383/10/6 */ new Date(2004, 11 /* Dec */, 26));
  });

  it("accepts a timestamp", () => {
    const result = setWeek(
      /* 1388/9/11 */ new Date(2009, 11 /* Dec */, 2).getTime(),
      1,
    );
    expect(result).toEqual(/* 1387/10/11 */ new Date(2008, 11 /* Dec */, 31));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2);
    setWeek(date, 52);
    expect(date).toEqual(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2));
  });

  it("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(4, 0 /* Jan */, 4);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(4, 11 /* Dec */, 19);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setWeek(initialDate, 52);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setWeek(new Date(NaN), 53);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setWeek(/* 1383/5/17 */ new Date(2004, 7 /* Aug */, 7), NaN);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale", () => {
    const date = /* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2);
    const result = setWeek(date, 1, {
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    });
    expect(result).toEqual(/* 1382/10/14 */ new Date(2004, 0 /* Jan */, 4));
  });

  it("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
    const date = /* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2);
    const result = setWeek(date, 1, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    });
    expect(result).toEqual(/* 1382/10/14 */ new Date(2004, 0 /* Jan */, 4));
  });

  it("resolves the date type by default", () => {
    const result = setWeek(Date.now(), 1);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setWeek(new UTCDate(), 1);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setWeek(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 1, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1402/10/13 */ "2024-01-03T15:00:00.000+08:00");
      expect(
        setWeek(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 1, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1402/10/13 */ "2024-01-03T03:00:00.000-05:00");
    });

    it("resolves the context date type", () => {
      const result = setWeek(/* 1393/6/10 */ "2014-09-01T00:00:00Z", 1, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
