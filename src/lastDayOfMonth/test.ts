/* eslint-env mocha */

import assert from 'assert'
import lastDayOfMonth from '.'

describe('lastDayOfMonth', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a month', () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    const result = lastDayOfMonth(date)
    assert.deepStrictEqual(
      result,
      /* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22)
    )
  })

  it('accepts a timestamp', () => {
    const date = /* 1393/5/11 */ new Date(
      2014,
      7 /* Aug */,
      2,
      11,
      55,
      0
    ).getTime()
    const result = lastDayOfMonth(date)
    assert.deepStrictEqual(
      result,
      /* 1393/5/31 */ new Date(2014, 7 /* Aug */, 22)
    )
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    lastDayOfMonth(date)
    assert.deepStrictEqual(
      date,
      /* 1393/6/11 */ new Date(2014, 8 /* Sep */, 2, 11, 55, 0)
    )
  })

  describe('edge cases', () => {
    it('works for the Esfand of a leap year', () => {
      const date = /* 1399/12/22 */ new Date(2021, 2 /* Mar */, 12, 11, 55, 0)
      const result = lastDayOfMonth(date)
      assert.deepStrictEqual(
        result,
        /* 1399/12/30 */ new Date(2021, 2 /* Mar */, 20)
      )
    })

    it('works for the Esfand of a non-leap year', () => {
      const date = /* 1398/12/22 */ new Date(2020, 2 /* Mar */, 12, 11, 55, 0)
      const result = lastDayOfMonth(date)
      assert.deepStrictEqual(
        result,
        /* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19)
      )
    })
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = lastDayOfMonth(new Date(NaN))
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(lastDayOfMonth.bind(null), TypeError)
  })
})
