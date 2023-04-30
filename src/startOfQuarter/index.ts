import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

import coreGetMonth from '../_core/getMonth/index'
import coreSetMonth from '../_core/setMonth/index'

/**
 * @name startOfQuarter
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a quarter
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * const result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
export default function startOfQuarter(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const currentMonth = coreGetMonth(date)
  const month = currentMonth - (currentMonth % 3)
  coreSetMonth(date, month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
