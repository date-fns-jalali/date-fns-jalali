/* eslint-env mocha */

import assert from 'assert'
import eachQuarterOfInterval from '.'

describe('eachQuarterOfInterval', () => {
  it('returns an array with starts of quarters from the quarter of the start date to the quarter of the end date', () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12),
    })
    assert.deepStrictEqual(result, [
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ])
  })

  it('accepts timestamps', () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6).getTime(),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12).getTime(),
    })
    assert.deepStrictEqual(result, [
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ])
  })

  it('handles the dates that are not starts of days', () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12, 22, 15),
    })
    assert.deepStrictEqual(result, [
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ])
  })

  it('handles the dates that are not containing days', () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/12/10 */ new Date(2014, 2 /* Mar */),
      end: /* 1393/5/10 */ new Date(2014, 7 /* Oct */),
    })
    assert.deepStrictEqual(result, [
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),
    ])
  })

  it('returns one quarter if the both arguments are on the same quarter', () => {
    const result = eachQuarterOfInterval({
      start: /* 1392/10/16 */ new Date(2014, 0 /* Jan */, 6, 14),
      end: /* 1392/12/18 */ new Date(2014, 2 /* Feb */, 9, 15),
    })
    assert.deepStrictEqual(result, [
      /* 1392/10/1 */ new Date(2013, 11 /* Dec */, 22),
    ])
  })

  it('returns one quarter if the both arguments are the same', () => {
    const result = eachQuarterOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    })
    assert.deepStrictEqual(result, [
      /* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23),
    ])
  })

  it('throws an exception if the start date is after the end date', () => {
    const block = eachQuarterOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', () => {
    const block = eachQuarterOfInterval.bind(null, {
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', () => {
    const block = eachQuarterOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', () => {
    const block = () =>
      eachQuarterOfInterval(
        // @ts-expect-error
        undefined
      )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(eachQuarterOfInterval.bind(null), TypeError)
  })
})
