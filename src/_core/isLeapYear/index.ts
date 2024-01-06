import { isLeapJalaliYear } from "../../_lib/jalali/index";

/**
 *
 * @param year {number}
 * @returns {boolean}
 */
export function isLeapYear(year: number) {
  return isLeapJalaliYear(year);
}
