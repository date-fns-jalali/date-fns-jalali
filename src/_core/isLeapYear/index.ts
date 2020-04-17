import { isLeapJalaliYear } from '../../_jalali/index'

/**
 *
 * @param year {number}
 * @returns {boolean}
 */
export default function isLeapYear(year: number) {
  return isLeapJalaliYear(year)
}
