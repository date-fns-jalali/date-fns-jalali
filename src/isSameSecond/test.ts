/* eslint-env mocha */

import assert from 'assert'
import isSameSecond from '.'

describe('isSameSecond', () => {
  it('returns true if the given dates have the same second', () => {
    const result = isSameSecond(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 30, 15),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different seconds', () => {
    const result = isSameSecond(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 30, 59)
    )
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isSameSecond(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameSecond(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameSecond(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameSecond(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(isSameSecond.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(isSameSecond.bind(null, 1), TypeError)
  })
})
