import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { fakeDate } from "../_lib/test/index.js";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistanceToNowStrict } from "./index.js";

describe("formatDistanceToNowStrict", () => {
  fakeDate(/* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0));

  describe("seconds", () => {
    describe("when no unit is set", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        );
        expect(result).toBe("0 ثانیه");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5),
        );
        expect(result).toBe("5 ثانیه");
      });
    });
  });

  describe("minutes", () => {
    it("1 minute", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 0),
      );
      expect(result).toBe("1 دقیقه");
    });

    it("n minutes", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 35, 0),
      );
      expect(result).toBe("3 دقیقه");
    });
  });

  describe("hours", () => {
    it("1 hour", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
      );
      expect(result).toBe("1 ساعت");
    });

    it("n hours", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 13, 32, 0),
      );
      expect(result).toBe("3 ساعت");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/16 */ new Date(1986, 3, 5, 10, 32, 0),
      );
      expect(result).toBe("1 روز");
    });

    it("n days", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0),
      );
      expect(result).toBe("3 روز");
    });
  });

  describe("months", () => {
    it("1 month", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/2/14 */ new Date(1986, 4, 4, 10, 32, 0),
      );
      expect(result).toBe("1 ماه");
    });

    it("n months", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/4/13 */ new Date(1986, 6, 4, 10, 32, 0),
      );
      expect(result).toBe("3 ماه");
    });
  });

  describe("years", () => {
    it("1 year", () => {
      const result = formatDistanceToNowStrict(
        /* 1366/1/15 */ new Date(1987, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("1 سال");
    });

    it("n years", () => {
      const result = formatDistanceToNowStrict(
        /* 1370/1/15 */ new Date(1991, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("5 سال");
    });
  });

  describe("when the unit option is supplied", () => {
    describe("second", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "second" },
        );
        expect(result).toBe("0 ثانیه");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5),
          { unit: "second" },
        );
        expect(result).toBe("5 ثانیه");
      });

      it("120 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 34, 0),
          { unit: "second" },
        );
        expect(result).toBe("120 ثانیه");
      });
    });

    describe("minute", () => {
      it("0 minutes", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "minute" },
        );
        expect(result).toBe("0 دقیقه");
      });

      it("5 minutes", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 37, 0),
          { unit: "minute" },
        );
        expect(result).toBe("5 دقیقه");
      });

      it("120 minutes", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 12, 32, 0),
          { unit: "minute" },
        );
        expect(result).toBe("120 دقیقه");
      });
    });

    describe("hour", () => {
      it("0 hours", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("0 ساعت");
      });

      it("5 hours", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 15, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("5 ساعت");
      });

      it("48 hours", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/17 */ new Date(1986, 3, 6, 10, 32, 0),
          { unit: "hour" },
        );
        expect(result).toBe("48 ساعت");
      });
    });

    describe("day", () => {
      it("0 days", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("0 روز");
      });

      it("5 days", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/20 */ new Date(1986, 3, 9, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("5 روز");
      });

      it("60 days", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/3/13 */ new Date(1986, 5, 3, 10, 32, 0),
          { unit: "day" },
        );
        expect(result).toBe("60 روز");
      });
    });
    describe("month", () => {
      it("0 months", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("0 ماه");
      });

      it("5 months", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/5/13 */ new Date(1986, 7, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("4 ماه");
      });

      it("24 months", () => {
        const result = formatDistanceToNowStrict(
          /* 1367/1/15 */ new Date(1988, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        expect(result).toBe("24 ماه");
      });
    });

    describe("year", () => {
      it("returns `1 year` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          /* 1364/1/15 */ new Date(1985, 3, 4, 10, 32, 0),
        );
        expect(result).toBe("1 سال");
      });

      it("returns `2 years` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          /* 1363/1/15 */ new Date(1984, 3, 4, 10, 32, 0),
        );
        expect(result).toBe("2 سال");
      });

      it("0 years", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "year" },
        );
        expect(result).toBe("0 سال");
      });

      it("5 years", () => {
        const result = formatDistanceToNowStrict(
          /* 1370/1/15 */ new Date(1991, 3, 4, 15, 32, 0),
          { unit: "year" },
        );
        expect(result).toBe("5 سال");
      });
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistanceToNowStrict(
      /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    expect(result).toBe("1 ساعت");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 35),
        {
          addSuffix: true,
        },
      );
      expect(result).toBe("25 ثانیه قبل");
    });

    it("adds a future suffix", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true,
        },
      );
      expect(result).toBe("در 1 ساعت");
    });
  });

  describe("when the roundingMethod option is supplied", () => {
    it('default is "round"', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 59),
      );
      expect(result).toBe("2 دقیقه");
    });

    it('"floor"', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 59),
        {
          roundingMethod: "floor",
        },
      );
      expect(result).toBe("1 دقیقه");
    });

    it('"ceil"', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 1),
        {
          roundingMethod: "ceil",
        },
      );
      expect(result).toBe("2 دقیقه");
    });

    it('"round" (down)', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 29),
        {
          roundingMethod: "round",
        },
      );
      expect(result).toBe("1 دقیقه");
    });

    it('"round" (up)', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 30),
        {
          roundingMethod: "round",
        },
      );
      expect(result).toBe("2 دقیقه");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("xSeconds");
        expect(count).toBe(15);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeLessThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 45),
        {
          addSuffix: true,
          locale: customLocale,
        },
      );

      expect(result).toBe("It works!");
    });
  });

  describe("edge cases", () => {
    it("detects unit correctly for short months", () => {
      const result = formatDistanceToNowStrict(
        /* 1364/12/16 */ new Date(1986, 2 /* Mar */, 7),
      );
      expect(result).toBe("28 روز");
    });
  });

  it("throws `RangeError` if the date is `Invalid Date`", () => {
    expect(formatDistanceToNowStrict.bind(null, new Date(NaN))).toThrow(
      RangeError,
    );
  });

  it("respects date extensions", () => {
    const result = formatDistanceToNowStrict(
      new UTCDate(/* 1365/1/15 */ +new Date(1986, 3, 4, 10, 32, 5)),
    );
    expect(result).toBe("5 ثانیه");
  });
});
