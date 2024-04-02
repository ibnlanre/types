import { Get, Ordinal, ParseInt, Stringify, Substring } from "@ibnlanre/types";
import { DateFormat } from "../DateFormat";
import { DayOfWeek } from "../day-of-week";
import { Days } from "../Days";

export type DayOfWeekFormatSymbols = "d" | "do" | "dd" | "ddd" | "dddd";

export type DayOfWeekFormat<
  In extends DayOfWeekFormatSymbols,
  Out extends DateFormat,
  Year extends string = Get<Out, "year">,
  Month extends string = Get<Out, "month">,
  Day extends string = Get<Out, "day">,
  DayOfTheWeek extends string = Stringify<DayOfWeek<Year, Month, Day>>
> = In extends "d"
  ? DayOfTheWeek
  : In extends "do"
  ? Ordinal<ParseInt<DayOfTheWeek>>
  : In extends "dd"
  ? Substring<Get<Days, DayOfTheWeek>, 0, 2>
  : In extends "ddd"
  ? Substring<Get<Days, DayOfTheWeek>, 0, 3>
  : In extends "dddd"
  ? Get<Days, DayOfTheWeek>
  : never;
