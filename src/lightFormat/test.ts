import { expect, assert, describe, it } from "vitest";
import { lightFormat } from "./index.js";

describe("lightFormat", () => {
  const date = /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123);

  it("accepts a timestamp", () => {
    const date = /* 1393/1/15 */ new Date(2014, 3, 4).getTime();
    assert(lightFormat(date, "yyyy-MM-dd") === "1393-01-15");
  });

  it("escapes characters between the single quote characters", () => {
    const result = lightFormat(date, "'yyyy-'MM-dd'D yyyy-'MM-dd'");
    assert(result === "yyyy-01-15D yyyy-01-15");
  });

  it('two single quote characters are transformed into a "real" single quote', () => {
    const date = /* 1393/1/15 */ new Date(2014, 3, 4, 5);
    assert(lightFormat(date, "''h 'o''clock'''") === "'5 o'clock'");
  });

  it("accepts new line charactor", () => {
    const date = /* 1393/1/15 */ new Date(2014, 3, 4, 5);
    assert.strictEqual(
      lightFormat(date, "yyyy-MM-dd'\n'HH:mm:ss"),
      "1393-01-15\n05:00:00",
    );
  });

  describe("year", () => {
    describe("regular year", () => {
      it("works as expected", () => {
        const result = lightFormat(date, "y yy yyy yyyy yyyyy");
        assert(result === "1365 65 1365 1365 01365");
      });

      it("1 BC formats as 1", () => {
        const date = /* 1/10/10 */ new Date(622, 11 /* Dec */, 31);

        const result = lightFormat(date, "y");
        assert(result === "1");
      });

      it("2 BC formats as 2", () => {
        const date = /* 2/10/10 */ new Date(624, 0 /* Jan */, 1);

        const result = lightFormat(date, "y");
        assert(result === "2");
      });
    });
  });

  describe("month", () => {
    it("formatting month", () => {
      const result = lightFormat(date, "M MM");
      assert(result === "1 01");
    });
  });

  describe("day", () => {
    it("date", () => {
      const result = lightFormat(date, "d dd");
      assert(result === "15 15");
    });
  });

  describe("hour", () => {
    it("hour [1-12]", () => {
      const result = lightFormat(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "h hh",
      );
      assert(result === "12 12");
    });

    it("hour [0-23]", () => {
      const result = lightFormat(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "H HH",
      );
      assert(result === "0 00");
    });

    describe("AM, PM", () => {
      it("works as expected", () => {
        const result = lightFormat(
          /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
          "a aa aaa aaaa aaaaa",
        );
        assert(result === "AM AM am a.m. a");

        const pmResult = lightFormat(
          /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 13, 0, 0, 0),
          "a aa aaa aaaa aaaaa",
        );
        assert(pmResult === "PM PM pm p.m. p");
      });

      it("12 PM", () => {
        const date = /* 1365/1/15 */ new Date(
          1986,
          3 /* Apr */,
          4,
          12,
          0,
          0,
          900,
        );
        assert(lightFormat(date, "h H a") === "12 12 PM");
      });

      it("12 AM", () => {
        const date = /* 1365/1/17 */ new Date(
          1986,
          3 /* Apr */,
          6,
          0,
          0,
          0,
          900,
        );
        assert(lightFormat(date, "h H a") === "12 0 AM");
      });
    });
  });

  it("minute", () => {
    const result = lightFormat(date, "m mm");
    assert(result === "32 32");
  });

  describe("second", () => {
    it("second", () => {
      const result = lightFormat(date, "s ss");
      assert(result === "55 55");
    });
  });

  it("fractional seconds", () => {
    const result = lightFormat(date, "S SS SSS SSSS");
    assert(result === "1 12 123 1230");
  });

  it("returns empty string when the format is an empty string", () => {
    assert(lightFormat(Date.now(), "") === "");
  });

  it("throws RangeError if the date isn't valid", () => {
    assert.throws(
      lightFormat.bind(null, new Date(NaN), "MMMM d, yyyy"),
      RangeError,
    );
  });

  it("throws RangeError exception if the format string contains an unescaped latin alphabet character", () => {
    assert.throws(lightFormat.bind(null, date, "yyyy-MM-dd-nnnn"), RangeError);
  });
});
