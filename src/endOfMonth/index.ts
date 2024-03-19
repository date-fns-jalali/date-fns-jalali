import { toDate } from "../toDate/index.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index";

/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
export function endOfMonth<DateType extends Date>(
  date: DateType | number | string,
): DateType {
  const _date = toDate(date);
  const month = coreGetMonth(_date);
  coreSetFullYear(_date, coreGetFullYear(_date), month + 1, 0);
  _date.setHours(23, 59, 59, 999);
  return _date;
}
