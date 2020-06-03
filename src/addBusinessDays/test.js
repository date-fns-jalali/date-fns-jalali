// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addBusinessDays from '.'

describe('addBusinessDays', function() {
  it('adds the given number of business days', function() {
    var result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      10
    )
    assert.deepEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('handles negative amount', function() {
    var result = addBusinessDays(
      /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15),
      -10
    )
    assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('returns the Monday when 1 day is added on the Friday', () => {
    assert.deepEqual(
      addBusinessDays(/* 1398/10/20 */ new Date(2020, 0 /* Jan */, 10), 1), // Friday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13)
    )
  })

  it('returns the Monday when 1 day is added on the Satuday', () => {
    assert.deepEqual(
      addBusinessDays(/* 1398/10/21 */ new Date(2020, 0 /* Jan */, 11), 1), // Saturday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13)
    )
  })

  it('returns the Monday when 1 day is added on the Sunday', () => {
    assert.deepEqual(
      addBusinessDays(/* 1398/10/22 */ new Date(2020, 0 /* Jan */, 12), 1), // Sunday
      // Monday
      /* 1398/10/23 */ new Date(2020, 0 /* Jan */, 13)
    )
  })

  it('can handle a large number of business days', function() {
    if (typeof this.timeout === 'function') {
      this.timeout(500 /* 500 ms test timeout */)
    }

    var result = addBusinessDays(
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      3387885
    )
    assert.deepEqual(result, /* 14378/10/12 */ new Date(15000, 0 /* Jan */, 1))
  })

  it('accepts a timestamp', function() {
    var result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      10
    )
    assert.deepEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('converts a fractional number to an integer', function() {
    var result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      10.5
    )
    assert.deepEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      '10'
    )
    assert.deepEqual(result, /* 1393/6/24 */ new Date(2014, 8 /* Sep */, 15))
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    addBusinessDays(date, 11)
    assert.deepEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addBusinessDays(new Date(NaN), 10)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addBusinessDays(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addBusinessDays.bind(null), TypeError)
    assert.throws(addBusinessDays.bind(null, 1), TypeError)
  })
})
