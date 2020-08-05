import toDate from '../toDate/index.js'
import requiredArgs from '../_lib/requiredArgs/index.js'

import coreGetMonth from '../_core/getMonth/index.js'
import coreGetDate from '../_core/getDate/index.js'
import coreGetFullYear from '../_core/getFullYear/index.js'
import coreSetFullYear from '../_core/setFullYear/index.js'

/**
 * @name getDaysInMonth
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the number of days in a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
export default function getDaysInMonth(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var year = coreGetFullYear(date)
  var monthIndex = coreGetMonth(date)
  var lastDayOfMonth = new Date(0)
  coreSetFullYear(lastDayOfMonth, year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return coreGetDate(lastDayOfMonth)
}
