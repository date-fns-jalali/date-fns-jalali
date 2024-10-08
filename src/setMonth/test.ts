import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { setMonth } from "./index.js";

describe("setMonth", () => {
  it("sets the month", () => {
    const result = setMonth(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 1);
    expect(result).toEqual(/* 1393/2/10 */ new Date(2014, 3 /* Apr */, 30));
  });

  it("sets the last day of the month if the original date was the last day of a longer month", () => {
    const result = setMonth(/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22), 9);
    expect(result).toEqual(/* 1393/10/30 */ new Date(2015, 0 /* Jan */, 20));
  });

  it("accepts a timestamp", () => {
    const result = setMonth(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      11,
    );
    expect(result).toEqual(/* 1393/12/10 */ new Date(2015, 2 /* Mar */, 1));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    setMonth(date, 5);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it.skip("handles dates before 100 AD", () => {
    const initialDate = new Date(0);
    initialDate.setFullYear(0, 11 /* Dec */, 31);
    initialDate.setHours(0, 0, 0, 0);
    const expectedResult = new Date(0);
    expectedResult.setFullYear(0, 1 /* Feb */, 29);
    expectedResult.setHours(0, 0, 0, 0);
    const result = setMonth(initialDate, 1);
    expect(result).toEqual(expectedResult);
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = setMonth(new Date(NaN), 1);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = setMonth(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = setMonth(Date.now(), 2);
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = setMonth(new UTCDate(), 2);
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        setMonth(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 2, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/3/22 */ "2024-06-11T15:00:00.000+08:00");
      expect(
        setMonth(/* 1403/1/22 */ "2024-04-10T07:00:00Z", 2, {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/3/22 */ "2024-06-11T03:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = setMonth(/* 1393/6/10 */ "2014-09-01T00:00:00Z", 45, {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
