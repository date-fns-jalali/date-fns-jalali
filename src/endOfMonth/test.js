// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfMonth from '.'

describe('endOfMonth', function() {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a month', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = endOfMonth(date)
    assert.deepEqual(
      result,
      /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22, 23, 59, 59, 999)
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
    var result = endOfMonth(date)
    assert.deepEqual(
      result,
      /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22, 23, 59, 59, 999)
    )
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    endOfMonth(date)
    assert.deepEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  describe('edge cases', function() {
    it('works for last month in year', function() {
      var date = /* 1393/12/10 */ new Date(2015, 2 /* Mar */, 1, 0, 0, 0)
      var result = endOfMonth(date)
      assert.deepEqual(
        result,
        /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20, 23, 59, 59, 999)
      )
    })

    it('works for last day of month', function() {
      var date = /* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21)
      var result = endOfMonth(date)
      assert.deepEqual(
        result,
        /* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21, 23, 59, 59, 999)
      )
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = endOfMonth(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfMonth.bind(null), TypeError)
  })
})
