import { describe, expect, it } from "vitest";
import { set } from "./index.js";
import { TZDate, tz } from "@date-fns/tz";
import { assertType } from "../_lib/test/index.js";
import { UTCDate } from "@date-fns/utc";

describe("set", () => {
  it("sets all values", () => {
    const result = set(/* 1391/10/12 */ new Date(2013, 0 /* Jan */), {
      year: 1393,
      month: 5, // Shahrivar
      date: 29,
      hours: 12,
      minutes: 12,
      seconds: 12,
      milliseconds: 12,
    });
    expect(result.toString()).toEqual(
      /* 1393/6/29 */ new Date(
        2014,
        8 /* Sep */,
        20,
        12,
        12,
        12,
        12,
      ).toString(),
    );
  });

  it("sets year", () => {
    const result = set(/* 1392/6/10 */ new Date(2013, 8 /* Sep */), {
      year: 1393,
    });
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */));
  });

  it("sets month", () => {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
      month: 6 /* Mehr */,
    });
    expect(result).toEqual(/* 1393/7/10 */ new Date(2014, 9 /* Oct */, 2));
  });

  it("sets day of month", () => {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
      date: 20,
    });
    expect(result).toEqual(/* 1393/6/20 */ new Date(2014, 8 /* Sep */, 11));
  });

  it("sets hours", () => {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), {
      hours: 12,
    });
    expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 12));
  });

  it("sets minutes", () => {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1), {
      minutes: 12,
    });
    expect(result).toEqual(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 12),
    );
  });

  it("sets seconds", () => {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1), {
      seconds: 12,
    });
    expect(result).toEqual(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1, 12),
    );
  });

  it("sets milliseconds", () => {
    const result = set(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1, 1),
      {
        milliseconds: 500,
      },
    );
    expect(result).toEqual(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1, 1, 500),
    );
  });

  it("resolves the date type by default", () => {
    const result = set(Date.now(), { hours: 5 });
    expect(result).toBeInstanceOf(Date);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = set(new UTCDate(), { hours: 5 });
    expect(result).toBeInstanceOf(UTCDate);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        set(
          new Date(/* 1403/1/22 */ "2024-04-10T07:00:00Z"),
          { year: 1394 },
          { in: tz("Asia/Singapore") },
        ).toISOString(),
      ).toBe(/* 1394/1/22 */ "2015-04-11T15:00:00.000+08:00");
      expect(
        set(
          new Date(/* 1403/1/22 */ "2024-04-10T07:00:00Z"),
          { year: 1394 },
          { in: tz("America/Los_Angeles") },
        ).toISOString(),
      ).toBe(/* 1394/1/22 */ "2015-04-11T00:00:00.000-07:00");
    });

    it("resolves the context date type", () => {
      const date = new Date(/* 1393/6/10 */ "2014-09-01T00:00:00Z");
      const result = set(date, { month: 0 }, { in: tz("Asia/Tokyo") });
      expect(result).toBeInstanceOf(TZDate);
      assertType<assertType.Equal<TZDate, typeof result>>(true);
    });
  });

  describe("value overflow", () => {
    it("months overflow into years", () => {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), {
        month: 12 /* 13th month */,
      });
      expect(result).toEqual(/* 1394/1/10 */ new Date(2015, 2 /* Mar */, 30));
    });

    it("days of months overflow into months", () => {
      const result = set(/* 1393/7/10 */ new Date(2014, 9 /* Oct */, 2), {
        date: 31,
      });
      expect(result).toEqual(/* 1393/8/1 */ new Date(2014, 9 /* Oct */, 23));
    });

    it("hours overflow into days", () => {
      const result = set(/* 1393/6/28 */ new Date(2014, 8 /* Sep */, 19), {
        hours: 24,
      });
      expect(result).toEqual(/* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20));
    });

    it("minutes overflow into hours", () => {
      const result = set(/* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 11), {
        minutes: 60,
      });
      expect(result).toEqual(
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12),
      );
    });

    it("seconds overflow into minutes", () => {
      const result = set(
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 58),
        {
          seconds: 60,
        },
      );
      expect(result).toEqual(
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 59),
      );
    });

    it("milliseconds overflow into seconds", () => {
      const result = set(
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 58, 30),
        {
          milliseconds: 1000,
        },
      );
      expect(result).toEqual(
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 58, 31),
      );
    });
  });

  describe("edge cases", () => {
    it("sets Farvardin", () => {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
        month: 0 /* Jan */,
      });
      expect(result).toEqual(/* 1393/1/10 */ new Date(2014, 2 /* Mar */, 30));
    });

    it("sets the last day of new month if the initial date was the last day of a longer month", () => {
      const result = set(/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22), {
        month: 8 /* Azar */,
      });
      expect(result).toEqual(/* 1393/9/30 */ new Date(2014, 11 /* Dec */, 21));
    });

    it("ignores undefined values", () => {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
        year: undefined,
      });
      expect(result).toEqual(/* 1393/6/10 */ new Date(2014, 8 /* Sep */));
    });

    it("returns Invalid Date if any value in values is NaN", () => {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
        year: NaN,
      });
      expect(isNaN(result.getTime())).toBe(true);
    });

    it("returns Invalid Date the initial date was Invalid Date as well", () => {
      const result = set(new Date(NaN), { year: 2019 });
      expect(isNaN(result.getTime())).toBe(true);
    });
  });
});
