/* eslint-env mocha */

import assert from 'assert'
import getUTCWeek from '.'

describe('getUTCWeek', () => {
  it('returns the local week of year of the given date', () => {
    const result = getUTCWeek(
      new Date(/* 1383/1/13 */ Date.UTC(2004, 3 /* Apr */, 1))
    )
    assert(result === 2)
  })

  it('accepts a timestamp', () => {
    const result = getUTCWeek(/* 1387/1/2 */ Date.UTC(2008, 2 /* Mar */, 21))
    assert(result === 1)
  })

  it.skip('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setUTCFullYear(7, 11 /* Dec */, 30)
    initialDate.setUTCHours(0, 0, 0, 0)
    const result = getUTCWeek(initialDate)
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getUTCWeek(new Date(NaN))
    assert(isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', () => {
    const date = new Date(/* 1383/1/2 */ Date.UTC(2004, 2 /* Mar */, 21))
    const result = getUTCWeek(date, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    })
    assert(result === 52)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const date = new Date(/* 1383/1/2 */ Date.UTC(2004, 2 /* Mar */, 21))
    const result = getUTCWeek(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    })
    assert(result === 52)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    const block = () =>
      getUTCWeek(/* 1386/10/10 */ new Date(2007, 11 /* Dec */, 31), {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', () => {
    const block = () =>
      getUTCWeek(/* 1386/10/10 */ new Date(2007, 11 /* Dec */, 31), {
        // @ts-expect-error
        firstWeekContainsDate: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getUTCWeek.bind(null), TypeError)
  })
})
