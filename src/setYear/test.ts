/* eslint-env mocha */

import assert from 'assert'
import setYear from '.'

describe('setYear', () => {
  it('sets the year', () => {
    const result = setYear(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 1392)
    assert.deepStrictEqual(
      result,
      /* 1392/6/10 */ new Date(2013, 8 /* Sep */, 1)
    )
  })

  it('accepts a timestamp', () => {
    const result = setYear(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      1395
    )
    assert.deepStrictEqual(
      result,
      /* 1395/6/10 */ new Date(2016, 7 /* Aug */, 31)
    )
  })

  it('converts a fractional number to an integer', () => {
    const result = setYear(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      1392.987654321
    )
    assert.deepStrictEqual(
      result,
      /* 1392/6/10 */ new Date(2013, 8 /* Sep */, 1)
    )
  })

  it('implicitly converts number arguments', () => {
    const result = setYear(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '1392'
    )
    assert.deepStrictEqual(
      result,
      /* 1392/6/10 */ new Date(2013, 8 /* Sep */, 1)
    )
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    setYear(date, 2011)
    assert.deepStrictEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setYear(new Date(NaN), 2013)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setYear(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setYear.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setYear.bind(null, 1), TypeError)
  })
})
