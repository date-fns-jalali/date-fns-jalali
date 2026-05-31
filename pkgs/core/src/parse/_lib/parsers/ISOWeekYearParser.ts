import { startOfISOWeek } from "../../../startOfISOWeek/index.ts";
import { constructFrom } from "../../../constructFrom/index.ts";
import { Parser } from "../Parser.ts";
import type { ParseFlags, ParseResult } from "../types.ts";
import { parseNDigitsSigned } from "../utils.ts";

import { setFullYear as coreSetFullYear } from "../../../_core/setFullYear/index.ts";

// ISO week-numbering year
export class ISOWeekYearParser extends Parser<number> {
  priority = 130;

  parse(dateString: string, token: string): ParseResult<number> {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }

    return parseNDigitsSigned(token.length, dateString);
  }

  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType {
    const firstWeekOfYear = constructFrom(date, 0);
    coreSetFullYear(firstWeekOfYear, value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}
