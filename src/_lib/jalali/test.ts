// - j2d(d2j(input)) === input
// - each day of the year, j2d should have one day less than the next day
// - leap year compatibility
//                                     other | leap
// j2d(y, 1, 1) - j2d(y + 1, 1, 1) =>   365  | 366
// j2d(y, 12, 30) - j2d(y + 1, 1, 1) => 0    | 1

import { describe, expect, it } from "vitest";
import {
  d2g,
  d2j,
  j2d,
  g2d,
  isLeapJalaliYear,
  toJalali,
  toGregorian,
  normalizeMonth,
} from "./index.js";

const START = g2d(-1000, 1, 1);
const END = g2d(10000, 1, 1);

const JALALI_YEAR_DAYS = (() => {
  const arr: [number, number][] = [];
  // 6 31-day months
  // 6 30-day months
  for (let m = 1; m <= 12; m++) {
    for (let d = 1; d <= 31; d++) {
      if (d === 31 && m > 6) {
        continue;
      }
      arr.push([m, d]);
    }
  }

  return arr;
})();

describe("j2d/d2j", () => {
  it("should be revertible", () => {
    for (let i = START; i < END; i++) {
      const { jy, jm, jd } = d2j(i);
      const j = j2d(jy, jm, jd);
      expect(j).toBe(i);
    }
  });
  it("each day of year should be one from tomorrow", () => {
    for (let y = -1000; y < 10000; y++) {
      let last_day = j2d(y, 1, 0);
      for (const [m, d] of JALALI_YEAR_DAYS) {
        const j = j2d(y, m, d);
        expect(j - last_day).toBe(1);
        last_day = j;
      }
    }
  });
  it("should be compatible with leap year", () => {
    for (let y = -1000; y < 1000; y++) {
      const is_leap = isLeapJalaliYear(y);
      const first_day = j2d(y, 1, 1);
      const last_day = j2d(y, 12, 30);
      const next_day = j2d(y + 1, 1, 1);
      if (is_leap) {
        expect(next_day - first_day).toBe(366);
        expect(next_day - last_day).toBe(1);
      } else {
        expect(next_day - first_day).toBe(365);
        expect(next_day - last_day).toBe(0);
      }
    }
  });
  it("should handle negative/overflow month", () => {
    for (let m = 1; m <= 12; m++) {
      expect(d2j(j2d(1400, m + 24, 1))).toEqual({
        jy: 1402,
        jm: m,
        jd: 1,
      });
      expect(d2j(j2d(1400, m + 12, 1))).toEqual({
        jy: 1401,
        jm: m,
        jd: 1,
      });
      expect(d2j(j2d(1400, m, 1))).toEqual({ jy: 1400, jm: m, jd: 1 });
      expect(d2j(j2d(1400, m - 12, 1))).toEqual({
        jy: 1399,
        jm: m,
        jd: 1,
      });
      expect(d2j(j2d(1400, m - 24, 1))).toEqual({
        jy: 1398,
        jm: m,
        jd: 1,
      });
    }
  });
});

describe("j2d/d2j", () => {
  it("should be revertible", () => {
    for (let i = START; i < END; i++) {
      const { gy, gm, gd } = d2g(i);
      const j = g2d(gy, gm, gd);
      expect(j).toBe(i);
    }
  });
  it("should handle negative/overflow month", () => {
    for (let m = 1; m <= 12; m++) {
      // for (let d = 1; d <= 28; d++) {
      const d = 1;
      expect(d2g(g2d(2000, m + 24, d))).toEqual({
        gy: 2002,
        gm: m,
        gd: d,
      });
      expect(d2g(g2d(2000, m + 12, d))).toEqual({
        gy: 2001,
        gm: m,
        gd: d,
      });
      expect(d2g(g2d(2000, m, d))).toEqual({ gy: 2000, gm: m, gd: d });
      expect(d2g(g2d(2000, m - 12, d))).toEqual({
        gy: 1999,
        gm: m,
        gd: d,
      });
      expect(d2g(g2d(2000, m - 24, d))).toEqual({
        gy: 1998,
        gm: m,
        gd: d,
      });
      // }
    }
  });
});

describe("toJalali", () => {
  it("should converts a Gregorian date to Jalaali", () => {
    const result = toJalali(2021, 1, 1);
    expect(result).toEqual({ jy: 1399, jm: 10, jd: 12 });
  });
  it("should converts a leap year correctly", () => {
    const result = toJalali(2021, 3, 20);
    expect(result).toEqual({ jy: 1399, jm: 12, jd: 30 });
  });
  it("should converts a non leap year correctly", () => {
    const result = toJalali(2022, 3, 21);
    expect(result).toEqual({ jy: 1401, jm: 1, jd: 1 });
  });
});

describe("toGregorian", () => {
  it("should converts a Jalaali date to Gregorian", () => {
    const result = toGregorian(1399, 10, 12);
    expect(result).toEqual({ gy: 2021, gm: 1, gd: 1 });
  });
  it("should converts a leap year correctly", () => {
    const result = toGregorian(1399, 12, 30);
    expect(result).toEqual({ gy: 2021, gm: 3, gd: 20 });
  });
  it("should converts a non leap year correctly", () => {
    const result = toGregorian(1400, 12, 30); // eq 1401, 1, 1
    expect(result).toEqual({ gy: 2022, gm: 3, gd: 21 });
  });
});

describe("isLeapYear", () => {
  it("should tell correctly", () => {
    expect(isLeapJalaliYear(1398)).toBe(false);
    expect(isLeapJalaliYear(1399)).toBe(true);
    expect(isLeapJalaliYear(1400)).toBe(false);
    expect(isLeapJalaliYear(1401)).toBe(false);
    expect(isLeapJalaliYear(1402)).toBe(false);
  });
});

describe("normalizeMonth", () => {
  it("should move between 1..=12", () => {
    for (let m = 1; m <= 12; m++) {
      expect(normalizeMonth(1400, m + 24)).toEqual([1402, m]);
      expect(normalizeMonth(1400, m + 12)).toEqual([1401, m]);
      expect(normalizeMonth(1400, m)).toEqual([1400, m]);
      expect(normalizeMonth(1400, m - 12)).toEqual([1399, m]);
      expect(normalizeMonth(1400, m - 24)).toEqual([1398, m]);
    }
  });
});
