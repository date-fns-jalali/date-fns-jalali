/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param {Number} year of the date to check
 * @param {Number} month of the date to check
 * @param {Number} day of the date to check
 * @returns {Boolean} the date exists
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // For the valid date:
 * var result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isExists(2018, 1, 31)
 * //=> false
 */
import coreGetMonth from '../_core/getMonth/index.js'

import coreGetDate from '../_core/getDate/index.js'
import coreGetFullYear from '../_core/getFullYear/index.js'
import newDate from '../_core/newDate/index.js'
export default function isExists(year, month, day) {
  if (arguments.length < 3) {
    throw new TypeError(
      '3 argument required, but only ' + arguments.length + ' present'
    )
  }

  const date = newDate(year, month, day)
  return (
    coreGetFullYear(date) === year &&
    coreGetMonth(date) === month &&
    coreGetDate(date) === day
  )
}
