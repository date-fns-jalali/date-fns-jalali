import { toJalali } from '../../_jalali/index.js'

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export default function getDate(cleanDate) {
  const gd = cleanDate.getDate()
  const gm = cleanDate.getMonth() + 1
  const gy = cleanDate.getFullYear()
  return toJalali(gy, gm, gd).jd
}
