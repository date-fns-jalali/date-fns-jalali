import { toJalali } from '../../_jalali/index.js'

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export default function getFullYear(cleanDate) {
  const gd = cleanDate.getDate()
  const gm = cleanDate.getMonth() + 1
  const gy = cleanDate.getFullYear()
  return toJalali(gy, gm, gd).jy
}
