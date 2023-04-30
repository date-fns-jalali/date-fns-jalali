/* eslint-env mocha */

import assert from 'assert'
import nextTuesday from '.'

describe('nextTuesday', () => {
  it('returns the following Tuesday given various dates before the same', () => {
    assert.deepStrictEqual(
      nextTuesday(/* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)),
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22)),
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(/* 1399/1/23 */ new Date(2020, 3 /* Apr */, 11)),
      /* 1399/1/26 */ new Date(2020, 3 /* Apr */, 14)
    )

    assert.deepStrictEqual(
      nextTuesday(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20)),
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19)),
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18)),
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24)
    )

    assert.deepStrictEqual(
      nextTuesday(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17)),
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24)
    )
  })
  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(nextTuesday(new Date(NaN)) instanceof Date)
  })
})
