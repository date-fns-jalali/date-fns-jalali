/* eslint-env mocha */

import assert from "assert";
import { describe, it } from "vitest";
import { interval } from "./index.js";

describe("Interval", () => {
  it("exposes start and end", () => {
    const result = interval(
      /* 1378/10/11 */ new Date(2000, 0),
      /* 1401/10/11 */ new Date(2023, 0),
    );
    assert.deepStrictEqual(result.start, /* 1378/10/11 */ new Date(2000, 0));
    assert.deepStrictEqual(result.end, /* 1401/10/11 */ new Date(2023, 0));
  });

  it("normalizes the dates", () => {
    const result = interval(
      +(/* 1378/10/11 */ new Date(2000, 0)),
      /* 1401/10/11 */ new Date(2023, 0).toISOString(),
    );
    assert.deepStrictEqual(result.start, /* 1378/10/11 */ new Date(2000, 0));
    assert.deepStrictEqual(result.end, /* 1401/10/11 */ new Date(2023, 0));
  });

  it("throws an error if one of the arguments is invalid", () => {
    assert.throws(() => {
      interval(/* 1378/10/11 */ new Date(2000, 0), new Date(NaN));
    }, new TypeError("End date is invalid"));

    assert.throws(() => {
      interval(new Date(NaN), /* 1378/10/11 */ new Date(2000, 0));
    }, new TypeError("Start date is invalid"));
  });

  it("throws an error if the interval is not positive", () => {
    // Should be ok
    interval(
      /* 1401/10/11 */ new Date(2023, 0),
      /* 1378/10/11 */ new Date(2000, 0),
    );

    assert.throws(() => {
      interval(
        /* 1401/10/11 */ new Date(2023, 0),
        /* 1378/10/11 */ new Date(2000, 0),
        {
          assertPositive: true,
        },
      );
    }, new TypeError("End date must be after start date"));

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
