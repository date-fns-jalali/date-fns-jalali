import { UTCDateMini } from "./mini";

/**
 * UTC date class. It maps getters and setters to corresponding UTC methods,
 * forcing all calculations in the UTC time zone.
 *
 * Combined with date-fns, it allows using the class the same way as
 * the original date class.
 *
 * This complete version provides not only getters, setters,
 * and `getTimezoneOffset`, but also the formatter functions, mirroring
 * all original `Date` functionality. Use this version when you need to format
 * a string or in an environment you don't fully control (a library).
 * For a minimal version, see `UTCDateMini`.
 */
export class UTCDate extends UTCDateMini {
  toString(): string;

  toDateString(): string;

  toTimeString(): string;

  toLocaleString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;

  toLocaleDateString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;

  toLocaleTimeString(
    locales?: string | string[],
    options?: Intl.DateTimeFormatOptions
  ): string;
}
