/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export function setFullYear(
  cleanDate: Date,
  ...args: Parameters<Date["setFullYear"]>
) {
  return cleanDate.setFullYear(...args);
}
