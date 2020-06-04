// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isWednesday from '.'

describe('isWednesday', function() {
  it('returns true if the given date is Wednesday', function() {
    var result = isWednesday(/* 1393/7/2 */ new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if the given date is not Wednesday', function() {
    var result = isWednesday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isWednesday(
      /* 1392/11/23 */ new Date(2014, 1 /* Feb */, 12).getTime()
    )
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', function() {
    var result = isWednesday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isWednesday.bind(null), TypeError)
  })
})
