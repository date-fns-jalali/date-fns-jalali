// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import lastDayOfMonth from '.'

describe('lastDayOfMonth', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a month', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = lastDayOfMonth(date)
    assert.deepEqual(result, /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22))
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
    assert.deepEqual(result, /* 1393/5/31 */ new Date(2014, 7 /* Aug */, 22))
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
    it('works for the Esfand of a leap year', function() {
      var date = /* 1399/12/22 */ new Date(2021, 2 /* Mar */, 12, 11, 55, 0)
      var result = lastDayOfMonth(date)
      assert.deepEqual(result, /* 1399/12/30 */ new Date(2021, 2 /* Mar */, 20))
    })

    it('works for the Esfand of a non-leap year', function() {
      var date = /* 1398/12/22 */ new Date(2020, 2 /* Mar */, 12, 11, 55, 0)
      var result = lastDayOfMonth(date)
      assert.deepEqual(result, /* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19))
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
