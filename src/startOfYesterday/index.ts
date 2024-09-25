import { constructNow } from "../constructNow/index.js";
import type { ContextOptions } from "../types.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index.js";
import { getDate as coreGetDate } from "../_core/getDate/index.js";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index.js";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index.js";

/**
 * The {@link startOfYesterday} function options.
 */
export interface StartOfYesterdayOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
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
export function startOfYesterday<ContextDate extends Date>(
  options?: StartOfYesterdayOptions<ContextDate> | undefined,
): ContextDate {
  const now = constructNow(options?.in);
  const year = coreGetFullYear(now);
  const month = coreGetMonth(now);
  const day = coreGetDate(now);

  const date = constructNow(options?.in);
  coreSetFullYear(date, year, month, day - 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
