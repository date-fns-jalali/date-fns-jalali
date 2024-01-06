import { describe, expect, it } from "vitest";
import { formatDuration } from "./index.js";

describe("formatDuration", () => {
  it("formats full duration", () => {
    expect(
      formatDuration({
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      }),
    ).toBe("2 سال 9 ماه 1 هفته 7 روز 5 ساعت 9 دقیقه 30 ثانیه");
  });

  it("formats partial duration", () => {
    expect(formatDuration({ months: 9, days: 2 })).toBe("9 ماه 2 روز");
  });

  it("allows to customize the format", () => {
    expect(
      formatDuration(
        {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30,
        },
        { format: ["months", "weeks"] },
      ),
    ).toBe("9 ماه 1 هفته");
  });

  it("does not include zeros by default", () => {
    expect(
      formatDuration({
        years: 0,
        months: 0,
        weeks: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }),
    ).toBe("1 هفته");
  });

  it("allows to include zeros", () => {
    expect(
      formatDuration(
        {
          years: 0,
          months: 0,
          weeks: 1,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        { zero: true },
      ),
    ).toBe("0 سال 0 ماه 1 هفته 0 روز 0 ساعت 0 دقیقه 0 ثانیه");
  });

  it("allows to customize the delimiter", () => {
    expect(formatDuration({ months: 9, days: 2 }, { delimiter: "، " })).toBe(
      "9 ماه، 2 روز",
    );
  });
});
