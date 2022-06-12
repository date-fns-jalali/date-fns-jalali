import toDate from '../toDate/index'
import requiredArgs from '../_lib/requiredArgs/index'

import coreIsLeapYear from '../_core/isLeapYear/index'
import coreGetFullYear from '../_core/getFullYear/index'

/**
 * @name isLeapYear
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
export default function isLeapYear(dirtyDate: Date | number): boolean {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = coreGetFullYear(date)
  return coreIsLeapYear(year)
}
