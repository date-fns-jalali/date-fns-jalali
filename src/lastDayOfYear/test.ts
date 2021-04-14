// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfYear from '.'

describe('lastDayOfYear', function () {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a year', function () {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfYear(date)
    assert.deepEqual(result, /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20))
  })

  it('accepts a timestamp', function () {
    const date = /* 1393/6/11 */ new Date(
      2014,
      8 /* Sep */,
      2,
      11,
      55,
      0
    ).getTime()
    const result = lastDayOfYear(date)
    assert.deepEqual(result, /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20))
  })

  it('does not mutate the original date', function () {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfYear(date)
    assert.deepEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = lastDayOfYear(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    assert.throws(lastDayOfYear.bind(null), TypeError)
  })
})
