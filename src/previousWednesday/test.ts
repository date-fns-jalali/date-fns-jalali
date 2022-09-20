/* eslint-env mocha */

import assert from 'assert'
import previousWednesday from '.'

describe('previousWednesday', () => {
  it('returns the previous Wednesday given various dates after the same', () => {
    assert.deepStrictEqual(
      previousWednesday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
      /* 1400/3/12 */ new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previousWednesday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
      /* 1400/3/12 */ new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previousWednesday(/* 1400/3/19 */ new Date(2021, 5 /* Jun */, 9)),
      /* 1400/3/12 */ new Date(2021, 5 /* Jun */, 2)
    )

    assert.deepStrictEqual(
      previousWednesday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
      /* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)
    )

    assert.deepStrictEqual(
      previousWednesday(/* 1400/3/28 */ new Date(2021, 5 /* Jun */, 18)),
      /* 1400/3/26 */ new Date(2021, 5 /* Jun */, 16)
    )

    assert.deepStrictEqual(
      previousWednesday(/* 1400/4/4 */ new Date(2021, 5 /* Jun */, 25)),
      /* 1400/4/2 */ new Date(2021, 5 /* Jun */, 23)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', () => {
    assert(previousWednesday(new Date(NaN)) instanceof Date)
  })
})
