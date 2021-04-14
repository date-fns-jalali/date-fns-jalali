// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatDuration from '.'

describe('formatDuration', () => {
  it('formats full duration', () => {
    assert(
      formatDuration({
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      }) === '2 سال 9 ماه 1 هفته 7 روز 5 ساعت 9 دقیقه 30 ثانیه'
    )
  })

  it('formats partial duration', () => {
    assert(formatDuration({ months: 9, days: 2 }) === '9 ماه 2 روز')
  })

  it('allows to customize the format', () => {
    assert(
      formatDuration(
        {
          years: 2,
          months: 9,
          weeks: 1,
          days: 7,
          hours: 5,
          minutes: 9,
          seconds: 30,
        },
        { format: ['months', 'weeks'] }
      ) === '9 ماه 1 هفته'
    )
  })

  it('does not include zeros by default', () => {
    assert(
      formatDuration({
        years: 0,
        months: 0,
        weeks: 1,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }) === '1 هفته'
    )
  })

  it('allows to include zeros', () => {
    assert(
      formatDuration(
        {
          years: 0,
          months: 0,
          weeks: 1,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        },
        { zero: true }
      ) === '0 سال 0 ماه 1 هفته 0 روز 0 ساعت 0 دقیقه 0 ثانیه'
    )
  })

  it('allows to customize the delimiter', () => {
    assert(
      formatDuration({ months: 9, days: 2 }, { delimiter: '، ' }) ===
        '9 ماه، 2 روز'
    )
  })
})
