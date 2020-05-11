/* eslint-env mocha */

import assert from 'power-assert'
import intervalToDuration from '.'

describe('intervalToDuration', () => {
  it('returns correct duration for arbitrary dates', () => {
    const start = /* 1307/10/25 */ new Date(1929, 0, 15, 12, 0, 0)
    const end = /* 1347/1/15 */ new Date(1968, 3, 4, 19, 5, 0)
    const result = intervalToDuration({ start, end })

    assert.deepEqual(result, {
      years: 39,
      months: 2,
      days: 20,
      hours: 7,
      minutes: 5,
      seconds: 0,
    })
  })

  it('returns correct duration (1 of everything)', () => {
    const start = /* 1398/2/11 */ new Date(2019, 4, 1, 12, 0, 0)
    const end = /* 1399/3/12 */ new Date(2020, 5, 1, 13, 1, 1)
    const result = intervalToDuration({ start, end })

    assert.deepEqual(result, {
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })

  it('returns duration of 0 when the dates are the same', () => {
    const start = /* 1398/12/11 */ new Date(2020, 2, 1, 12, 0, 0)
    const end = /* 1398/12/11 */ new Date(2020, 2, 1, 12, 0, 0)
    const result = intervalToDuration({ start, end })

    assert.deepEqual(result, {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
  })

  describe('throws RangeError', () => {
    it('throws error if start date is invalid', () => {
      try {
        const invalidStart = new Date(NaN)
        const end = /* 1398/12/11 */ new Date(2020, 2, 1, 12, 0, 0)
        intervalToDuration({ start: invalidStart, end })
      } catch (e: any) {
        assert(e instanceof RangeError)
        assert(e['message'] === 'Start Date is invalid')
      }
    })

    it('throws error if end date is invalid', () => {
      try {
        const start = /* 1398/12/11 */ new Date(2020, 2, 1, 12, 0, 0)
        const invalidEnd = new Date(NaN)
        intervalToDuration({ start, end: invalidEnd })
      } catch (e: any) {
        assert(e instanceof RangeError)
        assert(e['message'] === 'End Date is invalid')
      }
    })
  })

  describe('edge cases', () => {
    it('returns correct duration for dates in the end of Feb - issue 2255', () => {
      assert.deepEqual(
        intervalToDuration({
          start: /* 1390/12/9 */ new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
        {
          years: 0,
          months: 0,
          days: 1,
          hours: 1,
          minutes: 0,
          seconds: 0,
        }
      )

      assert.deepEqual(
        intervalToDuration({
          start: /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 9, 0, 0),
          end: /* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
        }),
        {
          years: 0,
          months: 0,
          days: 0,
          hours: 1,
          minutes: 0,
          seconds: 0,
        }
      )

      assert.deepEqual(
        intervalToDuration({
          start: /* 1390/12/9 */ new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
          end: /* 1390/12/9 */ new Date(2012, 1 /* Feb */, 28, 10, 0, 0),
        }),
        {
          years: 0,
          months: 0,
          days: 0,
          hours: 1,
          minutes: 0,
          seconds: 0,
        }
      )

      // Issue 2261
      assert.deepEqual(
        intervalToDuration({
          start: /* 1399/12/10 */ new Date(2021, 1 /* Feb */, 28, 7, 23, 7),
          end: /* 1399/12/10 */ new Date(2021, 1 /* Feb */, 28, 7, 38, 18),
        }),
        {
          years: 0,
          months: 0,
          days: 0,
          hours: 0,
          minutes: 15,
          seconds: 11,
        }
      )
    })
  })
})
