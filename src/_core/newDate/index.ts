import { toGregorian } from "../../_lib/jalali/index.js";

type VArgs = [/* value: */ number | string | Date];
type DArgs = [
  /* year:*/ number,
  /* month:*/ number,
  /* date?:*/ number?,
  /* hours?:*/ number?,
  /* minutes?:*/ number?,
  /* seconds?:*/ number?,
  /* ms?:*/ number?,
];
type Args = [] | VArgs | DArgs;

/**
 *
 * @param args
 * @returns {Date}
 */
export function newDate(...args: Args) {
  if (args.length > 1) {
    const [year, month, day = 1, ...rest] = args as DArgs;
    const g = toGregorian(year, month + 1, day);
    return new Date(...([g.gy, g.gm - 1, g.gd, ...rest] as DArgs));
  }
  return new Date(...(args as VArgs));
}
