/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
import coreGetMonth from '../../_core/getMonth/index'

import coreGetDate from '../../_core/getDate/index'
import coreGetFullYear from '../../_core/getFullYear/index'
import coreSetUTCFullYear from '../../_core/setUTCFullYear/index'
import coreNewDate from '../../_core/newDate/index'
import coreDateUTC from '../../_core/dateUTC/index'
export default function getTimezoneOffsetInMilliseconds(date: Date): number {
  const utcDate = coreNewDate(
    coreDateUTC(
      coreGetFullYear(date),
      coreGetMonth(date),
      coreGetDate(date),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    )
  )
  coreSetUTCFullYear(utcDate, coreGetFullYear(date))
  return date.getTime() - utcDate.getTime()
}
