 DONE  |main| src/add/test.ts > add > adds the values from the given object
 DONE  |main| src/add/test.ts > add > supports an undefined value in the duration object
 DONE  |main| src/add/test.ts > add > works well if the desired month has fewer days and the provided date is on the last day of a month
 DONE  |main| src/add/test.ts > add > handles dates before 100 AD
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > adds the given number of business days
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > handles negative amount
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > returns the Monday when 1 day is added on the Friday
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > returns the Monday when 1 day is added on the Satuday
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > can handle a large number of business days
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > accepts a timestamp
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > starting from a weekend day should land on a weekday when reducing a divisible by 5
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > context > allows to specify the context
 DONE  |main| src/addBusinessDays/test.ts > addBusinessDays > DST (Asia/Tehran) > works across DST-start weekend
 DONE  |main| src/addMonths/test.ts > addMonths > adds the given number of months
 DONE  |main| src/addMonths/test.ts > addMonths > works well if the desired month has fewer days and the provided date is in the last day of a month
 DONE  |main| src/addMonths/test.ts > addMonths > handles dates before 100 AD
 DONE  |main| src/addMonths/test.ts > addMonths > works at DST-start boundary in local timezone: Asia/Tehran
 DONE  |main| src/addMonths/test.ts > addMonths > works at DST-start - 30 mins in local timezone: Asia/Tehran
 DONE  |main| src/addMonths/test.ts > addMonths > works at DST-start - 60 mins in local timezone: Asia/Tehran
 DONE  |main| src/addMonths/test.ts > addMonths > context > allows to specify the context
 DONE  |main| src/addQuarters/test.ts > addQuarters > works well if the desired month has fewer days and the provided date is in the last day of a month
 DONE  |main| src/addQuarters/test.ts > addQuarters > handles dates before 100 AD
 DONE  |main| src/addQuarters/test.ts > addQuarters > context > allows to specify the context
 DONE  |main| src/addYears/test.ts > addYears > handles dates before 100 AD
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > returns the number of business days between the given dates, excluding weekends
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > can handle long ranges
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > the same except given first date falls on a weekend
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > the same except given second date falls on a weekend
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > the same except both given dates fall on a weekend
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > returns a negative number if the time value of the first date is smaller
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > accepts timestamps
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > normalizes the dates
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > context > allows to specify the context
 DONE  |main| src/differenceInBusinessDays/test.ts > differenceInBusinessDays > edge cases > the same for the swapped dates
 DONE  |main| src/differenceInCalendarMonths/test.ts > differenceInCalendarMonths > edge cases > returns 1 when dates are in different months but less than a month apart
 DONE  |main| src/differenceInCalendarMonths/test.ts > differenceInCalendarMonths > edge cases > returns -1 for swapped dates with a month difference
 DONE  |main| src/differenceInCalendarMonths/test.ts > differenceInCalendarMonths > normalizes the dates
 DONE  |main| src/differenceInCalendarMonths/test.ts > differenceInCalendarMonths > context > allows to specify the context
 DONE  |main| src/differenceInCalendarQuarters/test.ts > differenceInCalendarQuarters > edge cases > the difference is less than a quarter, but the given dates are in different calendar quarters
 DONE  |main| src/differenceInCalendarQuarters/test.ts > differenceInCalendarQuarters > edge cases > the same for the swapped dates
 DONE  |main| src/differenceInCalendarQuarters/test.ts > differenceInCalendarQuarters > normalizes the dates
 DONE  |main| src/differenceInCalendarQuarters/test.ts > differenceInCalendarQuarters > context > allows to specify the context
 DONE  |main| src/differenceInCalendarWeeks/test.ts > differenceInCalendarWeeks > accepts timestamps
 DONE  |main| src/differenceInCalendarWeeks/test.ts > differenceInCalendarWeeks > edge cases > the difference is less than a week, but the given dates are in different calendar weeks
 DONE  |main| src/differenceInCalendarWeeks/test.ts > differenceInCalendarWeeks > edge cases > the same for the swapped dates
 DONE  |main| src/differenceInCalendarWeeks/test.ts > differenceInCalendarWeeks > edge cases > properly works with negative numbers
 DONE  |main| src/differenceInCalendarWeeks/test.ts > differenceInCalendarWeeks > normalizes the dates
 DONE  |main| src/differenceInCalendarWeeks/test.ts > differenceInCalendarWeeks > context > allows to specify the context
 DONE  |main| src/differenceInCalendarYears/test.ts > differenceInCalendarYears > edge cases > the difference is less than a year, but the given dates are in different calendar years
 DONE  |main| src/differenceInCalendarYears/test.ts > differenceInCalendarYears > edge cases > the same for the swapped dates
 DONE  |main| src/differenceInCalendarYears/test.ts > differenceInCalendarYears > normalizes the dates
 DONE  |main| src/differenceInCalendarYears/test.ts > differenceInCalendarYears > context > allows to specify the context
 DONE  |main| src/differenceInMonths/test.ts > differenceInMonths > edge cases > it returns diff of 1 month between Feb 28 2021 and Jan 30 2021
 DONE  |main| src/differenceInMonths/test.ts > differenceInMonths > edge cases > it returns diff of 1 month between Feb 28 2021 and Jan 31 2021
 DONE  |main| src/differenceInMonths/test.ts > differenceInMonths > edge cases > it returns diff of 6 month between Oct, 31 2021 and Apr, 30 2021
 DONE  |main| src/differenceInMonths/test.ts > differenceInMonths > normalizes the dates
 DONE  |main| src/differenceInQuarters/test.ts > differenceInQuarters > returns the number of full quarters between the given dates with `trunc` as a default rounding method
 DONE  |main| src/differenceInQuarters/test.ts > differenceInQuarters > accepts timestamps
 DONE  |main| src/differenceInYears/test.ts > differenceInYears > leap days > supports past dates with right side after leap day
 DONE  |main| src/differenceInYears/test.ts > differenceInYears > edge cases > the days and months of the given dates are the same
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > returns an array with starts of months from the month of the start date to the month of the end date
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > accepts timestamps
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > handles the dates that are not starts of days
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > handles the dates that are not containing days
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > returns one month if the both arguments are on the same month
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > returns one month if the both arguments are the same
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > returns reversed array if the start date is after the end date
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > options.step > returns an array with starts of days from the day of the start date to the day of the end date with the given step
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > options.step > returns reversed array if `options.step` is negative
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > options.step > reverses array twice if `options.step` is negative and the interval is negative too
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > normalizes the dates
 DONE  |main| src/eachMonthOfInterval/test.ts > eachMonthOfInterval > context > allows to specify the context
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > returns an array with starts of quarters from the quarter of the start date to the quarter of the end date
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > accepts timestamps
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > handles the dates that are not starts of days
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > handles the dates that are not containing days
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > returns one quarter if the both arguments are on the same quarter
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > returns one quarter if the both arguments are the same
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > returns reversed array if the start date is after the end date
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > normalizes the dates
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > context > allows to specify the context
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > options.step > returns an array with starts of days from the day of the start date to the day of the end date with the given step
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > options.step > returns reversed array if `options.step` is negative
 DONE  |main| src/eachQuarterOfInterval/test.ts > eachQuarterOfInterval > options.step > reverses array twice if `options.step` is negative and the interval is negative too
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > returns an array with starts of weeks from the week of the start date to the week of the end date
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > accepts timestamps
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > handles the dates that are not starts/ends of days and weeks
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > returns one week if the both arguments are on the same week
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > returns one day if the both arguments are the same
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > returns reversed array if the start date is after the end date
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > normalizes the dates
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > context > allows to specify the context
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > options.step > returns an array with starts of days from the day of the start date to the day of the end date with the given step
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > options.step > returns reversed array if `options.step` is negative
 DONE  |main| src/eachWeekOfInterval/test.ts > eachWeekOfInterval > options.step > reverses array twice if `options.step` is negative and the interval is negative too
 DONE  |main| src/eachWeekendOfInterval/test.ts > eachWeekendOfInterval > returns all weekends within the interval
 DONE  |main| src/eachWeekendOfInterval/test.ts > eachWeekendOfInterval > returns all weekends within the interval when starting on a weekend
 DONE  |main| src/eachWeekendOfInterval/test.ts > eachWeekendOfInterval > returns reversed array if the start date is after the end date
 DONE  |main| src/eachWeekendOfInterval/test.ts > eachWeekendOfInterval > normalizes the dates
 DONE  |main| src/eachWeekendOfInterval/test.ts > eachWeekendOfInterval > context > allows to specify the context
 DONE  |main| src/eachWeekendOfMonth/test.ts > eachWeekendOfMonth > returns all weekends of the given month
 DONE  |main| src/eachWeekendOfMonth/test.ts > eachWeekendOfMonth > context > allows to specify the context
 DONE  |main| src/eachWeekendOfYear/test.ts > eachWeekendOfYear > returns all weekends of the given year
 DONE  |main| src/eachWeekendOfYear/test.ts > eachWeekendOfYear > context > allows to specify the context
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > returns an array with starts of days from the day of the start date to the day of the end date
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > accepts timestamps
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > handles the dates that are not starts of days
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > returns one year if the both arguments are on the same year
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > returns one year if the both arguments are the same
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > returns reversed array if the start date is after the end date
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > options.step > returns an array with starts of days from the day of the start date to the day of the end date with the given step
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > options.step > returns reversed array if `options.step` is negative
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > options.step > reverses array twice if `options.step` is negative and the interval is negative too
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > normalizes the dates
 DONE  |main| src/eachYearOfInterval/test.ts > eachYearOfInterval > context > allows to specify the context
 DONE  |main| src/endOfDecade/test.ts > endOfDecade > returns the date with the time set to 23:59:59.999 and the date set to the last millisecond of a decade
 DONE  |main| src/endOfDecade/test.ts > endOfDecade > accepts a timestamp
 DONE  |main| src/endOfDecade/test.ts > endOfDecade > properly works with negative numbers
 DONE  |main| src/endOfDecade/test.ts > endOfDecade > context > allows to specify the context
 DONE  |main| src/endOfMonth/test.ts > endOfMonth > returns the date with the time set to 23:59:59.999 and the date set to the last day of a month
 DONE  |main| src/endOfMonth/test.ts > endOfMonth > accepts a timestamp
 DONE  |main| src/endOfMonth/test.ts > endOfMonth > edge cases > works for last month in year
 DONE  |main| src/endOfMonth/test.ts > endOfMonth > edge cases > works for last day of month
 DONE  |main| src/endOfMonth/test.ts > endOfMonth > context > allows to specify the context
 DONE  |main| src/endOfQuarter/test.ts > endOfQuarter > returns the date with the time set to 23:59:59.999 and the date set to the last day of a quarter
 DONE  |main| src/endOfQuarter/test.ts > endOfQuarter > accepts a timestamp
 DONE  |main| src/endOfQuarter/test.ts > endOfQuarter > context > allows to specify the context
 DONE  |main| src/endOfWeek/test.ts > endOfWeek > returns the date with the time set to 23:59:59:999 and the date set to the last day of a week
 DONE  |main| src/endOfWeek/test.ts > endOfWeek > accepts a timestamp
 DONE  |main| src/endOfWeek/test.ts > endOfWeek > context > allows to specify the context
 DONE  |main| src/endOfYear/test.ts > endOfYear > returns the date with the time set to 23:59:59.999 and the date set to the last day of a year
 DONE  |main| src/endOfYear/test.ts > endOfYear > accepts a timestamp
 DONE  |main| src/endOfYear/test.ts > endOfYear > context > allows to specify the context
 DONE  |main| src/format/test.ts > format > accepts a timestamp
 DONE  |main| src/format/test.ts > format > escapes characters between the single quote characters
 DONE  |main| src/format/test.ts > format > accepts new line character
 DONE  |main| src/format/test.ts > format > ordinal numbers > ordinal day of an ordinal month
 DONE  |main| src/format/test.ts > format > ordinal numbers > should return a correct ordinal number
 DONE  |main| src/format/test.ts > format > era
 DONE  |main| src/format/test.ts > format > year > regular year > works as expected
 DONE  |main| src/format/test.ts > format > year > regular year > 1 BC formats as 1
 DONE  |main| src/format/test.ts > format > year > regular year > 2 BC formats as 2
 DONE  |main| src/format/test.ts > format > year > regular year > 2 BC formats as 2nd
 DONE  |main| src/format/test.ts > format > year > local week-numbering year > works as expected
 DONE  |main| src/format/test.ts > format > year > local week-numbering year > the first week of the next year
 DONE  |main| src/format/test.ts > format > year > local week-numbering year > allows to specify `weekStartsOn` and `firstWeekContainsDate` in options
 DONE  |main| src/format/test.ts > format > year > local week-numbering year > the first week of year
 DONE  |main| src/format/test.ts > format > year > local week-numbering year > 1 BC formats as 1
 DONE  |main| src/format/test.ts > format > year > local week-numbering year > 2 BC formats as 2
 DONE  |main| src/format/test.ts > format > year > extended year > works as expected
 DONE  |main| src/format/test.ts > format > year > extended year > 1 BC formats as 0
 DONE  |main| src/format/test.ts > format > year > extended year > 2 BC formats as -1
 DONE  |main| src/format/test.ts > format > quarter > formatting quarter
 DONE  |main| src/format/test.ts > format > quarter > stand-alone quarter
 DONE  |main| src/format/test.ts > format > quarter > returns a correct quarter for each month
 DONE  |main| src/format/test.ts > format > month > formatting month
 DONE  |main| src/format/test.ts > format > month > stand-alone month
 DONE  |main| src/format/test.ts > format > week > local week of year > works as expected
 DONE  |main| src/format/test.ts > format > week > local week of year > allows to specify `weekStartsOn` and `firstWeekContainsDate` in options
 DONE  |main| src/format/test.ts > format > week > ISO week of year
 DONE  |main| src/format/test.ts > format > day > date
 DONE  |main| src/format/test.ts > format > day > day of year > works as expected
 DONE  |main| src/format/test.ts > format > day > day of year > returns a correct day number for the last day of a leap year
 DONE  |main| src/format/test.ts > format > week day > day of week > works as expected
 DONE  |main| src/format/test.ts > format > week day > ISO day of week > works as expected
 DONE  |main| src/format/test.ts > format > week day > formatting day of week > works as expected
 DONE  |main| src/format/test.ts > format > week day > formatting day of week > by default, 1 is Sunday, 2 is Monday, ...
 DONE  |main| src/format/test.ts > format > week day > stand-alone day of week > works as expected
 DONE  |main| src/format/test.ts > format > week day > stand-alone day of week > by default, 1 is Sunday, 2 is Monday, ...
 DONE  |main| src/format/test.ts > format > day period and hour > hour [1-12]
 DONE  |main| src/format/test.ts > format > day period and hour > hour [0-23]
 DONE  |main| src/format/test.ts > format > day period and hour > hour [0-11]
 DONE  |main| src/format/test.ts > format > day period and hour > hour [1-24]
 DONE  |main| src/format/test.ts > format > day period and hour > AM, PM > works as expected
 DONE  |main| src/format/test.ts > format > day period and hour > AM, PM > 12 PM
 DONE  |main| src/format/test.ts > format > day period and hour > AM, PM > 12 AM
 DONE  |main| src/format/test.ts > format > day period and hour > AM, PM, noon, midnight > works as expected
 DONE  |main| src/format/test.ts > format > day period and hour > AM, PM, noon, midnight > 12 PM
 DONE  |main| src/format/test.ts > format > day period and hour > AM, PM, noon, midnight > 12 AM
 DONE  |main| src/format/test.ts > format > day period and hour > flexible day periods > works as expected
 DONE  |main| src/format/test.ts > format > day period and hour > flexible day periods > 12 PM
 DONE  |main| src/format/test.ts > format > day period and hour > flexible day periods > 5 PM
 DONE  |main| src/format/test.ts > format > day period and hour > flexible day periods > 12 AM
 DONE  |main| src/format/test.ts > format > day period and hour > flexible day periods > 4 AM
 DONE  |main| src/format/test.ts > format > minute
 DONE  |main| src/format/test.ts > format > second > second
 DONE  |main| src/format/test.ts > format > long format > short date
 DONE  |main| src/format/test.ts > format > long format > medium date
 DONE  |main| src/format/test.ts > format > long format > long date
 DONE  |main| src/format/test.ts > format > long format > full date
 DONE  |main| src/format/test.ts > format > long format > short time
 DONE  |main| src/format/test.ts > format > long format > medium time
 DONE  |main| src/format/test.ts > format > long format > long time
 DONE  |main| src/format/test.ts > format > long format > full time
 DONE  |main| src/format/test.ts > format > long format > short date + time
 DONE  |main| src/format/test.ts > format > long format > medium date + time
 DONE  |main| src/format/test.ts > format > long format > long date + time
 DONE  |main| src/format/test.ts > format > long format > full date + time
 DONE  |main| src/format/test.ts > format > long format > allows arbitrary combination of date and time
 DONE  |main| src/format/test.ts > format > edge cases > handles dates before 100 AD
 DONE  |main| src/format/test.ts > format > locale features > allows a localize preprocessor
 DONE  |main| src/format/test.ts > format > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows D token if useAdditionalDayOfYearTokens is set to true
 DONE  |main| src/format/test.ts > format > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows DD token if useAdditionalDayOfYearTokens is set to true
 DONE  |main| src/format/test.ts > format > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows YY token if useAdditionalWeekYearTokens is set to true
 DONE  |main| src/format/test.ts > format > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows YYYY token if useAdditionalWeekYearTokens is set to true
 DONE  |main| src/format/test.ts > format > context > allows to specify the context
 FAIL  |main| src/formatDistance/test.ts > formatDistance > seconds > when the includeSeconds option is true > less than 5 seconds
 FAIL  |main| src/formatDistance/test.ts > formatDistance > seconds > when the includeSeconds option is true > less than 10 seconds
 FAIL  |main| src/formatDistance/test.ts > formatDistance > seconds > when the includeSeconds option is true > less than 20 seconds
 FAIL  |main| src/formatDistance/test.ts > formatDistance > seconds > when the includeSeconds option is true > half a minute
 FAIL  |main| src/formatDistance/test.ts > formatDistance > seconds > when the includeSeconds option is true > less than a minute
 FAIL  |main| src/formatDistance/test.ts > formatDistance > seconds > when the includeSeconds option is true > 1 minute
 FAIL  |main| src/formatDistance/test.ts > formatDistance > minutes > less than a minute
 FAIL  |main| src/formatDistance/test.ts > formatDistance > minutes > 1 minute
 FAIL  |main| src/formatDistance/test.ts > formatDistance > minutes > n minutes
 FAIL  |main| src/formatDistance/test.ts > formatDistance > hours > about 1 hour
 FAIL  |main| src/formatDistance/test.ts > formatDistance > hours > about n hours
 FAIL  |main| src/formatDistance/test.ts > formatDistance > days > 1 day
 FAIL  |main| src/formatDistance/test.ts > formatDistance > days > n days
 FAIL  |main| src/formatDistance/test.ts > formatDistance > months > about 1 month
 FAIL  |main| src/formatDistance/test.ts > formatDistance > months > n months
 FAIL  |main| src/formatDistance/test.ts > formatDistance > years > about 1 year
 FAIL  |main| src/formatDistance/test.ts > formatDistance > years > over 1 year
 FAIL  |main| src/formatDistance/test.ts > formatDistance > years > almost n years
 FAIL  |main| src/formatDistance/test.ts > formatDistance > years > about n years
 FAIL  |main| src/formatDistance/test.ts > formatDistance > years > over n years
 FAIL  |main| src/formatDistance/test.ts > formatDistance > accepts timestamps
 FAIL  |main| src/formatDistance/test.ts > formatDistance > when the addSuffix option is true > adds a past suffix
 FAIL  |main| src/formatDistance/test.ts > formatDistance > when the addSuffix option is true > adds a future suffix
 FAIL  |main| src/formatDistance/test.ts > formatDistance > normalizes the dates
 FAIL  |main| src/formatDistance/test.ts > formatDistance > context > allows to specify the context
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > seconds > when no unit is set > 0 seconds
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > seconds > when no unit is set > 5 seconds
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > minutes > 1 minute
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > minutes > n minutes
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > hours > 1 hour
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > hours > n hours
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > days > 1 day
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > days > n days
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > months > 1 month
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > months > n months
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > years > returns `1 year` - see issue 2388
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > years > returns `2 years` - see issue 2388
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > years > 1 year
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > years > n years
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > second > 0 seconds
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > second > 5 seconds
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > second > 120 seconds
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > minute > 0 minutes
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > minute > 5 minutes
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > minute > 120 minutes
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > hour > 0 hours
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > hour > 5 hours
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > hour > 48 hours
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > day > 0 days
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > day > 5 days
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > day > 60 days
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > month > 0 months
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > month > 5 months
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > month > 12 months - see issue 2388
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > month > 24 months
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > year > 0 years
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the unit option is supplied > year > 5 years
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > accepts timestamps
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the addSuffix option is true > adds a past suffix
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the addSuffix option is true > adds a future suffix
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the roundingMethod option is supplied > default is "round"
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the roundingMethod option is supplied > "floor"
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the roundingMethod option is supplied > "ceil"
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the roundingMethod option is supplied > "round" (down)
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > when the roundingMethod option is supplied > "round" (up)
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > edge cases > detects unit correctly for short months
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > normalizes the dates
 FAIL  |main| src/formatDistanceStrict/test.ts > formatDistanceStrict > context > allows to specify the context
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > seconds > when the includeSeconds option is true > less than 5 seconds
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > seconds > when the includeSeconds option is true > less than 10 seconds
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > seconds > when the includeSeconds option is true > less than 20 seconds
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > seconds > when the includeSeconds option is true > half a minute
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > seconds > when the includeSeconds option is true > less than a minute
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > seconds > when the includeSeconds option is true > 1 minute
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > minutes > less than a minute
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > minutes > 1 minute
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > minutes > n minutes
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > hours > about 1 hour
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > hours > about n hours
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > days > 1 day
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > days > n days
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > months > about 1 month
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > months > n months
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > years > about 1 year
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > years > over 1 year
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > years > almost n years
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > years > about n years
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > years > over n years
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > accepts a timestamp
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > when the addSuffix option is true > adds a past suffix
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > when the addSuffix option is true > adds a future suffix
 FAIL  |main| src/formatDistanceToNow/test.ts > formatDistanceToNow > respects date extensions
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > seconds > when no unit is set > 0 seconds
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > seconds > when no unit is set > 5 seconds
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > minutes > 1 minute
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > minutes > n minutes
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > hours > 1 hour
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > hours > n hours
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > days > 1 day
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > days > n days
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > months > 1 month
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > months > n months
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > years > 1 year
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > years > n years
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > second > 0 seconds
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > second > 5 seconds
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > second > 120 seconds
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > minute > 0 minutes
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > minute > 5 minutes
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > minute > 120 minutes
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > hour > 0 hours
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > hour > 5 hours
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > hour > 48 hours
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > day > 0 days
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > day > 5 days
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > day > 60 days
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > month > 0 months
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > month > 5 months
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > month > 24 months
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > year > returns `1 year` - see issue 2388
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > year > returns `2 years` - see issue 2388
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > year > 0 years
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the unit option is supplied > year > 5 years
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > accepts timestamps
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the addSuffix option is true > adds a past suffix
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the addSuffix option is true > adds a future suffix
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the roundingMethod option is supplied > default is "round"
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the roundingMethod option is supplied > "floor"
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the roundingMethod option is supplied > "ceil"
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the roundingMethod option is supplied > "round" (down)
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > when the roundingMethod option is supplied > "round" (up)
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > edge cases > detects unit correctly for short months
 FAIL  |main| src/formatDistanceToNowStrict/test.ts > formatDistanceToNowStrict > respects date extensions
 FAIL  |main| src/formatDuration/test.ts > formatDuration > formats full duration
 FAIL  |main| src/formatDuration/test.ts > formatDuration > formats partial duration
 FAIL  |main| src/formatDuration/test.ts > formatDuration > allows to customize the format
 FAIL  |main| src/formatDuration/test.ts > formatDuration > does not include zeros by default
 FAIL  |main| src/formatDuration/test.ts > formatDuration > allows to include zeros
 FAIL  |main| src/formatDuration/test.ts > formatDuration > allows to customize the delimiter
 FAIL  |main| src/formatISODuration/test.ts > formatISODuration > Everything returns P1Y1M1DT1H1M1S (1 of everything)
 FAIL  |main| src/formatISODuration/test.ts > formatISODuration > Months returns P0Y1M0DT0H0M0S (1 month)
 FAIL  |main| src/formatRelative/test.ts > formatRelative > accepts a timestamp
 FAIL  |main| src/formatRelative/test.ts > formatRelative > before the last week
 FAIL  |main| src/formatRelative/test.ts > formatRelative > last week
 FAIL  |main| src/formatRelative/test.ts > formatRelative > yesterday
 FAIL  |main| src/formatRelative/test.ts > formatRelative > today
 FAIL  |main| src/formatRelative/test.ts > formatRelative > tomorrow
 FAIL  |main| src/formatRelative/test.ts > formatRelative > next week
 FAIL  |main| src/formatRelative/test.ts > formatRelative > after the next week
 FAIL  |main| src/formatRelative/test.ts > formatRelative > edge cases > handles dates before 100 AD
 FAIL  |main| src/formatRelative/test.ts > formatRelative > normalizes the dates
 FAIL  |main| src/formatRelative/test.ts > formatRelative > context > allows to specify the context
 DONE  |main| src/getDate/test.ts > getDate > returns the day of the month of the given date
 DONE  |main| src/getDate/test.ts > getDate > accepts a timestamp
 DONE  |main| src/getDate/test.ts > getDate > context > allows to specify the context
 DONE  |main| src/getDayOfYear/test.ts > getDayOfYear > returns the day of the year of the given date
 DONE  |main| src/getDayOfYear/test.ts > getDayOfYear > accepts a timestamp
 DONE  |main| src/getDayOfYear/test.ts > getDayOfYear > handles dates before 100 AD
 DONE  |main| src/getDayOfYear/test.ts > getDayOfYear > context > allows to specify the context
 DONE  |main| src/getDaysInMonth/test.ts > getDaysInMonth > returns the number of days in the month of the given date
 DONE  |main| src/getDaysInMonth/test.ts > getDaysInMonth > works for the February of a leap year
 DONE  |main| src/getDaysInMonth/test.ts > getDaysInMonth > handles dates before 100 AD
 DONE  |main| src/getDaysInMonth/test.ts > getDaysInMonth > context > allows to specify the context
 DONE  |main| src/getDecade/test.ts > getDecade > returns the decade for a the given date
 DONE  |main| src/getDecade/test.ts > getDecade > accepts a timestamp
 DONE  |main| src/getDecade/test.ts > getDecade > properly works with negative numbers
 DONE  |main| src/getDecade/test.ts > getDecade > context > allows to specify the context
 DONE  |main| src/getDefaultOptions/test.ts > getDefaultOptions > mutating the result does not affect functions that use options
 DONE  |main| src/getMonth/test.ts > getMonth > returns the month of the given date
 DONE  |main| src/getMonth/test.ts > getMonth > accepts a timestamp
 DONE  |main| src/getMonth/test.ts > getMonth > context > allows to specify the context
 DONE  |main| src/getQuarter/test.ts > getQuarter > returns the quarter of the given date
 DONE  |main| src/getQuarter/test.ts > getQuarter > accepts a timestamp
 DONE  |main| src/getQuarter/test.ts > getQuarter > context > allows to specify the context
 DONE  |main| src/getWeek/test.ts > getWeek > returns the local week of year of the given date
 DONE  |main| src/getWeek/test.ts > getWeek > accepts a timestamp
 DONE  |main| src/getWeek/test.ts > getWeek > handles dates before 100 AD
 DONE  |main| src/getWeek/test.ts > getWeek > properly works with negative numbers
 DONE  |main| src/getWeek/test.ts > getWeek > allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale
 DONE  |main| src/getWeek/test.ts > getWeek > `options.weekStartsOn` overwrites the first day of the week specified in locale
 DONE  |main| src/getWeek/test.ts > getWeek > context > allows to specify the context
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > returns the week of the month of the given date
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > edge cases > when the given day is the first of a month > returns the week of the month of the given date
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > edge cases > when the given day is the last of a month #1 > returns the week of the month of the given date
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > edge cases > when the given day is the last of a month #2 > returns the week of the month of the given date
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > allows to specify which day is the first day of the week
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > allows to specify which day is the first day of the week in locale
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > options.weekStartsOn overwrites the first day of the week specified in locale
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > accepts a timestamp
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > returns the week of the month of the given date, when the given date is sunday
 DONE  |main| src/getWeekOfMonth/test.ts > getWeekOfMonth > context > allows to specify the context
 DONE  |main| src/getWeekYear/test.ts > getWeekYear > returns the local week-numbering year of the given date
 DONE  |main| src/getWeekYear/test.ts > getWeekYear > accepts a timestamp
 DONE  |main| src/getWeekYear/test.ts > getWeekYear > handles dates before 100 AD
 DONE  |main| src/getWeekYear/test.ts > getWeekYear > allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale
 DONE  |main| src/getWeekYear/test.ts > getWeekYear > `options.weekStartsOn` overwrites the first day of the week specified in locale
 DONE  |main| src/getWeekYear/test.ts > getWeekYear > context > allows to specify the context
 DONE  |main| src/getWeeksInMonth/test.ts > getWeeksInMonth > returns the number of calendar weeks the month in the given date spans
 DONE  |main| src/getWeeksInMonth/test.ts > getWeeksInMonth > accepts timestamps
 DONE  |main| src/getWeeksInMonth/test.ts > getWeeksInMonth > context > allows to specify the context
 DONE  |main| src/getYear/test.ts > getYear > returns the year of the given date
 DONE  |main| src/getYear/test.ts > getYear > accepts a timestamp
 DONE  |main| src/getYear/test.ts > getYear > context > allows to specify the context
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > returns correct duration (1 of everything)
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > returns a negative duration if interval's start date is greater than its end date
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > returns correct duration for end of month start dates - issue 2611
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > returns correct duration for Feb 28 to Apr 30 interval - issue 2910
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 31 interval
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 30 interval
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 29 interval
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 28 interval
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > issue 2470 > returns correct duration for Feb 28 to Aug 27 interval
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > edge cases > issue 2470 > returns correct duration for Apr 30 to May 31 interval
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > normalizes the dates
 FAIL  |main| src/intervalToDuration/test.ts > intervalToDuration > context > allows to specify the context
 FAIL  |main| src/intlFormatDistance/test.ts > intlFormatDistance > with default values > works with single month > works with future with more than a month
 FAIL  |main| src/intlFormatDistance/test.ts > intlFormatDistance > with default values > works with single month > works with past with more than a month
 FAIL  |main| src/intlFormatDistance/test.ts > intlFormatDistance > with default values > works with single quarter > works with future with more than a quarter
 FAIL  |main| src/intlFormatDistance/test.ts > intlFormatDistance > with default values > works with single quarter > works with past with more than a quarter
 FAIL  |main| src/intlFormatDistance/test.ts > intlFormatDistance > with default values > works with single year > works with future with more that a year
 FAIL  |main| src/intlFormatDistance/test.ts > intlFormatDistance > with default values > works with single year > works with past with more than a year
 DONE  |main| src/isExists/test.ts > isValid > returns false if the given date is invalid
 DONE  |main| src/isFirstDayOfMonth/test.ts > isFirstDayOfMonth > returns true if the given date is the first day of a month
 DONE  |main| src/isFirstDayOfMonth/test.ts > isFirstDayOfMonth > accepts a timestamp
 DONE  |main| src/isFirstDayOfMonth/test.ts > isFirstDayOfMonth > context > allows to specify the context
 DONE  |main| src/isLastDayOfMonth/test.ts > isLastDayOfMonth > returns true if the given date is in the last day of month
 DONE  |main| src/isLastDayOfMonth/test.ts > isLastDayOfMonth > accepts a timestamp
 DONE  |main| src/isLastDayOfMonth/test.ts > isLastDayOfMonth > context > allows to specify the context
 DONE  |main| src/isLeapYear/test.ts > isLeapYear > context > allows to specify the context
 DONE  |main| src/isMatch/test.ts > isMatch > accepts a date & format with locale
 DONE  |main| src/isSameMonth/test.ts > isSameMonth > returns true if the given dates have the same month (and year)
 DONE  |main| src/isSameMonth/test.ts > isSameMonth > accepts a timestamp
 DONE  |main| src/isSameMonth/test.ts > isSameMonth > normalizes the dates
 DONE  |main| src/isSameMonth/test.ts > isSameMonth > context > allows to specify the context
 DONE  |main| src/isSameQuarter/test.ts > isSameQuarter > accepts a timestamp
 DONE  |main| src/isSameQuarter/test.ts > isSameQuarter > normalizes the dates
 DONE  |main| src/isSameQuarter/test.ts > isSameQuarter > context > allows to specify the context
 DONE  |main| src/isSameWeek/test.ts > isSameWeek > returns false if the given dates have different weeks
 DONE  |main| src/isSameWeek/test.ts > isSameWeek > context > allows to specify the context
 DONE  |main| src/isSameYear/test.ts > isSameYear > context > allows to specify the context
 DONE  |main| src/isThisMonth/test.ts > isThisMonth > accepts a timestamp
 DONE  |main| src/isThisMonth/test.ts > isThisMonth > context > allows to specify the context
 DONE  |main| src/isThisQuarter/test.ts > isThisQuarter > context > allows to specify the context
 DONE  |main| src/isThisWeek/test.ts > isThisWeek > context > allows specifying the context
 DONE  |main| src/isThisYear/test.ts > isThisYear > returns true if the given date and the current date have the same year
 DONE  |main| src/isThisYear/test.ts > isThisYear > accepts a timestamp
 DONE  |main| src/isThisYear/test.ts > isThisYear > context > allows to specify the context
 DONE  |main| src/isWeekend/test.ts > isWeekend > returns true if the given date is in a weekend
 DONE  |main| src/isWeekend/test.ts > isWeekend > accepts a timestamp
 DONE  |main| src/isWeekend/test.ts > isWeekend > context > allows to specify the context
 FAIL  |main| src/lastDayOfDecade/test.ts > lastDayOfDecade > returns the date with the time set to 00:00:00 and the date set to the last day of a decade
 FAIL  |main| src/lastDayOfDecade/test.ts > lastDayOfDecade > accepts a timestamp
 FAIL  |main| src/lastDayOfDecade/test.ts > lastDayOfDecade > properly works with negative numbers
 FAIL  |main| src/lastDayOfDecade/test.ts > lastDayOfDecade > context > allows to specify the context
 FAIL  |main| src/lastDayOfMonth/test.ts > lastDayOfMonth > returns the date with the time set to 00:00:00 and the date set to the last day of a month
 FAIL  |main| src/lastDayOfMonth/test.ts > lastDayOfMonth > accepts a timestamp
 FAIL  |main| src/lastDayOfMonth/test.ts > lastDayOfMonth > edge cases > works for the February of a leap year
 FAIL  |main| src/lastDayOfMonth/test.ts > lastDayOfMonth > edge cases > works for the February of a non-leap year
 FAIL  |main| src/lastDayOfMonth/test.ts > lastDayOfMonth > context > allows to specify the context
 DONE  |main| src/lastDayOfQuarter/test.ts > lastDayOfQuarter > returns the date with the time set to 00:00:00 and the date set to the last day of a quarter
 DONE  |main| src/lastDayOfQuarter/test.ts > lastDayOfQuarter > accepts a timestamp
 DONE  |main| src/lastDayOfQuarter/test.ts > lastDayOfQuarter > context > allows to specify the context
 DONE  |main| src/lastDayOfWeek/test.ts > lastDayOfWeek > returns the date with the time set to 00:00:00 and the date set to the last day of a week
 DONE  |main| src/lastDayOfWeek/test.ts > lastDayOfWeek > accepts a timestamp
 FAIL  |main| src/lightFormat/test.ts > lightFormat > accepts a timestamp
 FAIL  |main| src/lightFormat/test.ts > lightFormat > escapes characters between the single quote characters
 FAIL  |main| src/lightFormat/test.ts > lightFormat > accepts new line character
 FAIL  |main| src/lightFormat/test.ts > lightFormat > year > regular year > works as expected
 FAIL  |main| src/lightFormat/test.ts > lightFormat > year > regular year > 1 BC formats as 1
 FAIL  |main| src/lightFormat/test.ts > lightFormat > year > regular year > 2 BC formats as 2
 FAIL  |main| src/lightFormat/test.ts > lightFormat > month > formatting month
 FAIL  |main| src/lightFormat/test.ts > lightFormat > day > date
 DONE  |main| src/lastDayOfYear/test.ts > lastDayOfYear > returns the date with the time set to 00:00:00 and the date set to the last day of a year
 DONE  |main| src/lastDayOfYear/test.ts > lastDayOfYear > accepts a timestamp
 DONE  |main| src/lastDayOfYear/test.ts > lastDayOfYear > context > allows to specify the context
 DONE  |main| src/newDate/test.ts > newDate > create a date
 DONE  |main| src/newDate/test.ts > newDate > create a date with time
 DONE  |main| src/parse/test.ts > parse > escapes characters between the single quote characters
 DONE  |main| src/parse/test.ts > parse > accepts new line character
 DONE  |main| src/parse/test.ts > parse > era > abbreviated
 DONE  |main| src/parse/test.ts > parse > era > wide
 DONE  |main| src/parse/test.ts > parse > era > narrow
 DONE  |main| src/parse/test.ts > parse > era > with week-numbering year
 DONE  |main| src/parse/test.ts > parse > era > parses stand-alone BC
 DONE  |main| src/parse/test.ts > parse > era > parses stand-alone AD
 DONE  |main| src/parse/test.ts > parse > era > validation > throws an error when G is used after G
 DONE  |main| src/parse/test.ts > parse > calendar year > numeric
 DONE  |main| src/parse/test.ts > parse > calendar year > ordinal
 DONE  |main| src/parse/test.ts > parse > calendar year > two-digit numeric year > works as expected
 DONE  |main| src/parse/test.ts > parse > calendar year > two-digit numeric year > gets the 100 year range from `referenceDate`
 DONE  |main| src/parse/test.ts > parse > calendar year > three-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > calendar year > four-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > calendar year > specified amount of digits
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > numeric
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > ordinal
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > two-digit numeric year > works as expected
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > two-digit numeric year > gets the 100 year range from `referenceDate`
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > three-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > four-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > specified amount of digits
 DONE  |main| src/parse/test.ts > parse > local week-numbering year > allows to specify `weekStartsOn` and `firstWeekContainsDate` in options
 DONE  |main| src/parse/test.ts > parse > ISO week-numbering year > numeric
 DONE  |main| src/parse/test.ts > parse > ISO week-numbering year > two-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > ISO week-numbering year > three-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > ISO week-numbering year > four-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > ISO week-numbering year > specified amount of digits
 DONE  |main| src/parse/test.ts > parse > ISO week-numbering year > validation > throws an error when R is used after G
 DONE  |main| src/parse/test.ts > parse > extended year > numeric
 DONE  |main| src/parse/test.ts > parse > extended year > two-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > extended year > three-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > extended year > four-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > extended year > specified amount of digits
 DONE  |main| src/parse/test.ts > parse > extended year > validation > throws an error when u is used after G
 DONE  |main| src/parse/test.ts > parse > quarter with following year > first quarter
 DONE  |main| src/parse/test.ts > parse > quarter with following year > second quarter
 DONE  |main| src/parse/test.ts > parse > quarter with following year > third quarter
 DONE  |main| src/parse/test.ts > parse > quarter with following year > fourth quarter
 DONE  |main| src/parse/test.ts > parse > quarter (formatting) > numeric
 DONE  |main| src/parse/test.ts > parse > quarter (formatting) > ordinal
 DONE  |main| src/parse/test.ts > parse > quarter (formatting) > zero-padding
 DONE  |main| src/parse/test.ts > parse > quarter (formatting) > abbreviated
 DONE  |main| src/parse/test.ts > parse > quarter (formatting) > wide
 DONE  |main| src/parse/test.ts > parse > quarter (formatting) > narrow
 DONE  |main| src/parse/test.ts > parse > quarter (stand-alone) > numeric
 DONE  |main| src/parse/test.ts > parse > quarter (stand-alone) > ordinal
 DONE  |main| src/parse/test.ts > parse > quarter (stand-alone) > zero-padding
 DONE  |main| src/parse/test.ts > parse > quarter (stand-alone) > abbreviated
 DONE  |main| src/parse/test.ts > parse > quarter (stand-alone) > wide
 DONE  |main| src/parse/test.ts > parse > quarter (stand-alone) > narrow
 DONE  |main| src/parse/test.ts > parse > month (formatting) > numeric
 DONE  |main| src/parse/test.ts > parse > month (formatting) > ordinal
 DONE  |main| src/parse/test.ts > parse > month (formatting) > zero-padding
 DONE  |main| src/parse/test.ts > parse > month (formatting) > abbreviated
 DONE  |main| src/parse/test.ts > parse > month (formatting) > wide
 DONE  |main| src/parse/test.ts > parse > month (formatting) > narrow
 DONE  |main| src/parse/test.ts > parse > month (stand-alone) > numeric
 DONE  |main| src/parse/test.ts > parse > month (stand-alone) > ordinal
 DONE  |main| src/parse/test.ts > parse > month (stand-alone) > zero-padding
 DONE  |main| src/parse/test.ts > parse > month (stand-alone) > abbreviated
 DONE  |main| src/parse/test.ts > parse > month (stand-alone) > wide
 DONE  |main| src/parse/test.ts > parse > month (stand-alone) > narrow
 DONE  |main| src/parse/test.ts > parse > local week of year > numeric
 DONE  |main| src/parse/test.ts > parse > local week of year > ordinal
 DONE  |main| src/parse/test.ts > parse > local week of year > zero-padding
 DONE  |main| src/parse/test.ts > parse > local week of year > allows to specify `weekStartsOn` and `firstWeekContainsDate` in options
 DONE  |main| src/parse/test.ts > parse > ISO week of year > ordinal
 DONE  |main| src/parse/test.ts > parse > day of month > numeric
 DONE  |main| src/parse/test.ts > parse > day of month > ordinal
 DONE  |main| src/parse/test.ts > parse > day of month > zero-padding
 DONE  |main| src/parse/test.ts > parse > day of year > numeric
 DONE  |main| src/parse/test.ts > parse > day of year > ordinal
 DONE  |main| src/parse/test.ts > parse > day of year > two-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > day of year > three-digit zero-padding
 DONE  |main| src/parse/test.ts > parse > day of year > specified amount of digits
 DONE  |main| src/parse/test.ts > parse > day of year > validation > throws an error when D is used after E
 DONE  |main| src/parse/test.ts > parse > day of week (formatting) > abbreviated
 DONE  |main| src/parse/test.ts > parse > day of week (formatting) > wide
 DONE  |main| src/parse/test.ts > parse > day of week (formatting) > narrow
 DONE  |main| src/parse/test.ts > parse > day of week (formatting) > short
 DONE  |main| src/parse/test.ts > parse > day of week (formatting) > allows to specify which day is the first day of the week
 DONE  |main| src/parse/test.ts > parse > day of week (formatting) > validation > throws an error when E is used after E
 DONE  |main| src/parse/test.ts > parse > ISO day of week (formatting) > ordinal
 DONE  |main| src/parse/test.ts > parse > ISO day of week (formatting) > abbreviated
 DONE  |main| src/parse/test.ts > parse > ISO day of week (formatting) > wide
 DONE  |main| src/parse/test.ts > parse > ISO day of week (formatting) > narrow
 DONE  |main| src/parse/test.ts > parse > ISO day of week (formatting) > short
 DONE  |main| src/parse/test.ts > parse > ISO day of week (formatting) > validation > throws an error when i is used after E
 DONE  |main| src/parse/test.ts > parse > local day of week (formatting) > ordinal
 DONE  |main| src/parse/test.ts > parse > local day of week (formatting) > abbreviated
 DONE  |main| src/parse/test.ts > parse > local day of week (formatting) > wide
 DONE  |main| src/parse/test.ts > parse > local day of week (formatting) > narrow
 DONE  |main| src/parse/test.ts > parse > local day of week (formatting) > short
 DONE  |main| src/parse/test.ts > parse > local day of week (formatting) > allows to specify which day is the first day of the week
 DONE  |main| src/parse/test.ts > parse > local day of week (formatting) > validation > throws an error when e is used after E
 DONE  |main| src/parse/test.ts > parse > local day of week (stand-alone) > ordinal
 DONE  |main| src/parse/test.ts > parse > local day of week (stand-alone) > abbreviated
 DONE  |main| src/parse/test.ts > parse > local day of week (stand-alone) > wide
 DONE  |main| src/parse/test.ts > parse > local day of week (stand-alone) > narrow
 DONE  |main| src/parse/test.ts > parse > local day of week (stand-alone) > short
 DONE  |main| src/parse/test.ts > parse > local day of week (stand-alone) > allows to specify which day is the first day of the week
 DONE  |main| src/parse/test.ts > parse > local day of week (stand-alone) > validation > throws an error when c is used after E
 DONE  |main| src/parse/test.ts > parse > AM, PM > abbreviated
 DONE  |main| src/parse/test.ts > parse > AM, PM > 12 AM
 DONE  |main| src/parse/test.ts > parse > AM, PM > 12 PM
 DONE  |main| src/parse/test.ts > parse > AM, PM > wide
 DONE  |main| src/parse/test.ts > parse > AM, PM > narrow
 DONE  |main| src/parse/test.ts > parse > AM, PM > validation > throws an error when a is used after a
 DONE  |main| src/parse/test.ts > parse > AM, PM > validation > throws an error when a is used after b
 DONE  |main| src/parse/test.ts > parse > AM, PM > validation > throws an error when a is used after B
 DONE  |main| src/parse/test.ts > parse > AM, PM, noon, midnight > abbreviated
 DONE  |main| src/parse/test.ts > parse > AM, PM, noon, midnight > wide
 DONE  |main| src/parse/test.ts > parse > AM, PM, noon, midnight > narrow
 DONE  |main| src/parse/test.ts > parse > AM, PM, noon, midnight > validation > throws an error when b is used after a
 DONE  |main| src/parse/test.ts > parse > AM, PM, noon, midnight > validation > throws an error when b is used after b
 DONE  |main| src/parse/test.ts > parse > AM, PM, noon, midnight > validation > throws an error when b is used after B
 DONE  |main| src/parse/test.ts > parse > flexible day period > abbreviated
 DONE  |main| src/parse/test.ts > parse > flexible day period > wide
 DONE  |main| src/parse/test.ts > parse > flexible day period > narrow
 DONE  |main| src/parse/test.ts > parse > flexible day period > validation > throws an error when B is used after a
 DONE  |main| src/parse/test.ts > parse > flexible day period > validation > throws an error when B is used after b
 DONE  |main| src/parse/test.ts > parse > flexible day period > validation > throws an error when B is used after B
 DONE  |main| src/parse/test.ts > parse > hour [1-12] > ordinal
 DONE  |main| src/parse/test.ts > parse > hour [0-23] > ordinal
 DONE  |main| src/parse/test.ts > parse > hour [0-23] > validation > throws an error when H is used after a
 DONE  |main| src/parse/test.ts > parse > hour [0-23] > validation > throws an error when H is used after b
 DONE  |main| src/parse/test.ts > parse > hour [0-11] > ordinal
 DONE  |main| src/parse/test.ts > parse > hour [1-24] > ordinal
 DONE  |main| src/parse/test.ts > parse > hour [1-24] > validation > throws an error when k is used after a
 DONE  |main| src/parse/test.ts > parse > hour [1-24] > validation > throws an error when k is used after b
 DONE  |main| src/parse/test.ts > parse > minute > ordinal
 DONE  |main| src/parse/test.ts > parse > second > ordinal
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > X > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > X > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > X > hours
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XX > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XX > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXX > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXX > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXXX > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXXX > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXXX > hours, minutes and seconds
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXXXX > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXXXX > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/ Z) > XXXXX > hours, minutes and seconds
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > x > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > x > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > x > hours
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xx > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xx > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxx > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxx > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxxx > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxxx > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxxx > hours, minutes and seconds
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxxxx > hours and minutes
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxxxx > GMT
 DONE  |main| src/parse/test.ts > parse > timezone (ISO-8601 w/o Z) > xxxxx > hours, minutes and seconds
 DONE  |main| src/parse/test.ts > parse > common formats > ISO-8601
 DONE  |main| src/parse/test.ts > parse > common formats > ISO week-numbering date
 DONE  |main| src/parse/test.ts > parse > common formats > ISO day of year date
 DONE  |main| src/parse/test.ts > parse > common formats > Date.prototype.toString()
 DONE  |main| src/parse/test.ts > parse > common formats > Date.prototype.toISOString()
 DONE  |main| src/parse/test.ts > parse > common formats > middle-endian
 DONE  |main| src/parse/test.ts > parse > common formats > little-endian
 DONE  |main| src/parse/test.ts > parse > priority > units of lower priority don't overwrite values of higher priority
 DONE  |main| src/parse/test.ts > parse > with `options.strictValidation` = true > calendar year > works correctly for two-digit year zero
 DONE  |main| src/parse/test.ts > parse > with `options.strictValidation` = true > local week-numbering year > works correctly for two-digit year zero
 DONE  |main| src/parse/test.ts > parse > with `options.strictValidation` = true > day of month > returns `Invalid Date` for invalid day of the month
 DONE  |main| src/parse/test.ts > parse > with `options.strictValidation` = true > day of month > returns `Invalid Date` for 29th of February of non-leap year
 DONE  |main| src/parse/test.ts > parse > with `options.strictValidation` = true > day of month > parses 29th of February of leap year
 DONE  |main| src/parse/test.ts > parse > with `options.strictValidation` = true > day of year > parses 366th day of leap year
 DONE  |main| src/parse/test.ts > parse > custom locale > allows to pass a custom locale
 DONE  |main| src/parse/test.ts > parse > accepts a timestamp as `referenceDate`
 DONE  |main| src/parse/test.ts > parse > edge cases > parses normally if the remaining input is just whitespace
 DONE  |main| src/parse/test.ts > parse > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows D token if useAdditionalDayOfYearTokens is set to true
 DONE  |main| src/parse/test.ts > parse > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows DD token if useAdditionalDayOfYearTokens is set to true
 DONE  |main| src/parse/test.ts > parse > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows YY token if useAdditionalWeekYearTokens is set to true
 DONE  |main| src/parse/test.ts > parse > useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options > allows YYYY token if useAdditionalWeekYearTokens is set to true
 DONE  |main| src/parse/test.ts > parse > long format > short date
 DONE  |main| src/parse/test.ts > parse > long format > medium date
 DONE  |main| src/parse/test.ts > parse > long format > long date
 DONE  |main| src/parse/test.ts > parse > long format > full date
 DONE  |main| src/parse/test.ts > parse > long format > short time
 DONE  |main| src/parse/test.ts > parse > long format > medium time
 DONE  |main| src/parse/test.ts > parse > long format > short date + short time
 DONE  |main| src/parse/test.ts > parse > long format > medium date + short time
 DONE  |main| src/parse/test.ts > parse > long format > long date + short time
 DONE  |main| src/parse/test.ts > parse > long format > full date + short time
 DONE  |main| src/parse/test.ts > parse > long format > short date + short time
 DONE  |main| src/parse/test.ts > parse > long format > medium date + short time
 DONE  |main| src/parse/test.ts > parse > long format > long date + short time
 DONE  |main| src/parse/test.ts > parse > long format > full date + short time
 DONE  |main| src/parse/test.ts > parse > context > allows to specify the context
 DONE  |main| src/parse/test.ts > parse > time zones > properly parses dates around DST transitions
 DONE  |main| src/parseJSON/test.ts > parseJSON > parses a formatted new Date() back to UTC - issue 2149
 FAIL  |main| src/set/test.ts > set > sets all values
 FAIL  |main| src/set/test.ts > set > sets year
 FAIL  |main| src/set/test.ts > set > sets month
 FAIL  |main| src/set/test.ts > set > sets day of month
 FAIL  |main| src/set/test.ts > set > context > allows to specify the context
 FAIL  |main| src/set/test.ts > set > value overflow > months overflow into years
 FAIL  |main| src/set/test.ts > set > value overflow > days of months overflow into months
 FAIL  |main| src/set/test.ts > set > edge cases > sets January
 FAIL  |main| src/set/test.ts > set > edge cases > sets the last day of new month if the initial date was the last day of a longer month
 DONE  |main| src/setDate/test.ts > setDate > sets the day of the month
 DONE  |main| src/setDate/test.ts > setDate > accepts a timestamp
 DONE  |main| src/setDate/test.ts > setDate > context > allows to specify the context
 DONE  |main| src/setDay/test.ts > setDay > the day index is more than 6 > sets the day of the next week
 DONE  |main| src/setDay/test.ts > setDay > the day index is less than 0 > sets the day of the last week
 DONE  |main| src/setDay/test.ts > setDay > context > allows to specify the context
 DONE  |main| src/setDayOfYear/test.ts > setDayOfYear > sets the day of the year
 DONE  |main| src/setDayOfYear/test.ts > setDayOfYear > accepts a timestamp
 DONE  |main| src/setDayOfYear/test.ts > setDayOfYear > context > allows to specify the context
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > locale > format
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > locale > formatDistance
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > locale > formatDistanceStrict
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > locale > formatDuration
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > locale > formatRelative
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > locale > isMatch
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > locale > parse
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > weekStartsOn > eachWeekOfInterval
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > weekStartsOn > endOfWeek
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > weekStartsOn > getWeekOfMonth
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > weekStartsOn > getWeeksInMonth
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > weekStartsOn > lastDayOfWeek
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > weekStartsOn > startOfWeek
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > firstWeekContainsDate > format
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > firstWeekContainsDate > getWeek
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > firstWeekContainsDate > getWeekYear
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > firstWeekContainsDate > parse
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > firstWeekContainsDate > setWeek
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > firstWeekContainsDate > setWeekYear
 FAIL  |main| src/setDefaultOptions/test.ts > setDefaultOptions > firstWeekContainsDate > startOfWeekYear
 FAIL  |main| src/setMonth/test.ts > setMonth > sets the month
 FAIL  |main| src/setMonth/test.ts > setMonth > sets the last day of the month if the original date was the last day of a longer month
 FAIL  |main| src/setMonth/test.ts > setMonth > accepts a timestamp
 FAIL  |main| src/setMonth/test.ts > setMonth > handles dates before 100 AD
 FAIL  |main| src/setMonth/test.ts > setMonth > context > allows to specify the context
 FAIL  |main| src/setQuarter/test.ts > setQuarter > sets the quarter of the year
 FAIL  |main| src/setQuarter/test.ts > setQuarter > sets the last day of the month if the original date was the last day of a longer month
 FAIL  |main| src/setQuarter/test.ts > setQuarter > accepts a timestamp
 FAIL  |main| src/setQuarter/test.ts > setQuarter > handles dates before 100 AD
 FAIL  |main| src/setQuarter/test.ts > setQuarter > context > allows to specify the context
 FAIL  |main| src/setWeek/test.ts > setWeek > sets the local week
 FAIL  |main| src/setWeek/test.ts > setWeek > accepts a timestamp
 FAIL  |main| src/setWeek/test.ts > setWeek > handles dates before 100 AD
 FAIL  |main| src/setWeek/test.ts > setWeek > allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale
 FAIL  |main| src/setWeek/test.ts > setWeek > `options.weekStartsOn` overwrites the first day of the week specified in locale
 FAIL  |main| src/setWeek/test.ts > setWeek > context > allows to specify the context
 DONE  |main| src/setYear/test.ts > setYear > sets the year
 DONE  |main| src/setYear/test.ts > setYear > accepts a timestamp
 DONE  |main| src/setYear/test.ts > setYear > context > allows to specify the context
 FAIL  |main| src/setWeekYear/test.ts > setWeekYear > sets the local week-numbering year, saving the week and the day of the week
 FAIL  |main| src/setWeekYear/test.ts > setWeekYear > accepts a timestamp
 FAIL  |main| src/setWeekYear/test.ts > setWeekYear > sets local week-numbering years less than 100
 FAIL  |main| src/setWeekYear/test.ts > setWeekYear > handles dates before 100 AD
 FAIL  |main| src/setWeekYear/test.ts > setWeekYear > allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale
 FAIL  |main| src/setWeekYear/test.ts > setWeekYear > `options.weekStartsOn` overwrites the first day of the week specified in locale
 FAIL  |main| src/setWeekYear/test.ts > setWeekYear > context > allows to specify the context
 FAIL  |main| src/startOfDecade/test.ts > startOfDecade > returns the date with the time set to 00:00:00 and the date set to the first day of a year
 FAIL  |main| src/startOfDecade/test.ts > startOfDecade > accepts a timestamp
 FAIL  |main| src/startOfDecade/test.ts > startOfDecade > properly works with negative numbers
 FAIL  |main| src/startOfDecade/test.ts > startOfDecade > context > allows to specify the context
 DONE  |main| src/startOfMonth/test.ts > startOfMonth > returns the date with the time set to 00:00:00 and the date set to the first day of a month
 DONE  |main| src/startOfMonth/test.ts > startOfMonth > accepts a timestamp
 DONE  |main| src/startOfMonth/test.ts > startOfMonth > context > allows to specify the context
 DONE  |main| src/startOfQuarter/test.ts > startOfQuarter > returns the date with the time set to 00:00:00 and the date set to the first day of a quarter
 DONE  |main| src/startOfQuarter/test.ts > startOfQuarter > accepts a timestamp
 DONE  |main| src/startOfQuarter/test.ts > startOfQuarter > context > allows to specify the context
 FAIL  |main| src/startOfWeek/test.ts > startOfWeek > returns the date with the time set to 00:00:00 and the date set to the first day of a week
 FAIL  |main| src/startOfWeek/test.ts > startOfWeek > accepts a timestamp
 FAIL  |main| src/startOfWeek/test.ts > startOfWeek > edge cases > handles the week at the start of a year
 FAIL  |main| src/startOfWeek/test.ts > startOfWeek > context > allows to specify the context
 FAIL  |main| src/startOfWeekYear/test.ts > startOfWeekYear > returns the date with the time set to 00:00:00 and the date set to the first day of a week year
 FAIL  |main| src/startOfWeekYear/test.ts > startOfWeekYear > accepts a timestamp
 FAIL  |main| src/startOfWeekYear/test.ts > startOfWeekYear > handles dates before 100 AD
 FAIL  |main| src/startOfWeekYear/test.ts > startOfWeekYear > allows to specify `weekStartsOn` and `firstWeekContainsDate` in locale
 FAIL  |main| src/startOfWeekYear/test.ts > startOfWeekYear > `options.weekStartsOn` overwrites the first day of the week specified in locale
 FAIL  |main| src/startOfWeekYear/test.ts > startOfWeekYear > context > allows to specify the context
 FAIL  |main| src/startOfYear/test.ts > startOfYear > returns the date with the time set to 00:00:00 and the date set to the first day of a year
 FAIL  |main| src/startOfYear/test.ts > startOfYear > accepts a timestamp
 FAIL  |main| src/startOfYear/test.ts > startOfYear > handles dates before 100 AD
 FAIL  |main| src/startOfYear/test.ts > startOfYear > context > allows to specify the context
 FAIL  |main| src/sub/test.ts > sub > subtracts the duration from the given date
 FAIL  |main| src/sub/test.ts > sub > works well if the desired month has fewer days and the provided date is in the last day of a month
 FAIL  |main| src/sub/test.ts > sub > handles dates before 100 AD
 FAIL  |main| src/subBusinessDays/test.ts > subBusinessDays > subtract the given number of business days
 FAIL  |main| src/subBusinessDays/test.ts > subBusinessDays > handles negative amount
 FAIL  |main| src/subBusinessDays/test.ts > subBusinessDays > can handle a large number of business days
 FAIL  |main| src/subBusinessDays/test.ts > subBusinessDays > accepts a timestamp
 FAIL  |main| src/subBusinessDays/test.ts > subBusinessDays > context > allows to specify the context
 FAIL  |main| src/subMonths/test.ts > subMonths > subtracts the given number of months
 FAIL  |main| src/subMonths/test.ts > subMonths > works if the desired month has fewer days and the provided date is in the last day of a month
 FAIL  |main| src/subMonths/test.ts > subMonths > handles dates before 100 AD
 FAIL  |main| src/subMonths/test.ts > subMonths > context > allows to specify the context
 FAIL  |main| src/subQuarters/test.ts > subQuarters > works well if the desired month has fewer days and the provided date is in the last day of a month
 FAIL  |main| src/subQuarters/test.ts > subQuarters > handles dates before 100 AD
 FAIL  |main| src/subQuarters/test.ts > subQuarters > context > allows to specify the context
 FAIL  |main| src/subYears/test.ts > subYears > handles the leap years properly
 FAIL  |main| src/subYears/test.ts > subYears > handles dates before 100 AD
 FAIL  |main| src/subYears/test.ts > subYears > context > allows to specify the context
