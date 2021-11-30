// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextSaturday from '.'

describe('nextSaturday', () => {
  it('returns the following Saturday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextSaturday(/* 1399/3/3 */ new Date(2020, 4 /* May */, 23)),
      /* 1399/3/10 */ new Date(2020, 4 /* May */, 30)
    )

    assert.deepStrictEqual(
      nextSaturday(/* 1399/3/2 */ new Date(2020, 4 /* May */, 22)),
      /* 1399/3/3 */ new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(/* 1399/3/1 */ new Date(2020, 4 /* May */, 21)),
      /* 1399/3/3 */ new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(/* 1399/2/31 */ new Date(2020, 4 /* May */, 20)),
      /* 1399/3/3 */ new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(/* 1399/2/30 */ new Date(2020, 4 /* May */, 19)),
      /* 1399/3/3 */ new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(/* 1399/2/29 */ new Date(2020, 4 /* May */, 18)),
      /* 1399/3/3 */ new Date(2020, 4 /* May */, 23)
    )

    assert.deepStrictEqual(
      nextSaturday(/* 1399/2/28 */ new Date(2020, 4 /* May */, 17)),
      /* 1399/3/3 */ new Date(2020, 4 /* May */, 23)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextSaturday(new Date(NaN)) instanceof Date)
  })
})
