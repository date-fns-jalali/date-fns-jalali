// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getOverlappingDaysInIntervals from '.'

describe('getOverlappingDaysInIntervals', function() {
  const initialIntervalStart = /* 1395/8/20 */ new Date(2016, 10, 10, 13, 0, 0)
  const initialIntervalEnd = /* 1395/9/13 */ new Date(2016, 11, 3, 15, 0, 0)

  describe("when the time intervals don't overlap", function() {
    it('returns 0 for a valid non overlapping interval before another interval', function() {
      const earlierIntervalStart = /* 1395/8/4 */ new Date(2016, 9, 25)
      const earlierIntervalEnd = /* 1395/8/19 */ new Date(2016, 10, 9)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: earlierIntervalStart, end: earlierIntervalEnd }
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a valid non overlapping interval after another interval', function() {
      const laterIntervalStart = /* 1395/9/14 */ new Date(2016, 11, 4)
      const laterIntervalEnd = /* 1395/9/19 */ new Date(2016, 11, 9)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: laterIntervalStart, end: laterIntervalEnd }
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for a non overlapping same-day interval', function() {
      const sameDayIntervalStart = /* 1395/9/14 */ new Date(2016, 11, 4, 9, 0, 0)
      const sameDayIntervalEnd = /* 1395/9/14 */ new Date(2016, 11, 4, 18, 0, 0)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: sameDayIntervalStart, end: sameDayIntervalEnd }
      )
      assert(numOverlappingDays === 0)
    })

    it('returns 0 for an interval differing by a few hours', function() {
      const oneDayOverlappingIntervalStart = /* 1395/9/13 */ new Date(2016, 11, 3, 18, 0, 0)
      const oneDayOverlappingIntervalEnd = /* 1395/9/24 */ new Date(2016, 11, 14, 13, 0, 0)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: oneDayOverlappingIntervalStart,
          end: oneDayOverlappingIntervalEnd
        }
      )
      assert(numOverlappingDays === 0)
    })

    it("returns 0 for an interval with the same startDateTime as the initial time intervals's endDateTime", function() {
      const oneDayOverlapIntervalStart = /* 1395/9/13 */ new Date(2016, 11, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = /* 1395/9/24 */ new Date(2016, 11, 14, 13, 0, 0)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }
      )
      assert(numOverlappingDays === 0)
    })

    it("returns 0 for an interval with the same endDateTime as the initial time interval's startDateTime", function() {
      const oneDayOverlapIntervalStart = /* 1395/8/13 */ new Date(2016, 10, 3, 15, 0, 0)
      const oneDayOverlapIntervalEnd = /* 1395/8/20 */ new Date(2016, 10, 10, 13, 0, 0)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }
      )
      assert(numOverlappingDays === 0)
    })
  })

  describe('when the time intervals overlap', function() {
    it('rounds up the result to include each started overlapping day', function() {
      const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14, 9, 0, 0)
      const includedIntervalEnd = /* 1395/8/25 */ new Date(2016, 10, 15, 18, 0, 0)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includedIntervalStart, end: includedIntervalEnd }
      )
      assert(numOverlappingDays === 2)
    })

    it('returns the correct value for an interval included within another interval', function() {
      const includedIntervalStart = /* 1395/8/24 */ new Date(2016, 10, 14)
      const includedIntervalEnd = /* 1395/8/25 */ new Date(2016, 10, 15)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includedIntervalStart, end: includedIntervalEnd }
      )
      assert(numOverlappingDays === 1)
    })

    it('returns the correct value for an interval overlapping at the end', function() {
      const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5)
      const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd }
      )
      assert(numOverlappingDays === 4)
    })

    it('returns the correct value for an interval overlapping at the beginning', function() {
      const startOverlappingIntervalStart = /* 1395/8/30 */ new Date(2016, 10, 20)
      const startOverlappingIntervalEnd = /* 1395/9/24 */ new Date(2016, 11, 14)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        {
          start: startOverlappingIntervalStart,
          end: startOverlappingIntervalEnd
        }
      )
      assert(numOverlappingDays === 14)
    })

    it('returns the correct value for an interval including another interval', function() {
      const includingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5)
      const includingIntervalEnd = /* 1395/9/25 */ new Date(2016, 11, 15)

      const numOverlappingDays = getOverlappingDaysInIntervals(
        { start: initialIntervalStart, end: initialIntervalEnd },
        { start: includingIntervalStart, end: includingIntervalEnd }
      )
      assert(numOverlappingDays === 24)
    })
  })

  it('accepts a timestamp', function() {
    const initialIntervalStart = /* 1395/8/20 */ new Date(2016, 10, 10, 13, 0, 0).getTime()
    const initialIntervalEnd = /* 1395/9/13 */ new Date(2016, 11, 3, 15, 0, 0).getTime()

    const endOverlappingIntervalStart = /* 1395/8/15 */ new Date(2016, 10, 5).getTime()
    const endOverlappingIntervalEnd = /* 1395/8/24 */ new Date(2016, 10, 14).getTime()

    const numOverlappingDays = getOverlappingDaysInIntervals(
      { start: initialIntervalStart, end: initialIntervalEnd },
      { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd }
    )
    assert(numOverlappingDays === 4)
  })

  it('throws an exception if the start date of the initial time interval is after the end date', function() {
    const block = getOverlappingDaysInIntervals.bind(
      null,
      { start: /* 1395/8/17 */ new Date(2016, 10, 7), end: /* 1395/8/13 */ new Date(2016, 10, 3) },
      { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: /* 1395/8/25 */ new Date(2016, 10, 15) }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date of the compared time interval is after the end date', function() {
    const block = getOverlappingDaysInIntervals.bind(
      null,
      { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: /* 1395/8/17 */ new Date(2016, 10, 7) },
      { start: /* 1395/8/25 */ new Date(2016, 10, 15), end: /* 1395/8/15 */ new Date(2016, 10, 5) }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the initial interval is undefined', function() {
    const block = getOverlappingDaysInIntervals.bind(
      null,
      // $ExpectedMistake
      //@ts-expect-error
      undefined,
      { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: /* 1395/8/25 */ new Date(2016, 10, 15) }
    )
    assert.throws(block, RangeError)
  })

  it('throws an exception if the compared interval is undefined', function() {
    const block = getOverlappingDaysInIntervals.bind(
      null,
      { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: /* 1395/8/17 */ new Date(2016, 10, 7) },
      // $ExpectedMistake
      //@ts-expect-error
      undefined
    )
    assert.throws(block, RangeError)
  })

  describe('one of the dates is `Invalid Date`', function() {
    it('throws an exception if the start date of the initial time interval is `Invalid Date`', function() {
      const block = getOverlappingDaysInIntervals.bind(
        null,
        { start: new Date(NaN), end: /* 1395/8/13 */ new Date(2016, 10, 3) },
        { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: /* 1395/8/25 */ new Date(2016, 10, 15) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the initial time interval is `Invalid Date`', function() {
      const block = getOverlappingDaysInIntervals.bind(
        null,
        { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: new Date(NaN) },
        { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: /* 1395/8/25 */ new Date(2016, 10, 15) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the start date of the compared time interval is `Invalid Date`', function() {
      const block = getOverlappingDaysInIntervals.bind(
        null,
        { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: /* 1395/8/17 */ new Date(2016, 10, 7) },
        { start: new Date(NaN), end: /* 1395/8/15 */ new Date(2016, 10, 5) }
      )
      assert.throws(block, RangeError)
    })

    it('throws an exception if the end date of the compared time interval is `Invalid Date`', function() {
      const block = getOverlappingDaysInIntervals.bind(
        null,
        { start: /* 1395/8/13 */ new Date(2016, 10, 3), end: /* 1395/8/17 */ new Date(2016, 10, 7) },
        { start: /* 1395/8/15 */ new Date(2016, 10, 5), end: new Date(NaN) }
      )
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(getOverlappingDaysInIntervals.bind(null), TypeError)
    // $ExpectedMistake
    //@ts-expect-error
    assert.throws(getOverlappingDaysInIntervals.bind(null, 1), TypeError)
  })
})
