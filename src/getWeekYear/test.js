// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getWeekYear from '.'

describe('getWeekYear', function() {
  it('returns the local week-numbering year of the given date', function() {
    var result = getWeekYear(/* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20))
    assert(result === 1384)
  })

  it('accepts a timestamp', function() {
    var result = getWeekYear(
      /* 1388/12/29 */ new Date(2010, 2 /* Mar */, 20).getTime()
    )
    assert(result === 1389)
  })

  it.skip('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(7, 11 /* Dec */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var result = getWeekYear(initialDate)
    assert(result === 8)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getWeekYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function() {
    var date = /* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20)
    var result = getWeekYear(date, {
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 }
      }
    })
    assert(result === 1383)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var date = /* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20)
    var result = getWeekYear(date, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
      }
    })
    assert(result === 1383)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    // $ExpectedMistake
    var block = getWeekYear.bind(
      null,
      /* 1386/10/10 */ new Date(2007, 11 /* Dec */, 31),
      {
        weekStartsOn: NaN
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function() {
    // $ExpectedMistake
    var block = getWeekYear.bind(
      null,
      /* 1386/10/10 */ new Date(2007, 11 /* Dec */, 31),
      {
        firstWeekContainsDate: NaN
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getWeekYear.bind(null), TypeError)
  })
})
