// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import isFuture from '.'

describe('isFuture', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is in the future', () => {
    const result = isFuture(/* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31))
    assert(result === true)
  })

  it('returns false if the given date is in the past', () => {
    const result = isFuture(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
    assert(result === false)
  })

  it('returns false if the given date is now', () => {
    const result = isFuture(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isFuture(
      /* 1393/8/9 */ new Date(2014, 9 /* Oct */, 31).getTime()
    )
    assert(result === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(isFuture.bind(null), TypeError)
  })
})
