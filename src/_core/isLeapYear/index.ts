/**
 *
 * @param year {number}
 * @returns {boolean}
 */
export function isLeapYear(year: number) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
