import { normalizeDates } from "../_lib/normalizeDates/index.js";
import type { ContextOptions, DateArg } from "../types.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index.js";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index.js";

/**
 * The {@link differenceInCalendarMonths} function options.
 */
export interface DifferenceInCalendarMonthsOptions
  extends ContextOptions<Date> {}

/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param laterDate - The later date
 * @param earlierDate - The earlier date
 * @param options - An object with options
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
export function differenceInCalendarMonths(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarMonthsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );

  const yearsDiff = coreGetFullYear(laterDate_) - coreGetFullYear(earlierDate_);
  const monthsDiff = coreGetMonth(laterDate_) - coreGetMonth(earlierDate_);

  return yearsDiff * 12 + monthsDiff;
}
