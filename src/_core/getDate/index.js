import { toJalaali } from '../../_jalaali/index.js'

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export default function getDate(cleanDate) {
  const gd = cleanDate.getDate()
  const gm = cleanDate.getMonth() + 1
  const gy = cleanDate.getFullYear()
  return toJalaali(gy, gm, gd).jd
}
