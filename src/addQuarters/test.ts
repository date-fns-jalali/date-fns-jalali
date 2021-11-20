// @flow
/* eslint-env mocha */

import assert from 'assert'
import addQuarters from '.'

describe('addQuarters', function () {
  it('adds the given number of quarters', function () {
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      1
    )
    assert.deepStrictEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1)
    )
  })

  it('accepts a timestamp', function () {
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      4
    )
    assert.deepStrictEqual(
      result,
      /* 1394/6/10 */ new Date(2015, 8 /* Sep */, 1)
    )
  })

  it('converts a fractional number to an integer', function () {
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      1.91
    )
    assert.deepStrictEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1)
    )
  })

  it('implicitly converts number arguments', function () {
    // @ts-expect-error
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      '1'
    )
    assert.deepStrictEqual(
      result,
      /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1)
    )
  })

  it('does not mutate the original date', function () {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    addQuarters(date, 4)
    assert.deepStrictEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function () {
    const date = /* 1393/3/31 */ new Date(2014, 5 /* Jun */, 21)
    const result = addQuarters(date, 3)
    assert.deepStrictEqual(
      result,
      /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20)
    )
  })

  it.skip('handles dates before 100 AD', function () {
    const initialDate = new Date(0)
    initialDate.setFullYear(-1, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = addQuarters(initialDate, 1)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = addQuarters(new Date(NaN), 1)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    const result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN
    )
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(addQuarters.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addQuarters.bind(null, 1), TypeError)
  })
})
