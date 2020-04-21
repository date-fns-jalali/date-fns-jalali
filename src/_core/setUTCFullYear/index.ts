/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setUTCFullYear(
  cleanDate: Date,
  ...args: Parameters<Date['setUTCFullYear']>
) {
  return cleanDate.setUTCFullYear(...args)
}
