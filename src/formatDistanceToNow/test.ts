import { UTCDate } from "@date-fns/utc";
import sinon from "sinon";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistanceToNow } from "./index.js";

describe("formatDistanceToNow", () => {
  let clock: sinon.SinonFakeTimers;
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0).getTime(),
    );
  });

  afterEach(() => {
    clock.restore();
  });

  describe("seconds", () => {
    describe("when the includeSeconds option is true", () => {
      it("less than 5 seconds", () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 58),
          {
            includeSeconds: true,
          },
        );
        expect(result).toBe("کمتر از 5 ثانیه");
      });

      it("less than 10 seconds", () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 52),
          {
            includeSeconds: true,
          },
        );
        expect(result).toBe("کمتر از 10 ثانیه");
      });

      it("less than 20 seconds", () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 45),
          {
            includeSeconds: true,
          },
        );
        expect(result).toBe("کمتر از 20 ثانیه");
      });

      it("half a minute", () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 35),
          {
            includeSeconds: true,
          },
        );
        expect(result).toBe("نیم دقیقه");
      });

      it("less than a minute", () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 15),
          {
            includeSeconds: true,
          },
        );
        expect(result).toBe("کمتر از یک دقیقه");
      });

      it("1 minute", () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 0),
          {
            includeSeconds: true,
          },
        );
        expect(result).toBe("1 دقیقه");
      });
    });
  });

  describe("minutes", () => {
    it("less than a minute", () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 40),
      );
      expect(result).toBe("کمتر از یک دقیقه");
    });

    it("1 minute", () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 10),
      );
      expect(result).toBe("1 دقیقه");
    });

    it("n minutes", () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 29, 10),
      );
      expect(result).toBe("3 دقیقه");
    });
  });

  describe("hours", () => {
    it("about 1 hour", () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 9, 32, 0),
      );
      expect(result).toBe("حدود 1 ساعت");
    });

    it("about n hours", () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 7, 32, 0),
      );
      expect(result).toBe("حدود 3 ساعت");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistanceToNow(
        /* 1365/1/14 */ new Date(1986, 3, 3, 10, 32, 0),
      );
      expect(result).toBe("1 روز");
    });

    it("n days", () => {
      const result = formatDistanceToNow(
        /* 1365/1/12 */ new Date(1986, 3, 1, 10, 32, 0),
      );
      expect(result).toBe("3 روز");
    });
  });

  describe("months", () => {
    it("about 1 month", () => {
      const result = formatDistanceToNow(
        /* 1364/12/13 */ new Date(1986, 2, 4, 10, 32, 0),
      );
      expect(result).toBe("حدود 1 ماه");
    });

    it("n months", () => {
      const result = formatDistanceToNow(
        /* 1364/10/14 */ new Date(1986, 0, 4, 10, 32, 0),
      );
      expect(result).toBe("3 ماه");
    });
  });

  describe("years", () => {
    it("about 1 year", () => {
      const result = formatDistanceToNow(
        /* 1364/1/15 */ new Date(1985, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("حدود 1 سال");
    });

    it("over 1 year", () => {
      const result = formatDistanceToNow(
        /* 1363/8/13 */ new Date(1984, 10, 4, 10, 32, 0),
      );
      expect(result).toBe("بیشتر از 1 سال");
    });

    it("almost n years", () => {
      const result = formatDistanceToNow(
        /* 1362/2/14 */ new Date(1983, 4, 4, 10, 32, 0),
      );
      expect(result).toBe("نزدیک 3 سال");
    });

    it("about n years", () => {
      const result = formatDistanceToNow(
        /* 1362/1/15 */ new Date(1983, 3, 4, 10, 32, 0),
      );
      expect(result).toBe("حدود 3 سال");
    });

    it("over n years", () => {
      const result = formatDistanceToNow(
        /* 1361/8/13 */ new Date(1982, 10, 4, 10, 32, 0),
      );
      expect(result).toBe("بیشتر از 3 سال");
    });
  });

  it("accepts a timestamp", () => {
    const result = formatDistanceToNow(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 40).getTime(),
    );
    expect(result).toBe("کمتر از یک دقیقه");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 35),
        {
          includeSeconds: true,
          addSuffix: true,
        },
      );
      expect(result).toBe("نیم دقیقه قبل");
    });

    it("adds a future suffix", () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true,
        },
      );
      expect(result).toBe("در حدود 1 ساعت");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        expect(token).toBe("aboutXHours");
        expect(count).toBe(1);
        expect(options!.addSuffix).toBe(true);
        expect(options!.comparison!).toBeGreaterThan(0);
        return "It works!";
      };

      const customLocale = {
        formatDistance: localizeDistance,
      };

      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true,
          locale: customLocale,
        },
      );

      expect(result).toBe("It works!");
    });
  });

  it("throws RangeError if the passed date is `Invalid Date`", function () {
    expect(formatDistanceToNow.bind(null, new Date(NaN))).toThrow(RangeError);
  });

  it("respects date extensions", () => {
    const result = formatDistanceToNow(
      new UTCDate(+(/* 1365/1/15 */ new Date(1986, 3, 4, 9, 32, 0))),
    );
    expect(result).toBe("حدود 1 ساعت");
  });
});
