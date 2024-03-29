import { formatDistance } from "./_lib/formatDistance/index.js";
import { formatLong } from "./_lib/formatLong/index.js";
import { formatRelative } from "./_lib/formatRelative/index.js";
import { localize } from "./_lib/localize/index.js";
import { match } from "./_lib/match/index.js";
import type { Locale } from "../types.js";

/**
 * @category Locales
 * @summary Persian/Farsi locale (Iran).
 * @language Persian
 * @iso-639-2 ira
 * @author Seyyed Morteza Moosavi [@smmoosavi]{@link https://github.com/smmoosavi}
 */
export const faIR: Locale = {
  code: "fa-IR",
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 6 /* Sat */,
    firstWeekContainsDate: 1,
  },
};
