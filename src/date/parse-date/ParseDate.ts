import type { Combine, Contains } from "@ibnlanre/types";

import type { PeriodBreak } from "../break";
import type { BaseDateFormat } from "../DateFormat";
import type { Separator } from "../Separator";

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
      ? Combine<[BaseDateFormat, Output]>
      : Output
    : never
  : Combine<[BaseDateFormat, Output]>;

export type ParseDate<Date extends string> = Parser<Date>;
type Output = ParseDate<"2022-12-31T12:56-1200">;
