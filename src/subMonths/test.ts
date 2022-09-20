/* eslint-env mocha */

import assert from 'assert'
import subMonths from '.'

describe('subMonths', () => {
  it('subtracts the given number of months', () => {
    const result = subMonths(/* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1), 5)
    assert.deepStrictEqual(
      result,
      /* 1393/6/12 */ new Date(2014, 8 /* Sep */, 3)
    )
  })

  it('accepts a timestamp', () => {
    const result = subMonths(
      /* 1394/6/10 */ new Date(2015, 8 /* Sep */, 1).getTime(),
      12
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    )
  })

  it('converts a fractional number to an integer', () => {
    const result = subMonths(
      /* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1),
      5.999
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/12 */ new Date(2014, 8 /* Sep */, 3)
    )
  })

  it('implicitly converts number arguments', () => {
    const result = subMonths(
      /* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1),
      // @ts-expect-error
      '5'
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/12 */ new Date(2014, 8 /* Sep */, 3)
    )
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    subMonths(date, 12)
    assert.deepStrictEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', () => {
    const date = /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31)
    const result = subMonths(date, 3)
    assert.deepStrictEqual(
      result,
      /* 1393/7/10 */ new Date(2014, 9 /* Oct */, 2)
    )
  })

  it.skip('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setFullYear(1, 2 /* Mar */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(1, 1 /* Feb */, 28)
    expectedResult.setHours(0, 0, 0, 0)
    const result = subMonths(initialDate, 1)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = subMonths(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = subMonths(
      /* 1393/11/12 */ new Date(2015, 1 /* Feb */, 1),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(subMonths.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(subMonths.bind(null, 1), TypeError)
  })
})
