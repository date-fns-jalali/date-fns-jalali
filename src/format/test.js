// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import sinon from 'sinon'
import format from '.'

describe('format', function () {
  var date = /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123)

  var offset = date.getTimezoneOffset()
  var absoluteOffset = Math.abs(offset)
  var hours = Math.floor(absoluteOffset / 60)
  var hoursLeadingZero = hours < 10 ? '0' : ''
  var minutes = absoluteOffset % 60
  var minutesLeadingZero = minutes < 10 ? '0' : ''
  var sign = offset > 0 ? '-' : '+'

  var timezone =
    sign + hoursLeadingZero + hours + ':' + minutesLeadingZero + minutes
  var timezoneShort = timezone.replace(':', '')
  var timezoneWithOptionalMinutesShort =
    minutes === 0 ? sign + hoursLeadingZero + hours : timezoneShort

  var timezoneWithZ = offset === 0 ? 'Z' : timezone
  var timezoneWithZShort = offset === 0 ? 'Z' : timezoneShort
  var timezoneWithOptionalMinutesAndZShort =
    offset === 0 ? 'Z' : timezoneWithOptionalMinutesShort

  var timezoneGMTShort =
    minutes === 0
      ? 'GMT' + sign + hours
      : 'GMT' + sign + hours + ':' + minutesLeadingZero + minutes
  var timezoneGMT = 'GMT' + timezone

  var timestamp = date.getTime().toString()
  var secondsTimestamp = Math.floor(date.getTime() / 1000).toString()

  it('accepts a timestamp', function () {
    var date = /* 1393/1/15 */ new Date(2014, 3, 4).getTime()
    assert(format(date, 'yyyy-MM-dd') === '1393-01-15')
  })

  it('escapes characters between the single quote characters', function () {
    var result = format(date, "'yyyy-'MM-dd'THH:mm:ss.SSSX' yyyy-'MM-dd'")
    assert(result === 'yyyy-01-15THH:mm:ss.SSSX 1365-MM-dd')
  })

  it('two single quote characters are transformed into a "real" single quote', function () {
    var date = /* 1393/1/15 */ new Date(2014, 3, 4, 5)
    assert(format(date, "''h 'o''clock'''") === "'5 o'clock'")
  })

  it('accepts new line charactor', function () {
    var date = /* 1393/1/15 */ new Date(2014, 3, 4, 5)
    assert.equal(format(date, "yyyy-MM-dd'\n'HH:mm:ss"), '1393-01-15\n05:00:00')
  })

  describe('ordinal numbers', function () {
    it('ordinal day of an ordinal month', function () {
      var result = format(date, "'روز' do 'ماه' Mo 'از سال' yyyy")
      assert(
        result === ['روز', '15-ام', 'ماه', '1-ام', 'از سال', '1365'].join(' ')
      )
    })

    it('should return a correct ordinal number', function () {
      var result = []
      for (var i = 1; i <= 31; i++) {
        result.push(format(new Date(2015, 5, i - 10), 'do'))
      }
      var expected = [
        '1-ام',
        '2-ام',
        '3-ام',
        '4-ام',
        '5-ام',
        '6-ام',
        '7-ام',
        '8-ام',
        '9-ام',
        '10-ام',
        '11-ام',
        '12-ام',
        '13-ام',
        '14-ام',
        '15-ام',
        '16-ام',
        '17-ام',
        '18-ام',
        '19-ام',
        '20-ام',
        '21-ام',
        '22-ام',
        '23-ام',
        '24-ام',
        '25-ام',
        '26-ام',
        '27-ام',
        '28-ام',
        '29-ام',
        '30-ام',
        '31-ام',
      ]
      assert.deepEqual(result, expected)
    })
  })

  it('era', function () {
    var result = format(date, 'G GG GGG GGGG GGGGG')
    assert(result === ['ب.ه.', 'ب.ه.', 'ب.ه.', 'بعد از هجرت', 'ب'].join(' '))

    var bcDate = new Date()
    bcDate.setFullYear(-1, 0 /* Jan */, 1)
    var bcResult = format(bcDate, 'G GG GGG GGGG GGGGG')
    assert(bcResult === 'BC BC BC Before Christ B')
  })

  describe('year', function () {
    describe('regular year', function () {
      it('works as expected', function () {
        var result = format(date, 'y yo yy yyy yyyy yyyyy')
        assert(
          result ===
            ['1365', '1365-ام', '65', '1365', '1365', '01365'].join(' ')
        )
      })

      it.skip('1 BC formats as 1', function () {
        var date = new Date(0)
        date.setFullYear(0, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'y')
        assert(result === '1')
      })

      it.skip('2 BC formats as 2', function () {
        var date = new Date(0)
        date.setFullYear(-1, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'y')
        assert(result === '2')
      })

      it('2 BC formats as 2nd', function () {
        var date = new Date()
        date.setFullYear(-1, 0 /* Jan */, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'yo')
        assert(result === '2nd')
      })
    })

    describe.skip('local week-numbering year', function () {
      it('works as expected', function () {
        var result = format(date, 'Y Yo YY YYY YYYY YYYYY', {
          useAdditionalWeekYearTokens: true,
        })
        assert(result === '1986 1986th 86 1986 1986 01986')
      })

      it('the first week of the next year', function () {
        var result = format(
          /* 1392/10/8 */ new Date(2013, 11 /* Dec */, 29),
          'YYYY',
          {
            useAdditionalWeekYearTokens: true,
          }
        )
        assert(result === '2014')
      })

      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
        var result = format(
          /* 1392/10/8 */ new Date(2013, 11 /* Dec */, 29),
          'YYYY',
          {
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            useAdditionalWeekYearTokens: true,
          }
        )
        assert(result === '2013')
      })

      it('the first week of year', function () {
        var result = format(
          /* 1394/10/11 */ new Date(2016, 0 /* Jan */, 1),
          'YYYY',
          {
            useAdditionalWeekYearTokens: true,
          }
        )
        assert(result === '2016')
      })

      it('1 BC formats as 1', function () {
        var date = new Date(0)
        date.setFullYear(0, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'Y')
        assert(result === '1')
      })

      it('2 BC formats as 2', function () {
        var date = new Date(0)
        date.setFullYear(-1, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'Y')
        assert(result === '2')
      })
    })

    describe('ISO week-numbering year', function () {
      it('works as expected', function () {
        var result = format(date, 'R RR RRR RRRR RRRRR')
        assert(result === '1986 1986 1986 1986 01986')
      })

      it('the first week of the next year', function () {
        var result = format(
          /* 1392/10/9 */ new Date(2013, 11 /* Dec */, 30),
          'RRRR'
        )
        assert(result === '2014')
      })

      it('the last week of the previous year', function () {
        var result = format(
          /* 1394/10/11 */ new Date(2016, 0 /* Jan */, 1),
          'RRRR'
        )
        assert(result === '2015')
      })

      it('1 BC formats as 0', function () {
        var date = new Date(0)
        date.setFullYear(0, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'R')
        assert(result === '0')
      })

      it('2 BC formats as -1', function () {
        var date = new Date(0)
        date.setFullYear(-1, 6 /* Jul */, 2)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'R')
        assert(result === '-1')
      })
    })

    describe.skip('extended year', function () {
      it('works as expected', function () {
        var result = format(date, 'u uu uuu uuuu uuuuu')
        assert(result === '1986 1986 1986 1986 01986')
      })

      it('1 BC formats as 0', function () {
        var date = new Date(0)
        date.setFullYear(0, 0, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'u')
        assert(result === '0')
      })

      it('2 BC formats as -1', function () {
        var date = new Date(0)
        date.setFullYear(-1, 0, 1)
        date.setHours(0, 0, 0, 0)
        var result = format(date, 'u')
        assert(result === '-1')
      })
    })
  })

  describe('quarter', function () {
    it('formatting quarter', function () {
      var result = format(date, 'Q Qo QQ QQQ QQQQ QQQQQ')
      assert(result === ['1', '1-ام', '01', 'س‌م1', 'سه‌ماهه 1', '1'].join(' '))
    })

    it('stand-alone quarter', function () {
      var result = format(date, 'q qo qq qqq qqqq qqqqq')
      assert(result === ['1', '1-ام', '01', 'س‌م1', 'سه‌ماهه 1', '1'].join(' '))
    })

    it('returns a correct quarter for each month', function () {
      var result = []
      for (var i = 0; i <= 11; i++) {
        result.push(format(new Date(1986, i + 3, 1), 'Q'))
      }
      var expected = [
        '1',
        '1',
        '1',
        '2',
        '2',
        '2',
        '3',
        '3',
        '3',
        '4',
        '4',
        '4',
      ]
      assert.deepEqual(result, expected)
    })
  })

  describe('month', function () {
    it('formatting month', function () {
      var result = format(date, 'M Mo MM MMM MMMM MMMMM')
      assert(result === ['1', '1-ام', '01', 'فرو', 'فروردین', 'فر'].join(' '))
    })

    it('stand-alone month', function () {
      var result = format(date, 'L Lo LL LLL LLLL LLLLL')
      assert(result === ['1', '1-ام', '01', 'فرو', 'فروردین', 'فر'].join(' '))
    })
  })

  describe('week', function () {
    describe('local week of year', function () {
      it('works as expected', function () {
        var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6)
        var result = format(date, 'w wo ww')
        assert(result === ['4', '4-ام', '04'].join(' '))
      })

      it('allows to specify `weekStartsOn` and `firstWeekContainsDate` in options', function () {
        var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6)
        var result = format(date, 'w wo ww', {
          weekStartsOn: 1,
          firstWeekContainsDate: 4,
        })
        assert(result === ['2', '2-ام', '02'].join(' '))
      })
    })

    it('ISO week of year', function () {
      var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6)
      var result = format(date, 'I Io II')
      assert(result === ['14', '14-ام', '14'].join(' '))
    })
  })

  describe('day', function () {
    it('date', function () {
      var result = format(date, 'd do dd')
      assert(result === ['15', '15-ام', '15'].join(' '))
    })

    describe('day of year', function () {
      it('works as expected', function () {
        var result = format(date, 'D Do DD DDD DDDDD', {
          useAdditionalDayOfYearTokens: true,
        })
        assert(result === ['15', '15-ام', '15', '015', '00015'].join(' '))
      })

      it('returns a correct day number for the last day of a leap year', function () {
        var result = format(
          /* 1366/12/30 */ new Date(1988, 2 /* Mar */, 20, 23, 59, 59, 999),
          'D',
          { useAdditionalDayOfYearTokens: true }
        )
        assert(result === '366')
      })
    })
  })

  describe('week day', function () {
    describe('day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'E EE EEE EEEE EEEEE EEEEEE')
        assert(result === 'جمعه جمعه جمعه جمعه ج ج')
      })
    })

    describe('ISO day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'i io ii iii iiii iiiii iiiiii')
        assert(
          result === ['5', '5-ام', '05', 'جمعه', 'جمعه', 'ج', 'ج'].join(' ')
        )
      })

      it('returns a correct day of an ISO week', function () {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'i'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })

    describe('formatting day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'e eo ee eee eeee eeeee eeeeee')
        const expected = ['7', '7-ام', '07', 'جمعه', 'جمعه', 'ج', 'ج'].join(' ')
        assert(result === expected)
      })

      it('by default, 1 is Saturday, 2 is Sunday, ...', function () {
        var result = []
        for (var i = 6; i <= 12; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'e'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })

      it('allows to specify which day is the first day of the week', function () {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(
            format(new Date(1986, 8 /* Sep */, i), 'e', { weekStartsOn: 1 })
          )
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })

    describe('stand-alone day of week', function () {
      it('works as expected', function () {
        var result = format(date, 'c co cc ccc cccc ccccc cccccc')
        assert(
          result === ['7', '7-ام', '07', 'جمعه', 'جمعه', 'ج', 'ج'].join(' ')
        )
      })

      it('by default, 1 is Saturday, 2 is Sunday, ...', function () {
        var result = []
        for (var i = 6; i <= 12; i++) {
          result.push(format(new Date(1986, 8 /* Sep */, i), 'c'))
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })

      it('allows to specify which day is the first day of the week', function () {
        var result = []
        for (var i = 1; i <= 7; i++) {
          result.push(
            format(new Date(1986, 8 /* Sep */, i), 'c', { weekStartsOn: 1 })
          )
        }
        var expected = ['1', '2', '3', '4', '5', '6', '7']
        assert.deepEqual(result, expected)
      })
    })
  })

  describe('day period and hour', function () {
    it('hour [1-12]', function () {
      var result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'h ho hh'
      )
      assert(result === ['12', '12-ام', '12'].join(' '))
    })

    it('hour [0-23]', function () {
      var result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'H Ho HH'
      )
      assert(result === ['0', '0-ام', '00'].join(' '))
    })

    it('hour [0-11]', function () {
      var result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'K Ko KK'
      )
      assert(result === ['0', '0-ام', '00'].join(' '))
    })

    it('hour [1-24]', function () {
      var result = format(
        /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        'k ko kk'
      )
      assert(result === ['24', '24-ام', '24'].join(' '))
    })

    describe('AM, PM', function () {
      it('works as expected', function () {
        var result = format(
          /* 1396/10/11 */ new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
          'a aa aaa aaaa aaaaa'
        )
        assert(result === 'ق.ظ. ق.ظ. ق.ظ. قبل‌ازظهر ق')
      })

      it('12 PM', function () {
        var date = /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'h H K k a') === '12 12 0 12 ب.ظ.')
      })

      it('12 AM', function () {
        var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(format(date, 'h H K k a') === '12 0 0 24 ق.ظ.')
      })
    })

    describe('AM, PM, noon, midnight', function () {
      it('works as expected', function () {
        var result = format(
          /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 2, 0, 0, 900),
          'b bb bbb bbbb bbbbb'
        )
        assert(result === 'ق.ظ. ق.ظ. ق.ظ. قبل‌ازظهر ق')

        var pmResult = format(
          /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 13, 0, 0, 900),
          'b bb bbb bbbb bbbbb'
        )
        assert(pmResult === 'PM PM pm p.m. p')
      })

      it('12 PM', function () {
        var date = /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'b bb bbb bbbb bbbbb') === 'ظهر ظهر ظهر ظهر ظ')
      })

      it('12 AM', function () {
        var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(
          format(date, 'b bb bbb bbbb bbbbb') ===
            'نیمه‌شب نیمه‌شب نیمه‌شب نیمه‌شب ن'
        )
      })
    })

    describe('flexible day periods', function () {
      it('works as expected', function () {
        var result = format(date, 'B, BB, BBB, BBBB, BBBBB')
        assert(result === 'صبح, صبح, صبح, صبح, ص')
      })

      it('12 PM', function () {
        var date = /* 1365/1/15 */ new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900)
        assert(format(date, 'h B') === '12 بعدازظهر')
      })

      it('5 PM', function () {
        var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 17, 0, 0, 900)
        assert(format(date, 'h B') === '5 عصر')
      })

      it('12 AM', function () {
        var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900)
        assert(format(date, 'h B') === '12 شب')
      })

      it('4 AM', function () {
        var date = /* 1365/1/17 */ new Date(1986, 3 /* Apr */, 6, 4, 0, 0, 900)
        assert(format(date, 'h B') === '4 صبح')
      })
    })
  })

  it('minute', function () {
    var result = format(date, 'm mo mm')
    assert(result === ['32', '32-ام', '32'].join(' '))
  })

  describe('second', function () {
    it('second', function () {
      var result = format(date, 's so ss')
      assert(result === ['55', '55-ام', '55'].join(' '))
    })

    it('fractional seconds', function () {
      var result = format(date, 'S SS SSS SSSS')
      assert(result === '1 12 123 1230')
    })
  })

  describe('time zone', function () {
    it('ISO-8601 with Z', function () {
      var result = format(date, 'X XX XXX XXXX XXXXX')
      var expectedResult = [
        timezoneWithOptionalMinutesAndZShort,
        timezoneWithZShort,
        timezoneWithZ,
        timezoneWithZShort,
        timezoneWithZ,
      ].join(' ')
      assert(result === expectedResult)

      var getTimezoneOffsetStub = sinon.stub(
        Date.prototype,
        'getTimezoneOffset'
      )
      getTimezoneOffsetStub.returns(0)
      var resultZeroOffset = format(date, 'X XX XXX XXXX XXXXX')
      assert(resultZeroOffset === 'Z Z Z Z Z')

      getTimezoneOffsetStub.returns(480)
      var resultNegativeOffset = format(date, 'X XX XXX XXXX XXXXX')
      assert(resultNegativeOffset === '-08 -0800 -08:00 -0800 -08:00')

      getTimezoneOffsetStub.returns(450)
      var resultNegative30Offset = format(date, 'X XX XXX XXXX XXXXX')
      assert(resultNegative30Offset === '-0730 -0730 -07:30 -0730 -07:30')

      getTimezoneOffsetStub.restore()
    })

    it('ISO-8601 without Z', function () {
      var result = format(date, 'x xx xxx xxxx xxxxx')
      var expectedResult = [
        timezoneWithOptionalMinutesShort,
        timezoneShort,
        timezone,
        timezoneShort,
        timezone,
      ].join(' ')
      assert(result === expectedResult)
    })

    it('GMT', function () {
      var result = format(date, 'O OO OOO OOOO')
      var expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT,
      ].join(' ')
      assert(result === expectedResult)

      var getTimezoneOffsetStub = sinon.stub(
        Date.prototype,
        'getTimezoneOffset'
      )
      getTimezoneOffsetStub.returns(480)
      var resultNegativeOffset = format(date, 'O OO OOO OOOO')
      assert(resultNegativeOffset === 'GMT-8 GMT-8 GMT-8 GMT-08:00')

      getTimezoneOffsetStub.returns(450)
      var resultNegative30Offset = format(date, 'O OO OOO OOOO')
      assert(resultNegative30Offset === 'GMT-7:30 GMT-7:30 GMT-7:30 GMT-07:30')

      getTimezoneOffsetStub.restore()
    })

    it('Specific non-location', function () {
      var result = format(date, 'z zz zzz zzzz')
      var expectedResult = [
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMTShort,
        timezoneGMT,
      ].join(' ')
      assert(result === expectedResult)
    })
  })

  describe('timestamp', function () {
    it('seconds timestamp', function () {
      var result = format(date, 't')
      assert(result === secondsTimestamp)
    })

    it('milliseconds timestamp', function () {
      var result = format(date, 'T')
      assert(result === timestamp)
    })
  })

  describe('long format', function () {
    it('short date', function () {
      var result = format(date, 'P')
      assert(result === '1365/01/15')
    })

    it('medium date', function () {
      var result = format(date, 'PP')
      assert(result === ['15', 'فرو', '1365'].join(' '))
    })

    it('long date', function () {
      var result = format(date, 'PPP')
      assert(result === ['15-ام', 'فروردین', '1365'].join(' '))
    })

    it('full date', function () {
      var result = format(date, 'PPPP')
      assert(result === 'جمعه 15-ام فروردین 1365')
    })

    it('short time', function () {
      var result = format(date, 'p')
      assert(result === '10:32 ق.ظ.')
    })

    it('medium time', function () {
      var result = format(date, 'pp')
      assert(result === '10:32:55 ق.ظ.')
    })

    it('long time', function () {
      var result = format(date, 'ppp')
      assert(result === '10:32:55 ق.ظ. ' + timezoneGMTShort)
    })

    it('full time', function () {
      var result = format(date, 'pppp')
      assert(result === '10:32:55 ق.ظ. ' + timezoneGMT)
    })

    it('short date + time', function () {
      var result = format(date, 'Pp')
      assert(result === '1365/01/15, 10:32 ق.ظ.')
    })

    it('medium date + time', function () {
      var result = format(date, 'PPpp')
      assert(result === '15 فرو 1365, 10:32:55 ق.ظ.')
    })

    it('long date + time', function () {
      var result = format(date, 'PPPppp')
      assert(
        result ===
          ['15-ام', 'فروردین', '1365', 'در', '10:32:55 ق.ظ.'].join(' ') +
            ' ' +
            timezoneGMTShort
      )
    })

    it('full date + time', function () {
      var result = format(date, 'PPPPpppp')
      assert(
        result ===
          ['جمعه', '15-ام', 'فروردین', '1365', 'در', '10:32:55 ق.ظ.'].join(
            ' '
          ) +
            ' ' +
            timezoneGMT
      )
    })

    it('allows arbitrary combination of date and time', function () {
      var result = format(date, 'Ppppp')
      assert(result === '1365/01/15, 10:32:55 ق.ظ. ' + timezoneGMT)
    })
  })

  describe('edge cases', function () {
    it('throws RangeError if the time value is invalid', () => {
      assert.throws(
        format.bind(null, new Date(NaN), 'MMMM d, yyyy'),
        RangeError
      )
    })

    it.skip('handles dates before 100 AD', function () {
      var initialDate = new Date(0)
      initialDate.setFullYear(7, 11 /* Dec */, 31)
      initialDate.setHours(0, 0, 0, 0)
      assert(format(initialDate, 'Y ww i') === '8 01 1')
    })
  })

  it('implicitly converts `formatString`', function () {
    // eslint-disable-next-line no-new-wrappers
    var formatString = new String('yyyy-MM-dd')

    var date = /* 1393/1/15 */ new Date(2014, 3, 4)

    // $ExpectedMistake
    assert(format(date, formatString) === '1393-01-15')
  })

  describe('custom locale', function () {
    it('allows to pass a custom locale', function () {
      var customLocale = {
        localize: {
          month: function () {
            return 'works'
          },
        },
        formatLong: {
          date: function () {
            return "'It' MMMM!"
          },
        },
      }
      // $ExpectedMistake
      var result = format(date, 'PPPP', { locale: customLocale })
      assert(result === 'It works!')
    })

    it("throws `RangeError` if `options.locale` doesn't have `localize` property", function () {
      var customLocale = {
        formatLong: {},
      }
      // $ExpectedMistake
      var block = format.bind(null, date, 'yyyy-MM-dd', {
        locale: customLocale,
      })
      assert.throws(block, RangeError)
    })

    it("throws `RangeError` if `options.locale` doesn't have `formatLong` property", function () {
      var customLocale = {
        // $ExpectedMistake
        localize: {},
      }
      // $ExpectedMistake
      var block = format.bind(null, date, 'yyyy-MM-dd', {
        locale: customLocale,
      })
      assert.throws(block, RangeError)
    })
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function () {
    // $ExpectedMistake
    var block = format.bind(
      null,
      /* 1386/10/10 */ new Date(2007, 11 /* Dec */, 31),
      'yyyy',
      {
        weekStartsOn: NaN,
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws `RangeError` if `options.firstWeekContainsDate` is not convertable to 1, 2, ..., 7 or undefined', function () {
    // $ExpectedMistake
    var block = format.bind(
      null,
      /* 1386/10/10 */ new Date(2007, 11 /* Dec */, 31),
      'yyyy',
      {
        firstWeekContainsDate: NaN,
      }
    )
    assert.throws(block, RangeError)
  })

  it('throws RangeError exception if the format string contains an unescaped latin alphabet character', function () {
    assert.throws(format.bind(null, date, 'yyyy-MM-dd-nnnn'), RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function () {
    assert.throws(format.bind(null), TypeError)
    assert.throws(format.bind(null, 1), TypeError)
  })

  describe('useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options', () => {
    it('throws an error if D token is used', () => {
      const block = format.bind(null, date, 'yyyy-MM-D')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `d` instead of `D` \(in `yyyy-MM-D`\) for formatting days of the month to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows D token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = format(date, 'yyyy-MM-D', {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, '1365-01-15')
    })

    it('throws an error if DD token is used', () => {
      const block = format.bind(null, date, 'yyyy-MM-DD')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `dd` instead of `DD` \(in `yyyy-MM-DD`\) for formatting days of the month to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows DD token if useAdditionalDayOfYearTokens is set to true', () => {
      const result = format(date, 'yyyy-MM-DD', {
        useAdditionalDayOfYearTokens: true,
      })
      assert.deepEqual(result, '1365-01-15')
    })

    it('throws an error if YY token is used', () => {
      const block = format.bind(null, date, 'YY-MM-dd')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `yy` instead of `YY` \(in `YY-MM-dd`\) for formatting years to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows YY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = format(date, 'YY-MM-dd', {
        useAdditionalWeekYearTokens: true,
      })
      assert.deepEqual(result, '65-01-15')
    })

    it('throws an error if YYYY token is used', () => {
      const block = format.bind(null, date, 'YYYY-MM-dd')
      assert.throws(block, RangeError)
      assert.throws(
        block,
        /(Use `yyyy` instead of `YYYY` \(in `YYYY-MM-dd`\) for formatting years to the input `Fri Apr 04 1986 10:32:55).*(`; see: https:\/\/git.io\/fxCyr)/g
      )
    })

    it('allows YYYY token if useAdditionalWeekYearTokens is set to true', () => {
      const result = format(date, 'YYYY-MM-dd', {
        useAdditionalWeekYearTokens: true,
      })
      assert.deepEqual(result, '1365-01-15')
    })
  })
})
