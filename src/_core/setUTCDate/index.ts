/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setUTCDate(
  cleanDate: Date,
  ...args: Parameters<Date['setUTCDate']>
) {
  return cleanDate.setUTCDate(...args)
}
