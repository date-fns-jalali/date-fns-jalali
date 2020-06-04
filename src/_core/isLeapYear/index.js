import { isLeapJalaliYear } from '../../_jalali/index.js'

/**
 *
 * @param year {number}
 * @returns {boolean}
 */
export default function isLeapYear(year) {
  return isLeapJalaliYear(year)
}
