# src/add/test.ts

## adds the values from the given object

- same

## supports an undefined value in the duration object

- same

## works well if the desired month has fewer days and the provided date is on the last day of a month

- both update expected result to Jalali `1394/7/10`
- HU: `new Date(2015, 8 /* Sep */, 30)` -> `new Date(2015, 9 /* Sep */, 2)`; month comment/value look inconsistent and needs attention
- AI: `new Date(2015, 8 /* Sep */, 30)` -> `new Date(2015, 9 /* Oct */, 2)`

## handles dates before 100 AD

- HU: skip
- AI: update expected result from `0-02-29` to `0-03-21`
- needs attention

# src/addBusinessDays/test.ts

## adds the given number of business days

- HU: change argument `10` -> `12`
- AI: keep argument and change expected date to `/* 1393/6/22 */ new Date(2014, 8 /* Sep */, 13)`

## handles negative amount

- HU: change argument `-10` -> `-12`
- AI: keep argument and change expected date to `/* 1393/6/12 */ new Date(2014, 8 /* Sep */, 3)`

## returns the Monday when 1 day is added on the Friday

- HU: keep title, move input to `/* 1398/10/19 */ new Date(2020, 0 /* Jan */, 9)` and expect `/* 1398/10/21 */ new Date(2020, 0 /* Jan */, 11)`
- AI: rename to Saturday-on-Friday, keep the original input date, and expect `/* 1398/10/21 */ new Date(2020, 0 /* Jan */, 11)`
- needs attention

## returns the Monday when 1 day is added on the Satuday

- HU: keep title, move input to `/* 1398/10/20 */ new Date(2020, 0 /* Jan */, 10)` and expect `/* 1398/10/21 */ new Date(2020, 0 /* Jan */, 11)`
- AI: rename to Sunday-on-Saturday and expect `/* 1398/10/22 */ new Date(2020, 0 /* Jan */, 12)`
- needs attention

## can handle a large number of business days

- HU: scale amount to `(3387885 * 6) / 5`
- AI: keep amount and change expected date to `/* 12214/6/12 */ new Date(12835, 8 /* Sep */, 2)`

## accepts a timestamp

- HU: change argument `10` -> `12`
- AI: keep argument and change expected date to `/* 1393/6/22 */ new Date(2014, 8 /* Sep */, 13)`

## starting from a weekend day should land on a weekday when reducing a divisible by 5

- HU: rework the cases by shifting weekend start dates and using `-6` / `6`
- AI: keep `-5` / `5`, but shift weekend start dates and expected results
- needs attention

## context > allows to specify the context

- same

# src/getDayOfYear/test.ts

## returns the day of the year of the given date

- HU: change expectation to `31 * 3 + 11`
- AI: change expectation to `104`

## accepts a timestamp

- HU: change expectation to `31 * 6 + 30 * 3 + 12`
- AI: change expectation to `288`

## handles dates before 100 AD

- HU: skip
- AI: change expectation to `285`
- needs attention

## context > allows to specify the context

- same

# src/getDaysInMonth/test.ts

## returns the number of days in the month of the given date

- same

## works for the February of a leap year

- HU: rename to Esfand leap-year case and expect `30`
- AI: keep the test title and change expectation to `30`
- needs attention

## handles dates before 100 AD

- HU: skip
- AI: change expectation to `30`
- needs attention

## context > allows to specify the context

- HU: change the context inputs and keep the result at `30`
- AI: only changes the result to `30`

# src/getDecade/test.ts

## returns the decade for a the given date

- HU: change expectation to `1350`
- AI: no change

## accepts a timestamp

- HU: change expectation to `1340`
- AI: no change

## properly works with negative numbers

- HU: change expectations to `1380` and `-2630`
- AI: no change

## context > allows to specify the context

- same

# src/getMonth/test.ts

## returns the month of the given date

- same

## accepts a timestamp

- same

## context > allows to specify the context

- HU: changes the boundary inputs around `1403/6/31`
- AI: only changes the expected result to `5`

# src/getQuarter/test.ts

## returns the quarter of the given date

- same

## accepts a timestamp

- same

## context > allows to specify the context

- HU: changes the boundary inputs around `1403/3/31` and `1403/4/1`
- AI: only changes the expected result to `1`

# src/getWeekOfMonth/test.ts

## returns the week of the month of the given date

- same

## edge cases > when the given day is the first of a month > returns the week of the month of the given date

- HU: changes the input date to `1396/8/1`
- AI: changes the expectation to `2`

## edge cases > when the given day is the last of a month #1 > returns the week of the month of the given date

- HU: changes the input date to `1396/10/30` and the expectation to `6`
- AI: changes the expectation to `2`

## edge cases > when the given day is the last of a month #2 > returns the week of the month of the given date

- HU: changes the input date to `1396/6/31`
- AI: changes the expectation to `2`

## allows to specify which day is the first day of the week

- HU: changes the input date to `1396/7/1`
- AI: changes the expectation to `2`

## allows to specify which day is the first day of the week in locale

- HU: changes the input date to `1396/7/30`, updates locale option, and expects `5`
- AI: changes the expectation to `2`

## options.weekStartsOn overwrites the first day of the week specified in locale

- HU: changes the input date to `1396/7/30`, updates `weekStartsOn`, and expects `5`
- AI: changes the expectation to `4`

## accepts a timestamp

- HU: changes the timestamp input to `1396/8/1`
- AI: changes the expectation to `2`

## returns the week of the month of the given date, when the given date is sunday

- HU: changes the input date to `1396/7/2`
- AI: changes the expectation to `3`

## context > allows to specify the context

- HU: changes the context boundary inputs and expects `1`
- AI: changes the expectation to `2`

# src/getWeeksInMonth/test.ts

## returns the number of calendar weeks the month in the given date spans

- same

## accepts timestamps

- HU: changes the timestamp input to `1396/2/19`
- AI: changes the expectation to `5`

## context > allows to specify the context

- HU: changes the context boundary inputs around `1402/2/31` and `1402/3/1`
- AI: changes the expectation to `6`

# src/getWeek/test.ts

## returns the local week of year of the given date

- HU: changes the input date to `1383/1/9`
- AI: changes the expectation to `42`

## accepts a timestamp

- HU: changes the timestamp input to `1387/1/2`
- AI: changes the expectation to `42`

## handles dates before 100 AD

- HU: skip
- AI: changes the expectation to `42`
- needs attention

## properly works with negative numbers

- HU: changes the inputs and expects `2`, `1`, and `1`
- AI: changes the inputs and expects `42`, `42`, and `42`

## allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale

- HU: changes the input date to `1383/1/2`
- AI: no change

## `options.weekStartsOn` overwrites the first day of the week specified in locale

- HU: changes the input date to `1383/1/2`
- AI: no change

## context > allows to specify the context

- HU: changes the context boundary inputs and expects `23`
- AI: changes the expectation to `24`

# src/getWeekYear/test.ts

## returns the local week-numbering year of the given date

- HU: changes the input to `1383/12/30` and expects `1384`
- AI: changes the expectation to `1383`

## accepts a timestamp

- HU: changes the timestamp input to `1388/12/29` and expects `1389`
- AI: changes the expectation to `1379`

## handles dates before 100 AD

- HU: skip
- AI: changes the expectation to `-614`
- needs attention

## allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale

- HU: changes the input date to `1383/12/30`
- AI: no change

## `options.weekStartsOn` overwrites the first day of the week specified in locale

- HU: changes the input date to `1383/12/30`
- AI: no change

## context > allows to specify the context

- HU: changes the context boundary inputs and expects `1401`
- AI: changes the expectation to `1402`

# src/getYear/test.ts

## returns the year of the given date

- same

## accepts a timestamp

- HU: changes the timestamp input to `1380/1/15` and expects `1380`
- AI: changes the expectation to `1379`

## context > allows to specify the context

- HU: changes the context boundary inputs around `1402/12/29` and expects `1402`
- AI: keeps the same result `1402`

# src/isExists/test.ts

## returns false if the given date is invalid

- HU: changes the invalid Jalali date to `1399/10/31`
- AI: changes the invalid Gregorian date to `2018/11/31`

# src/isFirstDayOfMonth/test.ts

## returns true if the given date is the first day of a month

- HU: changes the input date to `1393/7/1`
- AI: changes the expectation to `false`

## accepts a timestamp

- HU: changes the timestamp input to `1393/7/1`
- AI: changes the expectation to `false`

## context > allows to specify the context

- HU: changes the context boundary inputs
- AI: changes the expectation to `false`

# src/isLastDayOfMonth/test.ts

## returns true if the given date is in the last day of month

- HU: changes the input date to `1393/8/30`
- AI: changes the expectation to `false`

## accepts a timestamp

- HU: changes the timestamp input to `1393/8/30`
- AI: changes the expectation to `false`

## context > allows to specify the context

- HU: changes the context boundary inputs
- AI: changes the expectation to `false`

# src/isLeapYear/test.ts

## context > allows to specify the context

- HU: changes the context input to `1399/1/1`
- AI: changes the expectation to `false`

# src/isMatch/test.ts

## accepts a date & format with locale

- HU: changes the locale example to `28th of farvardin`
- AI: changes the locale example to `28th of Bahman`

# src/isSameMonth/test.ts

## returns true if the given dates have the same month (and year)

- HU: changes one input date to `1393/6/3`
- AI: changes one input date to `1393/6/24`

## accepts a timestamp

- HU: changes one timestamp input to `1393/6/3`
- AI: changes one timestamp input to `1393/6/24`

## normalizes the dates

- HU: rewrites normalization around `TZDate` inputs
- AI: changes the expectation to `true`

## context > allows to specify the context

- HU: changes the compared context dates
- AI: changes one context date to `1393/6/25`

# src/isSameQuarter/test.ts

## accepts a timestamp

- HU: changes the timestamp input comment/date pairing
- AI: changes the timestamp input comment/date pairing differently

## normalizes the dates

- HU: rewrites normalization around quarter-boundary `TZDate` inputs
- AI: changes the expectation to `true`

## context > allows to specify the context

- HU: changes the compared context dates around `1403/9/30`
- AI: changes the expectation to `true`

# src/isSameWeek/test.ts

## returns false if the given dates have different weeks

- HU: changes one input date to `1393/6/7`
- AI: changes the expectation to `true`

## context > allows to specify the context

- HU: changes the compared context dates
- AI: changes the expectation to `true`

# src/isSameYear/test.ts

## context > allows to specify the context

- HU: changes the compared context dates around `1402/12/29`
- AI: changes expectations to `true` and `false`

# src/isThisMonth/test.ts

## accepts a timestamp

- same

## context > allows to specify the context

- HU: changes the context boundary inputs around `1393/6/1`
- AI: changes the context boundary input to `1393/5/31`

# src/isThisQuarter/test.ts

## context > allows to specify the context

- HU: changes the context boundary inputs around `1402/10/1`
- AI: changes the context boundary input to `1402/9/30`

# src/isThisWeek/test.ts

## context > allows specifying the context

- HU: changes the context boundary inputs around `1403/5/27`
- AI: changes the expectation to `true`

# src/isThisYear/test.ts

## returns true if the given date and the current date have the same year

- HU: changes the input date to `1392/4/11`
- AI: changes the input date to `1392/12/17`

## accepts a timestamp

- HU: changes the timestamp input to `1392/4/11`
- AI: changes the timestamp input to `1392/12/17`

## context > allows to specify the context

- HU: changes the context boundary inputs around `1402/1/1`
- AI: changes the context boundary input to `1401/10/11`

# src/isWeekend/test.ts

## returns true if the given date is in a weekend

- HU: changes the input date to `1393/7/4`
- AI: changes the expectation to `false`

## accepts a timestamp

- HU: changes the timestamp input to `1393/7/4`
- AI: changes the expectation to `false`

## context > allows to specify the context

- HU: changes the context boundary inputs around `1403/5/26`
- AI: changes expectations to `false` and `true`

## DST (Asia/Tehran) > works across DST-start weekend

- same

# src/eachWeekendOfYear/test.ts

- same

# src/eachWeekOfInterval/test.ts

- same

# src/intervalToDuration/test.ts

## returns correct duration (1 of everything)

- HU: changes the sample dates only
- AI: changes expected `days` from `1` to `2`

## returns a negative duration if interval's start date is greater than its end date

- HU: changes the sample dates only
- AI: changes expected result from `{ months: -1 }` to `{ months: -1, days: -2 }`

## edge cases > returns correct duration for end of month start dates - issue 2611

- HU: changes the start/end sample to another month-boundary case
- AI: changes expected end date from `1400/7/8` to `1400/7/9`

## edge cases > returns correct duration for Feb 28 to Apr 30 interval - issue 2910

- HU: skip
- AI: unskip and change expected `days` from `2` to `1`

## edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 31 interval

- HU: skip
- AI: unskip and change expected duration from `6 months, 3 days` to `5 months, 30 days`

## edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 30 interval

- HU: skip
- AI: unskip and change expected duration from `6 months, 2 days` to `5 months, 29 days`

## edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 29 interval

- HU: skip
- AI: unskip and change expected duration from `6 months, 1 day` to `5 months, 28 days`

## edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 28 interval

- HU: skip
- AI: unskip and change expected duration from `6 months` to `5 months, 27 days`

## edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 27 interval

- HU: skip
- AI: unskip and change expected `days` from `30` to `26`

## edge cases > issue 2470 > returns correct duration for Apr 30 to May 31 interval

- HU: skip
- AI: unskip and remove expected `days: 1`

## normalizes the dates

- HU: changes the normalization sample dates
- AI: changes normalized `days` from `30` to `29` in both directions

## context > allows to specify the context

- HU: changes the context end timestamp only
- AI: adds expected `days: 1` in both context assertions

# src/intlFormatDistance/test.ts

- needs attention: AI also wraps `intlFormatDistance` in this file to default `locale: "en-US"`

## with default values > works with single month > works with future with more than a month

- HU: changes the sample dates and keeps `next month`
- AI: keeps dates and changes expected text to `in 2 months`

## with default values > works with single month > works with past with more than a month

- HU: changes the sample dates and keeps `last month`
- AI: keeps dates and changes expected text to `2 months ago`

## with default values > works with single quarter > works with future with more than a quarter

- HU: changes the sample dates and keeps `next quarter`
- AI: keeps dates and changes expected text to `in 2 quarters`

## with default values > works with single quarter > works with past with more than a quarter

- HU: changes the sample dates and keeps `last quarter`
- AI: keeps dates and changes expected text to `2 quarters ago`

## with default values > works with single year > works with future with more that a year

- HU: changes the sample dates and keeps `next year`
- AI: keeps dates and changes expected text to `in 2 years`

## with default values > works with single year > works with past with more than a year

- HU: changes the sample dates and keeps `last year`
- AI: keeps dates and changes expected text to `2 years ago`

# src/lastDayOfDecade/test.ts

## returns the date with the time set to 00:00:00 and the date set to the last day of a decade

- HU: changes expected result from Gregorian decade end to Jalali decade end `1369/12/29`
- AI: no change

## accepts a timestamp

- HU: changes expected result from Gregorian decade end to Jalali decade end `1359/12/29`
- AI: no change

## properly works with negative numbers

- HU: changes both expected decade-end results to Jalali boundaries
- AI: no change

## context > allows to specify the context

- HU: changes context inputs and expected ISO strings to Jalali decade boundaries
- AI: no change

# src/lastDayOfMonth/test.ts

## returns the date with the time set to 00:00:00 and the date set to the last day of a month

- same

## accepts a timestamp

- same

## edge cases > works for the February of a leap year

- HU: renames the case to Esfand, changes the sample date, and expects `1399/12/30`
- AI: keeps the February case and changes expected result to `1390/11/30`
- needs attention

## edge cases > works for the February of a non-leap year

- HU: renames the case to Esfand, changes the sample date, and expects `1398/12/29`
- AI: keeps the February case and changes expected result to `1392/11/30`
- needs attention

## context > allows to specify the context

- same

# src/lightFormat/test.ts

## accepts a timestamp

- same

## escapes characters between the single quote characters

- same

## accepts new line character

- same

## year > regular year > works as expected

- same

## year > regular year > 1 BC formats as 1

- HU: changes the sample date to an explicit Jalali year `1` case and keeps expected `1`
- AI: keeps the original date setup and changes expected result to `623`
- needs attention

## year > regular year > 2 BC formats as 2

- HU: changes the sample date to an explicit Jalali year `2` case and keeps expected `2`
- AI: keeps the original date setup and changes expected result to `624`
- needs attention

## month > formatting month

- same

## day > date

- same

# src/set/test.ts

## sets all values

- same

## sets year

- same

## sets month

- same

## sets day of month

- same

## context > allows to specify the context

- same

## value overflow > months overflow into years

- same

## value overflow > days of months overflow into months

- HU: changes the sample input and expects overflow into `1393/8/1`
- AI: keeps the original input and expects `1393/6/31`
- needs attention

## edge cases > sets January

- same

## edge cases > sets the last day of new month if the initial date was the last day of a longer month

- HU: changes the sample to a Jalali month-end case and expects `1393/9/30`
- AI: keeps the original sample and changes expected result to `1393/9/9`
- needs attention

# src/setDefaultOptions/test.ts

## locale > format

- same

## locale > formatDistance

- same

## locale > formatDistanceStrict

- same

## locale > formatDuration

- same

## locale > formatRelative

- same

## locale > isMatch

- HU: changes locale sample strings to Jalali text with `11 دی 1392 ...`
- AI: changes locale sample strings to Jalali text with ordinal `11-ام دی 1392 ...`
- needs attention

## locale > parse

- HU: changes parse input strings to Jalali text with `11 دی 1392 ...`
- AI: changes parse input strings to Jalali text with ordinal `11-ام دی 1392 ...`
- needs attention

## weekStartsOn > eachWeekOfInterval

- same

## weekStartsOn > endOfWeek

- same

## weekStartsOn > getWeekOfMonth

- same

## weekStartsOn > getWeeksInMonth

- same

## weekStartsOn > lastDayOfWeek

- same

## weekStartsOn > startOfWeek

- same

## firstWeekContainsDate > format

- same

## firstWeekContainsDate > getWeek

- same

## firstWeekContainsDate > getWeekYear

- same

## firstWeekContainsDate > parse

- HU: changes parsed week-year input from `2018` to `1396` and expects Jalali boundary dates
- AI: keeps input `2018` and changes expected results to years `2639`
- needs attention

## firstWeekContainsDate > setWeek

- same

## firstWeekContainsDate > setWeekYear

- HU: changes the target week-year argument from `2004` to `1382` and expects Jalali dates
- AI: keeps `2004` and changes expected results to years `2625` and `2626`
- needs attention

## firstWeekContainsDate > startOfWeekYear

- same

# src/setMonth/test.ts

## sets the month

- same

## sets the last day of the month if the original date was the last day of a longer month

- HU: changes the sample to a Jalali month-end case and expects `1393/10/30`
- AI: keeps the original sample and changes expected result to `1393/2/10`
- needs attention

## accepts a timestamp

- same

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from February 29 to April 30
- needs attention

## context > allows to specify the context

- same

# src/setQuarter/test.ts

## sets the quarter of the year

- same

## sets the last day of the month if the original date was the last day of a longer month

- HU: changes the sample to a Jalali month-end case and expects `1393/8/30`
- AI: keeps the original sample and changes expected result to `1393/3/9`
- needs attention

## accepts a timestamp

- same

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from February 29 to May 30
- needs attention

## context > allows to specify the context

- same

# src/setWeek/test.ts

## sets the local week

- HU: changes the sample date and expects `1384/1/2`
- AI: keeps the original sample and changes expected result to `1383/1/2`
- needs attention

## accepts a timestamp

- same

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result to March 14
- needs attention

## allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale

- same

## `options.weekStartsOn` overwrites the first day of the week specified in locale

- same

## context > allows to specify the context

- same

# src/setWeekYear/test.ts

## sets the local week-numbering year, saving the week and the day of the week

- HU: changes the sample and target year to Jalali values and expects `1381/12/25`
- AI: keeps the original `2004` target and changes expected result to year `2625`
- needs attention

## accepts a timestamp

- HU: changes the sample and target year to Jalali values and expects `1381/1/1`
- AI: keeps the original `2007` target and changes expected result to year `2628`
- needs attention

## sets local week-numbering years less than 100

- HU: skip
- AI: changes expected pre-100 result to year `628`
- needs attention

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result to year `628`
- needs attention

## allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale

- HU: changes the sample and target year to Jalali values and expects `1382/1/7`
- AI: keeps the original `2004` target and changes expected result to year `2625`
- needs attention

## `options.weekStartsOn` overwrites the first day of the week specified in locale

- HU: changes the sample and target year to Jalali values and expects `1382/1/7`
- AI: keeps the original `2004` target and changes expected result to year `2625`
- needs attention

## context > allows to specify the context

- HU: changes context target years to Jalali `1393` and `1395`
- AI: keeps Gregorian target years and changes expected ISO strings to years `2635` and `2637`
- needs attention

# src/startOfDecade/test.ts

## returns the date with the time set to 00:00:00 and the date set to the first day of a year

- HU: changes expected result from Gregorian decade start to Jalali decade start `1330/1/1`
- AI: no change

## accepts a timestamp

- HU: changes expected result from Gregorian decade start to Jalali decade start `1360/1/1`
- AI: no change

## properly works with negative numbers

- HU: changes both expected decade-start results to Jalali boundaries
- AI: no change

## context > allows to specify the context

- HU: changes context inputs and expected ISO strings to Jalali decade boundaries
- AI: no change

# src/startOfWeek/test.ts

## returns the date with the time set to 00:00:00 and the date set to the first day of a week

- same

## accepts a timestamp

- same

## edge cases > handles the week at the start of a year

- same

## context > allows to specify the context

- HU: shifts the context input dates back one day and expects week starts at `1403/5/20` or `1403/5/27`
- AI: mostly keeps the original inputs and changes the first two expected results to `1403/5/27`
- needs attention

# src/startOfWeekYear/test.ts

## returns the date with the time set to 00:00:00 and the date set to the first day of a week year

- same

## accepts a timestamp

- same

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from December 28 to March 22
- needs attention

## allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale

- same

## `options.weekStartsOn` overwrites the first day of the week specified in locale

- same

## context > allows to specify the context

- same

# src/startOfYear/test.ts

## returns the date with the time set to 00:00:00 and the date set to the first day of a year

- same

## accepts a timestamp

- same

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from January 1 to March 22
- needs attention

## context > allows to specify the context

- HU: changes the context inputs to Jalali year-boundary timestamps and expects `1401/1/1` or `1402/1/1`
- AI: keeps the original year-end inputs and changes all expected results to `1402/1/1`
- needs attention

# src/sub/test.ts

## subtracts the duration from the given date

- same

## works well if the desired month has fewer days and the provided date is in the last day of a month

- both update expected result to Jalali `1393/7/10`
- HU: result date comment says `Sep`
- AI: result date comment says `Oct`
- needs attention

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from February 28 to March 21
- needs attention

# src/subBusinessDays/test.ts

## subtract the given number of business days

- HU: changes amount `10` -> `12` and keeps expected result
- AI: keeps amount and changes expected result to `1393/5/29`

## handles negative amount

- HU: fixes the input date/comment and changes amount `-10` -> `-12`
- AI: keeps amount and changes expected result to `1393/6/8`

## can handle a large number of business days

- HU: scales the amount to `(3387885 * 6) / 5` and keeps expected result
- AI: keeps amount and changes expected result to `3557/2/14`

## accepts a timestamp

- HU: changes amount `10` -> `12` and keeps expected result
- AI: keeps amount and changes expected result to `1393/5/29`

## context > allows to specify the context

- same

# src/subMonths/test.ts

## subtracts the given number of months

- same

## works if the desired month has fewer days and the provided date is in the last day of a month

- same

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from February 28 to March 21
- needs attention

## context > allows to specify the context

- same

# src/subQuarters/test.ts

## works well if the desired month has fewer days and the provided date is in the last day of a month

- HU: changes the sample date to `1393/1/31` and expects `1392/10/30`
- AI: keeps the original sample and changes expected result to `1393/7/10`
- needs attention

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from February 29 to March 21
- needs attention

## context > allows to specify the context

- same

# src/subYears/test.ts

## handles the leap years properly

- same

## handles dates before 100 AD

- HU: skip
- AI: changes expected pre-100 result from February 28 to March 21
- needs attention

## context > allows to specify the context

- same

# src/endOfQuarter/test.ts

- same

# src/endOfWeek/test.ts

- same

# src/endOfYear/test.ts

- same

# src/getDate/test.ts

- same

# src/getDefaultOptions/test.ts

- same

# src/lastDayOfQuarter/test.ts

- same

# src/lastDayOfWeek/test.ts

- same

# src/lastDayOfYear/test.ts

- same

# src/newDate/test.ts

- same

# src/setDate/test.ts

- same

# src/setDayOfYear/test.ts

- same

# src/setDay/test.ts

- same

# src/setYear/test.ts

- same

# src/startOfMonth/test.ts

- same

# src/startOfQuarter/test.ts

- same

# src/addMonths/test.ts

## adds the given number of months

- same

## works well if the desired month has fewer days and the provided date is in the last day of a month

- HU: `const date = /* 1393/10/30 */ new Date(2015, 0 /* Jan */, 20);`; `expect(result).toEqual(/* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20));`
- AI: `expect(result).toEqual(/* 1393/12/10 */ new Date(2015, 2 /* Mar */, 1));`

## handles dates before 100 AD

- HU: skip
- AI: `expectedResult.setFullYear(0, 2 /* Mar */, 21);`
- needs attention

## works at DST-start boundary in local timezone: Asia/Tehran

- same

## works at DST-start - 30 mins in local timezone: Asia/Tehran

- same

## works at DST-start - 60 mins in local timezone: Asia/Tehran

- same

## context > allows to specify the context

- same

# src/addQuarters/test.ts

## works well if the desired month has fewer days and the provided date is in the last day of a month

- HU: `const date = /* 1393/3/31 */ new Date(2014, 5 /* Jun */, 21);`; `expect(result).toEqual(/* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20));`
- AI: `expect(result).toEqual(/* 1394/7/10 */ new Date(2015, 9 /* Oct */, 2));`

## handles dates before 100 AD

- HU: skip
- AI: `expectedResult.setFullYear(0, 2 /* Mar */, 21);`
- needs attention

## context > allows to specify the context

- same

# src/addYears/test.ts

## handles dates before 100 AD

- HU: `setFullYear(initialDate, 0, 1 /* Feb */, 29);`; `setFullYear(expectedResult, 1, 1 /* Feb */, 29);`
- AI: `expectedResult.setFullYear(1, 2 /* Mar */, 21);`

# src/differenceInBusinessDays/test.ts

## returns the number of business days between the given dates, excluding weekends

- same

## can handle long ranges

- same

## the same except given first date falls on a weekend

- HU: `/* 1398/4/28 */ new Date(2019, 6 /* Jul */, 19),`; `/* 1398/4/26 */ new Date(2019, 6 /* Jul */, 17),`
- AI: `/* 1398/4/28 */ new Date(2019, 6 /* Jul */, 19),`; `expect(result).toBe(1);`

## the same except given second date falls on a weekend

- HU: `/* 1398/4/31 */ new Date(2019, 6 /* Jul */, 22),`; `/* 1398/4/28 */ new Date(2019, 6 /* Jul */, 19),`; `expect(result).toBe(2);`
- AI: `/* 1398/4/30 */ new Date(2019, 6 /* Jul */, 21),`; `/* 1398/4/28 */ new Date(2019, 6 /* Jul */, 19),`

## the same except both given dates fall on a weekend

- same

## returns a negative number if the time value of the first date is smaller

- HU: `expect(result).toBe(-164);`
- AI: `/* 1393/4/27 */ new Date(2014, 6 /* Jul */, 18),`; `expect(result).toBe(-162);`

## accepts timestamps

- same

## normalizes the dates

- same

## context > allows to specify the context

- same

## edge cases > the same for the swapped dates

- HU: `/* 1393/6/12 */ new Date(2014, 8 /* Sep */, 3, 23, 59),`; `/* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4, 0, 0),`
- AI: `/* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6, 23, 59),`; `/* 1393/6/16 */ new Date(2014, 8 /* Sep */, 7, 0, 0),`

# src/differenceInCalendarMonths/test.ts

## edge cases > returns 1 when dates are in different months but less than a month apart

- same

## edge cases > returns -1 for swapped dates with a month difference

- same

## normalizes the dates

- HU: `const dateLeft = /* 1403/10/1 */ new TZDate(2024, 11, 21, "Asia/Singapore");`; `const dateRight = /* 1402/10/1 */ new TZDate(`; `2023,`; `...`
- AI: `expect(differenceInCalendarMonths(dateRight, dateLeft)).toBe(-12);`

## context > allows to specify the context

- HU: `/* 1404/6/31 */ "2025-09-22T00:00:00Z",`; `/* 1404/6/1 */ "2025-08-23T04:00:00Z",`
- AI: `).toBe(1);`

# src/differenceInCalendarQuarters/test.ts

## edge cases > the difference is less than a quarter, but the given dates are in different calendar quarters

- HU: `/* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23),`; `/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22),`
- AI: `/* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),`; `/* 1393/3/31 */ new Date(2014, 5 /* Jun */, 21),`

## edge cases > the same for the swapped dates

- HU: `/* 1393/6/31 */ new Date(2014, 8 /* Sep */, 22),`; `/* 1393/7/1 */ new Date(2014, 8 /* Sep */, 23),`
- AI: `/* 1393/3/31 */ new Date(2014, 5 /* Jun */, 21),`; `/* 1393/4/1 */ new Date(2014, 5 /* Jun */, 22),`

## normalizes the dates

- HU: `const dateLeft = /* 1403/4/1 */ new TZDate(2024, 5, 21, "Asia/Singapore");`; `const dateRight = /* 1402/12/1 */ new TZDate(`; `2024,`; `...`
- AI: `expect(differenceInCalendarQuarters(dateRight, dateLeft)).toBe(-2);`

## context > allows to specify the context

- HU: `/* 1403/4/1 */ "2024-06-21T04:00:00Z",`; `/* 1403/1/1 */ "2024-03-20T00:00:00Z",`
- AI: `).toBe(1);`

# src/differenceInCalendarWeeks/test.ts

## accepts timestamps

- same

## edge cases > the difference is less than a week, but the given dates are in different calendar weeks

- HU: `/* 1393/4/13 */ new Date(2014, 6 /* Jul */, 4),`
- AI: `/* 1393/4/21 */ new Date(2014, 6 /* Jul */, 12),`; `/* 1393/4/20 */ new Date(2014, 6 /* Jul */, 11),`

## edge cases > the same for the swapped dates

- HU: `/* 1393/4/13 */ new Date(2014, 6 /* Jul */, 4),`
- AI: `/* 1393/4/20 */ new Date(2014, 6 /* Jul */, 11),`; `/* 1393/4/21 */ new Date(2014, 6 /* Jul */, 12),`

## edge cases > properly works with negative numbers

- HU: `const a = /* 1393/4/15 */ new Date(2014, 6 /* Jul */, 6);`; `const b = /* 1393/4/25 */ new Date(2014, 6 /* Jul */, 16);`
- AI: `expect(differenceInCalendarWeeks(b, a)).toBe(2);`; `expect(differenceInCalendarWeeks(a, b)).toBe(-2);`

## normalizes the dates

- HU: `const dateLeft = /* 1403/4/16 */ new TZDate(2024, 6, 6, "Asia/Singapore");`; `const dateRight = /* 1403/4/9 */ new TZDate(`; `29`
- AI: `expect(differenceInCalendarWeeks(dateRight, dateLeft)).toBe(-1);`

## context > allows to specify the context

- HU: `/* 1403/5/27 */ "2024-08-17T03:00:00Z",`; `/* 1403/5/10 */ "2024-07-31T00:00:00Z",`; `/* 1403/5/27 */ "2024-08-17T04:00:00Z",`
- AI: `).toBe(3);`

# src/differenceInCalendarYears/test.ts

## edge cases > the difference is less than a year, but the given dates are in different calendar years

- same

## edge cases > the same for the swapped dates

- same

## normalizes the dates

- HU: `const dateLeft = /* 1403/1/1 */ new TZDate(2024, 2, 20, "Asia/Singapore");`; `const dateRight = /* 1402/1/1 */ new TZDate(`; `2023,`; `...`
- AI: `expect(differenceInCalendarYears(dateRight, dateLeft)).toBe(-1);`

## context > allows to specify the context

- HU: `/* 1404/1/1 */ "2025-03-21T03:00:00Z",`; `/* 1402/1/1 */ "2023-03-21T00:00:00Z",`; `/* 1404/1/1 */ "2025-03-21T04:00:00Z",`
- AI: `).toBe(2);`

# src/differenceInMonths/test.ts

## edge cases > it returns diff of 1 month between Feb 28 2021 and Jan 30 2021

- HU: rename to `it returns diff of 1 month between 29 Esfand 1398 and 30 Bahman 1398`; `/* 1398/12/29 */ new Date(2020, 2 /* Mar */, 19),`; `/* 1398/11/30 */ new Date(2020, 1 /* Feb */, 19),`
- AI: `expect(result).toBe(0);`
- needs attention

## edge cases > it returns diff of 1 month between Feb 28 2021 and Jan 31 2021

- HU: rename to `it returns diff of 1 month between 30 Esfand 1399 and 30 Bahman 1399`; `/* 1399/12/30 */ new Date(2021, 2 /* Mar */, 20),`; `/* 1399/11/30 */ new Date(2021, 1 /* Feb */, 18),`
- AI: `expect(result).toBe(0);`
- needs attention

## edge cases > it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021

- HU: rename to `it returns diff of 6 month between 31 Ordibehesh 1400 and 30 Azar 1399`; `/* 1400/2/31 */ new Date(2021, 4 /* May */, 21),`; `/* 1399/8/30 */ new Date(2020, 10 /* Nov */, 20),`
- AI: `expect(result).toBe(5);`
- needs attention

## normalizes the dates

- HU: `const dateLeft = /* 1403/1/1 */ new TZDate(2024, 2, 20, "Asia/Singapore");`; `const dateRight = /* 1402/1/1 */ new TZDate(`; `2023,`; `...`
- AI: `expect(differenceInMonths(dateLeft, dateRight)).toBe(12);`; `expect(differenceInMonths(dateRight, dateLeft)).toBe(-12);`

# src/differenceInQuarters/test.ts

## returns the number of full quarters between the given dates with `trunc` as a default rounding method

- HU: `/* 1390/4/12 */ new Date(2011, 6 /* Jul */, 3, 6, 0),`
- AI: `expect(result).toBe(4);`

## accepts timestamps

- HU: `/* 1389/4/10 */ new Date(2010, 6 /* Jul */, 1).getTime(),`
- AI: `expect(result).toBe(16);`

# src/differenceInYears/test.ts

## leap days > supports past dates with right side after leap day

- HU: `/* 1383/12/30 */ new Date(2005, 2 /* Mar */, 20, 0, 0),`; `/* 1382/1/1 */ new Date(2003, 2 /* Mar */, 21, 0, 0),`
- AI: `expect(result).toBe(2);`

## edge cases > the days and months of the given dates are the same

- HU: `/* 1393/6/15 */ new Date(2014, 8 /* Sep */, 6),`
- AI: `expect(result).toBe(1);`

# src/eachMonthOfInterval/test.ts

## returns an array with starts of months from the month of the start date to the month of the end date

- same

## accepts timestamps

- same

## handles the dates that are not starts of days

- same

## handles the dates that are not containing days

- same

## returns one month if the both arguments are on the same month

- same

## returns one month if the both arguments are the same

- same

## returns reversed array if the start date is after the end date

- same

## options.step > returns an array with starts of days from the day of the start date to the day of the end date with the given step

- same

## options.step > returns reversed array if `options.step` is negative

- same

## options.step > reverses array twice if `options.step` is negative and the interval is negative too

- same

## normalizes the dates

- HU: rewrite normalization case around explicit `TZDate` construction and a full month-by-month expected list
- AI: rewrite expectations to ISO-string month starts

## context > allows to specify the context

- same

# src/eachQuarterOfInterval/test.ts

## returns an array with starts of quarters from the quarter of the start date to the quarter of the end date

- same

## accepts timestamps

- same

## handles the dates that are not starts of days

- same

## handles the dates that are not containing days

- same

## returns one quarter if the both arguments are on the same quarter

- same

## returns one quarter if the both arguments are the same

- same

## returns reversed array if the start date is after the end date

- same

## normalizes the dates

- HU: rewrite normalization case around explicit `TZDate` quarter boundaries
- AI: rewrite expectations to ISO-string quarter starts

## context > allows to specify the context

- HU: rewrite the context interval and expected quarter starts
- AI: update expected ISO quarter-start outputs

## options.step > returns an array with starts of days from the day of the start date to the day of the end date with the given step

- same

## options.step > returns reversed array if `options.step` is negative

- same

## options.step > reverses array twice if `options.step` is negative and the interval is negative too

- same

# src/eachWeekendOfInterval/test.ts

## returns all weekends within the interval

- HU: change the interval start/end dates
- AI: no change

## returns all weekends within the interval when starting on a weekend

- HU: change the interval start/end dates
- AI: only changes the month comment spelling to `Sept`

## returns reversed array if the start date is after the end date

- same

## normalizes the dates

- same

## context > allows to specify the context

- HU: updates the context weekend list with one result landing on `1403/2/0`
- AI: updates the same list but keeps that slot as `1403/1/31`

# src/eachWeekendOfMonth/test.ts

## returns all weekends of the given month

- HU: change the input month and rewrite the full expected weekend list
- AI: keep the input and update the expected weekends only

## context > allows to specify the context

- same

# src/eachYearOfInterval/test.ts

## returns an array with starts of days from the day of the start date to the day of the end date

- same

## accepts timestamps

- same

## handles the dates that are not starts of days

- same

## returns one year if the both arguments are on the same year

- same

## returns one year if the both arguments are the same

- same

## returns reversed array if the start date is after the end date

- same

## options.step > returns an array with starts of days from the day of the start date to the day of the end date with the given step

- same

## options.step > returns reversed array if `options.step` is negative

- same

## options.step > reverses array twice if `options.step` is negative and the interval is negative too

- same

## normalizes the dates

- HU: rewrite normalization case around explicit `TZDate` year boundaries and expected list
- AI: rewrite expectations to ISO-string year starts

## context > allows to specify the context

- same

# src/endOfDecade/test.ts

## returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade

- HU: update expected result to Jalali decade-end `1399/12/30`
- AI: no change

## accepts a timestamp

- HU: update expected result to Jalali decade-end `1389/12/29`
- AI: no change

## properly works with negative numbers

- HU: update both negative-year expectations to Jalali decade-end dates
- AI: no change

## context > allows to specify the context

- HU: update both context expectations to `1409/12/29`
- AI: no change

# src/endOfMonth/test.ts

## returns the date with the time set to 23:59:59.999 and the date set to the last day of a month

- same

## accepts a timestamp

- same

## edge cases > works for last month in year

- HU: change the input date and expected result to a Jalali year-end case
- AI: keep the test shape but change the expected date to `1393/9/30`

## edge cases > works for last day of month

- HU: change the input date to `1393/8/30` and keep the same expected end-of-month value
- AI: keep the existing expected end-of-month value

## context > allows to specify the context

- same

# src/parse/test.ts

## escapes characters between the single quote characters

- HU: replace the English input with `1397 hello world تیر 2-ام` and expect `/* 1397/4/2 */ new Date(2018, 5 /* Jun */, 23)`
- AI: wrap `parse` with `locale: enUS`, build the input from `format(expected, "yyyy 'hello world' MMMM do", { locale: enUS })`, and assert the generated `expected`
- needs attention

## accepts new line character

- HU: change the input to Jalali `1393-01-15\n05:00:00` and keep the same parsed instant
- AI: keep Gregorian input `2014-04-04\n05:00:00` and rewrite the expected result to the Jalali-mapped output date
- needs attention

## era / local week-numbering year / ISO week-numbering year / extended year

- HU: skip these describe blocks; it also skips the strict-validation local week-numbering year sub-block
- AI: keep them enabled, add an `enUS` parser wrapper, and rewrite expectations with `newDate(...)` or recalculated mapped dates
- needs attention

## calendar year

- HU: localize the successful and validation inputs to Jalali values such as `1395`, `1395-ام`, `80`, and `1398`
- AI: keep Gregorian-style inputs such as `2017`, `2017th`, `02`, and `2019`, then rewrite the expected parsed dates
- needs attention

## quarter with following year / quarter (formatting) / quarter (stand-alone)

- HU: switch quarter examples to Persian quarter labels like `س‌م1` and `سه‌ماهه 4`
- AI: keep numeric or English-friendly quarter inputs and mostly recalculate only the expected dates under the `enUS` wrapper
- needs attention

## month (formatting) / month (stand-alone)

- HU: switch month inputs to Persian month names and ordinals such as `آبا`, `بهمن`, and `6-ام`
- AI: keep English month parsing, often generating the input with `format(..., { locale: enUS })`
- needs attention

## week / day / weekday parsing blocks

- HU: localize week, day, and weekday inputs and related validation examples to Jalali or Farsi tokens
- AI: keep English or Gregorian inputs and rewrite the expected results instead
- needs attention

## day period / hour / minute / second

- HU: switch the inputs to Persian day-period strings like `ب.ظ.` and Farsi ordinals
- AI: keep English day-period inputs like `p.m.` and adjust the parsed expectations
- needs attention

## timezone (ISO-8601 w/ Z) / timezone (ISO-8601 w/o Z)

- HU: change the calendar date portion in the input strings to Jalali dates such as `1395-09-05` and keep native `new Date(...)` expectations
- AI: keep Gregorian ISO strings such as `2016-11-25...` and rewrite the expected parsed dates to mapped Jalali results
- needs attention

## common formats

- HU: localize the basic ISO/common-format inputs and skip `Date.prototype.toString()` and `Date.prototype.toISOString()`
- AI: keep Gregorian/basic English inputs, generate `Date.prototype.toString()` with `format(..., { locale: enUS })`, and keep both tests enabled
- needs attention

## accepts a timestamp as `referenceDate` / failure / edge cases

- HU: localize date strings and examples such as `6 ب.ظ.` and `1395-8-15`
- AI: keep English/Gregorian strings such as `6 p.m.` and `2016-11-05`
- needs attention

## with `options.strictValidation` = true

- HU: rename leap-day coverage to `30th of esfand` cases and skip the local week-numbering year sub-block
- AI: keep Gregorian-style strict-validation cases enabled and change the day-of-year coverage to `returns Invalid Date for 366th day of non-leap year`
- needs attention

## useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options

- HU: localize `D` / `DD` success cases to Jalali years and skip the `YY` and `YYYY` allow-cases
- AI: keep Gregorian `D` / `DD` examples and keep the `YY` and `YYYY` allow-cases enabled
- needs attention

## long format / custom locale / context / time zones

- HU: hardcode Jalali/Farsi long-format strings, skip `custom locale`, and use Jalali context/DST strings with hardcoded ISO outputs
- AI: generate many long-format/context strings via `format(..., { locale: enUS })`, keep `custom locale` enabled, and compare context outputs against `new TZDate(...)`
- needs attention

# src/parseJSON/test.ts

## parses a formatted new Date() back to UTC - issue 2149

- HU: replace the dynamic round-trip with a fixed input string `2021-03-07T15:13:58.172+03:30` and a fixed UTC expectation `2021-03-07T11:43:58.172Z`
- AI: change the input from `format(date, ...)` to `date.toISOString()` and keep the dynamic round-trip assertion against `date.toISOString()`
- needs attention

# src/format/test.ts

## accepts a timestamp / escapes characters between the single quote characters / accepts new line character

- same

## ordinal numbers

- HU: rewrite both tests into Jalali/Farsi phrasing and shift the ordinal loop dates so the output runs `1-ام` through `31-ام`
- AI: keep the original English scaffold and January loop shape, but update the expected ordinals to the Jalali sequence starting at `11-ام`
- needs attention

## era

- same

## year

- both convert the main year-format expectations to Jalali values
- HU: skip the regular-year BC cases, and skip the local week-numbering year and extended year blocks
- AI: keep those BC and extra year blocks enabled and recalculate their expectations, e.g. `623` / `624` and `-622` / `-623`
- needs attention

## quarter

- both update formatting and stand-alone quarter outputs to Jalali strings like `س‌م1` and `سه‌ماهه 1`
- HU: shift the month loop by `i + 3` so the quarter sequence is `1 1 1 ... 4 4 4`
- AI: keep the Jan-to-Dec loop and change the expected sequence to `4 4 4 1 1 1 2 2 2 3 3 3`
- needs attention

## month

- same fix; AI mostly flattens joined expected strings into string literals

## week

- same fix; AI mostly flattens joined expected strings into string literals

## day

- both update the main `date` and `day of year` expectations to Jalali values
- HU: keep the leap-year-end case and expect `366`
- AI: replace it with `/* 1371/10/10 */ new Date(1992, 11 /* Dec */, 31, 23, 59, 59, 999)` and expect `286`
- needs attention

## week day

- both localize weekday names and ordinal outputs
- HU: change the default numbering cases to Saturday-first loops/titles and expect `1` through `7`
- AI: keep Sunday-first titles and expect `2 3 4 5 6 7 1` on shifted inputs
- needs attention

## day period and hour / minute / second

- same fix; AI mostly flattens joined expected strings into string literals

## long format

- same fix; AI mostly rewrites joined expected strings as plain string literals

## edge cases > handles dates before 100 AD

- HU: skip
- AI: keep the test and change the expected output to `615 42 1`
- needs attention

## locale features > allows a localize preprocessor

- HU: keep the existing inputs and expect `11er ` / `12 `
- AI: import `getDate`, use it in the preprocessor, move the inputs to Jalali month-start dates, and expect `1er janvier` / `2 janvier`
- needs attention

## useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options

- same

## context > allows to specify the context

- same

# src/formatDistance/test.ts

## all failed tests

- HU: keep the existing test structure and dates, but rewrite the expected distance strings to Persian outputs such as `کمتر از 5 ثانیه`, `1 دقیقه`, `حدود 1 ساعت`, `6 ماه`, and `2 روز`
- AI: add an `enUS` wrapper around `formatDistance` and keep the expectations in English, such as `less than 5 seconds`, `1 minute`, `about 1 hour`, `6 months`, and `2 days`
- needs attention

# src/formatDistanceStrict/test.ts

## all failed tests

- HU: keep the existing test structure and dates, but rewrite the expected strict-distance strings to Persian outputs such as `0 ثانیه`, `1 دقیقه`, `1 ساعت`, `1 ماه`, `1 سال`, `in 1 hour` equivalents in Persian, and the localized context results
- AI: add an `enUS` wrapper around `formatDistanceStrict` and keep the expectations in English, such as `0 seconds`, `1 minute`, `1 hour`, `1 month`, `1 year`, `in 1 hour`, and English context outputs
- needs attention

# src/formatDistanceToNow/test.ts

## all failed tests

- HU: keep the existing fake-now setup and dates, but rewrite the expected distance-to-now strings to Persian outputs such as `کمتر از 5 ثانیه`, `1 دقیقه`, `حدود 1 ساعت`, `1 روز`, `حدود 1 ماه`, `حدود 1 سال`, and the Persian suffix forms
- AI: add an `enUS` wrapper around `formatDistanceToNow` and keep the expectations in English, such as `less than 5 seconds`, `1 minute`, `about 1 hour`, `1 day`, `about 1 month`, `about 1 year`, and English suffix forms
- needs attention

# src/formatDistanceToNowStrict/test.ts

## all failed tests

- HU: keep the existing fake-now setup and dates, but rewrite the expected strict distance-to-now strings to Persian outputs such as `0 ثانیه`, `1 دقیقه`, `1 ساعت`, `1 روز`, `1 ماه`, `1 سال`, the Persian suffix forms, and localized extension results
- AI: add an `enUS` wrapper around `formatDistanceToNowStrict` and keep the expectations in English, such as `0 seconds`, `1 minute`, `1 hour`, `1 day`, `1 month`, `1 year`, the English suffix forms, and English extension results
- needs attention

# src/formatDuration/test.ts

## all failed tests

- HU: keep the same duration inputs, but rewrite the output strings and delimiter to Persian forms such as `2 سال 9 ماه 1 هفته 7 روز 5 ساعت 9 دقیقه 30 ثانیه`, `9 ماه 2 روز`, and `9 ماه، 2 روز`
- AI: add an `enUS` wrapper around `formatDuration` and keep the expectations in English, such as `2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds`, `9 months 2 days`, and `9 months, 2 days`
- needs attention

# src/formatISODuration/test.ts

## all failed tests

- HU: replace the failing `intervalToDuration(...)`-based cases with direct `formatISODuration({...})` duration objects, so the tests stop depending on Jalali calendar math for those expectations
- AI: keep the original `intervalToDuration(...)` structure and update the two Jalali-sensitive expectations from `P1Y1M1DT1H1M1S` to `P1Y1M2DT1H1M1S` and from `P0Y1M0DT0H0M0S` to `P0Y1M2DT0H0M0S`
- needs attention

# src/formatRelative/test.ts

## all failed tests

- HU: rewrite the fallback dates and relative phrases into Persian/Jalali outputs such as `1393/01/15`, `سه‌شنبه گذشته در 12:00 ق.ظ.`, `دیروز در 10:22 ب.ظ.`, and `امروز در 4:50 ب.ظ.`, and skip the `handles dates before 100 AD` case
- AI: add an `enUS` wrapper around `formatRelative`, keep the English relative phrases like `last Tuesday at 12:00 AM`, `yesterday at 10:22 PM`, and `today at 4:50 PM`, but update the date-form fallback expectations to Jalali-style numeric dates such as `01/15/1393`, `01/08/1365`, `01/22/1365`, and keep the pre-100 AD case enabled with a new Jalali-based expectation
- needs attention

# Summary

## Where HU is better

- HU is stronger on default-library behavior: when a test does not explicitly opt into `enUS` or another English locale, Persian/Jalali expectations are the better fit for this repo and its main users.
- HU usually fixes boundary-sensitive logic by moving the sample date, argument, or context to the correct Jalali case instead of forcing a new expected value onto the old Gregorian-shaped setup.
- HU is better on user-facing text and examples. For this project, Persian outputs like `امروز`, Persian month names, and Farsi ordinals are usually better than English outputs like `today`.
- HU is generally more credible in week, week-year, decade, end/start-of-period, and many business-day tests, where Jalali calendar boundaries matter more than preserving the upstream Gregorian fixture shape.

## Where AI is better

- AI is better when the test is explicitly about English behavior, such as cases that intentionally pass `enUS` or use `Intl` in an English-locale scenario.
- AI is better at preserving coverage in some hard areas that HU skips, especially pre-100 AD, parse-heavy blocks, and a few interval edge cases.
- AI sometimes keeps tests less brittle by generating locale-dependent strings from helpers instead of hardcoding every English phrase, which is useful for explicit English-locale tests.

## Overall judgment

- HU is the better baseline for this repository. It aligns more often with Jalali semantics, the repo's default locale expectations, and the likely needs of Persian users.
- AI is most useful as a secondary source of ideas: keep its explicit-locale wrappers where the test really wants English behavior, and reuse its non-skipped coverage after verifying the expected values against Jalali rules.
- The main weakness in HU is skipped coverage. The main weakness in AI is that many fixes look mechanical: changing only expectations, preserving Gregorian/English assumptions in default tests, or introducing suspicious values that need manual review.
- Best combined approach: prefer HU for default behavior and localized outputs, then selectively cherry-pick AI ideas only for explicit `enUS`/`Intl` coverage and for re-enabling skipped cases with Jalali-correct assertions.

# TODO: Improve HU Baseline

## Guardrails For The Next Agent

- Start from HU everywhere; do not replace Jalali/Persian default behavior with upstream Gregorian or English defaults.
- Keep Persian user-facing outputs as the default path. If a test is intentionally about English behavior, add explicit `enUS` or `locale: "en-US"` coverage instead of changing the default expectation.
- Prefer re-enabling skipped coverage with Jalali-correct fixtures and assertions over deleting or weakening tests.
- For week-based and business-day tests, assume Jalali local semantics: Shanbeh is the start of the week, and only Jomeh is a weekend day.
- Do not preserve upstream Monday-first wording in default Jalali tests. Prefer titles framed around `weekend day`, `business day`, `start of week`, or `next business day`; if a concrete weekday must be named, use Jalali week naming with Shanbeh as day one.
- For year-zero, BC, and pre-100 coverage, anchor the test semantics near Jalali year zero or Jalali calendar boundaries, not near Gregorian year zero. Do not accept a fix that merely remaps Gregorian zero-era expectations into Jalali output dates.
- When HU changed a fixture from a Gregorian case to a Jalali case, also rename the test title if the old title is now misleading.
- Do not add new tests, companion tests, or parallel variants. Improve the existing tests and existing test blocks in place.

## P0: Correctness And Fixture Cleanup

- `src/add/test.ts` — `works well if the desired month has fewer days and the provided date is on the last day of a month` — keep the HU Jalali expectation, but fix the result month comment/value mismatch so `new Date(2015, 9, 2)` is labeled `/* Oct */`, not `/* Sep */`.
- `src/sub/test.ts` — `works well if the desired month has fewer days and the provided date is in the last day of a month` — fix the HU result month comment so the expected `new Date(2014/2015..., 9, 2)` line uses `/* Oct */` rather than a stale `/* Sep */` comment.
- `src/addBusinessDays/test.ts` — `returns the Monday when 1 day is added on the Friday` — rename the case away from Monday-specific wording; describe it in Jalali business-day terms such as `returns the next business day when 1 day is added on Jomeh` or a weekend/business-day equivalent.
- `src/addBusinessDays/test.ts` — `returns the Monday when 1 day is added on the Satuday` — rename the case away from Monday-specific wording; if a concrete weekday is still useful, use Jalali naming such as Shanbeh rather than Gregorian Monday/Saturday framing.
- `src/addBusinessDays/test.ts` — `starting from a weekend day should land on a weekday when reducing a divisible by 5` — keep the HU weekend-aware fixture strategy, but rewrite the title and assertions around Jalali `weekend day` / `business day` semantics, making it clear why `-6` / `6` is correct when only Jomeh is weekend.
- `src/getDaysInMonth/test.ts` — `works for the February of a leap year` — keep the HU Esfand semantics, but rename the test so the title does not still claim it is a February-specific Gregorian case.
- `src/lastDayOfMonth/test.ts` — `works for the February of a leap year` — rename to an Esfand leap-year case and keep the HU Jalali fixture/result.
- `src/lastDayOfMonth/test.ts` — `works for the February of a non-leap year` — rename to an Esfand non-leap-year case and keep the HU Jalali fixture/result.
- `src/lightFormat/test.ts` — `1 BC formats as 1` — the HU fixture is now a Jalali year-1 case, so either rename the existing test to Jalali wording or restore BC semantics inside that same existing test; do not leave a BC title on a non-BC fixture.
- `src/lightFormat/test.ts` — `2 BC formats as 2` — same fix as above: align the existing test with the HU Jalali fixture, or restore BC semantics inside that same existing test.
- `src/setDefaultOptions/test.ts` — `locale > isMatch` — choose one canonical Persian ordinal/date wording and use it consistently across the suite; do not leave HU and AI variants (`11 دی 1392` vs `11-ام دی 1392`) half-mixed.
- `src/setDefaultOptions/test.ts` — `locale > parse` — use the same canonical Persian wording chosen for `isMatch`, so `format`, `isMatch`, and `parse` all agree on one localized string shape.
- `src/eachWeekendOfInterval/test.ts` — `context > allows to specify the context` — fix the HU expected weekend list so it does not contain the impossible date `1403/2/0`; recompute the correct Jalali weekend boundary and update the list.
- `src/parseJSON/test.ts` — `parses a formatted new Date() back to UTC - issue 2149` — replace the HU hardcoded sample with a stable dynamic round-trip assertion so the test still checks serialization/parsing behavior rather than one fixed timestamp.
- `src/formatISODuration/test.ts` — `all failed tests` — keep HU's direct `formatISODuration({...})` assertions for pure formatting coverage, but rewrite one of the existing tests so the file still exercises interval-derived Jalali-sensitive durations.
- `src/intervalToDuration/test.ts` — Gregorian-titled edge cases such as `Feb 28 ...`, `Apr 30 ...`, and `May 31 ...` — rename the existing titles to Jalali month/day wording that matches the actual fixtures; where leap-year month-end semantics are the point, use `30 Esfand` / `29 Esfand` explicitly instead of Gregorian `Feb 28` wording.
- `src/addMonths/test.ts` — `works well if the desired month has fewer days and the provided date is in the last day of a month` — review the HU Jalali fixture and rename the test if needed so the description matches a Jalali month-end case instead of an upstream Gregorian description.
- `src/addQuarters/test.ts` — `works well if the desired month has fewer days and the provided date is in the last day of a month` — same cleanup: keep the HU Jalali fixture, but rename the case if the original Gregorian phrasing is now misleading.
- `src/set/test.ts` — `value overflow > days of months overflow into months` — keep the HU Jalali overflow behavior, but rewrite the title or surrounding wording if the old Gregorian description no longer matches the new fixture.
- `src/set/test.ts` — `edge cases > sets the last day of new month if the initial date was the last day of a longer month` — same cleanup: align the title with the HU Jalali month-end fixture.
- `src/setMonth/test.ts` — `sets the last day of the month if the original date was the last day of a longer month` — keep the HU Jalali fixture/result, but rename if needed so the case description matches Jalali month-end logic.
- `src/setQuarter/test.ts` — `sets the last day of the month if the original date was the last day of a longer month` — same cleanup as `setMonth`.
- `src/subQuarters/test.ts` — `works well if the desired month has fewer days and the provided date is in the last day of a month` — keep the HU Jalali quarter subtraction fixture, but rename the test if the old Gregorian wording is no longer accurate.

## P1: Restore HU-Skipped Coverage With Jalali-Correct Assertions

- Cross-cutting rule for all items below: when restoring near-zero-year coverage, compute expectations from Jalali year-zero / early-year behavior first, rather than preserving upstream Gregorian-era expectations and translating the output.
- `src/add/test.ts` — `handles dates before 100 AD` — unskip the HU-skipped test and calculate the Jalali-correct expected date instead of leaving pre-100 coverage removed.
- `src/getDayOfYear/test.ts` — `handles dates before 100 AD` — unskip and assert the Jalali day-of-year value.
- `src/getDaysInMonth/test.ts` — `handles dates before 100 AD` — unskip and assert the Jalali month length.
- `src/getWeek/test.ts` — `handles dates before 100 AD` — unskip and assert the Jalali local week number.
- `src/getWeekYear/test.ts` — `handles dates before 100 AD` — unskip and assert the Jalali local week-numbering year.
- `src/intervalToDuration/test.ts` — `edge cases > returns correct duration for Feb 28 to Apr 30 interval - issue 2910` — re-enable the HU-skipped case with Jalali month/day expectations, and rename the existing title away from Gregorian wording to the actual Jalali fixture range.
- `src/intervalToDuration/test.ts` — `edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 31 interval` — re-enable with Jalali-correct expected months/days, and rename the existing title to Jalali month/day wording; if this case is really about leap-year month-end behavior, anchor it to `30 Esfand`, not `Feb 28`.
- `src/intervalToDuration/test.ts` — `edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 30 interval` — re-enable with Jalali-correct expected months/days, and rename the existing title to Jalali month/day wording.
- `src/intervalToDuration/test.ts` — `edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 29 interval` — re-enable with Jalali-correct expected months/days, and rename the existing title to Jalali month/day wording.
- `src/intervalToDuration/test.ts` — `edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 28 interval` — re-enable with Jalali-correct expected months/days, and rename the existing title to Jalali month/day wording.
- `src/intervalToDuration/test.ts` — `edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 27 interval` — re-enable with Jalali-correct expected months/days, and rename the existing title to Jalali month/day wording.
- `src/intervalToDuration/test.ts` — `edge cases > issue 2470 > returns correct duration for Apr 30 to May 31 interval` — re-enable with Jalali-correct expected months/days, and rename the existing title to Jalali month/day wording that matches the actual Jalali fixture range.
- `src/setMonth/test.ts` — `handles dates before 100 AD` — unskip and restore Jalali coverage for month setting in pre-100 years.
- `src/setQuarter/test.ts` — `handles dates before 100 AD` — unskip and restore Jalali coverage for quarter setting in pre-100 years.
- `src/setWeek/test.ts` — `handles dates before 100 AD` — unskip and restore Jalali week-setting coverage.
- `src/setWeekYear/test.ts` — `sets local week-numbering years less than 100` — unskip and compute the Jalali-correct expected result for week-year values below 100.
- `src/setWeekYear/test.ts` — `handles dates before 100 AD` — unskip and restore Jalali pre-100 week-year coverage.
- `src/startOfWeekYear/test.ts` — `handles dates before 100 AD` — unskip and restore the Jalali boundary expectation.
- `src/startOfYear/test.ts` — `handles dates before 100 AD` — unskip and restore the Jalali new-year boundary expectation.
- `src/addMonths/test.ts` — `handles dates before 100 AD` — unskip and compute the Jalali-correct expected result.
- `src/addQuarters/test.ts` — `handles dates before 100 AD` — unskip and compute the Jalali-correct expected result.
- `src/sub/test.ts` — `handles dates before 100 AD` — unskip and compute the Jalali-correct expected result.
- `src/subMonths/test.ts` — `handles dates before 100 AD` — unskip and compute the Jalali-correct expected result.
- `src/subQuarters/test.ts` — `handles dates before 100 AD` — unskip and compute the Jalali-correct expected result.
- `src/subYears/test.ts` — `handles dates before 100 AD` — unskip and compute the Jalali-correct expected result.
- `src/formatRelative/test.ts` — `handles dates before 100 AD` — restore the HU-skipped case with a Jalali/Persian expectation rather than leaving the file with a coverage hole.
- `src/parse/test.ts` — `era / local week-numbering year / ISO week-numbering year / extended year` — re-enable the HU-skipped describe blocks and rewrite inputs/expected values so they are valid under Jalali behavior.
- `src/parse/test.ts` — `with options.strictValidation = true > local week-numbering year` — restore the skipped strict-validation sub-block with Jalali-correct examples.
- `src/parse/test.ts` — `common formats` — restore any HU-skipped `Date.prototype.toString()` / `toISOString()` coverage if it can be expressed stably under Jalali expectations; if not, replace it with a stable equivalent instead of leaving it absent.
- `src/parse/test.ts` — `useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options` — restore the HU-skipped `YY` and `YYYY` allow-cases with explicit locale/expectation handling where needed.
- `src/parse/test.ts` — `long format / custom locale / context / time zones` — re-enable the skipped `custom locale` coverage or rewrite an existing assertion in that block into a Jalali-equivalent custom-locale assertion.
- `src/format/test.ts` — `year > regular year > 1 BC formats as 1` and `2 BC formats as 2` — restore BC semantics in the existing tests if they still matter, otherwise rename those existing tests and convert them to Jalali-year semantics.
- `src/format/test.ts` — `year > local week-numbering year` — re-enable the HU-skipped block with Jalali-correct expectations.
- `src/format/test.ts` — `year > extended year` — re-enable the HU-skipped block with Jalali-correct expectations.
- `src/format/test.ts` — `edge cases > handles dates before 100 AD` — restore the HU-skipped pre-100 formatting case with Jalali output.

## P1.1: Zero-Year And Early-Year Specific Audit

- `src/lightFormat/test.ts` — `1 BC formats as 1` and `2 BC formats as 2` — decide explicitly whether these existing tests should remain BC/Gregorian-heritage compatibility tests or become Jalali early-year tests; do not leave them in a mixed state.
- `src/format/test.ts` — `year > regular year > 1 BC formats as 1` and `2 BC formats as 2` — if BC semantics are kept, make those existing tests truly assert BC behavior; if Jalali semantics replace them, rename the existing cases so they no longer claim Gregorian BC behavior.
- `src/addYears/test.ts` — `handles dates before 100 AD` — verify the expectation against Jalali early-year rollover, not Gregorian leap-day carry near year zero.
- `src/setWeekYear/test.ts` — `sets local week-numbering years less than 100` and `handles dates before 100 AD` — validate week-year expectations using Jalali week-year rules around early years, not translated Gregorian year numbers.
- `src/startOfWeekYear/test.ts` — `handles dates before 100 AD` — verify that the restored expectation is the Jalali week-year boundary nearest the early-year fixture.
- `src/startOfYear/test.ts` — `handles dates before 100 AD` — verify that the restored expectation is the Jalali new-year boundary nearest the early-year fixture.
- `src/parse/test.ts` — `era / extended year / local week-numbering year / ISO week-numbering year` — for any restored near-zero-year cases, separate Jalali early-year semantics from true era-token parsing; do not let Gregorian-era fixtures define the default Jalali interpretation.

## P2: Keep Persian Defaults, Add Explicit English-Locale Coverage Where It Is Actually Intended

- `src/intlFormatDistance/test.ts` — `works with single month / single quarter / single year` future and past cases — keep the HU Jalali-default fixtures, but if an existing assertion is intentionally checking English phrases like `next month` or `last quarter`, make that existing assertion explicit with `locale: "en-US"`.
- `src/parse/test.ts` — `escapes characters between the single quote characters` — keep the HU Persian/Jalali default test, but if preserving the original English parsing behavior still matters, rewrite the existing test to make its locale intent explicit instead of creating a variant.
- `src/parse/test.ts` — `accepts new line character` — keep the HU Jalali default case, but if this existing test is meant to cover English-locale parsing, make that locale explicit instead of mixing Gregorian input strings into the default locale path.
- `src/parse/test.ts` — `calendar year` — for any examples that intentionally stay Gregorian/English, move them behind `enUS`; leave the default path Persian/Jalali.
- `src/parse/test.ts` — `quarter with following year / quarter (formatting) / quarter (stand-alone)` — keep HU Persian quarter labels by default, but if an existing case is really about English quarter tokens, make that existing case explicitly `enUS`.
- `src/parse/test.ts` — `month (formatting) / month (stand-alone)` — keep HU Persian month-token coverage by default, but if an existing case is really about English month names, make that existing case explicitly `enUS`.
- `src/parse/test.ts` — `week / day / weekday parsing blocks` — same rule: keep Persian/Jalali defaults unless an existing case is specifically intended to check English parsing.
- `src/parse/test.ts` — `day period / hour / minute / second` — keep HU Persian day-period parsing in the default path, and only use English tokens like `p.m.` inside explicit `enUS` cases.
- `src/parse/test.ts` — `timezone (ISO-8601 w/ Z) / timezone (ISO-8601 w/o Z)` — if English/Gregorian string fixtures are retained, gate them behind explicit locale handling instead of letting them define the default behavior.
- `src/parse/test.ts` — `long format / context / time zones` — keep each existing test single-purpose: default Persian/Jalali cases stay default, and any retained English-locale case must make its locale explicit in that same existing test.
- `src/format/test.ts` — `locale features > allows a localize preprocessor` — keep the HU Persian default behavior, but if the existing test is really about another locale shape, make that existing assertion explicit rather than adding another assertion path.
- `src/formatRelative/test.ts` — `all failed tests` — keep HU's Persian defaults such as `امروز` and `دیروز`; if any existing assertion is really intended to test English relative phrases, rewrite that existing assertion to make `enUS` explicit.
- `src/setDefaultOptions/test.ts` — `locale > parse`, `locale > isMatch`, and `firstWeekContainsDate > parse` — any remaining English- or Gregorian-shaped existing assertions should be moved behind explicit `enUS` default options instead of living in the Persian default path.
- `src/formatDistance/test.ts` — `all failed tests` — keep HU Persian defaults; if any existing assertion is really meant to preserve upstream English text behavior, make that specific existing assertion explicit with `enUS`.
- `src/formatDistanceStrict/test.ts` — `all failed tests` — same rule as `formatDistance`: do not change default Persian expectations back to English; only retarget an existing assertion to `enUS` if that exact assertion is meant to stay English.
- `src/formatDistanceToNow/test.ts` — `all failed tests` — same rule as above.
- `src/formatDistanceToNowStrict/test.ts` — `all failed tests` — same rule as above.
- `src/formatDuration/test.ts` — `all failed tests` — keep the Persian default strings and delimiter behavior; if an existing assertion is truly about English text, make that existing assertion explicit with `enUS`.

## P3: Boundary-Sensitive Audits That Should Be Verified While Editing HU

- `src/getWeekYear/test.ts` — `returns the local week-numbering year of the given date`, `accepts a timestamp`, and `context > allows to specify the context` — keep the HU Jalali week-year direction, but re-run these cases and confirm each boundary fixture against the actual Jalali `firstWeekContainsDate` rules.
- `src/getWeek/test.ts` — `returns the local week of year of the given date`, `accepts a timestamp`, `properly works with negative numbers`, and `context > allows to specify the context` — keep the HU boundary-based fixtures, but verify every expected value against current Jalali week rules before the next agent lands the final patch.
- `src/startOfWeek/test.ts` — `context > allows to specify the context` — keep the HU boundary-shift approach, but verify the exact week-start expectations around the `1403/5/20` and `1403/5/27` boundaries.
- `src/startOfYear/test.ts` — `context > allows to specify the context` — confirm that the HU context timestamps really straddle the Jalali new year the way the test title claims.
- `src/differenceInBusinessDays/test.ts` — `the same except given first date falls on a weekend`, `the same except given second date falls on a weekend`, `returns a negative number if the time value of the first date is smaller`, and `edge cases > the same for the swapped dates` — keep the HU Jalali weekend fixtures, but re-run and lock down the exact expected counts before making any wider changes.
- `src/differenceInCalendarWeeks/test.ts` — `edge cases`, `negative numbers`, `normalizes the dates`, and `context > allows to specify the context` — verify the HU boundary fixtures and expected week counts against actual Jalali week starts before treating them as final.
- `src/differenceInMonths/test.ts` — the renamed Esfand/Bahman edge cases — keep the HU Jalali month-difference interpretation, but confirm that the renamed titles and sample dates still express the original invariant clearly.
