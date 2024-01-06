/* eslint-env mocha */

import assert from "node:assert";
import { afterEach, beforeEach, describe, it } from "vitest";
import sinon from "sinon";
import type { FormatDistanceFn } from "../locale/types.js";
import { formatDistanceToNowStrict } from "./index.js";

describe("formatDistanceToNowStrict", () => {
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
    describe("when no unit is set", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        );
        assert(result === "0 ثانیه");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5),
        );
        assert(result === "5 ثانیه");
      });
    });
  });

  describe("minutes", () => {
    it("1 minute", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 0),
      );
      assert(result === "1 دقیقه");
    });

    it("n minutes", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 35, 0),
      );
      assert(result === "3 دقیقه");
    });
  });

  describe("hours", () => {
    it("1 hour", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
      );
      assert(result === "1 ساعت");
    });

    it("n hours", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 13, 32, 0),
      );
      assert(result === "3 ساعت");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/16 */ new Date(1986, 3, 5, 10, 32, 0),
      );
      assert(result === "1 روز");
    });

    it("n days", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0),
      );
      assert(result === "3 روز");
    });
  });

  describe("months", () => {
    it("1 month", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/2/14 */ new Date(1986, 4, 4, 10, 32, 0),
      );
      assert(result === "1 ماه");
    });

    it("n months", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/4/13 */ new Date(1986, 6, 4, 10, 32, 0),
      );
      assert(result === "3 ماه");
    });
  });

  describe("years", () => {
    it("1 year", () => {
      const result = formatDistanceToNowStrict(
        /* 1366/1/15 */ new Date(1987, 3, 4, 10, 32, 0),
      );
      assert(result === "1 سال");
    });

    it("n years", () => {
      const result = formatDistanceToNowStrict(
        /* 1370/1/15 */ new Date(1991, 3, 4, 10, 32, 0),
      );
      assert(result === "5 سال");
    });
  });

  describe("when the unit option is supplied", () => {
    describe("second", () => {
      it("0 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "second" },
        );
        assert(result === "0 ثانیه");
      });

      it("5 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5),
          { unit: "second" },
        );
        assert(result === "5 ثانیه");
      });

      it("120 seconds", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 34, 0),
          { unit: "second" },
        );
        assert(result === "120 ثانیه");
      });
    });

    describe("minute", () => {
      it("0 minutes", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "minute" },
        );
        assert(result === "0 دقیقه");
      });

      it("5 minutes", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 37, 0),
          { unit: "minute" },
        );
        assert(result === "5 دقیقه");
      });

      it("120 minutes", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 12, 32, 0),
          { unit: "minute" },
        );
        assert(result === "120 دقیقه");
      });
    });

    describe("hour", () => {
      it("0 hours", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "hour" },
        );
        assert(result === "0 ساعت");
      });

      it("5 hours", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 15, 32, 0),
          { unit: "hour" },
        );
        assert(result === "5 ساعت");
      });

      it("48 hours", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/17 */ new Date(1986, 3, 6, 10, 32, 0),
          { unit: "hour" },
        );
        assert(result === "48 ساعت");
      });
    });

    describe("day", () => {
      it("0 days", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "day" },
        );
        assert(result === "0 روز");
      });

      it("5 days", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/20 */ new Date(1986, 3, 9, 10, 32, 0),
          { unit: "day" },
        );
        assert(result === "5 روز");
      });

      it("60 days", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/3/13 */ new Date(1986, 5, 3, 10, 32, 0),
          { unit: "day" },
        );
        assert(result === "60 روز");
      });
    });
    describe("month", () => {
      it("0 months", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        assert(result === "0 ماه");
      });

      it("5 months", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/5/13 */ new Date(1986, 7, 4, 10, 32, 0),
          { unit: "month" },
        );
        assert(result === "4 ماه");
      });

      it("24 months", () => {
        const result = formatDistanceToNowStrict(
          /* 1367/1/15 */ new Date(1988, 3, 4, 10, 32, 0),
          { unit: "month" },
        );
        assert(result === "24 ماه");
      });
    });

    describe("year", () => {
      it("returns `1 year` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          /* 1364/1/15 */ new Date(1985, 3, 4, 10, 32, 0),
        );
        assert(result === "1 سال");
      });

      it("returns `2 years` - see issue 2388", () => {
        const result = formatDistanceToNowStrict(
          /* 1363/1/15 */ new Date(1984, 3, 4, 10, 32, 0),
        );
        assert(result === "2 سال");
      });

      it("0 years", () => {
        const result = formatDistanceToNowStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: "year" },
        );
        assert(result === "0 سال");
      });

      it("5 years", () => {
        const result = formatDistanceToNowStrict(
          /* 1370/1/15 */ new Date(1991, 3, 4, 15, 32, 0),
          { unit: "year" },
        );
        assert(result === "5 سال");
      });
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistanceToNowStrict(
      /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    assert(result === "1 ساعت");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 35),
        {
          addSuffix: true,
        },
      );
      assert(result === "25 ثانیه قبل");
    });

    it("adds a future suffix", () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true,
        },
      );
      assert(result === "در 1 ساعت");
    });
  });

  describe("when the roundingMethod option is supplied", () => {
    it('default is "round"', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 59),
      );
      assert(result === "2 دقیقه");
    });

    it('"floor"', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 59),
        {
          roundingMethod: "floor",
        },
      );
      assert(result === "1 دقیقه");
    });

    it('"ceil"', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 1),
        {
          roundingMethod: "ceil",
        },
      );
      assert(result === "2 دقیقه");
    });

    it('"round" (down)', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 29),
        {
          roundingMethod: "round",
        },
      );
      assert(result === "1 دقیقه");
    });

    it('"round" (up)', () => {
      const result = formatDistanceToNowStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 30),
        {
          roundingMethod: "round",
        },
      );
      assert(result === "2 دقیقه");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        assert(token === "xSeconds");
        assert(count === 15);
        assert(options!.addSuffix === true);
        assert(options!.comparison! < 0);
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

      assert(result === "It works!");
    });
  });

  describe("edge cases", () => {
    it("detects unit correctly for short months", () => {
      const result = formatDistanceToNowStrict(
        /* 1364/12/16 */ new Date(1986, 2 /* Mar */, 7),
      );
      assert(result === "28 روز");
    });
  });

  it("throws `RangeError` if the date is `Invalid Date`", () => {
    assert.throws(
      formatDistanceToNowStrict.bind(null, new Date(NaN)),
      RangeError,
    );
  });
});
