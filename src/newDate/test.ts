// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import newDate from '.'

describe('newDate', function () {
  it('create a date', function () {
    const result = newDate(2014, 8 /* Sep */, 30)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30))
  })
  it('create a date with time', function () {
    const result = newDate(2014, 8 /* Sep */, 30, 20, 40)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 30, 20, 40))
  })
})
