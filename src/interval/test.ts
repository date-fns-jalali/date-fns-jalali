import { describe, expect, it } from "vitest";
import { interval } from "./index.js";

describe("Interval", () => {
  it("exposes start and end", () => {
    const result = interval(
      /* 1378/10/11 */ new Date(2000, 0),
      /* 1401/10/11 */ new Date(2023, 0),
    );
    expect(result.start).toEqual(/* 1378/10/11 */ new Date(2000, 0));
    expect(result.end).toEqual(/* 1401/10/11 */ new Date(2023, 0));
  });

  it("normalizes the dates", () => {
    const result = interval(
      +(/* 1378/10/11 */ new Date(2000, 0)),
      /* 1401/10/11 */ new Date(2023, 0).toISOString(),
    );
    expect(result.start).toEqual(/* 1378/10/11 */ new Date(2000, 0));
    expect(result.end).toEqual(/* 1401/10/11 */ new Date(2023, 0));
  });

  it("throws an error if one of the arguments is invalid", () => {
    expect(() => {
      interval(/* 1378/10/11 */ new Date(2000, 0), new Date(NaN));
    }).toThrow(new TypeError("End date is invalid"));

    expect(() => {
      interval(new Date(NaN), /* 1378/10/11 */ new Date(2000, 0));
    }).toThrow(new TypeError("Start date is invalid"));
  });

  it("throws an error if the interval is not positive", () => {
    // Should be ok
    interval(
      /* 1401/10/11 */ new Date(2023, 0),
      /* 1378/10/11 */ new Date(2000, 0),
    );

    expect(() => {
      interval(
        /* 1401/10/11 */ new Date(2023, 0),
        /* 1378/10/11 */ new Date(2000, 0),
        {
          assertPositive: true,
        },
      );
    }).toThrow(new TypeError("End date must be after start date"));

    // Should be ok too
    interval(
      /* 1378/10/11 */ new Date(2000, 0),
      /* 1378/10/11 */ new Date(2000, 0),
      {
        assertPositive: true,
      },
    );
  });
});
