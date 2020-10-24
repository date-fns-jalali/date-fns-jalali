// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfMonth from '.'

describe('lastDayOfMonth', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a month', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfMonth(date)
    assert.deepEqual(result, /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30))
  })

  it('accepts a timestamp', function() {
    var date = /* 1393/5/11 */ new Date(
      2014,
      7 /* Aug */,
      2,
      11,
      55,
      0
    ).getTime()
    var result = lastDayOfMonth(date)
    assert.deepEqual(result, /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31))
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfMonth(date)
    assert.deepEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  describe('edge cases', function() {
    it('works for the February of a leap year', function() {
      var date = /* 1390/11/22 */ new Date(2012, 1 /* Feb */, 11, 11, 55, 0)
      var result = lastDayOfMonth(date)
      assert.deepEqual(result, /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29))
    })

    it('works for the February of a non-leap year', function() {
      var date = /* 1392/11/22 */ new Date(2014, 1 /* Feb */, 11, 11, 55, 0)
      var result = lastDayOfMonth(date)
      assert.deepEqual(result, /* 1392/12/9 */ new Date(2014, 1 /* Feb */, 28))
    })
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = lastDayOfMonth(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(lastDayOfMonth.bind(null), TypeError)
  })
})
