import { toGregorian, toJalaali } from '../../_jalaali/index.js'

/**
 *
 * @param cleanDate {Date}
 * @param date
 * @returns {number}
 */
export default function setDate(cleanDate, date) {
  const gd = cleanDate.getDate()
  const gm = cleanDate.getMonth() + 1
  const gy = cleanDate.getFullYear()
  const j = toJalaali(gy, gm, gd)
  const g = toGregorian(j.jy, j.jm, date)
  return cleanDate.setFullYear(g.gy, g.gm - 1, g.gd)
}
