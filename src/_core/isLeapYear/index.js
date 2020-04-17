import { isLeapJalaaliYear } from '../../_jalaali/index.js'

/**
 *
 * @param year {number}
 * @returns {boolean}
 */
export default function isLeapYear(year) {
  return isLeapJalaaliYear(year)
}
