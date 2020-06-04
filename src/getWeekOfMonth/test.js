// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getWeekOfMonth from '.'

describe('getWeekOfMonth', function() {
  it('returns the week of the month of the given date', function() {
    var result = getWeekOfMonth(
      /* 1396/8/24 */ new Date(2017, 10 /* Nov */, 15)
    )
    assert(result === 4)
  })

  describe('edge cases', function() {
    context('when the given day is the first of a month', function() {
      it('returns the week of the month of the given date', function() {
        var result = getWeekOfMonth(
          /* 1396/8/1 */ new Date(2017, 9 /* Oct */, 23)
        )
        assert(result === 1)
      })
    })

    context('when the given day is the last of a month #1', function() {
      it('returns the week of the month of the given date', function() {
        var result = getWeekOfMonth(
          /* 1396/10/30 */ new Date(2018, 0 /* Jan */, 20)
        )
        assert(result === 6)
      })
    })

    context('when the given day is the last of a month #2', function() {
      it('returns the week of the month of the given date', function() {
        var result = getWeekOfMonth(
          /* 1396/6/31 */ new Date(2017, 8 /* Sep */, 22)
        )
        assert(result === 5)
      })
    })
  })

  it('allows to specify which day is the first day of the week', function() {
    var result = getWeekOfMonth(
      /* 1396/7/1 */ new Date(2017, 8 /* Sep */, 23),
      {
        weekStartsOn: 1
      }
    )
    assert(result === 1)
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    var result = getWeekOfMonth(
      /* 1396/7/30 */ new Date(2017, 9 /* Oct */, 22),
      {
        // $ExpectedMistake
        locale: {
          options: { weekStartsOn: 6 }
        }
      }
    )
    assert(result === 5)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var result = getWeekOfMonth(
      /* 1396/7/30 */ new Date(2017, 9 /* Oct */, 22),
      {
        weekStartsOn: 6,
        // $ExpectedMistake
        locale: {
          options: { weekStartsOn: 0 }
        }
      }
    )
    assert(result === 5)
  })

  it('accepts a timestamp', function() {
    var result = getWeekOfMonth(
      /* 1396/8/1 */ new Date(2017, 9 /* Oct */, 23).getTime()
    )
    assert(result === 1)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getWeekOfMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getWeekOfMonth.bind(null), TypeError)
  })

  it('returns the week of the month of the given date, when the given date is sunday', function() {
    var result = getWeekOfMonth(
      /* 1396/7/2 */ new Date(2017, 8 /* Sep */, 24),
      {
        weekStartsOn: 1
      }
    )
    assert(result === 1)
  })
})
