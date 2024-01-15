import { toDate } from "../toDate/index.js";
import type { Interval, StepOptions } from "../types.js";

import { setMonth as coreSetMonth } from "../_core/setMonth/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";
import { setFullYear as coreSetFullYear } from "../_core/setFullYear/index";

/**
 * The {@link eachYearOfInterval} function options.
 */
export interface EachYearOfIntervalOptions extends StepOptions {}

/**
 * @name eachYearOfInterval
 * @category Interval Helpers
 * @summary Return the array of yearly timestamps within the specified time interval.
 *
 * @description
 * Return the array of yearly timestamps within the specified time interval.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param interval - The interval.
 *
 * @returns The array with starts of yearly timestamps from the month of the interval start to the month of the interval end
 *
 * @example
 * // Each year between 6 February 2014 and 10 August 2017:
 * const result = eachYearOfInterval({
 *   start: new Date(2014, 1, 6),
 *   end: new Date(2017, 7, 10)
 * })
 * //=> [
 * //   Wed Jan 01 2014 00:00:00,
 * //   Thu Jan 01 2015 00:00:00,
 * //   Fri Jan 01 2016 00:00:00,
 * //   Sun Jan 01 2017 00:00:00
 * // ]
 */
export function eachYearOfInterval<DateType extends Date>(
  interval: Interval<DateType>,
  options?: EachYearOfIntervalOptions,
): DateType[] {
  const startDate = toDate(interval.start);
  const endDate = toDate(interval.end);

  let reversed = +startDate > +endDate;
  const endTime = reversed ? +startDate : +endDate;
  const currentDate = reversed ? endDate : startDate;
  currentDate.setHours(0, 0, 0, 0);
  coreSetMonth(currentDate, 0, 1);

  let step = options?.step ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates = [];

  while (+currentDate <= endTime) {
    dates.push(toDate(currentDate));
    coreSetFullYear(currentDate, coreGetFullYear(currentDate) + step);
  }

  return reversed ? dates.reverse() : dates;
}
