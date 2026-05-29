export function tpIsFriday(date: Temporal.ZonedDateTime): boolean {
  return date.dayOfWeek === 5;
}
