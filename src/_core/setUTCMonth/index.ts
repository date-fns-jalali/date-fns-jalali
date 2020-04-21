/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setUTCMonth(
  cleanDate: Date,
  ...args: Parameters<Date['setUTCMonth']>
) {
  return cleanDate.setUTCMonth(...args)
}
