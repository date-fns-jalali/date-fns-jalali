/**
 *
 * @param args
 * @returns {Date}
 */
export default function dateUTC(  ...args: Parameters<Date['UTC']>) {
  return Date.UTC(...args)
}
