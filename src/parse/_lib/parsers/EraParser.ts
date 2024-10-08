import type { Match } from "../../../locale/types.js";
import type { Era } from "../../../types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";

import { setFullYear as coreSetFullYear } from "../../../_core/setFullYear/index.js";

export class EraParser extends Parser<number> {
  priority = 140;

  parse(dateString: string, token: string, match: Match): ParseResult<Era> {
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return (
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );
      // A, B
      case "GGGGG":
        return match.era(dateString, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return (
          match.era(dateString, { width: "wide" }) ||
          match.era(dateString, { width: "abbreviated" }) ||
          match.era(dateString, { width: "narrow" })
        );
    }
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: number,
  ): DateType {
    flags.era = value;
    coreSetFullYear(date, value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["R", "u", "t", "T"];
}
