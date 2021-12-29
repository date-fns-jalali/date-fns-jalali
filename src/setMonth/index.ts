import toInteger from '../_lib/toInteger/index'
import toDate from '../toDate/index'
import getDaysInMonth from '../getDaysInMonth/index'
import requiredArgs from '../_lib/requiredArgs/index'

import coreSetMonth from '../_core/setMonth/index'
import coreGetDate from '../_core/getDate/index'
import coreGetFullYear from '../_core/getFullYear/index'
import coreSetFullYear from '../_core/setFullYear/index'
import coreNewDate from '../_core/newDate/index'

/**
 * @name setMonth
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month set
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Set February to 1 September 2014:
 * const result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
export default function setMonth(
  dirtyDate: Date | number,
  dirtyMonth: number
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const month = toInteger(dirtyMonth)
  const year = coreGetFullYear(date)
  const day = coreGetDate(date)

  const dateWithDesiredMonth = coreNewDate(0)
  coreSetFullYear(dateWithDesiredMonth, year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  coreSetMonth(date, month, Math.min(day, daysInMonth))
  return date
}
