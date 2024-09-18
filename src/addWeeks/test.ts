import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { addWeeks } from "./index.js";
import { assertType } from "../_lib/test/index.js";

describe("addWeeks", () => {
  it("adds the given number of weeks", () => {
    const result = addWeeks(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 4);
    expect(result).toEqual(/* 1393/7/7 */ new Date(2014, 8 /* Sep */, 29));
  });

  it("accepts a timestamp", () => {
    const result = addWeeks(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      1,
    );
    expect(result).toEqual(/* 1393/6/17 */ new Date(2014, 8 /* Sep */, 8));
  });

  it("does not mutate the original date", () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1);
    addWeeks(date, 2);
    expect(date).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    const result = addWeeks(new Date(NaN), 4);
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  it("returns `Invalid Date` if the given amount is NaN", () => {
    const result = addWeeks(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN,
    );
    expect(result instanceof Date && isNaN(result.getTime())).toBe(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        addWeeks(/* 1403/1/13 */ "2024-04-01T15:00:00Z", 1, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/20 */ "2024-04-08T23:00:00.000+08:00");
      expect(
        addWeeks(/* 1403/1/13 */ "2024-04-01T16:00:00Z", 1, {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/21 */ "2024-04-09T00:00:00.000+08:00");
    });

    it("resolves the context date type", () => {
      const result = addWeeks(
        new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z"),
        1,
        {
          in: tz("Asia/Tokyo"),
        },
      );
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
