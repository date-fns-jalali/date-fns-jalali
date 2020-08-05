// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import differenceInYears from '.'

describe('differenceInYears', function() {
  it('returns the number of full years between the given dates', function() {
    var result = differenceInYears(
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0),
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0)
    )
    assert(result === 1)
  })

  it('returns a negative number if the time value of the first date is smaller', function() {
    var result = differenceInYears(
      /* 1390/4/11 */ new Date(2011, 6 /* Jul */, 2, 6, 0),
      /* 1391/4/12 */ new Date(2012, 6 /* Jul */, 2, 18, 0)
    )
    assert(result === -1)
  })

  it('accepts timestamps', function() {
    var result = differenceInYears(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      /* 1389/4/11 */ new Date(2010, 6 /* Jul */, 2).getTime()
    )
    assert(result === 4)
  })

  describe('leap days', function() {
    it('supports past dates with right side after leap day', () => {
      var result = differenceInYears(
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
        /* 1380/12/10 */ new Date(2002, 2 /* Mar */, 1, 0, 0)
      )
      assert(result === 1)
    })

    it('supports past dates with right side before leap day', () => {
      var result = differenceInYears(
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
        /* 1380/12/9 */ new Date(2002, 1 /* Feb */, 28, 0, 0)
      )
      assert(result === 2)
    })

    it('supports future dates', () => {
      var result = differenceInYears(
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
        /* 1384/12/10 */ new Date(2006, 2 /* Mar */, 1, 0, 0)
      )
      assert(result === -2)
    })

    it('supports equal dates of same year', () => {
      var result = differenceInYears(
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0),
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0)
      )
      assert(result === 0)
    })

    it('supports equal dates of different years', () => {
      var result = differenceInYears(
        /* 1386/12/10 */ new Date(2008, 1 /* Feb */, 29, 0, 0),
        /* 1382/12/10 */ new Date(2004, 1 /* Feb */, 29, 0, 0)
      )
      assert(result === 4)
    })
  })

  describe('edge cases', function() {
    it('the difference is less than a year, but the given dates are in different calendar years', function() {
      var result = differenceInYears(
        /* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1),
        /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31)
      )
      assert(result === 0)
    })

    it('the same for the swapped dates', function() {
      var result = differenceInYears(
        /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31),
        /* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1)
      )
      assert(result === 0)
    })

    it('the days and months of the given dates are the same', function() {
      var result = differenceInYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5),
        /* 1391/6/15 */ new Date(2012, 8 /* Sep */, 5)
      )
      assert(result === 2)
    })

    it('the given dates are the same', function() {
      var result = differenceInYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0)
      )
      assert(result === 0)
    })

    it('does not return -0 when the given dates are the same', () => {
      function isNegativeZero(x) {
        return x === 0 && 1 / x < 0
      }

      var result = differenceInYears(
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0),
        /* 1393/6/14 */ new Date(2014, 8 /* Sep */, 5, 0, 0)
      )

      var resultIsNegative = isNegativeZero(result)
      assert(resultIsNegative === false)
    })
  })

  it('returns NaN if the first date is `Invalid Date`', function() {
    var result = differenceInYears(
      new Date(NaN),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the second date is `Invalid Date`', function() {
    var result = differenceInYears(
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
      new Date(NaN)
    )
    assert(isNaN(result))
  })

  it('returns NaN if the both dates are `Invalid Date`', function() {
    var result = differenceInYears(new Date(NaN), new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(differenceInYears.bind(null), TypeError)
    assert.throws(differenceInYears.bind(null, 1), TypeError)
  })
})
