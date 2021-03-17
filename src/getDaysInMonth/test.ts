// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDaysInMonth from '.'

describe('getDaysInMonth', function() {
  it('returns the number of days in the month of the given date', function() {
    const result = getDaysInMonth(/* 1478/11/23 */ new Date(2100, 1 /* Feb */, 11))
    assert(result === 30)
  })

  it('works for the Esfand of a leap year', function() {
    const result = getDaysInMonth(/* 1399/12/20 */ new Date(2021, 2 /* Mar */, 10))
    assert(result === 30)
  })

  it('accepts a timestamp', function() {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime()
    const result = getDaysInMonth(date)
    assert(result === 31)
  })

  it.skip('handles dates before 100 AD', function() {
    const date = new Date(0)
    date.setFullYear(0, 1 /* Feb */, 15)
    date.setHours(0, 0, 0, 0)
    const result = getDaysInMonth(date)
    assert(result === 29)
  })

  it('returns NaN if the given date is invalid', function() {
    const result = getDaysInMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDaysInMonth.bind(null), TypeError)
  })
})
