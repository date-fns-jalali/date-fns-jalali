/* eslint-env mocha */

import assert from 'assert'
import getMonth from '.'

describe('getMonth', () => {
  it('returns the month of the given date', () => {
    const result = getMonth(/* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29))
    assert(result === 1)
  })

  it('accepts a timestamp', () => {
    const result = getMonth(
      /* 1393/1/13 */ new Date(2014, 3 /* Apr */, 2).getTime()
    )
    assert(result === 3)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getMonth.bind(null), TypeError)
  })
})
