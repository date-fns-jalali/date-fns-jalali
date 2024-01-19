import { toDate } from "../toDate/index.js";
import { constructFrom } from "../constructFrom/index.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index";
import { getDate as coreGetDate } from "../_core/getDate/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index";

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * const result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
export function getDaysInMonth<DateType extends Date>(
  date: DateType | number | string,
): number {
  const _date = toDate(date);
  const year = coreGetFullYear(_date);
  const monthIndex = coreGetMonth(_date);
  const lastDayOfMonth = constructFrom(date, 0);
  coreSetFullYear(lastDayOfMonth, year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return coreGetDate(lastDayOfMonth);
}
