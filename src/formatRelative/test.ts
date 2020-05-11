/* eslint-env mocha */

import assert from 'assert'
import formatRelative from '.'

describe('formatRelative', function () {
  const baseDate = /* 1365/1/15 */ new Date(
    1986,
    3 /* Apr */,
    4,
    10,
    32,
    0,
    900
  )

  it('accepts a timestamp', function () {
    const date = /* 1393/1/15 */ new Date(2014, 3 /* Apr */, 4)
    assert(formatRelative(date.getTime(), baseDate.getTime()) === '1393/01/15')
  })

  it('before the last week', function () {
    const result = formatRelative(
      /* 1365/1/8 */ new Date(1986, 2 /* Mar */, 28, 16, 50),
      baseDate
    )
    assert(result === '1365/01/08')
  })

  it('last week', function () {
    const result = formatRelative(
      /* 1365/1/12 */ new Date(1986, 3 /* Apr */, 1),
      baseDate
    )
    assert(result === 'سه‌شنبه گذشته در 12:00 ق.ظ.')
  })

  it('yesterday', function () {
    const result = formatRelative(
      /* 1365/1/14 */ new Date(1986, 3 /* Apr */, 3, 22, 22),
      baseDate
    )
    assert(result === 'دیروز در 10:22 ب.ظ.')
  })

  it('today', function () {
    const result = formatRelative(
      /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 16, 50),
      baseDate
    )
    assert(result === 'امروز در 4:50 ب.ظ.')
  })

  it('tomorrow', function () {
    const result = formatRelative(
      /* 1365/1/16 */ new Date(1986, 3 /* Apr */, 5, 7, 30),
      baseDate
    )
    assert(result === 'فردا در 7:30 ق.ظ.')
  })

  it('next week', function () {
    const result = formatRelative(
      /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 12, 0),
      baseDate
    )
    assert(result === 'یک‌شنبه در 12:00 ب.ظ.')
  })

  it('after the next week', function () {
    const result = formatRelative(
      /* 1365/1/22 */ new Date(1986, 3 /* Apr */, 11, 16, 50),
      baseDate
    )
    assert(result === '1365/01/22')
  })

  describe('edge cases', function () {
    it("throws RangeError if the date isn't valid", function () {
      assert.throws(
        formatRelative.bind(null, new Date(NaN), baseDate),
        RangeError
      )
    })

    it("throws RangeError if the base date isn't valid", function () {
      assert.throws(
        formatRelative.bind(
          null,
          /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
          new Date(NaN)
        ),
        RangeError
      )
    })

    it("throws RangeError if both dates aren't valid", function () {
      assert.throws(
        formatRelative.bind(null, new Date(NaN), new Date(NaN)),
        RangeError
      )
    })

    it.skip('handles dates before 100 AD', function () {
      const date = new Date(0)
      date.setFullYear(7, 11 /* Dec */, 31)
      date.setHours(0, 0, 0, 0)
      assert(formatRelative(date, baseDate) === '12/31/0007')
    })
  })

  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      const customLocale = {
        localize: {
          month: function () {
            return 'works'
          },
        },
        formatLong: {
          date: function () {
            return "'It' MMMM"
          },
        },
        formatRelative: function () {
          return "P 'perfectly!'"
        },
      }
      const result = formatRelative(
        /* 1365/1/8 */ new Date(1986, 2 /* Mar */, 28, 16, 50),
        baseDate,
        // @ts-expect-error
        { locale: customLocale }
      )
      assert(result === 'It works perfectly!')
    })

    it("throws `RangeError` if `options.locale` doesn't have `localize` property", function () {
      const customLocale = {
        formatLong: {},
        formatRelative: function () {
          return ''
        },
      }
      // @ts-expect-error
      const block = formatRelative.bind(
        null,
        /* 1395/10/12 */ new Date(2017, 0, 1),
        baseDate,
        {
          locale: customLocale,
        }
      )
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", function () {
      const customLocale = {
        localize: {},
        formatRelative: function () {
          return ''
        },
      }
      // @ts-expect-error
      const block = formatRelative.bind(
        null,
        /* 1395/10/12 */ new Date(2017, 0, 1),
        baseDate,
        {
          locale: customLocale,
        }
      )
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatRelative` property", function () {
      const customLocale = {
        localize: {},
        formatLong: {},
      }
      // @ts-expect-error
      const block = formatRelative.bind(
        null,
        /* 1395/10/12 */ new Date(2017, 0, 1),
        baseDate,
        {
          locale: customLocale,
        }
      )
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    // @ts-expect-error
    assert.throws(formatRelative.bind(null), TypeError)
    // @ts-expect-error
    assert.throws(formatRelative.bind(null, 1), TypeError)
  })
})
