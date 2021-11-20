/**
 * @name endOfTomorrow
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 * @pure false
 *
 * @description
 * Return the end of tomorrow.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
import coreGetMonth from '../_core/getMonth/index'

import coreGetDate from '../_core/getDate/index'
import coreGetFullYear from '../_core/getFullYear/index'
import coreSetFullYear from '../_core/setFullYear/index'
import coreNewDate from '../_core/newDate/index'
export default function endOfTomorrow(): Date {
  const now = coreNewDate()
  const year = coreGetFullYear(now)
  const month = coreGetMonth(now)
  const day = coreGetDate(now)

  const date = coreNewDate(0)
  coreSetFullYear(date, year, month, day + 1)
  date.setHours(23, 59, 59, 999)
  return date
}
