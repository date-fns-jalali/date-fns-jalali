import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistance } from "./index.js";

describe("formatDistance", () => {
  describe("seconds", () => {
    describe("when the includeSeconds option is true", () => {
      it("less than 5 seconds", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true },
        );
        expect(result).toBe("کمتر از 5 ثانیه");
      });

      it("less than 10 seconds", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 7),
          { includeSeconds: true },
        );
        expect(result).toBe("کمتر از 10 ثانیه");
      });

      it("less than 20 seconds", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 15),
          { includeSeconds: true },
        );
        expect(result).toBe("کمتر از 20 ثانیه");
      });

      it("half a minute", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
          { includeSeconds: true },
        );
        expect(result).toBe("نیم دقیقه");
      });

      it("less than a minute", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 45),
          { includeSeconds: true },
        );
        expect(result).toBe("کمتر از یک دقیقه");
      });

      it("1 minute", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 0),
          { includeSeconds: true },
        );
        expect(result).toBe("1 دقیقه");
      });
    });
  });

  describe("minutes", () => {
    it("less than a minute", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 20),
      );
      expect(result).toBe("کمتر از یک دقیقه");
    });

    it("1 minute", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 50),
      );
      expect(result).toBe("1 دقیقه");
    });

    it("n minutes", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 34, 50),
      );
      expect(result).toBe("3 دقیقه");
    });
  });

  describe("hours", () => {
    it("about 1 hour", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
      );
      expect(result).toBe("حدود 1 ساعت");
    });

    it("about n hours", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 13, 32, 0),
      );
      expect(result).toBe("حدود 3 ساعت");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/16 */ new Date(1986, 3, 5, 10, 32, 0),
      );
      expect(result).toBe("1 روز");
    });

    it("n days", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0),
      );
      expect(result).toBe("3 روز");
    });
  });

  describe("months", () => {
    it("about 1 month", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/2/14 */ new Date(1986, 4, 4, 10, 32, 0),
      );
      expect(result).toBe("حدود 1 ماه");
    });

    it("n months", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/4/13 */ new Date(1986, 6, 4, 10, 32, 0),
      );
      expect(result).toBe("3 ماه");
    });
  });

  describe("years", () => {
    it("about 1 year", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1366/1/15 */ new Date(1987, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("حدود 1 سال");
    });

    it("over 1 year", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1366/7/12 */ new Date(1987, 9, 4, 10, 32, 0),
      );
      expect(result).toBe("بیشتر از 1 سال");
    });

    it("almost n years", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1367/12/13 */ new Date(1989, 2, 4, 10, 32, 0),
      );
      expect(result).toBe("نزدیک 3 سال");
    });

    it("about n years", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1368/1/15 */ new Date(1989, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("حدود 3 سال");
    });

    it("over n years", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1368/7/12 */ new Date(1989, 9, 4, 10, 32, 0),
      );
      expect(result).toBe("بیشتر از 3 سال");
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistance(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0).getTime(),
      /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    expect(result).toBe("حدود 1 ساعت");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
        { includeSeconds: true, addSuffix: true },
      );
      expect(result).toBe("نیم دقیقه قبل");
    });

    it("adds a future suffix", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true },
      );
      expect(result).toBe("در حدود 1 ساعت");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("lessThanXSeconds");
        expect(count).toBe(5);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeGreaterThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 3),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        {
          includeSeconds: true,
          addSuffix: true,
          locale: customLocale,
        },
      );

      expect(result).toBe("It works!");
    });
  });

  it("throws RangeError if the first date is `Invalid Date`", () => {
    expect(
      formatDistance.bind(
        null,
        new Date(NaN),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0),
      ),
    ).toThrow(RangeError);
  });

  it("throws RangeError if the second date is `Invalid Date`", () => {
    expect(
      formatDistance.bind(
        null,
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        new Date(NaN),
      ),
    ).toThrow(RangeError);
  });

  it("throws RangeError if the both dates are `Invalid Date`", () => {
    expect(formatDistance.bind(null, new Date(NaN), new Date(NaN))).toThrow(
      RangeError,
    );
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1402/3/11 */ new TZDate(2023, 5, 1, "Asia/Singapore");
    const dateRight = /* 1402/9/10 */ new TZDate(
      2023,
      11,
      1,
      "America/New_York",
    );
    expect(formatDistance(dateLeft, dateRight)).toEqual("6 ماه");
    expect(formatDistance(dateRight, dateLeft)).toBe("6 ماه");
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      start: DateType1 | number | string,
      end: DateType2 | number | string,
    ) {
      formatDistance(start, end);
    }
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        formatDistance(
          /* 1403/1/22 */ "2024-04-10T07:00:00Z",
          /* 1403/1/24 */ "2024-04-12T07:00:00Z",
          {
            in: tz("America/Los_Angeles"),
          },
        ),
      ).toEqual("2 روز");
      expect(
        formatDistance(
          /* 1403/1/22 */ "2024-04-10T07:00:00Z",
          /* 1403/1/24 */ "2024-04-12T07:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toEqual("2 روز");
    });
  });
});
