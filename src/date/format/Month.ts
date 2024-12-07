import type { Get, Ordinal, ParseInt, Substring, TrimStart } from "@ibnlanre/types";

import type { DateFormat } from "../DateFormat";
import type { Months } from "../Months";

export type MonthFormatSymbols = "M" | "Mo" | "MM" | "MMM" | "MMMM";

export type MonthFormat<
  In extends string,
  Out extends DateFormat,
  Month extends string = Get<Out, "month">
> = In extends "M"
  ? TrimStart<Month>
  : In extends "Mo"
  ? Ordinal<ParseInt<Month>>
  : In extends "MM"
  ? Month
  : In extends "MMM"
  ? Substring<Get<Months, Month>, 0, 3>
  : In extends "MMMM"
  ? Get<Months, Month>
  : never;
