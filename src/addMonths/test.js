// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addMonths from '.'
import { getDstTransitions } from '../../test/dst/tzOffsetTransitions'

import coreGetMonth from '../_core/getMonth/index.js'
import coreGetDate from '../_core/getDate/index.js'
import coreGetFullYear from '../_core/getFullYear/index.js'
import newDate from '../_core/newDate/index.js'

describe('addMonths', function() {
  it('adds the given number of months', function() {
    var result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepEqual(result, /* 1393/11/10 */ new Date(2015, 0 /* Jan */, 30))
  })

  it('accepts a timestamp', function() {
    var result = addMonths(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      12
    )
    assert.deepEqual(result, /* 1394/6/10 */ new Date(2015, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', function() {
    var result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 5.75)
    assert.deepEqual(result, /* 1393/11/10 */ new Date(2015, 0 /* Jan */, 30))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), '5')
    assert.deepEqual(result, /* 1393/11/10 */ new Date(2015, 0 /* Jan */, 30))
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    addMonths(date, 12)
    assert.deepEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    var date = /* 1393/10/30 */ new Date(2015, 0 /* Jan */, 20)
    var result = addMonths(date, 2)
    assert.deepEqual(result, /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20))
  })

  it.skip('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(0, 0 /* Jan */, 31)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    var result = addMonths(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addMonths(new Date(NaN), 5)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN)
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addMonths.bind(null), TypeError)
    assert.throws(addMonths.bind(null, 1), TypeError)
  })

  const dstTransitions = getDstTransitions(2017)
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz
  const HOUR = 1000 * 60 * 60
  const override = (base, year, month, day, hour, minute) =>
    newDate(
      year == null ? coreGetFullYear(base) : year,
      month == null ? coreGetMonth(base) : month,
      day == null ? coreGetDate(base) : day,
      hour == null ? base.getHours() : hour,
      minute == null ? base.getMinutes() : minute
    )

  dstOnly(
    `works at DST-start boundary in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = dstTransitions.start
      var result = addMonths(date, 2)
      assert.deepEqual(
        result,
        override(
          date,
          coreGetFullYear(date),
          coreGetMonth(date) + 2,
          coreGetDate(date)
        )
      )
    }
  )

  dstOnly(
    `works at DST-start - 30 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.start.getTime() - 0.5 * HOUR)
      var result = addMonths(date, 2)
      var expected = override(
        date,
        coreGetFullYear(date),
        coreGetMonth(date) + 2
      )
      assert.deepEqual(result, expected)
    }
  )

  dstOnly(
    `works at DST-start - 60 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.start.getTime() - 1 * HOUR)
      var result = addMonths(date, 2)
      var expected = override(
        date,
        coreGetFullYear(date),
        coreGetMonth(date) + 2
      )
      assert.deepEqual(result, expected)
    }
  )

  dstOnly(
    `works at DST-end boundary in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = dstTransitions.end
      var result = addMonths(date, 2)
      assert.deepEqual(
        result,
        override(
          date,
          coreGetFullYear(date) + (coreGetMonth(date) >= 10 ? 1 : 0),
          (coreGetMonth(date) + 2) % 12 // protect against wrap for Nov.
        )
      )
    }
  )

  dstOnly(
    `works at DST-end - 30 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.end.getTime() - 0.5 * HOUR)
      var result = addMonths(date, 2)
      assert.deepEqual(
        result,
        override(
          date,
          coreGetFullYear(date) + (coreGetMonth(date) >= 10 ? 1 : 0),
          (coreGetMonth(date) + 2) % 12 // protect against wrap for Nov.
        )
      )
    }
  )

  dstOnly(
    `works at DST-end - 60 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.end.getTime() - 1 * HOUR)
      var result = addMonths(date, 2)
      assert.deepEqual(
        result,
        override(
          date,
          coreGetFullYear(date) + (coreGetMonth(date) >= 10 ? 1 : 0),
          (coreGetMonth(date) + 2) % 12 // protect against wrap for Nov.
        )
      )
    }
  )

  dstOnly(
    `doesn't mutate if zero increment is used: ${tz || '(unknown)'}`,
    function() {
      var date = new Date(dstTransitions.end)
      var result = addMonths(date, 0)
      assert.deepEqual(result, date)
    }
  )
})
