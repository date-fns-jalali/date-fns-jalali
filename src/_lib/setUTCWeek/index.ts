import toInteger from '../toInteger/index'
import toDate from '../../toDate/index'
import getUTCWeek from '../getUTCWeek/index'
import requiredArgs from '../requiredArgs/index'
import type {
  LocaleOptions,
  WeekStartOptions,
  FirstWeekContainsDateOptions,
} from '../../types'

import coreGetUTCDate from '../../_core/getUTCDate/index'
import coreSetUTCDate from '../../_core/setUTCDate/index'

export default function setUTCWeek(
  dirtyDate: Date | number,
  dirtyWeek: number,
  options?: LocaleOptions & WeekStartOptions & FirstWeekContainsDateOptions
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const week = toInteger(dirtyWeek)
  const diff = getUTCWeek(date, options) - week
  coreSetUTCDate(date, coreGetUTCDate(date) - diff * 7)
  return date
}
