// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import { toGregorian } from '.'

describe('toGregorian', function() {
  describe('day input', () => {
    it('support days in month days', function() {
      const result = toGregorian(1399, 1, 31)
      assert.deepEqual(result, { gy: 2020, gm: 4, gd: 19 }) // new Date(2020,4 -1, 19,10,0,0).toISOString() // 2020-04-19
    })
    it('support few days larger than month days', function() {
      const result = toGregorian(1399, 1, 31 + 10)
      assert.deepEqual(result, { gy: 2020, gm: 4, gd: 29 }) // new Date(2020,4 -1, 19 + 10 ,10,0,0).toISOString() // 2020-04-29
    })
    it('support more than a month days larger than month days', function() {
      const result = toGregorian(1399, 1, 31 + 100)
      assert.deepEqual(result, { gy: 2020, gm: 7, gd: 28 }) // new Date(2020,4 -1, 19 + 100 ,10,0,0).toISOString() // 2020-07-28
    })
    it('support more than a year days larger than month days', function() {
      const result = toGregorian(1399, 1, 31 + 1000)
      assert.deepEqual(result, { gy: 2023, gm: 1, gd: 14 }) // new Date(2020,4 -1, 19 + 1000 ,10,0,0).toISOString() // 2023-01-14
    })
    it('support days in month days', function() {
      const result = toGregorian(1399, 1, 0)
      assert.deepEqual(result, { gy: 2020, gm: 3, gd: 19 }) // new Date(2020,4 -1, 19 - 31 ,10,0,0).toISOString() // 2020-03-19
    })
    it('support days in month days', function() {
      const result = toGregorian(1399, 1, 31 - 100)
      assert.deepEqual(result, { gy: 2020, gm: 1, gd: 10 }) // new Date(2020,4 -1, 19 - 100 ,10,0,0).toISOString() // 2020-01-10
    })
    it('support days in month days', function() {
      const result = toGregorian(1399, 1, 31 - 1000)
      assert.deepEqual(result, { gy: 2017, gm: 7, gd: 24 }) // new Date(2020,4 -1, 19 - 1000 ,10,0,0).toISOString() // 2017-07-24
    })
  })
  describe('month input', () => {
    it('support month in same year', function() {
      const result = toGregorian(1399, 5, 31)
      assert.deepEqual(result, { gy: 2020, gm: 8, gd: 21 })
    })
    it('support month larger than 12', function() {
      const result = toGregorian(1399, 5 + 15, 31) // toGregorian(1400, 8, 31)
      assert.deepEqual(result, { gy: 2021, gm: 11, gd: 22 })
    })
    it('support month very larger than 12', function() {
      const result = toGregorian(1399, 5 + 64, 31) // toGregorian(1404, 9, 31)
      assert.deepEqual(result, { gy: 2025, gm: 12, gd: 22 })
    })
    it('support zeor month', function() {
      const result = toGregorian(1399, 5 + -5, 31) // toGregorian(1398, 12, 31)
      assert.deepEqual(result, { gy: 2020, gm: 3, gd: 21 })
    })
    it('support negative month', function() {
      const result = toGregorian(1399, 5 + -15, 20) // toGregorian(1398, 2, 20)
      assert.deepEqual(result, { gy: 2019, gm: 5, gd: 10 })
    })
    it('support negative month', function() {
      const result = toGregorian(1399, 5 + -60, 20) // toGregorian(1394, 5, 20)
      assert.deepEqual(result, { gy: 2015, gm: 8, gd: 11 })
    })
  })
})
