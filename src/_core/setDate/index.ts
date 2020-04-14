/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setDate(
  cleanDate: Date,
  ...args: Parameters<Date['setDate']>
) {
  return cleanDate.setDate(...args)
}
