// @flow
/* eslint-env mocha */

import assert from 'assert'
import eachWeekendOfMonth from '.'

describe('eachWeekendOfMonth', () => {
  it('returns all weekends of the given month', () => {
    var result = eachWeekendOfMonth(/* 1400/11/20 */ new Date(2022, 1, 9))
    assert.deepStrictEqual(result, [
      /* 1400/11/2 */ new Date(2022, 0, 22),
      /* 1400/11/3 */ new Date(2022, 0, 23),
      /* 1400/11/9 */ new Date(2022, 0, 29),
      /* 1400/11/10 */ new Date(2022, 0, 30),
      /* 1400/11/16 */ new Date(2022, 1, 5),
      /* 1400/11/17 */ new Date(2022, 1, 6),
      /* 1400/11/23 */ new Date(2022, 1, 12),
      /* 1400/11/24 */ new Date(2022, 1, 13),
      /* 1400/11/30 */ new Date(2022, 1, 19)
    ])
  })

  it('throws TypeError exception when passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(eachWeekendOfMonth.bind(null), TypeError)
  })

  it('throws RangeError when the expected year is an invalid date', () => {
    // @ts-expect-error
    assert.throws(eachWeekendOfMonth.bind(1, NaN), RangeError)
  })
})
