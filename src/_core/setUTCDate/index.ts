import {toGregorian, toJalali} from "../../_jalali/index";

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
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  const j = toJalali(gy, gm, gd)
  const [date] = args
  const g = toGregorian(j.jy, j.jm, date)
  return cleanDate.setUTCFullYear(g.gy, g.gm - 1, g.gd)}
