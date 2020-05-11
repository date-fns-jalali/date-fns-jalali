// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfQuarter from '.'

describe('startOfQuarter', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a quarter', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    var result = startOfQuarter(date)
    assert.deepEqual(result, /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22))
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
    var result = startOfQuarter(date)
    assert.deepEqual(result, /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22))
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfQuarter(date)
    assert.deepEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfQuarter(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfQuarter.bind(null), TypeError)
  })
})
