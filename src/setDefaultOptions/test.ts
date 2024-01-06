/* eslint-env mocha */

import assert from "node:assert";
import { afterEach, describe, it, expect } from "vitest";
import { setDefaultOptions } from "./index.js";
import type { DefaultOptions } from "../_lib/defaultOptions/index.js";
import { getDefaultOptions as getInternalDefaultOptions } from "../_lib/defaultOptions/index.js";
import { defaultLocale } from "../_lib/defaultLocale/index.js";
import { enUS as otherLocale } from "../locale/en-US/index.js";
import { differenceInCalendarWeeks } from "../differenceInCalendarWeeks/index.js";
import { eachWeekOfInterval } from "../eachWeekOfInterval/index.js";
import { endOfWeek } from "../endOfWeek/index.js";
import { format } from "../format/index.js";
import { formatDistance } from "../formatDistance/index.js";
import { formatDistanceStrict } from "../formatDistanceStrict/index.js";
import { formatDuration } from "../formatDuration/index.js";
import { formatRelative } from "../formatRelative/index.js";
import { getWeek } from "../getWeek/index.js";
import { getWeekOfMonth } from "../getWeekOfMonth/index.js";
import { getWeeksInMonth } from "../getWeeksInMonth/index.js";
import { getWeekYear } from "../getWeekYear/index.js";
import { isMatch } from "../isMatch/index.js";
import { isSameWeek } from "../isSameWeek/index.js";
import { lastDayOfWeek } from "../lastDayOfWeek/index.js";
import { parse } from "../parse/index.js";
import { setDay } from "../setDay/index.js";
import { setWeek } from "../setWeek/index.js";
import { setWeekYear } from "../setWeekYear/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import { startOfWeekYear } from "../startOfWeekYear/index.js";
import { resetDefaultOptions } from "../_lib/test/index.js";

describe("setDefaultOptions", () => {
  afterEach(resetDefaultOptions);

  it("changes the internal `defaultOptions` object", () => {
    setDefaultOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: otherLocale,
    });
    assert.deepStrictEqual(getInternalDefaultOptions(), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: otherLocale,
    });
  });

  it("merges with previous `defaultOptions` calls", () => {
    setDefaultOptions({ weekStartsOn: 1 });
    setDefaultOptions({ firstWeekContainsDate: 4 });
    setDefaultOptions({ locale: otherLocale });
    assert.deepStrictEqual(getInternalDefaultOptions(), {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: otherLocale,
    });
  });

  it("setting an option to `undefined` deletes it", () => {
    setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });
    setDefaultOptions({ weekStartsOn: undefined });
    expect(getInternalDefaultOptions()).toEqual({
      firstWeekContainsDate: 4,
    });
  });

  it("does not mutate the argument", () => {
    const argument: DefaultOptions = { weekStartsOn: 1 };
    setDefaultOptions(argument);
    assert.deepStrictEqual(argument, { weekStartsOn: 1 });
  });

  describe("locale", () => {
    it("format", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        format(/* 1392/10/11 */ new Date(2014, 0, 1), "PPPpp"),
        "11-ام دی 1392 در 12:00:00 ق.ظ.",
      );

      setDefaultOptions({ locale: otherLocale });

      assert.deepStrictEqual(
        format(/* 1392/10/11 */ new Date(2014, 0, 1), "PPPpp"),
        "Day 11th, 1392 at 12:00:00 AM",
      );

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        format(/* 1392/10/11 */ new Date(2014, 0, 1), "PPPpp", {
          locale: defaultLocale,
        }),
        "11-ام دی 1392 در 12:00:00 ق.ظ.",
      );
    });

    it("formatDistance", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistance(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1393/10/11 */ new Date(2015, 0, 1),
        ),
        "حدود 1 سال",
      );

      setDefaultOptions({ locale: otherLocale });

      assert.deepStrictEqual(
        formatDistance(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1393/10/11 */ new Date(2015, 0, 1),
        ),
        "about 1 year",
      );

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatDistance(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1393/10/11 */ new Date(2015, 0, 1),
          {
            locale: defaultLocale,
          },
        ),
        "حدود 1 سال",
      );
    });

    it("formatDistanceStrict", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatDistanceStrict(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1393/10/11 */ new Date(2015, 0, 1),
        ),
        "1 سال",
      );

      setDefaultOptions({ locale: otherLocale });

      assert.deepStrictEqual(
        formatDistanceStrict(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1393/10/11 */ new Date(2015, 0, 1),
        ),
        "1 year",
      );

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatDistanceStrict(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1393/10/11 */ new Date(2015, 0, 1),
          {
            locale: defaultLocale,
          },
        ),
        "1 سال",
      );
    });

    it("formatDuration", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(formatDuration({ years: 1 }), "1 سال");

      setDefaultOptions({ locale: otherLocale });

      assert.deepStrictEqual(formatDuration({ years: 1 }), "1 year");

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatDuration({ years: 1 }, { locale: defaultLocale }),
        "1 سال",
      );
    });

    it("formatRelative", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        formatRelative(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1392/10/12 */ new Date(2014, 0, 2),
        ),
        "دیروز در 12:00 ق.ظ.",
      );

      setDefaultOptions({ locale: otherLocale });

      assert.deepStrictEqual(
        formatRelative(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1392/10/12 */ new Date(2014, 0, 2),
        ),
        "yesterday at 12:00 AM",
      );

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        formatRelative(
          /* 1392/10/11 */ new Date(2014, 0, 1),
          /* 1392/10/12 */ new Date(2014, 0, 2),
          {
            locale: defaultLocale,
          },
        ),
        "دیروز در 12:00 ق.ظ.",
      );
    });

    it("isMatch", () => {
      // For reference: not setting any options
      assert(isMatch("11 دی 1392 در 12:00:00 ق.ظ.", "PPPpp"));

      setDefaultOptions({ locale: otherLocale });

      assert(isMatch("Day 11th, 1392 at 12:00:00 AM", "PPPpp"));

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert(
        isMatch("11 دی 1392 در 12:00:00 ق.ظ.", "PPPpp", {
          locale: defaultLocale,
        }),
      );
    });

    it("parse", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        parse("11 دی 1392 در 12:00:00 ق.ظ.", "PPPpp", new Date()),
        /* 1392/10/11 */ new Date(2014, 0, 1),
      );

      setDefaultOptions({ locale: otherLocale });

      assert.deepStrictEqual(
        parse("Day 11th, 1392 at 12:00:00 AM", "PPPpp", new Date()),
        /* 1392/10/11 */ new Date(2014, 0, 1),
      );

      // Manually set `locale` take priority over `defaultOptions.locale`
      assert.deepStrictEqual(
        parse("11 دی 1392 در 12:00:00 ق.ظ.", "PPPpp", new Date(), {
          locale: defaultLocale,
        }),
        /* 1392/10/11 */ new Date(2014, 0, 1),
      );
    });
  });

  describe("weekStartsOn", () => {
    it("differenceInCalendarWeeks", () => {
      // For reference: not setting any options
      assert.strictEqual(
        differenceInCalendarWeeks(
          /* 1393/4/17 */ new Date(2014, 6 /* Jul */, 8, 18, 0),
          /* 1393/4/8 */ new Date(2014, 5 /* Jun */, 29, 6, 0),
        ),
        1,
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.strictEqual(
        differenceInCalendarWeeks(
          /* 1393/4/17 */ new Date(2014, 6 /* Jul */, 8, 18, 0),
          /* 1393/4/8 */ new Date(2014, 5 /* Jun */, 29, 6, 0),
        ),
        2,
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.strictEqual(
        differenceInCalendarWeeks(
          /* 1393/4/17 */ new Date(2014, 6 /* Jul */, 8, 18, 0),
          /* 1393/4/8 */ new Date(2014, 5 /* Jun */, 29, 6, 0),
          {
            weekStartsOn: 0,
          },
        ),
        1,
      );
    });

    it("eachWeekOfInterval", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        eachWeekOfInterval({
          start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
          end: /* 1393/9/2 */ new Date(2014, 10 /* Nov */, 23),
        }),
        [
          /* 1393/7/12 */ new Date(2014, 9 /* Oct */, 4),
          /* 1393/7/19 */ new Date(2014, 9 /* Oct */, 11),
          /* 1393/7/26 */ new Date(2014, 9 /* Oct */, 18),
          /* 1393/8/3 */ new Date(2014, 9 /* Oct */, 25),
          /* 1393/8/10 */ new Date(2014, 10 /* Nov */, 1),
          /* 1393/8/17 */ new Date(2014, 10 /* Nov */, 8),
          /* 1393/8/24 */ new Date(2014, 10 /* Nov */, 15),
          /* 1393/9/1 */ new Date(2014, 10 /* Nov */, 22),
        ],
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.deepStrictEqual(
        eachWeekOfInterval({
          start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 6, 35),
          end: /* 1393/9/4 */ new Date(2014, 10 /* Nov */, 25, 22, 15),
        }),
        [
          /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
          /* 1393/7/21 */ new Date(2014, 9 /* Oct */, 13),
          /* 1393/7/28 */ new Date(2014, 9 /* Oct */, 20),
          /* 1393/8/5 */ new Date(2014, 9 /* Oct */, 27),
          /* 1393/8/12 */ new Date(2014, 10 /* Nov */, 3),
          /* 1393/8/19 */ new Date(2014, 10 /* Nov */, 10),
          /* 1393/8/26 */ new Date(2014, 10 /* Nov */, 17),
          /* 1393/9/3 */ new Date(2014, 10 /* Nov */, 24),
        ],
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        eachWeekOfInterval(
          {
            start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
            end: /* 1393/9/2 */ new Date(2014, 10 /* Nov */, 23),
          },
          {
            weekStartsOn: 0,
          },
        ),
        [
          /* 1393/7/13 */ new Date(2014, 9 /* Oct */, 5),
          /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
          /* 1393/7/27 */ new Date(2014, 9 /* Oct */, 19),
          /* 1393/8/4 */ new Date(2014, 9 /* Oct */, 26),
          /* 1393/8/11 */ new Date(2014, 10 /* Nov */, 2),
          /* 1393/8/18 */ new Date(2014, 10 /* Nov */, 9),
          /* 1393/8/25 */ new Date(2014, 10 /* Nov */, 16),
          /* 1393/9/2 */ new Date(2014, 10 /* Nov */, 23),
        ],
      );
    });

    it("endOfWeek", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        endOfWeek(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 23, 59, 59, 999),
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.deepStrictEqual(
        endOfWeek(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        /* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999),
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        endOfWeek(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        /* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999),
      );
    });

    it("getWeekOfMonth", () => {
      // For reference: not setting any options
      assert.strictEqual(
        getWeekOfMonth(/* 1396/8/24 */ new Date(2017, 10 /* Nov */, 15)),
        4,
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.strictEqual(
        getWeekOfMonth(/* 1396/8/9 */ new Date(2017, 9 /* Oct */, 31)),
        2,
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.strictEqual(
        getWeekOfMonth(/* 1396/8/24 */ new Date(2017, 10 /* Nov */, 15), {
          weekStartsOn: 0,
        }),
        4,
      );
    });

    it("getWeeksInMonth", () => {
      // For reference: not setting any options
      assert.strictEqual(
        getWeeksInMonth(/* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0)),
        5,
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.strictEqual(
        getWeeksInMonth(/* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0)),
        5,
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.strictEqual(
        getWeeksInMonth(
          /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
          {
            weekStartsOn: 0,
          },
        ),
        5,
      );
    });

    it("isSameWeek", () => {
      // For reference: not setting any options
      assert.strictEqual(
        isSameWeek(
          /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
          /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
        ),
        true,
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.strictEqual(
        isSameWeek(
          /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
          /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
        ),
        false,
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.strictEqual(
        isSameWeek(
          /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
          /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
          {
            weekStartsOn: 0,
          },
        ),
        true,
      );
    });

    it("lastDayOfWeek", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        lastDayOfWeek(
          /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
        ),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5),
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.deepStrictEqual(
        lastDayOfWeek(
          /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
        ),
        /* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7),
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        lastDayOfWeek(
          /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0),
          {
            weekStartsOn: 0,
          },
        ),
        /* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6),
      );
    });

    it("setDay", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 0),
        /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.deepStrictEqual(
        setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 0),
        /* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7),
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        setDay(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 0, {
          weekStartsOn: 0,
        }),
        /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      );
    });

    it("startOfWeek", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        startOfWeek(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        /* 1393/6/8 */ new Date(2014, 7 /* Aug */, 30),
      );

      setDefaultOptions({ weekStartsOn: 1 });

      assert.deepStrictEqual(
        startOfWeek(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)),
        /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      );

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      assert.deepStrictEqual(
        startOfWeek(/* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
          weekStartsOn: 0,
        }),
        /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      );
    });
  });

  describe("firstWeekContainsDate", () => {
    it("format", () => {
      // For reference: not setting any options
      assert.strictEqual(
        format(/* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6), "w wo ww"),
        "4 4-ام 04",
      );

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      assert.strictEqual(
        format(/* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6), "w wo ww"),
        "2 2-ام 02",
      );

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.strictEqual(
        format(/* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6), "w wo ww", {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        "4 4-ام 04",
      );
    });

    it("getWeek", () => {
      // For reference: not setting any options
      assert.strictEqual(
        getWeek(/* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2)),
        42,
      );

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      assert.strictEqual(
        getWeek(/* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2)),
        41,
      );

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.strictEqual(
        getWeek(/* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        43,
      );
    });

    it("getWeekYear", () => {
      // For reference: not setting any options
      assert.strictEqual(
        getWeekYear(/* 1383/10/6 */ new Date(2004, 11 /* Dec */, 26)),
        1383,
      );

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      assert.strictEqual(
        getWeekYear(/* 1383/10/6 */ new Date(2004, 11 /* Dec */, 26)),
        1383,
      );

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.strictEqual(
        getWeekYear(/* 1383/10/6 */ new Date(2004, 11 /* Dec */, 26), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        1383,
      );
    });

    it("parse", () => {
      const referenceDate = /* 1365/1/15 */ new Date(
        1986,
        3 /* Apr */,
        4,
        10,
        32,
        0,
        900,
      );
      // For reference: not setting any options
      assert.deepStrictEqual(
        parse("1396", "Y", referenceDate),
        /* 1395/12/28 */ new Date(2017, 2 /* Mar */, 18),
      );

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      assert.deepStrictEqual(
        parse("1396", "Y", referenceDate),
        /* 1395/12/30 */ new Date(2017, 2 /* Mar */, 20),
      );

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        parse("1396", "Y", referenceDate, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        /* 1395/12/29 */ new Date(2017, 2 /* Mar */, 19),
      );
    });

    it("setWeek", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        setWeek(/* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2), 1),
        /* 1383/1/2 */ new Date(2004, 2 /* Mar */, 21),
      );

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      assert.deepStrictEqual(
        setWeek(/* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2), 1),
        /* 1383/1/9 */ new Date(2004, 2 /* Mar */, 28),
      );

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        setWeek(/* 1383/10/13 */ new Date(2005, 0 /* Jan */, 2), 1, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        /* 1382/12/24 */ new Date(2004, 2 /* Mar */, 14),
      );
    });

    it("setWeekYear", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        setWeekYear(/* 1388/10/12 */ new Date(2010, 0 /* Jan */, 2), 1382),
        /* 1382/10/6 */ new Date(2003, 11 /* Dec */, 27),
      );

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      assert.deepStrictEqual(
        setWeekYear(/* 1388/10/12 */ new Date(2010, 0 /* Jan */, 2), 1382),
        /* 1382/10/13 */ new Date(2004, 0 /* Jan */, 3),
      );

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        setWeekYear(/* 1388/10/12 */ new Date(2010, 0 /* Jan */, 2), 1382, {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        /* 1382/10/13 */ new Date(2004, 0 /* Jan */, 3),
      );
    });

    it("startOfWeekYear", () => {
      // For reference: not setting any options
      assert.deepStrictEqual(
        startOfWeekYear(/* 1384/4/11 */ new Date(2005, 6 /* Jul */, 2)),
        /* 1383/12/29 */ new Date(2005, 2 /* Mar */, 19, 0, 0, 0, 0),
      );

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      assert.deepStrictEqual(
        startOfWeekYear(/* 1384/4/11 */ new Date(2005, 6 /* Jul */, 2)),
        /* 1384/1/1 */ new Date(2005, 2 /* Mar */, 21, 0, 0, 0, 0),
      );

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      assert.deepStrictEqual(
        startOfWeekYear(/* 1384/4/11 */ new Date(2005, 6 /* Jul */, 2), {
          weekStartsOn: 0,
          firstWeekContainsDate: 1,
        }),
        /* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20, 0, 0, 0, 0),
      );
    });
  });
});
