import type { Localize, LocalizeFn, QuarterIndex } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['ق', 'ب'] as const,
  abbreviated: ['ق.ه.', 'ب.ه.'] as const,
  wide: ['قبل از هجرت', 'بعد از هجرت'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['س‌م1', 'س‌م2', 'س‌م3', 'س‌م4'] as const,
  wide: ['سه‌ماهه 1', 'سه‌ماهه 2', 'سه‌ماهه 3', 'سه‌ماهه 4'] as const,
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: [
    'فر',
    'ار',
    'خر',
    'تی',
    'مر',
    'شه',
    'مه',
    'آب',
    'آذ',
    'دی',
    'به',
    'اس',
  ] as const,
  abbreviated: [
    'فرو',
    'ارد',
    'خرد',
    'تیر',
    'مرد',
    'شهر',
    'مهر',
    'آبا',
    'آذر',
    'دی',
    'بهم',
    'اسف',
  ] as const,
  wide: [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ] as const,
}

const dayValues = {
  narrow: ['ی', 'د', 'س', 'چ', 'پ', 'ج', 'ش'] as const,
  short: ['1ش', '2ش', '3ش', '4ش', '5ش', 'ج', 'ش'] as const,
  abbreviated: [
    'یک‌شنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
    'شنبه',
  ] as const,
  wide: [
    'یک‌شنبه',
    'دوشنبه',
    'سه‌شنبه',
    'چهارشنبه',
    'پنج‌شنبه',
    'جمعه',
    'شنبه',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'ص',
    afternoon: 'ب.ظ.',
    evening: 'ع',
    night: 'ش',
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب',
  },
  wide: {
    am: 'قبل‌ازظهر',
    pm: 'بعدازظهر',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'ق',
    pm: 'ب',
    midnight: 'ن',
    noon: 'ظ',
    morning: 'ص',
    afternoon: 'ب.ظ.',
    evening: 'ع',
    night: 'ش',
  },
  abbreviated: {
    am: 'ق.ظ.',
    pm: 'ب.ظ.',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب',
  },
  wide: {
    am: 'قبل‌ازظهر',
    pm: 'بعدازظهر',
    midnight: 'نیمه‌شب',
    noon: 'ظهر',
    morning: 'صبح',
    afternoon: 'بعدازظهر',
    evening: 'عصر',
    night: 'شب',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)
  return number + '-ام'
}

const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as QuarterIndex,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
