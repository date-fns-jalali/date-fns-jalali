import type { Match } from "../../../locale/types.ts";
import { numericPatterns } from "../constants.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import {
  isLeapYearIndex,
  parseNDigits,
  parseNumericPattern,
} from "../utils.ts";

import { getMonth as coreGetMonth } from "../../../_core/getMonth/index.ts";
import { setDate as coreSetDate } from "../../../_core/setDate/index.ts";
import { getFullYear as coreGetFullYear } from "../../../_core/getFullYear/index.ts";

const DAYS_IN_MONTH = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
const DAYS_IN_MONTH_LEAP_YEAR = [
  31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30,
];

// Day of the month
export class DateParser extends Parser<number> {
  priority = 90;
  override subPriority = 1;

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

  override validate<DateType extends Date>(
    date: DateType,
    value: number,
  ): boolean {
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
