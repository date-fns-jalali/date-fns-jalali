// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextWednesday from '.'

describe('nextWednesday', () => {
  it('returns the following Wednesday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextWednesday(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)),
      /* 1399/1/6 */ new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22)),
      /* 1399/1/6 */ new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21)),
      /* 1399/1/6 */ new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20)),
      /* 1399/1/6 */ new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19)),
      /* 1399/1/6 */ new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18)),
      /* 1399/1/6 */ new Date(2020, 2 /* Mar */, 25)
    )

    assert.deepStrictEqual(
      nextWednesday(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17)),
      /* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextWednesday(new Date(NaN)) instanceof Date)
  })
})
