// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import startOfDecade from '.'

describe('startOfDecade', function() {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a year', function() {
    var date = /* 1332/1/24 */ new Date(1953, 3 /* Apr */, 13)
    var result = startOfDecade(date)
    assert.deepEqual(result, /* 1330/1/1 */ new Date(1951, 2 /* Mar */, 22))
  })

  it('accepts a timestamp', function() {
    var date = /* 1363/7/22 */ new Date(1984, 9 /* Oct */, 14).getTime()
    var result = startOfDecade(date)
    assert.deepEqual(result, /* 1360/1/1 */ new Date(1981, 2 /* Mar */, 21))
  })

  it('does not mutate the original date', function() {
    var date = /* 1357/8/23 */ new Date(1978, 10 /* Nov */, 14)
    startOfDecade(date)
    assert.deepEqual(date, /* 1357/8/23 */ new Date(1978, 10 /* Nov */, 14))
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = startOfDecade(new Date(NaN))
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(startOfDecade.bind(null), TypeError)
  })
})
