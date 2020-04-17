import { toGregorian, toJalali } from '../../_jalali/index'

/**
 *
 * @param cleanDate {Date}
 * @param args
 * @returns {number}
 */
export default function setFullYear(
  cleanDate: Date,
  ...args: Parameters<Date['setFullYear']>
) {
  const gd = cleanDate.getDate()
  const gm = cleanDate.getMonth() + 1
  const gy = cleanDate.getFullYear()
  const j = toJalali(gy, gm, gd)
  const [year, month = j.jm - 1, date = j.jd] = args
  const g = toGregorian(year, month + 1, date)
  return cleanDate.setFullYear(g.gy, g.gm - 1, g.gd)
}
