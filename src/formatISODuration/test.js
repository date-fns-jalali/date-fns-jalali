// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import formatISODuration from '.'

describe('formatISODuration', function() {
  it('Everything returns correct duration for arbitrary dates', function() {
    const result = formatISODuration({
      years: 39,
      months: 2,
      days: 20,
      hours: 7,
      minutes: 5,
      seconds: 0
    })

    assert(result === 'P39Y2M20DT7H5M0S')
  })
  it('Everything returns P1Y1M1DT1H1M1S (1 of everything)', function() {
    const result = formatISODuration({
      years: 1,
      months: 1,
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1
    })

    assert(result === 'P1Y1M1DT1H1M1S')
  })
  it('Returns P0Y0M0DT0H0M0S when the dates are the same', function() {
    const result = formatISODuration({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })

    assert(result === 'P0Y0M0DT0H0M0S')
  })
  it('Seconds returns P0Y0M0DT0H0M1S (1 second)', function() {
    const result = formatISODuration({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 1
    })

    assert(result === 'P0Y0M0DT0H0M1S')
  })
  it('Minutes returns P0Y0M0DT0H1M0S (1 minute)', function() {
    const result = formatISODuration({
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 0
    })

    assert(result === 'P0Y0M0DT0H1M0S')
  })
  it('Hours returns P0Y0M0DT1H0M0S (1 hour)', function() {
    const result = formatISODuration({
      years: 0,
      months: 0,
      days: 0,
      hours: 1,
      minutes: 0,
      seconds: 0
    })

    assert(result === 'P0Y0M0DT1H0M0S')
  })
  it('Days returns P0Y0M1DT0H0M0S (1 day)', function() {
    const result = formatISODuration({
      years: 0,
      months: 0,
      days: 1,
      hours: 0,
      minutes: 0,
      seconds: 0
    })

    assert(result === 'P0Y0M1DT0H0M0S')
  })
  it('Months returns P0Y1M0DT0H0M0S (1 month)', function() {
    const result = formatISODuration({
      years: 0,
      months: 1,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })

    assert(result === 'P0Y1M0DT0H0M0S')
  })
  it('Years returns P1Y0M0DT0H0M1S (1 year)', function() {
    const result = formatISODuration({
      years: 1,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    })

    assert(result === 'P1Y0M0DT0H0M0S')
  })

  it('returns P0Y0M0DT0H0M0S when given an empty object', function() {
    const result = formatISODuration({})

    assert(result === 'P0Y0M0DT0H0M0S')
  })
})
