// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import set from '.'

describe('set', function () {
  it('sets all values', function () {
    const result = set(/* 1391/10/12 */ new Date(2013, 0 /* Jan */), {
      year: 1393,
      month: 5, // Shahrivar
      date: 29,
      hours: 12,
      minutes: 12,
      seconds: 12,
      milliseconds: 12,
    })
    assert.deepEqual(
      result.toString(),
      /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 12, 12, 12).toString()
    )
  })

  it('sets year', function () {
    const result = set(/* 1392/6/10 */ new Date(2013, 8 /* Sep */), {
      year: 1393,
    })
    assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */))
  })

  it('sets month', function () {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
      month: 6 /* Mehr */,
    })
    assert.deepEqual(result, /* 1393/7/10 */ new Date(2014, 9 /* Oct */, 2))
  })

  it('sets day of month', function () {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
      date: 20,
    })
    assert.deepEqual(result, /* 1393/6/20 */ new Date(2014, 8 /* Sep */, 11))
  })

  it('sets hours', function () {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), {
      hours: 12,
    })
    assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 12))
  })

  it('sets minutes', function () {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1), {
      minutes: 12,
    })
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 12)
    )
  })

  it('sets seconds', function () {
    const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1), {
      seconds: 12,
    })
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1, 12)
    )
  })

  it('sets milliseconds', function () {
    const result = set(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1, 1),
      {
        milliseconds: 500,
      }
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 1, 1, 1, 500)
    )
  })

  describe('value overflow', function () {
    it('months overflow into years', function () {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), {
        month: 12 /* 13th month */,
      })
      assert.deepEqual(result, /* 1394/1/10 */ new Date(2015, 2 /* Mar */, 30))
    })

    it('days of months overflow into months', function () {
      const result = set(/* 1393/7/10 */ new Date(2014, 9 /* Oct */, 2), {
        date: 31,
      })
      assert.deepEqual(result, /* 1393/8/1 */ new Date(2014, 9 /* Oct */, 23))
    })

    it('hours overflow into days', function () {
      const result = set(/* 1393/6/28 */ new Date(2014, 8 /* Sep */, 19), {
        hours: 24,
      })
      assert.deepEqual(result, /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20))
    })

    it('minutes overflow into hours', function () {
      const result = set(/* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 11), {
        minutes: 60,
      })
      assert.deepEqual(
        result,
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12)
      )
    })

    it('seconds overflow into minutes', function () {
      const result = set(
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 58),
        {
          seconds: 60,
        }
      )
      assert.deepEqual(
        result,
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 59)
      )
    })

    it('milliseconds overflow into seconds', function () {
      const result = set(
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 58, 30),
        {
          milliseconds: 1000,
        }
      )
      assert.deepEqual(
        result,
        /* 1393/6/29 */ new Date(2014, 8 /* Sep */, 20, 12, 58, 31)
      )
    })
  })

  describe('edge cases', function () {
    it('sets Farvardin', function () {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
        month: 0 /* Jan */,
      })
      assert.deepEqual(result, /* 1393/1/10 */ new Date(2014, 2 /* Mar */, 30))
    })

    it('sets the last day of new month if the initial date was the last day of a longer month', function () {
      const result = set(/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22), {
        month: 8 /* Azar */,
      })
      assert.deepEqual(result, /* 1393/9/30 */ new Date(2014, 11 /* Dec */, 21))
    })

    it('ignores undefined values', function () {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
        year: undefined,
      })
      assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */))
    })

    it('ignores null values', function () {
      // @ts-expect-error
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
        year: null,
      })
      assert.deepEqual(result, /* 1393/6/10 */ new Date(2014, 8 /* Sep */))
    })

    it('throws TypeError exception if passed less than 2 arguments', function () {
      assert.throws(set.bind(null), TypeError)
    })

    it('returns Invalid Date if any value in values is NaN', function () {
      const result = set(/* 1393/6/10 */ new Date(2014, 8 /* Sep */), {
        year: NaN,
      })
      assert.deepEqual(isNaN(result), isNaN(new Date(NaN)))
    })

    it('returns Invalid Date the initial date was Invalid Date as well', function () {
      const result = set(new Date(NaN), { year: 2019 })
      assert.deepEqual(isNaN(result.getTime()), isNaN(new Date(NaN).getTime()))
    })

    it('throws RangeError exception if `values` is not an object', function () {
      // @ts-expect-error
      assert.throws(set.bind(null, new Date(), true), RangeError)
    })

    it('throws RangeError exception if `values` is null', function () {
      // @ts-expect-error
      assert.throws(set.bind(null, new Date(), null), RangeError)
    })
  })
})
