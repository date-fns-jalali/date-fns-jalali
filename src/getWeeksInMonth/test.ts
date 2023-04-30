/* eslint-env mocha */

import assert from 'assert'
import getWeeksInMonth from '.'

describe('getWeeksInMonth', () => {
  it('returns the number of calendar weeks the month in the given date spans', () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0)
    )
    assert(result === 5)
  })

  it('allows to specify which day is the first day of the week', () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
      }
    )
    assert(result === 5)
  })

  it('allows to specify which day is the first day of the week in locale', () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        // @ts-expect-error
        locale: {
          options: { weekStartsOn: 1 },
        },
      }
    )
    assert(result === 5)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
        // @ts-expect-error
        locale: {
          options: { weekStartsOn: 0 },
        },
      }
    )
    assert(result === 5)
  })

  it('accepts timestamps', () => {
    const result = getWeeksInMonth(
      /* 1396/2/19 */ new Date(2017, 4 /* May */, 9, 18, 0).getTime()
    )
    assert(result === 6)
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    getWeeksInMonth(date)
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  it('returns NaN if the date is `Invalid Date`', () => {
    const result = getWeeksInMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    const block = () =>
      getWeeksInMonth(/* 1393/4/17 */ new Date(2014, 6 /* Jul */, 8, 18, 0), {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getWeeksInMonth.bind(null), TypeError)
  })
})
