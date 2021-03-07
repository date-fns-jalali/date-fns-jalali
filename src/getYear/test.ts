// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getYear from '.'

describe('getYear', function() {
  it('returns the year of the given date', function() {
    const result = getYear(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2))
    assert(result === 1393)
  })

  it('accepts a timestamp', function() {
    const result = getYear(/* 1380/1/15 */ new Date(2001, 3 /* Apr */, 4).getTime())
    assert(result === 1380)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getYear.bind(null), TypeError)
  })
})
