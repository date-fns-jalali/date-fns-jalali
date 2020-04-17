import { toGregorian } from '../../_jalali/index'

type DArgs = [
  /* year:*/ number,
  /* month:*/ number,
  /* date?:*/ number | undefined,
  /* hours?:*/ number | undefined,
  /* minutes?:*/ number | undefined,
  /* seconds?:*/ number | undefined,
  /* ms?:*/ number | undefined
]
type Args = DArgs

/**
 *
 * @param args
 * @returns {Date}
 */
export default function dateUTC(...args: Args) {
  const [year, month, day = 1, ...rest] = args
  const g = toGregorian(year, month + 1, day)
  return Date.UTC(...([g.gy, g.gm - 1, g.gd, ...rest] as DArgs))
}
