import { toJalaali } from '../../_jalaali/index.js'

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export default function getUTCMonth(cleanDate) {
  const gd = cleanDate.getUTCDate()
  const gm = cleanDate.getUTCMonth() + 1
  const gy = cleanDate.getUTCFullYear()
  return toJalaali(gy, gm, gd).jm - 1
}
