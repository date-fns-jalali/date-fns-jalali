/* eslint-env mocha */

import assert from 'assert'
import setDate from '.'

describe('setDate', () => {
  it('sets the day of the month', () => {
    const result = setDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 30)
    assert.deepStrictEqual(
      result,
      /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21)
    )
  })

  it('accepts a timestamp', () => {
    const result = setDate(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      25
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/25 */ new Date(2014, 8 /* Sep */, 16)
    )
  })

  it('converts a fractional number to an integer', () => {
    const result = setDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 30.3)
    assert.deepStrictEqual(
      result,
      /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21)
    )
  })

  it('implicitly converts number arguments', () => {
    const result = setDate(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      // @ts-expect-error
      '30'
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/30 */ new Date(2014, 8 /* Sep */, 21)
    )
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    setDate(date, 20)
    assert.deepStrictEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setDate(new Date(NaN), 30)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setDate(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setDate.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setDate.bind(null, 1), TypeError)
  })
})
