// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachWeekendOfInterval from '.'

describe('eachWeekendOfInterval', function() {
  it('returns all weekends within the interval', function() {
    var result = eachWeekendOfInterval({
      start: /* 1397/6/26 */ new Date(2018, 8 /* Sep */, 17),
      end: /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30)
    })
    assert.deepEqual(result, [
      /* 1397/6/31 */ new Date(2018, 8 /* Sep */, 22),
      /* 1397/7/1 */ new Date(2018, 8 /* Sep */, 23),
      /* 1397/7/7 */ new Date(2018, 8 /* Sep */, 29),
      /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30)
    ])
  })

  it('returns all weekends within the interval when starting on a weekend', function() {
    var result = eachWeekendOfInterval({
      start: /* 1397/6/31 */ new Date(2018, 8 /* Sep */, 22),
      end: /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30)
    })
    assert.deepEqual(result, [
      /* 1397/6/31 */ new Date(2018, 8 /* Sep */, 22),
      /* 1397/7/1 */ new Date(2018, 8 /* Sep */, 23),
      /* 1397/7/7 */ new Date(2018, 8 /* Sep */, 29),
      /* 1397/7/8 */ new Date(2018, 8 /* Sep */, 30)
    ])
  })

  it('throws `RangeError` invalid interval start date is used', function() {
    // $ExpectedMistake
    var block = eachWeekendOfInterval.bind(null, {
      start: new Date(NaN),
      end: /* 1398/10/10 */ new Date(2019, 11 /* Dec */, 31)
    })
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` invalid interval end date is used', function() {
    // $ExpectedMistake
    var block = eachWeekendOfInterval.bind(null, {
      start: /* 1397/10/11 */ new Date(2019, 0 /* Jan */, 1),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(eachWeekendOfInterval, TypeError)
  })

  it('throws `RangeError` if start of an interval is after its end', function() {
    var block = eachWeekendOfInterval.bind(
      null,
      // $ExpectedMistake
      {
        start: /* 1397/7/3 */ new Date(2018, 8 /* Sep */, 25),
        end: /* 1397/6/15 */ new Date(2018, 8 /* Sep */, 6)
      }
    )
    assert.throws(block, RangeError)
  })
})
