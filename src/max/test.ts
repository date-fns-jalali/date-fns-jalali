/* eslint-env mocha */

import assert from 'assert'
import max from '.'

describe('max', () => {
  const isInvalidDate = (date: any): boolean => {
    return date instanceof Date && isNaN(date.getTime())
  }

  it('returns the latest date', () => {
    const result = max([
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
    ])
    assert.deepStrictEqual(
      result,
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
  })

  it('accepts array with more than 2 entries', () => {
    const result = max([
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2),
      /* 1368/10/11 */ new Date(1990, 0 /* Jan */, 1),
    ])
    assert.deepStrictEqual(
      result,
      /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2)
    )
  })

  it('accepts timestamps', () => {
    const result = max([
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10).getTime(),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11).getTime(),
    ])
    assert.deepStrictEqual(
      result,
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
  })

  it('returns `Invalid Date` if any given date is invalid', () => {
    const result = max([
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      new Date(NaN),
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` if any given value is undefined', () => {
    const result = max([
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
      // @ts-expect-error
      undefined,
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
    ])
    assert(isInvalidDate(result))
  })

  it('returns `Invalid Date` for empty array', () => {
    const result = max([])
    assert(isInvalidDate(result))
  })

  it('converts Array-like objects into Array', () => {
    const result = max(
      // @ts-expect-error
      {
        '0': /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
        '1': /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
        length: 2,
      }
    )
    assert.deepStrictEqual(
      result,
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
  })

  it('converts iterable objects into Array', () => {
    const result = max(
      // @ts-expect-error
      new Set([
        /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10),
        /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      ])
    )
    assert.deepStrictEqual(
      result,
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
  })

  it('returns `Invalid Date` if given a non-iterable value', () => {
    const result = max(
      // @ts-expect-error
      undefined
    )
    assert(isInvalidDate(result))
  })

  it('throws TypeError exception if passed less than 1 argument', () => {
    // @ts-expect-error
    assert.throws(max.bind(null), TypeError)
  })
})
