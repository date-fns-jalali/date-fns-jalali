import toInteger from '../toInteger/index'
import getUTCWeekYear from '../getUTCWeekYear/index'
import startOfUTCWeek from '../startOfUTCWeek/index'
import requiredArgs from '../requiredArgs/index'

import coreSetUTCFullYear from '../../_core/setUTCFullYear/index'
import coreNewDate from '../../_core/newDate/index'

// This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376
export default function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  requiredArgs(1, arguments)

  var options = dirtyOptions || {}
  var locale = options.locale
  var localeFirstWeekContainsDate =
    locale && locale.options && locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)

  var year = getUTCWeekYear(dirtyDate, dirtyOptions)
  var firstWeek = coreNewDate(0)
  coreSetUTCFullYear(firstWeek, year, 0, firstWeekContainsDate)
  firstWeek.setUTCHours(0, 0, 0, 0)
  var date = startOfUTCWeek(firstWeek, dirtyOptions)
  return date
}
