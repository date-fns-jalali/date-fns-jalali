import type { ParserOptions, ParseFlags } from './types'

import coreSetFullYear from '../../_core/setFullYear/index'
import coreGetUTCMonth from '../../_core/getUTCMonth/index'
import coreGetUTCDate from '../../_core/getUTCDate/index'
import coreGetUTCFullYear from '../../_core/getUTCFullYear/index'
import coreNewDate from '../../_core/newDate/index'

const TIMEZONE_UNIT_PRIORITY = 10

export abstract class Setter {
  public abstract priority: number
  public subPriority = 0

  public validate(_utcDate: Date, _options?: ParserOptions): boolean {
    return true
  }

  public abstract set(
    utcDate: Date,
    flags: ParseFlags,
    options: ParserOptions
  ): Date | [Date, ParseFlags]
}

export class ValueSetter<TValue> extends Setter {
  constructor(
    private value: TValue,
    private validateValue: (
      utcDate: Date,
      value: TValue,
      options: ParserOptions
    ) => boolean,
    private setValue: (
      utcDate: Date,
      flags: ParseFlags,
      value: TValue,
      options: ParserOptions
    ) => Date | [Date, ParseFlags],
    public priority: number,
    subPriority?: number
  ) {
    super()
    if (subPriority) {
      this.subPriority = subPriority
    }
  }

  validate(utcDate: Date, options: ParserOptions): boolean {
    return this.validateValue(utcDate, this.value, options)
  }

  set(
    utcDate: Date,
    flags: ParseFlags,
    options: ParserOptions
  ): Date | [Date, ParseFlags] {
    return this.setValue(utcDate, flags, this.value, options)
  }
}

export class DateToSystemTimezoneSetter extends Setter {
  priority = TIMEZONE_UNIT_PRIORITY
  subPriority = -1
  set(date: Date, flags: ParseFlags): Date {
    if (flags.timestampIsSet) {
      return date
    }

    const convertedDate = coreNewDate(0)
    coreSetFullYear(
      convertedDate,
      coreGetUTCFullYear(date),
      coreGetUTCMonth(date),
      coreGetUTCDate(date)
    )
    convertedDate.setHours(
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
      date.getUTCMilliseconds()
    )
    return convertedDate
  }
}
