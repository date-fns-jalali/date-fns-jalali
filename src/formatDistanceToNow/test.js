// @flow
/* eslint-env mocha */

import assert from 'assert'
import sinon from 'sinon'
import formatDistanceToNow from '.'

describe('formatDistanceToNow', () => {
  let clock
  beforeEach(() => {
    clock = sinon.useFakeTimers(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0).getTime()
    )
  })

  afterEach(() => {
    clock.restore()
  })

  describe('seconds', () => {
    context('when the includeSeconds option is true', () => {
      it('less than 5 seconds', () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 58),
          {
            includeSeconds: true
          }
        )
        assert(result === 'کمتر از 5 ثانیه')
      })

      it('less than 10 seconds', () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 52),
          {
            includeSeconds: true
          }
        )
        assert(result === 'کمتر از 10 ثانیه')
      })

      it('less than 20 seconds', () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 45),
          {
            includeSeconds: true
          }
        )
        assert(result === 'کمتر از 20 ثانیه')
      })

      it('half a minute', () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 35),
          {
            includeSeconds: true
          }
        )
        assert(result === 'نیم دقیقه')
      })

      it('less than a minute', () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 15),
          {
            includeSeconds: true
          }
        )
        assert(result === 'کمتر از یک دقیقه')
      })

      it('1 minute', () => {
        const result = formatDistanceToNow(
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 0),
          {
            includeSeconds: true
          }
        )
        assert(result === '1 دقیقه')
      })
    })
  })

  describe('minutes', () => {
    it('less than a minute', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 40)
      )
      assert(result === 'کمتر از یک دقیقه')
    })

    it('1 minute', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 10)
      )
      assert(result === '1 دقیقه')
    })

    it('n minutes', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 29, 10)
      )
      assert(result === '3 دقیقه')
    })
  })

  describe('hours', () => {
    it('about 1 hour', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 9, 32, 0)
      )
      assert(result === 'حدود 1 ساعت')
    })

    it('about n hours', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 7, 32, 0)
      )
      assert(result === 'حدود 3 ساعت')
    })
  })

  describe('days', () => {
    it('1 day', () => {
      const result = formatDistanceToNow(
        /* 1365/1/14 */ new Date(1986, 3, 3, 10, 32, 0)
      )
      assert(result === '1 روز')
    })

    it('n days', () => {
      const result = formatDistanceToNow(
        /* 1365/1/12 */ new Date(1986, 3, 1, 10, 32, 0)
      )
      assert(result === '3 روز')
    })
  })

  describe('months', () => {
    it('about 1 month', () => {
      const result = formatDistanceToNow(
        /* 1364/12/13 */ new Date(1986, 2, 4, 10, 32, 0)
      )
      assert(result === 'حدود 1 ماه')
    })

    it('n months', () => {
      const result = formatDistanceToNow(
        /* 1364/10/14 */ new Date(1986, 0, 4, 10, 32, 0)
      )
      assert(result === '3 ماه')
    })
  })

  describe('years', () => {
    it('about 1 year', () => {
      const result = formatDistanceToNow(
        /* 1364/1/15 */ new Date(1985, 3, 4, 10, 32, 0)
      )
      assert(result === 'حدود 1 سال')
    })

    it('over 1 year', () => {
      const result = formatDistanceToNow(
        /* 1363/8/13 */ new Date(1984, 10, 4, 10, 32, 0)
      )
      assert(result === 'بیشتر از 1 سال')
    })

    it('almost n years', () => {
      const result = formatDistanceToNow(
        /* 1362/2/14 */ new Date(1983, 4, 4, 10, 32, 0)
      )
      assert(result === 'نزدیک 3 سال')
    })

    it('about n years', () => {
      const result = formatDistanceToNow(
        /* 1362/1/15 */ new Date(1983, 3, 4, 10, 32, 0)
      )
      assert(result === 'حدود 3 سال')
    })

    it('over n years', () => {
      const result = formatDistanceToNow(
        /* 1361/8/13 */ new Date(1982, 10, 4, 10, 32, 0)
      )
      assert(result === 'بیشتر از 3 سال')
    })
  })

  it('accepts a timestamp', () => {
    const result = formatDistanceToNow(
      /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 40).getTime()
    )
    assert(result === 'کمتر از یک دقیقه')
  })

  describe('when the addSuffix option is true', () => {
    it('adds a past suffix', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 35),
        {
          includeSeconds: true,
          addSuffix: true
        }
      )
      assert(result === 'نیم دقیقه قبل')
    })

    it('adds a future suffix', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true
        }
      )
      assert(result === 'در حدود 1 ساعت')
    })
  })

  describe('implicit conversion of options', () => {
    it('`options.includeSeconds`', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 10, 31, 52),
        // $ExpectedMistake
        { includeSeconds: 1 }
      )
      assert(result === 'کمتر از 10 ثانیه')
    })

    it('`options.addSuffix`', () => {
      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        // $ExpectedMistake
        { addSuffix: 1 }
      )
      assert(result === 'در حدود 1 ساعت')
    })
  })

  describe('custom locale', () => {
    it('can be passed to the function', () => {
      function localizeDistance(token, count, options) {
        assert(token === 'aboutXHours')
        assert(count === 1)
        assert(options.addSuffix === true)
        assert(options.comparison > 0)
        return 'It works!'
      }

      const customLocale = {
        formatDistance: localizeDistance
      }

      const result = formatDistanceToNow(
        /* 1365/1/15 */ new Date(1986, 3, 4, 11, 32, 0),
        {
          addSuffix: true,
          // $ExpectedMistake
          locale: customLocale
        }
      )

      assert(result === 'It works!')
    })

    context('does not contain `distanceInWords` property', () => {
      it('throws `RangeError`', function() {
        const customLocale = {}
        const block = formatDistanceToNow.bind(
          null,
          // $ExpectedMistake
          /* 1365/1/15 */ new Date(1986, 3, 4, 10, 32, 0),
          { includeSeconds: true, locale: customLocale }
        )
        assert.throws(block, RangeError)
      })
    })
  })

  it('throws RangeError if the passed date is `Invalid Date`', function() {
    assert.throws(formatDistanceToNow.bind(null, new Date(NaN)), RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    assert.throws(formatDistanceToNow.bind(null), TypeError)
  })
})
