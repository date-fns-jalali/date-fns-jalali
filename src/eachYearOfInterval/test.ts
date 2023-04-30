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
      /* 1390/10/11 */ new Date(2012, 0 /* Jan */, 1),
      /* 1391/10/12 */ new Date(2013, 0 /* Jan */, 1),
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1),
      /* 1394/10/11 */ new Date(2016, 0 /* Jan */, 1),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
    ])
  })

  it('accepts timestamps', () => {
    const result = eachYearOfInterval({
      start: /* 1391/7/15 */ new Date(2012, 9 /* Oct */, 6).getTime(),
      end: /* 1396/7/20 */ new Date(2017, 9 /* Oct */, 12).getTime(),
    })
    assert.deepStrictEqual(result, [
      /* 1390/10/11 */ new Date(2012, 0 /* Jan */, 1),
      /* 1391/10/12 */ new Date(2013, 0 /* Jan */, 1),
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1),
      /* 1394/10/11 */ new Date(2016, 0 /* Jan */, 1),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
    ])
  })

  it('handles the dates that are not starts of days', () => {
    const result = eachYearOfInterval({
      start: /* 1391/7/15 */ new Date(2012, 9 /* Oct */, 6, 6, 35),
      end: /* 1396/7/20 */ new Date(2017, 9 /* Oct */, 12, 22, 15),
    })
    assert.deepStrictEqual(result, [
      /* 1390/10/11 */ new Date(2012, 0 /* Jan */, 1),
      /* 1391/10/12 */ new Date(2013, 0 /* Jan */, 1),
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
      /* 1393/10/11 */ new Date(2015, 0 /* Jan */, 1),
      /* 1394/10/11 */ new Date(2016, 0 /* Jan */, 1),
      /* 1395/10/12 */ new Date(2017, 0 /* Jan */, 1),
    ])
  })

  it('returns one year if the both arguments are on the same year', () => {
    const result = eachYearOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 15),
    })
    assert.deepStrictEqual(result, [
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
    ])
  })

  it('returns one year if the both arguments are the same', () => {
    const result = eachYearOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
    })
    assert.deepStrictEqual(result, [
      /* 1392/10/11 */ new Date(2014, 0 /* Jan */, 1),
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
