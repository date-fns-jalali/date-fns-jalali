import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { parseAnyDigitsSigned } from '../utils'

import coreNewDate from '../../../_core/newDate/index'

export class TimestampSecondsParser extends Parser<number> {
  priority = 40

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString)
  }

  set(_date: Date, _flags: ParseFlags, value: number): [Date, ParseFlags] {
    return [coreNewDate(value * 1000), { timestampIsSet: true }]
  }

  incompatibleTokens = '*' as const
}
