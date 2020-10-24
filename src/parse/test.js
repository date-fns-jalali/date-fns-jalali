/* eslint-env mocha */

import assert from 'power-assert'
import parse from '.'

describe('parse', function() {
  var referenceDate = /* 1365/1/15 */ new Date(
    1986,
    3 /* Apr */,
    4,
    10,
    32,
    0,
    900
  )

  it('escapes characters between the single quote characters', function() {
    var result = parse(
      ['1397', 'hello world', 'تیر', '2-ام'].join(' '),
      "yyyy 'hello world' MMMM do",
      referenceDate
    )
    assert.deepEqual(result, /* 1397/4/2 */ new Date(2018, 5 /* Jun */, 23))
  })

  it('two single quote characters are transformed into a "real" single quote', function() {
    var result = parse("'5 o'clock'", "''h 'o''clock'''", referenceDate)
    assert.deepEqual(result, /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 5))
  })

  it('accepts new line charactor', function() {
    var result = parse(
      '1393-01-15\n05:00:00',
      "yyyy-MM-dd'\n'HH:mm:ss",
      referenceDate
    )
    assert.deepEqual(result, /* 1393/1/15 */ new Date(2014, 3 /* Apr */, 4, 5))
  })

  describe.skip('era', function() {
    it('abbreviated', function() {
      var result = parse('10000 BC', 'yyyyy G', referenceDate)
      assert.deepEqual(
        result,
        /* -10621/10/9 */ new Date(-9999, 0 /* Jan */, 1)
      )
    })

    it('wide', function() {
      var result = parse('2018 Anno Domini', 'yyyy GGGG', referenceDate)
      assert.deepEqual(result, /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1))
    })

    it('narrow', function() {
      var result = parse('44 B', 'y GGGGG', referenceDate)
      assert.deepEqual(result, /* -665/10/11 */ new Date(-43, 0 /* Jan */, 1))
    })

    it('with week-numbering year', function() {
      var result = parse('44 B', 'Y GGGGG', referenceDate)
      assert.deepEqual(result, /* -665/10/8 */ new Date(-44, 11 /* Dec */, 30))
    })

    it('parses stand-alone BC', function() {
      var result = parse('BC', 'G', referenceDate)
      const expectedResult = /* -622/10/10 */ new Date(0, 0 /* Jan */, 1)
      expectedResult.setFullYear(0)
      assert.deepEqual(result, expectedResult)
    })

    it('parses stand-alone AD', function() {
      var result = parse('AD', 'G', referenceDate)
      const expectedResult = /* -621/10/11 */ new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['G', 'BC'],
        ['R', '2019'],
        ['u', '2019'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when G is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 420`,
            `${token} G`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`G\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('calendar year', function() {
    it('numeric', function() {
      var result = parse('1395', 'y', referenceDate)
      assert.deepEqual(result, /* 1395/1/1 */ new Date(2016, 2 /* Mar */, 20))
    })

    it('ordinal', function() {
      var result = parse('1395-ام', 'yo', referenceDate)
      assert.deepEqual(result, /* 1395/1/1 */ new Date(2016, 2 /* Mar */, 20))
    })

    describe('two-digit numeric year', function() {
      it('works as expected', function() {
        var result = parse('80', 'yy', referenceDate)
        assert.deepEqual(result, /* 1380/1/1 */ new Date(2001, 2 /* Mar */, 21))
      })

      it('gets the 100 year range from `referenceDate`', function() {
        var result = parse(
          '02',
          'yy',
          /* 1239/4/11 */ new Date(1860, 6 /* Jul */, 2)
        )
        assert.deepEqual(result, /* 1202/1/1 */ new Date(1823, 2 /* Mar */, 22))
      })
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'yyy', referenceDate)
      assert.deepEqual(result, /* 123/1/1 */ new Date(744, 2 /* Mar */, 21))
    })

    it('four-digit zero-padding', function() {
      var result = parse('0044', 'yyyy', referenceDate)
      var expectedResult = /* 44/1/1 */ new Date(665, 2 /* Mar */, 21)
      assert.deepEqual(result, expectedResult)
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'yyyyyy', referenceDate)
      var expectedResult = /* 1/1/1 */ new Date(622, 2 /* Mar */, 22)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['y', '1398'],
        ['Y', '1398'],
        ['R', '1398'],
        ['u', '1398'],
        ['w', '1'],
        ['I', '1'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when y is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1398`,
            `${token} y`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`y\` at the same time`
            )
          )
        })
      })
    })
  })

  describe.skip('local week-numbering year', function() {
    it('numeric', function() {
      var result = parse('2002', 'Y', referenceDate)
      assert.deepEqual(result, /* 1380/10/9 */ new Date(2001, 11 /* Dec */, 30))
    })

    it('ordinal', function() {
      var result = parse('12345th', 'Yo', referenceDate)
      assert.deepEqual(
        result,
        /* 11723/10/11 */ new Date(12344, 11 /* Dec */, 31)
      )
    })

    describe('two-digit numeric year', function() {
      it('works as expected', function() {
        var result = parse('02', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true
        })
        assert.deepEqual(
          result,
          /* 1380/10/9 */ new Date(2001, 11 /* Dec */, 30)
        )
      })

      it('gets the 100 year range from `referenceDate`', function() {
        var result = parse(
          '02',
          'YY',
          /* 1239/4/11 */ new Date(1860, 6 /* Jul */, 2),
          {
            useAdditionalWeekYearTokens: true
          }
        )
        assert.deepEqual(
          result,
          /* 1280/10/8 */ new Date(1901, 11 /* Dec */, 29)
        )
      })
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'YYY', referenceDate)
      assert.deepEqual(result, /* -499/10/5 */ new Date(122, 11 /* Dec */, 27))
    })

    it('four-digit zero-padding', function() {
      var result = parse('2018', 'YYYY', referenceDate, {
        useAdditionalWeekYearTokens: true
      })
      assert.deepEqual(
        result,
        /* 1396/10/10 */ new Date(2017, 11 /* Dec */, 31)
      )
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'YYYYYY', referenceDate)
      var expectedResult = new Date(0)
      expectedResult.setFullYear(0, 11 /* Dec */, 31)
      expectedResult.setHours(0, 0, 0, 0)
      assert.deepEqual(result, expectedResult)
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function() {
      var result = parse('2018', 'Y', referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4
      })
      assert.deepEqual(result, /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1))
    })

    describe('validation', () => {
      ;[
        ['y', '2019'],
        ['Y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when Y is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} Y`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`Y\` at the same time`
            )
          )
        })
      })
    })
  })

  describe.skip('ISO week-numbering year', function() {
    it('numeric', function() {
      var result = parse('-1234', 'R', referenceDate)
      assert.deepEqual(
        result,
        /* -1856/10/12 */ new Date(-1234, 0 /* Jan */, 3)
      )
    })

    it('two-digit zero-padding', function() {
      var result = parse('-02', 'RR', referenceDate)
      assert.deepEqual(result, /* -624/10/9 */ new Date(-3, 11 /* Dec */, 29))
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'RRR', referenceDate)
      assert.deepEqual(result, /* -499/10/13 */ new Date(123, 0 /* Jan */, 4))
    })

    it('four-digit zero-padding', function() {
      var result = parse('2018', 'RRRR', referenceDate)
      assert.deepEqual(result, /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'RRRRRR', referenceDate)
      var expectedResult = /* -621/10/11 */ new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['G', 'ب.ه'],
        ['y', '2019'],
        ['Y', '2019'],
        ['R', '2019'],
        ['u', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when R is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2019`,
            `${token} R`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`R\` at the same time`
            )
          )
        })
      })
    })
  })

  describe.skip('extended year', function() {
    it('numeric', function() {
      var result = parse('-1234', 'u', referenceDate)
      assert.deepEqual(
        result,
        /* -1856/10/10 */ new Date(-1234, 0 /* Jan */, 1)
      )
    })

    it('two-digit zero-padding', function() {
      var result = parse('-02', 'uu', referenceDate)
      assert.deepEqual(result, /* -624/10/12 */ new Date(-2, 0 /* Jan */, 1))
    })

    it('three-digit zero-padding', function() {
      var result = parse('123', 'uuu', referenceDate)
      assert.deepEqual(result, /* -499/10/10 */ new Date(123, 0 /* Jan */, 1))
    })

    it('four-digit zero-padding', function() {
      var result = parse('2018', 'uuuu', referenceDate)
      assert.deepEqual(result, /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1))
    })

    it('specified amount of digits', function() {
      var result = parse('000001', 'uuuuuu', referenceDate)
      var expectedResult = /* -621/10/11 */ new Date(1, 0 /* Jan */, 1)
      expectedResult.setFullYear(1)
      assert.deepEqual(result, expectedResult)
    })

    describe('validation', () => {
      ;[
        ['G', 'ب.ه.'],
        ['y', '1398'],
        ['Y', '1398'],
        ['R', '1398'],
        ['u', '1398'],
        ['w', '1'],
        ['I', '1'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when u is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1398`,
            `${token} u`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`u\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('quarter with following year', function() {
    it('first quarter', function() {
      var result = parse(['س‌م1', '1398'].join('/'), 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, /* 1398/1/1 */ new Date(2019, 2 /* Mar */, 21))
    })

    it('second quarter', function() {
      var result = parse(['س‌م2', '1399'].join('/'), 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, /* 1399/4/1 */ new Date(2020, 5 /* Jun */, 21))
    })

    it('third quarter', function() {
      var result = parse(['س‌م3', '1399'].join('/'), 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, /* 1399/7/1 */ new Date(2020, 8 /* Sep */, 22))
    })

    it('fourth quarter', function() {
      var result = parse(['س‌م4', '1399'].join('/'), 'QQQ/yyyy', referenceDate)
      assert.deepEqual(result, /* 1399/10/1 */ new Date(2020, 11 /* Dec */, 21))
    })
  })

  describe('quarter (formatting)', function() {
    it('numeric', function() {
      var result = parse('1', 'Q', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('ordinal', function() {
      var result = parse('1-ام', 'Qo', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('zero-padding', function() {
      var result = parse('02', 'QQ', referenceDate)
      assert.deepEqual(result, /* 1365/4/1 */ new Date(1986, 5 /* Jun */, 22))
    })

    it('abbreviated', function() {
      var result = parse('س‌م3', 'QQQ', referenceDate)
      assert.deepEqual(result, /* 1365/7/1 */ new Date(1986, 8 /* Sep */, 23))
    })

    it('wide', function() {
      var result = parse('سه‌ماهه 4', 'QQQQ', referenceDate)
      assert.deepEqual(result, /* 1365/10/1 */ new Date(1986, 11 /* Dec */, 22))
    })

    it('narrow', function() {
      var result = parse('1', 'QQQQQ', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    describe('validation', () => {
      ;[
        ['Y', '1398'],
        ['R', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when Q is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} Q`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`Q\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('quarter (stand-alone)', function() {
    it('numeric', function() {
      var result = parse('1', 'q', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('ordinal', function() {
      var result = parse('1-ام', 'qo', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('zero-padding', function() {
      var result = parse('02', 'qq', referenceDate)
      assert.deepEqual(result, /* 1365/4/1 */ new Date(1986, 5 /* Jun */, 22))
    })

    it('abbreviated', function() {
      var result = parse('س‌م3', 'qqq', referenceDate)
      assert.deepEqual(result, /* 1365/7/1 */ new Date(1986, 8 /* Sep */, 23))
    })

    it('wide', function() {
      var result = parse('سه‌ماهه 4', 'qqqq', referenceDate)
      assert.deepEqual(result, /* 1365/10/1 */ new Date(1986, 11 /* Dec */, 22))
    })

    it('narrow', function() {
      var result = parse('1', 'qqqqq', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    describe('validation', () => {
      ;[
        ['Y', '1398'],
        ['R', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when q is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} q`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`q\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('month (formatting)', function() {
    it('numeric', function() {
      var result = parse('6', 'M', referenceDate)
      assert.deepEqual(result, /* 1365/6/1 */ new Date(1986, 7 /* Aug */, 23))
    })

    it('ordinal', function() {
      var result = parse('6-ام', 'Mo', referenceDate)
      assert.deepEqual(result, /* 1365/6/1 */ new Date(1986, 7 /* Aug */, 23))
    })

    it('zero-padding', function() {
      var result = parse('01', 'MM', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('abbreviated', function() {
      var result = parse('آبا', 'MMM', referenceDate)
      assert.deepEqual(result, /* 1365/8/1 */ new Date(1986, 9 /* Oct */, 23))
    })

    it('wide', function() {
      var result = parse('بهمن', 'MMMM', referenceDate)
      assert.deepEqual(result, /* 1365/11/1 */ new Date(1987, 0 /* Jan */, 21))
    })

    it('narrow', function() {
      var result = parse('فر', 'MMMMM', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    describe('validation', () => {
      ;[
        ['Y', '1398'],
        ['R', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when M is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} M`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`M\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('month (stand-alone)', function() {
    it('numeric', function() {
      var result = parse('6', 'L', referenceDate)
      assert.deepEqual(result, /* 1365/6/1 */ new Date(1986, 7 /* Aug */, 23))
    })

    it('ordinal', function() {
      var result = parse('6-ام', 'Lo', referenceDate)
      assert.deepEqual(result, /* 1365/6/1 */ new Date(1986, 7 /* Aug */, 23))
    })

    it('zero-padding', function() {
      var result = parse('01', 'LL', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('abbreviated', function() {
      var result = parse('آبا', 'LLL', referenceDate)
      assert.deepEqual(result, /* 1365/8/1 */ new Date(1986, 9 /* Oct */, 23))
    })

    it('wide', function() {
      var result = parse('بهمن', 'LLLL', referenceDate)
      assert.deepEqual(result, /* 1365/11/1 */ new Date(1987, 0 /* Jan */, 21))
    })

    it('narrow', function() {
      var result = parse('فر', 'LLLLL', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    describe('validation', () => {
      ;[
        ['Y', '1398'],
        ['R', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when L is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} L`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`L\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('local week of year', function() {
    it('numeric', function() {
      var result = parse('49', 'w', referenceDate)
      assert.deepEqual(result, /* 1365/11/25 */ new Date(1987, 1 /* Feb */, 14))
    })

    it('ordinal', function() {
      var result = parse('49ام', 'wo', referenceDate)
      assert.deepEqual(result, /* 1365/11/25 */ new Date(1987, 1 /* Feb */, 14))
    })

    it('zero-padding', function() {
      var result = parse('01', 'ww', referenceDate)
      assert.deepEqual(result, /* 1364/12/24 */ new Date(1986, 2 /* Mar */, 15))
    })

    it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function() {
      var result = parse('49', 'w', referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4
      })
      assert.deepEqual(result, /* 1365/12/4 */ new Date(1987, 1 /* Feb */, 23))
    })

    describe('validation', () => {
      ;[
        ['y', '1398'],
        ['R', '1398'],
        ['u', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when w is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} w`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`w\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('ISO week of year', function() {
    it('numeric', function() {
      var result = parse('49', 'I', referenceDate)
      assert.deepEqual(result, /* 1365/9/10 */ new Date(1986, 11 /* Dec */, 1))
    })

    it('ordinal', function() {
      var result = parse('49-ام', 'Io', referenceDate)
      assert.deepEqual(result, /* 1365/9/10 */ new Date(1986, 11 /* Dec */, 1))
    })

    it('zero-padding', function() {
      var result = parse('01', 'II', referenceDate)
      assert.deepEqual(result, /* 1364/10/9 */ new Date(1985, 11 /* Dec */, 30))
    })

    describe('validation', () => {
      ;[
        ['y', '1398'],
        ['Y', '1398'],
        ['u', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when I is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} I`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`I\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('day of month', function() {
    it('numeric', function() {
      var result = parse('8', 'd', referenceDate)
      assert.deepEqual(result, /* 1365/1/8 */ new Date(1986, 2 /* Mar */, 28))
    })

    it('ordinal', function() {
      var result = parse('8-ام', 'do', referenceDate)
      assert.deepEqual(result, /* 1365/1/8 */ new Date(1986, 2 /* Mar */, 28))
    })

    it('zero-padding', function() {
      var result = parse('08', 'dd', referenceDate)
      assert.deepEqual(result, /* 1365/1/8 */ new Date(1986, 2 /* Mar */, 28))
    })

    describe('validation', () => {
      ;[
        ['Y', '1398'],
        ['R', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when d is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} d`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`d\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('day of year', function() {
    it('numeric', function() {
      var result = parse('200', 'D', referenceDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, /* 1365/7/14 */ new Date(1986, 9 /* Oct */, 6))
    })

    it('ordinal', function() {
      var result = parse('200ام', 'Do', referenceDate)
      assert.deepEqual(result, /* 1365/7/14 */ new Date(1986, 9 /* Oct */, 6))
    })

    it('two-digit zero-padding', function() {
      var result = parse('01', 'DD', referenceDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('three-digit zero-padding', function() {
      var result = parse('001', 'DDD', referenceDate)
      assert.deepEqual(result, /* 1365/1/1 */ new Date(1986, 2 /* Mar */, 21))
    })

    it('specified amount of digits', function() {
      var result = parse('000200', 'DDDDDD', referenceDate)
      assert.deepEqual(result, /* 1365/7/14 */ new Date(1986, 9 /* Oct */, 6))
    })

    describe('validation', () => {
      ;[
        ['Y', '2019'],
        ['R', '2019'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1'],
        ['E', 'ی'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, _options]) => {
        it(`throws an error when D is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} D`,
            referenceDate,
            { useAdditionalDayOfYearTokens: true }
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`D\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('day of week (formatting)', function() {
    it('abbreviated', function() {
      var result = parse('دوشنبه', 'E', referenceDate)
      assert.deepEqual(result, /* 1365/1/11 */ new Date(1986, 2 /* Mar */, 31))
    })

    it('wide', function() {
      var result = parse('سه‌شنبه', 'EEEE', referenceDate)
      assert.deepEqual(result, /* 1365/1/12 */ new Date(1986, 3 /* Apr */, 1))
    })

    it('narrow', function() {
      var result = parse('چ', 'EEEEE', referenceDate)
      assert.deepEqual(result, /* 1365/1/13 */ new Date(1986, 3 /* Apr */, 2))
    })

    it('short', function() {
      var result = parse('5ش', 'EEEEEE', referenceDate)
      assert.deepEqual(result, /* 1365/1/14 */ new Date(1986, 3 /* Apr */, 3))
    })

    it('allows to specify which day is the first day of the week', function() {
      var result = parse('سه‌شنبه', 'EEEE', referenceDate, {
        weekStartsOn: /* Fri */ 5
      })
      assert.deepEqual(result, /* 1365/1/19 */ new Date(1986, 3 /* Apr */, 8))
    })

    describe('validation', () => {
      ;[
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', '2ش'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when E is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 2ش`,
            `${token} E`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`E\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('ISO day of week (formatting)', function() {
    it('numeric', function() {
      var result = parse('1', 'i', referenceDate)
      assert.deepEqual(result, /* 1365/1/11 */ new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function() {
      var result = parse('1-ام', 'io', referenceDate)
      assert.deepEqual(result, /* 1365/1/11 */ new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function() {
      var result = parse('02', 'ii', referenceDate)
      assert.deepEqual(result, /* 1365/1/12 */ new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('چهارشنبه', 'iii', referenceDate)
      assert.deepEqual(result, /* 1365/1/13 */ new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function() {
      var result = parse('پنج‌شنبه', 'iiii', referenceDate)
      assert.deepEqual(result, /* 1365/1/14 */ new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function() {
      var result = parse('ی', 'iiiii', referenceDate)
      assert.deepEqual(result, /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6))
    })

    it('short', function() {
      var result = parse('ج', 'iiiiii', referenceDate)
      assert.deepEqual(result, /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4))
    })

    describe('validation', () => {
      ;[
        ['y', '1398'],
        ['Y', '1398'],
        ['u', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['w', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', 'ی'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when i is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} i`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`i\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('local day of week (formatting)', function() {
    it('numeric', function() {
      var result = parse('2', 'e', referenceDate)
      assert.deepEqual(result, /* 1365/1/11 */ new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function() {
      var result = parse('2-ام', 'eo', referenceDate)
      assert.deepEqual(result, /* 1365/1/11 */ new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function() {
      var result = parse('03', 'ee', referenceDate)
      assert.deepEqual(result, /* 1365/1/12 */ new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('چهارشنبه', 'eee', referenceDate)
      assert.deepEqual(result, /* 1365/1/13 */ new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function() {
      var result = parse('پنج‌شنبه', 'eeee', referenceDate)
      assert.deepEqual(result, /* 1365/1/14 */ new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function() {
      var result = parse('ی', 'eeeee', referenceDate)
      assert.deepEqual(result, /* 1365/1/10 */ new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function() {
      var result = parse('ج', 'eeeeee', referenceDate)
      assert.deepEqual(result, /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function() {
      var result = parse('7-ام', 'eo', referenceDate, {
        weekStartsOn: /* Fri */ 5
      })
      assert.deepEqual(result, /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4))
    })

    describe('validation', () => {
      ;[
        ['y', '1398'],
        ['R', '1398'],
        ['u', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', '2ش'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when e is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} e`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`e\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('local day of week (stand-alone)', function() {
    it('numeric', function() {
      var result = parse('2', 'c', referenceDate)
      assert.deepEqual(result, /* 1365/1/11 */ new Date(1986, 2 /* Mar */, 31))
    })

    it('ordinal', function() {
      var result = parse('2-ام', 'co', referenceDate)
      assert.deepEqual(result, /* 1365/1/11 */ new Date(1986, 2 /* Mar */, 31))
    })

    it('zero-padding', function() {
      var result = parse('03', 'cc', referenceDate)
      assert.deepEqual(result, /* 1365/1/12 */ new Date(1986, 3 /* Apr */, 1))
    })

    it('abbreviated', function() {
      var result = parse('چهارشنبه', 'ccc', referenceDate)
      assert.deepEqual(result, /* 1365/1/13 */ new Date(1986, 3 /* Apr */, 2))
    })

    it('wide', function() {
      var result = parse('پنج‌شنبه', 'cccc', referenceDate)
      assert.deepEqual(result, /* 1365/1/14 */ new Date(1986, 3 /* Apr */, 3))
    })

    it('narrow', function() {
      var result = parse('ی', 'ccccc', referenceDate)
      assert.deepEqual(result, /* 1365/1/10 */ new Date(1986, 2 /* Mar */, 30))
    })

    it('short', function() {
      var result = parse('ج', 'cccccc', referenceDate)
      assert.deepEqual(result, /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4))
    })

    it('allows to specify which day is the first day of the week', function() {
      var result = parse('7-ام', 'co', referenceDate, {
        weekStartsOn: /* Fri */ 5
      })
      assert.deepEqual(result, /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4))
    })

    describe('validation', () => {
      ;[
        ['y', '1398'],
        ['R', '1398'],
        ['u', '1398'],
        ['Q', '1'],
        ['q', '1'],
        ['M', '1'],
        ['L', '1'],
        ['I', '1'],
        ['d', '1'],
        ['D', '1', { useAdditionalDayOfYearTokens: true }],
        ['E', 'دوشنبه'],
        ['i', '1'],
        ['e', '1'],
        ['c', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example, options]) => {
        it(`throws an error when c is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} c`,
            referenceDate,
            options
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`c\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('AM, PM', function() {
    it('abbreviated', function() {
      var result = parse('5 ق.ظ.', 'h a', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 5)
      )
    })

    it('12 AM', function() {
      var result = parse('12 ق.ظ.', 'h aa', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 0)
      )
    })

    it('12 PM', function() {
      var result = parse('12 ب.ظ.', 'h aaa', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12)
      )
    })

    it('wide', function() {
      var result = parse('5 بعدازظهر', 'h aaaa', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 17)
      )
    })

    it('narrow', function() {
      var result = parse('11 ق', 'h aaaaa', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 11)
      )
    })

    describe('validation', () => {
      ;[
        ['a', 'ق.ظ.'],
        ['b', 'ق.ظ.'],
        ['B', 'صبح'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when a is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} ق.ظ.`,
            `${token} a`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`a\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('AM, PM, noon, midnight', function() {
    it('abbreviated', function() {
      var result = parse('ظهر', 'b', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12)
      )
    })

    it('wide', function() {
      var result = parse('نیمه‌شب', 'bbbb', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 0)
      )
    })

    it('narrow', function() {
      var result = parse('ن', 'bbbbb', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 0)
      )
    })

    describe('validation', () => {
      ;[
        ['a', 'ق.ظ.'],
        ['b', 'ق.ظ.'],
        ['B', 'صبح'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when b is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} ق.ظ.`,
            `${token} b`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`b\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('flexible day period', function() {
    it('abbreviated', function() {
      var result = parse('2 شب', 'h B', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 2)
      )
    })

    it('wide', function() {
      var result = parse('12 بعدازظهر', 'h BBBB', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12)
      )
    })

    it('narrow', function() {
      var result = parse('5 ب', 'h BBBBB', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 17)
      )
    })

    describe('validation', () => {
      ;[
        ['a', 'ق.ظ.'],
        ['b', 'ق.ظ.'],
        ['B', 'صبح'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when B is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} صبح`,
            `${token} B`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`B\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [1-12]', function() {
    it('numeric', function() {
      var result = parse('1', 'h', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 1)
      )
    })

    it('ordinal', function() {
      var result = parse('1-ام', 'ho', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 1)
      )
    })

    it('zero-padding', function() {
      var result = parse('01', 'hh', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 1)
      )
    })

    describe('validation', () => {
      ;[
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when h is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} h`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`h\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [0-23]', function() {
    it('numeric', function() {
      var result = parse('12', 'H', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12)
      )
    })

    it('ordinal', function() {
      var result = parse('12-ام', 'Ho', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12)
      )
    })

    it('zero-padding', function() {
      var result = parse('00', 'HH', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 0)
      )
    })

    describe('validation', () => {
      ;[
        ['a', 'ق.ظ.'],
        ['b', 'ق.ظ.'],
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when H is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} H`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`H\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [0-11]', function() {
    it('numeric', function() {
      var result = parse('1', 'K', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 1)
      )
    })

    it('ordinal', function() {
      var result = parse('1-ام', 'Ko', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 1)
      )
    })

    it('zero-padding', function() {
      var result = parse('1', 'KK', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 1)
      )
    })

    describe('validation', () => {
      ;[
        ['a', 'ق.ظ.'],
        ['b', 'ق.ظ.'],
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when K is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} K`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`K\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('hour [1-24]', function() {
    it('numeric', function() {
      var result = parse('12', 'k', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12)
      )
    })

    it('ordinal', function() {
      var result = parse('12-ام', 'ko', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12)
      )
    })

    it('zero-padding', function() {
      var result = parse('24', 'kk', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 0)
      )
    })

    describe('validation', () => {
      ;[
        ['a', 'ق.ظ.'],
        ['b', 'ق.ظ.'],
        ['h', '1'],
        ['H', '1'],
        ['K', '1'],
        ['k', '1'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when k is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} 1`,
            `${token} k`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`k\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('minute', function() {
    it('numeric', function() {
      var result = parse('25', 'm', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 25)
      )
    })

    it('ordinal', function() {
      var result = parse('25-ام', 'mo', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 25)
      )
    })

    it('zero-padding', function() {
      var result = parse('05', 'mm', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 5)
      )
    })

    describe('validation', () => {
      ;[['m', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(
        ([token, example]) => {
          it(`throws an error when m is used after ${token}`, () => {
            const block = parse.bind(
              null,
              `${example} 1`,
              `${token} m`,
              referenceDate
            )
            assert.throws(block, RangeError)
            assert.throws(
              block,
              new RegExp(
                `The format string mustn't contain \`${token}\` and \`m\` at the same time`
              )
            )
          })
        }
      )
    })
  })

  describe('second', function() {
    it('numeric', function() {
      var result = parse('25', 's', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 25)
      )
    })

    it('ordinal', function() {
      var result = parse('25-ام', 'so', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 25)
      )
    })

    it('zero-padding', function() {
      var result = parse('05', 'ss', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 5)
      )
    })

    describe('validation', () => {
      ;[['s', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(
        ([token, example]) => {
          it(`throws an error when s is used after ${token}`, () => {
            const block = parse.bind(
              null,
              `${example} 1`,
              `${token} s`,
              referenceDate
            )
            assert.throws(block, RangeError)
            assert.throws(
              block,
              new RegExp(
                `The format string mustn't contain \`${token}\` and \`s\` at the same time`
              )
            )
          })
        }
      )
    })
  })

  describe('fraction of second', function() {
    it('1/10 of second', function() {
      var result = parse('1', 'S', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 100)
      )
    })

    it('1/100 of second', function() {
      var result = parse('12', 'SS', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 120)
      )
    })

    it('millisecond', function() {
      var result = parse('123', 'SSS', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 123)
      )
    })

    it('specified amount of digits', function() {
      var result = parse('567890', 'SSSSSS', referenceDate)
      assert.deepEqual(
        result,
        /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 567)
      )
    })

    describe('validation', () => {
      ;[['S', '1'], ['t', '512969520'], ['T', '512969520900']].forEach(
        ([token, example]) => {
          it(`throws an error when S is used after ${token}`, () => {
            const block = parse.bind(
              null,
              `${example} 1`,
              `${token} S`,
              referenceDate
            )
            assert.throws(block, RangeError)
            assert.throws(
              block,
              new RegExp(
                `The format string mustn't contain \`${token}\` and \`S\` at the same time`
              )
            )
          })
        }
      )
    })
  })

  describe('timezone (ISO-8601 w/ Z)', function() {
    describe('X', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+05',
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('XX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('XXXX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+053045',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('XXXXX', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123Z',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+05:30:45',
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('validation', () => {
      ;[
        ['X', '-0530'],
        ['x', '-0530'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when X is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} -0530`,
            `${token} X`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`X\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('timezone (ISO-8601 w/o Z)', function() {
    describe('x', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+05',
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123+05:00'))
      })
    })

    describe('xx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+00:00',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })
    })

    describe('xxxx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-0530',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+0000',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+053045',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('xxxxx', function() {
      it('hours and minutes', function() {
        var result = parse(
          '1395-09-05T16:38:38.123-05:30',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123-05:30'))
      })

      it('GMT', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+00:00',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:38:38.123Z'))
      })

      it('hours, minutes and seconds', function() {
        var result = parse(
          '1395-09-05T16:38:38.123+05:30:45',
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate
        )
        assert.deepEqual(result, new Date('2016-11-25T16:37:53.123+05:30'))
      })
    })

    describe('validation', () => {
      ;[
        ['X', '-0530'],
        ['x', '-0530'],
        ['t', '512969520'],
        ['T', '512969520900']
      ].forEach(([token, example]) => {
        it(`throws an error when x is used after ${token}`, () => {
          const block = parse.bind(
            null,
            `${example} -0530`,
            `${token} x`,
            referenceDate
          )
          assert.throws(block, RangeError)
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`x\` at the same time`
            )
          )
        })
      })
    })
  })

  describe('seconds timestamp', function() {
    it('numeric', function() {
      var result = parse('512969520', 't', referenceDate)
      assert.deepEqual(result, new Date(512969520000))
    })

    it('specified amount of digits', function() {
      var result = parse(
        '00000000000512969520',
        'tttttttttttttttttttt',
        referenceDate
      )
      assert.deepEqual(result, new Date(512969520000))
    })

    it(`throws an error when it is used after any token`, () => {
      const block = parse.bind(null, `1 512969520`, `h t`, referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`t\` and any other token at the same time`
        )
      )
    })
  })

  describe('milliseconds timestamp', function() {
    it('numeric', function() {
      var result = parse('512969520900', 'T', referenceDate)
      assert.deepEqual(result, new Date(512969520900))
    })

    it('specified amount of digits', function() {
      var result = parse(
        '00000000512969520900',
        'TTTTTTTTTTTTTTTTTTTT',
        referenceDate
      )
      assert.deepEqual(result, new Date(512969520900))
    })

    it(`throws an error when it is used after any token`, () => {
      const block = parse.bind(null, `1 512969520900`, `h T`, referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`T\` and any other token at the same time`
        )
      )
    })
  })

  describe('common formats', function() {
    it('ISO-8601', function() {
      var result = parse('13950815T040404', "yyyyMMdd'T'HHmmss", referenceDate)
      assert.deepEqual(
        result,
        /* 1395/8/15 */ new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0)
      )
    })

    it('ISO week-numbering date', function() {
      var result = parse(
        '1395W474T153005',
        "RRRR'W'IIi'T'HHmmss",
        referenceDate
      )
      assert.deepEqual(
        result,
        /* 1395/9/4 */ new Date(2016, 10 /* Nov */, 24, 15, 30, 5, 0)
      )
    })

    it('ISO day of year date', function() {
      var result = parse('1389044T235959', "yyyyDDD'T'HHmmss", referenceDate)
      assert.deepEqual(
        result,
        /* 1389/2/13 */ new Date(2010, 4 /* May */, 3, 23, 59, 59, 0)
      )
    })

    it.skip('Date.prototype.toString()', function() {
      var dateString = 'Wed Jul 02 2014 05:30:15 GMT+0600'
      var formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx"
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it.skip('Date.prototype.toISOString()', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, new Date(dateString))
    })

    it('middle-endian', function() {
      var result = parse(
        '5 ق.ظ. 04/12/1395',
        'h aaaa MM/dd/yyyy',
        referenceDate
      )
      assert.deepEqual(
        result,
        /* 1395/4/12 */ new Date(2016, 6 /* Jul */, 2, 5, 0, 0, 0)
      )
    })

    it('little-endian', function() {
      var result = parse('11.04.1374', 'dd.MM.yyyy', referenceDate)
      assert.deepEqual(
        result,
        /* 1374/4/11 */ new Date(1995, 6 /* Jul */, 2, 0, 0, 0, 0)
      )
    })
  })

  describe('priority', function() {
    it("units of lower priority don't overwrite values of higher priority", function() {
      var dateString = '+06:00 123 15 30 05 11 04 1393'
      var formatString = 'xxx SSS ss mm HH dd MM yyyy'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, new Date('2014-07-02T05:30:15.123+06:00'))
    })
  })

  describe('implicit conversion of arguments', function() {
    it('`dateString`', function() {
      // eslint-disable-next-line no-new-wrappers
      var dateString = new String('13950815T040404')
      // $ExpectedMistake
      var result = parse(dateString, "yyyyMMdd'T'HHmmss", referenceDate)
      assert.deepEqual(
        result,
        /* 1395/8/15 */ new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0)
      )
    })

    it('`formatString`', function() {
      // eslint-disable-next-line no-new-wrappers
      var formatString = new String("yyyyMMdd'T'HHmmss")
      // $ExpectedMistake
      var result = parse('13950815T040404', formatString, referenceDate)
      assert.deepEqual(
        result,
        /* 1395/8/15 */ new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0)
      )
    })

    it('`options.weekStartsOn`', function() {
      // $ExpectedMistake
      var result = parse('1398', 'Y', referenceDate, {
        weekStartsOn: '1' /* Mon */,
        firstWeekContainsDate: 4
      })
      assert.deepEqual(result, /* 1397/12/27 */ new Date(2019, 2 /* Mar */, 18))
    })

    it('`options.firstWeekContainsDate`', function() {
      // $ExpectedMistake
      var result = parse('1398', 'Y', referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: '4'
      })
      assert.deepEqual(result, /* 1397/12/27 */ new Date(2019, 2 /* Mar */, 18))
    })
  })

  describe('with `options.strictValidation` = true', function() {
    describe('calendar year', function() {
      it('returns `Invalid Date` for year zero', function() {
        var result = parse('0', 'y', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('works correctly for two-digit year zero', function() {
        var result = parse('78', 'yy', referenceDate)
        assert.deepEqual(result, /* 1378/1/1 */ new Date(1999, 2 /* Mar */, 21))
      })
    })

    describe.skip('local week-numbering year', function() {
      it('returns `Invalid Date` for year zero', function() {
        var result = parse('0', 'Y', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('works correctly for two-digit year zero', function() {
        var result = parse('00', 'YY', referenceDate, {
          useAdditionalWeekYearTokens: true
        })
        assert.deepEqual(
          result,
          /* 1378/10/5 */ new Date(1999, 11 /* Dec */, 26)
        )
      })
    })

    describe('quarter (formatting)', function() {
      it('returns `Invalid Date` for invalid quarter', function() {
        var result = parse('0', 'Q', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('quarter (stand-alone)', function() {
      it('returns `Invalid Date` for invalid quarter', function() {
        var result = parse('5', 'q', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('month (formatting)', function() {
      it('returns `Invalid Date` for invalid month', function() {
        var result = parse('00', 'MM', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('month (stand-alone)', function() {
      it('returns `Invalid Date` for invalid month', function() {
        var result = parse('13', 'LL', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local week of year', function() {
      it('returns `Invalid Date` for invalid week', function() {
        var result = parse('0', 'w', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('ISO week of year', function() {
      it('returns `Invalid Date` for invalid week', function() {
        var result = parse('54', 'II', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('day of month', function() {
      it('returns `Invalid Date` for invalid day of the month', function() {
        var result = parse(
          '30',
          'd',
          /* 1393/12/01 */ new Date(2015, 1 /* Feb */, 20)
        )
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for 30th of esfand of non-leap year', function() {
        var result = parse(
          '30',
          'd',
          /* 1398/12/12 */ new Date(2020, 2 /* Mar */, 2)
        )
        assert(result instanceof Date && isNaN(result))
      })

      it('parses 30th of Esfand of leap year', function() {
        var result = parse(
          '30',
          'd',
          /* 1399/12/01 */ new Date(2021, 1 /* Feb */, 19)
        )
        assert.deepEqual(
          result,
          /* 1399/12/30 */ new Date(2021, 2 /* Mar */, 20)
        )
      })
    })

    describe('day of year', function() {
      it('returns `Invalid Date` for invalid day of the year', function() {
        var result = parse('0', 'D', referenceDate, {
          useAdditionalDayOfYearTokens: true
        })
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for 366th day of non-leap year', function() {
        var result = parse(
          '366',
          'D',
          /* 1392/11/12 */ new Date(2014, 1 /* Feb */, 1),
          {
            useAdditionalDayOfYearTokens: true
          }
        )
        assert(result instanceof Date && isNaN(result))
      })

      // Won't be supported for now
      it('parses 366th day of leap year', function() {
        var result = parse(
          '366',
          'D',
          /* 1399/1/12 */ new Date(2020, 2 /* Mar */, 31),
          {
            useAdditionalDayOfYearTokens: true
          }
        )
        assert.deepEqual(
          result,
          /* 1399/12/30 */ new Date(2021, 2 /* Mar */, 20)
        )
      })
    })

    describe('ISO day of week (formatting)', function() {
      it('returns `Invalid Date` for day zero', function() {
        var result = parse('0', 'i', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function() {
        var result = parse('8', 'i', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local day of week (formatting)', function() {
      it('returns `Invalid Date` for day zero', function() {
        var result = parse('0', 'e', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function() {
        var result = parse('8', 'e', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('local day of week (stand-alone)', function() {
      it('returns `Invalid Date` for day zero', function() {
        var result = parse('0', 'c', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for eight day of week', function() {
        var result = parse('8', 'c', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [1-12]', function() {
      it('returns `Invalid Date` for hour zero', function() {
        var result = parse('00', 'hh', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('13', 'hh', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [0-23]', function() {
      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('24', 'HH', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [0-11]', function() {
      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('12', 'KK', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('hour [1-24]', function() {
      it('returns `Invalid Date` for hour zero', function() {
        var result = parse('00', 'kk', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })

      it('returns `Invalid Date` for invalid hour', function() {
        var result = parse('25', 'kk', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('minute', function() {
      it('returns `Invalid Date` for invalid minute', function() {
        var result = parse('60', 'mm', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })

    describe('second', function() {
      it('returns `Invalid Date` for invalid second', function() {
        var result = parse('60', 'ss', referenceDate)
        assert(result instanceof Date && isNaN(result))
      })
    })
  })

  describe('custom locale', function() {
    it.skip('allows to pass a custom locale', function() {
      var customLocale = {
        match: {
          era: function() {
            return {
              value: 0,
              rest: ' it works!'
            }
          }
        }
      }
      // $ExpectedMistake
      var result = parse('2018 foobar', "y G 'it works!'", referenceDate, {
        locale: customLocale
      })
      assert.deepEqual(
        result,
        /* -2639/10/10 */ new Date(-2017, 0 /* Jan */, 1)
      )
    })

    it('throws `RangeError` if `options.locale` does not contain `match` property', function() {
      var block = parse.bind(
        null,
        '1395-9-5 04 AM',
        'yyyy-MM-dd hh a',
        referenceDate,
        // $ExpectedMistake
        { locale: {} }
      )
      assert.throws(block, RangeError)
    })
  })

  it('accepts a timestamp as `referenceDate`', function() {
    var dateString = '6 ب.ظ.'
    var formatString = 'h aaaa'
    var result = parse(dateString, formatString, referenceDate.getTime())
    assert.deepEqual(result, /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 18))
  })

  it('does not mutate `referenceDate`', function() {
    var referenceDateClone1 = new Date(referenceDate.getTime())
    var referenceDateClone2 = new Date(referenceDate.getTime())
    var dateString = '6 ب.ظ.'
    var formatString = 'h aaaa'
    parse(dateString, formatString, referenceDateClone1)
    assert.deepEqual(referenceDateClone1, referenceDateClone2)
  })

  describe('failure', function() {
    it('returns `referenceDate` if `dateString` and `formatString` are empty strings', function() {
      var dateString = ''
      var formatString = ''
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, referenceDate)
    })

    it('returns `referenceDate` if no tokens in `formatString` are provided', function() {
      var dateString = 'not a token'
      var formatString = "'not a token'"
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, referenceDate)
    })

    it("returns `Invalid Date`  if `formatString` doesn't match `dateString`", function() {
      var dateString = '1395-10-12'
      var formatString = 'yyyy/MM/dd'
      var result = parse(dateString, formatString, referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date`  if `formatString` tokens failed to parse a value', function() {
      var dateString = '1395-10-12'
      var formatString = 'MMMM do yyyy'
      var result = parse(dateString, formatString, referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `formatString` is empty string but `dateString` is not', function() {
      var dateString = '1395-10-12'
      var formatString = ''
      var result = parse(dateString, formatString, referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('returns `Invalid Date` if `referenceDate` is `Invalid Date`', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      var result = parse(dateString, formatString, new Date(NaN))
      assert(result instanceof Date && isNaN(result))
    })

    it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, referenceDate, {
        weekStartsOn: NaN
      })
      assert.throws(block, RangeError)
    })

    it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function() {
      var dateString = '2014-07-02T05:30:15.123+06:00'
      var formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
      // $ExpectedMistake
      var block = parse.bind(null, dateString, formatString, referenceDate, {
        firstWeekContainsDate: NaN
      })
      assert.throws(block, RangeError)
    })
  })

  it('throws TypeError exception if passed less than 3 arguments', function() {
    assert.throws(parse.bind(null), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1), TypeError)
    // $ExpectedMistake
    assert.throws(parse.bind(null, 1, 2), TypeError)
  })

  describe('edge cases', function() {
    it('returns Invalid Date if the string contains some remaining input after parsing', function() {
      var result = parse('1395-8-15T040404', 'yyyy-MM-dd', referenceDate)
      assert(result instanceof Date && isNaN(result))
    })

    it('parses normally if the remaining input is just whitespace', function() {
      var result = parse('1395-8-15   \n', 'yyyy-MM-dd', referenceDate)
      assert.deepEqual(result, /* 1395/8/15 */ new Date(2016, 10 /* Nov */, 5))
    })

    it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function() {
      assert.throws(
        parse.bind(null, '1395-8-15-nnnn', 'yyyy-MM-dd-nnnn', referenceDate),
        RangeError
      )
    })
  })

  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', () => {
    it('throws an error if D token is used', () => {
      const block = parse.bind(null, '2016 5', 'yyyy D', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `d` instead of `D` \(in `yyyy D`\) for formatting days of the month to the input `2016 5`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows D token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = parse('1394 5', 'yyyy D', referenceDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, /* 1394/1/5 */ new Date(2015, 2, 25))
    })

    it('throws an error if DD token is used', () => {
      const block = parse.bind(null, '2016 05', 'yyyy DD', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `dd` instead of `DD` \(in `yyyy DD`\) for formatting days of the month to the input `2016 05`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it('allows DD token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = parse('1394 05', 'yyyy DD', referenceDate, {
        useAdditionalDayOfYearTokens: true
      })
      assert.deepEqual(result, /* 1394/1/5 */ new Date(2015, 2, 25))
    })

    it('throws an error if YY token is used', () => {
      const block = parse.bind(null, '16 1', 'YY w', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `yy` instead of `YY` \(in `YY w`\) for formatting years to the input `16 1`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it.skip('allows YY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = parse('16 1', 'YY w', referenceDate, {
        useAdditionalWeekYearTokens: true
      })
      assert.deepEqual(result, /* 1394/10/6 */ new Date(2015, 11, 27))
    })

    it('throws an error if YYYY token is used', () => {
      const block = parse.bind(null, '2016 1', 'YYYY w', referenceDate)
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /Use `yyyy` instead of `YYYY` \(in `YYYY w`\) for formatting years to the input `2016 1`; see: https:\/\/git.io\/fxCyr/
      )
    })

    it.skip('allows YYYY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = parse('2016 1', 'YYYY w', referenceDate, {
        useAdditionalWeekYearTokens: true
      })
      assert.deepEqual(result, /* 1394/10/6 */ new Date(2015, 11, 27))
    })
  })

  describe('long format', function() {
    it('short date', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26)
      var dateString = '1374/3/5'
      var formatString = 'P'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium date', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26)
      var dateString = ['5', 'خرد', '1374'].join(' ')
      var formatString = 'PP'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('long date', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26)
      var dateString = ['5-ام', 'خرداد', '1374'].join(' ')
      var formatString = 'PPP'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('full date', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26)
      var dateString = ['جمعه', '5-ام', 'خرداد', '1374'].join(' ')
      var formatString = 'PPPP'
      var result = parse(dateString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('short time', function() {
      var expected = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        referenceDate.getDate(),
        10,
        32
      )
      var timeString = '10:32 ق.ظ.'
      var formatString = 'p'
      var result = parse(timeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium time', function() {
      var expected = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        referenceDate.getDate(),
        10,
        32,
        55
      )
      var timeString = '10:32:55 ق.ظ.'
      var formatString = 'pp'
      var result = parse(timeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('short date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = '1374/3/5, 10:32 ق.ظ.'
      var formatString = 'Pp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = ['5', 'خرد', '1374,', '10:32 ق.ظ.'].join(' ')
      var formatString = 'PPp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('long date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = ['5-ام', 'خرداد', '1374', 'در', '10:32 ق.ظ.'].join(
        ' '
      )
      var formatString = 'PPPp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('full date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32)
      var dateTimeString = [
        'جمعه',
        '5-ام',
        'خرداد',
        '1374',
        'در',
        '10:32 ق.ظ.'
      ].join(' ')
      var formatString = 'PPPPp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('short date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = '1374/3/5, 10:32:55 ق.ظ.'
      var formatString = 'Ppp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('medium date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = ['5', 'خرد', '1374,', '10:32:55 ق.ظ.'].join(' ')
      var formatString = 'PPpp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('long date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = [
        '5-ام',
        'خرداد',
        '1374',
        'در',
        '10:32:55 ق.ظ.'
      ].join(' ')
      var formatString = 'PPPpp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })

    it('full date + short time', function() {
      var expected = /* 1374/3/5 */ new Date(1995, 4 /* May */, 26, 10, 32, 55)
      var dateTimeString = [
        'جمعه',
        '5-ام',
        'خرداد',
        '1374',
        'در',
        '10:32:55 ق.ظ.'
      ].join(' ')
      var formatString = 'PPPPpp'
      var result = parse(dateTimeString, formatString, referenceDate)
      assert.deepEqual(result, expected)
    })
  })
})
