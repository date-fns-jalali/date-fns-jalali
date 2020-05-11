// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDistance from '.'

describe('formatDistance', function() {
  describe('seconds', function() {
    context('when the includeSeconds option is true', function() {
      it('less than 5 seconds', function() {
        var result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true }
        )
        assert(result === 'کمتر از 5 ثانیه')
      })

      it('less than 10 seconds', function() {
        var result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 7),
          { includeSeconds: true }
        )
        assert(result === 'کمتر از 10 ثانیه')
      })

      it('less than 20 seconds', function() {
        var result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 15),
          { includeSeconds: true }
        )
        assert(result === 'کمتر از 20 ثانیه')
      })

      it('half a minute', function() {
        var result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
          { includeSeconds: true }
        )
        assert(result === 'نیم دقیقه')
      })

      it('less than a minute', function() {
        var result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 45),
          { includeSeconds: true }
        )
        assert(result === 'کمتر از یک دقیقه')
      })

      it('1 minute', function() {
        var result = formatDistance(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 33, 0),
          { includeSeconds: true }
        )
        assert(result === '1 دقیقه')
      })
    })
  })

  describe('minutes', function() {
    it('less than a minute', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 20)
      )
      assert(result === 'کمتر از یک دقیقه')
    })

    it('1 minute', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 50)
      )
      assert(result === '1 دقیقه')
    })

    it('n minutes', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 34, 50)
      )
      assert(result === '3 دقیقه')
    })
  })

  describe('hours', function() {
    it('about 1 hour', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0)
      )
      assert(result === 'حدود 1 ساعت')
    })

    it('about n hours', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 13, 32, 0)
      )
      assert(result === 'حدود 3 ساعت')
    })
  })

  describe('days', function() {
    it('1 day', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/16 */ new Date(1986, 3, 5, 10, 32, 0)
      )
      assert(result === '1 روز')
    })

    it('n days', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0)
      )
      assert(result === '3 روز')
    })
  })

  describe('months', function() {
    it('about 1 month', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/2/14 */ new Date(1986, 4, 4, 10, 32, 0)
      )
      assert(result === 'حدود 1 ماه')
    })

    it('n months', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/4/13 */ new Date(1986, 6, 4, 10, 32, 0)
      )
      assert(result === '3 ماه')
    })
  })

  describe('years', function() {
    it('about 1 year', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1366/1/15 */ new Date(1987, 3, 4, 10, 32, 0)
      )
      assert(result === 'حدود 1 سال')
    })

    it('over 1 year', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1366/7/12 */ new Date(1987, 9, 4, 10, 32, 0)
      )
      assert(result === 'بیشتر از 1 سال')
    })

    it('almost n years', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1367/12/13 */ new Date(1989, 2, 4, 10, 32, 0)
      )
      assert(result === 'نزدیک 3 سال')
    })

    it('about n years', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1368/1/15 */ new Date(1989, 3, 4, 10, 32, 0)
      )
      assert(result === 'حدود 3 سال')
    })

    it('over n years', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1368/7/12 */ new Date(1989, 9, 4, 10, 32, 0)
      )
      assert(result === 'بیشتر از 3 سال')
    })
  })

  it('accepts timestamps', function() {
    var result = formatDistance(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0).getTime(),
      /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0).getTime()
    )
    assert(result === 'حدود 1 ساعت')
  })

  describe('when the addSuffix option is true', function() {
    it('adds a past suffix', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 25),
        { includeSeconds: true, addSuffix: true }
      )
      assert(result === 'نیم دقیقه قبل')
    })

    it('adds a future suffix', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        { addSuffix: true }
      )
      assert(result === 'در حدود 1 ساعت')
    })
  })

  describe('implicit conversion of options', function() {
    it('`options.includeSeconds`', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 7),
        // $ExpectedMistake
        { includeSeconds: 1 }
      )
      assert(result === 'کمتر از 10 ثانیه')
    })

    it('`options.addSuffix`', function() {
      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        // $ExpectedMistake
        { addSuffix: 1 }
      )
      assert(result === 'در حدود 1 ساعت')
    })
  })

  describe('custom locale', function() {
    it('can be passed to the function', function() {
      function localizeDistance(token, count, options) {
        assert(token === 'lessThanXSeconds')
        assert(count === 5)
        assert(options.addSuffix === true)
        assert(options.comparison > 0)
        return 'It works!'
      }

      var customLocale = {
        formatDistance: localizeDistance
      }

      var result = formatDistance(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 3),
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        // $ExpectedMistake
        { includeSeconds: true, addSuffix: true, locale: customLocale }
      )

      assert(result === 'It works!')
    })

    context('does not contain `formatDistance` property', function() {
      it('throws `RangeError`', function() {
        var customLocale = {}
        var block = formatDistance.bind(
          null,
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          // $ExpectedMistake
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 3),
          { includeSeconds: true, locale: customLocale }
        )
        assert.throws(block, RangeError)
      })
    })
  })

  it('throws RangeError if the first date is `Invalid Date`', function() {
    assert.throws(
      formatDistance.bind(
        null,
        new Date(NaN),
        /* 1365/1/18 */ new Date(1986, 3, 7, 10, 32, 0)
      ),
      RangeError
    )
  })

  it('throws RangeError if the second date is `Invalid Date`', function() {
    assert.throws(
      formatDistance.bind(
        null,
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
        new Date(NaN)
      ),
      RangeError
    )
  })

  it('throws RangeError if the both dates are `Invalid Date`', function() {
    assert.throws(
      formatDistance.bind(null, new Date(NaN), new Date(NaN)),
      RangeError
    )
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(formatDistance.bind(null), TypeError)
    assert.throws(formatDistance.bind(null, 1), TypeError)
  })
})
