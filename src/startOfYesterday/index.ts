/**
 * @name startOfYesterday
 * @category Day Helpers
 * @summary Return the start of yesterday.
 * @pure false
 *
 * @description
 * Return the start of yesterday.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `new Date()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * const result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
import coreGetMonth from '../_core/getMonth/index'

import coreGetDate from '../_core/getDate/index'
import coreGetFullYear from '../_core/getFullYear/index'
import coreSetFullYear from '../_core/setFullYear/index'
import coreNewDate from '../_core/newDate/index'
export default function startOfYesterday() {
  const now = coreNewDate()
  const year = coreGetFullYear(now)
  const month = coreGetMonth(now)
  const day = coreGetDate(now)

  const date = coreNewDate(0)
  coreSetFullYear(date, year, month, day - 1)
  date.setHours(0, 0, 0, 0)
  return date
}
