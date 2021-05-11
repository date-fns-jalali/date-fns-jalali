// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextFriday from '.'

describe('nextFriday', () => {
  it('returns the following Friday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextFriday(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)),
      /* 1399/1/8 */ new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22)),
      /* 1399/1/8 */ new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21)),
      /* 1399/1/8 */ new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20)),
      /* 1399/1/8 */ new Date(2020, 2 /* Mar */, 27)
    )

    assert.deepStrictEqual(
      nextFriday(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19)),
      /* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20)
    )

    assert.deepStrictEqual(
      nextFriday(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18)),
      /* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20)
    )

    assert.deepStrictEqual(
      nextFriday(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17)),
      /* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextFriday(new Date(NaN)) instanceof Date)
  })
})
