import toDate from '../../toDate/index'
import requiredArgs from '../requiredArgs/index'

import coreSetUTCMonth from '../../_core/setUTCMonth/index'

const MILLISECONDS_IN_DAY = 86400000

export default function getUTCDayOfYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const timestamp = date.getTime()
  coreSetUTCMonth(date, 0, 1)
  date.setUTCHours(0, 0, 0, 0)
  const startOfYearTimestamp = date.getTime()
  const difference = timestamp - startOfYearTimestamp
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1
}
