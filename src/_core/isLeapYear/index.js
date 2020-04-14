/**
 *
 * @param cleanDate {Date}
 * @returns {boolean}
 */
export default function isLeapYear(cleanDate) {
  var year = cleanDate.getFullYear()
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}
