// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDayOfYear from '.'

describe('getDayOfYear', function() {
  it('returns the day of the year of the given date', function() {
    var result = getDayOfYear(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2))
    assert(result === 31 * 3 + 11)
  })

  it('accepts a timestamp', function() {
    var result = getDayOfYear(
      /* 1392/10/12 */ new Date(2014, 0 /* Jan */, 2).getTime()
    )
    assert(result === 31 * 6 + 30 * 3 + 12)
  })

  it.skip('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(0, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var result = getDayOfYear(initialDate)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDayOfYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDayOfYear.bind(null), TypeError)
  })
})
