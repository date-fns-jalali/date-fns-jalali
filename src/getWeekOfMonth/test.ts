/* eslint-env mocha */

import assert from 'assert'
import getWeekOfMonth from '.'

describe('getWeekOfMonth', function () {
  it('returns the week of the month of the given date', function () {
    const result = getWeekOfMonth(
      /* 1396/8/24 */ new Date(2017, 10 /* Nov */, 15)
    )
    assert(result === 4)
  })

  describe('edge cases', function () {
    describe('when the given day is the first of a month', function () {
      it('returns the week of the month of the given date', function () {
        const result = getWeekOfMonth(
          /* 1396/8/1 */ new Date(2017, 9 /* Oct */, 23)
        )
        assert(result === 1)
      })
    })

    describe('when the given day is the last of a month #1', function () {
      it('returns the week of the month of the given date', function () {
        const result = getWeekOfMonth(
          /* 1396/10/30 */ new Date(2018, 0 /* Jan */, 20)
        )
        assert(result === 6)
      })
    })

    describe('when the given day is the last of a month #2', function () {
      it('returns the week of the month of the given date', function () {
        const result = getWeekOfMonth(
          /* 1396/6/31 */ new Date(2017, 8 /* Sep */, 22)
        )
        assert(result === 5)
      })
    })
  })

  it('allows to specify which day is the first day of the week', function () {
    const result = getWeekOfMonth(
      /* 1396/7/1 */ new Date(2017, 8 /* Sep */, 23),
      {
        weekStartsOn: 1,
      }
    )
    assert(result === 1)
  })

  it('allows to specify which day is the first day of the week in locale', function () {
    const result = getWeekOfMonth(
      /* 1396/7/30 */ new Date(2017, 9 /* Oct */, 22),
      {
        // @ts-expect-error
        locale: {
          options: { weekStartsOn: 6 },
        },
      }
    )
    assert(result === 5)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function () {
    const result = getWeekOfMonth(
      /* 1396/7/30 */ new Date(2017, 9 /* Oct */, 22),
      {
        weekStartsOn: 6,
        // @ts-expect-error
        locale: {
          options: { weekStartsOn: 0 },
        },
      }
    )
    assert(result === 5)
  })

  it('accepts a timestamp', function () {
    const result = getWeekOfMonth(
      /* 1396/8/1 */ new Date(2017, 9 /* Oct */, 23).getTime()
    )
    assert(result === 1)
  })

  it('throws RangeError exception if `weekStartsOn` is out of bound', function () {
    assert.throws(
      // @ts-expect-error
      getWeekOfMonth.bind(
        null,
        /* 1398/2/15 */ new Date(2019, 4 /* May */, 5),
        {
          weekStartsOn: 7,
        }
      ),
      RangeError
    )
  })

  it('returns NaN if the given date is invalid', function () {
    const result = getWeekOfMonth(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function () {
    // @ts-expect-error
    assert.throws(getWeekOfMonth.bind(null), TypeError)
  })

  it('throws RangeError exception weekStartsOn is NaN', function () {
    try {
      getWeekOfMonth(/* 1396/8/10 */ new Date(2017, 10 /* Nov */, 1), {
        // @ts-expect-error
        weekStartsOn: NaN,
      })
    } catch (e) {
      assert(e instanceof RangeError)
    }
  })

  it('returns the week of the month of the given date, when the given date is sunday', function () {
    const result = getWeekOfMonth(
      /* 1396/7/2 */ new Date(2017, 8 /* Sep */, 24),
      {
        weekStartsOn: 1,
      }
    )
    assert(result === 1)
  })
})
