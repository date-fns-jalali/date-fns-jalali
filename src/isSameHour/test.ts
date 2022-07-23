/* eslint-env mocha */

import assert from 'assert'
import isSameHour from '.'

describe('isSameHour', () => {
  it('returns true if the given dates have the same hour', () => {
    const result = isSameHour(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 0),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 30)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different hours', () => {
    const result = isSameHour(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 6, 0),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 5, 0)
    )
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isSameHour(
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 18, 0).getTime(),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 18, 45).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', () => {
    const result = isSameHour(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', () => {
    const result = isSameHour(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', () => {
    const result = isSameHour(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(isSameHour.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(isSameHour.bind(null, 1), TypeError)
  })
})
