// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachWeekendOfYear from '.'
import isWeekend from '../isWeekend'

describe('eachWeekendOfYear', () => {
  it('returns all weekends of the given year', () => {
    var result = eachWeekendOfYear(/* 1398/10/11 */ new Date(2020, 0, 1))
    assert(result.length === 104)
    assert(result.every(isWeekend))
    assert.deepEqual(result[0], /* 1398/1/3 */ new Date(2019, 2, 23))
    assert.deepEqual(result[103], /* 1398/12/25 */ new Date(2020, 2, 15))
  })

  it('throws TypeError exception when no argument is passed in', () => {
    assert.throws(eachWeekendOfYear.bind(null), TypeError)
  })

  it('throws RangeError exception when date is invalid', () => {
    assert.throws(eachWeekendOfYear.bind(null, new Date(NaN)), RangeError)
  })
})
