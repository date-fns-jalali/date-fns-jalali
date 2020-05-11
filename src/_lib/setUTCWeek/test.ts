/* eslint-env mocha */

import assert from 'assert'
import setUTCWeek from '.'

describe('setUTCWeek', () => {
  it('sets the local week', () => {
    const result = setUTCWeek(
      new Date(/* 1383/10/13 */ Date.UTC(2005, 0 /* Jan */, 2)),
      1
    )
    assert.deepStrictEqual(
      result,
      new Date(/* 1383/1/2 */ Date.UTC(2004, 2 /* Mar */, 21))
    )
  })

  it('accepts a timestamp', () => {
    const result = setUTCWeek(
      /* 1388/9/11 */ Date.UTC(2009, 11 /* Dec */, 2),
      1
    )
    assert.deepStrictEqual(
      result,
      new Date(/* 1388/1/5 */ Date.UTC(2009, 2 /* Mar */, 25))
    )
  })

  it('converts a fractional number to an integer', () => {
    const result = setUTCWeek(
      new Date(/* 1383/10/13 */ Date.UTC(2005, 0 /* Jan */, 2)),
      1.1
    )
    assert.deepStrictEqual(
      result,
      new Date(/* 1383/1/2 */ Date.UTC(2004, 2 /* Mar */, 21))
    )
  })

  it('implicitly converts number arguments', () => {
    const result = setUTCWeek(
      new Date(/* 1383/5/17 */ Date.UTC(2004, 7 /* Aug */, 7)),
      // @ts-expect-error
      '53'
    )
    assert.deepStrictEqual(
      result,
      new Date(/* 1383/12/29 */ Date.UTC(2005, 2 /* Mar */, 19))
    )
  })

  it('does not mutate the original date', () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2)
    setUTCWeek(date, 52)
    assert.deepStrictEqual(date, /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2))
  })

  it.skip('handles dates before 100 AD', () => {
    const initialDate = new Date(0)
    initialDate.setUTCFullYear(4, 0 /* Jan */, 4)
    initialDate.setUTCHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setUTCFullYear(4, 11 /* Dec */, 19)
    expectedResult.setUTCHours(0, 0, 0, 0)
    const result = setUTCWeek(initialDate, 52)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = setUTCWeek(new Date(NaN), 53)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = setUTCWeek(
      /* 1383/5/17 */ new Date(2004, 7 /* Aug */, 7),
      NaN
    )
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale', () => {
    const date = new Date(/* 1383/10/13 */ Date.UTC(2005, 0 /* Jan */, 2))
    const result = setUTCWeek(date, 1, {
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 1, firstWeekContainsDate: 4 },
      },
    })
    assert.deepStrictEqual(
      result,
      new Date(/* 1383/1/9 */ Date.UTC(2004, 2 /* Mar */, 28))
    )
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', () => {
    const date = new Date(/* 1383/10/13 */ Date.UTC(2005, 0 /* Jan */, 2))
    const result = setUTCWeek(date, 1, {
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      // @ts-expect-error
      locale: {
        options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
      },
    })
    assert.deepStrictEqual(
      result,
      new Date(/* 1383/1/9 */ Date.UTC(2004, 2 /* Mar */, 28))
    )
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', () => {
    const block = () =>
      setUTCWeek(/* 1383/5/17 */ new Date(2004, 7 /* Aug */, 7), 53, {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', () => {
    const block = () =>
      setUTCWeek(/* 1383/5/17 */ new Date(2004, 7 /* Aug */, 7), 53, {
        // @ts-expect-error
        firstWeekContainsDate: NaN,
      })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', () => {
    // @ts-expect-error
    assert.throws(setUTCWeek.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(setUTCWeek.bind(null, 1), TypeError)
  })
})
