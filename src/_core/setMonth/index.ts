/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setMonth(
  cleanDate: Date,
  ...args: Parameters<Date['setMonth']>
) {
  return cleanDate.setMonth(...args)
}
