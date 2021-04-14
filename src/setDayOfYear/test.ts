// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setDayOfYear from '.'

describe('setDayOfYear', function () {
  it('sets the day of the year', function () {
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      2
    )
    assert.deepEqual(result, /* 1393/1/2 */ new Date(2014, 2 /* Mar */, 22))
  })

  it('accepts a timestamp', function () {
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime(),
      60
    )
    assert.deepEqual(result, /* 1393/2/29 */ new Date(2014, 4 /* May */, 19))
  })

  it('converts a fractional number to an integer', function () {
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      2.75
    )
    assert.deepEqual(result, /* 1393/1/2 */ new Date(2014, 2 /* Mar */, 22))
  })

  it('implicitly converts number arguments', function () {
    // $ExpectedMistake
    // @ts-expect-error
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      '2'
    )
    assert.deepEqual(result, /* 1393/1/2 */ new Date(2014, 2 /* Mar */, 22))
  })

  it('does not mutate the original date', function () {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2)
    setDayOfYear(date, 365)
    assert.deepEqual(date, /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2))
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    const result = setDayOfYear(new Date(NaN), 2)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function () {
    const result = setDayOfYear(
      /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(setDayOfYear.bind(null), TypeError)
    assert.throws(setDayOfYear.bind(null, 1), TypeError)
  })
})
