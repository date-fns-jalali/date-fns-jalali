import { tpIsFriday } from "../isFriday/index.ts";

export function tpIsWeekend(date: Temporal.ZonedDateTime): boolean {
  return tpIsFriday(date);
}
