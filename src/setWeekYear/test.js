// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setWeekYear from '.'

describe('setWeekYear', function() {
  it('sets the local week-numbering year, saving the week and the day of the week', function() {
    var result = setWeekYear(
      /* 1388/1/2 */ new Date(2009, 2 /* Mar */, 22),
      1382
    )
    assert.deepEqual(result, /* 1381/12/25 */ new Date(2003, 2 /* Mar */, 16))
  })

  it('accepts a timestamp', function() {
    var result = setWeekYear(
      /* 1387/12/29 */ new Date(2009, 2 /* Mar */, 19).getTime(),
      1380
    )
    assert.deepEqual(result, /* 1381/1/1 */ new Date(2002, 2 /* Mar */, 21))
  })

  it('converts a fractional number to an integer', function() {
    var result = setWeekYear(
      /* 1388/1/2 */ new Date(2009, 2 /* Mar */, 22),
      1382.2004
    )
    assert.deepEqual(result, /* 1381/12/25 */ new Date(2003, 2 /* Mar */, 16))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = setWeekYear(
      /* 1388/1/2 */ new Date(2009, 2 /* Mar */, 22),
      '1382'
    )
    assert.deepEqual(result, /* 1381/12/25 */ new Date(2003, 2 /* Mar */, 16))
  })

  it('does not mutate the original date', function() {
    var date = /* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29)
    setWeekYear(date, 2000)
    assert.deepEqual(date, /* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29))
  })

  it.skip('sets local week-numbering years less than 100', function() {
    var initialDate = /* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    var result = setWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it.skip('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(8, 11 /* Dec */, 29)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(7, 0 /* Jan */, 1)
    expectedResult.setHours(0, 0, 0, 0)
    var result = setWeekYear(initialDate, 7)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setWeekYear(new Date(NaN), 2007)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setWeekYear(
      /* 1387/10/9 */ new Date(2008, 11 /* Dec */, 29),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', function() {
    var date = /* 1388/1/6 */ new Date(2009, 2 /* Mar */, 26)
    var result = setWeekYear(date, 1382, {
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 }
      }
    })
    assert.deepEqual(result, /* 1382/1/7 */ new Date(2003, 2 /* Mar */, 27))
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var date = /* 1388/1/6 */ new Date(2009, 2 /* Mar */, 26)
    var result = setWeekYear(date, 1382, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // $ExpectedMistake
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 }
      }
    })
    assert.deepEqual(result, /* 1382/1/7 */ new Date(2003, 2 /* Mar */, 27))
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    // $ExpectedMistake
    var block = setWeekYear.bind(
      null,
      /* 1383/5/17 */ new Date(2004, 7 /* Aug */, 7),
      2018,
      {
        weekStartsOn: NaN
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function() {
    // $ExpectedMistake
    var block = setWeekYear.bind(
      null,
      /* 1383/5/17 */ new Date(2004, 7 /* Aug */, 7),
      2018,
      {
        firstWeekContainsDate: NaN
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setWeekYear.bind(null), TypeError)
    assert.throws(setWeekYear.bind(null, 1), TypeError)
  })
})
