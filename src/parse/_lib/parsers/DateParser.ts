import { isLeapYearIndex, parseNDigits, parseNumericPattern } from '../utils'
import type { Match } from '../../../locale/types'
import { Parser } from '../Parser'
import { numericPatterns } from '../constants'
import type { ParseResult, ParseFlags } from '../types'

import coreGetUTCMonth from '../../../_core/getUTCMonth/index'
import coreSetUTCDate from '../../../_core/setUTCDate/index'
import coreGetUTCFullYear from '../../../_core/getUTCFullYear/index'

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

// Day of the month
export class DateParser extends Parser<number> {
  priority = 90
  subPriority = 1

  parse(dateString: string, token: string, match: Match): ParseResult<number> {
    switch (token) {
      case 'd':
        return parseNumericPattern(numericPatterns.date, dateString)
      case 'do':
        return match.ordinalNumber(dateString, { unit: 'date' })
      default:
        return parseNDigits(token.length, dateString)
    }
  }

  validate(date: Date, value: number): boolean {
    const year = coreGetUTCFullYear(date)
    const isLeapYear = isLeapYearIndex(year)
    const month = coreGetUTCMonth(date)
    if (isLeapYear) {
      return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month]
    } else {
      return value >= 1 && value <= DAYS_IN_MONTH[month]
    }
  }

  set(date: Date, _flags: ParseFlags, value: number): Date {
    coreSetUTCDate(date, value)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }

  incompatibleTokens = [
    'Y',
    'R',
    'q',
    'Q',
    'w',
    'I',
    'D',
    'i',
    'e',
    'c',
    't',
    'T',
  ]
}
