// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistanceStrict from '.'

describe('formatDistanceStrict', function() {
  describe('seconds', function() {
    context('when no unit is set', function() {
      it('0 seconds', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5)
        )
        assert(result === '0 ثانیه')
      })

      it('5 seconds', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5)
        )
        assert(result === '5 ثانیه')
      })
    })
  })

  describe('minutes', function() {
    it('1 minute', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 0)
      )
      assert(result === '1 دقیقه')
    })

    it('n minutes', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 35, 0)
      )
      assert(result === '3 دقیقه')
    })
  })

  describe('hours', function() {
    it('1 hour', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0)
      )
      assert(result === '1 ساعت')
    })

    it('n hours', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 13, 32, 0)
      )
      assert(result === '3 ساعت')
    })
  })

  describe('days', function() {
    it('1 day', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/16 */ new Date(1986, 3, 5, 10, 32, 0)
      )
      assert(result === '1 روز')
    })

    it('n days', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0)
      )
      assert(result === '3 روز')
    })
  })

  describe('months', function() {
    it('1 month', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/2/14 */ new Date(1986, 4, 4, 10, 32, 0)
      )
      assert(result === '1 ماه')
    })

    it('n months', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/4/13 */ new Date(1986, 6, 4, 10, 32, 0)
      )
      assert(result === '3 ماه')
    })
  })

  describe('years', function() {
    it('1 year', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1366/1/15 */ new Date(1987, 3, 4, 10, 32, 0)
      )
      assert(result === '1 سال')
    })

    it('n years', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1370/1/15 */ new Date(1991, 3, 4, 10, 32, 0)
      )
      assert(result === '5 سال')
    })
  })

  describe('when the unit option is supplied', function() {
    context('second', function() {
      it('0 seconds', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'second' }
        )
        assert(result === '0 ثانیه')
      })

      it('5 seconds', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 5),
          { unit: 'second' }
        )
        assert(result === '5 ثانیه')
      })

      it('120 seconds', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 34, 0),
          { unit: 'second' }
        )
        assert(result === '120 ثانیه')
      })
    })

    context('minute', function() {
      it('0 minutes', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'minute' }
        )
        assert(result === '0 دقیقه')
      })

      it('5 minutes', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 37, 0),
          { unit: 'minute' }
        )
        assert(result === '5 دقیقه')
      })

      it('120 minutes', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 12, 32, 0),
          { unit: 'minute' }
        )
        assert(result === '120 دقیقه')
      })
    })

    context('hour', function() {
      it('0 hours', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'hour' }
        )
        assert(result === '0 ساعت')
      })

      it('5 hours', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 15, 32, 0),
          { unit: 'hour' }
        )
        assert(result === '5 ساعت')
      })

      it('48 hours', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/17 */ new Date(1986, 3, 6, 10, 32, 0),
          { unit: 'hour' }
        )
        assert(result === '48 ساعت')
      })
    })

    context('day', function() {
      it('0 days', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'day' }
        )
        assert(result === '0 روز')
      })

      it('5 days', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/20 */ new Date(1986, 3, 9, 10, 32, 0),
          { unit: 'day' }
        )
        assert(result === '5 روز')
      })

      it('60 days', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/3/13 */ new Date(1986, 5, 3, 10, 32, 0),
          { unit: 'day' }
        )
        assert(result === '60 روز')
      })
    })
    context('month', function() {
      it('0 months', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'month' }
        )
        assert(result === '0 ماه')
      })

      it('5 months', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/5/13 */ new Date(1986, 7, 4, 10, 32, 0),
          { unit: 'month' }
        )
        assert(result === '4 ماه')
      })

      it('24 months', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1367/1/15 */ new Date(1988, 3, 4, 10, 32, 0),
          { unit: 'month' }
        )
        assert(result === '24 ماه')
      })
    })

    context('year', function() {
      it('0 years', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { unit: 'year' }
        )
        assert(result === '0 سال')
      })

      it('5 years', function() {
        var result = formatDistanceStrict(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1370/1/15 */ new Date(1991, 3, 4, 15, 32, 0),
          { unit: 'year' }
        )
        assert(result === '5 سال')
      })
    })
  })

  it('accepts timestamps', function() {
    var result = formatDistanceStrict(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0).getTime(),
      /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    assert(result === '1 ساعت')
  })

  describe('when the addSuffix option is true', function() {
    it('adds a past suffix', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
        { addSuffix: true }
      )
      assert(result === '25 ثانیه قبل')
    })

    it('adds a future suffix', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true }
      )
      assert(result === 'در 1 ساعت')
    })
  })

  describe('when the roundingMethod option is supplied', function() {
    it('default is "round"', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 59)
      )
      assert(result === '2 دقیقه')
    })

    it('"floor"', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 59),
        { roundingMethod: 'floor' }
      )
      assert(result === '1 دقیقه')
    })

    it('"ceil"', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 1),
        { roundingMethod: 'ceil' }
      )
      assert(result === '2 دقیقه')
    })

    it('"round" (down)', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 29),
        { roundingMethod: 'round' }
      )
      assert(result === '1 دقیقه')
    })

    it('"round" (up)', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 30),
        { roundingMethod: 'round' }
      )
      assert(result === '2 دقیقه')
    })
  })

  describe('implicit conversion of options', function() {
    it('`options.unit`', function() {
      // eslint-disable-next-line no-new-wrappers
      var unit = new String('year')

      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        // $ExpectedMistake
        { unit: unit }
      )
      assert(result === '0 سال')
    })

    it('`options.addSuffix`', function() {
      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
        // $ExpectedMistake
        { addSuffix: 1 }
      )
      assert(result === '25 ثانیه قبل')
    })

    it('`options.ceil`', function() {
      // eslint-disable-next-line no-new-wrappers
      var roundingMethod = new String('ceil')

      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 1),
        // $ExpectedMistake
        { roundingMethod: roundingMethod }
      )
      assert(result === '2 دقیقه')
    })
  })

  describe('custom locale', function() {
    it('can be passed to the function', function() {
      function localizeDistance(token, count, options) {
        assert(token === 'xSeconds')
        assert(count === 25)
        assert(options.addSuffix === true)
        assert(options.comparison < 0)
        return 'It works!'
      }

      var customLocale = {
        formatDistance: localizeDistance
      }

      var result = formatDistanceStrict(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
        // $ExpectedMistake
        { addSuffix: true, locale: customLocale }
      )

      assert(result === 'It works!')
    })

    context('does not contain `formatDistance` property', function() {
      it('throws `RangeError`', function() {
        var customLocale = {}
        var block = formatDistanceStrict.bind(
          null,
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          // $ExpectedMistake
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 37, 0),
          { unit: 'minute', locale: customLocale }
        )
        assert.throws(block, RangeError)
      })
    })
  })

  describe('edge cases', function() {
    it('detects unit correctly for short months', function() {
      var result = formatDistanceStrict(
        /* 1396/11/12 */ new Date(2018, 1 /* Feb */, 1),
        /* 1396/12/10 */ new Date(2018, 2 /* Mar */, 1)
      )
      assert(result === '28 روز')
    })
  })

  it('throws `RangeError` if the first date is `Invalid Date`', function() {
    assert.throws(
      formatDistanceStrict.bind(
        null,
        new Date(NaN),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0)
      ),
      RangeError
    )
  })

  it('throws `RangeError` if the second date is `Invalid Date`', function() {
    assert.throws(
      formatDistanceStrict.bind(
        null,
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        new Date(NaN)
      ),
      RangeError
    )
  })

  it('throws `RangeError` if the both dates are `Invalid Date`', function() {
    assert.throws(
      formatDistanceStrict.bind(null, new Date(NaN), new Date(NaN)),
      RangeError
    )
  })

  it("throws `RangeError` if `options.roundingMethod` is not 'floor', 'ceil', 'round' or undefined", function() {
    var block = formatDistanceStrict.bind(
      null,
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 29),
      // $ExpectedMistake
      { roundingMethod: 'foobar' }
    )
    assert.throws(block, RangeError)
  })

  it("throws `RangeError` if `options.unit` is not 's', 'm', 'h', 'd', 'M', 'Y' or undefined", function() {
    var block = formatDistanceStrict.bind(
      null,
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 29),
      // $ExpectedMistake
      { unit: 'foobar' }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(formatDistanceStrict.bind(null), TypeError)
    assert.throws(formatDistanceStrict.bind(null, 1), TypeError)
  })
})
