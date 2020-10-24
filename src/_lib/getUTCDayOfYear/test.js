// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getUTCDayOfYear from '.'

describe('getUTCDayOfYear', function() {
  it('returns the day of the year of the given date', function() {
    var result = getUTCDayOfYear(
      new Date(/* 1393/4/11 */ Date.UTC(2014, 6 /* Jul */, 2))
    )
    assert(result === 31 * 3 + 11)
  })

  it('accepts a timestamp', function() {
    var result = getUTCDayOfYear(
      new Date(/* 1392/1/2 */ Date.UTC(2013, 2 /* Mar */, 22)).getTime()
    )
    assert(result === 2)
  })

  it.skip('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setUTCFullYear(0, 11 /* Dec */, 31)
    initialDate.setUTCHours(0, 0, 0, 0)
    var result = getUTCDayOfYear(initialDate)
    assert(result === 366)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getUTCDayOfYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getUTCDayOfYear.bind(null), TypeError)
  })
})
