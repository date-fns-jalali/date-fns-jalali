import { toGregorian, toJalali } from '../../_jalali/index'

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
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  const j = toJalali(gy, gm, gd)
  const [month, date = j.jd] = args
  const g = toGregorian(j.jy, month + 1, date)
  return cleanDate.setUTCFullYear(g.gy, g.gm - 1, g.gd)
}
