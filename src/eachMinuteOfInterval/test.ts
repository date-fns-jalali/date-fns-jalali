/* eslint-env mocha */

import assert from 'assert'

import eachMinuteOfInterval from '.'

describe('eachMinuteOfInterval', () => {
  it('should return an array of Date objects containing a Date for each minute between the interval', () => {
    const result = eachMinuteOfInterval({
      start: /* 1399/8/24 */ new Date(2020, 10, 14, 13, 0),
      end: /* 1399/8/24 */ new Date(2020, 10, 14, 13, 5),
    })

    assert.deepStrictEqual(result, [
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 0),
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 1),
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 2),
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 3),
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 4),
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 5),
    ])
  })

  it('should handle all the minutes that are not in the begining', () => {
    const result = eachMinuteOfInterval({
      start: /* 1399/8/24 */ new Date(2020, 10, 14, 13, 0, 33),
      end: /* 1399/8/24 */ new Date(2020, 10, 14, 13, 2),
    })

    assert.deepStrictEqual(
      result[0],
      /* 1399/8/24 */ new Date(2020, 10, 14, 13)
    )
    assert.deepStrictEqual(
      result[2],
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 2)
    )
  })

  it('should accept timestamps', () => {
    const start = /* 1399/8/24 */ new Date(2020, 10, 14, 13, 0).getTime()
    const end = /* 1399/8/24 */ new Date(2020, 10, 14, 13, 2).getTime()

    const result = eachMinuteOfInterval({
      start,
      end,
    })

    assert.deepStrictEqual(result, [
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 0),
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 1),
      /* 1399/8/24 */ new Date(2020, 10, 14, 13, 2),
    ])
  })

  it('throws an exception if the start date is after the end date', () => {
    const block = eachMinuteOfInterval.bind(null, {
      start: /* 1393/8/23 */ new Date(2014, 10, 14, 10),
      end: /* 1393/8/23 */ new Date(2014, 10, 14, 5),
    })
    assert.throws(block, RangeError)
  })

  it('treats intervals shorter than a minute as valid', () => {
    const block = eachMinuteOfInterval.bind(null, {
      start: /* 1393/8/23 */ new Date(2014, 10, 14, 10, 1, 0),
      end: /* 1393/8/23 */ new Date(2014, 10, 14, 10, 1, 1),
    })
    assert.doesNotThrow(block, RangeError)
  })

  describe('options.step', () => {
    const interval = {
      start: /* 1399/7/23 */ new Date(2020, 9, 14, 13, 1),
      end: /* 1399/7/23 */ new Date(2020, 9, 14, 13, 7),
    }

    const stepError =
      /^RangeError: `options.step` must be a number equal to or greater than 1$/

    it('returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step', () => {
      const result = eachMinuteOfInterval(interval, { step: 3 })
      assert.deepStrictEqual(result, [
        /* 1399/7/23 */ new Date(2020, 9, 14, 13, 1),
        /* 1399/7/23 */ new Date(2020, 9, 14, 13, 4),
        /* 1399/7/23 */ new Date(2020, 9, 14, 13, 7),
      ])
    })

    it('throws TypeError error if `options.step` is less than 1', () => {
      assert.throws(
        () => eachMinuteOfInterval(interval, { step: 0 }),
        stepError
      )
      assert.throws(
        () => eachMinuteOfInterval(interval, { step: -3 }),
        stepError
      )
    })

    it('throws TypeError error if `options.step` is NaN', () => {
      assert.throws(
        () =>
          eachMinuteOfInterval(interval, {
            // @ts-expect-error
            step: 'w',
          }),
        stepError
      )
      assert.throws(
        () => eachMinuteOfInterval(interval, { step: NaN }),
        stepError
      )
    })
  })
})
