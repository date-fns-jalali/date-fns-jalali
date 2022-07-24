/* eslint-env mocha */

import assert from 'assert'
import setHours from '.'

describe('setHours', () => {
  it('sets the amount of hours', () => {
    const result = setHours(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30),
      4
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 4, 30)
    )
  })

  it('accepts a timestamp', () => {
    const result = setHours(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11).getTime(),
      5
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 5)
    )
  })

  it('converts a fractional number to an integer', () => {
    const result = setHours(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30),
      4.123
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 4, 30)
    )
  })

  it('implicitly converts number arguments', () => {
    const result = setHours(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30),
      // @ts-expect-error
      '4'
    )
    assert.deepStrictEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 4, 30)
    )
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11)
    setHours(date, 12)
    assert.deepStrictEqual(
      date,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setHours(new Date(NaN), 4)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setHours(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setHours.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setHours.bind(null, 1), TypeError)
  })
})
