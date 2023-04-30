/* eslint-env mocha */

import assert from 'assert'
import eachHourOfInterval from '.'

describe('eachHourOfInterval', () => {
  it('returns an array with starts of hours from the hour of the start date to the hour of the end date', () => {
    const result = eachHourOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    })
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 13),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    ])
  })

  it('accepts timestamps', () => {
    const result = eachHourOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12).getTime(),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15).getTime(),
    })
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 13),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    ])
  })

  it('handles the hours that are not starts of hours', () => {
    const result = eachHourOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12, 59, 59, 999),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15, 59, 59, 999),
    })
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 13),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    ])
  })

  it('returns one hour if the both arguments are on the same hour', () => {
    const result = eachHourOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12, 35),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12, 47),
    })
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
    ])
  })

  it('returns one hour if the both arguments are the same', () => {
    const result = eachHourOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12, 35),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12, 35),
    })
    assert.deepStrictEqual(result, [
      /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
    ])
  })

  it('throws an exception if the start date is after the end date', () => {
    const block = eachHourOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12, 35, 0, 0, 1),
      end: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12, 35, 0, 0, 0),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', () => {
    const block = eachHourOfInterval.bind(null, {
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', () => {
    const block = eachHourOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12, 12),
      end: new Date(NaN),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', () => {
    const block = () =>
      eachHourOfInterval(
        // @ts-expect-error
        undefined
      )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(eachHourOfInterval.bind(null), TypeError)
  })

  describe('options.step', () => {
    const interval = {
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 18),
    }

    const stepError =
      /^RangeError: `options.step` must be a number greater than 1$/

    it('returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step', () => {
      const result = eachHourOfInterval(interval, { step: 3 })
      assert.deepStrictEqual(result, [
        /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 12),
        /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
        /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 18),
      ])
    })

    it('throws TypeError error if `options.step` is less than 1', () => {
      assert.throws(() => eachHourOfInterval(interval, { step: 0 }), stepError)
      assert.throws(() => eachHourOfInterval(interval, { step: -3 }), stepError)
    })

    it('throws TypeError error if `options.step` is NaN', () => {
      assert.throws(
        () =>
          eachHourOfInterval(interval, {
            // @ts-expect-error
            step: 'w',
          }),
        stepError
      )
      assert.throws(
        () => eachHourOfInterval(interval, { step: NaN }),
        stepError
      )
    })
  })
})
