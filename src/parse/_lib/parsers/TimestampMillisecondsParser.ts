import type { ParseResult, ParseFlags } from '../types'
import { Parser } from '../Parser'
import { parseAnyDigitsSigned } from '../utils'

import coreNewDate from '../../../_core/newDate/index'

export class TimestampMillisecondsParser extends Parser<number> {
  priority = 20

  parse(dateString: string): ParseResult<number> {
    return parseAnyDigitsSigned(dateString)
  }

  set(_date: Date, _flags: ParseFlags, value: number): [Date, ParseFlags] {
    return [coreNewDate(value), { timestampIsSet: true }]
  }

  incompatibleTokens = '*' as const
}
