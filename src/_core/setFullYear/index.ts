/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setFullYear(
  cleanDate: Date,
  ...args: Parameters<Date['setFullYear']>
) {
  return cleanDate.setFullYear(...args)
}
