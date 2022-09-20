/* eslint-env mocha */

import assert from 'assert'
import isExists from '.'

describe('isValid', () => {
  it('returns true if the given date is valid', () => {
    const result = isExists(1399, 0, 31)
    assert(result === true)
  })

  it('returns false if the given date is invalid', () => {
    const result = isExists(1399, 10 /* Azar */, 31)
    assert(result === false)
  })

  it('throws TypeError exception if passed less than 3 arguments', () => {
    // @ts-expect-error
    assert.throws(isExists.bind(null), TypeError)
  })
})
