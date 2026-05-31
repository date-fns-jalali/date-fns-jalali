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
