/* eslint-env mocha */

import assert from 'assert'
import previousTuesday from '.'

describe('previousTuesday', function () {
  it('returns the previous Tuesday given various dates after the same', function () {
    assert.deepStrictEqual(
      previousTuesday(/* 1400/3/15 */ new Date(2021, 5 /* Jun */, 5)),
      /* 1400/3/11 */ new Date(2021, 5 /* Jun */, 1)
    )

    assert.deepStrictEqual(
      previousTuesday(/* 1400/3/16 */ new Date(2021, 5 /* Jun */, 6)),
      /* 1400/3/11 */ new Date(2021, 5 /* Jun */, 1)
    )

    assert.deepStrictEqual(
      previousTuesday(/* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)),
      /* 1400/3/11 */ new Date(2021, 5 /* Jun */, 1)
    )

    assert.deepStrictEqual(
      previousTuesday(/* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)),
      /* 1400/3/18 */ new Date(2021, 5 /* Jun */, 8)
    )

    assert.deepStrictEqual(
      previousTuesday(/* 1400/3/27 */ new Date(2021, 5 /* Jun */, 17)),
      /* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)
    )

    assert.deepStrictEqual(
      previousTuesday(/* 1400/3/28 */ new Date(2021, 5 /* Jun */, 18)),
      /* 1400/3/25 */ new Date(2021, 5 /* Jun */, 15)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function () {
    assert(previousTuesday(new Date(NaN)) instanceof Date)
  })
})
