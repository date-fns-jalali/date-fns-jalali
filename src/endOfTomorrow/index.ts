import { constructNow } from "../constructNow/index.js";
import type { ContextOptions } from "../types.js";

import { getMonth as coreGetMonth } from "../_core/getMonth/index.js";
import { getDate as coreGetDate } from "../_core/getDate/index.js";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index.js";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index.js";

/**
 * The {@link endOfTomorrow} function options.
 */
export interface EndOfTomorrowOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}

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
 * @typeParam ResultDate - The result `Date` type, it is the type returned from the context function if it is passed, or inferred from the arguments.
 *
 * @param options - The options
 * @returns The end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
export function endOfTomorrow<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(options?: EndOfTomorrowOptions<ResultDate> | undefined): ResultDate {
  const now = constructNow(options?.in);
  const year = coreGetFullYear(now);
  const month = coreGetMonth(now);
  const day = coreGetDate(now);

  const date = constructNow(options?.in);
  coreSetFullYear(date, year, month, day + 1);
  date.setHours(23, 59, 59, 999);
  return options?.in ? options.in(date) : (date as ResultDate);
}
