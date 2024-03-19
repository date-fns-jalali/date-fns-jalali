import { constructFrom } from "../constructFrom/index.js";
import { getDaysInMonth } from "../getDaysInMonth/index.js";
import { toDate } from "../toDate/index.js";

import { setMonth as coreSetMonth } from "../_core/setMonth/index";
import { getDate as coreGetDate } from "../_core/getDate/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index";

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to be changed
 * @param month - The month index to set (0-11)
 *
 * @returns The new date with the month set
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
export function setMonth<DateType extends Date>(
  date: DateType | number | string,
  month: number,
): DateType {
  const _date = toDate(date);
  const year = coreGetFullYear(_date);
  const day = coreGetDate(_date);

  const dateWithDesiredMonth = constructFrom(date, 0);
  coreSetFullYear(dateWithDesiredMonth, year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  coreSetMonth(_date, month, Math.min(day, daysInMonth));
  return _date;
}
