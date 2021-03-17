// @flow
/* eslint-env mocha */

import assert from 'assert'
import addBusinessDays from '.'

describe('addBusinessDays', function() {
  it('adds the given number of business days', function() {
    const result = addBusinessDays(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 10)
    assert.deepStrictEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('handles negative amount', function() {
    const result = addBusinessDays(/* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15), -10)
    assert.deepStrictEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('returns the Monday when 1 day is added on the Friday', () => {
    assert.deepStrictEqual(
      addBusinessDays(/* 1398/10/20 */ new Date(2020, 0 /* Jan */, 10), 1), // Friday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13)
    )
  })

  it('returns the Monday when 1 day is added on the Satuday', () => {
    assert.deepStrictEqual(
      addBusinessDays(/* 1398/10/21 */ new Date(2020, 0 /* Jan */, 11), 1), // Saturday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13)
    )
  })

  it('returns the Monday when 1 day is added on the Sunday', () => {
    assert.deepStrictEqual(
      addBusinessDays(/* 1398/10/22 */ new Date(2020, 0 /* Jan */, 12), 1), // Sunday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13)
    )
  })

  it('can handle a large number of business days', function() {
    // @ts-ignore
    if (typeof this.timeout === 'function') {
      // @ts-ignore
      this.timeout(500 /* 500 ms test timeout */)
    }

    const result = addBusinessDays(/* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1), 3387885)
    assert.deepStrictEqual(result, /* 14378/10/12 */ new Date(15000, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function() {
    const result = addBusinessDays(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(), 10)
    assert.deepStrictEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('converts a fractional number to an integer', function() {
    const result = addBusinessDays(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 10.5)
    assert.deepStrictEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = addBusinessDays(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), '10')
    assert.deepStrictEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('does not mutate the original date', function() {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    addBusinessDays(date, 11)
    assert.deepStrictEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addBusinessDays(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result.getTime()))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(addBusinessDays.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addBusinessDays.bind(null, 1), TypeError)
  })
  it('starting from a weekend day should land on a weekday when reducing a divisible by 5', function() {
    const substractResult = addBusinessDays(/* 1398/5/27 */ new Date(2019, 7, 18), -5)
    assert.deepStrictEqual(substractResult, /* 1398/5/21 */ new Date(2019, 7, 12))

    const addResult = addBusinessDays(/* 1398/5/27 */ new Date(2019, 7, 18), 5)
    assert.deepStrictEqual(addResult, /* 1398/6/1 */ new Date(2019, 7, 23))
  })
})
