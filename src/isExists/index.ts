import { getMonth as coreGetMonth } from "../_core/getMonth/index";
import { getDate as coreGetDate } from "../_core/getDate/index";
import { getFullYear as coreGetFullYear } from "../_core/getFullYear/index";
import { newDate as coreNewDate } from "../_core/newDate/index";
/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param year - The year of the date to check
 * @param month - The month of the date to check
 * @param day - The day of the date to check
 *
 * @returns `true` if the date exists
 *
 * @example
 * // For the valid date:
 * const result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isExists(2018, 1, 31)
 * //=> false
 */
export function isExists(year: number, month: number, day: number): boolean {
  const date = coreNewDate(year, month, day);
  return (
    coreGetFullYear(date) === year &&
    coreGetMonth(date) === month &&
    coreGetDate(date) === day
  );
}
