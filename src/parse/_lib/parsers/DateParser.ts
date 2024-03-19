import type { Match } from "../../../locale/types.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
import {
  isLeapYearIndex,
  parseNDigits,
  parseNumericPattern,
} from "../utils.js";

import { getMonth as coreGetMonth } from "../../../_core/getMonth/index";
import { setDate as coreSetDate } from "../../../_core/setDate/index";
import { getFullYear as coreGetFullYear } from "../../../_core/getFullYear/index";

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];

// Day of the month
export class DateParser extends Parser<number> {
  priority = 90;
  subPriority = 1;

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case "d":
        return parseNumericPattern(numericPatterns.date, dateString);
      case "do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate<DateType extends Date>(date: DateType, value: number): boolean {
    const year = coreGetFullYear(date);
    const isLeapYear = isLeapYearIndex(year);
    const month = coreGetMonth(date);
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month];
    }
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    coreSetDate(date, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "w",
    "I",
    "D",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}
