import { toGregorian, toJalali } from '../../_jalali/index.js'

/**
 *
 * @param cleanDate {Date}
 * @param date
 * @returns {number}
 */
export default function setUTCDate(cleanDate, date) {
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  const j = toJalali(gy, gm, gd)
  const g = toGregorian(j.jy, j.jm, date)
  return cleanDate.setUTCFullYear(g.gy, g.gm - 1, g.gd)
}
