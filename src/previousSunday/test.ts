import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { assertType } from "../_lib/test/index.js";
import { previousSunday } from "./index.js";

describe("previousSunday", () => {
  it("returns the previous Sunday given various dates after the same", () => {
    expect(
      previousSunday(/* 1400/3/17 */ new Date(2021, 5 /* Jun */, 7)),
    ).toEqual(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6));

    expect(
      previousSunday(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)),
    ).toEqual(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6));

    expect(
      previousSunday(/* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13)),
    ).toEqual(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6));

    expect(
      previousSunday(/* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)),
    ).toEqual(/* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13));

    expect(
      previousSunday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
    ).toEqual(/* 1400/3/23 */ new Date(2021, 5 /* Jun */, 13));

    expect(
      previousSunday(/* 1400/4/3 */ new Date(2021, 5 /* Jun */, 24)),
    ).toEqual(/* 1400/3/30 */ new Date(2021, 5 /* Jun */, 20));
  });

  it("returns `Invalid Date` if the given date is invalid", () => {
    expect(previousSunday(new Date(NaN)) instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = previousSunday(Date.now());
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = previousSunday(new UTCDate());
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        previousSunday(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("Asia/Singapore"),
        }).toISOString(),
      ).toBe(/* 1403/1/19 */ "2024-04-07T15:00:00.000+08:00");
      expect(
        previousSunday(/* 1403/1/22 */ "2024-04-10T07:00:00Z", {
          in: tz("America/Los_Angeles"),
        }).toISOString(),
      ).toBe(/* 1403/1/19 */ "2024-04-07T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const result = previousSunday(/* 1393/6/10 */ "2014-09-01T00:00:00Z", {
        in: tz("Asia/Tokyo"),
      });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });
});
