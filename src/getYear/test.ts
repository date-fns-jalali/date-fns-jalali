/* eslint-env mocha */

import assert from 'assert'
import getYear from '.'

describe('getYear', () => {
  it('returns the year of the given date', () => {
    const result = getYear(/* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2))
    assert(result === 2014)
  })

  it('accepts a timestamp', () => {
    const result = getYear(
      /* 1379/1/14 */ new Date(2000, 3 /* Apr */, 2).getTime()
    )
    assert(result === 2000)
  })

  it('returns NaN if the given date is invalid', () => {
    const result = getYear(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(getYear.bind(null), TypeError)
  })
})
