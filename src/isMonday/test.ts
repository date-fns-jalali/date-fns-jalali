/* eslint-env mocha */

import assert from 'assert'
import isMonday from '.'

describe('isMonday', () => {
  it('returns true if the given date is Monday', () => {
    const result = isMonday(/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22))
    assert(result === true)
  })

  it('returns false if the given date is not Monday', () => {
    const result = isMonday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isMonday(
      /* 1392/11/21 */ new Date(2014, 1 /* Feb */, 10).getTime()
    )
    assert(result === true)
  })

  it('returns false if the given date is `Invalid Date`', () => {
    const result = isMonday(new Date(NaN))
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(isMonday.bind(null), TypeError)
  })
})
