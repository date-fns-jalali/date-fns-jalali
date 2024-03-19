import { toDate } from "../toDate/index.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * const result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
export function differenceInCalendarMonths<DateType extends Date>(
  dateLeft: DateType | number | string,
  dateRight: DateType | number | string,
): number {
  const _dateLeft = toDate(dateLeft);
  const _dateRight = toDate(dateRight);

  const yearDiff = coreGetFullYear(_dateLeft) - coreGetFullYear(_dateRight);
  const monthDiff = coreGetMonth(_dateLeft) - coreGetMonth(_dateRight);

  return yearDiff * 12 + monthDiff;
}
