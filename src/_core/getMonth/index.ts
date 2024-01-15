import { toJalali } from "../../_lib/jalali/index";

/**
 *
 * @param cleanDate {Date}
 * @returns {number}
 */
export function getMonth(cleanDate: Date) {
  const gd = cleanDate.getDate();
  const gm = cleanDate.getMonth() + 1;
  const gy = cleanDate.getFullYear();
  return toJalali(gy, gm, gd).jm - 1;
}
