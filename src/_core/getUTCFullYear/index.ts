import { toJalali } from '../../_jalali/index'

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export default function getUTCFullYear(cleanDate: Date) {
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  return toJalali(gy, gm, gd).jy
}
