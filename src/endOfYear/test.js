// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfYear from '.'

describe('endOfYear', function() {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a year', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfYear(date)
    assert.deepEqual(
      result,
      /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('accepts a timestamp', function() {
    var date = /* 1393/6/11 */ new Date(
      2014,
      8 /* Sep */,
      2,
      11,
      55,
      0
    ).getTime()
    var result = endOfYear(date)
    assert.deepEqual(
      result,
      /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfYear(date)
    assert.deepEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = endOfYear(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfYear.bind(null), TypeError)
  })
})
