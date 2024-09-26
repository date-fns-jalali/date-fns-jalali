import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { nextSaturday } from "./index.js";

describe("nextSaturday", () => {
  it("returns the following Saturday given various dates before the same", () => {
    expect(
      nextSaturday(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23)),
    ).toEqual(/* 1399/3/10 */ new Date(2020, 4 /* May */, 30));

    expect(
      nextSaturday(/* 1399/3/2 */ new Date(2020, 4 /* May */, 22)),
    ).toEqual(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23));

    expect(
      nextSaturday(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21)),
    ).toEqual(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23));

    expect(
      nextSaturday(/* 1399/2/31 */ new Date(2020, 4 /* May */, 20)),
    ).toEqual(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23));

    expect(
      nextSaturday(/* 1399/2/30 */ new Date(2020, 4 /* May */, 19)),
    ).toEqual(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23));

    expect(
      nextSaturday(/* 1399/2/29 */ new Date(2020, 4 /* May */, 18)),
    ).toEqual(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23));

    expect(
      nextSaturday(/* 1399/2/28 */ new Date(2020, 4 /* May */, 17)),
    ).toEqual(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(nextSaturday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = nextSaturday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = nextSaturday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        nextSaturday(/* 1403/1/22 */ "2024-04-10T10:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/25 */ "2024-04-13T18:00:00.000+08:00");
      expect(
        nextSaturday(/* 1403/1/22 */ "2024-04-10T16:00:00Z", {
          in: tz("America/New_York"),
        }).toISOString(),
      ).toBe(/* 1403/1/25 */ "2024-04-13T12:00:00.000-04:00");
    });

    it("resolves the context date type", () => {
      const result = nextSaturday(/* 1393/6/10 */ "2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
