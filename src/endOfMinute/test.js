// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import endOfMinute from '.'

describe('endOfMinute', function() {
  it('returns the date with the time set to the last millisecond before a minute ends', function() {
    var date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15)
    var result = endOfMinute(date)
    assert.deepEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 59, 999)
    )
  })

  it('accepts a timestamp', function() {
    var result = endOfMinute(
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15).getTime()
    )
    assert.deepEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15, 59, 999)
    )
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15)
    endOfMinute(date)
    assert.deepEqual(date, /* 1393/9/10 */ new Date(2014, 11, 1, 22, 15))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = endOfMinute(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(endOfMinute.bind(null), TypeError)
  })
})
