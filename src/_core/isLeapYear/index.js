/**
 *
 * @param year {number}
 * @returns {boolean}
 */
export default function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
