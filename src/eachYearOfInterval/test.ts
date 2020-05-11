/* eslint-env mocha */

import assert from 'assert'
import eachYearOfInterval from '.'

describe('eachYearOfInterval', () => {
  it('returns an array with starts of days from the day of the start date to the day of the end date', () => {
    const result = eachYearOfInterval({
      start: /* 1391/7/15 */ new Date(2012, 9 /* Oct */, 6),
      end: /* 1396/7/20 */ new Date(2017, 9 /* Oct */, 12),
    })
    assert.deepStrictEqual(result, [
      /* 1391/1/1 */ new Date(2012, 2 /* Mar */, 20),
      /* 1392/1/1 */ new Date(2013, 2 /* Mar */, 21),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1394/1/1 */ new Date(2015, 2 /* Mar */, 21),
      /* 1395/1/1 */ new Date(2016, 2 /* Mar */, 20),
      /* 1396/1/1 */ new Date(2017, 2 /* Mar */, 21),
    ])
  })

  it('accepts timestamps', () => {
    const result = eachYearOfInterval({
      start: /* 1391/7/15 */ new Date(2012, 9 /* Oct */, 6).getTime(),
      end: /* 1396/7/20 */ new Date(2017, 9 /* Oct */, 12).getTime(),
    })
    assert.deepStrictEqual(result, [
      /* 1391/1/1 */ new Date(2012, 2 /* Mar */, 20),
      /* 1392/1/1 */ new Date(2013, 2 /* Mar */, 21),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1394/1/1 */ new Date(2015, 2 /* Mar */, 21),
      /* 1395/1/1 */ new Date(2016, 2 /* Mar */, 20),
      /* 1396/1/1 */ new Date(2017, 2 /* Mar */, 21),
    ])
  })

  it('handles the dates that are not starts of days', () => {
    const result = eachYearOfInterval({
      start: /* 1391/7/15 */ new Date(2012, 9 /* Oct */, 6, 6, 35),
      end: /* 1396/7/20 */ new Date(2017, 9 /* Oct */, 12, 22, 15),
    })
    assert.deepStrictEqual(result, [
      /* 1391/1/1 */ new Date(2012, 2 /* Mar */, 20),
      /* 1392/1/1 */ new Date(2013, 2 /* Mar */, 21),
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
      /* 1394/1/1 */ new Date(2015, 2 /* Mar */, 21),
      /* 1395/1/1 */ new Date(2016, 2 /* Mar */, 20),
      /* 1396/1/1 */ new Date(2017, 2 /* Mar */, 21),
    ])
  })

  it('returns one year if the both arguments are on the same year', () => {
    const result = eachYearOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    })
    assert.deepStrictEqual(result, [
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
    ])
  })

  it('returns one year if the both arguments are the same', () => {
    const result = eachYearOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    })
    assert.deepStrictEqual(result, [
      /* 1393/1/1 */ new Date(2014, 2 /* Mar */, 21),
    ])
  })

  it('throws an exception if the start date is after the end date', () => {
    const block = eachYearOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', () => {
    const block = eachYearOfInterval.bind(null, {
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', () => {
    const block = eachYearOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN),
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', () => {
    const block = eachYearOfInterval.bind(
      null,
      // @ts-expect-error
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(eachYearOfInterval.bind(null), TypeError)
  })
})
