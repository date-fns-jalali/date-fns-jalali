import toDate from '../../toDate/index'
import type {
  FirstWeekContainsDateOptions,
  LocaleOptions,
  WeekStartOptions,
} from '../../types'
import requiredArgs from '../requiredArgs/index'
import startOfUTCWeek from '../startOfUTCWeek/index'
import toInteger from '../toInteger/index'
import { getDefaultOptions } from '../defaultOptions/index'

import coreGetUTCFullYear from '../../_core/getUTCFullYear/index'
import coreSetUTCFullYear from '../../_core/setUTCFullYear/index'
import coreNewDate from '../../_core/newDate/index'

export default function getUTCWeekYear(
  dirtyDate: Date | number,
  options?: LocaleOptions & FirstWeekContainsDateOptions & WeekStartOptions
): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = coreGetUTCFullYear(date)

  const defaultOptions = getDefaultOptions()
  const firstWeekContainsDate = toInteger(
    options?.firstWeekContainsDate ??
      options?.locale?.options?.firstWeekContainsDate ??
      defaultOptions.firstWeekContainsDate ??
      defaultOptions.locale?.options?.firstWeekContainsDate ??
      1
  )

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  const firstWeekOfNextYear = coreNewDate(0)
  coreSetUTCFullYear(firstWeekOfNextYear, year + 1, 0, firstWeekContainsDate)
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0)
  const startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options)

  const firstWeekOfThisYear = coreNewDate(0)
  coreSetUTCFullYear(firstWeekOfThisYear, year, 0, firstWeekContainsDate)
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0)
  const startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}
