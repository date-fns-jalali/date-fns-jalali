/**
 * UTC date class. It maps getters and setters to corresponding UTC methods,
 * forcing all calculations in the UTC time zone.
 *
 * Combined with date-fns, it allows using the class the same way as
 * the original date class.
 *
 * This minimal version provides only getters, setters, and `getTimezoneOffset`,
 * leaving the formatter functions out. It's built to be used inside date-fns.
 * For the complete version, see `UTCDate`.
 */
export class UTCDateMini extends Date {
  constructor();

  constructor(value: Date | number | string);

  constructor(
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  );

  getTimezoneOffset(): 0;
}
