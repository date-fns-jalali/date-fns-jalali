// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisMonth from '.'

describe('isThisMonth', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same month (and year)', () => {
    const date = /* 1393/7/24 */ new Date(2014, 9 /* Oct */, 16)
    assert(isThisMonth(date) === true)
  })

  it('returns false if the given date and the current date have different months', () => {
    const date = /* 1392/6/9 */ new Date(2013, 7 /* Aug */, 31)
    assert(isThisMonth(date) === false)
  })

  it('accepts a timestamp', () => {
    const date = /* 1393/7/8 */ new Date(2014, 8 /* Sep */, 30).getTime()
    assert(isThisMonth(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(isThisMonth.bind(null), TypeError)
  })
})
