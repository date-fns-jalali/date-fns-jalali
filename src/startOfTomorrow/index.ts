import { constructFrom } from "../constructFrom/index.js";
import { constructNow } from "../constructNow/index.js";
import type { ContextOptions } from "../types.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index.js";
import { getDate as coreGetDate } from "../_core/getDate/index.js";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index.js";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index.js";

/**
 * The {@link startOfTomorrow} function options.
 */
export interface StartOfTomorrowOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

/**
 * @name startOfTomorrow
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 * @pure false
 *
 * @typeParam ContextDate - The `Date` type of the context function.
 *
 * @param options - An object with options
 *
 * @returns The start of tomorrow
 *
 * @description
 * Return the start of tomorrow.
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
export function startOfTomorrow<ContextDate extends Date>(
  options?: StartOfTomorrowOptions<ContextDate> | undefined,
): ContextDate {
  const now = constructNow(options?.in);
  const year = coreGetFullYear(now);
  const month = coreGetMonth(now);
  const day = coreGetDate(now);

  const date = constructFrom(options?.in, 0);
  coreSetFullYear(date, year, month, day + 1);
  date.setHours(0, 0, 0, 0);
  return date;
}
