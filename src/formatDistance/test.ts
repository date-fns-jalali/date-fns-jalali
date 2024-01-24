/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
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
        assert(result === "کمتر از 5 ثانیه");
      });

      it("less than 10 seconds", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 7),
          { includeSeconds: true },
        );
        assert(result === "کمتر از 10 ثانیه");
      });

      it("less than 20 seconds", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 15),
          { includeSeconds: true },
        );
        assert(result === "کمتر از 20 ثانیه");
      });

      it("half a minute", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
          { includeSeconds: true },
        );
        assert(result === "نیم دقیقه");
      });

      it("less than a minute", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 45),
          { includeSeconds: true },
        );
        assert(result === "کمتر از یک دقیقه");
      });

      it("1 minute", () => {
        const result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 0),
          { includeSeconds: true },
        );
        assert(result === "1 دقیقه");
      });
    });
  });

  describe("minutes", () => {
    it("less than a minute", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 20),
      );
      assert(result === "کمتر از یک دقیقه");
    });

    it("1 minute", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 50),
      );
      assert(result === "1 دقیقه");
    });

    it("n minutes", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 34, 50),
      );
      assert(result === "3 دقیقه");
    });
  });

  describe("hours", () => {
    it("about 1 hour", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
      );
      assert(result === "حدود 1 ساعت");
    });

    it("about n hours", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 13, 32, 0),
      );
      assert(result === "حدود 3 ساعت");
    });
  });

  describe("days", () => {
    it("1 day", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/16 */ new Date(1986, 3, 5, 10, 32, 0),
      );
      assert(result === "1 روز");
    });

    it("n days", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0),
      );
      assert(result === "3 روز");
    });
  });

  describe("months", () => {
    it("about 1 month", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/2/14 */ new Date(1986, 4, 4, 10, 32, 0),
      );
      assert(result === "حدود 1 ماه");
    });

    it("n months", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/4/13 */ new Date(1986, 6, 4, 10, 32, 0),
      );
      assert(result === "3 ماه");
    });
  });

  describe("years", () => {
    it("about 1 year", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1366/1/15 */ new Date(1987, 3, 4, 10, 32, 0),
      );
      assert(result === "حدود 1 سال");
    });

    it("over 1 year", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1366/7/12 */ new Date(1987, 9, 4, 10, 32, 0),
      );
      assert(result === "بیشتر از 1 سال");
    });

    it("almost n years", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1367/12/13 */ new Date(1989, 2, 4, 10, 32, 0),
      );
      assert(result === "نزدیک 3 سال");
    });

    it("about n years", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1368/1/15 */ new Date(1989, 3, 4, 10, 32, 0),
      );
      assert(result === "حدود 3 سال");
    });

    it("over n years", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1368/7/12 */ new Date(1989, 9, 4, 10, 32, 0),
      );
      assert(result === "بیشتر از 3 سال");
    });
  });

  it("accepts timestamps", () => {
    const result = formatDistance(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0).getTime(),
      /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0).getTime(),
    );
    assert(result === "حدود 1 ساعت");
  });

  describe("when the addSuffix option is true", () => {
    it("adds a past suffix", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
        { includeSeconds: true, addSuffix: true },
      );
      assert(result === "نیم دقیقه قبل");
    });

    it("adds a future suffix", () => {
      const result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true },
      );
      assert(result === "در حدود 1 ساعت");
    });
  });

  describe("custom locale", () => {
    it("can be passed to the function", () => {
      const localizeDistance: FormatDistanceFn = (token, count, options) => {
        assert(token === "lessThanXSeconds");
        assert(count === 5);
        assert(options!.addSuffix === true);
        assert(options!.comparison! > 0);
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

      assert(result === "It works!");
    });
  });

  it("throws RangeError if the first date is `Invalid Date`", () => {
    assert.throws(
      formatDistance.bind(
        null,
        new Date(NaN),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0),
      ),
      RangeError,
    );
  });

  it("throws RangeError if the second date is `Invalid Date`", () => {
    assert.throws(
      formatDistance.bind(
        null,
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        new Date(NaN),
      ),
      RangeError,
    );
  });

  it("throws RangeError if the both dates are `Invalid Date`", () => {
    assert.throws(
      formatDistance.bind(null, new Date(NaN), new Date(NaN)),
      RangeError,
    );
  });
});
