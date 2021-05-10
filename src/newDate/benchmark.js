// @flow
/* eslint-env mocha */
/* global suite, benchmark */

import newDate from '.'
import moment from 'moment'

suite(
  'newDate',
  function () {
    benchmark('date-fns', function () {
      return newDate(2014, 8, 15)
    })

    benchmark('Moment.js', function () {
      return moment([2014, 8, 15])
    })
  },
  {
    setup: function () {},
  }
)
