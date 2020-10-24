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
 * var result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
import coreGetMonth from '../_core/getMonth/index.js'

import coreGetDate from '../_core/getDate/index.js'
import coreGetFullYear from '../_core/getFullYear/index.js'
import coreSetFullYear from '../_core/setFullYear/index.js'
export default function endOfTomorrow() {
  var now = new Date()
  var year = coreGetFullYear(now)
  var month = coreGetMonth(now)
  var day = coreGetDate(now)

  var date = new Date(0)
  coreSetFullYear(date, year, month, day + 1)
  date.setHours(23, 59, 59, 999)
  return date
}
