import { describe, expect, it } from "vitest";
import { formatRelative } from "./index.js";

describe("formatRelative", () => {
  const baseDate = /* 1365/1/15 */ new Date(
    1986,
    3 /* Apr */,
    4,
    10,
    32,
    0,
    900,
  );

  it("accepts a timestamp", () => {
    const date = /* 1393/1/15 */ new Date(2014, 3 /* Apr */, 4);
    expect(formatRelative(date.getTime(), baseDate.getTime())).toBe(
      "1393/01/15",
    );
  });

  it("before the last week", () => {
    const result = formatRelative(
      /* 1365/1/8 */ new Date(1986, 2 /* Mar */, 28, 16, 50),
      baseDate,
    );
    expect(result).toBe("1365/01/08");
  });

  it("last week", () => {
    const result = formatRelative(
      /* 1365/1/12 */ new Date(1986, 3 /* Apr */, 1),
      baseDate,
    );
    expect(result).toBe("سه‌شنبه گذشته در 12:00 ق.ظ.");
  });

  it("yesterday", () => {
    const result = formatRelative(
      /* 1365/1/14 */ new Date(1986, 3 /* Apr */, 3, 22, 22),
      baseDate,
    );
    expect(result).toBe("دیروز در 10:22 ب.ظ.");
  });

  it("today", () => {
    const result = formatRelative(
      /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 16, 50),
      baseDate,
    );
    expect(result).toBe("امروز در 4:50 ب.ظ.");
  });

  it("tomorrow", () => {
    const result = formatRelative(
      /* 1365/1/16 */ new Date(1986, 3 /* Apr */, 5, 7, 30),
      baseDate,
    );
    expect(result).toBe("فردا در 7:30 ق.ظ.");
  });

  it("next week", () => {
    const result = formatRelative(
      /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 12, 0),
      baseDate,
    );
    expect(result).toBe("یک‌شنبه در 12:00 ب.ظ.");
  });

  it("after the next week", () => {
    const result = formatRelative(
      /* 1365/1/22 */ new Date(1986, 3 /* Apr */, 11, 16, 50),
      baseDate,
    );
    expect(result).toBe("1365/01/22");
  });

  describe("edge cases", () => {
    it("throws RangeError if the date isn't valid", () => {
      expect(formatRelative.bind(null, new Date(NaN), baseDate)).toThrow(
        RangeError,
      );
    });

    it("throws RangeError if the base date isn't valid", () => {
      expect(
        formatRelative.bind(
          null,
          /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
          new Date(NaN),
        ),
      ).toThrow(RangeError);
    });

    it("throws RangeError if both dates aren't valid", () => {
      expect(formatRelative.bind(null, new Date(NaN), new Date(NaN))).toThrow(
        RangeError,
      );
    });

    it.skip("handles dates before 100 AD", () => {
      const date = new Date(0);
      date.setFullYear(7, 11 /* Dec */, 31);
      date.setHours(0, 0, 0, 0);
      expect(formatRelative(date, baseDate)).toBe("12/31/0007");
    });
  });

  describe("custom locale", () => {
    it("allows to pass a custom locale", () => {
      const customLocale = {
        localize: {
          month: () => {
            return "works";
          },
        },
        formatLong: {
          date: () => {
            return "'It' MMMM";
          },
        },
        formatRelative: () => {
          return "P 'perfectly!'";
        },
      };
      const result = formatRelative(
        /* 1365/1/8 */ new Date(1986, 2 /* Mar */, 28, 16, 50),
        baseDate,
        {
          // @ts-expect-error - It's ok to have incomplete locale
          locale: customLocale,
        },
      );
      expect(result).toBe("It works perfectly!");
    });
  });
});
