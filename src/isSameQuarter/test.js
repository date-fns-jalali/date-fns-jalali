// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameQuarter from '.'

describe('isSameQuarter', function() {
  it('returns true if the given dates have the same quarter (and year)', function() {
    var result = isSameQuarter(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1392/12/17 */ new Date(2014, 2 /* Mar */, 8)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different quarters', function() {
    var result = isSameQuarter(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1392/7/3 */ new Date(2013, 8 /* Sep */, 25)
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isSameQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      /* 1393/6/3 */ new Date(2014, 7 /* Sep */, 25).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    var result = isSameQuarter(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    var result = isSameQuarter(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    var result = isSameQuarter(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameQuarter.bind(null), TypeError)
    assert.throws(isSameQuarter.bind(null, 1), TypeError)
  })
})
