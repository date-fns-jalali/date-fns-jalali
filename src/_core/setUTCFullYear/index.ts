import { toGregorian, toJalali } from '../../_jalali/index'

/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setUTCFullYear(
  cleanDate: Date,
  ...args: Parameters<Date['setUTCFullYear']>
) {
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  const j = toJalali(gy, gm, gd)
  const [year, month = j.jm, date = j.jd] = args
  const g = toGregorian(year, month + 1, date)
  return cleanDate.setUTCFullYear(g.gy, g.gm - 1, g.gd)
}
