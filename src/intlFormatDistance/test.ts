import { TZDate, tz } from "@date-fns/tz";
import { describe, expect, it } from "vitest";
import { intlFormatDistance } from "./index.js";

describe("intlFormatDistance", () => {
  describe("with default values", () => {
    describe("works with same dates", () => {
      it("outputs `now`", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
        );
        expect(result).toBe("now");
      });
    });

    describe("works with single second", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 1),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
        );
        expect(result).toBe("in 1 second");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 1),
        );
        expect(result).toBe("1 second ago");
      });
    });

    describe("works with multiple seconds", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 59),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
        );
        expect(result).toBe("in 59 seconds");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 59),
        );
        expect(result).toBe("59 seconds ago");
      });
    });

    describe("works with single minute", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 59),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 29, 59),
        );
        expect(result).toBe("in 1 minute");
      });

      it("works with future with over a minute", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 28, 10),
        );
        expect(result).toBe("in 1 minute");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 29, 59),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 59),
        );
        expect(result).toBe("1 minute ago");
      });

      it("works with past with over a minute", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 28, 10),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30),
        );
        expect(result).toBe("1 minute ago");
      });
    });

    describe("works with multiple minutes", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 28),
        );
        expect(result).toBe("in 2 minutes");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 28),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30),
        );
        expect(result).toBe("2 minutes ago");
      });
    });

    describe("works with 60 seconds", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 11, 30, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
        );
        expect(result).toBe("in 1 hour");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 11, 30, 0),
        );
        expect(result).toBe("1 hour ago");
      });
    });

    describe("works with single hour", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10),
          /* 1365/1/16 */ new Date(1986, 3, 5, 9),
        );
        expect(result).toBe("in 1 hour");
      });

      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30),
          /* 1365/1/16 */ new Date(1986, 3, 5, 9),
        );
        expect(result).toBe("in 1 hour");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 9),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10),
        );
        expect(result).toBe("1 hour ago");
      });

      it("works with past with over an hour", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 9),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30),
        );
        expect(result).toBe("1 hour ago");
      });
    });

    describe("works with multiple hours", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10),
          /* 1365/1/16 */ new Date(1986, 3, 5, 8),
        );
        expect(result).toBe("in 2 hours");
      });

      it("works with future with extra minutes", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30),
          /* 1365/1/16 */ new Date(1986, 3, 5, 8),
        );
        expect(result).toBe("in 2 hours");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 8),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10),
        );
        expect(result).toBe("2 hours ago");
      });

      it("works with past with extra minutes", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 8),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10),
        );
        expect(result).toBe("2 hours ago");
      });
    });

    describe("works with single day", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/17 */ new Date(1986, 3, 6, 22),
          /* 1365/1/16 */ new Date(1986, 3, 5, 22),
        );
        expect(result).toBe("tomorrow");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 22),
          /* 1365/1/17 */ new Date(1986, 3, 6, 22),
        );
        expect(result).toBe("yesterday");
      });

      it("works with past with an extra hour", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 22),
          /* 1365/1/17 */ new Date(1986, 3, 6, 22, 5),
        );
        expect(result).toBe("yesterday");
      });
    });

    describe("works with multiple days", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/17 */ new Date(1986, 3, 6, 22),
          /* 1365/1/15 */ new Date(1986, 3, 4, 22),
        );
        expect(result).toBe("in 2 days");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 22),
          /* 1365/1/17 */ new Date(1986, 3, 6, 22),
        );
        expect(result).toBe("2 days ago");
      });
    });

    describe("works with single week", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/21 */ new Date(1986, 3, 10, 22),
          /* 1365/1/14 */ new Date(1986, 3, 3, 22),
        );
        expect(result).toBe("next week");
      });

      it("works with future with more than a week", () => {
        const result = intlFormatDistance(
          /* 1365/1/22 */ new Date(1986, 3, 11, 22),
          /* 1365/1/14 */ new Date(1986, 3, 3, 22),
        );
        expect(result).toBe("next week");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/14 */ new Date(1986, 3, 3, 22),
          /* 1365/1/21 */ new Date(1986, 3, 10, 22),
        );
        expect(result).toBe("last week");
      });

      it("works with past with more than a week", () => {
        const result = intlFormatDistance(
          /* 1365/1/14 */ new Date(1986, 3, 3, 22),
          /* 1365/1/22 */ new Date(1986, 3, 11, 22),
        );
        expect(result).toBe("last week");
      });
    });

    describe("works with multiple weeks", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/1/26 */ new Date(1986, 3, 15),
          /* 1365/1/12 */ new Date(1986, 3, 1),
        );
        expect(result).toBe("in 2 weeks");
      });

      it("works with future with more than 2 weeks", () => {
        const result = intlFormatDistance(
          /* 1365/1/28 */ new Date(1986, 3, 17),
          /* 1365/1/12 */ new Date(1986, 3, 1),
        );
        expect(result).toBe("in 2 weeks");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/12 */ new Date(1986, 3, 1),
          /* 1365/1/26 */ new Date(1986, 3, 15),
        );
        expect(result).toBe("2 weeks ago");
      });

      it("works with past with more than 2 weeks", () => {
        const result = intlFormatDistance(
          /* 1365/1/12 */ new Date(1986, 3, 1),
          /* 1365/1/28 */ new Date(1986, 3, 17),
        );
        expect(result).toBe("2 weeks ago");
      });
    });

    describe("works with single month", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/2/12 */ new Date(1986, 4, 2),
          /* 1365/1/12 */ new Date(1986, 3, 1),
        );
        expect(result).toBe("next month");
      });

      it("works with future with more than a month", () => {
        const result = intlFormatDistance(
          /* 1365/5/22 */ new Date(1986, 7, 13),
          /* 1365/4/1 */ new Date(1986, 5, 22),
        );
        expect(result).toBe("next month");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1365/1/12 */ new Date(1986, 3, 1),
          /* 1365/2/12 */ new Date(1986, 4, 2),
        );
        expect(result).toBe("last month");
      });

      it("works with past with more than a month", () => {
        const result = intlFormatDistance(
          /* 1365/4/1 */ new Date(1986, 5, 22),
          /* 1365/5/22 */ new Date(1986, 7, 13),
        );
        expect(result).toBe("last month");
      });
    });

    describe("works with single quarter", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/3/12 */ new Date(1986, 5, 2),
          /* 1364/11/12 */ new Date(1986, 1, 1),
        );
        expect(result).toBe("next quarter");
      });

      it("works with future with more than a quarter", () => {
        const result = intlFormatDistance(
          /* 1364/6/22 */ new Date(1985, 8, 13),
          /* 1364/2/1 */ new Date(1985, 3, 21),
        );
        expect(result).toBe("next quarter");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1364/11/12 */ new Date(1986, 1, 1),
          /* 1365/3/12 */ new Date(1986, 5, 2),
        );
        expect(result).toBe("last quarter");
      });

      it("works with past with more than a quarter", () => {
        const result = intlFormatDistance(
          /* 1364/2/1 */ new Date(1985, 3, 21),
          /* 1364/6/22 */ new Date(1985, 8, 13),
        );
        expect(result).toBe("last quarter");
      });
    });

    describe("works with multiple quarters", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/4/11 */ new Date(1986, 6, 2),
          /* 1364/11/12 */ new Date(1986, 1, 1),
        );
        expect(result).toBe("in 2 quarters");
      });

      it("works with future with more that X quarters", () => {
        const result = intlFormatDistance(
          /* 1365/4/31 */ new Date(1986, 6, 22),
          /* 1364/11/12 */ new Date(1986, 1, 1),
        );
        expect(result).toBe("in 2 quarters");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1364/11/12 */ new Date(1986, 1, 1),
          /* 1365/4/11 */ new Date(1986, 6, 2),
        );
        expect(result).toBe("2 quarters ago");
      });

      it("works with past with more that X quarters", () => {
        const result = intlFormatDistance(
          /* 1364/11/12 */ new Date(1986, 1, 1),
          /* 1365/4/31 */ new Date(1986, 6, 22),
        );
        expect(result).toBe("2 quarters ago");
      });
    });

    describe("works with single year", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1365/11/13 */ new Date(1987, 1, 2),
          /* 1364/11/12 */ new Date(1986, 1, 1),
        );
        expect(result).toBe("next year");
      });

      it("works with future with more that a year", () => {
        const result = intlFormatDistance(
          /* 1365/11/2 */ new Date(1987, 0, 22),
          /* 1364/2/1 */ new Date(1985, 3, 21),
        );
        expect(result).toBe("next year");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1364/11/12 */ new Date(1986, 1, 1),
          /* 1365/11/13 */ new Date(1987, 1, 2),
        );
        expect(result).toBe("last year");
      });

      it("works with past with more than a year", () => {
        const result = intlFormatDistance(
          /* 1364/2/1 */ new Date(1985, 3, 21),
          /* 1365/11/2 */ new Date(1987, 0, 22),
        );
        expect(result).toBe("last year");
      });
    });

    describe("works with multiple years", () => {
      it("works with future", () => {
        const result = intlFormatDistance(
          /* 1366/11/12 */ new Date(1988, 1, 1),
          /* 1364/11/12 */ new Date(1986, 1, 1),
        );
        expect(result).toBe("in 2 years");
      });

      it("works with future with x years", () => {
        const result = intlFormatDistance(
          /* 1466/11/12 */ new Date(2088, 1, 1),
          /* 1364/11/12 */ new Date(1986, 1, 1),
        );
        expect(result).toBe("in 102 years");
      });

      it("works with past", () => {
        const result = intlFormatDistance(
          /* 1364/11/12 */ new Date(1986, 1, 1),
          /* 1366/11/12 */ new Date(1988, 1, 1),
        );
        expect(result).toBe("2 years ago");
      });

      it("works with past with x years", () => {
        const result = intlFormatDistance(
          /* 1366/11/12 */ new Date(1988, 1, 1),
          /* 1464/11/13 */ new Date(2086, 1, 1),
        );
        expect(result).toBe("98 years ago");
      });
    });
  });

  describe("with options", () => {
    describe("unit option", () => {
      describe("seconds", () => {
        it("works with future with seconds", () => {
          const result = intlFormatDistance(
            /* 1366/1/15 */ new Date(1987, 3, 4, 10, 31, 30),
            /* 1366/1/15 */ new Date(1987, 3, 4, 10, 30, 0),
            { unit: "second" },
          );
          expect(result).toBe("in 90 seconds");
        });

        it("works with past with seconds", () => {
          const result = intlFormatDistance(
            /* 1366/1/15 */ new Date(1987, 3, 4, 10, 30, 0),
            /* 1366/1/15 */ new Date(1987, 3, 4, 10, 31, 30),
            { unit: "second" },
          );
          expect(result).toBe("90 seconds ago");
        });

        it("works with future with quarters", () => {
          const result = intlFormatDistance(
            /* 1366/4/13 */ new Date(1987, 6, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            { unit: "quarter" },
          );
          expect(result).toBe("in 5 quarters");
        });
      });

      describe("minutes", () => {
        it("works with future", () => {
          const result = intlFormatDistance(
            /* 1365/1/15 */ new Date(1986, 3, 4, 11, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            { unit: "minute" },
          );
          expect(result).toBe("in 60 minutes");
        });

        it("works with the past", () => {
          const result = intlFormatDistance(
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 11, 30, 0),
            { unit: "minute" },
          );
          expect(result).toBe("60 minutes ago");
        });
      });

      describe("hours", () => {
        it("works the future", () => {
          const result = intlFormatDistance(
            /* 1365/1/15 */ new Date(1986, 3, 4, 11, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),

            { unit: "hour" },
          );
          expect(result).toBe("in 1 hour");
        });

        it("works with the past", () => {
          const result = intlFormatDistance(
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 11, 30, 0),

            { unit: "hour" },
          );
          expect(result).toBe("1 hour ago");
        });
      });

      describe("single day", () => {
        it("works with the future", () => {
          const result = intlFormatDistance(
            /* 1366/1/15 */ new Date(1987, 3, 4, 11, 30, 0),
            /* 1366/1/15 */ new Date(1987, 3, 4, 10, 30, 0),
            { unit: "day" },
          );
          expect(result).toBe("today");
        });

        it("works with the past", () => {
          const result = intlFormatDistance(
            /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
          );
          expect(result).toBe("tomorrow");
        });
      });

      describe("multiple days", () => {
        it("works with the future", () => {
          const result = intlFormatDistance(
            /* 1366/1/16 */ new Date(1987, 3, 5, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            { unit: "day" },
          );
          expect(result).toBe("in 366 days");
        });

        it("works with the past", () => {
          const result = intlFormatDistance(
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1366/1/16 */ new Date(1987, 3, 5, 10, 30, 0),

            { unit: "day" },
          );
          expect(result).toBe("366 days ago");
        });
      });

      describe("single weeks", () => {
        it("works with the future", () => {
          const result = intlFormatDistance(
            /* 1366/1/22 */ new Date(1987, 3, 11, 10, 30, 0),
            /* 1366/1/15 */ new Date(1987, 3, 4, 10, 30, 0),
            { unit: "week" },
          );
          expect(result).toBe("next week");
        });

        it("works with the past", () => {
          const result = intlFormatDistance(
            /* 1366/1/15 */ new Date(1987, 3, 4, 10, 30, 0),
            /* 1366/1/22 */ new Date(1987, 3, 11, 10, 30, 0),
            { unit: "week" },
          );
          expect(result).toBe("last week");
        });
      });

      describe("multiple weeks", () => {
        it("works with the future", () => {
          const result = intlFormatDistance(
            /* 1366/1/17 */ new Date(1987, 3, 6, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            { unit: "week" },
          );
          expect(result).toBe("in 53 weeks");
        });

        it("works with the past", () => {
          const result = intlFormatDistance(
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1366/1/17 */ new Date(1987, 3, 6, 10, 30, 0),

            { unit: "week" },
          );
          expect(result).toBe("53 weeks ago");
        });
      });
    });

    describe("numeric option", () => {
      describe("works with weeks", () => {
        it("works with past", () => {
          const result = intlFormatDistance(
            /* 1365/1/14 */ new Date(1986, 3, 3, 22),
            /* 1365/1/21 */ new Date(1986, 3, 10, 22),
            { numeric: "always" },
          );
          expect(result).toBe("1 week ago");
        });

        it("works with future", () => {
          const result = intlFormatDistance(
            /* 1365/1/21 */ new Date(1986, 3, 10, 22),
            /* 1365/1/14 */ new Date(1986, 3, 3, 22),
            { numeric: "always" },
          );
          expect(result).toBe("in 1 week");
        });
      });

      it("works with days", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
          { numeric: "always" },
        );
        expect(result).toBe("in 1 day");
      });

      it("works with the same dates", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
          { numeric: "auto" },
        );
        expect(result).toBe("now");
      });
    });

    describe("locale option", () => {
      describe("locale", () => {
        it("allows to set Spanish locale", () => {
          const result = intlFormatDistance(
            /* 1365/2/14 */ new Date(1986, 4, 4, 10, 30, 0),
            /* 1364/2/14 */ new Date(1985, 4, 4, 10, 30, 0),
            { locale: "es" },
          );
          expect(result).toBe("el próximo año");
        });
      });
    });

    describe("style option", () => {
      it("works with years", () => {
        const result = intlFormatDistance(
          /* 1365/2/14 */ new Date(1986, 4, 4, 10, 30, 0),
          /* 1364/2/14 */ new Date(1985, 4, 4, 10, 30, 0),
          { style: "long" },
        );
        expect(result).toBe("next year");
      });
    });

    describe("unit and locale options", () => {
      it("works with multiple options", () => {
        const result = intlFormatDistance(
          /* 1365/1/16 */ new Date(1986, 3, 5, 11, 30, 0),
          /* 1365/1/16 */ new Date(1986, 3, 5, 10, 30, 0),
          { unit: "minute", locale: "de" },
        );
        expect(result).toBe("in 60 Minuten");
      });
    });

    describe("edge cases", () => {
      it("falls back to { numeric: always }", () => {
        const result = intlFormatDistance(
          /* 1364/2/15 */ new Date(1985, 4, 5, 10, 30, 0),
          /* 1364/2/14 */ new Date(1985, 4, 4, 10, 30, 0),
          { style: "long", numeric: "auto" },
        );
        expect(result).toBe("tomorrow");
      });

      it("handles dates before 100 AD", () => {
        const result = intlFormatDistance(
          /* -620/1/14 */ new Date(1, 3, 4, 11, 30, 0),
          /* -620/1/14 */ new Date(1, 3, 4, 10, 30, 0),
          { unit: "minute" },
        );
        expect(result).toBe("in 60 minutes");
      });
    });

    describe("errors", () => {
      it("checks the first date", () => {
        expect(
          intlFormatDistance.bind(
            null,
            new Date(NaN),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
          ),
        ).toThrow(RangeError);
      });

      it("checks the second date", () => {
        expect(
          intlFormatDistance.bind(
            null,
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            new Date(NaN),
          ),
        ).toThrow(RangeError);
      });

      it("checks both dates", () => {
        expect(
          intlFormatDistance.bind(null, new Date(NaN), new Date(NaN)),
        ).toThrow(RangeError);
      });

      it("checks unit", () => {
        expect(
          intlFormatDistance.bind(
            null,
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            // @ts-expect-error - We're testing wrong value
            { unit: "wrongValue" },
          ),
        ).toThrow(RangeError);
      });

      it("checks locale", () => {
        expect(
          intlFormatDistance.bind(
            null,
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            { locale: "wrongValue" },
          ),
        ).toThrow(RangeError);
      });

      it("checks localeMatcher", () => {
        expect(
          intlFormatDistance.bind(
            null,
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            // @ts-expect-error - We're testing wrong value
            { localeMatcher: "wrongValue" },
          ),
        ).toThrow(RangeError);
      });

      it("checks numeric", () => {
        expect(
          intlFormatDistance.bind(
            null,
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            // @ts-expect-error - We're testing wrong value
            { numeric: "wrongValue" },
          ),
        ).toThrow(RangeError);
      });

      it("checks style", () => {
        expect(
          intlFormatDistance.bind(
            null,
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            /* 1365/1/15 */ new Date(1986, 3, 4, 10, 30, 0),
            // @ts-expect-error - We're testing wrong value
            { style: "wrongValue" },
          ),
        ).toThrow(RangeError);
      });
    });
  });

  it("allows dates to be of different types", () => {
    function _test<DateType1 extends Date, DateType2 extends Date>(
      arg1: DateType1 | number | string,
      arg2: DateType2 | number | string,
    ) {
      intlFormatDistance(arg1, arg2);
    }
  });

  it("normalizes the dates", () => {
    const dateLeft = /* 1366/4/13 */ new TZDate(
      1987,
      6,
      4,
      10,
      30,
      0,
      "Asia/Singapore",
    );
    const dateRight = /* 1365/1/15 */ new TZDate(
      1986,
      3,
      4,
      10,
      30,
      0,
      "America/New_York",
    );
    expect(intlFormatDistance(dateLeft, dateRight)).toBe("next year");
    expect(intlFormatDistance(dateRight, dateLeft)).toBe("last year");
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      expect(
        intlFormatDistance(
          /* 1403/6/13 */ "2024-09-03T00:00:00Z",
          /* 1403/6/13 */ "2024-09-03T16:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe("yesterday");
      expect(
        intlFormatDistance(
          /* 1403/6/13 */ "2024-09-03T00:00:00Z",
          /* 1403/6/13 */ "2024-09-03T15:00:00Z",
          {
            in: tz("Asia/Singapore"),
          },
        ),
      ).toBe("15 hours ago");
      expect(
        intlFormatDistance(
          /* 1403/6/13 */ "2024-09-03T00:00:00Z",
          /* 1403/6/13 */ "2024-09-03T04:00:00Z",
          {
            in: tz("America/New_York"),
          },
        ),
      ).toBe("yesterday");
      expect(
        intlFormatDistance(
          /* 1403/6/13 */ "2024-09-03T00:00:00Z",
          /* 1403/6/13 */ "2024-09-03T03:00:00Z",
          {
            in: tz("America/New_York"),
          },
        ),
      ).toBe("3 hours ago");
    });
  });
});
