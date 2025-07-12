import type { Combine, Contains } from "@ibnlanre/types";

import type { EpochDateFormat } from "../DateFormat";
import type { Separator } from "../Separator";
import type { PeriodBreak } from "../break/period-break";
import type { UnixTimestamp } from "../unix-timestamp";

type ParseDateHelper<
  Token extends string = "",
  Date extends string = "",
  Output extends Record<string, any> = {},
  Result extends string = ""
> = Token extends `${"+" | "-"}` | `${"+" | "-"}${number}:`
  ? Parser<Date, Output, Token>
  : PeriodBreak<Token, Output> extends infer Output
  ? Output extends Record<string, any>
    ? Parser<Date, Output, Result>
    : Output
  : never;

type Parser<
  Date extends string,
  Output extends Record<string, any> = {},
  Result extends string = ""
> = Date extends `${infer Token}${infer Date}`
  ? Token extends Separator
    ? ParseDateHelper<`${Result}${Token}`, Date, Output, Token>
    : Parser<Date, Output, `${Result}${Token}`>
  : Contains<Result, number> extends 1
  ? PeriodBreak<Result, Output> extends infer Output
    ? Output extends Record<string, any>
      ? UnixTimestamp<Output> extends infer Timestamp
        ? Timestamp extends number
          ? Combine<[EpochDateFormat, Output, { timestamp: Timestamp }]>
          : Output
        : never
      : never
    : never
  : `'${Result}' is not a valid date format`;

export type ParseDate<Date extends string> = Parser<Date>;
