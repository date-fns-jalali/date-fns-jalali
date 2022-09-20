// This file is generated automatically by `scripts/build/typings.js`. Please, don't change it.

// FP Interfaces
declare module 'date-fns-jalali' {
  interface CurriedFn1<A, R> {
    (a: A): R
  }

  interface CurriedFn2<A, B, R> {
    (a: A): CurriedFn1<B, R>
    (a: A, b: B): R
  }

  interface CurriedFn3<A, B, C, R> {
    (a: A): CurriedFn2<B, C, R>
    (a: A, b: B): CurriedFn1<C, R>
    (a: A, b: B, c: C): R
  }

  interface CurriedFn4<A, B, C, D, R> {
    (a: A): CurriedFn3<B, C, D, R>
    (a: A, b: B): CurriedFn2<C, D, R>
    (a: A, b: B, c: C): CurriedFn1<D, R>
    (a: A, b: B, c: C, d: D): R
  }
}

// Type Aliases

declare module 'date-fns-jalali' {
  export type Interval = {
    start: Date | number
    end: Date | number
  }

  export type Locale = {
    code?: string
    formatDistance?: (...args: Array<any>) => any
    formatRelative?: (...args: Array<any>) => any
    localize?: {
      ordinalNumber: (...args: Array<any>) => any
      era: (...args: Array<any>) => any
      quarter: (...args: Array<any>) => any
      month: (...args: Array<any>) => any
      day: (...args: Array<any>) => any
      dayPeriod: (...args: Array<any>) => any
    }
    formatLong?: {
      date: (...args: Array<any>) => any
      time: (...args: Array<any>) => any
      dateTime: (...args: Array<any>) => any
    }
    match?: {
      ordinalNumber: (...args: Array<any>) => any
      era: (...args: Array<any>) => any
      quarter: (...args: Array<any>) => any
      month: (...args: Array<any>) => any
      day: (...args: Array<any>) => any
      dayPeriod: (...args: Array<any>) => any
    }
    options?: {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  }

  export type Duration = {
    years?: number
    months?: number
    weeks?: number
    days?: number
    hours?: number
    minutes?: number
    seconds?: number
  }

  export type Day = 0 | 1 | 2 | 3 | 4 | 5 | 6
}

// Regular Functions

declare module 'date-fns-jalali' {
  function add(date: Date | number, duration: Duration): Date
  namespace add {}

  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean
  namespace areIntervalsOverlapping {}

  function clamp(date: Date | number, interval: Interval): Date
  namespace clamp {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number | undefined
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date | undefined
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function daysToWeeks(days: number): number
  namespace daysToWeeks {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachHourOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachHourOfInterval {}

  function eachMinuteOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachMinuteOfInterval {}

  function eachMonthOfInterval(interval: Interval): Date[]
  namespace eachMonthOfInterval {}

  function eachQuarterOfInterval(interval: Interval): Date[]
  namespace eachQuarterOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function eachYearOfInterval(interval: Interval): Date[]
  namespace eachYearOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNowStrict {}

  function formatDuration(
    duration: Duration,
    options?: {
      format?: string[]
      zero?: boolean
      delimiter?: string
      locale?: Locale
    }
  ): string
  namespace formatDuration {}

  function formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO {}

  function formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO9075 {}

  function formatISODuration(duration: Duration): string
  namespace formatISODuration {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string
  namespace formatRFC3339 {}

  function formatRFC7231(date: Date | number): string
  namespace formatRFC7231 {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getDefaultOptions(): Object
  namespace getDefaultOptions {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function hoursToMilliseconds(hours: number): number
  namespace hoursToMilliseconds {}

  function hoursToMinutes(hours: number): number
  namespace hoursToMinutes {}

  function hoursToSeconds(hours: number): number
  namespace hoursToSeconds {}

  function intervalToDuration(interval: Interval): Duration
  namespace intervalToDuration {}

  function intlFormat(
    argument: Date | number,
    formatOptions?: {
      localeMatcher?: 'lookup' | 'best fit'
      weekday?: 'narrow' | 'short' | 'long'
      era?: 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      day?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      second?: 'numeric' | '2-digit'
      timeZoneName?: 'short' | 'long'
      formatMatcher?: 'basic' | 'best fit'
      hour12?: boolean
      timeZone?: string
    },
    localeOptions?: {
      locale?: string | string[]
    }
  ): string
  namespace intlFormat {}

  function intlFormatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      unit?: string
      locale?: string | string[]
      localeMatcher?: string
      numeric?: string
      style?: string
    }
  ): string
  namespace intlFormatDistance {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isExists(year: number, month: number, day: number): boolean
  namespace isExists {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMatch(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): boolean
  namespace isMatch {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function milliseconds(duration: Duration): number
  namespace milliseconds {}

  function millisecondsToHours(milliseconds: number): number
  namespace millisecondsToHours {}

  function millisecondsToMinutes(milliseconds: number): number
  namespace millisecondsToMinutes {}

  function millisecondsToSeconds(milliseconds: number): number
  namespace millisecondsToSeconds {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function minutesToHours(minutes: number): number
  namespace minutesToHours {}

  function minutesToMilliseconds(minutes: number): number
  namespace minutesToMilliseconds {}

  function minutesToSeconds(minutes: number): number
  namespace minutesToSeconds {}

  function monthsToQuarters(months: number): number
  namespace monthsToQuarters {}

  function monthsToYears(months: number): number
  namespace monthsToYears {}

  function newDate(
    year: number,
    month: number,
    date: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): Date
  namespace newDate {}

  function nextDay(date: Date | number, day: Day): Date
  namespace nextDay {}

  function nextFriday(date: Date | number): Date
  namespace nextFriday {}

  function nextMonday(date: Date | number): Date
  namespace nextMonday {}

  function nextSaturday(date: Date | number): Date
  namespace nextSaturday {}

  function nextSunday(date: Date | number): Date
  namespace nextSunday {}

  function nextThursday(date: Date | number): Date
  namespace nextThursday {}

  function nextTuesday(date: Date | number): Date
  namespace nextTuesday {}

  function nextWednesday(date: Date | number): Date
  namespace nextWednesday {}

  function parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function parseJSON(argument: string | number | Date): Date
  namespace parseJSON {}

  function previousDay(date: Date | number, day: number): Date
  namespace previousDay {}

  function previousFriday(date: Date | number): Date
  namespace previousFriday {}

  function previousMonday(date: Date | number): Date
  namespace previousMonday {}

  function previousSaturday(date: Date | number): Date
  namespace previousSaturday {}

  function previousSunday(date: Date | number): Date
  namespace previousSunday {}

  function previousThursday(date: Date | number): Date
  namespace previousThursday {}

  function previousTuesday(date: Date | number): Date
  namespace previousTuesday {}

  function previousWednesday(date: Date | number): Date
  namespace previousWednesday {}

  function quartersToMonths(quarters: number): number
  namespace quartersToMonths {}

  function quartersToYears(quarters: number): number
  namespace quartersToYears {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
      roundingMethod?: string
    }
  ): Date
  namespace roundToNearestMinutes {}

  function secondsToHours(seconds: number): number
  namespace secondsToHours {}

  function secondsToMilliseconds(seconds: number): number
  namespace secondsToMilliseconds {}

  function secondsToMinutes(seconds: number): number
  namespace secondsToMinutes {}

  function set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date
  namespace set {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setDefaultOptions(newOptions: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }): void
  namespace setDefaultOptions {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function sub(date: Date | number, duration: Duration): Date
  namespace sub {}

  function subBusinessDays(date: Date | number, amount: number): Date
  namespace subBusinessDays {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  function weeksToDays(weeks: number): number
  namespace weeksToDays {}

  function yearsToMonths(years: number): number
  namespace yearsToMonths {}

  function yearsToQuarters(years: number): number
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns-jalali/constants' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns-jalali/constants/index' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns-jalali/constants/index.js' {
  export const daysInWeek: number
  export const daysInYear: number
  export const maxTime: number
  export const millisecondsInMinute: number
  export const millisecondsInHour: number
  export const millisecondsInSecond: number
  export const minTime: number
  export const minutesInHour: number
  export const monthsInQuarter: number
  export const monthsInYear: number
  export const quartersInYear: number
  export const secondsInHour: number
  export const secondsInMinute: number
  export const secondsInDay: number
  export const secondsInWeek: number
  export const secondsInYear: number
  export const secondsInMonth: number
  export const secondsInQuarter: number
}

declare module 'date-fns-jalali/add' {
  import { add } from 'date-fns-jalali'
  export default add
}

declare module 'date-fns-jalali/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalali'
  export default addBusinessDays
}

declare module 'date-fns-jalali/addDays' {
  import { addDays } from 'date-fns-jalali'
  export default addDays
}

declare module 'date-fns-jalali/addHours' {
  import { addHours } from 'date-fns-jalali'
  export default addHours
}

declare module 'date-fns-jalali/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalali'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalali'
  export default addMilliseconds
}

declare module 'date-fns-jalali/addMinutes' {
  import { addMinutes } from 'date-fns-jalali'
  export default addMinutes
}

declare module 'date-fns-jalali/addMonths' {
  import { addMonths } from 'date-fns-jalali'
  export default addMonths
}

declare module 'date-fns-jalali/addQuarters' {
  import { addQuarters } from 'date-fns-jalali'
  export default addQuarters
}

declare module 'date-fns-jalali/addSeconds' {
  import { addSeconds } from 'date-fns-jalali'
  export default addSeconds
}

declare module 'date-fns-jalali/addWeeks' {
  import { addWeeks } from 'date-fns-jalali'
  export default addWeeks
}

declare module 'date-fns-jalali/addYears' {
  import { addYears } from 'date-fns-jalali'
  export default addYears
}

declare module 'date-fns-jalali/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalali'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/clamp' {
  import { clamp } from 'date-fns-jalali'
  export default clamp
}

declare module 'date-fns-jalali/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalali'
  export default closestIndexTo
}

declare module 'date-fns-jalali/closestTo' {
  import { closestTo } from 'date-fns-jalali'
  export default closestTo
}

declare module 'date-fns-jalali/compareAsc' {
  import { compareAsc } from 'date-fns-jalali'
  export default compareAsc
}

declare module 'date-fns-jalali/compareDesc' {
  import { compareDesc } from 'date-fns-jalali'
  export default compareDesc
}

declare module 'date-fns-jalali/daysToWeeks' {
  import { daysToWeeks } from 'date-fns-jalali'
  export default daysToWeeks
}

declare module 'date-fns-jalali/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalali'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalali'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalali'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalali'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalali'
  export default differenceInDays
}

declare module 'date-fns-jalali/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalali'
  export default differenceInHours
}

declare module 'date-fns-jalali/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalali'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalali'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalali'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalali'
  export default differenceInMonths
}

declare module 'date-fns-jalali/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalali'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalali'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalali'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalali'
  export default differenceInYears
}

declare module 'date-fns-jalali/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalali'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns-jalali'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns-jalali'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalali'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns-jalali'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalali'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalali'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalali'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalali'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalali'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/endOfDay' {
  import { endOfDay } from 'date-fns-jalali'
  export default endOfDay
}

declare module 'date-fns-jalali/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalali'
  export default endOfDecade
}

declare module 'date-fns-jalali/endOfHour' {
  import { endOfHour } from 'date-fns-jalali'
  export default endOfHour
}

declare module 'date-fns-jalali/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalali'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalali'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalali'
  export default endOfMinute
}

declare module 'date-fns-jalali/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalali'
  export default endOfMonth
}

declare module 'date-fns-jalali/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalali'
  export default endOfQuarter
}

declare module 'date-fns-jalali/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalali'
  export default endOfSecond
}

declare module 'date-fns-jalali/endOfToday' {
  import { endOfToday } from 'date-fns-jalali'
  export default endOfToday
}

declare module 'date-fns-jalali/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns-jalali'
  export default endOfTomorrow
}

declare module 'date-fns-jalali/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalali'
  export default endOfWeek
}

declare module 'date-fns-jalali/endOfYear' {
  import { endOfYear } from 'date-fns-jalali'
  export default endOfYear
}

declare module 'date-fns-jalali/endOfYesterday' {
  import { endOfYesterday } from 'date-fns-jalali'
  export default endOfYesterday
}

declare module 'date-fns-jalali/format' {
  import { format } from 'date-fns-jalali'
  export default format
}

declare module 'date-fns-jalali/formatDistance' {
  import { formatDistance } from 'date-fns-jalali'
  export default formatDistance
}

declare module 'date-fns-jalali/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalali'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns-jalali'
  export default formatDistanceToNow
}

declare module 'date-fns-jalali/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns-jalali'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalali/formatDuration' {
  import { formatDuration } from 'date-fns-jalali'
  export default formatDuration
}

declare module 'date-fns-jalali/formatISO' {
  import { formatISO } from 'date-fns-jalali'
  export default formatISO
}

declare module 'date-fns-jalali/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalali'
  export default formatISO9075
}

declare module 'date-fns-jalali/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalali'
  export default formatISODuration
}

declare module 'date-fns-jalali/formatRelative' {
  import { formatRelative } from 'date-fns-jalali'
  export default formatRelative
}

declare module 'date-fns-jalali/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalali'
  export default formatRFC3339
}

declare module 'date-fns-jalali/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalali'
  export default formatRFC7231
}

declare module 'date-fns-jalali/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalali'
  export default fromUnixTime
}

declare module 'date-fns-jalali/getDate' {
  import { getDate } from 'date-fns-jalali'
  export default getDate
}

declare module 'date-fns-jalali/getDay' {
  import { getDay } from 'date-fns-jalali'
  export default getDay
}

declare module 'date-fns-jalali/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalali'
  export default getDayOfYear
}

declare module 'date-fns-jalali/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalali'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalali'
  export default getDaysInYear
}

declare module 'date-fns-jalali/getDecade' {
  import { getDecade } from 'date-fns-jalali'
  export default getDecade
}

declare module 'date-fns-jalali/getDefaultOptions' {
  import { getDefaultOptions } from 'date-fns-jalali'
  export default getDefaultOptions
}

declare module 'date-fns-jalali/getHours' {
  import { getHours } from 'date-fns-jalali'
  export default getHours
}

declare module 'date-fns-jalali/getISODay' {
  import { getISODay } from 'date-fns-jalali'
  export default getISODay
}

declare module 'date-fns-jalali/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalali'
  export default getISOWeek
}

declare module 'date-fns-jalali/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalali'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalali'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalali'
  export default getMilliseconds
}

declare module 'date-fns-jalali/getMinutes' {
  import { getMinutes } from 'date-fns-jalali'
  export default getMinutes
}

declare module 'date-fns-jalali/getMonth' {
  import { getMonth } from 'date-fns-jalali'
  export default getMonth
}

declare module 'date-fns-jalali/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/getQuarter' {
  import { getQuarter } from 'date-fns-jalali'
  export default getQuarter
}

declare module 'date-fns-jalali/getSeconds' {
  import { getSeconds } from 'date-fns-jalali'
  export default getSeconds
}

declare module 'date-fns-jalali/getTime' {
  import { getTime } from 'date-fns-jalali'
  export default getTime
}

declare module 'date-fns-jalali/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalali'
  export default getUnixTime
}

declare module 'date-fns-jalali/getWeek' {
  import { getWeek } from 'date-fns-jalali'
  export default getWeek
}

declare module 'date-fns-jalali/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalali'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalali'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalali'
  export default getWeekYear
}

declare module 'date-fns-jalali/getYear' {
  import { getYear } from 'date-fns-jalali'
  export default getYear
}

declare module 'date-fns-jalali/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns-jalali'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns-jalali'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns-jalali'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalali'
  export default intervalToDuration
}

declare module 'date-fns-jalali/intlFormat' {
  import { intlFormat } from 'date-fns-jalali'
  export default intlFormat
}

declare module 'date-fns-jalali/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns-jalali'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/isAfter' {
  import { isAfter } from 'date-fns-jalali'
  export default isAfter
}

declare module 'date-fns-jalali/isBefore' {
  import { isBefore } from 'date-fns-jalali'
  export default isBefore
}

declare module 'date-fns-jalali/isDate' {
  import { isDate } from 'date-fns-jalali'
  export default isDate
}

declare module 'date-fns-jalali/isEqual' {
  import { isEqual } from 'date-fns-jalali'
  export default isEqual
}

declare module 'date-fns-jalali/isExists' {
  import { isExists } from 'date-fns-jalali'
  export default isExists
}

declare module 'date-fns-jalali/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalali'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/isFriday' {
  import { isFriday } from 'date-fns-jalali'
  export default isFriday
}

declare module 'date-fns-jalali/isFuture' {
  import { isFuture } from 'date-fns-jalali'
  export default isFuture
}

declare module 'date-fns-jalali/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalali'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalali'
  export default isLeapYear
}

declare module 'date-fns-jalali/isMatch' {
  import { isMatch } from 'date-fns-jalali'
  export default isMatch
}

declare module 'date-fns-jalali/isMonday' {
  import { isMonday } from 'date-fns-jalali'
  export default isMonday
}

declare module 'date-fns-jalali/isPast' {
  import { isPast } from 'date-fns-jalali'
  export default isPast
}

declare module 'date-fns-jalali/isSameDay' {
  import { isSameDay } from 'date-fns-jalali'
  export default isSameDay
}

declare module 'date-fns-jalali/isSameHour' {
  import { isSameHour } from 'date-fns-jalali'
  export default isSameHour
}

declare module 'date-fns-jalali/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalali'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalali'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalali'
  export default isSameMinute
}

declare module 'date-fns-jalali/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalali'
  export default isSameMonth
}

declare module 'date-fns-jalali/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalali'
  export default isSameQuarter
}

declare module 'date-fns-jalali/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalali'
  export default isSameSecond
}

declare module 'date-fns-jalali/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalali'
  export default isSameWeek
}

declare module 'date-fns-jalali/isSameYear' {
  import { isSameYear } from 'date-fns-jalali'
  export default isSameYear
}

declare module 'date-fns-jalali/isSaturday' {
  import { isSaturday } from 'date-fns-jalali'
  export default isSaturday
}

declare module 'date-fns-jalali/isSunday' {
  import { isSunday } from 'date-fns-jalali'
  export default isSunday
}

declare module 'date-fns-jalali/isThisHour' {
  import { isThisHour } from 'date-fns-jalali'
  export default isThisHour
}

declare module 'date-fns-jalali/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns-jalali'
  export default isThisISOWeek
}

declare module 'date-fns-jalali/isThisMinute' {
  import { isThisMinute } from 'date-fns-jalali'
  export default isThisMinute
}

declare module 'date-fns-jalali/isThisMonth' {
  import { isThisMonth } from 'date-fns-jalali'
  export default isThisMonth
}

declare module 'date-fns-jalali/isThisQuarter' {
  import { isThisQuarter } from 'date-fns-jalali'
  export default isThisQuarter
}

declare module 'date-fns-jalali/isThisSecond' {
  import { isThisSecond } from 'date-fns-jalali'
  export default isThisSecond
}

declare module 'date-fns-jalali/isThisWeek' {
  import { isThisWeek } from 'date-fns-jalali'
  export default isThisWeek
}

declare module 'date-fns-jalali/isThisYear' {
  import { isThisYear } from 'date-fns-jalali'
  export default isThisYear
}

declare module 'date-fns-jalali/isThursday' {
  import { isThursday } from 'date-fns-jalali'
  export default isThursday
}

declare module 'date-fns-jalali/isToday' {
  import { isToday } from 'date-fns-jalali'
  export default isToday
}

declare module 'date-fns-jalali/isTomorrow' {
  import { isTomorrow } from 'date-fns-jalali'
  export default isTomorrow
}

declare module 'date-fns-jalali/isTuesday' {
  import { isTuesday } from 'date-fns-jalali'
  export default isTuesday
}

declare module 'date-fns-jalali/isValid' {
  import { isValid } from 'date-fns-jalali'
  export default isValid
}

declare module 'date-fns-jalali/isWednesday' {
  import { isWednesday } from 'date-fns-jalali'
  export default isWednesday
}

declare module 'date-fns-jalali/isWeekend' {
  import { isWeekend } from 'date-fns-jalali'
  export default isWeekend
}

declare module 'date-fns-jalali/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalali'
  export default isWithinInterval
}

declare module 'date-fns-jalali/isYesterday' {
  import { isYesterday } from 'date-fns-jalali'
  export default isYesterday
}

declare module 'date-fns-jalali/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalali'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalali'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalali'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalali'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalali'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalali'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/lightFormat' {
  import { lightFormat } from 'date-fns-jalali'
  export default lightFormat
}

declare module 'date-fns-jalali/max' {
  import { max } from 'date-fns-jalali'
  export default max
}

declare module 'date-fns-jalali/milliseconds' {
  import { milliseconds } from 'date-fns-jalali'
  export default milliseconds
}

declare module 'date-fns-jalali/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns-jalali'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns-jalali'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns-jalali'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/min' {
  import { min } from 'date-fns-jalali'
  export default min
}

declare module 'date-fns-jalali/minutesToHours' {
  import { minutesToHours } from 'date-fns-jalali'
  export default minutesToHours
}

declare module 'date-fns-jalali/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns-jalali'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns-jalali'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns-jalali'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/monthsToYears' {
  import { monthsToYears } from 'date-fns-jalali'
  export default monthsToYears
}

declare module 'date-fns-jalali/newDate' {
  import { newDate } from 'date-fns-jalali'
  export default newDate
}

declare module 'date-fns-jalali/nextDay' {
  import { nextDay } from 'date-fns-jalali'
  export default nextDay
}

declare module 'date-fns-jalali/nextFriday' {
  import { nextFriday } from 'date-fns-jalali'
  export default nextFriday
}

declare module 'date-fns-jalali/nextMonday' {
  import { nextMonday } from 'date-fns-jalali'
  export default nextMonday
}

declare module 'date-fns-jalali/nextSaturday' {
  import { nextSaturday } from 'date-fns-jalali'
  export default nextSaturday
}

declare module 'date-fns-jalali/nextSunday' {
  import { nextSunday } from 'date-fns-jalali'
  export default nextSunday
}

declare module 'date-fns-jalali/nextThursday' {
  import { nextThursday } from 'date-fns-jalali'
  export default nextThursday
}

declare module 'date-fns-jalali/nextTuesday' {
  import { nextTuesday } from 'date-fns-jalali'
  export default nextTuesday
}

declare module 'date-fns-jalali/nextWednesday' {
  import { nextWednesday } from 'date-fns-jalali'
  export default nextWednesday
}

declare module 'date-fns-jalali/parse' {
  import { parse } from 'date-fns-jalali'
  export default parse
}

declare module 'date-fns-jalali/parseISO' {
  import { parseISO } from 'date-fns-jalali'
  export default parseISO
}

declare module 'date-fns-jalali/parseJSON' {
  import { parseJSON } from 'date-fns-jalali'
  export default parseJSON
}

declare module 'date-fns-jalali/previousDay' {
  import { previousDay } from 'date-fns-jalali'
  export default previousDay
}

declare module 'date-fns-jalali/previousFriday' {
  import { previousFriday } from 'date-fns-jalali'
  export default previousFriday
}

declare module 'date-fns-jalali/previousMonday' {
  import { previousMonday } from 'date-fns-jalali'
  export default previousMonday
}

declare module 'date-fns-jalali/previousSaturday' {
  import { previousSaturday } from 'date-fns-jalali'
  export default previousSaturday
}

declare module 'date-fns-jalali/previousSunday' {
  import { previousSunday } from 'date-fns-jalali'
  export default previousSunday
}

declare module 'date-fns-jalali/previousThursday' {
  import { previousThursday } from 'date-fns-jalali'
  export default previousThursday
}

declare module 'date-fns-jalali/previousTuesday' {
  import { previousTuesday } from 'date-fns-jalali'
  export default previousTuesday
}

declare module 'date-fns-jalali/previousWednesday' {
  import { previousWednesday } from 'date-fns-jalali'
  export default previousWednesday
}

declare module 'date-fns-jalali/quartersToMonths' {
  import { quartersToMonths } from 'date-fns-jalali'
  export default quartersToMonths
}

declare module 'date-fns-jalali/quartersToYears' {
  import { quartersToYears } from 'date-fns-jalali'
  export default quartersToYears
}

declare module 'date-fns-jalali/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalali'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/secondsToHours' {
  import { secondsToHours } from 'date-fns-jalali'
  export default secondsToHours
}

declare module 'date-fns-jalali/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns-jalali'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns-jalali'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/set' {
  import { set } from 'date-fns-jalali'
  export default set
}

declare module 'date-fns-jalali/setDate' {
  import { setDate } from 'date-fns-jalali'
  export default setDate
}

declare module 'date-fns-jalali/setDay' {
  import { setDay } from 'date-fns-jalali'
  export default setDay
}

declare module 'date-fns-jalali/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalali'
  export default setDayOfYear
}

declare module 'date-fns-jalali/setDefaultOptions' {
  import { setDefaultOptions } from 'date-fns-jalali'
  export default setDefaultOptions
}

declare module 'date-fns-jalali/setHours' {
  import { setHours } from 'date-fns-jalali'
  export default setHours
}

declare module 'date-fns-jalali/setISODay' {
  import { setISODay } from 'date-fns-jalali'
  export default setISODay
}

declare module 'date-fns-jalali/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalali'
  export default setISOWeek
}

declare module 'date-fns-jalali/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalali'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalali'
  export default setMilliseconds
}

declare module 'date-fns-jalali/setMinutes' {
  import { setMinutes } from 'date-fns-jalali'
  export default setMinutes
}

declare module 'date-fns-jalali/setMonth' {
  import { setMonth } from 'date-fns-jalali'
  export default setMonth
}

declare module 'date-fns-jalali/setQuarter' {
  import { setQuarter } from 'date-fns-jalali'
  export default setQuarter
}

declare module 'date-fns-jalali/setSeconds' {
  import { setSeconds } from 'date-fns-jalali'
  export default setSeconds
}

declare module 'date-fns-jalali/setWeek' {
  import { setWeek } from 'date-fns-jalali'
  export default setWeek
}

declare module 'date-fns-jalali/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalali'
  export default setWeekYear
}

declare module 'date-fns-jalali/setYear' {
  import { setYear } from 'date-fns-jalali'
  export default setYear
}

declare module 'date-fns-jalali/startOfDay' {
  import { startOfDay } from 'date-fns-jalali'
  export default startOfDay
}

declare module 'date-fns-jalali/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalali'
  export default startOfDecade
}

declare module 'date-fns-jalali/startOfHour' {
  import { startOfHour } from 'date-fns-jalali'
  export default startOfHour
}

declare module 'date-fns-jalali/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalali'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalali'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalali'
  export default startOfMinute
}

declare module 'date-fns-jalali/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalali'
  export default startOfMonth
}

declare module 'date-fns-jalali/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalali'
  export default startOfQuarter
}

declare module 'date-fns-jalali/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalali'
  export default startOfSecond
}

declare module 'date-fns-jalali/startOfToday' {
  import { startOfToday } from 'date-fns-jalali'
  export default startOfToday
}

declare module 'date-fns-jalali/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns-jalali'
  export default startOfTomorrow
}

declare module 'date-fns-jalali/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalali'
  export default startOfWeek
}

declare module 'date-fns-jalali/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalali'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/startOfYear' {
  import { startOfYear } from 'date-fns-jalali'
  export default startOfYear
}

declare module 'date-fns-jalali/startOfYesterday' {
  import { startOfYesterday } from 'date-fns-jalali'
  export default startOfYesterday
}

declare module 'date-fns-jalali/sub' {
  import { sub } from 'date-fns-jalali'
  export default sub
}

declare module 'date-fns-jalali/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalali'
  export default subBusinessDays
}

declare module 'date-fns-jalali/subDays' {
  import { subDays } from 'date-fns-jalali'
  export default subDays
}

declare module 'date-fns-jalali/subHours' {
  import { subHours } from 'date-fns-jalali'
  export default subHours
}

declare module 'date-fns-jalali/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalali'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalali'
  export default subMilliseconds
}

declare module 'date-fns-jalali/subMinutes' {
  import { subMinutes } from 'date-fns-jalali'
  export default subMinutes
}

declare module 'date-fns-jalali/subMonths' {
  import { subMonths } from 'date-fns-jalali'
  export default subMonths
}

declare module 'date-fns-jalali/subQuarters' {
  import { subQuarters } from 'date-fns-jalali'
  export default subQuarters
}

declare module 'date-fns-jalali/subSeconds' {
  import { subSeconds } from 'date-fns-jalali'
  export default subSeconds
}

declare module 'date-fns-jalali/subWeeks' {
  import { subWeeks } from 'date-fns-jalali'
  export default subWeeks
}

declare module 'date-fns-jalali/subYears' {
  import { subYears } from 'date-fns-jalali'
  export default subYears
}

declare module 'date-fns-jalali/toDate' {
  import { toDate } from 'date-fns-jalali'
  export default toDate
}

declare module 'date-fns-jalali/weeksToDays' {
  import { weeksToDays } from 'date-fns-jalali'
  export default weeksToDays
}

declare module 'date-fns-jalali/yearsToMonths' {
  import { yearsToMonths } from 'date-fns-jalali'
  export default yearsToMonths
}

declare module 'date-fns-jalali/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns-jalali'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/add/index' {
  import { add } from 'date-fns-jalali'
  export default add
}

declare module 'date-fns-jalali/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalali'
  export default addBusinessDays
}

declare module 'date-fns-jalali/addDays/index' {
  import { addDays } from 'date-fns-jalali'
  export default addDays
}

declare module 'date-fns-jalali/addHours/index' {
  import { addHours } from 'date-fns-jalali'
  export default addHours
}

declare module 'date-fns-jalali/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalali'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalali'
  export default addMilliseconds
}

declare module 'date-fns-jalali/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalali'
  export default addMinutes
}

declare module 'date-fns-jalali/addMonths/index' {
  import { addMonths } from 'date-fns-jalali'
  export default addMonths
}

declare module 'date-fns-jalali/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalali'
  export default addQuarters
}

declare module 'date-fns-jalali/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalali'
  export default addSeconds
}

declare module 'date-fns-jalali/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalali'
  export default addWeeks
}

declare module 'date-fns-jalali/addYears/index' {
  import { addYears } from 'date-fns-jalali'
  export default addYears
}

declare module 'date-fns-jalali/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalali'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/clamp/index' {
  import { clamp } from 'date-fns-jalali'
  export default clamp
}

declare module 'date-fns-jalali/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalali'
  export default closestIndexTo
}

declare module 'date-fns-jalali/closestTo/index' {
  import { closestTo } from 'date-fns-jalali'
  export default closestTo
}

declare module 'date-fns-jalali/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalali'
  export default compareAsc
}

declare module 'date-fns-jalali/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalali'
  export default compareDesc
}

declare module 'date-fns-jalali/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns-jalali'
  export default daysToWeeks
}

declare module 'date-fns-jalali/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalali'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalali'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalali'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalali'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalali'
  export default differenceInDays
}

declare module 'date-fns-jalali/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalali'
  export default differenceInHours
}

declare module 'date-fns-jalali/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalali'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalali'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalali'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalali'
  export default differenceInMonths
}

declare module 'date-fns-jalali/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalali'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalali'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalali'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalali'
  export default differenceInYears
}

declare module 'date-fns-jalali/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalali'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns-jalali'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns-jalali'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalali'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns-jalali'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalali'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalali'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalali'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalali'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalali'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalali'
  export default endOfDay
}

declare module 'date-fns-jalali/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalali'
  export default endOfDecade
}

declare module 'date-fns-jalali/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalali'
  export default endOfHour
}

declare module 'date-fns-jalali/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalali'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalali'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalali'
  export default endOfMinute
}

declare module 'date-fns-jalali/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalali'
  export default endOfMonth
}

declare module 'date-fns-jalali/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalali'
  export default endOfQuarter
}

declare module 'date-fns-jalali/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalali'
  export default endOfSecond
}

declare module 'date-fns-jalali/endOfToday/index' {
  import { endOfToday } from 'date-fns-jalali'
  export default endOfToday
}

declare module 'date-fns-jalali/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns-jalali'
  export default endOfTomorrow
}

declare module 'date-fns-jalali/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalali'
  export default endOfWeek
}

declare module 'date-fns-jalali/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalali'
  export default endOfYear
}

declare module 'date-fns-jalali/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns-jalali'
  export default endOfYesterday
}

declare module 'date-fns-jalali/format/index' {
  import { format } from 'date-fns-jalali'
  export default format
}

declare module 'date-fns-jalali/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalali'
  export default formatDistance
}

declare module 'date-fns-jalali/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalali'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns-jalali'
  export default formatDistanceToNow
}

declare module 'date-fns-jalali/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns-jalali'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalali/formatDuration/index' {
  import { formatDuration } from 'date-fns-jalali'
  export default formatDuration
}

declare module 'date-fns-jalali/formatISO/index' {
  import { formatISO } from 'date-fns-jalali'
  export default formatISO
}

declare module 'date-fns-jalali/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalali'
  export default formatISO9075
}

declare module 'date-fns-jalali/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalali'
  export default formatISODuration
}

declare module 'date-fns-jalali/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalali'
  export default formatRelative
}

declare module 'date-fns-jalali/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalali'
  export default formatRFC3339
}

declare module 'date-fns-jalali/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalali'
  export default formatRFC7231
}

declare module 'date-fns-jalali/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalali'
  export default fromUnixTime
}

declare module 'date-fns-jalali/getDate/index' {
  import { getDate } from 'date-fns-jalali'
  export default getDate
}

declare module 'date-fns-jalali/getDay/index' {
  import { getDay } from 'date-fns-jalali'
  export default getDay
}

declare module 'date-fns-jalali/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalali'
  export default getDayOfYear
}

declare module 'date-fns-jalali/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalali'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalali'
  export default getDaysInYear
}

declare module 'date-fns-jalali/getDecade/index' {
  import { getDecade } from 'date-fns-jalali'
  export default getDecade
}

declare module 'date-fns-jalali/getDefaultOptions/index' {
  import { getDefaultOptions } from 'date-fns-jalali'
  export default getDefaultOptions
}

declare module 'date-fns-jalali/getHours/index' {
  import { getHours } from 'date-fns-jalali'
  export default getHours
}

declare module 'date-fns-jalali/getISODay/index' {
  import { getISODay } from 'date-fns-jalali'
  export default getISODay
}

declare module 'date-fns-jalali/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalali'
  export default getISOWeek
}

declare module 'date-fns-jalali/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalali'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalali'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalali'
  export default getMilliseconds
}

declare module 'date-fns-jalali/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalali'
  export default getMinutes
}

declare module 'date-fns-jalali/getMonth/index' {
  import { getMonth } from 'date-fns-jalali'
  export default getMonth
}

declare module 'date-fns-jalali/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalali'
  export default getQuarter
}

declare module 'date-fns-jalali/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalali'
  export default getSeconds
}

declare module 'date-fns-jalali/getTime/index' {
  import { getTime } from 'date-fns-jalali'
  export default getTime
}

declare module 'date-fns-jalali/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalali'
  export default getUnixTime
}

declare module 'date-fns-jalali/getWeek/index' {
  import { getWeek } from 'date-fns-jalali'
  export default getWeek
}

declare module 'date-fns-jalali/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalali'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalali'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalali'
  export default getWeekYear
}

declare module 'date-fns-jalali/getYear/index' {
  import { getYear } from 'date-fns-jalali'
  export default getYear
}

declare module 'date-fns-jalali/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns-jalali'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns-jalali'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns-jalali'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalali'
  export default intervalToDuration
}

declare module 'date-fns-jalali/intlFormat/index' {
  import { intlFormat } from 'date-fns-jalali'
  export default intlFormat
}

declare module 'date-fns-jalali/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns-jalali'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/isAfter/index' {
  import { isAfter } from 'date-fns-jalali'
  export default isAfter
}

declare module 'date-fns-jalali/isBefore/index' {
  import { isBefore } from 'date-fns-jalali'
  export default isBefore
}

declare module 'date-fns-jalali/isDate/index' {
  import { isDate } from 'date-fns-jalali'
  export default isDate
}

declare module 'date-fns-jalali/isEqual/index' {
  import { isEqual } from 'date-fns-jalali'
  export default isEqual
}

declare module 'date-fns-jalali/isExists/index' {
  import { isExists } from 'date-fns-jalali'
  export default isExists
}

declare module 'date-fns-jalali/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalali'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/isFriday/index' {
  import { isFriday } from 'date-fns-jalali'
  export default isFriday
}

declare module 'date-fns-jalali/isFuture/index' {
  import { isFuture } from 'date-fns-jalali'
  export default isFuture
}

declare module 'date-fns-jalali/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalali'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalali'
  export default isLeapYear
}

declare module 'date-fns-jalali/isMatch/index' {
  import { isMatch } from 'date-fns-jalali'
  export default isMatch
}

declare module 'date-fns-jalali/isMonday/index' {
  import { isMonday } from 'date-fns-jalali'
  export default isMonday
}

declare module 'date-fns-jalali/isPast/index' {
  import { isPast } from 'date-fns-jalali'
  export default isPast
}

declare module 'date-fns-jalali/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalali'
  export default isSameDay
}

declare module 'date-fns-jalali/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalali'
  export default isSameHour
}

declare module 'date-fns-jalali/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalali'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalali'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalali'
  export default isSameMinute
}

declare module 'date-fns-jalali/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalali'
  export default isSameMonth
}

declare module 'date-fns-jalali/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalali'
  export default isSameQuarter
}

declare module 'date-fns-jalali/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalali'
  export default isSameSecond
}

declare module 'date-fns-jalali/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalali'
  export default isSameWeek
}

declare module 'date-fns-jalali/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalali'
  export default isSameYear
}

declare module 'date-fns-jalali/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalali'
  export default isSaturday
}

declare module 'date-fns-jalali/isSunday/index' {
  import { isSunday } from 'date-fns-jalali'
  export default isSunday
}

declare module 'date-fns-jalali/isThisHour/index' {
  import { isThisHour } from 'date-fns-jalali'
  export default isThisHour
}

declare module 'date-fns-jalali/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns-jalali'
  export default isThisISOWeek
}

declare module 'date-fns-jalali/isThisMinute/index' {
  import { isThisMinute } from 'date-fns-jalali'
  export default isThisMinute
}

declare module 'date-fns-jalali/isThisMonth/index' {
  import { isThisMonth } from 'date-fns-jalali'
  export default isThisMonth
}

declare module 'date-fns-jalali/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns-jalali'
  export default isThisQuarter
}

declare module 'date-fns-jalali/isThisSecond/index' {
  import { isThisSecond } from 'date-fns-jalali'
  export default isThisSecond
}

declare module 'date-fns-jalali/isThisWeek/index' {
  import { isThisWeek } from 'date-fns-jalali'
  export default isThisWeek
}

declare module 'date-fns-jalali/isThisYear/index' {
  import { isThisYear } from 'date-fns-jalali'
  export default isThisYear
}

declare module 'date-fns-jalali/isThursday/index' {
  import { isThursday } from 'date-fns-jalali'
  export default isThursday
}

declare module 'date-fns-jalali/isToday/index' {
  import { isToday } from 'date-fns-jalali'
  export default isToday
}

declare module 'date-fns-jalali/isTomorrow/index' {
  import { isTomorrow } from 'date-fns-jalali'
  export default isTomorrow
}

declare module 'date-fns-jalali/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalali'
  export default isTuesday
}

declare module 'date-fns-jalali/isValid/index' {
  import { isValid } from 'date-fns-jalali'
  export default isValid
}

declare module 'date-fns-jalali/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalali'
  export default isWednesday
}

declare module 'date-fns-jalali/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalali'
  export default isWeekend
}

declare module 'date-fns-jalali/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalali'
  export default isWithinInterval
}

declare module 'date-fns-jalali/isYesterday/index' {
  import { isYesterday } from 'date-fns-jalali'
  export default isYesterday
}

declare module 'date-fns-jalali/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalali'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalali'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalali'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalali'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalali'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalali'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalali'
  export default lightFormat
}

declare module 'date-fns-jalali/max/index' {
  import { max } from 'date-fns-jalali'
  export default max
}

declare module 'date-fns-jalali/milliseconds/index' {
  import { milliseconds } from 'date-fns-jalali'
  export default milliseconds
}

declare module 'date-fns-jalali/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns-jalali'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns-jalali'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns-jalali'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/min/index' {
  import { min } from 'date-fns-jalali'
  export default min
}

declare module 'date-fns-jalali/minutesToHours/index' {
  import { minutesToHours } from 'date-fns-jalali'
  export default minutesToHours
}

declare module 'date-fns-jalali/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns-jalali'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns-jalali'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns-jalali'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/monthsToYears/index' {
  import { monthsToYears } from 'date-fns-jalali'
  export default monthsToYears
}

declare module 'date-fns-jalali/newDate/index' {
  import { newDate } from 'date-fns-jalali'
  export default newDate
}

declare module 'date-fns-jalali/nextDay/index' {
  import { nextDay } from 'date-fns-jalali'
  export default nextDay
}

declare module 'date-fns-jalali/nextFriday/index' {
  import { nextFriday } from 'date-fns-jalali'
  export default nextFriday
}

declare module 'date-fns-jalali/nextMonday/index' {
  import { nextMonday } from 'date-fns-jalali'
  export default nextMonday
}

declare module 'date-fns-jalali/nextSaturday/index' {
  import { nextSaturday } from 'date-fns-jalali'
  export default nextSaturday
}

declare module 'date-fns-jalali/nextSunday/index' {
  import { nextSunday } from 'date-fns-jalali'
  export default nextSunday
}

declare module 'date-fns-jalali/nextThursday/index' {
  import { nextThursday } from 'date-fns-jalali'
  export default nextThursday
}

declare module 'date-fns-jalali/nextTuesday/index' {
  import { nextTuesday } from 'date-fns-jalali'
  export default nextTuesday
}

declare module 'date-fns-jalali/nextWednesday/index' {
  import { nextWednesday } from 'date-fns-jalali'
  export default nextWednesday
}

declare module 'date-fns-jalali/parse/index' {
  import { parse } from 'date-fns-jalali'
  export default parse
}

declare module 'date-fns-jalali/parseISO/index' {
  import { parseISO } from 'date-fns-jalali'
  export default parseISO
}

declare module 'date-fns-jalali/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalali'
  export default parseJSON
}

declare module 'date-fns-jalali/previousDay/index' {
  import { previousDay } from 'date-fns-jalali'
  export default previousDay
}

declare module 'date-fns-jalali/previousFriday/index' {
  import { previousFriday } from 'date-fns-jalali'
  export default previousFriday
}

declare module 'date-fns-jalali/previousMonday/index' {
  import { previousMonday } from 'date-fns-jalali'
  export default previousMonday
}

declare module 'date-fns-jalali/previousSaturday/index' {
  import { previousSaturday } from 'date-fns-jalali'
  export default previousSaturday
}

declare module 'date-fns-jalali/previousSunday/index' {
  import { previousSunday } from 'date-fns-jalali'
  export default previousSunday
}

declare module 'date-fns-jalali/previousThursday/index' {
  import { previousThursday } from 'date-fns-jalali'
  export default previousThursday
}

declare module 'date-fns-jalali/previousTuesday/index' {
  import { previousTuesday } from 'date-fns-jalali'
  export default previousTuesday
}

declare module 'date-fns-jalali/previousWednesday/index' {
  import { previousWednesday } from 'date-fns-jalali'
  export default previousWednesday
}

declare module 'date-fns-jalali/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns-jalali'
  export default quartersToMonths
}

declare module 'date-fns-jalali/quartersToYears/index' {
  import { quartersToYears } from 'date-fns-jalali'
  export default quartersToYears
}

declare module 'date-fns-jalali/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalali'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/secondsToHours/index' {
  import { secondsToHours } from 'date-fns-jalali'
  export default secondsToHours
}

declare module 'date-fns-jalali/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns-jalali'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns-jalali'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/set/index' {
  import { set } from 'date-fns-jalali'
  export default set
}

declare module 'date-fns-jalali/setDate/index' {
  import { setDate } from 'date-fns-jalali'
  export default setDate
}

declare module 'date-fns-jalali/setDay/index' {
  import { setDay } from 'date-fns-jalali'
  export default setDay
}

declare module 'date-fns-jalali/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalali'
  export default setDayOfYear
}

declare module 'date-fns-jalali/setDefaultOptions/index' {
  import { setDefaultOptions } from 'date-fns-jalali'
  export default setDefaultOptions
}

declare module 'date-fns-jalali/setHours/index' {
  import { setHours } from 'date-fns-jalali'
  export default setHours
}

declare module 'date-fns-jalali/setISODay/index' {
  import { setISODay } from 'date-fns-jalali'
  export default setISODay
}

declare module 'date-fns-jalali/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalali'
  export default setISOWeek
}

declare module 'date-fns-jalali/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalali'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalali'
  export default setMilliseconds
}

declare module 'date-fns-jalali/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalali'
  export default setMinutes
}

declare module 'date-fns-jalali/setMonth/index' {
  import { setMonth } from 'date-fns-jalali'
  export default setMonth
}

declare module 'date-fns-jalali/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalali'
  export default setQuarter
}

declare module 'date-fns-jalali/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalali'
  export default setSeconds
}

declare module 'date-fns-jalali/setWeek/index' {
  import { setWeek } from 'date-fns-jalali'
  export default setWeek
}

declare module 'date-fns-jalali/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalali'
  export default setWeekYear
}

declare module 'date-fns-jalali/setYear/index' {
  import { setYear } from 'date-fns-jalali'
  export default setYear
}

declare module 'date-fns-jalali/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalali'
  export default startOfDay
}

declare module 'date-fns-jalali/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalali'
  export default startOfDecade
}

declare module 'date-fns-jalali/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalali'
  export default startOfHour
}

declare module 'date-fns-jalali/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalali'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalali'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalali'
  export default startOfMinute
}

declare module 'date-fns-jalali/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalali'
  export default startOfMonth
}

declare module 'date-fns-jalali/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalali'
  export default startOfQuarter
}

declare module 'date-fns-jalali/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalali'
  export default startOfSecond
}

declare module 'date-fns-jalali/startOfToday/index' {
  import { startOfToday } from 'date-fns-jalali'
  export default startOfToday
}

declare module 'date-fns-jalali/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns-jalali'
  export default startOfTomorrow
}

declare module 'date-fns-jalali/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalali'
  export default startOfWeek
}

declare module 'date-fns-jalali/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalali'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalali'
  export default startOfYear
}

declare module 'date-fns-jalali/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns-jalali'
  export default startOfYesterday
}

declare module 'date-fns-jalali/sub/index' {
  import { sub } from 'date-fns-jalali'
  export default sub
}

declare module 'date-fns-jalali/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalali'
  export default subBusinessDays
}

declare module 'date-fns-jalali/subDays/index' {
  import { subDays } from 'date-fns-jalali'
  export default subDays
}

declare module 'date-fns-jalali/subHours/index' {
  import { subHours } from 'date-fns-jalali'
  export default subHours
}

declare module 'date-fns-jalali/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalali'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalali'
  export default subMilliseconds
}

declare module 'date-fns-jalali/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalali'
  export default subMinutes
}

declare module 'date-fns-jalali/subMonths/index' {
  import { subMonths } from 'date-fns-jalali'
  export default subMonths
}

declare module 'date-fns-jalali/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalali'
  export default subQuarters
}

declare module 'date-fns-jalali/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalali'
  export default subSeconds
}

declare module 'date-fns-jalali/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalali'
  export default subWeeks
}

declare module 'date-fns-jalali/subYears/index' {
  import { subYears } from 'date-fns-jalali'
  export default subYears
}

declare module 'date-fns-jalali/toDate/index' {
  import { toDate } from 'date-fns-jalali'
  export default toDate
}

declare module 'date-fns-jalali/weeksToDays/index' {
  import { weeksToDays } from 'date-fns-jalali'
  export default weeksToDays
}

declare module 'date-fns-jalali/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns-jalali'
  export default yearsToMonths
}

declare module 'date-fns-jalali/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns-jalali'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/add/index.js' {
  import { add } from 'date-fns-jalali'
  export default add
}

declare module 'date-fns-jalali/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalali'
  export default addBusinessDays
}

declare module 'date-fns-jalali/addDays/index.js' {
  import { addDays } from 'date-fns-jalali'
  export default addDays
}

declare module 'date-fns-jalali/addHours/index.js' {
  import { addHours } from 'date-fns-jalali'
  export default addHours
}

declare module 'date-fns-jalali/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalali'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalali'
  export default addMilliseconds
}

declare module 'date-fns-jalali/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalali'
  export default addMinutes
}

declare module 'date-fns-jalali/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalali'
  export default addMonths
}

declare module 'date-fns-jalali/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalali'
  export default addQuarters
}

declare module 'date-fns-jalali/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalali'
  export default addSeconds
}

declare module 'date-fns-jalali/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalali'
  export default addWeeks
}

declare module 'date-fns-jalali/addYears/index.js' {
  import { addYears } from 'date-fns-jalali'
  export default addYears
}

declare module 'date-fns-jalali/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalali'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/clamp/index.js' {
  import { clamp } from 'date-fns-jalali'
  export default clamp
}

declare module 'date-fns-jalali/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalali'
  export default closestIndexTo
}

declare module 'date-fns-jalali/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalali'
  export default closestTo
}

declare module 'date-fns-jalali/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalali'
  export default compareAsc
}

declare module 'date-fns-jalali/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalali'
  export default compareDesc
}

declare module 'date-fns-jalali/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns-jalali'
  export default daysToWeeks
}

declare module 'date-fns-jalali/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalali'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalali'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalali'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalali'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalali'
  export default differenceInDays
}

declare module 'date-fns-jalali/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalali'
  export default differenceInHours
}

declare module 'date-fns-jalali/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalali'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalali'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalali'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalali'
  export default differenceInMonths
}

declare module 'date-fns-jalali/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalali'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalali'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalali'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalali'
  export default differenceInYears
}

declare module 'date-fns-jalali/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalali'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns-jalali'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns-jalali'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalali'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns-jalali'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalali'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalali'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalali'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalali'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalali'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalali'
  export default endOfDay
}

declare module 'date-fns-jalali/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalali'
  export default endOfDecade
}

declare module 'date-fns-jalali/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalali'
  export default endOfHour
}

declare module 'date-fns-jalali/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalali'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalali'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalali'
  export default endOfMinute
}

declare module 'date-fns-jalali/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalali'
  export default endOfMonth
}

declare module 'date-fns-jalali/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalali'
  export default endOfQuarter
}

declare module 'date-fns-jalali/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalali'
  export default endOfSecond
}

declare module 'date-fns-jalali/endOfToday/index.js' {
  import { endOfToday } from 'date-fns-jalali'
  export default endOfToday
}

declare module 'date-fns-jalali/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns-jalali'
  export default endOfTomorrow
}

declare module 'date-fns-jalali/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalali'
  export default endOfWeek
}

declare module 'date-fns-jalali/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalali'
  export default endOfYear
}

declare module 'date-fns-jalali/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns-jalali'
  export default endOfYesterday
}

declare module 'date-fns-jalali/format/index.js' {
  import { format } from 'date-fns-jalali'
  export default format
}

declare module 'date-fns-jalali/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalali'
  export default formatDistance
}

declare module 'date-fns-jalali/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalali'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns-jalali'
  export default formatDistanceToNow
}

declare module 'date-fns-jalali/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns-jalali'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalali/formatDuration/index.js' {
  import { formatDuration } from 'date-fns-jalali'
  export default formatDuration
}

declare module 'date-fns-jalali/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalali'
  export default formatISO
}

declare module 'date-fns-jalali/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalali'
  export default formatISO9075
}

declare module 'date-fns-jalali/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalali'
  export default formatISODuration
}

declare module 'date-fns-jalali/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalali'
  export default formatRelative
}

declare module 'date-fns-jalali/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalali'
  export default formatRFC3339
}

declare module 'date-fns-jalali/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalali'
  export default formatRFC7231
}

declare module 'date-fns-jalali/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalali'
  export default fromUnixTime
}

declare module 'date-fns-jalali/getDate/index.js' {
  import { getDate } from 'date-fns-jalali'
  export default getDate
}

declare module 'date-fns-jalali/getDay/index.js' {
  import { getDay } from 'date-fns-jalali'
  export default getDay
}

declare module 'date-fns-jalali/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalali'
  export default getDayOfYear
}

declare module 'date-fns-jalali/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalali'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalali'
  export default getDaysInYear
}

declare module 'date-fns-jalali/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalali'
  export default getDecade
}

declare module 'date-fns-jalali/getDefaultOptions/index.js' {
  import { getDefaultOptions } from 'date-fns-jalali'
  export default getDefaultOptions
}

declare module 'date-fns-jalali/getHours/index.js' {
  import { getHours } from 'date-fns-jalali'
  export default getHours
}

declare module 'date-fns-jalali/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalali'
  export default getISODay
}

declare module 'date-fns-jalali/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalali'
  export default getISOWeek
}

declare module 'date-fns-jalali/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalali'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalali'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalali'
  export default getMilliseconds
}

declare module 'date-fns-jalali/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalali'
  export default getMinutes
}

declare module 'date-fns-jalali/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalali'
  export default getMonth
}

declare module 'date-fns-jalali/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalali'
  export default getQuarter
}

declare module 'date-fns-jalali/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalali'
  export default getSeconds
}

declare module 'date-fns-jalali/getTime/index.js' {
  import { getTime } from 'date-fns-jalali'
  export default getTime
}

declare module 'date-fns-jalali/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalali'
  export default getUnixTime
}

declare module 'date-fns-jalali/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalali'
  export default getWeek
}

declare module 'date-fns-jalali/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalali'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalali'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalali'
  export default getWeekYear
}

declare module 'date-fns-jalali/getYear/index.js' {
  import { getYear } from 'date-fns-jalali'
  export default getYear
}

declare module 'date-fns-jalali/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns-jalali'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns-jalali'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns-jalali'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalali'
  export default intervalToDuration
}

declare module 'date-fns-jalali/intlFormat/index.js' {
  import { intlFormat } from 'date-fns-jalali'
  export default intlFormat
}

declare module 'date-fns-jalali/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns-jalali'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalali'
  export default isAfter
}

declare module 'date-fns-jalali/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalali'
  export default isBefore
}

declare module 'date-fns-jalali/isDate/index.js' {
  import { isDate } from 'date-fns-jalali'
  export default isDate
}

declare module 'date-fns-jalali/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalali'
  export default isEqual
}

declare module 'date-fns-jalali/isExists/index.js' {
  import { isExists } from 'date-fns-jalali'
  export default isExists
}

declare module 'date-fns-jalali/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalali'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalali'
  export default isFriday
}

declare module 'date-fns-jalali/isFuture/index.js' {
  import { isFuture } from 'date-fns-jalali'
  export default isFuture
}

declare module 'date-fns-jalali/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalali'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalali'
  export default isLeapYear
}

declare module 'date-fns-jalali/isMatch/index.js' {
  import { isMatch } from 'date-fns-jalali'
  export default isMatch
}

declare module 'date-fns-jalali/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalali'
  export default isMonday
}

declare module 'date-fns-jalali/isPast/index.js' {
  import { isPast } from 'date-fns-jalali'
  export default isPast
}

declare module 'date-fns-jalali/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalali'
  export default isSameDay
}

declare module 'date-fns-jalali/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalali'
  export default isSameHour
}

declare module 'date-fns-jalali/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalali'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalali'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalali'
  export default isSameMinute
}

declare module 'date-fns-jalali/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalali'
  export default isSameMonth
}

declare module 'date-fns-jalali/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalali'
  export default isSameQuarter
}

declare module 'date-fns-jalali/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalali'
  export default isSameSecond
}

declare module 'date-fns-jalali/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalali'
  export default isSameWeek
}

declare module 'date-fns-jalali/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalali'
  export default isSameYear
}

declare module 'date-fns-jalali/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalali'
  export default isSaturday
}

declare module 'date-fns-jalali/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalali'
  export default isSunday
}

declare module 'date-fns-jalali/isThisHour/index.js' {
  import { isThisHour } from 'date-fns-jalali'
  export default isThisHour
}

declare module 'date-fns-jalali/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns-jalali'
  export default isThisISOWeek
}

declare module 'date-fns-jalali/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns-jalali'
  export default isThisMinute
}

declare module 'date-fns-jalali/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns-jalali'
  export default isThisMonth
}

declare module 'date-fns-jalali/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns-jalali'
  export default isThisQuarter
}

declare module 'date-fns-jalali/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns-jalali'
  export default isThisSecond
}

declare module 'date-fns-jalali/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns-jalali'
  export default isThisWeek
}

declare module 'date-fns-jalali/isThisYear/index.js' {
  import { isThisYear } from 'date-fns-jalali'
  export default isThisYear
}

declare module 'date-fns-jalali/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalali'
  export default isThursday
}

declare module 'date-fns-jalali/isToday/index.js' {
  import { isToday } from 'date-fns-jalali'
  export default isToday
}

declare module 'date-fns-jalali/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns-jalali'
  export default isTomorrow
}

declare module 'date-fns-jalali/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalali'
  export default isTuesday
}

declare module 'date-fns-jalali/isValid/index.js' {
  import { isValid } from 'date-fns-jalali'
  export default isValid
}

declare module 'date-fns-jalali/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalali'
  export default isWednesday
}

declare module 'date-fns-jalali/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalali'
  export default isWeekend
}

declare module 'date-fns-jalali/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalali'
  export default isWithinInterval
}

declare module 'date-fns-jalali/isYesterday/index.js' {
  import { isYesterday } from 'date-fns-jalali'
  export default isYesterday
}

declare module 'date-fns-jalali/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalali'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalali'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalali'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalali'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalali'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalali'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalali'
  export default lightFormat
}

declare module 'date-fns-jalali/max/index.js' {
  import { max } from 'date-fns-jalali'
  export default max
}

declare module 'date-fns-jalali/milliseconds/index.js' {
  import { milliseconds } from 'date-fns-jalali'
  export default milliseconds
}

declare module 'date-fns-jalali/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns-jalali'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns-jalali'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns-jalali'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/min/index.js' {
  import { min } from 'date-fns-jalali'
  export default min
}

declare module 'date-fns-jalali/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns-jalali'
  export default minutesToHours
}

declare module 'date-fns-jalali/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns-jalali'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns-jalali'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns-jalali'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns-jalali'
  export default monthsToYears
}

declare module 'date-fns-jalali/newDate/index.js' {
  import { newDate } from 'date-fns-jalali'
  export default newDate
}

declare module 'date-fns-jalali/nextDay/index.js' {
  import { nextDay } from 'date-fns-jalali'
  export default nextDay
}

declare module 'date-fns-jalali/nextFriday/index.js' {
  import { nextFriday } from 'date-fns-jalali'
  export default nextFriday
}

declare module 'date-fns-jalali/nextMonday/index.js' {
  import { nextMonday } from 'date-fns-jalali'
  export default nextMonday
}

declare module 'date-fns-jalali/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns-jalali'
  export default nextSaturday
}

declare module 'date-fns-jalali/nextSunday/index.js' {
  import { nextSunday } from 'date-fns-jalali'
  export default nextSunday
}

declare module 'date-fns-jalali/nextThursday/index.js' {
  import { nextThursday } from 'date-fns-jalali'
  export default nextThursday
}

declare module 'date-fns-jalali/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns-jalali'
  export default nextTuesday
}

declare module 'date-fns-jalali/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns-jalali'
  export default nextWednesday
}

declare module 'date-fns-jalali/parse/index.js' {
  import { parse } from 'date-fns-jalali'
  export default parse
}

declare module 'date-fns-jalali/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalali'
  export default parseISO
}

declare module 'date-fns-jalali/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalali'
  export default parseJSON
}

declare module 'date-fns-jalali/previousDay/index.js' {
  import { previousDay } from 'date-fns-jalali'
  export default previousDay
}

declare module 'date-fns-jalali/previousFriday/index.js' {
  import { previousFriday } from 'date-fns-jalali'
  export default previousFriday
}

declare module 'date-fns-jalali/previousMonday/index.js' {
  import { previousMonday } from 'date-fns-jalali'
  export default previousMonday
}

declare module 'date-fns-jalali/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns-jalali'
  export default previousSaturday
}

declare module 'date-fns-jalali/previousSunday/index.js' {
  import { previousSunday } from 'date-fns-jalali'
  export default previousSunday
}

declare module 'date-fns-jalali/previousThursday/index.js' {
  import { previousThursday } from 'date-fns-jalali'
  export default previousThursday
}

declare module 'date-fns-jalali/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns-jalali'
  export default previousTuesday
}

declare module 'date-fns-jalali/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns-jalali'
  export default previousWednesday
}

declare module 'date-fns-jalali/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns-jalali'
  export default quartersToMonths
}

declare module 'date-fns-jalali/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns-jalali'
  export default quartersToYears
}

declare module 'date-fns-jalali/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalali'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns-jalali'
  export default secondsToHours
}

declare module 'date-fns-jalali/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns-jalali'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns-jalali'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/set/index.js' {
  import { set } from 'date-fns-jalali'
  export default set
}

declare module 'date-fns-jalali/setDate/index.js' {
  import { setDate } from 'date-fns-jalali'
  export default setDate
}

declare module 'date-fns-jalali/setDay/index.js' {
  import { setDay } from 'date-fns-jalali'
  export default setDay
}

declare module 'date-fns-jalali/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalali'
  export default setDayOfYear
}

declare module 'date-fns-jalali/setDefaultOptions/index.js' {
  import { setDefaultOptions } from 'date-fns-jalali'
  export default setDefaultOptions
}

declare module 'date-fns-jalali/setHours/index.js' {
  import { setHours } from 'date-fns-jalali'
  export default setHours
}

declare module 'date-fns-jalali/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalali'
  export default setISODay
}

declare module 'date-fns-jalali/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalali'
  export default setISOWeek
}

declare module 'date-fns-jalali/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalali'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalali'
  export default setMilliseconds
}

declare module 'date-fns-jalali/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalali'
  export default setMinutes
}

declare module 'date-fns-jalali/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalali'
  export default setMonth
}

declare module 'date-fns-jalali/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalali'
  export default setQuarter
}

declare module 'date-fns-jalali/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalali'
  export default setSeconds
}

declare module 'date-fns-jalali/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalali'
  export default setWeek
}

declare module 'date-fns-jalali/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalali'
  export default setWeekYear
}

declare module 'date-fns-jalali/setYear/index.js' {
  import { setYear } from 'date-fns-jalali'
  export default setYear
}

declare module 'date-fns-jalali/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalali'
  export default startOfDay
}

declare module 'date-fns-jalali/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalali'
  export default startOfDecade
}

declare module 'date-fns-jalali/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalali'
  export default startOfHour
}

declare module 'date-fns-jalali/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalali'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalali'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalali'
  export default startOfMinute
}

declare module 'date-fns-jalali/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalali'
  export default startOfMonth
}

declare module 'date-fns-jalali/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalali'
  export default startOfQuarter
}

declare module 'date-fns-jalali/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalali'
  export default startOfSecond
}

declare module 'date-fns-jalali/startOfToday/index.js' {
  import { startOfToday } from 'date-fns-jalali'
  export default startOfToday
}

declare module 'date-fns-jalali/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns-jalali'
  export default startOfTomorrow
}

declare module 'date-fns-jalali/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalali'
  export default startOfWeek
}

declare module 'date-fns-jalali/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalali'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalali'
  export default startOfYear
}

declare module 'date-fns-jalali/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns-jalali'
  export default startOfYesterday
}

declare module 'date-fns-jalali/sub/index.js' {
  import { sub } from 'date-fns-jalali'
  export default sub
}

declare module 'date-fns-jalali/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalali'
  export default subBusinessDays
}

declare module 'date-fns-jalali/subDays/index.js' {
  import { subDays } from 'date-fns-jalali'
  export default subDays
}

declare module 'date-fns-jalali/subHours/index.js' {
  import { subHours } from 'date-fns-jalali'
  export default subHours
}

declare module 'date-fns-jalali/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalali'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalali'
  export default subMilliseconds
}

declare module 'date-fns-jalali/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalali'
  export default subMinutes
}

declare module 'date-fns-jalali/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalali'
  export default subMonths
}

declare module 'date-fns-jalali/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalali'
  export default subQuarters
}

declare module 'date-fns-jalali/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalali'
  export default subSeconds
}

declare module 'date-fns-jalali/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalali'
  export default subWeeks
}

declare module 'date-fns-jalali/subYears/index.js' {
  import { subYears } from 'date-fns-jalali'
  export default subYears
}

declare module 'date-fns-jalali/toDate/index.js' {
  import { toDate } from 'date-fns-jalali'
  export default toDate
}

declare module 'date-fns-jalali/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns-jalali'
  export default weeksToDays
}

declare module 'date-fns-jalali/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns-jalali'
  export default yearsToMonths
}

declare module 'date-fns-jalali/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns-jalali'
  export default yearsToQuarters
}

// FP Functions

declare module 'date-fns-jalali/fp' {
  import {
    CurriedFn1,
    CurriedFn2,
    CurriedFn3,
    CurriedFn4,
    Day,
    Duration,
    Interval,
    Locale,
  } from 'date-fns-jalali'
  const add: CurriedFn2<Duration, Date | number, Date>
  namespace add {}

  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<
    {
      inclusive?: boolean
    },
    Interval,
    Interval,
    boolean
  >
  namespace areIntervalsOverlappingWithOptions {}

  const clamp: CurriedFn2<Interval, Date | number, Date>
  namespace clamp {}

  const closestIndexTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    number | undefined
  >
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    Date | undefined
  >
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const daysToWeeks: CurriedFn1<number, number>
  namespace daysToWeeks {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInHoursWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInHoursWithOptions {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMinutesWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMinutesWithOptions {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInQuartersWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInQuartersWithOptions {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInSecondsWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInSecondsWithOptions {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInWeeksWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInWeeksWithOptions {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachDayOfIntervalWithOptions {}

  const eachHourOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachHourOfInterval {}

  const eachHourOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachHourOfIntervalWithOptions {}

  const eachMinuteOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMinuteOfInterval {}

  const eachMinuteOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachMinuteOfIntervalWithOptions {}

  const eachMonthOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMonthOfInterval {}

  const eachQuarterOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachQuarterOfInterval {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Interval,
    Date[]
  >
  namespace eachWeekOfIntervalWithOptions {}

  const eachYearOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachYearOfInterval {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    {
      locale?: Locale
      roundingMethod?: 'floor' | 'ceil' | 'round'
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      addSuffix?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    {
      locale?: Locale
      addSuffix?: boolean
      includeSeconds?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatDuration: CurriedFn1<Duration, string>
  namespace formatDuration {}

  const formatDurationWithOptions: CurriedFn2<
    {
      locale?: Locale
      delimiter?: string
      zero?: boolean
      format?: string[]
    },
    Duration,
    string
  >
  namespace formatDurationWithOptions {}

  const formatISO: CurriedFn1<Date | number, string>
  namespace formatISO {}

  const formatISO9075: CurriedFn1<Date | number, string>
  namespace formatISO9075 {}

  const formatISO9075WithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISO9075WithOptions {}

  const formatISODuration: CurriedFn1<Duration, string>
  namespace formatISODuration {}

  const formatISOWithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISOWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatRFC3339: CurriedFn1<Date | number, string>
  namespace formatRFC3339 {}

  const formatRFC3339WithOptions: CurriedFn2<
    {
      fractionDigits?: 0 | 1 | 2 | 3
    },
    Date | number,
    string
  >
  namespace formatRFC3339WithOptions {}

  const formatRFC7231: CurriedFn1<Date | number, string>
  namespace formatRFC7231 {}

  const formatWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: number
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    Date | number,
    string
  >
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, 0 | 1 | 2 | 3 | 4 | 5 | 6>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const hoursToMilliseconds: CurriedFn1<number, number>
  namespace hoursToMilliseconds {}

  const hoursToMinutes: CurriedFn1<number, number>
  namespace hoursToMinutes {}

  const hoursToSeconds: CurriedFn1<number, number>
  namespace hoursToSeconds {}

  const intervalToDuration: CurriedFn1<Interval, Duration>
  namespace intervalToDuration {}

  const intlFormat: CurriedFn3<
    {
      locale?: string | string[]
    },
    {
      timeZone?: string
      hour12?: boolean
      formatMatcher?: 'basic' | 'best fit'
      timeZoneName?: 'short' | 'long'
      second?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      day?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      era?: 'narrow' | 'short' | 'long'
      weekday?: 'narrow' | 'short' | 'long'
      localeMatcher?: 'lookup' | 'best fit'
    },
    Date | number,
    string
  >
  namespace intlFormat {}

  const intlFormatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace intlFormatDistance {}

  const intlFormatDistanceWithOptions: CurriedFn3<
    {
      style?: string
      numeric?: string
      localeMatcher?: string
      locale?: string | string[]
      unit?: string
    },
    Date | number,
    Date | number,
    string
  >
  namespace intlFormatDistanceWithOptions {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isExists: CurriedFn3<number, number, number, boolean>
  namespace isExists {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMatch: CurriedFn2<string, string, boolean>
  namespace isMatch {}

  const isMatchWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    string,
    boolean
  >
  namespace isMatchWithOptions {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const milliseconds: CurriedFn1<Duration, number>
  namespace milliseconds {}

  const millisecondsToHours: CurriedFn1<number, number>
  namespace millisecondsToHours {}

  const millisecondsToMinutes: CurriedFn1<number, number>
  namespace millisecondsToMinutes {}

  const millisecondsToSeconds: CurriedFn1<number, number>
  namespace millisecondsToSeconds {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const minutesToHours: CurriedFn1<number, number>
  namespace minutesToHours {}

  const minutesToMilliseconds: CurriedFn1<number, number>
  namespace minutesToMilliseconds {}

  const minutesToSeconds: CurriedFn1<number, number>
  namespace minutesToSeconds {}

  const monthsToQuarters: CurriedFn1<number, number>
  namespace monthsToQuarters {}

  const monthsToYears: CurriedFn1<number, number>
  namespace monthsToYears {}

  const nextDay: CurriedFn2<Day, Date | number, Date>
  namespace nextDay {}

  const nextFriday: CurriedFn1<Date | number, Date>
  namespace nextFriday {}

  const nextMonday: CurriedFn1<Date | number, Date>
  namespace nextMonday {}

  const nextSaturday: CurriedFn1<Date | number, Date>
  namespace nextSaturday {}

  const nextSunday: CurriedFn1<Date | number, Date>
  namespace nextSunday {}

  const nextThursday: CurriedFn1<Date | number, Date>
  namespace nextThursday {}

  const nextTuesday: CurriedFn1<Date | number, Date>
  namespace nextTuesday {}

  const nextWednesday: CurriedFn1<Date | number, Date>
  namespace nextWednesday {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    string,
    Date
  >
  namespace parseISOWithOptions {}

  const parseJSON: CurriedFn1<string | number | Date, Date>
  namespace parseJSON {}

  const parseWithOptions: CurriedFn4<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const previousDay: CurriedFn2<number, Date | number, Date>
  namespace previousDay {}

  const previousFriday: CurriedFn1<Date | number, Date>
  namespace previousFriday {}

  const previousMonday: CurriedFn1<Date | number, Date>
  namespace previousMonday {}

  const previousSaturday: CurriedFn1<Date | number, Date>
  namespace previousSaturday {}

  const previousSunday: CurriedFn1<Date | number, Date>
  namespace previousSunday {}

  const previousThursday: CurriedFn1<Date | number, Date>
  namespace previousThursday {}

  const previousTuesday: CurriedFn1<Date | number, Date>
  namespace previousTuesday {}

  const previousWednesday: CurriedFn1<Date | number, Date>
  namespace previousWednesday {}

  const quartersToMonths: CurriedFn1<number, number>
  namespace quartersToMonths {}

  const quartersToYears: CurriedFn1<number, number>
  namespace quartersToYears {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    {
      roundingMethod?: string
      nearestTo?: number
    },
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const secondsToHours: CurriedFn1<number, number>
  namespace secondsToHours {}

  const secondsToMilliseconds: CurriedFn1<number, number>
  namespace secondsToMilliseconds {}

  const secondsToMinutes: CurriedFn1<number, number>
  namespace secondsToMinutes {}

  const set: CurriedFn2<
    {
      milliseconds?: number
      seconds?: number
      minutes?: number
      hours?: number
      date?: number
      month?: number
      year?: number
    },
    Date | number,
    Date
  >
  namespace set {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const sub: CurriedFn2<Duration, Date | number, Date>
  namespace sub {}

  const subBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace subBusinessDays {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const weeksToDays: CurriedFn1<number, number>
  namespace weeksToDays {}

  const yearsToMonths: CurriedFn1<number, number>
  namespace yearsToMonths {}

  const yearsToQuarters: CurriedFn1<number, number>
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns-jalali/fp/add' {
  import { add } from 'date-fns-jalali/fp'
  export default add
}

declare module 'date-fns-jalali/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalali/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalali/fp/addDays' {
  import { addDays } from 'date-fns-jalali/fp'
  export default addDays
}

declare module 'date-fns-jalali/fp/addHours' {
  import { addHours } from 'date-fns-jalali/fp'
  export default addHours
}

declare module 'date-fns-jalali/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalali/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalali/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalali/fp/addMinutes' {
  import { addMinutes } from 'date-fns-jalali/fp'
  export default addMinutes
}

declare module 'date-fns-jalali/fp/addMonths' {
  import { addMonths } from 'date-fns-jalali/fp'
  export default addMonths
}

declare module 'date-fns-jalali/fp/addQuarters' {
  import { addQuarters } from 'date-fns-jalali/fp'
  export default addQuarters
}

declare module 'date-fns-jalali/fp/addSeconds' {
  import { addSeconds } from 'date-fns-jalali/fp'
  export default addSeconds
}

declare module 'date-fns-jalali/fp/addWeeks' {
  import { addWeeks } from 'date-fns-jalali/fp'
  export default addWeeks
}

declare module 'date-fns-jalali/fp/addYears' {
  import { addYears } from 'date-fns-jalali/fp'
  export default addYears
}

declare module 'date-fns-jalali/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/fp/areIntervalsOverlappingWithOptions' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalali/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalali/fp/clamp' {
  import { clamp } from 'date-fns-jalali/fp'
  export default clamp
}

declare module 'date-fns-jalali/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalali/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalali/fp/closestTo' {
  import { closestTo } from 'date-fns-jalali/fp'
  export default closestTo
}

declare module 'date-fns-jalali/fp/compareAsc' {
  import { compareAsc } from 'date-fns-jalali/fp'
  export default compareAsc
}

declare module 'date-fns-jalali/fp/compareDesc' {
  import { compareDesc } from 'date-fns-jalali/fp'
  export default compareDesc
}

declare module 'date-fns-jalali/fp/daysToWeeks' {
  import { daysToWeeks } from 'date-fns-jalali/fp'
  export default daysToWeeks
}

declare module 'date-fns-jalali/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalali/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalali/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalali/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalali/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalali/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalali/fp'
  export default differenceInDays
}

declare module 'date-fns-jalali/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalali/fp'
  export default differenceInHours
}

declare module 'date-fns-jalali/fp/differenceInHoursWithOptions' {
  import { differenceInHoursWithOptions } from 'date-fns-jalali/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns-jalali/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalali/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalali/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/fp/differenceInMinutesWithOptions' {
  import { differenceInMinutesWithOptions } from 'date-fns-jalali/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns-jalali/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalali/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalali/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalali/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/fp/differenceInQuartersWithOptions' {
  import { differenceInQuartersWithOptions } from 'date-fns-jalali/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns-jalali/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalali/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/fp/differenceInSecondsWithOptions' {
  import { differenceInSecondsWithOptions } from 'date-fns-jalali/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns-jalali/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalali/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/fp/differenceInWeeksWithOptions' {
  import { differenceInWeeksWithOptions } from 'date-fns-jalali/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns-jalali/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalali/fp'
  export default differenceInYears
}

declare module 'date-fns-jalali/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalali/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns-jalali/fp'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/fp/eachHourOfIntervalWithOptions' {
  import { eachHourOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/fp/eachMinuteOfIntervalWithOptions' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalali/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/fp/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalali/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalali/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalali/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/fp/endOfDay' {
  import { endOfDay } from 'date-fns-jalali/fp'
  export default endOfDay
}

declare module 'date-fns-jalali/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalali/fp'
  export default endOfDecade
}

declare module 'date-fns-jalali/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns-jalali/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalali/fp/endOfHour' {
  import { endOfHour } from 'date-fns-jalali/fp'
  export default endOfHour
}

declare module 'date-fns-jalali/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalali/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalali/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalali/fp'
  export default endOfMinute
}

declare module 'date-fns-jalali/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalali/fp'
  export default endOfMonth
}

declare module 'date-fns-jalali/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalali/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalali/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalali/fp'
  export default endOfSecond
}

declare module 'date-fns-jalali/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalali/fp'
  export default endOfWeek
}

declare module 'date-fns-jalali/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/endOfYear' {
  import { endOfYear } from 'date-fns-jalali/fp'
  export default endOfYear
}

declare module 'date-fns-jalali/fp/format' {
  import { format } from 'date-fns-jalali/fp'
  export default format
}

declare module 'date-fns-jalali/fp/formatDistance' {
  import { formatDistance } from 'date-fns-jalali/fp'
  export default formatDistance
}

declare module 'date-fns-jalali/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalali/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalali/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalali/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns-jalali/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalali/fp/formatDuration' {
  import { formatDuration } from 'date-fns-jalali/fp'
  export default formatDuration
}

declare module 'date-fns-jalali/fp/formatDurationWithOptions' {
  import { formatDurationWithOptions } from 'date-fns-jalali/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns-jalali/fp/formatISO' {
  import { formatISO } from 'date-fns-jalali/fp'
  export default formatISO
}

declare module 'date-fns-jalali/fp/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalali/fp'
  export default formatISO9075
}

declare module 'date-fns-jalali/fp/formatISO9075WithOptions' {
  import { formatISO9075WithOptions } from 'date-fns-jalali/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalali/fp/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalali/fp'
  export default formatISODuration
}

declare module 'date-fns-jalali/fp/formatISOWithOptions' {
  import { formatISOWithOptions } from 'date-fns-jalali/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalali/fp/formatRelative' {
  import { formatRelative } from 'date-fns-jalali/fp'
  export default formatRelative
}

declare module 'date-fns-jalali/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns-jalali/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalali/fp/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalali/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalali/fp/formatRFC3339WithOptions' {
  import { formatRFC3339WithOptions } from 'date-fns-jalali/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalali/fp/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalali/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalali/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns-jalali/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalali/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalali/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalali/fp/getDate' {
  import { getDate } from 'date-fns-jalali/fp'
  export default getDate
}

declare module 'date-fns-jalali/fp/getDay' {
  import { getDay } from 'date-fns-jalali/fp'
  export default getDay
}

declare module 'date-fns-jalali/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalali/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalali/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalali/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalali/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalali/fp/getDecade' {
  import { getDecade } from 'date-fns-jalali/fp'
  export default getDecade
}

declare module 'date-fns-jalali/fp/getHours' {
  import { getHours } from 'date-fns-jalali/fp'
  export default getHours
}

declare module 'date-fns-jalali/fp/getISODay' {
  import { getISODay } from 'date-fns-jalali/fp'
  export default getISODay
}

declare module 'date-fns-jalali/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalali/fp'
  export default getISOWeek
}

declare module 'date-fns-jalali/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalali/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalali/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalali/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalali/fp/getMinutes' {
  import { getMinutes } from 'date-fns-jalali/fp'
  export default getMinutes
}

declare module 'date-fns-jalali/fp/getMonth' {
  import { getMonth } from 'date-fns-jalali/fp'
  export default getMonth
}

declare module 'date-fns-jalali/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/fp/getQuarter' {
  import { getQuarter } from 'date-fns-jalali/fp'
  export default getQuarter
}

declare module 'date-fns-jalali/fp/getSeconds' {
  import { getSeconds } from 'date-fns-jalali/fp'
  export default getSeconds
}

declare module 'date-fns-jalali/fp/getTime' {
  import { getTime } from 'date-fns-jalali/fp'
  export default getTime
}

declare module 'date-fns-jalali/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalali/fp'
  export default getUnixTime
}

declare module 'date-fns-jalali/fp/getWeek' {
  import { getWeek } from 'date-fns-jalali/fp'
  export default getWeek
}

declare module 'date-fns-jalali/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalali/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalali/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalali/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalali/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalali/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalali/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns-jalali/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalali/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalali/fp'
  export default getWeekYear
}

declare module 'date-fns-jalali/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/getYear' {
  import { getYear } from 'date-fns-jalali/fp'
  export default getYear
}

declare module 'date-fns-jalali/fp/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns-jalali/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/fp/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns-jalali/fp'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/fp/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns-jalali/fp'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/fp/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalali/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalali/fp/intlFormat' {
  import { intlFormat } from 'date-fns-jalali/fp'
  export default intlFormat
}

declare module 'date-fns-jalali/fp/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns-jalali/fp'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/fp/intlFormatDistanceWithOptions' {
  import { intlFormatDistanceWithOptions } from 'date-fns-jalali/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns-jalali/fp/isAfter' {
  import { isAfter } from 'date-fns-jalali/fp'
  export default isAfter
}

declare module 'date-fns-jalali/fp/isBefore' {
  import { isBefore } from 'date-fns-jalali/fp'
  export default isBefore
}

declare module 'date-fns-jalali/fp/isDate' {
  import { isDate } from 'date-fns-jalali/fp'
  export default isDate
}

declare module 'date-fns-jalali/fp/isEqual' {
  import { isEqual } from 'date-fns-jalali/fp'
  export default isEqual
}

declare module 'date-fns-jalali/fp/isExists' {
  import { isExists } from 'date-fns-jalali/fp'
  export default isExists
}

declare module 'date-fns-jalali/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/fp/isFriday' {
  import { isFriday } from 'date-fns-jalali/fp'
  export default isFriday
}

declare module 'date-fns-jalali/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalali/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalali/fp'
  export default isLeapYear
}

declare module 'date-fns-jalali/fp/isMatch' {
  import { isMatch } from 'date-fns-jalali/fp'
  export default isMatch
}

declare module 'date-fns-jalali/fp/isMatchWithOptions' {
  import { isMatchWithOptions } from 'date-fns-jalali/fp'
  export default isMatchWithOptions
}

declare module 'date-fns-jalali/fp/isMonday' {
  import { isMonday } from 'date-fns-jalali/fp'
  export default isMonday
}

declare module 'date-fns-jalali/fp/isSameDay' {
  import { isSameDay } from 'date-fns-jalali/fp'
  export default isSameDay
}

declare module 'date-fns-jalali/fp/isSameHour' {
  import { isSameHour } from 'date-fns-jalali/fp'
  export default isSameHour
}

declare module 'date-fns-jalali/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalali/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalali/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalali/fp'
  export default isSameMinute
}

declare module 'date-fns-jalali/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalali/fp'
  export default isSameMonth
}

declare module 'date-fns-jalali/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalali/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalali/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalali/fp'
  export default isSameSecond
}

declare module 'date-fns-jalali/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalali/fp'
  export default isSameWeek
}

declare module 'date-fns-jalali/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns-jalali/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalali/fp/isSameYear' {
  import { isSameYear } from 'date-fns-jalali/fp'
  export default isSameYear
}

declare module 'date-fns-jalali/fp/isSaturday' {
  import { isSaturday } from 'date-fns-jalali/fp'
  export default isSaturday
}

declare module 'date-fns-jalali/fp/isSunday' {
  import { isSunday } from 'date-fns-jalali/fp'
  export default isSunday
}

declare module 'date-fns-jalali/fp/isThursday' {
  import { isThursday } from 'date-fns-jalali/fp'
  export default isThursday
}

declare module 'date-fns-jalali/fp/isTuesday' {
  import { isTuesday } from 'date-fns-jalali/fp'
  export default isTuesday
}

declare module 'date-fns-jalali/fp/isValid' {
  import { isValid } from 'date-fns-jalali/fp'
  export default isValid
}

declare module 'date-fns-jalali/fp/isWednesday' {
  import { isWednesday } from 'date-fns-jalali/fp'
  export default isWednesday
}

declare module 'date-fns-jalali/fp/isWeekend' {
  import { isWeekend } from 'date-fns-jalali/fp'
  export default isWeekend
}

declare module 'date-fns-jalali/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalali/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalali/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalali/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalali/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalali/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalali/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalali/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalali/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalali/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/fp/lightFormat' {
  import { lightFormat } from 'date-fns-jalali/fp'
  export default lightFormat
}

declare module 'date-fns-jalali/fp/max' {
  import { max } from 'date-fns-jalali/fp'
  export default max
}

declare module 'date-fns-jalali/fp/milliseconds' {
  import { milliseconds } from 'date-fns-jalali/fp'
  export default milliseconds
}

declare module 'date-fns-jalali/fp/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns-jalali/fp'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/fp/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns-jalali/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/fp/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns-jalali/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/fp/min' {
  import { min } from 'date-fns-jalali/fp'
  export default min
}

declare module 'date-fns-jalali/fp/minutesToHours' {
  import { minutesToHours } from 'date-fns-jalali/fp'
  export default minutesToHours
}

declare module 'date-fns-jalali/fp/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns-jalali/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/fp/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns-jalali/fp'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/fp/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns-jalali/fp'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/fp/monthsToYears' {
  import { monthsToYears } from 'date-fns-jalali/fp'
  export default monthsToYears
}

declare module 'date-fns-jalali/fp/nextDay' {
  import { nextDay } from 'date-fns-jalali/fp'
  export default nextDay
}

declare module 'date-fns-jalali/fp/nextFriday' {
  import { nextFriday } from 'date-fns-jalali/fp'
  export default nextFriday
}

declare module 'date-fns-jalali/fp/nextMonday' {
  import { nextMonday } from 'date-fns-jalali/fp'
  export default nextMonday
}

declare module 'date-fns-jalali/fp/nextSaturday' {
  import { nextSaturday } from 'date-fns-jalali/fp'
  export default nextSaturday
}

declare module 'date-fns-jalali/fp/nextSunday' {
  import { nextSunday } from 'date-fns-jalali/fp'
  export default nextSunday
}

declare module 'date-fns-jalali/fp/nextThursday' {
  import { nextThursday } from 'date-fns-jalali/fp'
  export default nextThursday
}

declare module 'date-fns-jalali/fp/nextTuesday' {
  import { nextTuesday } from 'date-fns-jalali/fp'
  export default nextTuesday
}

declare module 'date-fns-jalali/fp/nextWednesday' {
  import { nextWednesday } from 'date-fns-jalali/fp'
  export default nextWednesday
}

declare module 'date-fns-jalali/fp/parse' {
  import { parse } from 'date-fns-jalali/fp'
  export default parse
}

declare module 'date-fns-jalali/fp/parseISO' {
  import { parseISO } from 'date-fns-jalali/fp'
  export default parseISO
}

declare module 'date-fns-jalali/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns-jalali/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalali/fp/parseJSON' {
  import { parseJSON } from 'date-fns-jalali/fp'
  export default parseJSON
}

declare module 'date-fns-jalali/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns-jalali/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalali/fp/previousDay' {
  import { previousDay } from 'date-fns-jalali/fp'
  export default previousDay
}

declare module 'date-fns-jalali/fp/previousFriday' {
  import { previousFriday } from 'date-fns-jalali/fp'
  export default previousFriday
}

declare module 'date-fns-jalali/fp/previousMonday' {
  import { previousMonday } from 'date-fns-jalali/fp'
  export default previousMonday
}

declare module 'date-fns-jalali/fp/previousSaturday' {
  import { previousSaturday } from 'date-fns-jalali/fp'
  export default previousSaturday
}

declare module 'date-fns-jalali/fp/previousSunday' {
  import { previousSunday } from 'date-fns-jalali/fp'
  export default previousSunday
}

declare module 'date-fns-jalali/fp/previousThursday' {
  import { previousThursday } from 'date-fns-jalali/fp'
  export default previousThursday
}

declare module 'date-fns-jalali/fp/previousTuesday' {
  import { previousTuesday } from 'date-fns-jalali/fp'
  export default previousTuesday
}

declare module 'date-fns-jalali/fp/previousWednesday' {
  import { previousWednesday } from 'date-fns-jalali/fp'
  export default previousWednesday
}

declare module 'date-fns-jalali/fp/quartersToMonths' {
  import { quartersToMonths } from 'date-fns-jalali/fp'
  export default quartersToMonths
}

declare module 'date-fns-jalali/fp/quartersToYears' {
  import { quartersToYears } from 'date-fns-jalali/fp'
  export default quartersToYears
}

declare module 'date-fns-jalali/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalali/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalali/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalali/fp/secondsToHours' {
  import { secondsToHours } from 'date-fns-jalali/fp'
  export default secondsToHours
}

declare module 'date-fns-jalali/fp/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns-jalali/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/fp/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns-jalali/fp'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/fp/set' {
  import { set } from 'date-fns-jalali/fp'
  export default set
}

declare module 'date-fns-jalali/fp/setDate' {
  import { setDate } from 'date-fns-jalali/fp'
  export default setDate
}

declare module 'date-fns-jalali/fp/setDay' {
  import { setDay } from 'date-fns-jalali/fp'
  export default setDay
}

declare module 'date-fns-jalali/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalali/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalali/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns-jalali/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalali/fp/setHours' {
  import { setHours } from 'date-fns-jalali/fp'
  export default setHours
}

declare module 'date-fns-jalali/fp/setISODay' {
  import { setISODay } from 'date-fns-jalali/fp'
  export default setISODay
}

declare module 'date-fns-jalali/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalali/fp'
  export default setISOWeek
}

declare module 'date-fns-jalali/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalali/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalali/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalali/fp/setMinutes' {
  import { setMinutes } from 'date-fns-jalali/fp'
  export default setMinutes
}

declare module 'date-fns-jalali/fp/setMonth' {
  import { setMonth } from 'date-fns-jalali/fp'
  export default setMonth
}

declare module 'date-fns-jalali/fp/setQuarter' {
  import { setQuarter } from 'date-fns-jalali/fp'
  export default setQuarter
}

declare module 'date-fns-jalali/fp/setSeconds' {
  import { setSeconds } from 'date-fns-jalali/fp'
  export default setSeconds
}

declare module 'date-fns-jalali/fp/setWeek' {
  import { setWeek } from 'date-fns-jalali/fp'
  export default setWeek
}

declare module 'date-fns-jalali/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns-jalali/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalali/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalali/fp'
  export default setWeekYear
}

declare module 'date-fns-jalali/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/setYear' {
  import { setYear } from 'date-fns-jalali/fp'
  export default setYear
}

declare module 'date-fns-jalali/fp/startOfDay' {
  import { startOfDay } from 'date-fns-jalali/fp'
  export default startOfDay
}

declare module 'date-fns-jalali/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalali/fp'
  export default startOfDecade
}

declare module 'date-fns-jalali/fp/startOfHour' {
  import { startOfHour } from 'date-fns-jalali/fp'
  export default startOfHour
}

declare module 'date-fns-jalali/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalali/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalali/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalali/fp'
  export default startOfMinute
}

declare module 'date-fns-jalali/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalali/fp'
  export default startOfMonth
}

declare module 'date-fns-jalali/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalali/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalali/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalali/fp'
  export default startOfSecond
}

declare module 'date-fns-jalali/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalali/fp'
  export default startOfWeek
}

declare module 'date-fns-jalali/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalali/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/startOfYear' {
  import { startOfYear } from 'date-fns-jalali/fp'
  export default startOfYear
}

declare module 'date-fns-jalali/fp/sub' {
  import { sub } from 'date-fns-jalali/fp'
  export default sub
}

declare module 'date-fns-jalali/fp/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalali/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalali/fp/subDays' {
  import { subDays } from 'date-fns-jalali/fp'
  export default subDays
}

declare module 'date-fns-jalali/fp/subHours' {
  import { subHours } from 'date-fns-jalali/fp'
  export default subHours
}

declare module 'date-fns-jalali/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalali/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalali/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalali/fp/subMinutes' {
  import { subMinutes } from 'date-fns-jalali/fp'
  export default subMinutes
}

declare module 'date-fns-jalali/fp/subMonths' {
  import { subMonths } from 'date-fns-jalali/fp'
  export default subMonths
}

declare module 'date-fns-jalali/fp/subQuarters' {
  import { subQuarters } from 'date-fns-jalali/fp'
  export default subQuarters
}

declare module 'date-fns-jalali/fp/subSeconds' {
  import { subSeconds } from 'date-fns-jalali/fp'
  export default subSeconds
}

declare module 'date-fns-jalali/fp/subWeeks' {
  import { subWeeks } from 'date-fns-jalali/fp'
  export default subWeeks
}

declare module 'date-fns-jalali/fp/subYears' {
  import { subYears } from 'date-fns-jalali/fp'
  export default subYears
}

declare module 'date-fns-jalali/fp/toDate' {
  import { toDate } from 'date-fns-jalali/fp'
  export default toDate
}

declare module 'date-fns-jalali/fp/weeksToDays' {
  import { weeksToDays } from 'date-fns-jalali/fp'
  export default weeksToDays
}

declare module 'date-fns-jalali/fp/yearsToMonths' {
  import { yearsToMonths } from 'date-fns-jalali/fp'
  export default yearsToMonths
}

declare module 'date-fns-jalali/fp/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns-jalali/fp'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/fp/add/index' {
  import { add } from 'date-fns-jalali/fp'
  export default add
}

declare module 'date-fns-jalali/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalali/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalali/fp/addDays/index' {
  import { addDays } from 'date-fns-jalali/fp'
  export default addDays
}

declare module 'date-fns-jalali/fp/addHours/index' {
  import { addHours } from 'date-fns-jalali/fp'
  export default addHours
}

declare module 'date-fns-jalali/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalali/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalali/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalali/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalali/fp'
  export default addMinutes
}

declare module 'date-fns-jalali/fp/addMonths/index' {
  import { addMonths } from 'date-fns-jalali/fp'
  export default addMonths
}

declare module 'date-fns-jalali/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalali/fp'
  export default addQuarters
}

declare module 'date-fns-jalali/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalali/fp'
  export default addSeconds
}

declare module 'date-fns-jalali/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalali/fp'
  export default addWeeks
}

declare module 'date-fns-jalali/fp/addYears/index' {
  import { addYears } from 'date-fns-jalali/fp'
  export default addYears
}

declare module 'date-fns-jalali/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/fp/areIntervalsOverlappingWithOptions/index' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalali/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalali/fp/clamp/index' {
  import { clamp } from 'date-fns-jalali/fp'
  export default clamp
}

declare module 'date-fns-jalali/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalali/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalali/fp/closestTo/index' {
  import { closestTo } from 'date-fns-jalali/fp'
  export default closestTo
}

declare module 'date-fns-jalali/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalali/fp'
  export default compareAsc
}

declare module 'date-fns-jalali/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalali/fp'
  export default compareDesc
}

declare module 'date-fns-jalali/fp/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns-jalali/fp'
  export default daysToWeeks
}

declare module 'date-fns-jalali/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalali/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalali/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalali/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalali/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalali/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalali/fp'
  export default differenceInDays
}

declare module 'date-fns-jalali/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalali/fp'
  export default differenceInHours
}

declare module 'date-fns-jalali/fp/differenceInHoursWithOptions/index' {
  import { differenceInHoursWithOptions } from 'date-fns-jalali/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns-jalali/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalali/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalali/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/fp/differenceInMinutesWithOptions/index' {
  import { differenceInMinutesWithOptions } from 'date-fns-jalali/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns-jalali/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalali/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalali/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalali/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/fp/differenceInQuartersWithOptions/index' {
  import { differenceInQuartersWithOptions } from 'date-fns-jalali/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns-jalali/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalali/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/fp/differenceInSecondsWithOptions/index' {
  import { differenceInSecondsWithOptions } from 'date-fns-jalali/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns-jalali/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalali/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/fp/differenceInWeeksWithOptions/index' {
  import { differenceInWeeksWithOptions } from 'date-fns-jalali/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns-jalali/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalali/fp'
  export default differenceInYears
}

declare module 'date-fns-jalali/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalali/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns-jalali/fp'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/fp/eachHourOfIntervalWithOptions/index' {
  import { eachHourOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/fp/eachMinuteOfIntervalWithOptions/index' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalali/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/fp/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalali/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalali/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalali/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalali/fp'
  export default endOfDay
}

declare module 'date-fns-jalali/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalali/fp'
  export default endOfDecade
}

declare module 'date-fns-jalali/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns-jalali/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalali/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalali/fp'
  export default endOfHour
}

declare module 'date-fns-jalali/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalali/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalali/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalali/fp'
  export default endOfMinute
}

declare module 'date-fns-jalali/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalali/fp'
  export default endOfMonth
}

declare module 'date-fns-jalali/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalali/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalali/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalali/fp'
  export default endOfSecond
}

declare module 'date-fns-jalali/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalali/fp'
  export default endOfWeek
}

declare module 'date-fns-jalali/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalali/fp'
  export default endOfYear
}

declare module 'date-fns-jalali/fp/format/index' {
  import { format } from 'date-fns-jalali/fp'
  export default format
}

declare module 'date-fns-jalali/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalali/fp'
  export default formatDistance
}

declare module 'date-fns-jalali/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalali/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalali/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalali/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns-jalali/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalali/fp/formatDuration/index' {
  import { formatDuration } from 'date-fns-jalali/fp'
  export default formatDuration
}

declare module 'date-fns-jalali/fp/formatDurationWithOptions/index' {
  import { formatDurationWithOptions } from 'date-fns-jalali/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns-jalali/fp/formatISO/index' {
  import { formatISO } from 'date-fns-jalali/fp'
  export default formatISO
}

declare module 'date-fns-jalali/fp/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalali/fp'
  export default formatISO9075
}

declare module 'date-fns-jalali/fp/formatISO9075WithOptions/index' {
  import { formatISO9075WithOptions } from 'date-fns-jalali/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalali/fp/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalali/fp'
  export default formatISODuration
}

declare module 'date-fns-jalali/fp/formatISOWithOptions/index' {
  import { formatISOWithOptions } from 'date-fns-jalali/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalali/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalali/fp'
  export default formatRelative
}

declare module 'date-fns-jalali/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns-jalali/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalali/fp/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalali/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalali/fp/formatRFC3339WithOptions/index' {
  import { formatRFC3339WithOptions } from 'date-fns-jalali/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalali/fp/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalali/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalali/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns-jalali/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalali/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalali/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalali/fp/getDate/index' {
  import { getDate } from 'date-fns-jalali/fp'
  export default getDate
}

declare module 'date-fns-jalali/fp/getDay/index' {
  import { getDay } from 'date-fns-jalali/fp'
  export default getDay
}

declare module 'date-fns-jalali/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalali/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalali/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalali/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalali/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalali/fp/getDecade/index' {
  import { getDecade } from 'date-fns-jalali/fp'
  export default getDecade
}

declare module 'date-fns-jalali/fp/getHours/index' {
  import { getHours } from 'date-fns-jalali/fp'
  export default getHours
}

declare module 'date-fns-jalali/fp/getISODay/index' {
  import { getISODay } from 'date-fns-jalali/fp'
  export default getISODay
}

declare module 'date-fns-jalali/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalali/fp'
  export default getISOWeek
}

declare module 'date-fns-jalali/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalali/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalali/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalali/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalali/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalali/fp'
  export default getMinutes
}

declare module 'date-fns-jalali/fp/getMonth/index' {
  import { getMonth } from 'date-fns-jalali/fp'
  export default getMonth
}

declare module 'date-fns-jalali/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalali/fp'
  export default getQuarter
}

declare module 'date-fns-jalali/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalali/fp'
  export default getSeconds
}

declare module 'date-fns-jalali/fp/getTime/index' {
  import { getTime } from 'date-fns-jalali/fp'
  export default getTime
}

declare module 'date-fns-jalali/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalali/fp'
  export default getUnixTime
}

declare module 'date-fns-jalali/fp/getWeek/index' {
  import { getWeek } from 'date-fns-jalali/fp'
  export default getWeek
}

declare module 'date-fns-jalali/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalali/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalali/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalali/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalali/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalali/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalali/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns-jalali/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalali/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalali/fp'
  export default getWeekYear
}

declare module 'date-fns-jalali/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/getYear/index' {
  import { getYear } from 'date-fns-jalali/fp'
  export default getYear
}

declare module 'date-fns-jalali/fp/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns-jalali/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/fp/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns-jalali/fp'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/fp/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns-jalali/fp'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/fp/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalali/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalali/fp/intlFormat/index' {
  import { intlFormat } from 'date-fns-jalali/fp'
  export default intlFormat
}

declare module 'date-fns-jalali/fp/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns-jalali/fp'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/fp/intlFormatDistanceWithOptions/index' {
  import { intlFormatDistanceWithOptions } from 'date-fns-jalali/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns-jalali/fp/isAfter/index' {
  import { isAfter } from 'date-fns-jalali/fp'
  export default isAfter
}

declare module 'date-fns-jalali/fp/isBefore/index' {
  import { isBefore } from 'date-fns-jalali/fp'
  export default isBefore
}

declare module 'date-fns-jalali/fp/isDate/index' {
  import { isDate } from 'date-fns-jalali/fp'
  export default isDate
}

declare module 'date-fns-jalali/fp/isEqual/index' {
  import { isEqual } from 'date-fns-jalali/fp'
  export default isEqual
}

declare module 'date-fns-jalali/fp/isExists/index' {
  import { isExists } from 'date-fns-jalali/fp'
  export default isExists
}

declare module 'date-fns-jalali/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/fp/isFriday/index' {
  import { isFriday } from 'date-fns-jalali/fp'
  export default isFriday
}

declare module 'date-fns-jalali/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalali/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalali/fp'
  export default isLeapYear
}

declare module 'date-fns-jalali/fp/isMatch/index' {
  import { isMatch } from 'date-fns-jalali/fp'
  export default isMatch
}

declare module 'date-fns-jalali/fp/isMatchWithOptions/index' {
  import { isMatchWithOptions } from 'date-fns-jalali/fp'
  export default isMatchWithOptions
}

declare module 'date-fns-jalali/fp/isMonday/index' {
  import { isMonday } from 'date-fns-jalali/fp'
  export default isMonday
}

declare module 'date-fns-jalali/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalali/fp'
  export default isSameDay
}

declare module 'date-fns-jalali/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalali/fp'
  export default isSameHour
}

declare module 'date-fns-jalali/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalali/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalali/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalali/fp'
  export default isSameMinute
}

declare module 'date-fns-jalali/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalali/fp'
  export default isSameMonth
}

declare module 'date-fns-jalali/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalali/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalali/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalali/fp'
  export default isSameSecond
}

declare module 'date-fns-jalali/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalali/fp'
  export default isSameWeek
}

declare module 'date-fns-jalali/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns-jalali/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalali/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalali/fp'
  export default isSameYear
}

declare module 'date-fns-jalali/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalali/fp'
  export default isSaturday
}

declare module 'date-fns-jalali/fp/isSunday/index' {
  import { isSunday } from 'date-fns-jalali/fp'
  export default isSunday
}

declare module 'date-fns-jalali/fp/isThursday/index' {
  import { isThursday } from 'date-fns-jalali/fp'
  export default isThursday
}

declare module 'date-fns-jalali/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalali/fp'
  export default isTuesday
}

declare module 'date-fns-jalali/fp/isValid/index' {
  import { isValid } from 'date-fns-jalali/fp'
  export default isValid
}

declare module 'date-fns-jalali/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalali/fp'
  export default isWednesday
}

declare module 'date-fns-jalali/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalali/fp'
  export default isWeekend
}

declare module 'date-fns-jalali/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalali/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalali/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalali/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalali/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalali/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalali/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalali/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalali/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalali/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalali/fp'
  export default lightFormat
}

declare module 'date-fns-jalali/fp/max/index' {
  import { max } from 'date-fns-jalali/fp'
  export default max
}

declare module 'date-fns-jalali/fp/milliseconds/index' {
  import { milliseconds } from 'date-fns-jalali/fp'
  export default milliseconds
}

declare module 'date-fns-jalali/fp/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns-jalali/fp'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/fp/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns-jalali/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/fp/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns-jalali/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/fp/min/index' {
  import { min } from 'date-fns-jalali/fp'
  export default min
}

declare module 'date-fns-jalali/fp/minutesToHours/index' {
  import { minutesToHours } from 'date-fns-jalali/fp'
  export default minutesToHours
}

declare module 'date-fns-jalali/fp/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns-jalali/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/fp/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns-jalali/fp'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/fp/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns-jalali/fp'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/fp/monthsToYears/index' {
  import { monthsToYears } from 'date-fns-jalali/fp'
  export default monthsToYears
}

declare module 'date-fns-jalali/fp/nextDay/index' {
  import { nextDay } from 'date-fns-jalali/fp'
  export default nextDay
}

declare module 'date-fns-jalali/fp/nextFriday/index' {
  import { nextFriday } from 'date-fns-jalali/fp'
  export default nextFriday
}

declare module 'date-fns-jalali/fp/nextMonday/index' {
  import { nextMonday } from 'date-fns-jalali/fp'
  export default nextMonday
}

declare module 'date-fns-jalali/fp/nextSaturday/index' {
  import { nextSaturday } from 'date-fns-jalali/fp'
  export default nextSaturday
}

declare module 'date-fns-jalali/fp/nextSunday/index' {
  import { nextSunday } from 'date-fns-jalali/fp'
  export default nextSunday
}

declare module 'date-fns-jalali/fp/nextThursday/index' {
  import { nextThursday } from 'date-fns-jalali/fp'
  export default nextThursday
}

declare module 'date-fns-jalali/fp/nextTuesday/index' {
  import { nextTuesday } from 'date-fns-jalali/fp'
  export default nextTuesday
}

declare module 'date-fns-jalali/fp/nextWednesday/index' {
  import { nextWednesday } from 'date-fns-jalali/fp'
  export default nextWednesday
}

declare module 'date-fns-jalali/fp/parse/index' {
  import { parse } from 'date-fns-jalali/fp'
  export default parse
}

declare module 'date-fns-jalali/fp/parseISO/index' {
  import { parseISO } from 'date-fns-jalali/fp'
  export default parseISO
}

declare module 'date-fns-jalali/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns-jalali/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalali/fp/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalali/fp'
  export default parseJSON
}

declare module 'date-fns-jalali/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns-jalali/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalali/fp/previousDay/index' {
  import { previousDay } from 'date-fns-jalali/fp'
  export default previousDay
}

declare module 'date-fns-jalali/fp/previousFriday/index' {
  import { previousFriday } from 'date-fns-jalali/fp'
  export default previousFriday
}

declare module 'date-fns-jalali/fp/previousMonday/index' {
  import { previousMonday } from 'date-fns-jalali/fp'
  export default previousMonday
}

declare module 'date-fns-jalali/fp/previousSaturday/index' {
  import { previousSaturday } from 'date-fns-jalali/fp'
  export default previousSaturday
}

declare module 'date-fns-jalali/fp/previousSunday/index' {
  import { previousSunday } from 'date-fns-jalali/fp'
  export default previousSunday
}

declare module 'date-fns-jalali/fp/previousThursday/index' {
  import { previousThursday } from 'date-fns-jalali/fp'
  export default previousThursday
}

declare module 'date-fns-jalali/fp/previousTuesday/index' {
  import { previousTuesday } from 'date-fns-jalali/fp'
  export default previousTuesday
}

declare module 'date-fns-jalali/fp/previousWednesday/index' {
  import { previousWednesday } from 'date-fns-jalali/fp'
  export default previousWednesday
}

declare module 'date-fns-jalali/fp/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns-jalali/fp'
  export default quartersToMonths
}

declare module 'date-fns-jalali/fp/quartersToYears/index' {
  import { quartersToYears } from 'date-fns-jalali/fp'
  export default quartersToYears
}

declare module 'date-fns-jalali/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalali/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalali/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalali/fp/secondsToHours/index' {
  import { secondsToHours } from 'date-fns-jalali/fp'
  export default secondsToHours
}

declare module 'date-fns-jalali/fp/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns-jalali/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/fp/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns-jalali/fp'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/fp/set/index' {
  import { set } from 'date-fns-jalali/fp'
  export default set
}

declare module 'date-fns-jalali/fp/setDate/index' {
  import { setDate } from 'date-fns-jalali/fp'
  export default setDate
}

declare module 'date-fns-jalali/fp/setDay/index' {
  import { setDay } from 'date-fns-jalali/fp'
  export default setDay
}

declare module 'date-fns-jalali/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalali/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalali/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns-jalali/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalali/fp/setHours/index' {
  import { setHours } from 'date-fns-jalali/fp'
  export default setHours
}

declare module 'date-fns-jalali/fp/setISODay/index' {
  import { setISODay } from 'date-fns-jalali/fp'
  export default setISODay
}

declare module 'date-fns-jalali/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalali/fp'
  export default setISOWeek
}

declare module 'date-fns-jalali/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalali/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalali/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalali/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalali/fp'
  export default setMinutes
}

declare module 'date-fns-jalali/fp/setMonth/index' {
  import { setMonth } from 'date-fns-jalali/fp'
  export default setMonth
}

declare module 'date-fns-jalali/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalali/fp'
  export default setQuarter
}

declare module 'date-fns-jalali/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalali/fp'
  export default setSeconds
}

declare module 'date-fns-jalali/fp/setWeek/index' {
  import { setWeek } from 'date-fns-jalali/fp'
  export default setWeek
}

declare module 'date-fns-jalali/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns-jalali/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalali/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalali/fp'
  export default setWeekYear
}

declare module 'date-fns-jalali/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/setYear/index' {
  import { setYear } from 'date-fns-jalali/fp'
  export default setYear
}

declare module 'date-fns-jalali/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalali/fp'
  export default startOfDay
}

declare module 'date-fns-jalali/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalali/fp'
  export default startOfDecade
}

declare module 'date-fns-jalali/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalali/fp'
  export default startOfHour
}

declare module 'date-fns-jalali/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalali/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalali/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalali/fp'
  export default startOfMinute
}

declare module 'date-fns-jalali/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalali/fp'
  export default startOfMonth
}

declare module 'date-fns-jalali/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalali/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalali/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalali/fp'
  export default startOfSecond
}

declare module 'date-fns-jalali/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalali/fp'
  export default startOfWeek
}

declare module 'date-fns-jalali/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalali/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalali/fp'
  export default startOfYear
}

declare module 'date-fns-jalali/fp/sub/index' {
  import { sub } from 'date-fns-jalali/fp'
  export default sub
}

declare module 'date-fns-jalali/fp/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalali/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalali/fp/subDays/index' {
  import { subDays } from 'date-fns-jalali/fp'
  export default subDays
}

declare module 'date-fns-jalali/fp/subHours/index' {
  import { subHours } from 'date-fns-jalali/fp'
  export default subHours
}

declare module 'date-fns-jalali/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalali/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalali/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalali/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalali/fp'
  export default subMinutes
}

declare module 'date-fns-jalali/fp/subMonths/index' {
  import { subMonths } from 'date-fns-jalali/fp'
  export default subMonths
}

declare module 'date-fns-jalali/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalali/fp'
  export default subQuarters
}

declare module 'date-fns-jalali/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalali/fp'
  export default subSeconds
}

declare module 'date-fns-jalali/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalali/fp'
  export default subWeeks
}

declare module 'date-fns-jalali/fp/subYears/index' {
  import { subYears } from 'date-fns-jalali/fp'
  export default subYears
}

declare module 'date-fns-jalali/fp/toDate/index' {
  import { toDate } from 'date-fns-jalali/fp'
  export default toDate
}

declare module 'date-fns-jalali/fp/weeksToDays/index' {
  import { weeksToDays } from 'date-fns-jalali/fp'
  export default weeksToDays
}

declare module 'date-fns-jalali/fp/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns-jalali/fp'
  export default yearsToMonths
}

declare module 'date-fns-jalali/fp/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns-jalali/fp'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/fp/add/index.js' {
  import { add } from 'date-fns-jalali/fp'
  export default add
}

declare module 'date-fns-jalali/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalali/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalali/fp/addDays/index.js' {
  import { addDays } from 'date-fns-jalali/fp'
  export default addDays
}

declare module 'date-fns-jalali/fp/addHours/index.js' {
  import { addHours } from 'date-fns-jalali/fp'
  export default addHours
}

declare module 'date-fns-jalali/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalali/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalali/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalali/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalali/fp'
  export default addMinutes
}

declare module 'date-fns-jalali/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalali/fp'
  export default addMonths
}

declare module 'date-fns-jalali/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalali/fp'
  export default addQuarters
}

declare module 'date-fns-jalali/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalali/fp'
  export default addSeconds
}

declare module 'date-fns-jalali/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalali/fp'
  export default addWeeks
}

declare module 'date-fns-jalali/fp/addYears/index.js' {
  import { addYears } from 'date-fns-jalali/fp'
  export default addYears
}

declare module 'date-fns-jalali/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/fp/areIntervalsOverlappingWithOptions/index.js' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalali/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalali/fp/clamp/index.js' {
  import { clamp } from 'date-fns-jalali/fp'
  export default clamp
}

declare module 'date-fns-jalali/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalali/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalali/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalali/fp'
  export default closestTo
}

declare module 'date-fns-jalali/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalali/fp'
  export default compareAsc
}

declare module 'date-fns-jalali/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalali/fp'
  export default compareDesc
}

declare module 'date-fns-jalali/fp/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns-jalali/fp'
  export default daysToWeeks
}

declare module 'date-fns-jalali/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalali/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalali/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalali/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalali/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalali/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalali/fp'
  export default differenceInDays
}

declare module 'date-fns-jalali/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalali/fp'
  export default differenceInHours
}

declare module 'date-fns-jalali/fp/differenceInHoursWithOptions/index.js' {
  import { differenceInHoursWithOptions } from 'date-fns-jalali/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns-jalali/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalali/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalali/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/fp/differenceInMinutesWithOptions/index.js' {
  import { differenceInMinutesWithOptions } from 'date-fns-jalali/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns-jalali/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalali/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalali/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalali/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/fp/differenceInQuartersWithOptions/index.js' {
  import { differenceInQuartersWithOptions } from 'date-fns-jalali/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns-jalali/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalali/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/fp/differenceInSecondsWithOptions/index.js' {
  import { differenceInSecondsWithOptions } from 'date-fns-jalali/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns-jalali/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalali/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/fp/differenceInWeeksWithOptions/index.js' {
  import { differenceInWeeksWithOptions } from 'date-fns-jalali/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns-jalali/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalali/fp'
  export default differenceInYears
}

declare module 'date-fns-jalali/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalali/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns-jalali/fp'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/fp/eachHourOfIntervalWithOptions/index.js' {
  import { eachHourOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/fp/eachMinuteOfIntervalWithOptions/index.js' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalali/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/fp/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalali/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalali/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalali/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalali/fp/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalali/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalali/fp'
  export default endOfDay
}

declare module 'date-fns-jalali/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalali/fp'
  export default endOfDecade
}

declare module 'date-fns-jalali/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns-jalali/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalali/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalali/fp'
  export default endOfHour
}

declare module 'date-fns-jalali/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalali/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalali/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalali/fp'
  export default endOfMinute
}

declare module 'date-fns-jalali/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalali/fp'
  export default endOfMonth
}

declare module 'date-fns-jalali/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalali/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalali/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalali/fp'
  export default endOfSecond
}

declare module 'date-fns-jalali/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalali/fp'
  export default endOfWeek
}

declare module 'date-fns-jalali/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalali/fp'
  export default endOfYear
}

declare module 'date-fns-jalali/fp/format/index.js' {
  import { format } from 'date-fns-jalali/fp'
  export default format
}

declare module 'date-fns-jalali/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalali/fp'
  export default formatDistance
}

declare module 'date-fns-jalali/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalali/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalali/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalali/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns-jalali/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalali/fp/formatDuration/index.js' {
  import { formatDuration } from 'date-fns-jalali/fp'
  export default formatDuration
}

declare module 'date-fns-jalali/fp/formatDurationWithOptions/index.js' {
  import { formatDurationWithOptions } from 'date-fns-jalali/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns-jalali/fp/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalali/fp'
  export default formatISO
}

declare module 'date-fns-jalali/fp/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalali/fp'
  export default formatISO9075
}

declare module 'date-fns-jalali/fp/formatISO9075WithOptions/index.js' {
  import { formatISO9075WithOptions } from 'date-fns-jalali/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalali/fp/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalali/fp'
  export default formatISODuration
}

declare module 'date-fns-jalali/fp/formatISOWithOptions/index.js' {
  import { formatISOWithOptions } from 'date-fns-jalali/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalali/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalali/fp'
  export default formatRelative
}

declare module 'date-fns-jalali/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns-jalali/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalali/fp/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalali/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalali/fp/formatRFC3339WithOptions/index.js' {
  import { formatRFC3339WithOptions } from 'date-fns-jalali/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalali/fp/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalali/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalali/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns-jalali/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalali/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalali/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalali/fp/getDate/index.js' {
  import { getDate } from 'date-fns-jalali/fp'
  export default getDate
}

declare module 'date-fns-jalali/fp/getDay/index.js' {
  import { getDay } from 'date-fns-jalali/fp'
  export default getDay
}

declare module 'date-fns-jalali/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalali/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalali/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalali/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalali/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalali/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalali/fp'
  export default getDecade
}

declare module 'date-fns-jalali/fp/getHours/index.js' {
  import { getHours } from 'date-fns-jalali/fp'
  export default getHours
}

declare module 'date-fns-jalali/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalali/fp'
  export default getISODay
}

declare module 'date-fns-jalali/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalali/fp'
  export default getISOWeek
}

declare module 'date-fns-jalali/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalali/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalali/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalali/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalali/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalali/fp'
  export default getMinutes
}

declare module 'date-fns-jalali/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalali/fp'
  export default getMonth
}

declare module 'date-fns-jalali/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalali/fp'
  export default getQuarter
}

declare module 'date-fns-jalali/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalali/fp'
  export default getSeconds
}

declare module 'date-fns-jalali/fp/getTime/index.js' {
  import { getTime } from 'date-fns-jalali/fp'
  export default getTime
}

declare module 'date-fns-jalali/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalali/fp'
  export default getUnixTime
}

declare module 'date-fns-jalali/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalali/fp'
  export default getWeek
}

declare module 'date-fns-jalali/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalali/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalali/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalali/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalali/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalali/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalali/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns-jalali/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalali/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalali/fp'
  export default getWeekYear
}

declare module 'date-fns-jalali/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/getYear/index.js' {
  import { getYear } from 'date-fns-jalali/fp'
  export default getYear
}

declare module 'date-fns-jalali/fp/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns-jalali/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/fp/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns-jalali/fp'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/fp/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns-jalali/fp'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/fp/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalali/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalali/fp/intlFormat/index.js' {
  import { intlFormat } from 'date-fns-jalali/fp'
  export default intlFormat
}

declare module 'date-fns-jalali/fp/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns-jalali/fp'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/fp/intlFormatDistanceWithOptions/index.js' {
  import { intlFormatDistanceWithOptions } from 'date-fns-jalali/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns-jalali/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalali/fp'
  export default isAfter
}

declare module 'date-fns-jalali/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalali/fp'
  export default isBefore
}

declare module 'date-fns-jalali/fp/isDate/index.js' {
  import { isDate } from 'date-fns-jalali/fp'
  export default isDate
}

declare module 'date-fns-jalali/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalali/fp'
  export default isEqual
}

declare module 'date-fns-jalali/fp/isExists/index.js' {
  import { isExists } from 'date-fns-jalali/fp'
  export default isExists
}

declare module 'date-fns-jalali/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalali/fp'
  export default isFriday
}

declare module 'date-fns-jalali/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalali/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalali/fp'
  export default isLeapYear
}

declare module 'date-fns-jalali/fp/isMatch/index.js' {
  import { isMatch } from 'date-fns-jalali/fp'
  export default isMatch
}

declare module 'date-fns-jalali/fp/isMatchWithOptions/index.js' {
  import { isMatchWithOptions } from 'date-fns-jalali/fp'
  export default isMatchWithOptions
}

declare module 'date-fns-jalali/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalali/fp'
  export default isMonday
}

declare module 'date-fns-jalali/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalali/fp'
  export default isSameDay
}

declare module 'date-fns-jalali/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalali/fp'
  export default isSameHour
}

declare module 'date-fns-jalali/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalali/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalali/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalali/fp'
  export default isSameMinute
}

declare module 'date-fns-jalali/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalali/fp'
  export default isSameMonth
}

declare module 'date-fns-jalali/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalali/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalali/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalali/fp'
  export default isSameSecond
}

declare module 'date-fns-jalali/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalali/fp'
  export default isSameWeek
}

declare module 'date-fns-jalali/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns-jalali/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalali/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalali/fp'
  export default isSameYear
}

declare module 'date-fns-jalali/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalali/fp'
  export default isSaturday
}

declare module 'date-fns-jalali/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalali/fp'
  export default isSunday
}

declare module 'date-fns-jalali/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalali/fp'
  export default isThursday
}

declare module 'date-fns-jalali/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalali/fp'
  export default isTuesday
}

declare module 'date-fns-jalali/fp/isValid/index.js' {
  import { isValid } from 'date-fns-jalali/fp'
  export default isValid
}

declare module 'date-fns-jalali/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalali/fp'
  export default isWednesday
}

declare module 'date-fns-jalali/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalali/fp'
  export default isWeekend
}

declare module 'date-fns-jalali/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalali/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalali/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalali/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalali/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalali/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalali/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalali/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalali/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalali/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalali/fp'
  export default lightFormat
}

declare module 'date-fns-jalali/fp/max/index.js' {
  import { max } from 'date-fns-jalali/fp'
  export default max
}

declare module 'date-fns-jalali/fp/milliseconds/index.js' {
  import { milliseconds } from 'date-fns-jalali/fp'
  export default milliseconds
}

declare module 'date-fns-jalali/fp/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns-jalali/fp'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/fp/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns-jalali/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/fp/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns-jalali/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/fp/min/index.js' {
  import { min } from 'date-fns-jalali/fp'
  export default min
}

declare module 'date-fns-jalali/fp/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns-jalali/fp'
  export default minutesToHours
}

declare module 'date-fns-jalali/fp/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns-jalali/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/fp/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns-jalali/fp'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/fp/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns-jalali/fp'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/fp/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns-jalali/fp'
  export default monthsToYears
}

declare module 'date-fns-jalali/fp/nextDay/index.js' {
  import { nextDay } from 'date-fns-jalali/fp'
  export default nextDay
}

declare module 'date-fns-jalali/fp/nextFriday/index.js' {
  import { nextFriday } from 'date-fns-jalali/fp'
  export default nextFriday
}

declare module 'date-fns-jalali/fp/nextMonday/index.js' {
  import { nextMonday } from 'date-fns-jalali/fp'
  export default nextMonday
}

declare module 'date-fns-jalali/fp/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns-jalali/fp'
  export default nextSaturday
}

declare module 'date-fns-jalali/fp/nextSunday/index.js' {
  import { nextSunday } from 'date-fns-jalali/fp'
  export default nextSunday
}

declare module 'date-fns-jalali/fp/nextThursday/index.js' {
  import { nextThursday } from 'date-fns-jalali/fp'
  export default nextThursday
}

declare module 'date-fns-jalali/fp/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns-jalali/fp'
  export default nextTuesday
}

declare module 'date-fns-jalali/fp/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns-jalali/fp'
  export default nextWednesday
}

declare module 'date-fns-jalali/fp/parse/index.js' {
  import { parse } from 'date-fns-jalali/fp'
  export default parse
}

declare module 'date-fns-jalali/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalali/fp'
  export default parseISO
}

declare module 'date-fns-jalali/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns-jalali/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalali/fp/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalali/fp'
  export default parseJSON
}

declare module 'date-fns-jalali/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns-jalali/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalali/fp/previousDay/index.js' {
  import { previousDay } from 'date-fns-jalali/fp'
  export default previousDay
}

declare module 'date-fns-jalali/fp/previousFriday/index.js' {
  import { previousFriday } from 'date-fns-jalali/fp'
  export default previousFriday
}

declare module 'date-fns-jalali/fp/previousMonday/index.js' {
  import { previousMonday } from 'date-fns-jalali/fp'
  export default previousMonday
}

declare module 'date-fns-jalali/fp/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns-jalali/fp'
  export default previousSaturday
}

declare module 'date-fns-jalali/fp/previousSunday/index.js' {
  import { previousSunday } from 'date-fns-jalali/fp'
  export default previousSunday
}

declare module 'date-fns-jalali/fp/previousThursday/index.js' {
  import { previousThursday } from 'date-fns-jalali/fp'
  export default previousThursday
}

declare module 'date-fns-jalali/fp/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns-jalali/fp'
  export default previousTuesday
}

declare module 'date-fns-jalali/fp/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns-jalali/fp'
  export default previousWednesday
}

declare module 'date-fns-jalali/fp/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns-jalali/fp'
  export default quartersToMonths
}

declare module 'date-fns-jalali/fp/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns-jalali/fp'
  export default quartersToYears
}

declare module 'date-fns-jalali/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalali/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalali/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalali/fp/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns-jalali/fp'
  export default secondsToHours
}

declare module 'date-fns-jalali/fp/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns-jalali/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/fp/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns-jalali/fp'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/fp/set/index.js' {
  import { set } from 'date-fns-jalali/fp'
  export default set
}

declare module 'date-fns-jalali/fp/setDate/index.js' {
  import { setDate } from 'date-fns-jalali/fp'
  export default setDate
}

declare module 'date-fns-jalali/fp/setDay/index.js' {
  import { setDay } from 'date-fns-jalali/fp'
  export default setDay
}

declare module 'date-fns-jalali/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalali/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalali/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns-jalali/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalali/fp/setHours/index.js' {
  import { setHours } from 'date-fns-jalali/fp'
  export default setHours
}

declare module 'date-fns-jalali/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalali/fp'
  export default setISODay
}

declare module 'date-fns-jalali/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalali/fp'
  export default setISOWeek
}

declare module 'date-fns-jalali/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalali/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalali/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalali/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalali/fp'
  export default setMinutes
}

declare module 'date-fns-jalali/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalali/fp'
  export default setMonth
}

declare module 'date-fns-jalali/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalali/fp'
  export default setQuarter
}

declare module 'date-fns-jalali/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalali/fp'
  export default setSeconds
}

declare module 'date-fns-jalali/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalali/fp'
  export default setWeek
}

declare module 'date-fns-jalali/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns-jalali/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalali/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalali/fp'
  export default setWeekYear
}

declare module 'date-fns-jalali/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/setYear/index.js' {
  import { setYear } from 'date-fns-jalali/fp'
  export default setYear
}

declare module 'date-fns-jalali/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalali/fp'
  export default startOfDay
}

declare module 'date-fns-jalali/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalali/fp'
  export default startOfDecade
}

declare module 'date-fns-jalali/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalali/fp'
  export default startOfHour
}

declare module 'date-fns-jalali/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalali/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalali/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalali/fp'
  export default startOfMinute
}

declare module 'date-fns-jalali/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalali/fp'
  export default startOfMonth
}

declare module 'date-fns-jalali/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalali/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalali/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalali/fp'
  export default startOfSecond
}

declare module 'date-fns-jalali/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalali/fp'
  export default startOfWeek
}

declare module 'date-fns-jalali/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns-jalali/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalali/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalali/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalali/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalali/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalali/fp'
  export default startOfYear
}

declare module 'date-fns-jalali/fp/sub/index.js' {
  import { sub } from 'date-fns-jalali/fp'
  export default sub
}

declare module 'date-fns-jalali/fp/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalali/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalali/fp/subDays/index.js' {
  import { subDays } from 'date-fns-jalali/fp'
  export default subDays
}

declare module 'date-fns-jalali/fp/subHours/index.js' {
  import { subHours } from 'date-fns-jalali/fp'
  export default subHours
}

declare module 'date-fns-jalali/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalali/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalali/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalali/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalali/fp'
  export default subMinutes
}

declare module 'date-fns-jalali/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalali/fp'
  export default subMonths
}

declare module 'date-fns-jalali/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalali/fp'
  export default subQuarters
}

declare module 'date-fns-jalali/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalali/fp'
  export default subSeconds
}

declare module 'date-fns-jalali/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalali/fp'
  export default subWeeks
}

declare module 'date-fns-jalali/fp/subYears/index.js' {
  import { subYears } from 'date-fns-jalali/fp'
  export default subYears
}

declare module 'date-fns-jalali/fp/toDate/index.js' {
  import { toDate } from 'date-fns-jalali/fp'
  export default toDate
}

declare module 'date-fns-jalali/fp/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns-jalali/fp'
  export default weeksToDays
}

declare module 'date-fns-jalali/fp/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns-jalali/fp'
  export default yearsToMonths
}

declare module 'date-fns-jalali/fp/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns-jalali/fp'
  export default yearsToQuarters
}

// ECMAScript Module Functions

declare module 'date-fns-jalali/esm' {
  import { Day, Duration, Interval, Locale } from 'date-fns-jalali'
  function add(date: Date | number, duration: Duration): Date
  namespace add {}

  function addBusinessDays(date: Date | number, amount: number): Date
  namespace addBusinessDays {}

  function addDays(date: Date | number, amount: number): Date
  namespace addDays {}

  function addHours(date: Date | number, amount: number): Date
  namespace addHours {}

  function addISOWeekYears(date: Date | number, amount: number): Date
  namespace addISOWeekYears {}

  function addMilliseconds(date: Date | number, amount: number): Date
  namespace addMilliseconds {}

  function addMinutes(date: Date | number, amount: number): Date
  namespace addMinutes {}

  function addMonths(date: Date | number, amount: number): Date
  namespace addMonths {}

  function addQuarters(date: Date | number, amount: number): Date
  namespace addQuarters {}

  function addSeconds(date: Date | number, amount: number): Date
  namespace addSeconds {}

  function addWeeks(date: Date | number, amount: number): Date
  namespace addWeeks {}

  function addYears(date: Date | number, amount: number): Date
  namespace addYears {}

  function areIntervalsOverlapping(
    intervalLeft: Interval,
    intervalRight: Interval,
    options?: {
      inclusive?: boolean
    }
  ): boolean
  namespace areIntervalsOverlapping {}

  function clamp(date: Date | number, interval: Interval): Date
  namespace clamp {}

  function closestIndexTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): number | undefined
  namespace closestIndexTo {}

  function closestTo(
    dateToCompare: Date | number,
    datesArray: (Date | number)[]
  ): Date | undefined
  namespace closestTo {}

  function compareAsc(dateLeft: Date | number, dateRight: Date | number): number
  namespace compareAsc {}

  function compareDesc(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace compareDesc {}

  function daysToWeeks(days: number): number
  namespace daysToWeeks {}

  function differenceInBusinessDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInBusinessDays {}

  function differenceInCalendarDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarDays {}

  function differenceInCalendarISOWeeks(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeeks {}

  function differenceInCalendarISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarISOWeekYears {}

  function differenceInCalendarMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarMonths {}

  function differenceInCalendarQuarters(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarQuarters {}

  function differenceInCalendarWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace differenceInCalendarWeeks {}

  function differenceInCalendarYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInCalendarYears {}

  function differenceInDays(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInDays {}

  function differenceInHours(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInHours {}

  function differenceInISOWeekYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInISOWeekYears {}

  function differenceInMilliseconds(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMilliseconds {}

  function differenceInMinutes(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInMinutes {}

  function differenceInMonths(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInMonths {}

  function differenceInQuarters(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInQuarters {}

  function differenceInSeconds(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInSeconds {}

  function differenceInWeeks(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      roundingMethod?: string
    }
  ): number
  namespace differenceInWeeks {}

  function differenceInYears(
    dateLeft: Date | number,
    dateRight: Date | number
  ): number
  namespace differenceInYears {}

  function eachDayOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachDayOfInterval {}

  function eachHourOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachHourOfInterval {}

  function eachMinuteOfInterval(
    interval: Interval,
    options?: {
      step?: number
    }
  ): Date[]
  namespace eachMinuteOfInterval {}

  function eachMonthOfInterval(interval: Interval): Date[]
  namespace eachMonthOfInterval {}

  function eachQuarterOfInterval(interval: Interval): Date[]
  namespace eachQuarterOfInterval {}

  function eachWeekendOfInterval(interval: Interval): Date[]
  namespace eachWeekendOfInterval {}

  function eachWeekendOfMonth(date: Date | number): Date[]
  namespace eachWeekendOfMonth {}

  function eachWeekendOfYear(date: Date | number): Date[]
  namespace eachWeekendOfYear {}

  function eachWeekOfInterval(
    interval: Interval,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date[]
  namespace eachWeekOfInterval {}

  function eachYearOfInterval(interval: Interval): Date[]
  namespace eachYearOfInterval {}

  function endOfDay(date: Date | number): Date
  namespace endOfDay {}

  function endOfDecade(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace endOfDecade {}

  function endOfHour(date: Date | number): Date
  namespace endOfHour {}

  function endOfISOWeek(date: Date | number): Date
  namespace endOfISOWeek {}

  function endOfISOWeekYear(date: Date | number): Date
  namespace endOfISOWeekYear {}

  function endOfMinute(date: Date | number): Date
  namespace endOfMinute {}

  function endOfMonth(date: Date | number): Date
  namespace endOfMonth {}

  function endOfQuarter(date: Date | number): Date
  namespace endOfQuarter {}

  function endOfSecond(date: Date | number): Date
  namespace endOfSecond {}

  function endOfToday(): Date
  namespace endOfToday {}

  function endOfTomorrow(): Date
  namespace endOfTomorrow {}

  function endOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace endOfWeek {}

  function endOfYear(date: Date | number): Date
  namespace endOfYear {}

  function endOfYesterday(): Date
  namespace endOfYesterday {}

  function format(
    date: Date | number,
    format: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: number
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): string
  namespace format {}

  function formatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistance {}

  function formatDistanceStrict(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceStrict {}

  function formatDistanceToNow(
    date: Date | number,
    options?: {
      includeSeconds?: boolean
      addSuffix?: boolean
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNow {}

  function formatDistanceToNowStrict(
    date: Date | number,
    options?: {
      addSuffix?: boolean
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      roundingMethod?: 'floor' | 'ceil' | 'round'
      locale?: Locale
    }
  ): string
  namespace formatDistanceToNowStrict {}

  function formatDuration(
    duration: Duration,
    options?: {
      format?: string[]
      zero?: boolean
      delimiter?: string
      locale?: Locale
    }
  ): string
  namespace formatDuration {}

  function formatISO(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO {}

  function formatISO9075(
    date: Date | number,
    options?: {
      format?: 'extended' | 'basic'
      representation?: 'complete' | 'date' | 'time'
    }
  ): string
  namespace formatISO9075 {}

  function formatISODuration(duration: Duration): string
  namespace formatISODuration {}

  function formatRelative(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): string
  namespace formatRelative {}

  function formatRFC3339(
    date: Date | number,
    options?: {
      fractionDigits?: 0 | 1 | 2 | 3
    }
  ): string
  namespace formatRFC3339 {}

  function formatRFC7231(date: Date | number): string
  namespace formatRFC7231 {}

  function fromUnixTime(unixTime: number): Date
  namespace fromUnixTime {}

  function getDate(date: Date | number): number
  namespace getDate {}

  function getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6
  namespace getDay {}

  function getDayOfYear(date: Date | number): number
  namespace getDayOfYear {}

  function getDaysInMonth(date: Date | number): number
  namespace getDaysInMonth {}

  function getDaysInYear(date: Date | number): number
  namespace getDaysInYear {}

  function getDecade(date: Date | number): number
  namespace getDecade {}

  function getDefaultOptions(): Object
  namespace getDefaultOptions {}

  function getHours(date: Date | number): number
  namespace getHours {}

  function getISODay(date: Date | number): number
  namespace getISODay {}

  function getISOWeek(date: Date | number): number
  namespace getISOWeek {}

  function getISOWeeksInYear(date: Date | number): number
  namespace getISOWeeksInYear {}

  function getISOWeekYear(date: Date | number): number
  namespace getISOWeekYear {}

  function getMilliseconds(date: Date | number): number
  namespace getMilliseconds {}

  function getMinutes(date: Date | number): number
  namespace getMinutes {}

  function getMonth(date: Date | number): number
  namespace getMonth {}

  function getOverlappingDaysInIntervals(
    intervalLeft: Interval,
    intervalRight: Interval
  ): number
  namespace getOverlappingDaysInIntervals {}

  function getQuarter(date: Date | number): number
  namespace getQuarter {}

  function getSeconds(date: Date | number): number
  namespace getSeconds {}

  function getTime(date: Date | number): number
  namespace getTime {}

  function getUnixTime(date: Date | number): number
  namespace getUnixTime {}

  function getWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeek {}

  function getWeekOfMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeekOfMonth {}

  function getWeeksInMonth(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): number
  namespace getWeeksInMonth {}

  function getWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): number
  namespace getWeekYear {}

  function getYear(date: Date | number): number
  namespace getYear {}

  function hoursToMilliseconds(hours: number): number
  namespace hoursToMilliseconds {}

  function hoursToMinutes(hours: number): number
  namespace hoursToMinutes {}

  function hoursToSeconds(hours: number): number
  namespace hoursToSeconds {}

  function intervalToDuration(interval: Interval): Duration
  namespace intervalToDuration {}

  function intlFormat(
    argument: Date | number,
    formatOptions?: {
      localeMatcher?: 'lookup' | 'best fit'
      weekday?: 'narrow' | 'short' | 'long'
      era?: 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      day?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      second?: 'numeric' | '2-digit'
      timeZoneName?: 'short' | 'long'
      formatMatcher?: 'basic' | 'best fit'
      hour12?: boolean
      timeZone?: string
    },
    localeOptions?: {
      locale?: string | string[]
    }
  ): string
  namespace intlFormat {}

  function intlFormatDistance(
    date: Date | number,
    baseDate: Date | number,
    options?: {
      unit?: string
      locale?: string | string[]
      localeMatcher?: string
      numeric?: string
      style?: string
    }
  ): string
  namespace intlFormatDistance {}

  function isAfter(date: Date | number, dateToCompare: Date | number): boolean
  namespace isAfter {}

  function isBefore(date: Date | number, dateToCompare: Date | number): boolean
  namespace isBefore {}

  function isDate(value: any): boolean
  namespace isDate {}

  function isEqual(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isEqual {}

  function isExists(year: number, month: number, day: number): boolean
  namespace isExists {}

  function isFirstDayOfMonth(date: Date | number): boolean
  namespace isFirstDayOfMonth {}

  function isFriday(date: Date | number): boolean
  namespace isFriday {}

  function isFuture(date: Date | number): boolean
  namespace isFuture {}

  function isLastDayOfMonth(date: Date | number): boolean
  namespace isLastDayOfMonth {}

  function isLeapYear(date: Date | number): boolean
  namespace isLeapYear {}

  function isMatch(
    dateString: string,
    formatString: string,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): boolean
  namespace isMatch {}

  function isMonday(date: Date | number): boolean
  namespace isMonday {}

  function isPast(date: Date | number): boolean
  namespace isPast {}

  function isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean
  namespace isSameDay {}

  function isSameHour(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameHour {}

  function isSameISOWeek(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeek {}

  function isSameISOWeekYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameISOWeekYear {}

  function isSameMinute(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMinute {}

  function isSameMonth(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameMonth {}

  function isSameQuarter(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameQuarter {}

  function isSameSecond(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameSecond {}

  function isSameWeek(
    dateLeft: Date | number,
    dateRight: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isSameWeek {}

  function isSameYear(
    dateLeft: Date | number,
    dateRight: Date | number
  ): boolean
  namespace isSameYear {}

  function isSaturday(date: Date | number): boolean
  namespace isSaturday {}

  function isSunday(date: Date | number): boolean
  namespace isSunday {}

  function isThisHour(date: Date | number): boolean
  namespace isThisHour {}

  function isThisISOWeek(date: Date | number): boolean
  namespace isThisISOWeek {}

  function isThisMinute(date: Date | number): boolean
  namespace isThisMinute {}

  function isThisMonth(date: Date | number): boolean
  namespace isThisMonth {}

  function isThisQuarter(date: Date | number): boolean
  namespace isThisQuarter {}

  function isThisSecond(date: Date | number): boolean
  namespace isThisSecond {}

  function isThisWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): boolean
  namespace isThisWeek {}

  function isThisYear(date: Date | number): boolean
  namespace isThisYear {}

  function isThursday(date: Date | number): boolean
  namespace isThursday {}

  function isToday(date: Date | number): boolean
  namespace isToday {}

  function isTomorrow(date: Date | number): boolean
  namespace isTomorrow {}

  function isTuesday(date: Date | number): boolean
  namespace isTuesday {}

  function isValid(date: any): boolean
  namespace isValid {}

  function isWednesday(date: Date | number): boolean
  namespace isWednesday {}

  function isWeekend(date: Date | number): boolean
  namespace isWeekend {}

  function isWithinInterval(date: Date | number, interval: Interval): boolean
  namespace isWithinInterval {}

  function isYesterday(date: Date | number): boolean
  namespace isYesterday {}

  function lastDayOfDecade(date: Date | number): Date
  namespace lastDayOfDecade {}

  function lastDayOfISOWeek(date: Date | number): Date
  namespace lastDayOfISOWeek {}

  function lastDayOfISOWeekYear(date: Date | number): Date
  namespace lastDayOfISOWeekYear {}

  function lastDayOfMonth(date: Date | number): Date
  namespace lastDayOfMonth {}

  function lastDayOfQuarter(
    date: Date | number,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace lastDayOfQuarter {}

  function lastDayOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace lastDayOfWeek {}

  function lastDayOfYear(date: Date | number): Date
  namespace lastDayOfYear {}

  function lightFormat(date: Date | number, format: string): string
  namespace lightFormat {}

  function max(datesArray: (Date | number)[]): Date
  namespace max {}

  function milliseconds(duration: Duration): number
  namespace milliseconds {}

  function millisecondsToHours(milliseconds: number): number
  namespace millisecondsToHours {}

  function millisecondsToMinutes(milliseconds: number): number
  namespace millisecondsToMinutes {}

  function millisecondsToSeconds(milliseconds: number): number
  namespace millisecondsToSeconds {}

  function min(datesArray: (Date | number)[]): Date
  namespace min {}

  function minutesToHours(minutes: number): number
  namespace minutesToHours {}

  function minutesToMilliseconds(minutes: number): number
  namespace minutesToMilliseconds {}

  function minutesToSeconds(minutes: number): number
  namespace minutesToSeconds {}

  function monthsToQuarters(months: number): number
  namespace monthsToQuarters {}

  function monthsToYears(months: number): number
  namespace monthsToYears {}

  function newDate(
    year: number,
    month: number,
    date: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): Date
  namespace newDate {}

  function nextDay(date: Date | number, day: Day): Date
  namespace nextDay {}

  function nextFriday(date: Date | number): Date
  namespace nextFriday {}

  function nextMonday(date: Date | number): Date
  namespace nextMonday {}

  function nextSaturday(date: Date | number): Date
  namespace nextSaturday {}

  function nextSunday(date: Date | number): Date
  namespace nextSunday {}

  function nextThursday(date: Date | number): Date
  namespace nextThursday {}

  function nextTuesday(date: Date | number): Date
  namespace nextTuesday {}

  function nextWednesday(date: Date | number): Date
  namespace nextWednesday {}

  function parse(
    dateString: string,
    formatString: string,
    referenceDate: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      useAdditionalWeekYearTokens?: boolean
      useAdditionalDayOfYearTokens?: boolean
    }
  ): Date
  namespace parse {}

  function parseISO(
    argument: string,
    options?: {
      additionalDigits?: 0 | 1 | 2
    }
  ): Date
  namespace parseISO {}

  function parseJSON(argument: string | number | Date): Date
  namespace parseJSON {}

  function previousDay(date: Date | number, day: number): Date
  namespace previousDay {}

  function previousFriday(date: Date | number): Date
  namespace previousFriday {}

  function previousMonday(date: Date | number): Date
  namespace previousMonday {}

  function previousSaturday(date: Date | number): Date
  namespace previousSaturday {}

  function previousSunday(date: Date | number): Date
  namespace previousSunday {}

  function previousThursday(date: Date | number): Date
  namespace previousThursday {}

  function previousTuesday(date: Date | number): Date
  namespace previousTuesday {}

  function previousWednesday(date: Date | number): Date
  namespace previousWednesday {}

  function quartersToMonths(quarters: number): number
  namespace quartersToMonths {}

  function quartersToYears(quarters: number): number
  namespace quartersToYears {}

  function roundToNearestMinutes(
    date: Date | number,
    options?: {
      nearestTo?: number
      roundingMethod?: string
    }
  ): Date
  namespace roundToNearestMinutes {}

  function secondsToHours(seconds: number): number
  namespace secondsToHours {}

  function secondsToMilliseconds(seconds: number): number
  namespace secondsToMilliseconds {}

  function secondsToMinutes(seconds: number): number
  namespace secondsToMinutes {}

  function set(
    date: Date | number,
    values: {
      year?: number
      month?: number
      date?: number
      hours?: number
      minutes?: number
      seconds?: number
      milliseconds?: number
    }
  ): Date
  namespace set {}

  function setDate(date: Date | number, dayOfMonth: number): Date
  namespace setDate {}

  function setDay(
    date: Date | number,
    day: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace setDay {}

  function setDayOfYear(date: Date | number, dayOfYear: number): Date
  namespace setDayOfYear {}

  function setDefaultOptions(newOptions: {
    locale?: Locale
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  }): void
  namespace setDefaultOptions {}

  function setHours(date: Date | number, hours: number): Date
  namespace setHours {}

  function setISODay(date: Date | number, day: number): Date
  namespace setISODay {}

  function setISOWeek(date: Date | number, isoWeek: number): Date
  namespace setISOWeek {}

  function setISOWeekYear(date: Date | number, isoWeekYear: number): Date
  namespace setISOWeekYear {}

  function setMilliseconds(date: Date | number, milliseconds: number): Date
  namespace setMilliseconds {}

  function setMinutes(date: Date | number, minutes: number): Date
  namespace setMinutes {}

  function setMonth(date: Date | number, month: number): Date
  namespace setMonth {}

  function setQuarter(date: Date | number, quarter: number): Date
  namespace setQuarter {}

  function setSeconds(date: Date | number, seconds: number): Date
  namespace setSeconds {}

  function setWeek(
    date: Date | number,
    week: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeek {}

  function setWeekYear(
    date: Date | number,
    weekYear: number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace setWeekYear {}

  function setYear(date: Date | number, year: number): Date
  namespace setYear {}

  function startOfDay(date: Date | number): Date
  namespace startOfDay {}

  function startOfDecade(date: Date | number): Date
  namespace startOfDecade {}

  function startOfHour(date: Date | number): Date
  namespace startOfHour {}

  function startOfISOWeek(date: Date | number): Date
  namespace startOfISOWeek {}

  function startOfISOWeekYear(date: Date | number): Date
  namespace startOfISOWeekYear {}

  function startOfMinute(date: Date | number): Date
  namespace startOfMinute {}

  function startOfMonth(date: Date | number): Date
  namespace startOfMonth {}

  function startOfQuarter(date: Date | number): Date
  namespace startOfQuarter {}

  function startOfSecond(date: Date | number): Date
  namespace startOfSecond {}

  function startOfToday(): Date
  namespace startOfToday {}

  function startOfTomorrow(): Date
  namespace startOfTomorrow {}

  function startOfWeek(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
    }
  ): Date
  namespace startOfWeek {}

  function startOfWeekYear(
    date: Date | number,
    options?: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }
  ): Date
  namespace startOfWeekYear {}

  function startOfYear(date: Date | number): Date
  namespace startOfYear {}

  function startOfYesterday(): Date
  namespace startOfYesterday {}

  function sub(date: Date | number, duration: Duration): Date
  namespace sub {}

  function subBusinessDays(date: Date | number, amount: number): Date
  namespace subBusinessDays {}

  function subDays(date: Date | number, amount: number): Date
  namespace subDays {}

  function subHours(date: Date | number, amount: number): Date
  namespace subHours {}

  function subISOWeekYears(date: Date | number, amount: number): Date
  namespace subISOWeekYears {}

  function subMilliseconds(date: Date | number, amount: number): Date
  namespace subMilliseconds {}

  function subMinutes(date: Date | number, amount: number): Date
  namespace subMinutes {}

  function subMonths(date: Date | number, amount: number): Date
  namespace subMonths {}

  function subQuarters(date: Date | number, amount: number): Date
  namespace subQuarters {}

  function subSeconds(date: Date | number, amount: number): Date
  namespace subSeconds {}

  function subWeeks(date: Date | number, amount: number): Date
  namespace subWeeks {}

  function subYears(date: Date | number, amount: number): Date
  namespace subYears {}

  function toDate(argument: Date | number): Date
  namespace toDate {}

  function weeksToDays(weeks: number): number
  namespace weeksToDays {}

  function yearsToMonths(years: number): number
  namespace yearsToMonths {}

  function yearsToQuarters(years: number): number
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns-jalali/esm/add' {
  import { add } from 'date-fns-jalali/esm'
  export default add
}

declare module 'date-fns-jalali/esm/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalali/esm'
  export default addBusinessDays
}

declare module 'date-fns-jalali/esm/addDays' {
  import { addDays } from 'date-fns-jalali/esm'
  export default addDays
}

declare module 'date-fns-jalali/esm/addHours' {
  import { addHours } from 'date-fns-jalali/esm'
  export default addHours
}

declare module 'date-fns-jalali/esm/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalali/esm'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/esm/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalali/esm'
  export default addMilliseconds
}

declare module 'date-fns-jalali/esm/addMinutes' {
  import { addMinutes } from 'date-fns-jalali/esm'
  export default addMinutes
}

declare module 'date-fns-jalali/esm/addMonths' {
  import { addMonths } from 'date-fns-jalali/esm'
  export default addMonths
}

declare module 'date-fns-jalali/esm/addQuarters' {
  import { addQuarters } from 'date-fns-jalali/esm'
  export default addQuarters
}

declare module 'date-fns-jalali/esm/addSeconds' {
  import { addSeconds } from 'date-fns-jalali/esm'
  export default addSeconds
}

declare module 'date-fns-jalali/esm/addWeeks' {
  import { addWeeks } from 'date-fns-jalali/esm'
  export default addWeeks
}

declare module 'date-fns-jalali/esm/addYears' {
  import { addYears } from 'date-fns-jalali/esm'
  export default addYears
}

declare module 'date-fns-jalali/esm/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/esm/clamp' {
  import { clamp } from 'date-fns-jalali/esm'
  export default clamp
}

declare module 'date-fns-jalali/esm/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalali/esm'
  export default closestIndexTo
}

declare module 'date-fns-jalali/esm/closestTo' {
  import { closestTo } from 'date-fns-jalali/esm'
  export default closestTo
}

declare module 'date-fns-jalali/esm/compareAsc' {
  import { compareAsc } from 'date-fns-jalali/esm'
  export default compareAsc
}

declare module 'date-fns-jalali/esm/compareDesc' {
  import { compareDesc } from 'date-fns-jalali/esm'
  export default compareDesc
}

declare module 'date-fns-jalali/esm/daysToWeeks' {
  import { daysToWeeks } from 'date-fns-jalali/esm'
  export default daysToWeeks
}

declare module 'date-fns-jalali/esm/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalali/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/esm/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalali/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/esm/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/esm/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/esm/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/esm/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/esm/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/esm/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalali/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/esm/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalali/esm'
  export default differenceInDays
}

declare module 'date-fns-jalali/esm/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalali/esm'
  export default differenceInHours
}

declare module 'date-fns-jalali/esm/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/esm/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalali/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/esm/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalali/esm'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/esm/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalali/esm'
  export default differenceInMonths
}

declare module 'date-fns-jalali/esm/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalali/esm'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/esm/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalali/esm'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/esm/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalali/esm'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/esm/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalali/esm'
  export default differenceInYears
}

declare module 'date-fns-jalali/esm/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalali/esm'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/esm/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns-jalali/esm'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/esm/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/esm/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalali/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/esm/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/esm'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/esm/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/esm/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/esm/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalali/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/esm/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalali/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/esm/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalali/esm'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/esm/endOfDay' {
  import { endOfDay } from 'date-fns-jalali/esm'
  export default endOfDay
}

declare module 'date-fns-jalali/esm/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalali/esm'
  export default endOfDecade
}

declare module 'date-fns-jalali/esm/endOfHour' {
  import { endOfHour } from 'date-fns-jalali/esm'
  export default endOfHour
}

declare module 'date-fns-jalali/esm/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalali/esm'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/esm/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalali/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/esm/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalali/esm'
  export default endOfMinute
}

declare module 'date-fns-jalali/esm/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalali/esm'
  export default endOfMonth
}

declare module 'date-fns-jalali/esm/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalali/esm'
  export default endOfQuarter
}

declare module 'date-fns-jalali/esm/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalali/esm'
  export default endOfSecond
}

declare module 'date-fns-jalali/esm/endOfToday' {
  import { endOfToday } from 'date-fns-jalali/esm'
  export default endOfToday
}

declare module 'date-fns-jalali/esm/endOfTomorrow' {
  import { endOfTomorrow } from 'date-fns-jalali/esm'
  export default endOfTomorrow
}

declare module 'date-fns-jalali/esm/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalali/esm'
  export default endOfWeek
}

declare module 'date-fns-jalali/esm/endOfYear' {
  import { endOfYear } from 'date-fns-jalali/esm'
  export default endOfYear
}

declare module 'date-fns-jalali/esm/endOfYesterday' {
  import { endOfYesterday } from 'date-fns-jalali/esm'
  export default endOfYesterday
}

declare module 'date-fns-jalali/esm/format' {
  import { format } from 'date-fns-jalali/esm'
  export default format
}

declare module 'date-fns-jalali/esm/formatDistance' {
  import { formatDistance } from 'date-fns-jalali/esm'
  export default formatDistance
}

declare module 'date-fns-jalali/esm/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalali/esm'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/esm/formatDistanceToNow' {
  import { formatDistanceToNow } from 'date-fns-jalali/esm'
  export default formatDistanceToNow
}

declare module 'date-fns-jalali/esm/formatDistanceToNowStrict' {
  import { formatDistanceToNowStrict } from 'date-fns-jalali/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalali/esm/formatDuration' {
  import { formatDuration } from 'date-fns-jalali/esm'
  export default formatDuration
}

declare module 'date-fns-jalali/esm/formatISO' {
  import { formatISO } from 'date-fns-jalali/esm'
  export default formatISO
}

declare module 'date-fns-jalali/esm/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalali/esm'
  export default formatISO9075
}

declare module 'date-fns-jalali/esm/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalali/esm'
  export default formatISODuration
}

declare module 'date-fns-jalali/esm/formatRelative' {
  import { formatRelative } from 'date-fns-jalali/esm'
  export default formatRelative
}

declare module 'date-fns-jalali/esm/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalali/esm'
  export default formatRFC3339
}

declare module 'date-fns-jalali/esm/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalali/esm'
  export default formatRFC7231
}

declare module 'date-fns-jalali/esm/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalali/esm'
  export default fromUnixTime
}

declare module 'date-fns-jalali/esm/getDate' {
  import { getDate } from 'date-fns-jalali/esm'
  export default getDate
}

declare module 'date-fns-jalali/esm/getDay' {
  import { getDay } from 'date-fns-jalali/esm'
  export default getDay
}

declare module 'date-fns-jalali/esm/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalali/esm'
  export default getDayOfYear
}

declare module 'date-fns-jalali/esm/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalali/esm'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/esm/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalali/esm'
  export default getDaysInYear
}

declare module 'date-fns-jalali/esm/getDecade' {
  import { getDecade } from 'date-fns-jalali/esm'
  export default getDecade
}

declare module 'date-fns-jalali/esm/getDefaultOptions' {
  import { getDefaultOptions } from 'date-fns-jalali/esm'
  export default getDefaultOptions
}

declare module 'date-fns-jalali/esm/getHours' {
  import { getHours } from 'date-fns-jalali/esm'
  export default getHours
}

declare module 'date-fns-jalali/esm/getISODay' {
  import { getISODay } from 'date-fns-jalali/esm'
  export default getISODay
}

declare module 'date-fns-jalali/esm/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalali/esm'
  export default getISOWeek
}

declare module 'date-fns-jalali/esm/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalali/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/esm/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalali/esm'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/esm/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalali/esm'
  export default getMilliseconds
}

declare module 'date-fns-jalali/esm/getMinutes' {
  import { getMinutes } from 'date-fns-jalali/esm'
  export default getMinutes
}

declare module 'date-fns-jalali/esm/getMonth' {
  import { getMonth } from 'date-fns-jalali/esm'
  export default getMonth
}

declare module 'date-fns-jalali/esm/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/esm/getQuarter' {
  import { getQuarter } from 'date-fns-jalali/esm'
  export default getQuarter
}

declare module 'date-fns-jalali/esm/getSeconds' {
  import { getSeconds } from 'date-fns-jalali/esm'
  export default getSeconds
}

declare module 'date-fns-jalali/esm/getTime' {
  import { getTime } from 'date-fns-jalali/esm'
  export default getTime
}

declare module 'date-fns-jalali/esm/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalali/esm'
  export default getUnixTime
}

declare module 'date-fns-jalali/esm/getWeek' {
  import { getWeek } from 'date-fns-jalali/esm'
  export default getWeek
}

declare module 'date-fns-jalali/esm/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalali/esm'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/esm/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalali/esm'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/esm/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalali/esm'
  export default getWeekYear
}

declare module 'date-fns-jalali/esm/getYear' {
  import { getYear } from 'date-fns-jalali/esm'
  export default getYear
}

declare module 'date-fns-jalali/esm/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns-jalali/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/esm/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns-jalali/esm'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/esm/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns-jalali/esm'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/esm/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalali/esm'
  export default intervalToDuration
}

declare module 'date-fns-jalali/esm/intlFormat' {
  import { intlFormat } from 'date-fns-jalali/esm'
  export default intlFormat
}

declare module 'date-fns-jalali/esm/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns-jalali/esm'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/esm/isAfter' {
  import { isAfter } from 'date-fns-jalali/esm'
  export default isAfter
}

declare module 'date-fns-jalali/esm/isBefore' {
  import { isBefore } from 'date-fns-jalali/esm'
  export default isBefore
}

declare module 'date-fns-jalali/esm/isDate' {
  import { isDate } from 'date-fns-jalali/esm'
  export default isDate
}

declare module 'date-fns-jalali/esm/isEqual' {
  import { isEqual } from 'date-fns-jalali/esm'
  export default isEqual
}

declare module 'date-fns-jalali/esm/isExists' {
  import { isExists } from 'date-fns-jalali/esm'
  export default isExists
}

declare module 'date-fns-jalali/esm/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/esm/isFriday' {
  import { isFriday } from 'date-fns-jalali/esm'
  export default isFriday
}

declare module 'date-fns-jalali/esm/isFuture' {
  import { isFuture } from 'date-fns-jalali/esm'
  export default isFuture
}

declare module 'date-fns-jalali/esm/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalali/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/esm/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalali/esm'
  export default isLeapYear
}

declare module 'date-fns-jalali/esm/isMatch' {
  import { isMatch } from 'date-fns-jalali/esm'
  export default isMatch
}

declare module 'date-fns-jalali/esm/isMonday' {
  import { isMonday } from 'date-fns-jalali/esm'
  export default isMonday
}

declare module 'date-fns-jalali/esm/isPast' {
  import { isPast } from 'date-fns-jalali/esm'
  export default isPast
}

declare module 'date-fns-jalali/esm/isSameDay' {
  import { isSameDay } from 'date-fns-jalali/esm'
  export default isSameDay
}

declare module 'date-fns-jalali/esm/isSameHour' {
  import { isSameHour } from 'date-fns-jalali/esm'
  export default isSameHour
}

declare module 'date-fns-jalali/esm/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalali/esm'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/esm/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalali/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/esm/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalali/esm'
  export default isSameMinute
}

declare module 'date-fns-jalali/esm/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalali/esm'
  export default isSameMonth
}

declare module 'date-fns-jalali/esm/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalali/esm'
  export default isSameQuarter
}

declare module 'date-fns-jalali/esm/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalali/esm'
  export default isSameSecond
}

declare module 'date-fns-jalali/esm/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalali/esm'
  export default isSameWeek
}

declare module 'date-fns-jalali/esm/isSameYear' {
  import { isSameYear } from 'date-fns-jalali/esm'
  export default isSameYear
}

declare module 'date-fns-jalali/esm/isSaturday' {
  import { isSaturday } from 'date-fns-jalali/esm'
  export default isSaturday
}

declare module 'date-fns-jalali/esm/isSunday' {
  import { isSunday } from 'date-fns-jalali/esm'
  export default isSunday
}

declare module 'date-fns-jalali/esm/isThisHour' {
  import { isThisHour } from 'date-fns-jalali/esm'
  export default isThisHour
}

declare module 'date-fns-jalali/esm/isThisISOWeek' {
  import { isThisISOWeek } from 'date-fns-jalali/esm'
  export default isThisISOWeek
}

declare module 'date-fns-jalali/esm/isThisMinute' {
  import { isThisMinute } from 'date-fns-jalali/esm'
  export default isThisMinute
}

declare module 'date-fns-jalali/esm/isThisMonth' {
  import { isThisMonth } from 'date-fns-jalali/esm'
  export default isThisMonth
}

declare module 'date-fns-jalali/esm/isThisQuarter' {
  import { isThisQuarter } from 'date-fns-jalali/esm'
  export default isThisQuarter
}

declare module 'date-fns-jalali/esm/isThisSecond' {
  import { isThisSecond } from 'date-fns-jalali/esm'
  export default isThisSecond
}

declare module 'date-fns-jalali/esm/isThisWeek' {
  import { isThisWeek } from 'date-fns-jalali/esm'
  export default isThisWeek
}

declare module 'date-fns-jalali/esm/isThisYear' {
  import { isThisYear } from 'date-fns-jalali/esm'
  export default isThisYear
}

declare module 'date-fns-jalali/esm/isThursday' {
  import { isThursday } from 'date-fns-jalali/esm'
  export default isThursday
}

declare module 'date-fns-jalali/esm/isToday' {
  import { isToday } from 'date-fns-jalali/esm'
  export default isToday
}

declare module 'date-fns-jalali/esm/isTomorrow' {
  import { isTomorrow } from 'date-fns-jalali/esm'
  export default isTomorrow
}

declare module 'date-fns-jalali/esm/isTuesday' {
  import { isTuesday } from 'date-fns-jalali/esm'
  export default isTuesday
}

declare module 'date-fns-jalali/esm/isValid' {
  import { isValid } from 'date-fns-jalali/esm'
  export default isValid
}

declare module 'date-fns-jalali/esm/isWednesday' {
  import { isWednesday } from 'date-fns-jalali/esm'
  export default isWednesday
}

declare module 'date-fns-jalali/esm/isWeekend' {
  import { isWeekend } from 'date-fns-jalali/esm'
  export default isWeekend
}

declare module 'date-fns-jalali/esm/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalali/esm'
  export default isWithinInterval
}

declare module 'date-fns-jalali/esm/isYesterday' {
  import { isYesterday } from 'date-fns-jalali/esm'
  export default isYesterday
}

declare module 'date-fns-jalali/esm/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalali/esm'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/esm/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/esm/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/esm/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalali/esm'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/esm/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalali/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/esm/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalali/esm'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/esm/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalali/esm'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/esm/lightFormat' {
  import { lightFormat } from 'date-fns-jalali/esm'
  export default lightFormat
}

declare module 'date-fns-jalali/esm/max' {
  import { max } from 'date-fns-jalali/esm'
  export default max
}

declare module 'date-fns-jalali/esm/milliseconds' {
  import { milliseconds } from 'date-fns-jalali/esm'
  export default milliseconds
}

declare module 'date-fns-jalali/esm/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns-jalali/esm'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/esm/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns-jalali/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/esm/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns-jalali/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/esm/min' {
  import { min } from 'date-fns-jalali/esm'
  export default min
}

declare module 'date-fns-jalali/esm/minutesToHours' {
  import { minutesToHours } from 'date-fns-jalali/esm'
  export default minutesToHours
}

declare module 'date-fns-jalali/esm/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns-jalali/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/esm/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns-jalali/esm'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/esm/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns-jalali/esm'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/esm/monthsToYears' {
  import { monthsToYears } from 'date-fns-jalali/esm'
  export default monthsToYears
}

declare module 'date-fns-jalali/esm/newDate' {
  import { newDate } from 'date-fns-jalali/esm'
  export default newDate
}

declare module 'date-fns-jalali/esm/nextDay' {
  import { nextDay } from 'date-fns-jalali/esm'
  export default nextDay
}

declare module 'date-fns-jalali/esm/nextFriday' {
  import { nextFriday } from 'date-fns-jalali/esm'
  export default nextFriday
}

declare module 'date-fns-jalali/esm/nextMonday' {
  import { nextMonday } from 'date-fns-jalali/esm'
  export default nextMonday
}

declare module 'date-fns-jalali/esm/nextSaturday' {
  import { nextSaturday } from 'date-fns-jalali/esm'
  export default nextSaturday
}

declare module 'date-fns-jalali/esm/nextSunday' {
  import { nextSunday } from 'date-fns-jalali/esm'
  export default nextSunday
}

declare module 'date-fns-jalali/esm/nextThursday' {
  import { nextThursday } from 'date-fns-jalali/esm'
  export default nextThursday
}

declare module 'date-fns-jalali/esm/nextTuesday' {
  import { nextTuesday } from 'date-fns-jalali/esm'
  export default nextTuesday
}

declare module 'date-fns-jalali/esm/nextWednesday' {
  import { nextWednesday } from 'date-fns-jalali/esm'
  export default nextWednesday
}

declare module 'date-fns-jalali/esm/parse' {
  import { parse } from 'date-fns-jalali/esm'
  export default parse
}

declare module 'date-fns-jalali/esm/parseISO' {
  import { parseISO } from 'date-fns-jalali/esm'
  export default parseISO
}

declare module 'date-fns-jalali/esm/parseJSON' {
  import { parseJSON } from 'date-fns-jalali/esm'
  export default parseJSON
}

declare module 'date-fns-jalali/esm/previousDay' {
  import { previousDay } from 'date-fns-jalali/esm'
  export default previousDay
}

declare module 'date-fns-jalali/esm/previousFriday' {
  import { previousFriday } from 'date-fns-jalali/esm'
  export default previousFriday
}

declare module 'date-fns-jalali/esm/previousMonday' {
  import { previousMonday } from 'date-fns-jalali/esm'
  export default previousMonday
}

declare module 'date-fns-jalali/esm/previousSaturday' {
  import { previousSaturday } from 'date-fns-jalali/esm'
  export default previousSaturday
}

declare module 'date-fns-jalali/esm/previousSunday' {
  import { previousSunday } from 'date-fns-jalali/esm'
  export default previousSunday
}

declare module 'date-fns-jalali/esm/previousThursday' {
  import { previousThursday } from 'date-fns-jalali/esm'
  export default previousThursday
}

declare module 'date-fns-jalali/esm/previousTuesday' {
  import { previousTuesday } from 'date-fns-jalali/esm'
  export default previousTuesday
}

declare module 'date-fns-jalali/esm/previousWednesday' {
  import { previousWednesday } from 'date-fns-jalali/esm'
  export default previousWednesday
}

declare module 'date-fns-jalali/esm/quartersToMonths' {
  import { quartersToMonths } from 'date-fns-jalali/esm'
  export default quartersToMonths
}

declare module 'date-fns-jalali/esm/quartersToYears' {
  import { quartersToYears } from 'date-fns-jalali/esm'
  export default quartersToYears
}

declare module 'date-fns-jalali/esm/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalali/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/esm/secondsToHours' {
  import { secondsToHours } from 'date-fns-jalali/esm'
  export default secondsToHours
}

declare module 'date-fns-jalali/esm/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns-jalali/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/esm/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns-jalali/esm'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/esm/set' {
  import { set } from 'date-fns-jalali/esm'
  export default set
}

declare module 'date-fns-jalali/esm/setDate' {
  import { setDate } from 'date-fns-jalali/esm'
  export default setDate
}

declare module 'date-fns-jalali/esm/setDay' {
  import { setDay } from 'date-fns-jalali/esm'
  export default setDay
}

declare module 'date-fns-jalali/esm/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalali/esm'
  export default setDayOfYear
}

declare module 'date-fns-jalali/esm/setDefaultOptions' {
  import { setDefaultOptions } from 'date-fns-jalali/esm'
  export default setDefaultOptions
}

declare module 'date-fns-jalali/esm/setHours' {
  import { setHours } from 'date-fns-jalali/esm'
  export default setHours
}

declare module 'date-fns-jalali/esm/setISODay' {
  import { setISODay } from 'date-fns-jalali/esm'
  export default setISODay
}

declare module 'date-fns-jalali/esm/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalali/esm'
  export default setISOWeek
}

declare module 'date-fns-jalali/esm/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalali/esm'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/esm/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalali/esm'
  export default setMilliseconds
}

declare module 'date-fns-jalali/esm/setMinutes' {
  import { setMinutes } from 'date-fns-jalali/esm'
  export default setMinutes
}

declare module 'date-fns-jalali/esm/setMonth' {
  import { setMonth } from 'date-fns-jalali/esm'
  export default setMonth
}

declare module 'date-fns-jalali/esm/setQuarter' {
  import { setQuarter } from 'date-fns-jalali/esm'
  export default setQuarter
}

declare module 'date-fns-jalali/esm/setSeconds' {
  import { setSeconds } from 'date-fns-jalali/esm'
  export default setSeconds
}

declare module 'date-fns-jalali/esm/setWeek' {
  import { setWeek } from 'date-fns-jalali/esm'
  export default setWeek
}

declare module 'date-fns-jalali/esm/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalali/esm'
  export default setWeekYear
}

declare module 'date-fns-jalali/esm/setYear' {
  import { setYear } from 'date-fns-jalali/esm'
  export default setYear
}

declare module 'date-fns-jalali/esm/startOfDay' {
  import { startOfDay } from 'date-fns-jalali/esm'
  export default startOfDay
}

declare module 'date-fns-jalali/esm/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalali/esm'
  export default startOfDecade
}

declare module 'date-fns-jalali/esm/startOfHour' {
  import { startOfHour } from 'date-fns-jalali/esm'
  export default startOfHour
}

declare module 'date-fns-jalali/esm/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalali/esm'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/esm/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalali/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/esm/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalali/esm'
  export default startOfMinute
}

declare module 'date-fns-jalali/esm/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalali/esm'
  export default startOfMonth
}

declare module 'date-fns-jalali/esm/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalali/esm'
  export default startOfQuarter
}

declare module 'date-fns-jalali/esm/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalali/esm'
  export default startOfSecond
}

declare module 'date-fns-jalali/esm/startOfToday' {
  import { startOfToday } from 'date-fns-jalali/esm'
  export default startOfToday
}

declare module 'date-fns-jalali/esm/startOfTomorrow' {
  import { startOfTomorrow } from 'date-fns-jalali/esm'
  export default startOfTomorrow
}

declare module 'date-fns-jalali/esm/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalali/esm'
  export default startOfWeek
}

declare module 'date-fns-jalali/esm/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalali/esm'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/esm/startOfYear' {
  import { startOfYear } from 'date-fns-jalali/esm'
  export default startOfYear
}

declare module 'date-fns-jalali/esm/startOfYesterday' {
  import { startOfYesterday } from 'date-fns-jalali/esm'
  export default startOfYesterday
}

declare module 'date-fns-jalali/esm/sub' {
  import { sub } from 'date-fns-jalali/esm'
  export default sub
}

declare module 'date-fns-jalali/esm/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalali/esm'
  export default subBusinessDays
}

declare module 'date-fns-jalali/esm/subDays' {
  import { subDays } from 'date-fns-jalali/esm'
  export default subDays
}

declare module 'date-fns-jalali/esm/subHours' {
  import { subHours } from 'date-fns-jalali/esm'
  export default subHours
}

declare module 'date-fns-jalali/esm/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalali/esm'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/esm/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalali/esm'
  export default subMilliseconds
}

declare module 'date-fns-jalali/esm/subMinutes' {
  import { subMinutes } from 'date-fns-jalali/esm'
  export default subMinutes
}

declare module 'date-fns-jalali/esm/subMonths' {
  import { subMonths } from 'date-fns-jalali/esm'
  export default subMonths
}

declare module 'date-fns-jalali/esm/subQuarters' {
  import { subQuarters } from 'date-fns-jalali/esm'
  export default subQuarters
}

declare module 'date-fns-jalali/esm/subSeconds' {
  import { subSeconds } from 'date-fns-jalali/esm'
  export default subSeconds
}

declare module 'date-fns-jalali/esm/subWeeks' {
  import { subWeeks } from 'date-fns-jalali/esm'
  export default subWeeks
}

declare module 'date-fns-jalali/esm/subYears' {
  import { subYears } from 'date-fns-jalali/esm'
  export default subYears
}

declare module 'date-fns-jalali/esm/toDate' {
  import { toDate } from 'date-fns-jalali/esm'
  export default toDate
}

declare module 'date-fns-jalali/esm/weeksToDays' {
  import { weeksToDays } from 'date-fns-jalali/esm'
  export default weeksToDays
}

declare module 'date-fns-jalali/esm/yearsToMonths' {
  import { yearsToMonths } from 'date-fns-jalali/esm'
  export default yearsToMonths
}

declare module 'date-fns-jalali/esm/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns-jalali/esm'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/esm/add/index' {
  import { add } from 'date-fns-jalali/esm'
  export default add
}

declare module 'date-fns-jalali/esm/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalali/esm'
  export default addBusinessDays
}

declare module 'date-fns-jalali/esm/addDays/index' {
  import { addDays } from 'date-fns-jalali/esm'
  export default addDays
}

declare module 'date-fns-jalali/esm/addHours/index' {
  import { addHours } from 'date-fns-jalali/esm'
  export default addHours
}

declare module 'date-fns-jalali/esm/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalali/esm'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/esm/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalali/esm'
  export default addMilliseconds
}

declare module 'date-fns-jalali/esm/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalali/esm'
  export default addMinutes
}

declare module 'date-fns-jalali/esm/addMonths/index' {
  import { addMonths } from 'date-fns-jalali/esm'
  export default addMonths
}

declare module 'date-fns-jalali/esm/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalali/esm'
  export default addQuarters
}

declare module 'date-fns-jalali/esm/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalali/esm'
  export default addSeconds
}

declare module 'date-fns-jalali/esm/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalali/esm'
  export default addWeeks
}

declare module 'date-fns-jalali/esm/addYears/index' {
  import { addYears } from 'date-fns-jalali/esm'
  export default addYears
}

declare module 'date-fns-jalali/esm/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/esm/clamp/index' {
  import { clamp } from 'date-fns-jalali/esm'
  export default clamp
}

declare module 'date-fns-jalali/esm/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalali/esm'
  export default closestIndexTo
}

declare module 'date-fns-jalali/esm/closestTo/index' {
  import { closestTo } from 'date-fns-jalali/esm'
  export default closestTo
}

declare module 'date-fns-jalali/esm/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalali/esm'
  export default compareAsc
}

declare module 'date-fns-jalali/esm/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalali/esm'
  export default compareDesc
}

declare module 'date-fns-jalali/esm/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns-jalali/esm'
  export default daysToWeeks
}

declare module 'date-fns-jalali/esm/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalali/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/esm/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalali/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/esm/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/esm/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/esm/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/esm/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/esm/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/esm/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalali/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/esm/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalali/esm'
  export default differenceInDays
}

declare module 'date-fns-jalali/esm/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalali/esm'
  export default differenceInHours
}

declare module 'date-fns-jalali/esm/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/esm/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalali/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/esm/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalali/esm'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/esm/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalali/esm'
  export default differenceInMonths
}

declare module 'date-fns-jalali/esm/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalali/esm'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/esm/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalali/esm'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/esm/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalali/esm'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/esm/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalali/esm'
  export default differenceInYears
}

declare module 'date-fns-jalali/esm/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalali/esm'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/esm/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns-jalali/esm'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/esm/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/esm/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalali/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/esm/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/esm'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/esm/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/esm/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/esm/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalali/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/esm/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalali/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/esm/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalali/esm'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/esm/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalali/esm'
  export default endOfDay
}

declare module 'date-fns-jalali/esm/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalali/esm'
  export default endOfDecade
}

declare module 'date-fns-jalali/esm/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalali/esm'
  export default endOfHour
}

declare module 'date-fns-jalali/esm/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalali/esm'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/esm/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalali/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/esm/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalali/esm'
  export default endOfMinute
}

declare module 'date-fns-jalali/esm/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalali/esm'
  export default endOfMonth
}

declare module 'date-fns-jalali/esm/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalali/esm'
  export default endOfQuarter
}

declare module 'date-fns-jalali/esm/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalali/esm'
  export default endOfSecond
}

declare module 'date-fns-jalali/esm/endOfToday/index' {
  import { endOfToday } from 'date-fns-jalali/esm'
  export default endOfToday
}

declare module 'date-fns-jalali/esm/endOfTomorrow/index' {
  import { endOfTomorrow } from 'date-fns-jalali/esm'
  export default endOfTomorrow
}

declare module 'date-fns-jalali/esm/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalali/esm'
  export default endOfWeek
}

declare module 'date-fns-jalali/esm/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalali/esm'
  export default endOfYear
}

declare module 'date-fns-jalali/esm/endOfYesterday/index' {
  import { endOfYesterday } from 'date-fns-jalali/esm'
  export default endOfYesterday
}

declare module 'date-fns-jalali/esm/format/index' {
  import { format } from 'date-fns-jalali/esm'
  export default format
}

declare module 'date-fns-jalali/esm/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalali/esm'
  export default formatDistance
}

declare module 'date-fns-jalali/esm/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalali/esm'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/esm/formatDistanceToNow/index' {
  import { formatDistanceToNow } from 'date-fns-jalali/esm'
  export default formatDistanceToNow
}

declare module 'date-fns-jalali/esm/formatDistanceToNowStrict/index' {
  import { formatDistanceToNowStrict } from 'date-fns-jalali/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalali/esm/formatDuration/index' {
  import { formatDuration } from 'date-fns-jalali/esm'
  export default formatDuration
}

declare module 'date-fns-jalali/esm/formatISO/index' {
  import { formatISO } from 'date-fns-jalali/esm'
  export default formatISO
}

declare module 'date-fns-jalali/esm/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalali/esm'
  export default formatISO9075
}

declare module 'date-fns-jalali/esm/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalali/esm'
  export default formatISODuration
}

declare module 'date-fns-jalali/esm/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalali/esm'
  export default formatRelative
}

declare module 'date-fns-jalali/esm/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalali/esm'
  export default formatRFC3339
}

declare module 'date-fns-jalali/esm/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalali/esm'
  export default formatRFC7231
}

declare module 'date-fns-jalali/esm/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalali/esm'
  export default fromUnixTime
}

declare module 'date-fns-jalali/esm/getDate/index' {
  import { getDate } from 'date-fns-jalali/esm'
  export default getDate
}

declare module 'date-fns-jalali/esm/getDay/index' {
  import { getDay } from 'date-fns-jalali/esm'
  export default getDay
}

declare module 'date-fns-jalali/esm/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalali/esm'
  export default getDayOfYear
}

declare module 'date-fns-jalali/esm/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalali/esm'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/esm/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalali/esm'
  export default getDaysInYear
}

declare module 'date-fns-jalali/esm/getDecade/index' {
  import { getDecade } from 'date-fns-jalali/esm'
  export default getDecade
}

declare module 'date-fns-jalali/esm/getDefaultOptions/index' {
  import { getDefaultOptions } from 'date-fns-jalali/esm'
  export default getDefaultOptions
}

declare module 'date-fns-jalali/esm/getHours/index' {
  import { getHours } from 'date-fns-jalali/esm'
  export default getHours
}

declare module 'date-fns-jalali/esm/getISODay/index' {
  import { getISODay } from 'date-fns-jalali/esm'
  export default getISODay
}

declare module 'date-fns-jalali/esm/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalali/esm'
  export default getISOWeek
}

declare module 'date-fns-jalali/esm/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalali/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/esm/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalali/esm'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/esm/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalali/esm'
  export default getMilliseconds
}

declare module 'date-fns-jalali/esm/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalali/esm'
  export default getMinutes
}

declare module 'date-fns-jalali/esm/getMonth/index' {
  import { getMonth } from 'date-fns-jalali/esm'
  export default getMonth
}

declare module 'date-fns-jalali/esm/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/esm/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalali/esm'
  export default getQuarter
}

declare module 'date-fns-jalali/esm/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalali/esm'
  export default getSeconds
}

declare module 'date-fns-jalali/esm/getTime/index' {
  import { getTime } from 'date-fns-jalali/esm'
  export default getTime
}

declare module 'date-fns-jalali/esm/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalali/esm'
  export default getUnixTime
}

declare module 'date-fns-jalali/esm/getWeek/index' {
  import { getWeek } from 'date-fns-jalali/esm'
  export default getWeek
}

declare module 'date-fns-jalali/esm/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalali/esm'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/esm/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalali/esm'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/esm/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalali/esm'
  export default getWeekYear
}

declare module 'date-fns-jalali/esm/getYear/index' {
  import { getYear } from 'date-fns-jalali/esm'
  export default getYear
}

declare module 'date-fns-jalali/esm/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns-jalali/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/esm/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns-jalali/esm'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/esm/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns-jalali/esm'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/esm/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalali/esm'
  export default intervalToDuration
}

declare module 'date-fns-jalali/esm/intlFormat/index' {
  import { intlFormat } from 'date-fns-jalali/esm'
  export default intlFormat
}

declare module 'date-fns-jalali/esm/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns-jalali/esm'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/esm/isAfter/index' {
  import { isAfter } from 'date-fns-jalali/esm'
  export default isAfter
}

declare module 'date-fns-jalali/esm/isBefore/index' {
  import { isBefore } from 'date-fns-jalali/esm'
  export default isBefore
}

declare module 'date-fns-jalali/esm/isDate/index' {
  import { isDate } from 'date-fns-jalali/esm'
  export default isDate
}

declare module 'date-fns-jalali/esm/isEqual/index' {
  import { isEqual } from 'date-fns-jalali/esm'
  export default isEqual
}

declare module 'date-fns-jalali/esm/isExists/index' {
  import { isExists } from 'date-fns-jalali/esm'
  export default isExists
}

declare module 'date-fns-jalali/esm/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/esm/isFriday/index' {
  import { isFriday } from 'date-fns-jalali/esm'
  export default isFriday
}

declare module 'date-fns-jalali/esm/isFuture/index' {
  import { isFuture } from 'date-fns-jalali/esm'
  export default isFuture
}

declare module 'date-fns-jalali/esm/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalali/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/esm/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalali/esm'
  export default isLeapYear
}

declare module 'date-fns-jalali/esm/isMatch/index' {
  import { isMatch } from 'date-fns-jalali/esm'
  export default isMatch
}

declare module 'date-fns-jalali/esm/isMonday/index' {
  import { isMonday } from 'date-fns-jalali/esm'
  export default isMonday
}

declare module 'date-fns-jalali/esm/isPast/index' {
  import { isPast } from 'date-fns-jalali/esm'
  export default isPast
}

declare module 'date-fns-jalali/esm/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalali/esm'
  export default isSameDay
}

declare module 'date-fns-jalali/esm/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalali/esm'
  export default isSameHour
}

declare module 'date-fns-jalali/esm/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalali/esm'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/esm/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalali/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/esm/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalali/esm'
  export default isSameMinute
}

declare module 'date-fns-jalali/esm/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalali/esm'
  export default isSameMonth
}

declare module 'date-fns-jalali/esm/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalali/esm'
  export default isSameQuarter
}

declare module 'date-fns-jalali/esm/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalali/esm'
  export default isSameSecond
}

declare module 'date-fns-jalali/esm/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalali/esm'
  export default isSameWeek
}

declare module 'date-fns-jalali/esm/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalali/esm'
  export default isSameYear
}

declare module 'date-fns-jalali/esm/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalali/esm'
  export default isSaturday
}

declare module 'date-fns-jalali/esm/isSunday/index' {
  import { isSunday } from 'date-fns-jalali/esm'
  export default isSunday
}

declare module 'date-fns-jalali/esm/isThisHour/index' {
  import { isThisHour } from 'date-fns-jalali/esm'
  export default isThisHour
}

declare module 'date-fns-jalali/esm/isThisISOWeek/index' {
  import { isThisISOWeek } from 'date-fns-jalali/esm'
  export default isThisISOWeek
}

declare module 'date-fns-jalali/esm/isThisMinute/index' {
  import { isThisMinute } from 'date-fns-jalali/esm'
  export default isThisMinute
}

declare module 'date-fns-jalali/esm/isThisMonth/index' {
  import { isThisMonth } from 'date-fns-jalali/esm'
  export default isThisMonth
}

declare module 'date-fns-jalali/esm/isThisQuarter/index' {
  import { isThisQuarter } from 'date-fns-jalali/esm'
  export default isThisQuarter
}

declare module 'date-fns-jalali/esm/isThisSecond/index' {
  import { isThisSecond } from 'date-fns-jalali/esm'
  export default isThisSecond
}

declare module 'date-fns-jalali/esm/isThisWeek/index' {
  import { isThisWeek } from 'date-fns-jalali/esm'
  export default isThisWeek
}

declare module 'date-fns-jalali/esm/isThisYear/index' {
  import { isThisYear } from 'date-fns-jalali/esm'
  export default isThisYear
}

declare module 'date-fns-jalali/esm/isThursday/index' {
  import { isThursday } from 'date-fns-jalali/esm'
  export default isThursday
}

declare module 'date-fns-jalali/esm/isToday/index' {
  import { isToday } from 'date-fns-jalali/esm'
  export default isToday
}

declare module 'date-fns-jalali/esm/isTomorrow/index' {
  import { isTomorrow } from 'date-fns-jalali/esm'
  export default isTomorrow
}

declare module 'date-fns-jalali/esm/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalali/esm'
  export default isTuesday
}

declare module 'date-fns-jalali/esm/isValid/index' {
  import { isValid } from 'date-fns-jalali/esm'
  export default isValid
}

declare module 'date-fns-jalali/esm/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalali/esm'
  export default isWednesday
}

declare module 'date-fns-jalali/esm/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalali/esm'
  export default isWeekend
}

declare module 'date-fns-jalali/esm/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalali/esm'
  export default isWithinInterval
}

declare module 'date-fns-jalali/esm/isYesterday/index' {
  import { isYesterday } from 'date-fns-jalali/esm'
  export default isYesterday
}

declare module 'date-fns-jalali/esm/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalali/esm'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/esm/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/esm/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/esm/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalali/esm'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/esm/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalali/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/esm/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalali/esm'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/esm/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalali/esm'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/esm/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalali/esm'
  export default lightFormat
}

declare module 'date-fns-jalali/esm/max/index' {
  import { max } from 'date-fns-jalali/esm'
  export default max
}

declare module 'date-fns-jalali/esm/milliseconds/index' {
  import { milliseconds } from 'date-fns-jalali/esm'
  export default milliseconds
}

declare module 'date-fns-jalali/esm/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns-jalali/esm'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/esm/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns-jalali/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/esm/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns-jalali/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/esm/min/index' {
  import { min } from 'date-fns-jalali/esm'
  export default min
}

declare module 'date-fns-jalali/esm/minutesToHours/index' {
  import { minutesToHours } from 'date-fns-jalali/esm'
  export default minutesToHours
}

declare module 'date-fns-jalali/esm/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns-jalali/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/esm/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns-jalali/esm'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/esm/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns-jalali/esm'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/esm/monthsToYears/index' {
  import { monthsToYears } from 'date-fns-jalali/esm'
  export default monthsToYears
}

declare module 'date-fns-jalali/esm/newDate/index' {
  import { newDate } from 'date-fns-jalali/esm'
  export default newDate
}

declare module 'date-fns-jalali/esm/nextDay/index' {
  import { nextDay } from 'date-fns-jalali/esm'
  export default nextDay
}

declare module 'date-fns-jalali/esm/nextFriday/index' {
  import { nextFriday } from 'date-fns-jalali/esm'
  export default nextFriday
}

declare module 'date-fns-jalali/esm/nextMonday/index' {
  import { nextMonday } from 'date-fns-jalali/esm'
  export default nextMonday
}

declare module 'date-fns-jalali/esm/nextSaturday/index' {
  import { nextSaturday } from 'date-fns-jalali/esm'
  export default nextSaturday
}

declare module 'date-fns-jalali/esm/nextSunday/index' {
  import { nextSunday } from 'date-fns-jalali/esm'
  export default nextSunday
}

declare module 'date-fns-jalali/esm/nextThursday/index' {
  import { nextThursday } from 'date-fns-jalali/esm'
  export default nextThursday
}

declare module 'date-fns-jalali/esm/nextTuesday/index' {
  import { nextTuesday } from 'date-fns-jalali/esm'
  export default nextTuesday
}

declare module 'date-fns-jalali/esm/nextWednesday/index' {
  import { nextWednesday } from 'date-fns-jalali/esm'
  export default nextWednesday
}

declare module 'date-fns-jalali/esm/parse/index' {
  import { parse } from 'date-fns-jalali/esm'
  export default parse
}

declare module 'date-fns-jalali/esm/parseISO/index' {
  import { parseISO } from 'date-fns-jalali/esm'
  export default parseISO
}

declare module 'date-fns-jalali/esm/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalali/esm'
  export default parseJSON
}

declare module 'date-fns-jalali/esm/previousDay/index' {
  import { previousDay } from 'date-fns-jalali/esm'
  export default previousDay
}

declare module 'date-fns-jalali/esm/previousFriday/index' {
  import { previousFriday } from 'date-fns-jalali/esm'
  export default previousFriday
}

declare module 'date-fns-jalali/esm/previousMonday/index' {
  import { previousMonday } from 'date-fns-jalali/esm'
  export default previousMonday
}

declare module 'date-fns-jalali/esm/previousSaturday/index' {
  import { previousSaturday } from 'date-fns-jalali/esm'
  export default previousSaturday
}

declare module 'date-fns-jalali/esm/previousSunday/index' {
  import { previousSunday } from 'date-fns-jalali/esm'
  export default previousSunday
}

declare module 'date-fns-jalali/esm/previousThursday/index' {
  import { previousThursday } from 'date-fns-jalali/esm'
  export default previousThursday
}

declare module 'date-fns-jalali/esm/previousTuesday/index' {
  import { previousTuesday } from 'date-fns-jalali/esm'
  export default previousTuesday
}

declare module 'date-fns-jalali/esm/previousWednesday/index' {
  import { previousWednesday } from 'date-fns-jalali/esm'
  export default previousWednesday
}

declare module 'date-fns-jalali/esm/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns-jalali/esm'
  export default quartersToMonths
}

declare module 'date-fns-jalali/esm/quartersToYears/index' {
  import { quartersToYears } from 'date-fns-jalali/esm'
  export default quartersToYears
}

declare module 'date-fns-jalali/esm/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalali/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/esm/secondsToHours/index' {
  import { secondsToHours } from 'date-fns-jalali/esm'
  export default secondsToHours
}

declare module 'date-fns-jalali/esm/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns-jalali/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/esm/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns-jalali/esm'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/esm/set/index' {
  import { set } from 'date-fns-jalali/esm'
  export default set
}

declare module 'date-fns-jalali/esm/setDate/index' {
  import { setDate } from 'date-fns-jalali/esm'
  export default setDate
}

declare module 'date-fns-jalali/esm/setDay/index' {
  import { setDay } from 'date-fns-jalali/esm'
  export default setDay
}

declare module 'date-fns-jalali/esm/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalali/esm'
  export default setDayOfYear
}

declare module 'date-fns-jalali/esm/setDefaultOptions/index' {
  import { setDefaultOptions } from 'date-fns-jalali/esm'
  export default setDefaultOptions
}

declare module 'date-fns-jalali/esm/setHours/index' {
  import { setHours } from 'date-fns-jalali/esm'
  export default setHours
}

declare module 'date-fns-jalali/esm/setISODay/index' {
  import { setISODay } from 'date-fns-jalali/esm'
  export default setISODay
}

declare module 'date-fns-jalali/esm/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalali/esm'
  export default setISOWeek
}

declare module 'date-fns-jalali/esm/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalali/esm'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/esm/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalali/esm'
  export default setMilliseconds
}

declare module 'date-fns-jalali/esm/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalali/esm'
  export default setMinutes
}

declare module 'date-fns-jalali/esm/setMonth/index' {
  import { setMonth } from 'date-fns-jalali/esm'
  export default setMonth
}

declare module 'date-fns-jalali/esm/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalali/esm'
  export default setQuarter
}

declare module 'date-fns-jalali/esm/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalali/esm'
  export default setSeconds
}

declare module 'date-fns-jalali/esm/setWeek/index' {
  import { setWeek } from 'date-fns-jalali/esm'
  export default setWeek
}

declare module 'date-fns-jalali/esm/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalali/esm'
  export default setWeekYear
}

declare module 'date-fns-jalali/esm/setYear/index' {
  import { setYear } from 'date-fns-jalali/esm'
  export default setYear
}

declare module 'date-fns-jalali/esm/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalali/esm'
  export default startOfDay
}

declare module 'date-fns-jalali/esm/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalali/esm'
  export default startOfDecade
}

declare module 'date-fns-jalali/esm/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalali/esm'
  export default startOfHour
}

declare module 'date-fns-jalali/esm/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalali/esm'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/esm/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalali/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/esm/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalali/esm'
  export default startOfMinute
}

declare module 'date-fns-jalali/esm/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalali/esm'
  export default startOfMonth
}

declare module 'date-fns-jalali/esm/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalali/esm'
  export default startOfQuarter
}

declare module 'date-fns-jalali/esm/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalali/esm'
  export default startOfSecond
}

declare module 'date-fns-jalali/esm/startOfToday/index' {
  import { startOfToday } from 'date-fns-jalali/esm'
  export default startOfToday
}

declare module 'date-fns-jalali/esm/startOfTomorrow/index' {
  import { startOfTomorrow } from 'date-fns-jalali/esm'
  export default startOfTomorrow
}

declare module 'date-fns-jalali/esm/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalali/esm'
  export default startOfWeek
}

declare module 'date-fns-jalali/esm/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalali/esm'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/esm/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalali/esm'
  export default startOfYear
}

declare module 'date-fns-jalali/esm/startOfYesterday/index' {
  import { startOfYesterday } from 'date-fns-jalali/esm'
  export default startOfYesterday
}

declare module 'date-fns-jalali/esm/sub/index' {
  import { sub } from 'date-fns-jalali/esm'
  export default sub
}

declare module 'date-fns-jalali/esm/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalali/esm'
  export default subBusinessDays
}

declare module 'date-fns-jalali/esm/subDays/index' {
  import { subDays } from 'date-fns-jalali/esm'
  export default subDays
}

declare module 'date-fns-jalali/esm/subHours/index' {
  import { subHours } from 'date-fns-jalali/esm'
  export default subHours
}

declare module 'date-fns-jalali/esm/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalali/esm'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/esm/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalali/esm'
  export default subMilliseconds
}

declare module 'date-fns-jalali/esm/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalali/esm'
  export default subMinutes
}

declare module 'date-fns-jalali/esm/subMonths/index' {
  import { subMonths } from 'date-fns-jalali/esm'
  export default subMonths
}

declare module 'date-fns-jalali/esm/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalali/esm'
  export default subQuarters
}

declare module 'date-fns-jalali/esm/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalali/esm'
  export default subSeconds
}

declare module 'date-fns-jalali/esm/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalali/esm'
  export default subWeeks
}

declare module 'date-fns-jalali/esm/subYears/index' {
  import { subYears } from 'date-fns-jalali/esm'
  export default subYears
}

declare module 'date-fns-jalali/esm/toDate/index' {
  import { toDate } from 'date-fns-jalali/esm'
  export default toDate
}

declare module 'date-fns-jalali/esm/weeksToDays/index' {
  import { weeksToDays } from 'date-fns-jalali/esm'
  export default weeksToDays
}

declare module 'date-fns-jalali/esm/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns-jalali/esm'
  export default yearsToMonths
}

declare module 'date-fns-jalali/esm/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns-jalali/esm'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/esm/add/index.js' {
  import { add } from 'date-fns-jalali/esm'
  export default add
}

declare module 'date-fns-jalali/esm/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalali/esm'
  export default addBusinessDays
}

declare module 'date-fns-jalali/esm/addDays/index.js' {
  import { addDays } from 'date-fns-jalali/esm'
  export default addDays
}

declare module 'date-fns-jalali/esm/addHours/index.js' {
  import { addHours } from 'date-fns-jalali/esm'
  export default addHours
}

declare module 'date-fns-jalali/esm/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalali/esm'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/esm/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalali/esm'
  export default addMilliseconds
}

declare module 'date-fns-jalali/esm/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalali/esm'
  export default addMinutes
}

declare module 'date-fns-jalali/esm/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalali/esm'
  export default addMonths
}

declare module 'date-fns-jalali/esm/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalali/esm'
  export default addQuarters
}

declare module 'date-fns-jalali/esm/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalali/esm'
  export default addSeconds
}

declare module 'date-fns-jalali/esm/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalali/esm'
  export default addWeeks
}

declare module 'date-fns-jalali/esm/addYears/index.js' {
  import { addYears } from 'date-fns-jalali/esm'
  export default addYears
}

declare module 'date-fns-jalali/esm/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/esm'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/esm/clamp/index.js' {
  import { clamp } from 'date-fns-jalali/esm'
  export default clamp
}

declare module 'date-fns-jalali/esm/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalali/esm'
  export default closestIndexTo
}

declare module 'date-fns-jalali/esm/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalali/esm'
  export default closestTo
}

declare module 'date-fns-jalali/esm/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalali/esm'
  export default compareAsc
}

declare module 'date-fns-jalali/esm/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalali/esm'
  export default compareDesc
}

declare module 'date-fns-jalali/esm/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns-jalali/esm'
  export default daysToWeeks
}

declare module 'date-fns-jalali/esm/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalali/esm'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/esm/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalali/esm'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/esm/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/esm'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/esm/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/esm'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/esm/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/esm'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/esm/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/esm'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/esm/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/esm'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/esm/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalali/esm'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/esm/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalali/esm'
  export default differenceInDays
}

declare module 'date-fns-jalali/esm/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalali/esm'
  export default differenceInHours
}

declare module 'date-fns-jalali/esm/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/esm'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/esm/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalali/esm'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/esm/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalali/esm'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/esm/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalali/esm'
  export default differenceInMonths
}

declare module 'date-fns-jalali/esm/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalali/esm'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/esm/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalali/esm'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/esm/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalali/esm'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/esm/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalali/esm'
  export default differenceInYears
}

declare module 'date-fns-jalali/esm/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalali/esm'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/esm/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns-jalali/esm'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/esm/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/esm'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/esm/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalali/esm'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/esm/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/esm'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/esm/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/esm'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/esm/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/esm'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/esm/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalali/esm'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/esm/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalali/esm'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/esm/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalali/esm'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/esm/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalali/esm'
  export default endOfDay
}

declare module 'date-fns-jalali/esm/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalali/esm'
  export default endOfDecade
}

declare module 'date-fns-jalali/esm/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalali/esm'
  export default endOfHour
}

declare module 'date-fns-jalali/esm/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalali/esm'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/esm/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalali/esm'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/esm/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalali/esm'
  export default endOfMinute
}

declare module 'date-fns-jalali/esm/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalali/esm'
  export default endOfMonth
}

declare module 'date-fns-jalali/esm/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalali/esm'
  export default endOfQuarter
}

declare module 'date-fns-jalali/esm/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalali/esm'
  export default endOfSecond
}

declare module 'date-fns-jalali/esm/endOfToday/index.js' {
  import { endOfToday } from 'date-fns-jalali/esm'
  export default endOfToday
}

declare module 'date-fns-jalali/esm/endOfTomorrow/index.js' {
  import { endOfTomorrow } from 'date-fns-jalali/esm'
  export default endOfTomorrow
}

declare module 'date-fns-jalali/esm/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalali/esm'
  export default endOfWeek
}

declare module 'date-fns-jalali/esm/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalali/esm'
  export default endOfYear
}

declare module 'date-fns-jalali/esm/endOfYesterday/index.js' {
  import { endOfYesterday } from 'date-fns-jalali/esm'
  export default endOfYesterday
}

declare module 'date-fns-jalali/esm/format/index.js' {
  import { format } from 'date-fns-jalali/esm'
  export default format
}

declare module 'date-fns-jalali/esm/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalali/esm'
  export default formatDistance
}

declare module 'date-fns-jalali/esm/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalali/esm'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/esm/formatDistanceToNow/index.js' {
  import { formatDistanceToNow } from 'date-fns-jalali/esm'
  export default formatDistanceToNow
}

declare module 'date-fns-jalali/esm/formatDistanceToNowStrict/index.js' {
  import { formatDistanceToNowStrict } from 'date-fns-jalali/esm'
  export default formatDistanceToNowStrict
}

declare module 'date-fns-jalali/esm/formatDuration/index.js' {
  import { formatDuration } from 'date-fns-jalali/esm'
  export default formatDuration
}

declare module 'date-fns-jalali/esm/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalali/esm'
  export default formatISO
}

declare module 'date-fns-jalali/esm/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalali/esm'
  export default formatISO9075
}

declare module 'date-fns-jalali/esm/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalali/esm'
  export default formatISODuration
}

declare module 'date-fns-jalali/esm/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalali/esm'
  export default formatRelative
}

declare module 'date-fns-jalali/esm/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalali/esm'
  export default formatRFC3339
}

declare module 'date-fns-jalali/esm/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalali/esm'
  export default formatRFC7231
}

declare module 'date-fns-jalali/esm/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalali/esm'
  export default fromUnixTime
}

declare module 'date-fns-jalali/esm/getDate/index.js' {
  import { getDate } from 'date-fns-jalali/esm'
  export default getDate
}

declare module 'date-fns-jalali/esm/getDay/index.js' {
  import { getDay } from 'date-fns-jalali/esm'
  export default getDay
}

declare module 'date-fns-jalali/esm/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalali/esm'
  export default getDayOfYear
}

declare module 'date-fns-jalali/esm/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalali/esm'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/esm/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalali/esm'
  export default getDaysInYear
}

declare module 'date-fns-jalali/esm/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalali/esm'
  export default getDecade
}

declare module 'date-fns-jalali/esm/getDefaultOptions/index.js' {
  import { getDefaultOptions } from 'date-fns-jalali/esm'
  export default getDefaultOptions
}

declare module 'date-fns-jalali/esm/getHours/index.js' {
  import { getHours } from 'date-fns-jalali/esm'
  export default getHours
}

declare module 'date-fns-jalali/esm/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalali/esm'
  export default getISODay
}

declare module 'date-fns-jalali/esm/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalali/esm'
  export default getISOWeek
}

declare module 'date-fns-jalali/esm/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalali/esm'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/esm/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalali/esm'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/esm/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalali/esm'
  export default getMilliseconds
}

declare module 'date-fns-jalali/esm/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalali/esm'
  export default getMinutes
}

declare module 'date-fns-jalali/esm/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalali/esm'
  export default getMonth
}

declare module 'date-fns-jalali/esm/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/esm'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/esm/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalali/esm'
  export default getQuarter
}

declare module 'date-fns-jalali/esm/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalali/esm'
  export default getSeconds
}

declare module 'date-fns-jalali/esm/getTime/index.js' {
  import { getTime } from 'date-fns-jalali/esm'
  export default getTime
}

declare module 'date-fns-jalali/esm/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalali/esm'
  export default getUnixTime
}

declare module 'date-fns-jalali/esm/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalali/esm'
  export default getWeek
}

declare module 'date-fns-jalali/esm/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalali/esm'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/esm/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalali/esm'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/esm/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalali/esm'
  export default getWeekYear
}

declare module 'date-fns-jalali/esm/getYear/index.js' {
  import { getYear } from 'date-fns-jalali/esm'
  export default getYear
}

declare module 'date-fns-jalali/esm/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns-jalali/esm'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/esm/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns-jalali/esm'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/esm/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns-jalali/esm'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/esm/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalali/esm'
  export default intervalToDuration
}

declare module 'date-fns-jalali/esm/intlFormat/index.js' {
  import { intlFormat } from 'date-fns-jalali/esm'
  export default intlFormat
}

declare module 'date-fns-jalali/esm/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns-jalali/esm'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/esm/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalali/esm'
  export default isAfter
}

declare module 'date-fns-jalali/esm/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalali/esm'
  export default isBefore
}

declare module 'date-fns-jalali/esm/isDate/index.js' {
  import { isDate } from 'date-fns-jalali/esm'
  export default isDate
}

declare module 'date-fns-jalali/esm/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalali/esm'
  export default isEqual
}

declare module 'date-fns-jalali/esm/isExists/index.js' {
  import { isExists } from 'date-fns-jalali/esm'
  export default isExists
}

declare module 'date-fns-jalali/esm/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/esm'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/esm/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalali/esm'
  export default isFriday
}

declare module 'date-fns-jalali/esm/isFuture/index.js' {
  import { isFuture } from 'date-fns-jalali/esm'
  export default isFuture
}

declare module 'date-fns-jalali/esm/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalali/esm'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/esm/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalali/esm'
  export default isLeapYear
}

declare module 'date-fns-jalali/esm/isMatch/index.js' {
  import { isMatch } from 'date-fns-jalali/esm'
  export default isMatch
}

declare module 'date-fns-jalali/esm/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalali/esm'
  export default isMonday
}

declare module 'date-fns-jalali/esm/isPast/index.js' {
  import { isPast } from 'date-fns-jalali/esm'
  export default isPast
}

declare module 'date-fns-jalali/esm/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalali/esm'
  export default isSameDay
}

declare module 'date-fns-jalali/esm/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalali/esm'
  export default isSameHour
}

declare module 'date-fns-jalali/esm/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalali/esm'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/esm/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalali/esm'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/esm/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalali/esm'
  export default isSameMinute
}

declare module 'date-fns-jalali/esm/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalali/esm'
  export default isSameMonth
}

declare module 'date-fns-jalali/esm/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalali/esm'
  export default isSameQuarter
}

declare module 'date-fns-jalali/esm/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalali/esm'
  export default isSameSecond
}

declare module 'date-fns-jalali/esm/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalali/esm'
  export default isSameWeek
}

declare module 'date-fns-jalali/esm/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalali/esm'
  export default isSameYear
}

declare module 'date-fns-jalali/esm/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalali/esm'
  export default isSaturday
}

declare module 'date-fns-jalali/esm/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalali/esm'
  export default isSunday
}

declare module 'date-fns-jalali/esm/isThisHour/index.js' {
  import { isThisHour } from 'date-fns-jalali/esm'
  export default isThisHour
}

declare module 'date-fns-jalali/esm/isThisISOWeek/index.js' {
  import { isThisISOWeek } from 'date-fns-jalali/esm'
  export default isThisISOWeek
}

declare module 'date-fns-jalali/esm/isThisMinute/index.js' {
  import { isThisMinute } from 'date-fns-jalali/esm'
  export default isThisMinute
}

declare module 'date-fns-jalali/esm/isThisMonth/index.js' {
  import { isThisMonth } from 'date-fns-jalali/esm'
  export default isThisMonth
}

declare module 'date-fns-jalali/esm/isThisQuarter/index.js' {
  import { isThisQuarter } from 'date-fns-jalali/esm'
  export default isThisQuarter
}

declare module 'date-fns-jalali/esm/isThisSecond/index.js' {
  import { isThisSecond } from 'date-fns-jalali/esm'
  export default isThisSecond
}

declare module 'date-fns-jalali/esm/isThisWeek/index.js' {
  import { isThisWeek } from 'date-fns-jalali/esm'
  export default isThisWeek
}

declare module 'date-fns-jalali/esm/isThisYear/index.js' {
  import { isThisYear } from 'date-fns-jalali/esm'
  export default isThisYear
}

declare module 'date-fns-jalali/esm/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalali/esm'
  export default isThursday
}

declare module 'date-fns-jalali/esm/isToday/index.js' {
  import { isToday } from 'date-fns-jalali/esm'
  export default isToday
}

declare module 'date-fns-jalali/esm/isTomorrow/index.js' {
  import { isTomorrow } from 'date-fns-jalali/esm'
  export default isTomorrow
}

declare module 'date-fns-jalali/esm/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalali/esm'
  export default isTuesday
}

declare module 'date-fns-jalali/esm/isValid/index.js' {
  import { isValid } from 'date-fns-jalali/esm'
  export default isValid
}

declare module 'date-fns-jalali/esm/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalali/esm'
  export default isWednesday
}

declare module 'date-fns-jalali/esm/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalali/esm'
  export default isWeekend
}

declare module 'date-fns-jalali/esm/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalali/esm'
  export default isWithinInterval
}

declare module 'date-fns-jalali/esm/isYesterday/index.js' {
  import { isYesterday } from 'date-fns-jalali/esm'
  export default isYesterday
}

declare module 'date-fns-jalali/esm/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalali/esm'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/esm/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/esm'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/esm/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/esm'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/esm/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalali/esm'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/esm/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalali/esm'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/esm/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalali/esm'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/esm/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalali/esm'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/esm/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalali/esm'
  export default lightFormat
}

declare module 'date-fns-jalali/esm/max/index.js' {
  import { max } from 'date-fns-jalali/esm'
  export default max
}

declare module 'date-fns-jalali/esm/milliseconds/index.js' {
  import { milliseconds } from 'date-fns-jalali/esm'
  export default milliseconds
}

declare module 'date-fns-jalali/esm/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns-jalali/esm'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/esm/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns-jalali/esm'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/esm/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns-jalali/esm'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/esm/min/index.js' {
  import { min } from 'date-fns-jalali/esm'
  export default min
}

declare module 'date-fns-jalali/esm/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns-jalali/esm'
  export default minutesToHours
}

declare module 'date-fns-jalali/esm/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns-jalali/esm'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/esm/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns-jalali/esm'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/esm/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns-jalali/esm'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/esm/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns-jalali/esm'
  export default monthsToYears
}

declare module 'date-fns-jalali/esm/newDate/index.js' {
  import { newDate } from 'date-fns-jalali/esm'
  export default newDate
}

declare module 'date-fns-jalali/esm/nextDay/index.js' {
  import { nextDay } from 'date-fns-jalali/esm'
  export default nextDay
}

declare module 'date-fns-jalali/esm/nextFriday/index.js' {
  import { nextFriday } from 'date-fns-jalali/esm'
  export default nextFriday
}

declare module 'date-fns-jalali/esm/nextMonday/index.js' {
  import { nextMonday } from 'date-fns-jalali/esm'
  export default nextMonday
}

declare module 'date-fns-jalali/esm/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns-jalali/esm'
  export default nextSaturday
}

declare module 'date-fns-jalali/esm/nextSunday/index.js' {
  import { nextSunday } from 'date-fns-jalali/esm'
  export default nextSunday
}

declare module 'date-fns-jalali/esm/nextThursday/index.js' {
  import { nextThursday } from 'date-fns-jalali/esm'
  export default nextThursday
}

declare module 'date-fns-jalali/esm/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns-jalali/esm'
  export default nextTuesday
}

declare module 'date-fns-jalali/esm/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns-jalali/esm'
  export default nextWednesday
}

declare module 'date-fns-jalali/esm/parse/index.js' {
  import { parse } from 'date-fns-jalali/esm'
  export default parse
}

declare module 'date-fns-jalali/esm/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalali/esm'
  export default parseISO
}

declare module 'date-fns-jalali/esm/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalali/esm'
  export default parseJSON
}

declare module 'date-fns-jalali/esm/previousDay/index.js' {
  import { previousDay } from 'date-fns-jalali/esm'
  export default previousDay
}

declare module 'date-fns-jalali/esm/previousFriday/index.js' {
  import { previousFriday } from 'date-fns-jalali/esm'
  export default previousFriday
}

declare module 'date-fns-jalali/esm/previousMonday/index.js' {
  import { previousMonday } from 'date-fns-jalali/esm'
  export default previousMonday
}

declare module 'date-fns-jalali/esm/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns-jalali/esm'
  export default previousSaturday
}

declare module 'date-fns-jalali/esm/previousSunday/index.js' {
  import { previousSunday } from 'date-fns-jalali/esm'
  export default previousSunday
}

declare module 'date-fns-jalali/esm/previousThursday/index.js' {
  import { previousThursday } from 'date-fns-jalali/esm'
  export default previousThursday
}

declare module 'date-fns-jalali/esm/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns-jalali/esm'
  export default previousTuesday
}

declare module 'date-fns-jalali/esm/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns-jalali/esm'
  export default previousWednesday
}

declare module 'date-fns-jalali/esm/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns-jalali/esm'
  export default quartersToMonths
}

declare module 'date-fns-jalali/esm/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns-jalali/esm'
  export default quartersToYears
}

declare module 'date-fns-jalali/esm/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalali/esm'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/esm/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns-jalali/esm'
  export default secondsToHours
}

declare module 'date-fns-jalali/esm/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns-jalali/esm'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/esm/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns-jalali/esm'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/esm/set/index.js' {
  import { set } from 'date-fns-jalali/esm'
  export default set
}

declare module 'date-fns-jalali/esm/setDate/index.js' {
  import { setDate } from 'date-fns-jalali/esm'
  export default setDate
}

declare module 'date-fns-jalali/esm/setDay/index.js' {
  import { setDay } from 'date-fns-jalali/esm'
  export default setDay
}

declare module 'date-fns-jalali/esm/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalali/esm'
  export default setDayOfYear
}

declare module 'date-fns-jalali/esm/setDefaultOptions/index.js' {
  import { setDefaultOptions } from 'date-fns-jalali/esm'
  export default setDefaultOptions
}

declare module 'date-fns-jalali/esm/setHours/index.js' {
  import { setHours } from 'date-fns-jalali/esm'
  export default setHours
}

declare module 'date-fns-jalali/esm/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalali/esm'
  export default setISODay
}

declare module 'date-fns-jalali/esm/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalali/esm'
  export default setISOWeek
}

declare module 'date-fns-jalali/esm/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalali/esm'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/esm/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalali/esm'
  export default setMilliseconds
}

declare module 'date-fns-jalali/esm/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalali/esm'
  export default setMinutes
}

declare module 'date-fns-jalali/esm/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalali/esm'
  export default setMonth
}

declare module 'date-fns-jalali/esm/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalali/esm'
  export default setQuarter
}

declare module 'date-fns-jalali/esm/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalali/esm'
  export default setSeconds
}

declare module 'date-fns-jalali/esm/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalali/esm'
  export default setWeek
}

declare module 'date-fns-jalali/esm/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalali/esm'
  export default setWeekYear
}

declare module 'date-fns-jalali/esm/setYear/index.js' {
  import { setYear } from 'date-fns-jalali/esm'
  export default setYear
}

declare module 'date-fns-jalali/esm/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalali/esm'
  export default startOfDay
}

declare module 'date-fns-jalali/esm/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalali/esm'
  export default startOfDecade
}

declare module 'date-fns-jalali/esm/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalali/esm'
  export default startOfHour
}

declare module 'date-fns-jalali/esm/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalali/esm'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/esm/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalali/esm'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/esm/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalali/esm'
  export default startOfMinute
}

declare module 'date-fns-jalali/esm/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalali/esm'
  export default startOfMonth
}

declare module 'date-fns-jalali/esm/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalali/esm'
  export default startOfQuarter
}

declare module 'date-fns-jalali/esm/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalali/esm'
  export default startOfSecond
}

declare module 'date-fns-jalali/esm/startOfToday/index.js' {
  import { startOfToday } from 'date-fns-jalali/esm'
  export default startOfToday
}

declare module 'date-fns-jalali/esm/startOfTomorrow/index.js' {
  import { startOfTomorrow } from 'date-fns-jalali/esm'
  export default startOfTomorrow
}

declare module 'date-fns-jalali/esm/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalali/esm'
  export default startOfWeek
}

declare module 'date-fns-jalali/esm/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalali/esm'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/esm/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalali/esm'
  export default startOfYear
}

declare module 'date-fns-jalali/esm/startOfYesterday/index.js' {
  import { startOfYesterday } from 'date-fns-jalali/esm'
  export default startOfYesterday
}

declare module 'date-fns-jalali/esm/sub/index.js' {
  import { sub } from 'date-fns-jalali/esm'
  export default sub
}

declare module 'date-fns-jalali/esm/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalali/esm'
  export default subBusinessDays
}

declare module 'date-fns-jalali/esm/subDays/index.js' {
  import { subDays } from 'date-fns-jalali/esm'
  export default subDays
}

declare module 'date-fns-jalali/esm/subHours/index.js' {
  import { subHours } from 'date-fns-jalali/esm'
  export default subHours
}

declare module 'date-fns-jalali/esm/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalali/esm'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/esm/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalali/esm'
  export default subMilliseconds
}

declare module 'date-fns-jalali/esm/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalali/esm'
  export default subMinutes
}

declare module 'date-fns-jalali/esm/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalali/esm'
  export default subMonths
}

declare module 'date-fns-jalali/esm/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalali/esm'
  export default subQuarters
}

declare module 'date-fns-jalali/esm/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalali/esm'
  export default subSeconds
}

declare module 'date-fns-jalali/esm/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalali/esm'
  export default subWeeks
}

declare module 'date-fns-jalali/esm/subYears/index.js' {
  import { subYears } from 'date-fns-jalali/esm'
  export default subYears
}

declare module 'date-fns-jalali/esm/toDate/index.js' {
  import { toDate } from 'date-fns-jalali/esm'
  export default toDate
}

declare module 'date-fns-jalali/esm/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns-jalali/esm'
  export default weeksToDays
}

declare module 'date-fns-jalali/esm/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns-jalali/esm'
  export default yearsToMonths
}

declare module 'date-fns-jalali/esm/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns-jalali/esm'
  export default yearsToQuarters
}

// ECMAScript Module FP Functions

declare module 'date-fns-jalali/esm/fp' {
  import {
    CurriedFn1,
    CurriedFn2,
    CurriedFn3,
    CurriedFn4,
    Day,
    Duration,
    Interval,
    Locale,
  } from 'date-fns-jalali'
  const add: CurriedFn2<Duration, Date | number, Date>
  namespace add {}

  const addBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace addBusinessDays {}

  const addDays: CurriedFn2<number, Date | number, Date>
  namespace addDays {}

  const addHours: CurriedFn2<number, Date | number, Date>
  namespace addHours {}

  const addISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace addISOWeekYears {}

  const addMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace addMilliseconds {}

  const addMinutes: CurriedFn2<number, Date | number, Date>
  namespace addMinutes {}

  const addMonths: CurriedFn2<number, Date | number, Date>
  namespace addMonths {}

  const addQuarters: CurriedFn2<number, Date | number, Date>
  namespace addQuarters {}

  const addSeconds: CurriedFn2<number, Date | number, Date>
  namespace addSeconds {}

  const addWeeks: CurriedFn2<number, Date | number, Date>
  namespace addWeeks {}

  const addYears: CurriedFn2<number, Date | number, Date>
  namespace addYears {}

  const areIntervalsOverlapping: CurriedFn2<Interval, Interval, boolean>
  namespace areIntervalsOverlapping {}

  const areIntervalsOverlappingWithOptions: CurriedFn3<
    {
      inclusive?: boolean
    },
    Interval,
    Interval,
    boolean
  >
  namespace areIntervalsOverlappingWithOptions {}

  const clamp: CurriedFn2<Interval, Date | number, Date>
  namespace clamp {}

  const closestIndexTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    number | undefined
  >
  namespace closestIndexTo {}

  const closestTo: CurriedFn2<
    (Date | number)[],
    Date | number,
    Date | undefined
  >
  namespace closestTo {}

  const compareAsc: CurriedFn2<Date | number, Date | number, number>
  namespace compareAsc {}

  const compareDesc: CurriedFn2<Date | number, Date | number, number>
  namespace compareDesc {}

  const daysToWeeks: CurriedFn1<number, number>
  namespace daysToWeeks {}

  const differenceInBusinessDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInBusinessDays {}

  const differenceInCalendarDays: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarDays {}

  const differenceInCalendarISOWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeeks {}

  const differenceInCalendarISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarISOWeekYears {}

  const differenceInCalendarMonths: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarMonths {}

  const differenceInCalendarQuarters: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarQuarters {}

  const differenceInCalendarWeeks: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeks {}

  const differenceInCalendarWeeksWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarWeeksWithOptions {}

  const differenceInCalendarYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInCalendarYears {}

  const differenceInDays: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInDays {}

  const differenceInHours: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInHours {}

  const differenceInHoursWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInHoursWithOptions {}

  const differenceInISOWeekYears: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInISOWeekYears {}

  const differenceInMilliseconds: CurriedFn2<
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMilliseconds {}

  const differenceInMinutes: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMinutes {}

  const differenceInMinutesWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInMinutesWithOptions {}

  const differenceInMonths: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInMonths {}

  const differenceInQuarters: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInQuarters {}

  const differenceInQuartersWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInQuartersWithOptions {}

  const differenceInSeconds: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInSeconds {}

  const differenceInSecondsWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInSecondsWithOptions {}

  const differenceInWeeks: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInWeeks {}

  const differenceInWeeksWithOptions: CurriedFn3<
    {
      roundingMethod?: string
    },
    Date | number,
    Date | number,
    number
  >
  namespace differenceInWeeksWithOptions {}

  const differenceInYears: CurriedFn2<Date | number, Date | number, number>
  namespace differenceInYears {}

  const eachDayOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachDayOfInterval {}

  const eachDayOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachDayOfIntervalWithOptions {}

  const eachHourOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachHourOfInterval {}

  const eachHourOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachHourOfIntervalWithOptions {}

  const eachMinuteOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMinuteOfInterval {}

  const eachMinuteOfIntervalWithOptions: CurriedFn2<
    {
      step?: number
    },
    Interval,
    Date[]
  >
  namespace eachMinuteOfIntervalWithOptions {}

  const eachMonthOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachMonthOfInterval {}

  const eachQuarterOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachQuarterOfInterval {}

  const eachWeekendOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekendOfInterval {}

  const eachWeekendOfMonth: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfMonth {}

  const eachWeekendOfYear: CurriedFn1<Date | number, Date[]>
  namespace eachWeekendOfYear {}

  const eachWeekOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachWeekOfInterval {}

  const eachWeekOfIntervalWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Interval,
    Date[]
  >
  namespace eachWeekOfIntervalWithOptions {}

  const eachYearOfInterval: CurriedFn1<Interval, Date[]>
  namespace eachYearOfInterval {}

  const endOfDay: CurriedFn1<Date | number, Date>
  namespace endOfDay {}

  const endOfDecade: CurriedFn1<Date | number, Date>
  namespace endOfDecade {}

  const endOfDecadeWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace endOfDecadeWithOptions {}

  const endOfHour: CurriedFn1<Date | number, Date>
  namespace endOfHour {}

  const endOfISOWeek: CurriedFn1<Date | number, Date>
  namespace endOfISOWeek {}

  const endOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace endOfISOWeekYear {}

  const endOfMinute: CurriedFn1<Date | number, Date>
  namespace endOfMinute {}

  const endOfMonth: CurriedFn1<Date | number, Date>
  namespace endOfMonth {}

  const endOfQuarter: CurriedFn1<Date | number, Date>
  namespace endOfQuarter {}

  const endOfSecond: CurriedFn1<Date | number, Date>
  namespace endOfSecond {}

  const endOfWeek: CurriedFn1<Date | number, Date>
  namespace endOfWeek {}

  const endOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace endOfWeekWithOptions {}

  const endOfYear: CurriedFn1<Date | number, Date>
  namespace endOfYear {}

  const format: CurriedFn2<string, Date | number, string>
  namespace format {}

  const formatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistance {}

  const formatDistanceStrict: CurriedFn2<Date | number, Date | number, string>
  namespace formatDistanceStrict {}

  const formatDistanceStrictWithOptions: CurriedFn3<
    {
      locale?: Locale
      roundingMethod?: 'floor' | 'ceil' | 'round'
      unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
      addSuffix?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceStrictWithOptions {}

  const formatDistanceWithOptions: CurriedFn3<
    {
      locale?: Locale
      addSuffix?: boolean
      includeSeconds?: boolean
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatDistanceWithOptions {}

  const formatDuration: CurriedFn1<Duration, string>
  namespace formatDuration {}

  const formatDurationWithOptions: CurriedFn2<
    {
      locale?: Locale
      delimiter?: string
      zero?: boolean
      format?: string[]
    },
    Duration,
    string
  >
  namespace formatDurationWithOptions {}

  const formatISO: CurriedFn1<Date | number, string>
  namespace formatISO {}

  const formatISO9075: CurriedFn1<Date | number, string>
  namespace formatISO9075 {}

  const formatISO9075WithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISO9075WithOptions {}

  const formatISODuration: CurriedFn1<Duration, string>
  namespace formatISODuration {}

  const formatISOWithOptions: CurriedFn2<
    {
      representation?: 'complete' | 'date' | 'time'
      format?: 'extended' | 'basic'
    },
    Date | number,
    string
  >
  namespace formatISOWithOptions {}

  const formatRelative: CurriedFn2<Date | number, Date | number, string>
  namespace formatRelative {}

  const formatRelativeWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    string
  >
  namespace formatRelativeWithOptions {}

  const formatRFC3339: CurriedFn1<Date | number, string>
  namespace formatRFC3339 {}

  const formatRFC3339WithOptions: CurriedFn2<
    {
      fractionDigits?: 0 | 1 | 2 | 3
    },
    Date | number,
    string
  >
  namespace formatRFC3339WithOptions {}

  const formatRFC7231: CurriedFn1<Date | number, string>
  namespace formatRFC7231 {}

  const formatWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: number
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    Date | number,
    string
  >
  namespace formatWithOptions {}

  const fromUnixTime: CurriedFn1<number, Date>
  namespace fromUnixTime {}

  const getDate: CurriedFn1<Date | number, number>
  namespace getDate {}

  const getDay: CurriedFn1<Date | number, 0 | 1 | 2 | 3 | 4 | 5 | 6>
  namespace getDay {}

  const getDayOfYear: CurriedFn1<Date | number, number>
  namespace getDayOfYear {}

  const getDaysInMonth: CurriedFn1<Date | number, number>
  namespace getDaysInMonth {}

  const getDaysInYear: CurriedFn1<Date | number, number>
  namespace getDaysInYear {}

  const getDecade: CurriedFn1<Date | number, number>
  namespace getDecade {}

  const getHours: CurriedFn1<Date | number, number>
  namespace getHours {}

  const getISODay: CurriedFn1<Date | number, number>
  namespace getISODay {}

  const getISOWeek: CurriedFn1<Date | number, number>
  namespace getISOWeek {}

  const getISOWeeksInYear: CurriedFn1<Date | number, number>
  namespace getISOWeeksInYear {}

  const getISOWeekYear: CurriedFn1<Date | number, number>
  namespace getISOWeekYear {}

  const getMilliseconds: CurriedFn1<Date | number, number>
  namespace getMilliseconds {}

  const getMinutes: CurriedFn1<Date | number, number>
  namespace getMinutes {}

  const getMonth: CurriedFn1<Date | number, number>
  namespace getMonth {}

  const getOverlappingDaysInIntervals: CurriedFn2<Interval, Interval, number>
  namespace getOverlappingDaysInIntervals {}

  const getQuarter: CurriedFn1<Date | number, number>
  namespace getQuarter {}

  const getSeconds: CurriedFn1<Date | number, number>
  namespace getSeconds {}

  const getTime: CurriedFn1<Date | number, number>
  namespace getTime {}

  const getUnixTime: CurriedFn1<Date | number, number>
  namespace getUnixTime {}

  const getWeek: CurriedFn1<Date | number, number>
  namespace getWeek {}

  const getWeekOfMonth: CurriedFn1<Date | number, number>
  namespace getWeekOfMonth {}

  const getWeekOfMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekOfMonthWithOptions {}

  const getWeeksInMonth: CurriedFn1<Date | number, number>
  namespace getWeeksInMonth {}

  const getWeeksInMonthWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeeksInMonthWithOptions {}

  const getWeekWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekWithOptions {}

  const getWeekYear: CurriedFn1<Date | number, number>
  namespace getWeekYear {}

  const getWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    number
  >
  namespace getWeekYearWithOptions {}

  const getYear: CurriedFn1<Date | number, number>
  namespace getYear {}

  const hoursToMilliseconds: CurriedFn1<number, number>
  namespace hoursToMilliseconds {}

  const hoursToMinutes: CurriedFn1<number, number>
  namespace hoursToMinutes {}

  const hoursToSeconds: CurriedFn1<number, number>
  namespace hoursToSeconds {}

  const intervalToDuration: CurriedFn1<Interval, Duration>
  namespace intervalToDuration {}

  const intlFormat: CurriedFn3<
    {
      locale?: string | string[]
    },
    {
      timeZone?: string
      hour12?: boolean
      formatMatcher?: 'basic' | 'best fit'
      timeZoneName?: 'short' | 'long'
      second?: 'numeric' | '2-digit'
      minute?: 'numeric' | '2-digit'
      hour?: 'numeric' | '2-digit'
      day?: 'numeric' | '2-digit'
      month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
      year?: 'numeric' | '2-digit'
      era?: 'narrow' | 'short' | 'long'
      weekday?: 'narrow' | 'short' | 'long'
      localeMatcher?: 'lookup' | 'best fit'
    },
    Date | number,
    string
  >
  namespace intlFormat {}

  const intlFormatDistance: CurriedFn2<Date | number, Date | number, string>
  namespace intlFormatDistance {}

  const intlFormatDistanceWithOptions: CurriedFn3<
    {
      style?: string
      numeric?: string
      localeMatcher?: string
      locale?: string | string[]
      unit?: string
    },
    Date | number,
    Date | number,
    string
  >
  namespace intlFormatDistanceWithOptions {}

  const isAfter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isAfter {}

  const isBefore: CurriedFn2<Date | number, Date | number, boolean>
  namespace isBefore {}

  const isDate: CurriedFn1<any, boolean>
  namespace isDate {}

  const isEqual: CurriedFn2<Date | number, Date | number, boolean>
  namespace isEqual {}

  const isExists: CurriedFn3<number, number, number, boolean>
  namespace isExists {}

  const isFirstDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isFirstDayOfMonth {}

  const isFriday: CurriedFn1<Date | number, boolean>
  namespace isFriday {}

  const isLastDayOfMonth: CurriedFn1<Date | number, boolean>
  namespace isLastDayOfMonth {}

  const isLeapYear: CurriedFn1<Date | number, boolean>
  namespace isLeapYear {}

  const isMatch: CurriedFn2<string, string, boolean>
  namespace isMatch {}

  const isMatchWithOptions: CurriedFn3<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    string,
    string,
    boolean
  >
  namespace isMatchWithOptions {}

  const isMonday: CurriedFn1<Date | number, boolean>
  namespace isMonday {}

  const isSameDay: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameDay {}

  const isSameHour: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameHour {}

  const isSameISOWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeek {}

  const isSameISOWeekYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameISOWeekYear {}

  const isSameMinute: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMinute {}

  const isSameMonth: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameMonth {}

  const isSameQuarter: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameQuarter {}

  const isSameSecond: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameSecond {}

  const isSameWeek: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameWeek {}

  const isSameWeekWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date | number,
    boolean
  >
  namespace isSameWeekWithOptions {}

  const isSameYear: CurriedFn2<Date | number, Date | number, boolean>
  namespace isSameYear {}

  const isSaturday: CurriedFn1<Date | number, boolean>
  namespace isSaturday {}

  const isSunday: CurriedFn1<Date | number, boolean>
  namespace isSunday {}

  const isThursday: CurriedFn1<Date | number, boolean>
  namespace isThursday {}

  const isTuesday: CurriedFn1<Date | number, boolean>
  namespace isTuesday {}

  const isValid: CurriedFn1<any, boolean>
  namespace isValid {}

  const isWednesday: CurriedFn1<Date | number, boolean>
  namespace isWednesday {}

  const isWeekend: CurriedFn1<Date | number, boolean>
  namespace isWeekend {}

  const isWithinInterval: CurriedFn2<Interval, Date | number, boolean>
  namespace isWithinInterval {}

  const lastDayOfDecade: CurriedFn1<Date | number, Date>
  namespace lastDayOfDecade {}

  const lastDayOfISOWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeek {}

  const lastDayOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfISOWeekYear {}

  const lastDayOfMonth: CurriedFn1<Date | number, Date>
  namespace lastDayOfMonth {}

  const lastDayOfQuarter: CurriedFn1<Date | number, Date>
  namespace lastDayOfQuarter {}

  const lastDayOfQuarterWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    Date | number,
    Date
  >
  namespace lastDayOfQuarterWithOptions {}

  const lastDayOfWeek: CurriedFn1<Date | number, Date>
  namespace lastDayOfWeek {}

  const lastDayOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace lastDayOfWeekWithOptions {}

  const lastDayOfYear: CurriedFn1<Date | number, Date>
  namespace lastDayOfYear {}

  const lightFormat: CurriedFn2<string, Date | number, string>
  namespace lightFormat {}

  const max: CurriedFn1<(Date | number)[], Date>
  namespace max {}

  const milliseconds: CurriedFn1<Duration, number>
  namespace milliseconds {}

  const millisecondsToHours: CurriedFn1<number, number>
  namespace millisecondsToHours {}

  const millisecondsToMinutes: CurriedFn1<number, number>
  namespace millisecondsToMinutes {}

  const millisecondsToSeconds: CurriedFn1<number, number>
  namespace millisecondsToSeconds {}

  const min: CurriedFn1<(Date | number)[], Date>
  namespace min {}

  const minutesToHours: CurriedFn1<number, number>
  namespace minutesToHours {}

  const minutesToMilliseconds: CurriedFn1<number, number>
  namespace minutesToMilliseconds {}

  const minutesToSeconds: CurriedFn1<number, number>
  namespace minutesToSeconds {}

  const monthsToQuarters: CurriedFn1<number, number>
  namespace monthsToQuarters {}

  const monthsToYears: CurriedFn1<number, number>
  namespace monthsToYears {}

  const nextDay: CurriedFn2<Day, Date | number, Date>
  namespace nextDay {}

  const nextFriday: CurriedFn1<Date | number, Date>
  namespace nextFriday {}

  const nextMonday: CurriedFn1<Date | number, Date>
  namespace nextMonday {}

  const nextSaturday: CurriedFn1<Date | number, Date>
  namespace nextSaturday {}

  const nextSunday: CurriedFn1<Date | number, Date>
  namespace nextSunday {}

  const nextThursday: CurriedFn1<Date | number, Date>
  namespace nextThursday {}

  const nextTuesday: CurriedFn1<Date | number, Date>
  namespace nextTuesday {}

  const nextWednesday: CurriedFn1<Date | number, Date>
  namespace nextWednesday {}

  const parse: CurriedFn3<Date | number, string, string, Date>
  namespace parse {}

  const parseISO: CurriedFn1<string, Date>
  namespace parseISO {}

  const parseISOWithOptions: CurriedFn2<
    {
      additionalDigits?: 0 | 1 | 2
    },
    string,
    Date
  >
  namespace parseISOWithOptions {}

  const parseJSON: CurriedFn1<string | number | Date, Date>
  namespace parseJSON {}

  const parseWithOptions: CurriedFn4<
    {
      useAdditionalDayOfYearTokens?: boolean
      useAdditionalWeekYearTokens?: boolean
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    string,
    string,
    Date
  >
  namespace parseWithOptions {}

  const previousDay: CurriedFn2<number, Date | number, Date>
  namespace previousDay {}

  const previousFriday: CurriedFn1<Date | number, Date>
  namespace previousFriday {}

  const previousMonday: CurriedFn1<Date | number, Date>
  namespace previousMonday {}

  const previousSaturday: CurriedFn1<Date | number, Date>
  namespace previousSaturday {}

  const previousSunday: CurriedFn1<Date | number, Date>
  namespace previousSunday {}

  const previousThursday: CurriedFn1<Date | number, Date>
  namespace previousThursday {}

  const previousTuesday: CurriedFn1<Date | number, Date>
  namespace previousTuesday {}

  const previousWednesday: CurriedFn1<Date | number, Date>
  namespace previousWednesday {}

  const quartersToMonths: CurriedFn1<number, number>
  namespace quartersToMonths {}

  const quartersToYears: CurriedFn1<number, number>
  namespace quartersToYears {}

  const roundToNearestMinutes: CurriedFn1<Date | number, Date>
  namespace roundToNearestMinutes {}

  const roundToNearestMinutesWithOptions: CurriedFn2<
    {
      roundingMethod?: string
      nearestTo?: number
    },
    Date | number,
    Date
  >
  namespace roundToNearestMinutesWithOptions {}

  const secondsToHours: CurriedFn1<number, number>
  namespace secondsToHours {}

  const secondsToMilliseconds: CurriedFn1<number, number>
  namespace secondsToMilliseconds {}

  const secondsToMinutes: CurriedFn1<number, number>
  namespace secondsToMinutes {}

  const set: CurriedFn2<
    {
      milliseconds?: number
      seconds?: number
      minutes?: number
      hours?: number
      date?: number
      month?: number
      year?: number
    },
    Date | number,
    Date
  >
  namespace set {}

  const setDate: CurriedFn2<number, Date | number, Date>
  namespace setDate {}

  const setDay: CurriedFn2<number, Date | number, Date>
  namespace setDay {}

  const setDayOfYear: CurriedFn2<number, Date | number, Date>
  namespace setDayOfYear {}

  const setDayWithOptions: CurriedFn3<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setDayWithOptions {}

  const setHours: CurriedFn2<number, Date | number, Date>
  namespace setHours {}

  const setISODay: CurriedFn2<number, Date | number, Date>
  namespace setISODay {}

  const setISOWeek: CurriedFn2<number, Date | number, Date>
  namespace setISOWeek {}

  const setISOWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setISOWeekYear {}

  const setMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace setMilliseconds {}

  const setMinutes: CurriedFn2<number, Date | number, Date>
  namespace setMinutes {}

  const setMonth: CurriedFn2<number, Date | number, Date>
  namespace setMonth {}

  const setQuarter: CurriedFn2<number, Date | number, Date>
  namespace setQuarter {}

  const setSeconds: CurriedFn2<number, Date | number, Date>
  namespace setSeconds {}

  const setWeek: CurriedFn2<number, Date | number, Date>
  namespace setWeek {}

  const setWeekWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekWithOptions {}

  const setWeekYear: CurriedFn2<number, Date | number, Date>
  namespace setWeekYear {}

  const setWeekYearWithOptions: CurriedFn3<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    number,
    Date | number,
    Date
  >
  namespace setWeekYearWithOptions {}

  const setYear: CurriedFn2<number, Date | number, Date>
  namespace setYear {}

  const startOfDay: CurriedFn1<Date | number, Date>
  namespace startOfDay {}

  const startOfDecade: CurriedFn1<Date | number, Date>
  namespace startOfDecade {}

  const startOfHour: CurriedFn1<Date | number, Date>
  namespace startOfHour {}

  const startOfISOWeek: CurriedFn1<Date | number, Date>
  namespace startOfISOWeek {}

  const startOfISOWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfISOWeekYear {}

  const startOfMinute: CurriedFn1<Date | number, Date>
  namespace startOfMinute {}

  const startOfMonth: CurriedFn1<Date | number, Date>
  namespace startOfMonth {}

  const startOfQuarter: CurriedFn1<Date | number, Date>
  namespace startOfQuarter {}

  const startOfSecond: CurriedFn1<Date | number, Date>
  namespace startOfSecond {}

  const startOfWeek: CurriedFn1<Date | number, Date>
  namespace startOfWeek {}

  const startOfWeekWithOptions: CurriedFn2<
    {
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekWithOptions {}

  const startOfWeekYear: CurriedFn1<Date | number, Date>
  namespace startOfWeekYear {}

  const startOfWeekYearWithOptions: CurriedFn2<
    {
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      locale?: Locale
    },
    Date | number,
    Date
  >
  namespace startOfWeekYearWithOptions {}

  const startOfYear: CurriedFn1<Date | number, Date>
  namespace startOfYear {}

  const sub: CurriedFn2<Duration, Date | number, Date>
  namespace sub {}

  const subBusinessDays: CurriedFn2<number, Date | number, Date>
  namespace subBusinessDays {}

  const subDays: CurriedFn2<number, Date | number, Date>
  namespace subDays {}

  const subHours: CurriedFn2<number, Date | number, Date>
  namespace subHours {}

  const subISOWeekYears: CurriedFn2<number, Date | number, Date>
  namespace subISOWeekYears {}

  const subMilliseconds: CurriedFn2<number, Date | number, Date>
  namespace subMilliseconds {}

  const subMinutes: CurriedFn2<number, Date | number, Date>
  namespace subMinutes {}

  const subMonths: CurriedFn2<number, Date | number, Date>
  namespace subMonths {}

  const subQuarters: CurriedFn2<number, Date | number, Date>
  namespace subQuarters {}

  const subSeconds: CurriedFn2<number, Date | number, Date>
  namespace subSeconds {}

  const subWeeks: CurriedFn2<number, Date | number, Date>
  namespace subWeeks {}

  const subYears: CurriedFn2<number, Date | number, Date>
  namespace subYears {}

  const toDate: CurriedFn1<Date | number, Date>
  namespace toDate {}

  const weeksToDays: CurriedFn1<number, number>
  namespace weeksToDays {}

  const yearsToMonths: CurriedFn1<number, number>
  namespace yearsToMonths {}

  const yearsToQuarters: CurriedFn1<number, number>
  namespace yearsToQuarters {}

  const daysInWeek: number

  const daysInYear: number

  const maxTime: number

  const millisecondsInMinute: number

  const millisecondsInHour: number

  const millisecondsInSecond: number

  const minTime: number

  const minutesInHour: number

  const monthsInQuarter: number

  const monthsInYear: number

  const quartersInYear: number

  const secondsInHour: number

  const secondsInMinute: number

  const secondsInDay: number

  const secondsInWeek: number

  const secondsInYear: number

  const secondsInMonth: number

  const secondsInQuarter: number
}

declare module 'date-fns-jalali/esm/fp/add' {
  import { add } from 'date-fns-jalali/esm/fp'
  export default add
}

declare module 'date-fns-jalali/esm/fp/addBusinessDays' {
  import { addBusinessDays } from 'date-fns-jalali/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalali/esm/fp/addDays' {
  import { addDays } from 'date-fns-jalali/esm/fp'
  export default addDays
}

declare module 'date-fns-jalali/esm/fp/addHours' {
  import { addHours } from 'date-fns-jalali/esm/fp'
  export default addHours
}

declare module 'date-fns-jalali/esm/fp/addISOWeekYears' {
  import { addISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/addMilliseconds' {
  import { addMilliseconds } from 'date-fns-jalali/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalali/esm/fp/addMinutes' {
  import { addMinutes } from 'date-fns-jalali/esm/fp'
  export default addMinutes
}

declare module 'date-fns-jalali/esm/fp/addMonths' {
  import { addMonths } from 'date-fns-jalali/esm/fp'
  export default addMonths
}

declare module 'date-fns-jalali/esm/fp/addQuarters' {
  import { addQuarters } from 'date-fns-jalali/esm/fp'
  export default addQuarters
}

declare module 'date-fns-jalali/esm/fp/addSeconds' {
  import { addSeconds } from 'date-fns-jalali/esm/fp'
  export default addSeconds
}

declare module 'date-fns-jalali/esm/fp/addWeeks' {
  import { addWeeks } from 'date-fns-jalali/esm/fp'
  export default addWeeks
}

declare module 'date-fns-jalali/esm/fp/addYears' {
  import { addYears } from 'date-fns-jalali/esm/fp'
  export default addYears
}

declare module 'date-fns-jalali/esm/fp/areIntervalsOverlapping' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/esm/fp/areIntervalsOverlappingWithOptions' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalali/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalali/esm/fp/clamp' {
  import { clamp } from 'date-fns-jalali/esm/fp'
  export default clamp
}

declare module 'date-fns-jalali/esm/fp/closestIndexTo' {
  import { closestIndexTo } from 'date-fns-jalali/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalali/esm/fp/closestTo' {
  import { closestTo } from 'date-fns-jalali/esm/fp'
  export default closestTo
}

declare module 'date-fns-jalali/esm/fp/compareAsc' {
  import { compareAsc } from 'date-fns-jalali/esm/fp'
  export default compareAsc
}

declare module 'date-fns-jalali/esm/fp/compareDesc' {
  import { compareDesc } from 'date-fns-jalali/esm/fp'
  export default compareDesc
}

declare module 'date-fns-jalali/esm/fp/daysToWeeks' {
  import { daysToWeeks } from 'date-fns-jalali/esm/fp'
  export default daysToWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInBusinessDays' {
  import { differenceInBusinessDays } from 'date-fns-jalali/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarDays' {
  import { differenceInCalendarDays } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarISOWeeks' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarISOWeekYears' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarMonths' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarQuarters' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarWeeks' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarWeeksWithOptions' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarYears' {
  import { differenceInCalendarYears } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/esm/fp/differenceInDays' {
  import { differenceInDays } from 'date-fns-jalali/esm/fp'
  export default differenceInDays
}

declare module 'date-fns-jalali/esm/fp/differenceInHours' {
  import { differenceInHours } from 'date-fns-jalali/esm/fp'
  export default differenceInHours
}

declare module 'date-fns-jalali/esm/fp/differenceInHoursWithOptions' {
  import { differenceInHoursWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInISOWeekYears' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/differenceInMilliseconds' {
  import { differenceInMilliseconds } from 'date-fns-jalali/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/esm/fp/differenceInMinutes' {
  import { differenceInMinutes } from 'date-fns-jalali/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/esm/fp/differenceInMinutesWithOptions' {
  import { differenceInMinutesWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInMonths' {
  import { differenceInMonths } from 'date-fns-jalali/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalali/esm/fp/differenceInQuarters' {
  import { differenceInQuarters } from 'date-fns-jalali/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/esm/fp/differenceInQuartersWithOptions' {
  import { differenceInQuartersWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInSeconds' {
  import { differenceInSeconds } from 'date-fns-jalali/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/esm/fp/differenceInSecondsWithOptions' {
  import { differenceInSecondsWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInWeeks' {
  import { differenceInWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInWeeksWithOptions' {
  import { differenceInWeeksWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInYears' {
  import { differenceInYears } from 'date-fns-jalali/esm/fp'
  export default differenceInYears
}

declare module 'date-fns-jalali/esm/fp/eachDayOfInterval' {
  import { eachDayOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachDayOfIntervalWithOptions' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachHourOfInterval' {
  import { eachHourOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachHourOfIntervalWithOptions' {
  import { eachHourOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachMinuteOfInterval' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachMinuteOfIntervalWithOptions' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachMonthOfInterval' {
  import { eachMonthOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachQuarterOfInterval' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfInterval' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfMonth' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfYear' {
  import { eachWeekendOfYear } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/esm/fp/eachWeekOfInterval' {
  import { eachWeekOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekOfIntervalWithOptions' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachYearOfInterval' {
  import { eachYearOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/esm/fp/endOfDay' {
  import { endOfDay } from 'date-fns-jalali/esm/fp'
  export default endOfDay
}

declare module 'date-fns-jalali/esm/fp/endOfDecade' {
  import { endOfDecade } from 'date-fns-jalali/esm/fp'
  export default endOfDecade
}

declare module 'date-fns-jalali/esm/fp/endOfDecadeWithOptions' {
  import { endOfDecadeWithOptions } from 'date-fns-jalali/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalali/esm/fp/endOfHour' {
  import { endOfHour } from 'date-fns-jalali/esm/fp'
  export default endOfHour
}

declare module 'date-fns-jalali/esm/fp/endOfISOWeek' {
  import { endOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/endOfISOWeekYear' {
  import { endOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/endOfMinute' {
  import { endOfMinute } from 'date-fns-jalali/esm/fp'
  export default endOfMinute
}

declare module 'date-fns-jalali/esm/fp/endOfMonth' {
  import { endOfMonth } from 'date-fns-jalali/esm/fp'
  export default endOfMonth
}

declare module 'date-fns-jalali/esm/fp/endOfQuarter' {
  import { endOfQuarter } from 'date-fns-jalali/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalali/esm/fp/endOfSecond' {
  import { endOfSecond } from 'date-fns-jalali/esm/fp'
  export default endOfSecond
}

declare module 'date-fns-jalali/esm/fp/endOfWeek' {
  import { endOfWeek } from 'date-fns-jalali/esm/fp'
  export default endOfWeek
}

declare module 'date-fns-jalali/esm/fp/endOfWeekWithOptions' {
  import { endOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/endOfYear' {
  import { endOfYear } from 'date-fns-jalali/esm/fp'
  export default endOfYear
}

declare module 'date-fns-jalali/esm/fp/format' {
  import { format } from 'date-fns-jalali/esm/fp'
  export default format
}

declare module 'date-fns-jalali/esm/fp/formatDistance' {
  import { formatDistance } from 'date-fns-jalali/esm/fp'
  export default formatDistance
}

declare module 'date-fns-jalali/esm/fp/formatDistanceStrict' {
  import { formatDistanceStrict } from 'date-fns-jalali/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/esm/fp/formatDistanceStrictWithOptions' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatDistanceWithOptions' {
  import { formatDistanceWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatDuration' {
  import { formatDuration } from 'date-fns-jalali/esm/fp'
  export default formatDuration
}

declare module 'date-fns-jalali/esm/fp/formatDurationWithOptions' {
  import { formatDurationWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatISO' {
  import { formatISO } from 'date-fns-jalali/esm/fp'
  export default formatISO
}

declare module 'date-fns-jalali/esm/fp/formatISO9075' {
  import { formatISO9075 } from 'date-fns-jalali/esm/fp'
  export default formatISO9075
}

declare module 'date-fns-jalali/esm/fp/formatISO9075WithOptions' {
  import { formatISO9075WithOptions } from 'date-fns-jalali/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalali/esm/fp/formatISODuration' {
  import { formatISODuration } from 'date-fns-jalali/esm/fp'
  export default formatISODuration
}

declare module 'date-fns-jalali/esm/fp/formatISOWithOptions' {
  import { formatISOWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRelative' {
  import { formatRelative } from 'date-fns-jalali/esm/fp'
  export default formatRelative
}

declare module 'date-fns-jalali/esm/fp/formatRelativeWithOptions' {
  import { formatRelativeWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRFC3339' {
  import { formatRFC3339 } from 'date-fns-jalali/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalali/esm/fp/formatRFC3339WithOptions' {
  import { formatRFC3339WithOptions } from 'date-fns-jalali/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRFC7231' {
  import { formatRFC7231 } from 'date-fns-jalali/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalali/esm/fp/formatWithOptions' {
  import { formatWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalali/esm/fp/fromUnixTime' {
  import { fromUnixTime } from 'date-fns-jalali/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalali/esm/fp/getDate' {
  import { getDate } from 'date-fns-jalali/esm/fp'
  export default getDate
}

declare module 'date-fns-jalali/esm/fp/getDay' {
  import { getDay } from 'date-fns-jalali/esm/fp'
  export default getDay
}

declare module 'date-fns-jalali/esm/fp/getDayOfYear' {
  import { getDayOfYear } from 'date-fns-jalali/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalali/esm/fp/getDaysInMonth' {
  import { getDaysInMonth } from 'date-fns-jalali/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/esm/fp/getDaysInYear' {
  import { getDaysInYear } from 'date-fns-jalali/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalali/esm/fp/getDecade' {
  import { getDecade } from 'date-fns-jalali/esm/fp'
  export default getDecade
}

declare module 'date-fns-jalali/esm/fp/getHours' {
  import { getHours } from 'date-fns-jalali/esm/fp'
  export default getHours
}

declare module 'date-fns-jalali/esm/fp/getISODay' {
  import { getISODay } from 'date-fns-jalali/esm/fp'
  export default getISODay
}

declare module 'date-fns-jalali/esm/fp/getISOWeek' {
  import { getISOWeek } from 'date-fns-jalali/esm/fp'
  export default getISOWeek
}

declare module 'date-fns-jalali/esm/fp/getISOWeeksInYear' {
  import { getISOWeeksInYear } from 'date-fns-jalali/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/esm/fp/getISOWeekYear' {
  import { getISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/getMilliseconds' {
  import { getMilliseconds } from 'date-fns-jalali/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalali/esm/fp/getMinutes' {
  import { getMinutes } from 'date-fns-jalali/esm/fp'
  export default getMinutes
}

declare module 'date-fns-jalali/esm/fp/getMonth' {
  import { getMonth } from 'date-fns-jalali/esm/fp'
  export default getMonth
}

declare module 'date-fns-jalali/esm/fp/getOverlappingDaysInIntervals' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/esm/fp/getQuarter' {
  import { getQuarter } from 'date-fns-jalali/esm/fp'
  export default getQuarter
}

declare module 'date-fns-jalali/esm/fp/getSeconds' {
  import { getSeconds } from 'date-fns-jalali/esm/fp'
  export default getSeconds
}

declare module 'date-fns-jalali/esm/fp/getTime' {
  import { getTime } from 'date-fns-jalali/esm/fp'
  export default getTime
}

declare module 'date-fns-jalali/esm/fp/getUnixTime' {
  import { getUnixTime } from 'date-fns-jalali/esm/fp'
  export default getUnixTime
}

declare module 'date-fns-jalali/esm/fp/getWeek' {
  import { getWeek } from 'date-fns-jalali/esm/fp'
  export default getWeek
}

declare module 'date-fns-jalali/esm/fp/getWeekOfMonth' {
  import { getWeekOfMonth } from 'date-fns-jalali/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/esm/fp/getWeekOfMonthWithOptions' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeeksInMonth' {
  import { getWeeksInMonth } from 'date-fns-jalali/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/esm/fp/getWeeksInMonthWithOptions' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeekWithOptions' {
  import { getWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeekYear' {
  import { getWeekYear } from 'date-fns-jalali/esm/fp'
  export default getWeekYear
}

declare module 'date-fns-jalali/esm/fp/getWeekYearWithOptions' {
  import { getWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/getYear' {
  import { getYear } from 'date-fns-jalali/esm/fp'
  export default getYear
}

declare module 'date-fns-jalali/esm/fp/hoursToMilliseconds' {
  import { hoursToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/hoursToMinutes' {
  import { hoursToMinutes } from 'date-fns-jalali/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/esm/fp/hoursToSeconds' {
  import { hoursToSeconds } from 'date-fns-jalali/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/esm/fp/intervalToDuration' {
  import { intervalToDuration } from 'date-fns-jalali/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalali/esm/fp/intlFormat' {
  import { intlFormat } from 'date-fns-jalali/esm/fp'
  export default intlFormat
}

declare module 'date-fns-jalali/esm/fp/intlFormatDistance' {
  import { intlFormatDistance } from 'date-fns-jalali/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/esm/fp/intlFormatDistanceWithOptions' {
  import { intlFormatDistanceWithOptions } from 'date-fns-jalali/esm/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns-jalali/esm/fp/isAfter' {
  import { isAfter } from 'date-fns-jalali/esm/fp'
  export default isAfter
}

declare module 'date-fns-jalali/esm/fp/isBefore' {
  import { isBefore } from 'date-fns-jalali/esm/fp'
  export default isBefore
}

declare module 'date-fns-jalali/esm/fp/isDate' {
  import { isDate } from 'date-fns-jalali/esm/fp'
  export default isDate
}

declare module 'date-fns-jalali/esm/fp/isEqual' {
  import { isEqual } from 'date-fns-jalali/esm/fp'
  export default isEqual
}

declare module 'date-fns-jalali/esm/fp/isExists' {
  import { isExists } from 'date-fns-jalali/esm/fp'
  export default isExists
}

declare module 'date-fns-jalali/esm/fp/isFirstDayOfMonth' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/isFriday' {
  import { isFriday } from 'date-fns-jalali/esm/fp'
  export default isFriday
}

declare module 'date-fns-jalali/esm/fp/isLastDayOfMonth' {
  import { isLastDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/isLeapYear' {
  import { isLeapYear } from 'date-fns-jalali/esm/fp'
  export default isLeapYear
}

declare module 'date-fns-jalali/esm/fp/isMatch' {
  import { isMatch } from 'date-fns-jalali/esm/fp'
  export default isMatch
}

declare module 'date-fns-jalali/esm/fp/isMatchWithOptions' {
  import { isMatchWithOptions } from 'date-fns-jalali/esm/fp'
  export default isMatchWithOptions
}

declare module 'date-fns-jalali/esm/fp/isMonday' {
  import { isMonday } from 'date-fns-jalali/esm/fp'
  export default isMonday
}

declare module 'date-fns-jalali/esm/fp/isSameDay' {
  import { isSameDay } from 'date-fns-jalali/esm/fp'
  export default isSameDay
}

declare module 'date-fns-jalali/esm/fp/isSameHour' {
  import { isSameHour } from 'date-fns-jalali/esm/fp'
  export default isSameHour
}

declare module 'date-fns-jalali/esm/fp/isSameISOWeek' {
  import { isSameISOWeek } from 'date-fns-jalali/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/esm/fp/isSameISOWeekYear' {
  import { isSameISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/isSameMinute' {
  import { isSameMinute } from 'date-fns-jalali/esm/fp'
  export default isSameMinute
}

declare module 'date-fns-jalali/esm/fp/isSameMonth' {
  import { isSameMonth } from 'date-fns-jalali/esm/fp'
  export default isSameMonth
}

declare module 'date-fns-jalali/esm/fp/isSameQuarter' {
  import { isSameQuarter } from 'date-fns-jalali/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalali/esm/fp/isSameSecond' {
  import { isSameSecond } from 'date-fns-jalali/esm/fp'
  export default isSameSecond
}

declare module 'date-fns-jalali/esm/fp/isSameWeek' {
  import { isSameWeek } from 'date-fns-jalali/esm/fp'
  export default isSameWeek
}

declare module 'date-fns-jalali/esm/fp/isSameWeekWithOptions' {
  import { isSameWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/isSameYear' {
  import { isSameYear } from 'date-fns-jalali/esm/fp'
  export default isSameYear
}

declare module 'date-fns-jalali/esm/fp/isSaturday' {
  import { isSaturday } from 'date-fns-jalali/esm/fp'
  export default isSaturday
}

declare module 'date-fns-jalali/esm/fp/isSunday' {
  import { isSunday } from 'date-fns-jalali/esm/fp'
  export default isSunday
}

declare module 'date-fns-jalali/esm/fp/isThursday' {
  import { isThursday } from 'date-fns-jalali/esm/fp'
  export default isThursday
}

declare module 'date-fns-jalali/esm/fp/isTuesday' {
  import { isTuesday } from 'date-fns-jalali/esm/fp'
  export default isTuesday
}

declare module 'date-fns-jalali/esm/fp/isValid' {
  import { isValid } from 'date-fns-jalali/esm/fp'
  export default isValid
}

declare module 'date-fns-jalali/esm/fp/isWednesday' {
  import { isWednesday } from 'date-fns-jalali/esm/fp'
  export default isWednesday
}

declare module 'date-fns-jalali/esm/fp/isWeekend' {
  import { isWeekend } from 'date-fns-jalali/esm/fp'
  export default isWeekend
}

declare module 'date-fns-jalali/esm/fp/isWithinInterval' {
  import { isWithinInterval } from 'date-fns-jalali/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalali/esm/fp/lastDayOfDecade' {
  import { lastDayOfDecade } from 'date-fns-jalali/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/esm/fp/lastDayOfISOWeek' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/lastDayOfISOWeekYear' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/lastDayOfMonth' {
  import { lastDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/lastDayOfQuarter' {
  import { lastDayOfQuarter } from 'date-fns-jalali/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/esm/fp/lastDayOfQuarterWithOptions' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalali/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalali/esm/fp/lastDayOfWeek' {
  import { lastDayOfWeek } from 'date-fns-jalali/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/esm/fp/lastDayOfWeekWithOptions' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/lastDayOfYear' {
  import { lastDayOfYear } from 'date-fns-jalali/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/esm/fp/lightFormat' {
  import { lightFormat } from 'date-fns-jalali/esm/fp'
  export default lightFormat
}

declare module 'date-fns-jalali/esm/fp/max' {
  import { max } from 'date-fns-jalali/esm/fp'
  export default max
}

declare module 'date-fns-jalali/esm/fp/milliseconds' {
  import { milliseconds } from 'date-fns-jalali/esm/fp'
  export default milliseconds
}

declare module 'date-fns-jalali/esm/fp/millisecondsToHours' {
  import { millisecondsToHours } from 'date-fns-jalali/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/esm/fp/millisecondsToMinutes' {
  import { millisecondsToMinutes } from 'date-fns-jalali/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/esm/fp/millisecondsToSeconds' {
  import { millisecondsToSeconds } from 'date-fns-jalali/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/esm/fp/min' {
  import { min } from 'date-fns-jalali/esm/fp'
  export default min
}

declare module 'date-fns-jalali/esm/fp/minutesToHours' {
  import { minutesToHours } from 'date-fns-jalali/esm/fp'
  export default minutesToHours
}

declare module 'date-fns-jalali/esm/fp/minutesToMilliseconds' {
  import { minutesToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/minutesToSeconds' {
  import { minutesToSeconds } from 'date-fns-jalali/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/esm/fp/monthsToQuarters' {
  import { monthsToQuarters } from 'date-fns-jalali/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/esm/fp/monthsToYears' {
  import { monthsToYears } from 'date-fns-jalali/esm/fp'
  export default monthsToYears
}

declare module 'date-fns-jalali/esm/fp/nextDay' {
  import { nextDay } from 'date-fns-jalali/esm/fp'
  export default nextDay
}

declare module 'date-fns-jalali/esm/fp/nextFriday' {
  import { nextFriday } from 'date-fns-jalali/esm/fp'
  export default nextFriday
}

declare module 'date-fns-jalali/esm/fp/nextMonday' {
  import { nextMonday } from 'date-fns-jalali/esm/fp'
  export default nextMonday
}

declare module 'date-fns-jalali/esm/fp/nextSaturday' {
  import { nextSaturday } from 'date-fns-jalali/esm/fp'
  export default nextSaturday
}

declare module 'date-fns-jalali/esm/fp/nextSunday' {
  import { nextSunday } from 'date-fns-jalali/esm/fp'
  export default nextSunday
}

declare module 'date-fns-jalali/esm/fp/nextThursday' {
  import { nextThursday } from 'date-fns-jalali/esm/fp'
  export default nextThursday
}

declare module 'date-fns-jalali/esm/fp/nextTuesday' {
  import { nextTuesday } from 'date-fns-jalali/esm/fp'
  export default nextTuesday
}

declare module 'date-fns-jalali/esm/fp/nextWednesday' {
  import { nextWednesday } from 'date-fns-jalali/esm/fp'
  export default nextWednesday
}

declare module 'date-fns-jalali/esm/fp/parse' {
  import { parse } from 'date-fns-jalali/esm/fp'
  export default parse
}

declare module 'date-fns-jalali/esm/fp/parseISO' {
  import { parseISO } from 'date-fns-jalali/esm/fp'
  export default parseISO
}

declare module 'date-fns-jalali/esm/fp/parseISOWithOptions' {
  import { parseISOWithOptions } from 'date-fns-jalali/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalali/esm/fp/parseJSON' {
  import { parseJSON } from 'date-fns-jalali/esm/fp'
  export default parseJSON
}

declare module 'date-fns-jalali/esm/fp/parseWithOptions' {
  import { parseWithOptions } from 'date-fns-jalali/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalali/esm/fp/previousDay' {
  import { previousDay } from 'date-fns-jalali/esm/fp'
  export default previousDay
}

declare module 'date-fns-jalali/esm/fp/previousFriday' {
  import { previousFriday } from 'date-fns-jalali/esm/fp'
  export default previousFriday
}

declare module 'date-fns-jalali/esm/fp/previousMonday' {
  import { previousMonday } from 'date-fns-jalali/esm/fp'
  export default previousMonday
}

declare module 'date-fns-jalali/esm/fp/previousSaturday' {
  import { previousSaturday } from 'date-fns-jalali/esm/fp'
  export default previousSaturday
}

declare module 'date-fns-jalali/esm/fp/previousSunday' {
  import { previousSunday } from 'date-fns-jalali/esm/fp'
  export default previousSunday
}

declare module 'date-fns-jalali/esm/fp/previousThursday' {
  import { previousThursday } from 'date-fns-jalali/esm/fp'
  export default previousThursday
}

declare module 'date-fns-jalali/esm/fp/previousTuesday' {
  import { previousTuesday } from 'date-fns-jalali/esm/fp'
  export default previousTuesday
}

declare module 'date-fns-jalali/esm/fp/previousWednesday' {
  import { previousWednesday } from 'date-fns-jalali/esm/fp'
  export default previousWednesday
}

declare module 'date-fns-jalali/esm/fp/quartersToMonths' {
  import { quartersToMonths } from 'date-fns-jalali/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns-jalali/esm/fp/quartersToYears' {
  import { quartersToYears } from 'date-fns-jalali/esm/fp'
  export default quartersToYears
}

declare module 'date-fns-jalali/esm/fp/roundToNearestMinutes' {
  import { roundToNearestMinutes } from 'date-fns-jalali/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/esm/fp/roundToNearestMinutesWithOptions' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalali/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalali/esm/fp/secondsToHours' {
  import { secondsToHours } from 'date-fns-jalali/esm/fp'
  export default secondsToHours
}

declare module 'date-fns-jalali/esm/fp/secondsToMilliseconds' {
  import { secondsToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/secondsToMinutes' {
  import { secondsToMinutes } from 'date-fns-jalali/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/esm/fp/set' {
  import { set } from 'date-fns-jalali/esm/fp'
  export default set
}

declare module 'date-fns-jalali/esm/fp/setDate' {
  import { setDate } from 'date-fns-jalali/esm/fp'
  export default setDate
}

declare module 'date-fns-jalali/esm/fp/setDay' {
  import { setDay } from 'date-fns-jalali/esm/fp'
  export default setDay
}

declare module 'date-fns-jalali/esm/fp/setDayOfYear' {
  import { setDayOfYear } from 'date-fns-jalali/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalali/esm/fp/setDayWithOptions' {
  import { setDayWithOptions } from 'date-fns-jalali/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalali/esm/fp/setHours' {
  import { setHours } from 'date-fns-jalali/esm/fp'
  export default setHours
}

declare module 'date-fns-jalali/esm/fp/setISODay' {
  import { setISODay } from 'date-fns-jalali/esm/fp'
  export default setISODay
}

declare module 'date-fns-jalali/esm/fp/setISOWeek' {
  import { setISOWeek } from 'date-fns-jalali/esm/fp'
  export default setISOWeek
}

declare module 'date-fns-jalali/esm/fp/setISOWeekYear' {
  import { setISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/setMilliseconds' {
  import { setMilliseconds } from 'date-fns-jalali/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalali/esm/fp/setMinutes' {
  import { setMinutes } from 'date-fns-jalali/esm/fp'
  export default setMinutes
}

declare module 'date-fns-jalali/esm/fp/setMonth' {
  import { setMonth } from 'date-fns-jalali/esm/fp'
  export default setMonth
}

declare module 'date-fns-jalali/esm/fp/setQuarter' {
  import { setQuarter } from 'date-fns-jalali/esm/fp'
  export default setQuarter
}

declare module 'date-fns-jalali/esm/fp/setSeconds' {
  import { setSeconds } from 'date-fns-jalali/esm/fp'
  export default setSeconds
}

declare module 'date-fns-jalali/esm/fp/setWeek' {
  import { setWeek } from 'date-fns-jalali/esm/fp'
  export default setWeek
}

declare module 'date-fns-jalali/esm/fp/setWeekWithOptions' {
  import { setWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/setWeekYear' {
  import { setWeekYear } from 'date-fns-jalali/esm/fp'
  export default setWeekYear
}

declare module 'date-fns-jalali/esm/fp/setWeekYearWithOptions' {
  import { setWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/setYear' {
  import { setYear } from 'date-fns-jalali/esm/fp'
  export default setYear
}

declare module 'date-fns-jalali/esm/fp/startOfDay' {
  import { startOfDay } from 'date-fns-jalali/esm/fp'
  export default startOfDay
}

declare module 'date-fns-jalali/esm/fp/startOfDecade' {
  import { startOfDecade } from 'date-fns-jalali/esm/fp'
  export default startOfDecade
}

declare module 'date-fns-jalali/esm/fp/startOfHour' {
  import { startOfHour } from 'date-fns-jalali/esm/fp'
  export default startOfHour
}

declare module 'date-fns-jalali/esm/fp/startOfISOWeek' {
  import { startOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/startOfISOWeekYear' {
  import { startOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/startOfMinute' {
  import { startOfMinute } from 'date-fns-jalali/esm/fp'
  export default startOfMinute
}

declare module 'date-fns-jalali/esm/fp/startOfMonth' {
  import { startOfMonth } from 'date-fns-jalali/esm/fp'
  export default startOfMonth
}

declare module 'date-fns-jalali/esm/fp/startOfQuarter' {
  import { startOfQuarter } from 'date-fns-jalali/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalali/esm/fp/startOfSecond' {
  import { startOfSecond } from 'date-fns-jalali/esm/fp'
  export default startOfSecond
}

declare module 'date-fns-jalali/esm/fp/startOfWeek' {
  import { startOfWeek } from 'date-fns-jalali/esm/fp'
  export default startOfWeek
}

declare module 'date-fns-jalali/esm/fp/startOfWeekWithOptions' {
  import { startOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/startOfWeekYear' {
  import { startOfWeekYear } from 'date-fns-jalali/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/esm/fp/startOfWeekYearWithOptions' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/startOfYear' {
  import { startOfYear } from 'date-fns-jalali/esm/fp'
  export default startOfYear
}

declare module 'date-fns-jalali/esm/fp/sub' {
  import { sub } from 'date-fns-jalali/esm/fp'
  export default sub
}

declare module 'date-fns-jalali/esm/fp/subBusinessDays' {
  import { subBusinessDays } from 'date-fns-jalali/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalali/esm/fp/subDays' {
  import { subDays } from 'date-fns-jalali/esm/fp'
  export default subDays
}

declare module 'date-fns-jalali/esm/fp/subHours' {
  import { subHours } from 'date-fns-jalali/esm/fp'
  export default subHours
}

declare module 'date-fns-jalali/esm/fp/subISOWeekYears' {
  import { subISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/subMilliseconds' {
  import { subMilliseconds } from 'date-fns-jalali/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalali/esm/fp/subMinutes' {
  import { subMinutes } from 'date-fns-jalali/esm/fp'
  export default subMinutes
}

declare module 'date-fns-jalali/esm/fp/subMonths' {
  import { subMonths } from 'date-fns-jalali/esm/fp'
  export default subMonths
}

declare module 'date-fns-jalali/esm/fp/subQuarters' {
  import { subQuarters } from 'date-fns-jalali/esm/fp'
  export default subQuarters
}

declare module 'date-fns-jalali/esm/fp/subSeconds' {
  import { subSeconds } from 'date-fns-jalali/esm/fp'
  export default subSeconds
}

declare module 'date-fns-jalali/esm/fp/subWeeks' {
  import { subWeeks } from 'date-fns-jalali/esm/fp'
  export default subWeeks
}

declare module 'date-fns-jalali/esm/fp/subYears' {
  import { subYears } from 'date-fns-jalali/esm/fp'
  export default subYears
}

declare module 'date-fns-jalali/esm/fp/toDate' {
  import { toDate } from 'date-fns-jalali/esm/fp'
  export default toDate
}

declare module 'date-fns-jalali/esm/fp/weeksToDays' {
  import { weeksToDays } from 'date-fns-jalali/esm/fp'
  export default weeksToDays
}

declare module 'date-fns-jalali/esm/fp/yearsToMonths' {
  import { yearsToMonths } from 'date-fns-jalali/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns-jalali/esm/fp/yearsToQuarters' {
  import { yearsToQuarters } from 'date-fns-jalali/esm/fp'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/esm/fp/add/index' {
  import { add } from 'date-fns-jalali/esm/fp'
  export default add
}

declare module 'date-fns-jalali/esm/fp/addBusinessDays/index' {
  import { addBusinessDays } from 'date-fns-jalali/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalali/esm/fp/addDays/index' {
  import { addDays } from 'date-fns-jalali/esm/fp'
  export default addDays
}

declare module 'date-fns-jalali/esm/fp/addHours/index' {
  import { addHours } from 'date-fns-jalali/esm/fp'
  export default addHours
}

declare module 'date-fns-jalali/esm/fp/addISOWeekYears/index' {
  import { addISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/addMilliseconds/index' {
  import { addMilliseconds } from 'date-fns-jalali/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalali/esm/fp/addMinutes/index' {
  import { addMinutes } from 'date-fns-jalali/esm/fp'
  export default addMinutes
}

declare module 'date-fns-jalali/esm/fp/addMonths/index' {
  import { addMonths } from 'date-fns-jalali/esm/fp'
  export default addMonths
}

declare module 'date-fns-jalali/esm/fp/addQuarters/index' {
  import { addQuarters } from 'date-fns-jalali/esm/fp'
  export default addQuarters
}

declare module 'date-fns-jalali/esm/fp/addSeconds/index' {
  import { addSeconds } from 'date-fns-jalali/esm/fp'
  export default addSeconds
}

declare module 'date-fns-jalali/esm/fp/addWeeks/index' {
  import { addWeeks } from 'date-fns-jalali/esm/fp'
  export default addWeeks
}

declare module 'date-fns-jalali/esm/fp/addYears/index' {
  import { addYears } from 'date-fns-jalali/esm/fp'
  export default addYears
}

declare module 'date-fns-jalali/esm/fp/areIntervalsOverlapping/index' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/esm/fp/areIntervalsOverlappingWithOptions/index' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalali/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalali/esm/fp/clamp/index' {
  import { clamp } from 'date-fns-jalali/esm/fp'
  export default clamp
}

declare module 'date-fns-jalali/esm/fp/closestIndexTo/index' {
  import { closestIndexTo } from 'date-fns-jalali/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalali/esm/fp/closestTo/index' {
  import { closestTo } from 'date-fns-jalali/esm/fp'
  export default closestTo
}

declare module 'date-fns-jalali/esm/fp/compareAsc/index' {
  import { compareAsc } from 'date-fns-jalali/esm/fp'
  export default compareAsc
}

declare module 'date-fns-jalali/esm/fp/compareDesc/index' {
  import { compareDesc } from 'date-fns-jalali/esm/fp'
  export default compareDesc
}

declare module 'date-fns-jalali/esm/fp/daysToWeeks/index' {
  import { daysToWeeks } from 'date-fns-jalali/esm/fp'
  export default daysToWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInBusinessDays/index' {
  import { differenceInBusinessDays } from 'date-fns-jalali/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarDays/index' {
  import { differenceInCalendarDays } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarISOWeeks/index' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarISOWeekYears/index' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarMonths/index' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarQuarters/index' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarWeeks/index' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarWeeksWithOptions/index' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarYears/index' {
  import { differenceInCalendarYears } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/esm/fp/differenceInDays/index' {
  import { differenceInDays } from 'date-fns-jalali/esm/fp'
  export default differenceInDays
}

declare module 'date-fns-jalali/esm/fp/differenceInHours/index' {
  import { differenceInHours } from 'date-fns-jalali/esm/fp'
  export default differenceInHours
}

declare module 'date-fns-jalali/esm/fp/differenceInHoursWithOptions/index' {
  import { differenceInHoursWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInISOWeekYears/index' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/differenceInMilliseconds/index' {
  import { differenceInMilliseconds } from 'date-fns-jalali/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/esm/fp/differenceInMinutes/index' {
  import { differenceInMinutes } from 'date-fns-jalali/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/esm/fp/differenceInMinutesWithOptions/index' {
  import { differenceInMinutesWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInMonths/index' {
  import { differenceInMonths } from 'date-fns-jalali/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalali/esm/fp/differenceInQuarters/index' {
  import { differenceInQuarters } from 'date-fns-jalali/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/esm/fp/differenceInQuartersWithOptions/index' {
  import { differenceInQuartersWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInSeconds/index' {
  import { differenceInSeconds } from 'date-fns-jalali/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/esm/fp/differenceInSecondsWithOptions/index' {
  import { differenceInSecondsWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInWeeks/index' {
  import { differenceInWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInWeeksWithOptions/index' {
  import { differenceInWeeksWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInYears/index' {
  import { differenceInYears } from 'date-fns-jalali/esm/fp'
  export default differenceInYears
}

declare module 'date-fns-jalali/esm/fp/eachDayOfInterval/index' {
  import { eachDayOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachDayOfIntervalWithOptions/index' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachHourOfInterval/index' {
  import { eachHourOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachHourOfIntervalWithOptions/index' {
  import { eachHourOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachMinuteOfInterval/index' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachMinuteOfIntervalWithOptions/index' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachMonthOfInterval/index' {
  import { eachMonthOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachQuarterOfInterval/index' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfInterval/index' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfMonth/index' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfYear/index' {
  import { eachWeekendOfYear } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/esm/fp/eachWeekOfInterval/index' {
  import { eachWeekOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekOfIntervalWithOptions/index' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachYearOfInterval/index' {
  import { eachYearOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/esm/fp/endOfDay/index' {
  import { endOfDay } from 'date-fns-jalali/esm/fp'
  export default endOfDay
}

declare module 'date-fns-jalali/esm/fp/endOfDecade/index' {
  import { endOfDecade } from 'date-fns-jalali/esm/fp'
  export default endOfDecade
}

declare module 'date-fns-jalali/esm/fp/endOfDecadeWithOptions/index' {
  import { endOfDecadeWithOptions } from 'date-fns-jalali/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalali/esm/fp/endOfHour/index' {
  import { endOfHour } from 'date-fns-jalali/esm/fp'
  export default endOfHour
}

declare module 'date-fns-jalali/esm/fp/endOfISOWeek/index' {
  import { endOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/endOfISOWeekYear/index' {
  import { endOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/endOfMinute/index' {
  import { endOfMinute } from 'date-fns-jalali/esm/fp'
  export default endOfMinute
}

declare module 'date-fns-jalali/esm/fp/endOfMonth/index' {
  import { endOfMonth } from 'date-fns-jalali/esm/fp'
  export default endOfMonth
}

declare module 'date-fns-jalali/esm/fp/endOfQuarter/index' {
  import { endOfQuarter } from 'date-fns-jalali/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalali/esm/fp/endOfSecond/index' {
  import { endOfSecond } from 'date-fns-jalali/esm/fp'
  export default endOfSecond
}

declare module 'date-fns-jalali/esm/fp/endOfWeek/index' {
  import { endOfWeek } from 'date-fns-jalali/esm/fp'
  export default endOfWeek
}

declare module 'date-fns-jalali/esm/fp/endOfWeekWithOptions/index' {
  import { endOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/endOfYear/index' {
  import { endOfYear } from 'date-fns-jalali/esm/fp'
  export default endOfYear
}

declare module 'date-fns-jalali/esm/fp/format/index' {
  import { format } from 'date-fns-jalali/esm/fp'
  export default format
}

declare module 'date-fns-jalali/esm/fp/formatDistance/index' {
  import { formatDistance } from 'date-fns-jalali/esm/fp'
  export default formatDistance
}

declare module 'date-fns-jalali/esm/fp/formatDistanceStrict/index' {
  import { formatDistanceStrict } from 'date-fns-jalali/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/esm/fp/formatDistanceStrictWithOptions/index' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatDistanceWithOptions/index' {
  import { formatDistanceWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatDuration/index' {
  import { formatDuration } from 'date-fns-jalali/esm/fp'
  export default formatDuration
}

declare module 'date-fns-jalali/esm/fp/formatDurationWithOptions/index' {
  import { formatDurationWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatISO/index' {
  import { formatISO } from 'date-fns-jalali/esm/fp'
  export default formatISO
}

declare module 'date-fns-jalali/esm/fp/formatISO9075/index' {
  import { formatISO9075 } from 'date-fns-jalali/esm/fp'
  export default formatISO9075
}

declare module 'date-fns-jalali/esm/fp/formatISO9075WithOptions/index' {
  import { formatISO9075WithOptions } from 'date-fns-jalali/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalali/esm/fp/formatISODuration/index' {
  import { formatISODuration } from 'date-fns-jalali/esm/fp'
  export default formatISODuration
}

declare module 'date-fns-jalali/esm/fp/formatISOWithOptions/index' {
  import { formatISOWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRelative/index' {
  import { formatRelative } from 'date-fns-jalali/esm/fp'
  export default formatRelative
}

declare module 'date-fns-jalali/esm/fp/formatRelativeWithOptions/index' {
  import { formatRelativeWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRFC3339/index' {
  import { formatRFC3339 } from 'date-fns-jalali/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalali/esm/fp/formatRFC3339WithOptions/index' {
  import { formatRFC3339WithOptions } from 'date-fns-jalali/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRFC7231/index' {
  import { formatRFC7231 } from 'date-fns-jalali/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalali/esm/fp/formatWithOptions/index' {
  import { formatWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalali/esm/fp/fromUnixTime/index' {
  import { fromUnixTime } from 'date-fns-jalali/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalali/esm/fp/getDate/index' {
  import { getDate } from 'date-fns-jalali/esm/fp'
  export default getDate
}

declare module 'date-fns-jalali/esm/fp/getDay/index' {
  import { getDay } from 'date-fns-jalali/esm/fp'
  export default getDay
}

declare module 'date-fns-jalali/esm/fp/getDayOfYear/index' {
  import { getDayOfYear } from 'date-fns-jalali/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalali/esm/fp/getDaysInMonth/index' {
  import { getDaysInMonth } from 'date-fns-jalali/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/esm/fp/getDaysInYear/index' {
  import { getDaysInYear } from 'date-fns-jalali/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalali/esm/fp/getDecade/index' {
  import { getDecade } from 'date-fns-jalali/esm/fp'
  export default getDecade
}

declare module 'date-fns-jalali/esm/fp/getHours/index' {
  import { getHours } from 'date-fns-jalali/esm/fp'
  export default getHours
}

declare module 'date-fns-jalali/esm/fp/getISODay/index' {
  import { getISODay } from 'date-fns-jalali/esm/fp'
  export default getISODay
}

declare module 'date-fns-jalali/esm/fp/getISOWeek/index' {
  import { getISOWeek } from 'date-fns-jalali/esm/fp'
  export default getISOWeek
}

declare module 'date-fns-jalali/esm/fp/getISOWeeksInYear/index' {
  import { getISOWeeksInYear } from 'date-fns-jalali/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/esm/fp/getISOWeekYear/index' {
  import { getISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/getMilliseconds/index' {
  import { getMilliseconds } from 'date-fns-jalali/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalali/esm/fp/getMinutes/index' {
  import { getMinutes } from 'date-fns-jalali/esm/fp'
  export default getMinutes
}

declare module 'date-fns-jalali/esm/fp/getMonth/index' {
  import { getMonth } from 'date-fns-jalali/esm/fp'
  export default getMonth
}

declare module 'date-fns-jalali/esm/fp/getOverlappingDaysInIntervals/index' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/esm/fp/getQuarter/index' {
  import { getQuarter } from 'date-fns-jalali/esm/fp'
  export default getQuarter
}

declare module 'date-fns-jalali/esm/fp/getSeconds/index' {
  import { getSeconds } from 'date-fns-jalali/esm/fp'
  export default getSeconds
}

declare module 'date-fns-jalali/esm/fp/getTime/index' {
  import { getTime } from 'date-fns-jalali/esm/fp'
  export default getTime
}

declare module 'date-fns-jalali/esm/fp/getUnixTime/index' {
  import { getUnixTime } from 'date-fns-jalali/esm/fp'
  export default getUnixTime
}

declare module 'date-fns-jalali/esm/fp/getWeek/index' {
  import { getWeek } from 'date-fns-jalali/esm/fp'
  export default getWeek
}

declare module 'date-fns-jalali/esm/fp/getWeekOfMonth/index' {
  import { getWeekOfMonth } from 'date-fns-jalali/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/esm/fp/getWeekOfMonthWithOptions/index' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeeksInMonth/index' {
  import { getWeeksInMonth } from 'date-fns-jalali/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/esm/fp/getWeeksInMonthWithOptions/index' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeekWithOptions/index' {
  import { getWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeekYear/index' {
  import { getWeekYear } from 'date-fns-jalali/esm/fp'
  export default getWeekYear
}

declare module 'date-fns-jalali/esm/fp/getWeekYearWithOptions/index' {
  import { getWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/getYear/index' {
  import { getYear } from 'date-fns-jalali/esm/fp'
  export default getYear
}

declare module 'date-fns-jalali/esm/fp/hoursToMilliseconds/index' {
  import { hoursToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/hoursToMinutes/index' {
  import { hoursToMinutes } from 'date-fns-jalali/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/esm/fp/hoursToSeconds/index' {
  import { hoursToSeconds } from 'date-fns-jalali/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/esm/fp/intervalToDuration/index' {
  import { intervalToDuration } from 'date-fns-jalali/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalali/esm/fp/intlFormat/index' {
  import { intlFormat } from 'date-fns-jalali/esm/fp'
  export default intlFormat
}

declare module 'date-fns-jalali/esm/fp/intlFormatDistance/index' {
  import { intlFormatDistance } from 'date-fns-jalali/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/esm/fp/intlFormatDistanceWithOptions/index' {
  import { intlFormatDistanceWithOptions } from 'date-fns-jalali/esm/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns-jalali/esm/fp/isAfter/index' {
  import { isAfter } from 'date-fns-jalali/esm/fp'
  export default isAfter
}

declare module 'date-fns-jalali/esm/fp/isBefore/index' {
  import { isBefore } from 'date-fns-jalali/esm/fp'
  export default isBefore
}

declare module 'date-fns-jalali/esm/fp/isDate/index' {
  import { isDate } from 'date-fns-jalali/esm/fp'
  export default isDate
}

declare module 'date-fns-jalali/esm/fp/isEqual/index' {
  import { isEqual } from 'date-fns-jalali/esm/fp'
  export default isEqual
}

declare module 'date-fns-jalali/esm/fp/isExists/index' {
  import { isExists } from 'date-fns-jalali/esm/fp'
  export default isExists
}

declare module 'date-fns-jalali/esm/fp/isFirstDayOfMonth/index' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/isFriday/index' {
  import { isFriday } from 'date-fns-jalali/esm/fp'
  export default isFriday
}

declare module 'date-fns-jalali/esm/fp/isLastDayOfMonth/index' {
  import { isLastDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/isLeapYear/index' {
  import { isLeapYear } from 'date-fns-jalali/esm/fp'
  export default isLeapYear
}

declare module 'date-fns-jalali/esm/fp/isMatch/index' {
  import { isMatch } from 'date-fns-jalali/esm/fp'
  export default isMatch
}

declare module 'date-fns-jalali/esm/fp/isMatchWithOptions/index' {
  import { isMatchWithOptions } from 'date-fns-jalali/esm/fp'
  export default isMatchWithOptions
}

declare module 'date-fns-jalali/esm/fp/isMonday/index' {
  import { isMonday } from 'date-fns-jalali/esm/fp'
  export default isMonday
}

declare module 'date-fns-jalali/esm/fp/isSameDay/index' {
  import { isSameDay } from 'date-fns-jalali/esm/fp'
  export default isSameDay
}

declare module 'date-fns-jalali/esm/fp/isSameHour/index' {
  import { isSameHour } from 'date-fns-jalali/esm/fp'
  export default isSameHour
}

declare module 'date-fns-jalali/esm/fp/isSameISOWeek/index' {
  import { isSameISOWeek } from 'date-fns-jalali/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/esm/fp/isSameISOWeekYear/index' {
  import { isSameISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/isSameMinute/index' {
  import { isSameMinute } from 'date-fns-jalali/esm/fp'
  export default isSameMinute
}

declare module 'date-fns-jalali/esm/fp/isSameMonth/index' {
  import { isSameMonth } from 'date-fns-jalali/esm/fp'
  export default isSameMonth
}

declare module 'date-fns-jalali/esm/fp/isSameQuarter/index' {
  import { isSameQuarter } from 'date-fns-jalali/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalali/esm/fp/isSameSecond/index' {
  import { isSameSecond } from 'date-fns-jalali/esm/fp'
  export default isSameSecond
}

declare module 'date-fns-jalali/esm/fp/isSameWeek/index' {
  import { isSameWeek } from 'date-fns-jalali/esm/fp'
  export default isSameWeek
}

declare module 'date-fns-jalali/esm/fp/isSameWeekWithOptions/index' {
  import { isSameWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/isSameYear/index' {
  import { isSameYear } from 'date-fns-jalali/esm/fp'
  export default isSameYear
}

declare module 'date-fns-jalali/esm/fp/isSaturday/index' {
  import { isSaturday } from 'date-fns-jalali/esm/fp'
  export default isSaturday
}

declare module 'date-fns-jalali/esm/fp/isSunday/index' {
  import { isSunday } from 'date-fns-jalali/esm/fp'
  export default isSunday
}

declare module 'date-fns-jalali/esm/fp/isThursday/index' {
  import { isThursday } from 'date-fns-jalali/esm/fp'
  export default isThursday
}

declare module 'date-fns-jalali/esm/fp/isTuesday/index' {
  import { isTuesday } from 'date-fns-jalali/esm/fp'
  export default isTuesday
}

declare module 'date-fns-jalali/esm/fp/isValid/index' {
  import { isValid } from 'date-fns-jalali/esm/fp'
  export default isValid
}

declare module 'date-fns-jalali/esm/fp/isWednesday/index' {
  import { isWednesday } from 'date-fns-jalali/esm/fp'
  export default isWednesday
}

declare module 'date-fns-jalali/esm/fp/isWeekend/index' {
  import { isWeekend } from 'date-fns-jalali/esm/fp'
  export default isWeekend
}

declare module 'date-fns-jalali/esm/fp/isWithinInterval/index' {
  import { isWithinInterval } from 'date-fns-jalali/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalali/esm/fp/lastDayOfDecade/index' {
  import { lastDayOfDecade } from 'date-fns-jalali/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/esm/fp/lastDayOfISOWeek/index' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/lastDayOfISOWeekYear/index' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/lastDayOfMonth/index' {
  import { lastDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/lastDayOfQuarter/index' {
  import { lastDayOfQuarter } from 'date-fns-jalali/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/esm/fp/lastDayOfQuarterWithOptions/index' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalali/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalali/esm/fp/lastDayOfWeek/index' {
  import { lastDayOfWeek } from 'date-fns-jalali/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/esm/fp/lastDayOfWeekWithOptions/index' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/lastDayOfYear/index' {
  import { lastDayOfYear } from 'date-fns-jalali/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/esm/fp/lightFormat/index' {
  import { lightFormat } from 'date-fns-jalali/esm/fp'
  export default lightFormat
}

declare module 'date-fns-jalali/esm/fp/max/index' {
  import { max } from 'date-fns-jalali/esm/fp'
  export default max
}

declare module 'date-fns-jalali/esm/fp/milliseconds/index' {
  import { milliseconds } from 'date-fns-jalali/esm/fp'
  export default milliseconds
}

declare module 'date-fns-jalali/esm/fp/millisecondsToHours/index' {
  import { millisecondsToHours } from 'date-fns-jalali/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/esm/fp/millisecondsToMinutes/index' {
  import { millisecondsToMinutes } from 'date-fns-jalali/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/esm/fp/millisecondsToSeconds/index' {
  import { millisecondsToSeconds } from 'date-fns-jalali/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/esm/fp/min/index' {
  import { min } from 'date-fns-jalali/esm/fp'
  export default min
}

declare module 'date-fns-jalali/esm/fp/minutesToHours/index' {
  import { minutesToHours } from 'date-fns-jalali/esm/fp'
  export default minutesToHours
}

declare module 'date-fns-jalali/esm/fp/minutesToMilliseconds/index' {
  import { minutesToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/minutesToSeconds/index' {
  import { minutesToSeconds } from 'date-fns-jalali/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/esm/fp/monthsToQuarters/index' {
  import { monthsToQuarters } from 'date-fns-jalali/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/esm/fp/monthsToYears/index' {
  import { monthsToYears } from 'date-fns-jalali/esm/fp'
  export default monthsToYears
}

declare module 'date-fns-jalali/esm/fp/nextDay/index' {
  import { nextDay } from 'date-fns-jalali/esm/fp'
  export default nextDay
}

declare module 'date-fns-jalali/esm/fp/nextFriday/index' {
  import { nextFriday } from 'date-fns-jalali/esm/fp'
  export default nextFriday
}

declare module 'date-fns-jalali/esm/fp/nextMonday/index' {
  import { nextMonday } from 'date-fns-jalali/esm/fp'
  export default nextMonday
}

declare module 'date-fns-jalali/esm/fp/nextSaturday/index' {
  import { nextSaturday } from 'date-fns-jalali/esm/fp'
  export default nextSaturday
}

declare module 'date-fns-jalali/esm/fp/nextSunday/index' {
  import { nextSunday } from 'date-fns-jalali/esm/fp'
  export default nextSunday
}

declare module 'date-fns-jalali/esm/fp/nextThursday/index' {
  import { nextThursday } from 'date-fns-jalali/esm/fp'
  export default nextThursday
}

declare module 'date-fns-jalali/esm/fp/nextTuesday/index' {
  import { nextTuesday } from 'date-fns-jalali/esm/fp'
  export default nextTuesday
}

declare module 'date-fns-jalali/esm/fp/nextWednesday/index' {
  import { nextWednesday } from 'date-fns-jalali/esm/fp'
  export default nextWednesday
}

declare module 'date-fns-jalali/esm/fp/parse/index' {
  import { parse } from 'date-fns-jalali/esm/fp'
  export default parse
}

declare module 'date-fns-jalali/esm/fp/parseISO/index' {
  import { parseISO } from 'date-fns-jalali/esm/fp'
  export default parseISO
}

declare module 'date-fns-jalali/esm/fp/parseISOWithOptions/index' {
  import { parseISOWithOptions } from 'date-fns-jalali/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalali/esm/fp/parseJSON/index' {
  import { parseJSON } from 'date-fns-jalali/esm/fp'
  export default parseJSON
}

declare module 'date-fns-jalali/esm/fp/parseWithOptions/index' {
  import { parseWithOptions } from 'date-fns-jalali/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalali/esm/fp/previousDay/index' {
  import { previousDay } from 'date-fns-jalali/esm/fp'
  export default previousDay
}

declare module 'date-fns-jalali/esm/fp/previousFriday/index' {
  import { previousFriday } from 'date-fns-jalali/esm/fp'
  export default previousFriday
}

declare module 'date-fns-jalali/esm/fp/previousMonday/index' {
  import { previousMonday } from 'date-fns-jalali/esm/fp'
  export default previousMonday
}

declare module 'date-fns-jalali/esm/fp/previousSaturday/index' {
  import { previousSaturday } from 'date-fns-jalali/esm/fp'
  export default previousSaturday
}

declare module 'date-fns-jalali/esm/fp/previousSunday/index' {
  import { previousSunday } from 'date-fns-jalali/esm/fp'
  export default previousSunday
}

declare module 'date-fns-jalali/esm/fp/previousThursday/index' {
  import { previousThursday } from 'date-fns-jalali/esm/fp'
  export default previousThursday
}

declare module 'date-fns-jalali/esm/fp/previousTuesday/index' {
  import { previousTuesday } from 'date-fns-jalali/esm/fp'
  export default previousTuesday
}

declare module 'date-fns-jalali/esm/fp/previousWednesday/index' {
  import { previousWednesday } from 'date-fns-jalali/esm/fp'
  export default previousWednesday
}

declare module 'date-fns-jalali/esm/fp/quartersToMonths/index' {
  import { quartersToMonths } from 'date-fns-jalali/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns-jalali/esm/fp/quartersToYears/index' {
  import { quartersToYears } from 'date-fns-jalali/esm/fp'
  export default quartersToYears
}

declare module 'date-fns-jalali/esm/fp/roundToNearestMinutes/index' {
  import { roundToNearestMinutes } from 'date-fns-jalali/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/esm/fp/roundToNearestMinutesWithOptions/index' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalali/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalali/esm/fp/secondsToHours/index' {
  import { secondsToHours } from 'date-fns-jalali/esm/fp'
  export default secondsToHours
}

declare module 'date-fns-jalali/esm/fp/secondsToMilliseconds/index' {
  import { secondsToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/secondsToMinutes/index' {
  import { secondsToMinutes } from 'date-fns-jalali/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/esm/fp/set/index' {
  import { set } from 'date-fns-jalali/esm/fp'
  export default set
}

declare module 'date-fns-jalali/esm/fp/setDate/index' {
  import { setDate } from 'date-fns-jalali/esm/fp'
  export default setDate
}

declare module 'date-fns-jalali/esm/fp/setDay/index' {
  import { setDay } from 'date-fns-jalali/esm/fp'
  export default setDay
}

declare module 'date-fns-jalali/esm/fp/setDayOfYear/index' {
  import { setDayOfYear } from 'date-fns-jalali/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalali/esm/fp/setDayWithOptions/index' {
  import { setDayWithOptions } from 'date-fns-jalali/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalali/esm/fp/setHours/index' {
  import { setHours } from 'date-fns-jalali/esm/fp'
  export default setHours
}

declare module 'date-fns-jalali/esm/fp/setISODay/index' {
  import { setISODay } from 'date-fns-jalali/esm/fp'
  export default setISODay
}

declare module 'date-fns-jalali/esm/fp/setISOWeek/index' {
  import { setISOWeek } from 'date-fns-jalali/esm/fp'
  export default setISOWeek
}

declare module 'date-fns-jalali/esm/fp/setISOWeekYear/index' {
  import { setISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/setMilliseconds/index' {
  import { setMilliseconds } from 'date-fns-jalali/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalali/esm/fp/setMinutes/index' {
  import { setMinutes } from 'date-fns-jalali/esm/fp'
  export default setMinutes
}

declare module 'date-fns-jalali/esm/fp/setMonth/index' {
  import { setMonth } from 'date-fns-jalali/esm/fp'
  export default setMonth
}

declare module 'date-fns-jalali/esm/fp/setQuarter/index' {
  import { setQuarter } from 'date-fns-jalali/esm/fp'
  export default setQuarter
}

declare module 'date-fns-jalali/esm/fp/setSeconds/index' {
  import { setSeconds } from 'date-fns-jalali/esm/fp'
  export default setSeconds
}

declare module 'date-fns-jalali/esm/fp/setWeek/index' {
  import { setWeek } from 'date-fns-jalali/esm/fp'
  export default setWeek
}

declare module 'date-fns-jalali/esm/fp/setWeekWithOptions/index' {
  import { setWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/setWeekYear/index' {
  import { setWeekYear } from 'date-fns-jalali/esm/fp'
  export default setWeekYear
}

declare module 'date-fns-jalali/esm/fp/setWeekYearWithOptions/index' {
  import { setWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/setYear/index' {
  import { setYear } from 'date-fns-jalali/esm/fp'
  export default setYear
}

declare module 'date-fns-jalali/esm/fp/startOfDay/index' {
  import { startOfDay } from 'date-fns-jalali/esm/fp'
  export default startOfDay
}

declare module 'date-fns-jalali/esm/fp/startOfDecade/index' {
  import { startOfDecade } from 'date-fns-jalali/esm/fp'
  export default startOfDecade
}

declare module 'date-fns-jalali/esm/fp/startOfHour/index' {
  import { startOfHour } from 'date-fns-jalali/esm/fp'
  export default startOfHour
}

declare module 'date-fns-jalali/esm/fp/startOfISOWeek/index' {
  import { startOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/startOfISOWeekYear/index' {
  import { startOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/startOfMinute/index' {
  import { startOfMinute } from 'date-fns-jalali/esm/fp'
  export default startOfMinute
}

declare module 'date-fns-jalali/esm/fp/startOfMonth/index' {
  import { startOfMonth } from 'date-fns-jalali/esm/fp'
  export default startOfMonth
}

declare module 'date-fns-jalali/esm/fp/startOfQuarter/index' {
  import { startOfQuarter } from 'date-fns-jalali/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalali/esm/fp/startOfSecond/index' {
  import { startOfSecond } from 'date-fns-jalali/esm/fp'
  export default startOfSecond
}

declare module 'date-fns-jalali/esm/fp/startOfWeek/index' {
  import { startOfWeek } from 'date-fns-jalali/esm/fp'
  export default startOfWeek
}

declare module 'date-fns-jalali/esm/fp/startOfWeekWithOptions/index' {
  import { startOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/startOfWeekYear/index' {
  import { startOfWeekYear } from 'date-fns-jalali/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/esm/fp/startOfWeekYearWithOptions/index' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/startOfYear/index' {
  import { startOfYear } from 'date-fns-jalali/esm/fp'
  export default startOfYear
}

declare module 'date-fns-jalali/esm/fp/sub/index' {
  import { sub } from 'date-fns-jalali/esm/fp'
  export default sub
}

declare module 'date-fns-jalali/esm/fp/subBusinessDays/index' {
  import { subBusinessDays } from 'date-fns-jalali/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalali/esm/fp/subDays/index' {
  import { subDays } from 'date-fns-jalali/esm/fp'
  export default subDays
}

declare module 'date-fns-jalali/esm/fp/subHours/index' {
  import { subHours } from 'date-fns-jalali/esm/fp'
  export default subHours
}

declare module 'date-fns-jalali/esm/fp/subISOWeekYears/index' {
  import { subISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/subMilliseconds/index' {
  import { subMilliseconds } from 'date-fns-jalali/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalali/esm/fp/subMinutes/index' {
  import { subMinutes } from 'date-fns-jalali/esm/fp'
  export default subMinutes
}

declare module 'date-fns-jalali/esm/fp/subMonths/index' {
  import { subMonths } from 'date-fns-jalali/esm/fp'
  export default subMonths
}

declare module 'date-fns-jalali/esm/fp/subQuarters/index' {
  import { subQuarters } from 'date-fns-jalali/esm/fp'
  export default subQuarters
}

declare module 'date-fns-jalali/esm/fp/subSeconds/index' {
  import { subSeconds } from 'date-fns-jalali/esm/fp'
  export default subSeconds
}

declare module 'date-fns-jalali/esm/fp/subWeeks/index' {
  import { subWeeks } from 'date-fns-jalali/esm/fp'
  export default subWeeks
}

declare module 'date-fns-jalali/esm/fp/subYears/index' {
  import { subYears } from 'date-fns-jalali/esm/fp'
  export default subYears
}

declare module 'date-fns-jalali/esm/fp/toDate/index' {
  import { toDate } from 'date-fns-jalali/esm/fp'
  export default toDate
}

declare module 'date-fns-jalali/esm/fp/weeksToDays/index' {
  import { weeksToDays } from 'date-fns-jalali/esm/fp'
  export default weeksToDays
}

declare module 'date-fns-jalali/esm/fp/yearsToMonths/index' {
  import { yearsToMonths } from 'date-fns-jalali/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns-jalali/esm/fp/yearsToQuarters/index' {
  import { yearsToQuarters } from 'date-fns-jalali/esm/fp'
  export default yearsToQuarters
}

declare module 'date-fns-jalali/esm/fp/add/index.js' {
  import { add } from 'date-fns-jalali/esm/fp'
  export default add
}

declare module 'date-fns-jalali/esm/fp/addBusinessDays/index.js' {
  import { addBusinessDays } from 'date-fns-jalali/esm/fp'
  export default addBusinessDays
}

declare module 'date-fns-jalali/esm/fp/addDays/index.js' {
  import { addDays } from 'date-fns-jalali/esm/fp'
  export default addDays
}

declare module 'date-fns-jalali/esm/fp/addHours/index.js' {
  import { addHours } from 'date-fns-jalali/esm/fp'
  export default addHours
}

declare module 'date-fns-jalali/esm/fp/addISOWeekYears/index.js' {
  import { addISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default addISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/addMilliseconds/index.js' {
  import { addMilliseconds } from 'date-fns-jalali/esm/fp'
  export default addMilliseconds
}

declare module 'date-fns-jalali/esm/fp/addMinutes/index.js' {
  import { addMinutes } from 'date-fns-jalali/esm/fp'
  export default addMinutes
}

declare module 'date-fns-jalali/esm/fp/addMonths/index.js' {
  import { addMonths } from 'date-fns-jalali/esm/fp'
  export default addMonths
}

declare module 'date-fns-jalali/esm/fp/addQuarters/index.js' {
  import { addQuarters } from 'date-fns-jalali/esm/fp'
  export default addQuarters
}

declare module 'date-fns-jalali/esm/fp/addSeconds/index.js' {
  import { addSeconds } from 'date-fns-jalali/esm/fp'
  export default addSeconds
}

declare module 'date-fns-jalali/esm/fp/addWeeks/index.js' {
  import { addWeeks } from 'date-fns-jalali/esm/fp'
  export default addWeeks
}

declare module 'date-fns-jalali/esm/fp/addYears/index.js' {
  import { addYears } from 'date-fns-jalali/esm/fp'
  export default addYears
}

declare module 'date-fns-jalali/esm/fp/areIntervalsOverlapping/index.js' {
  import { areIntervalsOverlapping } from 'date-fns-jalali/esm/fp'
  export default areIntervalsOverlapping
}

declare module 'date-fns-jalali/esm/fp/areIntervalsOverlappingWithOptions/index.js' {
  import { areIntervalsOverlappingWithOptions } from 'date-fns-jalali/esm/fp'
  export default areIntervalsOverlappingWithOptions
}

declare module 'date-fns-jalali/esm/fp/clamp/index.js' {
  import { clamp } from 'date-fns-jalali/esm/fp'
  export default clamp
}

declare module 'date-fns-jalali/esm/fp/closestIndexTo/index.js' {
  import { closestIndexTo } from 'date-fns-jalali/esm/fp'
  export default closestIndexTo
}

declare module 'date-fns-jalali/esm/fp/closestTo/index.js' {
  import { closestTo } from 'date-fns-jalali/esm/fp'
  export default closestTo
}

declare module 'date-fns-jalali/esm/fp/compareAsc/index.js' {
  import { compareAsc } from 'date-fns-jalali/esm/fp'
  export default compareAsc
}

declare module 'date-fns-jalali/esm/fp/compareDesc/index.js' {
  import { compareDesc } from 'date-fns-jalali/esm/fp'
  export default compareDesc
}

declare module 'date-fns-jalali/esm/fp/daysToWeeks/index.js' {
  import { daysToWeeks } from 'date-fns-jalali/esm/fp'
  export default daysToWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInBusinessDays/index.js' {
  import { differenceInBusinessDays } from 'date-fns-jalali/esm/fp'
  export default differenceInBusinessDays
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarDays/index.js' {
  import { differenceInCalendarDays } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarDays
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarISOWeeks/index.js' {
  import { differenceInCalendarISOWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarISOWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarISOWeekYears/index.js' {
  import { differenceInCalendarISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarMonths/index.js' {
  import { differenceInCalendarMonths } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarMonths
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarQuarters/index.js' {
  import { differenceInCalendarQuarters } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarQuarters
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarWeeks/index.js' {
  import { differenceInCalendarWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarWeeksWithOptions/index.js' {
  import { differenceInCalendarWeeksWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarWeeksWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInCalendarYears/index.js' {
  import { differenceInCalendarYears } from 'date-fns-jalali/esm/fp'
  export default differenceInCalendarYears
}

declare module 'date-fns-jalali/esm/fp/differenceInDays/index.js' {
  import { differenceInDays } from 'date-fns-jalali/esm/fp'
  export default differenceInDays
}

declare module 'date-fns-jalali/esm/fp/differenceInHours/index.js' {
  import { differenceInHours } from 'date-fns-jalali/esm/fp'
  export default differenceInHours
}

declare module 'date-fns-jalali/esm/fp/differenceInHoursWithOptions/index.js' {
  import { differenceInHoursWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInHoursWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInISOWeekYears/index.js' {
  import { differenceInISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default differenceInISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/differenceInMilliseconds/index.js' {
  import { differenceInMilliseconds } from 'date-fns-jalali/esm/fp'
  export default differenceInMilliseconds
}

declare module 'date-fns-jalali/esm/fp/differenceInMinutes/index.js' {
  import { differenceInMinutes } from 'date-fns-jalali/esm/fp'
  export default differenceInMinutes
}

declare module 'date-fns-jalali/esm/fp/differenceInMinutesWithOptions/index.js' {
  import { differenceInMinutesWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInMinutesWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInMonths/index.js' {
  import { differenceInMonths } from 'date-fns-jalali/esm/fp'
  export default differenceInMonths
}

declare module 'date-fns-jalali/esm/fp/differenceInQuarters/index.js' {
  import { differenceInQuarters } from 'date-fns-jalali/esm/fp'
  export default differenceInQuarters
}

declare module 'date-fns-jalali/esm/fp/differenceInQuartersWithOptions/index.js' {
  import { differenceInQuartersWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInQuartersWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInSeconds/index.js' {
  import { differenceInSeconds } from 'date-fns-jalali/esm/fp'
  export default differenceInSeconds
}

declare module 'date-fns-jalali/esm/fp/differenceInSecondsWithOptions/index.js' {
  import { differenceInSecondsWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInSecondsWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInWeeks/index.js' {
  import { differenceInWeeks } from 'date-fns-jalali/esm/fp'
  export default differenceInWeeks
}

declare module 'date-fns-jalali/esm/fp/differenceInWeeksWithOptions/index.js' {
  import { differenceInWeeksWithOptions } from 'date-fns-jalali/esm/fp'
  export default differenceInWeeksWithOptions
}

declare module 'date-fns-jalali/esm/fp/differenceInYears/index.js' {
  import { differenceInYears } from 'date-fns-jalali/esm/fp'
  export default differenceInYears
}

declare module 'date-fns-jalali/esm/fp/eachDayOfInterval/index.js' {
  import { eachDayOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachDayOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachDayOfIntervalWithOptions/index.js' {
  import { eachDayOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachDayOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachHourOfInterval/index.js' {
  import { eachHourOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachHourOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachHourOfIntervalWithOptions/index.js' {
  import { eachHourOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachHourOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachMinuteOfInterval/index.js' {
  import { eachMinuteOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachMinuteOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachMinuteOfIntervalWithOptions/index.js' {
  import { eachMinuteOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachMinuteOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachMonthOfInterval/index.js' {
  import { eachMonthOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachMonthOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachQuarterOfInterval/index.js' {
  import { eachQuarterOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachQuarterOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfInterval/index.js' {
  import { eachWeekendOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfMonth/index.js' {
  import { eachWeekendOfMonth } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfMonth
}

declare module 'date-fns-jalali/esm/fp/eachWeekendOfYear/index.js' {
  import { eachWeekendOfYear } from 'date-fns-jalali/esm/fp'
  export default eachWeekendOfYear
}

declare module 'date-fns-jalali/esm/fp/eachWeekOfInterval/index.js' {
  import { eachWeekOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachWeekOfInterval
}

declare module 'date-fns-jalali/esm/fp/eachWeekOfIntervalWithOptions/index.js' {
  import { eachWeekOfIntervalWithOptions } from 'date-fns-jalali/esm/fp'
  export default eachWeekOfIntervalWithOptions
}

declare module 'date-fns-jalali/esm/fp/eachYearOfInterval/index.js' {
  import { eachYearOfInterval } from 'date-fns-jalali/esm/fp'
  export default eachYearOfInterval
}

declare module 'date-fns-jalali/esm/fp/endOfDay/index.js' {
  import { endOfDay } from 'date-fns-jalali/esm/fp'
  export default endOfDay
}

declare module 'date-fns-jalali/esm/fp/endOfDecade/index.js' {
  import { endOfDecade } from 'date-fns-jalali/esm/fp'
  export default endOfDecade
}

declare module 'date-fns-jalali/esm/fp/endOfDecadeWithOptions/index.js' {
  import { endOfDecadeWithOptions } from 'date-fns-jalali/esm/fp'
  export default endOfDecadeWithOptions
}

declare module 'date-fns-jalali/esm/fp/endOfHour/index.js' {
  import { endOfHour } from 'date-fns-jalali/esm/fp'
  export default endOfHour
}

declare module 'date-fns-jalali/esm/fp/endOfISOWeek/index.js' {
  import { endOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default endOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/endOfISOWeekYear/index.js' {
  import { endOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default endOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/endOfMinute/index.js' {
  import { endOfMinute } from 'date-fns-jalali/esm/fp'
  export default endOfMinute
}

declare module 'date-fns-jalali/esm/fp/endOfMonth/index.js' {
  import { endOfMonth } from 'date-fns-jalali/esm/fp'
  export default endOfMonth
}

declare module 'date-fns-jalali/esm/fp/endOfQuarter/index.js' {
  import { endOfQuarter } from 'date-fns-jalali/esm/fp'
  export default endOfQuarter
}

declare module 'date-fns-jalali/esm/fp/endOfSecond/index.js' {
  import { endOfSecond } from 'date-fns-jalali/esm/fp'
  export default endOfSecond
}

declare module 'date-fns-jalali/esm/fp/endOfWeek/index.js' {
  import { endOfWeek } from 'date-fns-jalali/esm/fp'
  export default endOfWeek
}

declare module 'date-fns-jalali/esm/fp/endOfWeekWithOptions/index.js' {
  import { endOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default endOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/endOfYear/index.js' {
  import { endOfYear } from 'date-fns-jalali/esm/fp'
  export default endOfYear
}

declare module 'date-fns-jalali/esm/fp/format/index.js' {
  import { format } from 'date-fns-jalali/esm/fp'
  export default format
}

declare module 'date-fns-jalali/esm/fp/formatDistance/index.js' {
  import { formatDistance } from 'date-fns-jalali/esm/fp'
  export default formatDistance
}

declare module 'date-fns-jalali/esm/fp/formatDistanceStrict/index.js' {
  import { formatDistanceStrict } from 'date-fns-jalali/esm/fp'
  export default formatDistanceStrict
}

declare module 'date-fns-jalali/esm/fp/formatDistanceStrictWithOptions/index.js' {
  import { formatDistanceStrictWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDistanceStrictWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatDistanceWithOptions/index.js' {
  import { formatDistanceWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDistanceWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatDuration/index.js' {
  import { formatDuration } from 'date-fns-jalali/esm/fp'
  export default formatDuration
}

declare module 'date-fns-jalali/esm/fp/formatDurationWithOptions/index.js' {
  import { formatDurationWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatDurationWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatISO/index.js' {
  import { formatISO } from 'date-fns-jalali/esm/fp'
  export default formatISO
}

declare module 'date-fns-jalali/esm/fp/formatISO9075/index.js' {
  import { formatISO9075 } from 'date-fns-jalali/esm/fp'
  export default formatISO9075
}

declare module 'date-fns-jalali/esm/fp/formatISO9075WithOptions/index.js' {
  import { formatISO9075WithOptions } from 'date-fns-jalali/esm/fp'
  export default formatISO9075WithOptions
}

declare module 'date-fns-jalali/esm/fp/formatISODuration/index.js' {
  import { formatISODuration } from 'date-fns-jalali/esm/fp'
  export default formatISODuration
}

declare module 'date-fns-jalali/esm/fp/formatISOWithOptions/index.js' {
  import { formatISOWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatISOWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRelative/index.js' {
  import { formatRelative } from 'date-fns-jalali/esm/fp'
  export default formatRelative
}

declare module 'date-fns-jalali/esm/fp/formatRelativeWithOptions/index.js' {
  import { formatRelativeWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatRelativeWithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRFC3339/index.js' {
  import { formatRFC3339 } from 'date-fns-jalali/esm/fp'
  export default formatRFC3339
}

declare module 'date-fns-jalali/esm/fp/formatRFC3339WithOptions/index.js' {
  import { formatRFC3339WithOptions } from 'date-fns-jalali/esm/fp'
  export default formatRFC3339WithOptions
}

declare module 'date-fns-jalali/esm/fp/formatRFC7231/index.js' {
  import { formatRFC7231 } from 'date-fns-jalali/esm/fp'
  export default formatRFC7231
}

declare module 'date-fns-jalali/esm/fp/formatWithOptions/index.js' {
  import { formatWithOptions } from 'date-fns-jalali/esm/fp'
  export default formatWithOptions
}

declare module 'date-fns-jalali/esm/fp/fromUnixTime/index.js' {
  import { fromUnixTime } from 'date-fns-jalali/esm/fp'
  export default fromUnixTime
}

declare module 'date-fns-jalali/esm/fp/getDate/index.js' {
  import { getDate } from 'date-fns-jalali/esm/fp'
  export default getDate
}

declare module 'date-fns-jalali/esm/fp/getDay/index.js' {
  import { getDay } from 'date-fns-jalali/esm/fp'
  export default getDay
}

declare module 'date-fns-jalali/esm/fp/getDayOfYear/index.js' {
  import { getDayOfYear } from 'date-fns-jalali/esm/fp'
  export default getDayOfYear
}

declare module 'date-fns-jalali/esm/fp/getDaysInMonth/index.js' {
  import { getDaysInMonth } from 'date-fns-jalali/esm/fp'
  export default getDaysInMonth
}

declare module 'date-fns-jalali/esm/fp/getDaysInYear/index.js' {
  import { getDaysInYear } from 'date-fns-jalali/esm/fp'
  export default getDaysInYear
}

declare module 'date-fns-jalali/esm/fp/getDecade/index.js' {
  import { getDecade } from 'date-fns-jalali/esm/fp'
  export default getDecade
}

declare module 'date-fns-jalali/esm/fp/getHours/index.js' {
  import { getHours } from 'date-fns-jalali/esm/fp'
  export default getHours
}

declare module 'date-fns-jalali/esm/fp/getISODay/index.js' {
  import { getISODay } from 'date-fns-jalali/esm/fp'
  export default getISODay
}

declare module 'date-fns-jalali/esm/fp/getISOWeek/index.js' {
  import { getISOWeek } from 'date-fns-jalali/esm/fp'
  export default getISOWeek
}

declare module 'date-fns-jalali/esm/fp/getISOWeeksInYear/index.js' {
  import { getISOWeeksInYear } from 'date-fns-jalali/esm/fp'
  export default getISOWeeksInYear
}

declare module 'date-fns-jalali/esm/fp/getISOWeekYear/index.js' {
  import { getISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default getISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/getMilliseconds/index.js' {
  import { getMilliseconds } from 'date-fns-jalali/esm/fp'
  export default getMilliseconds
}

declare module 'date-fns-jalali/esm/fp/getMinutes/index.js' {
  import { getMinutes } from 'date-fns-jalali/esm/fp'
  export default getMinutes
}

declare module 'date-fns-jalali/esm/fp/getMonth/index.js' {
  import { getMonth } from 'date-fns-jalali/esm/fp'
  export default getMonth
}

declare module 'date-fns-jalali/esm/fp/getOverlappingDaysInIntervals/index.js' {
  import { getOverlappingDaysInIntervals } from 'date-fns-jalali/esm/fp'
  export default getOverlappingDaysInIntervals
}

declare module 'date-fns-jalali/esm/fp/getQuarter/index.js' {
  import { getQuarter } from 'date-fns-jalali/esm/fp'
  export default getQuarter
}

declare module 'date-fns-jalali/esm/fp/getSeconds/index.js' {
  import { getSeconds } from 'date-fns-jalali/esm/fp'
  export default getSeconds
}

declare module 'date-fns-jalali/esm/fp/getTime/index.js' {
  import { getTime } from 'date-fns-jalali/esm/fp'
  export default getTime
}

declare module 'date-fns-jalali/esm/fp/getUnixTime/index.js' {
  import { getUnixTime } from 'date-fns-jalali/esm/fp'
  export default getUnixTime
}

declare module 'date-fns-jalali/esm/fp/getWeek/index.js' {
  import { getWeek } from 'date-fns-jalali/esm/fp'
  export default getWeek
}

declare module 'date-fns-jalali/esm/fp/getWeekOfMonth/index.js' {
  import { getWeekOfMonth } from 'date-fns-jalali/esm/fp'
  export default getWeekOfMonth
}

declare module 'date-fns-jalali/esm/fp/getWeekOfMonthWithOptions/index.js' {
  import { getWeekOfMonthWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekOfMonthWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeeksInMonth/index.js' {
  import { getWeeksInMonth } from 'date-fns-jalali/esm/fp'
  export default getWeeksInMonth
}

declare module 'date-fns-jalali/esm/fp/getWeeksInMonthWithOptions/index.js' {
  import { getWeeksInMonthWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeeksInMonthWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeekWithOptions/index.js' {
  import { getWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/getWeekYear/index.js' {
  import { getWeekYear } from 'date-fns-jalali/esm/fp'
  export default getWeekYear
}

declare module 'date-fns-jalali/esm/fp/getWeekYearWithOptions/index.js' {
  import { getWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default getWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/getYear/index.js' {
  import { getYear } from 'date-fns-jalali/esm/fp'
  export default getYear
}

declare module 'date-fns-jalali/esm/fp/hoursToMilliseconds/index.js' {
  import { hoursToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default hoursToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/hoursToMinutes/index.js' {
  import { hoursToMinutes } from 'date-fns-jalali/esm/fp'
  export default hoursToMinutes
}

declare module 'date-fns-jalali/esm/fp/hoursToSeconds/index.js' {
  import { hoursToSeconds } from 'date-fns-jalali/esm/fp'
  export default hoursToSeconds
}

declare module 'date-fns-jalali/esm/fp/intervalToDuration/index.js' {
  import { intervalToDuration } from 'date-fns-jalali/esm/fp'
  export default intervalToDuration
}

declare module 'date-fns-jalali/esm/fp/intlFormat/index.js' {
  import { intlFormat } from 'date-fns-jalali/esm/fp'
  export default intlFormat
}

declare module 'date-fns-jalali/esm/fp/intlFormatDistance/index.js' {
  import { intlFormatDistance } from 'date-fns-jalali/esm/fp'
  export default intlFormatDistance
}

declare module 'date-fns-jalali/esm/fp/intlFormatDistanceWithOptions/index.js' {
  import { intlFormatDistanceWithOptions } from 'date-fns-jalali/esm/fp'
  export default intlFormatDistanceWithOptions
}

declare module 'date-fns-jalali/esm/fp/isAfter/index.js' {
  import { isAfter } from 'date-fns-jalali/esm/fp'
  export default isAfter
}

declare module 'date-fns-jalali/esm/fp/isBefore/index.js' {
  import { isBefore } from 'date-fns-jalali/esm/fp'
  export default isBefore
}

declare module 'date-fns-jalali/esm/fp/isDate/index.js' {
  import { isDate } from 'date-fns-jalali/esm/fp'
  export default isDate
}

declare module 'date-fns-jalali/esm/fp/isEqual/index.js' {
  import { isEqual } from 'date-fns-jalali/esm/fp'
  export default isEqual
}

declare module 'date-fns-jalali/esm/fp/isExists/index.js' {
  import { isExists } from 'date-fns-jalali/esm/fp'
  export default isExists
}

declare module 'date-fns-jalali/esm/fp/isFirstDayOfMonth/index.js' {
  import { isFirstDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default isFirstDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/isFriday/index.js' {
  import { isFriday } from 'date-fns-jalali/esm/fp'
  export default isFriday
}

declare module 'date-fns-jalali/esm/fp/isLastDayOfMonth/index.js' {
  import { isLastDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default isLastDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/isLeapYear/index.js' {
  import { isLeapYear } from 'date-fns-jalali/esm/fp'
  export default isLeapYear
}

declare module 'date-fns-jalali/esm/fp/isMatch/index.js' {
  import { isMatch } from 'date-fns-jalali/esm/fp'
  export default isMatch
}

declare module 'date-fns-jalali/esm/fp/isMatchWithOptions/index.js' {
  import { isMatchWithOptions } from 'date-fns-jalali/esm/fp'
  export default isMatchWithOptions
}

declare module 'date-fns-jalali/esm/fp/isMonday/index.js' {
  import { isMonday } from 'date-fns-jalali/esm/fp'
  export default isMonday
}

declare module 'date-fns-jalali/esm/fp/isSameDay/index.js' {
  import { isSameDay } from 'date-fns-jalali/esm/fp'
  export default isSameDay
}

declare module 'date-fns-jalali/esm/fp/isSameHour/index.js' {
  import { isSameHour } from 'date-fns-jalali/esm/fp'
  export default isSameHour
}

declare module 'date-fns-jalali/esm/fp/isSameISOWeek/index.js' {
  import { isSameISOWeek } from 'date-fns-jalali/esm/fp'
  export default isSameISOWeek
}

declare module 'date-fns-jalali/esm/fp/isSameISOWeekYear/index.js' {
  import { isSameISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default isSameISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/isSameMinute/index.js' {
  import { isSameMinute } from 'date-fns-jalali/esm/fp'
  export default isSameMinute
}

declare module 'date-fns-jalali/esm/fp/isSameMonth/index.js' {
  import { isSameMonth } from 'date-fns-jalali/esm/fp'
  export default isSameMonth
}

declare module 'date-fns-jalali/esm/fp/isSameQuarter/index.js' {
  import { isSameQuarter } from 'date-fns-jalali/esm/fp'
  export default isSameQuarter
}

declare module 'date-fns-jalali/esm/fp/isSameSecond/index.js' {
  import { isSameSecond } from 'date-fns-jalali/esm/fp'
  export default isSameSecond
}

declare module 'date-fns-jalali/esm/fp/isSameWeek/index.js' {
  import { isSameWeek } from 'date-fns-jalali/esm/fp'
  export default isSameWeek
}

declare module 'date-fns-jalali/esm/fp/isSameWeekWithOptions/index.js' {
  import { isSameWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default isSameWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/isSameYear/index.js' {
  import { isSameYear } from 'date-fns-jalali/esm/fp'
  export default isSameYear
}

declare module 'date-fns-jalali/esm/fp/isSaturday/index.js' {
  import { isSaturday } from 'date-fns-jalali/esm/fp'
  export default isSaturday
}

declare module 'date-fns-jalali/esm/fp/isSunday/index.js' {
  import { isSunday } from 'date-fns-jalali/esm/fp'
  export default isSunday
}

declare module 'date-fns-jalali/esm/fp/isThursday/index.js' {
  import { isThursday } from 'date-fns-jalali/esm/fp'
  export default isThursday
}

declare module 'date-fns-jalali/esm/fp/isTuesday/index.js' {
  import { isTuesday } from 'date-fns-jalali/esm/fp'
  export default isTuesday
}

declare module 'date-fns-jalali/esm/fp/isValid/index.js' {
  import { isValid } from 'date-fns-jalali/esm/fp'
  export default isValid
}

declare module 'date-fns-jalali/esm/fp/isWednesday/index.js' {
  import { isWednesday } from 'date-fns-jalali/esm/fp'
  export default isWednesday
}

declare module 'date-fns-jalali/esm/fp/isWeekend/index.js' {
  import { isWeekend } from 'date-fns-jalali/esm/fp'
  export default isWeekend
}

declare module 'date-fns-jalali/esm/fp/isWithinInterval/index.js' {
  import { isWithinInterval } from 'date-fns-jalali/esm/fp'
  export default isWithinInterval
}

declare module 'date-fns-jalali/esm/fp/lastDayOfDecade/index.js' {
  import { lastDayOfDecade } from 'date-fns-jalali/esm/fp'
  export default lastDayOfDecade
}

declare module 'date-fns-jalali/esm/fp/lastDayOfISOWeek/index.js' {
  import { lastDayOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default lastDayOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/lastDayOfISOWeekYear/index.js' {
  import { lastDayOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default lastDayOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/lastDayOfMonth/index.js' {
  import { lastDayOfMonth } from 'date-fns-jalali/esm/fp'
  export default lastDayOfMonth
}

declare module 'date-fns-jalali/esm/fp/lastDayOfQuarter/index.js' {
  import { lastDayOfQuarter } from 'date-fns-jalali/esm/fp'
  export default lastDayOfQuarter
}

declare module 'date-fns-jalali/esm/fp/lastDayOfQuarterWithOptions/index.js' {
  import { lastDayOfQuarterWithOptions } from 'date-fns-jalali/esm/fp'
  export default lastDayOfQuarterWithOptions
}

declare module 'date-fns-jalali/esm/fp/lastDayOfWeek/index.js' {
  import { lastDayOfWeek } from 'date-fns-jalali/esm/fp'
  export default lastDayOfWeek
}

declare module 'date-fns-jalali/esm/fp/lastDayOfWeekWithOptions/index.js' {
  import { lastDayOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default lastDayOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/lastDayOfYear/index.js' {
  import { lastDayOfYear } from 'date-fns-jalali/esm/fp'
  export default lastDayOfYear
}

declare module 'date-fns-jalali/esm/fp/lightFormat/index.js' {
  import { lightFormat } from 'date-fns-jalali/esm/fp'
  export default lightFormat
}

declare module 'date-fns-jalali/esm/fp/max/index.js' {
  import { max } from 'date-fns-jalali/esm/fp'
  export default max
}

declare module 'date-fns-jalali/esm/fp/milliseconds/index.js' {
  import { milliseconds } from 'date-fns-jalali/esm/fp'
  export default milliseconds
}

declare module 'date-fns-jalali/esm/fp/millisecondsToHours/index.js' {
  import { millisecondsToHours } from 'date-fns-jalali/esm/fp'
  export default millisecondsToHours
}

declare module 'date-fns-jalali/esm/fp/millisecondsToMinutes/index.js' {
  import { millisecondsToMinutes } from 'date-fns-jalali/esm/fp'
  export default millisecondsToMinutes
}

declare module 'date-fns-jalali/esm/fp/millisecondsToSeconds/index.js' {
  import { millisecondsToSeconds } from 'date-fns-jalali/esm/fp'
  export default millisecondsToSeconds
}

declare module 'date-fns-jalali/esm/fp/min/index.js' {
  import { min } from 'date-fns-jalali/esm/fp'
  export default min
}

declare module 'date-fns-jalali/esm/fp/minutesToHours/index.js' {
  import { minutesToHours } from 'date-fns-jalali/esm/fp'
  export default minutesToHours
}

declare module 'date-fns-jalali/esm/fp/minutesToMilliseconds/index.js' {
  import { minutesToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default minutesToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/minutesToSeconds/index.js' {
  import { minutesToSeconds } from 'date-fns-jalali/esm/fp'
  export default minutesToSeconds
}

declare module 'date-fns-jalali/esm/fp/monthsToQuarters/index.js' {
  import { monthsToQuarters } from 'date-fns-jalali/esm/fp'
  export default monthsToQuarters
}

declare module 'date-fns-jalali/esm/fp/monthsToYears/index.js' {
  import { monthsToYears } from 'date-fns-jalali/esm/fp'
  export default monthsToYears
}

declare module 'date-fns-jalali/esm/fp/nextDay/index.js' {
  import { nextDay } from 'date-fns-jalali/esm/fp'
  export default nextDay
}

declare module 'date-fns-jalali/esm/fp/nextFriday/index.js' {
  import { nextFriday } from 'date-fns-jalali/esm/fp'
  export default nextFriday
}

declare module 'date-fns-jalali/esm/fp/nextMonday/index.js' {
  import { nextMonday } from 'date-fns-jalali/esm/fp'
  export default nextMonday
}

declare module 'date-fns-jalali/esm/fp/nextSaturday/index.js' {
  import { nextSaturday } from 'date-fns-jalali/esm/fp'
  export default nextSaturday
}

declare module 'date-fns-jalali/esm/fp/nextSunday/index.js' {
  import { nextSunday } from 'date-fns-jalali/esm/fp'
  export default nextSunday
}

declare module 'date-fns-jalali/esm/fp/nextThursday/index.js' {
  import { nextThursday } from 'date-fns-jalali/esm/fp'
  export default nextThursday
}

declare module 'date-fns-jalali/esm/fp/nextTuesday/index.js' {
  import { nextTuesday } from 'date-fns-jalali/esm/fp'
  export default nextTuesday
}

declare module 'date-fns-jalali/esm/fp/nextWednesday/index.js' {
  import { nextWednesday } from 'date-fns-jalali/esm/fp'
  export default nextWednesday
}

declare module 'date-fns-jalali/esm/fp/parse/index.js' {
  import { parse } from 'date-fns-jalali/esm/fp'
  export default parse
}

declare module 'date-fns-jalali/esm/fp/parseISO/index.js' {
  import { parseISO } from 'date-fns-jalali/esm/fp'
  export default parseISO
}

declare module 'date-fns-jalali/esm/fp/parseISOWithOptions/index.js' {
  import { parseISOWithOptions } from 'date-fns-jalali/esm/fp'
  export default parseISOWithOptions
}

declare module 'date-fns-jalali/esm/fp/parseJSON/index.js' {
  import { parseJSON } from 'date-fns-jalali/esm/fp'
  export default parseJSON
}

declare module 'date-fns-jalali/esm/fp/parseWithOptions/index.js' {
  import { parseWithOptions } from 'date-fns-jalali/esm/fp'
  export default parseWithOptions
}

declare module 'date-fns-jalali/esm/fp/previousDay/index.js' {
  import { previousDay } from 'date-fns-jalali/esm/fp'
  export default previousDay
}

declare module 'date-fns-jalali/esm/fp/previousFriday/index.js' {
  import { previousFriday } from 'date-fns-jalali/esm/fp'
  export default previousFriday
}

declare module 'date-fns-jalali/esm/fp/previousMonday/index.js' {
  import { previousMonday } from 'date-fns-jalali/esm/fp'
  export default previousMonday
}

declare module 'date-fns-jalali/esm/fp/previousSaturday/index.js' {
  import { previousSaturday } from 'date-fns-jalali/esm/fp'
  export default previousSaturday
}

declare module 'date-fns-jalali/esm/fp/previousSunday/index.js' {
  import { previousSunday } from 'date-fns-jalali/esm/fp'
  export default previousSunday
}

declare module 'date-fns-jalali/esm/fp/previousThursday/index.js' {
  import { previousThursday } from 'date-fns-jalali/esm/fp'
  export default previousThursday
}

declare module 'date-fns-jalali/esm/fp/previousTuesday/index.js' {
  import { previousTuesday } from 'date-fns-jalali/esm/fp'
  export default previousTuesday
}

declare module 'date-fns-jalali/esm/fp/previousWednesday/index.js' {
  import { previousWednesday } from 'date-fns-jalali/esm/fp'
  export default previousWednesday
}

declare module 'date-fns-jalali/esm/fp/quartersToMonths/index.js' {
  import { quartersToMonths } from 'date-fns-jalali/esm/fp'
  export default quartersToMonths
}

declare module 'date-fns-jalali/esm/fp/quartersToYears/index.js' {
  import { quartersToYears } from 'date-fns-jalali/esm/fp'
  export default quartersToYears
}

declare module 'date-fns-jalali/esm/fp/roundToNearestMinutes/index.js' {
  import { roundToNearestMinutes } from 'date-fns-jalali/esm/fp'
  export default roundToNearestMinutes
}

declare module 'date-fns-jalali/esm/fp/roundToNearestMinutesWithOptions/index.js' {
  import { roundToNearestMinutesWithOptions } from 'date-fns-jalali/esm/fp'
  export default roundToNearestMinutesWithOptions
}

declare module 'date-fns-jalali/esm/fp/secondsToHours/index.js' {
  import { secondsToHours } from 'date-fns-jalali/esm/fp'
  export default secondsToHours
}

declare module 'date-fns-jalali/esm/fp/secondsToMilliseconds/index.js' {
  import { secondsToMilliseconds } from 'date-fns-jalali/esm/fp'
  export default secondsToMilliseconds
}

declare module 'date-fns-jalali/esm/fp/secondsToMinutes/index.js' {
  import { secondsToMinutes } from 'date-fns-jalali/esm/fp'
  export default secondsToMinutes
}

declare module 'date-fns-jalali/esm/fp/set/index.js' {
  import { set } from 'date-fns-jalali/esm/fp'
  export default set
}

declare module 'date-fns-jalali/esm/fp/setDate/index.js' {
  import { setDate } from 'date-fns-jalali/esm/fp'
  export default setDate
}

declare module 'date-fns-jalali/esm/fp/setDay/index.js' {
  import { setDay } from 'date-fns-jalali/esm/fp'
  export default setDay
}

declare module 'date-fns-jalali/esm/fp/setDayOfYear/index.js' {
  import { setDayOfYear } from 'date-fns-jalali/esm/fp'
  export default setDayOfYear
}

declare module 'date-fns-jalali/esm/fp/setDayWithOptions/index.js' {
  import { setDayWithOptions } from 'date-fns-jalali/esm/fp'
  export default setDayWithOptions
}

declare module 'date-fns-jalali/esm/fp/setHours/index.js' {
  import { setHours } from 'date-fns-jalali/esm/fp'
  export default setHours
}

declare module 'date-fns-jalali/esm/fp/setISODay/index.js' {
  import { setISODay } from 'date-fns-jalali/esm/fp'
  export default setISODay
}

declare module 'date-fns-jalali/esm/fp/setISOWeek/index.js' {
  import { setISOWeek } from 'date-fns-jalali/esm/fp'
  export default setISOWeek
}

declare module 'date-fns-jalali/esm/fp/setISOWeekYear/index.js' {
  import { setISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default setISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/setMilliseconds/index.js' {
  import { setMilliseconds } from 'date-fns-jalali/esm/fp'
  export default setMilliseconds
}

declare module 'date-fns-jalali/esm/fp/setMinutes/index.js' {
  import { setMinutes } from 'date-fns-jalali/esm/fp'
  export default setMinutes
}

declare module 'date-fns-jalali/esm/fp/setMonth/index.js' {
  import { setMonth } from 'date-fns-jalali/esm/fp'
  export default setMonth
}

declare module 'date-fns-jalali/esm/fp/setQuarter/index.js' {
  import { setQuarter } from 'date-fns-jalali/esm/fp'
  export default setQuarter
}

declare module 'date-fns-jalali/esm/fp/setSeconds/index.js' {
  import { setSeconds } from 'date-fns-jalali/esm/fp'
  export default setSeconds
}

declare module 'date-fns-jalali/esm/fp/setWeek/index.js' {
  import { setWeek } from 'date-fns-jalali/esm/fp'
  export default setWeek
}

declare module 'date-fns-jalali/esm/fp/setWeekWithOptions/index.js' {
  import { setWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default setWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/setWeekYear/index.js' {
  import { setWeekYear } from 'date-fns-jalali/esm/fp'
  export default setWeekYear
}

declare module 'date-fns-jalali/esm/fp/setWeekYearWithOptions/index.js' {
  import { setWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default setWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/setYear/index.js' {
  import { setYear } from 'date-fns-jalali/esm/fp'
  export default setYear
}

declare module 'date-fns-jalali/esm/fp/startOfDay/index.js' {
  import { startOfDay } from 'date-fns-jalali/esm/fp'
  export default startOfDay
}

declare module 'date-fns-jalali/esm/fp/startOfDecade/index.js' {
  import { startOfDecade } from 'date-fns-jalali/esm/fp'
  export default startOfDecade
}

declare module 'date-fns-jalali/esm/fp/startOfHour/index.js' {
  import { startOfHour } from 'date-fns-jalali/esm/fp'
  export default startOfHour
}

declare module 'date-fns-jalali/esm/fp/startOfISOWeek/index.js' {
  import { startOfISOWeek } from 'date-fns-jalali/esm/fp'
  export default startOfISOWeek
}

declare module 'date-fns-jalali/esm/fp/startOfISOWeekYear/index.js' {
  import { startOfISOWeekYear } from 'date-fns-jalali/esm/fp'
  export default startOfISOWeekYear
}

declare module 'date-fns-jalali/esm/fp/startOfMinute/index.js' {
  import { startOfMinute } from 'date-fns-jalali/esm/fp'
  export default startOfMinute
}

declare module 'date-fns-jalali/esm/fp/startOfMonth/index.js' {
  import { startOfMonth } from 'date-fns-jalali/esm/fp'
  export default startOfMonth
}

declare module 'date-fns-jalali/esm/fp/startOfQuarter/index.js' {
  import { startOfQuarter } from 'date-fns-jalali/esm/fp'
  export default startOfQuarter
}

declare module 'date-fns-jalali/esm/fp/startOfSecond/index.js' {
  import { startOfSecond } from 'date-fns-jalali/esm/fp'
  export default startOfSecond
}

declare module 'date-fns-jalali/esm/fp/startOfWeek/index.js' {
  import { startOfWeek } from 'date-fns-jalali/esm/fp'
  export default startOfWeek
}

declare module 'date-fns-jalali/esm/fp/startOfWeekWithOptions/index.js' {
  import { startOfWeekWithOptions } from 'date-fns-jalali/esm/fp'
  export default startOfWeekWithOptions
}

declare module 'date-fns-jalali/esm/fp/startOfWeekYear/index.js' {
  import { startOfWeekYear } from 'date-fns-jalali/esm/fp'
  export default startOfWeekYear
}

declare module 'date-fns-jalali/esm/fp/startOfWeekYearWithOptions/index.js' {
  import { startOfWeekYearWithOptions } from 'date-fns-jalali/esm/fp'
  export default startOfWeekYearWithOptions
}

declare module 'date-fns-jalali/esm/fp/startOfYear/index.js' {
  import { startOfYear } from 'date-fns-jalali/esm/fp'
  export default startOfYear
}

declare module 'date-fns-jalali/esm/fp/sub/index.js' {
  import { sub } from 'date-fns-jalali/esm/fp'
  export default sub
}

declare module 'date-fns-jalali/esm/fp/subBusinessDays/index.js' {
  import { subBusinessDays } from 'date-fns-jalali/esm/fp'
  export default subBusinessDays
}

declare module 'date-fns-jalali/esm/fp/subDays/index.js' {
  import { subDays } from 'date-fns-jalali/esm/fp'
  export default subDays
}

declare module 'date-fns-jalali/esm/fp/subHours/index.js' {
  import { subHours } from 'date-fns-jalali/esm/fp'
  export default subHours
}

declare module 'date-fns-jalali/esm/fp/subISOWeekYears/index.js' {
  import { subISOWeekYears } from 'date-fns-jalali/esm/fp'
  export default subISOWeekYears
}

declare module 'date-fns-jalali/esm/fp/subMilliseconds/index.js' {
  import { subMilliseconds } from 'date-fns-jalali/esm/fp'
  export default subMilliseconds
}

declare module 'date-fns-jalali/esm/fp/subMinutes/index.js' {
  import { subMinutes } from 'date-fns-jalali/esm/fp'
  export default subMinutes
}

declare module 'date-fns-jalali/esm/fp/subMonths/index.js' {
  import { subMonths } from 'date-fns-jalali/esm/fp'
  export default subMonths
}

declare module 'date-fns-jalali/esm/fp/subQuarters/index.js' {
  import { subQuarters } from 'date-fns-jalali/esm/fp'
  export default subQuarters
}

declare module 'date-fns-jalali/esm/fp/subSeconds/index.js' {
  import { subSeconds } from 'date-fns-jalali/esm/fp'
  export default subSeconds
}

declare module 'date-fns-jalali/esm/fp/subWeeks/index.js' {
  import { subWeeks } from 'date-fns-jalali/esm/fp'
  export default subWeeks
}

declare module 'date-fns-jalali/esm/fp/subYears/index.js' {
  import { subYears } from 'date-fns-jalali/esm/fp'
  export default subYears
}

declare module 'date-fns-jalali/esm/fp/toDate/index.js' {
  import { toDate } from 'date-fns-jalali/esm/fp'
  export default toDate
}

declare module 'date-fns-jalali/esm/fp/weeksToDays/index.js' {
  import { weeksToDays } from 'date-fns-jalali/esm/fp'
  export default weeksToDays
}

declare module 'date-fns-jalali/esm/fp/yearsToMonths/index.js' {
  import { yearsToMonths } from 'date-fns-jalali/esm/fp'
  export default yearsToMonths
}

declare module 'date-fns-jalali/esm/fp/yearsToQuarters/index.js' {
  import { yearsToQuarters } from 'date-fns-jalali/esm/fp'
  export default yearsToQuarters
}

// Regular Locales

declare module 'date-fns-jalali/locale' {
  import { Locale } from 'date-fns-jalali'
  const enUS: Locale
  namespace enUS {}

  const faIR: Locale
  namespace faIR {}

  const faJalaliIR: Locale
  namespace faJalaliIR {}
}

declare module 'date-fns-jalali/locale/en-US' {
  import { enUS } from 'date-fns-jalali/locale'
  export default enUS
}

declare module 'date-fns-jalali/locale/fa-IR' {
  import { faIR } from 'date-fns-jalali/locale'
  export default faIR
}

declare module 'date-fns-jalali/locale/fa-jalali-IR' {
  import { faJalaliIR } from 'date-fns-jalali/locale'
  export default faJalaliIR
}

declare module 'date-fns-jalali/locale/en-US/index' {
  import { enUS } from 'date-fns-jalali/locale'
  export default enUS
}

declare module 'date-fns-jalali/locale/fa-IR/index' {
  import { faIR } from 'date-fns-jalali/locale'
  export default faIR
}

declare module 'date-fns-jalali/locale/fa-jalali-IR/index' {
  import { faJalaliIR } from 'date-fns-jalali/locale'
  export default faJalaliIR
}

declare module 'date-fns-jalali/locale/en-US/index.js' {
  import { enUS } from 'date-fns-jalali/locale'
  export default enUS
}

declare module 'date-fns-jalali/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns-jalali/locale'
  export default faIR
}

declare module 'date-fns-jalali/locale/fa-jalali-IR/index.js' {
  import { faJalaliIR } from 'date-fns-jalali/locale'
  export default faJalaliIR
}

// ECMAScript Module Locales

declare module 'date-fns-jalali/esm/locale' {
  import { Locale } from 'date-fns-jalali'
  const enUS: Locale
  namespace enUS {}

  const faIR: Locale
  namespace faIR {}

  const faJalaliIR: Locale
  namespace faJalaliIR {}
}

declare module 'date-fns-jalali/esm/locale/en-US' {
  import { enUS } from 'date-fns-jalali/esm/locale'
  export default enUS
}

declare module 'date-fns-jalali/esm/locale/fa-IR' {
  import { faIR } from 'date-fns-jalali/esm/locale'
  export default faIR
}

declare module 'date-fns-jalali/esm/locale/fa-jalali-IR' {
  import { faJalaliIR } from 'date-fns-jalali/esm/locale'
  export default faJalaliIR
}

declare module 'date-fns-jalali/esm/locale/en-US/index' {
  import { enUS } from 'date-fns-jalali/esm/locale'
  export default enUS
}

declare module 'date-fns-jalali/esm/locale/fa-IR/index' {
  import { faIR } from 'date-fns-jalali/esm/locale'
  export default faIR
}

declare module 'date-fns-jalali/esm/locale/fa-jalali-IR/index' {
  import { faJalaliIR } from 'date-fns-jalali/esm/locale'
  export default faJalaliIR
}

declare module 'date-fns-jalali/esm/locale/en-US/index.js' {
  import { enUS } from 'date-fns-jalali/esm/locale'
  export default enUS
}

declare module 'date-fns-jalali/esm/locale/fa-IR/index.js' {
  import { faIR } from 'date-fns-jalali/esm/locale'
  export default faIR
}

declare module 'date-fns-jalali/esm/locale/fa-jalali-IR/index.js' {
  import { faJalaliIR } from 'date-fns-jalali/esm/locale'
  export default faJalaliIR
}

// dateFns Global Interface

declare module 'date-fns-jalali' {
  interface dateFns {
    add(date: Date | number, duration: Duration): Date

    addBusinessDays(date: Date | number, amount: number): Date

    addDays(date: Date | number, amount: number): Date

    addHours(date: Date | number, amount: number): Date

    addISOWeekYears(date: Date | number, amount: number): Date

    addMilliseconds(date: Date | number, amount: number): Date

    addMinutes(date: Date | number, amount: number): Date

    addMonths(date: Date | number, amount: number): Date

    addQuarters(date: Date | number, amount: number): Date

    addSeconds(date: Date | number, amount: number): Date

    addWeeks(date: Date | number, amount: number): Date

    addYears(date: Date | number, amount: number): Date

    areIntervalsOverlapping(
      intervalLeft: Interval,
      intervalRight: Interval,
      options?: {
        inclusive?: boolean
      }
    ): boolean

    clamp(date: Date | number, interval: Interval): Date

    closestIndexTo(
      dateToCompare: Date | number,
      datesArray: (Date | number)[]
    ): number | undefined

    closestTo(
      dateToCompare: Date | number,
      datesArray: (Date | number)[]
    ): Date | undefined

    compareAsc(dateLeft: Date | number, dateRight: Date | number): number

    compareDesc(dateLeft: Date | number, dateRight: Date | number): number

    daysToWeeks(days: number): number

    differenceInBusinessDays(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInCalendarDays(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInCalendarISOWeeks(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInCalendarISOWeekYears(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInCalendarMonths(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInCalendarQuarters(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInCalendarWeeks(
      dateLeft: Date | number,
      dateRight: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): number

    differenceInCalendarYears(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInDays(dateLeft: Date | number, dateRight: Date | number): number

    differenceInHours(
      dateLeft: Date | number,
      dateRight: Date | number,
      options?: {
        roundingMethod?: string
      }
    ): number

    differenceInISOWeekYears(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInMilliseconds(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInMinutes(
      dateLeft: Date | number,
      dateRight: Date | number,
      options?: {
        roundingMethod?: string
      }
    ): number

    differenceInMonths(
      dateLeft: Date | number,
      dateRight: Date | number
    ): number

    differenceInQuarters(
      dateLeft: Date | number,
      dateRight: Date | number,
      options?: {
        roundingMethod?: string
      }
    ): number

    differenceInSeconds(
      dateLeft: Date | number,
      dateRight: Date | number,
      options?: {
        roundingMethod?: string
      }
    ): number

    differenceInWeeks(
      dateLeft: Date | number,
      dateRight: Date | number,
      options?: {
        roundingMethod?: string
      }
    ): number

    differenceInYears(dateLeft: Date | number, dateRight: Date | number): number

    eachDayOfInterval(
      interval: Interval,
      options?: {
        step?: number
      }
    ): Date[]

    eachHourOfInterval(
      interval: Interval,
      options?: {
        step?: number
      }
    ): Date[]

    eachMinuteOfInterval(
      interval: Interval,
      options?: {
        step?: number
      }
    ): Date[]

    eachMonthOfInterval(interval: Interval): Date[]

    eachQuarterOfInterval(interval: Interval): Date[]

    eachWeekendOfInterval(interval: Interval): Date[]

    eachWeekendOfMonth(date: Date | number): Date[]

    eachWeekendOfYear(date: Date | number): Date[]

    eachWeekOfInterval(
      interval: Interval,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): Date[]

    eachYearOfInterval(interval: Interval): Date[]

    endOfDay(date: Date | number): Date

    endOfDecade(
      date: Date | number,
      options?: {
        additionalDigits?: 0 | 1 | 2
      }
    ): Date

    endOfHour(date: Date | number): Date

    endOfISOWeek(date: Date | number): Date

    endOfISOWeekYear(date: Date | number): Date

    endOfMinute(date: Date | number): Date

    endOfMonth(date: Date | number): Date

    endOfQuarter(date: Date | number): Date

    endOfSecond(date: Date | number): Date

    endOfToday(): Date

    endOfTomorrow(): Date

    endOfWeek(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): Date

    endOfYear(date: Date | number): Date

    endOfYesterday(): Date

    format(
      date: Date | number,
      format: string,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: number
        useAdditionalWeekYearTokens?: boolean
        useAdditionalDayOfYearTokens?: boolean
      }
    ): string

    formatDistance(
      date: Date | number,
      baseDate: Date | number,
      options?: {
        includeSeconds?: boolean
        addSuffix?: boolean
        locale?: Locale
      }
    ): string

    formatDistanceStrict(
      date: Date | number,
      baseDate: Date | number,
      options?: {
        addSuffix?: boolean
        unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
        roundingMethod?: 'floor' | 'ceil' | 'round'
        locale?: Locale
      }
    ): string

    formatDistanceToNow(
      date: Date | number,
      options?: {
        includeSeconds?: boolean
        addSuffix?: boolean
        locale?: Locale
      }
    ): string

    formatDistanceToNowStrict(
      date: Date | number,
      options?: {
        addSuffix?: boolean
        unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'
        roundingMethod?: 'floor' | 'ceil' | 'round'
        locale?: Locale
      }
    ): string

    formatDuration(
      duration: Duration,
      options?: {
        format?: string[]
        zero?: boolean
        delimiter?: string
        locale?: Locale
      }
    ): string

    formatISO(
      date: Date | number,
      options?: {
        format?: 'extended' | 'basic'
        representation?: 'complete' | 'date' | 'time'
      }
    ): string

    formatISO9075(
      date: Date | number,
      options?: {
        format?: 'extended' | 'basic'
        representation?: 'complete' | 'date' | 'time'
      }
    ): string

    formatISODuration(duration: Duration): string

    formatRelative(
      date: Date | number,
      baseDate: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): string

    formatRFC3339(
      date: Date | number,
      options?: {
        fractionDigits?: 0 | 1 | 2 | 3
      }
    ): string

    formatRFC7231(date: Date | number): string

    fromUnixTime(unixTime: number): Date

    getDate(date: Date | number): number

    getDay(date: Date | number): 0 | 1 | 2 | 3 | 4 | 5 | 6

    getDayOfYear(date: Date | number): number

    getDaysInMonth(date: Date | number): number

    getDaysInYear(date: Date | number): number

    getDecade(date: Date | number): number

    getDefaultOptions(): Object

    getHours(date: Date | number): number

    getISODay(date: Date | number): number

    getISOWeek(date: Date | number): number

    getISOWeeksInYear(date: Date | number): number

    getISOWeekYear(date: Date | number): number

    getMilliseconds(date: Date | number): number

    getMinutes(date: Date | number): number

    getMonth(date: Date | number): number

    getOverlappingDaysInIntervals(
      intervalLeft: Interval,
      intervalRight: Interval
    ): number

    getQuarter(date: Date | number): number

    getSeconds(date: Date | number): number

    getTime(date: Date | number): number

    getUnixTime(date: Date | number): number

    getWeek(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      }
    ): number

    getWeekOfMonth(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): number

    getWeeksInMonth(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): number

    getWeekYear(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      }
    ): number

    getYear(date: Date | number): number

    hoursToMilliseconds(hours: number): number

    hoursToMinutes(hours: number): number

    hoursToSeconds(hours: number): number

    intervalToDuration(interval: Interval): Duration

    intlFormat(
      argument: Date | number,
      formatOptions?: {
        localeMatcher?: 'lookup' | 'best fit'
        weekday?: 'narrow' | 'short' | 'long'
        era?: 'narrow' | 'short' | 'long'
        year?: 'numeric' | '2-digit'
        month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long'
        day?: 'numeric' | '2-digit'
        hour?: 'numeric' | '2-digit'
        minute?: 'numeric' | '2-digit'
        second?: 'numeric' | '2-digit'
        timeZoneName?: 'short' | 'long'
        formatMatcher?: 'basic' | 'best fit'
        hour12?: boolean
        timeZone?: string
      },
      localeOptions?: {
        locale?: string | string[]
      }
    ): string

    intlFormatDistance(
      date: Date | number,
      baseDate: Date | number,
      options?: {
        unit?: string
        locale?: string | string[]
        localeMatcher?: string
        numeric?: string
        style?: string
      }
    ): string

    isAfter(date: Date | number, dateToCompare: Date | number): boolean

    isBefore(date: Date | number, dateToCompare: Date | number): boolean

    isDate(value: any): boolean

    isEqual(dateLeft: Date | number, dateRight: Date | number): boolean

    isExists(year: number, month: number, day: number): boolean

    isFirstDayOfMonth(date: Date | number): boolean

    isFriday(date: Date | number): boolean

    isFuture(date: Date | number): boolean

    isLastDayOfMonth(date: Date | number): boolean

    isLeapYear(date: Date | number): boolean

    isMatch(
      dateString: string,
      formatString: string,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
        useAdditionalWeekYearTokens?: boolean
        useAdditionalDayOfYearTokens?: boolean
      }
    ): boolean

    isMonday(date: Date | number): boolean

    isPast(date: Date | number): boolean

    isSameDay(dateLeft: Date | number, dateRight: Date | number): boolean

    isSameHour(dateLeft: Date | number, dateRight: Date | number): boolean

    isSameISOWeek(dateLeft: Date | number, dateRight: Date | number): boolean

    isSameISOWeekYear(
      dateLeft: Date | number,
      dateRight: Date | number
    ): boolean

    isSameMinute(dateLeft: Date | number, dateRight: Date | number): boolean

    isSameMonth(dateLeft: Date | number, dateRight: Date | number): boolean

    isSameQuarter(dateLeft: Date | number, dateRight: Date | number): boolean

    isSameSecond(dateLeft: Date | number, dateRight: Date | number): boolean

    isSameWeek(
      dateLeft: Date | number,
      dateRight: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): boolean

    isSameYear(dateLeft: Date | number, dateRight: Date | number): boolean

    isSaturday(date: Date | number): boolean

    isSunday(date: Date | number): boolean

    isThisHour(date: Date | number): boolean

    isThisISOWeek(date: Date | number): boolean

    isThisMinute(date: Date | number): boolean

    isThisMonth(date: Date | number): boolean

    isThisQuarter(date: Date | number): boolean

    isThisSecond(date: Date | number): boolean

    isThisWeek(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): boolean

    isThisYear(date: Date | number): boolean

    isThursday(date: Date | number): boolean

    isToday(date: Date | number): boolean

    isTomorrow(date: Date | number): boolean

    isTuesday(date: Date | number): boolean

    isValid(date: any): boolean

    isWednesday(date: Date | number): boolean

    isWeekend(date: Date | number): boolean

    isWithinInterval(date: Date | number, interval: Interval): boolean

    isYesterday(date: Date | number): boolean

    lastDayOfDecade(date: Date | number): Date

    lastDayOfISOWeek(date: Date | number): Date

    lastDayOfISOWeekYear(date: Date | number): Date

    lastDayOfMonth(date: Date | number): Date

    lastDayOfQuarter(
      date: Date | number,
      options?: {
        additionalDigits?: 0 | 1 | 2
      }
    ): Date

    lastDayOfWeek(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): Date

    lastDayOfYear(date: Date | number): Date

    lightFormat(date: Date | number, format: string): string

    max(datesArray: (Date | number)[]): Date

    milliseconds(duration: Duration): number

    millisecondsToHours(milliseconds: number): number

    millisecondsToMinutes(milliseconds: number): number

    millisecondsToSeconds(milliseconds: number): number

    min(datesArray: (Date | number)[]): Date

    minutesToHours(minutes: number): number

    minutesToMilliseconds(minutes: number): number

    minutesToSeconds(minutes: number): number

    monthsToQuarters(months: number): number

    monthsToYears(months: number): number

    newDate(
      year: number,
      month: number,
      date: number,
      hours?: number,
      minutes?: number,
      seconds?: number,
      ms?: number
    ): Date

    nextDay(date: Date | number, day: Day): Date

    nextFriday(date: Date | number): Date

    nextMonday(date: Date | number): Date

    nextSaturday(date: Date | number): Date

    nextSunday(date: Date | number): Date

    nextThursday(date: Date | number): Date

    nextTuesday(date: Date | number): Date

    nextWednesday(date: Date | number): Date

    parse(
      dateString: string,
      formatString: string,
      referenceDate: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
        useAdditionalWeekYearTokens?: boolean
        useAdditionalDayOfYearTokens?: boolean
      }
    ): Date

    parseISO(
      argument: string,
      options?: {
        additionalDigits?: 0 | 1 | 2
      }
    ): Date

    parseJSON(argument: string | number | Date): Date

    previousDay(date: Date | number, day: number): Date

    previousFriday(date: Date | number): Date

    previousMonday(date: Date | number): Date

    previousSaturday(date: Date | number): Date

    previousSunday(date: Date | number): Date

    previousThursday(date: Date | number): Date

    previousTuesday(date: Date | number): Date

    previousWednesday(date: Date | number): Date

    quartersToMonths(quarters: number): number

    quartersToYears(quarters: number): number

    roundToNearestMinutes(
      date: Date | number,
      options?: {
        nearestTo?: number
        roundingMethod?: string
      }
    ): Date

    secondsToHours(seconds: number): number

    secondsToMilliseconds(seconds: number): number

    secondsToMinutes(seconds: number): number

    set(
      date: Date | number,
      values: {
        year?: number
        month?: number
        date?: number
        hours?: number
        minutes?: number
        seconds?: number
        milliseconds?: number
      }
    ): Date

    setDate(date: Date | number, dayOfMonth: number): Date

    setDay(
      date: Date | number,
      day: number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): Date

    setDayOfYear(date: Date | number, dayOfYear: number): Date

    setDefaultOptions(newOptions: {
      locale?: Locale
      weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
    }): void

    setHours(date: Date | number, hours: number): Date

    setISODay(date: Date | number, day: number): Date

    setISOWeek(date: Date | number, isoWeek: number): Date

    setISOWeekYear(date: Date | number, isoWeekYear: number): Date

    setMilliseconds(date: Date | number, milliseconds: number): Date

    setMinutes(date: Date | number, minutes: number): Date

    setMonth(date: Date | number, month: number): Date

    setQuarter(date: Date | number, quarter: number): Date

    setSeconds(date: Date | number, seconds: number): Date

    setWeek(
      date: Date | number,
      week: number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      }
    ): Date

    setWeekYear(
      date: Date | number,
      weekYear: number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      }
    ): Date

    setYear(date: Date | number, year: number): Date

    startOfDay(date: Date | number): Date

    startOfDecade(date: Date | number): Date

    startOfHour(date: Date | number): Date

    startOfISOWeek(date: Date | number): Date

    startOfISOWeekYear(date: Date | number): Date

    startOfMinute(date: Date | number): Date

    startOfMonth(date: Date | number): Date

    startOfQuarter(date: Date | number): Date

    startOfSecond(date: Date | number): Date

    startOfToday(): Date

    startOfTomorrow(): Date

    startOfWeek(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
      }
    ): Date

    startOfWeekYear(
      date: Date | number,
      options?: {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7
      }
    ): Date

    startOfYear(date: Date | number): Date

    startOfYesterday(): Date

    sub(date: Date | number, duration: Duration): Date

    subBusinessDays(date: Date | number, amount: number): Date

    subDays(date: Date | number, amount: number): Date

    subHours(date: Date | number, amount: number): Date

    subISOWeekYears(date: Date | number, amount: number): Date

    subMilliseconds(date: Date | number, amount: number): Date

    subMinutes(date: Date | number, amount: number): Date

    subMonths(date: Date | number, amount: number): Date

    subQuarters(date: Date | number, amount: number): Date

    subSeconds(date: Date | number, amount: number): Date

    subWeeks(date: Date | number, amount: number): Date

    subYears(date: Date | number, amount: number): Date

    toDate(argument: Date | number): Date

    weeksToDays(weeks: number): number

    yearsToMonths(years: number): number

    yearsToQuarters(years: number): number

    daysInWeek: number

    daysInYear: number

    maxTime: number

    millisecondsInMinute: number

    millisecondsInHour: number

    millisecondsInSecond: number

    minTime: number

    minutesInHour: number

    monthsInQuarter: number

    monthsInYear: number

    quartersInYear: number

    secondsInHour: number

    secondsInMinute: number

    secondsInDay: number

    secondsInWeek: number

    secondsInYear: number

    secondsInMonth: number

    secondsInQuarter: number
  }
}
