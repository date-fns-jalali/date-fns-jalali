// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setQuarter from '.'

describe('setQuarter', function () {
  it('sets the quarter of the year', function () {
    const result = setQuarter(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2), 1)
    assert.deepEqual(result, /* 1393/1/11 */ new Date(2014, 2 /* Mar */, 31))
  })

  it('sets the last day of the month if the original date was the last day of a longer month', function () {
    const result = setQuarter(
      /* 1393/5/31 */ new Date(2014, 7 /* Aug */, 22),
      3
    )
    assert.deepEqual(result, /* 1393/8/30 */ new Date(2014, 10 /* Nov */, 21))
  })

  it('accepts a timestamp', function () {
    const result = setQuarter(
      /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1).getTime(),
      4
    )
    assert.deepEqual(result, /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31))
  })

  it('converts a fractional number to an integer', function () {
    const result = setQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      1.951
    )
    assert.deepEqual(result, /* 1393/1/11 */ new Date(2014, 2 /* Mar */, 31))
  })

  it('implicitly converts number arguments', function () {
    // @ts-expect-error
    const result = setQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      '1'
    )
    assert.deepEqual(result, /* 1393/1/11 */ new Date(2014, 2 /* Mar */, 31))
  })

  it('does not mutate the original date', function () {
    const date = /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1)
    setQuarter(date, 2)
    assert.deepEqual(date, /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1))
  })

  it.skip('handles dates before 100 AD', function () {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = setQuarter(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = setQuarter(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    const result = setQuarter(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setQuarter.bind(null), TypeError)
    assert.throws(setQuarter.bind(null, 1), TypeError)
  })
})
