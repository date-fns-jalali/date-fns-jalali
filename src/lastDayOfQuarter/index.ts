import { toDate } from "../toDate/index.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index";
import { setMonth as coreSetMonth } from "../_core/setMonth/index";

/**
 * @name lastDayOfQuarter
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * const result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
export function lastDayOfQuarter<DateType extends Date>(
  date: DateType | number | string,
): DateType {
  const _date = toDate(date);
  const currentMonth = coreGetMonth(_date);
  const month = currentMonth - (currentMonth % 3) + 3;
  coreSetMonth(_date, month, 0);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
