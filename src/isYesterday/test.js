// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isYesterday from '.'

describe('isYesterday', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Aug */, 25).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date is yesterday', () => {
    const result = isYesterday(/* 1393/7/2 */ new Date(2014, 8 /* Sep */, 24))
    assert(result === true)
  })

  it('returns false if the given date is not yesterday', () => {
    const result = isYesterday(/* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25))
    assert(result === false)
  })

  it('accepts a timestamp', () => {
    const result = isYesterday(
      /* 1393/7/2 */ new Date(2014, 8 /* Sep */, 24).getTime()
    )
    assert(result === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(isYesterday.bind(null), TypeError)
  })
})
