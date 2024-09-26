import { toDate } from "../toDate/index.js";
import type { ContextOptions, DateArg } from "../types.js";

import { isLeapYear as coreIsLeapYear } from "../_core/isLeapYear/index.js";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index.js";

export interface IsLeapYearOptions extends ContextOptions<Date> {}

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param date - The date to check
 * @param options - The options object
 *
 * @returns The date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * const result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
export function isLeapYear(
  date: DateArg<Date> & {},
  options?: IsLeapYearOptions | undefined,
): boolean {
  const _date = toDate(date, options?.in);
  const year = coreGetFullYear(_date);
  return coreIsLeapYear(year);
}
