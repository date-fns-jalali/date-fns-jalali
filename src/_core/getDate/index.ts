import { toJalali } from "../../_lib/jalali/index.js";

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export function getDate(cleanDate: Date) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  return toJalali(gy, gm, gd).jd;
}
