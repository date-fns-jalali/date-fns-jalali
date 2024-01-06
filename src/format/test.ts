import { tz } from "@date-fns/tz";
import sinon from "sinon";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
  type SpyInstance,
} from "vitest";
import type { FormatPart } from "../types.js";
import { format, formatDate } from "./index.js";

describe("format", () => {
  const date = /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123);

  const offset = date.getTimezoneOffset();
  const absoluteOffset = Math.abs(offset);
  const hours = Math.trunc(absoluteOffset / 60);
  const hoursLeadingZero = hours < 10 ? "0" : "";
  const minutes = absoluteOffset % 60;
  const minutesLeadingZero = minutes < 10 ? "0" : "";
  const sign = offset > 0 ? "-" : "+";

  const timezone =
    sign + hoursLeadingZero + hours + ":" + minutesLeadingZero + minutes;
  const timezoneShort = timezone.replace(":", "");
  const timezoneWithOptionalMinutesShort =
    minutes === 0 ? sign + hoursLeadingZero + hours : timezoneShort;

  const timezoneWithZ = offset === 0 ? "Z" : timezone;
  const timezoneWithZShort = offset === 0 ? "Z" : timezoneShort;
  const timezoneWithOptionalMinutesAndZShort =
    offset === 0 ? "Z" : timezoneWithOptionalMinutesShort;

  const timezoneGMTShort =
    minutes === 0
      ? "GMT" + sign + hours
      : "GMT" + sign + hours + ":" + minutesLeadingZero + minutes;
  const timezoneGMT = "GMT" + timezone;

  const timestamp = date.getTime().toString();
  const secondsTimestamp = Math.trunc(date.getTime() / 1000).toString();

  it("accepts a timestamp", () => {
    const date = /* 1393/1/15 */ new Date(2014, 3, 4).getTime();
    expect(format(date, "yyyy-MM-dd")).toBe("1393-01-15");
  });

  it("escapes characters between the single quote characters", () => {
    const result = format(date, "'yyyy-'MM-dd'THH:mm:ss.SSSX' yyyy-'MM-dd'");
    expect(result).toBe("yyyy-01-15THH:mm:ss.SSSX 1365-MM-dd");
  });

  it('two single quote characters are transformed into a "real" single quote', () => {
    const date = /* 1393/1/15 */ new Date(2014, 3, 4, 5);
    expect(format(date, "''h 'o''clock'''")).toBe("'5 o'clock'");
  });

  it("accepts new line character", () => {
    const date = /* 1393/1/15 */ new Date(2014, 3, 4, 5);
    expect(format(date, "yyyy-MM-dd'\n'HH:mm:ss")).toBe("1393-01-15\n05:00:00");
  });

  it("alias formatDate has same behavior as format", () => {
    const date = /* 1393/1/15 */ new Date(2014, 3, 4, 5);
    expect(formatDate(date, "yyyy-MM-dd'\n'HH:mm:ss")).toBe(
      format(date, "yyyy-MM-dd'\n'HH:mm:ss"),
    );
  });

  describe("ordinal numbers", () => {
    it("ordinal day of an ordinal month", () => {
      const result = format(date, "'روز' do 'ماه' Mo 'از سال' yyyy");
      expect(result).toBe(
        ["روز", "15-ام", "ماه", "1-ام", "از سال", "1365"].join(" "),
      );
    });

    it("should return a correct ordinal number", () => {
      const result = [];
      for (let i = 1; i <= 31; i++) {
        result.push(format(new Date(2015, 5, i - 10), "do"));
      }
      const expected = [
        "1-ام",
        "2-ام",
        "3-ام",
        "4-ام",
        "5-ام",
        "6-ام",
        "7-ام",
        "8-ام",
        "9-ام",
        "10-ام",
        "11-ام",
        "12-ام",
        "13-ام",
        "14-ام",
        "15-ام",
        "16-ام",
        "17-ام",
        "18-ام",
        "19-ام",
        "20-ام",
        "21-ام",
        "22-ام",
        "23-ام",
        "24-ام",
        "25-ام",
        "26-ام",
        "27-ام",
        "28-ام",
        "29-ام",
        "30-ام",
        "31-ام",
      ];
      expect(result).toEqual(expected);
    });
  });

  it("era", () => {
    const result = format(date, "G GG GGG GGGG GGGGG");
    expect(result).toBe(["ب.ه.", "ب.ه.", "ب.ه.", "بعد از هجرت", "ب"].join(" "));

    const bcDate = new Date();
    bcDate.setFullYear(-1, 0 /* Jan */, 1);
    const bcResult = format(bcDate, "G GG GGG GGGG GGGGG");
    expect(bcResult).toBe(
      ["ق.ه.", "ق.ه.", "ق.ه.", "قبل از هجرت", "ق"].join(" "),
    );
  });

  describe("year", () => {
    describe("regular year", () => {
      it("works as expected", () => {
        const result = format(date, "y yo yy yyy yyyy yyyyy");
        expect(result).toBe(
          ["1365", "1365-ام", "65", "1365", "1365", "01365"].join(" "),
        );
      });

      it.skip("1 BC formats as 1", () => {
        const date = new Date(0);
        date.setFullYear(0, 0 /* Jan */, 1);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "y");
        expect(result).toBe("1");
      });

      it.skip("2 BC formats as 2", () => {
        const date = new Date(0);
        date.setFullYear(-1, 0 /* Jan */, 1);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "y");
        expect(result).toBe("2");
      });

      it.skip("2 BC formats as 2nd", () => {
        const date = new Date();
        date.setFullYear(-1, 0 /* Jan */, 1);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "yo");
        expect(result).toBe("2nd");
      });
    });

    describe.skip("local week-numbering year", () => {
      it("works as expected", () => {
        const result = format(date, "Y Yo YY YYY YYYY YYYYY", {
          useAdditionalWeekYearTokens: true,
        });
        expect(result).toBe("1986 1986th 86 1986 1986 01986");
      });

      it("the first week of the next year", () => {
        const result = format(
          /* 1392/10/8 */ new Date(2013, 11 /* Dec */, 29),
          "YYYY",
          {
            useAdditionalWeekYearTokens: true,
          },
        );
        expect(result).toBe("2014");
      });

      it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
        const result = format(
          /* 1392/10/8 */ new Date(2013, 11 /* Dec */, 29),
          "YYYY",
          {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            useAdditionalWeekYearTokens: true,
          },
        );
        expect(result).toBe("2013");
      });

      it("the first week of year", () => {
        const result = format(
          /* 1394/10/11 */ new Date(2016, 0 /* Jan */, 1),
          "YYYY",
          {
            useAdditionalWeekYearTokens: true,
          },
        );
        expect(result).toBe("2016");
      });

      it("1 BC formats as 1", () => {
        const date = new Date(0);
        date.setFullYear(0, 6 /* Jul */, 2);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "Y");
        expect(result).toBe("1");
      });

      it("2 BC formats as 2", () => {
        const date = new Date(0);
        date.setFullYear(-1, 6 /* Jul */, 2);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "Y");
        expect(result).toBe("2");
      });
    });

    describe("ISO week-numbering year", () => {
      it("works as expected", () => {
        const result = format(date, "R RR RRR RRRR RRRRR");
        expect(result).toBe("1986 1986 1986 1986 01986");
      });

      it("the first week of the next year", () => {
        const result = format(
          /* 1392/10/9 */ new Date(2013, 11 /* Dec */, 30),
          "RRRR",
        );
        expect(result).toBe("2014");
      });

      it("the last week of the previous year", () => {
        const result = format(
          /* 1394/10/11 */ new Date(2016, 0 /* Jan */, 1),
          "RRRR",
        );
        expect(result).toBe("2015");
      });

      it("1 BC formats as 0", () => {
        const date = new Date(0);
        date.setFullYear(0, 6 /* Jul */, 2);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "R");
        expect(result).toBe("0");
      });

      it("2 BC formats as -1", () => {
        const date = new Date(0);
        date.setFullYear(-1, 6 /* Jul */, 2);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "R");
        expect(result).toBe("-1");
      });
    });

    describe.skip("extended year", () => {
      it("works as expected", () => {
        const result = format(date, "u uu uuu uuuu uuuuu");
        expect(result).toBe("1986 1986 1986 1986 01986");
      });

      it("1 BC formats as 0", () => {
        const date = new Date(0);
        date.setFullYear(0, 0, 1);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "u");
        expect(result).toBe("0");
      });

      it("2 BC formats as -1", () => {
        const date = new Date(0);
        date.setFullYear(-1, 0, 1);
        date.setHours(0, 0, 0, 0);
        const result = format(date, "u");
        expect(result).toBe("-1");
      });
    });
  });

  describe("quarter", () => {
    it("formatting quarter", () => {
      const result = format(date, "Q Qo QQ QQQ QQQQ QQQQQ");
      expect(result).toBe(
        ["1", "1-ام", "01", "س‌م1", "سه‌ماهه 1", "1"].join(" "),
      );
    });

    it("stand-alone quarter", () => {
      const result = format(date, "q qo qq qqq qqqq qqqqq");
      expect(result).toBe(
        ["1", "1-ام", "01", "س‌م1", "سه‌ماهه 1", "1"].join(" "),
      );
    });

    it("returns a correct quarter for each month", () => {
      const result = [];
      for (let i = 0; i <= 11; i++) {
        result.push(format(new Date(1986, i + 3, 1), "Q"));
      }
      const expected = [
        "1",
        "1",
        "1",
        "2",
        "2",
        "2",
        "3",
        "3",
        "3",
        "4",
        "4",
        "4",
      ];
      expect(result).toEqual(expected);
    });
  });

  describe("month", () => {
    it("formatting month", () => {
      const result = format(date, "M Mo MM MMM MMMM MMMMM");
      expect(result).toBe(
        ["1", "1-ام", "01", "فرو", "فروردین", "فر"].join(" "),
      );
    });

    it("stand-alone month", () => {
      const result = format(date, "L Lo LL LLL LLLL LLLLL");
      expect(result).toBe(
        ["1", "1-ام", "01", "فرو", "فروردین", "فر"].join(" "),
      );
    });
  });

  describe("week", () => {
    describe("local week of year", () => {
      it("works as expected", () => {
        const date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6);
        const result = format(date, "w wo ww");
        expect(result).toBe(["4", "4-ام", "04"].join(" "));
      });

      it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
        const date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6);
        const result = format(date, "w wo ww", {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
        });
        expect(result).toBe(["2", "2-ام", "02"].join(" "));
      });
    });

    it("ISO week of year", () => {
      const date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6);
      const result = format(date, "I Io II");
      expect(result).toBe(["14", "14-ام", "14"].join(" "));
    });
  });

  describe("day", () => {
    it("date", () => {
      const result = format(date, "d do dd");
      expect(result).toBe(["15", "15-ام", "15"].join(" "));
    });

    describe("day of year", () => {
      it("works as expected", () => {
        const result = format(date, "D Do DD DDD DDDDD", {
          useAdditionalDayOfYearTokens: true,
        });
        expect(result).toBe(["15", "15-ام", "15", "015", "00015"].join(" "));
      });

      it("returns a correct day number for the last day of a leap year", () => {
        const result = format(
          /* 1366/12/30 */ new Date(1988, 2 /* Mar */, 20, 23, 59, 59, 999),
          "D",
          { useAdditionalDayOfYearTokens: true },
        );
        expect(result).toBe("366");
      });
    });
  });

  describe("week day", () => {
    describe("day of week", () => {
      it("works as expected", () => {
        const result = format(date, "E EE EEE EEEE EEEEE EEEEEE");
        expect(result).toBe("جمعه جمعه جمعه جمعه ج ج");
      });
    });

    describe("ISO day of week", () => {
      it("works as expected", () => {
        const result = format(date, "i io ii iii iiii iiiii iiiiii");
        expect(result).toBe(
          ["5", "5-ام", "05", "جمعه", "جمعه", "ج", "ج"].join(" "),
        );
      });

      it("returns a correct day of an ISO week", () => {
        const result = [];
        for (let i = 1; i <= 7; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), "i"));
        }
        const expected = ["1", "2", "3", "4", "5", "6", "7"];
        expect(result).toEqual(expected);
      });
    });

    describe("formatting day of week", () => {
      it("works as expected", () => {
        const result = format(date, "e eo ee eee eeee eeeee eeeeee");
        expect(result).toBe(
          ["7", "7-ام", "07", "جمعه", "جمعه", "ج", "ج"].join(" "),
        );
      });

      it("by default, 1 is Saturday, 2 is Sunday, ...", () => {
        const result = [];
        for (let i = 6; i <= 12; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), "e"));
        }
        const expected = ["1", "2", "3", "4", "5", "6", "7"];
        expect(result).toEqual(expected);
      });

      it("allows to specify which day is the first day of the week", () => {
        const result = [];
        for (let i = 1; i <= 7; i++) {
          result.push(
            format(new Date(1986, 8 /* Sep */, i), "e", { weekStartsOn: 1 }),
          );
        }
        const expected = ["1", "2", "3", "4", "5", "6", "7"];
        expect(result).toEqual(expected);
      });
    });

    describe("stand-alone day of week", () => {
      it("works as expected", () => {
        const result = format(date, "c co cc ccc cccc ccccc cccccc");
        expect(result).toBe(
          ["7", "7-ام", "07", "جمعه", "جمعه", "ج", "ج"].join(" "),
        );
      });

      it("by default, 1 is Saturday, 2 is Sunday, ...", () => {
        const result = [];
        for (let i = 6; i <= 12; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), "c"));
        }
        const expected = ["1", "2", "3", "4", "5", "6", "7"];
        expect(result).toEqual(expected);
      });

      it("allows to specify which day is the first day of the week", () => {
        const result = [];
        for (let i = 1; i <= 7; i++) {
          result.push(
            format(new Date(1986, 8 /* Sep */, i), "c", { weekStartsOn: 1 }),
          );
        }
        const expected = ["1", "2", "3", "4", "5", "6", "7"];
        expect(result).toEqual(expected);
      });
    });
  });

  describe("day period and hour", () => {
    it("hour [1-12]", () => {
      const result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "h ho hh",
      );
      expect(result).toBe(["12", "12-ام", "12"].join(" "));
    });

    it("hour [0-23]", () => {
      const result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "H Ho HH",
      );
      expect(result).toBe(["0", "0-ام", "00"].join(" "));
    });

    it("hour [0-11]", () => {
      const result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "K Ko KK",
      );
      expect(result).toBe(["0", "0-ام", "00"].join(" "));
    });

    it("hour [1-24]", () => {
      const result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "k ko kk",
      );
      expect(result).toBe(["24", "24-ام", "24"].join(" "));
    });

    describe("AM, PM", () => {
      it("works as expected", () => {
        const result = format(
          /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
          "a aa aaa aaaa aaaaa",
        );
        expect(result).toBe("ق.ظ. ق.ظ. ق.ظ. قبل‌ازظهر ق");
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
        expect(format(date, "h H K k a")).toBe("12 12 0 12 ب.ظ.");
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
        expect(format(date, "h H K k a")).toBe("12 0 0 24 ق.ظ.");
      });
    });

    describe("AM, PM, noon, midnight", () => {
      it("works as expected", () => {
        const result = format(
          /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 2, 0, 0, 900),
          "b bb bbb bbbb bbbbb",
        );
        expect(result).toBe("ق.ظ. ق.ظ. ق.ظ. قبل‌ازظهر ق");

        const pmResult = format(
          /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 13, 0, 0, 900),
          "b bb bbb bbbb bbbbb",
        );
        expect(pmResult).toBe("ب.ظ. ب.ظ. ب.ظ. بعدازظهر ب");
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
        expect(format(date, "b bb bbb bbbb bbbbb")).toBe("ظهر ظهر ظهر ظهر ظ");
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
        expect(format(date, "b bb bbb bbbb bbbbb")).toBe(
          "نیمه‌شب نیمه‌شب نیمه‌شب نیمه‌شب ن",
        );
      });
    });

    describe("flexible day periods", () => {
      it("works as expected", () => {
        const result = format(date, "B, BB, BBB, BBBB, BBBBB");
        expect(result).toBe("صبح, صبح, صبح, صبح, ص");
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
        expect(format(date, "h B")).toBe("12 بعدازظهر");
      });

      it("5 PM", () => {
        const date = /* 1365/1/17 */ new Date(
          1986,
          3 /* Apr */,
          6,
          17,
          0,
          0,
          900,
        );
        expect(format(date, "h B")).toBe("5 عصر");
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
        expect(format(date, "h B")).toBe("12 شب");
      });

      it("4 AM", () => {
        const date = /* 1365/1/17 */ new Date(
          1986,
          3 /* Apr */,
          6,
          4,
          0,
          0,
          900,
        );
        expect(format(date, "h B")).toBe("4 صبح");
      });
    });
  });

  it("minute", () => {
    const result = format(date, "m mo mm");
    expect(result).toBe(["32", "32-ام", "32"].join(" "));
  });

  describe("second", () => {
    it("second", () => {
      const result = format(date, "s so ss");
      expect(result).toBe(["55", "55-ام", "55"].join(" "));
    });

    it("fractional seconds", () => {
      const result = format(date, "S SS SSS SSSS");
      expect(result).toBe("1 12 123 1230");
    });
  });

  describe("time zone", () => {
    it("ISO-8601 with Z", () => {
      const result = format(date, "X XX XXX XXXX XXXXX");
      const expectedResult = [
        timezoneWithOptionalMinutesAndZShort,
        timezoneWithZShort,
        timezoneWithZ,
        timezoneWithZShort,
        timezoneWithZ,
      ].join(" ");
      expect(result).toBe(expectedResult);

      const getTimezoneOffsetStub = sinon.stub(
        Date.prototype,
        "getTimezoneOffset",
      );
      getTimezoneOffsetStub.returns(0);
      const resultZeroOffset = format(date, "X XX XXX XXXX XXXXX");
      expect(resultZeroOffset).toBe("Z Z Z Z Z");

      getTimezoneOffsetStub.returns(480);
      const resultNegativeOffset = format(date, "X XX XXX XXXX XXXXX");
      expect(resultNegativeOffset).toBe("-08 -0800 -08:00 -0800 -08:00");

      getTimezoneOffsetStub.returns(450);
      const resultNegative30Offset = format(date, "X XX XXX XXXX XXXXX");
      expect(resultNegative30Offset).toBe("-0730 -0730 -07:30 -0730 -07:30");

      getTimezoneOffsetStub.restore();
    });

    it("ISO-8601 without Z", () => {
      const result = format(date, "x xx xxx xxxx xxxxx");
      const expectedResult = [
        timezoneWithOptionalMinutesShort,
        timezoneShort,
        timezone,
        timezoneShort,
        timezone,
      ].join(" ");
      expect(result).toBe(expectedResult);
    });

    it("GMT", () => {
      const result = format(date, "O OO OOO OOOO");
      const expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT,
      ].join(" ");
      expect(result).toBe(expectedResult);

      const getTimezoneOffsetStub = sinon.stub(
        Date.prototype,
        "getTimezoneOffset",
      );
      getTimezoneOffsetStub.returns(480);
      const resultNegativeOffset = format(date, "O OO OOO OOOO");
      expect(resultNegativeOffset).toBe("GMT-8 GMT-8 GMT-8 GMT-08:00");

      getTimezoneOffsetStub.returns(450);
      const resultNegative30Offset = format(date, "O OO OOO OOOO");
      expect(resultNegative30Offset).toBe(
        "GMT-7:30 GMT-7:30 GMT-7:30 GMT-07:30",
      );

      getTimezoneOffsetStub.restore();
    });

    it("Specific non-location", () => {
      const result = format(date, "z zz zzz zzzz");
      const expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT,
      ].join(" ");
      expect(result).toBe(expectedResult);
    });
  });

  describe("timestamp", () => {
    it("seconds timestamp", () => {
      const result = format(date, "t");
      expect(result).toBe(secondsTimestamp);
    });

    it("milliseconds timestamp", () => {
      const result = format(date, "T");
      expect(result).toBe(timestamp);
    });

    it("seconds timestamp handles negative numbers", () => {
      expect(format(new Date(1001), "t")).toBe("1");
      expect(format(new Date(-1001), "t")).toBe("-1");
    });
  });

  describe("long format", () => {
    it("short date", () => {
      const result = format(date, "P");
      expect(result).toBe("1365/01/15");
    });

    it("medium date", () => {
      const result = format(date, "PP");
      expect(result).toBe(["15", "فرو", "1365"].join(" "));
    });

    it("long date", () => {
      const result = format(date, "PPP");
      expect(result).toBe(["15-ام", "فروردین", "1365"].join(" "));
    });

    it("full date", () => {
      const result = format(date, "PPPP");
      expect(result).toBe("جمعه 15-ام فروردین 1365");
    });

    it("short time", () => {
      const result = format(date, "p");
      expect(result).toBe("10:32 ق.ظ.");
    });

    it("medium time", () => {
      const result = format(date, "pp");
      expect(result).toBe("10:32:55 ق.ظ.");
    });

    it("long time", () => {
      const result = format(date, "ppp");
      expect(result).toBe("10:32:55 ق.ظ. " + timezoneGMTShort);
    });

    it("full time", () => {
      const result = format(date, "pppp");
      expect(result).toBe("10:32:55 ق.ظ. " + timezoneGMT);
    });

    it("short date + time", () => {
      const result = format(date, "Pp");
      expect(result).toBe("1365/01/15, 10:32 ق.ظ.");
    });

    it("medium date + time", () => {
      const result = format(date, "PPpp");
      expect(result).toBe("15 فرو 1365, 10:32:55 ق.ظ.");
    });

    it("long date + time", () => {
      const result = format(date, "PPPppp");
      expect(result).toBe(
        ["15-ام", "فروردین", "1365", "در", "10:32:55 ق.ظ."].join(" ") +
          " " +
          timezoneGMTShort,
      );
    });

    it("full date + time", () => {
      const result = format(date, "PPPPpppp");
      expect(result).toBe(
        ["جمعه", "15-ام", "فروردین", "1365", "در", "10:32:55 ق.ظ."].join(" ") +
          " " +
          timezoneGMT,
      );
    });

    it("allows arbitrary combination of date and time", () => {
      const result = format(date, "Ppppp");
      expect(result).toBe("1365/01/15, 10:32:55 ق.ظ. " + timezoneGMT);
    });
  });

  describe("edge cases", () => {
    it("throws RangeError if the time value is invalid", () => {
      expect(format.bind(null, new Date(NaN), "MMMM d, yyyy")).toThrow(
        RangeError,
      );
    });

    it.skip("handles dates before 100 AD", () => {
      const initialDate = new Date(0);
      initialDate.setFullYear(7, 11 /* Dec */, 31);
      initialDate.setHours(0, 0, 0, 0);
      expect(format(initialDate, "Y ww i")).toBe("8 01 1");
    });
  });

  describe("locale features", () => {
    it("allows to pass a custom locale", () => {
      const customLocale = {
        localize: {
          month: () => {
            return "works";
          },
        },
        formatLong: {
          date: () => {
            return "'It' MMMM!";
          },
        },
      };
      const result = format(date, "PPPP", {
        // @ts-expect-error - It's ok to have incomplete locale
        locale: customLocale,
      });
      expect(result).toBe("It works!");
    });

    it("allows a localize preprocessor", () => {
      const customLocale = {
        localize: {
          month: (v: number) => ["janvier"][v],
          ordinalNumber: (v: number) => String(v) + "er",

          preprocessor: (date: Date, parts: FormatPart[]) => {
            // replace `do` tokens to `d` if not the first of the month
            if (date.getDate() === 1) return parts;

            return parts.map((part) =>
              part.isToken && part.value === "do"
                ? { isToken: true, value: "d" }
                : part,
            );
          },
        },
      };

      let result = format(/* 1402/10/11 */ new Date(2024, 0, 1), "do MMMM", {
        // @ts-expect-error - It's ok to have incomplete locale
        locale: customLocale,
      });
      expect(result).toEqual("11er ");

      result = format(/* 1402/10/12 */ new Date(2024, 0, 2), "do MMMM", {
        // @ts-expect-error - It's ok to have incomplete locale
        locale: customLocale,
      });
      expect(result).toEqual("12 ");
    });
  });

  it("throws RangeError exception if the format string contains an unescaped latin alphabet character", () => {
    expect(format.bind(null, date, "yyyy-MM-dd-nnnn")).toThrow(RangeError);
  });

  describe("useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options", () => {
    it("throws an error if D token is used", () => {
      expect(() => format(date, "yyyy-MM-D")).toThrow("Use `d` instead of `D`");
    });

    it("allows D token if useAdditionalDayOfYearTokens is set to true", () => {
      const result = format(date, "yyyy-MM-D", {
        useAdditionalDayOfYearTokens: true,
      });
      expect(result).toEqual("1365-01-15");
    });

    it("throws an error if DD token is used", () => {
      expect(() => format(date, "yyyy-MM-DD")).toThrow(
        "Use `dd` instead of `DD`",
      );
    });

    it("allows DD token if useAdditionalDayOfYearTokens is set to true", () => {
      const result = format(date, "yyyy-MM-DD", {
        useAdditionalDayOfYearTokens: true,
      });
      expect(result).toEqual("1365-01-15");
    });

    it("throws an error if YY token is used", () => {
      expect(() => format(date, "YY-MM-dd")).toThrow(
        "Use `yy` instead of `YY`",
      );
    });

    it("allows YY token if useAdditionalWeekYearTokens is set to true", () => {
      const result = format(date, "YY-MM-dd", {
        useAdditionalWeekYearTokens: true,
      });
      expect(result).toEqual("65-01-15");
    });

    it("throws an error if YYYY token is used", () => {
      expect(() => format(date, "YYYY-MM-dd")).toThrow(
        "Use `yyyy` instead of `YYYY`",
      );
    });

    it("allows YYYY token if useAdditionalWeekYearTokens is set to true", () => {
      const result = format(date, "YYYY-MM-dd", {
        useAdditionalWeekYearTokens: true,
      });
      expect(result).toEqual("1365-01-15");
    });

    describe("console.warn", () => {
      let warn: SpyInstance;

      beforeEach(() => {
        warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);
      });

      afterEach(() => {
        warn.mockRestore();
      });

      it('warns if "D" token is used', () => {
        try {
          format(date, "yyyy-MM-D");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `d` instead of `D` (in `yyyy-MM-D`) for formatting days of the month to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "DD" token is used', () => {
        try {
          format(date, "yyyy-MM-DD");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `dd` instead of `DD` (in `yyyy-MM-DD`) for formatting days of the month to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "DDD" token is used', () => {
        try {
          format(date, "yyyy-MM-DDD");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `ddd` instead of `DDD` (in `yyyy-MM-DDD`) for formatting days of the month to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "DDDD" token is used', () => {
        try {
          format(date, "yyyy-MM-DDDD");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `dddd` instead of `DDDD` (in `yyyy-MM-DDDD`) for formatting days of the month to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "DDDDD" token is used', () => {
        try {
          format(date, "yyyy-MM-DDDDD");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `ddddd` instead of `DDDDD` (in `yyyy-MM-DDDDD`) for formatting days of the month to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "Y" token is used', () => {
        try {
          format(date, "Y-MM-dd");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `y` instead of `Y` (in `Y-MM-dd`) for formatting years to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "YY" token is used', () => {
        try {
          format(date, "YY-MM-dd");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `yy` instead of `YY` (in `YY-MM-dd`) for formatting years to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "YYY" token is used', () => {
        try {
          format(date, "YYY-MM-dd");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `yyy` instead of `YYY` (in `YYY-MM-dd`) for formatting years to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "YYYY" token is used', () => {
        try {
          format(date, "YYYY-MM-dd");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `yyyy` instead of `YYYY` (in `YYYY-MM-dd`) for formatting years to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });

      it('warns if "YYYYY" token is used', () => {
        try {
          format(date, "YYYYY-MM-dd");
        } catch (_) {
          // Ignore the error
        }
        expect(warn).toBeCalledWith(
          "Use `yyyyy` instead of `YYYYY` (in `YYYYY-MM-dd`) for formatting years to the input `" +
            date +
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md",
        );
      });
    });
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = "2024-09-17T10:00:00Z";
      expect(
        format(date, "yyyy-MM-dd", {
          in: tz("Pacific/Midway"), // UTC-11:00
        }),
      ).toBe("1403-06-26");
      expect(
        format(date, "yyyy-MM-dd", {
          in: tz("Pacific/Kiritimati"), // UTC+14:00
        }),
      ).toBe("1403-06-28");
    });
  });
});
