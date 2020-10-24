// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInCalendarMonths from '.'

describe('differenceInCalendarMonths', function() {
  it('returns the number of calendar months between the given dates', function() {
    var result = differenceInCalendarMonths(
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 12)
  })

  it('returns a negative number if the time value of the first date is smaller', function() {
    var result = differenceInCalendarMonths(
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -12)
  })

  it('accepts timestamps', function() {
    var result = differenceInCalendarMonths(
      /* 1393/5/11 */ new Date(2014, 7 /* Aug */, 2).getTime(),
      /* 1389/4/11 */ new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 49)
  })

  describe('edge cases', function() {
    it('the difference is less than a month, but the given dates are in different calendar months', function() {
      var result = differenceInCalendarMonths(
        /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
        /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31)
      )
      assert(result === 1)
    })

    it('the same for the swapped dates', function() {
      var result = differenceInCalendarMonths(
        /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
        /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
      )
      assert(result === -1)
    })

    it('the days of months of the given dates are the same', function() {
      var result = differenceInCalendarMonths(
        /* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6),
        /* 1393/5/15 */ new Date(2014, 7 /* Aug */, 6)
      )
      assert(result === 1)
    })

    it('the given dates are the same', function() {
      var result = differenceInCalendarMonths(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0
      }

      var result = differenceInCalendarMonths(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      var resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function() {
    var result = differenceInCalendarMonths(
      new Date(NaN),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function() {
    var result = differenceInCalendarMonths(
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function() {
    var result = differenceInCalendarMonths(new Date(NaN), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(differenceInCalendarMonths.bind(null), TypeError)
    assert.throws(differenceInCalendarMonths.bind(null, 1), TypeError)
  })
})
