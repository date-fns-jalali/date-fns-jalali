/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import isThisYear from '.'

describe('isThisYear', () => {
  let clock: sinon.SinonFakeTimers
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1393/7/3 */ new Date(2014, 8 /* Sep */, 25).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  it('returns true if the given date and the current date have the same year', () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2)
    assert(isThisYear(date) === true)
  })

  it('returns false if the given date and the current date have different years', () => {
    const date = /* 1394/4/11 */ new Date(2015, 6 /* Jul */, 2)
    assert(isThisYear(date) === false)
  })

  it('accepts a timestamp', () => {
    const date = /* 1393/4/11 */ new Date(2014, 6 /* Jul */, 2).getTime()
    assert(isThisYear(date) === true)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(isThisYear.bind(null), TypeError)
  })
})
