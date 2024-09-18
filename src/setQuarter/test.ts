import { describe, expect, it } from "vitest";
import { setQuarter } from "./index.js";
import { assertType } from "../_lib/test/index.js";
import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";

describe("setQuarter", () => {
  it("sets the quarter of the year", () => {
    const result = setQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      1,
    );
    expect(result).toEqual(/* 1393/1/11 */ new Date(2014, 2 /* Mar */, 31));
  });

  it("sets the last day of the month if the original date was the last day of a longer month", () => {
    const result = setQuarter(
      /* 1393/5/31 */ new Date(2014, 7 /* Aug */, 22),
      3,
    );
    expect(result).toEqual(/* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21));
  });

  it("accepts a timestamp", () => {
    const result = setQuarter(
      /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1).getTime(),
      4,
    );
    expect(result).toEqual(/* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1);
    setQuarter(date, 2);
    expect(date).toEqual(/* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 10 /* Nov */, 30);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setQuarter(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setQuarter(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setQuarter(Date.now(), 2);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setQuarter(new UTCDate(), 2);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setQuarter(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 2, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/4/22 */ "2024-07-12T15:00:00.000+08:00");
      expect(
        setQuarter(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 2, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/4/22 */ "2024-07-12T03:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = setQuarter(/* 1393/6/10 */ "2014-09-01T00:00:00Z", 45, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
