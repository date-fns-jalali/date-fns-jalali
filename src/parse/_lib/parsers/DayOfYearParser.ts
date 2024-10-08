import type { Match } from "../../../locale/types.js";
import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
import {
  isLeapYearIndex,
  parseNDigits,
  parseNumericPattern,
} from "../utils.js";

import { setMonth as coreSetMonth } from "../../../_core/setMonth/index.js";
import { getFullYear as coreGetFullYear } from "../../../_core/getFullYear/index.js";

export class DayOfYearParser extends Parser<number> {
  priority = 90;

  subpriority = 1;

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case "D":
      case "DD":
        return parseNumericPattern(numericPatterns.dayOfYear, dateString);
      case "Do":
        return match.ordinalNumber(dateString, { unit: "date" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate<DateType extends Date>(date: DateType, value: number): boolean {
    const year = coreGetFullYear(date);
    const isLeapYear = isLeapYearIndex(year);
    if (isLeapYear) {
      return value >= 1 && value <= 366;
    } else {
      return value >= 1 && value <= 365;
    }
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    coreSetMonth(date, 0, value);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = [
    "Y",
    "R",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "I",
    "d",
    "E",
    "i",
    "e",
    "c",
    "t",
    "T",
  ];
}
