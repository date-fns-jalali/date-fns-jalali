import { getMonth as coreGetMonth } from "../_core/getMonth/index";
import { getDate as coreGetDate } from "../_core/getDate/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index";
import { newDate as coreNewDate } from "../_core/newDate/index";
/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns The start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
export function startOfYesterday(): Date {
  const now = coreNewDate();
  const year = coreGetFullYear(now);
  const month = coreGetMonth(now);
  const day = coreGetDate(now);

  const date = coreNewDate(0);
  coreSetFullYear(date, year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
