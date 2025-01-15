import type { Replace, Stringify } from "@ibnlanre/types";

import type { AdvancedFormat, AdvancedFormatSymbols } from "./advanced-format";
import type { BuddhistEra, BuddhistEraSymbols } from "./BuddhistEra";
import type { DateFormat } from "./DateFormat";
import type {
  LocalizedFormat,
  LocalizedFormatSymbols,
} from "./LocalizedFormat";
import type { Sign } from "./Sign";
import type {
  SimpleFormat,
  SimpleFormatSymbols,
} from "./simple-format/SimpleFormat";
import type { ParseDate } from "./parse-date";

type Symbols = AdvancedFormatSymbols | BuddhistEraSymbols | SimpleFormatSymbols;

type Formatter<
  Result extends string,
  Date extends DateFormat
> = Result extends BuddhistEraSymbols
  ? BuddhistEra<Result, Date>
  : Result extends AdvancedFormatSymbols
  ? AdvancedFormat<Result, Date>
  : Result extends SimpleFormatSymbols
  ? SimpleFormat<Result, Date>
  : Result;

type FormatterHelper<
  Date extends DateFormat,
  Format extends string,
  Value extends string = "",
  Result extends string = "",
  Letter extends string = ""
> = Result extends LocalizedFormatSymbols
  ? FormatDateHelper<
      Date,
      Replace<Format, Result, LocalizedFormat<Result>>,
      Value,
      Result
    >
  : Result extends Symbols
  ? Formatter<Result, Date> extends infer Result
    ? FormatDateHelper<Date, Format, `${Value}${Stringify<Result>}${Letter}`>
    : never
  : FormatDateHelper<Date, Format, `${Value}${Result}${Letter}`>;

type FormatDateHelper<
  Date extends DateFormat,
  Format extends string,
  Value extends string = "",
  Result extends string = ""
> = Format extends `${infer Letter}${infer Format}`
  ? Letter extends Sign
    ? FormatDateHelper<Date, Format, Value, `${Result}${Letter}`>
    : FormatterHelper<Date, Format, Value, Result, Letter>
  : Format extends ""
  ? `${Value}${Formatter<Result, Date>}`
  : never;

export type FormatDate<
  Date extends string,
  Format extends string = ""
> = FormatDateHelper<ParseDate<Date>, Format>;
