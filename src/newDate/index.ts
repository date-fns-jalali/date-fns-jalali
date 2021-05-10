import requiredArgs from '../_lib/requiredArgs/index'

type DArgs = [
  /* year:*/ number,
  /* month:*/ number,
  /* date?:*/ number | undefined,
  /* hours?:*/ number | undefined,
  /* minutes?:*/ number | undefined,
  /* seconds?:*/ number | undefined,
  /* ms?:*/ number | undefined
]

/**
 * @name newDate
 * @category Day Helpers
 * @summary Create a date object of the given params.
 *
 * @description
 * Create a date object of the given params.
 *
 * @param {Number} year - the number of years
 * @param {Number} month - the number of months 0-11
 * @param {Number} date - the number of days 1-31
 * @param {Number} [hours=0] - the number of hours 0-23
 * @param {Number} [minutes=0] - the number of minutes 0-59
 * @param {Number} [seconds=0] - the number of seconds 0-59
 * @param {Number} [ms=0] - the number of milliseconds 0-999
 * @returns {Date} the new date
 * @throws {TypeError} 3 arguments required
 *
 * @example
 * // Create the 30th September 2014:
 * var result = newDate(2014, 8, 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
export default function newDate(
  year: number,
  month: number,
  date: number,
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0,
  ms: number = 0
): Date {
  requiredArgs(3, arguments)

  return new Date(year, month, date, hours, minutes, seconds, ms)
}
