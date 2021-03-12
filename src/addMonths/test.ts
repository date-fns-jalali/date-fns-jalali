// @flow
/* eslint-env mocha */

import assert from 'assert'
import addMonths from '.'
import { getDstTransitions } from '../../test/dst/tzOffsetTransitions'

import coreGetMonth from '../_core/getMonth/index'
import coreGetDate from '../_core/getDate/index'
import coreGetFullYear from '../_core/getFullYear/index'
import newDate from '../_core/newDate/index'

describe('addMonths', function() {
  it('adds the given number of months', function() {
    const result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 5)
    assert.deepStrictEqual(result, /* 1393/11/10 */ new Date(2015, 0 /* Jan */, 30))
  })

  it('accepts a timestamp', function() {
    const result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(), 12)
    assert.deepStrictEqual(result, /* 1394/6/10 */ new Date(2015, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', function() {
    const result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 5.75)
    assert.deepStrictEqual(result, /* 1393/11/10 */ new Date(2015, 0 /* Jan */, 30))
  })

  it('implicitly converts number arguments', function() {
    // @ts-expect-error
    const result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), '5')
    assert.deepStrictEqual(result, /* 1393/11/10 */ new Date(2015, 0 /* Jan */, 30))
  })

  it('does not mutate the original date', function() {
    const date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    addMonths(date, 12)
    assert.deepStrictEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    const date = /* 1393/10/30 */ new Date(2015, 0 /* Jan */, 20)
    const result = addMonths(date, 2)
    assert.deepStrictEqual(result, /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20))
  })

  it.skip('handles dates before 100 AD', function() {
    const initialDate = new Date(0)
    initialDate.setFullYear(0, 0 /* Jan */, 31)
    initialDate.setHours(0, 0, 0, 0)
    const expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    const result = addMonths(initialDate, 1)
    assert.deepStrictEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    const result = addMonths(new Date(NaN), 5)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    const result = addMonths(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), NaN)
    // @ts-expect-error
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    // @ts-expect-error
    assert.throws(addMonths.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(addMonths.bind(null, 1), TypeError)
  })

  const dstTransitions = getDstTransitions(2017)
  const dstOnly = dstTransitions.start && dstTransitions.end ? it : it.skip
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz
  const HOUR = 1000 * 60 * 60
  const override = (
    base: Date,
    year = coreGetFullYear(base),
    month = coreGetMonth(base),
    day = coreGetDate(base),
    hour = base.getHours(),
    minute = base.getMinutes()
  ) => newDate(year, month, day, hour, minute)

  dstOnly(
    `works at DST-start boundary in local timezone: ${tz || '(unknown)'}`,
    function() {
      const date = dstTransitions.start
      const result = addMonths(date!, 2)
      assert.deepStrictEqual(
        result,
        override(date!, coreGetFullYear(date!), coreGetMonth(date!) + 2)
      )
    }
  )

  dstOnly(
    `works at DST-start - 30 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      const date = new Date(dstTransitions.start!.getTime() - 0.5 * HOUR)
      const result = addMonths(date, 2)
      const expected = override(date, coreGetFullYear(date), coreGetMonth(date) + 2)
      assert.deepStrictEqual(result, expected)
    }
  )

  dstOnly(
    `works at DST-start - 60 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      const date = new Date(dstTransitions.start!.getTime() - 1 * HOUR)
      const result = addMonths(date, 2)
      const expected = override(date, coreGetFullYear(date), coreGetMonth(date) + 2)
      assert.deepStrictEqual(result, expected)
    }
  )

  dstOnly(
    `works at DST-end boundary in local timezone: ${tz || '(unknown)'}`,
    function() {
      const date = dstTransitions.end
      const result = addMonths(date!, 2)
      assert.deepStrictEqual(
        result,
        override(
          date!,
          coreGetFullYear(date!) + (coreGetMonth(date!) >= 10 ? 1 : 0),
          (coreGetMonth(date!) + 2) % 12 // protect against wrap for Nov.
        )
      )
    }
  )

  dstOnly(
    `works at DST-end - 30 mins in local timezone: ${tz || '(unknown)'}`,
    function() {
      const date = new Date(dstTransitions.end!.getTime() - 0.5 * HOUR)
      const result = addMonths(date, 2)
      assert.deepStrictEqual(
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
      const date = new Date(dstTransitions.end!.getTime() - 1 * HOUR)
      const result = addMonths(date, 2)
      assert.deepStrictEqual(
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
      const date = new Date(dstTransitions.end!)
      const result = addMonths(date, 0)
      assert.deepStrictEqual(result, date)
    }
  )
})
