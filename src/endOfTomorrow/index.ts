import { getMonth as coreGetMonth } from "../_core/getMonth/index";
import { getDate as coreGetDate } from "../_core/getDate/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index";
import { newDate as coreNewDate } from "../_core/newDate/index";
/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @returns The end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
export function endOfTomorrow(): Date {
  const now = coreNewDate();
  const year = coreGetFullYear(now);
  const month = coreGetMonth(now);
  const day = coreGetDate(now);

  const date = coreNewDate(0);
  coreSetFullYear(date, year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return date;
}
