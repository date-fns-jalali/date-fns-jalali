/* eslint-env mocha */

import assert from 'assert'
import startOfQuarter from '.'

describe('startOfQuarter', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a quarter', () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = startOfQuarter(date)
    assert.deepStrictEqual(
      result,
      /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1)
    )
  })

  it('accepts a timestamp', () => {
    const date = /* 1393/6/11 */ new Date(
      2014,
      8 /* Sep */,
      2,
      11,
      55,
      0
    ).getTime()
    const result = startOfQuarter(date)
    assert.deepStrictEqual(
      result,
      /* 1393/4/10 */ new Date(2014, 6 /* Jul */, 1)
    )
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    startOfQuarter(date)
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = startOfQuarter(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(startOfQuarter.bind(null), TypeError)
  })
})
