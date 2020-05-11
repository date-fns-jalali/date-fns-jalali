// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getQuarter from '.'

describe('getQuarter', function() {
  it('returns the quarter of the given date', function() {
    var result = getQuarter(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2))
    assert(result === 2)
  })

  it('accepts a timestamp', function() {
    var result = getQuarter(
      /* 1393/1/13 */ new Date(2014, 3 /* Apr */, 2).getTime()
    )
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getQuarter(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getQuarter.bind(null), TypeError)
  })
})
