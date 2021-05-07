/**
 * @name endOfYesterday
 * @category Day Helpers
 * @summary Return the end of yesterday.
 * @pure false
 *
 * @description
 * Return the end of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
import coreGetMonth from '../_core/getMonth/index'

import coreGetDate from '../_core/getDate/index'
import coreGetFullYear from '../_core/getFullYear/index'
import coreSetFullYear from '../_core/setFullYear/index'
export default function endOfYesterday(): Date {
  const now = new Date()
  const year = coreGetFullYear(now)
  const month = coreGetMonth(now)
  const day = coreGetDate(now)

  const date = new Date(0)
  coreSetFullYear(date, year, month, day - 1)
  date.setHours(23, 59, 59, 999)
  return date
}
