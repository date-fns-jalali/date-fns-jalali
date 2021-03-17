// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import nextDay from '.'

describe('nextDay', function () {
  it('returns the following Monday given various dates before the same', function () {
    assert.deepStrictEqual(
      nextDay(/* 1399/1/1 */ new Date(2020, 2 /* Mar */, 20), 1),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19), 1),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(/* 1398/12/28 */ new Date(2020, 2 /* Mar */, 18), 1),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(/* 1398/12/27 */ new Date(2020, 2 /* Mar */, 17), 1),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(/* 1398/12/26 */ new Date(2020, 2 /* Mar */, 16), 1),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22), 1),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)
    )

    assert.deepStrictEqual(
      nextDay(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21), 1),
      /* 1399/1/4 */ new Date(2020, 2 /* Mar */, 23)
    )
  })

  it('returns the following Tuesday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21), 2),
      /* 1399/1/5 */ new Date(2020, 2 /* Mar */, 24)
    )
  })

  it('returns the following Wednesday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21), 3),
      /* 1399/1/6 */ new Date(2020, 2 /* Mar */, 25)
    )
  })

  it('returns the following Thursday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21), 4),
      /* 1399/1/7 */ new Date(2020, 2 /* Mar */, 26)
    )
  })

  it('returns the following Friday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21), 5),
      /* 1399/1/8 */ new Date(2020, 2 /* Mar */, 27)
    )
  })

  it('returns the following Saturday given the Saturday before it', function () {
    assert.deepStrictEqual(
      nextDay(/* 1399/1/2 */ new Date(2020, 2 /* Mar */, 21), 6),
      /* 1399/1/9 */ new Date(2020, 2 /* Mar */, 28)
    )
  })

  it('returns next Sunday given the day is Sunday', function () {
    assert.deepStrictEqual(
      nextDay(/* 1399/1/3 */ new Date(2020, 2 /* Mar */, 22), 0),
      /* 1399/1/10 */ new Date(2020, 2 /* Mar */, 29)
    )
  })
})
