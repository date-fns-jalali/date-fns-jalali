/* eslint-env mocha */

import assert from 'assert'
import getWeeksInMonth from '.'

describe('getWeeksInMonth', function () {
  it('returns the number of calendar weeks the month in the given date spans', function () {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0)
    )
    assert(result === 5)
  })

  it('allows to specify which day is the first day of the week', function () {
    const result = getWeeksInMonth(
      /* 1393/11/19 */ new Date(2015, 1 /* Feb */, 8, 18, 0),
      {
        weekStartsOn: 1,
      }
    )
    assert(result === 5)
  })

  it('allows to specify which day is the first day of the week in locale', function () {
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

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
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

  it('accepts timestamps', function () {
    const result = getWeeksInMonth(
      /* 1396/2/19 */ new Date(2017, 4 /* May */, 9, 18, 0).getTime()
    )
    assert(result === 6)
  })

  it('does not mutate the original date', function () {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    getWeeksInMonth(date)
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  it('returns NaN if the date is `Invalid Date`', function () {
    const result = getWeeksInMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    const block = getWeeksInMonth.bind(
      null,
      /* 1393/4/17 */ new Date(2014, 6 /* Jul */, 8, 18, 0),
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    // @ts-expect-error
    assert.throws(getWeeksInMonth.bind(null), TypeError)
  })
})
