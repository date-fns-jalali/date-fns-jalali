// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachWeekendOfMonth from '.'

describe('eachWeekendOfMonth', () => {
  it('returns all weekends of the given month', () => {
    var result = eachWeekendOfMonth(/* 1400/12/1 */ new Date(2022, 1, 20))
    assert.deepEqual(result, [
      /* 1400/11/16 */ new Date(2022, 1, 5),
      /* 1400/11/17 */ new Date(2022, 1, 6),
      /* 1400/11/23 */ new Date(2022, 1, 12),
      /* 1400/11/24 */ new Date(2022, 1, 13),
      /* 1400/11/30 */ new Date(2022, 1, 19),
      /* 1400/12/1 */ new Date(2022, 1, 20),
      /* 1400/12/7 */ new Date(2022, 1, 26),
      /* 1400/12/8 */ new Date(2022, 1, 27)
    ])
  })

  it('throws TypeError exception when passed less than 1 argument', () => {
    assert.throws(eachWeekendOfMonth.bind(null), TypeError)
  })

  it('throws RangeError when the expected year is an invalid date', () => {
    assert.throws(eachWeekendOfMonth.bind(1, NaN), RangeError)
  })
})
